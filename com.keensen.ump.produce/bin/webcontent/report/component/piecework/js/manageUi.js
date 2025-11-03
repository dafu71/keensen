com.keensen.ump.produce.report.component.PieceworkMgr = function() {

	this.initPanel = function() {
		this.lay = new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'pieceworkmgr',
					panels : [this.createPanel()]
				});
		return this.lay;
	}

	this.createPanel = function() {
		this.tabPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					// draggable: true,
					items : [this.createCdmPanel(), this.createJmPanel(),this.createHHJmPanel(),
							this.createQjPanel(),this.createRsPanel(),this.createTrimPanel()]
				});
		return this.tabPanel;
	};

	this.createCdmPanel = function() {
		this.cdmMgr = new com.keensen.ump.produce.report.component.CdmMgr(this.lay);
		this.cdmPanel = this.cdmMgr.initPanel();
		this.cdmMgr.initEvent();
		return this.cdmPanel;
	};

	this.createJmPanel = function() {
		this.jmMgr = new com.keensen.ump.produce.report.component.JmMgr(this.lay);
		this.jmPanel = this.jmMgr.initPanel();
		this.jmMgr.initEvent();
		return this.jmPanel;
	};

	this.createQjPanel = function() {
		this.qjMgr = new com.keensen.ump.produce.report.component.QjMgr(this.lay);
		this.qjPanel = this.qjMgr.initPanel();
		this.qjMgr.initEvent();
		return this.qjPanel;
	};

	this.createRsPanel = function() {
		this.rsMgr = new com.keensen.ump.produce.report.component.RsMgr(this.lay);
		this.rsPanel = this.rsMgr.initPanel();
		this.rsMgr.initEvent();
		return this.rsPanel;
	};

	this.createHHJmPanel = function() {
		this.hhjmMgr = new com.keensen.ump.produce.report.component.HHJmMgr(this.lay);
		this.hhjmPanel = this.hhjmMgr.initPanel();
		this.hhjmMgr.initEvent();
		return this.hhjmPanel;
	};
	
	this.createTrimPanel = function() {
		this.trimMgr = new com.keensen.ump.produce.report.component.TrimMgr(this.lay);
		this.trimPanel = this.trimMgr.initPanel();
		this.trimMgr.initEvent();
		return this.trimPanel;
	};
}