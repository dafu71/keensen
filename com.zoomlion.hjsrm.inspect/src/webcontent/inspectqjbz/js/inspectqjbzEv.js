/*
 * 示例event 
 * @author rye
 */
 
/*
 * 整体页面元素事件绑定(公用)
 */
com.zoomlion.hjsrm.inspect.Inspectqjbzmgr.prototype.initEvent = function() {

	//增加查询事件
	this.listqjbztdPanel.mon(this.listqjbztdPanel,'rowclick', function(grid,rowIndex){
		this.qjbzmxList.store.rejectChanges();
		var record = grid.getStore().getAt(rowIndex);
		this.qjbzmxList.loadData({
				matnr : record.get('matnr'),
				werks : record.get('werks')
		});
		this.qjbzmxList.matnr = record.get('matnr');
		this.qjbzmxList.werks = record.get('werks');
		 Ext.getCmp(lsqjwhtext).setValue() 
	},this);

};


