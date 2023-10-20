/*
 * 创建人员面板
 */
com.zoomlion.hjsrm.orgright.orgrightMgr = function() {
	this.initPanel = function() {
		// 构建员工机构
		this.optorgMgr = new com.zoomlion.hjsrm.orgright.optorgMgr();
		this.optorgMgr.initPanel();
		this.optorgMgr.initEvent();	

		// 初始化操作员查询、列表
		this.createOperQueryPanel();
		this.createOperGridPanel();		
		
		this.operPanel = new Ext.fn.fnLayOut({
									//title:'操作员管理',
									layout : 'ns',
									autoScroll: true,
									renderTo : "orgrightDiv",
									panels : [this.operQueryPanel,this.operGridPanel]
								});
		return this.operPanel;
	};


	// 操作员查询面板
	this.createOperQueryPanel = function() {
		this.operQueryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					title:'操作员查询',
					fields : [{
								xtype : 'textfield',
								name : 'query/userid',
								fieldLabel : '登录用户名'
							}, {
								xtype : 'textfield',
								name : 'query/operatorname',
								fieldLabel : '操作员名称'
							}, {
								xtype : 'textfield',
								name : 'query/empcode',
								fieldLabel : '员工编号'
							}]
				});
	};


	// 操作员列表
	this.createOperGridPanel = function() {
		var _store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryOperators.biz.ext',
			autoLoad : true,
			root : 'data',
			totalProperty : 'totalCount',
			fields : [{
						name : 'userid'// 登录用户名
					}, {
						name : 'operatorname'// 操作员名称
					}, {
						name : 'authmode'// 认证模式
					}, {
						name : 'status'// 操作员状态
					}, {
						name : 'lastlogin'// 最近登录时间
					}, {
						name : 'operemail'// 邮箱
					}, {
						name : 'empcode'// 员工编号
					}, {
						name : 'empname'// 员工姓名
					}, {
						name : 'empid'// 员工id
					}, {
						name : 'operatorid'// 操作员编号
					}, {
						name : 'dataorgid'// 数据归属
					},{
						name : 'dataorgname'// 数据归属
					}, {
						name : 'delflag'// 员工删除状态
					}, {
						name : 'empstatus'// 员工状态
					},{name:'clientnum'}, {
						name : 'orgnames'// 业务机构
					}]
		});
		var _selModel = new Ext.grid.CheckboxSelectionModel({});
		this.operGridPanel = new Ext.fn.ListPanel({
					///title : '操作员列表',
					store : _store,
					sm : _selModel,
					columns : [new Ext.grid.RowNumberer(), _selModel, {
								dataIndex : 'empstatus',hidden : true
							}, {
								dataIndex : 'operatorname',
								header : '操作员名称',
								sortable : false,
								width:150
							}, {
								dataIndex : 'empcode',
								header : '员工编号',
								width:200,
								sortable : true
							},{
								dataIndex : 'userid',
								header : '登录用户名',
								width:120,
								sortable : true
							},{
								width:250,
								dataIndex : 'orgnames',
								header : '业务机构',
								sortable : false
							}, {
								width:100,
								dataIndex : 'dataorgname',
								header : '所属公司',
								sortable : false
							}],
					tbar : [ {
								text : '机构权限维护',
								scope : this,
								iconCls : 'icon-application_lightning',
								handler : this.onSetOrgQuery
							}]
				});
	};

}