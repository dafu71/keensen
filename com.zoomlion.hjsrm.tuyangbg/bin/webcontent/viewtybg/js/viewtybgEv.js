com.zoomlion.hjsrm.tuyangbg.ViewtybgMgr.prototype.destroy = function() {
	this.viewPanel.destroy();
	this.listActionPanel.destroy();	
}
com.zoomlion.hjsrm.tuyangbg.ViewtybgMgr.prototype.initEvent = function() {
    this.viewPanel.getForm().reset();
	this.listActionPanel.store.removeAll();
	Ext.getCmp(this.mattachId).store.removeAll();	
	var attachmentParams = {
		relationId : processinstid,
		groupId : 'tybgfile'
	};
	
	var record = new Ext.data.Record({
				"processinstid" : processinstid,
				"dateTime" : new Date()
			});
	this.viewPanel.loadData(record);   
	Ext.getCmp(this.mattachId).setPostParams(attachmentParams);
	Ext.getCmp(this.mattachId).loadParams = attachmentParams;
	Ext.getCmp(this.mattachId).loadAttachmentRemote();	
    this.storeAction.load();
}
com.zoomlion.hjsrm.tuyangbg.ViewtybgMgr.prototype.onClose = function() {
	closeMyTab();
}
function closeMyTab() {
	//var tabId = "showprocess" + processinstid;
	
	var tabId = "showprocess";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}