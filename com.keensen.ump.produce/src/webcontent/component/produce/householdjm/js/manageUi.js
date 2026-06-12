com.keensen.ump.produce.component.produce.HouseholdJmMgr = function() {
	this.initPanel = function() {
		
		this.rec = {};

		this.currentMachineCode = '';
		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initAddWindow();
		this.initEditWindow();
		this.initViewWindow();

		this.initProduceCountWindow();
		
		this.initEditDefectWindow();
		
		this.initDegradeWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componenthouseholdjmmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		
		this.dryWetStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['干膜', '干膜'], ['湿膜', '湿膜']]
				});

		this.colorTapeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['水光蓝', '水光蓝'], ['蓝', '蓝'], ['绿', '绿'], ['灰', '灰'],
							['黄', '黄'], ['白', '白'], ['黑', '黑']]
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

		this.jmWorkerStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.produce.queryJmWorker.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {

		}	,
			fields : [{
						name : 'userName'
					}]
		})

		this.machineCodeStore = new Ext.data.JsonStore({
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
					height : 180,
					columns : 3,
					border : true,
					collapsible : false,
					titleCollapse : false,
					title : '&nbsp;',
					fields : [{
								xtype : 'datetimefield',
								name : 'condition/orderDateStart',
								fieldLabel : '卷膜日期',
								colspan : 1,
								anchor : '90%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i:00'
							}, {
								xtype : 'datetimefield',
								name : 'condition/orderDateEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '90%',
								editable : true,
								format : 'Y-m-d H:i:00'
							}, {

								xtype : 'textfield',
								name : 'condition/batchNoStr',
								anchor : '90%',
								fieldLabel : '裁膜栈板号%-%'
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 3
							}, {

								xtype : 'textfield',
								name : 'condition/orderNoStr',
								anchor : '90%',
								fieldLabel : '元件订单号%-%'
							}, {

								xtype : 'textfield',
								name : 'condition/tmBatchNo',
								anchor : '90%',
								fieldLabel : '膜片批次%-%'
							}, {
								xtype : 'combo',
								fieldLabel : '操作工%-%',
								mode : 'local',
								anchor : '90%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : true,
								store : _this.jmWorkerStore,
								ref : '../userName',
								hiddenName : 'condition/userName',
								displayField : "userName",
								valueField : "userName",
								scope : this,
								listeners : {
									"expand" : function(A) {
										this.reset()
									},
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 3
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '90%',
								fieldLabel : '卷制型号 ',
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
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					id : exportExcelBtn,
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "工作量查询",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onQueryQuantity
				});

		this.queryPanel.addButton({
			text : "<span style='color:red;font-size:14px;'>上&nbsp;&nbsp;机</span>",
			height : 40,
			scope : this,
			iconCls : 'icon-application_add',
			handler : this.onStart
		});

		this.queryPanel.addButton({
			text : "<span style='color:red;font-size:14px;'>下&nbsp;&nbsp;机</span>",
			height : 40,
			scope : this,
			iconCls : 'icon-application_edit',
			handler : this.onEnd
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
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
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
					}, '-', {
						text : '产量统计',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onQueryProduceCount
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'householdjmamount'
					}, '->', {
								text : '元件降级',
								scope : this,
								hidden : degradeLimit != "1",
								iconCls : 'icon-application_edit',
								handler : this.onDegrade
							},'-', {
								text : '元件不良录入',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddDefect
							}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.produce.deleteHouseholdJm.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'cmBatchNo',
						header : '裁叠膜栈板号'
					}, {
						dataIndex : 'tmBatchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'hjBatchNo',
						header : '混卷栈板号'
					}, {
						dataIndex : 'amount',
						header : '卷制数量'
					}, {
						header : '不良米数',
						width : 80,
						dataIndex : 'defectLength',
						renderer : function(v, m, r, i) {
							if (!Ext.isEmpty(v) && v > 0) {
								var relationId = r.get('id');
								var batchNo = r.get('cmBatchNo');
								var style = "<a style='text-decoration:none'";
								var str = style
										+ " href='javascript:defectView2("
										+ Ext.encode(relationId) + ","
										+ Ext.encode(batchNo) + ");'>" + v
										+ "</a>";

								return str;
							}
						}
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'numPerWad',
						header : '膜页数'
					}, {
						header : '下料尺寸(m)',
						width : 90,
						dataIndex : 'blankingSize'
					}, {
						header : '页宽(m)',
						width : 60,
						dataIndex : 'pageWidth'
					}, {
						dataIndex : 'denseNet',
						header : '浓网mil'
					}, {
						dataIndex : 'prodSpecName',
						header : '卷制型号'
					}, {
						dataIndex : 'machineName',
						header : '操作机台'
					}, {
						dataIndex : 'orderDate',
						header : '卷膜日期 '
					}, {
						dataIndex : 'userName',
						header : '操作工 '
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.produce.queryHouseholdJmByPage.biz.ext',
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
							name : 'cmBatchNo'
						}, {
							name : 'amount'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'machineCode'
						}, {
							name : 'workerId'
						}, {
							name : 'userId'
						}, {
							name : 'userName'
						}, {
							name : 'orderNo'
						}, {
							name : 'hjBatchNo'
						}, {
							name : 'orderDate'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'machineName'
						}, {
							name : 'tmBatchNo'
						}, {
							name : 'numPerWad'
						}, {
							name : 'denseNet'
						}, {
							name : 'totalAmount'
						}, {
							name : 'defectLength'
						}, {
							name : 'pageWidth'
						}, {
							name : 'blankingSize'
						}]
			})
		})
	}

	this.initAddWindow = function() {

		var _this = this;
		this.addWindow = this.addWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					// _this.addWindow.items.items[0].form.reset();
					_this.addWindow.cmBatchNo.setValue('');
					_this.addWindow.orderNo.setValue('');
					_this.addWindow.prodSpecId.setValue('');
					_this.addWindow.amount.setValue('');
					_this.currentMachineCode = _this.addWindow.machineCode
							.getValue();

					_this.listPanel.refresh();

				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.produce.saveHouseholdJm.biz.ext',
				fields : [{
							xtype : 'textfield',
							ref : '../../cmBatchNo',
							emptyText : '光标置于此框内后扫码，或手工录入后按回车键',
							name : 'entity/cmBatchNo',
							allowBlank : false,
							fieldLabel : '裁叠膜栈板号',
							anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										_this.onScan();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../hjBatchNo',
							// blankText : '光标置于此框内后扫码，或手工录入',
							name : 'entity/hjBatchNo',
							// allowBlank : false,
							fieldLabel : '混卷栈板号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../orderNo',
							fieldLabel : '订单号',
							xtype : 'textfield',
							name : 'entity/orderNo',
							readOnly : true,
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							hiddenName : 'entity/prodSpecId',
							emptyText : '',
							dataIndex : 'prodSpecId',
							anchor : '95%',
							colspan : 2,
							fieldLabel : '卷制型号 ',
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
							xtype : 'combo',
							fieldLabel : '操作机台',
							allowBlank : false,
							readOnly:true,
							mode : 'local',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : _this.machineCodeStore,
							ref : '../../machineCode',
							hiddenName : 'entity/machineCode',
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
							ref : '../../amount',
							fieldLabel : '卷制数量',
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							name : 'entity/orderDate',
							ref : '../../orderDate',
							fieldLabel : '卷膜日期',
							allowBlank : false,
							value : new Date(),
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'componentworkercombobox',
							ref : '../../workerId',
							allowBlank : false,
							hiddenName : 'entity/workerId',
							anchor : '95%',
							fieldLabel : '操作工',
							colspan : 2
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
				loadUrl : 'com.keensen.ump.produce.component.produce.expandHouseholdJm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '裁叠膜栈板号',
							dataIndex : 'cmBatchNo',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '混卷栈板号',
							dataIndex : 'hjBatchNo',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							fieldLabel : '订单号',
							xtype : 'textfield',
							dataIndex : 'orderNo',
							readOnly : true,
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
							fieldLabel : '卷制型号 ',
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
							xtype : 'combo',
							fieldLabel : '操作机台',
							dataIndex : 'machineCode',
							readOnly : true,
							editable : false,
							mode : 'local',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : _this.machineCodeStore,
							hiddenName : 'entity/machineCode',
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
							ref : '../../amount',
							fieldLabel : '卷制数量',
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							readOnly : true,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'textfield',
							//format : "Y-m-d",
							dataIndex : 'orderDate',
							ref : '../../orderDate',
							fieldLabel : '卷膜日期',
							readOnly : true,
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'componentworkercombobox',
							dataIndex : 'workerId',
							readOnly : true,
							editable : false,
							hiddenName : 'entity/workerId',
							anchor : '95%',
							fieldLabel : '操作工',
							colspan : 2
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
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					// _this.addWindow.items.items[0].form.reset();
					_this.editWindow.hide();

					_this.listPanel.refresh();

				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandHouseholdJm.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.produce.saveHouseholdJm.biz.ext',
				fields : [{
							xtype : 'textfield',
							ref : '../../cmBatchNo',
							emptyText : '光标置于此框内后扫码，或手工录入后按回车键',
							name : 'entity/cmBatchNo',
							dataIndex : 'cmBatchNo',
							allowBlank : false,
							fieldLabel : '裁叠膜栈板号',
							anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										_this.onScan();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../hjBatchNo',
							// blankText : '光标置于此框内后扫码，或手工录入',
							name : 'entity/hjBatchNo',
							// allowBlank : false,
							fieldLabel : '混卷栈板号',
							dataIndex : 'hjBatchNo',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../orderNo',
							fieldLabel : '订单号',
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							readOnly : true,
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							hiddenName : 'entity/prodSpecId',
							emptyText : '',
							dataIndex : 'prodSpecId',
							anchor : '95%',
							colspan : 2,
							fieldLabel : '卷制型号 ',
							dataIndex : 'prodSpecId',
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
							xtype : 'combo',
							fieldLabel : '操作机台',
							allowBlank : false,
							dataIndex : 'machineCode',
							mode : 'local',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : _this.machineCodeStore,
							ref : '../../machineCode',
							hiddenName : 'entity/machineCode',
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
							ref : '../../amount',
							fieldLabel : '卷制数量',
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							dataIndex : 'amount',
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							name : 'entity/orderDate',
							ref : '../../orderDate',
							dataIndex : 'orderDate',
							fieldLabel : '卷膜日期',
							allowBlank : false,
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'componentworkercombobox',
							ref : '../../workerId',
							dataIndex : 'workerId',
							allowBlank : false,
							hiddenName : 'entity/workerId',
							anchor : '95%',
							fieldLabel : '操作工',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initProduceCountWindow = function() {

		var selModel4ProduceCount = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel4ProduceCount = this.listPanel4ProduceCount
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : ['->', {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : quantityTotalId
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}],
					hsPage : true,
					selModel : selModel4ProduceCount,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							selModel4ProduceCount, {
								dataIndex : 'dataCount',
								header : '生产日期'
							}, {
								dataIndex : 'userName',
								header : '操作工'
							}, {
								dataIndex : 'batchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'prodSpecName',
								header : '卷制类型'
							}, {
								dataIndex : 'quantity',
								header : '生产数量'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.productioncount.queryProductHHJmListByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'userName'
								}, {
									name : 'batchNo'
								}, {
									name : 'quantity'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'dataCount'
								}, {
									name : 'quantityTotal'
								}]
					})
				})

		this.queryPanel4ProduceCount = this.queryPanel4ProduceCount
				|| new Ext.fn.QueryPanel({
							height : 110,
							columns : 3,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/prodSpecName',
										anchor : '100%',
										fieldLabel : '元件型号'
									}, {
										xtype : 'textfield',
										name : 'condition/batchNo',
										anchor : '100%',
										fieldLabel : '涂膜批次'
									}, {
										xtype : 'textfield',
										name : 'condition/userName',
										anchor : '100%',
										fieldLabel : '操作工',
										value : nowStaffName

									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 3
									}, {
										xtype : "dateregion",
										colspan : 1,
										anchor : '100%',
										nameArray : [
												'condition/dateCountStart',
												'condition/dateCountEnd'],
										fieldLabel : "生产日期",
										format : "Y-m-d",
										value : new Date()
									}]
						});

		this.queryPanel4ProduceCount.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportProduceCountExcel
				});

		this.queryPanel4ProduceCount.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.produceCountWindow.hide();
					}

				});

		this.produceCountWindow = this.produceCountWindow || new Ext.Window({
					title : '产量统计',
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
					items : [this.queryPanel4ProduceCount,
							this.listPanel4ProduceCount]

				});
	}
	
	this.initEditDefectWindow = function() {

		var _this = this;	
		

		this.firstStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['固损', '固损'], ['不良', '不良']]
				});

		var selModel4EditDefect = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4EditDefect = this.listPanel4EditDefect
				|| new Ext.fn.EditListPanel({
					region : 'center',
					hsPage : false,
					viewConfig : {
						forceFit : true
					},
					clicksToEdit : 1,
					selModel : selModel4EditDefect,
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer(), selModel4EditDefect,
							{
								dataIndex : 'tache',
								header : '录入工序'
							},
							{
								dataIndex : 'first',
								header : '一级目录'
							}, {
								dataIndex : 'second',
								header : '二级目录'
							}, {
								dataIndex : 'third',
								header : '三级目录'
							}, {
								dataIndex : 'fourth',
								header : '四级目录'
							}, {
								dataIndex : 'numDefect',
								header : '不良只数',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 0,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var defectId = _this.rec.data['defectId'];
													_this.saveJmDefect(
															defectId, 'numDefect',
															newValue, oldValue);
												}
											}
										}))
							}, {
								dataIndex : 'length',
								header : '不良长度(米)'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.quality.defect.queryProdDefect4Jm.biz.ext',
						root : 'data',
						hsPage : false,
						autoLoad : true,
						autoScroll : true,
						clicksToEdit : 1,
						baseParams : {
							'condition/tache' : "'卷膜','切边','气检','包装','水测'"
						},
						fields : [{
									name : 'defectId'
								}, {
									name : 'first'
								}, {
									name : 'second'
								}, {
									name : 'third'
								}, {
									name : 'fourth'
								}, {
									name : 'length'
								}, {
									name : 'tacheCause'
								}, {
									name : 'tache'
								}, {
									name : 'numDefect'
								}]
					})
				})

		this.queryPanel4EditDefect = this.queryPanel4EditDefect
				|| new Ext.fn.QueryPanel({
							height : 70,
							columns : 4,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '一级目录',
								ref : '../first',
								hiddenName : 'condition/first',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.firstStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel4EditDefect.first
												.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/second',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '二级目录%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/third',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '三级目录%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/fourth',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '四级目录%-%'
							}, {
								xtype : 'hidden',
								value : "'卷膜','切边','气检','包装','水测'",
								ref : '../tache',
								name : 'condition/tache'
							}]
						});

		this.queryPanel4EditDefect.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.editDefectWindow.hide();
					}

				});

		this.editDefectWindow = this.editDefectWindow || new Ext.Window({
					title : '元件不良录入',
					relationId : '',// 关联的卷膜记录ID
					numPerWad:'',//每支页数
					blankingSize:'',//下料尺寸(m)'
					pageWidth:'',//页宽(m)					
					
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
					items : [this.queryPanel4EditDefect,
							this.listPanel4EditDefect]

				});
	}
	
	this.initDegradeWindow = function() {

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

		this.degradeWindow = this.degradeWindow || new Ext.fn.FormWindow({
			title : '元件降级',
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
					//_this.degradeWindow.items.items[0].form.reset();
					Ext.getCmp(amountId).setValue('');
					_this.degradeWindow.blankingSize.setValue('');
					_this.degradeWindow.describe.setValue('');
					
					
				},
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.household.saveDegrade.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							allowBlank : false,
							readOnly:true,
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
							ref : '../../labelSpecName',
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
							ref : '../../batchNo',
							allowBlank : false,
							readOnly:true,
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
							ref : '../../orderNo',
							readOnly:true,
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
									_this.degradeWindow.colorTape.reset()
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
									_this.degradeWindow.dryWet.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/orderDate',
							ref:'../../orderDate',
							allowBlank : false,
							readOnly:true,
							fieldLabel : '工单日期',
							anchor : '95%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'datefield',
							name : 'entity/judgeDate',
							ref:'../../judgeDate',
							allowBlank : false,
							readOnly:true,
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
							readOnly:true,
							allowBlank : false,
							store : this.machineCodeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.degradeWindow.machineCode.reset()
								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/jmName',
							ref:'../../jmName',
							readOnly:true,
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
									_this.degradeWindow.describe.reset()
								}
							}
						}]
			}]
		});
	}
}