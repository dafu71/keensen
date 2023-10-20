/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 邮件发送 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.notice.SendMgr.prototype.destroy = function() {
	this.viewsendWindow.destroy();
	this.sendinputWindow.destroy();
	this.sendsendPanel.destroy();
	this.noticesendReadWindow.destroy();
	this.noticesendnotReadWindow.destroy();

}
com.zoomlion.hjsrm.notice.SendMgr.prototype.initEvent = function() {

	this.sendsendPanel.attachlist.mon(this.sendsendPanel.attachlist, 'upload',
			function(form, vals) {
				// this.uploadForm.getForm().reset();
				this.uploadForm.getForm().findField('uploadFile').setValue('');
				this.uploadWindow.show();
			}, this);

	this.sendqueryPanel.mon(this.sendqueryPanel, 'query', function(form, vals) {
		var store = this.sendlistPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.sendlistPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	this.sendlistPanel.mon(this.sendlistPanel, 'afterdel',
			function(gird, cell) {
				Ext.getCmp(lajilistPanel).store.reload();
			}, this);

}

com.zoomlion.hjsrm.notice.SendMgr.prototype.onSend = function() {
	var _this = this;
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.noticeiplimit.biz.ext',
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var limit = ret.data;
				if (limit == 1) {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.newNotice.biz.ext',
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								var noticeid = ret.noticeid;
								// alert(this.sendPanel.items.items[0].form.findField('noticeid'));
								this.sendinputWindow.items.items[0].form
										.findField('noticeid')
										.setValue(noticeid);
								// this.sendPanel.items.items[0].form.findField('noticeid').setValue(noticeid);
								var attachmentParams = {
									relationId : noticeid,
									groupId : 'noticefile'
								}
								Ext.getCmp(_this.attachId)
										.setPostParams(attachmentParams);
								Ext.getCmp(_this.attachId).loadParams = attachmentParams;
								Ext.getCmp(_this.attachId)
										.loadAttachmentRemote();

								this.uploadForm.getForm()
										.findField('relationId')
										.setValue(noticeid);
								this.uploadForm.getForm().findField('groupId')
										.setValue('noticefile');
								this.uploadForm.getForm()
										.findField('dataorgid')
										.setValue(dataorgid);
								this.uploadForm.getForm()
										.findField('operatorid')
										.setValue(operatorid);
								this.uploadForm.getForm()
										.findField('operatorname')
										.setValue(operatorname);
							} else {
								Ext.Msg.alert('系统提示', '获取公共主键失败');
							}
						}
					}, this);
					this.sendinputWindow.show();
				} else {
					Ext.Msg.alert('系统提示', '您的IP地址不允许发送邮件！');
				}
			} else {
				Ext.Msg.alert('系统提示', '获取登录人IP失败');
			}
		}
	}, this);
}
com.zoomlion.hjsrm.notice.SendMgr.prototype.onSendOk = function() {
	var _this = this;
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在发送消息，请稍候！',
				removeMask : true
			});

	var store = _this.sendlistPanel.store;
	var form = _this.sendsendPanel.form;
	var vals = _this.sendsendPanel.getForm().getValues();
	var pts = Ext.getCmp(this.pts).getValue();
	if (form.isValid()) {
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
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
					_this.sendinputWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
								store.reload();
								_this.sendsendPanel.getForm().reset();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}
};
com.zoomlion.hjsrm.notice.SendMgr.prototype.onDel = function() {
	this.sendlistPanel.onDel();
};
com.zoomlion.hjsrm.notice.SendMgr.prototype.onDelsend = function() {
	var records = this.sendlistPanel.getSelectionModel().getSelections();
	var _this = this;
	if (!this.sendlistPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定邮件，请选择邮件！");
		return;
	}
	if (records.length > 1) {// 撤销
		Ext.Msg.alert("系统提示", "请选择单个邮件进行撤销！");
		return;
	}
	var store = _this.sendlistPanel.store;
	var purchases = [];
	Ext.Msg.confirm("系统提示", "撤销后邮件将消失，您确定要撤销当前邮件？", function(E) {
		if (E == "yes") {
			Ext.each(records, function(r) {
						purchases.push(r.data);
					});
			var mk = new Ext.LoadMask(document.body, {
						msg : '正在撤销邮件，请稍候！',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.cxNoticeyz.biz.ext',
				jsonData : {
					list : purchases
				},
				success : function(resp) {
					var result = Ext.decode(resp.responseText);
					if (result.result == "1") {
						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.cxNotice.biz.ext',
							jsonData : {
								list : purchases
							},
							success : function(resp) {
								var ret = Ext.decode(resp.responseText);
								if (ret.success) {
									mk.hide();
									store.reload();
									// _this.shzlcxlistPanel.getForm().reset();
								} else {
									Ext.Msg.alert('系统提示', '撤销失败');
								}
							}
						}, this);
					} else {
						Ext.Msg.alert("系统提示", "该邮件已被收件人查阅，无法撤销！");
						mk.hide();
					}
				}
			})
		}
	}, this)
};
function showNoticesend(k) {

	var fid = Ext.getCmp("noticesendShow").fid;
	var record = new Ext.data.Record({
				"noticeid" : k
			});
	Ext.getCmp("noticesendShow").items.items[0].form.reset();
	Ext.getCmp("noticesendShow").items.items[0].loadData(record);
	Ext.getCmp("noticesendShow").show();
	var attachmentParams = {
		relationId : k,
		groupId : 'noticefile'
	}
	Ext.getCmp(fid).setPostParams(attachmentParams);
	Ext.getCmp(fid).loadParams = attachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
};
function showNoticesendread(k) {
	// var record = new Ext.data.Record({"condition/announceid":k});
	ggnoticeid = k;
	var list = Ext.getCmp("noticesendreadShow").items.items[0];
	var store = list.store;
	store.baseParams = {
		"condition/noticeid" : k
	}
	store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : list.pagingToolbar.pageSize
				}
			});
	Ext.getCmp("noticesendreadShow").items.items[0].orgname.setValue();
	Ext.getCmp("noticesendreadShow").show();
};
function queryNoticesendread(t, k) {
	var list = Ext.getCmp("noticesendreadShow").items.items[0];
	var store = list.store;
	store.baseParams = {
		"condition/orgnames" : t,
		"condition/noticeid" : k
	}
	store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : list.pagingToolbar.pageSize
				}
			});
	Ext.getCmp("noticesendreadShow").show();
};
function showNoticesendnotread(t) {
	var list = Ext.getCmp("noticenotReadShow").items.items[0];
	var store = list.store;
	store.baseParams = {
		"condition/noticeid" : t
	}
	store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : list.pagingToolbar.pageSize
				}
			});
	Ext.getCmp("noticenotReadShow").items.items[0].orgnames.setValue();
	Ext.getCmp("noticenotReadShow").show();
};
function queryNoticenotRead(t, k) {
	var list = Ext.getCmp("noticenotReadShow").items.items[0];
	var store = list.store;
	store.baseParams = {
		"condition/orgnames" : t,
		"condition/noticeid" : k
	}
	store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : list.pagingToolbar.pageSize
				}
			});
	Ext.getCmp("noticenotReadShow").show();
};