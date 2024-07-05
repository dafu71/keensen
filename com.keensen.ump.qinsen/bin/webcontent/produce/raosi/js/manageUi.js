com.keensen.ump.qinsen.produce.raosiMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		this.initRaosiAddWindow();
		this.initRaosiEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'raosimgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					titleCollapse : false,
					// title : '【绕丝记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceBeginDate',
						fieldLabel : '生产时间',
						colspan : 1,
						anchor : '75%',
						//allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceEndDate',
						fieldLabel : '至',
						colspan : 1,
						anchor : '75%',
						editable : true,
						format : 'Y-m-d H:i',
						//allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '104',
						hiddenName : 'condition/lineId',
						anchor : '75%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						anchor : '75%',
						fieldLabel : '元件型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {

						xtype : 'combo',
						fieldLabel : '生产标志',
						ref : '../produceFlag',
						hiddenName : 'condition/produceFlag',
						emptyText : '--请选择--',
						anchor : '75%',
						store : [[null, '全部'], ['W', '白膜'], ['Y', '返修']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.produceFlag.reset();
							}
						}
					}, {
						xtype : 'componentworkercombobox',
						hiddenName : 'condition/workerId',
						anchor : '75%',
						fieldLabel : '操作工'
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '75%',
						fieldLabel : '订单号'
					}, {

						xtype : 'textfield',
						name : 'condition/tumoBatchNoStr',
						anchor : '75%',
						fieldLabel : '膜片批次%-%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '75%',
						fieldLabel : '元件序号'
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					rescode : '10002661',
					scope : this,
					iconCls : 'icon-application_excel',
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
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			id : 'produce-raosimgr-list',
			tbar : [{
						text : '录入',
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.raosi.deleteQijian.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '元件序号',
						dataIndex : 'batchNo'
					}, {
						header : '生产标志',
						dataIndex : 'produceFlagName'
					}, {
						header : '生产线',
						dataIndex : 'lineCode'
					}, {
						header : '订单号',
						dataIndex : 'orderNo'
					}, {
						header : '元件型号',
						dataIndex : 'prodSpecName'
					}, {
						header : '生产时间',
						dataIndex : 'produceDate'
					}, {
						header : '班组',
						dataIndex : 'teamName'
					}, {
						header : '操作工',
						dataIndex : 'workerName'
					}, {
						header : '备注',
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.raosi.queryRecordsByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'recordId'
						}, {
							name : 'batchNo'
						}, {
							name : 'lineId'
						}, {
							name : 'produceDt'
						}, {
							name : 'teamId'
						}, {
							name : 'workerId'
						}, {
							name : 'createDt'
						}, {
							name : 'changeDt'
						}, {
							name : 'creatorId'
						}, {
							name : 'changerId'
						}, {
							name : 'remark'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'produceFlag'
						}, {
							name : 'orderNo'
						}, {
							name : 'juanmoBatchId'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'prodSpecArea'
						}, {
							name : 'prodSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'produceFlagName'
						}, {
							name : 'produceDate'
						}, {
							name : 'teamName'
						}, {
							name : 'workerName'
						}, {
							name : 'lineCode'
						}, {
							name : 'cdmBatchStr'
						}, {
							name : 'tumoBatchStr'
						}]
			})
		})
	}

	this.initRaosiAddWindow = function() {
		var _this = this;
		this.raosiAddWindow = this.raosiAddWindow || new Ext.fn.FormWindow({
			title : '绕丝记录-录入',
			height : 600,
			width : 800,
			id : 'produce-raosiaddwindow',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.qinsen.raosi.createRecord.biz.ext',
				successFn : function(i, r) {
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										// _this.qijianAddWindow.hide();
									}
								})
					} else {
						_this.listPanel.store.baseParams = _this.queryPanel
								.getForm().getValues();
						_this.listPanel.store.load();
						// _this.raosiAddWindow.hide();
						_this.raosiAddWindow.batchNo.reset();
						_this.raosiAddWindow.produceDt.setValue(new Date());
						_this.raosiAddWindow.remark.reset();
						_this.raosiAddWindow.batchNo.focus();
						var loadMarsk = new Ext.LoadMask(
								'produce-raosiaddwindow', {
									msg : '已提交，为防止重复录入，10秒内不可操作',
									removeMask : true
									// 完成后删除
							});
						loadMarsk.show();

						var task = setTimeout(function() {

									if (loadMarsk) {
										loadMarsk.hide();
									}
								}, 10000);

					}
				},

				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							anchor : '95%',
							ref : '../../batchNo',
							style : '{font-weight:bold;}',
							allowBlank : false,
							fieldLabel : '元件序号',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.saveRecInfo();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码或手工录入后按回车</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {

							xtype : 'combo',
							fieldLabel : '生产标志',
							ref : '../../produceFlag',
							hiddenName : 'entity/produceFlag',
							emptyText : '--请选择--',
							colspan : 1,
							allowBlank : false,
							anchor : '90%%',
							store : [['W', '白膜'], ['R', '返修']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.raosiAddWindow.produceFlag.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							anchor : '90%',
							ref : '../../produceDt',
							name : 'entity/produceDt',
							allowBlank : false,
							fieldLabel : '生产时间',
							value : new Date()
						}, {
							xtype : 'linecombobox',
							prodTacheId : 104,
							ref : '../../lineId',
							hiddenName : 'entity/lineId',
							dataIndex : 'lineId',
							allowBlank : false,
							anchor : '90%',
							fieldLabel : '生产线 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'tacheteamcombobox',
							tacheCode : 'RS',
							name : 'entity/teamId',
							dataIndex : 'teamId',
							dataIndex : 'teamId',
							fieldLabel : '班组',
							hiddenName : 'entity/teamId',
							ref : '../../teamId',
							allowBlank : false,
							anchor : '90%',
							colspan : 1
						}, {
							ref : '../../workerName',
							xtype : 'displayfield',
							fieldLabel : '操作工',
							value : nowStaffName
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/remark',
							ref : '../../remark',
							xtype : 'textarea',
							dataIndex : 'remark',
							fieldLabel : '备注',
							colspan : 2,
							anchor : '95%',
							allowBlank : true
						}, {
							name : 'entity/workerId',
							value : nowStaffId,
							xtype : 'hidden'
						}]
			}]
		})
	}

	this.initRaosiEditWindow = function() {
		var _this = this;
		this.raosiEditWindow = this.raosiEditWindow || new Ext.fn.FormWindow({
					title : '绕丝记录-修改',
					height : 600,
					width : 800,
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [{
						xtype : 'editpanel',
						pgrid : this.listPanel,
						columns : 2,
						saveUrl : 'com.keensen.ump.qinsen.raosi.modiRecord.biz.ext',
						loadUrl : 'com.keensen.ump.qinsen.raosi.expandRaosi.biz.ext',
						successFn : function(i, r) {
							if (r.err != '0') {
								Ext.Msg.show({
											width : 400,
											title : "操作提示",
											msg : r.msg,
											icon : Ext.Msg.WARNING,
											buttons : Ext.Msg.OK,
											fn : function() {
												// _this.qijianAddWindow.hide();
											}
										})
							} else {
								_this.listPanel.store.baseParams = _this.queryPanel
										.getForm().getValues();
								_this.listPanel.store.load();
								_this.raosiEditWindow.hide();

							}
						},

						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'datetimefield',
									format : "Y-m-d H:i:00",
									dataIndex : 'produceDt',
									anchor : '90%',
									ref : '../../produceDt',
									name : 'entity/produceDt',
									allowBlank : false,
									fieldLabel : '生产时间',
									value : new Date()
								}, {
									xtype : 'linecombobox',
									prodTacheId : 104,
									ref : '../../lineId',
									hiddenName : 'entity/lineId',
									dataIndex : 'lineId',
									allowBlank : false,
									anchor : '90%',
									fieldLabel : '生产线 '
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '生产标志',
									ref : '../../produceFlag',
									dataIndex : 'produceFlag',
									hiddenName : 'entity/produceFlag',
									emptyText : '--请选择--',
									colspan : 1,
									allowBlank : false,
									anchor : '90%%',
									store : [['W', '白膜'], ['R', '返修']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.raosiAddWindow.produceFlag
													.reset();
										}
									}
								}, {
									xtype : 'textfield',
									name : 'entity/batchNo',									
									dataIndex : 'batchNo',
									anchor : '90%',
									ref : '../../batchNo',
									style : '{font-weight:bold;}',
									allowBlank : false,
									fieldLabel : '元件序号',
									colspan : 1,
									listeners : {
										scope : this,
										specialkey : function(C, D) {
											if (D.getKey() == Ext.EventObject.ENTER) {
												this.saveRecInfo();

											}

										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'tacheteamcombobox',
									tacheCode : 'RS',
									name : 'entity/teamId',
									dataIndex : 'teamId',
									fieldLabel : '班组',
									hiddenName : 'entity/teamId',
									ref : '../../teamId',
									allowBlank : false,
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'componentworkercombobox',
									dataIndex : 'workerId',
									hiddenName : 'entity/workerId',
									anchor : '90%',
									fieldLabel : '操作工'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/remark',
									ref : '../../remark',
									xtype : 'textarea',
									dataIndex : 'remark',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '95%',
									allowBlank : true
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									xtype : 'hidden'
								}]
					}]
				})
	}

}