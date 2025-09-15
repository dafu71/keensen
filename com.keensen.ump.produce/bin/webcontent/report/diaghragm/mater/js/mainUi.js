com.keensen.ump.produce.report.diaghragm.MaterMainMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '涂膜物料',
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
						dataIndex : 'batchNo',
						width:150,
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
						dataIndex : 'dmBatchNo',
						header : '底膜批次'
					}, {
						dataIndex : 'dmTheoryAmount',
						header : '底膜理论投入数',
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
						dataIndex : 'waterBatchNo',
						header : '水相液批号'
					}, {
						dataIndex : 'waterBatchNo2',
						header : '水相补充液批次'
					}, {
						dataIndex : 'waterLiquidWeight',
						header : '水相液调整重量(g)',
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
						dataIndex : 'troughLiquidWeight',
						header : '漂洗液重量(kg)',
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
						dataIndex : 'pvaUsed',
						header : 'PVA-母液(kg)',
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
						dataIndex : 'oilWeight',
						header : '油相液重量（kg）',
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
						dataIndex : 'wfSupplierName',
						header : '无纺布供应商'
					}, {
						dataIndex : 'produceDt',
						header : '生产时间'
					}, {
						dataIndex : 'teamName',
						header : '班组'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.diaghragm.queryMainMater.biz.ext',
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
							name : 'dmBatchNo'
						}, {
							name : 'dmTheoryAmount'
						}, {
							name : 'line'
						}, {
							name : 'waterBatchNo'
						}, {
							name : 'waterBatchNo2'
						}, {
							name : 'waterLiquidWeight'
						}, {
							name : 'troughLiquidWeight'
						}, {
							name : 'pvaUsed'
						}, {
							name : 'oilWeight'
						}, {
							name : 'specName'
						}, {
							name : 'wfSupplierName'
						}, {
							name : 'orderNo'
						}, {
							name : 'planNo'
						}, {
							name : 'prodFlagName'
						}, {
							name : 'produceDt'
						}, {
							name : 'teamName'
						}

				]
			})
		})
	}

}