/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购订单查询
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
 
com.zoomlion.hjsrm.tuyangbg.TuyangbgMgr.prototype.destroy = function() {
	this.tybgqueryWindow.destroy();
	this.tybginputWindow.destroy();
	this.listActionPanel.destroy();
}
com.zoomlion.hjsrm.tuyangbg.TuyangbgMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	
	
com.zoomlion.hjsrm.tuyangbg.TuyangbgMgr.prototype.onSendOk = function() {
	var _this = this;
	  if (!this.inputtybgPanel.form.isValid()) {
			return;
		}
    var pts = this.tybginputWindow.items.items[0].form.findField('pts').getValue();
	var form = _this.inputtybgPanel.form;
	var vals = _this.inputtybgPanel.getForm().getValues();
	var store =this.listPanel.store;
		var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
			mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.addTybgNotice.biz.ext',
			jsonData : {
				tybgNotices : vals,
                pts:pts 
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.tybginputWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
								store.reload();
								//_this.listPanel.getForm().reset();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});


};
}	

com.zoomlion.hjsrm.tuyangbg.TuyangbgMgr.prototype.onAdd = function() {
	 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.newtybgid.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				var tybgid = ret.tybgid;
				//alert(this.sendPanel.items.items[0].form.findField('noticeid'));
				this.tybginputWindow.items.items[0].form.findField('tybgId').setValue(tybgid);
				this.tybginputWindow.items.items[0].form.findField('tybgPersonName').setValue(userName);
				this.tybginputWindow.items.items[0].form.findField('tybgPersonId').setValue(userId);
				this.tybginputWindow.items.items[0].form.findField('deptId').setValue(userOrgId);
				this.tybginputWindow.items.items[0].form.findField('deptName').setValue(userOrgName);
				//this.sendPanel.items.items[0].form.findField('noticeid').setValue(noticeid);
				var attachmentParams = {relationId:tybgid,groupId:'tybgfile'}; 
				Ext.getCmp(this.attachId).setPostParams(attachmentParams);
				Ext.getCmp(this.attachId).loadParams = attachmentParams;
	            Ext.getCmp(this.attachId).loadAttachmentRemote();
			} else {						
				Ext.Msg.alert('系统提示', '获取公共主键失败');
			}
		 }
	 },this);
	this.tybginputWindow.show();
}
this.showtybgquery=function(lId,index) {
	Ext.getCmp("tybgqueryShow").items.items[0].getForm().reset();
	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);	
	var processinstid = rec.get('processinstid');
	var tybgId = rec.get('tybgId');
	var record = new Ext.data.Record({"processinstid":processinstid,"dateTime":new Date()});	
	Ext.getCmp("tybgqueryShow").items.items[0].loadData(record);
	
	var ds = Ext.getCmp('viewlistActionPanel2').getStore();
	ds.baseParams = {
		"entity/processinstid" : processinstid
	};
	ds.load();	
	var fid = Ext.getCmp("tybgqueryShow").fid;
	Ext.getCmp("tybgqueryShow").show();
	var attachmentParams = {relationId:processinstid,groupId:'tybgfile'};
	Ext.getCmp(fid).setPostParams(attachmentParams);
	Ext.getCmp(fid).loadParams = attachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
			
}
//终止流程
this.stopNotice=function(lId,index){
	Ext.Msg.confirm("系统提示", "您确定要终止流程吗?", function(btnText) {
				if (btnText == "yes") {
					var store = Ext.getCmp(lId).store;
					var rec = store.getAt(index);	
					var processinstid = rec.get('processinstid');
					var tybgId = rec.get('tybgId');
					var mk = new Ext.LoadMask(document.body, {
											msg : '后台正在操作，请稍候！',
											removeMask : true
										});
					mk.show();
					Ext.Ajax.request({
									method : "post",
									url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.stopTybgNotice.biz.ext',
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
										"tybgNotices/processinstid" : processinstid,
										"tybgNotices/tybgId" : tybgId	
									}
								});	
				}
			}, this);
	
	
		
}




