com.keensen.ump.produce.report.board.HanoverMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		this.initTestStdWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'hanovermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.classesStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['早', '早'], ['中', '中'], ['晚', '晚']]
				});

		this.lineStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.produce.report.board.queryMpline.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {},
					fields : [{
								name : 'id'
							}, {
								name : 'code'
							}, {
								name : 'name'
							}]
				})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 90,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,

					fields : [{
						xtype : "dateregion",
						colspan : 2,
						// anchor : '75%',
						nameArray : ['condition/boardDateStart',
								'condition/boardDateEnd'],
						fieldLabel : "看板日期",
						format : "Y-m-d"
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '班次',
						ref : '../classes',
						hiddenName : 'condition/classes',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.classesStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.queryPanel.classes.reset()
							}
						}
					}, {
						xtype : 'combobox',
						forceSelection : true,
						mode : 'local',
						fieldLabel : '生产线',
						ref : '../line',
						hiddenName : 'condition/lineId',
						anchor : '100%',
						colspan : 1,
						emptyText : '',
						editable : false,
						store : this.lineStore,
						displayField : "name",
						valueField : "id"
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "分析室交接班看板",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onBoard
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
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
					}, '->', {
						text : '测试标准',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onStand
					}, '-', {
						text : '看板查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onBoard
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.report.board.deleteHandover.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'boardDate',
						header : '看板日期'
					}, {
						dataIndex : 'classes',
						header : '班次'
					}, {
						dataIndex : 'lineName',
						header : '生产线'
					}, {
						dataIndex : 'item',
						width : 300,
						header : '事项'
					}, {
						dataIndex : 'updateTime',
						header : '编辑时间'
					}, {
						dataIndex : 'updateName',
						header : '编辑人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.board.queryHandoverByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
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
							name : 'boardDate'
						}, {
							name : 'classes'
						}, {
							name : 'lineId'
						}, {
							name : 'item'
						}, {
							name : 'lineName'
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
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.report.board.saveHandover.biz.ext',
				fields : [{
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/boardDate',
							dataIndex : 'boardDate',
							ref : '../../boardDate',
							allowBlank : false,
							minValue : new Date(),
							// readOnly : true,
							fieldLabel : '看板日期',
							// readOnly : true,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '班次',
							ref : '../../classes',
							hiddenName : 'entity/classes',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : _this.classesStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.classes.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '生产线',
							ref : '../../line',
							hiddenName : 'entity/lineId',
							anchor : '95%',
							colspan : 1,
							emptyText : '',
							editable : false,
							store : _this.lineStore,
							displayField : "name",
							valueField : "id"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							allowBlank : false,
							name : 'entity/item',
							fieldLabel : '事项',
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
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.report.board.expandHandover.biz.ext',
				saveUrl : 'com.keensen.ump.produce.report.board.saveHandover.biz.ext',
				fields : [{
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/boardDate',
							dataIndex : 'boardDate',
							ref : '../../boardDate',
							allowBlank : false,
							minValue : new Date(),
							// readOnly : true,
							fieldLabel : '看板日期',
							// readOnly : true,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '班次',
							ref : '../../classes',
							hiddenName : 'entity/classes',
							dataIndex : 'classes',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : _this.classesStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.classes.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '生产线',
							ref : '../../line',
							hiddenName : 'entity/lineId',
							dataIndex : 'lineId',
							anchor : '95%',
							colspan : 1,
							emptyText : '',
							editable : false,
							store : _this.lineStore,
							displayField : "name",
							valueField : "id"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							allowBlank : false,
							name : 'entity/item',
							dataIndex : 'item',
							fieldLabel : '事项',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initViewWindow = function() {

		var _this = this;
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
				loadUrl : 'com.keensen.ump.produce.report.board.expandHandover.biz.ext',
				fields : [{
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/boardDate',
							dataIndex : 'boardDate',
							ref : '../../boardDate',
							allowBlank : false,
							minValue : new Date(),
							readOnly : true,
							fieldLabel : '看板日期',
							// readOnly : true,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '班次',
							ref : '../../classes',
							hiddenName : 'entity/classes',
							dataIndex : 'classes',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							readOnly : true,
							store : _this.classesStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.classes.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '生产线',
							ref : '../../line',
							hiddenName : 'entity/lineId',
							dataIndex : 'lineId',
							anchor : '95%',
							colspan : 1,
							emptyText : '',
							readOnly : true,
							store : _this.lineStore,
							displayField : "name",
							valueField : "id"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							allowBlank : false,
							readOnly : true,
							name : 'entity/item',
							dataIndex : 'item',
							fieldLabel : '事项',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initTestStdWindow = function() {
		var _this = this;

		var selModel4TestStd = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel4TestStd = this.listPanel4TestStd
				|| new Ext.fn.EditListPanel({

					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					autoScroll : true,
					clicksToEdit : 1,
					selModel : selModel4TestStd,
					columns : [new Ext.grid.RowNumberer(), selModel4TestStd, {
								dataIndex : 'lineName',
								sortable : true,
								width : 140,
								header : '生产线'
							}, {

								dataIndex : 'item',
								sortable : true,
								width : 500,
								header : '测试标准',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TextArea(
										{
											allowBlank : true,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))

							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.report.board.queryTestStd.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'lineName'
								}, {
									name : 'id'
								}, {
									name : 'lineId'
								}, {
									name : 'item'
								}]
					})
				})

		this.testStdWindow = this.testStdWindow || new Ext.Window({
					title : '测试标准',
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
					items : [this.listPanel4TestStd],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveStd
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.testStdWindow.hide();
								}
							}]

				});
	}
}