com.keensen.ump.produce.quality.poorMgr.prototype.initEvent = function() {
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
				var workshop = cell.get('workshop');
				if (workshop == '工业组件') {
					this.editWindow.form.findField("entity/invalidType")
							.setDisabled(false);
					this.editWindow.form.findField("entity/invalidType")
							.setVisible(true);
					this.editWindow.form.findField("entity/invalidType2")
							.setDisabled(true);
					this.editWindow.form.findField("entity/invalidType2")
							.setVisible(false);
				} else {
					this.editWindow.form.findField("entity/invalidType")
							.setDisabled(true);
					this.editWindow.form.findField("entity/invalidType")
							.setVisible(false);
					this.editWindow.form.findField("entity/invalidType2")
							.setDisabled(false);
					this.editWindow.form.findField("entity/invalidType2")
							.setVisible(true);

				}
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
			
	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'afterSave',
			function(gird, cell) {
		this.inputWindow.form.findField("entity/batchNo").setValue('');
			}, this);
}

com.keensen.ump.produce.quality.poorMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.poorMgr.prototype.onCalculate = function(
		) {
	var amount = this.inputWindow.form.findField("entity/amount").getValue();
	if (Ext.isEmpty(amount)) {
		Ext.Msg.alert("系统提示", "请输入不合格数量！");
		return;
	}

	var materSpecId = this.inputWindow.form.findField("entity/materSpecId")
			.getValue();
	if (Ext.isEmpty(materSpecId)) {
		Ext.Msg.alert("系统提示", "请选择元件型号！");
		return;
	}

	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.quality.poorrecord.queryPoorSum.biz.ext",
		method : "post",
		jsonData : {
			'condition/amount' : amount,
			'condition/materSpecId' : materSpecId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var data = ret.data;
				if (Ext.isEmpty(data) || Ext.isEmpty(data[0]) || data[0].length == null) {
					Ext.Msg.alert("系统提示", "没有查询到气检记录,请直接录入！")
				} else {

					var length = data[0].length;
					_this.inputWindow.form.findField("entity/length")
							.setValue(length);
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
};

com.keensen.ump.produce.quality.poorMgr.prototype.onCalculate2 = function(
		) {
	var amount = this.editWindow.form.findField("entity/amount").getValue();
	if (Ext.isEmpty(amount)) {
		Ext.Msg.alert("系统提示", "请输入不合格数量！");
		return;
	}

	var materSpecId = this.editWindow.form.findField("entity/materSpecId")
			.getValue();
	if (Ext.isEmpty(materSpecId)) {
		Ext.Msg.alert("系统提示", "请选择元件型号！");
		return;
	}

	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.quality.poorrecord.queryPoorSum.biz.ext",
		method : "post",
		jsonData : {
			'condition/amount' : amount,
			'condition/materSpecId' : materSpecId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (Ext.isEmpty(ret.data)) {
					Ext.Msg.alert("系统提示", "没有查询到气检记录！")
				} else {
					var data = ret.data;
					var length = data[0].length;
					_this.editWindow.form.findField("entity/length")
							.setValue(length);
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
};

com.keensen.ump.produce.quality.poorMgr.prototype.onAdd = function() {
	this.inputWindow.form.findField("entity/workshop").focus(false, 100);
	this.inputWindow.show();
	this.inputWindow.form.findField("entity/workshop").focus(false, 100);
}

com.keensen.ump.produce.quality.poorMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.poorMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};


com.keensen.ump.produce.quality.poorMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.quality.queryPoorRecord',
			templateFilename : 'ks_quality_poor'
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