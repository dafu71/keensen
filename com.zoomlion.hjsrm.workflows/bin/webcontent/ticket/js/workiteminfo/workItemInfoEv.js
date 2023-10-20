com.zoomlion.hjsrm.workflows.WorkItemInfo.prototype.initEvent = function() {
   	var rec = new Ext.data.Record({
				'userid' : this.params.userId,
				"workitemid" : this.params.workItemId
			})
	this.userInfoPanel.loadData(rec);
}

//销毁业务jsp中的窗体
com.zoomlion.hjsrm.workflows.WorkItemInfo.prototype.destroy = function() {
	
}

