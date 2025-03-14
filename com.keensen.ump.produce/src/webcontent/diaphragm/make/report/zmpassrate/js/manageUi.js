com.keensen.ump.produce.diaphragm.make.report.PassrateZmMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makereportpassratezmmgr',
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
								anchor : '100%',
								allowBlank : false,
								colspan : 1,
								nameArray : ['condition/productDtStart',
										'condition/productDtEnd'],
								fieldLabel : "生产日期",
								format : "Y-m-d"
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
						dataIndex : 'theoryAmount',
						header : '投入数'
					}, {
						dataIndex : 'amountQuality',
						header : '合格长度'
					}, {
						dataIndex : 'passful',
						header : '一次合格率'
					}, {
						dataIndex : 'lossTotal',
						header : '整体不良数'
					}, {
						dataIndex : 'lossTear',
						header : '已扯不良数'
					}, {
						dataIndex : 'lossNotTear',
						header : '未扯不良数'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryPassrate4Zm.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'teamName'
						}, {
							name : 'theoryAmount'
						}, {
							name : 'amountQuality'
						}, {
							name : 'passful'
						}, {
							name : 'lossTotal'
						}, {
							name : 'lossTear'
						}, {
							name : 'lossNotTear'
						}

				]
			})
		})
	}

}