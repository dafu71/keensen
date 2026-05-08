com.keensen.ump.base.CoinlingCraftspackageMgr = function() {

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
					renderTo : 'coinlingcraftspackagemgr',
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
						//hidden : modifyLimit != 1,
						hidden : uid != 'KS00296' && uid != 'dafu',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.base.packagecraft.deleteCraftspackageCoiling.biz.ext',
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
			store : new Ext.data.JsonStore({
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
				saveUrl : 'com.keensen.ump.base.packagecraft.addCraftspackageCoiling.biz.ext',
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
							xtype : 'textarea',
							fieldLabel : '叠膜工艺',
							allowBlank : false,
							name : 'entity/denseNetCdm',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'textarea',
							fieldLabel : '卷膜工艺',
							allowBlank : false,
							name : 'entity/juanmo',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '中心管型号',
							allowBlank : false,
							name : 'entity/pipe',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '卷膜胶带材质',
							allowBlank : false,
							name : 'entity/juanmoTape',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜直径下限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/diameterLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜直径上限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/diameterUp',
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
				saveUrl : 'com.keensen.ump.base.packagecraft.saveCraftspackageCoiling.biz.ext',
				loadUrl : 'com.keensen.ump.base.packagecraft.expandCraftspackageCoiling.biz.ext',
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
							xtype : 'textarea',
							fieldLabel : '叠膜工艺',
							dataIndex : 'denseNetCdm',
							allowBlank : false,
							name : 'entity/denseNetCdm',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'textarea',
							fieldLabel : '卷膜工艺',
							dataIndex : 'juanmo',
							allowBlank : false,
							name : 'entity/juanmo',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '中心管型号',
							dataIndex : 'pipe',
							allowBlank : false,
							name : 'entity/pipe',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '卷膜胶带材质',
							allowBlank : false,
							name : 'entity/juanmoTape',
							dataIndex : 'juanmoTape',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜直径下限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/diameterLow',
							dataIndex : 'diameterLow',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'numberfield',
							fieldLabel : '白膜直径上限(mm)',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'entity/diameterUp',
							dataIndex : 'diameterUp',
							anchor : '95%',
							colspan : 3
						}]
			}]
		});
	}
}