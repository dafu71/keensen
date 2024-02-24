com.keensen.ump.qinsen.produce.qijianMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initDetailPanel();

		this.initQiJianAddWindow();
		this.initQiJianEditWindow();

		this.gridPanel = this.gridPanel || new Ext.Panel({
					layout : 'border',
					collapsible : false,
					titleCollapse : false,
					items : [this.listPanel, this.detailGrid]
				});

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'qijianmgr',
					panels : [this.queryPanel, this.gridPanel]
				});
		return this.lay;
	}

	this.initQueryPanel = function() {
		var _this = this;

		this.ngReasonIdStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.qinsen.inst.getPropOptionByPropCode.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {
				'condition/sysCode' : 'PQMS',
				'condition/propCode' : 'QJ_NG_REASON'
			},
			fields : [{
						name : 'propValueId'
					}, {
						name : 'propValueCode'
					}, {
						name : 'propValueName'
					}, {
						name : 'isDefault'
					}]
		})

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 165,
					columns : 4,
					border : true,
					collapsible : false,
					titleCollapse : false,
					// title : '【卷膜记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceDtStart',
						fieldLabel : '生产时间',
						colspan : 1,
						anchor : '75%',
						allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceDtEnd',
						fieldLabel : '至',
						colspan : 1,
						anchor : '75%',
						editable : true,
						format : 'Y-m-d H:i',
						allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '103',
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
						fieldLabel : '泄压合格',
						ref : '../isQualified',
						hiddenName : 'condition/isQualified',
						emptyText : '--请选择--',
						anchor : '75%',
						store : [[null, '全部'], ['Y', '合格'], ['N', '不合格']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.isQualified.reset();
							}
						}
					}, {

						xtype : 'combo',
						fieldLabel : '质检判定',
						ref : '../judgeFlag',
						hiddenName : 'condition/judgeFlag',
						emptyText : '--请选择--',
						anchor : '75%',
						store : [[null, '全部'], ['Y', '合格'], ['N', '不合格']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.judgeFlag.reset();
							}
						}
					}, {
						ref : '../ngReasonId',
						anchor : '75%',
						xtype : 'combobox',
						hiddenName : 'condition/ngReasonId',
						fieldLabel : '不良类型',
						triggerAction : 'all',
						store : this.ngReasonIdStore,
						valueField : 'propValueId',
						displayField : 'propValueName',
						addAllSelector : true,
						editable : false,
						queryMode : 'local',
						emptyText : '--请选择--',
						allowBlank : true,
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'componentworkercombobox',
						hiddenName : 'condition/workerId',
						anchor : '75%',
						fieldLabel : '操作工'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '75%',
						fieldLabel : '订单号'
					}, {
						xtype : 'textfield',
						name : 'condition/dimoBatchNo',
						anchor : '75%',
						fieldLabel : '底膜批次'
					}, {

						xtype : 'textfield',
						name : 'condition/tumoBatchNoStr',
						anchor : '75%',
						fieldLabel : '膜片批次%-%'
					}, {

						xtype : 'textfield',
						name : 'condition/cdmBatchNo',
						anchor : '75%',
						fieldLabel : '叠膜栈板号'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {

						xtype : 'textfield',
						name : 'condition/juanMoBatchNo',
						anchor : '75%',
						fieldLabel : '卷膜序号'
					}, {

						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '75%',
						fieldLabel : '元件序号'
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({

			region : 'center',
			hsPage : true,
			id : 'produce-qijianmgr-list',
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
					}, '->', {
						text : '换标',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.changeTag
					}, '-', {
						text : '补标',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.makeupTag
					}, '-', {
						text : '质检',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.judgeRecord
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.qijian.deleteQijian.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '元件序号',
						width : 120,
						dataIndex : 'batchNo'
					}, {
						header : '卷膜序号',
						width : 120,
						dataIndex : 'juanmoBatchNo'
					}, {
						header : '元件型号',
						width : 120,
						dataIndex : 'prodSpecName'
					}, {
						header : '检测气压',
						width : 80,
						dataIndex : 'presure'
					}, {
						header : '泄压值',
						width : 60,
						dataIndex : 'checkResult'
					}, {
						header : '泄压合格',
						width : 70,
						dataIndex : 'isQualifiedName'
					}, {
						header : '首/复检',
						width : 60,
						dataIndex : 'isFirstName'
					}, {
						header : '生产时间',
						width : 110,
						dataIndex : 'produceDate'
					}, {
						header : '不良类型',
						width : 80,
						dataIndex : 'ngReasonName'
					}, {
						header : '质检合格',
						width : 80,
						dataIndex : 'judgeFlagName'
					}, {
						header : '不良原因',
						width : 120,
						dataIndex : 'ngItem'
					}, {
						header : '质检员',
						width : 80,
						dataIndex : 'judgerName'
					}, {
						header : '判定时间',
						width : 110,
						dataIndex : 'judgeDate'
					}, {
						header : '膜片长度',
						width : 70,
						dataIndex : 'juanmoLength'
					}, {
						header : '膜片批次',
						width : 190,
						dataIndex : 'tumoBatchStr'
					}, {
						header : '叠膜栈板号',
						width : 210,
						dataIndex : 'cdmBatchStr'
					}, {
						header : '底膜批次',
						width : 190,
						dataIndex : 'dimoBatchStr'
					}, {
						header : '订单号',
						width : 120,
						dataIndex : 'orderNo'
					}, {
						header : '生产线',
						width : 100,
						dataIndex : 'lineCode'
					}, {
						header : '班组',
						width : 70,
						dataIndex : 'teamName'
					}, {
						header : '操作工',
						width : 100,
						dataIndex : 'workerName'
					}, {
						header : '补换标者',
						width : 100,
						dataIndex : 'lastTagWorker'
					}, {
						header : '补换标时间',
						width : 110,
						dataIndex : 'lastTagDate'
					}, {
						header : '卷膜机台',
						width : 80,
						dataIndex : 'jmLineCode'
					}, {
						header : '卷膜工',
						width : 100,
						dataIndex : 'jmWorkerName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.qijian.queryRecordsByPage.biz.ext',
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
							name : 'isTrial'
						}, {
							name : 'recordId'
						}, {
							name : 'juanmoBatchId'
						}, {
							name : 'batchNo'
						}, {
							name : 'lineId'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'presure'
						}, {
							name : 'checkResult'
						}, {
							name : 'isQualified'
						}, {
							name : 'isFirst'
						}, {
							name : 'stdStr'
						}, {
							name : 'teamId'
						}, {
							name : 'workerId'
						}, {
							name : 'ngReasonId'
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
							name : 'judgeFlag'
						}, {
							name : 'ngItem'
						}, {
							name : 'judgerId'
						}, {
							name : 'judgeDt'
						}, {
							name : 'jmLineId'
						}, {
							name : 'jmWorkerId'
						}, {
							name : 'blankingSize'
						}, {
							name : 'pageWidth'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'prodSpecArea'
						}, {
							name : 'prodSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'isQualifiedName'
						}, {
							name : 'isFirstName'
						}, {
							name : 'judgeFlagName'
						}, {
							name : 'produceDate'
						}, {
							name : 'judgeDate'
						}, {
							name : 'ngReasonCode'
						}, {
							name : 'ngReasonName'
						}, {
							name : 'teamName'
						}, {
							name : 'workerName'
						}, {
							name : 'judgerName'
						}, {
							name : 'lineCode'
						}, {
							name : 'jmLineCode'
						}, {
							name : 'jmWorkerName'
						}, {
							name : 'cdmBatchStr'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'dimoBatchStr'
						}, {
							name : 'juanmoLength'
						}, {
							name : 'lastTagDate'
						}, {
							name : 'lastTagWorker'
						}]
			})
		})
	}

	this.initDetailPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.detailGrid = new Ext.fn.ListPanel({
			title : '【补换标历史】',
			region : 'south',
			height : 150,
			collapsible : true,
			titleCollapse : true,
			hsPage : false,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.modiDetailRecord
					}],
			selModel : selModel,
			delUrl : '2.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '动作',
						width : 50,
						dataIndex : 'flagName'
					}, {
						header : '旧元件序号',
						width : 120,
						dataIndex : 'oldBatchNo'
					}, {
						header : '旧型号',
						width : 90,
						dataIndex : 'oldSpecName'
					}, {
						header : '新元件序号',
						width : 120,
						dataIndex : 'newBatchNo'
					}, {
						header : '新型号',
						width : 90,
						dataIndex : 'newspecName'
					}, {
						header : '生产日期',
						width : 100,
						dataIndex : 'produceDate'
					}, {
						header : '记录时间',
						width : 140,
						dataIndex : 'createDate'
					}, {
						header : '操作工',
						width : 120,
						dataIndex : 'workerName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.qijian.queryChangeRecords.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {},
				fields : [{
							name : 'recordId'
						}, {
							name : 'juanmoBatchId'
						}, {
							name : 'oldBatchNo'
						}, {
							name : 'newBatchNo'
						}, {
							name : 'oldSpecId'
						}, {
							name : 'newSpecId'
						}, {
							name : 'workerId'
						}, {
							name : 'produceDt'
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
							name : 'juanmoBatchNo'
						}, {
							name : 'oldSpecCode'
						}, {
							name : 'oldSpecName'
						}, {
							name : 'newSpecCode'
						}, {
							name : 'newSpecName'
						}, {
							name : 'produceDate'
						}, {
							name : 'workerName'
						}, {
							name : 'flagName'
						}, {
							name : 'createDate'
						}, {
							name : 'creatorName'
						}]
			})
		})
	}

	this.initQiJianAddWindow = function() {
		var _this = this;
		this.qijianAddWindow = this.qijianAddWindow || new Ext.fn.FormWindow({
			title : '气检记录-录入',
			height : 600,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.qinsen.qijian.saveRecord.biz.ext',
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
						_this.listPanel.store.load();
						_this.qijianAddWindow.hide();

					}
				},

				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							anchor : '95%',
							ref : '../../juanMoBatchNo',
							style : '{font-weight:bold;}',
							allowBlank : false,
							name : 'juanMoBatchNo',
							fieldLabel : '卷膜序号',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.dealJuanMoBatchNo();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							ref : '../../presure',
							name : 'entity/presure',
							fieldLabel : '检测气压',
							allowBlank : false,
							xtype : 'numberfield',
							minValue : 0,
							anchor : '90%'
						}, {
							ref : '../../checkResult',
							name : 'entity/checkResult',
							fieldLabel : '泄压值',
							allowBlank : false,
							xtype : 'numberfield',
							anchor : '90%',
							minValue : 0,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.judge();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">录入后按回车即自动判定</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							ref : '../../batchNo',
							fieldLabel : '元件序号',
							name : 'entity/batchNo',
							allowBlank : true,
							anchor : '90%'
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
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'linecombobox',
							prodTacheId : 103,
							ref : '../../lineId',
							hiddenName : 'entity/lineId',
							dataIndex : 'lineId',
							allowBlank : false,
							anchor : '90%',
							fieldLabel : '生产线 '
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							allowBlank : false,
							ref : '../../orderNo',
							anchor : '90%',
							fieldLabel : '订单号'
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							ref : '../../prodSpecId',
							anchor : '90%',
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
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../presure',
							name : 'entity/presure',
							dataIndex : 'presure',
							fieldLabel : '检测气压',
							allowBlank : false,
							xtype : 'numberfield',
							minValue : 0,
							anchor : '90%'
						}, {
							ref : '../../checkResult',
							name : 'entity/checkResult',
							dataIndex : 'checkResult',
							fieldLabel : '泄压值',
							allowBlank : false,
							xtype : 'numberfield',
							anchor : '90%',
							minValue : 0,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.judge();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'tacheteamcombobox',
							tacheCode : 'QJ',
							name : 'entity/teamId',
							dataIndex : 'teamId',
							dataIndex : 'teamId',
							fieldLabel : '班组',
							hiddenName : 'entity/teamId',
							ref : '../../teamId',
							allowBlank : false,
							anchor : '85%',
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

							xtype : 'combo',
							fieldLabel : '首/复检',
							ref : '../../isFirst',
							hiddenName : 'entity/isFirst',
							emptyText : '--请选择--',
							allowBlank : false,
							readOnly : true,
							anchor : '90%',
							store : [['', ''], ['Y', '首检'], ['N', '复检']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.qijianAddWindow.isFirst.reset();
								}
							}
						}, {

							xtype : 'combo',
							fieldLabel : '判定',
							ref : '../../isQualified',
							hiddenName : 'entity/isQualified',
							emptyText : '--请选择--',
							allowBlank : false,
							readOnly : true,
							anchor : '90%',
							store : [['', '未判'], ['Y', '合格'], ['N', '不合格']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.qijianAddWindow.isQualified.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../ngReasonId',
							hiddenName : 'entity/ngReasonId',
							anchor : '90%',
							xtype : 'combobox',
							fieldLabel : '不良类型',
							triggerAction : 'all',
							store : this.ngReasonIdStore,
							valueField : 'propValueId',
							displayField : 'propValueName',
							addAllSelector : true,
							editable : false,
							queryMode : 'local',
							emptyText : '--请选择--',
							allowBlank : true,
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/remark',
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
						}, {
							name : 'entity/juanmoBatchId',
							ref : '../../juanmoBatchId',
							xtype : 'hidden'
						}, {
							name : 'entity/recordId',
							ref : '../../recordId',// 复检时保存原气检记录ID
							xtype : 'hidden'
						}]
			}]
		})
	}

	this.initQiJianEditWindow = function() {
		var _this = this;
		this.qijianEditWindow = this.qijianEditWindow
				|| new Ext.fn.FormWindow({
					title : '气检记录-修改',
					height : 600,
					width : 800,
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						columns : 2,
						saveUrl : 'com.keensen.ump.qinsen.qijian.saveRecord.biz.ext',
						loadUrl : 'com.keensen.ump.qinsen.qijian.expandQijian.biz.ext',
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
								_this.listPanel.store.load();
								_this.qijianEditWindow.hide();

							}
						},

						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'datetimefield',
									format : "Y-m-d H:i:00",
									anchor : '90%',
									ref : '../../produceDt',
									name : 'entity/produceDt',
									dataIndex : 'produceDt',
									allowBlank : false,
									fieldLabel : '生产时间'
								}, {
									xtype : 'linecombobox',
									prodTacheId : 103,
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
									xtype : 'textfield',
									name : 'entity/orderNo',
									dataIndex : 'orderNo',
									allowBlank : false,
									ref : '../../orderNo',
									anchor : '90%',
									fieldLabel : '订单号'
								}, {
									xtype : 'prodspeccombobox',
									hiddenName : 'entity/prodSpecId',
									ref : '../../prodSpecId',
									dataIndex : 'prodSpecId',
									anchor : '90%',
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
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'tacheteamcombobox',
									tacheCode : 'QJ',
									name : 'entity/teamId',
									dataIndex : 'teamId',
									fieldLabel : '班组',
									hiddenName : 'entity/teamId',
									ref : '../../teamId',
									allowBlank : false,
									anchor : '85%',
									colspan : 1
								}, {
									xtype : 'componentworkercombobox',
									dataIndex : 'workerId',
									hiddenName : 'entity/workerId',
									anchor : '85%',
									fieldLabel : '操作工'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '首/复检',
									ref : '../../isFirst',
									dataIndex : 'isFirst',
									hiddenName : 'entity/isFirst',
									emptyText : '--请选择--',
									allowBlank : false,
									//readOnly : true,
									anchor : '90%',
									store : [['', ''], ['Y', '首检'], ['N', '复检']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.qijianAddWindow.isFirst
													.reset();
										}
									}
								}, {

									xtype : 'combo',
									fieldLabel : '判定',
									ref : '../../isQualified',
									dataIndex : 'isQualified',
									hiddenName : 'entity/isQualified',
									emptyText : '--请选择--',
									allowBlank : false,
									//readOnly : true,
									anchor : '90%',
									store : [['', '未判'], ['Y', '合格'],
											['N', '不合格']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.qijianAddWindow.isQualified
													.reset();
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									ref : '../../ngReasonId',
									hiddenName : 'entity/ngReasonId',
									dataIndex : 'ngReasonId',
									anchor : '90%',
									xtype : 'combobox',
									fieldLabel : '不良类型',
									triggerAction : 'all',
									store : this.ngReasonIdStore,
									valueField : 'propValueId',
									displayField : 'propValueName',
									addAllSelector : true,
									editable : false,
									queryMode : 'local',
									emptyText : '--请选择--',
									allowBlank : true,
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/remark',
									xtype : 'textarea',
									dataIndex : 'remark',
									
									fieldLabel : '备注',
									colspan : 2,
									anchor : '95%',
									allowBlank : true
								}, {
									name : 'entity/juanmoBatchId',
									dataIndex : 'juanmoBatchId',
									ref : '../../juanmoBatchId',
									xtype : 'hidden'
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									ref : '../../recordId',
									xtype : 'hidden'
								}]
					}]
				})
	}
}