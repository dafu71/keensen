com.keensen.ump.base.CraftMgr = function() {

	this.initPanel = function() {

		this.rec = {};
		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'craftmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['Y', '在用'], ['N', '停用']]
				});

		this.materTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标元件订单', '司标元件订单'], ['中性元件订单', '中性元件订单'],
							['贴牌元件订单', '贴牌元件订单'], ['特规元件订单', '特规元件订单']]
				});

		this.prodTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['公司标准', '公司标准'], ['非标工业膜', '非标工业膜'],
							['非标家用膜', '非标家用膜']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								fieldLabel : '内部型号%-%'
							}, {
								xtype : 'combo',
								fieldLabel : '状态',
								mode : 'local',
								emptyText : '--请选择--',
								editable : false,
								store : _this.stateStore,
								displayField : "name",
								valueField : "code",
								hiddenName : 'condition/state',
								value : 'Y',
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}, {
									xtype : 'combo',
									fieldLabel : '产品类型',
									anchor : '100%',
									colspan : 1,
									mode : 'local',
									emptyText : '--请选择--',
									//allowBlank : false,
									editable : false,
									store : _this.prodTypeStore,
									displayField : "name",
									valueField : "code",
									hiddenName : 'condition/prodType',
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
					hidden : modifyLimit != 1,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {

		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel = this.listPanel || new Ext.fn.EditListPanel({
			viewConfig : {
		// forceFit : true
			},
			clicksToEdit : 1,
			cls : 'custom-row-height', // 应用自定义的CSS类
			region : 'center',
			hsPage : false,
			tbar : [{
						text : '新增',
						scope : this,
						hidden : modifyLimit != 1,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}],
			selModel : selModel,
			delUrl : '123.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 50
							}), selModel, {
						dataIndex : 'materSpecId',
						header : '物料编号'
					}, {
						dataIndex : 'materSpecName',
						header : '卷膜执行型号'
					}, {
						dataIndex : 'materType',
						header : '产品类别',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									// allowBlank : false,
									disabled : modifyLimit != 1,
									mode : 'local',
									emptyText : '--请选择--',
									editable : false,
									store : _this.materTypeStore,
									displayField : "name",
									valueField : "code",
									scope : this,
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'materType', '产品类别',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'state',
						header : '状态',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						renderer : function(v, m, r, i) {
							return v == 'Y' ? '在用' : '停用';
						},
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									mode : 'local',
									emptyText : '--请选择--',
									editable : false,
									store : _this.stateStore,
									displayField : "name",
									valueField : "code",
									scope : this,
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'state', '状态', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'prodType',
						header : '产品类型',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									// allowBlank : false,
									disabled : modifyLimit != 1,
									mode : 'local',
									emptyText : '--请选择--',
									editable : false,
									store : _this.prodTypeStore,
									displayField : "name",
									valueField : "code",
									scope : this,
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'prodType', '产品类型',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'jmSpecName',
						sortable:true,
						header : '卷膜型号',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'jmSpecName', '卷膜型号',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'craftNo',
						header : '工艺包编号',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'craftNo', '工艺包编号',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'numPerWad',
						header : '膜页数',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'numPerWad', '膜页数',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'blankingSize',
						header : '膜片长度(m)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'blankingSize', '膜片长度(m)',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'mpWidth',
						header : '膜片宽度（m）',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'mpWidth', '膜片宽度(m)',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'denseNet',
						header : '浓网型号(mil)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'denseNet', '浓网型号(mil)',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'denseNetWidth',
						header : '浓网长度(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'denseNetWidth',
													'浓网长度(mm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'denseNetSpan',
						header : '浓网宽度(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'denseNetSpan', '浓网宽度(mm)',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'lightNetLongType',
						header : '长页淡网型号',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'lightNetLongType',
													'长页淡网型号', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'lightNetLongPage',
						header : '长页淡网长度(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'lightNetLongPage',
													'长页淡网长度(mm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'lightNetLongSpan',
						header : '长页淡网宽度(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'lightNetLongSpan',
													'长页淡网宽度(mm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'lightNetShortType',
						header : '短页淡网型号',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'lightNetShortType',
													'短页淡网型号', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'lightNetShortPage',
						header : '短页淡网长度(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'lightNetShortPage',
													'短页淡网长度(mm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'drawNetShortWidth',
						header : '短页淡网宽度(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'drawNetShortWidth',
													'短页淡网宽度(mm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'area',
						header : '膜面积（ft²）',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'area', '膜面积（ft²）',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'pipe',
						header : '中心管型号',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'pipe', '中心管型号', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'intakePipeLength',
						header : '白膜进水端中心管长(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'intakePipeLength',
													'白膜进水端中心管长(mm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'effluentPipeLength',
						header : '白膜出水端中心管长(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'effluentPipeLength',
													'白膜出水端中心管长(mm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'denseNetCdm',
						header : '叠膜工艺',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'denseNetCdm', '叠膜工艺',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'juanmo',
						header : '卷膜工艺',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'juanmo', '卷膜工艺', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'juanmoTape',
						header : '卷膜胶带材质',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'juanmoTape', '卷膜胶带材质',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'diameter',
						header : '白膜直径(mm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									disabled : modifyLimit != 1,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'diameter', '白膜直径(mm)',
													newValue, oldValue);
										}
									}
								}))
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.mater.queryMaterSpecList.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {

			}			,
						fields : [{
									name : 'materSpecId'
								}, {
									name : 'materSpecCode'
								}, {
									name : 'materSpecName'
								}, {
									name : 'materClassId'
								}, {
									name : 'state'
								}, {
									name : 'safetyStock'
								}, {
									name : 'supplierId'
								}, {
									name : 'measurementUnit'
								}, {
									name : 'plannedUnitPrice'
								}, {
									name : 'thickness'
								}, {
									name : 'width'
								}, {
									name : 'length'
								}, {
									name : 'propString'
								}, {
									name : 'dispOrder'
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
									name : 'mpBatchCode'
								}, {
									name : 'qtJudgeFlag'
								}, {
									name : 'numPerWad'
								}, {
									name : 'blankingSize'
								}, {
									name : 'denseNet'
								}, {
									name : 'area'
								}, {
									name : 'pageWidth'
								}, {
									name : 'materClassCode'
								}, {
									name : 'materClassName'
								}, {
									name : 'stateName'
								}, {
									name : 'qtJudgeFlagName'
								}, {
									name : 'measurementUnitCode'
								}, {
									name : 'measurementUnitName'
								}, {
									name : 'createDate'
								}, {
									name : 'changeDate'
								}, {
									name : 'creator'
								}, {
									name : 'changer'
								}, {
									name : 'mpSize'
								}, {
									name : 'mpWidth'
								}, {
									name : 'denseNetType'
								}, {
									name : 'denseNetWidth'
								}, {
									name : 'denseNetCdm'
								}, {
									name : 'lightNetType'
								}, {
									name : 'lightNetLongPage'
								}, {
									name : 'lightNetShortPage'
								}, {
									name : 'juanmo'
								}, {
									name : 'cut'
								}, {
									name : 'raosi'
								}, {
									name : 'package'
								}, {
									name : 'pipe'
								}, {
									name : 'bookCode'
								}, {
									name : 'bookVersion'
								}, {
									name : 'preparationTime'
								}, {
									name : 'prodType'
								}, {
									name : 'lid'
								}, {
									name : 'denseNetAmount'
								}, {
									name : 'drawNetLongWidth'
								}, {
									name : 'drawNetLongAmount'
								}, {
									name : 'drawNetShortWidth'
								}, {
									name : 'drawNetShortAmount'
								}, {
									name : 'testPressure'
								}, {
									name : 'keepPressureTime'
								}, {
									name : 'pressureArange'
								}, {
									name : 'testLiquid'
								}, {
									name : 'testLiquidDensity'
								}, {
									name : 'testLiquidPressure'
								}, {
									name : 'testLiquidTemp'
								}, {
									name : 'testLiquidPh'
								}, {
									name : 'testLiquidRecovery'
								}, {
									name : 'testLiquidGpd'
								}, {
									name : 'testLiquidSalt'
								}, {
									name : 'bookCode'
								}, {
									name : 'bookVersion'
								}, {
									name : 'preparationTime'
								}, {
									name : 'prodType'
								}, {
									name : 'lid'
								}, {
									name : 'denseNetWidth'
								}, {
									name : 'denseNetAmount'
								}, {
									name : 'drawNetLongWidth'
								}, {
									name : 'drawNetLongAmount'
								}, {
									name : 'drawNetShortWidth'
								}, {
									name : 'drawNetShortAmount'
								}, {
									name : 'testPressure'
								}, {
									name : 'keepPressureTime'
								}, {
									name : 'pressureArange'
								}, {
									name : 'testLiquid'
								}, {
									name : 'testLiquidDensity'
								}, {
									name : 'testLiquidPressure'
								}, {
									name : 'testLiquidTemp'
								}, {
									name : 'testLiquidPh'
								}, {
									name : 'testLiquidRecovery'
								}, {
									name : 'testLiquidGpd'
								}, {
									name : 'testLiquidSalt'
								}, {
									name : 'jmSpecName'
								}, {
									name : 'craftNo'
								}, {
									name : 'denseNetSpan'
								}, {
									name : 'lightNetLongType'
								}, {
									name : 'lightNetLongSpan'
								}, {
									name : 'lightNetShortType'
								}, {
									name : 'intakePipeLength'
								}, {
									name : 'effluentPipeLength'
								}, {
									name : 'juanmoTape'
								}, {
									name : 'materType'
								}, {
									name : 'diameter'
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

						successFn : function(i, r) {
							if (r.ret != '1') {
								Ext.Msg.show({
											width : 400,
											title : "操作提示",
											msg : r.ret,
											icon : Ext.Msg.WARNING,
											buttons : Ext.Msg.OK,
											fn : function() {
											}
										})
							} else {
								var store = _this.listPanel.store;
								store.baseParams = _this.queryPanel.form
										.getValues();
								store.load();
							}
						},
						// pgrid : _this.listPanel,
						columns : 3,
						saveUrl : 'com.keensen.ump.qinsen.std.addMater.biz.ext',
						fields : [{
									xtype : 'combo',
									fieldLabel : '状态',
									anchor : '95%',
									colspan : 1,
									mode : 'local',
									emptyText : '--请选择--',
									allowBlank : false,
									editable : false,
									store : _this.stateStore,
									displayField : "name",
									valueField : "code",
									hiddenName : 'entity/state',
									value : 'Y',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'combo',
									fieldLabel : '产品类型',
									anchor : '95%',
									colspan : 1,
									mode : 'local',
									emptyText : '--请选择--',
									allowBlank : false,
									editable : false,
									store : _this.prodTypeStore,
									displayField : "name",
									valueField : "code",
									hiddenName : 'entity/prodType',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'combo',
									fieldLabel : '产品类别',
									anchor : '95%',
									colspan : 1,
									mode : 'local',
									emptyText : '--请选择--',
									allowBlank : false,
									editable : false,
									store : _this.materTypeStore,
									displayField : "name",
									valueField : "code",
									hiddenName : 'entity/materType',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜执行型号',
									allowBlank : false,
									name : 'entity/materSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜型号',
									allowBlank : false,
									name : 'entity/jmSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '工艺包编号',
									// allowBlank : false,
									name : 'entity/craftNo',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'numberfield',
									fieldLabel : '膜页数',
									allowBlank : false,
									name : 'entity/numPerWad',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '膜片长度(m)',
									allowBlank : false,
									name : 'entity/blankingSize',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '膜片宽度(m)',
									allowBlank : false,
									name : 'entity/mpWidth',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'numberfield',
									fieldLabel : '膜面积(ft²)',
									allowBlank : false,
									name : 'entity/area',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'textfield',
									fieldLabel : '浓网型号(mil)',
									allowBlank : false,
									name : 'entity/denseNet',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '浓网长度(mm)',
									allowBlank : false,
									name : 'entity/denseNetWidth',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '浓网宽度(mm)',
									allowBlank : false,
									name : 'entity/denseNetSpan',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'textarea',
									fieldLabel : '叠膜工艺',
									// allowBlank : false,
									name : 'entity/denseNetCdm',
									anchor : '95%',
									colspan : 3
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'textfield',
									fieldLabel : '长页淡网型号',
									// allowBlank : false,
									name : 'entity/lightNetLongType',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '长页淡网长度(mm)',
									// allowBlank : false,
									name : 'entity/lightNetLongPage',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '长页淡网宽度(mm)',
									// allowBlank : false,
									name : 'entity/lightNetLongSpan',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'textfield',
									fieldLabel : '短页淡网型号',
									// allowBlank : false,
									name : 'entity/lightNetShortType',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '短页淡网长度(mm)',
									// allowBlank : false,
									name : 'entity/lightNetShortPage',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '短页淡网宽度(mm)',
									// allowBlank : false,
									name : 'entity/drawNetShortWidth',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'textarea',
									fieldLabel : '卷膜工艺',
									// allowBlank : false,
									name : 'entity/juanmo',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜胶带材质',
									// allowBlank : false,
									name : 'entity/juanmoTape',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'textfield',
									fieldLabel : '中心管型号',
									// allowBlank : false,
									name : 'entity/pipe',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '白膜进水端<br>中心管长(mm)',
									// allowBlank : false,
									name : 'entity/intakePipeLength',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '白膜出水端<br>中心管长(mm)',
									// allowBlank : false,
									name : 'entity/effluentPipeLength',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 3
								}, {
									xtype : 'numberfield',
									fieldLabel : '白膜直径(mm)',
									// allowBlank : false,
									name : 'entity/diameter',
									anchor : '95%',
									colspan : 1
								}]
					}]
		});
	}
}