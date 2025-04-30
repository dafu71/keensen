com.keensen.ump.produce.component.produce.HouseholdJmMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initAddWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componenthouseholdjmmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.machineCodeStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '卷膜'
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
								xtype : 'datetimefield',
								name : 'condition/createTimeStart',
								fieldLabel : '计划裁膜日期',
								colspan : 1,
								anchor : '90%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i',
								value : new Date().add(Date.DAY, -1)
										.format('Y-m-d')
							}, {
								xtype : 'datetimefield',
								name : 'condition/createTimeEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '90%',
								editable : true,
								format : 'Y-m-d H:i',
								// allowBlank : false,
								value : new Date().add(Date.DAY, 1)
										.format('Y-m-d')
							}, {

								xtype : 'textfield',
								name : 'condition/batchNoStr',
								anchor : '90%',
								fieldLabel : '裁膜栈板号%-%'
							}, {

								xtype : 'textfield',
								name : 'condition/orderNoStr',
								anchor : '90%',
								fieldLabel : '元件订单号%-%'
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
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.produce.deleteHouseholdJm.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'cmBatchNo',
						header : '裁叠膜栈板号'
					}, {
						dataIndex : 'hjBatchNo',
						header : '混卷栈板号'
					}, {
						dataIndex : 'amount',
						header : '卷制数量'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'prodSpecId',
						header : '卷制型号'
					}, {
						dataIndex : 'machineCode',
						header : '操作机台'
					}, {
						dataIndex : 'userName',
						header : '操作工 '
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.produce.queryHouseholdJmByPage.biz.ext',
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
							name : 'cmBatchNo'
						}, {
							name : 'amount'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'machineCode'
						}, {
							name : 'workerId'
						}, {
							name : 'userId'
						}, {
							name : 'userName'
						}, {
							name : 'orderNo'
						}, {
							name : 'hjBatchNo'
						}]
			})
		})
	}

	this.initAddWindow = function() {
		var _this = this;
		this.addWindow = this.addWindow || new Ext.fn.FormWindow({
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
				successFn : function(i, r) {
					//_this.addWindow.items.items[0].form.reset();
					_this.addWindow.cmBatchNo.setValue('');
					_this.addWindow.orderNo.setValue('');
					_this.addWindow.prodSpecId.setValue('');
					_this.addWindow.amount.setValue('');
					
					_this.listPanel.refresh();

				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.produce.saveHouseholdJm.biz.ext',
				fields : [{
							xtype : 'textfield',
							ref : '../../cmBatchNo',
							emptyText : '光标置于此框内后扫码，或手工录入后按回车键',
							name : 'entity/cmBatchNo',
							allowBlank : false,
							fieldLabel : '裁叠膜栈板号',
							anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										_this.onScan();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						},{
							xtype : 'textfield',
							ref : '../../hjBatchNo',
							emptyText : '光标置于此框内后扫码，或手工录入',
							name : 'entity/hjBatchNo',
							//allowBlank : false,
							fieldLabel : '混卷栈板号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../orderNo',
							fieldLabel : '订单号',
							xtype : 'textfield',
							name : 'entity/orderNo',
							readOnly : true,
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							hiddenName : 'entity/prodSpecId',
							emptyText : '',
							dataIndex : 'prodSpecId',
							anchor : '95%',
							colspan : 2,
							fieldLabel : '卷制型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							readOnly : true,
							editable : false,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combo',
							fieldLabel : '操作机台',
							allowBlank : false,
							mode : 'local',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : _this.machineCodeStore,
							hiddenName : 'entity/machineCode',
							displayField : "name",
							valueField : "code",
							scope : this,
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
							ref : '../../amount',
							fieldLabel : '卷制数量',
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							allowBlank : false,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'componentworkercombobox',
							allowBlank : false,
							hiddenName : 'entity/workerId',
							anchor : '95%',
							fieldLabel : '操作工',
							colspan : 2
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
				// baseCls : "x-plain",
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandHouseholdJm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '裁叠膜栈板号',
							dataIndex : 'cmBatchNo',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						},{
							xtype : 'displayfield',
							fieldLabel : '混卷栈板号',
							dataIndex : 'hjBatchNo',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							fieldLabel : '订单号',
							xtype : 'textfield',
							dataIndex : 'orderNo',
							readOnly : true,
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							dataIndex : 'prodSpecId',
							anchor : '95%',
							colspan : 2,
							fieldLabel : '卷制型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							readOnly : true,
							editable : false,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combo',
							fieldLabel : '操作机台',
							dataIndex : 'machineCode',
							readOnly : true,
							editable : false,
							mode : 'local',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : _this.machineCodeStore,
							hiddenName : 'entity/machineCode',
							displayField : "name",
							valueField : "code",
							scope : this,
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
							ref : '../../amount',
							fieldLabel : '卷制数量',
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							readOnly : true,
							anchor : '95%',
							decimalPrecision : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 2
						}, {
							xtype : 'componentworkercombobox',
							dataIndex : 'workerId',
							readOnly : true,
							editable : false,
							hiddenName : 'entity/workerId',
							anchor : '95%',
							fieldLabel : '操作工',
							colspan : 2
						}]
			}]
		});
	}

}