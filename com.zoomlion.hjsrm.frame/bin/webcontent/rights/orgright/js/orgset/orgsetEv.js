com.zoomlion.hjsrm.orgright.optorgMgr.prototype.initEvent = function() {
};
com.zoomlion.hjsrm.orgright.optorgMgr.prototype.onOrgSetAdd = function() {
	this.orgQuerySetPanel.addRow({
				orgid : '',
				orgname : '',
				orgcode : '',
				orgname : '',
				querytype : ''
			});
	//	设置焦点
	this.orgQuerySetPanel.startEditing(0,1);
}

com.zoomlion.hjsrm.orgright.optorgMgr.prototype.onOrgSetDel = function() {
	this.orgQuerySetPanel.onDel();
}

com.zoomlion.hjsrm.orgright.optorgMgr.prototype.onOrgSetSave = function() {
	var _this = this;
	var panel = this.orgQuerySetPanel;
	if (panel.isValid()) {
		var win = this.orgQuerySetWin;
		var records = this.orgQuerySetPanel.store.getRange();
		var operatorid = this.orgQuerySetPanel.store.operatorid;
		var vals = [];
		for (var i = 0; i < records.length; i++) {
			r = records[i];
			r.set('operatorid', operatorid);
			vals = vals.concat(r.data);
		}
		_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), { msg : "后台正在操作,请稍候..." });
		_this.requestMask.show();
		Ext.Ajax.request({
					method : "post",
					url : this.orgQuerySetPanel.saveUrl,
					jsonData : {
						datas : vals,
						operatorid : operatorid
					},
					success : function(response, action) {
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							_this.requestMask.hide();
							Ext.Msg.alert("系统提示", "保存成功!", function() {
										panel.store.commitChanges();
										win.hide();
									});
						}else{
							_this.requestMask.hide();
							Ext.Msg.alert("系统提示", "保存失败!")
						}
					}
				});
	}
}