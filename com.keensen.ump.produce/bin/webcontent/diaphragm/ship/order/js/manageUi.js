com.keensen.ump.produce.diaphragm.ship.OrderMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initInputWindow2();
		this.buildExcelUploadWin();
		this.initViewWindow();

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
					height : 150,
					columns : 3,
					border : true,
					// collapsible : true,
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
								anchor : '100%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "下单日期",
								format : "Y-m-d"
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/demandDateStart',
										'condition/demandDateEnd'],
								fieldLabel : "要求完成日期",
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
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : '关联计划单',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlan
					}, '-', {
						text : '模板下载',
						scope : this,
						iconCls : 'icon-application_excel',
						// disabled : true,
						handler : this.onDown
					}, '-', {
						text : '订单导入',
						scope : this,
						iconCls : 'icon-application_excel',
						// disabled : true,
						handler : this.importExcel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.order.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'customerCode',
						header : '客户'
					}, {
						dataIndex : 'orderDate',
						header : '下单日期'
					}, {
						dataIndex : 'demandDate',
						header : '要求完成日期'
					}, {
						dataIndex : 'amount',
						header : '数量'
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
						}, {
							name : 'customerCode'
						}, {
							name : 'demandDate'
						}, {
							name : 'unit'
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
							fieldLabel : '要求完成日期',
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
							fieldLabel : '要求完成日期',
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
							fieldLabel : '要求完成日期',
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
}