com.keensen.ump.produce.component.storage.QueryMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		this.initAllocateWindow();
		this.initOutOfStockWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentstoragequerymgr',
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
								fieldLabel : "入库时间",
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
								editable:false,
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
								xtype : 'textfield',
								name : 'condition/trayCode',
								anchor : '100%',
								fieldLabel : '托盘号 '
							}

							, {
								xtype : 'hidden',
								name : 'condition/notZero',
								value : 1
							}]
				});
				
		this.queryPanel.addButton({
					text : "多元件序号查询",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onQueryByBatchNos
				});
				
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					//hidden : true,
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
				// singleSelect : true,
				// header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【仓库配置列表】',
			viewConfig : {
				forceFit : true
			},
			pageSize : 100,
			pageSizeComboStore : [10, 15, 20, 30, 40, 50, 100, 200, 500, 1000],
			hsPage : true,
			tbar : [{
						text : '调拨',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onAllocate
					}, '-', {
						text : '订单仓及C等品仓元件销售出库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onOutOfStockByDD
					}, '-', {
						text : '成品仓元件销售出库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onOutOfStockByCP
					}, '-', {
						text : '其它出库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onOutOfStock
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'batchNo',
						sortable : true,
						header : '元件序号'
					}, {
						dataIndex : 'checkCode',
						sortable : true,
						header : '请检单号'
					}, {
						dataIndex : 'trayCode',
						sortable : true,
						header : '托盘号'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号'
					}, {
						dataIndex : 'amount',
						sortable : true,
						header : '数量'
					}, {
						dataIndex : 'jmSpecName',
						sortable : true,
						header : '卷膜型号'
					}, {
						dataIndex : 'dryWet',
						sortable : true,
						header : '干湿'
					}, {
						dataIndex : 'specType',
						sortable : true,
						header : '元件类型'
					}, {
						dataIndex : 'storageCode',
						sortable : true,
						header : '库位码'
					}, {
						dataIndex : 'storage',
						sortable : true,
						header : '仓库名称'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '入库时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryStorageByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/notZero' : 1
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
						}]
			})
		})
	}

	this.initAllocateWindow = function() {
		var _this = this;
		this.allocateWindow = this.allocateWindow || new Ext.fn.FormWindow({
			title : '工业膜调拨',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				successFn : function(i, r) {
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.ret,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {

									}
								})
					} else {
						_this.allocateWindow.hide();
						var store = _this.listPanel.store;
						//store.baseParams = _this.queryPanel.form.getValues();
						store.reload();
					}
				},
				autoHide : false,
				saveUrl : 'com.keensen.ump.produce.component.storage.saveBatchAllocate.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							allowBlank : false,
							fieldLabel : '元件序号',
							ref : '../../batchNo',
							readOnly : true,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '10',
							colspan : 1
						}, {

							anchor : "95%",
							colspan : 1,
							xtype : 'combo',
							mode : 'local',
							allowBlank : false,
							editable:false,
							hiddenName : 'toStorage',
							ref : '../../toStorage',
							fieldLabel : '目标仓库',
							store : [['高架成品仓', '高架成品仓'], ['高架订单仓', '高架订单仓'],
									['高架C等品仓', '高架C等品仓']],
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}

						}, {
							xtype : 'displayfield',
							height : '10',
							colspan : 1
						}, {
							xtype : 'textfield',
							height : 30,
							style : '{font-weight:bold;font-size:18px;}',
							allowBlank : false,							
							fieldLabel : '目标库位码',
							ref : '../../toStorageCode',
							name : 'toStorageCode',
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {

									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '10',
							colspan : 1
						}, {
							xtype : 'textfield',
							height : 30,
							style : '{font-weight:bold;font-size:18px;}',
							//allowBlank : false,							
							fieldLabel : '目标托盘号',
							ref : '../../toTrayCode',
							name : 'toTrayCode',
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {

									}

								}
							}
						}, {
							xtype : 'hidden',
							name : 'ids',
							ref : '../../ids'
						}]
			}]
		});
	}

	this.initOutOfStockWindow = function() {
		var _this = this;
		this.outOfStockWindow = this.outOfStockWindow
				|| new Ext.fn.FormWindow({
					title : '出库',
					height : 480,
					width : 600,
					// itemCls:'required',
					// style:'margin-top:10px',
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						columns : 1,
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
								_this.outOfStockWindow.hide();
								var store = _this.listPanel.store;
								//store.baseParams = _this.queryPanel.form
								//		.getValues();
								store.reload();
							}
						},
						autoHide : false,
						saveUrl : 'com.keensen.ump.produce.component.storage.saveOutOfStockByBatchNos.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textarea',
									height:150,
									allowBlank : false,
									fieldLabel : '元件序号',
									ref : '../../batchNos',
									name : 'entity/batchNos',
									readOnly : true,
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '10',
									colspan : 1
								}, {

									anchor : "80%",
									colspan : 1,
									xtype : 'textfield',
									allowBlank : false,
									readOnly:true,
									ref : '../../type',
									name : 'entity/type',
									fieldLabel : '出库类型'

								}, {
									xtype : 'displayfield',
									height : '10',
									colspan : 1
								}, {
									xtype : 'textfield',
									height : 30,
									style : '{font-weight:bold;font-size:18px;}',
									// allowBlank : false,
									fieldLabel : '出库订单号',
									name : 'entity/orderNo',
									ref : '../../orderNo',
									anchor : '80%',
									colspan : 1,
									listeners : {
										scope : this,
										specialkey : function(C, D) {
											if (D.getKey() == Ext.EventObject.ENTER) {

											}

										}
									}
								}, {
									xtype : 'hidden',
									name : 'entity/ids',
									ref : '../../ids'
								}, {
									xtype : 'hidden',
									name : 'entity/jmSpecName',
									ref : '../../jmSpecName'
								}, {
									xtype : 'hidden',
									name : 'entity/flag',
									ref : '../../flag'
								}]
					}]
				});
	}
}