com.keensen.ump.produce.quality.waterstdMgr.prototype.initEvent = function() {
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
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
				var aGpdUpLimit = this.editWindow.aGpdUpLimit.getValue();
				var aGpdLowLimit = this.editWindow.aGpdLowLimit.getValue();
				if (!Ext.isEmpty(aGpdUpLimit) && aGpdLowLimit > aGpdUpLimit) {
					Ext.Msg.alert("系统提示", '标准1产水量下限不能超出上限！');
					return false;
				}
				var aGpdCenter = this.editWindow.aGpdCenter.getValue();
				if (!Ext.isEmpty(aGpdCenter) && aGpdLowLimit > aGpdCenter) {
					Ext.Msg.alert("系统提示", '标准1产水量下限不能超出中心线！');
					return false;
				}
				if (!Ext.isEmpty(aGpdUpLimit) && !Ext.isEmpty(aGpdCenter)
						&& aGpdCenter > aGpdUpLimit) {
					Ext.Msg.alert("系统提示", '标准1产水量上限不能低于中心线！');
					return false;
				}
				
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
				var aGpdUpLimit = this.inputWindow.aGpdUpLimit.getValue();
				var aGpdLowLimit = this.inputWindow.aGpdLowLimit.getValue();
				if (!Ext.isEmpty(aGpdUpLimit) && aGpdLowLimit > aGpdUpLimit) {
					Ext.Msg.alert("系统提示", '标准1产水量下限不能超出上限！');
					return false;
				}
				var aGpdCenter = this.inputWindow.aGpdCenter.getValue();
				if (!Ext.isEmpty(aGpdCenter) && aGpdLowLimit > aGpdCenter) {
					Ext.Msg.alert("系统提示", '标准1产水量下限不能超出中心线！');
					return false;
				}
				if (!Ext.isEmpty(aGpdUpLimit) && !Ext.isEmpty(aGpdCenter)
						&& aGpdCenter > aGpdUpLimit) {
					Ext.Msg.alert("系统提示", '标准1产水量上限不能低于中心线！');
					return false;
				}
				

			}, this);
}



com.keensen.ump.produce.quality.waterstdMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.waterstdMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.waterstdMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.waterstdMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.waterstdMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.quality2.queryWaterStd',
			templateFilename : 'ks_quality_water_std'
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
