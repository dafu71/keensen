/*
 * 示例event 
 * @author rye
 */
 
/*
 * 整体页面元素事件绑定(公用)
 */
com.zoomlion.hjsrm.dict.DictMgr.prototype.initEvent = function() {

	//增加查询事件
	this.listTypePanel.mon(this.listTypePanel,'rowclick', function(grid,rowIndex){
		this.entryList.store.rejectChanges();
		var record = grid.getStore().getAt(rowIndex);
		this.entryList.loadData({
				dicttypeid : record.get('dicttypeid')
		});
		this.entryList.dicttypeid = record.get('dicttypeid');
	},this);

};


