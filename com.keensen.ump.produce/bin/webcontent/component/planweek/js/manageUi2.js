com.keensen.ump.produce.component.planweekMgr = function() {
	this.initPanel = function() {
		
		this.initWeekArr();
		this.initPlanYear();
		this.initPlanDateStore();
		this.initMpStore();
		this.initMpStore2();
		this.initQueryPanel();
		this.initListPanel();
		this.initEditPlanWeekWindow();
		this.initEditPlanDayWindow();

		this.initAddPlanDayWindow();

		this.initPlanDayWindow2();

		this.initEditPlanRollWindow();
		this.initAddPlanRollWindow();
		this.initPlanRollWindow2();

		this.initPlanWeekDaysWindow();
		this.initAddPlanWeekDaysWindow();

		this.initChooseMpSpecWindow();
		this.initChooseStorageWindow();
		this.initChooseTumoWindow();
		
		this.initInputAddWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentplanweekmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initPlanYear = function() {
		this.planYearArr = [];
		for (var i = 0; i < 10; i++) {
			this.planYearArr.push([2024 + i, 2024 + i])
		}
	}

	this.initWeekArr = function() {
		this.weekArr = [];
		for (var i = 1; i < 53; i++) {
			this.weekArr.push([i, i])
		}
	}

	this.initPlanDateStore = function() {
		this.planDateStore = new Ext.data.JsonStore({
			// url :
			// 'com.keensen.ump.produce.component.neworder.queryPlanDate.biz.ext',
			url : 'com.keensen.ump.produce.component.neworder.queryPlanWeekDays.biz.ext',
			root : 'data',
			autoLoad : false,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'planDate'
					}, {
						name : 'amount'
					}, {
						name : 'selected'
					}, {
						name : 'useAmount'
					}, {
						name : 'needAmount'
					}]
		})
	}

	this.initMpStore = function() {
		this.mpStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.produce.component.select.selectMp.biz.ext',
					root : 'data',
					autoLoad : false,
					totalProperty : '',
					baseParams : {},
					fields : [{
								name : 'tumoBatchNo'
							}, {
								name : 'length'
							}, {
								name : 'storageName'
							}, {
								name : 'storagePosition'
							}]
				})
	}

	this.initMpStore2 = function() {
		this.mpStore2 = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.neworder.queryPlanStock.biz.ext',
			root : 'data',
			autoLoad : false,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'tumoBatchNo'
					}, {
						name : 'length'
					}, {
						name : 'storageName'
					}, {
						name : 'storagePosition'
					}]
		})

	}
	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【周生产主计划查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
								// anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								// anchor : '75%',
								fieldLabel : '卷膜执行型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}, {
								xtype : 'combobox',
								fieldLabel : '计划年度',
								ref : '../planYear',
								hiddenName : 'condition/planYear',
								emptyText : '--请选择--',
								editable : false,
								// anchor : '75%',
								store : this.planYearArr,
								value : new Date().getFullYear(),
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.planYear.reset();
									}
								}
							}/*
								 * , { xtype : 'combobox', fieldLabel : '计划制定周',
								 * hiddenName : 'condition/planWeek', ref :
								 * '../planWeek', emptyText : '--请选择--',
								 * editable : false, anchor : '75%', store :
								 * this.weekArr, listeners : { scope : this,
								 * 'expand' : function(A) {
								 * this.queryPanel.planWeek.reset(); } } }
								 */]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					rescode : '10003669',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel = this.listPanel || new Ext.fn.ListPanel({
			// title : '【周生产主计划列表】',
			// region : 'center',
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '延长计划日期',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onAddPlanWeekDays
					}, '-', {
						text : '计划日排产',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlanWeekDetail
					}, '-', {
						text : '日锁定计划',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEditPlanDay
					}, '-', {
						text : '滚动计划',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEditPlanRoll
					}, '->', {
						text : '删除',
						scope : this,
						hidden : uid != 'KS00307' && uid != 'KS00524'
								&& uid != 'dafu',
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			hsPage : true,
			autoScroll : true,
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.neworder.deletePlanWeek.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderDate',
						header : '订单日期'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'planYear',
						header : '计划制定年度'
					}/*
						 * , { dataIndex : 'planWeek', header : '计划制定周' }
						 */, {
						dataIndex : 'startDate',
						header : '开始日期'
					}, {
						dataIndex : 'endDate',
						header : '结束日期'
					}, {
						dataIndex : 'arrangeAmount',
						header : '已排产数量'
					}/*
						 * , { dataIndex : 'bm', header : '编码' }, { dataIndex :
						 * 'performance', header : '产品性能' }
						 */, {
						dataIndex : 'materSpecName',
						header : '卷膜执行型号'
					}, {
						dataIndex : 'dryWet',
						header : '干/湿膜'
					}, {
						dataIndex : 'xsc',
						header : '需生产数量'
					}, {
						dataIndex : 'bq',
						header : '标签'
					}, {
						dataIndex : 'enterDate',
						header : '入库日期'
					}, {
						dataIndex : 'jmAmount',
						header : '卷膜数量'
					}, {
						dataIndex : 'waitAmount',
						header : '待排产数量'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}, {
						dataIndex : 'orderId',
						header : '生产订单ID'
					}, {
						dataIndex : 'baseId',
						header : '营销订单ID'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryPlanWeek.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : '',
				baseParams : {
					'condition/planYear' : new Date().getFullYear()
				},
				fields : [{
							name : 'bm'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'dryWet'
						}, {
							name : 'orderAmount'
						}, {
							name : 'xsc'
						}, {
							name : 'bq'
						}, {
							name : 'performance'
						}, {
							name : 'orderDate'
						}, {
							name : 'relationId'
						}, {
							name : 'planYear'
						}, {
							name : 'planWeek'
						}, {
							name : 'enterDate'
						}, {
							name : 'amount'
						}, {
							name : 'jmAmount'
						}, {
							name : 'enterAmount'
						}, {
							name : 'waitAmount'
						}, {
							name : 'remark'
						}, {
							name : 'startDate'
						}, {
							name : 'endDate'
						}, {
							name : 'id'
						}, {
							name : 'cnt'
						}, {
							name : 'arrangeAmount'
						}, {
							name : 'numPerWad'
						}, {
							name : 'blankingSize'
						}, {
							name : 'denseNet'
						}, {
							name : 'area'
						}, {
							name : 'pageWidth'
						}, {
							name : 'orderId'
						}, {
							name : 'baseId'
						}]
			})
		})
	}

	this.initEditPlanWeekWindow = function() {
		var _this = this;
		this.editPlanWeekWindow = this.editPlanWeekWindow
				|| new Ext.fn.FormWindow({
					title : '修改生产主计划',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel2,
						successFn : function(i, r) {
							if (r.err != '0') {
								Ext.Msg.show({
											width : 400,
											title : "操作提示",
											msg : r.msg,
											icon : Ext.Msg.WARNING,
											buttons : Ext.Msg.OK,
											fn : function() {

											}
										})
							} else {
								var vals = _this.queryPanel.form.getValues();
								_this.queryPanel.fireEvent('query',
										_this.queryPanel.form, vals);
								_this.editPlanWeekWindow.items.items[0].form
										.reset();
								_this.editPlanWeekWindow.hide();
							}
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek2.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanWeek.biz.ext',
						fields : [{
									xtype : 'displayfield',
									fieldLabel : '<p style="color:red;">制定计划</p>',
									labelSeparator : '',// 去掉冒号
									colspan : 2
								}, {
									xtype : 'combobox',
									fieldLabel : '计划年度',
									ref : '../../planYear',
									hiddenName : 'entity/planYear',
									dataIndex : 'planYear',
									emptyText : '--请选择--',
									allowBlank : false,
									editable : false,
									anchor : '85%',
									store : this.planYearArr,
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editPlanWeekWindow.planYear
													.reset();
										}
									}
								}/*
									 * , { xtype : 'combobox', fieldLabel :
									 * '计划制定周', hiddenName : 'entity/planWeek',
									 * ref : '../../planWeek', emptyText :
									 * '--请选择--', allowBlank : false, editable :
									 * false, anchor : '85%', store :
									 * this.weekArr, dataIndex : 'planWeek',
									 * listeners : { scope : this, 'expand' :
									 * function(A) {
									 * this.editPlanWeekWindow.planWeek
									 * .reset(); } } }
									 */, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'datefield',
									name : 'entity/startDate',
									ref : '../../startDate',
									fieldLabel : '计划开始时间',
									dataIndex : 'startDate',
									allowBlank : false,
									readOnly : true,
									anchor : '85%',
									format : "Y-m-d",
									colspan : 1
								}, {
									xtype : 'datefield',
									name : 'entity/endDate',
									ref : '../../endDate',
									dataIndex : 'endDate',
									fieldLabel : '计划结束时间',
									allowBlank : false,
									readOnly : true,
									anchor : '85%',
									format : "Y-m-d",
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'datefield',
									name : 'entity/enterDate',
									dataIndex : 'enterDate',
									fieldLabel : '入库日期',
									allowBlank : false,
									anchor : '85%',
									format : "Y-m-d",
									colspan : 1
								}, {
									xtype : 'displayfield',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/jmAmount',
									dataIndex : 'jmAmount',
									fieldLabel : '卷膜数量',
									allowBlank : false,
									anchor : '85%',
									minValue : 0,
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/waitAmount',
									dataIndex : 'waitAmount',
									fieldLabel : '待排产数量',
									allowBlank : false,
									anchor : '85%',
									minValue : 0,
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/remark',
									dataIndex : 'remark',
									xtype : 'textarea',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '87%',
									allowBlank : true
								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
								}, {
									name : 'entity/relationId',
									xtype : 'hidden',
									dataIndex : 'relationId'
								}]
					}]
				});
	}

	this.initEditPlanDayWindow = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.editPlanDayListPanel = this.editPlanDayListPanel
				|| new Ext.fn.ListPanel({
					// title : '【日计划】',
					height : 400,
					sm : selModel,
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					listeners : {
						scope : this,
						'rowdblclick' : function(o, rowIndex, e) {
							var store = o.store;
							var rec = store.getAt(rowIndex);
							_this.onEditPlan();

						}
					},
					// autoExpandColumn : '3',
					hsPage : false,
					autoScroll : true,
					delUrl : 'com.keensen.ump.produce.component.neworder.deletePlanDay.biz.ext',
					tbar : [{
								xtype : 'button',
								text : "新增",
								iconCls : 'icon-application_add',
								scope : this,
								handler : this.onAddPlan
							}, '-', {
								text : '修改',
								hidden : true,
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEditPlan
							}, '->', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelPlan
							}],
					columns : [selModel, {
								dataIndex : 'planDate',
								header : '日期'
							}, {
								dataIndex : 'jmAmount',
								header : '卷膜数量'
							}, {
								dataIndex : 'batchNo',
								width : 150,
								header : '膜片批次'
							}, {
								dataIndex : 'meterAmount',
								header : '米数'
							}, {
								dataIndex : 'storageName',
								header : '仓库'
							}, {
								dataIndex : 'storagePosition',
								header : '库位'
							}/*
								 * , { dataIndex : 'problem', header : '存在问题' }, {
								 * dataIndex : 'productOrder', header : '生产顺序' }
								 */, {
								dataIndex : 'ifMix',
								header : '是否混卷'
							}, {
								dataIndex : 'mpRemark',
								header : '膜片备注'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.neworder.queryPlanDay.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'id'
								}, {
									name : 'ifMix'
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
									name : 'relationId'
								}, {
									name : 'orderId'
								}, {
									name : 'planDate'
								}, {
									name : 'jmAmount'
								}, {
									name : 'batchNo'
								}, {
									name : 'meterAmount'
								}, {
									name : 'position'
								}, {
									name : 'mpRemark'
								}, {
									name : 'problem'
								}, {
									name : 'productOrder'
								}, {
									name : 'orderNo'
								}, {
									name : 'materSpecName'
								}, {
									name : 'materSpecId'
								}, {
									name : 'orderAmount'
								}, {
									name : 'xsc'
								}, {
									name : 'orderDate'
								}, {
									name : 'weekRemark'
								}, {
									name : 'planYear'
								}, {
									name : 'planWeek'
								}, {
									name : 'enterDate'
								}, {
									name : 'storageName'
								}, {
									name : 'storagePosition'
								}

						]
					})
				})

		this.editPlanDayPanel = this.editPlanDayPanel || new Ext.fn.EditPanel({
			height : 180,
			region : 'north',
			baseCls : "x-plain",
			pgrid : this.listPanel,
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 2,
			loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek2.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单号',
						ref : '../orderNo',
						dataIndex : 'orderNo',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '卷膜执行型号',
						ref : '../materSpecName',
						dataIndex : 'materSpecName',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '脱盐率(%)',
						ref : '../saltLow',
						dataIndex : 'saltLow',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '产水量范围(GPD)',
						ref : '../gpdLow',
						dataIndex : 'gpdLow',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">计划信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '计划年度',
						ref : '../planYear',
						dataIndex : 'planYear',
						anchor : '85%',
						colspan : 1
					}/*
						 * , { xtype : 'displayfield', fieldLabel : '计划制定周', ref :
						 * '../planWeek', dataIndex : 'planWeek', anchor :
						 * '85%', colspan : 1 }
						 */, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '入库日期',
						ref : '../enterDate',
						dataIndex : 'enterDate',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '计划备注',
						ref : '../weekRemark',
						dataIndex : 'weekRemark',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'hidden',
						ref : '../relationId',
						dataIndex : 'id'
					}, {
						xtype : 'hidden',
						ref : '../orderId',
						dataIndex : 'orderId'
					}, {
						xtype : 'hidden',
						ref : '../startDate',
						dataIndex : 'startDate'
					}, {
						xtype : 'hidden',
						ref : '../endDate',
						dataIndex : 'endDate'
					}, {
						xtype : 'hidden',
						ref : '../materSpecId',
						dataIndex : 'materSpecId'
					}, {
						xtype : 'hidden',
						ref : '../numPerWad',
						dataIndex : 'numPerWad'
					}, {
						xtype : 'hidden',
						ref : '../pageWidth',
						dataIndex : 'pageWidth'
					}, {
						xtype : 'hidden',
						ref : '../blankingSize',
						dataIndex : 'blankingSize'
					}, {
						xtype : 'hidden',
						ref : '../denseNet',
						dataIndex : 'denseNet'
					}, {
						xtype : 'hidden',
						ref : '../area',
						dataIndex : 'area'
					}, {
						xtype : 'hidden',
						ref : '../mpWidth',
						dataIndex : 'mpWidth'
					}, {
						xtype : 'hidden',
						ref : '../mp',
						dataIndex : 'mp'
					}]

		})

		this.editPlanDayWindow = this.editPlanDayWindow || new Ext.Window({
					title : '日锁定计划',
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
					items : [this.editPlanDayPanel, this.editPlanDayListPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.editPlanDayPanel.form.reset();
									this.editPlanDayWindow.hide();
								}
							}]

				});
	}

	// 新增日锁定计划
	this.initAddPlanDayWindow = function() {
		var _this = this;

		this.ifMixStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		var mpSpecFieldId = Ext.id();
		var mpSpecFieldHiddenId = Ext.id();

		var addSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.addPlanDayListPanel = this.addPlanDayListPanel
				|| new Ext.fn.EditListPanel({
					height : 400,
					sm : addSelModel,
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					clicksToEdit : 1,
					listeners : {
						scope : this,
						'rowdblclick' : function(o, rowIndex, e) {

						}
					},
					// autoExpandColumn : '3',
					hsPage : false,
					autoScroll : true,
					delUrl : '1.biz.ext',
					tbar : [{
								xtype : 'trigger',
								width : 250,
								emptyText : '选择膜片型号',
								ref : '../mpSpecName',
								allowBlank : false,
								editable : false,
								fieldLabel : '膜片型号',
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									_this.onChooseMpSpec();
								}
							}, {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'trigger',
								width : 250,
								emptyText : '选择仓库',
								ref : '../storage',
								allowBlank : false,
								editable : false,
								fieldLabel : '选择仓库',
								hideTrigger : false,
								scope : this,
								onTriggerClick : function() {
									_this.onChooseStorage();
								}
							}, {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;换算系数'
							}, {
								xtype : 'numberfield',
								width : 50,
								fieldLabel : '换算系数',
								value : 1,
								ref : '../factor'
							}, {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;'
							}, {
								text : '<font color=red>计算</font>',
								iconCls : 'icon-application_edit',
								width : 30,
								scope : this,
								handler : this.onCalc
							}, '->', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelChoose
							}, {
								xtype : 'hidden',
								ref : '../mpSpecId'
							}, {
								xtype : 'hidden',
								ref : '../storageId'
							}],
					columns : [addSelModel, {
								dataIndex : 'batchNo',

								header : '膜片批次'
							}, {
								dataIndex : 'meterAmount',
								header : '米数'
							}, {
								dataIndex : 'storageName',
								header : '仓库'
							}, {
								dataIndex : 'storagePosition',
								header : '库位'
							}, {
								dataIndex : 'ifMix',
								header : '是否混卷',
								css : 'background:#c7c7a7;',
								editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
										{
											allowBlank : false,
											mode : 'local',
											emptyText : '--请选择--',
											editable : false,
											store : _this.ifMixStore,
											displayField : "name",
											valueField : "code",
											scope : this,
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}))
							}, {
								dataIndex : 'mpRemark',
								width : 250,
								header : '膜片备注',
								css : 'background:#c7c7b7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : false,
											scope : this,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))
							}],
					store : new Ext.data.JsonStore({
								url : '1.biz.ext',
								root : 'data',
								autoLoad : false,
								totalProperty : '',
								baseParams : {

					}			,
								fields : [{
											name : 'batchNo'
										}, {
											name : 'meterAmount'
										}, {
											name : 'position'
										}, {
											name : 'mpRemark'
										}, {
											name : 'ifMix'
										}, {
											name : 'storageName'
										}, {
											name : 'storagePosition'
										}, {
											name : 'mpMinSaltRejection'
										}, {
											name : 'yjGpdLowLimit2'
										}

								]
							})
				})

		this.addPlanDayPanel = this.addPlanDayPanel || new Ext.fn.InputPanel({
			height : 220,
			region : 'north',
			baseCls : "x-plain",
			// pgrid : this.listPanel,
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 6,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						fieldLabel : '订单号',
						ref : '../../orderNo',
						readOnly : true,
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'textfield',
						fieldLabel : '卷膜执行型号',
						ref : '../../materSpecName',
						readOnly : true,
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'textfield',
						fieldLabel : '页数',
						ref : '../../numPerWad',
						readOnly : true,
						anchor : '85%',
						colspan : 2
					}, {
						xtype : 'textfield',
						fieldLabel : '膜页尺寸',
						ref : '../../blankingSize',
						readOnly : true,
						anchor : '85%',
						colspan : 2
					}, {
						xtype : 'textfield',
						fieldLabel : '页宽',
						ref : '../../pageWidth',
						readOnly : true,
						anchor : '85%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'textfield',
						fieldLabel : '浓网',
						ref : '../../denseNet',
						readOnly : true,
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'textfield',
						fieldLabel : '面积',
						ref : '../../area',
						readOnly : true,
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'textfield',
						fieldLabel : '脱盐率(%)',
						ref : '../../saltLow',
						readOnly : true,
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'textfield',
						fieldLabel : '产水量范围(GPD)',
						ref : '../../gpdLow',
						readOnly : true,
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'combobox',
						fieldLabel : '计划日期',
						ref : '../../planDate',
						hiddenName : 'entity/planDate',
						allowBlank : false,
						anchor : '85%',
						colspan : 3,
						emptyText : '--请选择--',
						editable : false,
						store : this.planDateStore,
						mode : "local",
						displayField : "planDate",
						valueField : "planDate",
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.planDayWindow.planDate.reset();
								this.planDayWindow.jmAmount.setValue('');
							},
							'select' : function(combo, record, index) {
								if (index > -1) {
									this.planDayWindow.needAmount
											.setValue(record.get('needAmount'));
									this.planDayWindow.jmAmount.setValue(record
											.get('amount'));
									var numPerWad = this.planDayWindow.numPerWad
											.getValue();
									var blankingSize = this.planDayWindow.blankingSize
											.getValue();
									var pageWidth = this.planDayWindow.pageWidth
											.getValue();
									// pageWidth = parseFloat(pageWidth) ==
									// 1.048? 1:pageWidth;
									var jmAmount = record.get('amount');
									var useAmount = numPerWad * blankingSize
											* jmAmount * pageWidth;
									this.planDayWindow.useAmount
											.setValue(useAmount.toFixed(1));
								} else {
									this.planDayWindow.jmAmount.setValue('');
									this.planDayWindow.useAmount.setValue('');
								}
							}
						}

					}, {
						xtype : 'numberfield',
						fieldLabel : '需挑选膜片数量',
						// allowBlank : false,
						readOnly : true,
						ref : '../../needAmount',
						anchor : '85%',
						// minValue : 1,
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'numberfield',
						fieldLabel : '卷膜数量',
						// allowBlank : false,
						readOnly : true,
						ref : '../../jmAmount',
						name : 'entity/jmAmount',
						anchor : '85%',
						minValue : 1,
						colspan : 3
					}, {
						xtype : 'numberfield',
						fieldLabel : '膜片用量',
						// allowBlank : false,
						readOnly : true,
						ref : '../../useAmount',
						anchor : '85%',
						minValue : 1,
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'textfield',
						fieldLabel : '指定膜片',
						ref : '../../mp',
						readOnly : true,
						anchor : '85%',
						colspan : 3
					}, {
						name : 'entity/relationId',
						xtype : 'hidden',
						ref : '../../relationId'
					}, {
						name : 'entity/orderId',
						xtype : 'hidden',
						ref : '../../orderId'
					}]

		})

		this.planDayWindow = this.planDayWindow || new Ext.Window({
					title : '新增日计划',
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
					items : [this.addPlanDayPanel, this.addPlanDayListPanel],
					buttons : [{
								text : "录入新增",
								scope : this,
								iconCls : 'icon-application_add',
								handler : function() {
									this.onInputAdd();
								}
							}, {
								text : "保存",
								scope : this,
								handler : function() {
									this.onSaveAdd();
								}
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.addPlanDayPanel.form.reset();
									this.planDayWindow.hide();
								}
							}]
				});

	}

	// 修改日锁定计划
	this.initPlanDayWindow2 = function() {
		var _this = this;
		this.planDayWindow2 = this.planDayWindow2 || new Ext.fn.FormWindow({
			title : '修改日计划',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.editPlanDayListPanel,
				columns : 6,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanDay.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanDay.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							readOnly : true,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '卷膜执行型号',
							ref : '../../materSpecName',
							readOnly : true,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '页数',
							ref : '../../numPerWad',
							readOnly : true,
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '膜页尺寸',
							ref : '../../blankingSize',
							readOnly : true,
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '页宽',
							ref : '../../pageWidth',
							readOnly : true,
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '浓网',
							ref : '../../denseNet',
							readOnly : true,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '面积',
							ref : '../../area',
							readOnly : true,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'combobox',
							fieldLabel : '计划日期',
							ref : '../../planDate',
							hiddenName : 'entity/planDate',
							dataIndex : 'planDate',
							allowBlank : false,
							anchor : '85%',
							colspan : 3,
							emptyText : '--请选择--',
							editable : false,
							store : this.planDateStore,
							mode : "local",
							displayField : "planDate",
							valueField : "planDate",

							// 增量查询
							typeAhead : true,
							lazyRender : true,
							minChars : 1,
							queryDelay : 200,// 查询延时，毫秒,
							editable : true,

							listeners : {
								scope : this,
								'expand' : function(A) {
									this.planDayWindow2.planDate.reset();
									this.planDayWindow2.jmAmount.setValue('');

								},
								'select' : function(combo, record, index) {
									if (index > -1) {
										this.planDayWindow2.jmAmount
												.setValue(record.get('amount'));
										var numPerWad = this.planDayWindow2.numPerWad
												.getValue();
										var blankingSize = this.planDayWindow2.blankingSize
												.getValue();
										var pageWidth = this.planDayWindow2.pageWidth
												.getValue();
										var jmAmount = record.get('amount');
										var useAmount = numPerWad
												* blankingSize * jmAmount
												* pageWidth;
										this.planDayWindow2.useAmount
												.setValue(useAmount.toFixed(1));

									} else {
										this.planDayWindow2.jmAmount
												.setValue('');
										this.planDayWindow2.useAmount
												.setValue('');
									}
								},
								'focus' : {
									fn : function(e) {
										e.expand();
										this.planDayWindow2.planDate
												.doQuery(
														this.planDayWindow2.planDate.allQuery,
														true);
									},
									buffer : 200
								},
								'beforequery' : function(e) {
									var combo = this.planDayWindow2.planDate, size = 15, idx = 1;

									if (e.query === '' || e.query == null) {// 当输入框删除内容后，清除过滤器，
										// 显示原本store数据,使其能够再次检索
										combo.store.clearFilter();
										combo.expand();

									} else {
										if (!e.forceAll) {

											combo.store.clearFilter();// 使每次输入都能进行检索，不用担心输入过慢
											var input = e.query;
											// 检索的正则
											var regExp = new RegExp(".*"
													+ input.toUpperCase()
													+ ".*");
											// 执行检索
											combo.store.filterBy(function(
													record, id) {
												if (idx > size) {
													return false;
												}
												var text = record
														.get(combo.displayField);
												var flag = regExp.test(text);
												if (flag) {
													idx++;
												}
												return flag;
											});
											combo.expand();
											return false;
										}
									}
								}

							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '卷膜数量',
							// allowBlank : false,
							readOnly : true,
							ref : '../../jmAmount',
							dataIndex : 'jmAmount',
							name : 'entity/jmAmount',
							anchor : '85%',
							minValue : 1,
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '膜片用量',
							// allowBlank : false,
							// readOnly : true,
							ref : '../../useAmount',
							anchor : '85%',
							minValue : 1,
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'combobox',
							triggerAction : "all",
							mode : "local",
							forceSelection : true,
							fieldLabel : '线边仓膜片',
							ref : '../../batchNoFrom',
							anchor : '85%',
							colspan : 3,
							emptyText : '--请选择--',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							store : this.mpStore2,
							// mode : "local",
							displayField : "tumoBatchNo",
							valueField : "tumoBatchNo",
							listeners : {
								scope : this,
								'specialkey' : function() {
									return false;
								},
								'expand' : function(A) {
									this.planDayWindow2.batchNoFrom.reset();
									this.planDayWindow2.batchNo.setValue('');
									this.planDayWindow2.meterAmount
											.setValue('');
									this.planDayWindow2.storageName
											.setValue('');
									this.planDayWindow2.storagePosition
											.setValue('');
								},
								'select' : function(combo, record, index) {
									if (index > -1) {
										this.planDayWindow2.batchNoFrom2
												.reset();
										this.planDayWindow2.meterAmount
												.setValue(record.get('length'));
										this.planDayWindow2.batchNo
												.setValue(record
														.get('tumoBatchNo'));
										this.planDayWindow2.storageName
												.setValue(record
														.get('storageName'));
										this.planDayWindow2.storagePosition
												.setValue(record
														.get('storagePosition'));
									} else {
										this.planDayWindow2.meterAmount
												.setValue('');
										this.planDayWindow2.batchNo
												.setValue('');
										this.planDayWindow2.storageName
												.setValue('');
										this.planDayWindow2.storagePosition
												.setValue('');
									}
								}
							}

						}, {
							xtype : 'combobox',
							triggerAction : "all",
							mode : "local",
							forceSelection : true,
							fieldLabel : 'AB/C仓膜片',
							ref : '../../batchNoFrom2',
							anchor : '85%',
							colspan : 3,
							emptyText : '--请选择--',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							store : this.mpStore,
							// mode : "local",
							displayField : "tumoBatchNo",
							valueField : "tumoBatchNo",
							listeners : {
								scope : this,
								'specialkey' : function() {
									return false;
								},
								'expand' : function(A) {
									this.planDayWindow2.batchNoFrom2.reset();
									this.planDayWindow2.meterAmount
											.setValue('');
									this.planDayWindow2.batchNo.setValue('');
									this.planDayWindow2.storageName
											.setValue('');
									this.planDayWindow2.storagePosition
											.setValue('');
								},
								'select' : function(combo, record, index) {
									if (index > -1) {
										this.planDayWindow2.batchNoFrom.reset();
										this.planDayWindow2.meterAmount
												.setValue(record.get('length'));
										this.planDayWindow2.batchNo
												.setValue(record
														.get('tumoBatchNo'));
										this.planDayWindow2.storageName
												.setValue(record
														.get('storageName'));
										this.planDayWindow2.storagePosition
												.setValue(record
														.get('storagePosition'));
									} else {
										this.planDayWindow2.meterAmount
												.setValue('');
										this.planDayWindow2.batchNo
												.setValue('');
										this.planDayWindow2.storageName
												.setValue('');
										this.planDayWindow2.storagePosition
												.setValue('');
									}
								}
							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '膜片批次',
							allowBlank : false,
							// readOnly : true,
							ref : '../../batchNo',
							dataIndex : 'batchNo',
							name : 'entity/batchNo',
							readOnly : true,
							minValue : 1,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '米数',
							ref : '../../meterAmount',
							dataIndex : 'meterAmount',
							name : 'entity/meterAmount',
							minValue : 1,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'componentworkercombobox',
							ref : '../../cmWorker',
							name : 'entity/cmWorker',
							hiddenName : 'entity/cmWorker',
							dataIndex : 'cmWorker',
							valueField : "name",
							displayField : "name",
							anchor : '85%',
							fieldLabel : '裁膜人员',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'combobox',
							anchor : '85%',
							colspan : 3,
							allowBlank : false,
							ref : '../../storageName',
							name : 'entity/storageName',
							dataIndex : 'storageName',
							hiddenName : 'entity/storageName',
							fieldLabel : '仓库',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										fields : ['mykey', 'myvalue'],
										data : [['膜片AB仓', '膜片AB仓'],
												['膜片C仓', '膜片C仓']]
									}),
							mode : "local",
							editable : true,
							displayField : "myvalue",
							valueField : "mykey",
							// forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'textfield',
							fieldLabel : '库位',
							dataIndex : 'storagePosition',
							ref : '../../storagePosition',
							name : 'entity/storagePosition',
							minValue : 1,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textarea',
							fieldLabel : '膜片备注',
							ref : '../../mpRemark',
							dataIndex : 'mpRemark',
							name : 'entity/mpRemark',
							anchor : '85%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textarea',
							fieldLabel : '存在问题',
							ref : '../../problem',
							dataIndex : 'problem',
							name : 'entity/problem',
							anchor : '85%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">混卷信息</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '混卷膜片批次',
							// allowBlank : false,
							// readOnly : true,
							ref : '../../mixBatchNo',
							dataIndex : 'mixBatchNo',
							name : 'entity/mixBatchNo',
							// readOnly : true,
							minValue : 1,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '混卷比例',
							// allowBlank : false,
							// readOnly : true,
							ref : '../../mixProportion',
							dataIndex : 'mixProportion',
							name : 'entity/mixProportion',
							// readOnly : true,
							minValue : 1,
							anchor : '85%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}/*
							 * , { xtype : 'numberfield', fieldLabel : '生产顺序',
							 * ref : '../../productOrder', dataIndex :
							 * 'productOrder', name : 'entity/productOrder',
							 * anchor : '85%', colspan : 1 }
							 */, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initEditPlanRollWindow = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.editPlanRollListPanel = this.editPlanRollListPanel
				|| new Ext.fn.ListPanel({
					// title : '【滚动计划】',
					height : 400,
					sm : selModel,
					// region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					autoScroll : true,
					delUrl : 'com.keensen.ump.produce.component.neworder.deletePlanRoll.biz.ext',
					tbar : [{
								xtype : 'button',
								text : "新增",
								iconCls : 'icon-application_add',
								scope : this,
								handler : this.onAddPlanRoll
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onModifyPlanRoll
							}, '->', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelPlanRoll
							}],
					columns : [selModel, {
								dataIndex : 'workDate',
								header : '作业日期'
							}, {
								dataIndex : 'jmAmount',
								header : '计划卷膜数量'
							}, {
								dataIndex : 'batchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'meterAmount',
								header : '米数'
							}, {
								dataIndex : 'position',
								header : '仓位'
							}, {
								xtype : 'dictcolumn',
								dataIndex : 'risk',
								header : '风险评估',
								dictData : KS_COMPONENT_PLAN_RISK
							}, {
								dataIndex : 'problem',
								header : '存在问题'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.neworder.queryPlanRoll.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
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
									name : 'relationId'
								}, {
									name : 'orderId'
								}, {
									name : 'jmAmount'
								}, {
									name : 'workDate'
								}, {
									name : 'risk'
								}, {
									name : 'problem'
								}, {
									name : 'orderNo'
								}, {
									name : 'materSpecName'
								}, {
									name : 'orderAmount'
								}, {
									name : 'xsc'
								}, {
									name : 'orderDate'
								}, {
									name : 'weekRemark'
								}, {
									name : 'planYear'
								}, {
									name : 'planWeek'
								}, {
									name : 'enterDate'
								}, {
									name : 'batchNo'
								}, {
									name : 'meterAmount'
								}, {
									name : 'position'
								}]
					})
				})

		this.editPlanRollPanel = this.editPlanRollPanel
				|| new Ext.fn.EditPanel({
					height : 150,
					// region : 'north',
					baseCls : "x-plain",
					pgrid : this.listPanel,
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 2,
					loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek2.biz.ext',
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">订单信息</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '订单号',
								ref : '../orderNo',
								dataIndex : 'orderNo',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								fieldLabel : '卷膜执行型号',
								ref : '../materSpecName',
								dataIndex : 'materSpecName',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">计划信息</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '计划年度',
								ref : '../planYear',
								dataIndex : 'planYear',
								anchor : '85%',
								colspan : 1
							}/*
								 * , { xtype : 'displayfield', fieldLabel :
								 * '计划制定周', ref : '../planWeek', dataIndex :
								 * 'planWeek', anchor : '85%', colspan : 1 }
								 */, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '入库日期',
								ref : '../enterDate',
								dataIndex : 'enterDate',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								fieldLabel : '计划备注',
								ref : '../weekRemark',
								dataIndex : 'weekRemark',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								dataIndex : 'id'
							}, {
								xtype : 'hidden',
								ref : '../orderId',
								dataIndex : 'orderId'
							}, {
								xtype : 'hidden',
								ref : '../startDate',
								dataIndex : 'startDate'
							}, {
								xtype : 'hidden',
								ref : '../endDate',
								dataIndex : 'endDate'
							}]

				})

		this.editPlanRollWindow = this.editPlanRollWindow || new Ext.Window({
					title : '滚动计划',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'form',
					items : [this.editPlanRollPanel, this.editPlanRollListPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.editPlanRollPanel.form.reset();
									this.editPlanRollWindow.hide();
								}
							}]

				});
	}

	this.initAddPlanRollWindow = function() {
		var _this = this;
		this.planRollWindow = this.planRollWindow || new Ext.fn.FormWindow({
			title : '新增滚动计划',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				// pgrid : this.listPanel,
				successFn : function(i, r) {
					var B = _this.listPanel.getSelectionModel().getSelections();
					var A = B[0];
					_this.editPlanRollListPanel.store.load({
								params : {
									'condition/relationId' : A.data.id
								}
							});
					_this.planRollWindow.items.items[0].form.reset();
					_this.planRollWindow.hide();

				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanRoll.biz.ext',
				fields : [{
							xtype : 'datefield',
							fieldLabel : '作业日期',
							ref : '../../workDate',
							name : 'entity/workDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '计划卷膜数量',
							allowBlank : false,
							ref : '../../jmAmount',
							name : 'entity/jmAmount',
							anchor : '75%',
							minValue : 1,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '膜片批次',
							ref : '../../batchNo',
							anchor : '75%',
							dataIndex : 'batchNo',
							name : 'entity/batchNo',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '米数',
							anchor : '75%',
							ref : '../../meterAmount',
							dataIndex : 'meterAmount',
							name : 'entity/meterAmount',
							minValue : 1,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '仓位',
							anchor : '75%',
							ref : '../../position',
							dataIndex : 'position',
							name : 'entity/position',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'dictcheckboxgroup',
							ref : '../../myCheckboxGroup',
							allowBlank : false,
							fieldLabel : '风险评估',
							anchor : '100%',
							dictData : KS_COMPONENT_PLAN_RISK,
							colspan : 2
						}, {
							xtype : 'hidden',
							ref : '../../risk',
							name : 'entity/risk'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '存在问题',
							ref : '../../problem',
							name : 'entity/problem',
							anchor : '85%',
							colspan : 2
						}, {
							name : 'entity/relationId',
							xtype : 'hidden',
							ref : '../../relationId'
						}, {
							name : 'entity/orderId',
							xtype : 'hidden',
							ref : '../../orderId'
						}]
			}]
		});
	}

	this.initPlanRollWindow2 = function() {
		var _this = this;
		this.planRollWindow2 = this.planRollWindow2 || new Ext.fn.FormWindow({
			title : '修改滚动计划',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.editPlanRollListPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanRoll.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanRoll.biz.ext',
				fields : [{
							xtype : 'datefield',
							fieldLabel : '作业日期',
							ref : '../../workDate',
							dataIndex : 'workDate',
							name : 'entity/workDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '计划卷膜数量',
							allowBlank : false,
							ref : '../../jmAmount',
							name : 'entity/jmAmount',
							dataIndex : 'jmAmount',
							anchor : '75%',
							minValue : 1,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '膜片批次',
							ref : '../../batchNo',
							anchor : '75%',
							dataIndex : 'batchNo',
							name : 'entity/batchNo',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '米数',
							anchor : '75%',
							ref : '../../meterAmount',
							dataIndex : 'meterAmount',
							name : 'entity/meterAmount',
							minValue : 1,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '仓位',
							anchor : '75%',
							ref : '../../position',
							dataIndex : 'position',
							name : 'entity/position',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'dictcheckboxgroup',
							dataIndex : 'risk',
							ref : '../../myCheckboxGroup',
							fieldLabel : '风险评估',
							anchor : '100%',
							dictData : KS_COMPONENT_PLAN_RISK,
							colspan : 2
						}, {
							xtype : 'hidden',
							ref : '../../risk',
							name : 'entity/risk'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '存在问题',
							ref : '../../problem',
							name : 'entity/problem',
							dataIndex : 'problem',
							anchor : '85%',
							colspan : 2
						}, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initPlanWeekDaysWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.EditListPanel({
			// title : '【周计划】',
			region : 'center',
			viewConfig : {
				forceFit : true
			},

			tbar : ['->', {
						xtype : 'displayfield',
						value : '默认数量:'
					}, {
						xtype : 'numberfield',
						width : 100,
						id : defaultValueId
					}, '-', {
						text : '设置',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.setDefaultValue
					}],
			hsPage : false,
			autoScroll : true,
			clicksToEdit : 1,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						header : '卷膜执行型号'
					}, {
						dataIndex : 'planDate',
						header : '计划日期'
					}, {
						dataIndex : 'weekdayname',
						header : '星期'
					}, {
						dataIndex : 'amount',
						header : '排产数量',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									allowNegative : true,
									decimalPrecision : 2,
									minValue : 0,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))

					}, {

						dataIndex : 'productOrder',
						header : '生产顺序',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									allowNegative : false,
									decimalPrecision : 0,
									minValue : 1,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))

					}, {
						dataIndex : 'orderRemark',
						header : '订单备注',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : true,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))

					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryPlanWeekDays.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
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
							name : 'relationId'
						}, {
							name : 'orderId'
						}, {
							name : 'planDate'
						}, {
							name : 'amount'
						}, {
							name : 'weekday'
						}, {
							name : 'weekdayname'
						}, {
							name : 'id'
						}, {
							name : 'productOrder'
						}, {
							name : 'orderRemark'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}]
			})
		})

		this.planWeekDaysWindow = this.planWeekDaysWindow || new Ext.Window({
					title : '计划日排产',
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
					items : [this.listPanel3],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveWeekDays
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.planWeekDaysWindow.hide();
								}
							}]

				});

	}

	this.initAddPlanWeekDaysWindow = function() {
		var _this = this;
		this.addPlanWeekDaysWindow = this.addPlanWeekDaysWindow
				|| new Ext.fn.FormWindow({
					title : '延长计划日期',
					height : 300,
					width : 480,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek2.biz.ext.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.addPlanWeekDays.biz.ext',
						fields : [{
									xtype : 'datefield',
									fieldLabel : '原作业结束日期',
									ref : '../../oldEndDate',
									dataIndex : 'endDate',
									format : 'Y-m-d',
									readOnly : true,
									anchor : '75%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'datefield',
									fieldLabel : '新作业结束日期',
									ref : '../../newEndDate',
									dataIndex : 'endDate',
									name : 'entity/endDate',
									format : 'Y-m-d',
									allowBlank : false,
									anchor : '75%',
									colspan : 2
								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
								}]
					}]
				});
	}

	this.initChooseMpSpecWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.chooseMpSpecPanel = this.chooseMpSpecPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					cls : 'custom-row-height', // 应用自定义的CSS类
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseMpSpec
							}],
					hsPage : false,
					autoScroll : true,
					selModel : selModel2,
					columns : [new Ext.grid.RowNumberer(), selModel2, {
								dataIndex : 'name',
								header : '膜片型号'
							}],
					store : new Ext.data.JsonStore({
								url : 'com.keensen.ump.base.base.queryMpspec.biz.ext',
								root : 'data',
								autoLoad : true,
								totalProperty : '',
								baseParams : {

					}			,
								fields : [{
											name : "id"
										}, {
											name : "name"
										}, {
											name : "code"
										}, {
											name : "mpBatchCode"
										}, {
											name : "newBatchCode"
										}]
							})
				})

		this.chooseMpSpecWindow = this.chooseMpSpecWindow || new Ext.Window({
					title : '选择膜片型号',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.chooseMpSpecPanel],
					buttons : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseMpSpec
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.chooseMpSpecWindow.hide();
								}
							}]

				});

	}

	this.initChooseStorageWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.chooseStoragePanel = this.chooseStoragePanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					cls : 'custom-row-height', // 应用自定义的CSS类
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseStorage
							}],
					hsPage : false,
					autoScroll : true,
					selModel : selModel2,
					columns : [new Ext.grid.RowNumberer(), selModel2, {
								dataIndex : 'name',
								header : '仓库名称'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.storage.queryStorage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : "id"
								}, {
									name : "name"
								}]
					})
				})

		this.chooseStorageWindow = this.chooseStorageWindow || new Ext.Window({
					title : '选择仓库',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.chooseStoragePanel],
					buttons : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseStorage
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.chooseStorageWindow.hide();
								}
							}]

				});

	}

	this.initChooseTumoWindow = function() {
		var _this = this;

		var smLock = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : function(g, rowIndex, e) {
						if (e.button !== 0 || this.isLocked()) {
							return;
						}
						var view = this.grid.getView();
						if (e.shiftKey && !this.singleSelect
								&& this.last !== false) {
							var last = this.last;
							this.selectRange(last, rowIndex, e.ctrlKey);
							this.last = last;
							view.focusRow(rowIndex);
						} else {
							var isSelected = this.isSelected(rowIndex);
							if (isSelected) {
								this.deselectRow(rowIndex);
							} else if (!isSelected || this.getCount() > 1) {
								this.selectRow(rowIndex, true);
								view.focusRow(rowIndex);
							}
						}
					},
					isLocked : Ext.emptyFn,
					initEvents : function() {
						Ext.grid.CheckboxSelectionModel.superclass.initEvents
								.call(this);
						this.grid.on('render', function() {
									var view = this.grid.getView();
									view.mainBody.on('mousedown',
											this.onMouseDown, this);
									Ext.fly(view.lockedInnerHd).on('mousedown',
											this.onHdMouseDown, this);
								}, this);
					}
				});
		smLock.sortLock();

		var columns = new Ext.ux.grid.LockingColumnModel([
				new Ext.grid.RowNumberer({
							locked : true,
							width : 30
						}), smLock, {
					dataIndex : 'selected',
					sortable : true,
					locked : true,
					header : '挑选状态'
				}, {
					dataIndex : 'mpSpecCode',
					sortable : true,
					locked : true,
					header : '膜片类型'
				}, {
					dataIndex : 'mpBatchNo',
					sortable : true,
					locked : true,
					header : '膜片批次'
				}, {
					dataIndex : 'storageName',
					sortable : true,
					locked : true,
					header : '仓库名称'
				}, {
					dataIndex : 'storagePosition',
					sortable : true,
					locked : true,
					header : '仓位名称'
				}, {
					dataIndex : 'amount',
					sortable : true,
					locked : true,
					header : '数量'
				}, {
					xtype : 'dictcolumn',
					sortable : true,
					dictData : KS_YESORNO,
					dataIndex : 'isKeep',
					header : '是否保留品'
				}, {
					dataIndex : 'mpPointSaltRejection',
					sortable : true,
					header : '膜片<br>单点脱盐率'
				}, {
					dataIndex : 'mpSaltAvg',
					sortable : true,
					header : '膜片<br>平均脱盐率',
					renderer : function(v, m, r, i) {
						var isUlp = r.get('isUlp');
						if (v == null || v == 'null')
							return '';
						if (isUlp == '0')
							return v;
						var condition1 = r.get('condition1');
						if (condition1 == 'N') {
							return "<span style='color:red'>" + v + "</span>";

						} else {
							return "<span style='color:green'>" + v + "</span>";
						}
					}
				}, {
					dataIndex : 'mpMinSaltRejection',
					sortable : true,
					header : '膜片<br>最低脱盐率',
					renderer : function(v, m, r, i) {
						var isUlp = r.get('isUlp');
						if (v == null || v == 'null')
							return '';
						if (isUlp == '1')
							return v;
						var condition1 = r.get('condition1');
						if (condition1 == 'N') {
							return "<span style='color:red'>" + v + "</span>";

						} else {
							return "<span style='color:green'>" + v + "</span>";
						}
					}
				}, {
					dataIndex : 'mpSaltLowLimit',
					sortable : true,
					header : '膜片<br>脱盐率下限标准'
				}, {
					dataIndex : 'rMpPointSaltRejection',
					sortable : true,
					header : '膜片<br>复测脱盐率'
				}, {
					dataIndex : 'mpPointGfd',
					sortable : true,
					header : '膜片<br>单点通量'
				}, {
					dataIndex : 'mpMinGfd',
					sortable : true,
					header : '膜片<br>最低通量'
				}, {
					dataIndex : 'mpMaxGfd',
					sortable : true,
					header : '膜片<br>最高通量'
				}, {
					dataIndex : 'mpAvgGfd',
					sortable : true,
					header : '膜片<br>平均通量'
				}, {
					dataIndex : 'rMpPointGfd',
					sortable : true,
					header : '膜片<br>复测通量'
				}, {
					dataIndex : 'yjGpdLowLimit2',
					sortable : true,
					header : '元件<br>最低产水量(理论换算)'
				}, {
					dataIndex : 'yjGpdUpLimit2',
					sortable : true,
					header : '元件<br>最高产水量(理论换算)'
				}, {
					dataIndex : 'yjGpdAvg2',
					sortable : true,
					header : '元件<br>平均产水量(理论换算)'
				}, {
					dataIndex : 'testMpBatchNo',
					sortable : true,
					header : '试卷<br>膜批次'
				}, {
					dataIndex : 'testMpPointGfd',
					sortable : true,
					header : '试卷<br>膜批次单点通量'
				}, {
					dataIndex : 'testMpPointSaltRejection',
					sortable : true,
					header : '试卷<br>膜批次单点脱盐率'
				}, {
					dataIndex : 'testYjSpecName',
					sortable : true,
					header : '试卷<br>元件型号'
				}, {
					dataIndex : 'testYjArea',
					sortable : true,
					header : '试卷<br>元件膜面积'
				}, {
					dataIndex : 'testYjDenseNet',
					sortable : true,
					header : '试卷<br>元件浓网规格'
				}, {
					dataIndex : 'testYjGpd',
					sortable : true,
					header : '试卷<br>元件产水量'
				}, {
					dataIndex : 'testYjSalt',
					sortable : true,
					header : '试卷<br>元件脱盐率'/*
											 * , renderer : function(v, m, r, i) {
											 * if (v == null || v == 'null')
											 * return ''; var condition2 =
											 * r.get('condition2'); if
											 * (condition2 == 'N') { return "<span
											 * style='color:red'>" + v + "</span>"; }
											 * else { return "<span
											 * style='color:green'>" + v + "</span>"; } }
											 */
				}, {
					dataIndex : 'testYjGpdLowLimit',
					sortable : true,
					header : '试卷<br>元件产水量下限'
				}, {
					dataIndex : 'testYjGpdUpLimit',
					sortable : true,
					header : '试卷<br>元件产水量上限'
				}, {
					dataIndex : 'testYjSaltLowLimit',
					sortable : true,
					header : '试卷<br>元件脱盐率下限'
				}, {
					dataIndex : 'mpProduceDt',
					sortable : true,
					header : '生产时间'
				}, {
					dataIndex : 'remark',
					sortable : true,
					header : '生产备注'
				}])

		this.chooseTumoPanel = this.chooseTumoPanel || new Ext.fn.ListPanel({
			region : 'center',
			cls : 'custom-row-height', // 应用自定义的CSS类
			viewConfig : {
				forceFit : false
			},
			view : new Ext.ux.grid.LockingGridView({
						enableRowBody : true
					}),
			tbar : [{
						text : '确定选择',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelect4ChooseTumo
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '脱盐率(%)::',
						id : saltLowId
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '产水量范围(GPD):',
						id : gpdLowId
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '膜片用量(m):',
						id : useAmountId
					}, '->', {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '选中膜片合计(m):',
						id : amountCheckedId
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}],
			hsPage : false,
			autoScroll : true,
			selModel : smLock,
			colModel : columns,
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.mpselect.query4Select.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'selected'
						},{
							name : 'testMpPointSaltRejection'
						}, {
							name : 'testMpPointGfd'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'mpBatchNo'
						}, {
							name : 'storageName'
						}, {
							name : 'storagePosition'
						}, {
							name : 'amount'
						}, {
							name : 'isKeep'
						}, {
							name : 'mpPointSaltRejection'
						}, {
							name : 'mpMinSaltRejection'
						}, {
							name : 'mpSaltLowLimit'
						}, {
							name : 'rMpPointSaltRejection'
						}, {
							name : 'mpPointGfd'
						}, {
							name : 'mpMinGfd'
						}, {
							name : 'mpMaxGfd'
						}, {
							name : 'mpAvgGfd'
						}, {
							name : 'rMpPointGfd'
						}, {
							name : 'yjGpdLowLimit2'
						}, {
							name : 'yjGpdUpLimit2'
						}, {
							name : 'yjGpdAvg2'
						}, {
							name : 'testMpBatchNo'
						}, {
							name : 'testYjSpecName'
						}, {
							name : 'testYjArea'
						}, {
							name : 'testYjDenseNet'
						}, {
							name : 'testYjGpd'
						}, {
							name : 'testYjSalt'
						}, {
							name : 'testYjGpdLowLimit'
						}, {
							name : 'testYjGpdUpLimit'
						}, {
							name : 'testYjSaltLowLimit'
						}, {
							name : 'mpProduceDt'
						}, {
							name : 'remark'
						}, {
							name : 'condition1'
						}, {
							name : 'condition2'
						}, {
							name : 'mpSaltAvg'
						}, {
							name : 'isUlp'
						}]
			})
		})

		this.chooseTumoWindow = this.chooseTumoWindow || new Ext.Window({
					title : '选择膜片',
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
					items : [this.chooseTumoPanel],
					buttons : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseTumo
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.chooseTumoWindow.hide();
								}
							}]

				});

	}

	this.initInputAddWindow = function() {
		var _this = this;

		this.inputAddPanel = this.inputAddPanel || new Ext.fn.InputPanel({
					region : 'center',
					baseCls : "x-plain",
					// pgrid : this.listPanel,
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 6,
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'textfield',
								fieldLabel : '膜片批次',
								ref : '../../batchNo',
								allowBlank : false,
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'numberfield',
								fieldLabel : '米数',
								ref : '../../meterAmount',
								allowBlank : false,
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'textfield',
								fieldLabel : '仓库',
								ref : '../../storageName',
								allowBlank : false,
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'textfield',
								fieldLabel : '库位',
								ref : '../../storagePosition',
								allowBlank : false,
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'textfield',
								fieldLabel : '理论平均产水量',
								ref : '../../yjGpdLowLimit2',
								allowBlank : false,
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'textfield',
								fieldLabel : '理论最低脱盐率',
								ref : '../../mpMinSaltRejection',
								allowBlank : false,
								anchor : '85%',
								colspan : 3
							}]

				})

		this.inputAddWindow = this.inputAddWindow || new Ext.Window({
					title : '录入新增',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.inputAddPanel],
					buttons : [{
								text : '确定',
								scope : this,
								handler : this.onConfirm4InputAdd
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputAddWindow.hide();
								}
							}]

				});

	}
}