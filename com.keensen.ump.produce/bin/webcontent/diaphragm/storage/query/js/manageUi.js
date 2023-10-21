com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'storagequerymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 180,
					columns : 4,
					border : true,
					//collapsible : true,
					titleCollapse : false,
					title : '【库存查询】',
					fields : [{
								xtype : 'storagecombobox',
								hiddenName : 'condition/storageId',
								anchor : '75%',
								fieldLabel : '仓库'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '75%',
								fieldLabel : '批号'
							}, {
								xtype : 'mplinecombobox',
								hiddenName : 'condition/lineId',
								anchor : '75%',
								fieldLabel : '生产线 '
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'supcombobox',
								hiddenName : 'condition/supId',
								anchor : '75%',
								fieldLabel : '无纺布供应商'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/planNo',
								anchor : '75%',
								fieldLabel : '计划单号'
							}, {
								xtype : 'mpperfcombobox',
								hiddenName : 'condition/perfFlagId',
								anchor : '75%',
								fieldLabel : '膜片等级'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'storageposcombobox',
								hiddenName : 'condition/position',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								anchor : '75%',
								fieldLabel : '库位'
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【库存列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '调拨',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'storageName',
						header : '仓库名称'
					}, {
						dataIndex : 'position',
						header : '库位'
					}, {
						dataIndex : 'batchNo',
						header : '批号'
					}, {
						dataIndex : 'produceDt',
						header : '生产日期'
					}, {
						dataIndex : 'outLength',
						header : '长度(米)'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度(米)'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度(米)'
					}, {
						dataIndex : 'lineCode',
						header : '生产线'
					}, {
						dataIndex : 'materClassCode',
						header : '膜片系列'
					}, {
						dataIndex : 'materSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'supName',
						header : '无纺布供应商'
					}, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'perfFlagName',
						header : '等级'
					}, {
						dataIndex : 'amount',
						header : '入库数量'
					}, {
						dataIndex : 'updateTime',
						header : '更新日期'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.query.queryStockByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'storageName'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'remark'
						}, {
							name : 'id'
						}, {
							name : 'updateTime'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'storageName'
						}, {
							name : 'storageId'
						}, {
							name : 'planNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'recordId'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'supName'
						}, {
							name : 'lineCode'
						}, {
							name : 'position'
						}, {
							name : 'qualifidLength'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		var me = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '调拨',
			height : 200,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					if (r.ret != '1') {
						Ext.Msg.show({
									width : 350,
									title : "操作提示",
									msg : r.ret,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										Ext.getCmp(listid).store.load();
									}
								})
					} else {
						Ext.getCmp(listid).store.load();
						me.editWindow.hide();
					}
				},
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.diaphragm.storage.query.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.allocate.allocate.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'allocate/batchNo',
							readOnly : true,
							fieldLabel : '批号',
							dataIndex : 'batchNo',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'storagecombobox',
							hiddenName : 'allocate/fromStorageId',
							readOnly : true,
							name : 'allocate/fromStorageId',
							dataIndex : 'storageId',
							fieldLabel : '源仓库'
						}, {
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'storagecombobox',
							hiddenName : 'allocate/toStorageId',
							allowBlank : false,
							name : 'allocate/toStorageId',
							fieldLabel : '目标仓库'
						}, {
							xtype : 'hidden',
							name : 'allocate/stockId',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'allocate/amount',
							dataIndex : 'amount'
						}]
			}]
		});
	}

}