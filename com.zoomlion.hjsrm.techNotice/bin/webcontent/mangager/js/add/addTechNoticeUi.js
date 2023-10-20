/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 流程数据新增 创建日期： 2014-12-15 补丁编号： G3_P_20141215_20001_249 作 者：
 * 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 王富强 2014-12-18 集团
//
// =================================================================
/*******************************************************************************
 * 版权所有： 描 述： 技术通知管理流程新增UI界面 创建日期：2014/12/17 作 者： 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// 
// =================================================================

/*
 * 新增技术通知流程
 */
com.zoomlion.hjsrm.techNotice.AddTechNoicetMgr = function() {
	/**
	 * 初始化新增窗口
	 */
	this.initPanel = function() {
		Ext.QuickTips.init(); // 为组件提供提示信息功能，form的主要提示信息就是客户端验证的错误信息。
		Ext.form.Field.prototype.msgTarget = 'side';
		this.initEmpListPanel();// 操作员列表
		this.initAddTechNoitcePanel();// 主窗口Panel

		this.buildInputWindow();// 主窗口

		this.initOperatorListPanel();// 弹出窗体操作员列表
		this.initPopWindow();// 弹出选择操作员窗体

	}

	/*
	 * 创建新增窗口
	 */
	this.buildInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
					title : '新增技术通知',
					xtype : 'inputpanel',
					pgrid : this.addTechNoticePanel,
					height : 560,
					width : 900,
					items : [_this.addTechNoticePanel],
					buildButtons : function() {
						this.buttons = [{
							text : '提交',
							scope : this,
							handler : function() {
								if (_this.addTechNoticePanel.getForm()
										.isValid()) {
									_this.onSaveOk();
								}
							}
						}, {
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}]
					}
				})
	}

	/**
	 * 技术通知新增表单
	 */
	this.initAddTechNoitcePanel = function() {
		this.productTypeId = Ext.id();
		this.sendDeptId = Ext.id();
		this.addTechNoticePanel = this.addTechNoticePanel
				|| new Ext.fn.InputPanel({
							columns : 2,
							autoScroll : true,
							saveUrl : '...',
							title : '技术通知信息',
							border : true,
							fields : [{
										name : 'noticeId',
										dataIndex : 'noticeId',
										fieldLabel : '编号',
										anchor : '45%',
										id : noticeId,
										xtype : 'textfield',
										allowBlank : false,
										readOnly : true,
										hidden : true,
										colspan : 2
									}, {
										name : 'weavePersonName',
										dataIndex : 'weavePersonName',
										id : personNameId,
										fieldLabel : '编制人',
										anchor : '90%',
										readOnly : true,
										xtype : 'textfield',
										allowBlank : false,
										colspan : 1
									}, {
										name : 'deptName',
										dataIndex : 'deptName',
										fieldLabel : '所属部门',
										id : deptNameId,
										readOnly : true,
										anchor : '90%',
										xtype : 'textfield',
										allowBlank : false,
										colspan : 1
									}, {
										name : 'productModel',
										dataIndex : 'productModel',
										fieldLabel : '产品型号',
										anchor : '90%',
										xtype : 'textfield',
										allowBlank : false,
										colspan : 1
									}, {
										xtype : 'datetimefield',
										name : 'applicationTime',
										fieldLabel : '申请时间',
										anchor : '90%',
										allowBlank : false,
										colspan : 1,
										readOnly : true,
										id : techDate,
										editable : true,
										format : 'Y-m-d H:i:s'
									}, {
										xtype : 'radiogroup',
										name : 'optnoticeType',
										anchor : '65%',
										colspan : 1,
										fieldLabel : '通知类型',
										items : [{
													boxLabel : '整改',
													name : 'noticeType',
													inputValue : 1,
													checked : true
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
										name : 'productType',
										anchor : '90%',
										colspan : 1,
										fieldLabel : '产品类别',
										items : [{
													boxLabel : '扫路设备',
													name : 'productType',
													inputValue : 1,
													checked : true
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
										xtype : 'radiogroup',
										name : 'levels',
										anchor : '35%',
										colspan : 2,
										fieldLabel : '重要度级别',
										items : [{
													boxLabel : '一般级',
													name : 'levels',
													inputValue : 1,
													checked : true
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
										xtype : 'textfield',
										name : 'noticeTitle',
										fieldLabel : '标题',
										dataIndex : 'noticeTitle',
										allowBlank : false,
										emptyText : '标题信息必填',
										anchor : '90%',
										colspan : 2
									}, {
										xtype : 'textarea',
										name : 'noticeText',
										fieldLabel : '正文',
										dataIndex : 'noticeText',
										allowBlank : false,
										anchor : '90%',
										maxLength : 1000,
										emptyText : '正文信息必填',
										height : 90,
										colspan : 2
									}, {
										colspan : 2,
										width : 700,
										heigh : 200,
										isUploaded : true,
										xtype : 'attachmentlist',
										name : 'attachlist',
										fileTypes : "*.pdf",
										id : attachId,
										postParams : {
											relationId : 0,
											groupId : 'technotice',
											dataorgid : dataorgid,
											operatorid : operatorid,
											operatorname : operator
										},
										isDownload : true,
										fieldLabel : '上传附件',
										title : '上传附件',
										itemId : 'attachmentlist'
									}, {
										fieldLabel : '上传说明',
										anchor : '100%',
										name : "attachRemk",
										xtype : 'displayfield',
																			
										readOnly:true,
										colspan : 2
									}, {
										xtype : 'dictcheckboxgroup',
										id : this.sendDeptId,
										name : "sendDept",
										fieldLabel : '发送部门',
										dictData : TECH_NOTICES_DEPTS,
										allowBlank : false,
										height:45,
										colspan : 2,
										columns : 8
									}, {
										fieldLabel : '说明',
										anchor : '100%',
										height:25,
										name : "techRemk",
										xtype : 'displayfield',																			
										readOnly:true,
										colspan : 2
									},this.listEmpPanel]

						});
	};

	/**
	 * 新增技术通知窗口中，参与者选择列表
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
								text : '添加操作员',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect
							},{
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
			"roleid" : "102"
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

}