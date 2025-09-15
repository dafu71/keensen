com.keensen.ump.produce.component.applys.applyMgr = function() {

	this.initPanel = function() {

		this.initHWaterTestStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initAddOrderWindow();
		this.initModifyOrderWindow();
		this.initViewOrderWindow();

		this.initChooseOrderWindow();

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "applysapplymgr",
					panels : [this.queryPanel, this.listPanel]
				});

		return this.lay;
	}

	this.initHWaterTestStore = function() {
		this.hWaterTestStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.produce.queryHWaterTest2.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'batchNo'
					}, {
						name : 'gpd'
					}, {
						name : 'salt'
					}, {
						name : 'isProdQualified'
					}, {
						name : 'amount'
					}, {
						name : 'batchNoStr'
					}, {
						name : 'jmProduceDt'
					}]
		})
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								anchor : '100%',
								fieldLabel : '栈板号 '
							}, {
								xtype : 'textfield',
								name : 'condition/markSpecCode',
								anchor : '100%',
								fieldLabel : '唛头显示型号 '
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								anchor : '100%',
								fieldLabel : '元件型号 '
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ifConfirm',
								hiddenName : 'condition/ifConfirm',
								fieldLabel : '是否已确认',
								anchor : '100%',
								dictData : KS_YESORNO
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "请检日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '元件序列号 '
							}, {
								xtype : 'textfield',
								name : 'condition/reserve1',
								anchor : '100%',
								fieldLabel : '订单号 '
							}]
				});

		/*
		 * this.queryPanel.addButton({ text : "批量导出请检元件", scope : this, hidden :
		 * exportflag == '0', // rescode : '10002781', iconCls :
		 * 'icon-application_excel', handler : this.exportExcelBatch });
		 */
		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'dafu',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddOrder
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onModifyOrder
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onViewOrder
					}, '-', {
						text : '确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirmOrder
					}, '-', {
						text : '打印',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrint
					}, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						disabled : (uid != 'KS00610') && (uid != 'KS01313')
								&& (uid != 'KS00524') && (uid != 'dafu') && (uid != 'KS01479'),
						handler : this.onDeleteOrder
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.applys.deleteHHHead.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'code',
						sortable : true,
						header : '栈板号'
					}, {
						dataIndex : 'reserve1',
						sortable : true,
						header : '订单号'
					}/*, {
						dataIndex : 'ifcstock',
						sortable : true,
						header : '已确认入C仓'
					}*/, {
						dataIndex : 'markSpecCode',
						sortable : true,
						header : '唛头显示型号'
					}, {
						dataIndex : 'prodSpecName',
						sortable : true,
						header : '元件型号'
					}, {
						dataIndex : 'applyAmount',
						sortable : true,
						header : '请检数量'
					}/*, {
						dataIndex : 'storage',
						xtype : 'dictcolumn',
						dictData : KS_PROD_STORAGE,
						sortable : true,
						header : '入库'
					}*/, {
						dataIndex : 'applyUserName',
						sortable : true,
						header : '请检人'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '请检时间'
					}, {
						xtype : 'dictcolumn',
						sortable : true,
						dictData : KS_YESORNO,
						dataIndex : 'ifConfirmed',
						header : '是否已 确认'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.applys.queryHHApplyByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
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
							name : 'orderNo'
						}, {
							name : 'code'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderAmount'
						}, {
							name : 'applyAmount'
						}, {
							name : 'checkUserId'
						}, {
							name : 'checkUserName'
						}, {
							name : 'applyDate'
						}, {
							name : 'applyUserId'
						}, {
							name : 'applyUserName'
						}, {
							name : 'lid'
						}, {
							name : 'prodClassFlag'
						}, {
							name : 'tape'
						}, {
							name : 'markSpecialFlag'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'markSpecCode'
						}, {
							name : 'markIsok'
						}, {
							name : 'labelIsok'
						}, {
							name : 'apperanceIsok'
						}, {
							name : 'diameter'
						}, {
							name : 'final'
						}, {
							name : 'deal'
						}, {
							name : 'deal1'
						}, {
							name : 'deal2'
						}, {
							name : 'deal3'
						}, {
							name : 'storage'
						}, {
							name : 'manageUserId'
						}, {
							name : 'manageUserName'
						}, {
							name : 'orderType'
						}, {
							name : 'confirmDate'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'printCnt'
						}, {
							name : 'applyAmountTotal'
						}, {
							name : 'isExamine'
						}, {
							name : 'performance'
						}, {
							name : 'ifcstock'
						}, {
							name : 'ifConfirmed'
						}]
			})
		})
	}

	this.initChooseOrderWindow = function() {

		var chooseOrderSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseOrderListPanel = this.chooseOrderListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.chooseOrderOk
							}],
					hsPage : true,
					selModel : chooseOrderSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(), chooseOrderSelModel,
							{
								dataIndex : 'orderType',
								header : '订单类型',
								sortable : true
							}, {
								dataIndex : 'orderNo',
								header : '订单编号',
								sortable : true
							}, {
								dataIndex : 'templateName',
								header : '唛头图纸编号',
								sortable : true
							}, {
								dataIndex : 'materSpecName2',
								header : '订单下达型号',
								sortable : true
							}, {
								dataIndex : 'specNameMark',
								header : '唛头显示型号',
								sortable : true
							}, {
								dataIndex : 'materSpecName',
								header : '对应生产规格',
								sortable : true
							}, {
								dataIndex : 'orderAmount',
								header : '订单数量',
								sortable : true
							}, {
								dataIndex : 'orderDate',
								header : '订单日期',
								sortable : true
							}, {
								dataIndex : 'tapeBase',
								header : '胶带颜色',
								sortable : true
							}, {
								dataIndex : 'labelBase',
								header : '标签',
								sortable : true
							}, {
								dataIndex : 'makeLabelBase',
								header : '标签制作方式',
								sortable : true
							}, {
								dataIndex : 'bagBase',
								header : '包装袋',
								sortable : true
							}, {
								dataIndex : 'boxBase',
								header : '包装箱',
								sortable : true
							}, {
								dataIndex : 'gpdAvg',
								header : '产水量中心线',
								sortable : true
							}, {
								dataIndex : 'saltAvg',
								header : '脱盐率下限',
								sortable : true
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.neworder.queryYxOrderByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/homeType' : 1
						},
						fields : [{
									name : 'id'
								}, {
									name : 'lidTape'
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
									name : 'scfs'
								}, {
									name : 'bm'
								}, {
									name : 'sffh'
								}, {
									name : 'orderType'
								}, {
									name : 'type'
								}, {
									name : 'khxj'
								}, {
									name : 'cpxj'
								}, {
									name : 'ddxj'
								}, {
									name : 'orderNo'
								}, {
									name : 'orderDate'
								}, {
									name : 'hpmc'
								}, {
									name : 'dw'
								}, {
									name : 'materSpecName'
								}, {
									name : 'cpgg'
								}, {
									name : 'dryWet'
								}, {
									name : 'orderAmount'
								}, {
									name : 'dfh'
								}, {
									name : 'xsc'
								}, {
									name : 'sbkcgm'
								}, {
									name : 'sbkcsm'
								}, {
									name : 'bq'
								}, {
									name : 'bag'
								}, {
									name : 'box'
								}, {
									name : 'mark'
								}, {
									name : 'pack'
								}, {
									name : 'performance'
								}, {
									name : 'remark'
								}, {
									name : 'demandStockDate'
								}, {
									name : 'rksl'
								}, {
									name : 'jhwcsj'
								}, {
									name : 'scwcrq'
								}, {
									name : 'cnt'
								}, {
									name : 'arrangeAmount'
								}, {
									name : 'ifplan'
								}, {
									name : 'materSpecName2'
								}, {
									name : 'templateName'
								}, {
									name : 'baseId'
								}, {
									name : 'specNameMark'
								}, {
									name : 'tapeBase'
								}, {
									name : 'saltAvg'
								}, {
									name : 'gpdAvg'
								}, {
									name : 'labelBase'
								}, {
									name : 'boxBase'
								}, {
									name : 'bagBase'
								}, {
									name : 'makeLabelBase'
								}, {
									name : 'packingNum'
								}, {
									name : 'tumoBatchStr'
								}]
					})
				})

		this.queryChooseOrderPanel = this.queryChooseOrderPanel
				|| new Ext.fn.QueryPanel({
							height : 130,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/orderNo2',
										// anchor : '75%',
										fieldLabel : '订单号'
									}, {
										xtype : 'textfield',
										name : 'condition/materSpecName',
										// anchor : '75%',
										fieldLabel : '规格型号 '
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										xtype : "dateregion",
										colspan : 1,
										// anchor : '75%',
										nameArray : [
												'condition/orderDateStart',
												'condition/orderDateEnd'],
										fieldLabel : "订单日期",
										format : "Y-m-d"
									}, {
										xtype : "dateregion",
										colspan : 1,
										// anchor : '75%',
										nameArray : ['condition/planDateStart',
												'condition/planDateEnd'],
										fieldLabel : "计划日期",
										format : "Y-m-d"
									}, {
										xtype : 'hidden',
										name : 'condition/homeType',
										value : 1
									}]
						});

		this.queryChooseOrderPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseOrderWindow.hide();
					}

				});

		this.chooseOrderWindow = this.chooseOrderWindow || new Ext.Window({
					title : '订单查询',
					projectId : '',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.queryChooseOrderPanel,
							this.chooseOrderListPanel]

				});
	}

	this.initAddOrderWindow = function() {
		var _this = this;

		var selModel4AddOrder = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.ListPanel4AddOrder = this.ListPanel4AddOrder
				|| new Ext.fn.EditListPanel({
					clicksToEdit : 1,
					region : 'center',
					cls : 'custom-row-height', // 应用自定义的CSS类
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					autoScroll : true,
					selModel : selModel4AddOrder,
					columns : [new Ext.grid.RowNumberer(), selModel4AddOrder, {
								dataIndex : 'batchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'gpd',
								header : '产水量'
							}, {
								dataIndex : 'salt',
								header : '脱盐率'
							}, {
								dataIndex : 'isProdQualified',
								width : 150,
								header : '单品判定'
							}, {

								dataIndex : 'amount',
								sortable : true,
								width : 60,
								header : '数量(支)',
								css : 'background:#c7c7b7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 2,
											minValue : 1,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))

							}, {

								dataIndex : 'batchNoStr',
								sortable : true,
								width : 300,
								header : '元件序号',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : false,
											scope : this
										}))

							}, {

								dataIndex : 'jmProduceDt',
								format : "Y-m-d",
								width : 150,
								header : '卷膜日期',
								css : 'background:#c7c7f7;',
								editor : new Ext.grid.GridEditor(new Ext.form.DateField(
										{
											hideTrigger : false,
											format : "Y-m-d",
											allowBlank : false,
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

							}],
					store : this.hWaterTestStore
				})

		this.inputPanel4AddOrder = this.inputPanel4AddOrder
				|| new Ext.fn.InputPanel({
					height : 420,
					region : 'north',
					baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 12,
					saveUrl : 'com.keensen.ump.produce.component.applys.addHHApply.biz.ext',
					fields : [{
								xtype : 'trigger',
								triggerClass :'x-form-search-trigger',
								emptyText : '单击旁边按钮选择订单',
								name : 'reserve1',
								ref : '../orderNo',
								allowBlank : false,
								fieldLabel : '订单号',
								anchor : '100%',
								colspan : 4,
								editable : true,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									// _this.onChoose();
									_this.chooseOrder();
								}
							}, {
								xtype : 'textfield',
								ref : '../orderType',
								name : 'orderType',
								fieldLabel : '订单类型',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'prodSpecName',
								ref : '../prodSpecName',
								valueField : 'name',
								fieldLabel : '元件型号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								name : 'orderAmount',
								ref : '../orderAmount',
								fieldLabel : '订单数量',
								readOnly : true,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'numberfield',
								ref : '../applyAmount',
								name : 'applyAmount',
								allowBlank : false,
								fieldLabel : '请检数量',
								anchor : '100%',
								colspan : 4
							}, {

								xtype : 'checkbox',
								boxLabel : '带NSF',
								// checked : true,
								colspan : 4,
								name : 'reserve2',
								inputValue : 'Y',
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">订单要求</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'combobox',
								anchor : '100%',
								colspan : 4,
								allowBlank : false,
								name : 'dryWet',
								ref : '../dryWet',
								hiddenName : 'dryWet',
								fieldLabel : '干/湿膜',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['干', '干'], ['湿', '湿']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "",
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.inputPanel4AddOrder.tapColor
												.reset();
									}
								}
							}, {
								xtype : 'combobox',
								editable : true,
								forceSelection : false,
								name : 'tapColor',
								anchor : '100%',
								colspan : 4,
								hiddenName : 'tapColor',
								ref : '../tapColor',
								fieldLabel : '胶带颜色',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											id : 0,
											fields : ['mykey', 'myvalue'],
											data : [['蓝', '蓝'], ['绿', '绿'],
													['白', '白'], ['黄', '黄'],
													['灰', '灰'], ['水光蓝', '水光蓝']]
										}),
								mode : "local",
								//editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								//forceSelection : true,
								emptyText : "--请选择--",
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.inputPanel4AddOrder.tapColor
												.reset();
									}
								}
							}, {
								xtype : 'textfield',
								ref : '../markSpecCode',
								name : 'markSpecCode',
								fieldLabel : '唛头显示型号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'dictcombobox',
								editable : true,
								forceSelection : false,
								name : 'label',
								hiddenName : 'label',
								ref : '../label',
								fieldLabel : '标签',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4,
								dictData : KS_COMPONENT_INDUSTRY_LABEL
							}, {
								xtype : 'textfield',
								ref : '../bag',
								name : 'bag',
								fieldLabel : '包装袋',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'dictcombobox',
								ref : '../box',
								editable : true,
								forceSelection : false,
								name : 'box',
								hiddenName : 'box',
								fieldLabel : '包装箱',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4,
								dictData : KS_COMPONENT_INDUSTRY_BOX
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">性能要求</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'numberfield',
								ref : '../gpdAvg',
								name : 'gpdAvg',
								fieldLabel : '产水量',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'numberfield',
								name : 'saltAvg',
								ref : '../saltAvg',
								fieldLabel : '脱盐率%',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">请检信息</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'trigger',
								triggerClass :'x-form-search-trigger',
								emptyText : '单击旁边按钮计算',
								name : 'quantityPerBox',
								ref : '../quantityPerBox',
								regex : /^[1-9]\d*$/,
								allowBlank : false,
								fieldLabel : '单箱数量(支)',
								anchor : '100%',
								colspan : 4,
								editable : true,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									// _this.onChoose();
									_this.calculateBox();
								}
							}, {
								xtype : 'numberfield',
								name : 'quantityBox',
								ref : '../quantityBox',
								fieldLabel : '请检箱数(箱)',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'numberfield',
								name : 'quantityLastBox',
								ref : '../quantityLastBox',
								fieldLabel : '尾箱元件数(支)',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}/*, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								ref : '../markSnStart',
								name : 'markSnStart',
								fieldLabel : '唛头起始号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								ref : '../markSnEnd',
								name : 'markSnEnd',
								fieldLabel : '唛头尾号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}*/, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">膜片批次</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'trigger',
								triggerClass :'x-form-search-trigger',
								emptyText : '输入膜片批次,单击旁边按钮加载水测记录',
								name : 'tumoBatchStr',
								ref : '../tumoBatchStr',
								regex : /^[0-9A-Z,]+$/,
								allowBlank : false,
								fieldLabel : '膜批次',
								anchor : '100%',
								colspan : 12,
								editable : true,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									// _this.onChoose();
									_this.queryHWaterTest();
								}
							}, {
								xtype : 'hidden',
								ref : '../makeLabelBase',
								name : 'reserve3'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputPanel4AddOrder.form.reset();
									this.inputWindow4AddOrder.hide();
								}
							}]

				})

		this.inputWindow4AddOrder = this.inputWindow4AddOrder
				|| new Ext.Window({
							title : '新增请检单',
							resizable : true,
							minimizable : false,
							maximizable : true,
							closeAction : "hide",
							buttonAlign : "center",
							autoScroll : false,
							modal : true,
							width : 1024,
							height : 600,
							layout : 'border',
							items : [this.inputPanel4AddOrder,
									this.ListPanel4AddOrder]

						});

	}

	this.initModifyOrderWindow = function() {
		var _this = this;

		var selModel4ModifyOrder = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel4ModifyOrder = this.listPanel4ModifyOrder
				|| new Ext.fn.EditListPanel({
					clicksToEdit : 1,
					region : 'center',
					cls : 'custom-row-height', // 应用自定义的CSS类
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					autoScroll : true,
					selModel : selModel4ModifyOrder,
					columns : [new Ext.grid.RowNumberer(),
							selModel4ModifyOrder, {
								dataIndex : 'batchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'gpd',
								header : '产水量'
							}, {
								dataIndex : 'salt',
								header : '脱盐率'
							}, {
								dataIndex : 'isProdQualified',
								width : 150,
								header : '单品判定'
							}, {

								dataIndex : 'amount',
								sortable : true,
								width : 60,
								header : '数量(支)',
								css : 'background:#c7c7b7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 2,
											minValue : 1,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))

							}, {

								dataIndex : 'batchNoStr',
								sortable : true,
								width : 300,
								header : '元件序号',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : false,
											scope : this
										}))

							}, {

								dataIndex : 'jmProduceDt',
								format : "Y-m-d",
								width : 150,
								header : '卷膜日期',
								css : 'background:#c7c7f7;',
								editor : new Ext.grid.GridEditor(new Ext.form.DateField(
										{
											format : "Y-m-d",
											allowBlank : false,
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

							}],
					store : this.hWaterTestStore
				})

		this.editPanel4ModifyOrder = this.editPanel4ModifyOrder
				|| new Ext.fn.EditPanel({
					height : 420,
					region : 'north',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 12,
					loadUrl : 'com.keensen.ump.produce.component.applys.expandHHHead.biz.ext',
					saveUrl : 'com.keensen.ump.produce.component.applys.ModifyHHApply.biz.ext',
					fields : [{
								xtype : 'trigger',
								triggerClass :'x-form-search-trigger',
								emptyText : '单击旁边按钮选择订单',
								name : 'reserve1',
								dataIndex : 'reserve1',
								ref : '../orderNo',
								allowBlank : false,
								fieldLabel : '订单号',
								anchor : '100%',
								colspan : 4,
								editable : true,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									// _this.onChoose();
									_this.chooseOrder();
								}
							}, {
								xtype : 'textfield',
								ref : '../orderType',
								dataIndex : 'orderType',
								name : 'orderType',
								fieldLabel : '订单类型',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'prodSpecName',
								dataIndex : 'prodSpecName',
								ref : '../prodSpecName',
								valueField : 'name',
								fieldLabel : '元件型号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								name : 'orderAmount',
								dataIndex : 'orderAmount',
								ref : '../orderAmount',
								fieldLabel : '订单数量',
								readOnly : true,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'numberfield',
								ref : '../applyAmount',
								dataIndex : 'applyAmount',
								name : 'applyAmount',
								allowBlank : false,
								fieldLabel : '请检数量',
								anchor : '100%',
								colspan : 4
							}, {

								xtype : 'checkbox',
								dataIndex : 'reserve2',
								boxLabel : '带NSF',
								// checked : true,
								colspan : 4,
								name : 'reserve2',
								inputValue : 'Y',
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">订单要求</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'combobox',
								anchor : '100%',
								colspan : 4,
								allowBlank : false,
								name : 'dryWet',
								ref : '../dryWet',
								hiddenName : 'dryWet',
								dataIndex : 'dryWet',
								fieldLabel : '干/湿膜',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['干', '干'], ['湿', '湿']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "",
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.editPanel4ModifyOrder.tapColor
												.reset();
									}
								}
							}, {
								xtype : 'combobox',
								editable : true,
								forceSelection : false,
								name : 'tapColor',
								dataIndex : 'tapColor',
								anchor : '100%',
								colspan : 4,
								hiddenName : 'tapColor',
								ref : '../tapColor',
								fieldLabel : '胶带颜色',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											id : 0,
											fields : ['mykey', 'myvalue'],
											data : [['蓝', '蓝'], ['绿', '绿'],
													['白', '白'], ['黄', '黄'],
													['灰', '灰'], ['水光蓝', '水光蓝']]
										}),
								mode : "local",
								//editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								//forceSelection : true,
								emptyText : "--请选择--",
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.editPanel4ModifyOrder.tapColor
												.reset();
									}
								}
							}, {
								xtype : 'textfield',
								ref : '../markSpecCode',
								dataIndex : 'markSpecCode',
								name : 'markSpecCode',
								fieldLabel : '唛头显示型号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'dictcombobox',
								ref : '../label',
								editable : true,
								forceSelection : false,
								name : 'label',
								hiddenName : 'label',
								dataIndex : 'label',
								fieldLabel : '标签',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4,
								dictData : KS_COMPONENT_INDUSTRY_LABEL
							}, {
								xtype : 'textfield',
								ref : '../bag',
								name : 'bag',
								dataIndex : 'bag',
								fieldLabel : '包装袋',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'dictcombobox',
								ref : '../box',
								editable : true,
								forceSelection : false,
								name : 'box',
								hiddenName : 'box',
								dataIndex : 'box',
								fieldLabel : '包装箱',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4,
								dictData : KS_COMPONENT_INDUSTRY_BOX
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">性能要求</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'numberfield',
								ref : '../gpdAvg',
								name : 'gpdAvg',
								dataIndex : 'gpdAvg',
								fieldLabel : '产水量',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'numberfield',
								name : 'saltAvg',
								ref : '../saltAvg',
								dataIndex : 'saltAvg',
								fieldLabel : '脱盐率%',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">请检信息</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'trigger',
								triggerClass :'x-form-search-trigger',
								emptyText : '单击旁边按钮计算',
								name : 'quantityPerBox',
								dataIndex : 'quantityPerBox',
								ref : '../quantityPerBox',
								regex : /^[1-9]\d*$/,
								allowBlank : false,
								fieldLabel : '单箱数量(支)',
								anchor : '100%',
								colspan : 4,
								editable : true,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									// _this.onChoose();
									_this.calculateBox();
								}
							}, {
								xtype : 'numberfield',
								name : 'quantityBox',
								dataIndex : 'quantityBox',
								ref : '../quantityBox',
								fieldLabel : '请检箱数(箱)',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'numberfield',
								name : 'quantityLastBox',
								dataIndex : 'quantityLastBox',
								ref : '../quantityLastBox',
								fieldLabel : '尾箱元件数(支)',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}/*, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								ref : '../markSnStart',
								name : 'markSnStart',
								dataIndex : 'markSnStart',
								fieldLabel : '唛头起始号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								ref : '../markSnEnd',
								name : 'markSnEnd',
								dataIndex : 'markSnEnd',
								fieldLabel : '唛头尾号',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}*/, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">膜片批次</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'trigger',
								triggerClass :'x-form-search-trigger',
								emptyText : '输入膜片批次,单击旁边按钮加载水测记录',
								name : 'tumoBatchStr',
								dataIndex : 'tumoBatchStr',
								ref : '../tumoBatchStr',
								regex : /^[0-9A-Z,]+$/,
								allowBlank : false,
								fieldLabel : '膜批次',
								anchor : '100%',
								colspan : 12,
								editable : true,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									// _this.onChoose();
									_this.queryHWaterTest();
								}
							}, {
								xtype : 'hidden',
								name : 'id',
								dataIndex : 'id'
							}, {
								xtype : 'hidden',
								dataIndex : 'reserve3',
								ref : '../makeLabelBase',
								name : 'reserve3'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.editPanel4ModifyOrder.form.reset();
									this.editWindow4ModifyOrder.hide();
								}
							}]

				})

		this.editWindow4ModifyOrder = this.editWindow4ModifyOrder
				|| new Ext.Window({
							title : '修改请检单',
							resizable : true,
							minimizable : false,
							maximizable : true,
							closeAction : "hide",
							buttonAlign : "center",
							autoScroll : false,
							modal : true,
							width : 1024,
							height : 600,
							layout : 'border',
							items : [this.editPanel4ModifyOrder,
									this.listPanel4ModifyOrder]

						});

	}

	this.initViewOrderWindow = function() {
		var _this = this;

		var selModel4ViewOrder = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel4ViewOrder = this.listPanel4ViewOrder
				|| new Ext.fn.ListPanel({
							region : 'center',
							cls : 'custom-row-height', // 应用自定义的CSS类
							viewConfig : {
								forceFit : false
							},
							hsPage : false,
							autoScroll : true,
							selModel : selModel4ViewOrder,
							columns : [new Ext.grid.RowNumberer(),
									selModel4ViewOrder, {
										dataIndex : 'batchNo',
										header : '膜片批次'
									}, {
										dataIndex : 'gpd',
										header : '产水量'
									}, {
										dataIndex : 'salt',
										header : '脱盐率'
									}, {
										dataIndex : 'isProdQualified',
										width : 150,
										header : '单品判定'
									}, {

										dataIndex : 'amount',
										sortable : true,
										width : 60,
										header : '数量(支)'

									}, {

										dataIndex : 'batchNoStr',
										sortable : true,
										width : 300,
										header : '元件序号'

									}, {

										dataIndex : 'jmProduceDt',
										format : "Y-m-d",
										width : 100,
										header : '卷膜日期'
									}],
							store : this.hWaterTestStore
						})

		this.editPanel4ViewOrder = this.editPanel4ViewOrder
				|| new Ext.fn.EditPanel({
					height : 420,
					region : 'north',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 12,
					loadUrl : 'com.keensen.ump.produce.component.applys.expandHHHead.biz.ext',
					saveUrl : 'com.keensen.ump.produce.component.applys.ViewHHApply.biz.ext',
					fields : [{
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'reserve1',
								ref : '../orderNo',
								fieldLabel : '订单号',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								ref : '../orderType',
								dataIndex : 'orderType',
								fieldLabel : '订单类型',
								readOnly : true,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'prodSpecName',
								ref : '../prodSpecName',
								fieldLabel : '元件型号',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'orderAmount',
								ref : '../orderAmount',
								fieldLabel : '订单数量',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../applyAmount',
								dataIndex : 'applyAmount',
								fieldLabel : '请检数量',
								anchor : '100%',
								colspan : 4
							}, {

								xtype : 'checkbox',
								readOnly : true,
								dataIndex : 'reserve2',
								boxLabel : '带NSF',
								colspan : 4,
								inputValue : 'Y',
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">订单要求</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 4,
								ref : '../dryWet',
								dataIndex : 'dryWet',
								fieldLabel : '干/湿膜'
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'tapColor',
								anchor : '100%',
								colspan : 4,
								ref : '../tapColor',
								fieldLabel : '胶带颜色'
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../markSpecCode',
								dataIndex : 'markSpecCode',
								fieldLabel : '唛头显示型号',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'dictcombobox',
								readOnly : true,
								dataIndex : 'label',
								fieldLabel : '标签',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4,
								dictData : KS_COMPONENT_INDUSTRY_LABEL
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'bag',
								fieldLabel : '包装袋',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'dictcombobox',
								readOnly : true,
								dataIndex : 'box',
								fieldLabel : '包装箱',
								// allowBlank : false,
								anchor : '100%',
								colspan : 4,
								dictData : KS_COMPONENT_INDUSTRY_BOX
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">性能要求</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../gpdAvg',
								dataIndex : 'gpdAvg',
								fieldLabel : '产水量',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../saltAvg',
								dataIndex : 'saltAvg',
								fieldLabel : '脱盐率%',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">请检信息</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'quantityPerBox',
								ref : '../quantityPerBox',
								fieldLabel : '单箱数量(支)',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'quantityBox',
								ref : '../quantityBox',
								fieldLabel : '请检箱数(箱)',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'quantityLastBox',
								ref : '../quantityLastBox',
								fieldLabel : '尾箱元件数(支)',
								anchor : '100%',
								colspan : 4
							}/*, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../markSnStart',
								dataIndex : 'markSnStart',
								fieldLabel : '唛头起始号',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../markSnEnd',
								dataIndex : 'markSnEnd',
								fieldLabel : '唛头尾号',
								anchor : '100%',
								colspan : 4
							}*/, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">膜片批次</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								dataIndex : 'tumoBatchStr',
								ref : '../tumoBatchStr',
								fieldLabel : '膜批次',
								anchor : '100%',
								colspan : 12
							}, {
								xtype : 'hidden',
								ref : '../pkid',
								name : 'id',
								dataIndex : 'id'
							}],
					buttons : [{
								text : "确认",
								scope : this,
								handler : this.onSaveConfirm
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.editPanel4ViewOrder.form.reset();
									this.editWindow4ViewOrder.hide();
								}
							}]

				})

		this.editWindow4ViewOrder = this.editWindow4ViewOrder
				|| new Ext.Window({
					title : '请检单',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.editPanel4ViewOrder, this.listPanel4ViewOrder]

				});

	}
}