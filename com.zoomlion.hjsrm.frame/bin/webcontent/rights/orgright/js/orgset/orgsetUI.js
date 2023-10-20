com.zoomlion.hjsrm.orgright.optorgMgr = function() {
	/**
	 * 初始化
	 */
	this.initPanel = function() {
		this.buildOrgRightsSetWin();
	};

	/**
	 * 选择窗口
	 */
	this.buildOrgRightsSetWin = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		var saveUrl = 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.saveOrgQueryCfg.biz.ext';
		var tbar = new Ext.Toolbar({
					items : [{
								xtype : 'button',
								text : "新增",
								iconCls : 'icon-application_add',
								scope : this,
								handler : this.onOrgSetAdd
							}, "-", {
								xtype : 'button',
								text : "删除",
								iconCls : 'icon-application_delete',
								scope : this,
								handler : this.onOrgSetDel
							}]
				});
		var onEditRow = -1;
		var relvalue = "";
		var colModel = new Ext.grid.ColumnModel([selModel, {
					header : "<font style='color:blue'>机构名称</font>",
					dataIndex : "orgname",
					sortable : true,
					width : 200,
					editor : new Ext.grid.GridEditor(new Ext.bz.org.OrgTreeCombo(
							{
								hiddenName : 'orgid',
								valueField : 'orgid',
								displayField : 'orgname',
								fieldLabel : '所属机构',
								editable : false,
								allowBlank : false,
								queryType : 'dataorg',
								blankText : "请选择机构!",
								listeners : {
									'getselectnode' : function(tree, node) {
										relvalue = this.hiddenField.value;
									}
								}
							}))
				}, {
					header : "<font style='color:blue'>授权类型</font>",
					type : 'String',
					width : 80,
					dataIndex : "querytype",
					editor : new Ext.grid.GridEditor(new Ext.bz.dict.DictComboBox(
									{
										dictData : SY_QUERYTYPE,
										editable : false,
										allowBlank : false,
										blankText : "请授权类型!"
									})),
					renderer : function(value, p, r) {
						for (var i = 0; i < SY_QUERYTYPE.length; i++) {
							if (SY_QUERYTYPE[i].DICTID == value) {
								r.querytype = SY_QUERYTYPE[i].DICTID;
								return SY_QUERYTYPE[i].DICTNAME;
							}
						}
					}
				}]);

		var store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.loadOrgQueryCfg.biz.ext',
			root : 'data',
			autoLoad : false,
			fields : [{
						name : 'orgid'
					}, {
						name : 'orgname'
					}, {
						name : 'querytype'
					}, {
						name : 'operatorid'
					}]
		});

		this.orgQuerySetPanel = new Ext.fn.EditListPanel({
					saveUrl : saveUrl,
					cm : colModel,
					sm : selModel,
					store : store,
					tbar : tbar,
					clicksToEdit : 1,
					hsPage : false,
					subAll : false,
					listeners : {
						'validateedit' : function(e) {
							if (e.field == "orgname") {
								onEditRow = e.rowIndex;
								if (e.grid.store.find('orgid', relvalue) != -1) {
									return false;
								} else {
									e.record.set('orgid', relvalue);
								}
							}
						}
					},
					viewConfig : {
						forceFit : true
					}
				});

		this.orgQuerySetWin = new Ext.Window({
					title : '机构查询权限配置<font style="color:red">----单击蓝色字体表头的表格列进行编辑</font>',
					closeAction : 'hide',
					width : 500,
					height : 300,
					layout : 'fit',
					modal : true,
					items : [this.orgQuerySetPanel],
					buttonAlign : 'center',
					buttons : [{
								text : '保存',
								scope : this,
								handler : this.onOrgSetSave
							}, {
								text : '关闭',
								scope : this,
								handler : function() {
									this.orgQuerySetWin.hide()
								}
							}]
				});
	};
}