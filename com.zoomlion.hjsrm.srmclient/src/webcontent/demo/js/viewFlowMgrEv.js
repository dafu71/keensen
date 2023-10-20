com.zoomlion.hjsrm.srmclient.demo.ViewFlowMgr.prototype.initEvent = function() {
	var record = new Ext.data.Record({
				processinstid : processinstid
			});
	this.viewpanel.loadData(record);
}

com.zoomlion.hjsrm.srmclient.demo.ViewFlowMgr.prototype.onClose = function(){
	
	var tabId = "showprocess";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});
}