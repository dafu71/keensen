com.keensen.ump.produce.diaphragm.make.report.UsedrateMgr = function() {
	this.initPanel = function() {
		
		this.initStore();
		
		this.initQueryPanel();
		this.initListPanel();
		
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makereportusedratemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.materClassCodeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['BW', 'BW'], ['SW', 'SW'], ['ULP', 'ULP'],
							['NF', 'NF'], ['HW', 'HW']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 5,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/productDtStart',
						fieldLabel : '生产时间',
						colspan : 1,
						anchor : '100%',
						// allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -3)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/productDtEnd',
						fieldLabel : '至',
						colspan : 1,
						anchor : '100%',
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '100',
						hiddenName : 'condition/lineId',
						anchor : '100%',
						fieldLabel : '生产线 ',
						colspan:1
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片系列',
						ref : '../materClassCode',
						hiddenName : 'condition/materClassCode',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.materClassCodeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.queryPanel.materClassCode.reset()
							}
						},
						colspan:1
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '100%',
						fieldLabel : '膜片型号 ',
						colspan:1
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
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
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'eLength',
						header : '实验收卷长度(m)'
					}, {
						dataIndex : 'tLength',
						header : '量产收卷长度(m)'
					}, {
						dataIndex : 'usefulLength',
						header : '量产合格长度(m)'
					}, {
						dataIndex : 'passRate',
						header : '量产合格率(%)'
					}, {
						dataIndex : 'tearLength',
						header : '不良长度(m)'
					}, {
						dataIndex : 'defectRate',
						header : '不良率(%)'
					}, {
						dataIndex : 'stockAmount',
						header : '库存数量(m)'
					}, {
						dataIndex : 'stockRate',
						header : '库存率(%)'
					}, {
						dataIndex : 'fhAmount',
						header : '发货数量(m)'
					}, {
						dataIndex : 'fhRate',
						header : '发货率(%)'
					}, {
						dataIndex : 'zjAmount',
						header : '组件使用数量(m)'
					}, {
						dataIndex : 'zjRate',
						header : '膜片使用率(%)'
					}, {
						dataIndex : 'usedRate',
						header : '利用率(%)'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryUsedRate.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'eLength'
						}, {
							name : 'tLength'
						}, {
							name : 'usefulLength'
						}, {
							name : 'passRate'
						}, {
							name : 'tearLength'
						}, {
							name : 'defectRate'
						}, {
							name : 'stockAmount'
						}, {
							name : 'stockRate'
						}, {
							name : 'fhAmount'
						}, {
							name : 'fhRate'
						}, {
							name : 'usedRate'
						}, {
							name : 'zjAmount'
						}, {
							name : 'zjRate'
						}

				]
			})
		})
	}

}