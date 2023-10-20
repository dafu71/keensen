/*
 * 示例event @author rye
 */

com.zoomlion.hjsrm.announce.AnnounceMgr.prototype.destroy = function() {
	this.viewWindow.destroy();
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.announceReadWindow.destroy();

}
com.zoomlion.hjsrm.announce.AnnounceMgr.prototype.initEvent = function() {

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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
				var attachmentParams = {
					relationId : cell.data.announceid,
					groupId : 'announcefile'
				};
				Ext.getCmp(this.eattachId).setPostParams(attachmentParams);
				Ext.getCmp(this.eattachId).loadParams = attachmentParams;
				Ext.getCmp(this.eattachId).loadAttachmentRemote();

			}, this);

	// 增加删除后事件
	this.listPanel.mon(this.listPanel, 'afterdel', function(gird, cell) {
				// 刷新首页的公告列表
				// loadAnnounce();
			}, this);

	// 增加修改前事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function(gird, cell) {
				this.editWindow.form.findField("announce/orgid")
						.setValue(this.editWindow.orgid.getValue());
			}, this);

	// 增加修改后事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
				// 刷新首页的公告列表
				// loadAnnounce();
			}, this);

	this.inputWindow.allflag.mon(this.inputWindow.allflag, 'check', function(o,
					flag) {
				if (flag) {
					this.inputWindow.orgid.setValue(0);
					this.inputWindow.orgid2.setValue(0);
					this.inputWindow.orgid.hide();
					this.inputWindow.orgid2.hide();

				} else {
					this.inputWindow.orgid.setValue('');
					this.inputWindow.orgid2.setValue('');
					this.inputWindow.orgid.show();
					this.inputWindow.orgid2.show();
				}
			}, this);

	// 增加新增前事件
	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function(gird, cell) {
				//alert(this.inputWindow.allflag.checked);
				//return;
				if (this.inputWindow.allflag.checked == false) {
					this.inputWindow.form.findField("announce/orgid")
							.setValue(this.inputWindow.orgid.getValue());
				}
		
			}, this);

	// 增加新增后事件
	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'afterSave',
			function(gird, cell) {
				// 刷新首页的公告列表
				// loadAnnounce();
			}, this);
	// 增加新增后事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.announcetime) {
					data.announcetime = data.announcetime.split('.')[0];
					var date1 = data.announcetime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('announce/announcetime')
							.setValue(new Date(date1));
				}
				if (data.endtime) {
					data.endtime = data.endtime.split('.')[0];
					var date2 = data.endtime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('announce/endtime')
							.setValue(new Date(date2));
				}
			}, this);

	var showPanel = Ext.getCmp("announceShow").items.items[0]

	showPanel.mon(showPanel, 'afterload', function(form, data) {

		Ext
				.getCmp("announceContent")
				.getEl()
				.update("<div style='word-break:break-all;margin-left:0px;overflow-y:scroll;height:300px;'>"
						+ data.content + "</div>");

	});
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.announce.AnnounceMgr.prototype.onAdd = function() {
	var _this = this;
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.newAnnounce.biz.ext',
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var annunceid = ret.annunceid;
				this.inputWindow.items.items[0].form
						.findField('announce/announceid').setValue(annunceid);
				var attachmentParams = {
					relationId : annunceid,
					groupId : 'announcefile'
				}
				Ext.getCmp(_this.attachId).setPostParams(attachmentParams);
				Ext.getCmp(_this.attachId).loadParams = attachmentParams;
				Ext.getCmp(_this.attachId).loadAttachmentRemote();
			} else {
				Ext.Msg.alert('系统提示', '获取公共主键失败');
			}
		}
	}, this);
	this.inputWindow.show();

};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.announce.AnnounceMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.announce.AnnounceMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

function showAnnounceReader(k){
//var record = new Ext.data.Record({"condition/announceid":k});
 ggannounceid = k;
 var list = Ext.getCmp("announceReaderShow").items.items[0];
 var store = list.store;
    store.baseParams = {"condition/announceid" : k}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
    Ext.getCmp("announceReaderShow").items.items[0].orgname.setValue();
	Ext.getCmp("announceReaderShow").show();
};
function queryAnnounceRead(t,k){
 var list = Ext.getCmp("announceReaderShow").items.items[0];
 var store = list.store;
    store.baseParams = {"condition/orgnames" : t,"condition/announceid" : k}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
	Ext.getCmp("announceReaderShow").show();
};
function showAnnouncenotRead(t){
var list = Ext.getCmp("announcenotReadShow").items.items[0];
var store = list.store;
    store.baseParams = {"condition/announceid" : t}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
	Ext.getCmp("announcenotReadShow").items.items[0].orgnames.setValue();
	Ext.getCmp("announcenotReadShow").show();
};
function queryAnnouncenotRead(t,k){
var list = Ext.getCmp("announcenotReadShow").items.items[0];
var store = list.store;
    store.baseParams = {"condition/orgnames" : t,"condition/announceid" : k}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
	Ext.getCmp("announcenotReadShow").show();
};
function showAnnounce(v) {

	var fid = Ext.getCmp("announceShow").fid;
	var record = new Ext.data.Record({
				"announceid" : v
			});
	Ext.getCmp("announceShow").items.items[0].loadData(record);
	Ext.getCmp("announceShow").show();
	var attachmentParams = {
		relationId : v,
		groupId : 'announcefile'
	}
	Ext.getCmp(fid).setPostParams(attachmentParams);
	Ext.getCmp(fid).loadParams = attachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
};