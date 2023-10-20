/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 邮件接收 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.notice.RecvuseMgr.prototype.destroy = function() {
this.recvuseviewWindow.destroy();
this.recvuseinputWindow.destroy();
this.recvusesendPanel.destroy();

}
com.zoomlion.hjsrm.notice.RecvuseMgr.prototype.initEvent = function() {

	this.recvusesendPanel.attachlist.mon(this.recvusesendPanel.attachlist,'upload', function(form,vals){
		//this.uploadForm.getForm().reset();
		this.uploadForm.getForm().findField('uploadFile').setValue('');
		this.uploadWindow.show();
	},this);
	
this.recvusequeryPanel.mon(this.recvusequeryPanel,'query', function(form,vals){
		var store =this.recvuselistPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.recvuselistPanel.pagingToolbar.pageSize
                    }});
	},this);
var shownoticePanel = Ext.getCmp("noticeShow").items.items[0]
	shownoticePanel.mon(shownoticePanel, 'afterload', function(form, data) {

		Ext
				.getCmp("noticeContent")
				.getEl()
				.update("<div style='word-break:break-all;margin-left:0px;overflow-y:scroll;height:300px;'>"
						+ data.content + "</div>");

	});
this.recvuselistPanel.mon(this.recvuselistPanel, 'afterdel', function(gird, cell) {
			Ext.getCmp(lajilistPanel).store.reload();
			}, this);
}

com.zoomlion.hjsrm.notice.RecvuseMgr.prototype.onSend = function() {
	 var _this = this;
	 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.noticeiplimit.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				var limit = ret.data;
				if(limit == 1){
		 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.newNotice.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				var noticeid = ret.noticeid;
				// alert(this.sendPanel.items.items[0].form.findField('noticeid'));
				this.recvuseinputWindow.items.items[0].form.findField('noticeid').setValue(noticeid);
				var attachmentParams = {
					relationId : noticeid,
					groupId : 'noticefile'
				}
				Ext.getCmp(_this.attachId).setPostParams(attachmentParams);
				Ext.getCmp(_this.attachId).loadParams = attachmentParams;
				Ext.getCmp(_this.attachId).loadAttachmentRemote();
				
				this.uploadForm.getForm().findField('relationId').setValue(noticeid);
				this.uploadForm.getForm().findField('groupId').setValue('noticefile');
				this.uploadForm.getForm().findField('dataorgid').setValue(dataorgid);
				this.uploadForm.getForm().findField('operatorid').setValue(operatorid);
				this.uploadForm.getForm().findField('operatorname').setValue(operatorname);
				
				// this.sendPanel.items.items[0].form.findField('noticeid').setValue(noticeid);
			} else {						
				Ext.Msg.alert('系统提示', '获取公共主键失败');
			}
		        }
	          },this);
	         this.recvuseinputWindow.show();
				}else{
					Ext.Msg.alert('系统提示', '您的IP地址不允许发送邮件！');
				}
			} else {						
				Ext.Msg.alert('系统提示', '获取登录人IP失败');
			}
		 }
	 },this);
	 
}
com.zoomlion.hjsrm.notice.RecvuseMgr.prototype.onDel = function() {
	this.recvuselistPanel.onDel();
};
com.zoomlion.hjsrm.notice.RecvuseMgr.prototype.onSendOk = function() {
	var _this = this;
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在发送消息，请稍候！',
				removeMask : true
			});
    var pts = Ext.getCmp(this.pts).getValue();
	var store = _this.recvuselistPanel.store;
	var form = _this.recvusesendPanel.form;
	var vals = _this.recvusesendPanel.getForm().getValues();
	if (form.isValid()) {
		mk.show();
		Ext.Ajax.request({
			method : "post",
			url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.addNoticeInfo.biz.ext',
			jsonData : {
				tatnoticeinfo : vals,
				pts : pts
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.recvuseinputWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
								store.reload();
								_this.recvusesendPanel.getForm().reset();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}
}
function showNoticeread(t) {
	var fid = Ext.getCmp("noticeShow").fid;
	var record = new Ext.data.Record({"noticeid":t});
	Ext.getCmp("noticeShow").items.items[0].form.reset();
	Ext.getCmp("noticeShow").items.items[0].loadData(record);
	Ext.getCmp("noticeShow").show();
	
	var attachmentParams = {relationId:v,groupId:'noticefile'	}
	Ext.getCmp(fid).setPostParams(attachmentParams);
	Ext.getCmp(fid).loadParams = attachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
};
function showNotice(v) {
	Ext.Ajax.request({
			method : "post",
			url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.readNoticeyz.biz.ext',
			jsonData : {
				query : v
			},
			success : function(response, action) {
				var result = Ext.decode(response.responseText);
					if (result.result == "0") {
						var fid = Ext.getCmp("noticeShow").fid;
	var record = new Ext.data.Record({"noticeid":v});
	Ext.getCmp("noticeShow").items.items[0].form.reset();
	Ext.getCmp("noticeShow").items.items[0].loadData(record);
	Ext.getCmp("noticeShow").show();
	
	var attachmentParams = {relationId:v,groupId:'noticefile'}
	Ext.getCmp(fid).setPostParams(attachmentParams);
	Ext.getCmp(fid).loadParams = attachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
					}else{
						Ext.Msg.alert("系统提示", "该邮件已被发件人撤销，无法查看！");
					}
					
			}
	
})
};