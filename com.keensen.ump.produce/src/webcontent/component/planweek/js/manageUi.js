com.keensen.ump.produce.component.planweekMgr = function() {
	this.initPanel = function() {
		this.initWeekArr();
		this.initPlanDateStore();
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

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentplanweekmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initWeekArr = function() {
		this.weekArr = [];
		for (var i = 1; i < 53; i++) {
			this.weekArr.push([i, i])
		}
	}

	this.initPlanDateStore = function() {
		this.planDateStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.neworder.queryPlanDate.biz.ext',
			root : 'data',
			autoLoad : false,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'planDate'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【周生产主计划查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								anchor : '75%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : 'combobox',
								fieldLabel : '计划年度',
								ref : '../planYear',
								hiddenName : 'condition/planYear',
								emptyText : '--请选择--',
								editable : false,
								anchor : '75%',
								store : [[2024, 2024], [2025, 2025],
										[2026, 2026], [2027, 2027]],
								value : new Date().getFullYear(),
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.planYear.reset();
									}
								}
							}, {
								xtype : 'combobox',
								fieldLabel : '计划制定周',
								hiddenName : 'condition/planWeek',
								ref : '../planWeek',
								emptyText : '--请选择--',
								editable : false,
								anchor : '75%',
								store : this.weekArr,
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.planWeek.reset();
									}
								}
							}]
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
						text : '周计划日排产',
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
						dataIndex : 'planYear',
						header : '计划制定年度'
					}, {
						dataIndex : 'planWeek',
						header : '计划制定周'
					}, {
						dataIndex : 'startDate',
						header : '开始日期'
					}, {
						dataIndex : 'endDate',
						header : '结束日期'
					}, {
						dataIndex : 'bm',
						header : '编码'
					}, {
						dataIndex : 'performance',
						header : '产品性能'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'dryWet',
						header : '干/湿膜'
					}, {
						dataIndex : 'orderAmount',
						header : '数量'
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
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryPlanWeek.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : '',
				baseParams : {

			}	,
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
						}]
			})
		})
	}

	this.initEditPlanWeekWindow = function() {
		var _this = this;
		this.editPlanWeekWindow = this.editPlanWeekWindow
				|| new Ext.fn.FormWindow({
					title : '修改周生产主计划',
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
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek.biz.ext',
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
									store : [[2024, 2024], [2025, 2025],
											[2026, 2026], [2027, 2027]],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editPlanWeekWindow.planYear
													.reset();
										}
									}
								}, {
									xtype : 'combobox',
									fieldLabel : '计划制定周',
									hiddenName : 'entity/planWeek',
									ref : '../../planWeek',
									emptyText : '--请选择--',
									allowBlank : false,
									editable : false,
									anchor : '85%',
									store : this.weekArr,
									dataIndex : 'planWeek',
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editPlanWeekWindow.planWeek
													.reset();
										}
									}
								}, {
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
					// region : 'center',
					viewConfig : {
						forceFit : true
					},
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
								header : '膜片批次'
							}, {
								dataIndex : 'meterAmount',
								header : '米数'
							}, {
								dataIndex : 'position',
								header : '仓位'
							}, {
								dataIndex : 'problem',
								header : '存在问题'
							}, {
								dataIndex : 'productOrder',
								header : '生产顺序'
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
								}

						]
					})
				})

		this.editPlanDayPanel = this.editPlanDayPanel || new Ext.fn.EditPanel({
			height : 150,
			// region : 'north',
			baseCls : "x-plain",
			pgrid : this.listPanel,
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 2,
			loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek.biz.ext',
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
						fieldLabel : '规格型号',
						ref : '../materSpecName',
						dataIndex : 'materSpecName',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">周计划信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '计划年度',
						ref : '../planYear',
						dataIndex : 'planYear',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '计划制定周',
						ref : '../planWeek',
						dataIndex : 'planWeek',
						anchor : '85%',
						colspan : 1
					}, {
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
					layout : 'form',
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

	this.initAddPlanDayWindow = function() {
		var _this = this;
		this.planDayWindow = this.planDayWindow || new Ext.fn.FormWindow({
			title : '新增日计划',
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
					_this.editPlanDayListPanel.store.load({
								params : {
									'condition/relationId' : A.data.id
								}
							});
					_this.planDayWindow.items.items[0].form.reset();
					_this.planDayWindow.hide();

				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanDay.biz.ext',
				fields : [{
							xtype : 'combobox',
							fieldLabel : '计划日期',
							ref : '../../planDate',
							hiddenName : 'entity/planDate',
							allowBlank : false,
							anchor : '85%',
							colspan : 1,
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
								}
							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							fieldLabel : '卷膜数量',
							allowBlank : false,
							ref : '../../jmAmount',
							name : 'entity/jmAmount',
							anchor : '85%',
							minValue : 1,
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '膜片批次',
							ref : '../../batchNo',
							name : 'entity/batchNo',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							fieldLabel : '米数',
							ref : '../../meterAmount',
							name : 'entity/meterAmount',
							minValue : 1,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '仓位',
							ref : '../../position',
							name : 'entity/position',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '膜片备注',
							ref : '../../mpRemark',
							name : 'entity/mpRemark',
							anchor : '85%',
							colspan : 2
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
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							fieldLabel : '生产顺序',
							ref : '../../productOrder',
							name : 'entity/productOrder',
							anchor : '85%',
							colspan : 1
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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanDay.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanDay.biz.ext',
				fields : [{
							xtype : 'combobox',
							fieldLabel : '计划日期',
							ref : '../../planDate',
							hiddenName : 'entity/planDate',
							dataIndex : 'planDate',
							allowBlank : false,
							anchor : '85%',
							colspan : 1,
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
								}
							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							fieldLabel : '卷膜数量',
							allowBlank : false,
							ref : '../../jmAmount',
							dataIndex : 'jmAmount',
							name : 'entity/jmAmount',
							anchor : '85%',
							minValue : 1,
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '膜片批次',
							ref : '../../batchNo',
							dataIndex : 'batchNo',
							name : 'entity/batchNo',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							fieldLabel : '米数',
							ref : '../../meterAmount',
							dataIndex : 'meterAmount',
							name : 'entity/meterAmount',
							minValue : 1,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '仓位',
							ref : '../../position',
							dataIndex : 'position',
							name : 'entity/position',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '膜片备注',
							ref : '../../mpRemark',
							dataIndex : 'mpRemark',
							name : 'entity/mpRemark',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '存在问题',
							ref : '../../problem',
							dataIndex : 'problem',
							name : 'entity/problem',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							fieldLabel : '生产顺序',
							ref : '../../productOrder',
							dataIndex : 'productOrder',
							name : 'entity/productOrder',
							anchor : '85%',
							colspan : 1
						}, {
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
					loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek.biz.ext',
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
								fieldLabel : '规格型号',
								ref : '../materSpecName',
								dataIndex : 'materSpecName',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								fieldLabel : '<p style="color:red;">周计划信息</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '计划年度',
								ref : '../planYear',
								dataIndex : 'planYear',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								fieldLabel : '计划制定周',
								ref : '../planWeek',
								dataIndex : 'planWeek',
								anchor : '85%',
								colspan : 1
							}, {
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
			hsPage : false,
			autoScroll : true,
			clicksToEdit : 1,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
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
						}]
			})
		})

		this.planWeekDaysWindow = this.planWeekDaysWindow || new Ext.Window({
					title : '周计划日排产',
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
}