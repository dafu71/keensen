/*
 * @author 刘鑫
 */
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxMgr = function() {

	/*
	 * 创建功能面板
	 */
	this.initPanel = function() {
		
		var Cpflpzcxdl = new com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxdlMgr();

		var Cpflpzcxzl = new com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxzlMgr();
		
		var Cpflpzcxxl = new com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxxlMgr();

		Cpflpzcxdl.initPanel();
		
		Cpflpzcxdl.initEvent();
		
		Cpflpzcxzl.initPanel();
		
		Cpflpzcxzl.initEvent();
		
		Cpflpzcxxl.initPanel();
		
		Cpflpzcxxl.initEvent();
		
		this.queryCpflpzcxdlPanel = Cpflpzcxdl.queryPanel;
		
		this.listCpflpzcxdlPanel = Cpflpzcxdl.listPanel;
		 
		this.listCpflpzcxzlPanel = Cpflpzcxzl.listPanel;
		
		this.listCpflpzcxxlPanel = Cpflpzcxxl.listPanel;

		return new Ext.fn.fnLayOut({
				layout:'newc',
				border:false,				
				renderTo:'cpflpzcxMgr',
				panels:[this.queryCpflpzcxdlPanel,this.listCpflpzcxzlPanel,this.listCpflpzcxdlPanel,this.listCpflpzcxxlPanel]
		});
	}
	
}