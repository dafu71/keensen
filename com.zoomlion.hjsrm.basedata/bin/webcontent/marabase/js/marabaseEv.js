/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 物料凭证查询 创建日期： 2015-01-28 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.marabase.MarabaseMgr.prototype.initEvent = function() {

	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}

com.zoomlion.hjsrm.marabase.MarabaseMgr.prototype.onadd = function() {
	var _this = this;
	var store = _this.listPanel.store;
	 var mk = new Ext.LoadMask(document.body, {
				msg : '正在更新数据，请稍候！',
				removeMask : true
			});
			mk.show();
	 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.sapinterface.SapSrmMaterial.SrmMaterialSynchronous.syncSrmMaterial.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				mk.hide();
			    store.reload();
			    //_this.listPanel.getForm().reset();
			} else {						
				Ext.Msg.alert('系统提示', '更新失败');
			}
		 }
	 },this);
};


