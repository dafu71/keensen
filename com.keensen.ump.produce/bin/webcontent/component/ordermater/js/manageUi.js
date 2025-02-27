com.keensen.ump.produce.component.OrdermaterMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "ordermatermgr",
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
					title : '【订单物料需求查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								allowBlank : false,
								anchor : '75%',
								fieldLabel : '订单号'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden:true,
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
			title : '【订单物料需求列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '订单号:'
					}, {
						xtype : 'textfield',
						readOnly:true,
						width : 120,
						ref : '../orderNO'

					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '订单数量:'
					}, {
						xtype : 'textfield',
						readOnly:true,
						width : 120,
						ref : '../orderAmount'

					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '规格型号 :'
					}, {
						xtype : 'textfield',
						readOnly:true,
						width : 120,
						ref : '../materSpecName'

					}],
			selModel : selModel,
			delUrl : 'a.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materCode',
						header : '物料代码'
					}, {
						dataIndex : 'materName',
						header : '物料名称'
					}, {
						dataIndex : 'amount',
						header : '用量'
					}, {
						dataIndex : 'workOrderName',
						header : '工序'
					}, {
						dataIndex : 'storageName',
						header : '发料仓库'
					}, {
						dataIndex : 'total',
						header : '总量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.mater.queryOrdermaterByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'orderAmount'
						}, {
							name : 'materCode'
						}, {
							name : 'materName'
						}, {
							name : 'amount'
						}, {
							name : 'workOrderName'
						}, {
							name : 'storageName'
						}, {
							name : 'total'
						}]
			})
		})
	}

}