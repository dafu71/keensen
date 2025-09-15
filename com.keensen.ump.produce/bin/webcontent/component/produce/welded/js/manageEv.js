com.keensen.ump.produce.component.produce.WeldedMgr.prototype.initEvent = function() {

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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {

				var perNum = this.inputWindow.perNum.getValue();
				var produceNum = this.inputWindow.produceNum.getValue();
				if (parseFloat(produceNum) < parseFloat(perNum)) {
					Ext.Msg.alert("系统提示", "生产数量必须大于每卷数量!");
					return false;
				}
				var num = Math
						.ceil(parseFloat(produceNum) / parseFloat(perNum));

				this.inputWindow.reserve5.setValue(num);

			}, this);

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onDel = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	this.listPanel.onDel();
	if (B && B.length != 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onView = function() {
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

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '焊网记录',
			'com.keensen.ump.produce.component.produce.queryWelded');

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onPrintTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.id)
		}

		var f = document.getElementById('weldedprintsForm');

		f.ids.value = arr.join(',');
		var actionUrl = 'com.keensen.ump.produce.component.printWeldedTags.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onScan = function(
		flag) {

	if (flag == 1) {
		var batchNo = this.inputWindow.batchNo.getValue();
		var pipeSize = getSize(batchNo);
		this.inputWindow.pipeSize.setValue(pipeSize);
		return;
	}
	if (flag == 2) {
		var lightNetBatchNo = this.inputWindow.lightNetBatchNo.getValue();
		var lightNetType = getSize(lightNetBatchNo);
		this.inputWindow.lightNetType.setValue(lightNetType);
		return;
	}
	if (flag == 3) {
		var batchNo = this.editWindow.batchNo.getValue();
		var pipeSize = getSize(batchNo);
		this.editWindow.pipeSize.setValue(pipeSize);
		return;
	}
	if (flag == 4) {
		var lightNetBatchNo = this.editWindow.lightNetBatchNo.getValue();
		var lightNetType = getSize(lightNetBatchNo);
		this.editWindow.lightNetType.setValue(lightNetType);
		return;
	}

}

function getSize(str) {

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