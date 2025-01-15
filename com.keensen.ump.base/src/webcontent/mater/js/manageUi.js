com.keensen.ump.base.materClassSpecMgr = function() {
	this.initPanel = function() {
		this.initInputWindow();
		this.initEditWindow();
		this.initInputWindow2();
		this.initEditWindow2();
		this.initInputWindow3();
		this.initEditWindow3();
		this.lay = new Ext.fn.fnLayOut({
					layout : 'we',
					border : false,
					renderTo : 'materclassspecmgr',
					panels : [this.createTreePanel(), this.createMainPanel()]
				});

		return this.lay;
	}

	this.createTreePanel = function() {
		this.treePanel = this.treePanel || new Ext.Panel({
					width : 240
				});
		this.materTreeLoader = new com.keensen.ump.base.MaterSingleLoader();
		this.materTreeMenu = this.materTreeMenu || new Ext.menu.Menu({});
		this.containerMenu = new Ext.menu.Menu({});

		this.materTree = new com.keensen.ump.base.MaterIndexTree({
					width : 240,
					split : true,
					contextMenu : this.materTreeMenu,
					containerMenu : this.containerMenu,
					loader : this.materTreeLoader,
					collapsible : true
				});
		return this.materTree;
	}

	this.createMainPanel = function() {

		var _this = this;
		
		
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 60,
					columns : 4,
					region : 'center',
					border : true,
					fields : [{
								xtype : 'textfield',
								ref:'../materClassId',
								name : 'condition/materClassId'
							}]
				});
		
		this.queryWindow = this.queryWindow
				|| new Ext.Window({
							title : '查询',
							resizable : true,
							minimizable : false,
							maximizable : true,
							closeAction : "hide",
							buttonAlign : "center",
							autoScroll : false,
							modal : true,
							width : 300,
							height : 240,
							layout : 'border',
							items : [this.queryPanel]

						});
		
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
		// forceFit : true
			},
			hsPage : false,
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
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onExport
					}],
			selModel : selModel,
			delUrl : '123.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '物料编号',
						width : 120,
						dataIndex : 'materSpecId',
						sortable : true
					}, {
						header : '物料规格编码',
						width : 160,
						dataIndex : 'materSpecCode',
						hidden : true,
						ref : '../materSpecCode',
						sortable : true
					}, {
						header : '物料规格名称',
						width : 240,
						dataIndex : 'materSpecName',
						sortable : true
					}, {

						header : '批次代码',
						width : 70,
						dataIndex : 'mpBatchCode',
						ref : '../../mpBatchCode',
						hidden : true,
						sortable : true
					}, {
						header : '质检依据',
						width : 70,
						dataIndex : 'qtJudgeFlagName',
						ref : '../qtJudgeFlag',
						hidden : true,
						sortable : true
					}, {
						itemId : 'numPerWad',
						header : '膜页数',
						width : 70,
						dataIndex : 'numPerWad',
						ref : '../numPerWad',
						hidden : true,
						sortable : true
					}, {

						header : '下料尺寸(m)',
						width : 90,
						dataIndex : 'blankingSize',
						ref : '../blankingSize',
						hidden : true,
						sortable : true
					}, {
						header : '浓网(mil)',
						width : 70,
						dataIndex : 'denseNet',
						hidden : true,
						sortable : true
					}, {

						header : '膜面积',
						width : 70,
						dataIndex : 'area',
						ref : '../area',
						hidden : true,
						sortable : true
					}, {
						header : '页宽(m)',
						width : 70,
						dataIndex : 'pageWidth',
						ref : '../pageWidth',
						hidden : true,
						sortable : true
					}, {
						header : '状态',
						width : 40,
						dataIndex : 'stateName',
						sortable : true
					}, {
						header : '计量单位',
						width : 80,
						dataIndex : 'measurementUnitName',
						sortable : true
					}, {

						header : '安全库存',
						width : 80,
						dataIndex : 'safetyStock',
						ref : '../safetyStock',
						hidden : true,
						sortable : true
					}, {

						header : '计划单价(元)',
						width : 100,
						dataIndex : 'plannedUnitPrice',
						sortable : true
					}, {
						header : '显示排序',
						width : 80,
						dataIndex : 'dispOrder',
						sortable : true
					}, {
						header : '备注',
						width : 320,
						dataIndex : 'remark',
						sortable : true
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
								}]
					})
		})
		return this.listPanel;
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '常规物料规格信息',
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
						autoHide : true,
						columns : 2,
						saveUrl : 'com.keensen.ump.base.mater.saveMaterSpec.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/materSpecCode',
									ref : '../../materSpecCode',
									fieldLabel : '编码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName',
									fieldLabel : '名称',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'dictcombobox',
									name : 'entity/state',
									hiddenName : 'entity/state',
									fieldLabel : '状态',
									dictData : PARA_MATER_SPEC_STATE,
									readOnly : true,
									anchor : '95%',
									colspan : 1,
									value : 'Y',
									allowBlank : false
								}, {
									xtype : 'measurementunitcombo',
									hiddenName : 'entity/measurementUnit',
									// valueField : 'propValueName',
									// displayField : 'propValueName',
									anchor : '95%',
									colspan : 8,
									ref : '../../measurementUnit',
									allowBlank : true,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '计量单位'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/plannedUnitPrice',
									fieldLabel : '计划单价(元)',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'numberfield',
									name : 'entity/dispOrder',
									fieldLabel : '显示排序',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'entity/remark',
									fieldLabel : '说明',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'entity/materClassId',
									ref : '../../materClassId'
								}]
					}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '常规物料规格信息',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'editpanel',
						pgrid : this.listPanel,
						autoHide : true,
						columns : 2,
						loadUrl : 'com.keensen.ump.base.mater.expandMaterSpec.biz.ext',
						saveUrl : 'com.keensen.ump.base.mater.saveMaterSpec.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/materSpecCode',
									ref : '../../materSpecCode',
									dataIndex : 'materSpecCode',
									fieldLabel : '编码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName',
									dataIndex : 'materSpecName',
									fieldLabel : '名称',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'dictcombobox',
									name : 'entity/state',
									hiddenName : 'entity/state',
									fieldLabel : '状态',
									dictData : PARA_MATER_SPEC_STATE,
									dataIndex : 'state',
									anchor : '95%',
									colspan : 1,
									value : 'Y',
									allowBlank : false
								}, {
									xtype : 'measurementunitcombo',
									hiddenName : 'entity/measurementUnit',
									dataIndex : 'measurementUnit',
									anchor : '95%',
									colspan : 8,
									ref : '../../measurementUnit',
									allowBlank : true,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '计量单位'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/plannedUnitPrice',
									dataIndex : 'plannedUnitPrice',
									fieldLabel : '计划单价(元)',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'numberfield',
									name : 'entity/dispOrder',
									dataIndex : 'dispOrder',
									fieldLabel : '显示排序',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'entity/remark',
									dataIndex : 'remark',
									fieldLabel : '说明',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'entity/materClassId',
									dataIndex : 'materClassId',
									ref : '../../materClassId'
								}, {
									xtype : 'hidden',
									name : 'entity/materSpecId',
									dataIndex : 'materSpecId',
									ref : '../../materSpecId'
								}]
					}]
		});
	}

	this.initInputWindow2 = function() {
		this.inputWindow2 = this.inputWindow2 || new Ext.fn.FormWindow({
			title : '膜片规格信息',
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
						autoHide : true,
						columns : 2,
						saveUrl : 'com.keensen.ump.base.mater.saveMaterSpec.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/materSpecCode',
									ref : '../../materSpecCode',
									fieldLabel : '编码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName',
									fieldLabel : '名称',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'dictcombobox',
									name : 'entity/state',
									hiddenName : 'entity/state',
									fieldLabel : '状态',
									dictData : PARA_MATER_SPEC_STATE,
									readOnly : true,
									anchor : '95%',
									colspan : 1,
									value : 'Y',
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/mpBatchCode',
									fieldLabel : '批次代码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '质检依据',
									allowBlank : false,
									ref : '../../qtJudgeFlag',
									hiddenName : 'entity/qtJudgeFlag',
									emptyText : '--请选择--',
									anchor : '95%',
									colspan : 1,
									store : [['F', '初检'], ['L', '复检']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.inputWindow2.qtJudgeFlag
													.reset();
										}
									}
								}, {
									xtype : 'measurementunitcombo',
									hiddenName : 'entity/measurementUnit',
									// valueField : 'propValueName',
									// displayField : 'propValueName',
									anchor : '95%',
									colspan : 1,
									ref : '../../measurementUnit',
									allowBlank : true,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '计量单位'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/plannedUnitPrice',
									fieldLabel : '计划单价(元)',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'numberfield',
									name : 'entity/dispOrder',
									fieldLabel : '显示排序',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'entity/remark',
									fieldLabel : '说明',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'entity/materClassId',
									ref : '../../materClassId'
								}]
					}]
		});
	}

	this.initEditWindow2 = function() {
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '膜片规格信息',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'editpanel',
						pgrid : this.listPanel,
						autoHide : true,
						columns : 2,
						loadUrl : 'com.keensen.ump.base.mater.expandMaterSpec.biz.ext',
						saveUrl : 'com.keensen.ump.base.mater.saveMaterSpec.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/materSpecCode',
									ref : '../../materSpecCode',
									dataIndex : 'materSpecCode',
									fieldLabel : '编码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName',
									dataIndex : 'materSpecName',
									fieldLabel : '名称',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'dictcombobox',
									name : 'entity/state',
									hiddenName : 'entity/state',
									dataIndex : 'state',
									fieldLabel : '状态',
									dictData : PARA_MATER_SPEC_STATE,
									anchor : '95%',
									colspan : 1,
									value : 'Y',
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/mpBatchCode',
									dataIndex : 'mpBatchCode',
									fieldLabel : '批次代码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '质检依据',
									allowBlank : false,
									ref : '../../qtJudgeFlag',
									hiddenName : 'entity/qtJudgeFlag',
									dataIndex : 'qtJudgeFlag',
									emptyText : '--请选择--',
									anchor : '95%',
									colspan : 1,
									store : [['F', '初检'], ['L', '复检']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.inputWindow2.qtJudgeFlag
													.reset();
										}
									}
								}, {
									xtype : 'measurementunitcombo',
									hiddenName : 'entity/measurementUnit',
									// valueField : 'propValueName',
									// displayField : 'propValueName',
									anchor : '95%',
									colspan : 1,
									ref : '../../measurementUnit',
									dataIndex : 'measurementUnit',
									allowBlank : true,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '计量单位'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/plannedUnitPrice',
									dataIndex : 'plannedUnitPrice',
									fieldLabel : '计划单价(元)',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'numberfield',
									name : 'entity/dispOrder',
									dataIndex : 'dispOrder',
									fieldLabel : '显示排序',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'entity/remark',
									dataIndex : 'remark',
									fieldLabel : '说明',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'entity/materClassId',
									dataIndex : 'materClassId',
									ref : '../../materClassId'
								}, {
									xtype : 'hidden',
									name : 'entity/materSpecId',
									dataIndex : 'materSpecId',
									ref : '../../materSpecId'
								}]
					}]
		});
	}

	this.initInputWindow3 = function() {
		this.inputWindow3 = this.inputWindow3 || new Ext.fn.FormWindow({
			title : '工业膜元件规格信息',
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
						autoHide : true,
						columns : 2,
						saveUrl : 'com.keensen.ump.base.mater.saveMaterSpec.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/materSpecCode',
									ref : '../../materSpecCode',
									fieldLabel : '编码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName',
									fieldLabel : '名称',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'dictcombobox',
									name : 'entity/state',
									hiddenName : 'entity/state',
									fieldLabel : '状态',
									dictData : PARA_MATER_SPEC_STATE,
									readOnly : true,
									anchor : '95%',
									colspan : 1,
									value : 'Y',
									allowBlank : false
								}, {
									name : 'entity/numPerWad',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '膜页数',
									minValue : 0,
									decimalPrecision : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/blankingSize',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '下料尺寸(m)',
									decimalPrecision : 3,
									minValue : 0,
									allowBlank : false
								}, {
									name : 'entity/denseNet',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '浓网',
									minValue : 0,
									decimalPrecision : 0,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/area',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '膜面积',
									minValue : 0,
									decimalPrecision : 3,
									allowBlank : false
								}, {
									name : 'entity/pageWidth',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '页宽(m)',
									minValue : 0,
									decimalPrecision : 3,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'measurementunitcombo',
									hiddenName : 'entity/measurementUnit',
									dataIndex : 'measurementUnit',
									anchor : '95%',
									colspan : 8,
									ref : '../../measurementUnit',
									allowBlank : true,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '计量单位'
								}, {
									xtype : 'numberfield',
									name : 'entity/plannedUnitPrice',
									dataIndex : 'plannedUnitPrice',
									fieldLabel : '计划单价(元)',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/dispOrder',
									dataIndex : 'dispOrder',
									fieldLabel : '显示排序',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'entity/remark',
									dataIndex : 'remark',
									fieldLabel : '说明',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'entity/materClassId',
									dataIndex : 'materClassId',
									ref : '../../materClassId'
								}]
					}]
		});
	}

	this.initEditWindow3 = function() {
		this.editWindow3 = this.editWindow3 || new Ext.fn.FormWindow({
			title : '工业膜元件规格信息',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'editpanel',
						pgrid : this.listPanel,
						autoHide : true,
						columns : 2,
						loadUrl : 'com.keensen.ump.base.mater.expandMaterSpec.biz.ext',
						saveUrl : 'com.keensen.ump.base.mater.saveMaterSpec.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/materSpecCode',
									ref : '../../materSpecCode',
									dataIndex : 'materSpecCode',
									fieldLabel : '编码',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName',
									dataIndex : 'materSpecName',
									fieldLabel : '名称',
									anchor : '95%',
									colspan : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'dictcombobox',
									name : 'entity/state',
									hiddenName : 'entity/state',
									fieldLabel : '状态',
									dictData : PARA_MATER_SPEC_STATE,
									dataIndex : 'state',
									anchor : '95%',
									colspan : 1,
									value : 'Y',
									
									allowBlank : false
								}, {
									name : 'entity/numPerWad',
									dataIndex : 'numPerWad',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '膜页数',
									minValue : 0,
									decimalPrecision : 1,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/blankingSize',
									dataIndex : 'blankingSize',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '下料尺寸(m)',
									decimalPrecision : 3,
									minValue : 0,
									allowBlank : false
								}, {
									name : 'entity/denseNet',
									dataIndex : 'denseNet',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '浓网',
									minValue : 0,
									decimalPrecision : 0,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/area',
									dataIndex : 'area',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '膜面积',
									minValue : 0,
									decimalPrecision : 3,
									allowBlank : false
								}, {
									name : 'entity/pageWidth',
									dataIndex : 'pageWidth',
									anchor : '95%',
									colspan : 1,
									xtype : 'numberfield',
									fieldLabel : '页宽(m)',
									minValue : 0,
									decimalPrecision : 3,
									allowBlank : false
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'measurementunitcombo',
									hiddenName : 'entity/measurementUnit',
									dataIndex : 'measurementUnit',
									anchor : '95%',
									colspan : 8,
									ref : '../../measurementUnit',
									allowBlank : true,
									anchor : '95%',
									colspan : 1,
									fieldLabel : '计量单位'
								}, {
									xtype : 'numberfield',
									name : 'entity/plannedUnitPrice',
									dataIndex : 'plannedUnitPrice',
									fieldLabel : '计划单价(元)',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/dispOrder',
									dataIndex : 'dispOrder',
									fieldLabel : '显示排序',
									anchor : '95%',
									colspan : 1,
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'entity/remark',
									dataIndex : 'remark',
									fieldLabel : '说明',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'entity/materClassId',
									dataIndex : 'materClassId',
									ref : '../../materClassId'
								}, {
									xtype : 'hidden',
									name : 'entity/materSpecId',
									dataIndex : 'materSpecId',
									ref : '../../materSpecId'
								}]
					}]
		});
	}
}