com.keensen.ump.produce.quality.mptest.oilMgr.prototype.initEvent = function() {
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

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {

				var reserve1 = this.inputWindow.reserve1.getValue();
				if (reserve1 == '回流液') {
					var reflux = this.inputWindow.reflux.getValue();
					if (Ext.isEmpty(reflux)) {
						Ext.Msg.alert("系统提示", "请添加回流液重量");
						return false;
					}
					this.inputWindow.weight.setValue(reflux);
				} else {
					var c41Reality = this.inputWindow.c41Reality.getValue();
					if (Ext.isEmpty(c41Reality)) {
						Ext.Msg.alert("系统提示", "请添加C41重量");
						return false;
					}
					this.inputWindow.weight.setValue(c41Reality);
				}
				
				/*
				 * var c41Reality = this.inputWindow.c41Reality.getValue(); var
				 * reflux = this.inputWindow.reflux.getValue(); if
				 * (!Ext.isEmpty(c41Reality) && !Ext.isEmpty(reflux)) { if
				 * (parseFloat(c41Reality) != 0 && parseFloat(reflux) != 0) {
				 * Ext.Msg.alert("系统提示", "不能同时添加C41和回流液重量"); return false; } }
				 * if (Ext.isEmpty(c41Reality) && Ext.isEmpty(reflux)) {
				 * Ext.Msg.alert("系统提示", "请添加C41或者回流液重量"); return false; } if
				 * (parseFloat(c41Reality) == 0 && parseFloat(reflux) == 0) {
				 * Ext.Msg.alert("系统提示", "请添加C41或者回流液重量"); return false; }
				 */
		}, this);

	this.editWindow3.activeItem.mon(this.editWindow3.activeItem, 'beforeSave',
			function() {

				var c41Reality = this.editWindow3.c41Reality.getValue();
				var reflux = this.editWindow3.reflux.getValue();
				var weight = this.editWindow3.weight.getValue();
				if (parseFloat(c41Reality) != 0 && parseFloat(reflux) != 0) {
					Ext.Msg.alert("系统提示", "不能同时添加C41和回流液重量");
					return false;
				}

				if (parseFloat(c41Reality) == 0 && parseFloat(reflux) == 0) {
					//Ext.Msg.alert("系统提示", "请添加C41或者回流液重量");
					//return false;
				}
				this.inputWindow.weight.setValue(weight);
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

				} else {
					var mptype = this.editWindow.mptype.getValue();
					var std = this.mptypeMap.get(mptype)[0];
					var std2 = this.mptypeMap.get(mptype)[1];
					var std3 = this.mptypeMap.get(mptype)[2];
					var str = '上限' + std3 + ',' + '下限' + std;
					this.editWindow.standard.setValue(str);
					var reserve1 = this.editWindow.reserve1.getValue();
		
					if (reserve1 == '回流液') {
						this.editWindow.batchNo.setVisible(false);
						this.editWindow.refluxNo.setVisible(true);
					}else{
						this.editWindow.batchNo.setVisible(true);
						this.editWindow.refluxNo.setVisible(false);
					}
				
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

				}else{
					
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

				}else{
					var reserve1 = this.editWindow3.reserve1.getValue();
					if (reserve1 == '回流液') {
						this.editWindow3.batchNo.setVisible(false);
						this.editWindow3.refluxNo.setVisible(true);
					}else{
						this.editWindow3.batchNo.setVisible(true);
						this.editWindow3.refluxNo.setVisible(false);
						this.editWindow3.reflux.setVisible(false);
					}
				}
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'beforeSave',
			function() {
				var ifok = this.editWindow2.ifok.getValue();
				var c41Plan = this.editWindow2.c41Plan.getValue();
				var c42Plan = this.editWindow2.c42Plan.getValue();
				if (ifok == 'N'
						&& (Ext.isEmpty(c41Plan) || Ext.isEmpty(c42Plan))) {
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

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onView = function() {

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

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	this.inputWindow.refluxNo.setVisible(false);
	this.inputWindow.batchNo.setVisible(true);
	this.inputWindow.reflux.setVisible(false);
	this.inputWindow.c41Reality.setVisible(true);
	this.inputWindow.c42Reality.setVisible(true);
	this.inputWindow.reserve1.setValue('新配液');

}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onAdd2 = function() {
	this.inputWindow.show();
	this.inputWindow.refluxNo.setVisible(true);
	this.inputWindow.batchNo.setVisible(false);
	this.inputWindow.reflux.setVisible(true);
	this.inputWindow.c41Reality.setVisible(false);
	this.inputWindow.c42Reality.setVisible(false);
	this.inputWindow.reserve1.setValue('回流液');
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.editWindow2.destroy();
	this.editWindow3.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onEdit = function() {
	this.opt = 'first';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onEdit2 = function() {
	this.opt = 'second';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onEdit3 = function() {
	this.opt = 'third';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '1000',
			namingsql : 'com.keensen.ump.produce.quality.mptest.queryOilListRecords',
			templateFilename : 'ks_mp_mptest_oil'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isEmpty(fname)) {
					Ext.Msg.alert("系统提示", ret.msg);
					return
				} else {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				}
			}

		},
		failure : function(resp, options) {
			var ret = Ext.decode(resp.responseText);
			// Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}
