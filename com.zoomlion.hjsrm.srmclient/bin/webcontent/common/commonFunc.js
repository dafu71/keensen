var sheetno;

// 流程日志
function showHistory(lId, index) {
	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		var processinstid = rec.get('processinstid');
		var rootprocinstid = Ext.isEmpty(rec.get('rootprocinstid'))
				? processinstid
				: rec.get('rootprocinstid');

		// var rootprocinstid=0;

		var tabId = "workhistoryview";

		var spac = Ext.getCmp('spacepanel');

		spac.items.each(function(item) {
					if (item.id == 'menuworkhistoryview') {
						spac.remove(item);
					}
				});
		var paramObj = {
			processinstid : processinstid,// 流程实例id
			rootprocinstid : rootprocinstid,// 父流程实例id
			tabId : tabId
			// 标签页ID "workhistory-" + processinstid;
		}

		var tabName = '';

		tabName += '流程日志';

		var tabNode = {
			id : tabId,
			text : tabName,
			attributes : {
				respath : '/srmclient/worklog/log.jsp',
				readPanel : true
			},
			params : paramObj
		}
		// 打开新标签
		spac.open(tabNode);

	}

}

// 流程图tab
function showProcessGraph(lId, index) {

	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		var workItemId = rec.get('workitemid');
		var tabId = "workitem-" + workItemId;
		var paramObj = {
			workItemId : workItemId,
			pId : rec.get('processinstid'),// 流程实例id
			tabId : tabId
			// 标签页ID "workitem-" + workItemId;
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

// 转阅
function sendread(lId, index) {

	var readerWindow = new com.zoomlion.hjsrm.selectParticipantsWindow({
		title : '选择转阅人员',
		partTitle : '转阅人员',
		divisionFront : "|",
		divisionBack : ',',
		defaultValue : '',
		listeners : {
			'callback' : function(v) {
				if (v) {
					var readers = Ext.util.Format.substr(v, 0, v.length - 1);
					var uids = '';
					var unames = '';
					if (readers.indexOf(",") > 0) {
						var arr = readers.split(",");
						for (var i = 0; i < arr.length; i++) {
							var temp = arr[i].split("|");
							uids += temp[1] + ",";
							unames += temp[0] + ",";
						}
						uids = Ext.util.Format.substr(uids, 0, uids.length - 1);
						unames = Ext.util.Format.substr(unames, 0,
								unames.length - 1);
					} else {
						var temp = readers.split("|");
						uids += temp[1]
						unames += temp[0];
					}
					
					var _this = this;
					this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "正在执行操作..."
									});
					this.requestMask.show();

					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.sheetReadInsert.biz.ext',
						jsonData : {
							"uids" : uids,
							"unames" : unames,
							"sheetno" : sheetno
						},
						success : function(response, action) {
							_this.requestMask.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {

								Ext.Msg.alert("系统提示", "操作成功", function() {

										});
							}
						},
						failure : function(resp, opts) {
							_this.requestMask.hide();
						}
					});

				}

			}
		}
	});

	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		sheetno = rec.get('esheetno');
		readerWindow.participantsEditPanel.form.reset();
		readerWindow.show();
		// alert("转阅" + esheetno);
	}
}

// 短信
function sendMsg(lId, index, title) {

	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		if (title == '短信催办') {
			var busiprocessinstid = rec.get('busiprocessinstid');
			var busiprocessname = rec.get('busiprocessname');
			var processtype = rec.get('processtype');
			var processtypename = rec.get('processtypename');
			var processinstname = rec.get('processinstname');

			var sendMsgWindow = new com.zoomlion.hjsrm.sendMsgWindow({
						optflag : '1',
						title: '短信催办',
						msgTitle : processinstname,
						// activityInstName : activityInstName,
						processtypename : processtypename,
						// activityinstid : activityinstid,
						processinstid : busiprocessinstid

					});
			sendMsgWindow.show();

		}
		if (title == '短信提醒') {

			var activityinstid = rec.get('activityinstid');
			var processinstname = rec.get('processinstname');
			var processtypename = rec.get('processtypename');
			var processinstid = rec.get("rootprocinstid");
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryPreviousActivityInstances.biz.ext',
				jsonData : {
					"activityInstID" : activityinstid
				},
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					var retList = result.retList;

					var l = retList[0];

					var activityType = l.activityType;
					var activityInstName = l.activityInstName;
					if (activityType != 'manual') {
						Ext.Msg.alert("系统提示", "没有前驱活动，不能短信提醒!");
						return;
					} else {

						var sendMsgWindow = new com.zoomlion.hjsrm.sendMsgWindow(
								{
									title : '短信提醒',
									msgTitle : processinstname,
									activityInstName : activityInstName,
									processtypename : processtypename,
									activityinstid : activityinstid,
									processinstid : processinstid
								});
						sendMsgWindow.show();

					}
				},
				failure : function(resp, opts) {

				}
			});

		}
	}

}

// 工单查看
function showDetail(lId, index) {
	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var processinstid = rec.get('processinstid');
		var description = rec.get('description');
		description = "//" + description;
		var tabId = "showprocess";
		var paramObj = {
			processinstid : rec.get('processinstid')
			// 流程实例id

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
				respath : description,
				readPanel : true
			},
			params : paramObj
		}
		// 打开新标签
		spac.open(tabNode);

	}

}