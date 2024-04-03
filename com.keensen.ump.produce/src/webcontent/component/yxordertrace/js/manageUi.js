com.keensen.ump.produce.component.yxordertraceMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentyxordertracemgr',
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
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								anchor : '75%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
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
			// title : '【营销订单列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : mylistid,

			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'bm',
						header : '编码'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'cdmAmount',
						header : '裁叠膜<br>生产数量（支）'
					}, {
						dataIndex : 'cdmFinish',
						header : '完成比例'
					}, {
						dataIndex : 'jmAmount',
						header : '卷膜<br>生产数量（支）'
					}, {
						dataIndex : 'jmFinish',
						header : '完成比例'
					}, {
						dataIndex : 'qjAmount',
						header : '切边气检<br>生产数量（支）'
					}, {
						dataIndex : 'qjFinish',
						header : '完成比例'
					}, {
						dataIndex : 'rsAmount',
						header : '绕丝<br>生产数量（支）'
					}, {
						dataIndex : 'rsFinish',
						header : '完成比例'
					}, {
						dataIndex : 'orderDate',
						header : '订单日期'
					}, {
						dataIndex : 'hpmc',
						header : '货品名称'
					}, {
						dataIndex : 'dw',
						header : '单位'
					}, {
						dataIndex : 'dryWet',
						header : '干膜/湿'
					}, {
						dataIndex : 'dfh',
						header : '待发货（发库存）'
					}, {
						dataIndex : 'xsc',
						header : '需生产或入库数量'
					}, {
						dataIndex : 'performance',
						header : '产品性能'
					}, {
						dataIndex : 'remark',
						header : '其它备注'
					}, {
						dataIndex : 'demandStockDate',
						header : '生产交期'
					}, {
						dataIndex : 'jhwcsj',
						header : '计划完成时间'
					}, {
						dataIndex : 'scwcrq',
						header : '生产完成日期'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryYxOrderTraceByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
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
							name : 'status'
						}, {
							name : 'scfs'
						}, {
							name : 'bm'
						}, {
							name : 'sffh'
						}, {
							name : 'orderType'
						}, {
							name : 'type'
						}, {
							name : 'khxj'
						}, {
							name : 'cpxj'
						}, {
							name : 'ddxj'
						}, {
							name : 'orderNo'
						}, {
							name : 'orderDate'
						}, {
							name : 'hpmc'
						}, {
							name : 'dw'
						}, {
							name : 'materSpecName'
						}, {
							name : 'cpgg'
						}, {
							name : 'dryWet'
						}, {
							name : 'orderAmount'
						}, {
							name : 'dfh'
						}, {
							name : 'xsc'
						}, {
							name : 'sbkcgm'
						}, {
							name : 'sbkcsm'
						}, {
							name : 'bq'
						}, {
							name : 'bag'
						}, {
							name : 'box'
						}, {
							name : 'mark'
						}, {
							name : 'pack'
						}, {
							name : 'performance'
						}, {
							name : 'remark'
						}, {
							name : 'demandStockDate'
						}, {
							name : 'rksl'
						}, {
							name : 'jhwcsj'
						}, {
							name : 'scwcrq'
						}, {
							name : 'cdmAmount'
						}, {
							name : 'jmAmount'
						}, {
							name : 'qjAmount'
						}, {
							name : 'rsAmount'
						}, {
							name : 'cdmFinish'
						}, {
							name : 'jmFinish'
						}, {
							name : 'qjFinish'
						}, {
							name : 'rsFinish'
						}]
			})
		})
	}

}