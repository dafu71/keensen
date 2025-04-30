com.keensen.ump.produce.component.produce.HouseholdMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initChooseSingleOrderWindow();

		this.initChooseSingleBatchNoWindow();

		this.initBatchAddWindow();

		this.initEditWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componenthouseholdmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.yesNotStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['Y', '是'], ['N', '否']]
				});

		this.produceTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['常规', '常规'], ['实验', '实验']]
				});

		this.pageTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['长页', '长页'], ['短页', '短页']]
				});

		this.machineCodeStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '裁网'
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

		this.basePipeStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.produce.queryBasePipe.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {

		}	,
			fields : [{
						name : 'pipeType'
					}, {
						name : 'longPage'
					}, {
						name : 'shortPage'
					}, {
						name : 'pageNum'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 90,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【BOM查询】',
					fields : [{
								xtype : 'datetimefield',
								name : 'condition/createTimeStart',
								fieldLabel : '计划裁膜日期',
								colspan : 1,
								anchor : '90%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i',
								value : new Date().add(Date.DAY, -1)
										.format('Y-m-d')
							}, {
								xtype : 'datetimefield',
								name : 'condition/createTimeEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '90%',
								editable : true,
								format : 'Y-m-d H:i',
								// allowBlank : false,
								value : new Date().add(Date.DAY, 1)
										.format('Y-m-d')
							}, {

								xtype : 'textfield',
								name : 'condition/batchNoStr',
								anchor : '90%',
								fieldLabel : '膜片批次%-%'
							}, {

								xtype : 'textfield',
								name : 'condition/orderNoStr',
								anchor : '90%',
								fieldLabel : '元件订单号%-%'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
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
			// title : '【BOM列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
						text : '批量新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddBatch
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.produce.deleteHousehold.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'TmSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'length',
						header : '膜卷长度'
					}, {
						dataIndex : 'prodSpecName',
						header : '裁切型号'
					}, {
						dataIndex : 'pageType',
						header : '长页/短页'
					}, {
						dataIndex : 'ifCutFull',
						header : '是否全裁',
						renderer : function(value) {
							return value == null ? "" : value == "Y"
									? "是"
									: "否";
						}
					}, {
						dataIndex : 'planDate',
						header : '计划裁膜日期'
					}, {
						dataIndex : 'blankingSize',
						header : '裁切长度'
					}, {
						dataIndex : 'cutAmount',
						header : '计划裁切数量'
					}, {
						dataIndex : 'caimoLength',
						header : '实际裁切数量'
					}, {
						dataIndex : 'planAmount',
						header : '计划卷制数'
					}, {
						dataIndex : 'jmAmount',
						header : '已卷数量'
					}, {
						dataIndex : 'jmStartDt',
						header : '卷膜开始日期'
					}, {
						dataIndex : 'jmOverDt',
						header : '卷膜最新日期'
					}, {
						dataIndex : 'validAmount',
						header : '合格长度'
					}, {
						dataIndex : 'orderNo',
						header : '元件订单号'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.produce.queryHouseholdByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'orderAmount'
						}, {
							name : 'validAmount'
						}, {
							name : 'jmStartDt'
						}, {
							name : 'jmOverDt'
						}, {
							name : 'jmAmount'
						}, {
							name : 'caimoLength'
						}, {
							name : 'TmSpecName'
						}, {
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
							name : 'batchNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'length'
						}, {
							name : 'blankingSize'
						}, {
							name : 'cutAmount'
						}, {
							name : 'pageType'
						}, {
							name : 'ifCutFull'
						}, {
							name : 'planDate'
						}, {
							name : 'planAmount'
						}, {
							name : 'prodSpecName'
						}]
			})
		})
	}

	this.initBatchAddWindow = function() {
		var _this = this;

		var selModelBatchAdd = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4BatchAdd = this.listPanel4BatchAdd
				|| new Ext.fn.EditListPanel({

					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					autoScroll : true,
					clicksToEdit : 1,
					selModel : selModelBatchAdd,
					columns : [new Ext.grid.RowNumberer(), selModelBatchAdd, {
						dataIndex : 'batchNo',
						header : '膜片批号',
						css : 'background:#b7b7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TriggerField(
								{
									allowBlank : false,
									emptyText : '单击旁边按钮选择膜片',
									editable : false,
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChooseBatchNo();
									}
								}))
					}, {
						dataIndex : 'orderNo',
						width : 200,
						header : '元件订单号',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TriggerField(
								{
									allowBlank : false,
									emptyText : '单击旁边按钮选择订单',
									editable : false,
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChooseOrder();
									}
								}))
					}, {
						dataIndex : 'prodSpecName',
						width : 120,
						header : '裁切型号'

					}, {
						dataIndex : 'length',
						header : '膜卷长度',
						css : 'background:#b7b7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false
								}))

					}, {
						dataIndex : 'blankingSize',
						header : '裁切长度'
					}, {
						dataIndex : 'cutAmount',
						header : '裁切数量',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false
								}))
					}, {
						dataIndex : 'pageType',
						header : '长页/短页',
						css : 'background:#b7b7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									allowBlank : false,
									mode : 'local',
									emptyText : '--请选择--',
									editable : false,
									store : _this.pageTypeStore,
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
						dataIndex : 'ifCutFull',
						header : '是否全裁',
						css : 'background:#c7c7c7;',
						renderer : function(value) {
							return value == null ? "" : value == "Y"
									? "是"
									: "否";
						},
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									triggerAction : "all",
									lazyRender : true,
									allowBlank : false,
									mode : 'local',
									emptyText : '--请选择--',
									store : _this.yesNotStore,
									displayField : "name",
									valueField : "code",
									forceSelection : true,
									scope : this,
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}))

					}, {
						dataIndex : 'planAmount',
						header : '计划卷制数',
						css : 'background:#b7b7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false
								}))
					}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.produce.queryHousehold4Create.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'batchNo'
								}, {
									name : 'orderNo'
								}, {
									name : 'prodSpecId'
								}, {
									name : 'length'
								}, {
									name : 'blankingSize'
								}, {
									name : 'cutAmount'
								}, {
									name : 'pageType'
								}, {
									name : 'ifCutFull'
								}, {
									name : 'planDate'
								}, {
									name : 'planAmount'
								}, {
									name : 'idx'
								}, {
									name : 'prodSpecName'
								}]
					})
				})

		this.batchAddWindows = this.batchAddWindows || new Ext.Window({
					title : '批量新增',
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					resizable : true,
					minimizable : false,
					maximizable : false,
					maximized : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.listPanel4BatchAdd],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onBatchAdd
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.batchAddWindows.hide();
								}
							}]

				});

	}

	this.initEditWindow = function() {
		var _this = this;
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
				loadUrl : 'com.keensen.ump.produce.component.produce.expandHousehold.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.produce.saveHousehold.biz.ext',
				fields : [{
							xtype : 'trigger',
							ref : '../../batchNo',
							emptyText : '单击旁边按钮选择膜片',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '膜片批号',
							anchor : '95%',
							colspan : 2,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChooseBatchNo();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择订单',
							ref : '../../orderNo',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 2,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChooseOrder();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							anchor : '95%',
							colspan : 2,
							fieldLabel : '裁切型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							readOnly : true,
							editable : false,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {

							fieldLabel : '膜卷长度',
							xtype : 'numberfield',
							name : 'entity/length',
							dataIndex : 'length',
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							ref : '../../blankingSize',
							fieldLabel : '裁切长度',
							xtype : 'numberfield',
							name : 'entity/blankingSize',
							readOnly : true,
							dataIndex : 'blankingSize',
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							ref : '../../cutAmount',
							fieldLabel : '裁切数量',
							xtype : 'numberfield',
							name : 'entity/cutAmount',
							dataIndex : 'cutAmount',
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'combo',
							fieldLabel : '长页/短页',
							allowBlank : false,
							mode : 'local',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : _this.pageTypeStore,
							dataIndex : 'pageType',
							hiddenName : 'entity/pageType',
							displayField : "name",
							valueField : "code",
							scope : this,
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'combo',
							fieldLabel : '是否全裁',
							allowBlank : false,
							anchor : '95%',
							colspan : 2,
							mode : 'local',
							emptyText : '--请选择--',
							editable : false,
							store : _this.yesNotStore,
							dataIndex : 'ifCutFull',
							hiddenName : 'entity/ifCutFull',
							displayField : "name",
							valueField : "code",
							scope : this,
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							ref : '../../planAmount',
							fieldLabel : '计划卷制数',
							xtype : 'numberfield',
							name : 'entity/planAmount',
							dataIndex : 'planAmount',
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initViewWindow = function() {

		var _this = this;
		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
			title : '查看',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'viewpanel',
				// baseCls : "x-plain",
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandHousehold.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '膜片批号',
							dataIndex : 'batchNo',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							dataIndex : 'prodSpecId',
							anchor : '95%',
							colspan : 2,
							fieldLabel : '裁切型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							readOnly : true,
							editable : false,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'length',
							fieldLabel : '膜卷长度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'blankingSize',
							fieldLabel : '裁切长度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '裁切数量',
							dataIndex : 'cutAmount',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'pageType',
							fieldLabel : '长页/短页',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combo',
							fieldLabel : '是否全裁',
							readOnly : true,
							anchor : '95%',
							colspan : 2,
							mode : 'local',
							emptyText : '--请选择--',
							editable : false,
							store : _this.yesNotStore,
							dataIndex : 'ifCutFull',
							displayField : "name",
							valueField : "code",
							scope : this,
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}]
			}]
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
								width : 200,
								header : '订单编号',
								sortable : true
							}, {
								header : '下料尺寸(m)',
								width : 90,
								dataIndex : 'blankingSize'
							}, {
								dataIndex : 'ifplan',
								width : 120,
								header : '制定计划与否',
								sortable : true,
								renderer : function(v, m, r, i) {
									var ifplan = r.get('ifplan');
									if (ifplan == '已制定') {
										return "<span style='color:red'>"
												+ ifplan + "</span>";

									} else {
										return ifplan;
									}
								}
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
							}, {
								dataIndex : 'gpdLowLimitStd',
								header : '产水量下限GPD',
								sortable : true
							}, {
								dataIndex : 'gpdUpLimitStd',
								header : '产水量上限GPD',
								sortable : true
							}, {
								dataIndex : 'gpdCenterStd',
								header : '产水量中心线GPD',
								sortable : true
							}, {
								dataIndex : 'saltLowLimitStd',
								header : '脱盐率下限%',
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
								}, {
									name : 'materSpecId'
								}, {
									name : 'gpdLowLimitStd'
								}, {
									name : 'gpdUpLimitStd'
								}, {
									name : 'gpdCenterStd'
								}, {
									name : 'saltLowLimitStd'
								}, {
									name : 'blankingSize'
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
							width : 1024,
							height : 600,
							layout : 'border',
							items : [this.queryChooseSingleOrderPanel,
									this.chooseSingleOrderListPanel]

						});
	}

	this.initChooseSingleBatchNoWindow = function() {

		var chooseSingleBatchNoSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseSingleBatchNoListPanel = this.chooseSingleBatchNoListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleBatchNo
							}],
					hsPage : true,
					selModel : chooseSingleBatchNoSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), chooseSingleBatchNoSelModel, {
								header : '膜片批次',
								width : 120,
								dataIndex : 'batchNo'
							}, {
								header : '长度(m)',
								width : 60,
								dataIndex : 'outLength'
							}, {
								header : '可用长度(m)',
								width : 90,
								dataIndex : 'usefulLength'
							}, {
								header : '合格长度(m)',// 合格长度=长度-涂膜不良总数(包括已扯和未扯不良)
								width : 90,
								dataIndex : 'qualifidLength'
							}, {
								header : '裁膜产出m',
								width : 80,
								dataIndex : 'caimoLength'
							}, {
								header : '不良m',
								width : 50,
								dataIndex : 'caimoLoss',
								renderer : function(v, m, r, i) {
									if (!Ext.isEmpty(v) && v > 0) {
										var tumoBatchNo = r.get('batchNo');
										var style = "<a style='text-decoration:none'";
										var str = style
												+ " href='javascript:defectView("
												+ Ext.encode(tumoBatchNo)
												+ ");'>" + v + "</a>";

										return str;
									}
								}
							}, {
								header : '空头数',
								width : 80,
								dataIndex : 'ktAmount'
							}, {
								header : '剩余可用长度',
								width : 80,
								dataIndex : 'remainLength'
							}, {
								header : '底膜放卷长度',
								width : 80,
								dataIndex : 'dmUseLength'
							}, {
								header : '已裁完',
								width : 50,
								dataIndex : 'isCutOverName',
								renderer : function(v, m, r, i) {
									if (v == '是') {
										var QMinusClength = r
												.get('QMinusClength')
										QMinusClength = parseFloat(QMinusClength);
										if (QMinusClength < 0
												|| QMinusClength > 50) {
											return "<span style='color:red'>"
													+ v + "</span>";
										}
									}
									return v;
								}
							}, {
								header : '最后裁膜时间',
								width : 110,
								dataIndex : 'lastCaimoDate'
							}, {
								header : '底膜批次',
								width : 120,
								dataIndex : 'dimoBatchNo'
							}, {
								header : '生产线',
								width : 80,
								dataIndex : 'lineCode'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.tumo.queryRecordsByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'recordId'
								}, {
									name : 'specNameOriginal'
								}, {
									name : 'planNo'
								}, {
									name : 'dimoBatchNo'
								}, {
									name : 'batchNo'
								}, {
									name : 'lineId'
								}, {
									name : 'specId'
								}, {
									name : 'wfSupId'
								}, {
									name : 'prodFlagId'
								}, {
									name : 'produceDt'
								}, {
									name : 'teamId'
								}, {
									name : 'teamSeg'
								}, {
									name : 'outLength'
								}, {
									name : 'workerId'
								}, {
									name : 'perfFlagId'
								}, {
									name : 'isQualified'
								}, {
									name : 'judgerId'
								}, {
									name : 'judgeDt'
								}, {
									name : 'createDt'
								}, {
									name : 'changeDt'
								}, {
									name : 'creatorId'
								}, {
									name : 'changerId'
								}, {
									name : 'remark'
								}, {
									name : 'judgeRemark'
								}, {
									name : 'isValid'
								}, {
									name : 'validTm'
								}, {
									name : 'verifierId'
								}, {
									name : 'wfBatchNo'
								}, {
									name : 'thickAvg'
								}, {
									name : 'thickMin'
								}, {
									name : 'thickMax'
								}, {
									name : 'tagNum'
								}, {
									name : 'tagLength'
								}, {
									name : 'inboundRemark'
								}, {
									name : 'orderNo'
								}, {
									name : 'isWx'
								}, {
									name : 'isCutOver'
								}, {
									name : 'outBatchNo'
								}, {
									name : 'isKeep'
								}, {
									name : 'mpd'
								}, {
									name : 'lineCode'
								}, {
									name : 'lineName'
								}, {
									name : 'materSpecCode'
								}, {
									name : 'materSpecName'
								}, {
									name : 'mpBatchCode'
								}, {
									name : 'qtJudgeFlag'
								}, {
									name : 'materClassId'
								}, {
									name : 'wfSupplierCode'
								}, {
									name : 'wfSupplierName'
								}, {
									name : 'prodFlagCode'
								}, {
									name : 'prodFlagName'
								}, {
									name : 'perfFlagCode'
								}, {
									name : 'perfFlagName'
								}, {
									name : 'isQualifiedName'
								}, {
									name : 'isValidName'
								}, {
									name : 'isWxName'
								}, {
									name : 'isCutOverName'
								}, {
									name : 'isKeepName'
								}, {
									name : 'produceDate'
								}, {
									name : 'judgeTime'
								}, {
									name : 'validTime'
								}, {
									name : 'judgerName'
								}, {
									name : 'workerName'
								}, {
									name : 'verifierName'
								}, {
									name : 'teamName'
								}, {
									name : 'materClassCode'
								}, {
									name : 'caimoLength'
								}, {
									name : 'caimoLoss'
								}, {
									name : 'lastCaimoDate'
								}, {
									name : 'usefulLength'
								}, {
									name : 'qualifidLength'
								}, {
									name : 'fMacName'
								}, {
									name : 'fGfdAvg'
								}, {
									name : 'fSaltRejection'
								}, {
									name : 'rMacName'
								}, {
									name : 'rGfdAvg'
								}, {
									name : 'rSaltRejection'
								}, {
									name : 'dmUseLength'
								}, {
									name : 'reserve4'
								}, {
									name : 'isReplaceTrough'
								}, {
									name : 'trend'
								}, {
									name : 'replaceTroughId'
								}, {
									name : 'sumOutLength'
								}, {
									name : 'remainLength'
								}, {
									name : 'QMinusClength'
								}, {
									name : 'waterBatchNo'
								}, {
									name : 'thickAvgFlag'
								}, {
									name : 'thickMinFlag'
								}, {
									name : 'thickMaxFlag'
								}, {
									name : 'perfIsQualifiedName'
								}, {
									name : 'ifModifyDefect'
								}, {
									name : 'batchNoOriginal'
								}, {
									name : 'specIdOriginal'
								}, {
									name : 'modifyTime'
								}, {
									name : 'modifyUserId'
								}, {
									name : 'modifyName'
								}, {
									name : 'ktAmount'
								}, {
									name : 'c21Result'
								}]
					})
				})

		this.queryChooseSingleBatchNoPanel = this.queryChooseSingleBatchNoPanel
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 4,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : 'datetimefield',
								name : 'condition/produceDtStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '90%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i',
								value : new Date().add(Date.DAY, -1)
										.format('Y-m-d 00:00')
							}, {
								xtype : 'datetimefield',
								name : 'condition/produceDtEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '90%',
								editable : true,
								format : 'Y-m-d H:i',
								// allowBlank : false,
								value : new Date().add(Date.DAY, 1)
										.format('Y-m-d 00:00')
							}, {

								xtype : 'textfield',
								name : 'condition/batchNoStr',
								anchor : '90%',
								fieldLabel : '膜片批次%-%'
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '90%',
								fieldLabel : '膜片型号 '
							}]
						});

		this.queryChooseSingleBatchNoPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSingleBatchNoWindow.hide();
					}

				});

		this.chooseSingleBatchNoWindow = this.chooseSingleBatchNoWindow
				|| new Ext.Window({
							title : '膜批次查询',
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
							items : [this.queryChooseSingleBatchNoPanel,
									this.chooseSingleBatchNoListPanel]

						});

	}
}