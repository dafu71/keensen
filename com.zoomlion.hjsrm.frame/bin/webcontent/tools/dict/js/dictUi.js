/*
 * 示例ui 
 * @author rye
 */
com.zoomlion.hjsrm.dict.DictMgr = function() {

	/*
	 * 创建功能面板
	 */
	this.initPanel = function() {
		
		var dictType = new com.zoomlion.hjsrm.dict.DictTypeMgr();

		var dictEntry = new com.zoomlion.hjsrm.dict.DictEntryMgr();

		dictType.initPanel();
		
		dictType.initEvent();
		
		dictEntry.initPanel();
		
		dictEntry.initEvent();
		
		this.queryTypePanel = dictType.queryPanel;
		
		this.listTypePanel = dictType.listPanel;
		 
		this.entryList = dictEntry.listPanel;

		return new Ext.fn.fnLayOut({
				layout:'nwe',
				border:false,				
				renderTo:'dictMgr',
				panels:[this.queryTypePanel,this.listTypePanel,this.entryList]
		});
	}
	
}