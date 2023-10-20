com.zoomlion.hjsrm.kcgl.StockbaseMgr = function() {
	
	this.initPanel = function() {
		
		var wholeMgr = new com.zoomlion.hjsrm.kcgl.MaterialwholeMgr();
		wholeMgr.initPanel();
		wholeMgr.initEvent();		
		
		this.queryWholePanel = wholeMgr.queryPanel;
		this.listWholePanel = wholeMgr.listPanel;
		
		var componentMgr = new com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr();
		componentMgr.initPanel();
		componentMgr.initEvent();
		
		this.queryComponentPanel = componentMgr.queryPanel;
		this.listComponentPanel = componentMgr.listPanel;
		
		var supplierMgr = new com.zoomlion.hjsrm.kcgl.ComponentsupplierMgr();
		supplierMgr.initPanel();
		supplierMgr.initEvent();
		this.querySupplierPanel = supplierMgr.queryPanel;
		this.listSupplierPanel = supplierMgr.listPanel;
		
		var materialMgr = new com.zoomlion.hjsrm.kcgl.MaterialMgr();
		materialMgr.initPanel();
		materialMgr.initEvent();
		this.queryMaterialPanel = materialMgr.queryPanel;
		this.listMaterialPanel = materialMgr.listPanel;
		
		var buyerMgr = new com.zoomlion.hjsrm.kcgl.BuyerMgr();
		buyerMgr.initPanel();
		buyerMgr.initEvent();
		this.queryBuyerMgr = buyerMgr.queryPanel;
		this.listBuyerMgr = buyerMgr.listPanel;
		
		this.initFirstPanel();
		this.initSecondPanel();
		this.initThirdPanel();
		this.initFourthPanel();
		this.initFifthPanel();
		this.initMainPanel();
		
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'stockbasemgr',
					panels : [this.mainPanel]
				});
	}
	
	
	this.initFirstPanel = function() {
		this.firstPanel = new Ext.Panel({
					title : "车型物料",
					layout : 'border',
					items : [this.queryWholePanel, this.listWholePanel]
				})
	};
	
	this.initSecondPanel = function() {
		this.secondPanel = new Ext.Panel({
					title : "大件物料",
					layout : 'border',
					items : [this.queryComponentPanel, this.listComponentPanel]
					
				})
	};
	
	this.initThirdPanel = function() {
		this.thirdPanel = new Ext.Panel({
					title : "大件供应商",
					layout : 'border',
					items : [this.querySupplierPanel, this.listSupplierPanel]					
					
				})
	};
	
	this.initFourthPanel = function() {
		this.fourthPanel = new Ext.Panel({
					title : "综合查询",
					layout : 'border',
					items : [this.queryMaterialPanel, this.listMaterialPanel]					
					
				})
	};
	
	this.initFifthPanel = function() {
		this.fifthPanel = new Ext.Panel({
					title : "采购组维护",
					layout : 'border',
					items : [this.queryBuyerMgr, this.listBuyerMgr]					
					
				})
	};
	
	this.initMainPanel = function() {
		this.mainPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.firstPanel, this.secondPanel,
					this.thirdPanel,this.fourthPanel,this.fifthPanel]
				});

	};
}