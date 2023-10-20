/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 员工状态信息管理
 * 创建日期： 2014-12-2
 * 补丁编号： G3_P_20141202_01_211 
 * 作 者： 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20141202_01_211 王富强   2014-12-2   中联
//
// =================================================================
/*******************************************************************************
 * 版权所有： 描 述： 员工状态管理UI界面 创建日期：2013/12/02 作 者： 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// 
// =================================================================
com.zoomlion.hjsrm.demo.personMgr = function() {
	this.initPanel = function() {
		this.craeteEmpQuerypanel();
		this.createEmpListpanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'personMgrDiv',
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
								name : 'query/userName',
								fieldLabel : '员工姓名'
							}, {
								xtype : 'combo',
								fieldLabel : '员工状态',								
								name : 'query/operatorStatus',
								store:[["已完成","已完成"],["未完成","未完成"]]
							}]
				});
	}

	/*
	 * 创建人员列表
	 */
	this.createEmpListpanel = function() {
		var store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.demo.usermanager.queryPersonByList.biz.ext',
			root : 'data',
			totalProperty : 'totalCount',
			fields : [{
						name : 'statusId'
					}, {
						name : 'userId'
					}, {
						name : 'begintime',
						dataFormat : 'Y-m-d',
						type : 'date'
					},{
						name : 'endtime',
						dataFormat : 'Y-m-d',
						type : 'date'
					}, {
						name : 'userName'
					}, {
						name : 'operatorStatus'
					}, {
						name : 'worktype'
					}]
		});
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.empGridPanel = new Ext.fn.ListPanel({
			delUrl : '',
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
					},'-', {
						text : '导入',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onImp
					},'-', {
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onOut
					}],
			sm : selModel,
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'statusId',
						header : '状态ID',
						hidden : true,
						menuDisabled : true,
						sortable : true
					}, {
						dataIndex : 'userId',
						header : '员工编号',
						sortable : true
					}, {
						dataIndex : 'userName',
						header : '员工姓名',
						sortable : true
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'operatorStatus',
						header : '员工状态',
						dictData : OM_EMPSTATUS,
						sortable : false
					}, {
						dataIndex : 'begintime',
						width : 400,
						header : '开始时间',
						sortable : false
					}, {
						dataIndex : 'endtime',
						header : '结束时间',
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
		var orgid = Ext.id();
		this.empEditForm = new Ext.fn.EditPanel({
			autoScroll : true,
			border : false,
			pgrid : this.empGridPanel,
			columns : 2,
			loadParams : ['statusId'],
			loadUrl : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.loadEmployee.biz.ext',
			saveUrl : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.saveEmployee.biz.ext',
			fields : [{
						fieldLabel : '员工姓名',
						dataIndex : 'userName',
						name : 'person/userName',
						allowBlank : false,
						anchor : '90%',
						maxLength : 30,
						blankText : "请输入员工姓名！"
					}, {
						fieldLabel : '员工状态',
						dataIndex : 'operatorStatus',
						name : 'person/operatorStatus',
						maxLength : 20,
						allowBlank : false,
						anchor : '90%',
						blankText : "请输入员工状态!",
						readOnly : true
					}, {
						xtype : 'datefield',
						fieldLabel : '开始日期',
						dataIndex : 'indate',
						anchor : '90%',
						name : 'emp/indate',
						vtype : 'dateRange',
						id : empEndID,
						startDateField : empStartID,
						format : 'Y-m-d'
					}, {
						xtype : 'datefield',
						fieldLabel : '结束日期',
						format : 'Y-m-d',
						anchor : '90%',
						dataIndex : 'endtime'						
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
		var orgid = Ext.id();
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
						queryType : 'company',
						dataIndex : 'orgid',
						anchor : '90%',
						allowBlank : false,
						blankText : "请选择机构！",
						listeners : {
							'getselectnode' : function(obj, node) {
								Ext.getCmp(companyid).loader.baseParams = {
									'query/dataorgid' : node.attributes['orgid'],
									'query/status' : 'running',
									'query/delflag' : 'n'
								};
								Ext.getCmp(companyid).setReadOnly(false);
							}
						}
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
						id : companyid,
						xtype : 'orgtreecombo',
						fieldLabel : '业务机构',
						valueField : 'orgid',
						displayField : 'orgname',
						selectType : 'multiple',
						hiddenName : 'emp/bizorgids',
						dataIndex : 'bizorgids',
						anchor : '90%',
						allowBlank : false,
						blankText : "请选择机构！",
						readOnly : true,
						listeners : {
							'beforequery' : function(obj, node) {
								if (Ext.getCmp(orgid).getValue() == null
										|| Ext.getCmp(orgid).getValue() == "") {
									Ext.Msg.alert("系统提示", "请先选择所属公司!");
									return false;
								}

							}
						}
					}, {
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