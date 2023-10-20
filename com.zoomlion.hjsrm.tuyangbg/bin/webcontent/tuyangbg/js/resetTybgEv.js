com.zoomlion.hjsrm.tuyangbg.ResetTybgMgr.prototype.destroy = function() {	
	this.resetTygbPanel.destroy();
    this.listActionPanel.destroy();

}

com.zoomlion.hjsrm.tuyangbg.ResetTybgMgr.prototype.initEvent = function() {	
	
    this.resetTybgPanel.getForm().reset();
	var attachmentParams = {
		relationId : processinstid,
		groupId : 'tybgfile'
	};
	Ext.getCmp(this.xattachId).setPostParams(attachmentParams);
	Ext.getCmp(this.xattachId).loadParams = attachmentParams;
	Ext.getCmp(this.xattachId).loadAttachmentRemote();
	var record = new Ext.data.Record({
				processinstid : processinstid,
				"dateTime" : new Date()
			});
	this.resetTybgPanel.loadData(record);
	this.storeAction.load();
}



com.zoomlion.hjsrm.tuyangbg.ResetTybgMgr.prototype.onClose = function() {
	closeMyTab();
}

/**
 * 提交保存流程
 */
com.zoomlion.hjsrm.tuyangbg.ResetTybgMgr.prototype.onSaveOk = function() {
	var _this = this;
	  if (!this.resetTybgPanel.form.isValid()) {
			return;
		}
    var pts = _this.resetTybgPanel.form.findField('pts').getValue();
	var form = _this.resetTybgPanel.form;
	var vals = _this.resetTybgPanel.getForm().getValues();
		var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
			mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.updateTybgNotice.biz.ext',
			jsonData : {
				tybgNotices : vals,
                pts:pts 
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "保存成功", function() {
								var list = Ext.getCmp(listId);
									if (list) {// 重新加载待办任务列表
										list.store.reload();
									}
									(function	() {
										closeMyTab();
									}).defer(200);
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});


};

function closeMyTab() {
	//var tabId = "workitem-" + workitemid;
	
	var tabId = "workinglistid"; 
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}
