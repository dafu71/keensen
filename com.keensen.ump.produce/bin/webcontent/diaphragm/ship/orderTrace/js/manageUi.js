com.keensen.ump.produce.diaphragm.ship.OrderTraceMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shipordertracemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "下单日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/demandDateStart',
										'condition/demandDateEnd'],
								fieldLabel : "要求入库日期",
								format : "Y-m-d"
							}, {
								fieldLabel : '不展示已关闭',
								xtype : 'checkbox',
								checked : true,
								name : 'condition/isClosed',
								inputValue : 'Y',
								anchor : '75%'
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = this.listPanel || new Ext.fn.ListPanel({
			// title : '【订单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'customerCode',
						sortable : true,
						header : '客户编码'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号'
					}, {
						dataIndex : 'materSpecCode',
						sortable : true,
						header : '膜片型号'
					}, {
						dataIndex : 'amount',
						sortable : true,
						header : '订单数量'
					}, {
						dataIndex : 'needAmount',
						sortable : true,
						header : '订单需生产数量',
						renderer : function(v, m, r, i) {
							var v2 = parseFloat(v);
							if (v2 < 0) {
								return '';
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'arrangeAmount',
						sortable : true,
						header : '建议排产数量',
						renderer : function(v, m, r, i) {
							var v2 = parseFloat(v);
							if (v2 < 0) {
								return '';
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'unit',
						sortable : true,
						header : '单位'
					}, {
						dataIndex : 'orderDate',
						sortable : true,
						header : '下单日期'
					}, {
						dataIndex : 'demandDate',
						sortable : true,
						header : '要求入库日期'
					}, {
						dataIndex : 'deliveryAmount',
						sortable : true,
						header : '已发货数量',
						scope : this,
						renderer : function(v, m, r, i) {
							var orderNo = r.get('orderNo');
							if (!Ext.isEmpty(v)) {
								var style = "<a title='查看膜片批次' style='color:red;text-decoration:none'";
								var str = style
										+ " href='javascript:queryDelivery("
										+ Ext.encode(orderNo) + ");'>" + v
										+ "</a>";

								return str;
							} else {
								return v;
							}
						}
					}/*
						 * , { dataIndex : 'storageAmount', sortable : true,
						 * header : '合格数量' }
						 */, {
						dataIndex : 'fhPercent',
						sortable : true,
						header : '订单发货率'
						// 订单发货率=已发货数量/订单数量
				}	, {
						dataIndex : 'arrangePercent',
						sortable : true,
						header : '排产合格率'
					}, {
						dataIndex : 'orderStatus',
						sortable : true,
						header : '订单状态'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.order.queryOrderTraceByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/isClosed' : 'Y'
				},
				fields : [{
							name : 'customerCode'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'amount'
						}, {
							name : 'needAmount'
						}, {
							name : 'arrangeAmount'
						}, {
							name : 'unit'
						}, {
							name : 'orderDate'
						}, {
							name : 'demandDate'
						}, {
							name : 'deliveryAmount'
						}, {
							name : 'storageAmount'
						}, {
							name : 'validPercent'
						}, {
							name : 'specId'
						}, {
							name : 'arrangePercent'
						}, {
							name : 'orderStatus'
						}, {
							name : 'fhPercent'
						}]
			})
		})
	}

}