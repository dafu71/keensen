com.keensen.ump.produce.quality.mptest.waterMgr.prototype.initEvent = function() {
	var _this = this;
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
				var firstId = data.firstId;
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

				} else {
					if (Ext.isEmpty(firstId)) {// 计划员排生产计划→工艺员根据生产的膜片型号出具水相液配料工单
						this.editWindow2.ifok.setValue('N');
						this.editWindow2.ifok.hide();
						this.editWindow2.displayfield1.hide();
						this.editWindow2.displayfield2.hide();
						this.editWindow2.displayfield3.hide();
						this.editWindow2.displayfield4.hide();
						this.editWindow2.displayfield5.hide();
						this.editWindow2.displayfield6.hide();
						this.editWindow2.displayfield7.hide();
						this.editWindow2.displayfield8.hide();
						this.editWindow2.displayfield9.hide();
						this.editWindow2.displayfield10.hide();
						this.editWindow2.displayfield11.hide();
						this.editWindow2.displayfield12.hide();
						this.editWindow2.displayfield13.hide();
						this.editWindow2.displayfield14.hide();
						this.editWindow2.displayfield15.hide();
						this.editWindow2.displayfield16.hide();
						this.editWindow2.displayfield17.hide();
						this.editWindow2.displayfield18.hide();
						this.editWindow2.displayfield19.hide();
						this.editWindow2.displayfield20.hide();
						this.editWindow2.displayfield21.hide();
						this.editWindow2.displayfield22.hide();
						this.editWindow2.displayfield23.hide();
						this.editWindow2.displayfield24.hide();
						this.editWindow2.displayfield25.hide();
						this.editWindow2.displayfield26.hide();
						this.editWindow2.displayfield27.hide();

					} else {
						this.editWindow2.ifok.show();
						this.editWindow2.ifok.reset();
						this.editWindow2.displayfield1.show();
						this.editWindow2.displayfield2.show();
						this.editWindow2.displayfield3.show();
						this.editWindow2.displayfield4.show();
						this.editWindow2.displayfield5.show();
						this.editWindow2.displayfield6.show();
						this.editWindow2.displayfield7.show();
						this.editWindow2.displayfield8.show();
						this.editWindow2.displayfield9.show();
						this.editWindow2.displayfield10.show();
						this.editWindow2.displayfield11.show();
						this.editWindow2.displayfield12.show();
						this.editWindow2.displayfield13.show();
						this.editWindow2.displayfield14.show();
						this.editWindow2.displayfield15.show();
						this.editWindow2.displayfield16.show();
						this.editWindow2.displayfield17.show();
						this.editWindow2.displayfield18.show();
						this.editWindow2.displayfield19.show();
						this.editWindow2.displayfield20.show();
						this.editWindow2.displayfield21.show();
						this.editWindow2.displayfield22.show();
						this.editWindow2.displayfield23.show();
						this.editWindow2.displayfield24.show();
						this.editWindow2.displayfield25.show();
						this.editWindow2.displayfield26.show();
						this.editWindow2.displayfield27.show();

					}
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
				var c21Plan = this.editWindow2.c21Plan.getValue();
				var c22Plan = this.editWindow2.c22Plan.getValue();
				var c23Plan = this.editWindow2.c23Plan.getValue();
				var c27Plan = this.editWindow2.c27Plan.getValue();
				var c28Plan = this.editWindow2.c28Plan.getValue();
				var c29Plan = this.editWindow2.c29Plan.getValue();
				var c30Plan = this.editWindow2.c30Plan.getValue();
				var roPlan = this.editWindow2.roPlan.getValue();
				if (ifok == 'N'
						&& (Ext.isEmpty(c21Plan) || Ext.isEmpty(c22Plan)
								|| Ext.isEmpty(c23Plan) || Ext.isEmpty(c27Plan)
								|| Ext.isEmpty(c28Plan) || Ext.isEmpty(c29Plan)
								|| Ext.isEmpty(c30Plan) || Ext.isEmpty(roPlan))) {
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

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onView = function() {

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

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onAdd2 = function() {
	this.inputWindow2.show();

}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.editWindow2.destroy();
	this.editWindow3.destroy();
	this.inputWindow.destroy();
	this.inputWindow2.destroy();
	this.viewWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onEdit = function() {
	this.opt = 'first';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onEdit2 = function() {
	this.opt = 'second';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onEdit3 = function() {
	this.opt = 'third';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.mptest5.queryWaterListRecords',
			templateFilename : 'ks_mp_mptest_water'
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