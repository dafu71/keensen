/**
 * @description 已办工单
 */
com.zoomlion.hjsrm.workflows.WorkFinishedView.prototype.initEvent = function() {

	

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				this.listPanel.doQuery(vals);
			}, this);

	/**
	 * 列表双击行
	 */
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(grid, index, e) {
				var rec = grid.store.getAt(index);
				this.onFlowGraph(rec);
			}, this);
};

/**
 * 流程图按钮点击处理
 */
com.zoomlion.hjsrm.workflows.WorkFinishedView.prototype.onFlowGraph = function() {
	var grid = this.listPanel;
	if (!grid.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据行，请选择一行数据！");
		return;
	}
	var records = grid.getSelectionModel().getSelections();
	if (records.length == 1) {
		this.openFlowGraph(records[0]);
	} else {
		Ext.Msg.alert("系统提示", "只能选择一行数据！");
	}
};

com.zoomlion.hjsrm.workflows.WorkFinishedView.prototype.onDrawBack = function() {
	var me = this;
	var record = this.listPanel.selModel.getSelections();
	if (record.length == 0) {
		Ext.Msg.alert('系统提示', '没有选定数据，请选择数据行!');
		return;
	} else if (record.length > 1) {
		Ext.Msg.alert('系统提示', '仅允许选择一条数据行!');
		return;
	} else if (record[0].data.worklisttype != '1') { // 只允许撤销诉求工单
		Ext.Msg.alert('系统提示', '仅允许撤销诉求工单!');
		return;
	} else {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : '正在执行操作...'
						});
		var data = record[0].data;
		Ext.Msg.confirm('系统提示', '您确定撤销吗？', function(btnText) {
			if (btnText == 'yes') {
				this.requestMask.show();
				Ext.Ajax.request({
					scope : this,
					url : 'com.zoomlion.hjsrm.busi.unifiedappeal.BusiconfirmMgr.drawBackDeliver.biz.ext',
					jsonData : {
						entity : data
					},
					success : function(resp) {
						this.requestMask.hide();
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert('系统提示', '撤销成功!', function() {
										me.listPanel.refresh();
									}, me);
						}
					}
				});
			}
		}, this);
	}
};

/**
 * 打开流程图页面
 * 
 * @param {Ext.data.Record}
 *            workItem
 */
com.zoomlion.hjsrm.workflows.WorkFinishedView.prototype.openFlowGraph = function(
		workItem) {
	var workItemId = workItem.get('workitemid');
	var tabId = "workitem-" + workItemId;
	var processName = workItem.get('processchname');
	var businame = workItem.get('businame');
	var worklisttype = workItem.get('worklisttype');
	var paramObj = {// FIXME 明确到底需要传递什么参数
		pId : workItem.get('processinstid'),// 流程实例id
		tabId : tabId, // 工作项页面标签Id
		processId : workItem.get('processdefid'),// 定义id
		workItemId : workItemId,// 工作项id
		activityName : workItem.get('activityinstname'),// 工作项名称
		activityInstId : workItem.get('activityinstid'),// 活动实例id
		activityId : workItem.get('activitydefid'),// 活动定义id
		flowListId : Ext.id('wfgraph'),// 流程图id
		userId : workItem.get('userid'),// 用户号
		planId : workItem.get('planid'),// 批量号/计划号
		busitype : workItem.get('busitype'), // 业务类型
		busipkid : workItem.get('pkid'), // 业务处理记录表主键
		applyinfopkid : workItem.get('applyinfopkid'), // 诉求主键
		worklistinfopkid : workItem.get('worklistinfopkid')
		// 工单信息表主键
	}
	var spac = Ext.getCmp('spacepanel');
	if (worklisttype == 1) {
		businame += '诉求';
	}
	var tabNode = {
		id : tabId,
		text : businame + '流程图',
		attributes : {
			respath : '/workflows/ticket/workflowsgraph.jsp'
		},
		params : paramObj
	}
	// 打开新标签
	spac.open(tabNode);
}