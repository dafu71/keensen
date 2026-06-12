com.keensen.ump.produce.component.household.DegradeMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		this.initModifyWindow();
		this.initCopyWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'householddegradeMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.reasonDegradeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['生产制程-膜片合格，生管排产', '生产制程-膜片合格，生管排产'],
							['生产制程-膜片不合格，生管排产', '生产制程-膜片不合格，生管排产'],
							['生产制程-贴错标签', '生产制程-贴错标签'],
							['生产制程-性能不合格，1月内入库', '生产制程-性能不合格，1月内入库'],
							['生产制程-性能不合格，1月外入库', '生产制程-性能不合格，1月外入库'],
							['生产制程-颜色不合格，1月内入库', '生产制程-颜色不合格，1月内入库'],
							['生产制程-元件外观不良', '生产制程-元件外观不良'],
							['生产制程-试量产膜片', '生产制程-试量产膜片'],
							['生产制程-膜片漏气', '生产制程-膜片漏气'],
							['生产制程-补胶后端面不良', '生产制程-补胶后端面不良'],
							['库存元件-保存得当性能衰减', '库存元件-保存得当性能衰减'],
							['库存元件-保存不当性能衰减', '库存元件-保存不当性能衰减'],
							['库存元件-保存时间过长（两年以上）', '库存元件-保存时间过长（两年以上）'],
							['库存元件-湿膜发霉', '库存元件-湿膜发霉'],
							['库存元件-超期膜片', '库存元件-超期膜片'],
							['返厂元件-外观/性能不合格，生管排产', '返厂元件-外观/性能不合格，生管排产'],
							['返厂膜片-颜色/性能合格，生管排产', '返厂膜片-颜色/性能合格，生管排产'],
							['返厂膜片-颜色/性能不合格，生管排产', '返厂膜片-颜色/性能不合格，生管排产'],
							['实验膜片', '实验膜片']]
				});

		this.typeDegradeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['主动降级', '主动降级'], ['被动降级', '被动降级']]
				});

		this.deptDegradeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['元件制造部', '元件制造部'], ['膜片制造部', '膜片制造部'],
							/* ['生产管理部', '生产管理部'], ['财务部-仓库组', '财务部-仓库组'], */
							['设备能源部', '设备能源部'], ['研发中心-工艺部', '研发中心-工艺部'],
							['研发中心-研发部', '研发中心-研发部']

					]
				});

		this.describeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [
							['气检NG水测不合格', '气检NG水测不合格'],
							['后端面胶水不良', '补胶后端面胶水'],
							['端面不良(膜片打折)',
									'端面不良(膜片打折)'],
							['端面不良(浓网打折)',
									'端面不良(浓网打折)'],
							['端面不良(淡网打折)',
									'端面不良(淡网打折)'],
							['端面不良(端面不平)',
									'端面不良(端面不平)'],
							['中心管不良(来料)', '中心管不良(来料)'],
							['中心管不良(制程)', '中心管不良(制程)'],
							['膜体长度异常', '膜体长度异常'],
							['湿膜入库', '湿膜入库']]
				});

		this.dryWetStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['干膜', '干膜'], ['湿膜', '湿膜']]
				});

		this.colorTapeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['水光蓝', '水光蓝'], ['蓝', '蓝'], ['绿', '绿'], ['灰', '灰'],
							['黄', '黄'], ['白', '白'], ['黑', '黑']]
				});

		this.machineCodeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['1#', '1#'], ['2#', '2#'], ['4#', '4#'],
							['5#', '5#']]
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
					// title : '【BOM查询】',
					fields : [{
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								// anchor : '85%',
								fieldLabel : '卷膜执行型号 '
							}, {
								xtype : 'textfield',
								name : 'condition/labelSpecName2',
								fieldLabel : '贴标型号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo2',
								fieldLabel : '膜片批次%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo2',
								fieldLabel : '订单号%-%'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'dafu',
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
						text : '生产员工填写',
						scope : this,
						// hidden : uid != 'dafu' && uid != 'KS01147',
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '品管填写',
						hidden : modifyLimit != "1",
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onModify
					}, '-', {
						text : '修改',
						hidden : modifyLimit != "1",
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '复制新增',
						hidden : modifyLimit != "1",
						scope : this,
						iconCls : 'icon-page_copy',
						handler : this.onCopy
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '->', {
						text : '删除',
						hidden : modifyLimit != "1",
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.household.deleteDegrade.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'prodSpecName',
						header : '卷膜执行型号'
					}, {
						dataIndex : 'labelSpecName',
						header : '贴标型号'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'amount',
						header : '数量(支)'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'colorTape',
						header : '胶带颜色'
					}, {
						dataIndex : 'blankingSize',
						header : '膜片长度'
					}, {
						dataIndex : 'orderDate',
						header : '工单日期'
					}, {
						dataIndex : 'judgeDate',
						header : '判定日期'
					}, {
						dataIndex : 'machineCode',
						header : '卷膜机台'
					}, {
						dataIndex : 'jmName',
						header : '卷制人员'
					}, {
						dataIndex : 'dryWet',
						header : '规格'
					}, {
						dataIndex : 'describe',
						header : '不良描述'
					}, {
						dataIndex : 'ip',
						header : 'ip'
					}, {
						dataIndex : 'reasonDegrade',
						header : '降级原因'
					}, {
						dataIndex : 'deptDegrade',
						header : '责任部门'
					}, {
						dataIndex : 'typeDegrade',
						header : '降级类型'
					}, {
						dataIndex : 'createName',
						header : '记录人',
						sortable : true
					}, {
						dataIndex : 'createTime',
						header : '录入时间',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.household.queryDegradeByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'prodSpecId'
						}, {
							name : 'labelSpecName'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'orderNo'
						}, {
							name : 'colorTape'
						}, {
							name : 'blankingSize'
						}, {
							name : 'ip'
						}, {
							name : 'reasonDegrade'
						}, {
							name : 'deptDegrade'
						}, {
							name : 'typeDegrade'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createName'
						}, {
							name : 'orderDate'
						}, {
							name : 'judgeDate'
						}, {
							name : 'machineCode'
						}, {
							name : 'jmName'
						}, {
							name : 'dryWet'
						}, {
							name : 'describe'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;
		var amountId = Ext.id();

		this.quantityField = this.quantityField || new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "95%",
					colspan : 1,
					fieldLabel : '数量(支)<font color=red>*</font>',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.55,
								anchor : "100%",
								layout : "anchor",
								id : amountId,
								xtype : 'numberfield',
								allowBlank : false,
								dataIndex : 'amount',
								name : 'entity/amount'
							}, {
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								text : '计算膜片长度',
								xtype : 'button',
								handler : function() {
									var obj = Ext.getCmp(amountId);
									var value = obj.getValue()
									if (!Ext.isEmpty(value)) {
										_this.onCalc(value);
									}
								}

							}]
				});

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
				autoHide : false,
				successFn : function() {
					_this.listPanel.store.load();
					//_this.inputWindow.items.items[0].form.reset();
					Ext.getCmp(amountId).setValue('');
					_this.inputWindow.blankingSize.setValue('');
					_this.inputWindow.describe.setValue('');
					
					
				},
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.household.saveDegrade.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/prodSpecId',
							valueField : "id",
							displayField : "name",
							ref : '../../prodSpecId',
							fieldLabel : '卷膜执行型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							// allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '膜片批次',
							anchor : '95%',
							colspan : 1
						}, this.quantityField, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/blankingSize',
							ref : '../../blankingSize',
							allowBlank : false,
							fieldLabel : '膜片长度(m)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '胶带颜色',
							ref : '../../colorTape',
							hiddenName : 'entity/colorTape',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.colorTapeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.colorTape.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '规格',
							ref : '../../dryWet',
							hiddenName : 'entity/dryWet',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.dryWetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.dryWet.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/orderDate',
							allowBlank : false,
							fieldLabel : '工单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'datefield',
							name : 'entity/judgeDate',
							allowBlank : false,
							fieldLabel : '判定日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '卷膜机台',
							ref : '../../machineCode',
							hiddenName : 'entity/machineCode',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.machineCodeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.machineCode.reset()
								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/jmName',
							allowBlank : false,
							fieldLabel : '卷制人员',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '不良描述',
							ref : '../../describe',
							hiddenName : 'entity/describe',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.describeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.describe.reset()
								}
							}
						}]
			}]
		});
	}

	this.initModifyWindow = function() {

		var _this = this;

		this.modifyWindow = this.modifyWindow || new Ext.fn.FormWindow({
			title : '品管填写',
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
				loadUrl : 'com.keensen.ump.produce.component.household.expandDegrade.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.household.saveDegrade.biz.ext',
				fields : [{
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级原因',
							ref : '../../reasonDegrade',
							hiddenName : 'entity/reasonDegrade',
							dataIndex : 'reasonDegrade',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.reasonDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级类型',
							ref : '../../typeDegrade',
							hiddenName : 'entity/typeDegrade',
							dataIndex : 'typeDegrade',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.typeDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '责任部门',
							ref : '../../deptDegrade',
							hiddenName : 'entity/deptDegrade',
							dataIndex : 'deptDegrade',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.deptDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;
		var amountId = Ext.id();

		this.quantityField2 = this.quantityField2 || new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "95%",
					colspan : 1,
					fieldLabel : '数量(支)',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.55,
								anchor : "100%",
								layout : "anchor",
								id : amountId,
								xtype : 'numberfield',
								allowBlank : false,
								dataIndex : 'amount',
								name : 'entity/amount'
							}, {
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								text : '计算膜片长度',
								xtype : 'button',
								handler : function() {
									var obj = Ext.getCmp(amountId);
									var value = obj.getValue()
									if (!Ext.isEmpty(value)) {
										_this.onCalc(value);
									}
								}

							}]
				});
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
				loadUrl : 'com.keensen.ump.produce.component.household.expandDegrade.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.household.saveDegrade.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							valueField : "id",
							displayField : "name",
							ref : '../../prodSpecId',
							fieldLabel : '卷膜执行型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							dataIndex : 'labelSpecName',
							// allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '膜片批次',
							anchor : '95%',
							colspan : 1
						}, this.quantityField2, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/blankingSize',
							dataIndex : 'blankingSize',
							ref : '../../blankingSize',
							allowBlank : false,
							fieldLabel : '膜片长度(m)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '胶带颜色',
							ref : '../../colorTape',
							hiddenName : 'entity/colorTape',
							dataIndex : 'colorTape',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.colorTapeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.colorTape.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '规格',
							ref : '../../dryWet',
							hiddenName : 'entity/dryWet',
							dataIndex : 'dryWet',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.dryWetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.dryWet.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/orderDate',
							dataIndex : 'orderDate',
							allowBlank : false,
							fieldLabel : '工单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'datefield',
							name : 'entity/judgeDate',
							dataIndex : 'judgeDate',
							allowBlank : false,
							fieldLabel : '判定日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '卷膜机台',
							ref : '../../machineCode',
							hiddenName : 'entity/machineCode',
							dataIndex : 'machineCode',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.machineCodeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.machineCode.reset()
								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/jmName',
							dataIndex : 'jmName',
							allowBlank : false,
							fieldLabel : '卷制人员',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '不良描述',
							dataIndex : 'describe',
							ref : '../../describe',
							hiddenName : 'entity/describe',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.describeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.describe.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级原因',
							ref : '../../reasonDegrade',
							hiddenName : 'entity/reasonDegrade',
							dataIndex : 'reasonDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.reasonDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级类型',
							ref : '../../typeDegrade',
							hiddenName : 'entity/typeDegrade',
							dataIndex : 'typeDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.typeDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '责任部门',
							ref : '../../deptDegrade',
							hiddenName : 'entity/deptDegrade',
							dataIndex : 'deptDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.deptDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initCopyWindow = function() {

		var _this = this;
		var amountId = Ext.id();

		this.quantityField3 = this.quantityField3 || new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "95%",
					colspan : 1,
					fieldLabel : '数量(支)',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.55,
								anchor : "100%",
								layout : "anchor",
								id : amountId,
								xtype : 'numberfield',
								allowBlank : false,
								dataIndex : 'amount',
								name : 'entity/amount'
							}, {
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								text : '计算膜片长度',
								xtype : 'button',
								handler : function() {
									var obj = Ext.getCmp(amountId);
									var value = obj.getValue()
									if (!Ext.isEmpty(value)) {
										_this.onCalc(value);
									}
								}

							}]
				});
				
		this.copyWindow = this.copyWindow || new Ext.fn.FormWindow({
			title : '复制新增',
			iconCls:'icon-page_copy',
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
				loadUrl : 'com.keensen.ump.produce.component.household.expandDegrade.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.household.saveDegrade.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							valueField : "id",
							displayField : "name",
							ref : '../../prodSpecId',
							fieldLabel : '卷膜执行型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							dataIndex : 'labelSpecName',
							// allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '膜片批次',
							anchor : '95%',
							colspan : 1
						}, this.quantityField3, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/blankingSize',
							dataIndex : 'blankingSize',
							ref : '../../blankingSize',
							allowBlank : false,
							fieldLabel : '膜片长度(m)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '胶带颜色',
							ref : '../../colorTape',
							hiddenName : 'entity/colorTape',
							dataIndex : 'colorTape',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.colorTapeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.copyWindow.colorTape.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '规格',
							ref : '../../dryWet',
							hiddenName : 'entity/dryWet',
							dataIndex : 'dryWet',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.dryWetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.copyWindow.dryWet.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/orderDate',
							ref : '../../orderDate',
							dataIndex : 'orderDate',
							allowBlank : false,
							fieldLabel : '工单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'datefield',
							name : 'entity/judgeDate',
							ref : '../../judgeDate',
							dataIndex : 'judgeDate',
							allowBlank : false,
							fieldLabel : '判定日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '卷膜机台',
							ref : '../../machineCode',
							hiddenName : 'entity/machineCode',
							dataIndex : 'machineCode',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.machineCodeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.copyWindow.machineCode.reset()
								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/jmName',
							dataIndex : 'jmName',
							allowBlank : false,
							fieldLabel : '卷制人员',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '不良描述',
							dataIndex : 'describe',
							ref : '../../describe',
							hiddenName : 'entity/describe',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.describeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.copyWindow.describe.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级原因',
							ref : '../../reasonDegrade',
							hiddenName : 'entity/reasonDegrade',
							dataIndex : 'reasonDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.reasonDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级类型',
							ref : '../../typeDegrade',
							hiddenName : 'entity/typeDegrade',
							dataIndex : 'typeDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.typeDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '责任部门',
							ref : '../../deptDegrade',
							hiddenName : 'entity/deptDegrade',
							dataIndex : 'deptDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.deptDegradeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}]
			}]
		});
	}

	this.initViewWindow = function() {

		this.viewWindow = this.viewWindow || new Ext.fn.FormWindow({
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
				baseCls : "x-plain",
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.household.expandDegrade.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							allowBlank : false,
							readOnly : true,
							dataIndex : 'prodSpecId',
							valueField : "id",
							displayField : "name",
							ref : '../../prodSpecId',
							fieldLabel : '卷膜执行型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'labelSpecName',
							// allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '膜片批次',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'amount',
							readOnly : true,
							fieldLabel : '数量(支)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'blankingSize',
							ref : '../../blankingSize',
							allowBlank : false,
							fieldLabel : '膜片长度(m)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '胶带颜色',
							ref : '../../colorTape',
							readOnly : true,
							dataIndex : 'colorTape',
							anchor : '95%',
							colspan : 1,
							emptyText : '',
							editable : false,
							allowBlank : false,
							store : this.colorTapeStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '规格',
							ref : '../../dryWet',
							readOnly : true,
							dataIndex : 'dryWet',
							anchor : '95%',
							colspan : 1,
							emptyText : '',
							editable : false,
							allowBlank : false,
							store : this.dryWetStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							readOnly : true,
							ref : '../../orderDate',
							dataIndex : 'orderDate',
							allowBlank : false,
							fieldLabel : '工单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'datefield',
							name : 'entity/judgeDate',
							ref : '../../judgeDate',
							dataIndex : 'judgeDate',
							allowBlank : false,
							fieldLabel : '判定日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '卷膜机台',
							ref : '../../machineCode',
							readOnly : true,
							dataIndex : 'machineCode',
							anchor : '95%',
							colspan : 1,
							emptyText : '',
							editable : false,
							allowBlank : false,
							store : this.machineCodeStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'jmName',
							allowBlank : false,
							fieldLabel : '卷制人员',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '不良描述',
							dataIndex : 'describe',
							ref : '../../describe',
							readOnly : true,
							anchor : '95%',
							colspan : 2,
							emptyText : '',
							editable : false,
							allowBlank : false,
							store : this.describeStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级原因',
							ref : '../../reasonDegrade',
							readOnly : true,
							dataIndex : 'reasonDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '',
							editable : false,
							store : this.reasonDegradeStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级类型',
							ref : '../../typeDegrade',
							readOnly : true,
							dataIndex : 'typeDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '',
							editable : false,
							store : this.typeDegradeStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '责任部门',
							ref : '../../deptDegrade',
							dataIndex : 'deptDegrade',
							anchor : '95%',
							colspan : 2,
							emptyText : '',
							editable : false,
							store : this.deptDegradeStore,
							displayField : "name",
							valueField : "code",
							readOnly : true
						}]
			}]
		});
	}
}