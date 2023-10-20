/*
 * @author 刘鑫
 */
			
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxdlMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize,
                          "condition/sjid": 0
                    }});
	},this);
	
	//增加修改事件
	this.listPanel.mon(this.listPanel,'update', function(gird,cell){
		this.editWindow.show();
		this.editWindow.loadData(cell);
	},this);
	
	// 增加删除后事件
	this.listPanel.mon(this.listPanel, 'afterdel', function(gird, cell) {
		        Ext.getCmp(zllistPanel).store.removeAll();
                Ext.getCmp(xllistPanel).store.removeAll();
			}, this);
	//增加修改事件
	this.listPanel.mon(this.listPanel,'beforeSave', function(gird,cell){
		
	},this);
	
	//增加修改事件
	this.listPanel.mon(this.listPanel,'afterSave', function(gird,cell){
		
	},this);
};

/*
 * 新增方法
 */
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxdlMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxdlMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxdlMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxdlMgr.prototype.onFrash = function() {
	this.listPanel.refresh();
};
