/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 归档下发 创建日期： 2014-12-15 补丁编号： G3_P_20141215_20001_249 作
 * 者： 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 王富强 2014-12-18 集团
//
// =================================================================
/*******************************************************************************
 * 版权所有： 描 述： 技术通知管理流程归档下发UI界面 创建日期：2014/12/17 作 者： 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// 
// =================================================================
com.zoomlion.hjsrm.techNotice.NextsMgr = function() {
	this.initPanel = function() {

		Ext.QuickTips.init(); // 为组件提供提示信息功能，form的主要提示信息就是客户端验证的错误信息。
		Ext.form.Field.prototype.msgTarget = 'side';
		this.initEmpListPanel();
		this.initListActionPanel();
		this.initBackItemPanel();
		this.initBackItemWindow();
		this.initOperatorListPanel();
		this.initPopWindow();

		this.initPartListPanel();
		this.initEditPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'nextsMgr',
					panels : [this.editPanel]
				});

	}

	this.initEditPanel = function() {
		var _this = this;
		this.editPanel = new Ext.fn.EditPanel({
			height : 600,
			pgrid : '',
			columns : 2,
			border : true,
			autoScroll : true,
			saveUrl : '---',
			loadUrl : "com.zoomlion.hjsrm.techNotice.noticeMgr.getTechNotice.biz.ext",
			title : '【 技术通知下发 】',
			fields : [{
						name : 'noticeid',
						dataIndex : 'noticeid',
						fieldLabel : '编号',
						anchor : '50%',
						id : noticeId,
						xtype : 'displayfield',
						style : 'padding-top:3px;padding-left:10px;',
						allowBlank : false,
						readOnly : true,
						colspan : 2
					}, {
						name : 'weavepersonname',
						dataIndex : 'weavepersonname',
						style : 'padding-top:3px;padding-left:10px;',
						fieldLabel : '编制人',
						anchor : '90%',
						readOnly : true,
						xtype : 'displayfield',
						allowBlank : false,
						colspan : 1
					}, {
						name : 'deptname',
						dataIndex : 'deptname',
						fieldLabel : '所属部门',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly : true,
						anchor : '90%',
						xtype : 'displayfield',
						allowBlank : false,
						colspan : 1
					}, {
						xtype : 'displayfield',
						name : 'applicationtime',
						style : 'padding-top:3px;padding-left:10px;',
						fieldLabel : '申请时间',
						dataIndex : 'applicationtime',
						anchor : '90%',
						allowBlank : false,
						readOnly : true,
						colspan : 1

					}, {
						xtype : 'radiogroup',
						name : 'productType',
						anchor : '90%',
						style : 'padding-top:3px;padding-left:10px;',
						colspan : 1,
						disabled : true,
						fieldLabel : '产品类别',
						items : [{
									boxLabel : '扫路设备',
									name : 'productType',
									inputValue : 1
								}, {
									boxLabel : '清洗设备',
									name : 'productType',
									inputValue : 2
								}, {
									boxLabel : '垃圾设备',
									name : 'productType',
									inputValue : 3
								}, {
									boxLabel : '其他',
									name : 'productType',
									inputValue : 4
								}]
					}, {
						xtype : 'displayfield',
						name : 'productModel',
						style : 'padding-top:3px;padding-left:10px;',
						fieldLabel : '产品型号',
						allowBlank : false,
						readOnly : true,
						dataIndex : 'productModel',
						anchor : '90%',
						colspan : 1
					}, {
						xtype : 'radiogroup',
						name : 'noticeType',
						style : 'padding-top:3px;padding-left:10px;',
						anchor : '60%',
						disabled : true,
						colspan : 1,
						fieldLabel : '通知类型',
						items : [{
									boxLabel : '整改',
									name : 'noticeType',
									inputValue : 1

								}, {
									boxLabel : '试验',
									name : 'noticeType',
									inputValue : 2
								}, {
									boxLabel : '其他',
									name : 'noticeType',
									inputValue : 3
								}]
					}, {
						xtype : 'radiogroup',
						name : 'levels',
						anchor : '32%',
						style : 'padding-top:3px;padding-left:10px;',
						colspan : 2,
						disabled : true,
						fieldLabel : '重要度级别',
						items : [{
									boxLabel : '一般级',
									name : 'levels',
									inputValue : 1

								}, {
									boxLabel : '重要级',
									name : 'levels',
									inputValue : 2
								}, {
									boxLabel : '关键级',
									name : 'levels',
									inputValue : 3
								}]
					}, {
						xtype : 'displayfield',
						name : 'noticetitle',
						fieldLabel : '标题',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly : true,
						dataIndex : 'noticetitle',
						allowBlank : false,
						anchor : '90%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						name : 'noticeText',
						fieldLabel : '正文',
						dataIndex : 'noticeText',
						style : 'padding-top:3px;padding-left:10px;',
						allowBlank : false,
						anchor : '90%',
						maxLength : 1000,
						height : 60,
						colspan : 2
					}, {
						isUploaded : false,
						xtype : 'attachmentlist',
						name : 'attachlist',
						id : "noticeattachfile",
						style : 'padding-top:3px;padding-left:10px;',
						postParams : {
							relationId : 0,
							groupId : 'technotice'
						},
						isDownload : true,
						fieldLabel : '附件列表',
						title : '附件列表',
						itemId : 'attachmentlist'
					}, {
						xtype : 'dictcheckboxgroup',
						style : 'padding-top:3px;padding-left:10px;',
						name : "sendDept",
						fieldLabel : '发送部门',
						dictData : TECH_NOTICES_DEPTS,
						colspan : 2,
						disabled : true,
						columns : 8
					}, {
						xtype : 'hidden',
						name : 'workitemid',
						value : workitemid
					}, {
						xtype : 'hidden',
						name : 'noticeid'
					}, {
						xtype : 'hidden',
						name : 'processinstid',
						value : processinstid
					}, {
						name : 'actionsPersonName',
						dataIndex : 'actionsPersonName',
						id : actionsPersonId,
						fieldLabel : '归档下发人',
						style : 'padding-top:3px;padding-left:10px;',
						anchor : '70%',
						readOnly : true,
						xtype : 'textfield',
						allowBlank : false,
						colspan : 1
					}, {
						xtype : 'datetimefield',
						name : 'actonsTime',
						style : 'padding-top:3px;padding-left:10px;',
						fieldLabel : '处理时间',
						dataIndex : 'actonsTime',
						anchor : '70%',
						allowBlank : false,
						colspan : 1,
						value : new Date()
					}, {
						xtype : 'dictcheckboxgroup',
						style : 'padding-top:3px;padding-left:10px;',
						name : "nextItems",
						fieldLabel : '选择下一环节',
						dictData : TECH_NOTICES_ITEES,
						colspan : 2,
						anchor : '40%',
						allowBlank : false,
						ref : '../nextItems'
					}, {
						xtype : 'textarea',
						name : 'actionsText',
						fieldLabel : '处理意见',
						style : 'padding-top:3px;padding-left:10px;',
						dataIndex : 'actionsText',
						allowBlank : true,
						anchor : '90%',
						maxLength : 1000,
						emptyText : '',
						height : 40,
						colspan : 2
					}, this.listActionPanel, this.listEmpPanel,
					this.listPartPanel],
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
	 * 新增技术通知窗口中，采购反馈参与者选择列表
	 */
	this.initPartListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.listPartPanel = new Ext.fn.ListPanel({
			title : '采购反馈参与人员',
			autoScroll : true,
			colspan : 2,
			height : 200,
			hsPage : false,
			tbar : [{
						text : '添加操作员',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelectPart
					}, {
						text : '移除操作员',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelPart
					}],
			// indexKey : 'userid',
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
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryOperatorByRoleID.biz.ext',
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
		})
	};

	/**
	 * 新增技术通知窗口中，参与者选择列表
	 */
	this.initEmpListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.listEmpPanel = new Ext.fn.ListPanel({
					title : '执行部门反馈处理人员(采购反馈默认到相应角色人员)',
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
			"roleid" : "105"
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
					autoHeight : true,
					hsPage : false,
					colspan : 2,
					delUrl : '...',
					autoExpandColumn : '2',
					columns : [new Ext.grid.RowNumberer(), {
								header : "流程环节",
								dataIndex : "itemsName"
							}, {
								header : "处理意见",
								dataIndex : "actionsText"
							}, {
								header : "处理人",
								dataIndex : "actionsPersonName"
							}, {
								header : "处理时间",
								anchor : '100%',
								dataIndex : "actonsTime"
							}],
					store : this.storeAction
				})
	};

	this.storeAction = this.storeAction || new Ext.data.JsonStore({
		url : 'com.zoomlion.hjsrm.techNotice.ComUtil.queryTechNoticeItems.biz.ext',
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
				url : 'com.zoomlion.hjsrm.techNotice.ComUtil.queryBackItems.biz.ext',
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