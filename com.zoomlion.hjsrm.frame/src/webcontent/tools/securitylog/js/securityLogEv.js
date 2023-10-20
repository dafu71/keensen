com.zoomlion.hjsrm.securitylog.SecuritylogMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
		Ext.apply(store.baseParams, vals);
        store.load();
	},this);
	
};