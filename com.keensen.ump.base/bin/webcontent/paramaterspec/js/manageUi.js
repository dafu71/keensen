com.keensen.ump.base.ParamaterspecMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'paramaterspecmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}
	
	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					//collapsible : true,
					titleCollapse : false,
					//title : '【物料规格查询】',
					fields : [  {
								xtype : 'textfield',
								name : 'condition/materSpecCode',
								fieldLabel : '规格编码'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								fieldLabel : '规格名称'
							},{
								xtype : 'dictcombobox',
								name : 'condition/state',
								hiddenName : 'condition/state',
								fieldLabel : '状态',
								dictData : PARA_MATER_SPEC_STATE
							},{
								xtype : 'operatorrolecombobox',
								currentRolecode:'10001081',
								//allowBlank : false,
								//anchor : '95%',
								//ref : '../userid',
								hiddenName : 'condition/userid',
								fieldLabel : '操作员'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden:true,
					handler : this.exportExcel
				});
	}
	
	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			//title : '【物料规格列表】',
			hsPage : true,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materSpecCode',
						header : '规格编码'
					}, {
						dataIndex : 'materSpecName',
						header : '规格名称'
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'state',
						header : '状态',
						dictData : PARA_MATER_SPEC_STATE
					}, {
						dataIndex : 'safetyStock',
						header : '安全库存量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.paramaterspec.queryParaMaterSpec.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					//'condition/werks' : 3000
				},
				fields : [{
							name : 'materSpecCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'materSpecId'
						}, {
							name : 'state'
						}, {
							name : 'safetyStock'
						}]
			})
		})
	}
}