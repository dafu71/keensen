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
	})
}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.onAdd = function() {
	if (!Ext.isEmpty(teamId)) {
		this.inputWindow.items.items[0].form.findField('entity/teamId')
				.setValue(teamId);
	}
	this.inputWindow.show();

}

com.keensen.ump.produce.diaphragm.make.zmxMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
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
		line = line == '铸膜A线' ? 'A' : 'B';
		dimoBatchNo += line;
		if (dimoType == 'ULP底膜') {
			dimoBatchNo += '30';
		} else if (dimoType == 'BW底膜') {
			dimoBatchNo += '20';
		} else if (dimoType == 'SW底膜') {
			dimoBatchNo += '10';
		} else if (dimoType == 'NF底膜') {
			dimoBatchNo += '60';
		}
		dimoBatchNo += psf;
		var arr = productDt.split('-');
		var y = arr[0] - 2020;
		dimoBatchNo += y
		var m = arr[1];
		m = parseInt(m);
		mArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C'];
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

