com.keensen.ump.produce.component.OutofstockMgr = function() {

	this.initPanel = function() {
		this.rec = {};
		this.initInputWindow();
		this.initChooseSingleUserWindow();
		this.initChooseSingleOrderWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'componentoutofstockmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}
	this.initInputWindow = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/batchNo',
								anchor : '75%',
								fieldLabel : '卷膜序号'
							}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			region : "center",
			viewConfig : {
				forceFit : true
			},
			// autoExpandColumn : '4',
			delUrl : '1.biz.ext',
			hsPage : true,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						width : 100,
						header : '卷膜序号'
					}, {
						dataIndex : 'prodSpecName',
						width : 150,
						header : '元件型号'
					}, {
						dataIndex : 'orderNo',
						width : 120,
						header : '原订单号'
					}, {
						dataIndex : 'newOrderNo',
						width : 120,
						header : '改做的订单号'
					}, {
						dataIndex : 'createTime',
						width : 120,
						header : '出库时间'
					}, {
						dataIndex : 'takeUserName',
						width : 60,
						header : '领料人'
					}, {
						dataIndex : 'createName',
						width : 60,
						header : '发料人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'nameSqlId' : 'com.keensen.ump.produce.component.semifinished.queryOutofstock'
				},
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
							name : 'position'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'newOrderNo'
						}, {
							name : 'takeUserId'
						}, {
							name : 'takeUserName'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'batchNo'
						}, {
							name : 'qjBatchId'
						}]
			})
		})
		this.panel = this.panel || new Ext.Panel({
					layout : 'border',
					items : [this.queryPanel, this.listPanel]

				});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '500',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",
			width : '480',
			height : '350',
			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '卷膜序号',
						ref : '../batchNo',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									this.onScan();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						// name : 'entity/prodSpecName',
						readOnly : true,
						fieldLabel : '元件型号',
						ref : '../prodSpecName',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						// name : 'entity/position',
						fieldLabel : '库位',
						ref : '../position',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/orderNo',
						fieldLabel : '原订单号',
						ref : '../orderNo',
						readOnly : true,
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'trigger',
						name : 'entity/newOrderNo',
						emptyText : '单击旁边按钮选择',
						fieldLabel : '改做订单号',
						editable : false,
						allowBlank : false,
						ref : '../newOrderNo',
						anchor : '80%',
						colspan : 1,
						onTriggerClick : function() {
							_this.onChooseOrder();
						}
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'trigger',
						emptyText : '单击旁边按钮选择',
						ref : '../takeUserName',
						name : 'entity/takeUserName',
						editable : false,
						allowBlank : false,
						fieldLabel : '领料人',
						anchor : '80%',
						colspan : 1,
						onTriggerClick : function() {
							_this.onChooseUser();
						}
					}, {
						xtype : 'hidden',
						ref : '../takeUserId',
						name : 'entity/takeUserId'

					}, {
						xtype : 'hidden',
						name : 'entity/prodSpecId',
						ref : '../prodSpecId'
					}, {
						xtype : 'hidden',
						name : 'entity/qjBatchId',
						ref : '../qjBatchId'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

	this.initChooseSingleUserWindow = function() {

		var chooseSingleUserSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseSingleUserListPanel = this.chooseSingleUserListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleUser
							}],
					hsPage : true,
					selModel : chooseSingleUserSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							chooseSingleUserSelModel, {
								dataIndex : 'userName',
								header : '人员名称'
							}, {
								dataIndex : 'userId',
								header : '登录账号'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : 'com.keensen.ump.base.organduser.queryUser'
						},
						fields : [{
									name : 'userName'
								}, {
									name : 'userId'
								}]
					})
				})

		this.queryChooseSingleUserPanel = this.queryChooseSingleUserPanel
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/userName',
										anchor : '85%',
										fieldLabel : '人员名称'
									}, {
										xtype : 'textfield',
										name : 'condition/userId',
										anchor : '85%',
										fieldLabel : '登录账号'
									}]
						});

		this.queryChooseSingleUserPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSingleUserWindow.hide();
					}

				});

		this.chooseSingleUserWindow = this.chooseSingleUserWindow
				|| new Ext.Window({
							title : '人员查询',
							projectId : '',
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
							items : [this.queryChooseSingleUserPanel,
									this.chooseSingleUserListPanel]

						});
	}

	this.initChooseSingleOrderWindow = function() {

		var chooseSingleOrderSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseSingleOrderListPanel = this.chooseSingleOrderListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleOrder
							}],
					hsPage : true,
					selModel : chooseSingleOrderSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							chooseSingleOrderSelModel, {
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

		this.queryChooseSingleOrderPanel = this.queryChooseSingleOrderPanel
				|| new Ext.fn.QueryPanel({
							height : 120,
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
									}]
						});

		this.queryChooseSingleOrderPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSingleOrderWindow.hide();
					}

				});

		this.chooseSingleOrderWindow = this.chooseSingleOrderWindow
				|| new Ext.Window({
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
							items : [this.queryChooseSingleOrderPanel,
									this.chooseSingleOrderListPanel]

						});
	}
}