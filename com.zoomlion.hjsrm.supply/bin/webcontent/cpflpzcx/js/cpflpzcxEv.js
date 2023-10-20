/*
 * @author 刘鑫
 */
 
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxMgr.prototype.initEvent = function() {

	//增加查询事件
	this.listCpflpzcxdlPanel.mon(this.listCpflpzcxdlPanel,'rowclick', function(grid,rowIndex){
		this.listCpflpzcxzlPanel.store.rejectChanges();
		var record = grid.getStore().getAt(rowIndex);
		this.listCpflpzcxzlPanel.loadData({
					"condition/sjid": record.get('id')				 
		});
		this.listCpflpzcxzlPanel.sjid = record.get('id');
		this.listCpflpzcxzlPanel.sjdm= record.get('fldm');
		this.listCpflpzcxxlPanel.store.removeAll();
	},this);
	
	//增加查询事件
	this.listCpflpzcxzlPanel.mon(this.listCpflpzcxzlPanel,'rowclick', function(grid,rowIndex){
		this.listCpflpzcxxlPanel.store.rejectChanges();
		var record = grid.getStore().getAt(rowIndex);
		this.listCpflpzcxxlPanel.loadData({
					"condition/sjid": record.get('id')				 
		});
		this.listCpflpzcxxlPanel.sjid = record.get('id');
		this.listCpflpzcxxlPanel.sjdm= record.get('sjdm')+record.get('fldm');
	},this);

};


