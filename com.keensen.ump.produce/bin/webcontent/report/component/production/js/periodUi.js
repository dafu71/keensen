com.keensen.ump.produce.report.component.PeriodMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '时间段产量',
					layout : 'ns',
					border : false,
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
						xtype : 'hidden',
						name : 'condition/type',
						value : 'period'
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					//hidden : true,
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
						dataIndex : 'cmAmountJy',
						header : '家用裁叠膜数'
					}, {
						dataIndex : 'cmAmountGy',
						header : '工业裁叠膜数'
					}, {
						dataIndex : 'jmAmount8',
						header : '8寸卷膜数'
					}, {
						dataIndex : 'jmAmount4',
						header : '4寸卷膜数'
					}, {
						dataIndex : 'qjAmount8',
						header : '8寸气检数'
					}, {
						dataIndex : 'qjAmount4',
						header : '4寸气检数'
					}, {
						dataIndex : 'rsAmount8',
						header : '8寸绕丝数'
					}, {
						dataIndex : 'rsAmount4',
						header : '4寸绕丝数'
					}, {
						dataIndex : 'bzAmount8',
						header : '8寸包装数'
					}, {
						dataIndex : 'bzAmount4',
						header : '4寸包装数'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.component.queryProduction.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'cmAmountJy'
						}, {
							name : 'cmAmountGy'
						}, {
							name : 'jmAmount8'
						}, {
							name : 'jmAmount4'
						}, {
							name : 'qjAmount8'
						}, {
							name : 'qjAmount4'
						}, {
							name : 'rsAmount8'
						}, {
							name : 'rsAmount4'
						}, {
							name : 'bzAmount8'
						}, {
							name : 'bzAmount4'
						}, {
							name : 'produceDt'
						}

				]
			})
		})
	}

}