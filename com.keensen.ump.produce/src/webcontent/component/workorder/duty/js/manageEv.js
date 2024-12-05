com.keensen.ump.produce.component.workorder.dutyMgr.prototype.initEvent = function() {
	var _this = this;

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var batchNoStr = this.queryPanel.form
				.findField("condition/batchNoStr2").getValue();
		var regEx = new RegExp("\\n", "gi");
		batchNoStr = batchNoStr.replace(regEx, ",");
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		var arr = [];
		arr = batchNoStr.split(',');
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}

		this.queryPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));

		var store = this.listPanel.store;
		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	this.arrangeWindow.activeItem.mon(this.arrangeWindow.activeItem, 'afterSave',
			function() {
		this.listPanel.store.reload();		
			}, this);

}

com.keensen.ump.produce.component.workorder.dutyMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.workorder.dutyMgr.prototype.onArrange = function() {

}

// com.keensen.ump.produce.component.workorder.dutyMgr.prototype.exportExcel =
// function() {
/*
 * var _this = this; var daochu = _this.queryPanel.getForm().getValues();
 * 
 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), { msg :
 * "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
 * "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
 * method : "post", jsonData : { 'map' : daochu, 'map/limited' : '2000',
 * namingsql : 'com.keensen.ump.produce.component.order.queryYxOrderTrace',
 * templateFilename : 'ks_component_yxordertrace_export' }, success :
 * function(resp) { var ret = Ext.decode(resp.responseText); if (ret.success) {
 * 
 * var fname = ret.fname; if (Ext.isIE) {
 * window.open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); } else {
 * window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" +
 * fname; } } }, callback : function() { _this.requestMask.hide() } })
 */
// }
com.keensen.ump.produce.component.workorder.dutyMgr.prototype.saveProductOrder = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.workorder.savePlanDay.biz.ext',
				jsonData : {
					"entity/id" : id,
					"entity/productOrder" : newValue
				},
				success : function(response, action) {
					// Ext.Msg.alert("系统提示", "库位修改成功！");
				}
			});
};

com.keensen.ump.produce.component.workorder.dutyMgr.prototype.saveCdmCode = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.workorder.savePlanDay.biz.ext',
				jsonData : {
					"entity/id" : id,
					"entity/cdmCode" : newValue
				},
				success : function(response, action) {
					// Ext.Msg.alert("系统提示", "库位修改成功！");
				}
			});
};

com.keensen.ump.produce.component.workorder.dutyMgr.prototype.onArrange = function() {
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	}
	var planDate0 = records[0].data.planDate;
	var ids = [];
	for (var i = 0; i < records.length; i++) {
		var id = records[i].data.id;
		var planDate = records[i].data.planDate;
		var cdmState = records[i].data.cdmState;
		if (cdmState != '0') {
			Ext.Msg.alert("系统提示", "请选择处理中的记录！")
			return false;
		}
		if (planDate0 != planDate) {
			Ext.Msg.alert("系统提示", "请选择生产日期为同一天的记录！")
			return false;
		}
		ids.push(id);
	}
	this.arrangeWindow.ids.setValue(ids.join(','));
	this.arrangeWindow.show();
	
}

com.keensen.ump.produce.component.workorder.dutyMgr.prototype.saveArrangeDate = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.workorder.savePlanDay.biz.ext',
				jsonData : {
					"entity/id" : id,
					"entity/arrangeDate" : newValue
				},
				success : function(response, action) {
					// Ext.Msg.alert("系统提示", "库位修改成功！");
				}
			});
};

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}
