/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 创建日期： 2014-9-17 补丁编号： G3_P_20140915_01_243 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_243 吕俊涛 2014-9-17 集团
//
// =================================================================
/*
 * 角色管理
 */
com.zoomlion.hjsrm.role.RolesMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		this.initInputWindow();
		this.initAuthWindow();
	};
	/*
	 * 初始化查询面板
	 */
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 130,
					width : 500,
					columns : 2,
					title : '角色查询',
					fields : [{
								xtype : 'textfield',
								name : 'rolecode',
								fieldLabel : '角色编码',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'rolename',
								fieldLabel : '角色名称',
								colspan : 1
							}, {
								xtype : 'orgtreecombo',
								fieldLabel : '所属机构',
								valueField : 'orgid',
								displayField : 'orgname',
								queryType : 'dataorg',
								hiddenName : 'orgid',
								name : 'orgid'
							}, {
								xtype : 'checkbox',
								name : 'sysrole',
								fieldLabel : '系统级角色',
								colspan : 1,
								id : 'checkroletype'
							}]
				});
	};
	/*
	 * 初始化角色列表面板
	 */
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '角色列表',
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
						text : '分配资源',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onSet
					}],
			delUrl : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.deleteTAcRole.biz.ext',
			sm : selModel,
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "角色编码",
						dataIndex : "rolecode",
						sortable : true
					}, {
						header : "角色名称",
						dataIndex : "rolename",
						width : 150,
						sortable : true
					}, {
						header : "角色描述",
						dataIndex : "roledesc"
					}, {
						header : "所属机构",
						dataIndex : "orgname",
						sortable : true,
						renderer : function(value) {
							if (value == '0') {
								return '系统级'
							} else {
								return value
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.queryRole.biz.ext',
				root : 'data',
				autoLoad : true,
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
							name : 'orgid'
						}, {
							name : 'orgname'
						}]
			})
		});
	};
	/*
	 * 角色编辑面板
	 */
	this.initEditWindow = function() {
		this.editWindow = new Ext.fn.FormWindow({
			title : '编辑角色',
			height : 300,
			width : 500,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				layout : 'form',
				loadUrl : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.expandRole.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.modifyRole.biz.ext',
				keyColumn : 'roleid',
				items : [{
							dataIndex : 'rolecode',
							xtype : 'textfield',
							fieldLabel : '角色编码',
							maxLength : 30,
							name : 'role/rolecode',
							anchor : '90%'
						}, {
							xtype : 'textfield',
							name : 'role/rolename',
							allowBlank : false,
							dataIndex : 'rolename',
							maxLength : 30,
							anchor : '90%',
							fieldLabel : '角色名称'
						}, {
							xtype : 'textarea',
							name : 'role/roledesc',
							allowBlank : false,
							dataIndex : 'roledesc',
							anchor : '90%',
							fieldLabel : '角色描述'
						}, {
							fieldLabel : "所属机构",
							colspan : 1,
							allowBlank : false,
							xtype : 'orgtreecombo',
							displayField : 'orgname',
							dataIndex : 'orgid',
							valueField : 'orgid',
							queryType : 'dataarea',
							hiddenName : 'role/orgid',
							editable : false,
							anchor : '90%',
							triggerAction : 'all'
						}, {
							xtype : 'hidden',
							dataIndex : 'roleid',
							name : 'role/roleid'
						}, {
							xtype : 'hidden',
							dataIndex : 'dataorgid',
							name : 'role/dataorgid'
						}]
			}]
		});
	}
	/*
	 * 新增角色
	 */
	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增角色',
			height : 300,
			width : 500,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				layout : 'form',
				saveUrl : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.addRole.biz.ext',
				items : [{
							xtype : 'textfield',
							fieldLabel : '角色编码',
							maxLength : 30,
							name : 'role/rolecode',
							dataIndex : 'rolecode',
							allowBlank : false,
							blankText : "请输入角色编码！",
							autoStripChars : true,
							tablename : "T_AC_ROLE",
							anchor : '90%',
							vtype : 'rolecode',
							validator : function(val) {
								if (Ext.form.VTypes.unique(val, this)) {
									return true;
								}
								return "该编码已存在,请更换...";
							}
						}, {
							xtype : 'textfield',
							name : 'role/rolename',
							allowBlank : false,
							maxLength : 30,
							anchor : '90%',
							fieldLabel : '角色名称'
						}, {
							xtype : 'textarea',
							name : 'role/roledesc',
							allowBlank : false,
							anchor : '90%',
							fieldLabel : '角色描述'
						}, {
							fieldLabel : "所属机构",
							colspan : 1,
							allowBlank : false,
							xtype : 'orgtreecombo',
							displayField : 'orgname',
							valueField : 'orgid',
							queryType : 'dataarea',
							hiddenName : 'role/orgid',
							editable : false,
							anchor : '90%',
							triggerAction : 'all'
						}, {
							xtype : 'hidden',
							name : 'role/dataorgid'
						}]
			}]
		});
	}

	this.initAuthWindow = function() {
		var _this = this;
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
						var sels = _this.listPanel.getSelectedRecord();
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

}