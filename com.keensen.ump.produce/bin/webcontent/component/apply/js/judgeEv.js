com.keensen.ump.produce.component.ApplyJudgeMgr.prototype.initEvent = function() {

	var _this = this;

	
			
	

}

com.keensen.ump.produce.component.ApplyJudgeMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.ApplyJudgeMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.ApplyJudgeMgr.prototype.onSave = function() {

	var _this = this;
	var code = this.inputPanel.code.getValue();

	if (Ext.isEmpty(code)) {
		return;
	}

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.apply.saveStockConfirm.biz.ext',
		jsonData : {
			"entity/code" : code
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var msg = result.msg;

			if (msg != '1') {
				_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">' + msg + '</p>');
				_this.inputPanel.code.setValue('');
				
			} else {
				_this.inputPanel.msg.setValue('');
				_this.inputPanel.code.setValue('');
				_this.listPanel.store.reload();
			}
		}
	});
}



