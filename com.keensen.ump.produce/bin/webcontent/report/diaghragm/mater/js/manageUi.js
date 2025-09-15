com.keensen.ump.produce.report.diaghragm.MaterMgr = function() {

	this.initPanel = function() {
		this.lay = new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'diaghragmreportmatermgr',
					panels : [this.createPanel()]
				});
		return this.lay;
	}

	this.createPanel = function() {
		this.tabPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					// draggable: true,
					items : [this.createMainPanel(), this.createPvaPanel(),
							this.createWaterPanel(), this.createOilPanel(),
							this.createZmyPanel()]
				});
		return this.tabPanel;
	}

	this.createMainPanel = function() {

		this.mainMgr = new com.keensen.ump.produce.report.diaghragm.MaterMainMgr(this.lay);
		this.mainPanel = this.mainMgr.initPanel();
		this.mainMgr.initEvent();

		return this.mainPanel;
	}

	this.createPvaPanel = function() {

		this.pvaMgr = new com.keensen.ump.produce.report.diaghragm.MaterPvaMgr(this.lay);
		this.pvaPanel = this.pvaMgr.initPanel();
		this.pvaMgr.initEvent();

		return this.pvaPanel;
	}

	this.createWaterPanel = function() {

		this.waterMgr = new com.keensen.ump.produce.report.diaghragm.MaterWaterMgr(this.lay);
		this.waterPanel = this.waterMgr.initPanel();
		this.waterMgr.initEvent();

		return this.waterPanel;
	}

	this.createOilPanel = function() {

		this.oilMgr = new com.keensen.ump.produce.report.diaghragm.MaterOilMgr(this.lay);
		this.oilPanel = this.oilMgr.initPanel();
		this.oilMgr.initEvent();

		return this.oilPanel;
	}

	this.createZmyPanel = function() {

		this.zmyMgr = new com.keensen.ump.produce.report.diaghragm.MaterZmyMgr(this.lay);
		this.zmyPanel = this.zmyMgr.initPanel();
		this.zmyMgr.initEvent();

		return this.zmyPanel;
	}
}