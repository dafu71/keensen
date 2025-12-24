com.keensen.ump.produce.component.storage.StoragecodeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'storagecodemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					//collapsible : true,
					titleCollapse : false,
					//title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/storageCode',
								fieldLabel : '库位码'
							}, {
								xtype : 'textfield',
								name : 'condition/storage',
								fieldLabel : '仓库名称'
							}, {
								xtype : 'textfield',
								name : 'condition/position',
								fieldLabel : '仓位名称'
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
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			//title : '【仓库配置列表】',
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
			delUrl : 'com.keensen.ump.produce.component.storage.deleteStorageCode.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'storageCode',
						header : '库位码'
					}, {
						dataIndex : 'storage',
						header : '仓库名称'
					}, {
						dataIndex : 'position',
						header : '仓位名称'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryStorageCodeByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			
				},
				fields : [{
							name : 'storageCode'
						}, {
							name : 'storage'
						}, {
							name : 'position'
						}, {
							name : 'id'
						}]
			})
		})
	}
	
	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
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
						saveUrl : 'com.keensen.ump.produce.component.storage.saveStorageCode.biz.ext',
						fields : [{
							xtype : 'textfield',
							name : 'entity/storageCode',
							allowBlank : false,
							fieldLabel : '库位码',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						},{
							xtype : 'textfield',
							name : 'entity/storage',
							allowBlank : false,
							fieldLabel : '仓库名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/position',
							allowBlank : true,
							fieldLabel : '仓位名称',
							colspan : 2
						}]
					}]
		});
	}
	
	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
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
				loadUrl : 'com.keensen.ump.produce.component.storage.expandStorageCode.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.storage.saveStorageCode.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/storageCode',
							dataIndex : 'storageCode',
							allowBlank : false,
							fieldLabel : '库位码',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						},{
							xtype : 'textfield',
							name : 'entity/storage',
							dataIndex : 'storage',
							allowBlank : false,
							fieldLabel : '仓库名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/position',
							dataIndex : 'position',
							allowBlank : true,
							fieldLabel : '仓位名称',
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