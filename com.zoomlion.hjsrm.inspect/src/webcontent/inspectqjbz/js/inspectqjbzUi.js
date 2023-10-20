/*
 * 示例ui 
 * @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectqjbzmgr = function() {

	/*
	 * 创建功能面板
	 */
	this.initPanel = function() {
		
		var inspectqjbztd = new com.zoomlion.hjsrm.inspect.Inspectqjbztdmgr();

		var inspectqjbzmx = new com.zoomlion.hjsrm.inspect.Inspectqjbzmxmgr();

		inspectqjbztd.initPanel();
		
		inspectqjbztd.initEvent();
		
		inspectqjbzmx.initPanel();
		
		inspectqjbzmx.initEvent();
		
		this.queryqjbztdPanel = inspectqjbztd.queryPanel;
		
		this.listqjbztdPanel = inspectqjbztd.listPanel;
		 
		this.qjbzmxList = inspectqjbzmx.listPanel;

		return new Ext.fn.fnLayOut({
				layout:'nwe',
				border:false,				
				renderTo:'inspectqjbzmgr',
				panels:[this.queryqjbztdPanel,this.listqjbztdPanel,this.qjbzmxList]
		});
	}
	
}