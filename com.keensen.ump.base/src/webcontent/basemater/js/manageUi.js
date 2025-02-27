com.keensen.ump.base.BaseMaterMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'basematermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 90,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【BOM查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/drawingCode2',
								fieldLabel : '图纸编号'
							}, {
								xtype : 'textfield',
								name : 'condition/materCode2',
								fieldLabel : '物料号'
							}, {
								xtype : 'textfield',
								name : 'condition/materName',
								fieldLabel : '物料名称'
							}, {
								xtype : 'textfield',
								name : 'condition/specName',
								fieldLabel : '规格型号'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					hidden:true,
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
			delUrl : 'com.keensen.ump.base.mater.deleteBaseMater.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'drawingCode',
						header : '图纸编号'
					}, {
						dataIndex : 'materCode',
						header : '物料号'
					}, {
						dataIndex : 'materName',
						header : '名称'
					}, {
						dataIndex : 'specName',
						header : '规格型号'
					}, {
						dataIndex : 'unit',
						header : '单位'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.mater.queryBaseMaterByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'drawingCode'
						}, {
							name : 'materCode'
						}, {
							name : 'materName'
						}, {
							name : 'specName'
						}, {
							name : 'unit'
						}, {
							name : 'id'
						}]
			})
		})
	}

	this.initInputWindow = function() {
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
						pgrid : this.listPanel,
						columns : 1,
						saveUrl : 'com.keensen.ump.base.mater.saveBaseMater.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/drawingCode',
									fieldLabel : '图纸编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/materCode',
									allowBlank : false,
									fieldLabel : '物料号',
									anchor : '95%',
									regex : /^0\d.0\d.0\d.\d{4}$/,
									regexText : "不合法的格式",
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
									xtype : 'textfield',
									name : 'entity/specName',
									fieldLabel : '规格型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/unit',
									fieldLabel : '单位',
									anchor : '95%',
									colspan : 1
								}]
					}]
		});
	}

	this.initEditWindow = function() {
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
						loadUrl : 'com.keensen.ump.base.mater.expandBaseMater.biz.ext',
						saveUrl : 'com.keensen.ump.base.mater.saveBaseMater.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/drawingCode',
									fieldLabel : '图纸编号',
									anchor : '95%',
									colspan : 1,
									dataIndex : 'drawingCode'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/materCode',
									allowBlank : false,
									fieldLabel : '物料号',
									regex : /^0\d.0\d.0\d.\d{4}$/,
									regexText : "不合法的格式",
									anchor : '95%',
									colspan : 1,
									dataIndex : 'materCode'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/materName',
									fieldLabel : '物料名称',
									anchor : '95%',
									colspan : 1,
									dataIndex : 'materName'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/specName',
									fieldLabel : '规格型号',
									anchor : '95%',
									colspan : 1,
									dataIndex : 'specName'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'entity/unit',
									fieldLabel : '单位',
									anchor : '95%',
									colspan : 1,
									dataIndex : 'unit'
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
						loadUrl : 'com.keensen.ump.base.mater.expandBaseMater.biz.ext',
						fields : [{
									xtype : 'displayfield',
									dataIndex : 'drawingCode',
									fieldLabel : '图纸编号',
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
									dataIndex : 'specName',
									fieldLabel : '规格型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'unit',
									fieldLabel : '单位',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'hidden',
									dataIndex : 'id'
								}]
					}]
		});
	}

}