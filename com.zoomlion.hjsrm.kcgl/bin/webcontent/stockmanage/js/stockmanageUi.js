com.zoomlion.hjsrm.kcgl.StockmanageMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'stockmanagemgr',
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