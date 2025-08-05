com.keensen.ump.base.PipeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'pipemgr',
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
								name : 'condition/pipeType',
								fieldLabel : '中心管型号'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
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
			delUrl : 'com.keensen.ump.base.mater.deletePipe.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'pipeType',
						header : '中心管型号'
					}, {
						dataIndex : 'longPage',
						header : '长页'
					}, {
						dataIndex : 'shortPage',
						header : '短页'
					}, {
						dataIndex : 'pageNum',
						header : '长页页数'
					}, {
						dataIndex : 'pageNum2',
						header : '短页页数'
					}, {
						dataIndex : 'updateTime',
						header : '修改时间'
					}, {
						dataIndex : 'updateName',
						header : '修改人'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.mater.queryPipeByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {

			}			,
						fields : [{
									name : 'id'
								}, {
									name : 'pipeType'
								}, {
									name : 'longPage'
								}, {
									name : 'shortPage'
								}, {
									name : 'pageNum'
								}, {
									name : 'pageNum2'
								}, {
									name : 'updateTime'
								}, {
									name : 'updateUserId'
								}, {
									name : 'updateName'
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
						saveUrl : 'com.keensen.ump.base.mater.savePipe.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/pipeType',
									allowBlank : false,
									fieldLabel : '中心管型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/longPage',
									fieldLabel : '长页',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/shortPage',
									fieldLabel : '短页',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/pageNum',
									fieldLabel : '长页页数',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/pageNum2',
									fieldLabel : '短页页数',
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
						loadUrl : 'com.keensen.ump.base.mater.expandPipe.biz.ext',
						saveUrl : 'com.keensen.ump.base.mater.savePipe.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'entity/pipeType',
									allowBlank : false,
									dataIndex : 'pipeType',
									fieldLabel : '中心管型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/longPage',
									dataIndex : 'longPage',
									fieldLabel : '长页',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/shortPage',
									dataIndex : 'shortPage',
									fieldLabel : '短页',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/pageNum',
									dataIndex : 'pageNum',
									fieldLabel : '长页页数',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'numberfield',
									dataIndex : 'pageNum2',
									name : 'entity/pageNum2',
									fieldLabel : '短页页数',
									anchor : '95%',
									colspan : 1
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
						loadUrl : 'com.keensen.ump.base.mater.expandPipe.biz.ext',
						fields : [{
									xtype : 'displayfield',
									dataIndex : 'pipeType',
									fieldLabel : '中心管型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'longPage',
									fieldLabel : '长页',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'shortPage',
									fieldLabel : '短页',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'pageNum',
									fieldLabel : '长页页数',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'displayfield',
									dataIndex : 'pageNum2',
									fieldLabel : '短页页数',
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