com.keensen.ump.produce.quality.mptest.gyMgr.prototype.initEvent = function() {
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var step = data.step;
				if (step != this.opt) {
					Ext.Msg.alert("系统提示", "请选择待分析数据！", function() {
						_this.editWindow.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
							}
						});
						
					});

				}
			}, this);
			
	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterload',
			function(win, data) {
				var step = data.step;
				if (step != this.opt) {
					Ext.Msg.alert("系统提示", "请选择待调整数据！", function() {
						_this.editWindow2.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
							}
						});
						
					});

				}
			}, this);
			
	this.editWindow3.activeItem.mon(this.editWindow3.activeItem, 'afterload',
			function(win, data) {
				var step = data.step;
				if (step != this.opt) {
					Ext.Msg.alert("系统提示", "请选择待配料数据！", function() {
						_this.editWindow3.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
							}
						});
						
					});

				}
			}, this);
	
	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'beforeSave',
			function() {
				var ifok = this.editWindow2.ifok.getValue();
				var gyPlan = this.editWindow2.gyPlan
						.getValue();
				var roPlan = this.editWindow2.roPlan.getValue();
				var outPlan = this.editWindow2.outPlan.getValue();
				if (ifok == 'N' && Ext.isEmpty(outPlan)) {
					Ext.Msg.alert("系统提示", "请输入计划液体排放量！");
					return false;
				}
				
				if (ifok == 'N' && (Ext.isEmpty(gyPlan)
						|| Ext.isEmpty(roPlan))) {
					Ext.Msg.alert("系统提示", "请完整输入计划添加量！");
					return false;
				}

			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var step = cell.data.step;
				if (this.opt == 'first' && step != 'first') {
					Ext.Msg.alert("系统提示", "请选择待分析数据！");
					return false;
				} else if (this.opt == 'first' && step == 'first') {
					this.editWindow.show();
					this.editWindow.loadData(cell);
				}
				if (this.opt == 'second' && step != 'second') {
					Ext.Msg.alert("系统提示", "请选择待调整数据！");
					return false;
				} else if (this.opt == 'second' && step == 'second') {
					this.editWindow2.show();
					this.editWindow2.loadData(cell);
				}
				if (this.opt == 'third' && step != 'third') {
					Ext.Msg.alert("系统提示", "请选择待配料数据！");
					return false;
				} else if (this.opt == 'third' && step == 'third') {
					this.editWindow3.show();
					this.editWindow3.loadData(cell);
				}
			}, this);
}

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.onView = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.show();
			var store = this.listPanel2.store;
			if (Ext.isEmpty(A.data.id))
				return;
			store.load({
						params : {
							'condition/relationId' : A.data.id
						}
					});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.editWindow2.destroy();
	this.editWindow3.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.onEdit = function() {
	this.opt = 'first';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.onEdit2 = function() {
	this.opt = 'second';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.onEdit3 = function() {
	this.opt = 'third';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.gyMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.quality.mptest2.queryGyListRecords',
			templateFilename : 'ks_mp_mptest_gy'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}
