com.zoomlion.hjsrm.tuyangbg.GsxgbmyjMgr = function() {
	this.initPanel = function() {
		Ext.QuickTips.init(); // 为组件提供提示信息功能，form的主要提示信息就是客户端验证的错误信息。
		Ext.form.Field.prototype.msgTarget = 'side';
		this.initEmpListPanel();
		this.initEditPanel();

		this.initBackItemPanel();
		this.initBackItemWindow();
		// this.initOperatorListPanel();
		this.storePerson.load();
		// this.initPopWindow();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'gsxgbmyjMgr',
					panels : [this.editPanel]
				});

	}

	this.initEditPanel = function() {
		var _this = this;
		this.aattachId = Ext.id();
		this.editPanel = new Ext.fn.EditPanel({
			height : 600,
			pgrid : '',
			columns : 2,
			border : true,
			autoScroll : true,
			saveUrl : '---',
			loadUrl : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.gettybgbyproid.biz.ext',
			title : '【 图样变更相关部门意见 】',
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
						anchor : '80%',
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
						height : 50
					}, {
						xtype : 'htmleditor',
						fieldLabel : '正文',
						colspan : 2,
						anchor : '90%',
						readOnly : true,
						allowBlank : false,
						name : 'tybgText',
						dataIndex : 'tybgText',
						height : 200
					}, {
						colspan : 2,
						width : 700,
						height : 80,
						isUploaded : false,
						xtype : 'attachmentlist',
						name : 'attachlist',
						id : this.aattachId,
						postParams : {
							relationId : 0,
							groupId : 'tybgfile',
							dataorgid : dataorgid,
							operatorid : operatorid,
							operatorname : operatorname
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
						allowBlank : false,
						colspan : 1,
						readOnly : true,
						value : new Date()
					}, {
						xtype : 'textarea',
						name : 'actionsText',
						fieldLabel : '部门意见',
						style : 'padding-top:3px;padding-left:10px;',
						dataIndex : 'actionsText',
						allowBlank : false,
						anchor : '90%',
						maxLength : 1000,
						emptyText : '请输入相关处理意见!',
						height : 120,
						colspan : 2
					}, this.listEmpPanel],
			buttons : [{
						text : '回退',
						scope : this,
						handler : function() {
							if (_this.editPanel.getForm().isValid()) {
								_this.onBackItem();
							}

						}
					}, {
						text : '提交',
						scope : this,
						handler : this.onSave
					}, {
						text : '关闭',
						scope : this,
						handler : this.onClose

					}]

		})
	}

	/**
	 * 图样变更参与者选择列表
	 */
	this.initEmpListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.listEmpPanel = new Ext.fn.ListPanel({
					title : '下一环节处理人员',
					autoScroll : true,
					colspan : 2,
					height : 150,
					hsPage : false,
					autoExpandColumn : 'orgname',
					tbar : [{
								text : '移除操作员',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelOperator
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
					store : this.storePerson,
					doQuery : function(roleid) {
						if (!roleid) {
							Ext.Msg.alert('提示', '未选择角色,请选择角色');
						}
						this.store.baseParams = {
							'roleid' : roleid
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

	this.storePerson = this.storePerson || new Ext.data.JsonStore({
		url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryOperatorByRoleID.biz.ext',
		root : 'data',
		totalProperty : 'totalCount',
		baseParams : {
			"roleid" : "183"
		},
		fields : [{
					name : 'orgname'
				}, {
					name : 'roleid'// 
				}, {
					name : 'userid'// 登陆用户名
				}, {
					name : 'operatorname'// 操作员名称
				}, {
					name : 'dataorgid'
				}, {
					name : 'operatorid'// 操作员ID
				}]
	});

	/** =====================================人员选择窗口================================================================= */

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
					"entity/workitemid" : workitemid
				},
				fields : [{
							name : 'id'
						}, {
							name : 'name'
						}]
			});
}