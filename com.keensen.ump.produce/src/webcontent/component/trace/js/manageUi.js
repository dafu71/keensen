com.keensen.ump.produce.component.TraceMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componenttracemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【计划单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/planNo2',
								anchor : '75%',
								fieldLabel : '计划单号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo2',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo2',
								anchor : '75%',
								fieldLabel : '膜片批次 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/productDtStart',
										'condition/productDtEnd'],
								fieldLabel : "作业日期",
								format : "Y-m-d"
							}, {
								xtype : 'componentteamcombo',
								hiddenName : 'condition/teamid',
								name : 'condition/teamid',
								colspan : 1,
								anchor : '75%',
								fieldLabel : '生产车间'
							}, {
								xtype : 'hidden',
								name : 'condition/trace',
								value:'1'
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
		this.listPanel = new Ext.fn.ListPanel({
			title : '【计划单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '完成计划',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onSavePlan
					}, '-', {
						text : '查看计划',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl :'com.keensen.ump.produce.component.order.deletePlanEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'team',
						header : '生产车间'
					}, {
						dataIndex : 'productDt',
						header : '作业日期'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'productDemand',
						header : '生产要求'
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.order.queryPlanByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/trace':1

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
							name : 'planNo'
						}, {
							name : 'teamid'
						}, {
							name : 'team'
						}, {
							name : 'productDt'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'storageId'
						}, {
							name : 'storageName'
						}, {
							name : 'position'
						}, {
							name : 'productDemand'
						}, {
							name : 'productOrder'
						}, {
							name : 'remark'
						}, {
							name : 'orderId'
						}, {
							name : 'orderNo'
						}]
			})
		})
	}

	this.initViewWindow = function() {
		var me = this;

		this.listPanel5 = this.listPanel5 || new Ext.fn.ListPanel({
			title : '【批次信息】',
			height : 240,
			// region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : true,
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'amount',
						header : '米数'
					}, {
						dataIndex : 'storageName',
						header : '仓库'
					}, {
						dataIndex : 'position',
						header : '仓位'
					}, {
						dataIndex : 'reserve1',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.order.queryPlanStock.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'storageId'
						}, {
							name : 'storageName'
						}, {
							name : 'position'
						}, {
							name : 'reserve1'
						}

				]
			})
		})

		this.viewPanel = this.viewPanel || new Ext.fn.EditPanel({
			baseCls : "x-plain",
			height : 360,
			pgrid : this.listPanel,
			columns : 4,
			loadUrl : 'com.keensen.ump.produce.component.order.expandPlanEntity.biz.ext',
			saveUrl : 'com.keensen.ump.produce.component.order.savePlan.biz.ext',
			fields : [{
						xtype : 'textfield',
						name : 'entity/orderNo',
						dataIndex : 'orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'numberfield',
						name : 'entity/orderAmount',
						dataIndex : 'orderAmount',
						readOnly : true,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'entity/materSpecName',
						dataIndex : 'materSpecName',
						readOnly : true,
						anchor : '95%',
						fieldLabel : '规格型号 ',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/orderDate',
						dataIndex : 'orderDate',
						readOnly : true,
						anchor : '95%',
						fieldLabel : '订单交期 ',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						fieldLabel : '计划单号',
						readOnly : true,
						dataIndex : 'planNo',
						anchor : '47%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'componentteamcombo',
						dataIndex : 'teamid',
						hiddenName : 'entity/teamid',
						name : 'entity/teamid',
						readOnly : true,
						colspan : 2,
						anchor : '95%',
						fieldLabel : '生产车间'
					}, {
						xtype : 'datefield',
						name : 'entity/productDt',
						dataIndex : 'productDt',
						readOnly : true,
						fieldLabel : '作业日期',
						anchor : '95%',
						format : "Y-m-d",
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
						dataIndex : 'batchNo',
						// id:'planordernotrigger',
						readOnly : true,
						fieldLabel : '膜片批次',
						anchor : '95%',
						colspan : 4
						
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textarea',
						height : '30',
						name : 'entity/productDemand',
						dataIndex : 'productDemand',
						readOnly : true,
						fieldLabel : '生产要求',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'numberfield',
						name : 'entity/productOrder',
						dataIndex : 'productOrder',
						readOnly : true,
						fieldLabel : '生产顺序',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'numberfield',
						dataIndex : 'amount',
						readOnly : true,
						fieldLabel : '计划数量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textarea',
						height : '70',
						name : 'entity/remark',
						dataIndex : 'remark',
						readOnly : true,
						fieldLabel : '订单备注',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'hidden',
						dataIndex : 'orderId',
						name : 'entity/orderId'
					}, {
						xtype : 'hidden',
						name : 'entity/id',
						dataIndex : 'id'
					}, {
						xtype : 'hidden',
						name : 'entity/batchNoStr'
					}],
			buttons : [ {
						text : "关闭",
						scope : this,
						handler : function() {
							this.viewPanel.form.reset();
							this.viewWindow.hide();
						}
					}]
		});

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '查看计划单',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					layout : 'form',
					items : [this.viewPanel, this.listPanel5]
				});
	}

}