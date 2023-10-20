/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 综合工单查询
*创建日期： 2014-09-17
*补丁编号： G3_P_20140915_01_107
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//      补丁编号                修改人     日期       归属       备注
// G3_P_20140915_01_107       何源    2014-09-17  集团                                                                      
//=================================================================
com.zoomlion.hjsrm.workflows.compreMgr.prototype.initEvent = function() {

	/**
	 * @description 查询事件处理
	 */
	this.queryBlock.mon(this.queryBlock, 'query', function(form, vals) {
		this.resultBlock.doQuery(vals);
	}, this);
	
	
	/**
	 * @description 行双击事件处理
	 */ 
	this.resultBlock.mon(this.resultBlock, 'rowdblclick', function(grid, index, e) {
		var rec = grid.store.getAt(index);
		this.openFlowGraph(rec);
	}, this);

}
/**
 * @method 流程图按钮点击处理
 */
com.zoomlion.hjsrm.workflows.compreMgr.prototype.showFlowGraph = function() {
	if(this.resultBlock.checkSelection()){
		var records = this.resultBlock.getSelectionModel().getSelections();
		if (records.length == 1) {
			this.openFlowGraph(records[0]);
		} else {
			Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");	
		}
	}
}
/**
 * @method 打开流程图
 * @param {} workitem
 */
com.zoomlion.hjsrm.workflows.compreMgr.prototype.openFlowGraph = function(
		workItem) {
	var workItemId = workItem.get('workitemid');
	var tabId = "workitem-" + workItemId;
	var paramObj = {
		pId : workItem.get('processinstid'),// 流程实例id
		tabId : tabId, // 工作项页面标签Id
		processId : workItem.get('processdefid'),// 定义id
		workItemId : workItemId,// 工作项id
		activityName : workItem.get('activityinstname'),// 工作项名称
		activityInstId : workItem.get('activityinstid'),// 活动实例id
		activityId : workItem.get('activitydefid'),// 活动定义id
		flowListId : Ext.id('wfgraph')// 流程图id
	}
	var spac = Ext.getCmp('spacepanel');
	var tabName = workItem.get('sqbusitypename')+ 
					(workItem.get('worklisttype')=='1' ? '诉求' : '') + '流程图';
	var tabNode = {
		id : tabId,
		text : tabName,
		attributes : {
			respath : '/workflows/ticket/workflowsgraph.jsp'
		},
		params : paramObj
	}
	// 打开新标签
	spac.open(tabNode);
}
com.zoomlion.hjsrm.workflows.compreMgr.prototype.checkWorkItemState = function(records,checkState,errormsg){
	for (var i = 0; i < records.length; i++) {
		if(records[i].get('currentstate')!=checkState){
			Ext.Msg.alert('提示',errormsg);
			return false;
		}
	}
	return true;
}
com.zoomlion.hjsrm.workflows.compreMgr.prototype.onTerminateProcessInstance = function() {
	var records = this.listSelModel.getSelections();
	if (this.checkWorkOrderState(records,['10','4'],'请选择待处理或可签收的工作单!')) {
		var preSign = this.getSignWorkitem(records);
		if(preSign.length>0){
			this.commonHandler.doSign(preSign,this,function(selections){
				this.commonHandler.doStopFlow(selections,this);	
			},records,true);	
		}else{
			this.commonHandler.doStopFlow(records,this);	
		}
	}
}

/**
 * @method 获取可签收的工作项
 */
com.zoomlion.hjsrm.workflows.compreMgr.prototype.getSignWorkitem = function(records){
	var preSign = []
	Ext.each(records,function(rec){
		if(rec.get('currentstate')=='4'){
			preSign.push(rec);	
		}
	});
	return preSign;
}
/**
 * @method 检查工单状态
 */
com.zoomlion.hjsrm.workflows.compreMgr.prototype.checkWorkOrderState  = function(records,checkState,errorMsg){
	for (var i = 0; i < records.length; i++) {
			var state = records[i].get("currentstate");
			if(Ext.isArray(checkState)){
				var passed  =Ext.each(checkState,function(check){
					if(check==state){
						return false;
					}
				},this);
				
				if(Ext.isEmpty(passed)){
					Ext.Msg.alert("系统提示", errorMsg||"工单状态不对!请重新选择");
					return false;
				}	
			}else{
				if(state!=checkState){
					Ext.Msg.alert("系统提示", errorMsg||"工单状态不对!请重新选择");
					return false;
				}	
			}
	}
	return true;
}

//导出EXCEL
com.zoomlion.hjsrm.workflows.compreMgr.prototype.onExportExcel = function(){
	this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : '正在执行操作...'
							});
	var records = this.resultBlock.getSelectionModel().getSelections();
	if(records.length == 0){
		var _vals = this.queryBlock.getForm().getValues() || {};
		Ext.Msg.confirm("系统提示", "您确定要将查询出的数据导出为excel吗?", function(btnText) {
			if (btnText == "yes") {
				this.requestMask.show();
				Ext.Ajax.request({
					scope : this,
					url : 'com.zoomlion.hjsrm.workflows.comprehensive.SynOrderMgr.queryAllWorklistForExport.biz.ext',
					jsonData :  _vals,
					success : function(resp) {
						this.requestMask.hide();
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							window.location.href = "com.zoomlion.hjsrm.frame.bclib.file.FileDownload.flow?fileid="
									+ ret.downloadFile;
						}
					}
				});
			}
		}, this);
	} else{
		this.requestMask.show();
		var applyinfopkids = [];
		for(var i=0; i<records.length; i++){
			applyinfopkids.push(records[i].data.applyinfopkid);
		}
		Ext.Ajax.request({
					scope : this,
					url : 'com.zoomlion.hjsrm.workflows.comprehensive.SynOrderMgr.queryAllWorklistForExport.biz.ext',
					jsonData : {
							'condition/applyinfopkids' : applyinfopkids
						},
					success : function(resp) {
						this.requestMask.hide();
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							window.location.href = "com.zoomlion.hjsrm.frame.bclib.file.FileDownload.flow?fileid="
									+ ret.downloadFile;
						}
					}
				});
	}
}
