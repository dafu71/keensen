com.keensen.ump.base.StorageMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'storagemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								fieldLabel : '仓库编号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								fieldLabel : '仓库名称'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/type',
								hiddenName : 'condition/type',
								fieldLabel : '仓库类型',
								dictData : STORAGE_TYPE
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【仓库配置列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.base.storage.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '仓库编号'
					}, {
						dataIndex : 'name',
						header : '仓库名称'
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'type',
						header : '仓库类型',
						dictData : STORAGE_TYPE
					}, {
						dataIndex : 'manager',
						header : '管理员'
					}, {
						dataIndex : 'address',
						header : '地址'
					}, {
						dataIndex : 'phone',
						header : '电话'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.storage.queryStorage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			
				},
				fields : [{
							name : 'code'
						}, {
							name : 'name'
						}, {
							name : 'type'
						}, {
							name : 'manager'
						}, {
							name : 'address'
						}, {
							name : 'phone'
						}, {
							name : 'remark'
						}, {
							name : 'id'
						}]
			})
		})
	}
	
	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增仓库配置',
			height : 300,
			width : 800,
			//itemCls:'required', 
			//style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						columns : 2,
						saveUrl : 'com.keensen.ump.base.storage.saveEntity.biz.ext',
						fields : [{
							xtype : 'textfield',
							name : 'entity/name',
							allowBlank : false,
							fieldLabel : '仓库名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/code',
							allowBlank : true,
							fieldLabel : '仓库编号',
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							fieldLabel : '仓库类型',
							dictData : STORAGE_TYPE,
							name : 'entity/type',
							allowBlank : false,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/manager',
							allowBlank : true,
							fieldLabel : '管理员',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/phone',
							allowBlank : true,
							fieldLabel : '电话',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/address',
							allowBlank : true,
							fieldLabel : '地址',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							height : '50',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注',
							colspan : 2
						}]
					}]
		});
	}
	
	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改仓库配置',
			height : 300,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.base.storage.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.base.storage.saveEntity.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/name',
							dataIndex : 'name',
							allowBlank : false,
							fieldLabel : '仓库名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/code',
							dataIndex : 'code',
							allowBlank : true,
							fieldLabel : '仓库编号',
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							fieldLabel : '仓库类型',
							dictData : STORAGE_TYPE,
							name : 'entity/type',
							dataIndex : 'type',
							allowBlank : false,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/manager',
							dataIndex : 'manager',
							allowBlank : true,
							fieldLabel : '管理员',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/phone',
							dataIndex : 'phone',
							allowBlank : true,
							fieldLabel : '电话',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/address',
							dataIndex : 'address',
							allowBlank : true,
							fieldLabel : '地址',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							height : '50',
							dataIndex : 'remark',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}
}