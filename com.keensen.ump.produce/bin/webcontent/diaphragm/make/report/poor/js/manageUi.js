com.keensen.ump.produce.diaphragm.make.report.poorMgr = function() {
	this.initPanel = function() {
		this.lay = new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'makereportpoormgr',
					panels : [this.createPanel()]
				});
		return this.lay;
	}

	this.createPanel = function() {
		this.tabPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.createZmPanel(),this.createTmPanel()]
				});
		return this.tabPanel;
	};

	this.createZmPanel = function() {
		this.makereportzm = new com.keensen.ump.produce.diaphragm.make.report.zmMgr(this.lay);
		this.zmPanel = this.makereportzm.initPanel();
		this.makereportzm.initEvent();
		return this.zmPanel;
	};
	
	this.createTmPanel = function() {
		this.makereporttm = new com.keensen.ump.produce.diaphragm.make.report.tmMgr(this.lay);
		this.tmPanel = this.makereporttm.initPanel();
		this.makereporttm.initEvent();
		return this.tmPanel;
	};
}