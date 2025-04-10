com.keensen.ump.produce.component.produce.CutMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentproducecutmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.produceTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['常规', '常规'], ['实验', '实验']]
				});

		this.machineCodeStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '裁网'
					},
					fields : [{
								name : 'code'
							}, {
								name : 'name'
							}, {
								name : 'type'
							}, {
								name : 'ip'
							}]
				})

		this.basePipeStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.produce.queryBasePipe.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {

		}	,
			fields : [{
						name : 'pipeType'
					}, {
						name : 'longPage'
					}, {
						name : 'shortPage'
					}, {
						name : 'pageNum'
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
					// title : '【BOM查询】',
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '中心管型号',
								ref : '../pipeType',
								hiddenName : 'condition/pipeType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.basePipeStore,
								displayField : "pipeType",
								valueField : "pipeType",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.pipeType.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/netCode',
								fieldLabel : '淡网编号'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '生产机台号',
								ref : '../machineCode',
								hiddenName : 'condition/machineCode',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.machineCodeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.machineCode.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '生产类型',
								ref : '../produceType',
								hiddenName : 'condition/produceType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.produceTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.produceType.reset()
									}
								}
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
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
			// title : '【BOM列表】',
			viewConfig : {
				forceFit : false
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
					}, '-', {
						text : '打印标签',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrintTag
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.produce.deleteCut.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'pipeType',
						width:150,
						header : '中心管型号'
					}, {
						dataIndex : 'lightNetBatchNo',
						width:200,
						header : '淡网批号'
					}, {
						dataIndex : 'lightNetType',
						width:120,
						header : '淡网型号'
					}, {
						dataIndex : 'netCode',
						width:150,
						header : '淡网编号'
					}, {
						dataIndex : 'longPage',
						width:120,
						header : '长页'
					}, {
						dataIndex : 'shortPage',
						width:120,
						header : '短页'
					}, {
						dataIndex : 'pageNum',
						width:120,
						header : '页数'
					}, {
						dataIndex : 'produceType',
						width:120,
						header : '生产类型'
					}, {
						dataIndex : 'perNum',
						width:120,
						header : '每卷数量'
					}, {
						dataIndex : 'produceNum',
						width:120,
						header : '生产数量'
					}, {
						dataIndex : 'machineCode',
						width:120,
						header : '生产机台号'
					}, {
						dataIndex : 'createDate',
						width:120,
						header : '生产日期'
					}, {
						dataIndex : 'operateUserName',
						width:120,
						header : '操作工'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.produce.queryCutByPage.biz.ext',
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
							name : 'pipeType'
						}, {
							name : 'lightNetBatchNo'
						}, {
							name : 'lightNetType'
						}, {
							name : 'longPage'
						}, {
							name : 'shortPage'
						}, {
							name : 'pageNum'
						}, {
							name : 'produceType'
						}, {
							name : 'perNum'
						}, {
							name : 'produceNum'
						}, {
							name : 'machineCode'
						}, {
							name : 'netCode'
						}, {
							name : 'operateUserId'
						}, {
							name : 'operateUserName'
						}, {
							name : 'createDate'
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
				pgrid : _this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.produce.saveCut.biz.ext',
				fields : [{
					xtype : 'combobox',
					mode : 'local',
					fieldLabel : '中心管型号',
					ref : '../../pipeType',
					hiddenName : 'entity/pipeType',
					anchor : '95%',
					colspan : 1,
					emptyText : '--请选择--',
					editable : false,
					allowBlank : false,
					store : this.basePipeStore,
					displayField : "pipeType",
					valueField : "pipeType",
					listeners : {
						"expand" : function(A) {
							_this.inputWindow.pipeType.reset()
						},
						'select' : function(combo, record, index) {
							if (index > -1) {
								var longPage = record.get('longPage');
								var shortPage = record.get('shortPage');
								var pageNum = record.get('pageNum');
								_this.inputWindow.longPage.setValue(longPage);
								_this.inputWindow.shortPage.setValue(shortPage);
								_this.inputWindow.pageNum.setValue(pageNum);
							}
						}
					}
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					name : 'entity/lightNetBatchNo',
					emptyText : '光标置于此框内后扫码',
					ref : '../../lightNetBatchNo',
					allowBlank : false,
					fieldLabel : '淡网批号',
					anchor : '95%',
					colspan : 1,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.onScan(2);

							}

						}
					}
				}, {
					xtype : 'textfield',
					name : 'entity/lightNetType',
					ref : '../../lightNetType',
					allowBlank : false,
					fieldLabel : '淡网型号',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : false,
					name : 'entity/longPage',
					ref : '../../longPage',
					fieldLabel : '长页',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'textfield',
					allowBlank : false,
					name : 'entity/shortPage',
					ref : '../../shortPage',
					fieldLabel : '短页',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : false,
					name : 'entity/pageNum',
					ref : '../../pageNum',
					fieldLabel : '页数',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'combobox',
					allowBlank : false,
					mode : 'local',
					fieldLabel : '生产类型',
					ref : '../../produceType',
					hiddenName : 'entity/produceType',
					anchor : '95%',
					colspan : 1,
					emptyText : '--请选择--',
					editable : false,
					store : _this.produceTypeStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							_this.inputWindow.produceType.reset()
						}
					}
				}, {
					xtype : 'textfield',
					allowBlank : false,
					name : 'entity/perNum',
					ref : '../../perNum',
					fieldLabel : '每卷数量',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : false,
					name : 'entity/produceNum',
					ref : '../../produceNum',
					fieldLabel : '生产数量',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'combobox',
					allowBlank : false,
					mode : 'local',
					fieldLabel : '生产机台号',
					ref : '../../machineCode',
					hiddenName : 'entity/machineCode',
					anchor : '95%',
					colspan : 1,
					emptyText : '--请选择--',
					editable : false,
					store : _this.machineCodeStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							_this.inputWindow.machineCode.reset()
						}
					}
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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandCut.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.produce.saveCut.biz.ext',
				fields : [{
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '淡网编号',
							dataIndex : 'netCode',
							ref : '../../netCode',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '中心管型号',
							ref : '../../pipeType',
							hiddenName : 'entity/pipeType',
							dataIndex : 'pipeType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							allowBlank : false,
							store : this.basePipeStore,
							displayField : "pipeType",
							valueField : "pipeType",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.pipeType.reset()
								},
								'select' : function(combo, record, index) {
									if (index > -1) {
										var longPage = record.get('longPage');
										var shortPage = record.get('shortPage');
										var pageNum = record.get('pageNum');
										_this.editWindow.longPage
												.setValue(longPage);
										_this.editWindow.shortPage
												.setValue(shortPage);
										_this.editWindow.pageNum
												.setValue(pageNum);
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/lightNetBatchNo',
							dataIndex : 'lightNetBatchNo',
							ref : '../../lightNetBatchNo',
							allowBlank : false,
							fieldLabel : '淡网批号',
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.onScan(4);

									}

								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/lightNetType',
							dataIndex : 'lightNetType',
							ref : '../../lightNetType',
							allowBlank : false,
							fieldLabel : '淡网型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/longPage',
							dataIndex : 'longPage',
							ref : '../../longPage',
							fieldLabel : '长页',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/shortPage',
							dataIndex : 'shortPage',
							ref : '../../shortPage',
							fieldLabel : '短页',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/pageNum',
							dataIndex : 'pageNum',
							ref : '../../pageNum',
							fieldLabel : '页数',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							allowBlank : false,
							mode : 'local',
							fieldLabel : '生产类型',
							dataIndex : 'produceType',
							ref : '../../produceType',
							hiddenName : 'entity/produceType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.produceTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.produceType.reset()
								}
							}
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/perNum',
							dataIndex : 'perNum',
							ref : '../../perNum',
							fieldLabel : '每卷数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/produceNum',
							ref : '../../produceNum',
							dataIndex : 'produceNum',
							fieldLabel : '生产数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '生产机台号',
							dataIndex : 'machineCode',
							ref : '../../machineCode',
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

	this.initViewWindow = function() {

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
				// baseCls : "x-plain",
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandCut.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '淡网编号',
							dataIndex : 'netCode',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '中心管型号',
							dataIndex : 'pipeType',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'lightNetBatchNo',
							fieldLabel : '淡网批号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'lightNetType',
							fieldLabel : '淡网型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'longPage',
							fieldLabel : '长页',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'shortPage',
							fieldLabel : '短页',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'pageNum',
							ref : '../../pageNum',
							fieldLabel : '页数',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '生产类型',
							dataIndex : 'produceType',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'perNum',
							fieldLabel : '每卷数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'produceNum',
							fieldLabel : '生产数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '生产机台号',
							dataIndex : 'machineCode',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}
}