com.keensen.ump.base.TrimCraftspackageMgr = function() {

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
					renderTo : 'trimcraftspackagemgr',
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
			delUrl : 'com.keensen.ump.base.packagecraft.deleteCraftspackageTrim.biz.ext',
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
			store : new Ext.data.JsonStore({
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
				saveUrl : 'com.keensen.ump.base.packagecraft.addCraftspackageTrim.biz.ext',
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
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜进水端中心管长下限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/intakePipeLengthLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜进水端中心管长上限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/intakePipeLengthUp',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜出水端中心管长下限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/effluentPipeLengthLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜出水端中心管长上限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/effluentPipeLengthUp',
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
				saveUrl : 'com.keensen.ump.base.packagecraft.saveCraftspackageTrim.biz.ext',
				loadUrl : 'com.keensen.ump.base.packagecraft.expandCraftspackageTrim.biz.ext',
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
							xtype : 'numberfield',
							fieldLabel : '白膜进水端中心管长下限(mm)',
							dataIndex : 'intakePipeLengthLow',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/intakePipeLengthLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜进水端中心管长上限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/intakePipeLengthUp',
							dataIndex : 'intakePipeLengthUp',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜出水端中心管长下限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/effluentPipeLengthLow',
							dataIndex : 'effluentPipeLengthLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜出水端中心管长上限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/effluentPipeLengthUp',
							dataIndex : 'effluentPipeLengthUp',
							anchor : '95%',
							colspan : 3
						}]
			}]
		});
	}
}