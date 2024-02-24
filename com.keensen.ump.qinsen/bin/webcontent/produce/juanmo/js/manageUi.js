com.keensen.ump.qinsen.produce.juanmo.juanmoMgr = function() {
	this.initPanel = function() {
		this.lay = new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'juanmomgr',
					panels : [this.createPanel()]
				});
		return this.lay;
	}

	this.createPanel = function() {
		this.tabPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.createQuickPanel(),this.createSinglePanel(),this.createMultiPanel()]
				});
		return this.tabPanel;
	};

	this.createQuickPanel = function() {
		this.quickmgr = new com.keensen.ump.qinsen.produce.juanmo.quickMgr(this.lay);
		this.quickPanel = this.quickmgr.initPanel();
		this.quickmgr.initEvent();
		return this.quickPanel;
	};
	
	this.createSinglePanel = function() {
		this.singleMgr = new com.keensen.ump.qinsen.produce.juanmo.singleMgr(this.lay);
		this.singlePanel = this.singleMgr.initPanel();
		this.singleMgr.initEvent();
		return this.singlePanel;
	};
	
	this.createMultiPanel = function() {
		this.multiMgr = new com.keensen.ump.qinsen.produce.juanmo.multiMgr(this.lay);
		this.multiPanel = this.multiMgr.initPanel();
		this.multiMgr.initEvent();
		return this.multiPanel;
	};
}