/*
 * 示例event 
 * @author rye
 */
com.zoomlion.hjsrm.dict.DictTypeMgr.prototype.reloadCache = function(){
	var mk = new Ext.LoadMask('dictMgr', {
									msg : '正在操作，请稍候！',
									removeMask : true
	});
	mk.show();
	Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.tools.dict.DictManage.clearDicCache.biz.ext',
				success : function(resp) {
				 mk.hide();
				 Ext.Msg.alert("系统提示", "刷新缓存完成！");
				}
	});
};				

com.zoomlion.hjsrm.dict.DictTypeMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	//增加修改事件
	this.listPanel.mon(this.listPanel,'update', function(gird,cell){
		this.editWindow.show();
		this.editWindow.loadData(cell);
	},this);
	
	
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
com.zoomlion.hjsrm.dict.DictTypeMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.dict.DictTypeMgr.prototype.onEdit = function() {
	var records  = this.listPanel.getSelectionModel().getSelections();
	for (var i = 0; i < records.length; i++) {
			if(records[i].get('dataorgid')=='0'){
				Ext.Msg.alert("系统提示", "系统级参数不允许修改！");
				return ;
			}
	}
	this.listPanel.onEdit();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.dict.DictTypeMgr.prototype.onDel = function() {
	var records  = this.listPanel.getSelectionModel().getSelections();
	for (var i = 0; i < records.length; i++) {
			if(records[i].get('dataorgid')=='0'){
				Ext.Msg.alert("系统提示", "系统级参数不允许删除！");
				return ;
			}
	}
	this.listPanel.onDel();
};
com.zoomlion.hjsrm.dict.DictTypeMgr.prototype.onFrash = function() {
	this.listPanel.refresh();
};
