com.keensen.ump.base.StorageMgr.prototype.initEvent = function() {
	//查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.base.StorageMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.base.StorageMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.base.storage.exportStorage.biz.ext",
				method : "post",
				jsonData : daochu,
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (ret.success) {
							var fname = ret.fname;
							if(Ext.isIE){
								window.open('/default/deliverynote/seek/down4IE.jsp?fname='+fname);
							}else{
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
										+ fname;
							}
						}
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.base.StorageMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.base.StorageMgr.prototype.destroy = function() {
	//this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.base.StorageMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};