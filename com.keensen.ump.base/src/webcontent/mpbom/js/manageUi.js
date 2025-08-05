com.keensen.ump.base.MpBomMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mpbommgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【BOM查询】',
					fields : [{
								xtype : 'linecombobox',
								prodTacheId : '100',
								hiddenName : 'condition/line',
								valueField : "code",
								anchor : '85%',
								fieldLabel : '生产线 '
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/mptype',
								valueField : "name",
								anchor : '85%',
								fieldLabel : '膜片型号 '
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.base.mater.deleteMpBOM.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'dmcode',
						header : '底膜代码'
					}, {
						dataIndex : 'zmcode',
						header : '铸膜液代码'
					}, {
						dataIndex : 'mptype',
						header : '膜种'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mater1',
						header : '无纺布(m)'
					}, {
						dataIndex : 'mater2',
						header : 'C11(kg)'
					}, {
						dataIndex : 'mater3',
						header : 'C12(kg)'
					}, {
						dataIndex : 'mater4',
						header : 'C13(kg)'
					}, {
						dataIndex : 'mater5',
						header : 'C14(kg)'
					}, {
						dataIndex : 'mater6',
						header : 'C22(kg)'
					}, {
						dataIndex : 'mater7',
						header : 'C21(kg)'
					}, {
						dataIndex : 'mater8',
						header : 'C29(kg)'
					}, {
						dataIndex : 'mater9',
						header : 'C41(kg)'
					}, {
						dataIndex : 'mater10',
						header : 'C42(kg)'
					}, {
						dataIndex : 'mater11',
						header : 'C51(kg)'
					}, {
						dataIndex : 'mater12',
						header : 'PVA540(kg)'
					}, {
						dataIndex : 'mater13',
						header : 'PVA205(kg)'
					}, {
						dataIndex : 'mater14',
						header : 'PVA165(kg)'
					}, {
						dataIndex : 'mater15',
						header : 'C72(kg)'
					}, {
						dataIndex : 'mater16',
						header : 'C71(kg)'
					}, {
						dataIndex : 'mater17',
						header : 'C24(kg)'
					}, {
						dataIndex : 'updateTime',
						header : '修改时间'
					}, {
						dataIndex : 'updateName',
						header : '修改人'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.mater.queryMpBOMByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {

			}			,
						fields : [{
									name : 'mptype'
								}, {
									name : 'line'
								}, {
									name : 'mater1'
								}, {
									name : 'mater2'
								}, {
									name : 'mater3'
								}, {
									name : 'mater4'
								}, {
									name : 'mater5'
								}, {
									name : 'mater6'
								}, {
									name : 'mater7'
								}, {
									name : 'mater8'
								}, {
									name : 'mater9'
								}, {
									name : 'mater10'
								}, {
									name : 'mater11'
								}, {
									name : 'mater12'
								}, {
									name : 'mater13'
								}, {
									name : 'mater14'
								}, {
									name : 'mater15'
								}, {
									name : 'mater16'
								}, {
									name : 'mater17'
								}, {
									name : 'updateTime'
								}, {
									name : 'updateUserId'
								}, {
									name : 'updateName'
								}, {
									name : 'dmcode'
								}, {
									name : 'zmcode'
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
						columns : 2,
						saveUrl : 'com.keensen.ump.base.mater.saveMpBOM.biz.ext',
						fields : [{
									xtype : 'linecombobox',
									prodTacheId : '100',
									valueField : "code",
									allowBlank : false,
									hiddenName : 'entity/line',
									anchor : '95%',
									fieldLabel : '生产线 '
								}, {
									xtype : 'mpspeccombobox',
									hiddenName : 'entity/mptype',
									valueField : "name",
									allowBlank : false,
									anchor : '95%',
									fieldLabel : '膜片型号 '
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater1',
									fieldLabel : '无纺布(m)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater2',
									fieldLabel : 'C11(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater3',
									fieldLabel : 'C12(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater4',
									fieldLabel : 'C13(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater5',
									fieldLabel : 'C14(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater6',
									fieldLabel : 'C22(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater7',
									fieldLabel : 'C21(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater8',
									fieldLabel : 'C29(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater9',
									fieldLabel : 'C41(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater10',
									fieldLabel : 'C42(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater11',
									fieldLabel : 'C51(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater12',
									fieldLabel : 'PVA540(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater13',
									fieldLabel : 'PVA205(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater14',
									fieldLabel : 'PVA165(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater15',
									fieldLabel : 'C72(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater16',
									fieldLabel : 'C71(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater17',
									fieldLabel : 'C24(kg)',
									anchor : '95%',
									colspan : 1
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
						columns : 2,
						loadUrl : 'com.keensen.ump.base.mater.expandMpBOM.biz.ext',
						saveUrl : 'com.keensen.ump.base.mater.saveMpBOM.biz.ext',
						fields : [{
									xtype : 'linecombobox',
									prodTacheId : '100',
									hiddenName : 'entity/line',
									valueField : "code",
									allowBlank : false,
									readOnly : true,
									dataIndex : 'line',
									anchor : '95%',
									fieldLabel : '生产线 '
								}, {
									xtype : 'mpspeccombobox',
									hiddenName : 'entity/mptype',
									valueField : "name",
									allowBlank : false,
									readOnly : true,
									dataIndex : 'mptype',
									anchor : '95%',
									fieldLabel : '膜片型号 '
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater1',
									dataIndex : 'mater1',
									fieldLabel : '无纺布(m)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater2',
									dataIndex : 'mater2',
									fieldLabel : 'C11(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater3',
									dataIndex : 'mater3',
									fieldLabel : 'C12(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater4',
									dataIndex : 'mater4',
									fieldLabel : 'C13(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater5',
									dataIndex : 'mater5',
									fieldLabel : 'C14(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater6',
									dataIndex : 'mater6',
									fieldLabel : 'C22(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater7',
									dataIndex : 'mater7',
									fieldLabel : 'C21(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater8',
									dataIndex : 'mater8',
									fieldLabel : 'C29(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater9',
									dataIndex : 'mater9',
									fieldLabel : 'C41(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater10',
									dataIndex : 'mater10',
									fieldLabel : 'C42(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater11',
									dataIndex : 'mater11',
									fieldLabel : 'C51(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater12',
									dataIndex : 'mater12',
									fieldLabel : 'PVA540(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater13',
									dataIndex : 'mater13',
									fieldLabel : 'PVA205(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater14',
									dataIndex : 'mater14',
									fieldLabel : 'PVA165(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater15',
									dataIndex : 'mater15',
									fieldLabel : 'C72(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/mater16',
									dataIndex : 'mater16',
									fieldLabel : 'C71(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/mater17',
									dataIndex : 'mater17',
									fieldLabel : 'C24(kg)',
									anchor : '95%',
									colspan : 1
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
						columns : 2,
						loadUrl : 'com.keensen.ump.base.mater.expandMpBOM.biz.ext',
						fields : [{
									xtype : 'displayfield',
									dataIndex : 'line',
									anchor : '95%',
									fieldLabel : '生产线 '
								}, {
									xtype : 'displayfield',
									dataIndex : 'mptype',
									anchor : '95%',
									fieldLabel : '膜片型号 '
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater1',
									fieldLabel : '无纺布(m)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater2',
									fieldLabel : 'C11(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater3',
									fieldLabel : 'C12(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater4',
									fieldLabel : 'C13(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater5',
									fieldLabel : 'C14(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater6',
									fieldLabel : 'C22(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater7',
									fieldLabel : 'C21(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater8',
									fieldLabel : 'C29(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater9',
									fieldLabel : 'C41(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater10',
									fieldLabel : 'C42(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater11',
									fieldLabel : 'C51(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater12',
									fieldLabel : 'PVA540(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater13',
									fieldLabel : 'PVA205(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater14',
									fieldLabel : 'PVA165(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater15',
									fieldLabel : 'C72(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater16',
									fieldLabel : 'C71(kg)',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									dataIndex : 'mater17',
									fieldLabel : 'C24(kg)',
									anchor : '95%',
									colspan : 1
								}]
					}]
		});
	}

}