com.zoomlion.hjsrm.org.departmentMgr = function() {
	this.initPanel = function() {
		// 初始化代码
		this.createDeptGridpanel();
		this.buildDeptEditWin();
		this.buildDeptInputWin();
		this.createDeptQuerypanel();
		return new Ext.fn.fnLayOut({
					title : '机构管理',
					layout : 'ns',
					panels : [this.deptQueryPanel, this.deptGridPanel]
				});
	};
	/*
	 * 创建机构修改面板
	 */
	this.buildDeptEditWin = function() {
		/*
		 * 机构编辑form
		 */
		this.porgselecttions = new Ext.bz.org.OrgTreeCombo({
			fieldLabel : '上级机构',anchor : '90%',allowBlank : false,blankText : "请选择上级机构!",valueField : 'orgid',
			displayField : 'orgname',dataIndex : 'parentorgid',hiddenName : 'org/parentorgid',queryType:'dataorg'		
		});
		this.orgselecttions = new Ext.bz.dict.DictComboBox({
			fieldLabel : '机构类别',anchor : '90%',allowBlank : false,blankText : "请选择机构类别!",
			hiddenName : 'org/orgtype',dataIndex : 'orgtype',dictData : OM_ORGTYPE,lastQuery : ''
		});
		this.deptEditForm = new Ext.fn.EditPanel({
			pgrid : this.deptGridPanel,
			loadUrl : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.loadOrganization.biz.ext',//编辑时加载业务数据
			saveUrl : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.saveOrganization.biz.ext',//编辑后点击保存
			columns:2,
			fields : [
					  {fieldLabel : '机构ID',dataIndex : 'orgid',name : 'org/orgid',hidden : true}, 
					  {fieldLabel : '数据归属机构',dataIndex : 'dataorgid',name : 'org/dataorgid',hidden : true}, 
					  {fieldLabel : '机构状态',name : 'org/status',hidden : true,hiddenName : 'org/status',value : 'running'},
					  {fieldLabel : '父级机构类型',name : 'org/ptype',hidden : true,hiddenName : 'org/ptype',dataIndex:'ptype'},
					  {fieldLabel : '机构级别',dataIndex : 'orglevel',hidden : true,dataIndex : 'orglevel',name : 'org/orglevel'},
					  {fieldLabel : '业务归属机构',dataIndex : 'busiorgname',name : 'org/busiorgname',hidden : true},
					  {fieldLabel : '机构名称',dataIndex : 'orgname',name : 'org/orgname',anchor : '90%',allowBlank : false,maxLength : 30,maxLengthText :'机构名称太长了',blankText : "请输入机构名称！"},
					  {fieldLabel : '机构代码',dataIndex : 'orgcode',name : 'org/orgcode',anchor : '90%',allowBlank : false, blankText : "请输入机构编码!" , readOnly : true}, 
					  this.porgselecttions,this.orgselecttions,
					  {xtype : 'datefield',fieldLabel : '创建时间',anchor : '90%',dataIndex : 'startdate',name : 'org/startdate',format : 'Y-m-d',readOnly : true},
					  {fieldLabel : '邮政编码',anchor : '90%',vtype : 'code',name : 'org/zipcode'},
					  {fieldLabel : '联系人',anchor : '90%',dataIndex : 'linkman',maxLength : 15,maxLengthText :'联系人太长了',name : 'org/linkman'},
					  {fieldLabel : '联系电话',anchor : '90%',dataIndex : 'linktel',name : 'org/linktel',maxLength : 20,vtype : 'tel'},
					  {fieldLabel : '电子邮件',anchor : '90%',dataIndex : 'email',name : 'org/email',maxLength : 80,vtype : 'email'},
					  {fieldLabel : '网站地址',anchor : '90%',dataIndex : 'weburl',name : 'org/weburl',maxLength : 250,vtype : 'url'},
					  {fieldLabel : '机构地址',anchor : '95%',dataIndex : 'orgaddr',name : 'org/orgaddr',maxLength : 150,colspan:2},
					  {xtype:'textarea',fieldLabel : '备注',anchor : '95%',dataIndex : 'remark',name : 'org/remark',maxLength : 250,colspan:2}
						]
		});
		/*
		 * 创建部门编辑窗口
		 */
		this.deptEditWin = new Ext.fn.FormWindow({
					title : '修改机构',
					width : 600,
					height : 320,
					items : [this.deptEditForm]
				});
	};
	/*
	 * 创建新增机构面板
	 */
	this.buildDeptInputWin = function(){
		this.porgselecttion = new Ext.bz.org.OrgTreeCombo({
			fieldLabel : '上级机构',allowBlank : false,blankText : "请选择上级机构!",valueField : 'orgid',
			displayField : 'orgname',anchor : '90%',dataIndex : 'parentorgid',hiddenName : 'org/parentorgid',queryType:'dataorg'		
		});
		this.orgselecttion = new Ext.bz.dict.DictComboBox({
			fieldLabel : '机构类别',anchor : '90%',allowBlank : false,blankText : "请选择机构类别!",
			hiddenName : 'org/orgtype',dictData : OM_ORGTYPE,lastQuery : ''
		});
		this.deptInputWin = new Ext.fn.FormWindow({
			width : 600,
			height : 320,
			title : '新增机构',
			items : [{
				xtype : 'inputpanel',
				saveUrl : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.addOrganization.biz.ext',//新建保存路劲
				pgrid : this.deptGridPanel,
				columns:2,
				fields : [
						 {xtype : 'textfield',fieldLabel : '机构状态',name : 'org/status',hidden : true,hiddenName : 'org/status',value : 'running'},
						 {xtype : 'textfield',fieldLabel : '父级机构类型',name : 'org/ptype',hidden : true,hiddenName : 'org/ptype',dataIndex:'ptype'},
						 {xtype : 'textfield',fieldLabel : '机构ID',name : 'org/orgid',hidden : true},
						 {xtype : 'textfield',fieldLabel : '机构级别',dataIndex : 'orglevel',hidden : true, name : 'org/orglevel'},
						 {xtype : 'textfield',name : 'org/operation',value : 'add',hidden : true}, 
						 {xtype : 'textfield',fieldLabel : '机构名称',name : 'org/orgname',maxLength : 30,maxLengthText :'机构名称太长了',anchor : '90%',
						 		allowBlank : false,blankText : "请输入机构名称！"},
						 {xtype : 'textfield',fieldLabel : '机构代码',dataIndex:'orgcode',name : 'org/orgcode',anchor : '90%',allowBlank : false,
						 blankText : "请输入机构编码！",vtype:'orgcode'},this.porgselecttion,this.orgselecttion,
						 {xtype : 'datefield',fieldLabel : '创建时间',anchor : '90%',dataIndex : 'startdate',name : 'org/startdate',format : 'Y-m-d',value:new Date()},
						 {fieldLabel : '邮政编码',anchor : '90%',vtype : 'code',name : 'org/zipcode'},
						 {xtype : 'textfield',fieldLabel : '联系人',anchor : '90%',maxLength : 15,maxLengthText :'联系人太长了',name : 'org/linkman'},
						 {xtype : 'textfield',fieldLabel : '联系电话',anchor : '90%',name : 'org/linktel',maxLength : 20,vtype : 'tel'},
						 {xtype : 'textfield',fieldLabel : '电子邮件',anchor : '90%',name : 'org/email',maxLength : 80,vtype : 'email'},
						 {xtype : 'textfield',fieldLabel : '网站地址',anchor : '90%',name : 'org/weburl',maxLength : 250,vtype : 'url'},
						 {xtype : 'textfield',fieldLabel : '机构地址',anchor : '95%',name : 'org/orgaddr',maxLength : 150,colspan:2},
						 {xtype:'textarea',fieldLabel : '备注',dataIndex : 'remark',anchor : '95%',name : 'org/remark',maxLength : 250,colspan:2}
						]
		}]
	});
	};
	/*
	 * 创建机构查询面板
	 */
	this.createDeptQuerypanel = function() {
		this.deptQueryPanel = new Ext.fn.QueryPanel({
			title : '机构查询',
			height : 140,
			columns : 3,
			fields : [
						{xtype : 'hidden',name : 'orgid'},
						{xtype : 'textfield',name : 'orgcode',fieldLabel : '机构代码'},
						{xtype : 'textfield',name : 'orgname',fieldLabel : '机构名称'},
						{xtype : 'orgtreecombo',fieldLabel : '上级机构',valueField : 'orgid',dataIndex : 'org',displayField : 'orgname',
						hiddenName : 'parnetorgid',queryType:'dataorg',
							listeners : {
								scope : this,
								'getselectnode' : function(tree, node) {
									var orgseqfield = this.deptQueryPanel.form.findField('orgid');
									orgseqfield.setValue(node.attributes['orgid']);
								}
							}
						},
						{editable : false,xtype : 'dictcombobox',fieldLabel : '机构类别',hiddenName : 'orgtype',forceSelection : false,dictData : OM_ORGTYPE},
						{editable : false,xtype : 'dictcombobox',fieldLabel : '机构状态',hiddenName : 'status',forceSelection : false,dictData : OM_ORGSTATUS,value:'running'}
						]
		});
	};
	/*
	 * 创建机构列表面板
	 */
    this.createDeptGridpanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({
					header:'',
					singleSelect : true
				});
		var _store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.queryOrganizations.biz.ext',//查询机构分页
			root : 'data',
			totalProperty : 'totalCount',
			fields : [{name : 'orgid'}, {name : 'orgcode'}, {name : 'orgname'}, {name : 'orgtype'}, 
					  {name : 'orglevel'}, {name : 'dataorgid'}, {name : 'busiorgname'}, {name : 'orgseq'}, 
					  {name : 'parentorgid'}, {name : 'parentorgname'}, {name : 'startdate',format : 'Y-m-d',type : 'date'},
					  {name : 'enddate',format : 'Y-m-d',type : 'date'}, {name : 'sortno'}, {name : 'area'},
					  {name : 'orgaddr'}, {name : 'zipcode'}, {name : 'manaposition'}, {name : 'linkman'},
					  {name : 'linktel'}, {name : 'email'}, {name : 'weburl'}, {name : 'remark'},{name:'status'}, {name : 'createby'}
					  ]
		});
    /*
     * 机构列表面板
     */
	this.deptGridPanel = new Ext.fn.ListPanel({
			sm : selModel,
			delUrl : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.removeOrganizations.biz.ext',//注销机构
			tbar : [{text : '新增',scope : this,ref : '../addNewOrgBtn',iconCls : 'icon-application_add',handler : this.onAdd}, '-',
					{text : '修改',scope : this,iconCls : 'icon-application_edit',handler : this.onEdit}, '-', 
					{text : '注销',scope : this,iconCls : 'icon-application_delete',handler : this.onCancellation}, '-', 
					{text : '恢复',scope : this,iconCls : 'icon-application_reset',handler : this.onRecovery}
					],
			store : _store,
			columns : [new Ext.grid.RowNumberer(), selModel, 
						{dataIndex : 'orgcode',header : '机构代码',sortable : true}, 
						{dataIndex : 'orgname',header : '机构名称',sortable : true},
						{dataIndex : 'orgtype',header : '机构类别',xtype : 'dictcolumn',dictData : OM_ORGTYPE},
						{dataIndex : 'orglevel',header : '机构级别'}, 
						{dataIndex : 'parentorgname',header : '上级机构'},
						{dataIndex : 'busiorgname',header : '所属公司'},
						{dataIndex : 'status',header : '机构状态',xtype : 'dictcolumn',dictData : OM_ORGSTATUS},
						{dataIndex : 'createby',header : '创建者'}
						]
		});

	}

}