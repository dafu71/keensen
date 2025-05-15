com.keensen.ump.produce.diaphragm.make.report.PassrateMgr = function() {
	this.initPanel = function() {
		
		this.initStore();
		
		this.initQueryPanel();
		this.initListPanel();
		
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makereportpassratemgr',
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
						dataIndex : 'teamName',
						header : '生产班组'
					}, {
						dataIndex : 'outLength',
						header : '收卷长度'
					}, {
						dataIndex : 'actualLength',
						header : '长度'
					}, {
						dataIndex : 'cOutLength',
						header : 'C等品长度'
					}, {
						dataIndex : 'aOutLength',
						header : 'A等品长度'
					}, {
						dataIndex : 'aUsefulLength',
						header : 'A等品合格长度'
					}, {
						dataIndex : 'passful',
						header : '一次合格率'
					}, {
						dataIndex : 'c21OutLength',
						header : 'C21不合格数'
					}, {
						dataIndex : 'caimoLoss',
						header : '涂膜外观不良数'
					}, {
						dataIndex : 'qualifiedNotLength',
						header : '性能不合格数'
					}, {
						dataIndex : 'noTearLength',
						header : '铸膜未扯不良数'
					}, {
						dataIndex : 'scratchLength',
						header : '铸膜浅刮痕不良数'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryPassrate.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'actualLength'
						},{
							name : 'noTearLength'
						}, {
							name : 'scratchLength'
						},{
							name : 'qualifiedNotLength'
						}, {
							name : 'caimoLoss'
						}, {
							name : 'c21OutLength'
						}, {
							name : 'teamName'
						}, {
							name : 'outLength'
						}, {
							name : 'cOutLength'
						}, {
							name : 'aOutLength'
						}, {
							name : 'aUsefulLength'
						}, {
							name : 'passful'
						}

				]
			})
		})
	}

}