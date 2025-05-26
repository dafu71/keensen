com.keensen.ump.produce.component.vstorage.VstorageListMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow4Gyy();
		this.initEditWindow4Pg();
		this.initChooseSingleOrderWindow();

		this.initMonitorDealWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'vstoragelistmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		// 需要计划员处理、需要给工艺意见、需要品管给意见、超期停留
		this.exceptionTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['需要计划员处理', '需要计划员处理'], ['需要工艺给意见', '需要工艺给意见'],
							['需要品管给意见', '需要品管给意见'], ['超期停留', '超期停留'],
							['需班长处理', '需班长处理']]
				});

		this.gyyConclusionStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', '放行原订单'], ['B', '降级'],
							['C', '改判其他无特殊要求的同型号产品'], ['D', '报废'],
							['E', '送水测'], ['F', '染色解剖']]
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
					// title : '【物料规格查询】',
					fields : [{

								xtype : 'textfield',
								name : 'condition/jmBatchNo',
								anchor : '85%',
								fieldLabel : '卷膜序号'
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '85%',
								fieldLabel : '元件型号 '
							}, {
								xtype : 'datetimefield',
								name : 'condition/createTimeStart',
								fieldLabel : '入仓时间',
								colspan : 1,
								anchor : '85%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i'
							}, {
								xtype : 'datetimefield',
								name : 'condition/createTimeEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '85%',
								editable : true,
								format : 'Y-m-d H:i'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '异常停留分类',
								ref : '../exceptionType',
								hiddenName : 'condition/exceptionType',
								anchor : '85%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.exceptionTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.exceptionType.reset()
									}
								}
							}, {

								xtype : 'combo',
								fieldLabel : '干湿膜',
								ref : '../dryWet',
								hiddenName : 'condition/dryWet',
								emptyText : '--请选择--',
								anchor : '85%',
								colspan : 1,
								store : [[null, '全部'], ['干', '干'], ['湿', '湿']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.dryWet.reset();
									}
								}
							}, {
								xtype : 'combo',
								forceSelection : true,
								// allowBlank : false,
								mode : 'local',
								fieldLabel : '工艺结论',
								ref : '../gyyConclusion',
								hiddenName : 'condition/gyyConclusion',
								anchor : '85%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.gyyConclusionStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							},
							{

								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '85%',
								fieldLabel : '订单号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							},
							{

								xtype : 'textfield',
								name : 'condition/dimoBatchStr',
								anchor : '85%',
								fieldLabel : '底膜批次%-%'
							},
							{

								xtype : 'textfield',
								name : 'condition/tumoBatchStr',
								anchor : '85%',
								fieldLabel : '膜片批次%-%'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "移除已请检",
					scope : this,
					hidden : true,
					iconCls : 'icon-application_edit',
					handler : this.removeVstorage
				});

		this.queryPanel.addButton({
					text : "导入卷膜",
					id:importVStorageId,
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.importVStorage
				});
				
		this.queryPanel.addButton({
					text : "检查超期停留",
					id:checkOverTimeId,
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.checkOverTime
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【物料规格列表】',
			hsPage : true,
			selModel : selModel,
			tbar : [{
						text : '班长处理',
						scope : this,
						iconCls : 'icon-application_edit',
						id:monitorDealId,
						// hidden : gyyFlag != 1,
						handler : this.onMonitorDeal
					}, '-', {
						text : '班长挑水测',
						id:monitorRemarkId,
						scope : this,
						iconCls : 'icon-application_edit',
						// hidden : monitorFlag != 1,
						handler : this.onMonitorRemark
					}, '-', {
						text : '工艺员意见',
						id:gyyRemarkId,
						scope : this,
						iconCls : 'icon-application_edit',
						// hidden : gyyFlag != 1,
						handler : this.onGyyRemark
					}, '-', {
						text : '品管意见',
						id:pgRemarkId,
						scope : this,
						iconCls : 'icon-application_edit',
						// hidden : gyyFlag != 1,
						handler : this.onPgRemark
					}, '-', {
						text : '入白膜仓',
						id:warehousingId,
						scope : this,
						iconCls : 'icon-application_edit',
						// hidden : modifyOrderNoFlag != 1,
						handler : this.onWarehousing
					}, '-', {
						text : '批量改订单',
						id:modiOrderId,
						scope : this,
						iconCls : 'icon-application_edit',
						// hidden : modifyOrderNoFlag != 1,
						handler : this.onModiOrder
					}, '->', {
						xtype : 'displayfield',
						value : "<span style='color:red'>超过4小时未处理，卷膜序号标红</span>"
					}],
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'jmBatchNo',
						width : 100,
						header : '卷膜序号',
						renderer : function(v, m, r, i) {
							var overTime = r.get('overTime');
							if (overTime == '1') {
								return "<span style='color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'qjBatchNo',
						width : 150,
						header : '元件序号'
					}, {
						dataIndex : 'jmProduceDt',
						width : 150,
						header : '卷膜生产时间'
					}, {
						dataIndex : 'wtCreateDt',
						width : 150,
						header : '水测时间'
					}, {
						dataIndex : 'tumoBatchStr',
						width : 200,
						header : '膜片批次'
					}, {
						dataIndex : 'dimoBatchStr',
						width : 200,
						header : '底膜批次'
					}, {
						dataIndex : 'orderNo',
						width : 150,
						header : '订单号'
					}, {
						dataIndex : 'dryWet',
						width : 100,
						header : '干/湿膜'
					}, {
						dataIndex : 'prodSpecName',
						width : 120,
						header : '元件型号'
					}, {
						dataIndex : 'ngReasonName',
						width : 120,
						header : '气检NG'
					}, {
						header : '泄压值',
						sortable : true,
						width : 60,
						dataIndex : 'checkResult'
					}, {
						dataIndex : 'fGpd',
						width : 120,
						header : '初检产水量'
					}, {
						dataIndex : 'fSalt',
						width : 120,
						header : '初检脱盐率%'
					}, {
						dataIndex : 'rGpd',
						width : 120,
						header : '复检产水量'
					}, {
						dataIndex : 'rSalt',
						width : 120,
						header : '复检脱盐率%'
					}, {
						dataIndex : 'createTime',
						width : 120,
						header : '入仓时间'
					}, {
						dataIndex : 'createName',
						width : 120,
						header : '入仓操作员'
					}, {
						dataIndex : 'exceptionType',
						width : 150,
						header : '异常停留分类'
					}, {
						dataIndex : 'remark',
						width : 160,
						header : '备注'
					}, {
						dataIndex : 'monitorRemark',
						width : 160,
						header : '班长挑水测'
					}, {
						dataIndex : 'monitorRemarkTime',
						header : '班长安排<br>水测时间',
						width : 120
					}, {
						dataIndex : 'gyyConclusion',
						width : 160,
						header : '工艺结论'
					}, {
						dataIndex : 'gyySpecName',
						width : 100,
						header : '处理型号'
					}, {
						dataIndex : 'gyyRemarkTime',
						width : 120,
						header : '工艺备注时间'
					}, {
						dataIndex : 'pgRemark',
						width : 160,
						header : '品管结论'
					}, {
						dataIndex : 'pgRemarkTime',
						width : 120,
						header : '品管备注时间'
					}, {
						dataIndex : 'semiStock',
						width : 120,
						header : '是否已入白膜仓'
					}, {
						dataIndex : 'modifyOrderNoTime',
						width : 120,
						header : '改订单号时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.vstorage.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'gyyConclusion'
						}, {
							name : 'semiStock'
						}, {
							name : 'dryWet'
						}, {
							name : 'gyyRemarkTime'
						}, {
							name : 'gyySpecName'
						}, {
							name : 'pgRemark'
						}, {
							name : 'pgRemarkTime'
						}, {
							name : 'pgRemarkUserName'
						}, {
							name : 'jmBatchNo'
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
							name : 'exceptionType'
						}, {
							name : 'remark'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'jmBatchId'
						}, {
							name : 'qjBatchId'
						}, {
							name : 'modifyOrderNoTime'
						}, {
							name : 'diff'
						}, {
							name : 'overTime'
						}, {
							name : 'ngReasonName'
						}, {
							name : 'monitorRemark'
						}, {
							name : 'monitorRemarkTime'
						}, {
							name : 'recordId'
						}, {
							name : 'fGpd'
						}, {
							name : 'fSalt'
						}, {
							name : 'orderNo'
						}, {
							name : 'rGpd'
						}, {
							name : 'rSalt'
						}, {
							name : 'rSalt'
						}, {
							name : 'qjBatchNo'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'dimoBatchStr'
						}, {
							name : 'jmProduceDt'
						}, {
							name : 'wtCreateDt'
						}, {
							name : 'checkResult'
						}]
			})
		})
	}

	this.initEditWindow4Pg = function() {

		this.editWindow4Pg = this.editWindow4Pg || new Ext.fn.FormWindow({
			title : '品管意见',
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
						loadUrl : '1.biz.ext',
						saveUrl : 'com.keensen.ump.qinsen.qijian.savePgRemark.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textarea',
									name : 'entity/pgRemark',
									allowBlank : false,
									value : '-',
									fieldLabel : '品管结论',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'hidden',
									ref : '../../recordIds',
									name : 'entity/recordIds'
								}]
					}]
		});
	}

	this.initEditWindow4Gyy = function() {
		// A、放行原订单；B、降级；C、改判其他无特殊要求的同型号产品；D、报废
		this.gyyConclusionStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', '放行原订单'], ['B', '降级'],
							['C', '改判其他无特殊要求的同型号产品'], ['D', '报废'],
							['E', '送水测'], ['F', '染色解剖']]
				});

		this.editWindow4Gyy = this.editWindow4Gyy || new Ext.fn.FormWindow({
			title : '工艺员意见',
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
				loadUrl : '1.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.vstorage.saveGyyConclusions2.biz.ext',
				fields : [{
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '工艺结论',
							ref : '../../gyyConclusion',
							hiddenName : 'entity/gyyConclusion',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.gyyConclusionStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/gyySpecId',
							ref : '../../gyySpecId',
							colspan : 1,
							anchor : '95%',
							fieldLabel : '处理型号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							name : 'entity/gyyRemark',
							allowBlank : false,
							value : '-',
							fieldLabel : '处理意见',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							ref : '../../recordIds',
							name : 'entity/recordIds'
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
								dataIndex : 'orderType',
								header : '订单类型',
								sortable : true
							}, {
								dataIndex : 'orderNo',
								header : '订单编号',
								sortable : true
							}, {
								dataIndex : 'templateName',
								header : '唛头图纸编号',
								sortable : true
							}, {
								dataIndex : 'materSpecName2',
								header : '订单下达型号',
								sortable : true
							}, {
								dataIndex : 'materSpecName',
								header : '对应生产规格',
								sortable : true
							}, {
								dataIndex : 'orderAmount',
								header : '订单数量',
								sortable : true
							}, {
								dataIndex : 'orderDate',
								header : '订单日期',
								sortable : true
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.neworder.queryYxOrderByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'id'
								}, {
									name : 'lidTape'
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
									name : 'scfs'
								}, {
									name : 'bm'
								}, {
									name : 'sffh'
								}, {
									name : 'orderType'
								}, {
									name : 'type'
								}, {
									name : 'khxj'
								}, {
									name : 'cpxj'
								}, {
									name : 'ddxj'
								}, {
									name : 'orderNo'
								}, {
									name : 'orderDate'
								}, {
									name : 'hpmc'
								}, {
									name : 'dw'
								}, {
									name : 'materSpecName'
								}, {
									name : 'cpgg'
								}, {
									name : 'dryWet'
								}, {
									name : 'orderAmount'
								}, {
									name : 'dfh'
								}, {
									name : 'xsc'
								}, {
									name : 'sbkcgm'
								}, {
									name : 'sbkcsm'
								}, {
									name : 'bq'
								}, {
									name : 'bag'
								}, {
									name : 'box'
								}, {
									name : 'mark'
								}, {
									name : 'pack'
								}, {
									name : 'performance'
								}, {
									name : 'remark'
								}, {
									name : 'demandStockDate'
								}, {
									name : 'rksl'
								}, {
									name : 'jhwcsj'
								}, {
									name : 'scwcrq'
								}, {
									name : 'cnt'
								}, {
									name : 'arrangeAmount'
								}, {
									name : 'ifplan'
								}, {
									name : 'materSpecName2'
								}, {
									name : 'templateName'
								}, {
									name : 'baseId'
								}, {
									name : 'materSpecId'
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
										// anchor : '75%',
										fieldLabel : '订单号'
									}, {
										xtype : 'textfield',
										name : 'condition/materSpecName',
										// anchor : '75%',
										fieldLabel : '规格型号 '
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										xtype : "dateregion",
										colspan : 1,
										// anchor : '75%',
										nameArray : [
												'condition/orderDateStart',
												'condition/orderDateEnd'],
										fieldLabel : "订单日期",
										format : "Y-m-d"
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
							width : 800,
							height : 600,
							layout : 'border',
							items : [this.queryChooseSingleOrderPanel,
									this.chooseSingleOrderListPanel]

						});
	}

	this.initMonitorDealWindow = function() {
		var _this = this;
		this.monitorDealWindow = this.monitorDealWindow
				|| new Ext.fn.FormWindow({
					title : '班长处理',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						// baseCls : "x-plain",
						pgrid : this.listPanel,
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
								_this.monitorDealWindow.items.items[0].form
										.reset();
								_this.monitorDealWindow.hide();
								_this.listPanel.store.reload();
								_this.onMsg();
							}
						},
						columns : 2,
						saveUrl : 'com.keensen.ump.produce.component.vstorage.updateVstorageExceptionType.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'combobox',
									mode : 'local',
									fieldLabel : '异常停留分类',
									ref : '../../exceptionType',
									hiddenName : 'param/exceptionType',
									anchor : '90%',
									colspan : 2,
									emptyText : '--请选择--',
									editable : false,
									allowBlank : false,
									store : this.exceptionTypeStore,
									displayField : "name",
									valueField : "code",
									listeners : {
										"expand" : function(A) {
											_this.monitorDealWindow.exceptionType
													.reset()
										}
									}
								}, {
									name : 'param/recordIds',
									xtype : 'hidden',
									ref : '../../recordIds'
								}]
					}]
				});
	}
}