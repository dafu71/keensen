com.keensen.ump.produce.component.QueryStockMgr = function() {

	this.initPanel = function() {

		this.nameSqlId = 'com.keensen.ump.produce.component.semifinished.queryStock';

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initChooseSingleUserWindow();
		this.initChooseSingleOrderWindow();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentquerystockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});
		this.warnStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['yellow', '大于1.5个月且小于2个月'], ['red', '大于2个月']]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
			height : 150,
			columns : 4,
			border : true,
			region : "north",
			// collapsible : true,
			titleCollapse : false,
			fields : [{
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						anchor : '95%',
						fieldLabel : '元件型号 ',
						typeAhead : true,
						typeAheadDelay : 100,
						minChars : 1,
						queryMode : 'local',
						lastQuery : '',
						editable : true,
						listeners : {
							'specialkey' : function() {
								return false;
							}
						}
					}, {
						xtype : "dateregion",
						colspan : 1,
						// anchor : '75%',
						nameArray : ['condition/inTimeStart',
								'condition/inTimeEnd'],
						fieldLabel : "入库日期",
						format : "Y-m-d"
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '是否呆滞',
						ref : '../ifDull',
						hiddenName : 'condition/ifDull',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.queryPanel.ifDull.reset()
							}
						}
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '报警',
						ref : '../ifWarn',
						hiddenName : 'condition/ifWarn',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.warnStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.queryPanel.ifWarn.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textarea',
						colspan : 2,
						emptyText : '多个批次请用逗号分隔，或一行一个批次',
						name : 'condition/batchNoStr2',
						anchor : '100%',
						fieldLabel : '卷膜序号'
					}, {
						xtype : 'dictcombobox',
						name : 'condition/deleted2',
						hiddenName : 'condition/deleted2',
						fieldLabel : '是否已出库',
						anchor : '100%',
						dictData : KS_YESORNO
					}, {
						fieldLabel : '不展示已出库',
						xtype : 'checkbox',
						checked : true,
						name : 'condition/deleted',
						inputValue : 'N'
					}, {
						xtype : 'hidden',
						name : 'condition/batchNoStr'
					}, {
						xtype : 'hidden',
						name : 'nameSqlId',
						value : 'com.keensen.ump.produce.component.semifinished.queryStock'
					}]
		});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			region : "center",
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'semifinisheddullamount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'semifinishedwarnamount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'semifinishedwarnamount2'
					}, '->', {
						text : '批量出库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onOutofstock
					}],
			// autoExpandColumn : '4',
			delUrl : '1.biz.ext',
			hsPage : true,
			// clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						// width : 100,
						header : '卷膜序号'
					}, {
						dataIndex : 'prodSpecName',
						// width : 150,
						header : '元件型号'
					}, {
						dataIndex : 'orderNo',
						// width : 150,
						header : '原订单号'
					}, {
						dataIndex : 'newOrderNo',
						// width : 150,
						header : '改后订单号'
					}, {
						dataIndex : 'inTime',
						// width : 150,
						header : '入库日期'
					}, {
						dataIndex : 'produceDt',
						// width : 120,
						header : '卷膜日期'
					}, {
						dataIndex : 'ifDull',
						// width : 120,
						header : '是否呆滞'
					}, {
						dataIndex : 'ifWarn',
						// width : 60,
						header : '报警',
						renderer : function(v, m, r, i) {
							var ifWarn = r.get('ifWarn');
							if (!Ext.isEmpty(ifWarn)) {
								return '<img src="produce/component/semifinished/img/'
										+ ifWarn
										+ '.png" width="20" height="20">';

							}
						}
					}, {
						dataIndex : 'outTime',
						// width : 150,
						header : '出库日期'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : this.nameSqlId,
							'condition/deleted' : 'N'
						},
						fields : [{
									name : 'batchNo'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'prodSpecId'
								}, {
									name : 'inTime'
								}, {
									name : 'produceDt'
								}, {
									name : 'ifDull'
								}, {
									name : 'ifWarn'
								}, {
									name : 'outTime'
								}, {
									name : 'qjBatchId'
								}, {
									name : 'deleted'
								}, {
									name : 'orderNo'
								}, {
									name : 'newOrderNo'
								}]
					})
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

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '批量出库',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					_this.inputWindow.items.items[0].form.reset();
					_this.inputWindow.hide();
					_this.listPanel.refresh();
				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.semifinished.saveBatchOutofstock.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/batchNos',
							fieldLabel : '卷膜序号',
							ref : '../../batchNos',
							allowBlank : false,
							anchor : '80%',
							colspan : 2

						}, {
							xtype : 'displayfield',
							height : '10',
							colspan : 2
						}, {
							xtype : 'trigger',
							name : 'entity/newOrderNo',
							emptyText : '单击旁边按钮选择',
							fieldLabel : '改做订单号',
							editable : false,
							allowBlank : false,
							ref : '../../newOrderNo',
							anchor : '80%',
							colspan : 2,
							onTriggerClick : function() {
								_this.onChooseOrder();
							}
						}, {
							xtype : 'displayfield',
							height : '10',
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							ref : '../../takeUserName',
							name : 'entity/takeUserName',
							editable : false,
							allowBlank : false,
							fieldLabel : '领料人',
							anchor : '80%',
							colspan : 2,
							onTriggerClick : function() {
								_this.onChooseUser();
							}
						}, {
							xtype : 'hidden',
							ref : '../../takeUserId',
							name : 'entity/takeUserId'

						}]
			}]
		});
	}
}