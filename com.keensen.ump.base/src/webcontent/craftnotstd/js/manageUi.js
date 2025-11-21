com.keensen.ump.base.CraftNotStdMgr = function() {

	this.initPanel = function() {

		this.rec = {};
		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();

		this.initChoosePackageWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'craftnotstdmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.craftArr = ['numPerWad', 'blankingSize', 'mpWidth', 'denseNet',
				'denseNetWidth', 'denseNetSpan', 'lightNetLongType',
				'lightNetLongPage', 'lightNetLongSpan', 'lightNetShortType',
				'lightNetShortPage', 'drawNetShortWidth', 'pipe'];

		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['Y', '在用'], ['N', '停用'], ['W', '待审核']]
				});

		this.stateStore4Add = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['W', '待审核']]
				});

		this.materTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标元件订单', '司标元件订单'], ['中性元件订单', '中性元件订单'],
							['贴牌元件订单', '贴牌元件订单'], ['特规元件订单', '特规元件订单']]
				});

		this.prodTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['非标工业膜', '非标工业膜'], ['非标家用膜', '非标家用膜']]
				});

		this.packageStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.mater.queryCraftspackageByPage.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : 'totalCount',
			baseParams : {
				'condition/state' : 'Y'
			},
			fields : [{
						name : 'craftNo'
					}, {
						name : 'numPerWad'
					}, {
						name : 'blankingSize'
					}, {
						name : 'mpWidth'
					}, {
						name : 'denseNet'
					}, {
						name : 'denseNetWidth'
					}, {
						name : 'denseNetSpan'
					}, {
						name : 'lightNetLongType'
					}, {
						name : 'lightNetLongPage'
					}, {
						name : 'lightNetLongSpan'
					}, {
						name : 'lightNetShortType'
					}, {
						name : 'lightNetShortPage'
					}, {
						name : 'drawNetShortWidth'
					}, {
						name : 'pipe'
					}, {
						name : 'state'
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
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/craftNo',
								fieldLabel : '工艺包编号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								fieldLabel : '卷膜工艺执行型号%-%'
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
								xtype : 'hidden',
								value : '公司标准',
								name : 'condition/notProdType'
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
						hidden : modifyLimit != 1 && addLimit != 1,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '复制新增',
						scope : this,
						hidden : modifyLimit != 1 && addLimit != 1,
						iconCls : 'icon-application_add',
						handler : this.onAdd2
					}, '->', {
						xtype : 'displayfield',
						value : '当前物料编号:'
					}, {
						xtype : 'textfield',
						readOnly : true,
						width : 150,
						ref : '../materSpecId'

					}, {
						xtype : 'displayfield',
						value : '卷膜工艺执行型号:'
					}, {
						xtype : 'textfield',
						readOnly : true,
						width : 150,
						ref : '../materSpecName'

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
						header : '卷膜工艺执行型号'
					}/*
						 * , { dataIndex : 'materType', header : '产品类别', css :
						 * modifyLimit != 1 ? '' : 'background:#c7c7c7;', editor :
						 * new Ext.grid.GridEditor(new Ext.form.ComboBox( { //
						 * allowBlank : false, disabled : modifyLimit != 1, mode :
						 * 'local', emptyText : '--请选择--', editable : false,
						 * store : _this.materTypeStore, displayField : "name",
						 * valueField : "code", scope : this, listeners : {
						 * "expand" : function(A) { this.reset() }, 'change' :
						 * function(o, newValue, oldValue) { if (newValue ==
						 * oldValue) return false; var materSpecId =
						 * _this.rec.data['materSpecId'];
						 * _this.modifyMater(materSpecId, 'materType', '产品类别',
						 * newValue, oldValue); } } })) }
						 */, {
						dataIndex : 'state',
						header : '状态',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						renderer : function(v, m, r, i) {
							return v == 'Y' ? '在用' : v == 'N' ? '停用' : '待审核';
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
													
											if (Ext.isEmpty(newValue))
												return false;
												
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
								{ //
									allowBlank : false,
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

											if (Ext.isEmpty(newValue))
												return false;

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
						dataIndex : 'fileNo',
						sortable : true,
						header : '文件编号',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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
													'fileNo', '文件编号', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'bookVersion',
						sortable : true,
						header : '版本号',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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
													'bookVersion', '版本号',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'preparationTime',
						sortable : true,
						header : '编制时间',
						css : modifyLimit != 1 ? '' : 'background:#c7c7d7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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
													'preparationTime', '编制时间',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'jmSpecName',
						sortable : true,
						header : '卷膜型号',
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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('numPerWad') > -1) {
												Ext.Msg.alert("系统提示",
														'膜页数' + "是工艺包项目，不能修改！",
														function() {
															_this.listPanel.store
																	.reload();
														});

												return false;
											}
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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('blankingSize') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'膜片长度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}
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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('mpWidth') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'膜片宽度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('denseNet') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'浓网型号'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('denseNetWidth') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'浓网长度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('denseNetSpan') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'浓网宽度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('lightNetLongType') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'长页淡网型号'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('lightNetLongPage') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'长页淡网长度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('lightNetLongSpan') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'长页淡网宽度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('lightNetShortType') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'短页淡网型号'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('lightNetShortPage') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'短页淡网长度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('drawNetShortWidth') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'短页淡网宽度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('area') > -1) {
												Ext.Msg.alert("系统提示",
														'膜面积' + "是工艺包项目，不能修改！",
														function() {
															_this.listPanel.store
																	.reload();
														});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('pipe') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'中心管型号'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('intakePipeLength') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'白膜进水端中心管长'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('effluentPipeLength') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'白膜出水端中心管长'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('denseNetCdm') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'叠膜工艺'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('juanmo') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'卷膜工艺'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('juanmoTape') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'卷膜胶带材质'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

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
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('diameter') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'白膜直径'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'diameter', '白膜直径(mm)',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testPressure',
						header : '气检压力(kPa)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									// allowBlank : false,
									disabled : modifyLimit != 1,
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testPressure') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'气检压力'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testPressure',
													'气检压力(kPa)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'keepPressureTime',
						header : '保压时间(s)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									// allowBlank : false,
									disabled : modifyLimit != 1,
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('keepPressureTime') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'保压时间'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'keepPressureTime',
													'保压时间(s)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'pressureArange',
						header : '泄压值范围(kPa)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
									disabled : modifyLimit != 1,
									//decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('pressureArange') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'泄压值范围'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'pressureArange',
													'泄压值范围(kPa)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquid',
						header : '测试液种类',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquid') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'测试液种类'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquid', '测试液种类',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquidDensity',
						header : '测试液浓度(ppm)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7d7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									// allowBlank : false,
									disabled : modifyLimit != 1,
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquidDensity') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'测试液浓度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquidDensity',
													'测试液浓度(ppm)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquidPressure',
						header : '测试液压力(psi)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									// allowBlank : false,
									disabled : modifyLimit != 1,
									decimalPrecision : 3,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquidPressure') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'测试液压力'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquidPressure',
													'测试液压力(psi)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquidTemp',
						header : '测试液温度(℃)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquidTemp') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'测试液温度'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquidTemp',
													'测试液温度(℃)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquidPh',
						header : '测试液pH',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquidPh') > -1) {
												Ext.Msg
														.alert(
																"系统提示",
																'测试液pH'
																		+ "是工艺包项目，不能修改！",
																function() {
																	_this.listPanel.store
																			.reload();
																});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquidPh', '测试液pH',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquidRecovery',
						header : '回收率(%)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7d7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquidRecovery') > -1) {
												Ext.Msg.alert("系统提示",
														'回收率' + "是工艺包项目，不能修改！",
														function() {
															_this.listPanel.store
																	.reload();
														});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquidRecovery',
													'回收率(%)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquidGpd',
						header : '产水量(GPD)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7a7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquidGpd') > -1) {
												Ext.Msg.alert("系统提示",
														'产水量' + "是工艺包项目，不能修改！",
														function() {
															_this.listPanel.store
																	.reload();
														});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquidGpd',
													'产水量(GPD)', newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLiquidSalt',
						header : '脱盐率(%)',
						css : modifyLimit != 1 ? '' : 'background:#c7c7b7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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

											var craftNo = _this.rec.data['craftNo'];

											if (!Ext.isEmpty(craftNo)
													&& _this.craftArr
															.indexOf('testLiquidSalt') > -1) {
												Ext.Msg.alert("系统提示",
														'脱盐率' + "是工艺包项目，不能修改！",
														function() {
															_this.listPanel.store
																	.reload();
														});

												return false;
											}

											var materSpecId = _this.rec.data['materSpecId'];
											_this.modifyMater(materSpecId,
													'testLiquidSalt', '脱盐率(%)',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'modifyRecord',
						header : '修订记录',
						css : modifyLimit != 1 ? '' : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									// allowBlank : false,
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
													'modifyRecord', '修订记录',
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
							'condition/notProdType' : '公司标准'
						},
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
								}, {
									name : 'fileNo'
								}, {
									name : 'modifyRecord'
								}]
					})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 1024,
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
								store.reload();
								_this.inputWindow.hide();
							}
						},
						// pgrid : _this.listPanel,
						columns : 4,
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
									store : _this.stateStore4Add,
									displayField : "name",
									valueField : "code",
									ref:'../../state',
									hiddenName : 'entity/state',
									value : 'W',
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
									ref:'../../prodType',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}
								/*
								 * , { xtype : 'combo', fieldLabel : '产品类别',
								 * anchor : '95%', colspan : 1, mode : 'local',
								 * emptyText : '--请选择--', allowBlank : false,
								 * editable : false, store :
								 * _this.materTypeStore, displayField : "name",
								 * valueField : "code", hiddenName :
								 * 'entity/materType', listeners : { "expand" :
								 * function(A) { this.reset() } } }
								 */, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '文件编号',
									// allowBlank : false,
									name : 'entity/fileNo',
									ref:'../../fileNo',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '版本号',
									// allowBlank : false,
									name : 'entity/bookVersion',
									ref:'../../bookVersion',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '编制时间',
									// allowBlank : false,
									name : 'entity/preparationTime',
									ref:'../../preparationTime',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜工艺执行型号',
									allowBlank : false,
									name : 'entity/materSpecName',
									ref:'../../materSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜型号',
									allowBlank : false,
									name : 'entity/jmSpecName',
									ref:'../../jmSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									name : 'entity/craftNo',
									ref : '../../craftNo',
									dataIndex : 'craftNo',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackage();
									}

								}, {
									xtype : 'numberfield',
									fieldLabel : '膜页数',
									allowBlank : false,
									name : 'entity/numPerWad',
									decimalPrecision : 3,
									ref : '../../numPerWad',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '膜片长度(m)',
									decimalPrecision : 3,
									allowBlank : false,
									name : 'entity/blankingSize',
									ref : '../../blankingSize',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'numberfield',
									fieldLabel : '膜片宽度(m)',
									decimalPrecision : 3,
									allowBlank : false,
									name : 'entity/mpWidth',
									ref : '../../mpWidth',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '膜面积(ft²)',
									decimalPrecision : 3,
									allowBlank : false,
									name : 'entity/area',
									ref : '../../area',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '浓网型号(mil)',
									allowBlank : false,
									name : 'entity/denseNet',
									ref : '../../denseNet',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '浓网长度(mm)',
									decimalPrecision : 3,
									allowBlank : false,
									name : 'entity/denseNetWidth',
									ref : '../../denseNetWidth',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'numberfield',
									fieldLabel : '浓网宽度(mm)',
									decimalPrecision : 3,
									allowBlank : false,
									name : 'entity/denseNetSpan',
									ref : '../../denseNetSpan',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '长页淡网型号',
									// allowBlank : false,
									name : 'entity/lightNetLongType',
									ref : '../../lightNetLongType',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '长页淡网长度(mm)',
									decimalPrecision : 3,
									// allowBlank : false,
									name : 'entity/lightNetLongPage',
									ref : '../../lightNetLongPage',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '长页淡网宽度(mm)',
									decimalPrecision : 3,
									// allowBlank : false,
									name : 'entity/lightNetLongSpan',
									ref : '../../lightNetLongSpan',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '短页淡网型号',
									// allowBlank : false,
									name : 'entity/lightNetShortType',
									ref : '../../lightNetShortType',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '短页淡网长度(mm)',
									decimalPrecision : 3,
									// allowBlank : false,
									name : 'entity/lightNetShortPage',
									ref : '../../lightNetShortPage',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '短页淡网宽度(mm)',
									decimalPrecision : 3,
									// allowBlank : false,
									name : 'entity/drawNetShortWidth',
									ref : '../../drawNetShortWidth',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜胶带材质',
									// allowBlank : false,
									name : 'entity/juanmoTape',
									ref : '../../juanmoTape',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '中心管型号',
									// allowBlank : false,
									name : 'entity/pipe',
									ref : '../../pipe',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '白膜进水端<br>中心管长(mm)',
									// allowBlank : false,
									name : 'entity/intakePipeLength',
									ref : '../../intakePipeLength',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '白膜出水端<br>中心管长(mm)',
									// allowBlank : false,
									name : 'entity/effluentPipeLength',
									ref : '../../effluentPipeLength',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									fieldLabel : '白膜直径(mm)',
									decimalPrecision : 3,
									// allowBlank : false,
									name : 'entity/diameter',
									ref : '../../diameter',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textarea',
									fieldLabel : '叠膜工艺',
									// allowBlank : false,
									name : 'entity/denseNetCdm',
									ref : '../../denseNetCdm',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'textarea',
									fieldLabel : '卷膜工艺',
									// allowBlank : false,
									name : 'entity/juanmo',
									ref : '../../juanmo',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '气检压力(kPa)',
									// allowBlank : false,
									name : 'entity/testPressure',
									ref : '../../testPressure',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '保压时间(s)',
									// allowBlank : false,
									name : 'entity/keepPressureTime',
									ref : '../../keepPressureTime',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '泄压值范围(kPa)',
									// allowBlank : false,
									name : 'entity/pressureArange',
									ref : '../../pressureArange',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '测试液种类',
									// allowBlank : false,
									name : 'entity/testLiquid',
									ref : '../../testLiquid',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '测试液浓度(ppm)',
									// allowBlank : false,
									name : 'entity/testLiquidDensity',
									ref : '../../testLiquidDensity',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '测试液压力(psi)',
									// allowBlank : false,
									name : 'entity/testLiquidPressure',
									ref : '../../testLiquidPressure',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '测试液温度(℃)',
									// allowBlank : false,
									name : 'entity/testLiquidTemp',
									ref : '../../testLiquidTemp',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '测试液pH',
									// allowBlank : false,
									name : 'entity/testLiquidPh',
									ref : '../../testLiquidPh',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '回收率(%)',
									// allowBlank : false,
									name : 'entity/testLiquidRecovery',
									ref : '../../testLiquidRecovery',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '产水量(GPD)',
									// allowBlank : false,
									name : 'entity/testLiquidGpd',
									ref : '../../testLiquidGpd',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '脱盐率(%)',
									// allowBlank : false,
									name : 'entity/testLiquidSalt',
									ref : '../../testLiquidSalt',
									anchor : '95%',
									colspan : 1
								}]
					}]
		});
	}

	// ChoosePackage
	this.initChoosePackageWindow = function() {
		var _this = this;

		var selModel4ChoosePackage = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChoosePackage = this.listPanel4ChoosePackage
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : false
							},
							hsPage : true,
							selModel : selModel4ChoosePackage,
							tbar : [{
										text : '确定选择',
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onSelect4ChoosePackage
									}],
							delUrl : '111.biz.ext',
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4ChoosePackage, {
										dataIndex : 'craftNo',
										header : '工艺包编号'
									}, {
										dataIndex : 'numPerWad',
										header : '膜页数'
									}, {
										dataIndex : 'blankingSize',
										header : '膜片长度(m)'
									}, {
										dataIndex : 'mpWidth',
										header : '膜片宽度（m）'
									}, {
										dataIndex : 'denseNet',
										header : '浓网型号(mil)'
									}, {
										dataIndex : 'denseNetWidth',
										header : '浓网长度(mm)'
									}, {
										dataIndex : 'denseNetSpan',
										header : '浓网宽度(mm)'
									}, {
										dataIndex : 'lightNetLongType',
										header : '长页淡网型号'
									}, {
										dataIndex : 'lightNetLongPage',
										header : '长页淡网长度(mm)'
									}, {
										dataIndex : 'lightNetLongSpan',
										header : '长页淡网宽度(mm)'
									}, {
										dataIndex : 'lightNetShortType',
										header : '短页淡网型号'
									}, {
										dataIndex : 'lightNetShortPage',
										header : '短页淡网长度(mm)'
									}, {
										dataIndex : 'drawNetShortWidth',
										header : '短页淡网宽度(mm)'
									}, {
										dataIndex : 'pipe',
										header : '中心管型号'
									}],
							store : this.packageStore
						})

		this.queryPanel4ChoosePackage = this.queryPanel4ChoosePackage
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/craftNoStr',
										fieldLabel : '工艺包编号%-%'
									}, {
										xtype : 'hidden',
										ref : '../state',
										value : 'Y',
										name : 'condition/state'
									}]
						})

		this.queryPanel4ChoosePackage.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choosePackageWindow.hide();
					}

				});

		this.choosePackageWindow = this.choosePackageWindow || new Ext.Window({
					title : '选择工艺包',
					// 自定义属性
					opt : '',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 900,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4ChoosePackage,
							this.listPanel4ChoosePackage]

				})
	}
}