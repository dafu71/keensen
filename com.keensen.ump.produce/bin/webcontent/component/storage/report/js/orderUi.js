com.keensen.ump.produce.component.storage.Report4OrderMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'report4ordermgr',
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
					// title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/orderNo2',
								anchor : '100%',
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号'
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
			// title : '【仓库配置列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : orderAmountTotalId
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : stockAmountTotalId
					}],
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '销售订单编号'
					}, {
						dataIndex : 'prodName',
						sortable : true,
						header : '产品名称'
					}, {
						dataIndex : 'jmSpecName',
						sortable : true,
						header : '卷膜型号'
					}, {
						dataIndex : 'orderAmount',
						sortable : true,
						header : '订单数量（支）'
					}, {
						dataIndex : 'stockAmount',
						sortable : true,
						header : '在库数量（支）'
					}, {
						dataIndex : 'director',
						sortable : true,
						header : '业务员'
					}, {
						dataIndex : 'stockTime',
						sortable : true,
						header : '入库时间'
					}, {
						dataIndex : 'dateDelivery',
						sortable : true,
						header : '发货日期'
					}, {
						dataIndex : 'deliveryDateLatest',
						hidden:true,
						sortable : true,
						header : '计划最晚发货日期'
					}, {
						dataIndex : 'overDate',
						sortable : true,
						header : '超期天数'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryReport4Order.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'orderNo'
						}, {
							name : 'prodName'
						}, {
							name : 'jmSpecName'
						}, {
							name : 'orderAmount'
						}, {
							name : 'stockAmount'
						}, {
							name : 'director'
						}, {
							name : 'stockTime'
						}, {
							name : 'deliveryDateLatest'
						}, {
							name : 'overDate'
						}, {
							name : 'orderAmountTotal'
						}, {
							name : 'stockAmountTotal'
						}, {
							name : 'dateDelivery'
						}]
			})
		})
	}

}