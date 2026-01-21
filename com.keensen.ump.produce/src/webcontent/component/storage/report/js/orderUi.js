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
			// title : '【仓库配置列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'orderNo',
						header : '销售订单编号'
					}, {
						dataIndex : 'prodName',
						header : '产品名称'
					}, {
						dataIndex : 'jmSpecName',
						header : '卷膜型号'
					}, {
						dataIndex : 'orderAmount',
						header : '数量（支）'
					}, {
						dataIndex : 'stockAmount',
						header : '在库数量（支）'
					}, {
						dataIndex : 'director',
						header : '负责人'
					}, {
						dataIndex : 'stockTime',
						header : '入库时间'
					}, {
						dataIndex : 'deliveryDateLatest',
						header : '计划最晚发货日期'
					}, {
						dataIndex : 'overDate',
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
						}]
			})
		})
	}

}