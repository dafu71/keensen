com.keensen.ump.base.QjCraftspackageMgr = function() {

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
					renderTo : 'qjcraftspackagemgr',
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
				forceFit : true
			},

			// cls : 'custom-row-height', // 应用自定义的CSS类
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
			delUrl : 'com.keensen.ump.base.packagecraft.deleteCraftspackageQj.biz.ext',
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
			store : new Ext.data.JsonStore({
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
				columns : 6,
				saveUrl : 'com.keensen.ump.base.packagecraft.addCraftspackageQj.biz.ext',
				fields : [{
							xtype : 'combo',
							fieldLabel : '状态',
							ref : '../../state',
							anchor : '95%',
							colspan : 3,
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
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '气检形式',
							allowBlank : false,
							name : 'entity/qjType',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '保压时间(s)',
							allowBlank : false,
							name : 'entity/keepPressureTime',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '气检压力下限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/testPressureLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '气检压力上限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/testPressureUp',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '泄压值范围下限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/pressureArangeLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '泄压值范围上限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/pressureArangeUp',
							anchor : '95%',
							colspan : 3
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
				columns : 6,
				saveUrl : 'com.keensen.ump.base.packagecraft.saveCraftspackageQj.biz.ext',
				loadUrl : 'com.keensen.ump.base.packagecraft.expandCraftspackageQj.biz.ext',
				fields : [{
							xtype : 'combo',
							fieldLabel : '状态',
							dataIndex : 'state',
							anchor : '95%',
							colspan : 3,
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
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '气检形式',
							dataIndex : 'qjType',
							allowBlank : false,
							name : 'entity/qjType',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '保压时间(s)',
							allowBlank : false,
							name : 'entity/keepPressureTime',
							dataIndex : 'keepPressureTime',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '气检压力下限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/testPressureLow',
							dataIndex : 'testPressureLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '气检压力上限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/testPressureUp',
							dataIndex : 'testPressureUp',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '泄压值范围下限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/pressureArangeLow',
							dataIndex : 'pressureArangeLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '泄压值范围上限(kPa)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/pressureArangeUp',
							dataIndex : 'pressureArangeUp',
							anchor : '95%',
							colspan : 3
						}]
			}]
		});
	}

	
}