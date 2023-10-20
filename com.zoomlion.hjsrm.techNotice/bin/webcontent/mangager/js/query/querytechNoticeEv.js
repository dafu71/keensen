/**
 * 技术通知管理页面
 */
com.zoomlion.hjsrm.techNotice.QueryMgr.prototype.destroy = function() {
	this.listPanel.destroy();
	this.operatorListPanel.destroy();
	this.viewTechNoitceWindow.destroy();
	this.listActionPanel.destroy();
}

com.zoomlion.hjsrm.techNotice.QueryMgr.prototype.initEvent = function() {
	var o = this.listPanel.tbar.dom;
	if (dataorgid == 81) {// 不是公司人员，不能新增
		o.hidden = false;
	} else {
		o.hidden = true;
	}
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

	// 新增技术通知流程事件，数据加载
	this.listPanel.mon(this.listPanel, 'add', function() {
		        this.addTechNoticePanel.getForm().reset();
		        this.addTechNoticePanel.getForm().findField('attachRemk').setValue("除简单示意图，不能附电子图纸，如涉及图纸下发，由编制人自行申请打印，并将附图清单作为附件上传。");
				this.addTechNoticePanel.getForm().findField('techRemk').setValue("1、重要度级别按照Q/ZLHJ 2110055-2014确定；\n 2、执行部门指具体操作部门，可以为多个。");
				
				this.operatorListPanel.store.removeAll();
				this.getNoticeID();				
				this.inputWindow.show();
				this.storePerson.load();
				
				Ext.getCmp(techDate).setValue(new Date());
				Ext.getCmp(deptNameId).setValue(userOrgName);
				Ext.getCmp(personNameId).setValue(operatorname);
            
			}, this);

	/**
	 * 动态加载技术通知ID
	 */
	this.getNoticeID = function() {
		Ext.Ajax.request({
					method : "post",
					url : 'com.zoomlion.hjsrm.techNotice.ComUtil.getNoticeID.biz.ext',
					success : function(response, action) {
						var result = Ext.decode(response.responseText);
						var tempId = result.noticeId;	
						Ext.getCmp(noticeId).setValue(tempId);						
				        Ext.getCmp(attachId).setPostParams({relationId:escape(tempId),groupId:'technotice'});
				        Ext.getCmp(attachId).store.removeAll();
					},
					failure : function(resp, opts) {
						Ext.Msg.alert("系统提示", resp.error);
					},
					headers : {
						'my-header' : 'foo'
					},
					params : {
						foo : 'bar',
						times : new Date()
					}
				});		
	}

}

com.zoomlion.hjsrm.techNotice.QueryMgr.prototype.onAdd = function() {
	// 增加查询事件
	this.listPanel.fireEvent("add");
}

com.zoomlion.hjsrm.techNotice.QueryMgr.prototype.onQuery = function() {
	// 增加查询事件
	this.listPanel.fireEvent("query");
}

com.zoomlion.hjsrm.techNotice.QueryMgr.prototype.onPrint = function() {
	alert("打印中。。。");
}

com.zoomlion.hjsrm.techNotice.QueryMgr.prototype.onClose = function() {
	Ext.getCmp("noticeIndexShow").hide();
}

//工单查看
this.showNoticeDetail=function(lId,index) {
	Ext.getCmp("noticeIndexShow").items.items[0].getForm().reset();
	Ext.getCmp('viewlistActionPanel').store.removeAll();
	Ext.getCmp('noticeattachfile').store.removeAll();	
	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);	
	var processinstid = rec.get('processinstid');
	var noticeid = rec.get('noticeid');
	var record = new Ext.data.Record({"processinstid":processinstid,"dateTime":new Date()});	
	Ext.getCmp("noticeIndexShow").items.items[0].loadData(record);
	Ext.getCmp("noticeIndexShow").items.items[0].getForm().findField('techRemk').setValue("1、重要度级别按照Q/ZLHJ 2110055-2014确定；\n 2、执行部门指具体操作部门，可以为多个。");
	var ds = Ext.getCmp('viewlistActionPanel').getStore();
	ds.baseParams = {
		"entity/processinstid" : processinstid
	};
	ds.load();	
	
	Ext.getCmp("noticeIndexShow").show();
	var attachmentParams = {relationId:processinstid,groupId:'technotice'};
	Ext.getCmp('noticeattachfile').setPostParams(attachmentParams);
	Ext.getCmp('noticeattachfile').loadParams = attachmentParams;
	Ext.getCmp('noticeattachfile').loadAttachmentRemote();
			
}

//终止流程
this.stopNotice=function(lId,index){
	Ext.Msg.confirm("系统提示", "您确定要终止流程吗?", function(btnText) {
				if (btnText == "yes") {
					var store = Ext.getCmp(lId).store;
					var rec = store.getAt(index);	
					var processinstid = rec.get('processinstid');
					var noticeid = rec.get('noticeid');
					var mk = new Ext.LoadMask(document.body, {
											msg : '后台正在操作，请稍候！',
											removeMask : true
										});
					mk.show();
					Ext.Ajax.request({
									method : "post",
									url : 'com.zoomlion.hjsrm.techNotice.noticeMgr.stopTechNotice.biz.ext',
									success : function(response, action) {
										mk.hide();
										Ext.getCmp(lId).getStore().load();
									},
									failure : function(resp, opts) {
										mk.hide();
										Ext.Msg.alert("系统提示", resp.error);
									},
									headers : {
										'my-header' : 'foo'
									},
									params : {						
										"techNotices/processinstid" : processinstid,
										"techNotices/noticeid" : noticeid	
									}
								});	
				}
			}, this);
	
	
		
}
