com.keensen.ump.produce.quality.zmyndstandMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'zmyndstandmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.psfStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['30', '30'], ['40', '40'], ['60', '60']]
				});
				
		this.polysulfoneStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'], ['S', 'S']]
				});
	}
	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【铸膜液粘度质检标准查询】',
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '聚砜品牌',
								ref : '../polysulfone',
								hiddenName : 'condition/polysulfone',
								anchor : '50%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.polysulfoneStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.polysulfone.reset()
									}
								}
							},{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '工艺代码',
								ref : '../psf',
								hiddenName : 'condition/psf',
								anchor : '50%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.psfStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.psf.reset()
									}
								}
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【铸膜液粘度质检标准列表】',
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.quality2.deleteZmyViscosityStand.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'polysulfone',
						header : '聚砜品牌'
					}, {
						dataIndex : 'psf',
						header : '工艺代码'
					}, {
						dataIndex : 'stand',
						header : '粘度标准范围'
					}, {
						dataIndex : 'density',
						header : '聚砜浓度(%)'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryZmyViscosityStand.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'psf'
						}, {
							name : 'stand'
						}, {
							name : 'polysulfone'
						}, {
							name : 'density'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增铸膜液粘度质检标准',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveZmyViscosityStand.biz.ext',
				fields : [{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '聚砜品牌',
							ref : '../../polysulfone',
							hiddenName : 'entity/polysulfone',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.polysulfoneStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.polysulfone.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '工艺代码',
							ref : '../../psf',
							hiddenName : 'entity/psf',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.psfStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.psf.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/stand',
							ref : '../../stand',
							fieldLabel : '粘度标准范围',
							regex:/^\d{3}-\d{3}$/,
							regexText : "不合法的格式",
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/density',
							ref : '../../density',
							fieldLabel : '聚砜浓度(%)',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改铸膜液粘度质检标准',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandZmyViscosityStand.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveZmyViscosityStand.biz.ext',
				fields : [{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '聚砜品牌',
							ref : '../../polysulfone',
							dataIndex:'polysulfone',
							hiddenName : 'entity/polysulfone',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.polysulfoneStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.polysulfone.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '工艺代码',
							ref : '../../psf',
							hiddenName : 'entity/psf',
							dataIndex:'psf',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.psfStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.psf.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/stand',
							dataIndex:'stand',
							ref : '../../stand',
							fieldLabel : '粘度标准范围',
							regex:/^\d{3}-\d{3}$/,
							regexText : "不合法的格式",
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/density',
							dataIndex:'density',
							ref : '../../density',
							fieldLabel : '聚砜浓度(%)',
							allowBlank : false,
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

}