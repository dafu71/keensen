com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr = function() {

	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();

		this.buildExcelUploadWin();
		this.initViewWindow();

		this.initPlanConfirmWindow();
		this.initStorageConfirmWindow();
		
		this.initUpdateAmountWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shipyxorderbasemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		// 制定中，物控计划员确认，正式发布，修订中
		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['制定中', '制定中'], ['计划员确认', '计划员确认'],
							['库存确认', '库存确认'], ['正式发布', '正式发布'],
							['不能接单', '不能接单']]
				});

		this.stateStore2 = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['库存确认', '库存确认'], ['正式发布', '正式发布'],
							['不能接单', '不能接单']]
				});

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '100%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								hiddenName : 'condition/specName',
								anchor : '100%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/demandDateStart',
										'condition/demandDateEnd'],
								fieldLabel : "要求入库日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '订单状态',
								ref : '../orderStatus',
								hiddenName : 'condition/orderStatus',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.stateStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.orderStatus.reset()
									}
								}
							}, {
								fieldLabel : '不展示数量为零',
								xtype : 'checkbox',
								checked : true,
								name : 'condition/isNotZero',
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

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = this.listPanel || new Ext.fn.ListPanel({
			// title : '【订单列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : listid,
			clicksToEdit : 1,
			tbar : [{
						text : '生产计划录入',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddOrder
					}, '-', {
						text : '计划员确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlanConfirm
					}, '-', {
						text : '库存确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onStorageConfirm
					}, '-', {
						text : '修改生产/入库数量',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onUpdateAmount
					}, '->', {
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
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.deleteOrderBase.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderStatus',
						header : '订单状态',
						width : 120,
						renderer : function(v, m, r, i) {
							if (v == '不能接单') {
								return "<span style='color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						},
						sortable : true
					}, {
						dataIndex : 'ext1',
						width : 120,
						header : '编码'
					}, {
						dataIndex : 'ext3',
						width : 120,
						header : '订单类型'
					}, {
						dataIndex : 'orderNo',
						width : 200,
						header : '订单编号'
					}, {
						dataIndex : 'orderDate',
						width : 120,
						header : '订单日期'
					}, {
						dataIndex : 'demandDate',
						width : 120,
						header : '要求入库日期'
					}, {
						dataIndex : 'ext8',
						width : 120,
						header : '货品名称'
					}, {
						dataIndex : 'unit',
						width : 120,
						header : '单位'
					}, {
						dataIndex : 'specName',
						width : 120,
						header : '规格型号'
					}, {
						dataIndex : 'ext10',
						width : 120,
						header : '产品规格'
					}, {
						dataIndex : 'amount',
						width : 120,
						header : '订单数量'
					}, {
						dataIndex : 'ext11',
						width : 120,
						header : '待发货（发库存）'
					}, {
						dataIndex : 'ext12',
						width : 120,
						header : '需生产或入库数量'
					}, {
						dataIndex : 'ext13',
						width : 120,
						header : '标签'
					}, {
						dataIndex : 'ext14',
						width : 120,
						header : '真空包装袋'
					}, {
						dataIndex : 'ext15',
						width : 120,
						header : '包装箱'
					}, {
						dataIndex : 'ext16',
						width : 120,
						header : '唛头'
					}, {
						dataIndex : 'ext17',
						width : 120,
						header : '打包方式'
					}, {
						dataIndex : 'ext18',
						width : 200,
						header : '产品性能'
					}, {
						dataIndex : 'ext19',
						width : 200,
						header : '其它备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.orderbase.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'customerCode'
						}, {
							name : 'ext1'
						}, {
							name : 'ext3'
						}, {
							name : 'orderNo'
						}, {
							name : 'orderDate'
						}, {
							name : 'ext8'
						}, {
							name : 'unit'
						}, {
							name : 'specName'
						}, {
							name : 'ext10'
						}, {
							name : 'amount'
						}, {
							name : 'ext11'
						}, {
							name : 'ext12'
						}, {
							name : 'ext13'
						}, {
							name : 'ext14'
						}, {
							name : 'ext15'
						}, {
							name : 'ext16'
						}, {
							name : 'ext17'
						}, {
							name : 'ext18'
						}, {
							name : 'ext19'
						}, {
							name : 'demandDate'
						}, {
							name : 'orderStatus'
						}, {
							name : 'id'
						}]
			})
		})
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
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.importOrderBase.flow',
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

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '生产计划录入',
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
				loadUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.expandOrderBase.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.saveOrderBase.biz.ext',
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
							xtype : 'textfield',
							name : 'entity/specName',
							dataIndex : 'specName',
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
							name : 'entity/ext1',
							dataIndex : 'ext1',
							fieldLabel : '编码',
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
							name : 'entity/ext8',
							dataIndex : 'ext8',
							fieldLabel : '货品名称',
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
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/ext19',
							height : '50',
							dataIndex : 'ext19',
							fieldLabel : '其它备注',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							dataIndex : 'remark',
							height : '50',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '检查无误可发<br>制造中心确认',
							// ref : '../../ifsubmit',
							// hiddenName : 'entity/ifsubmit',
							// dataIndex : 'goodsWithReport',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : _this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								},
								"select" : function(combo, record, index) {
									var ifsubmit = combo.getValue();
									if (ifsubmit == '是') {
										_this.editWindow.orderStatus
												.setValue('计划员确认');
									} else {
										_this.editWindow.orderStatus
												.setValue('制定中');
									}

								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							ref : '../../orderStatus',
							name : 'entity/orderStatus'
						}]
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
				loadUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.expandOrderBase.biz.ext',
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
							fieldLabel : '下单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'demandDate',
							fieldLabel : '要求入库日期',
							anchor : '95%',
							format : "Y-m-d",
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
							dataIndex : 'specName',
							anchor : '95%',
							fieldLabel : '膜片型号 ',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'ext1',
							fieldLabel : '编码',
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
							dataIndex : 'ext8',
							fieldLabel : '货品名称',
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
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '50',
							dataIndex : 'ext19',
							fieldLabel : '其它备注',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'remark',
							height : '30',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'planAdvise',
							height : '30',
							fieldLabel : '计划员确认',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							dataIndex : 'storageAdvise',
							height : '30',
							fieldLabel : '库存确认',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
		this.viewWindow.buttons[0].hide();
	}

	this.initPlanConfirmWindow = function() {
		var _this = this;
		this.planConfirmWindow = this.planConfirmWindow
				|| new Ext.fn.FormWindow({
					title : '计划员确认',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					defaults : {
						autoScroll : true
					},
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						columns : 4,
						saveUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.planConfirm.biz.ext',
						loadUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.expandOrderBase.biz.ext',
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
									fieldLabel : '下单日期',
									anchor : '95%',
									format : "Y-m-d",
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'demandDate',
									fieldLabel : '要求入库日期',
									anchor : '95%',
									format : "Y-m-d",
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
									dataIndex : 'specName',
									anchor : '95%',
									fieldLabel : '膜片型号 ',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									dataIndex : 'ext1',
									fieldLabel : '编码',
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
									dataIndex : 'ext8',
									fieldLabel : '货品名称',
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
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '30',
									dataIndex : 'ext19',
									fieldLabel : '其它备注',
									anchor : '95%',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									dataIndex : 'remark',
									height : '30',
									fieldLabel : '备注',
									anchor : '95%',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									dataIndex : 'storageAdvise',
									height : '30',
									fieldLabel : '库存确认',
									anchor : '95%',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'hidden',
									name : 'entity/id',
									dataIndex : 'id'
								}, {
									xtype : 'mpspeccombobox',
									ref : '../../specId',
									hiddenName : 'entity/specId',
									fieldLabel : '膜片生产型号 ',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'combobox',
									forceSelection : true,
									allowBlank : false,
									mode : 'local',
									fieldLabel : '下一步',
									ref : '../../orderStatus',
									hiddenName : 'entity/orderStatus',
									// dataIndex : 'goodsWithReport',
									anchor : '95%',
									colspan : 2,
									emptyText : '--请选择--',
									editable : false,
									store : _this.stateStore2,
									displayField : "name",
									valueField : "code",
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										"select" : function(combo, record,
												index) {

										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									height : '50',
									dataIndex : 'planAdvise',
									name : 'entity/planAdvise',
									fieldLabel : '计划员意见',
									anchor : '95%',
									colspan : 4
								}]
					}]
				});
	}

	this.initStorageConfirmWindow = function() {
		var _this = this;
		this.storageConfirmWindow = this.storageConfirmWindow
				|| new Ext.fn.FormWindow({
					title : '库存确认',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					defaults : {
						autoScroll : true
					},
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						columns : 4,
						saveUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.storageConfirm.biz.ext',
						loadUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.expandOrderBase.biz.ext',
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
									fieldLabel : '下单日期',
									anchor : '95%',
									format : "Y-m-d",
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'demandDate',
									fieldLabel : '要求入库日期',
									anchor : '95%',
									format : "Y-m-d",
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
									dataIndex : 'specName',
									anchor : '95%',
									fieldLabel : '膜片型号 ',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									dataIndex : 'ext1',
									fieldLabel : '编码',
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
									dataIndex : 'ext8',
									fieldLabel : '货品名称',
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
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '30',
									dataIndex : 'ext19',
									fieldLabel : '其它备注',
									anchor : '95%',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									dataIndex : 'remark',
									height : '30',
									fieldLabel : '备注',
									anchor : '95%',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'displayfield',
									dataIndex : 'planAdvise',
									height : '30',
									fieldLabel : '计划员意见',
									anchor : '95%',
									colspan : 4
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'hidden',
									name : 'entity/id',
									dataIndex : 'id'
								}, {
									xtype : 'hidden',
									name : 'entity/orderStatus',
									value : '计划员确认'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									height : '50',
									dataIndex : 'storageAdvise',
									name : 'entity/storageAdvise',
									allowBlank : false,
									fieldLabel : '意见',
									anchor : '95%',
									colspan : 4
								}]
					}]
				});
	}
	
	this.initUpdateAmountWindow = function() {
		var _this = this;
		this.updateAmountWindow = this.updateAmountWindow
				|| new Ext.fn.FormWindow({
					title : '修改生产/入库数量',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {
							_this.updateAmountWindow.items.items[0].form
									.reset();
							_this.updateAmountWindow.hide();
							_this.listPanel.refresh();
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.expandOrderBase.biz.ext',
						saveUrl : 'com.keensen.ump.produce.diaphragm.ship.orderbase.saveNeedAmount.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/ext12',
									dataIndex : 'ext12',
									fieldLabel : '生产/入库数量',
									ref : '../../ext12',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
								}, {
									ref:'../../amount',
									xtype : 'hidden',
									dataIndex : 'amount'
								}]
					}]
				});
	}
}