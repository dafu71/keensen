com.zoomlion.hjsrm.kcgl.PurchaseplanMgr = function() {
	this.initPanel = function() {
		var headMgr = new com.zoomlion.hjsrm.kcgl.PlanheadMgr();
		headMgr.initPanel();
		headMgr.initEvent();		
		
		this.queryHeadPanel = headMgr.queryPanel;
		this.listHeadPanel = headMgr.listPanel;

		var listMgr = new com.zoomlion.hjsrm.kcgl.PlanlistMgr();
		listMgr.initPanel();
		listMgr.initEvent();		
		

		this.queryListPanel = listMgr.queryPanel;
		this.listListPanel = listMgr.listPanel;
		
		this.initFirstPanel();
		this.initSecondPanel();
		this.initMainPanel();
		
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'purchaseplanmgr',
					panels : [this.mainPanel]
				});
		
	}
	
	this.initFirstPanel = function() {
		this.firstPanel = new Ext.Panel({
					title : "计划导入",
					layout : 'border',
					items : [this.queryHeadPanel, this.listHeadPanel]
				})
	};
	
	this.initSecondPanel = function() {
		this.secondPanel = new Ext.Panel({
					title : "计划维护",
					layout : 'border',
					items : [this.queryListPanel, this.listListPanel]
				})
	};
	
	this.initMainPanel = function() {
		this.mainPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.firstPanel
					,this.secondPanel
					]
				});

	};
}

		