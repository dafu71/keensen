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
								fieldLabel : '销售订单编号'
							}, {
								xtype : 'textfield',
								hiddenName : 'condition/specName',
								anchor : '100%',
								fieldLabel : '膜片生产型号 '
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
					id : importExcelBtnId,
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
						hidden : true,
						ref : '../addOrderBtn',
						handler : this.onAddOrder
					}, '-', {
						text : '计划员确认',
						scope : this,
						hidden : true,
						iconCls : 'icon-application_edit',
						ref : '../confirmBtn',
						handler : this.onPlanConfirm
					}, '-', {
						text : '库存确认',
						scope : this,
						hidden : true,
						iconCls : 'icon-application_edit',
						ref : '../storageConfirmBtn',
						handler : this.onStorageConfirm
					}, '-', {
						text : '修改生产/入库数量',
						scope : this,
						hidden : true,
						iconCls : 'icon-application_edit',
						ref : '../updateAmountBtn',
						handler : this.onUpdateAmount
					}, '->', {
						text : '删除',
						scope : this,
						hidden : true,
						iconCls : 'icon-application_delete',
						ref : '../delBtn',
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
						dataIndex : 'orderNo',
						width : 200,
						header : '销售订单编号'
					}, {
						dataIndex : 'orderDate',
						width : 120,
						header : '订单日期'
					}, {
						dataIndex : 'demandDate',
						width : 120,
						header : '要求入库日期'
					}, {
						dataIndex : 'amount',
						width : 120,
						header : '订单数量'
					}, {
						dataIndex : 'ext12',
						width : 120,
						header : '需生产或入库数量'
					}, {
						dataIndex : 'manager',
						header : '负责人'
					}, {
						dataIndex : 'prodName',
						header : '产品名称'
					}, {
						dataIndex : 'amountGift',
						header : '是否有赠送米数'
					}, {
						dataIndex : 'checkReportNeeded',
						header : '是否需要检测报告'
					}, {
						dataIndex : 'mptype',
						header : '膜片大类'
					}, {
						dataIndex : 'specName',
						header : '膜片生产型号'
					}, {
						dataIndex : 'markSpecName',
						header : '膜片唛头型号'
					}, {
						dataIndex : 'deliveryDateEarliest',
						header : '计划最早发货日期'
					}, {
						dataIndex : 'deliveryDateLatest',
						header : '计划最晚发货日期'
					}, {
						dataIndex : 'tray',
						header : '托盘材质要求'
					}, {
						dataIndex : 'packingTxt',
						header : '整托货物警示标识'
					}, {
						dataIndex : 'markPaste',
						header : '要求整托货物张贴信息唛头'
					}, {
						dataIndex : 'pallet',
						header : '膜元件包装箱打托要求'
					}, {
						dataIndex : 'flash',
						header : '是否飞边'
					}, {
						dataIndex : 'mark',
						header : '膜片包装箱唛头'
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
						}, {
							name : 'dept'
						}, {
							name : 'manager'
						}, {
							name : 'prodName'
						}, {
							name : 'amountGift'
						}, {
							name : 'checkReportNeeded'
						}, {
							name : 'mptype'
						}, {
							name : 'markSpecName'
						}, {
							name : 'deliveryDateEarliest'
						}, {
							name : 'deliveryDateLatest'
						}, {
							name : 'tray'
						}, {
							name : 'packingTxt'
						}, {
							name : 'markPaste'
						}, {
							name : 'pallet'
						}, {
							name : 'flash'
						}, {
							name : 'mark'
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
							fieldLabel : '销售订单编号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/prodName',
							dataIndex : 'prodName',
							fieldLabel : '产品名称',
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
							name : 'entity/ext12',
							allowBlank : false,
							dataIndex : 'ext12',
							fieldLabel : '需生产或<br>入库数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/mptype',
							dataIndex : 'mptype',
							anchor : '95%',
							allowBlank : false,
							fieldLabel : '膜片大类 ',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/specName',
							dataIndex : 'specName',
							anchor : '95%',
							allowBlank : false,
							fieldLabel : '膜片生产型号 ',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/markSpecName',
							dataIndex : 'markSpecName',
							fieldLabel : '膜片唛头型号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/manager',
							dataIndex : 'manager',
							fieldLabel : '负责人',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/amountGift',
							dataIndex : 'amountGift',
							// allowBlank : false,
							fieldLabel : '是否有<br>赠送米数',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/checkReportNeeded',
							dataIndex : 'checkReportNeeded',
							// allowBlank : false,
							fieldLabel : '是否需要<br>检测报告',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/deliveryDateEarliest',
							dataIndex : 'deliveryDateEarliest',
							ref : '../../deliveryDateEarliest',
							allowBlank : false,
							disabled : false,
							hidden : false,
							// minValue : new Date(),
							// readOnly : true,
							fieldLabel : '计划最早<br>发货日期',
							// readOnly : true,
							anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								"change" : function(o, newvalue, oldvalue) {

								}
							}
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/deliveryDateLatest',
							dataIndex : 'deliveryDateLatest',
							ref : '../../deliveryDateLatest',
							allowBlank : false,
							disabled : false,
							hidden : false,
							// minValue : new Date(),
							// readOnly : true,
							fieldLabel : '计划最晚<br>发货日期',
							// readOnly : true,
							anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								"change" : function(o, newvalue, oldvalue) {

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/tray',
							dataIndex : 'tray',
							// allowBlank : false,
							fieldLabel : '托盘材质要求',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/packingTxt',
							dataIndex : 'packingTxt',
							// allowBlank : false,
							fieldLabel : '整托货物<br>警示标识',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/markPaste',
							dataIndex : 'markPaste',
							// allowBlank : false,
							fieldLabel : '要求整托货物<br>张贴信息唛头',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/pallet',
							dataIndex : 'pallet',
							// allowBlank : false,
							fieldLabel : '膜元件包装箱<br>打托要求',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/mark',
							dataIndex : 'mark',
							// allowBlank : false,
							fieldLabel : '膜片包装箱唛头',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/flash',
							dataIndex : 'flash',
							// allowBlank : false,
							fieldLabel : '是否飞边',
							anchor : '95%',
							colspan : 2
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
			height : 630,
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
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'orderNo',
							fieldLabel : '销售订单编号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'prodName',
							fieldLabel : '产品名称',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'datefield',
							readOnly : true,
							dataIndex : 'orderDate',
							fieldLabel : '下单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'datefield',
							readOnly : true,
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
							xtype : 'numberfield',
							readOnly : true,
							dataIndex : 'amount',
							fieldLabel : '数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'ext12',
							fieldLabel : '需生产或<br>入库数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'mptype',
							anchor : '95%',
							fieldLabel : '膜片大类 ',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'specName',
							anchor : '95%',
							fieldLabel : '膜片生产型号 ',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'markSpecName',
							fieldLabel : '膜片唛头型号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'manager',
							fieldLabel : '负责人',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'amountGift',
							// allowBlank : false,
							fieldLabel : '是否有<br>赠送米数',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'checkReportNeeded',
							// allowBlank : false,
							fieldLabel : '是否需要<br>检测报告',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							readOnly : true,
							dataIndex : 'deliveryDateEarliest',
							ref : '../../deliveryDateEarliest',
							fieldLabel : '计划最早<br>发货日期',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							readOnly : true,
							dataIndex : 'deliveryDateLatest',
							ref : '../../deliveryDateLatest',
							fieldLabel : '计划最晚<br>发货日期',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							readOnly : true,
							dataIndex : 'tray',
							fieldLabel : '托盘材质要求',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textarea',
							readOnly : true,
							dataIndex : 'packingTxt',
							fieldLabel : '整托货物<br>警示标识',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							readOnly : true,
							dataIndex : 'markPaste',
							fieldLabel : '要求整托货物<br>张贴信息唛头',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textarea',
							readOnly : true,
							dataIndex : 'pallet',
							fieldLabel : '膜元件包装箱<br>打托要求',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textarea',
							readOnly : true,
							dataIndex : 'mark',
							fieldLabel : '膜片包装箱唛头',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'flash',
							fieldLabel : '是否飞边',
							anchor : '95%',
							colspan : 2
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
					height : 630,
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
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'orderNo',
									fieldLabel : '销售订单编号',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'prodName',
									fieldLabel : '产品名称',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'datefield',
									readOnly : true,
									dataIndex : 'orderDate',
									fieldLabel : '下单日期',
									anchor : '95%',
									format : "Y-m-d",
									colspan : 2
								}, {
									xtype : 'datefield',
									readOnly : true,
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
									xtype : 'numberfield',
									readOnly : true,
									dataIndex : 'amount',
									fieldLabel : '数量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'ext12',
									fieldLabel : '需生产或<br>入库数量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'mptype',
									anchor : '95%',
									fieldLabel : '膜片大类 ',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'specName',
									anchor : '95%',
									fieldLabel : '膜片型号 ',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'markSpecName',
									fieldLabel : '膜片唛头型号',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'manager',
									fieldLabel : '负责人',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'amountGift',
									// allowBlank : false,
									fieldLabel : '是否有<br>赠送米数',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'checkReportNeeded',
									// allowBlank : false,
									fieldLabel : '是否需要<br>检测报告',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'datefield',
									format : "Y-m-d",
									readOnly : true,
									dataIndex : 'deliveryDateEarliest',
									ref : '../../deliveryDateEarliest',
									fieldLabel : '计划最早<br>发货日期',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'datefield',
									format : "Y-m-d",
									readOnly : true,
									dataIndex : 'deliveryDateLatest',
									ref : '../../deliveryDateLatest',
									fieldLabel : '计划最晚<br>发货日期',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'tray',
									fieldLabel : '托盘材质要求',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'packingTxt',
									fieldLabel : '整托货物<br>警示标识',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'markPaste',
									fieldLabel : '要求整托货物<br>张贴信息唛头',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'pallet',
									fieldLabel : '膜元件包装箱<br>打托要求',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'mark',
									fieldLabel : '膜片包装箱唛头',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'flash',
									fieldLabel : '是否飞边',
									anchor : '95%',
									colspan : 2
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
									xtype : 'hidden',
									name : 'entity/id',
									dataIndex : 'id'
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
					height : 630,
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
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'orderNo',
									fieldLabel : '销售订单编号',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'prodName',
									fieldLabel : '产品名称',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'datefield',
									readOnly : true,
									dataIndex : 'orderDate',
									fieldLabel : '下单日期',
									anchor : '95%',
									format : "Y-m-d",
									colspan : 2
								}, {
									xtype : 'datefield',
									readOnly : true,
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
									xtype : 'numberfield',
									readOnly : true,
									dataIndex : 'amount',
									fieldLabel : '数量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'ext12',
									fieldLabel : '需生产或<br>入库数量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'mptype',
									anchor : '95%',
									fieldLabel : '膜片大类 ',
									colspan : 1
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'specName',
									anchor : '95%',
									fieldLabel : '膜片生产型号 ',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'markSpecName',
									fieldLabel : '膜片唛头型号',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'manager',
									fieldLabel : '负责人',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'amountGift',
									// allowBlank : false,
									fieldLabel : '是否有<br>赠送米数',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'checkReportNeeded',
									// allowBlank : false,
									fieldLabel : '是否需要<br>检测报告',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'datefield',
									format : "Y-m-d",
									readOnly : true,
									dataIndex : 'deliveryDateEarliest',
									ref : '../../deliveryDateEarliest',
									fieldLabel : '计划最早<br>发货日期',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'datefield',
									format : "Y-m-d",
									readOnly : true,
									dataIndex : 'deliveryDateLatest',
									ref : '../../deliveryDateLatest',
									fieldLabel : '计划最晚<br>发货日期',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'tray',
									fieldLabel : '托盘材质要求',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'packingTxt',
									fieldLabel : '整托货物<br>警示标识',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'markPaste',
									fieldLabel : '要求整托货物<br>张贴信息唛头',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'pallet',
									fieldLabel : '膜元件包装箱<br>打托要求',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									readOnly : true,
									dataIndex : 'mark',
									fieldLabel : '膜片包装箱唛头',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									readOnly : true,
									dataIndex : 'flash',
									fieldLabel : '是否飞边',
									anchor : '95%',
									colspan : 2
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
									ref : '../../amount',
									xtype : 'hidden',
									dataIndex : 'amount'
								}]
					}]
				});
	}
}