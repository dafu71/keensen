com.keensen.ump.produce.component.planlockMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentplanlockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 100,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'datefield',
								ref : '../planDate',
								name : 'condition/planDate',
								fieldLabel : '作业日期',
								format : "Y-m-d",
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								// anchor : '95%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								// anchor : '95%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '95%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}]
				});

		this.queryPanel.addButton({
					text : "打印(8寸)",
					scope : this,
					iconCls : 'icon-printer',
					handler : this.onPrint
				});
		this.queryPanel.addButton({
					text : "打印(4寸)",
					scope : this,
					iconCls : 'icon-printer',
					handler : this.onPrint2
				});

		// this.queryPanel.addButton({
		// text : "导出",
		// scope : this,
		// iconCls : 'icon-application_excel',
		// handler : this.exportExcel
		// });

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : mylistid,
			tbar : [{
						xtype : 'splitbutton',
						text : '确认',
						// scale : 'small',
						// rowspan : 1,
						// iconAlign : 'top',
						iconCls : 'icon-application_edit',
						arrowAlign : 'bottom',
						menu : [{
									text : '已裁完',
									scope : this,
									iconCls : 'icon-application_edit',
									handler : this.onConfirm
								}, {
									text : '未裁完在现场',
									scope : this,
									iconCls : 'icon-application_edit',
									handler : this.onConfirm2
								}, {
									text : '未裁完退仓',
									scope : this,
									iconCls : 'icon-application_edit',
									handler : this.onConfirm3
								}]
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'confirmStatus',
						header : '确认状态'
					}, {
						dataIndex : 'orderNo',
						header : '订单号',
						renderer : function(v, m, r, i) {
							var confirmDate = r.get('confirmDate');
							if (!Ext.isEmpty(confirmDate)) {
								return "<span style='color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'size',
						header : '尺寸'
					}, {
						dataIndex : 'jmAmount',
						header : '卷膜数量'
					}, {
						dataIndex : 'orderDate',
						header : '订单交期'
					}, {
						dataIndex : 'orderRemark',
						header : '订单备注'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'meterAmount',
						header : '米数'
					}, {
						dataIndex : 'residue',
						header : '剩余米数'
					}, {
						dataIndex : 'storageName',
						header : '仓库'
					}, {
						dataIndex : 'storagePosition',
						header : '库位'
					}, {
						dataIndex : 'planDate',
						header : '作业日期'
					}, {
						dataIndex : 'mpRemark',
						header : '膜片备注'
					}, {
						dataIndex : 'cmWorker',
						header : '裁膜人员'
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序'
					}, {
						dataIndex : 'prodSpecName',
						header : '卷制元件型号'
					}, {
						dataIndex : 'testAvgGpd',
						header : '按试卷型号<br>换算平均产水量'
					}, {
						dataIndex : 'saltRejection',
						header : '按试卷型号<br>换算脱盐率'
					}, {
						dataIndex : 'testMaterSpec',
						header : '试卷元件型号'
					}, {
						dataIndex : 'testBatchNo',
						header : '试卷膜批号'
					}, {
						dataIndex : 'testGpd',
						header : '试卷元件产水'
					}, {
						dataIndex : 'testSaltRejection2',
						header : '试卷元件脱盐'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryPlanDay.biz.ext',
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
							name : 'relationId'
						}, {
							name : 'orderId'
						}, {
							name : 'planDate'
						}, {
							name : 'jmAmount'
						}, {
							name : 'batchNo'
						}, {
							name : 'meterAmount'
						}, {
							name : 'position'
						}, {
							name : 'mpRemark'
						}, {
							name : 'problem'
						}, {
							name : 'productOrder'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'materSpecId'
						}, {
							name : 'orderAmount'
						}, {
							name : 'xsc'
						}, {
							name : 'orderDate'
						}, {
							name : 'weekRemark'
						}, {
							name : 'planYear'
						}, {
							name : 'planWeek'
						}, {
							name : 'enterDate'
						}, {
							name : 'orderRemark'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'testAvgGpd'
						}, {
							name : 'saltRejection'
						}, {
							name : 'testMaterSpec'
						}, {
							name : 'testBatchNo'
						}, {
							name : 'testGpd'
						}, {
							name : 'testSaltRejection2'
						}, {
							name : 'cmWorker'
						}, {
							name : 'confirmDate'
						}, {
							name : 'storageName'
						}, {
							name : 'storagePosition'
						}, {
							name : 'size'
						}, {
							name : 'residue'
						}, {
							name : 'confirmStatus'
						}]
			})
		})
	}

}