com.keensen.ump.research.project.ProjectBaseMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		this.initProjectUserWindow();
		this.initChooseUserWindow();

		this.initChooseSingleUserWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'projectbasemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 90,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								ref : '../projectCode',
								name : 'condition/projectCode',
								fieldLabel : '项目编号'
							}, {
								xtype : 'textfield',
								ref : '../projectName',
								name : 'condition/projectName',
								fieldLabel : '项目名称'
							}]
				});

		this.queryPanel.addButton({
					text : "导出项目信息",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "导出项目人员",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportProjectUser
				});

		this.queryPanel.addButton({
					text : "导出项目人员工时统计",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportUserWork
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : '项目人员',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onArrange
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.reseach.project.deleteProjectBase.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'projectCode',
						header : '项目编码'
					}, {
						dataIndex : 'projectName',
						width : 300,
						header : '项目名称'
					}, {
						dataIndex : 'headmanName',
						header : '项目组长'
					}, {
						dataIndex : 'projectStart',
						header : '项目开始日期'
					}, {
						dataIndex : 'projectEnd',
						header : '项目结束日期'
					}, {
						dataIndex : 'userCount',
						header : '项目人数'
					}, {
						dataIndex : 'fillingHours',
						header : '研发总时长'
					}, {
						dataIndex : 'confirmHours',
						header : '已确认总时长'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'nameSqlId' : 'com.keensen.ump.produce.reseach.project.queryProjectBase'
				},
				fields : [{
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'status'
						}, {
							name : 'projectCode'
						}, {
							name : 'projectName'
						}, {
							name : 'projectStart'
						}, {
							name : 'projectEnd'
						}, {
							name : 'entityName'
						}, {
							name : 'userCount'
						}, {
							name : 'fillingHours'
						}, {
							name : 'confirmHours'
						}, {
							name : 'headmanId'
						}, {
							name : 'headmanName'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.reseach.project.saveProjectBase.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/projectCode',
							allowBlank : false,
							fieldLabel : '项目编号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/projectName',
							allowBlank : false,
							fieldLabel : '项目名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							ref : '../../headmanName',
							name : 'entity/headmanName',
							allowBlank : false,
							fieldLabel : '项目组长',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onChooseHeadman();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : "dateregion",
							colspan : 1,
							allowBlank : false,
							anchor : '95%',
							nameArray : ['entity/projectStart',
									'entity/projectEnd'],
							fieldLabel : "项目工期",
							format : "Y-m-d"
						}, {
							xtype : 'hidden',
							name : 'entity/entityName',
							value : 'com.keensen.ump.produce.research.KsResearchProjectBase'
						}, {
							xtype : 'hidden',
							ref : '../../headmanId',
							name : 'entity/headmanId'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.base.common.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.reseach.project.saveProjectBase.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'projectCode',
							name : 'entity/projectCode',
							allowBlank : false,
							fieldLabel : '项目编号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/projectName',
							dataIndex : 'projectName',
							allowBlank : false,
							fieldLabel : '项目名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							ref : '../../headmanName',
							dataIndex : 'headmanName',
							name : 'entity/headmanName',
							allowBlank : false,
							fieldLabel : '项目组长',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onChooseHeadman();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : "dateregion",
							colspan : 1,
							allowBlank : false,
							anchor : '95%',
							nameArray : ['entity/projectStart',
									'entity/projectEnd'],
							fieldLabel : "项目工期",
							format : "Y-m-d"
						}, {
							xtype : 'hidden',
							name : 'entity/entityName',
							value : 'com.keensen.ump.produce.research.KsResearchProjectBase'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							ref : '../../projectStart',
							dataIndex : 'projectStart'
						}, {
							xtype : 'hidden',
							ref : '../../projectEnd',
							dataIndex : 'projectEnd'
						}, {
							xtype : 'hidden',
							ref : '../../headmanId',
							dataIndex : 'headmanId',
							name : 'entity/headmanId'
						}]
			}]
		});
	}

	this.initViewWindow = function() {

		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
					title : '查看',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					defaults : {
						autoScroll : true
					},
					items : [{
						xtype : 'viewpanel',
						baseCls : "x-plain",
						columns : 1,
						loadUrl : 'com.keensen.ump.base.common.expandEntity.biz.ext',
						fields : [{
									xtype : 'textfield',
									dataIndex : 'projectCode',
									readOnly : true,
									fieldLabel : '项目编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'projectName',
									fieldLabel : '项目名称',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'headmanName',
									fieldLabel : '项目组长',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : "dateregion",
									colspan : 1,
									readOnly : true,
									anchor : '95%',
									nameArray : ['entity/projectStart',
											'entity/projectEnd'],
									fieldLabel : "项目工期",
									format : "Y-m-d"
								}, {
									xtype : 'hidden',
									ref : '../../projectStart',
									dataIndex : 'projectStart'
								}, {
									xtype : 'hidden',
									ref : '../../projectEnd',
									dataIndex : 'projectEnd'
								}]
					}]
				});
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

	this.initChooseSingleUserWindow = function() {

		var chooseSingleUserSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseSingleUserListPanel = this.chooseSingleUserListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleUser
							}],
					hsPage : true,
					selModel : chooseSingleUserSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							chooseSingleUserSelModel, {
								dataIndex : 'userName',
								header : '人员名称'
							}, {
								dataIndex : 'userId',
								header : '登录账号'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : true,
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

		this.queryChooseSingleUserPanel = this.queryChooseSingleUserPanel
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
										fieldLabel : '人员名称'
									}, {
										xtype : 'textfield',
										name : 'condition/userId',
										anchor : '85%',
										fieldLabel : '登录账号'
									}]
						});

		this.queryChooseSingleUserPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSingleUserWindow.hide();
					}

				});

		this.chooseSingleUserWindow = this.chooseSingleUserWindow
				|| new Ext.Window({
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
							items : [this.queryChooseSingleUserPanel,
									this.chooseSingleUserListPanel]

						});
	}
}