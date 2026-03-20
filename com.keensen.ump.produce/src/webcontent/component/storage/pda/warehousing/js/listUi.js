com.keensen.ump.produce.component.storage.WareHousingListMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'storagewarehousinglistmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/checkCode2',
								anchor : '100%',
								fieldLabel : '请检单号%-%'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/orderNo2',
								anchor : '100%',
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '元件序号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "仓库接收元件确认时间",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号'
							}, {
								xtype : 'textfield',
								name : 'condition/dryWet2',
								fieldLabel : '干湿%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/storageCode',
								fieldLabel : '库位码'
							}, {
								xtype : 'combo',
								hiddenName : 'condition/storage',
								mode : 'local',
								ref : '../storage',
								fieldLabel : '仓库',
								editable : false,
								store : [['高架成品仓', '高架成品仓'],
										['高架订单仓', '高架订单仓'],
										['高架C等品仓', '高架C等品仓']],
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}

							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {
								xtype : 'combo',
								mode : 'local',
								editable : false,
								hiddenName : 'condition/type',
								ref : '../type',
								fieldLabel : '入库类型',
								//value : '生产入库',
								store : [['生产入库', '生产入库'], ['其他入库', '其他入库']],
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}

							}, {
								xtype : 'textfield',
								name : 'condition/trayCode',
								anchor : '100%',
								fieldLabel : '托盘号 '
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
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
			// title : '【仓库配置列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增入库',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'batchNo',
						header : '元件序号'
					}, {
						dataIndex : 'checkCode',
						header : '请检单号'
					}, {
						dataIndex : 'trayCode',
						header : '托盘号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'jmSpecName',
						header : '卷膜型号'
					}, {
						dataIndex : 'dryWet',
						header : '干湿'
					}, {
						dataIndex : 'specType',
						header : '元件类型'
					}, {
						dataIndex : 'storageCode',
						header : '库位码'
					}, {
						dataIndex : 'storage',
						header : '仓库名称'
					}, {
						dataIndex : 'type',
						header : '入库类型'
					}, {
						dataIndex : 'stockTime',
						sortable : true,
						header : '仓库接收元件确认时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryWarehousingByPage.biz.ext.biz.ext',
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
							name : 'orderNo'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'storage'
						}, {
							name : 'position'
						}, {
							name : 'type'
						}, {
							name : 'orderId'
						}, {
							name : 'checkCode'
						}, {
							name : 'orderNo'
						}, {
							name : 'specType'
						}, {
							name : 'jmSpecName'
						}, {
							name : 'storageCode'
						}, {
							name : 'dryWet'
						}, {
							name : 'trayCode'
						}, {
							name : 'stockTime'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增<span style="color:red;">(多个元件序列号，用空格或逗号分开)</span>',
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
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
									}
								})
					} else {
						_this.inputWindow.hide();
						var store = _this.listPanel.store;
						//store.baseParams = _this.queryPanel.form.getValues();
						store.reload();
					}
				},
				pgrid : _this.listPanel,
				columns : 6,
				saveUrl : 'com.keensen.ump.produce.component.storage.saveWarehousingByBatchNos.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '元件类型',
							readOnly : true,
							value : '工业',
							ref : '../../specType',
							allowBlank : false,
							name : 'entity/specType',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '卷膜型号',
							ref : '../../jmSpecName',
							allowBlank : false,
							name : 'entity/jmSpecName',
							anchor : '95%',
							colspan : 3
						}, {

							anchor : '95%',
							colspan : 3,
							xtype : 'combo',
							mode : 'local',
							allowBlank : false,
							editable : false,
							hiddenName : 'entity/type',
							ref : '../../type',
							fieldLabel : '入库类型',
							value : '生产入库',
							store : [['生产入库', '生产入库'], ['其他入库', '其他入库']],
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '订单号',
							allowBlank : false,
							name : 'entity/orderNo',
							anchor : '95%',
							colspan : 3
						}, {

							anchor : '95%',
							colspan : 3,
							xtype : 'combo',
							mode : 'local',
							allowBlank : false,
							editable : false,
							hiddenName : 'entity/dryWet',
							ref : '../../type',
							fieldLabel : '干/湿膜',
							store : [['干', '干'], ['湿', '湿']],
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '标签',
							allowBlank : false,
							name : 'entity/label',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'textfield',
							fieldLabel : '端盖',
							allowBlank : false,
							name : 'entity/lid',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {

							anchor : "95%",
							colspan : 3,
							xtype : 'combo',
							hiddenName : 'entity/storage',
							allowBlank : false,
							editable : false,
							ref : '../storage',
							fieldLabel : '仓库',
							store : [['高架成品仓', '高架成品仓'], ['高架订单仓', '高架订单仓'],
									['高架C等品仓', '高架C等品仓']]

						}, {
							xtype : 'textfield',
							allowBlank : false,
							fieldLabel : '库位码',
							name : 'entity/storageCode',
							ref : '../storageCode',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textarea',
							fieldLabel : '元件序列号',
							allowBlank : false,
							ref : '../../batchNoStr',
							name : 'entity/batchNoStr',
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textarea',
							fieldLabel : '备注',
							allowBlank : false,
							name : 'entity/reserve5',
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'hidden',
							ref : '../../batchNos',
							name : 'entity/batchNos'
						}, {
							xtype : 'hidden',
							value : 1,
							ref : '../../amount',
							name : 'entity/amount'
						}]
			}]
		});
	}
}