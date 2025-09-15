com.keensen.ump.produce.component.produce.WeldedMgr = function() {
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
					renderTo : 'componentproduceweldedmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.produceTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['常规', '常规'], ['实验', '实验']]
				})

		this.machineCodeStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '焊管焊网'
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
					}, {
						name : 'pageNum2'
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
								store : this.basePipeStore,
								displayField : "pipeType",
								valueField : "pipeType",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.pipeType.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/pipeCode',
								fieldLabel : '中心管组件编号'
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
					singleSelect : false
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
			delUrl : 'com.keensen.ump.produce.component.produce.deleteWelded.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'pipeType',
						width:150,
						header : '中心管型号'
					}, {
						dataIndex : 'batchNo',
						width:150,
						header : '中心管批号'
					}, {
						dataIndex : 'pipeCode',
						width:120,
						header : '中心管组件编号'
					}, {
						dataIndex : 'pipeSize',
						width:120,
						header : '中心管尺寸'
					}, {
						dataIndex : 'lightNetBatchNo',
						width:150,
						header : '淡网批号'
					}, {
						dataIndex : 'lightNetType',
						width:120,
						header : '淡网型号'
					}, {
						dataIndex : 'longPage',
						width:120,
						header : '长页'
					}, {
						dataIndex : 'pageNum',
						width:120,
						header : '长页页数'
					}, {
						dataIndex : 'shortPage',
						width:120,
						header : '短页'
					}, {
						dataIndex : 'pageNum2',
						width:120,
						header : '短页页数'
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
				url : 'com.keensen.ump.produce.component.produce.queryWeldedByPage.biz.ext',
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
							name : 'pipeData'
						}, {
							name : 'batchNo'
						}, {
							name : 'pipeSize'
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
							name : 'pageNum2'
						}, {
							name : 'produceType'
						}, {
							name : 'perNum'
						}, {
							name : 'produceNum'
						}, {
							name : 'machineCode'
						}, {
							name : 'pipeCode'
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
			height : 480,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : _this.listPanel,
				successFn : function(i, r) {
					var ids = r.ids;
					Ext.Msg.confirm('提示', '是否立即打印产品标签？', function(btn) {
						_this.listPanel.store.reload();
						_this.inputWindow.hide();
						if (btn === 'yes') {
							var f = document.getElementById('weldedprintsForm');
							f.ids.value = ids;
							var actionUrl = 'com.keensen.ump.produce.component.printWeldedTags.flow?token='
									+ Date.now();
							f.action = actionUrl;
							f.submit();
						}
					});

				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.produce.saveWeldedBatch.biz.ext',
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
								var pageNum2 = record.get('pageNum2');
								_this.inputWindow.longPage.setValue(longPage);
								_this.inputWindow.shortPage.setValue(shortPage);
								_this.inputWindow.pageNum.setValue(pageNum);
								_this.inputWindow.pageNum2.setValue(pageNum2);
							}
						}
					}
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 21
				}, {
					xtype : 'textfield',
					name : 'entity/batchNo',
					ref : '../../batchNo',
					emptyText : '光标置于此框内后扫码',
					allowBlank : false,
					fieldLabel : '中心管批号',
					anchor : '95%',
					colspan : 1,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.onScan(1);

							}

						}
					}
				}, {
					xtype : 'textfield',
					name : 'entity/pipeSize',
					ref : '../../pipeSize',
					allowBlank : false,
					fieldLabel : '中心管尺寸',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					name : 'entity/lightNetBatchNo',
					ref : '../../lightNetBatchNo',
					emptyText : '光标置于此框内后扫码',
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
					readOnly : true,
					name : 'entity/pageNum',
					ref : '../../pageNum',
					fieldLabel : '长页页数',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'textfield',
					readOnly : true,
					name : 'entity/pageNum2',
					ref : '../../pageNum2',
					fieldLabel : '短页页数',
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
				}, {
					xtype : 'hidden',
					ref : '../../reserve5',
					name : 'entity/reserve5'
				}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandWelded.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.produce.saveWelded.biz.ext',
				fields : [{
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '中心管组件编号',
							dataIndex : 'pipeCode',
							ref : '../../pipeCode',
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
										var pageNum2 = record.get('pageNum2');
										_this.editWindow.longPage
												.setValue(longPage);
										_this.editWindow.shortPage
												.setValue(shortPage);
										_this.editWindow.pageNum
												.setValue(pageNum);
										_this.editWindow.pageNum2
												.setValue(pageNum2);
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 21
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							ref : '../../batchNo',
							allowBlank : false,
							fieldLabel : '中心管批号',
							emptyText : '光标置于此框内后扫码',
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.onScan(3);

									}

								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/pipeSize',
							dataIndex : 'pipeSize',
							ref : '../../pipeSize',
							allowBlank : false,
							fieldLabel : '中心管尺寸',
							emptyText : '光标置于此框内后扫码',
							anchor : '95%',
							colspan : 1
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
							readOnly : true,
							name : 'entity/pageNum',
							dataIndex : 'pageNum',
							ref : '../../pageNum',
							fieldLabel : '长页页数',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'entity/pageNum2',
							dataIndex : 'pageNum2',
							ref : '../../pageNum2',
							fieldLabel : '短页页数',
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
				loadUrl : 'com.keensen.ump.produce.component.produce.expandWelded.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '中心管组件编号',
							dataIndex : 'pipeCode',
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
							colspan : 21
						}, {
							xtype : 'displayfield',
							dataIndex : 'batchNo',
							fieldLabel : '中心管批号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'pipeSize',
							fieldLabel : '中心管尺寸',
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
							fieldLabel : '长页页数',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'pageNum2',
							ref : '../../pageNum2',
							fieldLabel : '短页页数',
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