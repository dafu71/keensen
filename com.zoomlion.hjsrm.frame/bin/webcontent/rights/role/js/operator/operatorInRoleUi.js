/*
 * 角色操作事件
 */
com.zoomlion.hjsrm.role.OperatorInRoleMgr = function() {

	this.initPanel = function() {
		this.initListPanel();// 角色操作员列表
		this.initOperatorListPanel();// 弹出窗体操作员列表
		this.initPopWindow();// 弹出选择操作员窗体
	}
	/*
	 * 角色操作列表
	 */
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.listPanel = new Ext.fn.ListPanel({
			title : '角色操作员列表',
			autoExpandColumn : 'orgname',
			tbar : [{
						text : '添加操作员',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '移除操作员',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelOperator
					}],
			indexKey : 'userid',
			delUrl : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.deleteOperatorRole.biz.ext',
			sm : selModel,
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "角色名",
						dataIndex : "rolename",
						sortable : false
					}, {
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
				fields : [{
							name : 'orgname'
						}, {
							name : 'rolename'// 
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
			}),
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
	/*
	 * 操作列表面板
	 */
	this.initOperatorListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.operatorListPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
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
	/*
	 * 选择操作员列表
	 */
	this.initPopWindow = function() {

		this.popWindow = new Ext.Window({
					title : '选择操作员',
					closeAction : 'hide',
					layout : 'fit',
					padding : '5 5 5 5',
					modal : true,
					width : 800,
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
								//id : companyid,
								ref : '../orgnames',
								xtype : 'orgtreecombo',
								valueField : 'orgid',
								displayField : 'orgname',
								selectType : 'single',
								hiddenName : 'orgid',
								blankText : "请选择机构！",
								dataIndex : 'bizorgids'
							}/*
								 * , { xtype : 'textfield', ref : '../orgnames',
								 * name : 'orgnames' }
								 */, '-', {
								text : '查询',
								scope : this,
								handler : function() {
									var _operatorname = this.popWindow.operatorname
											.getValue();
									var _operatorid = this.popWindow.operatorid
											.getValue();
									var _orgnames = this.popWindow.orgnames
											.getRawValue();
									var _orgid = this.popWindow.orgnames
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
									this.popWindow.orgnames.reset();
									//this.popWindow.orgtree.reset();
									this.popWindow.dataorgid.setValue();
								}
							}, '-', {
								text : '关联',
								scope : this,
								handler : this.onAdd2org
							}],
					loadOperator : function(role) {
						this.operatorListPanel.doQuery(role);
					}

				})

	}

}