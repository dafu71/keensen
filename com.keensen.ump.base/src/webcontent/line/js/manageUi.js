com.keensen.ump.base.LineMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'linemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', '在用'], ['X', '失效']]
				});

		this.tacheStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.work.queryTache.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : '',
					baseParams : {},
					fields : [{
								name : 'prodTacheId'
							}, {
								name : 'prodTacheName'
							}]
				})

		this.workshopStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.work.queryWorkshop.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : '',
					baseParams : {},
					fields : [{
								name : 'workshopId'
							}, {
								name : 'workshopName'
							}]
				})
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/lineCode',
								fieldLabel : '生产线编码'
							}, {
								xtype : 'textfield',
								name : 'condition/lineName',
								fieldLabel : '生产线名称'
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '工序',
								ref : '../prodTacheId',
								hiddenName : 'condition/prodTacheId',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : true,
								store : this.tacheStore,
								displayField : "prodTacheName",
								valueField : "prodTacheId",
								listeners : {
									"expand" : function(A) {
										this.reset()
									},
									'specialkey' : function() {
										return false;
									}
								}
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
								value : 'A',
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
			// title : '【仓库配置列表】',
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
					}, '->', {
						text : '失效',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '在用',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onUnDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.base.work.updateLineState.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'lineCode',
						header : '生产线编码'
					}, {
						dataIndex : 'lineName',
						header : '生产线名称'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}, {
						dataIndex : 'dispOrder',
						header : '显示排序'
					}, {
						dataIndex : 'tacheCode',
						header : '工序编码'
					}, {
						dataIndex : 'tacheName',
						header : '工序名称'
					}, {
						dataIndex : 'deptName',
						header : '车间名称'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.work.queryLineByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/state' : 'A'
						},
						fields : [{
									name : 'lineId'
								}, {
									name : 'lineCode'
								}, {
									name : 'lineName'
								}, {
									name : 'state'
								}, {
									name : 'stateName'
								}, {
									name : 'dispOrder'
								}, {
									name : 'tacheCode'
								}, {
									name : 'tacheName'
								}, {
									name : 'workshopId'
								}, {
									name : 'deptName'
								}, {
									name : 'deptTypeId'
								}, {
									name : 'propValueCode'
								}, {
									name : 'propValueName'
								}]
					})
		})
	}

	this.initInputWindow = function() {

		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增生产线',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						successFn : function(i, r) {
							if (r.err != '0') {
								Ext.Msg.show({
											width : 400,
											title : "操作提示",
											msg : r.msg,
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
						pgrid : this.listPanel,
						columns : 2,
						saveUrl : 'com.keensen.ump.base.work.insertProdLine.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'param/lineName',
									allowBlank : false,
									fieldLabel : '生产线名称',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'param/lineCode',
									allowBlank : false,
									fieldLabel : '生产线编码',
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
									fieldLabel : '生产工序',
									ref : '../../prodTacheId',
									hiddenName : 'param/prodTacheId',
									anchor : '100%',
									colspan : 1,
									emptyText : '--请选择--',
									editable : true,
									store : this.tacheStore,
									displayField : "prodTacheName",
									valueField : "prodTacheId",
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										'specialkey' : function() {
											return false;
										}
									}
								}, {
									xtype : 'combobox',
									forceSelection : true,
									allowBlank : false,
									mode : 'local',
									fieldLabel : '车间名称',
									ref : '../../workshopId',
									hiddenName : 'param/workshopId',
									anchor : '100%',
									colspan : 1,
									emptyText : '--请选择--',
									editable : true,
									store : this.workshopStore,
									displayField : "workshopName",
									valueField : "workshopId",
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										'specialkey' : function() {
											return false;
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'param/dispOrder',
									// allowBlank : true,
									fieldLabel : '显示顺序',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'param/remark',
									// allowBlank : true,
									fieldLabel : '备注',
									colspan : 2
								}]
					}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改生产线',
			height : 300,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
						xtype : 'editpanel',
						successFn : function(i, r) {
							if (r.err != '0') {
								Ext.Msg.show({
											width : 400,
											title : "操作提示",
											msg : r.msg,
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
								_this.editWindow.hide();
							}
						},
						baseCls : "x-plain",
						pgrid : this.listPanel,
						columns : 2,
						loadUrl : 'com.keensen.ump.base.work.expandLine.biz.ext',
						saveUrl : 'com.keensen.ump.base.work.updateProdLine.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'param/lineName',
									dataIndex : 'lineName',
									allowBlank : false,
									fieldLabel : '生产线名称',
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'param/lineCode',
									dataIndex : 'lineCode',
									allowBlank : false,
									fieldLabel : '生产线编码',
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
									fieldLabel : '生产工序',
									ref : '../../prodTacheId',
									dataIndex : 'prodTacheId',
									hiddenName : 'param/prodTacheId',
									anchor : '100%',
									colspan : 1,
									emptyText : '--请选择--',
									editable : true,
									store : this.tacheStore,
									displayField : "prodTacheName",
									valueField : "prodTacheId",
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										'specialkey' : function() {
											return false;
										}
									}
								}, {
									xtype : 'combobox',
									forceSelection : true,
									allowBlank : false,
									mode : 'local',
									fieldLabel : '车间名称',
									ref : '../../workshopId',
									dataIndex : 'workshopId',
									hiddenName : 'param/workshopId',
									anchor : '100%',
									colspan : 1,
									emptyText : '--请选择--',
									editable : true,
									store : this.workshopStore,
									displayField : "workshopName",
									valueField : "workshopId",
									listeners : {
										"expand" : function(A) {
											this.reset()
										},
										'specialkey' : function() {
											return false;
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'param/dispOrder',
									dataIndex : 'dispOrder',
									// allowBlank : true,
									fieldLabel : '显示顺序',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'param/remark',
									dataIndex : 'remark',
									// allowBlank : true,
									fieldLabel : '备注',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'param/lineId',
									dataIndex : 'lineId'
								}]
					}]
		});
	}
}