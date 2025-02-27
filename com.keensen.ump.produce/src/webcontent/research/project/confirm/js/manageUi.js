com.keensen.ump.research.project.ProjectConfirmnMgr = function() {

	this.initPanel = function() {

		this.rec = {};
		this.nameSqlId = 'com.keensen.ump.produce.reseach.project.queryProjectWork';

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		
		this.initProjectUserWindow();
		this.initChooseUserWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'projectconfirmnmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.projectBaseStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.common.query.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {
				nameSqlId : 'com.keensen.ump.produce.reseach.project.queryProjectBase',
				'condition/manageFlag' : manageFlag,
				'condition/headmanId' : uid
			},
			fields : [{
						name : 'projectName'
					}, {
						name : 'projectCode'
					}, {
						name : 'projectId'
					}]
		})

	}

	this.initQueryPanel = function() {

		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					fields : [{

								anchor : "100%",
								colspan : 1,
								xtype : 'combo',
								mode : 'local',
								ref : '../projectId',
								displayField : 'projectName',
								valueField : 'projectId',
								hiddenName : 'condition/projectId',
								allowBlank : false,
								fieldLabel : '项目名称',
								store : _this.projectBaseStore,
								listeners : {
									scope : this,
									'expand' : function(A) {
										_this.queryPanel.projectId.reset();
									}
								}

							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/projectCode',
								anchor : '100%',
								fieldLabel : '项目编号'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/userName',
								anchor : '100%',
								fieldLabel : '人员名称'
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/workDateStart',
										'condition/workDateEnd'],
								fieldLabel : "作业日期",
								format : "Y-m-d"
							}]
				});

		this.queryPanel.addButton({
					text : "导出项目人员工时",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
				
		this.queryPanel.addButton({
					text : "项目人员",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.onArrange
				});

	}

	this.initListPanel = function() {

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.EditListPanel({
			region : "center",
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '批量确认',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onConfirm
					}, '-', {
						text : '批量取消确认',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onConfirm2
					}],
			autoExpandColumn : '4',
			delUrl : '1.biz.ext',
			id : 'project-confirm-list',
			hsPage : true,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
				header : '操作',
				scope : this,
				renderer : function(v, m, r, i) {
					var projectId = r.get('projectId');
					var userId = r.get('userId');
					var workDate = r.get('workDate');
					var flag = r.get('flag');
					var title = flag == '1' ? "取消确认" : "确认";
					var style = "<a style='color:red;text-decoration:none'";
					var str = style + " href='javascript:confirm(" + projectId
							+ "," + Ext.encode(userId) + ","
							+ Ext.encode(workDate) + "," + flag + ");'>"
							+ title + "</a>";

					return str

				}
			}, {
				dataIndex : 'projectCode',
				width : 100,
				header : '项目编号'
			}, {
				dataIndex : 'projectName',
				width : 150,
				header : '项目名称'
			}, {
				dataIndex : 'userName',
				width : 150,
				header : '人员名称'
			}, {
				dataIndex : 'workDate',
				width : 120,
				header : '作业日期'
			}, {
				dataIndex : 'fillingHours',
				width : 120,
				header : '研发工时'
			}, {
				dataIndex : 'confirmHours',
				width : 60,
				header : '确认工时'
			}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : this.nameSqlId
						},
						fields : [{
									name : 'projectCode'
								}, {
									name : 'projectName'
								}, {
									name : 'projectId'
								}, {
									name : 'userId'
								}, {
									name : 'userName'
								}, {
									name : 'fillingHours'
								}, {
									name : 'confirmHours'
								}, {
									name : 'workDate'
								}, {
									name : 'flag'
								}]
					})
		})
	}
	
	this.initProjectUserWindow = function() {

		var projectUserSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.projectUserListPanel = this.projectUserListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddUser
							}, '-', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelUser
							}],
					hsPage : true,
					selModel : projectUserSelModel,
					delUrl : 'com.keensen.ump.produce.reseach.project.deleteProjectUsers.biz.ext',
					columns : [new Ext.grid.RowNumberer(), projectUserSelModel,
							{
								dataIndex : 'projectCode',
								header : '项目编码'
							}, {
								dataIndex : 'projectName',
								header : '项目名称'
							}, {
								dataIndex : 'userName',
								header : '项目人员名称'
							}, {
								dataIndex : 'userId',
								header : '登录账号'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : 'com.keensen.ump.produce.reseach.project.queryProjectUser'
						},
						fields : [{
									name : 'projectCode'
								}, {
									name : 'projectName'
								}, {
									name : 'userName'
								}, {
									name : 'userId'
								}, {
									name : 'projectId'
								}]
					})
				})

		this.queryProjectUserPanel = this.queryProjectUserPanel
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/userName',
										anchor : '85%',
										fieldLabel : '项目人员名称'
									}, {
										xtype : 'textfield',
										name : 'condition/userId',
										anchor : '85%',
										fieldLabel : '登录账号'
									}, {
										xtype : 'hidden',
										name : 'condition/projectId',
										ref : '../projectId'
									}]
						});

		
				
		this.queryProjectUserPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportUser
				});
				
		this.queryProjectUserPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.projectUserWindow.hide();
					}

				});

		this.projectUserWindow = this.projectUserWindow || new Ext.Window({
					title : '项目人员查询',
					projectId : '',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.queryProjectUserPanel,
							this.projectUserListPanel]

				});
	}

	this.initChooseUserWindow = function() {

		var chooseUserSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.chooseUserListPanel = this.chooseUserListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseUser
							}],
					hsPage : true,
					selModel : chooseUserSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(), chooseUserSelModel,
							{
								dataIndex : 'userName',
								header : '人员名称'
							}, {
								dataIndex : 'userId',
								header : '登录账号'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : 'com.keensen.ump.base.organduser.queryUser'
						},
						fields : [{
									name : 'userName'
								}, {
									name : 'userId'
								}]
					})
				})

		this.queryChooseUserPanel = this.queryChooseUserPanel
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/userName',
										anchor : '85%',
										fieldLabel : '项目人员名称'
									}, {
										xtype : 'textfield',
										name : 'condition/userId',
										anchor : '85%',
										fieldLabel : '登录账号'
									}]
						});

		this.queryChooseUserPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseUserWindow.hide();
					}

				});

		this.chooseUserWindow = this.chooseUserWindow || new Ext.Window({
					title : '人员查询',
					projectId : '',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.queryChooseUserPanel,
							this.chooseUserListPanel]

				});
	}
}