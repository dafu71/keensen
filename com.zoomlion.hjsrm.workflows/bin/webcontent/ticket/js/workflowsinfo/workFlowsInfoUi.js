/**
 * @description 流程图和历史工作项
 * @param {} params
 */
com.zoomlion.hjsrm.workflows.WorkFlowsInfo = function(params) {
	this.params = params;
	this.initPanel = function() {
		this.createQueryPanel();
		this.createListPanel();
		this.buildWorkItemTabPanel();
		this.workFlowsInfoPanel = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					iconCls:'icon-flow',
					title : '流程图',
					panels : [this.flowChartPanel, this.flowListPanel]
				});
		if(params.renderDiv){//用于单独渲染
			this.workFlowsInfoPanel.render(params.renderDiv);
			return this.workFlowsInfoPanel;
		}		
	}
	this.destroy = function(){
		if(this.showWin){
			this.showWin.destroy();
		}
	},
	this.buildWorkItemTabPanel = function(){
		this.key = Ext.id();
		this.loadWorkinfoPanel = new Srm.workflows.LoadWorkinfoPanel({
			fnKey:this.key,
			border:false,
			sheetParams:this.params
		});
		this.showWin = new Ext.Window({
							height : 500,
							width : 1000,
							layout :'fit',
							title:'当前环节操作信息',
							closeAction : 'hide',
							buttonAlign : 'center',
							minimizable:true,
							border:false,
							maximizable:true,
							buttonAlign : 'center',
							items : [this.loadWorkinfoPanel],
							buttons : [{
										text : '关闭',
										scope : this,
										handler : function() {
											this.showWin.hide();
										}
									}]
						});
	}
	// 创建流程图模块
	this.createQueryPanel = function() {
		this.flowChartPanel = new Ext.Panel({
					height : 250,
					autoScroll : true,
					border : false
				});
	}
	// 创建流程工作项列表
	this.createListPanel = function() {
		this.workListId = Ext.id();
		this.flowListPanel = new Ext.fn.ListPanel({
			title : '历史环节信息<font style="color:red">----直接双击可查看环节历史操作信息</font>',
			title : '历史环节信息',
			id : this.workListId,
			enableHdMenu : true,// 列头选择排序以及隐藏显示列菜单开关
			viewConfig : {// 设置默认列宽
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), {
						header : "业务类别",
						dataIndex : "processinstname",
						name : "processinstname"
					}, {
						header : "环节名称",
						dataIndex : "activityinstname",
						name : "activityinstname"
					}, {
						header : "接收时间",
						dataIndex : "createtime",
						name : "createtime"
					}, {
						header : "完成时间",
						dataIndex : "endtime",
						name : "endtime"
					}, {
						header : "执行人",
						dataIndex : "assistant",
						name : "assistant"
					}],
			store : new Ext.data.JsonStore({
				autoLoad : false,
				url : "com.zoomlion.hjsrm.workflows.ticket.Ticket.queryWorkItems.biz.ext",
				root : 'data',
				totalProperty : 'totalCount',
				fields : [ "processinstname" , "processinstid" , "processdefid" , 
							"workitemid" , "actionurl" , "activityinstname" , 
							"activityinstid" , "activitydefid" , "participantid" , 
							"userid" , "busitype" , "activityinstname" , 
							"planinfopkid" , "applyinfopkid" , "worklistinfopkid" 
							, "busipkid" , "createtime" , "endtime" , "assistant" ]
			})
		});
	}
}
