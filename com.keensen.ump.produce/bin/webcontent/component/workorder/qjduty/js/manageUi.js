com.keensen.ump.produce.component.workorder.QjdutyMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.rec2 = {};

		this.defaultQjCode = '';

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initChooseOrderWindow();
		this.initArrangeWindow();
		this.initChooseMachineWindow();

		this.initEditWindow();

		this.initViewListWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workorderqjdutymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.qjStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '气检'
					},
					fields : [{
								name : 'code'
							}, {
								name : 'name'
							}, {
								name : 'type'
							}, {
								name : 'ip'
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
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
								colspan : 1,
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'prodspeccombobox',
								dataIndex : 'materSpecId',
								hiddenName : 'condition/materSpecId',
								ref : '../materSpecId',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '生产型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true
							}, {
								xtype : 'textfield',
								name : 'condition/qjCode2',
								colspan : 1,
								fieldLabel : '生产机台'
							}, {
								xtype : 'datefield',
								ref : '../arrangeDate',
								name : 'condition/arrangeDate',
								fieldLabel : '排班日期',
								format : "Y-m-d",
								colspan : 1
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "任务安排", scope : this, iconCls :
		 * 'icon-application_edit', handler : this.onArrange });
		 */

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : '新增任务',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onArrange
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelArrange
					}, '->', {
						text : '更新元件清单',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onRefreshList
					}, '-', {
						text : '查看元件清单',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewList
					}],
			delUrl : 'com.keensen.ump.produce.component.workorder2.deleteQjDuty.biz.ext',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecName2',
						header : '订单下达型号'
					}, {
						dataIndex : 'materSpecName',
						header : '生产型号'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'jmAmount',
						header : '卷膜数量'
					}, {
						dataIndex : 'qjAmount',
						header : '已气检数量'
					}, {
						dataIndex : 'waitAmount',
						header : '待气检数量'
					}, {
						dataIndex : 'arrangeDate',
						header : '排班日期'
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序'
					}, {
						dataIndex : 'qjCode',
						header : '生产机台'
					}, {
						dataIndex : 'qjStateName',
						header : '作业状态'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.workorder2.query4QjDutyByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'id'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName2'
						}, {
							name : 'materSpecName'
						}, {
							name : 'orderAmount'
						}, {
							name : 'qjCode'
						}, {
							name : 'materSpecId'
						}, {
							name : 'orderId'
						}, {
							name : 'productOrder'
						}, {
							name : 'arrangeDate'
						}, {
							name : 'qjState'
						}, {
							name : 'qjStateName'
						}, {
							name : 'jmAmount'
						}, {
							name : 'waitAmount'
						}, {
							name : 'qjAmount'
						}]
			})
		})
	}

	this.initArrangeWindow = function() {
		var _this = this;
		var selModel4Arrange = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel4Arrange = this.listPanel4Arrange
				|| new Ext.fn.EditListPanel({
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					clicksToEdit : 1,
					tbar : [{
								text : '选择订单',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddArrange
							}, '-', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelArrange
							}],
					autoScroll : false,
					selModel : selModel4Arrange,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4Arrange, {
								dataIndex : 'orderNo',
								header : '订单号'
							}, {
								dataIndex : 'orderType',
								header : '订单类型'
							}, {
								dataIndex : 'materSpecName2',
								header : '订单下达型号'
							}, {
								dataIndex : 'materSpecName',
								header : '生产规格'
							}, {
								dataIndex : 'orderAmount',
								header : '订单数量'
							}, {

								dataIndex : 'productOrder',
								width : 100,
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
								dataIndex : 'qjCode',
								width : 200,
								header : '生产机台',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TriggerField(
										{
											allowBlank : false,
											emptyText : '单击旁边按钮选择机台',
											editable : false,
											hideTrigger : false,
											scope : this,
											value : _this.defaultQjCode,
											onTriggerClick : function() {
												_this.onChooseCode();
											}
										}))
							}, {
								dataIndex : 'orderId',
								hidden : true,
								header : 'orderId'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.workorder2.query4QjDutyByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'id'
								}, {
									name : 'orderNo'
								}, {
									name : 'materSpecName'
								}, {
									name : 'orderAmount'
								}, {
									name : 'qjCode'
								}, {
									name : 'arrangeDate'
								}, {
									name : 'materSpecName2'
								}, {
									name : 'orderType'
								}, {
									name : 'orderId'
								}]
					})
				})

		this.inputPanel4Arrange = this.inputPanel4Arrange
				|| new Ext.fn.InputPanel({
							height : 80,
							region : 'north',
							baseCls : "x-panel",
							autoHide : false,
							autoScroll : false,
							border : true,
							columns : 6,
							saveUrl : '1.biz.ext',
							fields : [{
										xtype : 'datefield',
										ref : '../arrangeDate',
										name : 'entity/arrangeDate',
										fieldLabel : '排班日期',
										format : "Y-m-d",
										value : new Date(),
										anchor : '90%',
										colspan : 3
									}],
							buttons : [{
										text : "保存",
										scope : this,
										handler : this.onSaveArrange
									}, {
										text : "关闭",
										scope : this,
										handler : function() {
											this.inputPanel4Arrange.form
													.reset();
											this.window4Arrange.hide();
										}
									}]

						})

		this.window4Arrange = this.window4Arrange || new Ext.Window({
					title : '任务安排',
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
					items : [this.inputPanel4Arrange, this.listPanel4Arrange]

				});

	}

	this.initChooseOrderWindow = function() {

		var chooseOrderSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.chooseOrderListPanel = this.chooseOrderListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseOrder
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
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.neworder.queryYxOrderByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {},
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
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										fieldLabel : '只展示有卷膜',
										xtype : 'checkbox',
										checked : true,
										name : 'condition/isJuanmo',
										inputValue : 'Y',
										anchor : '100%'
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

	this.initChooseMachineWindow = function() {
		var _this = this;

		var selModel4ChooseMachine = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : Ext.emptyFn
				});

		this.listPanel4ChooseMachine = this.listPanel4ChooseMachine
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : true
							},
							hsPage : false,
							selModel : selModel4ChooseMachine,
							tbar : [{
										text : '确定选择',
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onSelectCode
									}, '-', {
										text : '关闭',
										scope : this,
										handler : function() {
											this.chooseMachineWindow.hide();
										}
									}],
							delUrl : '111.biz.ext',
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4ChooseMachine, {
										dataIndex : 'code',
										header : '机台编码'
									}, {
										dataIndex : 'name',
										header : '机台名称'
									}, {
										dataIndex : 'ip',
										header : 'IP'
									}],
							store : this.qjStore
						})

		this.chooseMachineWindow = this.chooseMachineWindow || new Ext.Window({
					title : '',
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
					items : [this.listPanel4ChooseMachine]

				})
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,

				columns : 1,
				loadUrl : 'com.keensen.ump.produce.component.workorder2.expandQjDuty.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.workorder2.saveQjDuty.biz.ext',
				fields : [{
							xtype : 'trigger',
							name : 'entity/qjCode',
							fieldLabel : '气检机台',
							allowBlank : false,
							emptyText : '单击旁边按钮选择机台',
							editable : false,
							hideTrigger : false,
							ref : '../../qjCode',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'qjCode',
							onTriggerClick : function() {
								_this.onChooseCode();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '生产顺序',
							dataIndex : 'productOrder',
							name : 'entity/productOrder',
							anchor : '95%',
							allowBlank : false,
							allowNegative : false,
							decimalPrecision : 0,
							minValue : 1

						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initViewListWindow = function() {
		var _this = this;

		var selModel4ViewList = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true
				});

		this.listPanel4ViewList = this.listPanel4ViewList
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					selModel : selModel4ViewList,
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer(), selModel4ViewList, {
								dataIndex : 'qjBatchNo',
								header : '元件序号'
							}, {
								dataIndex : 'jmBatchNo',
								header : '卷膜序号'
							}, {
								dataIndex : 'jmSpecName',
								header : '生产规格型号'
							}, {
								dataIndex : 'checkResult',
								header : '气检值(KPa)'
							}, {
								dataIndex : 'isQualifiedName',
								header : '气检判定'
							}, {
								dataIndex : 'ngReasonName',
								header : '不良类型'
							}, {
								dataIndex : 'trailer',
								header : '车号'
							}, {
								dataIndex : 'position',
								header : '烘房位置'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.workorder2.queryQjDutyList.biz.ext',
						root : 'data',
						autoLoad : false,
						hsPage : false,
						baseParams : {

					}	,
						fields : [{
									name : 'jmBatchNo'
								}, {
									name : 'orderId'
								}, {
									name : 'pkid'
								}, {
									name : 'jmBatchId'
								}, {
									name : 'jmSpecId'
								}, {
									name : 'jmSpecName'
								}, {
									name : 'qjSpecId'
								}, {
									name : 'qjSpecName'
								}, {
									name : 'checkResult'
								}, {
									name : 'isQualified'
								}, {
									name : 'ngReasonId'
								}, {
									name : 'ngReasonName'
								}, {
									name : 'trailer'
								}, {
									name : 'qjBatchNo'
								}, {
									name : 'isQualifiedName'
								}, {
									name : 'position'
								}]
					})
				})

		this.viewListWindow = this.viewListWindow || new Ext.Window({
					title : '元件清单',
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
					items : [this.listPanel4ViewList],
					buttons : [{
								text : '关闭',
								scope : this,
								handler : function() {
									this.viewListWindow.hide();
								}
							}]

				})
	}
}