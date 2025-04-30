com.keensen.ump.produce.diaphragm.make.stockMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makestockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					//title : '【底膜库存查询】',
					fields : [{
								xtype : 'dictcombobox',
								name : 'condition/dimoType',
								anchor : '90%',
								fieldLabel : '底膜类型',
								hiddenName : 'condition/dimoType',
								dictData : KS_DIMO_TYPE
							}, {
								xtype : 'dictcombobox',
								name : 'condition/line',
								anchor : '90%',
								fieldLabel : '生产线别',
								hiddenName : 'condition/line',
								dictData : KS_ZM_LINE
							}, {
								xtype : "dateregion",
								anchor : '90%',
								colspan : 1,
								nameArray : ['condition/productDtStart',
										'condition/productDtEnd'],
								fieldLabel : "生产日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								anchor : '90%',
								name : 'condition/dimoBatchNo2',
								fieldLabel : '底膜批号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								fieldLabel : '不展示结存<br>小于100',
								xtype : 'checkbox',
								checked : true,
								name : 'condition/notLessthan100',
								inputValue : 'Y',
								anchor : '90%'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden:uid != 'XXB',
					handler : this.exportExcel
				});
		this.queryPanel.addButton({
					text : "库存显示",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onShow
				});
		this.queryPanel.addButton({
					text : "老基地库存显示",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onShow4Old
				});
		this.queryPanel.addButton({
					text : "新基地库存显示",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onShow4New
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			//title : '【底膜库存列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新/老基地切换',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onChange
					}],
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'productDt',
						header : '生产日期'
					}, {
						dataIndex : 'base',
						header : '基地'
					}, {
						dataIndex : 'line',
						header : '生产线别'
					}, {
						dataIndex : 'dimoType',
						header : '底膜类型'
					}, {
						dataIndex : 'pumpSpeed',
						header : '底膜泵速'
					}, {
						dataIndex : 'supName',
						header : '无纺布（供应商）'
					}, {
						dataIndex : 'dimoBatchNo',
						header : '底膜批号'
					}, {
						dataIndex : 'dimoAmount',
						header : '底膜合格数'
					}, {
						dataIndex : 'residue',
						header : '底膜剩余（=结存）'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.make.queryStockByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/notLessthan100' : 'Y'
				},
				fields : [{
							name : 'dimoType'
						}, {
							name : 'line'
						}, {
							name : 'productDt'
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'dimoAmount'
						}, {
							name : 'residue'
						}, {
							name : 'supName'
						}, {
							name : 'pumpSpeed'
						}, {
							name : 'base'
						}, {
							name : 'id'
						}]
			})
		})
	}

}