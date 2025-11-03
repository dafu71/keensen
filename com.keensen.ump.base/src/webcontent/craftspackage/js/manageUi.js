com.keensen.ump.base.CraftspackageMgr = function() {

	this.initPanel = function() {

		this.rec = {};
		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'craftspackagemgr',
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
								name : 'condition/craftNoStr',
								fieldLabel : '工艺包编号%-%'
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
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : exportLimit != 1,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {

		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel = this.listPanel || new Ext.fn.ListPanel({
			viewConfig : {
		// forceFit : true
			},

			//cls : 'custom-row-height', // 应用自定义的CSS类
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						hidden : modifyLimit != 1,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						hidden : modifyLimit != 1,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						hidden : modifyLimit != 1,
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.base.mater.deleteCraftspackage.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 50
							}), selModel, {
						dataIndex : 'state',
						header : '状态',
						renderer : function(v, m, r, i) {
							return v == 'Y' ? '在用' : '停用';
						}
					}, {
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
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.mater.queryCraftspackageByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
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
						_this.inputWindow.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load();
					}
				},
				pgrid : _this.listPanel,
				columns : 3,
				saveUrl : 'com.keensen.ump.base.mater.addCraftspackage.biz.ext',
				fields : [{
							xtype : 'combo',
							fieldLabel : '状态',
							ref : '../../state',
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
							xtype : 'textfield',
							fieldLabel : '工艺包编号',
							ref : '../../craftNo',
							allowBlank : false,
							name : 'entity/craftNo',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '中心管型号',
							allowBlank : false,
							name : 'entity/pipe',
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
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/blankingSize',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '膜片宽度(m)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/mpWidth',
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
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/denseNetWidth',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '浓网宽度(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/denseNetSpan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '长页淡网型号',
							allowBlank : false,
							name : 'entity/lightNetLongType',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '长页淡网长度(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/lightNetLongPage',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '长页淡网宽度(mm)',
							decimalPrecision : 3,
							allowBlank : false,
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
							allowBlank : false,
							name : 'entity/lightNetShortType',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '短页淡网长度(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/lightNetShortPage',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							fieldLabel : '短页淡网宽度(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/drawNetShortWidth',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
				pgrid : _this.listPanel,
				columns : 3,
				loadUrl : 'com.keensen.ump.base.mater.expandCraftspackage.biz.ext',
				saveUrl : 'com.keensen.ump.base.mater.saveCraftspackage.biz.ext',
				fields : [{
							xtype : 'combo',
							fieldLabel : '状态',
							dataIndex : 'state',
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
							xtype : 'textfield',
							fieldLabel : '工艺包编号',
							dataIndex : 'craftNo',
							allowBlank : false,
							readOnly : true,
							name : 'entity/craftNo',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '中心管型号',
							dataIndex : 'pipe',
							allowBlank : false,
							name : 'entity/pipe',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 3
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '膜页数',
							dataIndex : 'numPerWad',
							allowBlank : false,
							name : 'entity/numPerWad',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '膜片长度(m)',
							dataIndex : 'blankingSize',
							allowBlank : false,
							name : 'entity/blankingSize',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '膜片宽度(m)',
							allowBlank : false,
							name : 'entity/mpWidth',
							dataIndex : 'mpWidth',
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
							dataIndex : 'denseNet',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '浓网长度(mm)',
							allowBlank : false,
							name : 'entity/denseNetWidth',
							dataIndex : 'denseNetWidth',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '浓网宽度(mm)',
							allowBlank : false,
							name : 'entity/denseNetSpan',
							dataIndex : 'denseNetSpan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '长页淡网型号',
							dataIndex : 'lightNetLongType',
							allowBlank : false,
							name : 'entity/lightNetLongType',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '长页淡网长度(mm)',
							dataIndex : 'lightNetLongPage',
							allowBlank : false,
							name : 'entity/lightNetLongPage',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '长页淡网宽度(mm)',
							dataIndex : 'lightNetLongSpan',
							allowBlank : false,
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
							dataIndex : 'lightNetShortType',
							allowBlank : false,
							name : 'entity/lightNetShortType',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '短页淡网长度(mm)',
							allowBlank : false,
							name : 'entity/lightNetShortPage',
							dataIndex : 'lightNetShortPage',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							fieldLabel : '短页淡网宽度(mm)',
							allowBlank : false,
							name : 'entity/drawNetShortWidth',
							dataIndex : 'drawNetShortWidth',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}
}