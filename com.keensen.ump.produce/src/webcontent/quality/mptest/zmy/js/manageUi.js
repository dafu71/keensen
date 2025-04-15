com.keensen.ump.produce.quality.mptest.zmyMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestzmymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	// 初始化store
	this.initStore = function() {

		this.mptypeStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.mpzmytest.queryZmyStd.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'code'
					}, {
						name : 'mptype'
					}, {
						name : 'line'
					}, {
						name : 'c11'
					}, {
						name : 'c12'
					}, {
						name : 'c13'
					}, {
						name : 'c14'
					}]
		})

		
		this.concentrationStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['16%', '16%'], ['17%', '17%'], ['18%', '18%']]
				});

		this.machineStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', '罗斯混料机A'], ['B', '豪杰特混料机B'], ['C', '豪杰特混料机C']]
				});

		this.tankStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'],
							['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'],
							['9', '9'], ['A', 'A'], ['B', 'B'], ['C', 'C'],
							['D', 'D'], ['E', 'E'], ['F', 'F']]
				});

		
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【铸膜液浓度查询】',
					fields : [{
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '混料机',
								ref : '../../machine',
								hiddenName : 'condition/machine',
								// allowBlank : false,
								anchor : '85%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.machineStore,
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
								// allowBlank : false,
								mode : 'local',
								fieldLabel : '产品类型',
								ref : '../mptype',
								hiddenName : 'condition/mptype',
								// allowBlank : false,
								anchor : '95%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.mptypeStore,
								displayField : "mptype",
								valueField : "mptype",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}/*
								 * {
								 * 
								 * xtype : 'combobox', fieldLabel : '产品类型', ref :
								 * '../mptype', hiddenName : 'condition/mptype',
								 * emptyText : '--请选择--', allowBlank : true,
								 * editable : false, anchor : '85%', store :
								 * [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
								 * ['NF', 'NF']], listeners : { scope : this,
								 * 'expand' : function(A) {
								 * this.queryPanel.mptype.reset(); } } }
								 */, {
								ref : '../batchNo',
								name : 'condition/batchNo',
								anchor : '85%',
								xtype : 'textfield',
								fieldLabel : '铸膜液批号',
								allowBlank : true
							}, {

								xtype : 'combobox',
								fieldLabel : '当前步骤',
								ref : '../step',
								hiddenName : 'condition/step',
								emptyText : '--请选择--',
								allowBlank : true,
								editable : false,
								anchor : '85%',
								store : [['first', '分析'], ['second', '重新取样'],
										['third', '配料'], ['produce', '生产使用']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.step.reset();
									}
								}
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "分析室测试任务看板",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onBoard
				});
		this.queryPanel.addButton({
					text : "产线配料任务看板",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onBoard2
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【铸膜液浓度列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [/*
					 * { text : '新增', scope : this, iconCls :
					 * 'icon-application_add', handler : this.onAdd }, '-',
					 */{
						text : '分析',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}/*
						 * , '-', { text : '调整', scope : this, iconCls :
						 * 'icon-application_edit', handler : this.onEdit2 }
						 */, '-', {
						text : '重新取样',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit5
					}, '-', {
						text : '配料',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit3
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'machine',
						header : '混料机'
					}, {
						dataIndex : 'mptype',
						header : '产品类型'
					}, {
						dataIndex : 'batchNo',
						header : '铸膜液批号'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}, {
						dataIndex : 'stepName',
						header : '当前步骤'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest.queryZmyRecordsByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
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
							name : 'line'
						}, {
							name : 'mptype'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'stateName'
						}, {
							name : 'step'
						}, {
							name : 'stepName'
						}, {
							name : 'machine'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增铸膜液浓度配料',
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
				saveUrl : 'com.keensen.ump.produce.quality.mptest.saveZmy.biz.ext',
				fields : [{
							ref : '../../batchNo',
							value : '自动生成',
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '铸膜液批号',
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
							anchor : '85%',
							colspan : 2,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.line.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '产品类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['BW', 'BW'], ['ULP', 'ULP'],
									['SW', 'SW'], ['NF', 'NF']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/dmfPlan',
							allowBlank : false,
							fieldLabel : '计划添加DMF',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/polysulfonePlan',
							allowBlank : false,
							fieldLabel : '计划添加聚砜',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/dmfReality',
							allowBlank : false,
							fieldLabel : '实际添加DMF',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/polysulfoneReality',
							allowBlank : false,
							fieldLabel : '实际添加聚砜',
							anchor : '85%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '分析',
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
				loadUrl : 'com.keensen.ump.produce.quality.mptest.expandZmyList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest.modiZmyListByFirst.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '铸膜液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '混料机',
							ref : '../../machine',
							dataIndex : 'machine',
							anchor : '85%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '产品类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'c11',
							fieldLabel : 'C11重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c12',
							fieldLabel : 'C12重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'c13',
							fieldLabel : 'C13重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c14',
							fieldLabel : 'C14重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'concentration',
							fieldLabel : '聚砜浓度',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'std',
							fieldLabel : '粘度标准',
							ref : '../../std',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/reserve5',
							ref : '../../reserve5',
							value : 1,
							allowBlank : false,
							fieldLabel : '送样次数',
							anchor : '85%',
							colspan : 1,
							listeners : {
								'blur' : function(o) {
									var cnt = o.getValue();
									var cps = _this.editWindow.cps.getValue();
									var std = _this.editWindow.std.getValue();
									if (Ext.isEmpty(cps) || Ext.isEmpty(std)
											|| Ext.isEmpty(cnt))
										return;
									var arr = std.split('-');
									if (Ext.isEmpty(arr) || arr.length != 2)
										return;
									var minValue = arr[0];
									var maxValue = arr[1];
									if (Ext.isEmpty(minValue)
											|| Ext.isEmpty(maxValue))
										return;
									if (parseFloat(cps) >= parseFloat(minValue)
											&& parseFloat(cps) <= parseFloat(maxValue)) {
										_this.editWindow.ifok.setValue(1);
									} else {
										if (parseFloat(cnt) > 1) {
											_this.editWindow.ifok.setValue(2);
										} else {
											_this.editWindow.ifok.setValue(3);
										}
									}

								}
							}
						}, {
							xtype : 'numberfield',
							name : 'list/cps',
							ref : '../../cps',
							allowBlank : false,
							fieldLabel : '铸膜液粘度',
							anchor : '85%',
							colspan : 1,
							listeners : {
								'blur' : function(o) {
									var cps = o.getValue();
									var cnt = _this.editWindow.reserve5
											.getValue();
									var std = _this.editWindow.std.getValue();
									if (Ext.isEmpty(cps) || Ext.isEmpty(std)
											|| Ext.isEmpty(cnt))
										return;
									var arr = std.split('-');
									if (Ext.isEmpty(arr) || arr.length != 2)
										return;
									var minValue = arr[0];
									var maxValue = arr[1];
									if (Ext.isEmpty(minValue)
											|| Ext.isEmpty(maxValue))
										return;
									if (parseFloat(cps) >= parseFloat(minValue)
											&& parseFloat(cps) <= parseFloat(maxValue)) {
										_this.editWindow.ifok.setValue(1);
									} else {
										if (parseFloat(cnt) > 1) {
											_this.editWindow.ifok.setValue(2);
										} else {
											_this.editWindow.ifok.setValue(3);
										}
									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/temperature',
							allowBlank : false,
							fieldLabel : '测试温度',
							anchor : '85%',
							colspan : 1
						}, {

							xtype : 'combobox',
							fieldLabel : '判定选择',
							ref : '../../ifok',
							hiddenName : 'entity/ifok',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							store : [['1', '生产使用'], ['2', '调整'], ['3', '重新取样']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.ifok.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001323',
							valueField : "operatorname",
							allowBlank : false,
							anchor : '85%',
							colspan : 1,
							ref : '../../appointFxy',
							hiddenName : 'list/appointFxy',
							fieldLabel : '分析员'
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'second'
						}]
			}]
		});
	}

	this.initEditWindow2 = function() {
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '调整',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.mptest.expandZmyList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest.modiZmyListBySecond.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '铸膜液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '产品类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'dmfPlan',
							fieldLabel : '原计划添加DMF',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '原计划添加聚砜',
							dataIndex : 'polysulfonePlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '聚砜浓度',
							dataIndex : 'concentration',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '铸膜液粘度',
							dataIndex : 'cps',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'temperature',
							fieldLabel : '测试温度',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '是否合格',
							ref : '../../ifok',
							hiddenName : 'entity/ifok',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							store : [['Y', '是'], ['N', '否']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow2.ifok.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">合格则发生产，不合格则重新配料</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../dmfPlan',
							fieldLabel : '计划添加DMF',
							name : 'list/dmfPlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '计划添加聚砜',
							name : 'list/polysulfonePlan',
							ref : '../../polysulfonePlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'pkid'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'third'
						}]
			}]
		});
	}

	this.initEditWindow3 = function() {
		this.editWindow3 = this.editWindow3 || new Ext.fn.FormWindow({
			title : '配料',
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
				loadUrl : 'com.keensen.ump.produce.quality.mptest.expandZmyList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest.modiZmyListByThird.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '铸膜液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '混料机',
							ref : '../../machine',
							dataIndex : 'machine',
							anchor : '85%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '产品类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/c11',
							allowBlank : false,
							fieldLabel : 'C11重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c12',
							allowBlank : false,
							fieldLabel : 'C12重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/c13',
							fieldLabel : 'C13重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c14',
							fieldLabel : 'C14重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001321',
							valueField : "operatorname",
							allowBlank : false,
							anchor : '85%',
							colspan : 1,
							ref : '../../appointPly',
							hiddenName : 'list/appointPly',
							fieldLabel : '配料人'
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'first'
						}]
			}]
		});
	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【详情】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			tbar : [],
			hsPage : false,
			autoScroll : true,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'concentration',
						header : '聚砜浓度'
					}, {
						dataIndex : 'cps',
						header : '铸膜液粘度'
					}, {
						dataIndex : 'temperature',
						header : '测试温度'
					}, {
						dataIndex : 'c11',
						header : 'C11重量(kg)'
					}, {
						dataIndex : 'c12',
						header : 'C12重量(kg)'
					}, {
						dataIndex : 'c13',
						header : 'C13重量(kg)'
					}, {
						dataIndex : 'c13',
						header : 'C13重量(kg)'
					}, {
						dataIndex : 'appointFxy',
						header : '分析员'
					}, {
						dataIndex : 'appointPly',
						header : '配料员'
					}, {
						dataIndex : 'firstDate',
						header : '接样时间'
					}, {
						dataIndex : 'secondDate',
						header : '重新取样时间'
					}, {
						dataIndex : 'thirdDate',
						header : '配料时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest.queryZmyListRecords.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'pkid'
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
							name : 'concentration'
						}, {
							name : 'cps'
						}, {
							name : 'temperature'
						}, {
							name : 'dmfPlan'
						}, {
							name : 'polysulfonePlan'
						}, {
							name : 'dmfReality'
						}, {
							name : 'polysulfoneReality'
						}, {
							name : 'firstName'
						}, {
							name : 'firstId'
						}, {
							name : 'secondName'
						}, {
							name : 'secondId'
						}, {
							name : 'thirdName'
						}, {
							name : 'thirdId'
						}, {
							name : 'firstDate'
						}, {
							name : 'secondDate'
						}, {
							name : 'thirdDate'
						}, {
							name : 'relationId'
						}, {
							name : 'line'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'mptype'
						}, {
							name : 'c11'
						}, {
							name : 'c12'
						}, {
							name : 'c13'
						}, {
							name : 'c14'
						}, {
							name : 'appointFxy'
						}, {
							name : 'appointPly'
						}, {
							name : 'step'
						}]
			})
		})

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '测试明细',
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
					items : [this.listPanel2],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.viewWindow.hide();
								}
							}]

				});

	}
}