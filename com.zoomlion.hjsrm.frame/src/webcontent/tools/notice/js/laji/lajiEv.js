/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 邮件接收 创建日期： 2015-05-29 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.notice.LajiMgr.prototype.destroy = function() {
	this.lajiviewWindow.destroy();
}
com.zoomlion.hjsrm.notice.LajiMgr.prototype.initEvent = function() {
	this.lajiqueryPanel.mon(this.lajiqueryPanel, 'query', function(form, vals) {
		var store = this.lajilistPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.lajilistPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}
com.zoomlion.hjsrm.notice.LajiMgr.prototype.onReturn = function() {
	var records = this.lajilistPanel.getSelectionModel().getSelections();
	var _this = this;
	var store = _this.lajilistPanel.store;
	var notices = [];
	Ext.each(records, function(r) {
				notices.push(r.data);
			});
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行还原！");
	} else {
		var mk = new Ext.LoadMask(_this.lajilistPanel.id, {
					msg : '正在进行邮件还原，请稍等！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.returndelnotices.biz.ext',
			jsonData : {
				notices : notices
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "保存成功", function() {
								store.reload();
								Ext.getCmp(recvuselistPanel).store.reload();
								Ext.getCmp(sendlistPanel).store.reload();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
}
}
com.zoomlion.hjsrm.notice.LajiMgr.prototype.onDel = function() {
	var records = this.lajilistPanel.getSelectionModel().getSelections();
	var _this = this;
	var store = _this.lajilistPanel.store;
	var notices = [];
	Ext.Msg.confirm("系统提示", "彻底删除后邮件将消失，您确定要彻底删除当前邮件？", function(E) {
		if (E == "yes") {
	Ext.each(records, function(r) {
				notices.push(r.data);
			});
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行删除！");
	} else {
		var mk = new Ext.LoadMask(_this.lajilistPanel.id, {
					msg : '正在进行邮件还原，请稍等！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.deldelnotices.biz.ext',
			jsonData : {
				notices : notices
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "保存成功", function() {
								store.reload();
								Ext.getCmp(recvuselistPanel).store.reload();
								Ext.getCmp(sendlistPanel).store.reload();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
}
}
	}, this)
}
function showNoticelaji(k) {

	var fid = Ext.getCmp("noticelajiShow").fid;
	var record = new Ext.data.Record({
				"noticeid" : k
			});
	Ext.getCmp("noticelajiShow").items.items[0].form.reset();
	Ext.getCmp("noticelajiShow").items.items[0].loadData(record);
	Ext.getCmp("noticelajiShow").show();
	var attachmentParams = {
		relationId : k,
		groupId : 'noticefile'
	}
	Ext.getCmp(fid).setPostParams(attachmentParams);
	Ext.getCmp(fid).loadParams = attachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
};