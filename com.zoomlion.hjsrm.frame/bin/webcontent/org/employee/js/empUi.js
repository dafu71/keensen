/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 修改密码策略 创建日期： 2014-9-18 补丁编号： G3_P_20140915_01_249 作 者：
 * 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 吕俊涛 2014-9-18 集团
//
// =================================================================
/*******************************************************************************
 * 版权所有： 描 述： 员工管理UI界面 创建日期：2013/01/17 作 者： 陈今伟
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// 
// =================================================================
com.zoomlion.hjsrm.org.employeeMgr = function() {
	this.initPanel = function() {
		this.craeteEmpQuerypanel();
		this.createEmpListpanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'empMgrDiv',
					panels : [this.empQueryPanel, this.empGridPanel]
				});
	}

	/*
	 * 创建查询面板
	 */
	this.craeteEmpQuerypanel = function() {
		this.empQueryPanel = new Ext.fn.QueryPanel({
					title : '员工查询',
					height : 140,
					columns : 3,
					fields : [{
								name : 'query/orgid',
								fieldLabel : '机构ID',
								hidden : true
							}, {
								name : 'query/empcode',
								fieldLabel : '员工编号'
							}, {
								name : 'query/empname',
								fieldLabel : '员工姓名'
							}, {
								name : 'query/empstatus',
								fieldLabel : '员工状态',
								xtype : 'dictcombobox',
								dataIndex : 'empstatus',
								hiddenName : 'query/empstatus',
								value : 'on',
								layout : 'fit',
								dictData : OM_EMPSTATUS
							}, {
								xtype : 'orgtreecombo',
								fieldLabel : '所属机构',
								valueField : 'orgid',
								dataIndex : 'org',
								displayField : 'orgname',
								queryType : 'dataorg',
								hiddenName : 'orgid',
								name : 'orgid',
								listeners : {
									scope : this,
									'getselectnode' : function(tree, node) {
										var orgfield = this.empQueryPanel.form
												.findField('query/orgid');
										orgfield
												.setValue(node.attributes['orgid']);
										var dataorgid = node.attributes['dataorgid'];
										var o = this.empGridPanel.tbar.dom;
										if (dataorgid == 81) {// 非供应商，不能增删改
											o.hidden = true;

										} else {
											o.hidden = false;

										}
									}
								}
							}]
				});
	}

	/*
	 * 创建人员列表
	 */
	this.createEmpListpanel = function() {
		var store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.queryEmployeesByOrg.biz.ext',
			root : 'data',
			totalProperty : 'totalCount',
			fields : [{
						name : 'empid'
					}, {
						name : 'empcode'
					}, {
						name : 'empname'
					}, {
						name : 'birthdate',
						dataFormat : 'Y-m-d',
						type : 'date'
					}, {
						name : 'gender'
					}, {
						name : 'empstatus'
					}, {
						name : 'ismain'
					}, {
						name : 'mainorgname'
					}, {
						name : 'mainorgname'
					}, {
						name : 'orgid'
					}, {
						name : 'orgname'
					}, {
						name : 'positionid'
					}, {
						name : 'posiname'
					}, {
						name : 'userid'
					}, {
						name : 'mobileno'
					}, {
						name : 'pemail'
					}, {
						name : 'operatorid'
					}, {
						name : 'password'
					}, {
						name : 'indate',
						dataFormat : 'Y-m-d',
						type : 'date'
					}, {
						name : 'outdate',
						dataFormat : 'Y-m-d',
						type : 'date'
					}, {
						name : 'operatorname'
					}, {
						name : 'authmode'
					}, {
						name : 'status'
					}, {
						name : 'menutype'
					}, {
						name : 'email'
					}, {
						name : 'startdate',
						dataFormat : 'Y-m-d',
						type : 'date'
					}, {
						name : 'enddate',
						dataFormat : 'Y-m-d',
						type : 'date'
					}]
		});
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.empGridPanel = new Ext.fn.ListPanel({
			height : 600,
			delUrl : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.discardedEmpBatch.biz.ext',
			tbar : [{
						text : '新增',
						scope : this,
						ref : '../addNewOrgBtn',
						iconCls : 'icon-application_add',
						handler : this.onInput
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '注销',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelete
					}, '-', {
						text : '恢复',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onRegainEmp
					}],
			sm : selModel,
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'empid',
						header : '员工ID',
						hidden : true,
						menuDisabled : true,
						sortable : true
					}, {
						dataIndex : 'empcode',
						header : '员工编号',
						sortable : true
					}, {
						dataIndex : 'empname',
						header : '员工姓名',
						sortable : true
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'gender',
						header : '性别',
						dictData : CM_GENDER,
						sortable : false
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'empstatus',
						header : '员工状态',
						dictData : OM_EMPSTATUS,
						sortable : false
					}, {
						dataIndex : 'orgname',
						width : 400,
						header : '业务机构',
						sortable : false
					}, {
						dataIndex : 'mainorgname',
						header : '所属公司',
						sortable : false
					}],
			store : store
		});
	}

	/*
	 * 创建机构人员编辑页面
	 */
	this.buildEmpEditWin = function() {
		var empStartID = Ext.id();
		var empEndID = Ext.id();
		var companyid = Ext.id();
		this.empEditForm = new Ext.fn.EditPanel({
			autoScroll : true,
			border : false,
			pgrid : this.empGridPanel,
			columns : 2,
			loadParams : ['orgid', 'empid'],
			loadUrl : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.loadEmployeeliuxin.biz.ext',
			saveUrl : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.saveEmployee.biz.ext',
			fields : [{
						fieldLabel : '员工状态',
						hidden : true,
						dataIndex : 'empstatus',
						name : 'emp/empstatus',
						value : 'on'
					}, {
						fieldLabel : '数据归属',
						hidden : true,
						dataIndex : 'dataorgid',
						name : 'emp/dataorgid'
					}, {
						fieldLabel : '员工ID',
						hidden : true,
						dataIndex : 'empid',
						name : 'emp/empid'
					}, {
						fieldLabel : '员工姓名',
						dataIndex : 'empname',
						name : 'emp/empname',
						allowBlank : false,
						anchor : '90%',
						maxLength : 30,
						blankText : "请输入员工姓名！"
					}, {
						id : orgidx,
						xtype : 'orgtreecombo',
						fieldLabel : '所属公司',
						valueField : 'orgid',
						displayField : 'orgname',
						hiddenName : 'emp/mainorgid',
						queryType : 'companyAdd',
						anchor : '90%',
						dataIndex : 'mainorgid'
					}, {
						fieldLabel : '员工编号',
						dataIndex : 'empcode',
						name : 'emp/empcode',
						maxLength : 20,
						allowBlank : false,
						anchor : '90%',
						blankText : "请输入员工编号!",
						readOnly : true
					}, {
						xtype : 'empnewCombox',
						fieldLabel : '业务机构',
						hiddenName : 'emp/bizorgids2',
						dataIndex : 'bizorgids2',
						anchor : '90%',
						allowBlank : false,
						blankText : "请选择机构！"
					}, {
						    xtype : 'textfield',
							name  : 'emp/bizorgids',
						    dataIndex : 'bizorgids',
							id :'bizorgidsxx',
                            hidden:true,
							fieldLabel : '业务机构id'
						  }, {
						xtype : 'dictcombobox',
						fieldLabel : '性别',
						dataIndex : 'gender',
						anchor : '90%',
						hiddenName : 'emp/gender',
						value : 'm',
						columns : 1,
						layout : 'fit',
						dictData : CM_GENDER
					}, {
						xtype : 'datefield',
						fieldLabel : '入职日期',
						dataIndex : 'indate',
						anchor : '90%',
						name : 'emp/indate',
						vtype : 'dateRange',
						id : empEndID,
						startDateField : empStartID,
						format : 'Y-m-d'
					}, {
						xtype : 'datefield',
						fieldLabel : '出生日期',
						format : 'Y-m-d',
						anchor : '90%',
						dataIndex : 'birthdate',
						vtype : 'dateRange',
						id : empStartID,
						endDateField : empEndID,
						maxValue : new Date(),
						name : 'emp/birthdate'
					}, {
						fieldLabel : '手机号码',
						anchor : '90%',
						dataIndex : 'mobileno',
						name : 'emp/mobileno',
						vtype : 'phone'
					}, {
						fieldLabel : '办公电话',
						anchor : '90%',
						dataIndex : 'otel',
						name : 'emp/otel',
						vtype : 'tel'
					}, {
						fieldLabel : '电子邮箱',
						dataIndex : 'pemail',
						name : 'emp/pemail',
						anchor : '90%',
						maxLength : 80,
						vtype : 'email'
					}, {
						xtype : 'textarea',
						fieldLabel : '备注',
						dataIndex : 'remark',
						name : 'emp/remark',
						anchor : '95%',
						maxLength : 250,
						colspan : 2
					}]
		});

		this.empEditWin = new Ext.fn.FormWindow({
					title : '修改员工信息',
					width : 610,
					height : 320,
					items : [this.empEditForm]
				});

	};
	/*
	 * 创建人员新增页面
	 */
	this.buildEmpInputWin = function() {
		var empStartID = Ext.id();
		var empEndID = Ext.id();
		var companyid = Ext.id();
		this.empInpuPanel = new Ext.fn.InputPanel({
			autoScroll : true,
			pgrid : this.empGridPanel,
			saveUrl : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.addEmployee.biz.ext',
			columns : 2,
			fields : [{
						fieldLabel : '员工状态',
						hidden : true,
						dataIndex : 'empstatus',
						name : 'emp/empstatus',
						value : 'on'
					}, {
						xtype : 'textfield',
						fieldLabel : '删除标识',
						hidden : true,
						name : 'emp/delflag',
						value : 'n'
					}, {
						fieldLabel : '数据归属',
						hidden : true,
						dataIndex : 'dataorgid',
						name : 'emp/dataorgid'
					}, {
						fieldLabel : '员工ID',
						hidden : true,
						dataIndex : 'empid',
						name : 'emp/empid'
					}, {
						fieldLabel : '员工姓名',
						dataIndex : 'empname',
						name : 'emp/empname',
						anchor : '90%',
						allowBlank : false,
						maxLength : 30,
						blankText : "请输入员工姓名！"
					}, {
						id : orgid,
						xtype : 'orgtreecombo',
						fieldLabel : '所属公司',
						valueField : 'orgid',
						displayField : 'orgname',
						hiddenName : 'emp/mainorgid',
						queryType : 'companyAdd',
						dataIndex : 'orgid',
						anchor : '90%',
						allowBlank : false,
						blankText : "请选择机构！"				
					}, {
						fieldLabel : '员工编号',
						dataIndex : 'empcode',
						name : 'emp/empcode',
						anchor : '90%',
						maxLength : 20,
						allowBlank : false,
						blankText : "请输入员工编号!",
						vtype : 'empcode',
						tablename : 't_om_employee',
						validator : function(val) {
							if (/^[a-zA-Z0-9_]+$/.test(val)) {// 与原始值相同
								// 或者唯一验证通过
								if (Ext.form.VTypes.unique(val, this)) {
									return true;
								}
								return '该编号已经存在,请更换';
							}
							return '非法字符,必须为数字或字母.';
						}
					}, {
						xtype : 'empnewCombo',
						fieldLabel : '业务机构',
						hiddenName : 'emp/bizorgids1',
						dataIndex : 'bizorgids1',
						anchor : '90%',
						allowBlank : false,
						blankText : "请选择机构！"
					}, {
						    xtype : 'textfield',
							name  : 'emp/bizorgids',
						    dataIndex : 'bizorgids',
							id :'bizorgidsx',
                            hidden:true,
							fieldLabel : '业务机构id'
						  },{
						xtype : 'dictcombobox',
						fieldLabel : '性别',
						anchor : '90%',
						dataIndex : 'gender',
						hiddenName : 'emp/gender',
						value : 'm',
						columns : 1,
						layout : 'fit',
						dictData : CM_GENDER
					}, {
						xtype : 'datefield',
						fieldLabel : '入职日期',
						anchor : '90%',
						dataIndex : 'indate',
						name : 'emp/indate',
						vtype : 'dateRange',
						id : empEndID,
						startDateField : empStartID,
						format : 'Y-m-d'
					}, {
						xtype : 'datefield',
						fieldLabel : '出生日期',
						format : 'Y-m-d',
						anchor : '90%',
						dataIndex : 'birthdate',
						vtype : 'dateRange',
						id : empStartID,
						endDateField : empEndID,
						maxValue : new Date(),
						name : 'emp/birthdate'
					}, {
						fieldLabel : '手机号码',
						anchor : '90%',
						dataIndex : 'mobileno',
						name : 'emp/mobileno',
						vtype : 'phone'
					}, {
						fieldLabel : '办公电话',
						anchor : '90%',
						dataIndex : 'otel',
						name : 'emp/otel',
						vtype : 'tel'
					}, {
						fieldLabel : '电子邮箱',
						anchor : '90%',
						dataIndex : 'pemail',
						name : 'emp/pemail',
						maxLength : 80,
						vtype : 'email'
					}, {
						fieldLabel : '登录帐号',
						anchor : '90%',
						name : 'emp/userid',
						maxLength : 10,
						tablename : 't_ac_operator',
						validator : function(val) {
							if (/^[a-zA-Z0-9_]+$/.test(val)) {// 与原始值相同
								// 或者唯一验证通过
								if (Ext.form.VTypes.unique(val, this)) {
									return true;
								}
								return '该ID已存在,请更换';
							}
							return '非法字符,必须为数字字母或下划线.';
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '密码',
						name : 'emp/password',
						colspan : 1,
						allowBlank : true,
						anchor : '90%',
						blankText : "请输入密码！",
						minLength : '6',
						minLengthText : '最小长度为6个字符，请检查...',
						maxLength : '14',
						maxLengthText : '最大长度为14个字符，请检查...',
						regex : /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/,
						regexText : '密码必须包含字母和数字，请检查...',
						value : 'abc000000'
					}, {
						xtype : 'datefield',
						name : 'emp/invaldate',
						anchor : '90%',
						fieldLabel : '帐号有效日期',
						allowBlank : true,
						format : 'Y-m-d',
						minValue : new Date(),
						colspan : 1
					}, {
						xtype : 'textarea',
						fieldLabel : '备注',
						anchor : '95%',
						dataIndex : 'remark',
						name : 'emp/remark',
						maxLength : 250,
						colspan : 2
					}]
		});
		this.empInputWin = new Ext.fn.FormWindow({
					title : '录入员工信息',
					width : 610,
					height : 320,
					items : [this.empInpuPanel]
				});

	};

}