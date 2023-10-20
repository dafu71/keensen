com.zoomlion.hjsrm.srmclient.demo.batchDealMgr.prototype.initEvent = function() {
	this.editPanel.processinstids.setValue(processinstids);
	this.editPanel.workitemids.setValue(workitemids);
}

com.zoomlion.hjsrm.srmclient.demo.batchDealMgr.prototype.onClose = function() {

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