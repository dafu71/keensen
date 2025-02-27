com.keensen.ump.produce.report.component.ProductonMgr = function() {

	this.initPanel = function() {
		this.lay = new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'componentreportproductonmgr',
					panels : [this.createPanel()]
				});
		return this.lay;
	}

	this.createPanel = function() {
		this.tabPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.createDayPanel(), this.createMonthPanel(),
							this.createYearPanel(), this.createRepairPanel()]
				});
		return this.tabPanel;
	};

	this.createDayPanel = function() {
		this.dayMgr = new com.keensen.ump.produce.report.component.DayMgr(this.lay);
		this.dayPanel = this.dayMgr.initPanel();
		this.dayMgr.initEvent();
		return this.dayPanel;
	};

	this.createMonthPanel = function() {
		this.monthMgr = new com.keensen.ump.produce.report.component.MonthMgr(this.lay);
		this.monthPanel = this.monthMgr.initPanel();
		this.monthMgr.initEvent();
		return this.monthPanel;
	};

	this.createYearPanel = function() {
		this.yearMgr = new com.keensen.ump.produce.report.component.YearMgr(this.lay);
		this.yearPanel = this.yearMgr.initPanel();
		this.yearMgr.initEvent();
		return this.yearPanel;
	};

	this.createRepairPanel = function() {
		this.repairMgr = new com.keensen.ump.produce.report.component.RepairMgr(this.lay);
		this.repairPanel = this.repairMgr.initPanel();
		this.repairMgr.initEvent();
		return this.repairPanel;
	};

}