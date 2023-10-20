com.zoomlion.hjsrm.srmclient.ReadDealMgr.prototype.initEvent = function() {
	// 获取阅读工单表主键
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.readdealPkid.biz.ext',
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var readdealPkid = ret.readdealPkid;
				this.inputPanel.form.findField('readdeal/pkid')
						.setValue(readdealPkid);
				Ext.getCmp(this.attachId).setPostParams({
							relationId : readdealPkid,
							groupId : 'readdeal'
						});
			} else {
				Ext.Msg.alert('系统提示', '获取阅读工单表主键失败');
			}
		}
	}, this);
}

com.zoomlion.hjsrm.srmclient.ReadDealMgr.prototype.onSave = function() {

	var readdealPkid = this.inputPanel.form.findField('readdeal/pkid')
			.getValue();
	if (Ext.isEmpty(readdealPkid)) {
		Ext.Msg.alert('系统提示', '获取阅读工单表主键失败,不能保存!', function() {
					return;
				}, this);
	} else {
		if (this.inputPanel.form.isValid()) {

			input = this;

			this.inputPanel.form.submit({
						method : "POST",
						url : "com.zoomlion.hjsrm.srmclient.WorkflowClient.saveRead.biz.ext",
						waitTitle : "操作提示",
						waitMsg : "保存数据中",
						success : function(C, B) {
							var D = B.result;
							if (D.success) {
								Ext.MessageBox.alert("操作提示", "保存成功!",
										function() {
											// 刷新已阅读及待阅读列表
											if (Ext.getCmp(listId)) {
												Ext.getCmp(listId).store
														.reload();
											}
											if (Ext.getCmp(listId2)) {
												Ext.getCmp(listId2).store
														.reload();
											}

											input.onClose();
										})

							} else {

							}
						},
						failure : function(C, B) {
							if (B.result.exception) {
								var A, E;
								if (B.result.exception.extype == "biz") {
									E = "【" + B.result.exception.message + "】";
									A = Ext.Msg.WARNING;
								} else {
									A = Ext.Msg.ERROR;
									E = "【系统发生异常！请与管理员联系】";
								}
								Ext.Msg.show({
											width : 350,
											title : "操作提示",
											msg : E,
											icon : A,
											buttons : Ext.Msg.OK
										})
							}
						}
					})

		} 
	}


}

// 关闭自身
com.zoomlion.hjsrm.srmclient.ReadDealMgr.prototype.onClose = function() {

	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {
				if (item.id == 'menuupdateread') {
					spac.remove(item);
				}
			});
}