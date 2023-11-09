com.keensen.ump.produce.component.PlanmaterMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "planmatermgr",
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
					title : '【计划物料需求查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							},{
								xtype : 'textfield',
								name : 'condition/planNo',
								anchor : '75%',
								fieldLabel : '计划号'
							},{
								xtype : 'textfield',
								name : 'condition/storageName',
								anchor : '75%',
								fieldLabel : '发料仓库'
							}, {
								xtype : "dateregion",
								colspan : 1,
								//anchor : '75%',
								nameArray : ['condition/productDtStart',
										'condition/productDtEnd'],
								fieldLabel : "作业日期",
								format : "Y-m-d"
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
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
			title : '【计划物料需求列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			selModel : selModel,
			delUrl : 'a.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'planNo',
						header : '计划号'
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'productDt',
						header : '作业日期'
					}, {
						dataIndex : 'planAmount',
						header : '计划数量'
					}, {
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
				url : 'com.keensen.ump.produce.component.mater.queryplanmaterByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'orderNo'
						},{
							name : 'planNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'planAmount'
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
						}, {
							name : 'productDt'
						}]
			})
		})
	}

}