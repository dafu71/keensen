com.keensen.ump.produce.quality.mpstandMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initThickStandWindow();
		this.initAddThickStandWindow();
		this.initEditThickStandWindow();

		var _this = this;

		this.linecombo = new Ext.form.ComboBox({
			store : this.lineStore,
			allowBlank : false,
			anchor : '95%',
			colspan : 2,
			fieldLabel : '生产线',
			displayField : 'name',
			valueField : 'id',
			myvalue : '',
			typeAhead : true,
			mode : 'local',
			// name : 'condition/storageIds',
			// hiddenName: 'entity/lineIds',
			tpl : '<tpl for="."><div class="x-combo-list-item"><span><input id="lineItem{[values.id]}" type="checkbox" {[values.check?"checked":""]} value="{[values.id]}" /></span><span >{name}</span></div></tpl>',

			triggerAction : 'all',
			emptyText : '--请选择--',
			selectOnFocus : true,

			onSelect : function(record, index) {
				if (_this.linecombo.fireEvent('beforeselect', _this.linecombo,
						record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					_this.linecombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('name'));
									strvalue.push(rc.get('id'));
								}
							});
					_this.linecombo.setValue(str.join());
					_this.linecombo.myvalue = strvalue.join();
					_this.linecombo.fireEvent('select', _this.linecombo,
							record, index);
				}
			}
		});

		this.macnamecombo = new Ext.form.ComboBox({
			store : this.macNameStore,
			allowBlank : false,
			anchor : '95%',
			colspan : 1,
			fieldLabel : '测试台',
			displayField : 'name',
			valueField : 'id',
			myvalue : '',
			typeAhead : true,
			mode : 'local',
			// name : 'condition/storageIds',
			hiddenName : 'entity/macNames',
			tpl : '<tpl for="."><div class="x-combo-list-item"><span><input type="checkbox" id="macItem{[values.id]}" {[values.check?"checked":""]} value="{[values.id]}" /></span><span >{name}</span></div></tpl>',
			triggerAction : 'all',
			emptyText : '--请选择--',
			selectOnFocus : true,

			onSelect : function(record, index) {
				if (_this.macnamecombo.fireEvent('beforeselect',
						_this.macnamecombo, record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					_this.macnamecombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('name'));
									strvalue.push(rc.get('id'));
								}
							});
					_this.macnamecombo.setValue(str.join());
					_this.macnamecombo.myvalue = strvalue.join();
					_this.macnamecombo.fireEvent('select', _this.macnamecombo,
							record, index);
				}
			}
		});

		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mpstandmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.lowSymbolStore = new Ext.data.ArrayStore({
					fields : ['id', 'name'],
					data : [['>=', '>='], ['>', '>']]
				});
		this.upSymbolStore = new Ext.data.ArrayStore({
					fields : ['id', 'name'],
					data : [['<=', '<='], ['<', '<']]
				});
		this.methodStore = new Ext.data.ArrayStore({
					fields : ['id', 'name'],
					data : [['初测', '初测'], ['复测', '复测']]
				});

		this.stateStore = new Ext.data.ArrayStore({
					fields : ['id', 'name'],
					data : [['Y', '在用'], ['N', '失效']]
				});
		this.isWxStore = new Ext.data.ArrayStore({
					fields : ['id', 'name'],
					data : [['Y', '是'], ['N', '否'], ['A', '全部']]
				});

		this.macNameStore = new Ext.data.ArrayStore({
					fields : ['id', 'name'],
					data : [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'],
							['5', '5'], ['6', '6'], ['7', '7']]
				});

		this.lineStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.base.qryLineOption.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/prodTacheId' : 100
					},
					fields : [{
								name : "id"
							}, {
								name : "name"
							}, {
								name : "code"
							}]
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
					// title : '【膜片质检标准查询】',
					fields : [{
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '100%',
								fieldLabel : '膜片型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : 'dictcombobox',
								name : 'condition/isWx',
								hiddenName : 'condition/isWx',
								fieldLabel : '是否外销',
								anchor : '100%',
								dictData : ABF_YESORNO
							}, {
								xtype : 'textfield',
								name : 'condition/macName',
								fieldLabel : '测试台',
								anchor : '100%'
							}, {
								xtype : 'linecombobox',
								prodTacheId : '100',
								hiddenName : 'condition/lineId',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '生产线 '
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【膜片质检标准列表】',
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
					}, '->', {
						text : '厚度标准',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onThickStand
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.quality.deleteBatchMpStand.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'specName',
						header : '膜片型号'
					}, {
						dataIndex : 'levelName',
						header : '等级'
					}, {
						dataIndex : 'gfd',
						header : '膜通量GFD'
					}, {
						dataIndex : 'salt',
						header : '脱盐率'
					}, {
						dataIndex : 'macName',
						header : '测试台'
					}, {
						dataIndex : 'lineName',
						header : '生产线'
					}, {
						dataIndex : 'method',
						header : '首/复检'
					}, {
						dataIndex : 'testSolid',
						header : '测试溶液'
					}, {
						dataIndex : 'isWxName',
						header : '是否外销'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryMpStandByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'recordId'
						}, {
							name : 'spectId'
						}, {
							name : 'specName'
						}, {
							name : 'levelId'
						}, {
							name : 'levelName'
						}, {
							name : 'gfd'
						}, {
							name : 'salt'
						}, {
							name : 'stateName'
						}, {
							name : 'macName'
						}, {
							name : 'testSolid'
						}, {
							name : 'method'
						}, {
							name : 'testSolid'
						}, {
							name : 'isWxName'
						}, {
							name : 'lineId'
						}, {
							name : 'lineName'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增膜片质检标准',
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
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveMpStands.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/specId',
							name : 'entity/specId',
							fieldLabel : '膜片型号',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'mpperfcombobox',
							allowBlank : false,
							hiddenName : 'entity/levelId',
							name : 'entity/levelId',
							fieldLabel : '等级',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>膜通量范围</span>",
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/gfdLowSymbol',
							hiddenName : 'entity/gfdLowSymbol',
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.lowSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/gfdLowLimit',
							// allowBlank : false,
							fieldLabel : '下限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/gfdUpSymbol',
							hiddenName : 'entity/gfdUpSymbol',
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.upSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/gfdUpLimit',
							// allowBlank : false,
							fieldLabel : '上限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>脱盐率范围</span>",
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/saltLowSymbol',
							hiddenName : 'entity/saltLowSymbol',
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.lowSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/saltLowLimit',
							// allowBlank : false,
							fieldLabel : '下限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/saltUpSymbol',
							hiddenName : 'entity/saltUpSymbol',
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.upSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/saltUpLimit',
							// allowBlank : false,
							fieldLabel : '上限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>其它</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../testSolid',
							value : 'NaCL溶液',
							name : 'entity/testSolid',
							allowBlank : false,
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							name : 'entity/method',
							hiddenName : 'entity/method',
							allowBlank : false,
							fieldLabel : '初/复检',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.methodStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/state',
							hiddenName : 'entity/state',
							ref : '../../state',
							allowBlank : false,
							value : 'Y',
							fieldLabel : '状态',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.stateStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '48%',
							colspan : 2,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/remark',
							// allowBlank : false,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>批量选择</span>",
							colspan : 2
						}, this.macnamecombo, {
							xtype : 'combobox',
							name : 'entity/isWxs',
							hiddenName : 'entity/isWxs',
							allowBlank : false,
							fieldLabel : '是否外销',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.isWxStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, this.linecombo, {
							name : 'entity/lineIds',
							xtype : 'hidden',
							ref : '../../lineIds'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改膜片质检标准',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality.expandMpStandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveMpStand.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/specId',
							name : 'entity/specId',
							dataIndex : 'specId',
							fieldLabel : '膜片型号',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'mpperfcombobox',
							allowBlank : false,
							hiddenName : 'entity/levelId',
							name : 'entity/levelId',
							dataIndex : 'levelId',
							fieldLabel : '等级',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>膜通量范围</span>",
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/gfdLowSymbol',
							hiddenName : 'entity/gfdLowSymbol',
							dataIndex : 'gfdLowSymbol',
							// allowBlank : false,
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.lowSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/gfdLowLimit',
							dataIndex : 'gfdLowLimit',
							// allowBlank : false,
							fieldLabel : '下限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/gfdUpSymbol',
							hiddenName : 'entity/gfdUpSymbol',
							dataIndex : 'gfdUpSymbol',
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.upSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/gfdUpLimit',
							dataIndex : 'gfdUpLimit',
							// allowBlank : false,
							fieldLabel : '上限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>脱盐率范围</span>",
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/saltLowSymbol',
							hiddenName : 'entity/saltLowSymbol',
							dataIndex : 'saltLowSymbol',
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.lowSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/saltLowLimit',
							dataIndex : 'saltLowLimit',
							// allowBlank : false,
							fieldLabel : '下限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/saltUpSymbol',
							hiddenName : 'entity/saltUpSymbol',
							dataIndex : 'saltUpSymbol',
							// allowBlank : false,
							fieldLabel : '比较符',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.upSymbolStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/saltUpLimit',
							dataIndex : 'saltUpLimit',
							// allowBlank : false,
							fieldLabel : '上限',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>其它</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/macName',
							dataIndex : 'macName',
							allowBlank : false,
							fieldLabel : '测试台',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							value : 'NaCL溶液',
							name : 'entity/testSolid',
							dataIndex : 'testSolid',
							allowBlank : false,
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'entity/method',
							hiddenName : 'entity/method',
							dataIndex : 'method',
							allowBlank : false,
							fieldLabel : '初/复检',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.methodStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							name : 'entity/isWx',
							hiddenName : 'entity/isWx',
							dataIndex : 'isWx',
							// allowBlank : false,
							fieldLabel : '是否外销',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.isWxStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'linecombobox',
							prodTacheId : '100',
							hiddenName : 'entity/lineId',
							dataIndex : 'lineId',
							anchor : '95%',
							colspan : 1,
							fieldLabel : '生产线 '
						}, {
							xtype : 'combobox',
							name : 'entity/state',
							hiddenName : 'entity/state',
							dataIndex : 'state',
							allowBlank : false,
							fieldLabel : '状态',
							typeAhead : true,
							triggerAction : 'all',
							lazyRender : true,
							mode : 'local',
							editable : false,
							store : this.stateStore,
							valueField : 'id',
							displayField : 'name',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/remark',
							dataIndex : 'remark',
							// allowBlank : false,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/recordId',
							dataIndex : 'recordId'
						}]
			}]
		});
	}

	this.initThickStandWindow = function() {

		var selModel4ThickStand = new Ext.grid.CheckboxSelectionModel({
			singleSelect : false
				// singleSelect : true,
				// header : ''
			});

		this.listPanel4ThickStand = this.listPanel4ThickStand
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddStand
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEditStand
							}, '-', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelStand
							}],
					hsPage : true,
					selModel : selModel4ThickStand,
					// delUrl :
					// 'com.keensen.ump.base.common.deleteEntity.biz.ext',
					delUrl : 'com.keensen.ump.produce.quality.quality.deleteBatchThickStand.biz.ext',
					columns : [new Ext.grid.RowNumberer(), selModel4ThickStand,
							{
								dataIndex : 'specName',
								header : '膜片型号'
							}, {
								dataIndex : 'thickMin',
								header : '厚度下限'
							}, {
								dataIndex : 'thickMax',
								header : '厚度上限'
							}, {
								dataIndex : 'isWxName',
								header : '是否外销'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : 'com.keensen.ump.produce.quality.quality2.queryThickStand'
						},
						fields : [{
									name : 'id'
								}, {
									name : 'createTime'
								}, {
									name : 'createUserId'
								}, {
									name : 'createName'
								}, {
									name : 'updateTime'
								}, {
									name : 'updateUserId'
								}, {
									name : 'updateName'
								}, {
									name : 'reserve1'
								}, {
									name : 'reserve2'
								}, {
									name : 'reserve3'
								}, {
									name : 'reserve4'
								}, {
									name : 'reserve5'
								}, {
									name : 'orgId'
								}, {
									name : 'status'
								}, {
									name : 'specId'
								}, {
									name : 'specName'
								}, {
									name : 'thickMin'
								}, {
									name : 'thickMax'
								}, {
									name : 'isWx'
								}, {
									name : 'entityName'
								}, {
									name : 'isWxName'
								}]
					})
				})

		this.queryPanel4ThickStand = this.queryPanel4ThickStand
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 3,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/specName',
										anchor : '85%',
										fieldLabel : '膜片型号%-%'
									}]
						});

		// this.queryPanel3.addButton({
		// text : "导出",
		// scope : this,
		// iconCls : 'icon-application_excel',
		// handler : this.exportOrderMaterSpecExcel
		// });

		this.queryPanel4ThickStand.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.thickStandWindow.hide();
					}

				});

		this.thickStandWindow = this.thickStandWindow || new Ext.Window({
					title : '厚度标准',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4ThickStand,
							this.listPanel4ThickStand]

				});
	}

	this.initAddThickStandWindow = function() {
		var _this = this;
		this.addThickStandWindow = this.addThickStandWindow
				|| new Ext.fn.FormWindow({
					title : '新增厚度标准',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel4ThickStand,
						successFn : function(i, r) {
							_this.addThickStandWindow.items.items[0].form
									.reset();
							_this.addThickStandWindow.hide();
							_this.listPanel4ThickStand.refresh();
						},
						columns : 2,
						saveUrl : 'com.keensen.ump.produce.quality.quality.saveThickStand.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'mpspeccombobox',
									hiddenName : 'entity/specId',
									allowBlank : false,
									ref : '../../specCombo',
									anchor : '75%',
									fieldLabel : '膜片型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(combo, record,
												index) {
											if (index > -1) {
												var specName = _this.addThickStandWindow.specCombo
														.getRawValue();
												_this.addThickStandWindow.specName
														.setValue(specName);

											}
										}
									},
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'combobox',
									name : 'entity/isWxs',
									hiddenName : 'entity/isWxs',
									allowBlank : false,
									fieldLabel : '是否外销',
									typeAhead : true,
									triggerAction : 'all',
									lazyRender : true,
									mode : 'local',
									editable : false,
									store : _this.isWxStore,
									valueField : 'id',
									displayField : 'name',
									anchor : '95%',
									colspan : 2,
									emptyText : '--请选择--',
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'displayfield',
									height : 5,
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/thickMax',
									allowBlank : false,
									dataIndex : 'thickMax',
									// allowBlank : false,
									fieldLabel : '上限',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : 5,
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/thickMin',
									allowBlank : false,
									dataIndex : 'thickMin',
									// allowBlank : false,
									fieldLabel : '下限',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									name : 'entity/specName',
									ref : '../../specName'
								}, {
									xtype : 'hidden',
									name : 'entity/entityName',
									value : 'com.keensen.ump.produce.quality.KsProdDiaphragmThickStand'
								}]
					}]
				});
	}

	this.initEditThickStandWindow = function() {
		var _this = this;
		this.editThickStandWindow = this.editThickStandWindow
				|| new Ext.fn.FormWindow({
					title : '修改厚度标准',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel4ThickStand,
						successFn : function(i, r) {
							_this.editThickStandWindow.items.items[0].form
									.reset();
							_this.editThickStandWindow.hide();
							_this.listPanel4ThickStand.refresh();
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.base.common.expandEntity.biz.ext',
						saveUrl : 'com.keensen.ump.base.common.saveEntity.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'mpspeccombobox',
									hiddenName : 'entity/specId',
									dataIndex : 'specId',
									allowBlank : false,
									ref : '../../specCombo',
									anchor : '75%',
									fieldLabel : '膜片型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(combo, record,
												index) {
											if (index > -1) {
												var specName = _this.editThickStandWindow.specCombo
														.getRawValue();
												_this.editThickStandWindow.specName
														.setValue(specName);

											}
										}
									},
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'dictcombobox',
									name : 'entity/isWx',
									dataIndex : 'isWx',
									hiddenName : 'entity/isWx',
									allowBlank : false,
									fieldLabel : '是否外销',
									anchor : '75%',
									dictData : KS_YESORNO,
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : 5,
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/thickMax',
									allowBlank : false,
									dataIndex : 'thickMax',
									// allowBlank : false,
									fieldLabel : '上限',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : 5,
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/thickMin',
									allowBlank : false,
									dataIndex : 'thickMin',
									// allowBlank : false,
									fieldLabel : '下限',
									anchor : '95%',
									colspan : 2
								}, {
									xtype : 'hidden',
									dataIndex : 'specName',
									name : 'entity/specName',
									ref : '../../specName'
								}, {
									xtype : 'hidden',
									name : 'entity/id',
									dataIndex : 'id'
								}, {
									xtype : 'hidden',
									name : 'entity/entityName',
									value : 'com.keensen.ump.produce.quality.KsProdDiaphragmThickStand'
								}]
					}]
				});
	}
}