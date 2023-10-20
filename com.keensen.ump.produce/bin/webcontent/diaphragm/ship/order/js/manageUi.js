com.keensen.ump.produce.diaphragm.ship.OrderMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initInputWindow2();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shipordermgr',
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
					title : '【订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/planNo',
								anchor : '75%',
								fieldLabel : '计划单号'
							},{
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "要求完成日期",
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
			title : '【订单列表】',
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
						text : '关联计划单',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlan
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.order.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'orderDate',
						header : '要求完成日期'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'materSpecCode',
						header : '型号'
					}, {
						dataIndex : 'createName',
						header : '订单制定人'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.order.queryByPage.biz.ext',
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
							name : 'materSpecCode'
						}, {
							name : 'specId'
						}, {
							name : 'id'
						}, {
							name : 'remark'
						}, {
							name : 'orderDate'
						}, {
							name : 'createName'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增订单',
			height : 360,
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
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.order.saveEntity.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/orderDate',
							dataIndex : 'orderDate',
							allowBlank : false,
							fieldLabel : '要求完成日期',
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
							fieldLabel : '数量',
							anchor : '95%',
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
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改订单',
			height : 360,
			width : 480,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.ship.order.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.order.saveEntity.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/orderDate',
							dataIndex : 'orderDate',
							allowBlank : false,
							fieldLabel : '要求完成日期',
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
							fieldLabel : '数量',
							anchor : '95%',
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

	this.initInputWindow2 = function() {

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【计划单列表】',
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : false,
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelPlan
					}],
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.plan.deleteEntity.biz.ext',
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'planDate',
						header : '计划发货日期'
					}, {
						dataIndex : 'amount',
						header : '计划数量'
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
							name : 'planNo'
						}, {
							name : 'amount'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'specId'
						}, {
							name : 'id'
						}, {
							name : 'remark'
						}, {
							name : 'planDate'
						}, {
							name : 'createName'
						}]
			})
		})

		this.inputPanel2 = this.inputPanel2 || new Ext.fn.InputPanel({
			height : 180,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 3,
			saveUrl : 'com.keensen.ump.produce.diaphragm.ship.order.savePlan.biz.ext',
			fields : [{
						xtype : 'textfield',
						name : 'entity/planNo',
						allowBlank : false,
						fieldLabel : '计划单号',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						name : 'entity/amount',
						allowBlank : false,
						fieldLabel : '计划发货数量',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'datefield',
						name : 'entity/planDate',
						dataIndex : 'planDate',
						allowBlank : false,
						fieldLabel : '计划发货日期',
						anchor : '95%',
						format : "Y-m-d",
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 3
					}, {
						xtype : 'displayfield',
						colspan : 1
					}, {
						xtype : 'numberfield',
						name : 'entity/stockAmount',
						allowBlank : false,
						fieldLabel : '计划入库数量',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'datefield',
						name : 'entity/planStockDate',
						dataIndex : 'planStockDate',
						allowBlank : false,
						fieldLabel : '计划入库日期',
						anchor : '95%',
						format : "Y-m-d",
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 3
					}, {
						xtype : 'textfield',
						name : 'entity/orderNo',
						readOnly : true,
						allowBlank : false,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						name : 'entity/orderamount',
						allowBlank : false,
						readOnly : true,
						fieldLabel : '需求数量',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'entity/specId',
						readOnly : true,
						anchor : '95%',
						allowBlank : false,
						fieldLabel : '膜片型号 ',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 3
					}, {
						xtype : 'textarea',
						height : '70',
						name : 'entity/remark',
						allowBlank : true,
						fieldLabel : '备注',
						anchor : '95%',
						colspan : 3
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
							this.inputWindow2.hide();
						}
					}]

		})

		this.inputWindow2 = this.inputWindow2 || new Ext.Window({
					title : '新增计划单',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 820,
					height : 600,
					layout : 'border',
					items : [this.inputPanel2, this.listPanel2]

				});
	}
}