com.zoomlion.hjsrm.srmclient.demo.DoFlowMgr.prototype.initEvent = function() {
	var record = new Ext.data.Record({
				processinstid : processinstid
			});
	this.editPanel.loadData(record);

	this.editPanel.mon(this.editPanel, 'aftersave', function() {
				var list = Ext.getCmp(listId);
				if (list) {// 重新加载待办任务列表
					list.store.reload();
				}
				(function	() {
								closeMyTab();
							}).defer(200);

			}, this);

}

com.zoomlion.hjsrm.srmclient.demo.DoFlowMgr.prototype.onSave = function() {
	this.editPanel.saveData();

}

com.zoomlion.hjsrm.srmclient.demo.DoFlowMgr.prototype.onClose = function() {

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
