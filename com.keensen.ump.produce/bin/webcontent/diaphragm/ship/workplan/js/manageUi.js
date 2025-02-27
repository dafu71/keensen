com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initEditWindow();
		this.initWorkPlanWindow();
		this.initModifyPlanNoWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workplanmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【计划单查询】',
					fields : [{
						xtype : 'combobox',
						anchor : '75%',
						hiddenName : 'condition/line',
						colspan : 1,
						ref : '../line',
						fieldLabel : '线体',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['A', 'A'], ['B', 'B'], ['C', 'C'],
											['D', 'D'], ['E', 'E'], ['F', 'F']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--",
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.line.reset();
							}
						}
					}, {
						xtype : 'textfield',
						name : 'condition/planNo',
						anchor : '75%',
						fieldLabel : '计划单号'
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '75%',
						fieldLabel : '订单号'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 3
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '75%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : "dateregion",
						colspan : 1,
						anchor : '75%',
						nameArray : ['condition/workDtStart',
								'condition/workDtEnd'],
						fieldLabel : "作业日期",
						format : "Y-m-d"
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					rescode : '10002661',
					iconCls : 'icon-application_excel',
					hidden:true,
					handler : this.exportExcel
				});
		this.queryPanel.addButton({
					text : "修改计划单号",
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.onModifyPlanNo
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【计划单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '计划拆分',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onWorkPlan
					}, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.ship.order.deleteWorkPlanById.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'workDt',
						sortable : true,
						header : '作业日期'
					}, {
						dataIndex : 'line',
						sortable : true,
						header : '线体'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'code',
						header : '计划单号'
					}, {
						dataIndex : 'arrangeAmount',
						sortable : true,
						header : '排产数量'
					}, {
						dataIndex : 'supName',
						header : '无纺布种类'
					}, {
						dataIndex : 'prodAmount',
						header : '生产数量'
					}, {
						dataIndex : 'storageAmount',
						header : '合格数量',
						scope : this,
						renderer : function(v, m, r, i) {
							var code = r.get('code');
							if (!Ext.isEmpty(v)) {
								var style = "<a title='查看膜片批次' style='color:red;text-decoration:none'";
								var str = style
										+ " href='javascript:queryDelivery("
										+ Ext.encode(code) + ");'>" + v
										+ "</a>";

								return str;
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'validPercent',
						header : '合格率%'
					}, {
						dataIndex : 'waitAmount',
						header : '待处理数量'
					}, {
						dataIndex : 'performance',
						header : '性能要求'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.order.queryWorkPlanByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'relationId'
						}, {
							name : 'workDt'
						}, {
							name : 'line'
						}, {
							name : 'arrangeAmount'
						}, {
							name : 'supId'
						}, {
							name : 'performance'
						}, {
							name : 'remark'
						}, {
							name : 'code'
						}, {
							name : 'materSpecName'
						}, {
							name : 'supName'
						}, {
							name : 'prodAmount'
						}, {
							name : 'storageAmount'
						}, {
							name : 'waitAmount'
						}, {
							name : 'orderNo'
						}, {
							name : 'validPercent'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.ship.order.expandWorkPlan.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.ship.order.saveWorkPlan.biz.ext',
				fields : [{
							xtype : 'datefield',
							name : 'entity/workDt',
							dataIndex : 'workDt',
							allowBlank : false,
							fieldLabel : '作业日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/arrangeAmount',
							dataIndex : 'arrangeAmount',
							allowBlank : false,
							fieldLabel : '排产数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/performance',
							height : '100',
							dataIndex : 'performance',
							fieldLabel : '性能要求',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							dataIndex : 'remark',
							height : '100',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	// 作业计划
	this.initWorkPlanWindow = function() {

		var selModel9 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.planListPanel = this.planListPanel || new Ext.fn.EditListPanel({
			title : '【作业计划明细】',
			clicksToEdit : 1,
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : false,
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						ref : '../label0',
						value : '当前排产数量:'
					}, {
						xtype : 'textfield',
						id : arrangeAmountId

					}, '->', {
						text : '数量调整',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCalculate
					}],
			delUrl : '1.biz.ext',
			selModel : selModel9,
			columns : [new Ext.grid.RowNumberer(), selModel9, {
						dataIndex : 'workDt',
						header : '作业日期',
						format : "Y-m-d",
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.DateField(
								{
									listeners : {
										'blur' : function(o) {

										}
									},
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
						dataIndex : 'line',
						header : '线体'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'arrangeAmount',
						header : '排产数量',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									id : arrangeAmounText,
									allowBlank : false,
									scope : this,
									allowNegative : true,
									decimalPrecision : 2,
									minValue : 0,
									listeners : {
										scope : this,
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {

											var arrangeAmount0 = Ext
													.getCmp(arrangeAmountId)
													.getValue();
											var arrangeAmount2 = parseFloat(arrangeAmount0)
													- parseFloat(oldValue)
													+ parseFloat(newValue);
											Ext.getCmp(arrangeAmountId)
													.setValue(arrangeAmount2
															.toFixed(1));

										},
										'focus' : function() {

										}

									}
								}))
					}, {
						dataIndex : 'supName',
						header : '无纺布供应商'
					}, {
						dataIndex : 'performance',
						header : '性能要求',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : true
								}))
					}, {
						dataIndex : 'remark',
						css : 'background:#c7c7c7;',
						header : '备注',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : true
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.order.queryDetails2.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'workDt'
						}, {
							name : 'line'
						}, {
							name : 'orderNo'
						}, {
							name : 'arrangeAmount'
						}, {
							name : 'supName'
						}, {
							name : 'remark'
						}, {
							name : 'supId'
						}, {
							name : 'performance'
						}, {
							name : 'relationId'
						}, {
							name : 'itype'
						}, {
							name : 'planId'
						}]
			})
		})

		this.workPlanPanel = this.workPlanPanel || new Ext.fn.InputPanel({
					height : 80,
					region : 'north',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 6,
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'textfield',
								readOnly : true,
								ref : '../code',
								fieldLabel : '计划单号',
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'textfield',
								readOnly : true,
								ref : '../arrangeAmount',
								fieldLabel : '计划排产数量',
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'numberfield',
								name : 'condition/days',
								allowBlank : false,
								ref : '../days',
								fieldLabel : '拆分天数',
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								name : 'condition/relationId'
							}, {
								xtype : 'hidden',
								ref : '../pkid',
								name : 'condition/id'
							}],
					buttons : [{
								text : "生成计划明细",
								scope : this,
								handler : this.onCreateDetails
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.workPlanPanel.form.reset();
									this.planListPanel.store.removeAll();
									this.workPlanWindow.hide();
								}
							}]

				})

		this.workPlanWindow = this.workPlanWindow || new Ext.Window({
					title : '拆分作业计划',
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
					items : [this.workPlanPanel, this.planListPanel],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveDetails
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.workPlanPanel.form.reset();
									this.planListPanel.store.removeAll();
									this.workPlanWindow.hide();
								}
							}]

				});
	}

	this.initModifyPlanNoWindow = function() {
		var _this = this;
		var modifyPlanNoSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.modifyPlanNoListPanel = this.modifyPlanNoListPanel
				|| new Ext.fn.EditListPanel({
					viewConfig : {
						forceFit : true
					},
					clicksToEdit : 1,
					region : 'center',
					hsPage : true,
					tbar : [{
								text : '修改所选批次计划单号',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onModifyBatch
							}],
					selModel : modifyPlanNoSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							modifyPlanNoSelModel, {
								dataIndex : 'batchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'planNo',
								header : '计划单号',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : true,
											css : 'background:#c7c7c7;',
											scope : this,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var recordId = _this.orderRec.data['recordId'];
													_this.updateTumoPlanNO(
															recordId, newValue,
															oldValue);
												}
											}
										}))
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.diaphragm.ship.order.queryTumoOrderNO.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {

					}	,
						fields : [{
									name : 'recordId'
								}, {
									name : 'batchNo'
								}, {
									name : 'planNo'
								}, {
									name : 'planNoBak'
								}]
					})
				})

		this.queryModifyPlanNoPanel = this.queryModifyPlanNoPanel
				|| new Ext.fn.QueryPanel({
							height : 150,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/planNo',
										anchor : '85%',
										fieldLabel : '计划单号'
									}, {
										xtype : 'textarea',
										height : 100,
										name : 'condition/batchNoStr2',
										emptyText : '多个批次请用逗号分隔，或一行一个批次',
										colspan : 1,
										anchor : '85%',
										fieldLabel : '膜片批次'
									}, {
										xtype : 'hidden',
										name : 'condition/batchNoStr'
									}]
						});
		this.queryModifyPlanNoPanel.addButton({
					text : "关闭",
					scope : this,
					// resCode : 10002681,
					handler : function() {
						this.modifyPlanNoWindow.hide();
					}

				});

		this.modifyPlanNoWindow = this.modifyPlanNoWindow || new Ext.Window({
					title : '修改膜片计划单号',
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
					items : [this.queryModifyPlanNoPanel,
							this.modifyPlanNoListPanel]

				});
	}
}