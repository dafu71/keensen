/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 我的工作-已派工单
*创建日期： 2014-09-17
*补丁编号： G3_P_20140915_01_107
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//      补丁编号                修改人     日期       归属       备注
// G3_P_20140915_01_107       何源    2014-09-17  集团                                                                      
//=================================================================
com.zoomlion.hjsrm.workflows.WorkinSent.prototype.initEvent = function() {
	/**
     * 查询面板-查询事件处理
	 */
	this.queryPanel.mon(this.queryPanel,'query', function(form, vals){
		this.listPanel.doQuery(vals);
	},this);
	
	/**
     * 查询面板-业务类别-选择事件处理
	 */
//	this.queryPanel.processdefid.mon(this.queryPanel.processdefid,'select', function(combo, record, index){
//		//清空当前环节数据
//		this.queryPanel.activitydefid.clearValue();
//		this.queryPanel.activitydefid.store.clearData();
//		//当前环节查询条件
//		this.queryPanel.activitydefid.store.baseParams = {
//			'processDefID': record.data.processDefID
//		};
//		this.queryPanel.activitydefid.store.load({
//			add : false
//		});
//	},this);
	
	/**
	 * 列表双击行
	 */
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(grid, index,e) {
		var rec = grid.store.getAt(index);
		this.openFlowGraph(rec);
	}, this);
};

/**
 * 流程图按钮点击处理
 */
com.zoomlion.hjsrm.workflows.WorkinSent.prototype.onFlowGraph = function(){
var grid = this.listPanel;
	if (!grid.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据行，请选择一行数据！");
		return;
	}
	var records = grid.getSelectionModel().getSelections();
	if (records.length == 1) {
		this.openFlowGraph(records[0]);
	}else{
		Ext.Msg.alert("系统提示", "只能选择一行数据！");
	}
	
	
}
/**
 * @description 打开流程图页面
 * @param {Ext.data.Record} workItem
 */
com.zoomlion.hjsrm.workflows.WorkinSent.prototype.openFlowGraph = function(workItem){
	var workItemId = workItem.get('workitemid');
	var tabId ="workitem-"+workItemId;
	var paramObj = {
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
		//工单信息表主键
	}
	var spac = Ext.getCmp('spacepanel');
	var tabName = workItem.get('processchname') + '流程图';
	var tabNode = {
	       id:tabId,
	       text:tabName,//TODO 工作项标签标题
	       attributes:{respath:'/workflows/ticket/workflowsgraph.jsp'},
	       params:paramObj
	}
	//打开新标签
	spac.open(tabNode);	
}
