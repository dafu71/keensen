com.keensen.ump.produce.quality.NsfListMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'nsflistmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【产品水测标准查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/company',
								anchor : '95%',
								fieldLabel : '公司名称 '
							}, {
								xtype : 'textfield',
								name : 'condition/brand',
								anchor : '95%',
								fieldLabel : '品牌 '
							}, {
								xtype : 'textfield',
								name : 'condition/labelSpecName',
								anchor : '95%',
								fieldLabel : '标签元件型号 '
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								anchor : '95%',
								fieldLabel : '我司元件型号 '
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// rescode : '10002661',
					id : exportExcelBtn,
					hidden : true,
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
			// title : '【产品水测标准列表】',
			id : mylistid,
			autoExpandColumn : '12',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						id : addBtn,
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						id : editBtn,
						handler : this.onEdit
					}, '-', {
						text : '删除',
						id : delBtn,
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.quality3.deleteNsfList.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'certificationDate',
						header : '通过NSF认证日期'
					}, {
						dataIndex : 'company',
						header : '公司名称'
					}, {
						dataIndex : 'brand',
						header : '品牌'
					}, {
						dataIndex : 'labelSpecName',
						header : '标签元件型号'
					}, {
						dataIndex : 'prodSpecName',
						header : '对应我司元件型号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality3.queryNsfListByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'certificationDate'
						}, {
							name : 'company'
						}, {
							name : 'brand'
						}, {
							name : 'labelSpecName'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'id'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.quality3.saveNsfList.biz.ext',
				fields : [{
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/certificationDate',
							ref : '../../certificationDate',
							fieldLabel : '通过NSF认证日期',
							allowBlank : false,
							value : new Date(),
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/company',
							ref : '../../company',
							fieldLabel : '公司名称',
							allowBlank : false,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/brand',
							ref : '../../brand',
							fieldLabel : '品牌',
							allowBlank : false,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							allowBlank : false,
							ref : '../../labelSpecName',
							fieldLabel : '标签元件型号',
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/prodSpecName',
							allowBlank : true,
							ref : '../../prodSpecName',
							fieldLabel : '我司元件型号',
							anchor : '75%',
							colspan : 2
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.quality3.expandNsfList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality3.saveNsfList.biz.ext',
				fields : [{
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/certificationDate',
							dataIndex : 'certificationDate',
							ref : '../../certificationDate',
							fieldLabel : '通过NSF认证日期',
							allowBlank : false,
							value : new Date(),
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/company',
							dataIndex : 'company',
							ref : '../../company',
							fieldLabel : '公司名称',
							allowBlank : false,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/brand',
							dataIndex : 'brand',
							ref : '../../brand',
							fieldLabel : '品牌',
							allowBlank : false,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							dataIndex : 'labelSpecName',
							allowBlank : false,
							ref : '../../labelSpecName',
							fieldLabel : '标签元件型号',
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/prodSpecName',
							dataIndex : 'prodSpecName',
							allowBlank : true,
							ref : '../../prodSpecName',
							fieldLabel : '我司元件型号',
							anchor : '75%',
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