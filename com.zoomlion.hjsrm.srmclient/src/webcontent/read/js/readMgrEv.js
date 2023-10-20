com.zoomlion.hjsrm.srmclient.ReadMgr.prototype.initEvent = function() {
	// 查询事件
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

	this.queryPanel2.mon(this.queryPanel2, 'query', function(form, vals) {
		var store = this.listPanel2.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel2.pagingToolbar.pageSize
					}
				});
	}, this);

}

// 工单阅读
function updateReadInsert(lId, index) {
	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var processinstid = rec.get('processinstid');
		var description = rec.get('description');
		var esheetno = rec.get('esheetno');
		var readPkid = rec.get('eid');
		// description = "//" + description;

		var tabId = "updateread";
		var paramObj = {
			// 流程实例id
			processinstid : rec.get('processinstid'),
			description : description,
			esheetno : esheetno,
			listId : listId,
			listId2 : listId2,
			readPkid : readPkid

		}
		var spac = Ext.getCmp('spacepanel');
		var tabName = '';
		tabName += '工单查看';
		spac.items.each(function(item) {// 关闭标签页
					if (item.id == ('menu' + tabId)) {
						spac.remove(item);
						return;
					}
				});

		var tabNode = {
			id : tabId,
			text : tabName,
			attributes : {
				respath : "/srmclient/read/readDealMgr.jsp",
				readPanel : true
			},
			params : paramObj
		}
		// 打开新标签
		spac.open(tabNode);

	}

}

// 转阅记录
function readHistory(lId, index) {
	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var esheetno = rec.get('esheetno');

		var tabId = "readrecords";
		var paramObj = {
			esheetno : esheetno

		}
		var spac = Ext.getCmp('spacepanel');
		var tabName = '';

		tabName += '转阅记录';
		spac.items.each(function(item) {// 关闭标签页
					if (item.id == ('menu' + tabId)) {
						spac.remove(item);
						return;
					}
				});

		var tabNode = {
			id : tabId,
			text : tabName,
			attributes : {
				respath : "/srmclient/read/readHistory.jsp",
				readPanel : true
			},
			params : paramObj
		}
		// 打开新标签
		spac.open(tabNode);
	}
}