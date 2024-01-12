com.keensen.ump.produce.quality.concessionListMgr.prototype.initEvent = function() {
	//查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	this.viewPanel.mon(this.viewPanel, 'afterload', function() {
				var recordIds = this.viewPanel.form.findField('reserve1')
						.getValue();
				
				var store = this.listPanel2.store;
				store.load({
							params : {
								'condition/recordIds' : recordIds
							}
						});
			}, this);
	
}

com.keensen.ump.produce.quality.concessionListMgr.prototype.onView = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.show();
			this.viewPanel.loadData(A);
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.quality.concessionListMgr.prototype.exportExcel = function() {
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

