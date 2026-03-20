com.keensen.ump.produce.quality.MpdefectMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();
		this.initCopyWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mpdefectmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.firstStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['固损', '固损'], ['不良', '不良']]
				});

		this.secondStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['外观', '外观'], ['性能', '性能'], ['尺寸', '尺寸'],
							['取样损耗', '取样损耗'], ['拼接损耗', '拼接损耗'],
							['试卷损耗', '试卷损耗'],
							['涂膜收卷换卷损耗', '涂膜收卷换卷损耗']]
				});

		this.tacheStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['铸膜', '铸膜'], ['涂膜', '涂膜'], ['裁叠膜', '裁叠膜']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片质检标准查询】',
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '一级目录',
								ref : '../first',
								hiddenName : 'condition/first',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.firstStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.first.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/second',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '二级目录%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/third',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '三级目录%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/fourth',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '四级目录%-%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/advise',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '使用意见%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '录入工序',
								ref : '../tache',
								hiddenName : 'condition/tache',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.tacheStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.tache.reset()
									}
								}
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// hidden : true,
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
						text : '复制',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCopy
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						hidden : true,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.defect.deleteMpDefect.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'first',
						header : '一级目录'
					}, {
						dataIndex : 'second',
						header : '二级目录'
					}, {
						dataIndex : 'third',
						header : '三级目录'
					}, {
						dataIndex : 'fourth',
						header : '四级目录'
					}, {
						dataIndex : 'advise',
						header : '使用意见'
					}, {
						dataIndex : 'length',
						header : '长度(米)'
					}, {
						dataIndex : 'tache',
						header : '录入工序'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.defect.queryMpDefectByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
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
							name : 'first'
						}, {
							name : 'second'
						}, {
							name : 'third'
						}, {
							name : 'fourth'
						}, {
							name : 'advise'
						}, {
							name : 'length'
						}, {
							name : 'tache'
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
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				saveUrl : 'com.keensen.ump.produce.quality.defect.saveMpDefect.biz.ext',
				fields : [{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '一级目录',
							ref : '../../first',
							dataIndex : 'first',
							hiddenName : 'entity/first',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.firstStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.first.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '二级目录',
							ref : '../../second',
							dataIndex : 'second',
							hiddenName : 'entity/second',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择或输入--',
							editable : true,
							allowBlank : false,
							store : this.secondStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.second.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'third',
							ref : '../../third',
							name : 'entity/third',
							fieldLabel : '三级目录',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'fourth',
							ref : '../../fourth',
							name : 'entity/fourth',
							fieldLabel : '四级目录',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'advise',
							ref : '../../advise',
							name : 'entity/advise',
							fieldLabel : '使用意见',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'length',
							ref : '../../length',
							name : 'entity/length',
							fieldLabel : '长度(米)',
							//allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '录入工序',
							ref : '../../tache',
							dataIndex : 'tache',
							hiddenName : 'entity/tache',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.tacheStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.tache.reset()
								}
							}
						}

				]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;
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
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.quality.defect.expandMpDefect.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.defect.saveMpDefect.biz.ext',
				fields : [{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '一级目录',
							ref : '../../first',
							dataIndex : 'first',
							hiddenName : 'entity/first',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.firstStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.first.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '二级目录',
							ref : '../../second',
							dataIndex : 'second',
							hiddenName : 'entity/second',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择或输入--',
							editable : true,
							allowBlank : false,
							store : this.secondStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.second.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'third',
							ref : '../../third',
							name : 'entity/third',
							fieldLabel : '三级目录',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'fourth',
							ref : '../../fourth',
							name : 'entity/fourth',
							fieldLabel : '四级目录',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'advise',
							ref : '../../advise',
							name : 'entity/advise',
							fieldLabel : '使用意见',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'length',
							ref : '../../length',
							name : 'entity/length',
							fieldLabel : '长度(米)',
							//allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '录入工序',
							ref : '../../tache',
							dataIndex : 'tache',
							hiddenName : 'entity/tache',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.tacheStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.tache.reset()
								}
							}
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}

				]
			}]
		});
	}

	this.initCopyWindow = function() {

		var _this = this;
		this.copyWindow = this.copyWindow || new Ext.fn.FormWindow({
			title : '复制',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.quality.defect.expandMpDefect.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.defect.saveMpDefect.biz.ext',
				fields : [{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '一级目录',
							ref : '../../first',
							dataIndex : 'first',
							hiddenName : 'entity/first',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.firstStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.copyWindow.first.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '二级目录',
							ref : '../../second',
							dataIndex : 'second',
							hiddenName : 'entity/second',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择或输入--',
							editable : true,
							allowBlank : false,
							store : this.secondStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.copyWindow.second.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'third',
							ref : '../../third',
							name : 'entity/third',
							fieldLabel : '三级目录',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'fourth',
							ref : '../../fourth',
							name : 'entity/fourth',
							fieldLabel : '四级目录',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'advise',
							ref : '../../advise',
							name : 'entity/advise',
							fieldLabel : '使用意见',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'length',
							ref : '../../length',
							name : 'entity/length',
							fieldLabel : '长度(米)',
							//allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '录入工序',
							ref : '../../tache',
							dataIndex : 'tache',
							hiddenName : 'entity/tache',
							anchor : '95%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.tacheStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.copyWindow.tache.reset()
								}
							}
						}

				]
			}]
		});
	}

}