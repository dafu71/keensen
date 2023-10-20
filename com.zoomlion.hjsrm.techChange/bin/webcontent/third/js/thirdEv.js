com.zoomlion.hjsrm.techChange.Third.prototype.initEvent = function() {
	// 获取业务确认id
	var _this = this;
	// 生成流水号
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techChange.techChange.getConfirmId.biz.ext',
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var ret = result.ret;

						var attachmentParams = {
							relationId : ret,
							groupId : 'techchangeConfirm'
						}
						Ext.getCmp(_this.attachId)
								.setPostParams(attachmentParams);
						Ext.getCmp(_this.attachId).loadParams = attachmentParams;
						Ext.getCmp(_this.attachId).loadAttachmentRemote();
						_this.inputPanel.confirmId.setValue(ret);
					}
				},
				failure : function(resp, opts) {
					Ext.Msg.alert("系统提示", "系统错误，无法新增", function() {
								this.inputPanel.saveBtn.disabled();
							});

				}
			});
}

// 保存
com.zoomlion.hjsrm.techChange.Third.prototype.onSave = function() {
	// 校验
	if (!this.inputPanel.form.isValid()) {// 基础数据校验
		return;
	}

	// 提交
	var _this = this;
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在提交，请稍候!'
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techChange.techChange.saveConfirm.biz.ext',
				jsonData : {
					confirm : this.inputPanel.form.getValues(),
					workitemid : techChangeThird.workitemid,
					processinstid : techChangeThird.processinstid
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var list = Ext.getCmp(techChangeThird.listId);
						if (list) {// 重新加载待办任务列表
							list.store.reload();
						}
						(function() {
							closeMyTab();
						}).defer(200);
					
					} else {
						mk.hide();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
}

com.zoomlion.hjsrm.techChange.Third.prototype.onClose = function() {
	closeMyTab();
}

function closeMyTab() {
	var tabId = "workinglistid";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}