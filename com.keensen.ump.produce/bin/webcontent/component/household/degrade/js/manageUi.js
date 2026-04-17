com.keensen.ump.produce.component.household.DegradeMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

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
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						//hidden : uid != 'dafu' && uid != 'KS01147',
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						//hidden : uid != 'dafu' && uid != 'KS01147',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						//hidden : uid != 'dafu' && uid != 'KS01147',
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
								columnWidth : 0.85,
								anchor : "100%",
								layout : "anchor",
								id : amountId,
								xtype : 'numberfield',
								allowBlank : false,
								dataIndex : 'amount',
								name : 'entity/amount'
							}, {
								columnWidth : 0.15,
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
				successFn:function(){
					_this.listPanel.store.load();
					_this.inputWindow.items.items[0].form
										.reset();
				},
				pgrid : this.listPanel,
				columns : 1,
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
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '膜片批次',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, this.quantityField, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/blankingSize',
							ref:'../../blankingSize',
							allowBlank : false,
							fieldLabel : '膜片长度(m)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/colorTape',
							fieldLabel : '胶带颜色',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '降级原因',
							ref : '../../reasonDegrade',
							hiddenName : 'entity/reasonDegrade',
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
							allowBlank : false,
							mode : 'local',
							fieldLabel : '责任部门',
							ref : '../../deptDegrade',
							hiddenName : 'entity/deptDegrade',
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
								columnWidth : 0.85,
								anchor : "100%",
								layout : "anchor",
								id : amountId,
								xtype : 'numberfield',
								allowBlank : false,
								dataIndex : 'amount',
								name : 'entity/amount'
							}, {
								columnWidth : 0.15,
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
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.component.household.expandDegrade.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.household.saveDegrade.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							ref : '../../prodSpecId',
							fieldLabel : '卷膜执行型号',
							valueField : "id",
			                displayField : "name",
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							dataIndex : 'labelSpecName',
							allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '膜片批次',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, this.quantityField2, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/blankingSize',
							dataIndex : 'blankingSize',
							ref:'../../blankingSize',
							allowBlank : false,
							fieldLabel : '膜片长度(m)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/colorTape',
							dataIndex : 'colorTape',
							fieldLabel : '胶带颜色',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
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
							allowBlank : false,
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

	this.initViewWindow = function() {

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
						baseCls : "x-plain",
						columns : 1,
						loadUrl : 'com.keensen.ump.produce.component.household.expandDegrade.biz.ext',
						fields : [{
							xtype : 'prodspeccombobox',
							readOnly : true,
							dataIndex : 'prodSpecId',
							fieldLabel : '卷膜执行型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'labelSpecName',
							readOnly : true,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'batchNo',
							readOnly : true,
							fieldLabel : '膜片批次',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
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
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'blankingSize',
							readOnly : true,
							fieldLabel : '膜片长度(m)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'colorTape',
							fieldLabel : '胶带颜色',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							readOnly : true,
							mode : 'local',
							fieldLabel : '降级原因',
							dataIndex : 'reasonDegrade',
							anchor : '95%',
							colspan : 1,
							store : this.reasonDegradeStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							readOnly : true,
							mode : 'local',
							fieldLabel : '降级类型',
							dataIndex : 'typeDegrade',
							anchor : '95%',
							colspan : 1,
							store : this.typeDegradeStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							readOnly : true,
							mode : 'local',
							fieldLabel : '责任部门',
							dataIndex : 'deptDegrade',
							anchor : '95%',
							colspan : 1,
							store : this.deptDegradeStore,
							displayField : "name",
							valueField : "code"
						}, {
									xtype : 'hidden',
									dataIndex : 'id'
								}]
					}]
		});
	}
}