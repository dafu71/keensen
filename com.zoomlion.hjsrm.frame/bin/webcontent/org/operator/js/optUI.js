/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 修改密码策略 创建日期： 2014-9-18 补丁编号： G3_P_20140915_01_249 作 者：
 * 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 吕俊涛 2014-9-18 集团
//
//中联新功能 dafu 2015-03-19 中联 增加查看在线用户功能
// =================================================================
/*
 * 创建人员面板
 */
com.zoomlion.hjsrm.opt.operatorMgr = function() {
	this.initPanel = function() {

		// 构建员工角色
		this.optroleMgr = new com.zoomlion.hjsrm.opt.optroleMgr();
		this.optroleMgr.initPanel();
		this.optroleMgr.initEvent();

		// 初始化操作员查询、列表
		this.createOperQueryPanel();
		this.createOperGridPanel();

		this.initOnlineWindow();

		this.operPanel = new Ext.fn.fnLayOut({
					// title:'操作员管理',
					layout : 'ns',
					autoScroll : true,
					renderTo : "optDiv",
					panels : [this.operQueryPanel, this.operGridPanel]
				});
		return this.operPanel;
	};

	// 操作员查询面板
	this.createOperQueryPanel = function() {
		this.operQueryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					title : '操作员查询',
					fields : [{
								xtype : 'textfield',
								name : 'query/userid',
								fieldLabel : '登录用户名'
							}, {
								xtype : 'textfield',
								name : 'query/operatorname',
								fieldLabel : '操作员名称'
								// }, {
							// xtype : 'textfield',
							// name : 'query/empcode',
							// fieldLabel : '员工编号'
						}	, {
								editable : false,
								xtype : 'dictcombobox',
								fieldLabel : '操作员状态',
								hiddenName : 'query/status',
								forceSelection : false,
								dictData : AC_OPERATORSTATUS
							}, {
								xtype : 'textfield',
								name : 'query/empcode',
								fieldLabel : '员工编号'
							}, {
								xtype : 'textfield',
								name : 'query/empname',
								fieldLabel : '员工姓名'
							}, {
								xtype : 'textfield',
								name : 'query/orgseq',
								fieldLabel : '员工姓名',
								hidden : true
							}, {
								fieldLabel : "所属机构",
								allowBlank : false,
								xtype : 'orgtreecombo',
								displayField : 'orgname',
								valueField : 'orgid',
								queryType : 'dataorg',
								hiddenName : 'query/orgid',
								editable : false,
								triggerAction : 'all',
								value : DATAORGID,
								autoReset : false,
								listeners : {
									scope : this,
									'getselectnode' : function(tree, node) {
										var o = Ext.getCmp('operatorId').tbar.dom;
										if (node.attributes['dataorgid'] == '81') {// 非供应商不能增删改
											o.hidden = true;
										} else {
											o.hidden = false;
										}

										var orgfield = this.operQueryPanel.form
												.findField('query/orgseq');
										orgfield
												.setValue(node.attributes['orgseq']);

										this.operGridPanel.store.removeAll();

									}
								}
							}]
				});
		this.operQueryPanel.addButton({
					text : "在线用户",
					iconCls : "icon-application_form_magnify",
					scope : this,
					handler : function() {
						this.listPanel.store.load();
						this.onlineWindow.show();
					}
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
					}, {
						name : 'dataorgname'// 数据归属
					}, {
						name : 'delflag'// 员工删除状态
					}, {
						name : 'empstatus'// 员工状态
					}, {
						name : 'clientnum'
					}, {
						name : 'orgnames'// 业务机构
					}, {
						name : 'invaldate'// 帐号有效日期
					}]
		});
		var _selModel = new Ext.grid.CheckboxSelectionModel({});
		this.operGridPanel = new Ext.fn.ListPanel({
					// /title : '操作员列表',
					id : 'operatorId',
					store : _store,
					sm : _selModel,
					columns : [new Ext.grid.RowNumberer(), _selModel, {
								dataIndex : 'userid',
								header : '登录用户名',
								sortable : true
							}, {
								dataIndex : 'empstatus',
								hidden : true
							}, {
								dataIndex : 'operatorid',
								hidden : true
							}, {
								dataIndex : 'operatorname',
								header : '操作员名称',
								sortable : false
							}, {
								dataIndex : 'empcode',
								header : '员工编号',
								width : 100,
								sortable : true
							}, {
								dataIndex : 'empname',
								header : '员工姓名',
								width : 100,
								sortable : true
							}, {
								width : 100,
								dataIndex : 'operemail',
								header : '邮箱',
								sortable : false
							}/*
								 * , { width : 70, dataIndex : 'clientnum',
								 * header : '会话限制数', sortable : false, align :
								 * 'center' }
								 */, {
								width : 50,
								xtype : 'dictcolumn',
								dataIndex : 'status',
								header : '状态',
								dictData : AC_OPERATORSTATUS,
								sortable : false,
								align : 'center'
							}, {
								width : 150,
								dataIndex : 'orgnames',
								header : '业务机构',
								sortable : false
							}, {
								width : 100,
								dataIndex : 'dataorgname',
								header : '所属公司',
								sortable : false
							}, {
								width : 150,
								dataIndex : 'lastlogin',
								header : '最近登录时间',
								sortable : false
							}, {
								width : 150,
								dataIndex : 'invaldate',
								header : '帐号有效日期',
								format : 'Y-m-d',
								sortable : true,
								renderer : function(value, metadata, record) {
									if (!Ext.isEmpty(value)) {
										return Ext.util.Format.substr(value, 0,
												10);
									} else {
										return "";
									}
								}
							}],
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddOper
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEditOper
							}, '-', {
								text : '注销',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelOper
							}, {
								text : '恢复',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onRegain
							}, '-', {
								text : '锁定',
								scope : this,
								iconCls : 'icon-award_star_delete',
								handler : this.onLock
							}, {
								text : '解锁',
								scope : this,
								iconCls : 'icon-award_star_add',
								handler : this.onUnlock
							}, '-', {
								text : '角色授权',
								scope : this,
								iconCls : 'icon-application_lightning',
								handler : this.onSetRole
							}, '-', {
								text : '特权维护',
								scope : this,
								iconCls : 'icon-application_lightning',
								handler : this.onSetResource
							}, '-', {
								text : '查看权限',
								scope : this,
								iconCls : 'icon-application_lightning',
								handler : this.onQueryAuth
							}]
				});
	};

	// 修改操作员
	this.buildOperEditWin = function() {
		var operStartID = Ext.id();
		var operEndID = Ext.id();
		// 编辑表单
		this.operEditForm = new Ext.fn.EditPanel({
			pgrid : this.operGridPanel,
			loadUrl : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.loadOperator.biz.ext',
			saveUrl : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.saveOperator.biz.ext',
			columns : 2,
			fields : [{
						dataIndex : 'operatorid',
						xtype : 'hidden',
						name : 'operator/operatorid'
					}, {
						xtype : 'textfield',
						dataIndex : 'userid',
						maxLength : 30,
						fieldLabel : '登陆用户名',
						anchor : '90%',
						readOnly : true
					}, {
						xtype : 'textfield',
						fieldLabel : '操作员名称',
						dataIndex : 'operatorname',
						maxLength : 30,
						name : 'operator/operatorname',
						anchor : '90%',
						allowBlank : false,
						blankText : "请输入操作员名称!"
					}, {
						fieldLabel : '重置密码',
						boxLabel : '(重置为a1234567)',
						colspan : 1,
						xtype : 'checkbox',
						name : 'operator/isReset',
						anchor : '95%',
						inputValue : true
					}, {
						fieldLabel : '会话限制个数',
						colspan : 1,
						name : 'operator/clientnum',
						minValue : -1,
						maxLength : 9,
						anchor : '90%',
						dataIndex : 'clientnum',
						xtype : 'numberfield'
					}, {
						xtype : 'textfield',
						fieldLabel : '邮箱',
						colspan : 2,
						dataIndex : 'EMAIL',
						maxLength : 80,
						name : 'operator/email',
						anchor : '95%',
						vtype : 'email',
						vtypeText : '请输入正确的email地址'
					}, {
						xtype : 'datefield',
						name : 'operator/invaldate',
						dataIndex : 'invaldate',
						fieldLabel : '帐号有效日期',
						allowBlank : false,
						format : 'Y-m-d',
						anchor : '95%',
						value : '2014-09-30',
						minValue : new Date(),
						colspan : 1
					}]
		});
		// 编辑窗口
		this.operEditWin = new Ext.fn.FormWindow({
					title : '修改操作员',
					width : 550,
					height : 250,
					items : [this.operEditForm]
				});
	};

	// 弹出角色授权窗体
	this.createRoleAuthWindow = function() {
		this.roleAuthWindow = new Ext.Window({
					title : '角色授权',
					modal : true,
					collapsible : true,
					maximizable : true,
					constrain : true,
					buttonAlign : 'center',
					closeAction : 'hide',
					width : 646,
					height : 424,
					layout : 'fit',
					items : [this.optroleMgr.optroleGridPanel],
					buttons : [{
								text : '保存',
								scope : this,
								handler : this.onSaveRoleAuth
							}, {
								text : '关闭',
								scope : this,
								handler : function() {
									this.roleAuthWindow.hide();
								}
							}]

				})
	}

	// 查看操作员权限树
	this.createAuthTreePanel = function() {
		this.operAuthTreePanel = this.operAuthTreePanel
				|| new Ext.fn.ExTreePanel({
					margins : '5 5 5 50',
					loadUrl : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.loadRoleAuthorizedRss.biz.ext',
					rootNode : 'data',
					parentField : 'parentresid',
					childField : 'resid',
					textField : 'reslabel',
					// checkModel: 'childCascade',
					rootVisible : false,
					leafOnly : true
				});
	}

	// 查看操作员权限窗口
	this.createOperAuthWindow = function() {
		this.operAuthWindow = new Ext.fn.ShowWindow({
					title : '操作员权限明细',
					height : 500,
					width : 300,
					items : [this.operAuthTreePanel]
				});
	}

	// 新增操作员窗口
	this.buildOperInputWin = function() {
		var operStartID = Ext.id();
		var operEndID = Ext.id();
		this.operInputWin = new Ext.fn.FormWindow({
			width : 550,
			height : 250,
			title : '新增操作员',
			items : [{
				xtype : 'inputpanel',
				saveUrl : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.addOperator.biz.ext',// 新建保存逻辑
				pgrid : this.operGridPanel,
				columns : 2,
				fields : [{
					fieldLabel : '选择员工',
					selModel : 'multiple',
					colspan : 1,
					name : 'empid',
					dataIndex : 'empid',
					xtype : 'empselectfield',
					displayField : 'empname',// 必填
					hiddenName : 'empid',// 必填
					allowBlank : false,
					anchor : '90%',
					url : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.queryEmpNotOper.biz.ext',
					queryToolbar : [{
								text : '员工姓名'
							}, {
								xtype : 'textfield',
								ref : '../empnanme',
								name : 'empname'
							}]
				}, {
					xtype : 'textfield',
					name : 'operator/operatorid',
					hidden : true
				}, {
					xtype : 'textfield',
					fieldLabel : '登陆用户名',
					name : 'operator/userid',
					colspan : 1,
					maxLength : 30,
					allowBlank : false,
					anchor : '90%',
					blankText : "请输入员工登陆用户名！",
					vtype : 'optcode'

				}, {
					xtype : 'textfield',
					fieldLabel : '密码',
					name : 'operator/password',
					colspan : 1,
					allowBlank : false,
					anchor : '90%',
					blankText : "请输入密码！",
					minLength : '6',
					maxLength : '14',
					minLengthText : '最小长度为6个字符，请检查...',
					maxLengthText : '最大长度为14个字符，请检查...',
					regex : /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/,
					regexText : '密码必须包含字母和数字，请检查...'
				}, {
					xtype : 'textfield',
					fieldLabel : '操作员名称',
					name : 'operator/operatorname',
					colspan : 1,
					maxLength : 30,
					allowBlank : false,
					anchor : '90%',
					blankText : "请输入操作员名称！"
				}, {
					xtype : 'textfield',
					fieldLabel : '邮箱',
					name : 'operator/email',
					colspan : 2,
					maxLength : 80,
					vtype : 'email',
					anchor : '95%',
					vtypeText : '请输入正确的email地址'
				}, {
					xtype : 'datefield',
					name : 'operator/invaldate',
					fieldLabel : '帐号有效日期',
					allowBlank : false,
					format : 'Y-m-d',
					anchor : '90%',
					minValue : new Date(),
					colspan : 1
				}]
			}]
		})
	}

	// 在线用户弹窗
	this.initOnlineWindow = function() {

		this.listPanel = new Ext.fn.ListPanel({
			title : '【 在线用户列表 】',
			hsPage : false,
			delUrl : '...',
			autoExpandColumn : '6',
			tbar : ['-', {
						xtype : 'label',
						text : '登录名:'
					}, {
						xtype : 'textfield',
						ref : '../userid'
					}, '-', {
						xtype : 'label',
						text : '操作员名称:'
					}, {
						xtype : 'textfield',
						ref : '../uname'
					}, '-', {
						text : '查询',
						scope : this,
						handler : function() {
							var store = this.listPanel.store;
							var uid = this.listPanel.userid.getValue();
							var uname = this.listPanel.uname.getValue();
							store.filterBy(function(r, i) {
										var uidFlag = Ext.isEmpty(uid)
												? true
												: uid == r.get('userid');
										var unameFlag = Ext.isEmpty(uname)
												? true
												: uname == r.get('username');
										return (uidFlag && unameFlag);
									}, this);
						}
					}, '-', {
						text : "重置",
						scope : this,
						handler : function() {
							this.listPanel.userid.setValue('');
							this.listPanel.uname.setValue('');
						}
					}],
			/*
			 * viewConfig : { forceFit : true },
			 */
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'userid',
						header : '登录名'
					}, {
						dataIndex : 'username',
						header : '操作员名称'
					}, {
						dataIndex : 'orgid',
						header : '机构Id'
					}, {
						dataIndex : 'orgname',
						header : '业务机构'
					}, {
						dataIndex : 'remoteip',
						header : '登录IP'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.onlineUsers.biz.ext',
				root : 'data',
				fields : [{
							name : 'userid'
						}, {
							name : 'username'
						}, {
							name : 'orgid'
						}, {
							name : 'orgname'
						}, {
							name : 'remoteip'
						}, {
							name : 'remark'
						}, {
							name : 'eindt'
						}, {
							name : 'meins'
						}]
			})
		});

		this.onlineWindow = this.onlineWindow || new Ext.Window({
					title : "在线用户",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					modal : true,
					width : 880,
					// height : 660,
					height : 550,
					// layout : 'form',
					layout : 'fit',
					items : [this.listPanel],
					buttons : [{
								text : "刷新",
								scope : this,
								handler : function() {
									this.listPanel.store.load();
								}
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.onlineWindow.hide();
								}
							}]

				});
	}

}