com.zoomlion.hjsrm.tuyangbg.Purchase1Mgr = function() {
	this.initPanel = function() {
		Ext.QuickTips.init(); // 为组件提供提示信息功能，form的主要提示信息就是客户端验证的错误信息。
		Ext.form.Field.prototype.msgTarget = 'side';
		this.initEmpListPanel();
		this.initListActionPanel();
		this.initBackItemPanel();
		this.initBackItemWindow();
		this.initOperatorListPanel();
		this.initPopWindow();
		
		this.initArchivesListPanel();
		
		this.initEditPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'purchase1Mgr',
					panels : [this.editPanel]
				});

	}

	this.initEditPanel = function() {
		var _this = this;
		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 600,
			pgrid : '',
			columns : 2,
			border : true,
			autoScroll : true,
			saveUrl : '---',
			loadUrl : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.gettybgbyproid.biz.ext',
			title : '【 采购反馈 】',
			fields : [{
						xtype : 'textfield',
						name : 'tybgId',
						dataIndex : 'tybgId',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'processinstid',
						dataIndex : 'processinstid',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'processStatus',
						dataIndex : 'processStatus',
						hidden : true
					}, {
						xtype : 'hidden',
						name : 'workitemid',
						value : workitemid
					}, {
						xtype : 'textfield',
						name : 'tybgPersonId',
						dataIndex : 'tybgPersonId',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'tybgPersonName',
						fieldLabel : '更改发起人',
						anchor : '80%',
						readOnly : true,
						colspan : 1,
						dataIndex : 'tybgPersonName'
					}, {
						xtype : 'textfield',
						name : 'deptId',
						dataIndex : 'deptId',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'deptName',
						fieldLabel : '部门名称',
						readOnly : true,
						colspan : 1,
						dataIndex : 'deptName'
					}, {
						xtype : 'textfield',
						name : 'tybgContact',
						fieldLabel : '联系方式',
						anchor : '80%',
						readOnly : true,
						colspan : 1,
						dataIndex : 'tybgContact'
					}, {
						xtype : 'textarea',
						name : 'tybgTitle',
						fieldLabel : '标题',
						anchor : '90%',
						colspan : 2,
						readOnly : true,
						blankText : "请输入标题！",
						height : 30
					}, {
						xtype : 'htmleditor',
						fieldLabel : '正文',
						colspan : 2,
						anchor : '90%',
						readOnly : true,
						allowBlank : false,
						name : 'tybgText',
						dataIndex : 'tybgText',
						height : 120
					}, {
						colspan : 2,
						width : 700,
						height : 80,
						isUploaded : false,
						xtype : 'attachmentlist',
						name : 'attachlist',
						id : "DattachId",
						postParams : {
							relationId : 0,
							groupId : 'tybgfile'							
						},
						isDownload : true,
						fieldLabel : '附件列表',
						title : '附件列表',
						itemId : 'attachmentlist'
					}, {
						name : 'actionsPersonName',
						dataIndex : 'actionsPersonName',
						id : actionsPersonId,
						fieldLabel : '意见人',
						style : 'padding-top:3px;padding-left:10px;',
						anchor : '80%',
						readOnly : true,
						xtype : 'textfield',
						allowBlank : false,
						colspan : 1

					}, {
						xtype : 'datetimefield',
						name : 'actonsTime',
						style : 'padding-top:3px;padding-left:10px;',
						fieldLabel : '意见给出时间',
						dataIndex : 'actonsTime',
						anchor : '80%',
						readOnly : true,
						allowBlank : false,
						colspan : 1,
						value : new Date()
					}, {
						xtype : 'radiogroup',
						ref : '../nextItems',
						name : 'nextItems',
						anchor : '90%',
						style : 'padding-top:3px;padding-left:10px;',
						colspan : 1,
						fieldLabel : '处理结果',
						items : [{
									boxLabel : '供应商处理',
									name : 'nextItems',
									inputValue : 'supplierActivity',
									checked : true
								}, {
									boxLabel : '归档',
									name : 'nextItems',
									inputValue : 'guidangActivity'
								}]
					}, {
						xtype : 'textarea',
						name : 'actionsText',
						fieldLabel : '处理意见',
						style : 'padding-top:3px;padding-left:10px;',
						dataIndex : 'actionsText',
						allowBlank : false,
						anchor : '90%',
						maxLength : 1000,
						emptyText : '',
						height : 40,
						colspan : 2
					}, this.listActionPanel, this.listEmpPanel,this.listArchivesPanel],
			buttons : [{
						text : '提交',
						scope : this,
						handler : function() {
							if (_this.editPanel.getForm().isValid()) {
								_this.onSave();
							}

						}
					}, {
						text : '关闭',
						scope : this,
						handler : this.onClose

					}]

		})
	}

	/**
	 * 供应商处理反馈人员选择列表
	 */
	this.initEmpListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.listEmpPanel = new Ext.fn.ListPanel({
			title : '供应商处理反馈人员',
			autoScroll : true,
			colspan : 2,
			height : 200,
			hsPage : false,
			autoExpandColumn : 'orgname',
			tbar : [{
						text : '添加操作员',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelect
					}, {
						text : '移除操作员',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelOperator
					}, {
						text : '加载所有供应商',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onLoadAll
					}],
			indexKey : 'userid',
			delUrl : '...',
			sm : selModel,
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "用户名称",
						dataIndex : "operatorname"
					}, {
						header : "用户账号",
						dataIndex : "userid"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryOperatorByRoleID2.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				baseParams : {
					"roleid" : CURRENTROLEID
				},
				fields : [{
							name : 'userid'
						}, {
							name : 'operatorname'
						}]
			})
				// store : this.storePerson,
				// doQuery : function(roleid) {
				// if (!roleid) {
				// Ext.Msg.alert('提示', '未选择角色,请选择角色');
				// }
				// this.store.baseParams = {
				// 'roleid' : roleid
				// };
				// this.store.load({
				// params : {
				// "pageCond/begin" : 0,
				// "pageCond/length" : this.pagingToolbar.pageSize
				// }
				// });
				// }
		})
	};

	this.initArchivesListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.listArchivesPanel = new Ext.fn.ListPanel({
			title : '归档处理人员(归档默认到相应角色人员)',
			autoScroll : true,
			colspan : 2,
			height : 200,
			hsPage : false,
			tbar : [{
						text : '添加操作员',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelectArchives
					}, {
						text : '移除操作员',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelArchives
					}],
			indexKey : 'userid',
			delUrl : '...',
			sm : selModel,
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "用户名称",
						dataIndex : "operatorname"
					}, {
						header : "用户账号",
						dataIndex : "userid"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryOperatorByRoleID2.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				baseParams : {
					"roleid" : CURRENTROLEID2
				},
				fields : [{
							name : 'userid'
						}, {
							name : 'operatorname'
						}]
			})

		})
	};

	// this.storePerson = this.storePerson || new Ext.data.JsonStore({
	// url :
	// 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryOperatorByRoleID.biz.ext',
	// root : 'data',
	// totalProperty : 'totalCount',
	// baseParams : {
	// "roleid" : "105"
	// },
	// fields : [{
	// name : 'orgname'
	// }, {
	// name : 'roleid'//
	// }, {
	// name : 'userid'// 登陆用户名
	// }, {
	// name : 'operatorname'// 操作员名称
	// }, {
	// name : 'dataorgid'
	// }, {
	// name : 'operatorid'// 操作员ID
	// }]
	// });

	/** ====================================================================================================== */

	/**
	 * 弹出操作员窗口
	 */
	this.initPopWindow = function() {
		this.popWindow = new Ext.Window({
					title : '选择操作员',
					closeAction : 'hide',
					layout : 'fit',
					padding : '5 5 5 5',
					modal : true,
					width : 700,
					height : 310,
					buttonAlign : 'center',
					currentRole : {},
					items : [this.operatorListPanel],
					buttons : [{
						text : '添加',
						scope : this,
						handler : function() {
							var selections = this.operatorListPanel.selModel
									.getSelections();
							this.popWindow.fireEvent('addOperator', selections);

						}
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.popWindow.hide();
						}
					}],
					tbar : [{
								ref : '../dataorgid',
								xtype : 'textfield',
								name : 'dataorgid',
								hidden : true
							}, {
								xtype : 'label',
								text : '操作员名称:'
							}, {
								xtype : 'textfield',
								ref : '../operatorname',
								name : 'operatorname'
							}, '-', {
								xtype : 'label',
								text : '员工编号:'
							}, {
								xtype : 'textfield',
								ref : '../operatorid',
								name : 'operatorid'
							}, '-', {
								xtype : 'label',
								text : '业务机构:'
							}, {
								xtype : 'textfield',
								ref : '../orgnames',
								name : 'orgnames'
							}, '-', {
								text : '查询',
								scope : this,
								handler : function() {
									var _operatorname = this.popWindow.operatorname
											.getValue();
									var _operatorid = this.popWindow.operatorid
											.getValue();
									var _orgnames = this.popWindow.orgnames
											.getValue();
									Ext.apply(this.popWindow.currentRole, {
												operatorname : _operatorname,
												userid : _operatorid,
												orgnames : _orgnames
											})
									this.operatorListPanel
											.doQuery(this.popWindow.currentRole);
								}
							}, '-', {
								text : '重置',
								scope : this,
								handler : function() {
									this.popWindow.operatorname.setValue();
									this.popWindow.operatorid.setValue();
									this.popWindow.orgtree.reset();
									this.popWindow.dataorgid.setValue();
								}
							}],
					loadOperator : function(role) {
						this.operatorListPanel.doQuery(role);
					}

				})

	};

	/**
	 * 具体操作员选择
	 */
	this.initOperatorListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.operatorListPanel = new Ext.fn.ListPanel({
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "操作员名称",
						autoWidth : true,
						dataIndex : "operatorname"
					}, {
						header : "登陆用户名",
						autoWidth : true,
						dataIndex : "userid"
					}, {
						header : "所属公司",
						dataIndex : "orgname",
						id : 'orgname',
						autoWidth : true,
						sortable : true
					}, {
						header : "业务机构",
						autoWidth : true,
						dataIndex : "orgnames"
					}],
			sm : selModel,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryOperatorNotInRoleWithDataOrgID.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'operatorid'// 操作员ID
						}, {
							name : 'userid'// 登陆用户名
						}, {
							name : 'operatorname'// 操作员名称

						}, {
							name : 'orgname'// 所属机构

						}, {
							name : 'dataorgid'// 数据归属

						}, {
							name : 'orgnames'// 业务机构

						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'operator/operatorname' : val.operatorname,
					'operator/userid' : val.userid,
					'roleid' : val.roleid,
					'operator/dataorgid' : val.dataorgid,
					'operator/orgnames' : val.orgnames
				};
				this.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : this.pagingToolbar.pageSize
							}
						});
			}

		})

	};

	// //////////////////////////////////流程处理信息/////////////////////////////////////////////////////////

	/**
	 * 技术通知中，流程处理信息
	 */
this.initListActionPanel = function() {
		this.listActionPanel = new Ext.fn.ListPanel({
					title : '流程处理信息',
					autoHeight:true,
					hsPage : false,
					colspan : 2,
					delUrl : '...',
					autoExpandColumn : '2',
					columns : [new Ext.grid.RowNumberer(),{
								header : "流程环节",								
								dataIndex : "itemsName"
							}, {
								header : "处理意见",								
								dataIndex : "actionsText"
							},{
								header : "处理人",								
								dataIndex : "actionsPersonName"
							},{
								header : "处理时间",	
								anchor : '100%',
								dataIndex : "actonsTime"
							}],
					store : this.storeAction					
				})
	};

	this.storeAction = this.storeAction || new Ext.data.JsonStore({
		url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.queryTybgNoticeItems.biz.ext',
		root : 'data',
		totalProperty : 'totalCount',
		baseParams : {
			"entity/processinstid" : processinstid
		},
		fields : [{
					name : 'itemsName'
				}, {
					name : 'actionsText'// 操作内容
				}, {
					name : 'actionsPersonName'// 登陆用户名
				}, {
					name : 'actonsTime'// 操作时间
				}]
	});

	// //////////////////////////////////回退窗口//////////////////////////////////////////

	/**
	 * 技术通知新增表单
	 */
	this.initBackItemWindow = function() {
		this.veattachId = Ext.id();
		this.backItemWindow = this.backItemWindow || new Ext.Window({
					columns : 2,
					autoScroll : true,
					collapsible : true,
					maximizable : false,
					constrain : true,
					modal : true,
					padding : 1,
					buttonAlign : "center",
					layout : "fit",
					id : 'backItemShow',
					saveUrl : '...',
					width : 480,
					height : 300,
					title : '技术通知回退',
					border : true,
					buttons : [{
								text : '确定',
								scope : this,
								handler : this.onBack

							}, {
								text : "关闭",
								scope : this,
								handler : this.onBackClose
							}],
					items : [this.backitemPanel]
				});
	};

	/**
	 * 技术通知中，流程处理信息
	 */
	this.initBackItemPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true
				});
		this.backitemPanel = new Ext.fn.ListPanel({
					title : '流程环节',
					autoHeight : true,
					hsPage : false,
					colspan : 2,
					id : "backitemPanel",
					delUrl : '...',
					autoExpandColumn : '2',
					sm : selModel,
					viewConfig : {
						forceFit : true
					},
					columns : [new Ext.grid.RowNumberer(), selModel, {
								header : "流程环节",
								dataIndex : "name"
							}],
					store : this.backItemStore
				})
	};

	this.backItemStore = this.backItemStore || new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.queryBackItemstybg.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				baseParams : {
					"entity/processinstid" : processinstid,
					"entity/workitemid" : workitemid,
					"entity/times" : new Date()
				},
				fields : [{
							name : 'id'
						}, {
							name : 'name'
						}]
			});
}