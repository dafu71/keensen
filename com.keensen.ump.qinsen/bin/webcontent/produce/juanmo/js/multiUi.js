com.keensen.ump.qinsen.produce.juanmo.multiMgr = function() {
	this.initPanel = function() {
		this.initStore();
		this.initChooseCdmWindow();
		this.createPanel();
		return new Ext.fn.fnLayOut({
					title : '混卷录入',
					layout : 'we',
					border : false,
					panels : [this.managePanel, this.panel4]
				});
	}

	this.initStore = function() {
		this.jmdutyStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.workorder2.queryBatchNo4JmDuty.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'cdmRecordId'
					}, {
						name : 'batchNo'
					}, {
						name : 'mixBatchNo'
					}, {
						name : 'location'
					}]
		})

		this.chooseCdmStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.common.query.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {
				'nameSqlId' : 'com.keensen.ump.produce.component.workorder.queryJmChooseCdm'
			},
			fields : [{
						name : 'prodSpecName'
					}, {
						name : 'cdmBatchNo'
					}, {
						name : 'orderNo'
					}]
		})

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});
	}

	this.createPanel = function() {
		var _this = this;

		this.cdmPanel = this.cdmPanel || new Ext.fn.ColumnFormPanel({
					height : 190,
					width : 800,
					title : '叠膜信息',
					columns : 12,
					autoHide : true,
					border : false,
					fields : [{
								xtype : 'checkbox',
								fieldLabel : '是否自由卷',
								ref : '../ifFree',
								hidden : true,
								anchor : '100%',
								colspan : 2
							}, {
								xtype : 'combobox',
								forceSelection : true,
								// readOnly : true,
								// allowBlank : false,
								mode : 'local',
								fieldLabel : '叠膜栈板号',
								ref : '../cdmBatchNo2',
								anchor : '100%',
								colspan : 4,
								emptyText : '--请选择--',
								editable : false,
								store : this.jmdutyStore,
								displayField : "batchNo",
								valueField : "batchNo",
								listeners : {
									"expand" : function(A) {
										this.reset()
									},
									'select' : function(combo, record, index) {
										if (index > -1) {
											var mixBatchNo = record
													.get('mixBatchNo');
											_this.cdmPanel.mixBatchNo
													.setValue(mixBatchNo);
											_this.mainPanel.cdmBatchNo
													.setValue(record
															.get('batchNo'));
											_this.cdmPanel.location
													.setValue(record
															.get('location'));

										}
									}
								}
							}, {
								ref : '../mixBatchNo',
								fieldLabel : '建议混卷膜片',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'textfield',
								ref : '../location',
								readOnly : true,
								// allowBlank : false,
								anchor : '100%',
								fieldLabel : '膜页栈板储位',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'textfield',
								name : 'cdmBatchNo',
								style : '{font-weight:bold;}',
								allowBlank : false,
								fieldLabel : '扫码栈板号',
								ref : '../cdmBatchNo',
								anchor : '100%',
								colspan : 4,
								listeners : {
									scope : this,
									specialkey : function(C, D) {
										if (D.getKey() == Ext.EventObject.ENTER) {

											var records = this.detailGrid.store
													.getRange();
											if (records.length > 0) {
												this.dealCdmBatchNo();
												return;
											}
											var cdmBatchNo = this.cdmPanel.cdmBatchNo
													.getValue();
											// 自由卷
											if (this.cdmPanel.ifFree.checked) {
												var i = this.chooseCdmStore
														.find('cdmBatchNo',
																cdmBatchNo);
												if (i == -1) {
													Ext.Msg
															.alert(
																	"系统提示",
																	"不是自由卷设置的裁叠膜栈板号，请确认！",
																	function() {

																	});
													return;
												} else {
													this.dealCdmBatchNo();
													return;
												}
											}
											var cdmBatchNo2 = this.cdmPanel.cdmBatchNo2
													.getValue();

											if (cdmBatchNo2 != cdmBatchNo) {
												Ext.Msg.alert("系统提示",
														"栈板号验证不一致！",
														function() {

														})
											} else {
												this.dealCdmBatchNo();
											}

										}

									}
								}
							}, {
								ref : '../inQuantity',
								name : 'inQuantity',
								fieldLabel : '投入页数',
								allowBlank : false,
								xtype : 'numberfield',
								minValue : 0,
								decimalPrecision : 1,
								colspan : 4,
								anchor : '100%'
							}, {
								ref : '../outQuantity',
								name : 'outQuantity',
								allowBlank : false,
								fieldLabel : '使用页数',
								xtype : 'numberfield',
								minValue : 0,
								decimalPrecision : 1,
								colspan : 4,
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'prodSpecId',
								ref : '../prodSpecId',
								state : 'Y',
								anchor : '100%',
								fieldLabel : '元件型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								emptyText : '',
								readOnly : true,
								colspan : 3
							}, {
								ref : '../blankingSize',
								name : 'blankingSize',
								fieldLabel : '下料尺寸',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../denseNet',
								name : 'denseNet',
								fieldLabel : '浓网',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../pageWidth',
								name : 'pageWidth',
								fieldLabel : '页宽',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								ref : '../displayfield1',
								height : 5,
								colspan : 24
							}, {
								xtype : 'textfield',
								ref : '../prodRemark',
								// name : 'entity/jmAmount',
								// allowBlank : false,
								readOnly : true,
								anchor : '95%',
								fieldLabel : '订单生产备注',
								colspan : 12
							}

							, {
								ref : '../cdmBatchId',
								name : 'cdmBatchId',
								xtype : 'hidden'
							}, {
								ref : '../orderNo',
								name : 'orderNo',
								xtype : 'hidden'
							}],
					buttons : [{
								text : "领取任务",
								scope : this,
								iconCls : 'icon-page_save',
								handler : this.onGetDuty

							}, {
								text : "添加",
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.addDetail

							}, {
								text : '重置',
								scope : this,
								iconCls : 'icon-application_reset',
								handler : function() {
									this.cdmPanel.form.reset();
									this.cdmPanel.cdmBatchNo.focus();
								}
							}, {
								text : "查看自由卷裁叠膜",
								scope : this,
								hidden : true,
								iconCls : 'icon-application_add',
								handler : this.onChooseCdm

							}]

				})
		this.mainPanel = this.mainPanel || new Ext.fn.ColumnFormPanel({
					height : 230,
					width : 800,
					title : '卷膜信息',
					columns : 12,
					autoHide : true,
					border : false,
					fields : [{
								xtype : 'datetimefield',
								format : "Y-m-d H:i:00",
								name : 'produceDt',
								ref : '../produceDt',
								fieldLabel : '生产时间',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								value : new Date()
							}, {
								xtype : 'linecombobox',
								prodTacheId : 102,
								ref : '../lineId',
								hiddenName : 'lineId',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								fieldLabel : '生产线 '
							}, {

								xtype : 'combo',
								fieldLabel : '试卷',
								ref : '../isTrial',
								hiddenName : 'isTrial',
								emptyText : '--请选择--',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								store : [['N', '否'], ['Y', '是']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.mainPanel.isTrial.reset();
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								ref : '../cnt',
								fieldLabel : '元件支数',
								xtype : 'numberfield',
								name : 'cnt',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								value : 1,
								minValue : 1,
								decimalPrecision : 0
							}, {
								xtype : 'textfield',
								name : 'juanMoBatchNo',
								ref : '../juanMoBatchNo',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								fieldLabel : '起始卷膜序号'
							}, {
								xtype : 'textfield',
								name : 'orderNo',
								allowBlank : false,
								ref : '../orderNo',
								anchor : '100%',
								colspan : 4,
								fieldLabel : '订单号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'prodSpecId',
								ref : '../prodSpecId',
								state : 'Y',
								anchor : '100%',
								colspan : 4,
								fieldLabel : '元件型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								allowBlank : false,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : 'tacheteamcombobox',
								tacheCode : 'JM',
								name : 'teamId',
								fieldLabel : '生产班组',
								hiddenName : 'teamId',
								ref : '../teamId',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								ref : '../pipeCode',
								xtype : 'textfield',
								fieldLabel : '中心管组件编号',
								name : 'pipeCode',
								anchor : '100%',
								colspan : 4
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								ref : '../pageCnt',
								name : 'pageCnt',
								fieldLabel : '膜页数',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../blankingSize',
								name : 'blankingSize',
								fieldLabel : '下料尺寸',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../denseNet',
								name : 'denseNet',
								fieldLabel : '浓网',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../pageWidth',
								name : 'pageWidth',
								fieldLabel : '页宽',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								name : 'remark',
								ref : '../remark',
								xtype : 'textarea',
								height : 30,
								fieldLabel : '备注',
								anchor : '100%',
								colspan : 4,
								allowBlank : true
							}, {
								ref : '../trailer',
								name : 'trailer',
								fieldLabel : '车号',
								xtype : 'textfield',
								// readOnly : true,
								colspan : 4,
								anchor : '85%'
							}, {
								ref : '../../workerName',
								xtype : 'displayfield',
								fieldLabel : '操作工',
								anchor : '100%',
								colspan : 4,
								value : nowStaffName
							}, {
								ref : '../cdmBatchId',
								name : 'cdmBatchId',
								xtype : 'hidden'
							}, {
								ref : '../startSeq',
								name : 'startSeq',
								xtype : 'hidden'
							}, {
								ref : '../prefix',
								name : 'prefix',
								xtype : 'hidden'
							}, {
								name : 'workerId',
								xtype : 'hidden',
								value : nowStaffId
							}, {
								name : 'orderId',
								xtype : 'hidden',
								ref : '../orderId'
							}, {
								name : 'planDate',
								xtype : 'hidden',
								ref : '../planDate'
							}, {
								name : 'cdmBatchNo',
								xtype : 'hidden',
								ref : '../cdmBatchNo'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								iconCls : 'icon-page_save',
								handler : this.onSave

							}, {
								text : '重置',
								scope : this,
								iconCls : 'icon-application_reset',
								handler : function() {
									this.clearInfo();
								}
							}]

				})
		this.detailGrid = this.detailGrid || new Ext.grid.GridPanel({
					width : '100%',
					title : '混卷组成',
					height : 120,
					autoScroll : true,
					// margin : '5 3 2 3',
					store : new Ext.data.JsonStore({
								fields : ['cdmBatchId', 'cdmBatchNo',
										'orderNo', 'inquantity', 'outquantity',
										'remark', 'cdmSpecCode', 'cdmSpecName',
										'blankingSize', 'denseNet',
										'pageWidth', 'produceDate']
							}),
					columns : [new Ext.grid.RowNumberer({
										header : '行',
										width : 40
									}), {
								header : '栈板号',
								width : 120,
								dataIndex : 'cdmBatchNo'
							}, {
								header : '投入页数',
								width : 70,
								dataIndex : 'inQuantity',
								decimalPrecision : 1,
								minValue : 0
							}, {
								header : '使用页数',
								width : 70,
								dataIndex : 'outQuantity',
								decimalPrecision : 1,
								minValue : 0
							}, {
								header : '订单号',
								width : 120,
								dataIndex : 'orderNo'
							}, {
								header : '元件型号',
								width : 120,
								dataIndex : 'cdmSpecName'
							}, {
								header : '下料尺寸(m)',
								width : 90,
								dataIndex : 'blankingSize'
							}, {
								header : '浓网(mil)',
								width : 70,
								dataIndex : 'denseNet'
							}, {
								header : '页宽(m)',
								width : 70,
								dataIndex : 'pageWidth'
							}, {
								header : '生产时间',
								width : 110,
								dataIndex : 'produceDate'
							}, {
								header : '备注',
								width : 120,
								dataIndex : 'remark'
							}],
					autoSizeColumns : true,
					columnLines : true,
					resizable : true,
					viewConfig : {
						enableTextSelection : true
					}

				})
		this.panel4 = this.panel4 || new Ext.Panel({});
		this.managePanel = new Ext.Panel({
					layout : 'form',
					height : '100%',
					width : 800,
					items : [this.cdmPanel, this.mainPanel, this.detailGrid]

				})
	}

	this.initChooseCdmWindow = function() {

		var selModel4ChooseCdm = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel4ChooseCdm = this.listPanel4ChooseCdm
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					/*
					 * tbar : [{ text : '新增', scope : this, iconCls :
					 * 'icon-application_add', handler : this.onAdd4ChooseCdm },
					 * '-', { text : '删除', scope : this, iconCls :
					 * 'icon-application_delete', handler : this.onDel4ChooseCdm
					 * }],
					 */
					hsPage : true,
					selModel : selModel4ChooseCdm,
					delUrl : 'com.keensen.ump.produce.component.workorder2.deleteChooseCdm.biz.ext',
					columns : [new Ext.grid.RowNumberer(), selModel4ChooseCdm,
							{
								dataIndex : 'cdmBatchNo',
								header : '裁叠膜栈板号'
							}, {
								dataIndex : 'orderNo',
								header : '订单号'
							}, {
								dataIndex : 'prodSpecName',
								header : '生产型号'
							}],
					store : this.chooseCdmStore
				})

		this.queryPanel4ChooseCdm = this.queryPanel4ChooseCdm
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/orderNo',
										anchor : '85%',
										fieldLabel : '订单号'
									}, {
										xtype : 'textfield',
										name : 'condition/cdmBatchNo',
										anchor : '85%',
										fieldLabel : '裁叠膜栈板号'
									}]
						});

		this.queryPanel4ChooseCdm.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseCdmWindow.hide();
					}

				});

		this.chooseCdmWindow = this.chooseCdmWindow || new Ext.Window({
					title : '自由卷设置裁叠膜',
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
					items : [this.queryPanel4ChooseCdm,
							this.listPanel4ChooseCdm]

				});

	}
}