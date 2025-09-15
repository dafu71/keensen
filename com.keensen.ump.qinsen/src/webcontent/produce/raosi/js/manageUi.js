com.keensen.ump.qinsen.produce.raosiMgr = function() {
	this.initPanel = function() {

		this.lineId = null;
		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initRaosiAddWindow();
		this.initRaosiEditWindow();

		this.initChooseSingleOrderWindow();
		
		this.initProduceCountWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'raosimgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.prodTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['绕丝8寸', '绕丝8寸'], ['绕丝4寸', '绕丝4寸'], 
					['绕丝4042', '绕丝4042'], ['绕丝SW-8寸', '绕丝SW-8寸'],
					['绕丝SW-4寸', '绕丝SW-4寸'],['绕丝2521', '绕丝2521'],['绕丝4021', '绕丝4021']]
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
						anchor : '95%',
						// allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceEndDate',
						fieldLabel : '至',
						colspan : 1,
						anchor : '95%',
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '104',
						hiddenName : 'condition/lineId',
						anchor : '95%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						anchor : '95%',
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
						anchor : '95%',
						store : [[null, '全部'], ['W', '白膜'], ['R', '返修'], ['C', '返修重绕'], ['F', '返修覆盖']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.produceFlag.reset();
							}
						}
					}, {
						xtype : 'componentworkercombobox',
						hiddenName : 'condition/workerId',
						anchor : '95%',
						fieldLabel : '操作工'
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '95%',
						fieldLabel : '订单号'
					}, {

						xtype : 'textfield',
						name : 'condition/tumoBatchNoStr',
						anchor : '95%',
						fieldLabel : '膜片批次%-%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '95%',
						fieldLabel : '扫码元件序号'
					}, {
						xtype : 'textfield',
						name : 'condition/qjBatchNo',
						anchor : '95%',
						fieldLabel : '当前元件序号'
					}, {

							xtype : 'combo',
							mode : 'local',
							fieldLabel : '生产类型',
							ref : '../prodType',
							hiddenName : 'condition/prodType',
							emptyText : '--请选择--',
							colspan : 1,
							//allowBlank : false,
							anchor : '95%%',
							store : _this.prodTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.queryPanel.prodType.reset();
								}
							}
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
			singleSelect : false
				// ,
				// header : ''
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
					}, '-', {
						text : '产量统计',
						scope : this,
						hidden:true,
						iconCls : 'icon-application_form_magnify',
						handler : this.onQueryProduceCount
					}, '->', {
						text : '批量改订单',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : modifyOrderNoFlag != 1,
						handler : this.onModiOrder
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.raosi.deleteQijian.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '扫码元件序号',
						dataIndex : 'batchNo'
					}, {
						header : '当前元件序号',
						dataIndex : 'qjBatchNo'
					}, {
						header : '生产标志',
						dataIndex : 'produceFlagName'
					}, {
						header : '生产类型',
						dataIndex : 'prodType'
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
						}, {
							name : 'qjBatchId'
						}, {
							name : 'prodType'
						}, {
							name : 'qjBatchNo'
						}]
			})
		})
	}

	this.initRaosiAddWindow = function() {
		var _this = this;
		
		var audio; // 预定义音频对象
		var audio2; // 预定义音频对象
		
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
				columns : 6,
				saveUrl : 'com.keensen.ump.qinsen.raosi.createRecord5.biz.ext',
				successFn : function(i, r) {
					if (r.err != '0') {
						
						_this.raosiAddWindow.batchNo.setValue('');
						_this.raosiAddWindow.batchNo.focus();
						if (!audio) {
                			audio = new Audio('qinsen/produce/raosi/fail.mp3');
            			}
										
						audio.play().catch(error => console.log('播放失败:', error));
						 				
						/*
						 * Ext.Msg.show({ width : 400, title : "操作提示", msg :
						 * r.msg, icon : Ext.Msg.WARNING, buttons : Ext.Msg.OK,
						 * fn : function() {
						 * _this.raosiAddWindow.batchNo.setValue('');
						 * _this.raosiAddWindow.batchNo.focus(); if (!audio) {
						 * audio = new Audio('qinsen/produce/raosi/fail.mp3'); }
						 * 
						 * audio.play().catch(error => console.log('播放失败:',
						 * error)); // _this.qijianAddWindow.hide(); } })
						 */
					} else {
						_this.listPanel.store.baseParams = _this.queryPanel
								.getForm().getValues();
						_this.listPanel.store.load();
						if (!audio2) {
							audio2 = new Audio('qinsen/produce/raosi/success.mp3');
            			}
						 audio2.play().catch(error => console.log('播放失败:', error));
						// _this.raosiAddWindow.hide();
						_this.raosiAddWindow.batchNo.setValue('');
						_this.raosiAddWindow.produceDt.setValue(new Date());
						_this.raosiAddWindow.remark.reset();
						_this.raosiAddWindow.orderType.setValue('');
						_this.raosiAddWindow.materSpecName2.setValue('');
						_this.raosiAddWindow.materSpecName.setValue('');
						_this.raosiAddWindow.orderAmount.setValue('');
						_this.raosiAddWindow.qjAmount.setValue('');
						_this.raosiAddWindow.tape.setValue('');
						_this.raosiAddWindow.lid.setValue('');
						_this.raosiAddWindow.snRegular.setValue('');
						_this.raosiAddWindow.makeLabel.setValue('');
						_this.raosiAddWindow.labelDouble.setValue('');
						_this.raosiAddWindow.labelDrawingCode.setValue('');
						_this.raosiAddWindow.batchNo.setValue('');
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							anchor : '95%',
							ref : '../../batchNo',
							style : '{font-weight:bold;}',
							allowBlank : false,
							fieldLabel : '卷膜/元件序号',
							colspan : 6,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										// this.saveRecInfo();
										this.onScan();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码或手工录入后按回车</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 6
						}, {

							xtype : 'combo',
							fieldLabel : '生产标志',
							ref : '../../produceFlag',
							hiddenName : 'entity/produceFlag',
							emptyText : '--请选择--',
							colspan : 3,
							allowBlank : false,
							anchor : '90%%',
							store : [['W', '白膜'], ['C', '返修重绕'], ['F', '返修覆盖']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.raosiAddWindow.produceFlag.reset();
								}
							}
						}, {

							xtype : 'combo',
							mode : 'local',
							fieldLabel : '生产类型',
							ref : '../../prodType',
							hiddenName : 'entity/prodType',
							emptyText : '--请选择--',
							colspan : 3,
							allowBlank : false,
							anchor : '90%%',
							store : _this.prodTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.raosiAddWindow.prodType.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							anchor : '90%',
							ref : '../../produceDt',
							name : 'entity/produceDt',
							allowBlank : false,
							fieldLabel : '生产时间',
							value : new Date(),
							colspan : 3
						}, {
							xtype : 'linecombobox',
							prodTacheId : 104,
							ref : '../../lineId',
							hiddenName : 'entity/lineId',
							dataIndex : 'lineId',
							readOnly:true,
							allowBlank : false,
							anchor : '90%',
							fieldLabel : '生产线 ',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '10',
							colspan : 6
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
							colspan : 3
						}, {
							ref : '../../workerName',
							xtype : 'displayfield',
							fieldLabel : '操作工',
							value : nowStaffName,
							colspan : 3
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
							colspan : 6,
							anchor : '95%',
							allowBlank : true
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">作业信息</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							readOnly : true,
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单类型',
							ref : '../../orderType',
							readOnly : true,
							dataIndex : 'orderType',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单下达型号',
							ref : '../../materSpecName2',
							readOnly : true,
							dataIndex : 'materSpecName2',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							labelSeparator : '',// 去掉冒号
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '生产规格型号',
							ref : '../../materSpecName',
							readOnly : true,
							dataIndex : 'materSpecName',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单数量',
							ref : '../../orderAmount',
							readOnly : true,
							dataIndex : 'orderAmount',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '气检数量',
							ref : '../../qjAmount',
							readOnly : true,
							dataIndex : 'qjAmount',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../displayfield1',
							height : 5,
							colspan : 4
						}, {
							xtype : 'displayfield',
							ref : '../../prodRemark',
							dataIndex : 'prodRemark',
							readOnly : true,
							anchor : '95%',
							fieldLabel : '订单生产备注',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">贴标信息</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '卷膜胶带',
							ref : '../../tape',
							readOnly : true,
							dataIndex : 'tape',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '端盖',
							ref : '../../lid',
							readOnly : true,
							dataIndex : 'lid',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '序列号是否固定',
							ref : '../../snRegular',
							readOnly : true,
							dataIndex : 'snRegular',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							labelSeparator : '',// 去掉冒号
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '标签制作方式',
							ref : '../../makeLabel',
							readOnly : true,
							dataIndex : 'makeLabel',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '双标签',
							ref : '../../labelDouble',
							readOnly : true,
							dataIndex : 'labelDouble',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '标签图纸编号',
							ref : '../../labelDrawingCode',
							readOnly : true,
							dataIndex : 'labelDrawingCode',
							anchor : '85%',
							colspan : 2
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
									store : [['W', '白膜'], ['C', '返修重绕'], ['F', '返修覆盖']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.raosiEditWindow.produceFlag
													.reset();
										}
									}
								}, {

							xtype : 'combo',
							mode : 'local',
							fieldLabel : '生产类型',
							ref : '../../prodType',
							dataIndex : 'prodType',
							hiddenName : 'entity/prodType',
							emptyText : '--请选择--',
							colspan : 3,
							allowBlank : false,
							anchor : '90%%',
							store : _this.prodTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.raosiEditWindow.prodType.reset();
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
										// anchor : '95%',
										fieldLabel : '订单号'
									}, {
										xtype : 'textfield',
										name : 'condition/materSpecName',
										// anchor : '95%',
										fieldLabel : '规格型号 '
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										xtype : "dateregion",
										colspan : 1,
										// anchor : '95%',
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
	
	this.initProduceCountWindow = function() {

		var selModel4ProduceCount = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel4ProduceCount = this.listPanel4ProduceCount || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},			
			hsPage : true,
			selModel : selModel4ProduceCount,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel4ProduceCount, {
						dataIndex : 'workerName',
						header : '操作工'
					}, {
						dataIndex : 'prodType',
						header : '生产类型'
					}, {
						dataIndex : 'amount',
						header : '生产数量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.producecount.queryRaosiCountByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'workerName'
						}, {
							name : 'prodType'
						}, {
							name : 'amount'
						}]
			})
		})

		this.queryPanel4ProduceCount = this.queryPanel4ProduceCount || new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceBeginDate',
						fieldLabel : '生产时间',
						colspan : 1,
						anchor : '95%',
						// allowBlank : false,
						editable : true,
						allowBlank:false,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceEndDate',
						fieldLabel : '至',
						colspan : 1,
						anchor : '95%',
						allowBlank:false,
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'componentworkercombobox',
						hiddenName : 'condition/workerId',
						// allowBlank:false,
						anchor : '95%',
						fieldLabel : '操作工'
					}]
				});

		 this.queryPanel4ProduceCount.addButton({
			 text : "导出",
			 scope : this,
			 iconCls : 'icon-application_excel',
			 handler : this.exportProduceCountExcel
		 });

		this.queryPanel4ProduceCount.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.produceCountWindow.hide();
					}

				});

		this.produceCountWindow = this.produceCountWindow
				|| new Ext.Window({
							title : '产量统计',
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
							items : [this.queryPanel4ProduceCount, this.listPanel4ProduceCount]

						});
	}
}