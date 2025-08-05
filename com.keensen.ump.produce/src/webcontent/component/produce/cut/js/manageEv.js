com.keensen.ump.produce.component.produce.CutMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var store = this.listPanel.store;
		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.produce.component.produce.CutMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.component.produce.CutMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.produce.CutMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.produce.CutMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.produce.component.produce.CutMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '裁网记录',
			'com.keensen.ump.produce.component.produce.queryCut');

}

com.keensen.ump.produce.component.produce.CutMgr.prototype.onPrintTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var rec = C[0];

		var pkid = rec.data.id;
		var f = document.getElementById('cutprintForm');
		f.pkid.value = pkid;
		var actionUrl = 'com.keensen.ump.produce.component.printCutTag.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

}

com.keensen.ump.produce.component.produce.CutMgr.prototype.onScan = function(
		flag) {

	if (flag == 2) {
		var lightNetBatchNo = this.inputWindow.lightNetBatchNo.getValue();
		var lightNetType = getSize(lightNetBatchNo);
    	this.inputWindow.lightNetType.setValue(lightNetType);
		return;
	}

	if (flag == 4) {
		var lightNetBatchNo = this.editWindow.lightNetBatchNo.getValue();
		var lightNetType = getSize(lightNetBatchNo);
    	this.editWindow.lightNetType.setValue(lightNetType);
		return;
	}

}

function getSize(str){
	if(Ext.isEmpty(str)) return '';
	var arr = [];
	
	if (Ext.isEmpty(str))
		return '';

	var arr = [];

	var splitStr = ['/', '│', '|'];
	for (var i = 0; i < splitStr.length; i++) {
		if (str.indexOf(splitStr[i]) > -1) {
			arr = str.split(splitStr[i]);
			return arr[1];
		}
	}
	return '';
	
	
}