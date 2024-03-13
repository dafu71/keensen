com.keensen.ump.qinsen.quality.applyMgr.prototype.initEvent = function() {

	var _this = this;

	this.inputPanel.mon(this.inputPanel, 'beforeSave', function() {
		var batchNoStr = Ext.getCmp('apply-batchNoStr').getValue();
		var regEx = new RegExp("\\n", "gi");
		batchNoStr = batchNoStr.replace(regEx, ",");
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		batchNoStr = batchNoStr.replaceAll("'", '');
		var arr = [];
		arr = batchNoStr.split(',');
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}
		const uniqueArray = Array.from(new Set(arr));
		const uniqueArray2 = Array.from(new Set(arr2));
		//var batchNoStr = uniqueArray.join(',');
		Ext.getCmp('apply-batchNoStr').setValue(uniqueArray.join('\n'));//回填一下
		this.inputPanel.batchNoStr2.setValue(uniqueArray2.join(','));
		this.inputPanel.batchNoStr.setValue("'" + uniqueArray.join(',') + "'");
			// alert(batchNoStr);
			// return false;
			// if (Ext.isEmpty(orderId)) {
			// Ext.Msg.alert("系统提示", "请输入合法的订单号！");
			// return false;
			// }

		}, this);

}

com.keensen.ump.qinsen.quality.applyMgr.prototype.onSave = function() {
	this.inputPanel.saveData();
}
