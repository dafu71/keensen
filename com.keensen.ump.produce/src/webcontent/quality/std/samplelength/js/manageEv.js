com.keensen.ump.produce.quality.SampleLengthMgr.prototype.initEvent = function() {
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
				var testLength = this.editWindow.testLength.getValue();
				var testLength2 = this.editWindow.testLength2.getValue();
				if (!Ext.isEmpty(testLength) && testLength > testLength2) {
					Ext.Msg.alert("系统提示", '送样长度下限不能超出上限！');
					return false;
				}
				
				
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
				var testLength = this.inputWindow.testLength.getValue();
				var testLength2 = this.inputWindow.testLength2.getValue();
				if (!Ext.isEmpty(testLength) && testLength > testLength2) {
					Ext.Msg.alert("系统提示", '送样长度下限不能超出上限！');
					return false;
				}
				
				

			}, this);
}



com.keensen.ump.produce.quality.SampleLengthMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.SampleLengthMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.SampleLengthMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.SampleLengthMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.SampleLengthMgr.prototype.exportExcel = function() {
	
	doQuerySqlAndExport(
				this,
				this.queryPanel,
				this.listPanel,
				'送样长度标准',
				'com.keensen.ump.produce.quality.quality3.querySampleLength',
				'0,1');
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
			namingsql : 'com.keensen.ump.qinsen.trialwaterstd.queryRecords4Export',
			templateFilename : 'ks_quality_water_trial_std'
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
