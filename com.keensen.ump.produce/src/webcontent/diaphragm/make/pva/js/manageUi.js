com.keensen.ump.produce.diaphragm.make.PvaMgr = function() {
	this.initPanel = function() {
		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();

		this.initEditWindow2();
		this.initListWindow4Dilute();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makepvamgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	// 初始化store
	this.initStore = function() {

		this.typeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['SW', 'SW'], ['BW/HW', 'BW/HW'], ['ULP', 'ULP'],
							['NF', 'NF']]
				});

		this.pvaStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['PVA-165', 'PVA-165'], ['PVA-205', 'PVA-205'],
							['PVA540-S', 'PVA540-S'], ['PVA540-U', 'PVA540-U']]
				});

		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['处理中', '处理中'], ['完结', '完结']]
				});

	}

	this.initQueryPanel = function() {
		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【铸膜混料记录查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '料液批号'
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '料液类型',
								ref : '../../type',
								hiddenName : 'condition/type',
								// allowBlank : false,
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.typeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : 'PVA种类',
								ref : '../../pva',
								hiddenName : 'condition/pva',
								// allowBlank : false,
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.pvaStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "配料日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '状态',
								ref : '../../state',
								hiddenName : 'condition/state',
								// allowBlank : false,
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.stateStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		/*
		 * this.queryPanel.addButton({ text : "产线配料任务看板", scope : this, iconCls :
		 * 'icon-application_form_magnify', handler : this.onBoard2 });
		 */
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增母液配料',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改母液配料',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '新增稀释配料',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit2
					}, '-', {
						text : '查看稀释配料',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewList
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.make.pva.deletePvaEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'batchNo',
						header : '料液批号'
					}, {
						dataIndex : 'type',
						header : '料液类型'
					}, {
						dataIndex : 'weight',
						header : '总重量'
					}, {
						dataIndex : 'used',
						header : '已使用重量'
					}, {
						dataIndex : 'remain',
						header : '剩余重量'
					}, {
						dataIndex : 'pva',
						header : 'PVA种类'
					}, {
						dataIndex : 'c51',
						header : 'C51重量(g)'
					}, {
						dataIndex : 'c23a',
						header : 'C23-A重量(g)'
					}, {
						dataIndex : 'c14',
						header : 'C14重量(g)'
					}, {
						dataIndex : 'ro',
						header : 'RO水重量（KG)'
					}, {
						dataIndex : 'pvaWeight',
						header : 'PVA重量(g)'
					}, {
						dataIndex : 'density',
						header : '浓度（%）'
					}, {
						dataIndex : 'operatorName',
						header : '配料人'
					}, {
						dataIndex : 'createTime',
						header : '配料时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.pva.queryPvaByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
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
							name : 'batchNo'
						}, {
							name : 'type'
						}, {
							name : 'weight'
						}, {
							name : 'pva'
						}, {
							name : 'c51'
						}, {
							name : 'c23a'
						}, {
							name : 'c14'
						}, {
							name : 'ro'
						}, {
							name : 'density'
						}, {
							name : 'operatorId'
						}, {
							name : 'operatorName'
						}, {
							name : 'cnt'
						}, {
							name : 'used'
						}, {
							name : 'remain'
						}, {
							name : 'state'
						}, {
							name : 'pvaWeight'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.pva.savePva.biz.ext',
				fields : [{
							ref : '../../batchNo',
							emptyText : '自动生成',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '料液批号',
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							mode : 'local',
							fieldLabel : '料液类型',
							ref : '../../type',
							hiddenName : 'entity/type',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.typeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							mode : 'local',
							fieldLabel : 'PVA种类',
							ref : '../../pva',
							hiddenName : 'entity/pva',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							editable : false,
							store : this.pvaStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield200',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '输入完毕单击旁边按钮计算',
							ref : '../../weight',
							name : 'entity/weight',
							allowBlank : false,
							// hidden : true,
							fieldLabel : '总重量(kg)',
							anchor : '95%',
							colspan : 1,
							editable : true,
							// hideTrigger : true,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'numberfield',
							ref : '../../c51',
							name : 'entity/c51',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C51重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield100',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c23a',
							name : 'entity/c23a',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C23-A重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c14',
							name : 'entity/c14',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C14重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield300',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../ro',
							name : 'entity/ro',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'RO水重量(KG)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../pvaWeight',
							name : 'entity/pvaWeight',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'PVA重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield300',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../density',
							name : 'entity/density',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : '浓度(%)',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.pva.expandPva.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.pva.savePva.biz.ext',
				fields : [{
							ref : '../../batchNo',
							dataIndex : 'batchNo',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '料液批号',
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							mode : 'local',
							fieldLabel : '料液类型',
							ref : '../../type',
							hiddenName : 'entity/type',
							dataIndex : 'type',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.typeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							mode : 'local',
							fieldLabel : 'PVA种类',
							ref : '../../pva',
							hiddenName : 'entity/pva',
							dataIndex : 'pva',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							editable : false,
							store : this.pvaStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield200',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							// emptyText : '输入完毕单击旁边按钮计算',
							ref : '../../weight',
							name : 'entity/weight',
							dataIndex : 'weight',
							allowBlank : false,
							// hidden : true,
							fieldLabel : '总重量(kg)',
							anchor : '95%',
							colspan : 1,
							editable : true,
							hideTrigger : true,
							scope : this,
							onTriggerClick : function() {
								// _this.onCalc();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'numberfield',
							ref : '../../c51',
							name : 'entity/c51',
							dataIndex : 'c51',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C51重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield100',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c23a',
							name : 'entity/c23a',
							dataIndex : 'c23a',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C23-A重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c14',
							name : 'entity/c14',
							dataIndex : 'c14',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C14重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield300',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../ro',
							name : 'entity/ro',
							dataIndex : 'ro',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'RO水重量(KG)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../pvaWeight',
							name : 'entity/pvaWeight',
							dataIndex : 'pvaWeight',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'PVA重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield300',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../density',
							name : 'entity/density',
							dataIndex : 'density',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : '浓度(%)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}]
			}]
		});
	}

	this.initEditWindow2 = function() {
		var _this = this;
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '新增稀释配料',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.pva.expandPva.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.pva.savePvaList.biz.ext',
				fields : [{
							ref : '../../batchNo',
							emptyText : '自动生成',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '稀释料液批号',
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E'], ['F', 'F']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow2.line.reset();
								}
							}
						}, {
							xtype : 'mpspeccombobox',
							valueField : "name",
							displayField : "name",
							fieldLabel : '膜片型号',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow2.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield200',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							// emptyText : '输入完毕单击旁边按钮计算',
							ref : '../../weight',
							name : 'entity/weight',
							allowBlank : false,
							// hidden : true,
							fieldLabel : '稀释配料重量(kg)',
							anchor : '95%',
							colspan : 1,
							editable : true,
							hideTrigger : true,
							scope : this,
							onTriggerClick : function() {
								// _this.onCalc();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'numberfield',
							ref : '../../used',
							name : 'entity/used',
							decimalPrecision : 2,
							minValue : 0,
							allowBlank : false,
							// hidden : true,
							fieldLabel : '母液重量(KG)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield100',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c90',
							name : 'entity/c90',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C90重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c14',
							name : 'entity/c14',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C14重量(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield300',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../ro',
							name : 'entity/ro',
							decimalPrecision : 2,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'RO水重量(KG)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield300',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001321',
							// valueField : "operatorId",
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../operatorId',
							hiddenName : 'entity/operatorId',
							fieldLabel : '配料人'
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/relationId'
						}, {
							xtype : 'hidden',
							dataIndex : 'remain',
							ref : '../../remain'
						}, {
							xtype : 'hidden',
							name : 'entity/operatorName',
							ref : '../../operatorName'
						}]
			}]
		});
	}

	this.initListWindow4Dilute = function() {
		var _this = this;

		this.queryPanel4Dilute = new Ext.fn.QueryPanel({
					height : 45,
					columns : 2,
					border : true,
					region : 'north',
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								readOnly : true,
								fieldLabel : '母液批号',
								ref : '../batchNo'
							}, {
								xtype : 'textfield',
								readOnly : true,
								fieldLabel : '料液类型',
								ref : '../type'
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								name : 'condition/relationId'
							}]
				});

		this.queryPanel4Dilute.buttons[0].hide();
		this.queryPanel4Dilute.buttons[1].hide();

		var selModel4Dilute = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel4Dilute = this.listPanel4Dilute || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			delUrl : 'com.keensen.ump.produce.diaphragm.make.pva.deletePvaList.biz.ext',

			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelList
					}],

			hsPage : false,
			autoScroll : true,
			selModel : selModel4Dilute,
			columns : [new Ext.grid.RowNumberer(), selModel4Dilute, {
						dataIndex : 'batchNo',
						header : '料液批号'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mptype',
						header : '膜片型号'
					}, {
						dataIndex : 'weight',
						header : '稀释配料<br>重量(KG)'
					}, {
						dataIndex : 'used',
						header : '母液重量(KG)'
					}, {
						dataIndex : 'c90',
						header : 'C90重量(g)'
					}, {
						dataIndex : 'c14',
						header : 'C14重量(g)'
					}, {
						dataIndex : 'ro',
						header : 'RO水重量(KG)'
					}, {
						dataIndex : 'operatorName',
						header : '配料人'
					}, {
						dataIndex : 'createTime',
						header : '配料时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.pva.queryPvaList.biz.ext',
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
							name : 'batchNo'
						}, {
							name : 'line'
						}, {
							name : 'weight'
						}, {
							name : 'mptype'
						}, {
							name : 'used'
						}, {
							name : 'c90'
						}, {
							name : 'c14'
						}, {
							name : 'ro'
						}, {
							name : 'operatorId'
						}, {
							name : 'operatorName'
						}]
			})
		})

		this.listWindow4Dilute = this.listWindow4Dilute || new Ext.Window({
					title : '稀释配料记录',
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
					items : [this.queryPanel4Dilute, this.listPanel4Dilute],
					buttons : [{
								text : "导出",
								scope : this,
								iconCls : 'icon-application_excel',
								handler : this.exportExcel2
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.listWindow4Dilute.hide();
								}
							}]

				});

	}

}