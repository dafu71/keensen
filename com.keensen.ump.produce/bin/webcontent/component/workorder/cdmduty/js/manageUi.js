com.keensen.ump.produce.component.workorder.cdmdutyMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.rec2 = {};
		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initArrangeWindow();
		this.initChooseWindow();

		this.initPlanDayWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workordercdmdutymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.cdmStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '裁叠膜'
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
			height : 120,
			columns : 4,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			fields : [{
				xtype : "dateregion",
				colspan : 1,
				// anchor : '75%',
				nameArray : ['condition/planDateStart', 'condition/planDateEnd'],
				fieldLabel : "计划日期",
				format : "Y-m-d"
			}, {
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
				name : 'condition/cdmCode2',
				colspan : 1,
				fieldLabel : '生产机台'
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {
				xtype : 'datefield',
				ref : '../arrangeDate',
				name : 'condition/arrangeDate',
				fieldLabel : '排班日期',
				format : "Y-m-d",
				colspan : 1
			},{

				xtype : 'combobox',
				fieldLabel : '计划作业状态',
				ref : '../cdmState',
				hiddenName : 'condition/cdmState',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				//anchor : '95%',
				store : [['0', '处理中'], ['1', '完成'], ['2', '异常']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.cdmState.reset();
					}
				}
			}, {
								xtype : 'combo',
								fieldLabel : '元件类型',
								ref : '../size',
								hiddenName : 'condition/size',
								emptyText : '--请选择--',
								//anchor : '95%',
								colspan : 1,
								store : [['8', '8寸'], ['4', '4寸']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.size.reset();
									}
								}
							}]
		});
		this.queryPanel.addButton({
					text : "任务安排",
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.onArrange
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			tbar : [{
						text : '机台分配膜片',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onDutyView

					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : jmCountId
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : realityCountId
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : rateId
					}],
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			delUrl : '1.biz.ext',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'planDate',
						header : '计划日期'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						header : '生产型号'
					}, {
						dataIndex : 'jmAmount',
						header : '计划裁膜数量'
					}, {
						dataIndex : 'realityAmount',
						header : '实际裁膜数量'
					}, {
						dataIndex : 'arrangeDate',
						header : '排班日期'
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序'
					}, {
						dataIndex : 'cdmCodes',
						header : '生产机台'
					}, {
						dataIndex : 'cdmStateName',
						header : '计划作业状态'
					}, {
						dataIndex : 'weekRemark',
						header : '订单生产备注'
					}, {
						dataIndex : 'orderId',
						header : '订单ID'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.workorder2.query4CdmDutyByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'planDate'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'meterAmount'
						}, {
							name : 'cdmCodes'
						}, {
							name : 'materSpecId'
						}, {
							name : 'orderId'
						}, {
							name : 'productOrder'
						}, {
							name : 'arrangeDate'
						}, {
							name : 'cdmState'
						}, {
							name : 'cdmStateName'
						}, {
							name : 'jmAmount'
						}, {
							name : 'realityAmount'
						}, {
							name : 'weekRemark'
						}, {
							name : 'jmAmount'
						}, {
							name : 'realityCount'
						}, {
							name : 'jmCount'
						}, {
							name : 'rate'
						}]
			})
		})
	}

	this.initArrangeWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.EditListPanel({

			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			autoScroll : true,
			clicksToEdit : 1,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'orderNo',
						sortable : true,
						width : 140,
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						sortable : true,
						width : 140,
						header : '规格型号号'
					}, {
						dataIndex : 'planDate',
						sortable : true,
						width : 100,
						header : '计划日期'
					}, {

						dataIndex : 'arrangeDate',
						sortable : true,
						format : "Y-m-d",
						width : 100,
						header : '排班日期',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.DateField(
								{
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

						dataIndex : 'productOrder',						
						sortable : true,
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

						dataIndex : 'cdmCodes',
						width : 350,
						header : '生产机台',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TriggerField(
								{
									allowBlank : false,
									id : cdmcodeId,
									emptyText : '单击旁边按钮选择机台',
									editable : false,
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChooseCode();
									}
								}))

					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.workorder2.query4CdmDuty.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'planDate'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'meterAmount'
						}, {
							name : 'cdmCodes'
						}, {
							name : 'materSpecId'
						}, {
							name : 'orderId'
						}, {
							name : 'productOrder'
						}, {
							name : 'arrangeDate'
						}, {
							name : 'idx'
						}, {
							name : 'cdmState'
						}]
			})
		})

		this.arrangeWindow = this.arrangeWindow || new Ext.Window({
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
					items : [this.listPanel3],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveArrange
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.arrangeWindow.hide();
								}
							}]

				});

	}

	this.initChooseWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : Ext.emptyFn
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			selModel : selModel2,
			tbar : [{
						text : '确定选择',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelectCode
					}, '-', {
						text : '关闭',
						scope : this,
						handler : function() {
							this.chooseWindow.hide();
						}
					}],
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel2, {
						dataIndex : 'code',
						header : '机台编码'
					}, {
						dataIndex : 'name',
						header : '机台名称'
					}, {
						dataIndex : 'ip',
						header : 'IP'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.workorder.queryMachineByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/type' : '裁叠膜'
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
		})

		this.chooseWindow = this.chooseWindow || new Ext.Window({
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
					items : [this.listPanel2]

				})
	}

	this.initPlanDayWindow = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.planDayListPanel = this.planDayListPanel
				|| new Ext.fn.EditListPanel({
					// title : '【日计划】',
					height : 400,
					sm : selModel,
					// region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '膜片状态置为处理中',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onDutyState2Deal

							},'->',{
								text : '膜片状态置为完成',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onDutyState2Finish

							}],
					clicksToEdit : 1,
					hsPage : false,
					autoScroll : true,
					delUrl : '1.biz.ext',
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
							}, {
								dataIndex : 'mpRemark',
								width : 450,
								header : '膜片备注'
							}, {
								dataIndex : 'cdmStateName',
								width : 150,
								header : '膜片完成状态'
							}, {
								dataIndex : 'cdmCode',
								width : 150,
								header : '生产机台',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
										{
											allowBlank : false,
											// id : 'cdmCodeComb',
											scope : this,
											hiddenName : 'code',
											typeAhead : true,
											mode : 'local',
											store : _this.cdmStore,
											forceSelection : true,
											editable : false,
											triggerAction : "all",
											displayField : "code",
											valueField : "code",
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec2.data['id'];
													_this.saveBatchNoCdm(id,
															newValue, oldValue);
												}
											}
										}))
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
								}, {
									name : 'cdmCode'
								}, {
									name : 'cdmState'
								}, {
									name : 'cdmStateName'
								}

						]
					})
				})

		this.planDayWindow = this.planDayWindow || new Ext.Window({
					title : '分配机台',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'fit',
					items : [this.planDayListPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.planDayWindow.hide();
								}
							}]

				});
	}

}