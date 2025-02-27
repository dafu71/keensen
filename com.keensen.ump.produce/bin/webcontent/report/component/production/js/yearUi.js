com.keensen.ump.produce.report.component.YearMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '年度累计',
					layout : 'ns',
					border : false,
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;

		var yArr = [];
		for (var i = 2023; i <= 2030; i++) {
			var y = '' + i
			var y2 = '' + i + '年'
			var yy = [y, y2]
			yArr.push(yy)
		}

		this.yearStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : yArr
				});

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 6,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '起始年份',
								ref : '../productDtStart',
								hiddenName : 'condition/productDtStart',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								allowBlank : false,
								editable : false,
								store : this.yearStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.productDtStart.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '结束年份',
								ref : '../productDtEnd',
								hiddenName : 'condition/productDtEnd',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								allowBlank : false,
								editable : false,
								store : this.yearStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.productDtEnd.reset()
									}
								}
							}, {
								xtype : 'hidden',
								name : 'condition/type',
								value : 'year'
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
						dataIndex : 'produceDt',
						header : '生产日期'
					}, {
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