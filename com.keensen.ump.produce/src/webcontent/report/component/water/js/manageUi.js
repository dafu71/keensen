com.keensen.ump.produce.report.component.WaterMgr = function() {

	this.initPanel = function() {
		this.lay = new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'componentreportwatermgr',
					panels : [this.createPanel()]
				});
		return this.lay;
	}

	this.createPanel = function() {
		this.tabPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.createDetailPanel(), this.createDayPanel(),
							this.createMonthPanel(), this.createYearPanel()]
				});
		return this.tabPanel;
	};

	this.createDayPanel = function() {
		this.dayMgr = new com.keensen.ump.produce.report.component.WaterDayMgr(this.lay);
		this.dayPanel = this.dayMgr.initPanel();
		this.dayMgr.initEvent();
		return this.dayPanel;
	};

	this.createMonthPanel = function() {
		this.monthMgr = new com.keensen.ump.produce.report.component.WaterMonthMgr(this.lay);
		this.monthPanel = this.monthMgr.initPanel();
		this.monthMgr.initEvent();
		return this.monthPanel;
	};

	this.createYearPanel = function() {
		this.yearMgr = new com.keensen.ump.produce.report.component.WaterYearMgr(this.lay);
		this.yearPanel = this.yearMgr.initPanel();
		this.yearMgr.initEvent();
		return this.yearPanel;
	};

	this.createDetailPanel = function() {
		this.detailMgr = new com.keensen.ump.produce.report.component.DetailMgr(this.lay);
		this.detailPanel = this.detailMgr.initPanel();
		this.detailMgr.initEvent();
		return this.detailPanel;
	};

}