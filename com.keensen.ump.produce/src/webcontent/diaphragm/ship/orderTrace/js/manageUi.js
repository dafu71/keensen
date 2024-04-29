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
						header : '客户编码'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'amount',
						header : '需求数量'
					}, {
						dataIndex : 'needAmount',
						header : '订单需生产数量'
					}, {
						dataIndex : 'arrangeAmount',
						header : '建议排产数量'
					}, {
						dataIndex : 'unit',
						header : '单位'
					}, {
						dataIndex : 'orderDate',
						header : '下单日期'
					}, {
						dataIndex : 'demandDate',
						header : '要求入库日期'
					}, {
						dataIndex : 'deliveryAmount',
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
					}, {
						dataIndex : 'storageAmount',
						header : '合格数量'
					}, {
						dataIndex : 'validPercent',
						header : '实际合格率'
					}, {
						dataIndex : 'arrangePercent',
						header : '排产合格率'
					}, {
						dataIndex : 'orderStatus',
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
						}]
			})
		})
	}

}