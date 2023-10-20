/******************************************************************
*版权所有： 中联重科环境产业公司
*描    述：  
*创建日期： 2014-9-17
*补丁编号： G3_P_20140915_01_241
*作    者： 吕俊涛
*******************************************************************/
//==============================修改历史===========================
// 补丁编号                    修改人     日期           区域       备注
// G3_P_20140915_01_241    吕俊涛     2014-9-17    集团      
//
//=================================================================
com.zoomlion.hjsrm.opt.optroleMgr = function() {
	this.initPanel = function() {
		this.createOptRoleListPanel();
		this.buildRoleSelectWin();
		this.buildOptSelectWin();
		this.initAuthWindow();
	};

	// 创建角色列表
	this.createOptRoleListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		var roleSetMenu = [{
					text : '手工选择角色',
					scope : this,
					handler : this.onRoleSelAdd
				}, {
					text : '复制员工角色',
					scope : this,
					handler : this.onOptSelAdd
				}];
		this.optroleGridPanel = new Ext.fn.ListPanel({
			// title:'所属角色',
			delUrl : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.deleteOperatorRole.biz.ext',
			indexKey : 'roleid',
			sm : selModel,
			hsPage : false,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryRoleInOperator.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'roleid'
						}, {
							name : 'rolecode'
						}, {
							name : 'rolename'
						}, {
							name : 'roletype'
						}, {
							name : 'operatorid'
						}, {
							name : 'dataorgid'
						}, {
							name : 'orgname'
						}]
			}),
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'rolecode',
						header : '角色代码',
						sortable : true
					}, {
						dataIndex : 'rolename',
						header : '角色名',
						sortable : true
					},
					// {dataIndex : 'roletype',xtype:'dictcolumn',header :
					// '角色类型',dictData:AC_ROLETYPE},
					{
						dataIndex : 'orgname',
						header : '归属机构'
					}],
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						menu : roleSetMenu
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onEmpRoleDel
					}, '-', {
						text : '分配资源',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onSet
					}]
		});
	};

	this.initAuthWindow = function() {
		var _this=this;
		this.authTreePanel = this.authTreePanel || new Ext.tree.TreePanel({
			checkModel : 'cascade', // 对树的级联多选
			onlyLeafCheckable : false,// 对树所有结点都可选
			animate : false,
			rootVisible : false,
			autoScroll : true,
			leafOnly : true,
			isOver : true,
			buttonAlign : 'center',
			loader : new Ext.tree.TreeLoader({
				listeners : {
					beforeload : function(tree, node) {
						var sels = _this.optroleGridPanel.getSelectedRecord();
						this.baseParams.roleid = sels.get("roleid");
						this.baseParams.parentid = node.id;
					}
				},
				autoLoad : false,
				url : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.loadRoleAuthorizedRs.biz.ext',
				baseAttrs : {
					uiProvider : Ext.ux.TreeCheckNodeUI
				},
				processResponse : function(response, node, callback, scope) {
					var json = response.responseText;
					try {
						var o = response.responseData || Ext.decode(json);
						o = o.data;
						node.beginUpdate();
						for (var i = 0, len = o.length; i < len; i++) {
							if (o[i].checked == "0" || o[i].checked == "false") {
								o[i].checked = false;
							}
							if (o[i].checked == "1" || o[i].checked == "true") {
								o[i].checked = true;
							}
							if (o[i].leaf == "y" || o[i].leaf == "true") {
								o[i].leaf = true;
							}
							if (o[i].leaf == "n" || o[i].leaf == "false") {
								o[i].leaf = false;
							}
							var n = this.createNode(o[i]);
							if (n) {
								node.appendChild(n);
							}
						}
						node.endUpdate();
						this.runCallback(callback, scope || node, [node]);
					} catch (e) {
						this.handleFailure(response);
					}
				}
			}),
			root : new Ext.tree.AsyncTreeNode({
						id : '0'
					}),
			buttons : [{
						text : '收起',
						scope : this,
						handler : this.doCollapseAll
					}, {
						text : '保存',
						scope : this,
						handler : this.onAuthSave
					}, {
						text : '关闭',
						scope : this,
						handler : this.onReset
					}]
		});
		this.authWindow = this.authWindow || new Ext.Window({
					title : '角色授权',
					height : 500,
					width : 400,
					closeAction : 'hide',
					modal : true,
					collapsible : true,
					maximizable : true,
					constrain : true,
					padding : 2,
					buttonAlign : 'center',
					layout : 'fit',
					items : [this.authTreePanel]
				});
	}
	// 创建角色选择窗体
	this.buildRoleSelectWin = function() {
		var _roleselModel = new Ext.grid.CheckboxSelectionModel();
		this.roleSelListPanel = new Ext.fn.ListPanel({
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryRoleByDataOrgNotInOperator.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'rolecode'
						}, {
							name : 'rolename'
						}, {
							name : 'roletype',
							type : 'String'
						}, {
							name : 'roledesc'
						}, {
							name : 'roleid'
						}, {
							name : 'dataorgid'
						}, {
							name : 'orgname'
						}]
			}),
			sm : _roleselModel,
			columns : [new Ext.grid.RowNumberer(), _roleselModel, {
						header : "角色编码",
						dataIndex : "rolecode"
					}, {
						header : "角色名称",
						dataIndex : "rolename"
					}, {
						header : "所属机构",
						dataIndex : "orgname"
					}, {
						header : "角色描述",
						dataIndex : "roledesc"
					}]
		});
		this.roleSelWin = new Ext.Window({
					title : '可选择的角色',
					width : 600,
					height : 350,
					layout : 'fit',
					closeAction : 'hide',
					modal : true,
					buttonAlign : 'center',
					tbar : [{
								ref : '../orgid',
								xtype : 'textfield',
								name : 'role/orgid',
								hidden : true
							}, {
								xtype : 'label',
								text : '角色名称:'
							}, {
								xtype : 'textfield',
								ref : '../rolename',
								name : 'role/rolename'
							}, '-', {
								xtype : 'label',
								text : '所属机构:'
							}, {
								xtype : 'orgtreecombo',
								itemId : 'orgtreecombo',
								ref : '../orgtree',
								hiddenName : 'orgid',
								name : 'orgtreecombo',
								queryType : 'dataarea',
								listeners : {
									scope : this,
									'getselectnode' : function(tree, node) {
										var orgidfield = this.roleSelWin.orgid;
										orgidfield
												.setValue(node.attributes['orgid']);
									}
								}
							}, '-', {
								text : '查询',
								scope : this,
								handler : this.onQueryRole
							}, '-', {
								text : '重置',
								scope : this,
								handler : function() {
									with (this.roleSelWin) {
										rolename.reset();
										orgid.reset();
										orgtree.reset();
									}
								}
							}, {
								xtype : "tbfill"
							}],
					items : [this.roleSelListPanel],
					buttons : [{
								text : '选择',
								scope : this,
								handler : this.onRoleSel
							}, {
								text : '关闭',
								scope : this,
								handler : function() {
									this.roleSelWin.hide();
									with (this.roleSelWin) {
										rolename.reset();
										orgid.reset();
										orgtree.reset();
									}
								}
							}]
				});
	}

	// 创建人员选择窗体
	this.buildOptSelectWin = function() {
		var _optselModel = new Ext.grid.CheckboxSelectionModel();
		this.optSelListPanel = new Ext.fn.ListPanel({
			viewConfig : {// 设置默认列宽
				forceFit : true
			},
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.queryEmpsByDataorgid.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'userid'
						}, {
							name : 'operatorid'
						}, {
							name : 'operatorname'
						}, {
							name : 'empname'
						}, {
							name : 'empid'
						}, {
							name : 'orgname'
						}, {
							name : 'rolenames'
						}]
			}),
			sm : _optselModel,
			columns : [new Ext.grid.RowNumberer(), _optselModel, {
						dataIndex : 'userid',
						header : '登录ID',
						hidden : true,
						sortable : true
					}, {
						dataIndex : 'empid',
						header : '人员ID',
						sortable : true
					}, {
						dataIndex : 'empname',
						header : '人员姓名',
						sortable : true
					}, {
						dataIndex : 'operatorname',
						header : '操作员名'
					}, {
						dataIndex : 'orgname',
						header : '所属机构'
					}, {
						dataIndex : 'rolenames',
						header : '角色名称',
						renderer : function(value, metadata, record, rowIndex,
								columnIndex, store) {
							value = (value == null) ? '' : value;
							metadata.attr = 'ext:qtitle="角色：" ext:qtip="'
									+ value.replace(/\"/g, '') + '"';
							return value;
						}
					}]
		});
		this.optSelWin = new Ext.Window({
					title : '可选择的人员',
					width : 700,
					height : 350,
					layout : 'fit',
					closeAction : 'hide',
					modal : true,
					buttonAlign : 'center',
					tbar : [{
								ref : '../orgseq',
								xtype : 'textfield',
								name : 'emp/orgseq',
								hidden : true
							}, {
								xtype : 'label',
								text : '员工名称:'
							}, {
								xtype : 'textfield',
								ref : '../empname',
								name : 'emp/empname'
							}, '-', {
								xtype : 'label',
								text : '所属机构:'
							}, {
								xtype : 'orgtreecombo',
								itemId : 'orgtreecombo',
								ref : '../orgtree',
								hiddenName : 'orgid',
								name : 'orgtreecombo',
								queryType : 'dataorg',
								listeners : {
									scope : this,
									'getselectnode' : function(tree, node) {
										var orgidfield = this.optSelWin.orgseq;
										orgidfield
												.setValue(node.attributes['orgseq']);
									}
								}
							}, '-', {
								text : '查询',
								scope : this,
								handler : this.onQueryOpt
							}, '-', {
								text : '重置',
								scope : this,
								handler : function() {
									with (this.optSelWin) {
										empname.reset();
										orgseq.reset();
										orgtree.reset();
									}
								}
							}, {
								xtype : "tbfill"
							}],
					items : [this.optSelListPanel],
					buttons : [{
								text : '选择',
								scope : this,
								handler : this.onOptSel
							}, {
								text : '关闭',
								scope : this,
								handler : function() {
									this.optSelWin.hide();
									with (this.optSelWin) {
										empname.reset();
										orgid.reset();
										orgtree.reset();
									}
								}
							}]
				});
	}
}