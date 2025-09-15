com.keensen.ump.produce.report.diaghragm.MaterOilMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '油相液',
					layout : 'ns',
					border : false,
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					ref :'../queryPanel',
					height : 110,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/productDtStart',
						ref : '../productDtStart',
						fieldLabel : '生产时间',
						colspan : 1,
						anchor : '100%',
						allowBlank : false,
						ref : '../productDtStart',
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -3)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/productDtEnd',
						ref : '../productDtEnd',
						fieldLabel : '至',
						colspan : 1,
						anchor : '100%',
						editable : true,
						allowBlank : false,
						format : 'Y-m-d H:i',
						ref : '../productDtEnd',
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '100',
						hiddenName : 'condition/lineId',
						ref : '../lineId',
						anchor : '100%',
						fieldLabel : '生产线 ',
						colspan : 1
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						ref : '../specId',
						anchor : '100%',
						fieldLabel : '膜片型号 ',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						ref:'../orderNo',
						name : 'condition/orderNo',
						anchor : '100%',
						fieldLabel : '订单号%-%'
					}, {

						xtype : 'combo',
						fieldLabel : '生产类型',
						ref : '../prodFlagId',
						hiddenName : 'condition/prodFlagId',
						emptyText : '--请选择--',
						anchor : '100%',
						store : [[null, '全部'], ['300027', '量产'], ['300028', '实验'], ['300140', '试量产']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.prodFlagId.reset();
							}
						}
					}, {

						xtype : 'textfield',
						ref:'../batchNo',
						name : 'condition/batchNo',
						anchor : '100%',
						fieldLabel : '膜片批次%-%'
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// hidden : true,
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
				forceFit : false
			},
			hsPage : false,
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',width:150,
						header : '膜片批次',
						renderer : function(v, m, r, i) {
							var batchNo = r.get('batchNo');
							if (batchNo == '合计' ) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'specName',
						header : '膜片型号'
					}, {
						dataIndex : 'line',
						header : '生产线'
					}, {
						dataIndex : 'prodFlagName',
						header : '生产类型'
					}, {
						dataIndex : 'outLength',
						header : '长度(m)',
						renderer : function(v, m, r, i) {
							var batchNo = r.get('batchNo');
							if (batchNo == '合计' ) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'c41Std',
						header : 'C41(kg)标准',
						renderer : function(v, m, r, i) {
							var batchNo = r.get('batchNo');
							if (batchNo == '合计' ) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'c41Weight',
						header : 'C41(kg)实际',
						renderer : function(v, m, r, i) {
							var batchNo = r.get('batchNo');
							if (batchNo == '合计' ) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'c42Std',
						header : 'C42(kg)标准',
						renderer : function(v, m, r, i) {
							var batchNo = r.get('batchNo');
							if (batchNo == '合计' ) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'c42Weight',
						header : 'C42(kg)实际',
						renderer : function(v, m, r, i) {
							var batchNo = r.get('batchNo');
							if (batchNo == '合计' ) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return v;
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.diaghragm.queryOil.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'outLength'
						}, {
							name : 'orderNo'
						}, {
							name : 'planNo'
						}, {
							name : 'lineId'
						}, {
							name : 'line'
						}, {
							name : 'specId'
						}, {
							name : 'specName'
						}, {
							name : 'c41Std'
						}, {
							name : 'c41Weight'
						}, {
							name : 'c42Std'
						}, {
							name : 'c42Weight'
						}, {
							name : 'prodFlagName'
						}

				]
			})
		})
	}

}