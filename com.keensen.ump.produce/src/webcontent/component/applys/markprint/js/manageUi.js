com.keensen.ump.produce.component.applys.MarkPrintMgr = function() {

	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initChooseOrderWindow();
		this.initMarkPrintWindow();
		
		this.initMarkLabelWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'applysmarkprintmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.baseDictStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.param.queryBaseDict.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {
				'condition/business' : "'color_tape','type_prod','size_prod','code_prod'"
			},
			fields : [{
						name : 'business'
					}, {
						name : 'dictValue'
					}, {
						name : 'dictName'
					}, {
						name : 'remark'
					}]
		})

		this.tapColorStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.param.queryBaseDict.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/business' : "'color_tape'"
					},
					fields : [{
								name : 'business'
							}, {
								name : 'dictValue'
							}, {
								name : 'dictName'
							}, {
								name : 'remark'
							}]
				})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								fieldLabel : '卷制型号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/checkCode',
								fieldLabel : '请检单号%-%'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
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
				forceFit : false
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '贴牌唛头新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd2
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						width : 150,
						header : '箱唛批号'
					}, {
						dataIndex : 'checkCode',
						header : '请检单号'
					}, {
						dataIndex : 'orderNo',
						width : 200,
						header : '订单号'
					}, {
						dataIndex : 'prodSpecName',
						header : '卷制型号'
					}, {
						dataIndex : 'tapColor',
						header : '胶带颜色'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'applyAmount',
						header : '请检数量'
					}, {
						dataIndex : 'quantityBox',
						header : '单箱数量(支)'
					}, {
						dataIndex : 'ifnsfName',
						header : '带NSF'
					}, {
						dataIndex : 'dryWet',
						header : '干/湿膜'
					}, {
						dataIndex : 'ifnsfName',
						header : '有logo'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.household.queryMarkPrintByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'orderId'
						}, {
							name : 'checkId'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tapColor'
						}, {
							name : 'orderAmount'
						}, {
							name : 'applyAmount'
						}, {
							name : 'quantityBox'
						}, {
							name : 'ifnsf'
						}, {
							name : 'dryWet'
						}, {
							name : 'batchNo'
						}, {
							name : 'iflog'
						}, {
							name : 'id'
						}, {
							name : 'checkCode'
						}, {
							name : 'ifnsfName'
						}, {
							name : 'iflogName'
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
								}, {
									name : 'urlPhotoApply'
								}, {
									name : 'urlPhotoApply2'
								}, {
									name : 'urlPhotoApply3'
								}, {
									name : 'urlPhotoApply4'
								}, {
									name : 'urlPhotoApply5'
								}, {
									name : 'urlPhotoApply6'
								}, {
									name : 'ifphoto'
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

	this.initMarkPrintWindow = function() {

		var _this = this;

		this.markPrintPanel = this.markPrintPanel || new Ext.fn.EditPanel({
					// height : 440,
					region : 'center',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 12,
					loadUrl : '1.biz.ext',
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'trigger',
								triggerClass : 'x-form-search-trigger',
								emptyText : '单击旁边按钮选择订单',
								name : 'orderNo',
								ref : '../orderNo',
								allowBlank : false,
								fieldLabel : '订单号',
								anchor : '100%',
								colspan : 4,
								editable : false,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									_this.chooseOrder();
								}
							}, {
								xtype : 'textfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'prodSpecName',
								ref : '../prodSpecName',
								fieldLabel : '卷制型号',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'combobox',
								forceSelection : false,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '胶带颜色',
								ref : '../tapColor',
								dataIndex : 'tapColor',
								anchor : '100%',
								colspan : 4,
								emptyText : '--请选择--',
								editable : true,
								store : this.tapColorStore,
								displayField : "dictName",
								valueField : "dictName",
								listeners : {
									"expand" : function(A) {
										this.reset()
									},
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'numberfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'orderAmount',
								ref : '../orderAmount',
								fieldLabel : '订单数量',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								// readOnly : true,
								allowBlank : false,
								ref : '../applyAmount',
								dataIndex : 'applyAmount',
								fieldLabel : '请检数量',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'trigger',
								triggerClass : 'x-form-search-trigger',
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
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'quantityBox',
								ref : '../quantityBox',
								fieldLabel : '预计包装箱数',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'quantityLastBox',
								ref : '../quantityLastBox',
								fieldLabel : '尾箱元件数(支)',
								anchor : '100%',
								colspan : 4
							}, {

								xtype : 'checkbox',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'reserve2',
								ref : '../nsf',
								boxLabel : '带NSF',
								colspan : 4,
								inputValue : 'Y',
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								// readOnly : true,
								allowBlank : false,
								dataIndex : 'dryWet',
								ref : '../dryWet',
								fieldLabel : '干/湿膜',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								allowBlank : false,
								readOnly : true,
								ref : '../markBatchNo',
								fieldLabel : '箱唛批号示例',
								anchor : '100%',
								colspan : 4
							}, {

								xtype : 'checkbox',
								allowBlank : false,
								checked : true,
								ref : '../log',
								boxLabel : '有logo',
								colspan : 4,
								inputValue : 'Y',
								anchor : '100%'
							}, {
								xtype : 'hidden',
								ref : '../pkid',
								name : 'id',
								dataIndex : 'id'
							}, {
								xtype : 'hidden',
								ref : '../orderId',
								dataIndex : 'orderId'
							}],
					buttons : [{
								text : "生成箱唛批号",
								scope : this,
								handler : this.onCreateMarkBatchNo
							}, {
								text : "打印",
								scope : this,
								handler : this.onSaveMarkPrint
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.markPrintPanel.form.reset();
									this.listPanel.store.reload();
									this.markPrintWindow.hide();
								}
							}]

				})

		this.markPrintWindow = this.markPrintWindow || new Ext.Window({
					title : '唛头打印信息确认',
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
					items : [this.markPrintPanel]

				});

	}

	this.initMarkLabelWindow = function() {

		var _this = this;

		this.markLabelPanel = this.markLabelPanel || new Ext.fn.EditPanel({
					// height : 440,
					region : 'center',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 12,
					loadUrl : '1.biz.ext',
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'trigger',
								triggerClass : 'x-form-search-trigger',
								emptyText : '单击旁边按钮选择订单',
								name : 'orderNo',
								ref : '../orderNo',
								allowBlank : false,
								fieldLabel : '订单号',
								anchor : '100%',
								colspan : 4,
								editable : false,
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									_this.chooseOrder();
								}
							}, {
								xtype : 'textfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'prodSpecName',
								ref : '../prodSpecName',
								fieldLabel : '卷制型号',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'combobox',
								forceSelection : false,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '胶带颜色',
								ref : '../tapColor',
								dataIndex : 'tapColor',
								anchor : '100%',
								colspan : 4,
								emptyText : '--请选择--',
								editable : true,
								store : this.tapColorStore,
								displayField : "dictName",
								valueField : "dictName",
								listeners : {
									"expand" : function(A) {
										this.reset()
									},
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'numberfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'orderAmount',
								ref : '../orderAmount',
								fieldLabel : '订单数量',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								// readOnly : true,
								allowBlank : false,
								ref : '../applyAmount',
								dataIndex : 'applyAmount',
								fieldLabel : '请检数量',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'trigger',
								triggerClass : 'x-form-search-trigger',
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
									_this.calculateBox2();
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'quantityBox',
								ref : '../quantityBox',
								fieldLabel : '预计包装箱数',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'quantityLastBox',
								ref : '../quantityLastBox',
								fieldLabel : '尾箱元件数(支)',
								anchor : '100%',
								colspan : 4
							}, {

								xtype : 'checkbox',
								readOnly : true,
								allowBlank : false,
								dataIndex : 'reserve2',
								ref : '../nsf',
								boxLabel : '带NSF',
								colspan : 4,
								inputValue : 'Y',
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								// readOnly : true,
								allowBlank : false,
								dataIndex : 'dryWet',
								ref : '../dryWet',
								fieldLabel : '干/湿膜',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								allowBlank : false,
								//readOnly : true,
								ref : '../markBatchNoPrefix',
								fieldLabel : '箱唛批号前缀',
								anchor : '100%',
								colspan : 4
							}, {

								xtype : 'checkbox',
								allowBlank : false,
								checked : true,
								ref : '../log',
								boxLabel : '有logo',
								colspan : 4,
								inputValue : 'Y',
								anchor : '100%'
							}, {
								xtype : 'hidden',
								ref : '../pkid',
								name : 'id',
								dataIndex : 'id'
							}, {
								xtype : 'hidden',
								ref : '../orderId',
								dataIndex : 'orderId'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveMarkLabel
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.markLabelPanel.form.reset();
									this.listPanel.store.reload();
									this.markLabelWindow.hide();
								}
							}]

				})

		this.markLabelWindow = this.markLabelWindow || new Ext.Window({
					title : '贴牌唛头新增',
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
					items : [this.markLabelPanel]

				});

	}
}