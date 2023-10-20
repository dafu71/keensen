com.zoomlion.hjsrm.purchase.QueryapplyMgr.prototype.initEvent = function() {
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
}

com.zoomlion.hjsrm.purchase.QueryapplyMgr.prototype.getSapApplyOrder = function() {
	var _this = this;
	
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.sapinterface.SapSrmPurchase.SyncSapPurchase.getSapApplyOrder.biz.ext",
				jsonData : { flag : 'M'},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						_this.listPanel.store.reload();
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}


com.zoomlion.hjsrm.purchase.QueryapplyMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.purchase.queryapply.exportApply.biz.ext",
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