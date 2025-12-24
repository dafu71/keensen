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

		this.initChoosesingleSnWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'yxmatermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.useTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['家用', '贴牌规则（家用）'], ['工业', '贴牌规则（工业）'],
							['非常规', '贴牌非规则'], ['公司标签', '公司标签']]
				});

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
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号'
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
					hidden : uid != 'KS01147'  && uid != 'dafu',
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "导入即时库存",
					// disabled : allRight != '1',
					scope : this,
					hidden : uid != 'KS01147' && uid != 'dafu',
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});
				
		this.queryPanel.addButton({
					text : "更新K3库存",
					// disabled : allRight != '1',
					scope : this,
					hidden : uid != 'KS01147' && uid != 'dafu',
					iconCls : 'icon-application_edit',
					handler : this.onModifyK3
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
						hidden : uid != 'KS01147' && uid != 'dafu',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : uid != 'KS01147' && uid != 'dafu',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						hidden : uid != 'KS01147' && uid != 'dafu',
						handler : this.onDel
					}, '-', {
						text : '变更到货状态',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onGoodsStateChange
					}, '-', {
						text : '更新序列号',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : uid != 'KS01147' && uid != 'dafu',
						handler : this.onModifySN
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
						dataIndex : 'jmSpecName',
						width : 120,
						header : '卷膜型号',
						sortable : true
					}, {
						dataIndex : 'materCode',
						width : 120,
						header : '物料长代码',
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
						dataIndex : 'orderAmount',
						width : 120,
						header : '订单数量',
						sortable : true
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
						dataIndex : 'labelControlCode',
						header : '标签受控编号',
						sortable : true
					}, {
						dataIndex : 'drawingCode',
						width : 120,
						header : '图纸编号'
					}, {
						dataIndex : 'snStart',
						width : 120,
						header : '序列开始号'
					}, {
						dataIndex : 'snEnd',
						width : 120,
						header : '序列结束号'
					}/*
						 * , { dataIndex : 'snStart2', width : 120, header :
						 * '订单序列开始号' }, { dataIndex : 'snEnd2', width : 120,
						 * header : '订单序列结束号' }
						 */, {
						dataIndex : 'materType',
						width : 150,
						header : '物料类型',
						sortable : true
					}, {
						dataIndex : 'planState',
						width : 120,
						header : '计划状态',
						sortable : true
					}, {
						dataIndex : 'baseId',
						width : 120,
						header : '营销订单统计表id',
						sortable : true
					}, {
						dataIndex : 'goodsState',
						width : 120,
						header : '到货状态',
						sortable : true
					}, {
						dataIndex : 'snId',
						width : 120,
						header : '元件序号是否维护',
						renderer : function(value, metadata, record, rowIndex,
								columnIndex, store) {
							value = (value == null)
									? '否'
									: "<span style='color:red'>是<span>";
							return value;
						}
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
							name : 'jmSpecName'
						}, {
							name : 'labelControlCode'
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
						}, {
							name : 'snId'
						}, {
							name : 'snStart2'
						}, {
							name : 'snEnd2'
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
							name : 'entity/labelDrawingCode',
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
							name : 'entity/markDrawingCode',
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

	this.initChoosesingleSnWindow = function() {

		var _this = this;
		var choosesingleSnSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.choosesingleSnListPanel = this.choosesingleSnListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleSn
							}],
					hsPage : true,
					selModel : choosesingleSnSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							choosesingleSnSelModel, {
								dataIndex : 'useType',
								header : '标签类型',
								renderer : function(v, m, r, i) {
									var prefix = r.get("prefix");

									if (prefix.substr(0, 1) == 'K')
										return '公司标签';
									if (v == '家用')
										return '贴牌规则（家用）';
									if (v == '工业')
										return '贴牌规则（工业）';
									if (v == '非常规')
										return '贴牌非规则';
									return v;
								}
							}, {
								dataIndex : 'drawingCode',
								header : '图纸编号'
							}, {
								dataIndex : 'prodSpecName',
								header : '卷膜型号'
							}, {
								dataIndex : 'reserve1',
								header : '标签LOGO'
							}, {
								dataIndex : 'reserve2',
								header : '制作方式'
							}, {
								dataIndex : 'prefix',
								header : '前缀'
							}, {
								dataIndex : 'num',
								header : '当前数量'
							}, {
								dataIndex : 'digit',
								header : '后缀编号位数'
							}, {
								dataIndex : 'sn',
								header : '当前最大序列号'
							}, {
								dataIndex : 'rule',
								header : '编码规则'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.sn.queryByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/status' : 1
						},
						fields : [{
									name : 'id'
								}, {
									name : 'useType'
								}, {
									name : 'prefix'
								}, {
									name : 'num'
								}, {
									name : 'sn'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'digit'
								}, {
									name : 'rule'
								}, {
									name : 'reserve1'
								}, {
									name : 'reserve2'
								}, {
									name : 'drawingCode'
								}]
					})
				})

		this.queryChoosesingleSnPanel = this.queryChoosesingleSnPanel
				|| new Ext.fn.QueryPanel({
							height : 120,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/prefix',
										anchor : '95%',
										fieldLabel : '前缀'
									}, {
										xtype : 'textfield',
										name : 'condition/drawingCode',
										anchor : '95%',
										fieldLabel : '图纸编号'
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										xtype : 'textfield',
										name : 'condition/prodSpecName2',
										ref : '../prodSpecName',
										anchor : '95%',
										fieldLabel : '卷膜型号'
									}, {

										xtype : 'combobox',
										mode : 'local',
										fieldLabel : '标签类型',
										ref : '../useType',
										hiddenName : 'condition/useType',
										emptyText : '--请选择--',
										allowBlank : true,
										editable : false,
										anchor : '95%',
										colspan : 1,
										store : _this.useTypeStore,
										displayField : "name",
										valueField : "code",
										listeners : {
											scope : this,
											'expand' : function(A) {
												_this.queryChoosesingleSnPanel.useType
														.reset();
											}
										}
									}, {
										xtype : 'hidden',
										name : 'condition/status',
										value : 1

									}]
						});

		this.queryChoosesingleSnPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choosesingleSnWindow.hide();
					}

				});

		this.choosesingleSnWindow = this.choosesingleSnWindow
				|| new Ext.Window({
							title : '元件序列号查询',
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
							items : [this.queryChoosesingleSnPanel,
									this.choosesingleSnListPanel]

						});
	}

}