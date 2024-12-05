com.keensen.ump.produce.diaphragm.ship.OrderMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initInputWindow2();
		this.buildExcelUploadWin();
		this.initViewWindow();

		this.initWorkPlanWindow();
		this.initViewWorkPlanWindow();
		this.initModifyOrderNoWindow();

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
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【订单查询】',
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
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "下单日期",
								format : "Y-m-d"
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/demandDateStart',
										'condition/demandDateEnd'],
								fieldLabel : "要求入库日期",
								format : "Y-m-d"
							}, {
								fieldLabel : '不展示已关闭',
								xtype : 'checkbox',
								checked : true,
								name : 'condition/isClosed',
								inputValue : 'Y',
								anchor : '100%'
							}]
				});

		this.queryPanel.addButton({
					text : "模板下载",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "订单导入",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});

		this.queryPanel.addButton({
					text : "修改订单号",
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.onModifyOrderNo
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
		this.listPanel = this.listPanel || new Ext.fn.EditListPanel({
			// title : '【订单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			clicksToEdit : 1,
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
					}/*
						 * , '-', { text : '关联计划单', scope : this, iconCls :
						 * 'icon-application_edit', handler : this.onPlan }
						 */, '->', {
						text : '新增作业计划',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onWorkPlan
					}, '-', {
						text : '查看作业计划',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewPlan
					}, '-', {
						text : '删除作业计划',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelPlan
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.order.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号'
					}, {
						dataIndex : 'customerCode',
						header : '客户',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : true,
									css : 'background:#c7c7c7;',
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec.data['id'];
											_this.saveCustormerCode(id,
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'orderDate',
						sortable : true,
						header : '下单日期'
					}, {
						dataIndex : 'demandDate',
						sortable : true,
						header : '要求入库日期'
					}, {
						dataIndex : 'amount',
						sortable : true,
						header : '数量'
					}, {
						dataIndex : 'needAmount',
						header : '订单需生产数量',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									allowNegative : false,
									css : 'background:#c7c7c7;',
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec.data['id'];
											_this.saveNeedAmount(id, newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'arrangeAmount',
						sortable : true,
						header : '建议排产数量'
					}, {
						dataIndex : 'arrangePercent',
						header : '排产合格率%',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									allowNegative : true,
									minValue : 1,
									maxValue : 100,
									css : 'background:#c7c7c7;',
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec.data['id'];
											_this.saveArrangePercent(id,
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'orderStatus',
						header : '订单状态',
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									allowBlank : true,
									css : 'background:#c7c7c7;',
									triggerAction : "all",
									store : new Ext.data.ArrayStore({
												fields : ['mykey', 'myvalue'],
												data : [['进行', '进行'],
														['关闭', '关闭']]
											}),
									mode : "local",
									editable : false,
									displayField : "myvalue",
									valueField : "mykey",
									forceSelection : true,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec.data['id'];
											_this.saveOrderStatus(id, newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'unit',
						header : '单位'
					}, {
						dataIndex : 'materSpecCode',
						header : '型号'
					}, {
						dataIndex : 'createName',
						header : '订单录入'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}, {
						dataIndex : 'planCount',
						header : '计划条数'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.order.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/isClosed' : 'Y'
				},
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
						}, {
							name : 'customerCode'
						}, {
							name : 'demandDate'
						}, {
							name : 'unit'
						}, {
							name : 'needAmount'
						}, {
							name : 'arrangePercent'
						}, {
							name : 'orderStatus'
						}, {
							name : 'planCount'
						}, {
							name : 'arrangeAmount'
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
							xtype : 'textfield',
							name : 'entity/customerCode',
							allowBlank : true,
							fieldLabel : '客户',
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
							fieldLabel : '下单日期',
							anchor : '80%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/demandDate',
							dataIndex : 'demandDate',
							allowBlank : false,
							fieldLabel : '要求入库日期',
							anchor : '80%',
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
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/unit',
							allowBlank : false,
							fieldLabel : '单位',
							anchor : '95%',
							colspan : 1
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
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 4,
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
							xtype : 'textfield',
							name : 'entity/customerCode',
							dataIndex : 'customerCode',
							allowBlank : true,
							fieldLabel : '客户',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'datefield',
							name : 'entity/orderDate',
							dataIndex : 'orderDate',
							allowBlank : false,
							fieldLabel : '下单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/demandDate',
							dataIndex : 'demandDate',
							allowBlank : false,
							fieldLabel : '要求入库日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							allowBlank : false,
							fieldLabel : '数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/unit',
							dataIndex : 'unit',
							allowBlank : false,
							fieldLabel : '单位',
							anchor : '95%',
							colspan : 1
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
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext0',
							dataIndex : 'ext0',
							fieldLabel : '生产进度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext1',
							dataIndex : 'ext1',
							fieldLabel : '编码',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext2',
							dataIndex : 'ext2',
							fieldLabel : '是否发货',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext3',
							dataIndex : 'ext3',
							fieldLabel : '订单类型',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext4',
							dataIndex : 'ext4',
							fieldLabel : '类型',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext5',
							dataIndex : 'ext5',
							fieldLabel : '客户星级',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext6',
							dataIndex : 'ext5',
							fieldLabel : '产品星级',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext7',
							dataIndex : 'ext7',
							fieldLabel : '订单星级',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext8',
							dataIndex : 'ext8',
							fieldLabel : '货品名称',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext9',
							dataIndex : 'ext9',
							fieldLabel : '干膜/湿膜',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext10',
							dataIndex : 'ext10',
							fieldLabel : '产品规格',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext11',
							dataIndex : 'ext11',
							fieldLabel : '待发货（发库存）',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext12',
							dataIndex : 'ext12',
							fieldLabel : '需生产或入库数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext13',
							dataIndex : 'ext13',
							fieldLabel : '标签',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext14',
							dataIndex : 'ext14',
							fieldLabel : '真空包装袋',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext15',
							dataIndex : 'ext15',
							fieldLabel : '包装箱',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext16',
							dataIndex : 'ext16',
							fieldLabel : '唛头',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext17',
							dataIndex : 'ext17',
							fieldLabel : '打包方式',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/ext18',
							dataIndex : 'ext18',
							fieldLabel : '产品性能',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ext19',
							dataIndex : 'ext19',
							fieldLabel : '其它备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							dataIndex : 'remark',
							height : '100',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 4
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
						}, {
							name : 'planStockDate'
						}, {
							name : 'stockAmount'
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

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.importOrder.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择文件',
							allowBlank : false,
							inputType : 'file'
						}]
			}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin.hide();
						}
					}]
		});
	}

	this.initViewWindow = function() {
		this.viewWindow = this.viewWindow || new Ext.fn.FormWindow({
			title : '查看',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'viewpanel',
				columns : 4,
				loadUrl : 'com.keensen.ump.produce.diaphragm.ship.order.expandEntity.biz.ext',
				fields : [{
							xtype : 'displayfield',
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'customerCode',
							fieldLabel : '客户',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'orderDate',
							// readOnly : true,
							fieldLabel : '下单日期',
							anchor : '95%',
							// format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'demandDate',
							// readOnly : true,
							fieldLabel : '要求入库日期',
							anchor : '95%',
							// format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'amount',
							fieldLabel : '数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'unit',
							fieldLabel : '单位',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../specId',
							// dataIndex : 'unit',
							fieldLabel : '膜片型号',
							anchor : '95%',
							colspan : 1
						}

						/*
						 * { xtype : 'mpspeccombobox', ref :'../specId', //style :
						 * 'border-style:none;', readOnly : true, dataIndex :
						 * 'specId', anchor : '95%', fieldLabel : '膜片型号 ',
						 * colspan : 2 }
						 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext0',
							fieldLabel : '生产进度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext1',
							fieldLabel : '编码',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext2',
							fieldLabel : '是否发货',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext3',
							fieldLabel : '订单类型',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext4',
							fieldLabel : '类型',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext5',
							fieldLabel : '客户星级',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext5',
							fieldLabel : '产品星级',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext7',
							fieldLabel : '订单星级',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext8',
							fieldLabel : '货品名称',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext9',
							fieldLabel : '干膜/湿膜',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext10',
							fieldLabel : '产品规格',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext11',
							fieldLabel : '待发货（发库存）',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext12',
							fieldLabel : '需生产或入库数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext13',
							fieldLabel : '标签',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext14',
							fieldLabel : '真空包装袋',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext15',
							fieldLabel : '包装箱',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext16',
							fieldLabel : '唛头',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext17',
							fieldLabel : '打包方式',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext18',
							fieldLabel : '产品性能',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext19',
							fieldLabel : '其它备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'remark',
							height : '100',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
	}

	// 作业计划
	this.initWorkPlanWindow = function() {

		var selModel9 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.planListPanel = this.planListPanel || new Ext.fn.EditListPanel({
			title : '【作业计划明细】',
			clicksToEdit : 1,
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : false,
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						ref : '../label0',
						value : '当前排产数量:'
					}, {
						xtype : 'textfield',
						id : arrangeAmountId

					}, '->', {
						text : '数量调整',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCalculate
					}],
			delUrl : '1.biz.ext',
			selModel : selModel9,
			columns : [new Ext.grid.RowNumberer(), selModel9, {
						dataIndex : 'workDt',
						header : '作业日期',
						format : "Y-m-d",
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.DateField(
								{
									listeners : {
										'blur' : function(o) {

										}
									},
									format : "Y-m-d",
									editable : true
								})),
						renderer : function(value) {
							if (Ext.isEmpty(value))
								return '';

							if (typeof value == "string") {
								return value;
							} else {
								return value.format("Y-m-d");
							}
						}
					}, {
						dataIndex : 'line',
						header : '线体'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'arrangeAmount',
						header : '排产数量',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									id : arrangeAmounText,
									allowBlank : false,
									scope : this,
									allowNegative : true,
									decimalPrecision : 2,
									minValue : 0,
									listeners : {
										scope : this,
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {

											var arrangeAmount0 = Ext
													.getCmp(arrangeAmountId)
													.getValue();
											var arrangeAmount2 = parseFloat(arrangeAmount0)
													- parseFloat(oldValue)
													+ parseFloat(newValue);
											Ext.getCmp(arrangeAmountId)
													.setValue(arrangeAmount2
															.toFixed(1));

										},
										'focus' : function() {

										}

									}
								}))
					}, {
						dataIndex : 'supName',
						header : '无纺布供应商'
					}, {
						dataIndex : 'performance',
						header : '性能要求',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : true
								}))
					}, {
						dataIndex : 'remark',
						css : 'background:#c7c7c7;',
						header : '备注',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : true
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.order.queryDetails.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'workDt'
						}, {
							name : 'line'
						}, {
							name : 'orderNo'
						}, {
							name : 'arrangeAmount'
						}, {
							name : 'supName'
						}, {
							name : 'remark'
						}, {
							name : 'supId'
						}, {
							name : 'performance'
						}, {
							name : 'relationId'
						}, {
							name : 'itype'
						}]
			})
		})

		this.workPlanPanel = this.workPlanPanel || new Ext.fn.InputPanel({
					height : 120,
					region : 'north',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 6,
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'textfield',
								readOnly : true,
								ref : '../orderNo',
								fieldLabel : '订单号',
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../needAmount',
								fieldLabel : '订单需生产数量',
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../arrangeAmount',
								fieldLabel : '建议排产数量',
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'combobox',
								anchor : '100%',
								hiddenName : 'condition/line',
								colspan : 2,
								allowBlank : false,
								ref : '../line',
								fieldLabel : '线体',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['A', 'A'], ['B', 'B'],
													['C', 'C'], ['D', 'D'],
													['E', 'E'],
													['F', 'F']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "--请选择--"
							}, {
								xtype : 'numberfield',
								name : 'condition/days',
								allowBlank : false,
								ref : '../days',
								fieldLabel : '排产天数',
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'supcombobox',
								hiddenName : 'condition/supId',
								allowBlank : false,
								anchor : '100%',
								fieldLabel : '无纺布供应商',
								colspan : 2
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								name : 'condition/relationId'
							}],
					buttons : [{
								text : "生成计划明细",
								scope : this,
								handler : this.onCreateDetails
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.workPlanPanel.form.reset();
									this.planListPanel.store.removeAll();
									this.workPlanWindow.hide();
								}
							}]

				})

		this.workPlanWindow = this.workPlanWindow || new Ext.Window({
					title : '新增作业计划',
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
					items : [this.workPlanPanel, this.planListPanel],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveDetails
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.workPlanPanel.form.reset();
									this.planListPanel.store.removeAll();
									this.workPlanWindow.hide();
								}
							}]

				});
	}

	this.initViewWorkPlanWindow = function() {

		var viewWorkPlanSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.viewPlanListPanel = this.viewPlanListPanel
				|| new Ext.fn.EditListPanel({
					title : '【作业计划明细】',
					clicksToEdit : 1,
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					autoScroll : false,
					delUrl : '1.biz.ext',
					selModel : viewWorkPlanSelModel,
					columns : [new Ext.grid.RowNumberer(),
							viewWorkPlanSelModel, {
								dataIndex : 'workDt',
								header : '作业日期',
								format : "Y-m-d"
							}, {
								dataIndex : 'line',
								header : '线体'
							}, {
								dataIndex : 'orderNo',
								header : '订单编号'
							}, {
								dataIndex : 'arrangeAmount',
								header : '排产数量'
							}, {
								dataIndex : 'supName',
								header : '无纺布供应商'
							}, {
								dataIndex : 'performance',
								header : '性能要求'
							}, {
								dataIndex : 'remark',
								header : '备注'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.diaphragm.ship.order.queryWorkPlan.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {

					}	,
						fields : [{
									name : 'workDt'
								}, {
									name : 'line'
								}, {
									name : 'orderNo'
								}, {
									name : 'arrangeAmount'
								}, {
									name : 'supName'
								}, {
									name : 'remark'
								}, {
									name : 'supId'
								}, {
									name : 'performance'
								}, {
									name : 'relationId'
								}, {
									name : 'itype'
								}]
					})
				})

		this.viewWorkPlanPanel = this.viewWorkPlanPanel
				|| new Ext.fn.InputPanel({
							height : 80,
							region : 'north',
							// baseCls : "x-panel",
							autoHide : false,
							autoScroll : false,
							border : true,
							columns : 6,
							saveUrl : '1.biz.ext',
							fields : [{
										xtype : 'textfield',
										readOnly : true,
										ref : '../orderNo',
										fieldLabel : '订单号',
										anchor : '85%',
										colspan : 2
									}, {
										xtype : 'textfield',
										readOnly : true,
										ref : '../needAmount',
										fieldLabel : '订单需生产数量',
										anchor : '85%',
										colspan : 2
									}, {
										xtype : 'textfield',
										readOnly : true,
										ref : '../arrangeAmount',
										fieldLabel : '建议排产数量',
										anchor : '85%',
										colspan : 2
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 6
									}, {
										xtype : 'combobox',
										anchor : '85%',
										colspan : 2,
										readOnly : true,
										ref : '../line',
										fieldLabel : '线体',
										triggerAction : "all",
										store : new Ext.data.ArrayStore({
													fields : ['mykey',
															'myvalue'],
													data : [['A', 'A'],
															['B', 'B'],
															['C', 'C'],
															['D', 'D'],
															['E', 'E']]
												}),
										mode : "local",
										editable : false,
										displayField : "myvalue",
										valueField : "mykey",
										forceSelection : true,
										emptyText : ""
									}, {
										xtype : 'displayfield',
										anchor : '85%',
										colspan : 2
									}, {
										xtype : 'supcombobox',
										ref : '../supId',
										readOnly : true,
										anchor : '85%',
										fieldLabel : '无纺布供应商',
										colspan : 2,
										emptyText : ""
									}, {
										xtype : 'hidden',
										ref : '../relationId',
										name : 'condition/relationId'
									}]

						})

		this.viewWorkPlanWindow = this.viewWorkPlanWindow || new Ext.Window({
					title : '作业计划',
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
					items : [this.viewWorkPlanPanel, this.viewPlanListPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.viewWorkPlanPanel.form.reset();
									this.planListPanel.store.removeAll();
									this.viewWorkPlanWindow.hide();
								}
							}]

				});
	}

	this.initModifyOrderNoWindow = function() {
		var _this = this;
		var modifyOrderNoSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.modifyOrderNoListPanel = this.modifyOrderNoListPanel
				|| new Ext.fn.EditListPanel({
					viewConfig : {
						forceFit : true
					},
					clicksToEdit : 1,
					region : 'center',
					hsPage : true,
			tbar : [{
						text : '修改所选批次订单号',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onModifyBatch
					}],
					selModel : modifyOrderNoSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							modifyOrderNoSelModel, {
								dataIndex : 'batchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'orderNo',
								header : '订单号',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : true,
											css : 'background:#c7c7c7;',
											scope : this,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var recordId = _this.orderRec.data['recordId'];
													_this.updateTumoOrderNO(
															recordId, newValue,
															oldValue);
												}
											}
										}))
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.diaphragm.ship.order.queryTumoOrderNO.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {

					}	,
						fields : [{
									name : 'recordId'
								}, {
									name : 'batchNo'
								}, {
									name : 'orderNo'
								}, {
									name : 'orderNoBak'
								}]
					})
				})

		this.queryModifyOrderNoPanel = this.queryModifyOrderNoPanel
				|| new Ext.fn.QueryPanel({
							height : 150,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/orderNo',
										anchor : '85%',
										fieldLabel : '订单号'
									}, {
										xtype : 'textarea',
										height : 100,
										name : 'condition/batchNoStr2',
										emptyText : '多个批次请用逗号分隔，或一行一个批次',
										colspan : 1,
										anchor : '85%',
										fieldLabel : '膜片批次'
									}, {
										xtype : 'hidden',
										name : 'condition/batchNoStr'
									}]
						});
		this.queryModifyOrderNoPanel.addButton({
					text : "关闭",
					scope : this,
					resCode : 10002681,
					handler : function() {
						this.modifyOrderNoWindow.hide();
					}

				});

		this.modifyOrderNoWindow = this.modifyOrderNoWindow || new Ext.Window({
					title : '修改膜片订单号',
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
					items : [this.queryModifyOrderNoPanel,
							this.modifyOrderNoListPanel]

				});
	}
}