com.keensen.ump.produce.diaphragm.storage.OutofstockMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initInputWindow2();
		this.inputWindow2.buttons[0].hide();
		this.inputWindow2.buttons[1].hide();
		this.inputWindow2.addButton({
					text : "保存",
					scope : this,
					// iconCls : 'icon-application_excel',
					handler : this.onSave2
				});
		this.inputWindow2.addButton({
					text : "关闭",
					scope : this,
					// iconCls : 'icon-application_excel',
					handler : function() {
						this.inputWindow2.form.reset();
						this.inputWindow2.hide()
					}
				});
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'outofstockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片出库查询】',
					fields : [{
								xtype : 'storagecombobox',
								hiddenName : 'condition/storageId',
								anchor : '80%',
								fieldLabel : '仓库'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '80%',
								fieldLabel : '批号'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/type',
								hiddenName : 'condition/type',
								fieldLabel : '出库类型',
								anchor : '80%',
								dictData : OUTOFSTOCK_TYPE
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "出库日期",
								format : "Y-m-d"
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
			// title : '【膜片出库列表】',
			id : 'outofstock-list',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '出库',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}/*
						 * , '-', { text : '发货出库', scope : this, iconCls :
						 * 'icon-application_add', handler : this.onAdd2 }
						 */],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'storageName',
						header : '仓库名称'
					}, {
						dataIndex : 'batchNo',
						header : '批号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'type',
						header : '出库类型',
						dictData : OUTOFSTOCK_TYPE
					}, {
						dataIndex : 'createTime',
						header : '出库日期'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.outofstock.queryOutofstock.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'storageName'
						}, {
							name : 'batchNo'
						}, {
							name : 'type'
						}, {
							name : 'amount'
						}, {
							name : 'remark'
						}, {
							name : 'id'
						}, {
							name : 'createTime'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '出库',
			height : 500,
			width : 480,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				autoHide : false,
				successFn : function(i, r) {
					if (r.ret != '1') {
						Ext.Msg.show({
									width : 350,
									title : "操作提示",
									msg : r.ret,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										currentWindow = 'inputWindow';
										Ext.getCmp('outofstock-list').store
												.reload();
									}
								})
					} else {
						currentWindow = 'inputWindow';
						Ext.getCmp('outofstock-list').store.reload();

					}
				},
				columns : 2,
				// saveUrl :
				// 'com.keensen.ump.produce.diaphragm.storage.outofstock.outofstock.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.outofstock.outofstock4part.biz.ext',
				fields : [{
							xtype : 'dictcombobox',
							hiddenName : 'outofstock/type',
							allowBlank : false,
							fieldLabel : '出库类型',
							colspan : 2,
							dictData : OUTOFSTOCK_TYPE
						}, {
							xtype : 'displayfield',
							colspan : 2,
							height : '5'
						}, {
							xtype : 'textfield',
							name : 'outofstock/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../batchNo',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.onScan();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							colspan : 2,
							height : '5'
						}, {
							xtype : 'numberfield',
							name : 'outofstock/stockAmount',
							// allowBlank : false,
							fieldLabel : '库存数量',
							readOnly : true,
							colspan : 2
						}, {
							xtype : 'displayfield',
							colspan : 2,
							height : '5'
						}, {
							xtype : 'storagecombobox',
							hiddenName : 'outofstock/storageId',
							// allowBlank : false,
							name : 'outofstock/storageId',
							emptyText : '',
							colspan : 2,
							readOnly : true,
							fieldLabel : '仓库'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'outofstock/amount',
							allowBlank : false,
							fieldLabel : '出库数量',
							readOnly : false,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'outofstock/model',
							// /allowBlank : true,
							readOnly : true,
							fieldLabel : '膜片型号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							readOnly : true,
							name : 'outofstock/class',
							hiddenName : 'outofstock/class',
							fieldLabel : '膜片等级',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['A等品', 'A等品'], ['B等品', 'B等品'],
												['C等品', 'C等品']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "",
							colspan : 2
						}, {
							xtype : 'displayfield',
							colspan : 2,
							height : '5'
						}, {
							xtype : 'textarea',
							height : '50',
							name : 'outofstock/remark',
							allowBlank : true,
							fieldLabel : '备注',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'outofstock/position'
						}]
			}]
		});
	}

	this.initInputWindow2 = function() {
		this.inputWindow2 = this.inputWindow2 || new Ext.fn.FormWindow({
			title : '发货出库',
			height : 320,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				autoHide : false,
				successFn : function(i, r) {
					if (r.ret != '1') {
						Ext.Msg.show({
									width : 350,
									title : "操作提示",
									msg : r.ret,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										currentWindow = 'inputWindow2';
										Ext.getCmp('outofstock-list').store
												.reload();
									}
								})
					} else {
						currentWindow = 'inputWindow2';
						Ext.getCmp('outofstock-list').store.reload();
					}
				},
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.outofstock.outofstock2.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'outofstock/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../batchNo',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'storagecombobox',
							hiddenName : 'outofstock/storageId',
							allowBlank : false,
							name : 'outofstock/storageId',
							fieldLabel : '仓库'
						}, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'outofstock/customerCode',
							fieldLabel : '客户'
						}/*
							 * , { xtype : 'customerCombo', hiddenName :
							 * 'outofstock/customerName', allowBlank : false,
							 * name : 'outofstock/customerName', fieldLabel :
							 * '客户' }
							 */, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'outofstock/deliveryNo',
							fieldLabel : '发货订单号'
						}, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'outofstock/deliveryPlanNo',
							fieldLabel : '发货计划单号'
						}, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'numberfield',
							name : 'outofstock/amount',
							allowBlank : false,
							fieldLabel : '数量',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'textarea',
							height : '50',
							name : 'outofstock/remark',
							allowBlank : true,
							fieldLabel : '备注',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'outofstock/type',
							value : '发货出库'
						}/*
							 * , { xtype : 'hidden', name :
							 * 'outofstock/customerCode' }
							 */]
			}]
		});
	}
}