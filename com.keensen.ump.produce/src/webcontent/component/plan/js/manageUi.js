com.keensen.ump.produce.component.PlanMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();
		
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentplanmgr',
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
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.order.deletePlanEntity.biz.ext',
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
						width : 200,
						header : '膜片批次'
					}/*
						 * , { dataIndex : 'amount', header : '米数' }, {
						 * dataIndex : 'storageName', header : '仓库' }, {
						 * dataIndex : 'position', header : '仓位' }
						 */, {
						dataIndex : 'productDemand',
						header : '生产要求'
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}, {
						dataIndex : 'state',
						header : '状态'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.order.queryPlanByPage.biz.ext',
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
						}, {
							name : 'finishDt'
						}, {
							name : 'state'
						}, {
							name : 'finishName'
						}, {
							name : 'finishUserId'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var me = this;

		this.listPanel3 = this.listPanel3 || new Ext.fn.ListPanel({
			title : '【批次信息】',
			height : 280,
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
						}

				]
			})
		})

		this.inputPanel2 = this.inputPanel2 || new Ext.fn.InputPanel({
			height : 320,
			pgrid : this.listPanel,
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			saveUrl : 'com.keensen.ump.produce.component.order.savePlan.biz.ext',
			fields : [{
				xtype : 'trigger',
				name : 'entity/orderNo',
				// id:'planordernotrigger',
				allowBlank : true,
				fieldLabel : '订单号',
				anchor : '95%',
				colspan : 2,
				editable : true,
				hideTrigger : false,
				scope : this,
				onTriggerClick : function() {
					var orderNo = me.inputPanel2.form
							.findField("entity/orderNo").getValue();
					me.onOrderNo(orderNo);
				}
			}, {
				xtype : 'numberfield',
				name : 'entity/orderAmount',
				readOnly : true,
				fieldLabel : '订单数量',
				anchor : '95%',
				colspan : 2
			}, {
				xtype : 'displayfield',
				fieldLabel : ' ',
				value : '<p style="color:red;">输入订单号，点击旁边按钮校验订单号</p>',
				labelSeparator : '',// 去掉冒号
				colspan : 2
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {
				xtype : 'textfield',
				name : 'entity/materSpecName',
				readOnly : true,
				anchor : '95%',
				fieldLabel : '规格型号 ',
				colspan : 2
			}, {
				xtype : 'textfield',
				name : 'entity/orderDate',
				readOnly : true,
				anchor : '95%',
				fieldLabel : '订单交期 ',
				colspan : 2
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {
				xtype : 'componentteamcombo',
				hiddenName : 'entity/teamid',
				name : 'entity/teamid',
				allowBlank : false,
				colspan : 2,
				anchor : '95%',
				fieldLabel : '生产车间'
			}, {
				xtype : 'datefield',
				name : 'entity/productDt',
				dataIndex : 'productDt',
				allowBlank : false,
				fieldLabel : '作业日期',
				anchor : '95%',
				format : "Y-m-d",
				colspan : 2
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {
				xtype : 'trigger',
				name : 'entity/batchNo',
				// id:'planordernotrigger',
				allowBlank : true,
				fieldLabel : '膜片批次',
				anchor : '95%',
				colspan : 4,
				editable : true,
				hideTrigger : false,
				scope : this,
				onTriggerClick : function() {
					var batchNo = me.inputPanel2.form
							.findField("entity/batchNo").getValue();
					me.onBatchNo(batchNo);
				}
			}, {
				xtype : 'displayfield',
				fieldLabel : ' ',
				value : '<p style="color:red;">输入批次号， 多个批号以逗号分隔,点击旁边按钮加载批次信息</p>',
				labelSeparator : '',// 去掉冒号
				colspan : 4
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {
				xtype : 'textarea',
				height : '30',
				name : 'entity/productDemand',
				allowBlank : true,
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
				minValue : 1,
				allowBlank : false,
				fieldLabel : '生产顺序',
				anchor : '95%',
				colspan : 4
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {
				xtype : 'textarea',
				height : '70',
				name : 'entity/remark',
				allowBlank : true,
				fieldLabel : '订单备注',
				anchor : '95%',
				colspan : 4
			}, {
				xtype : 'hidden',
				name : 'entity/orderId'
			}, {
				xtype : 'hidden',
				name : 'entity/batchNoStr'
			}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSavePlan
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.inputPanel2.form.reset();
							this.inputWindow.hide();
						}
					}]

		})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '新增计划单',
					height : 600,
					width : 800,
					// itemCls:'required',
					// style:'margin-top:10px',
					resizable : true,
					minimizable : false,
					maximizable : true,
					layout : 'form',
					items : [this.inputPanel2, this.listPanel3]
				});
	}

	this.initEditWindow = function() {
		var me = this;

		this.listPanel4 = this.listPanel4 || new Ext.fn.ListPanel({
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
						}

				]
			})
		})

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
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
						allowBlank : false,
						colspan : 2,
						anchor : '95%',
						fieldLabel : '生产车间'
					}, {
						xtype : 'datefield',
						name : 'entity/productDt',
						dataIndex : 'productDt',
						allowBlank : false,
						fieldLabel : '作业日期',
						anchor : '95%',
						format : "Y-m-d",
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'trigger',
						name : 'entity/batchNo',
						dataIndex : 'batchNo',
						// id:'planordernotrigger',
						allowBlank : true,
						fieldLabel : '膜片批次',
						anchor : '95%',
						colspan : 4,
						editable : true,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							var batchNo = me.editPanel.form
									.findField("entity/batchNo").getValue();
							me.onBatchNo2(batchNo);
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">输入批次号， 多个批号以逗号分隔,点击旁边按钮加载批次信息</p>',
						labelSeparator : '',// 去掉冒号
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
						allowBlank : true,
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
						allowBlank : false,
						fieldLabel : '生产顺序',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textarea',
						height : '70',
						name : 'entity/remark',
						dataIndex : 'remark',
						allowBlank : true,
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
					}, {
						xtype : 'hidden',
						name : 'entity/edited'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSavePlan2
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel.form.reset();
							this.editWindow.hide();
						}
					}]
		});

		this.editWindow = this.editWindow || new Ext.Window({
					title : '修改计划单',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					layout : 'form',
					items : [this.editPanel, this.listPanel4]
				});
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
						colspan : 4
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