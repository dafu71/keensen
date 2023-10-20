com.zoomlion.hjsrm.workflows.WorkFlowsInfo.prototype.initEvent = function() {
	// 加载流程图
	var tabPanel = this.flowChartPanel;
	var h = tabPanel.height;
	var url = 'workflows/ticket/grapMgr.jsp?pId=' + this.params.pId + '&workItemId=' + this.workListId;
	
	tabPanel.removeAll();
	var flowId = Ext.id(null,'workflows')
	var params = h+",'"+flowId+"'";
	tabPanel.add({
		xtype : "panel",
		html : '<iframe id ="'+flowId+'"'+
				' width="100%" '+
				' onLoad="iFrameHeight('+params+')" '+
				' scrolling="no" '+
				' align = "center" '+
				' padding="0px 0px 2px 0px" '+
				' frameborder="0" '+
				' src='+url+'></iframe>'
	});

	tabPanel.doLayout();

	// 加载流程工作项
	this.flowListPanel.doQuery({
					"condition/processinstid" : this.params.pId
				});

	// 双击事件
	this.flowListPanel.mon(this.flowListPanel, 'rowdblclick', function(obj, index, e) {
		return false;
				this.showWin.show();
				var activity = this.flowListPanel.getSelectionModel().getSelected();
				TicketFunctionMgr =  new Ext.util.MixedCollection(true);
				
                var tabId ="workitem-"+activity.get('workitemid');
				var paramObj = {
					pId:activity.get('processinstid'),// 流程实例id
					processId:activity.get('processdefid'),// 定义id
					workItemId:activity.get('workitemid'),// 工作项id
					url : activity.get('actionurl'),//	流程图中配置的url
					activityName:activity.get('activityinstname'),// 工作项名称
					activityInstId:activity.get('activityinstid'),// 活动实例id
					activityId:activity.get('activitydefid'),// 活动定义id
					userId : activity.get('userid'),// 用户号
					busitype:activity.get('busitype'), //业务类型
					busipkid : activity.get('busipkid'), //业务处理记录表主键
					applyinfopkid : activity.get('applyinfopkid'), //诉求主键
					worklistinfopkid : activity.get('worklistinfopkid'),//工单信息表主键
					noTitle:true//不显示标题 用于历史面板显示
		        }
		        //创建加载jsp的Panel
		        this.loadWorkinfoPanel.sheetParams = paramObj;
		        
		        var sheetUrl = '/workflows/ticket/workItem.jsp';
		        var busitype = paramObj.busitype;
		        var activityDefId = paramObj.activityId;
		        var cfgUrl = paramObj.url;
		        this.loadWorkinfoPanel.loadPanel(this.key,sheetUrl,busitype,activityDefId,cfgUrl);
			}, this);
}

//该函数为解决流程图展示不全的问题  @陈今伟 2013/07/27
function iFrameHeight(h,flowId) {
	var ifm = document.getElementById(flowId);
	var subWeb = document.frames ? document.frames[flowId].document : ifm.contentDocument;
	if (ifm != null && subWeb != null) {
		//	如果容器载体高度大于流程图的高度,流程图的高度采用容器载体的高度
		if(h >= subWeb.body.scrollHeight){
			//	剔除边框高度
			ifm.height = h - 2;
		}else{
			ifm.height = subWeb.body.scrollHeight - 2;
		}
	}
}