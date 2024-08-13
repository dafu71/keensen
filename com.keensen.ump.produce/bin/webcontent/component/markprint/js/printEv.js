com.keensen.ump.produce.component.markprintMgr.prototype.initEvent = function() {

	var _this = this;

}

// 扫码
com.keensen.ump.produce.component.markprintMgr.prototype.onScan = function() {
	var obj = this.inputPanel.prodBatchNo;
	var prodBatchNo = obj.getValue();
	if (Ext.isEmpty(prodBatchNo)) {
		Ext.Msg.alert("系统提示", "请输入卷膜序号！");
		return;
	}
	this.inputPanel.remark.setValue('');
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.makprint.queryMarkPrint.biz.ext',
		jsonData : {
			"condition/prodBatchNo" : prodBatchNo
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.msg != 1) {
				Ext.Msg.alert("系统提示", result.msg);
			} else {
				var data = result.data[0];
				var dryWet2 = data.dryWet2;
				var dryWet = data.dryWet;
				var str = '';
				if (Ext.isEmpty(data.orderNo)) {
					str += "没有找到订单信息\n";
					this.inputPanel.remark.setValue(str);
					return;

				}

				this.inputPanel.orderNo.setValue(data.orderNo);
				this.inputPanel.prodSpecName.setValue(data.prodSpecName);
				this.inputPanel.prodSpecName2.setValue(data.prodSpecName2);
				this.inputPanel.dryWet.setValue(data.dryWet);
				this.inputPanel.dryWet2.setValue(data.dryWet2);

				if (Ext.isEmpty(data.url)) {
					str += "没有找到唛头图纸\n";
				}
				if (dryWet.indexOf(dryWet2)==-1) {
					str += "生产为" + dryWet2 + "膜,订单为" + dryWet + "膜\n";
				}
				if (!Ext.isEmpty(str)) {
					this.inputPanel.remark.setValue(str);
					return;
				}

				var f = document.getElementById('componentmarkprintForm');
				f.prodBatchNo.value = data.prodBatchNo;
				f.dryWet.value = data.dryWet2;
				f.url.value = data.url;
				f.prodSpecName.value = data.prodSpecName;
				f.prodSpecName2.value = data.prodSpecName2;
				f.code.value = data.code;
				var actionUrl = 'com.keensen.ump.produce.component.printMark.flow?time='
						+ Math.random() + '&token=' + Date.now();

				f.action = actionUrl;
				this.inputPanel.prodBatchNo.setValue('');
				f.submit();
			}
		}
	});
}

com.keensen.ump.produce.component.markprintMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.markprintMgr.prototype.onReset = function() {
	this.inputPanel.form.reset();
	this.inputPanel.prodBatchNo.focus(false, 100);
}