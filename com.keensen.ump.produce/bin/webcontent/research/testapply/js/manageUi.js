com.keensen.ump.research.TestapplyMgr = function() {
	this.initPanel = function() {

		this.opt = '';
		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();

		this.initCheckWindow();

		this.initEditWindow();
		this.initApproveWindow();

		this.initOtherApproveWindow();

		this.initScApproveWindow();
		this.initYfApproveWindow();
		this.initApproveListWindow();
		this.initYfApproveWindow();
		this.initJhApproveWindow();

		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'testapplymgr',
					panels : [this.queryPanel, this.listPanel]
				});

	}

	this.initStore = function() {
		this.kindStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['工艺一级验证', '工艺一级验证'], ['工艺二级验证', '工艺二级验证'],
							['元件', '元件'], ['其他', '其他']]
				});

		this.craftStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['常规工艺', '常规工艺'], ['其他工艺', '其他工艺']]
				});

		this.lineStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],
							['E', 'E'], ['F', 'F']]
				});

		this.adviseStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['同意', '同意'], ['条件同意', '条件同意'], ['不同意', '不同意']]
				});

		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['重新制定', '重新制定'], ['研发中心审核', '研发中心审核'],
							['膜片制造部审核', '膜片制造部审核'], ['元件制造部审核', '元件制造部审核'],
							['生产管理部审核', '生产管理部审核'], ['设备能源部审核', '设备能源部审核'],
							['质量管理部审核', '质量管理部审核'], ['预研部审核', '预研部审核'],
							['研发助理处理', '研发助理处理'], ['计划员确认', '计划员确认'],
							['完成', '完成']]
				});

		this.otherStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['设备能源部审核', '设备能源部审核'], ['质量管理部审核', '质量管理部审核'],
							['预研部审核', '预研部审核']]
				});

		this.mpAndProdStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['研发中心审核', '研发中心审核'], ['生产管理部审核', '生产管理部审核'],
							['其它部门审核', '其它部门审核']]
				});

		this.diaphragmTestStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.testtrace.queryDiaphragmTest.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'materSpecName'
					}, {
						name : 'materSpecId'
					}, {
						name : 'materCode'
					}, {
						name : 'prodSpecName'
					}, {
						name : 'prodSpecId'
					}, {
						name : 'length'
					}]
		})

		this.applyListStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.reseach.testapply.queryList.biz.ext',
			root : 'data',
			autoLoad : false,
			totalProperty : '',
			baseParams : {},
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
						name : 'amount'
					}, {
						name : 'relationId'
					}, {
						name : 'specName'
					}, {
						name : 'batchNo'
					}, {
						name : 'specId'
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
					// title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								fieldLabel : '实验编号'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '实验种类',
								ref : '../kind',
								hiddenName : 'condition/kind',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.kindStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.kind.reset()
									}
								}
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/applyDateStart',
										'condition/applyDateEnd'],
								fieldLabel : "申请日期",
								format : "Y-m-d"
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '审请单状态',
								ref : '../state',
								hiddenName : 'condition/state',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.stateStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.state.reset()
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
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '重新制定',
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
					}, '-', {
						text : '审批记录',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onApproveList
					}, '->', {
						text : '研发中心审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCheck
					}, '-', {
						text : '膜片制造部审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Mp
					}, '-', {
						text : '元件制造部审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Prod
					}, '-', {
						text : '设备能源部审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Sb
					}, '-', {
						text : '质量管理部审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Zl
					}, '-', {
						text : '预研部审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Yy
					}, '-', {
						text : '生产管理部审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Sc
					}, '-', {
						text : '研发助理处理',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Yf
					}, '-', {
						text : '计划员确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onApprove2Jh
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.reseach.testapply.deleteApply.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '实验编号'
					}, {
						dataIndex : 'purpose',
						header : '目的'
					}, {
						dataIndex : 'manager',
						header : '实验负责人'
					}, {
						dataIndex : 'applyDate',
						header : '申请日期'
					}, {
						dataIndex : 'kind',
						header : '实验种类'
					}, {
						dataIndex : 'line',
						header : '膜片制备线体'
					}, {
						dataIndex : 'projectCode',
						header : '所属项目编号'
					}, {
						dataIndex : 'k3Code',
						header : 'K3系统任务单号'
					}, {
						dataIndex : 'state',
						width : 200,
						header : '审请单状态',
						renderer : function(v, m, r, i) {
							return v.length > 0 ? v.slice(0, -1) + '' : v;
						}
					}

			],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.reseach.testapply.queryHeadByPage.biz.ext',
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
							name : 'projectCode'
						}, {
							name : 'k3Code'
						}, {
							name : 'content'
						}, {
							name : 'tmDate'
						}, {
							name : 'jmDate'
						}, {
							name : 'qjDate'
						}, {
							name : 'wtDate'
						}, {
							name : 'craft'
						}, {
							name : 'page'
						}, {
							name : 'thickNet'
						}, {
							name : 'thinNet'
						}, {
							name : 'other'
						}, {
							name : 'msize'
						}, {
							name : 'state'
						}, {
							name : 'code'
						}, {
							name : 'purpose'
						}, {
							name : 'manager'
						}, {
							name : 'applyDate'
						}, {
							name : 'kind'
						}, {
							name : 'line'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4AddList = this.listPanel4AddList
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddList
							}, '-', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelList
							}],
					autoScroll : false,
					selModel : selModel4List,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4List, {
								dataIndex : 'batchNo',
								header : '涂膜批号'
							}, {
								dataIndex : 'specName',
								header : '卷制型号'
							}, {
								dataIndex : 'amount',
								header : '数量'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.reseach.testapply.queryList.biz.ext',
						root : 'data',
						autoLoad : true,
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
									name : 'amount'
								}, {
									name : 'relationId'
								}, {
									name : 'specName'
								}, {
									name : 'batchNo'
								}, {
									name : 'specId'
								}]
					})
				})

		this.addPanel = this.addPanel || new Ext.fn.InputPanel({
					height : 320,
					region : 'north',
					baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 24,
					// loadUrl :
					// 'com.keensen.ump.produce.component.yxorderbase.expandConfirm.biz.ext',
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'textfield',
								name : 'code',
								allowBlank : false,
								fieldLabel : '实验编号',
								colspan : 12
							}, {
								xtype : 'textfield',
								name : 'purpose',
								allowBlank : false,
								fieldLabel : '目的',
								colspan : 12
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'textfield',
								name : 'manager',
								allowBlank : false,
								readOnly : true,
								value : uname,
								fieldLabel : '实验负责人',
								colspan : 8
							}, {
								xtype : 'datefield',
								// name : 'purpose',
								allowBlank : false,
								readOnly : true,
								value : new Date(),
								fieldLabel : '申请日期',
								format : 'Y-m-d',
								colspan : 8
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '实验种类',
								ref : '../kind',
								hiddenName : 'kind',
								anchor : '100%',
								colspan : 8,
								emptyText : '--请选择--',
								allowBlank : false,
								editable : false,
								store : this.kindStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.addPanel.kind.reset()
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '膜片制备线体',
								ref : '../line',
								hiddenName : 'line',
								anchor : '100%',
								colspan : 8,
								emptyText : '--请选择--',
								allowBlank : false,
								editable : false,
								store : this.lineStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.addPanel.line.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'projectCode',
								allowBlank : false,
								fieldLabel : '所属项目编号',
								colspan : 8
							}, {
								xtype : 'textfield',
								name : 'k3Code',
								allowBlank : false,
								fieldLabel : 'K3系统任务单号',
								colspan : 8
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'textarea',
								name : 'content',
								allowBlank : false,
								fieldLabel : '实验内容',
								colspan : 24
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'datefield',
								name : 'tmDate',
								allowBlank : false,
								fieldLabel : '膜片上线&nbsp;&nbsp;<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'datefield',
								name : 'jmDate',
								allowBlank : false,
								fieldLabel : '卷膜完成&nbsp;&nbsp;<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'datefield',
								name : 'qjDate',
								allowBlank : false,
								fieldLabel : '气检完成&nbsp;&nbsp;<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'datefield',
								name : 'wtDate',
								allowBlank : false,
								fieldLabel : '水测完成&nbsp;&nbsp;<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '元件工艺',
								ref : '../craft',
								hiddenName : 'craft',
								anchor : '100%',
								colspan : 8,
								emptyText : '--请选择--',
								editable : false,
								store : this.craftStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.addPanel.craft.reset()
									},
									"change" : function(o, newValue, oldValue) {
										if (o.getValue() == '常规工艺') {
											_this.addPanel.msize
													.setValue('常规工艺');
											_this.addPanel.page
													.setValue('常规工艺');
											_this.addPanel.thickNet
													.setValue('常规工艺');
											_this.addPanel.thinNet
													.setValue('常规工艺');
											_this.addPanel.msize
													.setReadOnly(true);
											_this.addPanel.page
													.setReadOnly(true);
											_this.addPanel.thickNet
													.setReadOnly(true);
											_this.addPanel.thinNet
													.setReadOnly(true);
										} else {
											_this.addPanel.msize
													.setReadOnly(false);
											_this.addPanel.page
													.setReadOnly(false);
											_this.addPanel.thickNet
													.setReadOnly(false);
											_this.addPanel.thinNet
													.setReadOnly(false);
										}
									}
								}
							}, {
								xtype : 'textfield',
								name : 'msize',
								ref : '../msize',
								allowBlank : false,
								fieldLabel : '膜片下料<br>尺寸(mm)',
								colspan : 8
							}, {
								xtype : 'textfield',
								name : 'page',
								ref : '../page',
								allowBlank : false,
								fieldLabel : '膜片页数(页)',
								colspan : 8
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'textfield',
								name : 'thickNet',
								ref : '../thickNet',
								allowBlank : false,
								fieldLabel : '浓网规格(mil)',
								colspan : 8
							}, {
								xtype : 'textfield',
								name : 'thinNet',
								ref : '../thinNet',
								allowBlank : false,
								fieldLabel : '淡网规格(mm)',
								colspan : 8
							}, {
								xtype : 'textfield',
								name : 'other',
								allowBlank : false,
								fieldLabel : '其他',
								colspan : 8
							}, {
								xtype : 'hidden',
								name : 'state',
								value : '研发中心审核|'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveAdd
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.addPanel.form.reset();
									this.inputWindow.hide();
								}
							}]

				})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '新增审请单',
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
					items : [this.addPanel, this.listPanel4AddList]

				});

		this.addListWindow = this.addListWindow || new Ext.fn.FormWindow({
					title : '新增涂膜批次',
					height : 300,
					width : 480,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						columns : 2,
						saveUrl : '1.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									ref : '../../batchNo',
									fieldLabel : '涂膜批号',
									allowBlank : false,
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'combo',
									fieldLabel : '卷制型号',
									allowBlank : false,
									typeAhead : true,
									typeAheadDelay : 100,
									triggerAction : "all",
									lazyRender : true,
									mode : 'local',
									emptyText : '--请选择--',
									ref : '../../specName',
									lastQuery : '',
									store : _this.diaphragmTestStore,
									anchor : '95%',
									colspan : 2,
									hiddenName : 'prodSpecName',
									editable : true,
									valueField : 'prodSpecName',
									displayField : 'prodSpecName',
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'select' : function(combo, record,
												eOpts) {
											this.addListWindow.specId
													.setValue(record.data.prodSpecId);

										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									allowBlank : false,
									ref : '../../amount',
									anchor : '95%',
									fieldLabel : '数量',
									colspan : 2
								}, {
									xtype : 'hidden',
									ref : '../../specId'
								}]
					}]
				});

		this.addListWindow.buttons[0].hide();
		this.addListWindow.buttons[1].hide();

		this.addListWindow.addButton({
					text : "新增",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onInsertList
				});

		this.addListWindow.addButton({
					text : "新增并关闭",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onInsertList2
				});

		this.addListWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.addListWindow.items.items[0].form.reset();
						this.addListWindow.hide();
					}
				});

	}

	this.initCheckWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4CheckList = this.listPanel4CheckList
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : true
							},
							hsPage : false,

							autoScroll : false,
							selModel : selModel4List,
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4List, {
										dataIndex : 'batchNo',
										header : '涂膜批号'
									}, {
										dataIndex : 'specName',
										header : '卷制型号'
									}, {
										dataIndex : 'amount',
										header : '数量'
									}],
							store : this.applyListStore
						})

		this.checkPanel = this.checkPanel || new Ext.fn.EditPanel({
			height : 450,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 24,
			loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'code',
						readOnly : true,
						fieldLabel : '实验编号',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'purpose',
						readOnly : true,
						fieldLabel : '目的',
						colspan : 12
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'manager',
						readOnly : true,
						value : uname,
						fieldLabel : '实验负责人',
						colspan : 8
					}, {
						xtype : 'datefield',
						readOnly : true,
						dataIndex : 'applyDate',
						fieldLabel : '申请日期',
						format : 'Y-m-d',
						colspan : 8
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '实验种类',
						ref : '../kind',
						dataIndex : 'kind',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.kindStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.checkPanel.kind.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片制备线体',
						ref : '../line',
						dataIndex : 'line',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.lineStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.checkPanel.line.reset()
							}
						}
					}, {
						xtype : 'textfield',
						dataIndex : 'projectCode',
						readOnly : true,
						fieldLabel : '所属项目编号',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'k3Code',
						readOnly : true,
						fieldLabel : 'K3系统任务单号',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						dataIndex : 'content',
						readOnly : true,
						fieldLabel : '实验内容',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'datefield',
						dataIndex : 'tmDate',
						readOnly : true,
						fieldLabel : '膜片上线<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'jmDate',
						readOnly : true,
						fieldLabel : '卷膜完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'qjDate',
						readOnly : true,
						fieldLabel : '气检完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'wtDate',
						readOnly : true,
						fieldLabel : '水测完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '元件工艺',
						ref : '../craft',
						dataIndex : 'craft',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.craftStore,
						displayField : "name",
						valueField : "code"
					}, {
						xtype : 'textfield',
						dataIndex : 'msize',
						ref : '../msize',
						readOnly : true,
						fieldLabel : '膜片下料<br>尺寸(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'page',
						ref : '../page',
						readOnly : true,
						fieldLabel : '膜片页数(页)',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'thickNet',
						ref : '../thickNet',
						readOnly : true,
						fieldLabel : '浓网规格(mil)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'thinNet',
						ref : '../thinNet',
						readOnly : true,
						fieldLabel : '淡网规格(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'other',
						readOnly : true,
						fieldLabel : '其他',
						colspan : 8
					}, {
						xtype : 'hidden',
						name : 'state',
						dataIndex : 'state',
						ref : '../state'
					}, {
						xtype : 'hidden',
						name : 'relationId',
						dataIndex : 'id',
						ref : '../relationId'
					}, {
						xtype : 'hidden',
						name : 'step',
						ref : '../step'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						name : 'advise',
						allowBlank : false,
						fieldLabel : '意见',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'radiogroup',
						columns : 3,
						ref : '../nextstep',
						allowBlank : false,
						fieldLabel : '下一步<span style="color:red">*</span>',
						anchor : '90%',
						items : [{
									boxLabel : '重新制定',
									name : 'nextstep',
									inputValue : '0'
								}, {
									boxLabel : '膜片制造部审核',
									name : 'nextstep',
									inputValue : '1'
								}, {
									boxLabel : '元件制造部审核',
									name : 'nextstep',
									inputValue : '2'
								}],
						colspan : 24
					}],
			buttons : [{
						text : "提交",
						scope : this,
						handler : this.onSaveCheck
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.checkPanel.form.reset();
							this.checkWindow.hide();
						}
					}]

		})

		this.checkWindow = this.checkWindow || new Ext.Window({
					title : '审核',
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
					items : [this.checkPanel, this.listPanel4CheckList]

				});

	}

	this.initEditWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4EditList = this.listPanel4EditList
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddList
							}, '-', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelList2
							}],
					autoScroll : false,
					selModel : selModel4List,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4List, {
								dataIndex : 'batchNo',
								header : '涂膜批号'
							}, {
								dataIndex : 'specName',
								header : '卷制型号'
							}, {
								dataIndex : 'amount',
								header : '数量'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.reseach.testapply.queryList.biz.ext',
						root : 'data',
						autoLoad : true,
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
									name : 'amount'
								}, {
									name : 'relationId'
								}, {
									name : 'specName'
								}, {
									name : 'batchNo'
								}, {
									name : 'specId'
								}]
					})
				})

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 320,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 24,
			loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						name : 'code',
						dataIndex : 'code',
						allowBlank : false,
						fieldLabel : '实验编号',
						colspan : 12
					}, {
						xtype : 'textfield',
						name : 'purpose',
						dataIndex : 'purpose',
						allowBlank : false,
						fieldLabel : '目的',
						colspan : 12
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						// name : 'manager',
						dataIndex : 'manager',
						allowBlank : false,
						readOnly : true,
						fieldLabel : '实验负责人',
						colspan : 8
					}, {
						xtype : 'datefield',
						dataIndex : 'applyDate',
						allowBlank : false,
						readOnly : true,
						fieldLabel : '申请日期',
						format : 'Y-m-d',
						colspan : 8
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '实验种类',
						dataIndex : 'kind',
						ref : '../kind',
						hiddenName : 'kind',
						anchor : '100%',
						colspan : 8,
						emptyText : '--请选择--',
						editable : false,
						store : this.kindStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.kind.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片制备线体',
						ref : '../line',
						hiddenName : 'line',
						dataIndex : 'line',
						anchor : '100%',
						colspan : 8,
						emptyText : '--请选择--',
						editable : false,
						store : this.lineStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.line.reset()
							}
						}
					}, {
						xtype : 'textfield',
						name : 'projectCode',
						dataIndex : 'projectCode',
						allowBlank : false,
						fieldLabel : '所属项目编号',
						colspan : 8
					}, {
						xtype : 'textfield',
						name : 'k3Code',
						dataIndex : 'k3Code',
						allowBlank : false,
						fieldLabel : 'K3系统任务单号',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						name : 'content',
						dataIndex : 'content',
						allowBlank : false,
						fieldLabel : '实验内容',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'datefield',
						name : 'tmDate',
						dataIndex : 'tmDate',
						allowBlank : false,
						fieldLabel : '膜片上线<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						name : 'jmDate',
						dataIndex : 'jmDate',
						allowBlank : false,
						fieldLabel : '卷膜完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						name : 'qjDate',
						dataIndex : 'qjDate',
						allowBlank : false,
						fieldLabel : '气检完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						name : 'wtDate',
						dataIndex : 'wtDate',
						allowBlank : false,
						fieldLabel : '水测完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '元件工艺',
						ref : '../craft',
						hiddenName : 'craft',
						dataIndex : 'craft',
						anchor : '100%',
						colspan : 8,
						emptyText : '--请选择--',
						editable : false,
						store : this.craftStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.craft.reset()
							},
							"change" : function(o, newValue, oldValue) {
								if (o.getValue() == '常规工艺') {
									_this.editPanel.msize.setValue('常规工艺');
									_this.editPanel.page.setValue('常规工艺');
									_this.editPanel.thickNet.setValue('常规工艺');
									_this.editPanel.thinNet.setValue('常规工艺');
									_this.editPanel.msize.setReadOnly(true);
									_this.editPanel.page.setReadOnly(true);
									_this.editPanel.thickNet.setReadOnly(true);
									_this.editPanel.thinNet.setReadOnly(true);
								} else {
									_this.editPanel.msize.setReadOnly(false);
									_this.editPanel.page.setReadOnly(false);
									_this.editPanel.thickNet.setReadOnly(false);
									_this.editPanel.thinNet.setReadOnly(false);
								}
							}
						}
					}, {
						xtype : 'textfield',
						name : 'msize',
						dataIndex : 'msize',
						ref : '../msize',
						allowBlank : false,
						fieldLabel : '膜片下料<br>尺寸(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						name : 'page',
						dataIndex : 'page',
						ref : '../page',
						allowBlank : false,
						fieldLabel : '膜片页数(页)',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						name : 'thickNet',
						dataIndex : 'thickNet',
						ref : '../thickNet',
						allowBlank : false,
						fieldLabel : '浓网规格(mil)',
						colspan : 8
					}, {
						xtype : 'textfield',
						name : 'thinNet',
						dataIndex : 'thinNet',
						ref : '../thinNet',
						allowBlank : false,
						fieldLabel : '淡网规格(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						name : 'other',
						dataIndex : 'other',
						allowBlank : false,
						fieldLabel : '其他',
						colspan : 8
					}, {
						xtype : 'textfield',
						name : 'state',
						ref : '../state',
						value : '研发中心审核|'
					}, {
						xtype : 'hidden',
						name : 'id',
						dataIndex : 'id'
					}],
			buttons : [{
						text : "保存",
						scope : this,
						handler : this.onSaveEdit
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel.form.reset();
							this.editWindow.hide();
						}
					}]

		})

		this.editWindow = this.editWindow || new Ext.Window({
					title : '修改审请单',
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
					items : [this.editPanel, this.listPanel4EditList]

				});

	}

	this.initApproveWindow = function() {

		var _this = this;

		this.otherStatecombo = new Ext.form.ComboBox({
			store : _this.otherStateStore,
			ref : '../otherState',
			colspan : 16,
			anchor : '100%',
			fieldLabel : '其它部门审核',
			displayField : 'name',
			valueField : 'code',
			myvalue : '',
			typeAhead : true,
			mode : 'local',
			// name : 'condition/storageIds',
			// hiddenName: 'condition/storageIds',
			tpl : '<tpl for="."><div class="x-combo-list-item"><span><input type="checkbox" {[values.check?"checked":""]} value="{[values.code]}" /></span><span >{name}</span></div></tpl>',
			triggerAction : 'all',
			emptyText : '--请选择--',
			selectOnFocus : true,

			onSelect : function(record, index) {
				if (_this.otherStatecombo.fireEvent('beforeselect',
						_this.otherStatecombo, record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					_this.otherStatecombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('name'));
									strvalue.push(rc.get('code'));
								}
							});
					_this.otherStatecombo.setValue(str.join());
					_this.otherStatecombo.myvalue = strvalue.join();
					_this.otherStatecombo.fireEvent('select',
							_this.otherStatecombo, record, index);
				}
			}
		});

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ApproveList = this.listPanel4ApproveList
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : true
							},
							hsPage : false,

							autoScroll : false,
							selModel : selModel4List,
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4List, {
										dataIndex : 'batchNo',
										header : '涂膜批号'
									}, {
										dataIndex : 'specName',
										header : '卷制型号'
									}, {
										dataIndex : 'amount',
										header : '数量'
									}],
							store : this.applyListStore
						})

		this.approvePanel = this.approvePanel || new Ext.fn.EditPanel({
			height : 450,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 24,
			loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'code',
						readOnly : true,
						fieldLabel : '实验编号',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'purpose',
						readOnly : true,
						fieldLabel : '目的',
						colspan : 12
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'manager',
						readOnly : true,
						value : uname,
						fieldLabel : '实验负责人',
						colspan : 8
					}, {
						xtype : 'datefield',
						readOnly : true,
						dataIndex : 'applyDate',
						fieldLabel : '申请日期',
						format : 'Y-m-d',
						colspan : 8
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '实验种类',
						ref : '../kind',
						dataIndex : 'kind',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.kindStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.approvePanel.kind.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片制备线体',
						ref : '../line',
						dataIndex : 'line',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.lineStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.approvePanel.line.reset()
							}
						}
					}, {
						xtype : 'textfield',
						dataIndex : 'projectCode',
						readOnly : true,
						fieldLabel : '所属项目编号',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'k3Code',
						readOnly : true,
						fieldLabel : 'K3系统任务单号',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						dataIndex : 'content',
						readOnly : true,
						fieldLabel : '实验内容',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'datefield',
						dataIndex : 'tmDate',
						readOnly : true,
						fieldLabel : '膜片上线<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'jmDate',
						readOnly : true,
						fieldLabel : '卷膜完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'qjDate',
						readOnly : true,
						fieldLabel : '气检完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'wtDate',
						readOnly : true,
						fieldLabel : '水测完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '元件工艺',
						ref : '../craft',
						dataIndex : 'craft',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.craftStore,
						displayField : "name",
						valueField : "code"
					}, {
						xtype : 'textfield',
						dataIndex : 'msize',
						ref : '../msize',
						readOnly : true,
						fieldLabel : '膜片下料<br>尺寸(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'page',
						ref : '../page',
						readOnly : true,
						fieldLabel : '膜片页数(页)',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'thickNet',
						ref : '../thickNet',
						readOnly : true,
						fieldLabel : '浓网规格(mil)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'thinNet',
						ref : '../thinNet',
						readOnly : true,
						fieldLabel : '淡网规格(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'other',
						readOnly : true,
						fieldLabel : '其他',
						colspan : 8
					}, {
						xtype : 'hidden',
						name : 'state',
						ref : '../state'
					}, {
						xtype : 'hidden',
						name : 'step',
						ref : '../step'
					}, {
						xtype : 'hidden',
						name : 'relationId',
						dataIndex : 'id',
						ref : '../relationId'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '意见',
						emptyText : '--请选择--',
						allowBlank : false,
						ref : '../advise',
						hiddenName : 'advise',
						anchor : '100%',
						colspan : 8,
						store : this.adviseStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.approvePanel.advise.reset()
							}
						}
					}, {
						xtype : 'textarea',
						name : 'describe',
						allowBlank : false,
						fieldLabel : '理由',
						colspan : 16
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '下一步',
						allowBlank : false,
						ref : '../nextstep',
						anchor : '100%',
						colspan : 8,
						store : this.mpAndProdStateStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.approvePanel.step.reset()
							},
							"change" : function(o, newValue, oldValue) {

							}
						}
					}, this.otherStatecombo],
			buttons : [{
						text : "提交",
						scope : this,
						handler : this.onSaveApprove4MpAndProd
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.approvePanel.form.reset();
							this.approveWindow.hide();
						}
					}]

		})

		this.approveWindow = this.approveWindow || new Ext.Window({
					title : '评审',
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
					items : [this.approvePanel, this.listPanel4ApproveList]

				});

	}

	this.initOtherApproveWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4OtherApprove = this.listPanel4OtherApprove
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : true
							},
							hsPage : false,

							autoScroll : false,
							selModel : selModel4List,
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4List, {
										dataIndex : 'batchNo',
										header : '涂膜批号'
									}, {
										dataIndex : 'specName',
										header : '卷制型号'
									}, {
										dataIndex : 'amount',
										header : '数量'
									}],
							store : this.applyListStore
						})

		this.otherApprovePanel = this.otherApprovePanel
				|| new Ext.fn.EditPanel({
					height : 450,
					region : 'north',
					baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 24,
					loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'textfield',
								dataIndex : 'code',
								readOnly : true,
								fieldLabel : '实验编号',
								colspan : 12
							}, {
								xtype : 'textfield',
								dataIndex : 'purpose',
								readOnly : true,
								fieldLabel : '目的',
								colspan : 12
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'textfield',
								dataIndex : 'manager',
								readOnly : true,
								value : uname,
								fieldLabel : '实验负责人',
								colspan : 8
							}, {
								xtype : 'datefield',
								readOnly : true,
								dataIndex : 'applyDate',
								fieldLabel : '申请日期',
								format : 'Y-m-d',
								colspan : 8
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '实验种类',
								ref : '../kind',
								dataIndex : 'kind',
								anchor : '100%',
								colspan : 8,
								readOnly : true,
								store : this.kindStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.otherApprovePanel.kind.reset()
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '膜片制备线体',
								ref : '../line',
								dataIndex : 'line',
								anchor : '100%',
								colspan : 8,
								readOnly : true,
								store : this.lineStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.otherApprovePanel.line.reset()
									}
								}
							}, {
								xtype : 'textfield',
								dataIndex : 'projectCode',
								readOnly : true,
								fieldLabel : '所属项目编号',
								colspan : 8
							}, {
								xtype : 'textfield',
								dataIndex : 'k3Code',
								readOnly : true,
								fieldLabel : 'K3系统任务单号',
								colspan : 8
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'textarea',
								dataIndex : 'content',
								readOnly : true,
								fieldLabel : '实验内容',
								colspan : 24
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'datefield',
								dataIndex : 'tmDate',
								readOnly : true,
								fieldLabel : '膜片上线<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'datefield',
								dataIndex : 'jmDate',
								readOnly : true,
								fieldLabel : '卷膜完成<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'datefield',
								dataIndex : 'qjDate',
								readOnly : true,
								fieldLabel : '气检完成<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'datefield',
								dataIndex : 'wtDate',
								readOnly : true,
								fieldLabel : '水测完成<br>日期需求',
								format : 'Y-m-d',
								colspan : 6
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '元件工艺',
								ref : '../craft',
								dataIndex : 'craft',
								anchor : '100%',
								colspan : 8,
								readOnly : true,
								store : this.craftStore,
								displayField : "name",
								valueField : "code"
							}, {
								xtype : 'textfield',
								dataIndex : 'msize',
								ref : '../msize',
								readOnly : true,
								fieldLabel : '膜片下料<br>尺寸(mm)',
								colspan : 8
							}, {
								xtype : 'textfield',
								dataIndex : 'page',
								ref : '../page',
								readOnly : true,
								fieldLabel : '膜片页数(页)',
								colspan : 8
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'textfield',
								dataIndex : 'thickNet',
								ref : '../thickNet',
								readOnly : true,
								fieldLabel : '浓网规格(mil)',
								colspan : 8
							}, {
								xtype : 'textfield',
								dataIndex : 'thinNet',
								ref : '../thinNet',
								readOnly : true,
								fieldLabel : '淡网规格(mm)',
								colspan : 8
							}, {
								xtype : 'textfield',
								dataIndex : 'other',
								readOnly : true,
								fieldLabel : '其他',
								colspan : 8
							}, {
								xtype : 'hidden',
								name : 'state',
								ref : '../state'
							}, {
								xtype : 'hidden',
								name : 'step',
								ref : '../step'
							}, {
								xtype : 'hidden',
								name : 'relationId',
								dataIndex : 'id',
								ref : '../relationId'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '意见',
								emptyText : '--请选择--',
								allowBlank : false,
								ref : '../advise',
								hiddenName : 'advise',
								anchor : '100%',
								colspan : 8,
								store : this.adviseStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.otherApprovePanel.advise.reset()
									}
								}
							}, {
								xtype : 'textarea',
								name : 'describe',
								allowBlank : false,
								fieldLabel : '理由',
								colspan : 16
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 24
							}, {
								xtype : 'radiogroup',
								columns : 2,
								ref : '../nextstep',
								allowBlank : false,
								fieldLabel : '是否需要研发<br>中心重新审批<span style="color:red">*</span>',
								anchor : '90%',
								items : [{
											boxLabel : '是',
											name : 'nextstep',
											inputValue : '0'
										}, {
											boxLabel : '否',
											name : 'nextstep',
											checked : true,
											inputValue : '1'
										}],
								colspan : 8
							}],
					buttons : [{
								text : "提交",
								scope : this,
								handler : this.onSaveOtherApprove
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.otherApprovePanel.form.reset();
									this.otherApproveWindow.hide();
								}
							}]

				})

		this.otherApproveWindow = this.otherApproveWindow || new Ext.Window({
					title : '审核',
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
					items : [this.otherApprovePanel,
							this.listPanel4OtherApprove]

				});

	}

	this.initScApproveWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ScApprove = this.listPanel4ScApprove
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : true
							},
							hsPage : false,

							autoScroll : false,
							selModel : selModel4List,
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4List, {
										dataIndex : 'batchNo',
										header : '涂膜批号'
									}, {
										dataIndex : 'specName',
										header : '卷制型号'
									}, {
										dataIndex : 'amount',
										header : '数量'
									}],
							store : this.applyListStore
						})

		this.scApprovePanel = this.scApprovePanel || new Ext.fn.EditPanel({
			height : 450,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 24,
			loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'code',
						readOnly : true,
						fieldLabel : '实验编号',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'purpose',
						readOnly : true,
						fieldLabel : '目的',
						colspan : 12
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'manager',
						readOnly : true,
						value : uname,
						fieldLabel : '实验负责人',
						colspan : 8
					}, {
						xtype : 'datefield',
						readOnly : true,
						dataIndex : 'applyDate',
						fieldLabel : '申请日期',
						format : 'Y-m-d',
						colspan : 8
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '实验种类',
						ref : '../kind',
						dataIndex : 'kind',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.kindStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.scApprovePanel.kind.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片制备线体',
						ref : '../line',
						dataIndex : 'line',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.lineStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.scApprovePanel.line.reset()
							}
						}
					}, {
						xtype : 'textfield',
						dataIndex : 'projectCode',
						readOnly : true,
						fieldLabel : '所属项目编号',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'k3Code',
						readOnly : true,
						fieldLabel : 'K3系统任务单号',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						dataIndex : 'content',
						readOnly : true,
						fieldLabel : '实验内容',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'datefield',
						dataIndex : 'tmDate',
						readOnly : true,
						fieldLabel : '膜片上线<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'jmDate',
						readOnly : true,
						fieldLabel : '卷膜完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'qjDate',
						readOnly : true,
						fieldLabel : '气检完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'wtDate',
						readOnly : true,
						fieldLabel : '水测完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '元件工艺',
						ref : '../craft',
						dataIndex : 'craft',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.craftStore,
						displayField : "name",
						valueField : "code"
					}, {
						xtype : 'textfield',
						dataIndex : 'msize',
						ref : '../msize',
						readOnly : true,
						fieldLabel : '膜片下料<br>尺寸(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'page',
						ref : '../page',
						readOnly : true,
						fieldLabel : '膜片页数(页)',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'thickNet',
						ref : '../thickNet',
						readOnly : true,
						fieldLabel : '浓网规格(mil)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'thinNet',
						ref : '../thinNet',
						readOnly : true,
						fieldLabel : '淡网规格(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'other',
						readOnly : true,
						fieldLabel : '其他',
						colspan : 8
					}, {
						xtype : 'hidden',
						name : 'state',
						ref : '../state'
					}, {
						xtype : 'hidden',
						name : 'step',
						ref : '../step'
					}, {
						xtype : 'hidden',
						name : 'relationId',
						dataIndex : 'id',
						ref : '../relationId'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '意见',
						emptyText : '--请选择--',
						allowBlank : false,
						ref : '../advise',
						hiddenName : 'advise',
						anchor : '100%',
						colspan : 8,
						store : this.adviseStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.scApprovePanel.advise.reset()
							}
						}
					}, {
						xtype : 'textarea',
						name : 'describe',
						allowBlank : false,
						fieldLabel : '理由',
						colspan : 16
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'radiogroup',
						columns : 2,
						ref : '../nextstep',
						allowBlank : false,
						fieldLabel : '是否需要研发<br>中心重新审批<span style="color:red">*</span>',
						anchor : '90%',
						items : [{
									boxLabel : '是',
									name : 'nextstep',
									inputValue : '0'
								}, {
									boxLabel : '否',
									name : 'nextstep',
									checked : true,
									inputValue : '1'
								}],
						colspan : 8
					}],
			buttons : [{
						text : "提交",
						scope : this,
						handler : this.onSaveScApprove
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.scApprovePanel.form.reset();
							this.scApproveWindow.hide();
						}
					}]

		})

		this.scApproveWindow = this.scApproveWindow || new Ext.Window({
					title : '审核',
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
					items : [this.scApprovePanel, this.listPanel4ScApprove]

				});

	}

	this.initYfApproveWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4YfApprove = this.listPanel4YfApprove
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : true
							},
							hsPage : false,

							autoScroll : false,
							selModel : selModel4List,
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4List, {
										dataIndex : 'batchNo',
										header : '涂膜批号'
									}, {
										dataIndex : 'specName',
										header : '卷制型号'
									}, {
										dataIndex : 'amount',
										header : '数量'
									}],
							store : this.applyListStore
						})

		this.yfApprovePanel = this.yfApprovePanel || new Ext.fn.EditPanel({
			height : 450,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 24,
			loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'code',
						readOnly : true,
						fieldLabel : '实验编号',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'purpose',
						readOnly : true,
						fieldLabel : '目的',
						colspan : 12
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'manager',
						readOnly : true,
						value : uname,
						fieldLabel : '实验负责人',
						colspan : 8
					}, {
						xtype : 'datefield',
						readOnly : true,
						dataIndex : 'applyDate',
						fieldLabel : '申请日期',
						format : 'Y-m-d',
						colspan : 8
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '实验种类',
						ref : '../kind',
						dataIndex : 'kind',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.kindStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.yfApprovePanel.kind.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片制备线体',
						ref : '../line',
						dataIndex : 'line',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.lineStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.yfApprovePanel.line.reset()
							}
						}
					}, {
						xtype : 'textfield',
						dataIndex : 'projectCode',
						readOnly : true,
						fieldLabel : '所属项目编号',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'k3Code',
						readOnly : true,
						fieldLabel : 'K3系统任务单号',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						dataIndex : 'content',
						readOnly : true,
						fieldLabel : '实验内容',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'datefield',
						dataIndex : 'tmDate',
						readOnly : true,
						fieldLabel : '膜片上线<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'jmDate',
						readOnly : true,
						fieldLabel : '卷膜完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'qjDate',
						readOnly : true,
						fieldLabel : '气检完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'wtDate',
						readOnly : true,
						fieldLabel : '水测完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '元件工艺',
						ref : '../craft',
						dataIndex : 'craft',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.craftStore,
						displayField : "name",
						valueField : "code"
					}, {
						xtype : 'textfield',
						dataIndex : 'msize',
						ref : '../msize',
						readOnly : true,
						fieldLabel : '膜片下料<br>尺寸(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'page',
						ref : '../page',
						readOnly : true,
						fieldLabel : '膜片页数(页)',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'thickNet',
						ref : '../thickNet',
						readOnly : true,
						fieldLabel : '浓网规格(mil)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'thinNet',
						ref : '../thinNet',
						readOnly : true,
						fieldLabel : '淡网规格(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'other',
						readOnly : true,
						fieldLabel : '其他',
						colspan : 8
					}, {
						xtype : 'hidden',
						name : 'state',
						ref : '../state'
					}, {
						xtype : 'hidden',
						name : 'step',
						ref : '../step'
					}, {
						xtype : 'hidden',
						name : 'relationId',
						dataIndex : 'id',
						ref : '../relationId'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						name : 'describe',
						allowBlank : false,
						fieldLabel : '意见',
						colspan : 24
					}],
			buttons : [{
						text : "提交",
						scope : this,
						handler : this.onSaveYfApprove
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.yfApprovePanel.form.reset();
							this.yfApproveWindow.hide();
						}
					}]

		})

		this.yfApproveWindow = this.yfApproveWindow || new Ext.Window({
					title : '审核',
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
					items : [this.yfApprovePanel, this.listPanel4YfApprove]

				});

	}

	this.initApproveListWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.approveListPanel = this.approveListPanel || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : true,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'step',
						header : '审批环节'
					}, {
						dataIndex : 'advise',
						width : 200,
						header : '审批意见'
					}, {
						dataIndex : 'describe',
						width : 300,
						header : '理由'
					}, {
						dataIndex : 'createTime',
						header : '审批时间'
					}, {
						dataIndex : 'createName',
						header : '审批人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.reseach.testapply.queryApprove.biz.ext',
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
							name : 'id'
						}, {
							name : 'relationId'
						}, {
							name : 'advise'
						}, {
							name : 'describe'
						}, {
							name : 'step'
						}]
			})
		})

		this.approveListWindow = this.approveListWindow || new Ext.Window({
					title : '审批记录',
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
					items : [this.approveListPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.approveListWindow.hide();
								}
							}]

				});

	}

	this.initJhApproveWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4JhApprove = this.listPanel4JhApprove
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : true
							},
							hsPage : false,

							autoScroll : false,
							selModel : selModel4List,
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4List, {
										dataIndex : 'batchNo',
										header : '涂膜批号'
									}, {
										dataIndex : 'specName',
										header : '卷制型号'
									}, {
										dataIndex : 'amount',
										header : '数量'
									}],
							store : this.applyListStore
						})

		this.jhApprovePanel = this.jhApprovePanel || new Ext.fn.EditPanel({
			height : 450,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 24,
			loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'code',
						readOnly : true,
						fieldLabel : '实验编号',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'purpose',
						readOnly : true,
						fieldLabel : '目的',
						colspan : 12
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'manager',
						readOnly : true,
						value : uname,
						fieldLabel : '实验负责人',
						colspan : 8
					}, {
						xtype : 'datefield',
						readOnly : true,
						dataIndex : 'applyDate',
						fieldLabel : '申请日期',
						format : 'Y-m-d',
						colspan : 8
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '实验种类',
						ref : '../kind',
						dataIndex : 'kind',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.kindStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.jhApprovePanel.kind.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片制备线体',
						ref : '../line',
						dataIndex : 'line',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.lineStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.jhApprovePanel.line.reset()
							}
						}
					}, {
						xtype : 'textfield',
						dataIndex : 'projectCode',
						readOnly : true,
						fieldLabel : '所属项目编号',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'k3Code',
						readOnly : true,
						fieldLabel : 'K3系统任务单号',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						dataIndex : 'content',
						readOnly : true,
						fieldLabel : '实验内容',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'datefield',
						dataIndex : 'tmDate',
						readOnly : true,
						fieldLabel : '膜片上线<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'jmDate',
						readOnly : true,
						fieldLabel : '卷膜完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'qjDate',
						readOnly : true,
						fieldLabel : '气检完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'wtDate',
						readOnly : true,
						fieldLabel : '水测完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '元件工艺',
						ref : '../craft',
						dataIndex : 'craft',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.craftStore,
						displayField : "name",
						valueField : "code"
					}, {
						xtype : 'textfield',
						dataIndex : 'msize',
						ref : '../msize',
						readOnly : true,
						fieldLabel : '膜片下料<br>尺寸(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'page',
						ref : '../page',
						readOnly : true,
						fieldLabel : '膜片页数(页)',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'thickNet',
						ref : '../thickNet',
						readOnly : true,
						fieldLabel : '浓网规格(mil)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'thinNet',
						ref : '../thinNet',
						readOnly : true,
						fieldLabel : '淡网规格(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'other',
						readOnly : true,
						fieldLabel : '其他',
						colspan : 8
					}, {
						xtype : 'hidden',
						name : 'state',
						ref : '../state'
					}, {
						xtype : 'hidden',
						name : 'step',
						ref : '../step'
					}, {
						xtype : 'hidden',
						name : 'relationId',
						dataIndex : 'id',
						ref : '../relationId'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						name : 'describe',
						allowBlank : false,
						fieldLabel : '意见',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'radiogroup',
						columns : 2,
						ref : '../nextstep',
						allowBlank : false,
						fieldLabel : '计划员评判<br>准备条件<span style="color:red">*</span>',
						anchor : '90%',
						items : [{
									boxLabel : '条件满足',
									name : 'nextstep',
									inputValue : '0'
								}, {
									boxLabel : '条件不满足',
									name : 'nextstep',
									checked : true,
									inputValue : '1'
								}],
						colspan : 16
					}],
			buttons : [{
						text : "提交",
						scope : this,
						handler : this.onSaveJhApprove
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.jhApprovePanel.form.reset();
							this.jhApproveWindow.hide();
						}
					}]

		})

		this.jhApproveWindow = this.jhApproveWindow || new Ext.Window({
					title : '审核',
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
					items : [this.jhApprovePanel, this.listPanel4JhApprove]

				});

	}

	this.initViewWindow = function() {

		var _this = this;

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4View = this.listPanel4View || new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,

					autoScroll : false,
					selModel : selModel4List,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4List, {
								dataIndex : 'batchNo',
								header : '涂膜批号'
							}, {
								dataIndex : 'specName',
								header : '卷制型号'
							}, {
								dataIndex : 'amount',
								header : '数量'
							}],
					store : this.applyListStore
				})

		this.viewPanel = this.viewPanel || new Ext.fn.EditPanel({
			height : 380,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 24,
			loadUrl : 'com.keensen.ump.produce.reseach.testapply.expandHeadEntity.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'code',
						readOnly : true,
						fieldLabel : '实验编号',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'purpose',
						readOnly : true,
						fieldLabel : '目的',
						colspan : 12
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'manager',
						readOnly : true,
						value : uname,
						fieldLabel : '实验负责人',
						colspan : 8
					}, {
						xtype : 'datefield',
						readOnly : true,
						dataIndex : 'applyDate',
						fieldLabel : '申请日期',
						format : 'Y-m-d',
						colspan : 8
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '实验种类',
						ref : '../kind',
						dataIndex : 'kind',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.kindStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.viewPanel.kind.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '膜片制备线体',
						ref : '../line',
						dataIndex : 'line',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.lineStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.viewPanel.line.reset()
							}
						}
					}, {
						xtype : 'textfield',
						dataIndex : 'projectCode',
						readOnly : true,
						fieldLabel : '所属项目编号',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'k3Code',
						readOnly : true,
						fieldLabel : 'K3系统任务单号',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textarea',
						dataIndex : 'content',
						readOnly : true,
						fieldLabel : '实验内容',
						colspan : 24
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'datefield',
						dataIndex : 'tmDate',
						readOnly : true,
						fieldLabel : '膜片上线<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'jmDate',
						readOnly : true,
						fieldLabel : '卷膜完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'qjDate',
						readOnly : true,
						fieldLabel : '气检完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'datefield',
						dataIndex : 'wtDate',
						readOnly : true,
						fieldLabel : '水测完成<br>日期需求',
						format : 'Y-m-d',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '元件工艺',
						ref : '../craft',
						dataIndex : 'craft',
						anchor : '100%',
						colspan : 8,
						readOnly : true,
						store : this.craftStore,
						displayField : "name",
						valueField : "code"
					}, {
						xtype : 'textfield',
						dataIndex : 'msize',
						ref : '../msize',
						readOnly : true,
						fieldLabel : '膜片下料<br>尺寸(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'page',
						ref : '../page',
						readOnly : true,
						fieldLabel : '膜片页数(页)',
						colspan : 8
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'textfield',
						dataIndex : 'thickNet',
						ref : '../thickNet',
						readOnly : true,
						fieldLabel : '浓网规格(mil)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'thinNet',
						ref : '../thinNet',
						readOnly : true,
						fieldLabel : '淡网规格(mm)',
						colspan : 8
					}, {
						xtype : 'textfield',
						dataIndex : 'other',
						readOnly : true,
						fieldLabel : '其他',
						colspan : 8
					}, {
						xtype : 'hidden',
						name : 'state',
						ref : '../state'
					}, {
						xtype : 'hidden',
						name : 'step',
						ref : '../step'
					}, {
						xtype : 'hidden',
						name : 'relationId',
						dataIndex : 'id',
						ref : '../relationId'
					}],
			buttons : [{
						text : "关闭",
						scope : this,
						handler : function() {
							this.viewPanel.form.reset();
							this.viewWindow.hide();
						}
					}, {
						text : "审批记录",
						scope : this,
						handler : this.onApproveList
					}]

		})

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '查看',
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
					items : [this.viewPanel, this.listPanel4View]

				});

	}

}