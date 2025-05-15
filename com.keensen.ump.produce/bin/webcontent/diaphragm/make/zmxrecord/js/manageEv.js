com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.initEvent = function() {
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

	// 查询事件
	this.queryPanel2.mon(this.queryPanel2, 'query', function(form, vals) {
		var store = this.listPanel2.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel2.pagingToolbar.pageSize
					}
				});
	}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
				var dimoBatchNo = this.inputWindow.items.items[0].form
						.findField('entity/dimoBatchNo').getValue();
				dimoBatchNo = dimoBatchNo.substring(0, 9);
				var dimoBatchNo2 = this.createDimoBatchNo();
				if (dimoBatchNo != dimoBatchNo2) {
					Ext.Msg.alert("系统提示", "底膜批号不合法！");
					return false;
				}
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
				var dimoBatchNo = this.editWindow.items.items[0].form
						.findField('entity/dimoBatchNo').getValue();
				dimoBatchNo = dimoBatchNo.substring(0, 9);
				var dimoBatchNo2 = this.editWindow.items.items[0].form
						.findField('entity/dimoBatchNo2').getValue();
				dimoBatchNo2 = dimoBatchNo2.substring(0, 9);
				if (dimoBatchNo != dimoBatchNo2) {
					Ext.Msg.alert("系统提示", "底膜批号不合法！");
					return false;
				}
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.exportExcel = function() {
	
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '铸膜线生产记录',
				'com.keensen.ump.produce.diaphragm.make.make.queryZmx', '0,1');
	/*var _this = this;
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
			namingsql : 'com.keensen.ump.produce.diaphragm.make.make.queryZmx',
			templateFilename : 'ks_zm_zmx'
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
	})*/
}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onAdd = function() {
	if (!Ext.isEmpty(teamId)) {
		this.inputWindow.items.items[0].form.findField('entity/teamId')
				.setValue(teamId);
	}
	this.inputWindow.show();

}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.chooseWindow.destroy();
	this.defectZmWin.destroy();
	this.defectZmViewWindow.destroy();

}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.createDimoBatchNo = function() {

	var _this = this;
	var dimoBatchNo = _this.inputWindow.items.items[0].form
			.findField('entity/dimoBatchNo').getValue();
	var psf = _this.inputWindow.items.items[0].form.findField('psf').getValue();
	// ULP底膜-30;BW底膜-20；SW底膜-10；NF底膜-60
	var dimoType = _this.inputWindow.items.items[0].form
			.findField('entity/dimoType').getValue();
	var line = _this.inputWindow.items.items[0].form.findField('entity/line')
			.getValue();
	var productDt = _this.inputWindow.items.items[0].form
			.findField('entity/productDt').getValue();

	productDt = Ext.util.Format.date(productDt, "Y-m-d");

	if (!Ext.isEmpty(productDt) && !Ext.isEmpty(psf) && !Ext.isEmpty(dimoType)
			&& !Ext.isEmpty(line)) {
		dimoBatchNo = 'F';
		line = line == '铸膜A线' ? 'A' : line == '铸膜B线' ? 'B' : 'C';
		dimoBatchNo += line;
		dimoBatchNo += dimoType;
		/*if (dimoType == 'ULP底膜') {
			dimoBatchNo += '30';
		} else if (dimoType == 'BW底膜') {
			dimoBatchNo += '20';
		} else if (dimoType == 'SW底膜') {
			dimoBatchNo += '10';
		} else if (dimoType == 'NF底膜') {
			dimoBatchNo += '60';
		}*/
		dimoBatchNo += psf;
		var arr = productDt.split('-');
		var y = arr[0] - 2020;
		dimoBatchNo += y
		var m = arr[1];
		m = parseInt(m);
		mArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C'];
		dimoBatchNo += mArr[m];
		var d = arr[2];
		d = parseInt(d);
		if (d < 10) {
			dimoBatchNo += '0' + d
		} else {
			dimoBatchNo += d
		}
		return dimoBatchNo;

	} else {
		return '';
	}
};

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onChooseWindowShow = function(
		_this) {

	// _this.listPanel2.selModel.clearSelections();
	_this.listPanel2.store.removeAll();
	_this.queryPanel2.form.reset();
	_this.queryPanel2.fireEvent('query');
	_this.chooseWindow.show();
}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onChoose = function() {
	var A = this.listPanel2;

	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < records.length; i++) {
			var zmyBatchNo = records[i].get('batchNo');
			arr.push(zmyBatchNo);
		}
		if (this.inputWindow.hidden) {
			this.editWindow.items.items[0].form.findField('entity/zmyBatchNo')
					.setValue(arr.join(','));
		} else {
			this.inputWindow.items.items[0].form.findField('entity/zmyBatchNo')
					.setValue(arr.join(','));
		}
		this.chooseWindow.hide();
	}

};

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onPrint = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		var dimoType = r.data.dimoType;
		var dimoAmount = r.data.dimoAmount;
		var supName = r.data.supName;
		window
				.open('com.keensen.ump.produce.diaphragm.make.printZmTag.flow?condition/id='
						+ id);

	}

}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onAddZmDefect = function() {

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var dimoBatchNo = r.data.dimoBatchNo;
		var dimoRecordId = r.data.id;
		this.defectZmWin.inputPanel.tumoBatchNo.setValue(dimoBatchNo);
		this.defectZmWin.inputPanel.tumoRecordId.setValue(dimoRecordId);
		this.defectZmWin.show();
	}
}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onViewDefect = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var dimoBatchNo = r.data.dimoBatchNo;
		var store = this.defectZmViewWindow.listPanel.store;
		store.baseParams = {
			'condition/dmBatchNo' : Ext.isEmpty(dimoBatchNo)
					? "0"
					: dimoBatchNo
		};
		store.load();
		this.defectZmViewWindow.show();
	}

}

function defectZmView(dimoBatchNo) {
	Ext.getCmp('zm-defectzmviewwindow').dmBatchNo = dimoBatchNo;
	var store = Ext.getCmp('zm-defectzmviewwindow').listPanel.store;
	store.baseParams = {
		'condition/dmBatchNo' : Ext.isEmpty(dimoBatchNo) ? "0" : dimoBatchNo
	};
	store.load();
	Ext.getCmp('zm-defectzmviewwindow').show();

}