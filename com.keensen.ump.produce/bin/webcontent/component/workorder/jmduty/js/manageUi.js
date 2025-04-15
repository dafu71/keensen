com.keensen.ump.produce.component.workorder.jmdutyMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.rec2 = {};
		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initArrangeWindow();
		this.initChooseWindow();

		this.initPlanDayWindow();
		
		this.initChooseCdmWindow();
		this.initAddCdmWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workorderjmdutymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.jmStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '卷膜'
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
				name : 'condition/jmCode2',
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
				ref : '../jmState',
				hiddenName : 'condition/jmState',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				//anchor : '95%',
				store : [['0', '处理中'], ['1', '完成'], ['2', '异常']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.jmState.reset();
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
					}, '->', {
						text : '自由卷设置裁叠膜',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onChooseCdm

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
						header : '计划卷膜数量'
					}, {
						dataIndex : 'realityAmount',
						header : '实际卷膜数量'
					}, {
						dataIndex : 'arrangeDate',
						header : '排班日期'
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序'
					}, {
						dataIndex : 'jmCodes',
						header : '生产机台'
					}, {
						dataIndex : 'jmStateName',
						header : '计划作业状态'
					}, {
						dataIndex : 'weekRemark',
						header : '订单生产备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.workorder2.query4JmDutyByPage.biz.ext',
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
							name : 'jmCodes'
						}, {
							name : 'materSpecId'
						}, {
							name : 'orderId'
						}, {
							name : 'productOrder'
						}, {
							name : 'arrangeDate'
						}, {
							name : 'jmState'
						}, {
							name : 'jmStateName'
						}, {
							name : 'jmAmount'
						}, {
							name : 'realityAmount'
						}, {
							name : 'weekRemark'
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
					
					//handleMouseDown : Ext.emptyFn,//可复用的空函数
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
						width : 140,
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						width : 140,
						header : '规格型号号'
					}, {
						dataIndex : 'planDate',
						width : 100,
						header : '计划日期'
					}/*, {
						dataIndex : 'cmArrangeDate',
						width : 100,
						header : '裁膜排班日期'
					}, {
						dataIndex : 'cmProductOrder',
						width : 100,
						header : '裁膜排班顺序'
					}*/, {

						dataIndex : 'arrangeDate',
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

						dataIndex : 'jmCodes',
						width : 350,
						header : '生产机台',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TriggerField(
								{
									allowBlank : false,
									id : jmcodeId,
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
				url : 'com.keensen.ump.produce.component.workorder2.query4JmDuty.biz.ext',
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
							name : 'jmCodes'
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
							name : 'jmState'
						}, {
							name : 'cmProductOrder'
						}, {
							name : 'cmArrangeDate'
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
					'condition/type' : '卷膜'
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

		this.jmcombo = new Ext.form.ComboBox({
			store : this.jmStore,
			anchor : '100%',
			fieldLabel : '生产机台',
			displayField : 'code',
			valueField : 'code',
			myvalue : '',
			typeAhead : true,
			mode : 'local',
			tpl : '<tpl for="."><div class="x-combo-list-item"><span><input type="checkbox" {[values.check?"checked":""]} value="{[values.code]}" /></span><span >{code}</span></div></tpl>',
			triggerAction : 'all',
			emptyText : '--请选择--',
			selectOnFocus : true,

			onSelect : function(record, index) {
				if (_this.jmcombo.fireEvent('beforeselect', _this.jmcombo,
						record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					_this.jmcombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('code'));
									strvalue.push(rc.get('code'));
								}
							});
					_this.jmcombo.setValue(str.join());
					_this.jmcombo.myvalue = strvalue.join();
					_this.jmcombo.fireEvent('select', _this.jmcombo, record,
							index);
				}
			},
			listeners : {
				'specialkey' : function() {
					return false;
				},
				'change' : function(o, newValue, oldValue) {
					if (newValue == oldValue)
						return false;
					var id = _this.rec2.data['id'];
					_this.saveBatchNoJm(id, newValue, oldValue);
				}
			}
		});

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
								text : '膜片卷膜状态置为处理中',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onDutyState2Deal

							}, '->', {
								text : '膜片卷膜状态置为完成',
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
								dataIndex : 'cdmStateName',
								width : 200,
								header : '裁叠膜完成状态'
							}, {
								dataIndex : 'jmStateName',
								width : 200,
								header : '卷膜完成状态'
							}, {
								dataIndex : 'jmCode',
								width : 250,
								header : '生产机台',
								css : 'background:#c7c7c7;',
								editor : this.jmcombo
								/*
								 * editor : new Ext.grid.GridEditor(new
								 * Ext.form.ComboBox( { allowBlank : false, id :
								 * 'jmCodeComb', scope : this, hiddenName :
								 * 'code', typeAhead : true, mode : 'local',
								 * store : _this.jmStore, forceSelection : true,
								 * editable : false, triggerAction : "all",
								 * displayField : "code", valueField : "code",
								 * listeners : { 'specialkey' : function() {
								 * return false; }, 'change' : function(o,
								 * newValue, oldValue) { if (newValue ==
								 * oldValue) return false; var id =
								 * _this.rec2.data['id'];
								 * _this.saveBatchNoJm(id, newValue, oldValue); } }
								 * }))
								 */
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
									name : 'jmCode'
								}, {
									name : 'jmState'
								}, {
									name : 'jmStateName'
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
					width : 800,
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

	this.initChooseCdmWindow = function() {

		var selModel4ChooseCdm = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel4ChooseCdm = this.listPanel4ChooseCdm || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd4ChooseCdm
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel4ChooseCdm
					}],
			hsPage : true,
			selModel : selModel4ChooseCdm,
			delUrl : 'com.keensen.ump.produce.component.workorder2.deleteChooseCdm.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel4ChooseCdm, {
						dataIndex : 'cdmBatchNo',
						header : '裁叠膜栈板号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'prodSpecName',
						header : '生产型号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'nameSqlId' : 'com.keensen.ump.produce.component.workorder.queryJmChooseCdm'
				},
				fields : [{
							name : 'prodSpecName'
						}, {
							name : 'cdmBatchNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'entityName'
						}]
			})
		})

		this.queryPanel4ChooseCdm = this.queryPanel4ChooseCdm || new Ext.fn.QueryPanel({
					height : 80,
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
								xtype : 'textfield',
								name : 'condition/cdmBatchNo',
								anchor : '85%',
								fieldLabel : '裁叠膜栈板号'
							}]
				});

	
		this.queryPanel4ChooseCdm.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseCdmWindow.hide();
					}

				});
	
		this.chooseCdmWindow = this.chooseCdmWindow
				|| new Ext.Window({
							title : '自由卷设置裁叠膜',
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
							items : [this.queryPanel4ChooseCdm, this.listPanel4ChooseCdm]

						});
		
	}
	
	this.initAddCdmWindow = function() {
		var _this = this;
		this.addCdmWindow = this.addCdmWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 240,
			width : 300,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel4ChooseCdm,
				successFn : function(i, r) {
					_this.addCdmWindow.items.items[0].form.reset();
					//_this.addCdmWindow.hide();
					_this.listPanel4ChooseCdm.refresh();

				},
				columns : 2,
				saveUrl : 'com.keensen.ump.qinsen.juanmo.saveChooseCdm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/cdmBatchNo',
							dataIndex : 'cdmBatchNo',
							fieldLabel : '裁叠膜栈板号 ',
							ref : '../../cdmBatchNo',
							allowBlank : false,
							anchor : '100%',
							colspan : 2

						},{
							xtype : 'hidden',
							name : 'entity/state',
							value : '0'
						}]
			}]
		});
	}
}