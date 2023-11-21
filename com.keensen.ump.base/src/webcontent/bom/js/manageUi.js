com.keensen.ump.base.BomMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();
		this.buildExcelUploadWin();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'bommgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【BOM查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/materSpecName',
								fieldLabel : '规格型号'
							}, {
								xtype : 'textfield',
								name : 'condition/materCode',
								fieldLabel : '物料代码'
							}, {
								xtype : 'textfield',
								name : 'condition/materName',
								fieldLabel : '物料名称'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : 'textfield',
								name : 'condition/workOrderName',
								fieldLabel : '工序'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/storageName',
								hiddenName : 'condition/storageName',
								fieldLabel : '发料仓库',
								dictData : KS_COMPONENT_STORAGE
							}]
				});
		this.queryPanel.addButton({
					text : "BOM模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "导入BOM",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【BOM列表】',
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.base.base.deleteBom.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'materCode',
						header : '物料代码'
					}, {
						dataIndex : 'materName',
						header : '物料名称'
					}, {
						dataIndex : 'amount',
						header : '用量'
					}, {
						dataIndex : 'workOrderName',
						header : '工序'
					}, {
						dataIndex : 'storageName',
						header : '发料仓库'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.base.queryBomByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {

			}			,
						fields : [{
									name : 'materSpecName'
								}, {
									name : 'materCode'
								}, {
									name : 'materName'
								}, {
									name : 'amount'
								}, {
									name : 'workOrderName'
								}, {
									name : 'storageName'
								}, {
									name : 'id'
								}]
					})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
					title : '新增BOM',
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
								columns : 1,
								saveUrl : 'com.keensen.ump.base.base.saveBom.biz.ext',
								fields : [{
											xtype : 'textfield',
											name : 'entity/materSpecName',
											fieldLabel : '规格型号',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 1
										}, {
											xtype : 'textfield',
											name : 'entity/materCode',
											fieldLabel : '物料代码',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 1
										}, {
											xtype : 'textfield',
											name : 'entity/materName',
											fieldLabel : '物料名称',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 1
										}, {
											xtype : 'numberfield',
											name : 'entity/amount',
											fieldLabel : '用量',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 1
										}, {
											xtype : 'textfield',
											name : 'entity/workOrderName',
											fieldLabel : '工序',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 1
										}, {
											xtype : 'dictcombobox',
											name : 'entity/storageName',
											hiddenName : 'entity/storageName',
											anchor : '95%',
											fieldLabel : '发料仓库',
											dictData : KS_COMPONENT_STORAGE
										}]
							}]
				});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改BOM',
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
						loadUrl : 'com.keensen.ump.base.base.expandBom.biz.ext',
						saveUrl : 'com.keensen.ump.base.base.saveBom.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/materSpecName',
									dataIndex : 'materSpecName',
									fieldLabel : '规格型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/materCode',
									dataIndex : 'materCode',
									fieldLabel : '物料代码',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/materName',
									dataIndex : 'materName',
									fieldLabel : '物料名称',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/amount',
									dataIndex : 'amount',
									fieldLabel : '用量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/workOrderName',
									dataIndex : 'workOrderName',
									fieldLabel : '工序',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'dictcombobox',
									name : 'entity/storageName',
									hiddenName : 'entity/storageName',
									dataIndex : 'storageName',
									anchor : '95%',
									fieldLabel : '发料仓库',
									dictData : KS_COMPONENT_STORAGE
								}, {
									xtype : 'hidden',
									name : 'entity/id',
									dataIndex : 'id'
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
				columns : 1,
				loadUrl : 'com.keensen.ump.base.base.expandBom.biz.ext',
				fields : [{
									xtype : 'displayfield',
									dataIndex : 'materSpecName',
									fieldLabel : '规格型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'materCode',
									fieldLabel : '物料代码',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'materName',
									fieldLabel : '物料名称',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'amount',
									fieldLabel : '用量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'workOrderName',
									fieldLabel : '工序',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'storageName',
									anchor : '95%',
									fieldLabel : '发料仓库'
								}, {
									xtype : 'hidden',
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
								saveUrl : 'com.keensen.ump.base.importbom.flow',
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
}