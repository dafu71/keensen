com.zoomlion.hjsrm.kcgl.StockreportMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'stockreportmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}
	
	this.initQueryPanel = function() {
		var _this = this;
	}
	
	this.initListPanel = function() {
		var _this = this;
	}
}