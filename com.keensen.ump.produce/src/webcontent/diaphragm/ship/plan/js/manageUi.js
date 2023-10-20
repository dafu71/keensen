com.keensen.ump.produce.diaphragm.ship.PlanMgr = function() {
	
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shipplanmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【计划单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/planNo',
								anchor : '75%',
								fieldLabel : '计划单号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							},{
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/planDateStart',
										'condition/planDateEnd'],
								fieldLabel : "计划发货日期",
								format : "Y-m-d"
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.plan.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'planDate',
						header : '计划发货日期'
					}, {
						dataIndex : 'amount',
						header : '计划发货数量'
					}, {
						dataIndex : 'planStockDate',
						header : '计划入库日期'
					}, {
						dataIndex : 'stockAmount',
						header : '计划入库数量'
					}, {
						dataIndex : 'materSpecCode',
						header : '型号'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.order.queryPlanByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'orderNo'
						}, {
							name : 'amount'
						}, {
							name : 'orderAmount'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'specId'
						}, {
							name : 'id'
						}, {
							name : 'remark'
						}, {
							name : 'planNo'
						}, {
							name : 'planDate'
						}, {
							name : 'planStockDate'
						}, {
							name : 'stockAmount'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var me = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增计划单',
			height : 420,
			width : 480,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.order.savePlan.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/planNo',
							allowBlank : false,
							fieldLabel : '计划单号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/planDate',
							dataIndex : 'planDate',
							allowBlank : false,
							fieldLabel : '计划发货日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							allowBlank : false,
							fieldLabel : '计划发货数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/planStockDate',
							dataIndex : 'planStockDate',
							allowBlank : false,
							fieldLabel : '计划入库日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/stockAmount',
							allowBlank : false,
							fieldLabel : '计划入库数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							name : 'entity/orderNo',
							//id:'planordernotrigger',
							allowBlank : true,
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 2,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function(){
								var orderNo = me.inputWindow.form.findField("entity/orderNo").getValue();
								var mpspeccombo = me.inputWindow.form.findField("entity/specId");
								me.onOrderNo(orderNo,mpspeccombo);
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">输入订单号，点击旁边按钮校验订单号</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/specId',
							anchor : '95%',
							allowBlank : false,
							fieldLabel : '膜片型号 ',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							height : '100',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		var me = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改计划单',
			height : 420,
			width : 480,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.ship.plan.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.order.savePlan.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/planNo',
							dataIndex : 'planNo',
							allowBlank : false,
							fieldLabel : '计划单号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/planDate',
							dataIndex : 'planDate',
							allowBlank : false,
							fieldLabel : '计划发货日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							allowBlank : false,
							fieldLabel : '计划发货数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/planStockDate',
							dataIndex : 'planStockDate',
							allowBlank : false,
							fieldLabel : '计划入库日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/stockAmount',
							dataIndex : 'stockAmount',
							allowBlank : false,
							fieldLabel : '计划入库数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							name : 'entity/orderNo',
							//id:'planordernotrigger',
							allowBlank : true,
							fieldLabel : '订单号',
							dataIndex : 'orderNo',
							anchor : '95%',
							colspan : 2,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function(){
								var orderNo = me.editWindow.form.findField("entity/orderNo").getValue();
								var mpspeccombo = me.editWindow.form.findField("entity/specId");
								me.onOrderNo2(orderNo,mpspeccombo);
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">输入订单号，点击旁边按钮校验订单号</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/specId',
							dataIndex : 'specId',
							anchor : '95%',
							allowBlank : false,
							fieldLabel : '膜片型号 ',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							dataIndex : 'remark',
							height : '100',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

}