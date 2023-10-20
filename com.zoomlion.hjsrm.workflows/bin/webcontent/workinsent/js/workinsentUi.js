/**
 * 
 * <pre>
 * Title
 * : 我的工作-已派工单
 *     Description:查询已派工作单，并提供环节流程图查询功能。
 * </pre>
 * 
 * @author 蔡慧文
 * @version 1.0
 * 
 */
/*
 * =======================修改历史==============================
 * 
 * 
 */
com.zoomlion.hjsrm.workflows.WorkinSent = function() {
	this.initPanel = function() {
		// 初始化主面板
		this.initQueryPanel();
		this.initListPanel();
		// 布局
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "workinsentDiv",
					panels : [this.queryPanel, this.listPanel]
				});
	};

	// 销毁对象(目前只有window)
	this.destroy = function() {
	};

	// 初始化查询面板
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 130,
					width : 500,
					columns : 4,
					title : '已派工作单查询',
					fields : [{
								xtype : "processcombox",
								name : "condition",
								processHiddenName : "busitype",
								stepHiddenName : "activitydefid",
								colspan : 2
							},
							{
								xtype : 'userselectfield',
								displayField : 'userid',
								filterByAera : false,
								fieldLabel : '用户/项目编号',
								name : 'condition/userid'
							}, {
								name : 'condition/username',
								fieldLabel : '用户/项目名称'
							}, {
								name : 'condition/stenocode',
								fieldLabel : '用户速记码'
							}, {
								fieldLabel : '目标部门',
								xtype : 'orgtreecombo',
								itemId : 'orgtreecombo',
								ref : '../orgtree',
								hiddenName : 'condition/destorg',
								queryType : 'dataarea'
							}, {
								name : 'condition/destoptrname',
								fieldLabel : '目标人员'
							}]
				});
	};

	// 列表面板-参数配置
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '已派工作单查询结果',
			tbar : ['->', '-', {
						xtype : 'button',
						text : "流程图",
						iconCls : 'icon-flow',
						scope : this,
						handler : this.onFlowGraph
					}],
			sm : selModel,
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "业务类型",
						dataIndex : "processchname"
					}, {
						header : "工作项名称",
						dataIndex : "workitemname"
					}, {
						header : "用户/项目编号",
						dataIndex : "userid"
					}, {
						header : "用户/项目名称",
						dataIndex : "username"
					}, {
						header : "用户地址",
						width : 270,
						dataIndex : "gasaddress"
					}, {
						header : "目标部门",
						dataIndex : "destorgname"
					}, {
						header : "目标人员",
						dataIndex : "destoptrname"
					}, {
						header : "分配时间",
						dataIndex : "dispatchtime",
						sortable : true
					}, {
						header : "状态",
						dataIndex : "workstate"
					}],
			store : new Ext.data.GroupingStore({
				url : 'com.zoomlion.hjsrm.workflows.workinsent.WorkinSent.querySentWithPage.biz.ext',
				autoLoad : false,
				groupField : 'processchname',
				reader : new Ext.data.JsonReader({
							root : 'data',
							totalProperty : 'totalCount',
							fields : [{
										name : 'processdefid'
									}, {
										name : 'processinstid'
									}, {
										name : 'workitemid'
									}, {
										name : 'processchname'
									}, {
										name : 'workitemname'
									}, {
										name : 'ticketid'
									}, {
										name : 'userid'
									}, {
										name : 'username'
									}, {
										name : 'gasaddress'
									}, {
										name : 'workstate'
									}, {
										name : 'dispatchtime'
									}, {
										name : 'destorgname'
									}, {
										name : 'destoptrname'
									}]
						})
			}),
			view : new Ext.grid.GroupingView({
				forceFit : true,
				groupTextTpl : '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})'
			})
		});
	};
}