com.keensen.ump.produce.component.storage.QueryMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		this.initAllocateWindow();
		this.initOutOfStockWindow();

		this.initChooseSingleOrderWindow();

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
					// hidden : true,
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
						dataIndex : 'orderNoAllocate',
						sortable : true,
						header : '调拨后订单号'
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
						header : '仓库接收元件确认时间'
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
						}, {
							name : 'orderNoAllocate'
						}, {
							name : 'baseId'
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
						// store.baseParams = _this.queryPanel.form.getValues();
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
							editable : false,
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
							// allowBlank : false,
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
							xtype : 'displayfield',
							height : '10',
							colspan : 1
						}, {
							xtype : 'trigger',
							ref : '../../orderNoAllocate',
							name : 'orderNoAllocate',
							editable : false,
							fieldLabel : '调拨后订单号',
							anchor : '95%',
							colspan : 1,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChooseOrder();
							}
						}, {
							xtype : 'hidden',
							ref : '../../baseId',
							name : 'baseId'
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
								// store.baseParams = _this.queryPanel.form
								// .getValues();
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
									height : 150,
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
									readOnly : true,
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

	this.initChooseSingleOrderWindow = function() {

		var chooseSingleOrderSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseSingleOrderListPanel = this.chooseSingleOrderListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleOrder
							}],
					hsPage : true,
					selModel : chooseSingleOrderSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							chooseSingleOrderSelModel, {
								dataIndex : 'orderNo',
								header : '销售订单编号',
								sortable : true
							}, {
								dataIndex : 'jmSpecName',
								header : '卷膜型号',
								sortable : true
							}, {
								dataIndex : 'dryWetDemand',
								header : '要求干湿膜状态',
								hidden : true
							}, {
								dataIndex : 'dateDelivery',
								header : '发货日期',
								sortable : true
							}, {
								dataIndex : 'orderAmount',
								header : '订单数量',
								sortable : true
							}, {
								dataIndex : 'giftNum',
								header : '赠送数量',
								sortable : true
							}, {
								dataIndex : 'prodAmount',
								header : '需生产或入库数量',
								sortable : true
							}, {
								dataIndex : 'dryAmount',
								header : '发库存干膜数量（支）',
								sortable : true
							}, {
								dataIndex : 'wetAmount',
								header : '发库存湿膜数量（支）',
								sortable : true
							}, {
								dataIndex : 'stockAmount',
								header : '发库存膜元件（支）',
								sortable : true
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.yxorderbase.queryOrderBaseByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/state' : '正式发布'
						},
						fields : [{
									name : 'id'
								}, {
									name : 'dryWetDemand'
								}, {
									name : 'specNameLabel'
								}, {
									name : 'mptype'
								}, {
									name : 'lidControlCode'
								}, {
									name : 'labelControlCode'
								}, {
									name : 'giftNum'
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
									name : 'dept'
								}, {
									name : 'khxj'
								}, {
									name : 'cpxj'
								}, {
									name : 'cplb'
								}, {
									name : 'orderNo'
								}, {
									name : 'personInCharge'
								}, {
									name : 'client'
								}, {
									name : 'nation'
								}, {
									name : 'province'
								}, {
									name : 'city'
								}, {
									name : 'district'
								}, {
									name : 'orderDate'
								}, {
									name : 'prodName'
								}, {
									name : 'dryWet'
								}, {
									name : 'orderAmount'
								}, {
									name : 'label'
								}, {
									name : 'labelDrawingCode'
								}, {
									name : 'bag'
								}, {
									name : 'bagDrawingCode'
								}, {
									name : 'box'
								}, {
									name : 'boxDrawingCode'
								}, {
									name : 'mark'
								}, {
									name : 'markDrawingCode'
								}, {
									name : 'markDrawingCode2'
								}, {
									name : 'productRemark'
								}, {
									name : 'deliveryDate'
								}, {
									name : 'state'
								}, {
									name : 'orderType'
								}, {
									name : 'materSpecName2'
								}, {
									name : 'type'
								}, {
									name : 'style'
								}, {
									name : 'wetPercent'
								}, {
									name : 'dryAmount'
								}, {
									name : 'wetAmount'
								}, {
									name : 'stockAmount'
								}, {
									name : 'prodAmount'
								}, {
									name : 'demandStockDate'
								}, {
									name : 'period'
								}, {
									name : 'saltLow'
								}, {
									name : 'gpdLow'
								}, {
									name : 'gpdUp'
								}, {
									name : 'testStand'
								}, {
									name : 'pressure'
								}, {
									name : 'temperature'
								}, {
									name : 'concentration'
								}, {
									name : 'recyclePercent'
								}, {
									name : 'ph'
								}, {
									name : 'denseNet'
								}, {
									name : 'lid'
								}, {
									name : 'tape'
								}, {
									name : 'aar'
								}, {
									name : 'color'
								}, {
									name : 'colorCode'
								}, {
									name : 'makeLabel'
								}, {
									name : 'newMakeLabel'
								}, {
									name : 'waterArrow'
								}, {
									name : 'snRegular'
								}, {
									name : 'labelNsf'
								}, {
									name : 'snStart'
								}, {
									name : 'snEnd'
								}, {
									name : 'labelDouble'
								}, {
									name : 'labelRuleDouble'
								}, {
									name : 'positionLabel'
								}, {
									name : 'makeMark'
								}, {
									name : 'newMakeMark'
								}, {
									name : 'markNsf'
								}, {
									name : 'markRegular'
								}, {
									name : 'markStart'
								}, {
									name : 'markEnd'
								}, {
									name : 'ifkeep'
								}, {
									name : 'markDouble'
								}, {
									name : 'markRuleDouble'
								}, {
									name : 'positionMark'
								}, {
									name : 'ifphoto'
								}, {
									name : 'ifanyone'
								}, {
									name : 'photoSingle'
								}, {
									name : 'photoAll'
								}, {
									name : 'packingNum'
								}, {
									name : 'ifpolish'
								}, {
									name : 'tray'
								}, {
									name : 'traySize'
								}, {
									name : 'packingLayer'
								}, {
									name : 'packingTxt'
								}, {
									name : 'goodsWithReport'
								}, {
									name : 'hpmc'
								}, {
									name : 'sealPosition'
								}, {
									name : 'sealAmount'
								}, {
									name : 'deliveryState'
								}, {
									name : 'mpSpecName'
								}, {
									name : 'mpSpecId'
								}, {
									name : 'back'
								}, {
									name : 'material'
								}, {
									name : 'pallet'
								}, {
									name : 'sealRequire'
								}, {
									name : 'specNameMark'
								}, {
									name : 'taskState'
								}, {
									name : 'recordTime'
								}, {
									name : 'packingLid'
								}, {
									name : 'jmSpecName'
								}, {
									name : 'ifGift'
								}, {
									name : 'provideBatchNo'
								}, {
									name : 'certificateDemand'
								}, {
									name : 'deliveryDateEarliest'
								}, {
									name : 'deliveryDateLatest'
								}, {
									name : 'markPaste'
								}, {
									name : 'version'
								}, {
									name : 'bagLabelPo'
								}, {
									name : 'bagLabelDate'
								}, {
									name : 'bagLabelAmount'
								}, {
									name : 'qcTxt'
								}, {
									name : 'techCheck'
								}, {
									name : 'labelSnRule'
								}, {
									name : 'labelSnRuleApoint'
								}, {
									name : 'sealPosition2'
								}, {
									name : 'pipeLink'
								}, {
									name : 'bagSeal'
								}, {
									name : 'boxSeal'
								}, {
									name : 'markSnRuleApoint'
								}, {
									name : 'bagLabel'
								}, {
									name : 'bagLabelControlCode'
								}, {
									name : 'boxSealControlCode'
								}, {
									name : 'dateDelivery'
								}, {
									name : 'urlDateDelivery'
								}, {
									name : 'urlDateDelivery2'
								}, {
									name : 'orderTime'
								}, {
									name : 'dateDelivery'
								}, {
									name : 'mark2ControlCode'
								}]
					})
				})

		this.queryChooseSingleOrderPanel = this.queryChooseSingleOrderPanel
				|| new Ext.fn.QueryPanel({
							height : 120,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/orderNo2',
										fieldLabel : '销售订单编号'
									}, {
										xtype : 'textfield',
										name : 'condition/jmSpecName',
										fieldLabel : '卷膜型号'
									}, {
										xtype : 'hidden',
										name : 'condition/state',
										value : '正式发布'
									}]
						});

		this.queryChooseSingleOrderPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSingleOrderWindow.hide();
					}

				});

		this.chooseSingleOrderWindow = this.chooseSingleOrderWindow
				|| new Ext.Window({
							title : '订单查询',
							projectId : '',
							resizable : true,
							minimizable : false,
							maximizable : true,
							closeAction : "hide",
							buttonAlign : "center",
							autoScroll : false,
							modal : true,
							width : 1024,
							height : 600,
							layout : 'border',
							items : [this.queryChooseSingleOrderPanel,
									this.chooseSingleOrderListPanel]

						});
	}
}