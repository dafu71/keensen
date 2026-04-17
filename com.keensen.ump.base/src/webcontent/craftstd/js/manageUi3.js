com.keensen.ump.base.CraftStdMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();
		this.initCopyWindow();

		this.initChoosePackageWindow();
		this.initChoosePackageCoilingWindow();
		this.initChoosePackageTrimWindow();
		this.initChoosePackageQjWindow();
		this.initChoosePackageRsWindow();
		this.initChoosePackageWaterWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'craftstdmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.craftArr = ['numPerWad', 'blankingSize', 'mpWidth', 'denseNet',
				'denseNetWidth', 'denseNetSpan', 'lightNetLongType',
				'lightNetLongPage', 'lightNetLongSpan', 'lightNetShortType',
				'lightNetShortPage', 'drawNetShortWidth', 'area'];

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
					data : [['公司标准', '公司标准']]
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

		this.packageCoilingStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.packagecraft.queryCraftspackageCoilingByPage.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : 'totalCount',
			baseParams : {
				'condition/state' : 'Y'
			},
			fields : [{
						name : 'craftNo'
					}, {
						name : 'denseNetCdm'
					}, {
						name : 'juanmo'
					}, {
						name : 'pipe'
					}, {
						name : 'juanmoTape'
					}, {
						name : 'diameterLow'
					}, {
						name : 'diameterUp'
					}, {
						name : 'state'
					}]
		})

		this.packageTrimStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.packagecraft.queryCraftspackageTrimByPage.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : 'totalCount',
			baseParams : {
				'condition/state' : 'Y'
			},
			fields : [{
						name : 'craftNo'
					}, {
						name : 'intakePipeLengthLow'
					}, {
						name : 'intakePipeLengthUp'
					}, {
						name : 'effluentPipeLengthLow'
					}, {
						name : 'effluentPipeLengthUp'
					}, {
						name : 'state'
					}]
		})

		this.packageQjStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.packagecraft.queryCraftspackageQjByPage.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : 'totalCount',
			baseParams : {
				'condition/state' : 'Y'
			},
			fields : [{
						name : 'craftNo'
					}, {
						name : 'qjType'
					}, {
						name : 'testPressureLow'
					}, {
						name : 'testPressureUp'
					}, {
						name : 'keepPressureTime'
					}, {
						name : 'pressureArangeLow'
					}, {
						name : 'pressureArangeUp'
					}, {
						name : 'state'
					}]
		})

		this.packageRsStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.packagecraft.queryCraftspackageRsByPage.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : 'totalCount',
			baseParams : {
				'condition/state' : 'Y'
			},
			fields : [{
						name : 'craftNo'
					}, {
						name : 'raosi'
					}, {
						name : 'rsDiameterLow'
					}, {
						name : 'rsDiameterUp'
					}, {
						name : 'state'
					}]
		})

		this.packageWaterStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.packagecraft.queryCraftspackageWaterByPage.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : 'totalCount',
			baseParams : {
				'condition/state' : 'Y'
			},
			fields : [{
						name : 'craftNo'
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
						name : 'state'
					}]
		})

	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/craftNo',
								fieldLabel : '下料尺寸<br>工艺包编号'
							}, {
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								fieldLabel : '卷膜执行型号%-%'
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
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/craftNoCoiling',
								fieldLabel : '卷制工艺包编号'
							}, {
								xtype : 'textfield',
								name : 'condition/craftNoTrim',
								fieldLabel : '切边工艺包编号'
							}, {
								xtype : 'textfield',
								name : 'condition/craftNoQj',
								fieldLabel : '气检工艺包编号'
							}, {
								xtype : 'textfield',
								name : 'condition/craftNoRs',
								fieldLabel : '绕丝工艺包编号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/craftNoWater',
								fieldLabel : '水测条件<br>标准包编号'
							}, {
								xtype : 'hidden',
								value : '公司标准',
								name : 'condition/prodType'
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

			enableColumnMove : false,
			listeners : {
				'headerdblclick' : function(o, columnIndex, e) {
					var findElement = function(arr, target) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i] === target) {
								return i; // 返回索引
							}
						}
						return -1; // 未找到返回-1
					}
					var cm = o.getColumnModel(); // 获取列模型
					var title = cm.getColumnHeader(columnIndex); // 获取表头标题
					var length = cm.getColumnCount();

					if (title == '下料尺寸工艺包编号') {
						var arr = ['膜页数', '膜片长度(m)', '膜片宽度（m）', '浓网型号(mil)',
								'浓网长度(mm)', '浓网宽度(mm)', '长页淡网型号', '长页淡网长度(mm)',
								'长页淡网宽度(mm)', '短页淡网型号', '短页淡网长度(mm)',
								'短页淡网宽度(mm)', '膜面积（ft²）'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}
					if (title == '卷制工艺包编号') {
						var arr = ['叠膜工艺', '卷膜工艺', '中心管型号', '卷膜胶带材质',
								'白膜直径下限(mm)', '白膜直径上限(mm)'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}

					if (title == '切边工艺包编号') {
						var arr = ['白膜进水端中心管长下限(mm)', '白膜进水端中心管长上限(mm)',
								'白膜出水端中心管长下限(mm)', '白膜出水端中心管长上限(mm)'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}

					if (title == '气检工艺包编号') {
						var arr = ['气检形式', '气检压力下限(kPa)', '气检压力上限(kPa)',
								'保压时间(s)', '泄压值范围下限(kPa)', '泄压值范围上限(kPa)'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}

					if (title == '绕丝工艺包编号') {
						var arr = ['直径下限(mm)', '直径上限(mm)', '绕丝工艺'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}

					if (title == '水测条件标准包编号') {
						var arr = ['测试液种类',  '测试液溶液(mg/L)', '压力psi(MPa)', '温度(℃)','pH','回收率(%)'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}
				}

			},

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
					}, '-', {
						text : '复制新增',
						scope : this,
						hidden : modifyLimit != 1 && addLimit != 1,
						iconCls : 'icon-application_add',
						handler : this.onAdd2
					}, '-', {
						text : '修改',
						scope : this,
						hidden : modifyLimit != 1 && addLimit != 1,
						iconCls : 'icon-application_edit',
						handler : this.onModify
					}, '->', {
						xtype : 'displayfield',
						value : '<span style="color:red">双击标题栏工艺包编号，可以切换展开/折叠详情</span>&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '当前物料编号:'
					}, {
						xtype : 'textfield',
						readOnly : true,
						width : 150,
						ref : '../materSpecId'

					}, {
						xtype : 'displayfield',
						value : '卷膜执行型号:'
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
						header : '卷膜执行型号'
					}, {
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
						hidden : true,
						header : '产品类型'
					}, {
						dataIndex : 'jmSpecName',
						sortable : true,
						header : '卷膜型号',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'craftNo',
						width : 150,
						header : '下料尺寸工艺包编号',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'numPerWad',
						header : '膜页数',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'blankingSize',
						header : '膜片长度(m)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'mpWidth',
						header : '膜片宽度（m）',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'denseNet',
						header : '浓网型号(mil)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'denseNetWidth',
						header : '浓网长度(mm)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'denseNetSpan',
						header : '浓网宽度(mm)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'lightNetLongType',
						header : '长页淡网型号',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'lightNetLongPage',
						header : '长页淡网长度(mm)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'lightNetLongSpan',
						header : '长页淡网宽度(mm)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'lightNetShortType',
						header : '短页淡网型号',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'lightNetShortPage',
						header : '短页淡网长度(mm)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'drawNetShortWidth',
						header : '短页淡网宽度(mm)',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'area',
						header : '膜面积（ft²）',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'craftNoCoiling',
						width : 150,
						header : '卷制工艺包编号',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'denseNetCdm',
						header : '叠膜工艺'
					}, {
						dataIndex : 'juanmo',
						header : '卷膜工艺'
					}, {
						dataIndex : 'pipe',
						header : '中心管型号'
					}, {
						dataIndex : 'juanmoTape',
						header : '卷膜胶带材质'
					}, {
						dataIndex : 'diameterLow',
						header : '白膜直径下限(mm)'
					}, {
						dataIndex : 'diameterUp',
						header : '白膜直径上限(mm)'
					}, {
						dataIndex : 'craftNoTrim',
						width : 150,
						header : '切边工艺包编号'
					}, {
						dataIndex : 'intakePipeLengthLow',
						header : '白膜进水端中心管长下限(mm)'
					}, {
						dataIndex : 'intakePipeLengthUp',
						header : '白膜进水端中心管长上限(mm)'
					}, {
						dataIndex : 'effluentPipeLengthLow',
						header : '白膜出水端中心管长下限(mm)'
					}, {
						dataIndex : 'effluentPipeLengthUp',
						header : '白膜出水端中心管长上限(mm)'
					}, {
						dataIndex : 'craftNoQj',
						width : 150,
						header : '气检工艺包编号'
					}, {
						dataIndex : 'qjType',
						header : '气检形式'
					}, {
						dataIndex : 'testPressureLow',
						header : '气检压力下限(kPa)'
					}, {
						dataIndex : 'testPressureUp',
						header : '气检压力上限(kPa)'
					}, {
						dataIndex : 'keepPressureTime',
						header : '保压时间(s)'
					}, {
						dataIndex : 'pressureArangeLow',
						header : '泄压值范围下限(kPa)'
					}, {
						dataIndex : 'pressureArangeUp',
						header : '泄压值范围上限(kPa)'
					}, {
						dataIndex : 'craftNoRs',
						width : 150,
						header : '绕丝工艺包编号'
					}, {
						dataIndex : 'rsDiameterLow',
						header : '直径下限(mm)'
					}, {
						dataIndex : 'rsDiameterUp',
						header : '直径上限(mm)'
					}, {
						dataIndex : 'raosi',
						header : '绕丝工艺'
					}, {
						dataIndex : 'craftNoWater',
						width : 200,
						header : '水测条件标准包编号'
					}/*
						 * , { dataIndex : 'testLiquid', header : '测试液种类' }
						 */, {
						dataIndex : 'testLiquidDensity',
						header : '测试液溶液(mg/L)'
					}, {
						dataIndex : 'testLiquidPressure',
						header : '压力psi(MPa)'
					}, {
						dataIndex : 'testLiquidTemp',
						header : '温度(℃)'
					}, {
						dataIndex : 'testLiquidPh',
						header : 'pH'
					}, {
						dataIndex : 'testLiquidRecovery',
						header : '回收率(%)'
					}, {
						dataIndex : 'mp',
						header : '指定膜片'
					}, {
						dataIndex : 'gpdLowLimit',
						header : '产水量下限（GPD）'
					}, {
						dataIndex : 'gpdUpLimit',
						header : '产水量上限(GPD)'
					}, {
						dataIndex : 'saltLowLimit',
						header : '脱盐率下限(%)'
					}, {
						dataIndex : 'saltUpLimit',
						header : '脱盐率上限(%)'
					}, {
						dataIndex : 'fileNo',
						sortable : true,
						header : '文件编号',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'bookVersion',
						sortable : true,
						header : '版本号',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'preparationTime',
						sortable : true,
						header : '编制时间',
						css : modifyLimit != 1 ? '' : ''
					}, {
						dataIndex : 'changeDt',
						header : '修订时间',
						css : modifyLimit != 1 ? '' : ''
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.mater.queryMaterSpecList.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/proType' : '公司标准'
						},
						fields : [{
									name : 'materSpecId'
								}, {
									name : 'mp'
								}, {
									name : 'gpdLowLimit'
								}, {
									name : 'gpdUpLimit'
								}, {
									name : 'saltLowLimit'
								}, {
									name : 'saltUpLimit'
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
								}, {
									name : 'rsDiameterLow'
								}, {
									name : 'rsDiameterUp'
								}, {
									name : 'testPressureLow'
								}, {
									name : 'testPressureUp'
								}, {
									name : 'qjType'
								}, {
									name : 'pressureArangeLow'
								}, {
									name : 'pressureArangeUp'
								}, {
									name : 'intakePipeLengthLow'
								}, {
									name : 'intakePipeLengthUp'
								}, {
									name : 'effluentPipeLengthLow'
								}, {
									name : 'effluentPipeLengthUp'
								}, {
									name : 'craftNoWater'
								}, {
									name : 'craftNoRs'
								}, {
									name : 'craftNoQj'
								}, {
									name : 'craftNoTrim'
								}, {
									name : 'craftNoCoiling'
								}, {
									name : 'diameterLow'
								}, {
									name : 'diameterUp'
								}, {
									name : 'mp'
								}, {
									name : 'gpdLowLimit'
								}, {
									name : 'gpdUpLimit'
								}, {
									name : 'saltLowLimit'
								}, {
									name : 'saltUpLimit'
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
						columns : 3,
						saveUrl : 'com.keensen.ump.qinsen.std.addMaterByCraft.biz.ext',
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
									ref : '../../state',
									hiddenName : 'entity/state',
									value : 'W',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'hidden',
									name : 'entity/prodType',
									ref : '../../prodType',
									value : '公司标准'
								}/*
									 * , { xtype : 'combo', fieldLabel : '产品类型',
									 * anchor : '95%', colspan : 1, mode :
									 * 'local', emptyText : '--请选择--',
									 * allowBlank : false, editable : false,
									 * store : _this.prodTypeStore, displayField :
									 * "name", valueField : "code", hiddenName :
									 * 'entity/prodType', ref :
									 * '../../prodType', listeners : { "expand" :
									 * function(A) { this.reset() } } }
									 */, {
									xtype : 'textfield',
									fieldLabel : '卷膜型号',
									allowBlank : false,
									name : 'entity/jmSpecName',
									ref : '../../jmSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜执行型号',
									allowBlank : false,
									name : 'entity/materSpecName',
									ref : '../../materSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '文件编号',
									// allowBlank : false,
									name : 'entity/fileNo',
									ref : '../../fileNo',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '版本号',
									// allowBlank : false,
									name : 'entity/bookVersion',
									ref : '../../bookVersion',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '编制时间',
									// allowBlank : false,
									name : 'entity/preparationTime',
									ref : '../../preparationTime',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									name : 'entity/craftNo',
									ref : '../../craftNo',
									dataIndex : 'craftNo',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '下料尺寸<br>工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackage();
									}

								}, {
									name : 'entity/craftNoCoiling',
									ref : '../../craftNoCoiling',
									dataIndex : 'craftNoCoiling',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '卷制工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageCoiling();
									}

								}, {
									name : 'entity/craftNoTrim',
									ref : '../../craftNoTrim',
									dataIndex : 'craftNoTrim',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '切边工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageTrim();
									}

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									name : 'entity/craftNoQj',
									ref : '../../craftNoQj',
									dataIndex : 'craftNoQj',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '气检标准包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageQj();
									}

								}, {
									name : 'entity/craftNoRs',
									ref : '../../craftNoRs',
									dataIndex : 'craftNoRs',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '绕丝工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageRs();
									}

								}, {
									name : 'entity/craftNoWater',
									ref : '../../craftNoWater',
									dataIndex : 'craftNoWater',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '水测条件<br>标准包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageWater();
									}

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../mp',
									name : 'entity/mp',
									allowBlank : false,
									fieldLabel : '指定膜片'
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../gpdLowLimit',
									name : 'entity/gpdLowLimit',
									allowBlank : false,
									fieldLabel : '产水量下限（GPD）'
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../gpdUpLimit',
									name : 'entity/gpdUpLimit',
									allowBlank : false,
									fieldLabel : '产水量上限（GPD）'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../saltLowLimit',
									name : 'entity/saltLowLimit',
									allowBlank : false,
									fieldLabel : '脱盐率下限(%)'
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../saltUpLimit',
									name : 'entity/saltUpLimit',
									allowBlank : false,
									fieldLabel : '脱盐率上限(%)'
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
					title : '选择下料尺寸工艺包',
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

	// ChoosePackageCoiling
	this.initChoosePackageCoilingWindow = function() {
		var _this = this;

		var selModel4ChoosePackageCoiling = new Ext.grid.CheckboxSelectionModel(
				{
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChoosePackageCoiling = this.listPanel4ChoosePackageCoiling
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : false
							},
							hsPage : true,
							selModel : selModel4ChoosePackageCoiling,
							tbar : [{
										text : '确定选择',
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onSelect4ChoosePackageCoiling
									}],
							delUrl : '111.biz.ext',
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4ChoosePackageCoiling,
									{
										dataIndex : 'craftNo',
										header : '工艺包编号'
									}, {
										dataIndex : 'denseNetCdm',
										header : '叠膜工艺'
									}, {
										dataIndex : 'juanmo',
										header : '卷膜工艺'
									}, {
										dataIndex : 'pipe',
										header : '中心管型号'
									}, {
										dataIndex : 'juanmoTape',
										header : '卷膜胶带材质'
									}, {
										dataIndex : 'diameterLow',
										header : '白膜直径下限(mm)'
									}, {
										dataIndex : 'diameterUp',
										header : '白膜直径上限(mm)'
									}],
							store : this.packageCoilingStore
						})

		this.queryPanel4ChoosePackageCoiling = this.queryPanel4ChoosePackageCoiling
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

		this.queryPanel4ChoosePackageCoiling.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choosePackageCoilingWindow.hide();
					}

				});

		this.choosePackageCoilingWindow = this.choosePackageCoilingWindow
				|| new Ext.Window({
							title : '选择卷制工艺包',
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
							items : [this.queryPanel4ChoosePackageCoiling,
									this.listPanel4ChoosePackageCoiling]

						})
	}

	// ChoosePackageTrim
	this.initChoosePackageTrimWindow = function() {
		var _this = this;

		var selModel4ChoosePackageTrim = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChoosePackageTrim = this.listPanel4ChoosePackageTrim
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : false
							},
							hsPage : true,
							selModel : selModel4ChoosePackageTrim,
							tbar : [{
										text : '确定选择',
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onSelect4ChoosePackageTrim
									}],
							delUrl : '111.biz.ext',
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4ChoosePackageTrim, {
										dataIndex : 'craftNo',
										header : '工艺包编号'
									}, {
										dataIndex : 'intakePipeLengthLow',
										header : '白膜进水端中心管长下限(mm)'
									}, {
										dataIndex : 'intakePipeLengthUp',
										header : '白膜进水端中心管长上限(mm)'
									}, {
										dataIndex : 'effluentPipeLengthLow',
										header : '白膜出水端中心管长下限(mm)'
									}, {
										dataIndex : 'effluentPipeLengthUp',
										header : '白膜出水端中心管长上限(mm)'
									}],
							store : this.packageTrimStore
						})

		this.queryPanel4ChoosePackageTrim = this.queryPanel4ChoosePackageTrim
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

		this.queryPanel4ChoosePackageTrim.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choosePackageTrimWindow.hide();
					}

				});

		this.choosePackageTrimWindow = this.choosePackageTrimWindow
				|| new Ext.Window({
							title : '选择切边工艺包',
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
							items : [this.queryPanel4ChoosePackageTrim,
									this.listPanel4ChoosePackageTrim]

						})
	}

	// ChoosePackageQj
	this.initChoosePackageQjWindow = function() {
		var _this = this;

		var selModel4ChoosePackageQj = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChoosePackageQj = this.listPanel4ChoosePackageQj
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : false
							},
							hsPage : true,
							selModel : selModel4ChoosePackageQj,
							tbar : [{
										text : '确定选择',
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onSelect4ChoosePackageQj
									}],
							delUrl : '111.biz.ext',
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4ChoosePackageQj, {
										dataIndex : 'craftNo',
										header : '工艺包编号'
									}, {
										dataIndex : 'qjType',
										header : '气检形式'
									}, {
										dataIndex : 'testPressureLow',
										header : '气检压力下限(kPa)'
									}, {
										dataIndex : 'testPressureUp',
										header : '气检压力上限(kPa)'
									}, {
										dataIndex : 'keepPressureTime',
										header : '保压时间(s)'
									}, {
										dataIndex : 'pressureArangeLow',
										header : '泄压值范围下限(kPa)'
									}, {
										dataIndex : 'pressureArangeUp',
										header : '泄压值范围上限(kPa)'
									}],
							store : this.packageQjStore
						})

		this.queryPanel4ChoosePackageQj = this.queryPanel4ChoosePackageQj
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

		this.queryPanel4ChoosePackageQj.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choosePackageQjWindow.hide();
					}

				});

		this.choosePackageQjWindow = this.choosePackageQjWindow
				|| new Ext.Window({
							title : '选择气检标准包',
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
							items : [this.queryPanel4ChoosePackageQj,
									this.listPanel4ChoosePackageQj]

						})
	}

	// ChoosePackageRs
	this.initChoosePackageRsWindow = function() {
		var _this = this;

		var selModel4ChoosePackageRs = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChoosePackageRs = this.listPanel4ChoosePackageRs
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : false
							},
							hsPage : true,
							selModel : selModel4ChoosePackageRs,
							tbar : [{
										text : '确定选择',
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onSelect4ChoosePackageRs
									}],
							delUrl : '111.biz.ext',
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4ChoosePackageRs, {
										dataIndex : 'craftNo',
										header : '工艺包编号'
									}, {
										dataIndex : 'rsDiameterLow',
										header : '直径下限(mm)'
									}, {
										dataIndex : 'rsDiameterUp',
										header : '直径上限(mm)'
									}, {
										dataIndex : 'raosi',
										header : '绕丝工艺'
									}],
							store : this.packageRsStore
						})

		this.queryPanel4ChoosePackageRs = this.queryPanel4ChoosePackageRs
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

		this.queryPanel4ChoosePackageRs.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choosePackageRsWindow.hide();
					}

				});

		this.choosePackageRsWindow = this.choosePackageRsWindow
				|| new Ext.Window({
							title : '选择绕丝工艺包',
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
							items : [this.queryPanel4ChoosePackageRs,
									this.listPanel4ChoosePackageRs]

						})
	}

	// ChoosePackageWater
	this.initChoosePackageWaterWindow = function() {
		var _this = this;

		var selModel4ChoosePackageWater = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChoosePackageWater = this.listPanel4ChoosePackageWater
				|| new Ext.fn.ListPanel({
							region : 'center',
							viewConfig : {
								forceFit : false
							},
							hsPage : true,
							selModel : selModel4ChoosePackageWater,
							tbar : [{
										text : '确定选择',
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onSelect4ChoosePackageWater
									}],
							delUrl : '111.biz.ext',
							columns : [new Ext.grid.RowNumberer({
												width : 30
											}), selModel4ChoosePackageWater, {
										dataIndex : 'craftNo',
										header : '工艺包编号'
									}, {
										dataIndex : 'testLiquidDensity',
										header : '测试液溶液'
									}, {
										dataIndex : 'testLiquidPressure',
										header : '压力'
									}, {
										dataIndex : 'testLiquidTemp',
										header : '温度'
									}, {
										dataIndex : 'testLiquidPh',
										header : 'pH'
									}, {
										dataIndex : 'testLiquidRecovery',
										header : '回收率'
									}],
							store : this.packageWaterStore
						})

		this.queryPanel4ChoosePackageWater = this.queryPanel4ChoosePackageWater
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

		this.queryPanel4ChoosePackageWater.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choosePackageWaterWindow.hide();
					}

				});

		this.choosePackageWaterWindow = this.choosePackageWaterWindow
				|| new Ext.Window({
							title : '选择水测条件标准包',
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
							items : [this.queryPanel4ChoosePackageWater,
									this.listPanel4ChoosePackageWater]

						})
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 1024,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',

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
						store.baseParams = _this.queryPanel.form.getValues();
						store.reload();
						_this.editWindow.hide();
					}
				},
				// pgrid : _this.listPanel,
				columns : 3,
				loadUrl : 'com.keensen.ump.base.mater.expandMaterSpec.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.std.modifyMaterByCraft.biz.ext',
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
							ref : '../../state',
							hiddenName : 'entity/state',
							value : 'W',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
									xtype : 'hidden',
									name : 'entity/prodType',
									ref : '../../prodType',
									value : '公司标准'
								}/*, {
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
							dataIndex : 'prodType',
							hiddenName : 'entity/prodType',
							ref : '../../prodType',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}*/, {
							xtype : 'textfield',
							fieldLabel : '卷膜型号',
							allowBlank : false,
							name : 'entity/jmSpecName',
							dataIndex : 'jmSpecName',
							ref : '../../jmSpecName',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '卷膜执行型号',
							allowBlank : false,
							name : 'entity/materSpecName',
							dataIndex : 'materSpecName',
							ref : '../../materSpecName',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							fieldLabel : '文件编号',
							// allowBlank : false,
							dataIndex : 'fileNo',
							name : 'entity/fileNo',
							ref : '../../fileNo',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '版本号',
							// allowBlank : false,
							dataIndex : 'bookVersion',
							name : 'entity/bookVersion',
							ref : '../../bookVersion',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '编制时间',
							// allowBlank : false,
							dataIndex : 'preparationTime',
							name : 'entity/preparationTime',
							ref : '../../preparationTime',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							name : 'entity/craftNo',
							ref : '../../craftNo',
							dataIndex : 'craftNo',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							fieldLabel : '下料尺寸<br>工艺包编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoosePackage();
							}

						}, {
							name : 'entity/craftNoCoiling',
							ref : '../../craftNoCoiling',
							dataIndex : 'craftNoCoiling',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							fieldLabel : '卷制工艺包编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoosePackageCoiling();
							}

						}, {
							name : 'entity/craftNoTrim',
							ref : '../../craftNoTrim',
							dataIndex : 'craftNoTrim',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							fieldLabel : '切边工艺包编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoosePackageTrim();
							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							name : 'entity/craftNoQj',
							ref : '../../craftNoQj',
							dataIndex : 'craftNoQj',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							fieldLabel : '气检标准包编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoosePackageQj();
							}

						}, {
							name : 'entity/craftNoRs',
							ref : '../../craftNoRs',
							dataIndex : 'craftNoRs',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							fieldLabel : '绕丝工艺包编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoosePackageRs();
							}

						}, {
							name : 'entity/craftNoWater',
							ref : '../../craftNoWater',
							dataIndex : 'craftNoWater',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							fieldLabel : '水测条件<br>标准包编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择',
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoosePackageWater();
							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 1,
							ref : '../../mp',
							name : 'entity/mp',
							dataIndex : 'mp',
							allowBlank : false,
							fieldLabel : '指定膜片'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 1,
							ref : '../../gpdLowLimit',
							name : 'entity/gpdLowLimit',
							dataIndex : 'gpdLowLimit',
							allowBlank : false,
							fieldLabel : '产水量下限（GPD）'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 1,
							ref : '../../gpdUpLimit',
							name : 'entity/gpdUpLimit',
							dataIndex : 'gpdUpLimit',
							allowBlank : false,
							fieldLabel : '产水量上限（GPD）'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 1,
							ref : '../../saltLowLimit',
							name : 'entity/saltLowLimit',
							dataIndex : 'saltLowLimit',
							allowBlank : false,
							fieldLabel : '脱盐率下限(%)'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 1,
							ref : '../../saltUpLimit',
							name : 'entity/saltUpLimit',
							dataIndex : 'saltUpLimit',
							allowBlank : false,
							fieldLabel : '脱盐率上限(%)'
						}, {
							xtype : 'hidden',
							dataIndex : 'materSpecId',
							name : 'entity/materSpecId'
						}]
			}]
		});
	}

	this.initCopyWindow = function() {
		var _this = this;
		this.copyWindow = this.copyWindow || new Ext.fn.FormWindow({
			title : '复制新增',
			height : 600,
			width : 1024,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'editpanel',

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
								_this.copyWindow.hide();
							}
						},
						// pgrid : _this.listPanel,
						columns : 3,
						loadUrl : 'com.keensen.ump.base.mater.expandMaterSpec.biz.ext',
						saveUrl : 'com.keensen.ump.qinsen.std.addMaterByCraft.biz.ext',
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
									ref : '../../state',
									hiddenName : 'entity/state',
									value : 'W',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'hidden',
									name : 'entity/prodType',
									ref : '../../prodType',
									value : '公司标准'
								}/*, {
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
									dataIndex : 'prodType',
									hiddenName : 'entity/prodType',
									ref : '../../prodType',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}*/, {
									xtype : 'textfield',
									fieldLabel : '卷膜型号',
									allowBlank : false,
									name : 'entity/jmSpecName',
									dataIndex : 'jmSpecName',
									ref : '../../jmSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '卷膜执行型号',
									allowBlank : false,
									name : 'entity/materSpecName',
									dataIndex : 'materSpecName',
									ref : '../../materSpecName',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									fieldLabel : '文件编号',
									// allowBlank : false,
									dataIndex : 'fileNo',
									name : 'entity/fileNo',
									ref : '../../fileNo',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '版本号',
									// allowBlank : false,
									dataIndex : 'bookVersion',
									name : 'entity/bookVersion',
									ref : '../../bookVersion',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'textfield',
									fieldLabel : '编制时间',
									// allowBlank : false,
									dataIndex : 'preparationTime',
									name : 'entity/preparationTime',
									ref : '../../preparationTime',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									name : 'entity/craftNo',
									ref : '../../craftNo',
									dataIndex : 'craftNo',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '下料尺寸<br>工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackage();
									}

								}, {
									name : 'entity/craftNoCoiling',
									ref : '../../craftNoCoiling',
									dataIndex : 'craftNoCoiling',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '卷制工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageCoiling();
									}

								}, {
									name : 'entity/craftNoTrim',
									ref : '../../craftNoTrim',
									dataIndex : 'craftNoTrim',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '切边工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageTrim();
									}

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									name : 'entity/craftNoQj',
									ref : '../../craftNoQj',
									dataIndex : 'craftNoQj',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '气检标准包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageQj();
									}

								}, {
									name : 'entity/craftNoRs',
									ref : '../../craftNoRs',
									dataIndex : 'craftNoRs',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '绕丝工艺包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageRs();
									}

								}, {
									name : 'entity/craftNoWater',
									ref : '../../craftNoWater',
									dataIndex : 'craftNoWater',
									allowBlank : false,
									editable : false,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '水测条件<br>标准包编号',
									xtype : 'trigger',
									emptyText : '单击旁边按钮选择',
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onChoosePackageWater();
									}

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../mp',
									name : 'entity/mp',
									dataIndex : 'mp',
									allowBlank : false,
									fieldLabel : '指定膜片'
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../gpdLowLimit',
									name : 'entity/gpdLowLimit',
									dataIndex : 'gpdLowLimit',
									allowBlank : false,
									fieldLabel : '产水量下限（GPD）'
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../gpdUpLimit',
									name : 'entity/gpdUpLimit',
									dataIndex : 'gpdUpLimit',
									allowBlank : false,
									fieldLabel : '产水量上限（GPD）'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 4
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../saltLowLimit',
									name : 'entity/saltLowLimit',
									dataIndex : 'saltLowLimit',
									allowBlank : false,
									fieldLabel : '脱盐率下限(%)'
								}, {
									xtype : 'textfield',
									anchor : '95%',
									colspan : 1,
									ref : '../../saltUpLimit',
									name : 'entity/saltUpLimit',
									dataIndex : 'saltUpLimit',
									allowBlank : false,
									fieldLabel : '脱盐率上限(%)'
								}]
					}]
		});
	}
}