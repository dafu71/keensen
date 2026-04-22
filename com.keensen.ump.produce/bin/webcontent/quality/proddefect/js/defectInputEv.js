com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.initEvent = function() {

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

	this.queryPanel4EditDefect.mon(this.queryPanel4EditDefect, 'query',
			function(form, vals) {
				var store = this.listPanel4EditDefect.store;
				store.baseParams = vals;
				store.load({});
			}, this);

	this.queryPanel4ChooseJm.mon(this.queryPanel4ChooseJm, 'query', function(
			form, vals) {
		var store = this.listPanel4ChooseJm.store;
		store.baseParams = vals;
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.listPanel4ChooseJm.pagingToolbar.pageSize
			}
		});
	}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				if (this.opt == 'edit') {
					this.editWindow.show();
					this.editWindow.loadData(cell);
				}

				if (this.opt == 'copy') {
					this.copyWindow.show();
					this.copyWindow.loadData(cell);
				}
			}, this);

}

com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.onAdd = function() {

	this.chooseJmWindow.show();
}

com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.onDel = function() {

	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.destroy = function() {

	this.editWindow.destroy();
	this.inputWindow.destroy();

}

com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '元件不良记录',
			'com.keensen.ump.produce.quality.defect.queryProdDefectList');
}

com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.onSingleSelect = function() {

	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}

com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.onChooseOk = function() {

	var A = this.listPanel4ChooseJm;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var recordId = records[0].data.recordId;
		this.editDefectWindow.recordId = recordId;
		this.listPanel4EditDefect.store.reload();
		this.editDefectWindow.show();
		this.chooseJmWindow.hide();
	}
}

com.keensen.ump.produce.quality.ProddefectInputMgr.prototype.onSave = function() {

	var _this = this;
	var A = this.listPanel4EditDefect;
	var records = A.store.getRange();

	var recordId = this.editDefectWindow.recordId;
	var entitys = [];
	for (var i = 0; i < records.length; i++) {
		var r = records[i];
		var defectId = r.get('defectId');
		var amount = r.get('amount');
		var belongType = r.get('belongType');
		var tache = r.get('tache');
		var dealType = r.get('dealType');

		if (!Ext.isEmpty(amount) && !Ext.isEmpty(belongType)) {
			var d = {
				'defectId' : defectId,
				'amount' : amount,
				'belongType' : belongType,
				'tache' : tache,
				'dealType' : dealType,
				'juanmoBatchId' : recordId
			}
			entitys.push(d)
		}

	}

	if (entitys.length > 0) {
		Ext.Ajax.request({
			method : "post",
			url : 'com.keensen.ump.produce.quality.defect.saveComponentDefectBatch.biz.ext',
			jsonData : {
				'entitys' : entitys
			},
			success : function(F) {
				var B = Ext.decode(F.responseText);
				if (B.success) {
					Ext.MessageBox.alert("操作提示", "保存成功!", function() {

								_this.listPanel.store.reload();
								_this.listPanel4EditDefect.store.removeAll();
								_this.editDefectWindow.recordId = '';
								_this.editDefectWindow.hide();
							})
				}
			},
			failure : function(C, B) {
				if (B.result.exception) {
					var A, E;
					if (B.result.exception.extype == "biz") {
						E = "【" + B.result.exception.message + "】";
						A = Ext.Msg.WARNING;
					} else {
						A = Ext.Msg.ERROR;
						E = "【系统发生异常！请与管理员联系】";
					}
					Ext.Msg.show({
								width : 350,
								title : "操作提示",
								msg : E,
								icon : A,
								buttons : Ext.Msg.OK
							})
				}
			}
		})
	}

}