com.zoomlion.hjsrm.srmclient.WorkLogMgr.prototype.initEvent = function() {
	
	var record = new Ext.data.Record({"processinstid":processinstid});	
	this.logViewPanel.loadData(record);
	
	
}