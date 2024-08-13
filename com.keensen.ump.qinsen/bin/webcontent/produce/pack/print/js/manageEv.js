com.keensen.ump.qinsen.produce.markprintMgr.prototype.initEvent = function() {

	var _this = this;
	// 查询事件
	this.queryPanel2.mon(this.queryPanel2, 'query', function(form, vals) {
				var store = this.listPanel2.store;

				store.baseParams = this.queryPanel2.getForm().getValues();
				store.load({});
			}, this);

}

com.keensen.ump.qinsen.produce.markprintMgr.prototype.chooseLogo = function() {
	var _this = this;
	this.logoQueryWindow.show();
	this.queryPanel2.logoCodeStr.focus();
}

com.keensen.ump.qinsen.produce.markprintMgr.prototype.onSelect = function() {
	var A = this.listPanel2;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "请选择记录！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var logoId = r.data.recordId;
		var imgUrl = r.data.imgUrl;
		var logoUrl = '';
		logoUrl = r.data.flag == 'second' ? markprintrootUrl + imgUrl : imgUrl;
		this.inputPanel.img
				.update('<img src="'
						+ logoUrl
						+ '?ver='
						+ r.data.changeDt
						+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />');
		this.inputPanel.logoId.setValue(logoId);
		this.inputPanel.logoUrl.setValue(logoUrl);		

		this.logoQueryWindow.hide();
	}
}

com.keensen.ump.qinsen.produce.markprintMgr.prototype.dealBatches = function() {
	var _this = this;
	if (!this.inputPanel.form.isValid()) {
		return;
	}

	if (Ext.isEmpty(this.inputPanel.logoUrl.getValue())) {
		Ext.Msg.alert("系统提示", "请选择logo图片!");
		return;
	}
	var batchNoStr = this.inputPanel.batchNoStr2.getValue();
	var regEx = new RegExp("\\n", "gi");
	batchNoStr = batchNoStr.replace(regEx, ",");
	batchNoStr = batchNoStr.replaceAll('，', ',');
	//batchNoStr = batchNoStr.replaceAll(' ', '');
	var arr = [];
	arr = batchNoStr.split(',');
	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		arr2.push("'" + arr[i] + "'");
	}
	this.inputPanel.batchNoStr.setValue(arr.join(","));

	// 校验批次是否有记录
	var batchNoStr = this.inputPanel.batchNoStr.getValue();
	if (batchNoStr.length > 2000) {
		Ext.Msg.alert("系统提示", "元件数量过多，总字符数(含换行字符)不得超过2000，请删减部分再试");
		return;
	}
	var quantity = arr.length;
	this.inputPanel.quantity.setValue(quantity);
	// alert(this.inputPanel.batchNoStr.getValue());
	_this.requestMask = _this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.qinsen.pack.validBatchNos.biz.ext",
		method : "post",
		jsonData : {
			'batchNoStr' : batchNoStr
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.err != 0) {
					Ext.Msg.alert("系统提示", ret.msg);
					return;
				} else {
					var f = document.getElementById('logoprintForm');
					f.specName.value = _this.inputPanel.markSpecName.getValue();
					f.batchNoStr2.value = batchNoStr;
					f.batchNoStr.value = arr2.join(",");
					f.logoId.value = _this.inputPanel.logoId.getValue();
					f.logoUrl.value = _this.inputPanel.logoUrl.getValue();
					f.withStar.value = _this.inputPanel.withStar.getValue();
					f.txt.value = _this.inputPanel.txt.getValue();
					var actionUrl = 'com.keensen.ump.qinsen.printMarks.flow?time='
							+ Math.random() + '&token=' + Date.now();
					f.action = actionUrl;
					f.submit();
				}
			}
		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.qinsen.produce.markprintMgr.prototype.destroy = function() {
	this.logoQueryWindow.destroy();
	
}