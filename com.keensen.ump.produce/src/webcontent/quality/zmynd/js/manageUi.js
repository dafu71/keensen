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
					data : [['30', '30'], ['40', '40']]
				});
	}
	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 1,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【铸膜液粘度质检标准查询】',
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '产品类型',
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
						dataIndex : 'psf',
						header : '产品类型'
					}, {
						dataIndex : 'stand',
						header : '粘度标准范围'
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
							fieldLabel : '产品类型',
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
								},
								"select" : function(combo, record, index) {
									var psf = combo.getValue();
									var stand = psf == '30'
											? '380-500'
											: '500-600'
									_this.inputWindow.stand.setValue(stand);
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
							fieldLabel : '产品类型',
							ref : '../../psf',
							hiddenName : 'entity/psf',
							dataIndex : 'psf',
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
									_this.editWindow.psf.reset()
								},
								"select" : function(combo, record, index) {
									var psf = combo.getValue();
									var stand = psf == '30'
											? '380-500'
											: '500-600'
									_this.editWindow.stand.setValue(stand);
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
							dataIndex : 'stand',
							fieldLabel : '粘度标准范围',
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