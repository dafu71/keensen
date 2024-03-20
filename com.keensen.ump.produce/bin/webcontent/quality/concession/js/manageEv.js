com.keensen.ump.produce.quality.concessionListMgr.prototype.initEvent = function() {
	//查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var processState = r.data.processState;
				var createUserId = r.data.createUserId;
				var cnt = r.data.cnt;
				if (processState == '1') {
					Ext.Msg.alert('系统提示', '完成状态的不能删除');
					return false;
				}
				if (uid != createUserId) {
					Ext.Msg.alert('系统提示', '不是自己发起的工单的不能删除');
					return false;
				}
				if (cnt > 1) {
					Ext.Msg.alert('系统提示', '工单已经审批，不能删除');
					return false;
				}
			})
	
	this.viewPanel.mon(this.viewPanel, 'afterload', function() {
				this.viewPanel.picturePanel.update('');
				var recordIds = this.viewPanel.form.findField('reserve1')
						.getValue();
				
				var store = this.listPanel2.store;
				store.load({
							params : {
								'condition/recordIds' : recordIds
							}
						});
				var pictureUrl = this.viewPanel.pictureUrl.getValue();
				var pictureUrl2 = this.viewPanel.pictureUrl2.getValue();
				var pictureUrl3 = this.viewPanel.pictureUrl3.getValue();
				var url = '';
				if(!Ext.isEmpty(pictureUrl)){
					url +='<a href="/default/' + pictureUrl + '" target=_blank>查看图片</a>';
					url +='&nbsp;&nbsp;&nbsp;&nbsp;'
				}
				if(!Ext.isEmpty(pictureUrl2)){
					url +='<a href="/default/' + pictureUrl2 + '" target=_blank>查看图片</a>';
					url +='&nbsp;&nbsp;&nbsp;&nbsp;'
				}
				if(!Ext.isEmpty(pictureUrl3)){
					url +='<a href="/default/' + pictureUrl3 + '" target=_blank>查看图片</a>';
					url +='&nbsp;&nbsp;&nbsp;&nbsp;'
				}
				this.viewPanel.picturePanel.update(url);
			}, this);
	
}

com.keensen.ump.produce.quality.concessionListMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

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

function showProcessGraph(lId, index) {

	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		var workItemId = rec.get('processinstid');
		var tabId = "workitem-" + workItemId;
		var paramObj = {
			workItemId : workItemId,
			pId : rec.get('processinstid'),// 流程实例id
			tabId : tabId
			// 标签页ID "processinstid-" + workItemId;
		}
		var spac = Ext.getCmp('spacepanel');
		var tabName = '';

		tabName += '流程图';

		var tabNode = {
			id : tabId,
			text : tabName,
			attributes : {
				respath : '/workflows/ticket/workflowsgraph.jsp',
				readPanel : true
			},
			params : paramObj
		}
		// 打开新标签
		spac.open(tabNode);
	}

}