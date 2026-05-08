com.keensen.ump.produce.diaphragm.ship.StockupMgr = function() {

	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'diaphragmshipstockupmgr',
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
					// title : '【请检单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/deliveryOrderNo',
								fieldLabel : '发货订单号%-%'
							}, {
								xtype : 'textfield',
								ref : '../code',
								name : 'condition/code',
								fieldLabel : '备货单号%-%'
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : 'textfield',
								ref : '../clientName',
								name : 'condition/clientName',
								fieldLabel : '发货厂家%-%'
							}, {
								xtype : 'textfield',
								ref : '../batchNo',
								name : 'condition/batchNo',
								fieldLabel : '膜片批次'
							}, {
								xtype : "dateregion",
								anchor : '100%',
								colspan : 1,
								nameArray : ['condition/checkTimeStart',
										'condition/checkTimeEnd'],
								fieldLabel : "请检时间",
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
			// title : '【请检单列表】',
			// id : 'concession-list',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			tbar : [{
						text : '查看及打印',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onReport
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : checkCountId
					}],
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.stockup.deleteStockup.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '备货单号'
					}, {
						dataIndex : 'deliveryOrderNo',
						header : '发货订单号'
					}, {
						dataIndex : 'clientName',
						header : '发货厂家'
					}, {
						dataIndex : 'amount',
						header : '请检数量'
					}, {
						dataIndex : 'specName',
						header : '膜片型号'
					}, {
						dataIndex : 'markSpecName',
						header : '膜片唛头型号'
					}, {
						dataIndex : 'checkTime',
						header : '请检时间'
					}, {
						dataIndex : 'createName',
						header : '请检人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.stockup.queryStockupByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'amountTotal'
						}, {
							name : 'markSpecName'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'code'
						}, {
							name : 'deliveryOrderNo'
						}, {
							name : 'clientName'
						}, {
							name : 'checkTime'
						}, {
							name : 'amount'
						}, {
							name : 'specId'
						}, {
							name : 'specName'
						}]
			})
		})
	}

}