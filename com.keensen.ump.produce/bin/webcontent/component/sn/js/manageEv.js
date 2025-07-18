com.keensen.ump.produce.component.snMgr.prototype.initEvent = function() {

	var _this = this;
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

}

com.keensen.ump.produce.component.snMgr.prototype.onCreate = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	this.inputWindow.prefix.setValue('');
	this.inputWindow.prodSpecName.setValue('');
	this.inputWindow.useType.setValue('');
	this.inputWindow.digit.setValue('');
	this.inputWindow.rule.setValue('');
	this.inputWindow.digit.setVisible(false);
	this.inputWindow.rule.setVisible(false);
	var l = C.length;
	if (l > 0) {
		this.inputWindow.prefix.setValue(C[0].get('prefix'));
		this.inputWindow.useType.setValue(C[0].get('useType'));
		this.inputWindow.prodSpecName.setValue(C[0].get('prodSpecName'));
		this.inputWindow.digit.setValue(C[0].get('digit'));
		this.inputWindow.rule.setValue(C[0].get('rule'));
		if(C[0].get('useType') == '非常规'){
			this.inputWindow.digit.setVisible(true);
			this.inputWindow.rule.setVisible(true);
		}
	}
	this.inputWindow.show();
}

com.keensen.ump.produce.component.snMgr.prototype.onSave = function() {
	var _this = this;
	if (this.inputPanel.form.isValid()) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.sn.createSn.biz.ext",
			method : "post",
			jsonData : {
				'condition/num' : this.inputWindow.num.getValue(),
				'condition/prefix' : this.inputWindow.prefix.getValue(),
				'condition/useType' : this.inputWindow.useType.getValue(),
				'condition/prodSpecName' : this.inputWindow.prodSpecName.getValue(),
				'condition/digit' : this.inputWindow.digit.getValue(),
				'condition/rule' : this.inputWindow.rule.getValue()
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					_this.listPanel.store.reload();
					_this.inputPanel.form.reset();
					_this.inputWindow.hide();
					var fname = ret.fname;
					if (Ext.isEmpty(fname)) {
						Ext.Msg.alert("系统提示", ret.msg);
						return
					} else {
						if (Ext.isIE) {
							window
									.open('/default/deliverynote/seek/down4IE.jsp?fname='
											+ fname);
						} else {
							window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									+ fname;
						}
					}
				}

			},
			failure : function(resp, options) {
				//var ret = Ext.decode(resp.responseText);
				 Ext.MessageBox.alert('失败', '请求超时或网络故障' );
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}