com.keensen.ump.produce.component.YxmaterMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initEditWindow();
		this.initInputWindow();
		this.initEditWindow2();

		this.buildExcelUploadWin();
		this.initGoodsStateChangeWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'yxmatermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		// 计划状态 制定中，申购邮件已发，采购已下单
		this.materPlanStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['制定中', '制定中'], ['申购邮件已发', '申购邮件已发'],
							['采购已下单', '采购已下单']]
				});

		// 到货状态 未到货，已到货
		this.materGoodsStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['未到货', '未到货'], ['已到货', '已到货']]
				});

		// 物料名称 标签、唛头、真空袋、纸箱
		this.materNameStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['标签', '标签'], ['唛头', '唛头'], ['真空袋', '真空袋'],
							['纸箱', '纸箱']]
				});

		// 物料单位 个/张
		this.materUnitStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['个', '个'], ['张', '张']]
				});

		this.baseMaterStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.mater.queryBaswMater.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {},
					fields : [{
								name : 'id'
							}, {
								name : 'drawingCode'
							}, {
								name : 'materCode'
							}, {
								name : 'materName'
							}, {
								name : 'specName'
							}, {
								name : 'unit'
							}]
				})

		this.yxorderStockAmountStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.common.query.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {
				'nameSqlId' : 'com.keensen.ump.produce.component.yxorderbase.queryYxorderStockAmount'
			},
			fields : [{
						name : 'materCode'
					}, {
						name : 'amount'
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
					// 下单型号、物料名称、规格型号、申请日期、需求日期
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/prodName',
								fieldLabel : '下单型号'
							}, {
								xtype : 'textfield',
								name : 'condition/specName',
								fieldLabel : '规格型号'
							}, {
								xtype : 'textfield',
								name : 'condition/materName',
								fieldLabel : '物料名称'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '到货状态',
								ref : '../goodsState',
								hiddenName : 'condition/goodsState',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.materGoodsStateStore,
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
								nameArray : ['condition/applyDateStart',
										'condition/applyDateEnd'],
								fieldLabel : "申请日期",
								format : "Y-m-d"
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/demandDateStart',
										'condition/demandDateEnd'],
								fieldLabel : "需求日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/materCode',
								fieldLabel : '物料长代码'
							}]
				});

		this.queryPanel.addButton({
					text : "即时库存模板",
					// disabled : allRight != '1',
					scope : this,
					hidden : uid != 'KS01147',
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "导入即时库存",
					// disabled : allRight != '1',
					scope : this,
					hidden : uid != 'KS01147',
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					rescode : '10003669',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
			singleSelect : false
				// header : ''
			});
		this.listPanel = new Ext.fn.ListPanel({

			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						hidden : uid != 'KS01147',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : uid != 'KS01147',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						hidden : uid != 'KS01147',
						handler : this.onDel
					}, '-', {
						text : '变更到货状态',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onGoodsStateChange
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.yxorderbase.deleteMConfirm.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'applyDate',
						width : 120,
						header : '申请日期',
						sortable : true,
						renderer : function(v, m, r, i) {
							var baseId = r.get('baseId');
							if (Ext.isEmpty(baseId)) {
								return "<span style='color:blue;'>" + v
										+ "</span>"
							}
							return v;

						}
					}, {
						dataIndex : 'orderNo',
						width : 120,
						header : '订单号',
						sortable : true
					}, {
						dataIndex : 'prodName',
						width : 120,
						header : '下单型号',
						sortable : true
					}, {
						dataIndex : 'orderAmount',
						width : 120,
						header : '订单数量',
						sortable : true
					}, {
						dataIndex : 'materCode',
						width : 120,
						header : '物料长代码',
						sortable : true
					}, {
						dataIndex : 'goodsState',
						width : 120,
						header : '到货状态',
						sortable : true
					}, {
						dataIndex : 'materName',
						width : 150,
						header : '物料名称',
						sortable : true
					}, {
						dataIndex : 'specName',
						width : 120,
						header : '规格型号',
						sortable : true
					}, {
						dataIndex : 'unit',
						width : 100,
						header : '单位'
					}, {
						dataIndex : 'amount',
						width : 120,
						header : '采购数量',
						sortable : true
					}, {
						dataIndex : 'k3',
						width : 120,
						header : 'K3库存',
						sortable : true
					}, {
						dataIndex : 'demandDate',
						width : 120,
						header : '需求日期',
						sortable : true
					}, {
						dataIndex : 'remark',
						width : 200,
						header : '备注'
					}, {
						dataIndex : 'drawingCode',
						width : 120,
						header : '图号'
					}, {
						dataIndex : 'snStart',
						width : 120,
						header : '序列开始号'
					}, {
						dataIndex : 'snEnd',
						width : 120,
						header : '序列结束号'
					}, {
						dataIndex : 'materType',
						width : 150,
						header : '物料类型',
						sortable : true
					}, {
						dataIndex : 'planState',
						width : 120,
						header : '计划状态',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.yxorderbase.queryOrderMCByPage.biz.ext',
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
							name : 'planState'
						}, {
							name : 'goodsState'
						}, {
							name : 'applyDate'
						}, {
							name : 'materCode'
						}, {
							name : 'materName'
						}, {
							name : 'specName'
						}, {
							name : 'unit'
						}, {
							name : 'amount'
						}, {
							name : 'k3'
						}, {
							name : 'demandDate'
						}, {
							name : 'remark'
						}, {
							name : 'relationId'
						}, {
							name : 'baseId'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodName'
						}, {
							name : 'labelDrawingCode'
						}, {
							name : 'markDrawingCode'
						}, {
							name : 'snStart'
						}, {
							name : 'snEnd'
						}, {
							name : 'materType'
						}, {
							name : 'drawingCode'
						}, {
							name : 'orderAmount'
						}]
			})
		})
	}

	// 修改物料计划
	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandMConfirm.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.modifyMConfirm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '计划状态',
							ref : '../../planState',
							hiddenName : 'entity/planState',
							dataIndex : 'planState',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materPlanStateStore,
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
							allowBlank : false,
							mode : 'local',
							fieldLabel : '到货状态',
							ref : '../../goodsState',
							hiddenName : 'entity/goodsState',
							dataIndex : 'goodsState',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materGoodsStateStore,
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
							xtype : 'datefield',
							ref : '../../applyDate',
							name : 'entity/applyDate',
							dataIndex : 'applyDate',
							allowBlank : false,
							fieldLabel : '申请日期',
							format : "Y-m-d",
							anchor : '95%',
							value : new Date(),
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../specName',
							name : 'entity/specName',
							dataIndex : 'specName',
							allowBlank : false,
							fieldLabel : '规格型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮填充',
							ref : '../../labelDrawingCode',
							dataIndex : 'labelDrawingCode',
							editable : false,
							hideTrigger : false,
							fieldLabel : '标签图号',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onFill();
							}
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮填充',
							ref : '../../markDrawingCode',
							dataIndex : 'markDrawingCode',
							editable : false,
							hideTrigger : false,
							fieldLabel : '唛头图号',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onFill2();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../bagDrawingCode',
							dataIndex : 'bagDrawingCode',
							readOnly : true,
							fieldLabel : '包装袋图纸',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../boxDrawingCode',
							dataIndex : 'boxDrawingCode',
							readOnly : true,
							fieldLabel : '包装箱图纸',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							ref : '../../materCode',
							name : 'entity/materCode',
							dataIndex : 'materCode',
							editable : true,
							hideTrigger : false,
							allowBlank : false,
							fieldLabel : '物料长代码',
							regex : /^0\d.0\d.0\d.\d{4}$/,
							regexText : "不合法的格式",
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onFill3();
							}
						}, {
							xtype : 'textfield',
							ref : '../../materName',
							name : 'entity/materName',
							dataIndex : 'materName',
							allowBlank : false,
							fieldLabel : '物料名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '物料类型',
							ref : '../../materType',
							hiddenName : 'entity/materType',
							dataIndex : 'materType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materNameStore,
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
							fieldLabel : '单位',
							ref : '../../unit',
							hiddenName : 'entity/unit',
							dataIndex : 'unit',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materUnitStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							ref : '../../amount',
							name : 'entity/amount',
							dataIndex : 'amount',
							allowBlank : false,
							fieldLabel : '采购数量',
							anchor : '95%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../k3',
							name : 'entity/k3',
							dataIndex : 'k3',
							allowBlank : false,
							fieldLabel : 'K3库存',
							anchor : '95%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'datefield',
							ref : '../../demandDate',
							name : 'entity/demandDate',
							dataIndex : 'demandDate',
							allowBlank : false,
							fieldLabel : '需求日期',
							format : "Y-m-d",
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							ref : '../../remark',
							name : 'entity/remark',
							dataIndex : 'remark',
							allowBlank : false,
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

	// 新增物料计划
	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveMater.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../reserve1',
							name : 'entity/reserve1',
							// dataIndex : 'reserve1',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../reserve2',
							name : 'entity/reserve2',
							// dataIndex : 'reserve2',
							fieldLabel : '下单型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../reserve3',
							name : 'entity/reserve3',
							// dataIndex : 'reserve3',
							fieldLabel : '订单数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '计划状态',
							ref : '../../planState',
							hiddenName : 'entity/planState',
							dataIndex : 'planState',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materPlanStateStore,
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
							fieldLabel : '到货状态',
							ref : '../../goodsState',
							hiddenName : 'entity/goodsState',
							dataIndex : 'goodsState',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materGoodsStateStore,
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
							xtype : 'datefield',
							ref : '../../applyDate',
							name : 'entity/applyDate',
							dataIndex : 'applyDate',
							// allowBlank : false,
							fieldLabel : '申请日期',
							format : "Y-m-d",
							anchor : '95%',
							value : new Date(),
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../specName',
							name : 'entity/specName',
							dataIndex : 'specName',
							// allowBlank : false,
							fieldLabel : '规格型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							// emptyText : '单击旁边按钮填充',
							ref : '../../labelDrawingCode',
							dataIndex : 'labelDrawingCode',
							editable : true,
							hideTrigger : true,
							fieldLabel : '标签图号',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill();
							}
						}, {
							xtype : 'trigger',
							// emptyText : '单击旁边按钮填充',
							ref : '../../markDrawingCode',
							dataIndex : 'markDrawingCode',
							editable : true,
							hideTrigger : true,
							fieldLabel : '唛头图号',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill2();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../bagDrawingCode',
							name : 'entity/bagDrawingCode',
							fieldLabel : '包装袋图纸',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill();
							}
						}, {
							xtype : 'textfield',
							ref : '../../boxDrawingCode',
							name : 'entity/boxDrawingCode',
							fieldLabel : '包装箱图纸',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill2();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							ref : '../../materCode',
							name : 'entity/materCode',
							dataIndex : 'materCode',
							allowBlank : false,
							fieldLabel : '物料长代码',
							regex : /^0\d.0\d.0\d.\d{4}$/,
							regexText : "不合法的格式",
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onFill3();
							}
						}, {
							xtype : 'textfield',
							ref : '../../materName',
							name : 'entity/materName',
							dataIndex : 'materName',
							// allowBlank : false,
							fieldLabel : '物料名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '物料类型',
							ref : '../../materType',
							hiddenName : 'entity/materType',
							dataIndex : 'materType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materNameStore,
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
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '单位',
							ref : '../../unit',
							hiddenName : 'entity/unit',
							dataIndex : 'unit',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materUnitStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							ref : '../../amount',
							name : 'entity/amount',
							dataIndex : 'amount',
							// allowBlank : false,
							fieldLabel : '采购数量',
							anchor : '95%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../k3',
							name : 'entity/k3',
							dataIndex : 'k3',
							// allowBlank : false,
							fieldLabel : 'K3库存',
							anchor : '95%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'datefield',
							ref : '../../demandDate',
							name : 'entity/demandDate',
							dataIndex : 'demandDate',
							// allowBlank : false,
							fieldLabel : '需求日期',
							format : "Y-m-d",
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							ref : '../../remark',
							name : 'entity/remark',
							dataIndex : 'remark',
							// allowBlank : false,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}]
			}]
		});

	}

	// 修改自定义物料计划
	this.initEditWindow2 = function() {
		var _this = this;
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandMConfirm.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.modifyMConfirm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../reserve1',
							name : 'entity/reserve1',
							dataIndex : 'reserve1',
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../reserve2',
							name : 'entity/reserve2',
							dataIndex : 'reserve2',
							fieldLabel : '下单型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../reserve3',
							name : 'entity/reserve3',
							dataIndex : 'reserve3',
							fieldLabel : '订单数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '计划状态',
							ref : '../../planState',
							hiddenName : 'entity/planState',
							dataIndex : 'planState',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materPlanStateStore,
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
							fieldLabel : '到货状态',
							ref : '../../goodsState',
							hiddenName : 'entity/goodsState',
							dataIndex : 'goodsState',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materGoodsStateStore,
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
							xtype : 'datefield',
							ref : '../../applyDate',
							name : 'entity/applyDate',
							dataIndex : 'applyDate',
							// allowBlank : false,
							fieldLabel : '申请日期',
							format : "Y-m-d",
							anchor : '95%',
							value : new Date(),
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../specName',
							name : 'entity/specName',
							dataIndex : 'specName',
							// allowBlank : false,
							fieldLabel : '规格型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							// emptyText : '单击旁边按钮填充',
							ref : '../../labelDrawingCode',
							dataIndex : 'labelDrawingCode',
							name : 'entity/labelDrawingCode',
							editable : true,
							hideTrigger : true,
							fieldLabel : '标签图号',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill();
							}
						}, {
							xtype : 'trigger',
							// emptyText : '单击旁边按钮填充',
							ref : '../../markDrawingCode',
							dataIndex : 'markDrawingCode',
							name : 'entity/markDrawingCode',
							editable : true,
							hideTrigger : true,
							fieldLabel : '唛头图号',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill2();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../bagDrawingCode',
							dataIndex : 'bagDrawingCode',
							name : 'entity/bagDrawingCode',
							fieldLabel : '包装袋图纸',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill();
							}
						}, {
							xtype : 'textfield',
							ref : '../../boxDrawingCode',
							dataIndex : 'boxDrawingCode',
							name : 'entity/boxDrawingCode',
							fieldLabel : '包装箱图纸',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								// _this.onFill2();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							ref : '../../materCode',
							name : 'entity/materCode',
							dataIndex : 'materCode',
							allowBlank : false,
							fieldLabel : '物料长代码',
							regex : /^0\d.0\d.0\d.\d{4}$/,
							regexText : "不合法的格式",
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onFill3();
							}
						}, {
							xtype : 'textfield',
							ref : '../../materName',
							name : 'entity/materName',
							dataIndex : 'materName',
							// allowBlank : false,
							fieldLabel : '物料名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '物料类型',
							ref : '../../materType',
							hiddenName : 'entity/materType',
							dataIndex : 'materType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materNameStore,
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
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '单位',
							ref : '../../unit',
							hiddenName : 'entity/unit',
							dataIndex : 'unit',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.materUnitStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							ref : '../../amount',
							name : 'entity/amount',
							dataIndex : 'amount',
							// allowBlank : false,
							fieldLabel : '采购数量',
							anchor : '95%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../k3',
							name : 'entity/k3',
							dataIndex : 'k3',
							// allowBlank : false,
							fieldLabel : 'K3库存',
							anchor : '95%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'datefield',
							ref : '../../demandDate',
							name : 'entity/demandDate',
							dataIndex : 'demandDate',
							// allowBlank : false,
							fieldLabel : '需求日期',
							format : "Y-m-d",
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							ref : '../../remark',
							name : 'entity/remark',
							dataIndex : 'remark',
							// allowBlank : false,
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

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = this.excelUploadWin || new Ext.Window({
			title : '导入Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.component.importYxOrderStock.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择文件',
							allowBlank : false,
							inputType : 'file'
						}]
			}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin.hide();
						}
					}]
		});
	}

	this.initGoodsStateChangeWindow = function() {
		var me = this;
		this.goodsStateChangeWindow = this.goodsStateChangeWindow
				|| new Ext.fn.FormWindow({
					title : '变更到货状态',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : me.listPanel,
						columns : 1,
						loadUrl : '1.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.yxorderbase.updateBatchGoodsState.biz.ext',
						fields : [{
									xtype : 'textarea',
									ref : '../../materCodes',
									name : 'param/materCodes',
									readOnly : true,
									fieldLabel : '物料长代码',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5'
								}, {
									xtype : 'combobox',
									forceSelection : true,
									// allowBlank : false,
									mode : 'local',
									fieldLabel : '到货状态',
									ref : '../../goodsState',
									hiddenName : 'param/goodsState',
									dataIndex : 'goodsState',
									anchor : '95%',
									colspan : 1,
									emptyText : '--请选择--',
									editable : false,
									allowBlank : false,
									store : this.materGoodsStateStore,
									displayField : "name",
									valueField : "code",
									listeners : {
										"expand" : function(A) {
											me.goodsStateChangeWindow.goodsState
													.reset()
										}
									}
								}, {
									xtype : 'hidden',
									name : 'param/ids'
								}]
					}]
				});
	}
}