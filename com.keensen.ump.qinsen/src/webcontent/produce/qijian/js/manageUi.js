com.keensen.ump.qinsen.produce.qijianMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initDetailPanel();

		this.initQiJianAddWindow();
		this.initQiJianEditWindow();

		this.initChangeTagWindow();
		this.initMakeupTagWindow();

		this.initQjChangeEditWindow();
		this.initQiJianJudgeWindow();

		this.initRemindGyyWindow();
		this.initRemindMonitorWindow();

		this.initViewDutyWindow();

		this.initEditWindow4Gyy();

		this.opt = '';

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

		this.ngItemStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.qinsen.qijian.qryNgItemOption.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : '',
					baseParams : {},
					fields : [{
								name : 'ngItem'
							}]
				})

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 165,
					columns : 16,
					border : true,
					collapsible : false,
					titleCollapse : false,
					// title : '【卷膜记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceDtStart',
						fieldLabel : '生产时间',
						colspan : 4,
						anchor : '75%',
						// allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -3)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceDtEnd',
						fieldLabel : '至',
						colspan : 4,
						anchor : '75%',
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '103',
						colspan : 4,
						hiddenName : 'condition/lineId',
						anchor : '75%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						colspan : 4,
						anchor : '75%',
						fieldLabel : '元件型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 16
					}, {

						xtype : 'combo',
						fieldLabel : '泄压合格',
						ref : '../isQualified',
						hiddenName : 'condition/isQualified',
						emptyText : '--请选择--',
						anchor : '75%',
						colspan : 4,
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
						colspan : 4,
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
						colspan : 4,
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
						colspan : 4,
						fieldLabel : '操作工'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 16
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '75%',
						colspan : 4,
						fieldLabel : '订单号'
					}, {
						xtype : 'textfield',
						name : 'condition/dimoBatchNo',
						anchor : '75%',
						colspan : 4,
						fieldLabel : '底膜批次'
					}, {

						xtype : 'textfield',
						name : 'condition/tumoBatchNoStr',
						anchor : '75%',
						colspan : 4,
						fieldLabel : '膜片批次%-%'
					}, {

						xtype : 'textfield',
						name : 'condition/cdmBatchNo',
						anchor : '75%',
						colspan : 4,
						fieldLabel : '叠膜栈板号'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 16
					}, {

						xtype : 'textfield',
						name : 'condition/juanMoBatchNoMin',
						anchor : '100%',
						colspan : 3,
						fieldLabel : '卷膜序号'
					}, {

						xtype : 'textfield',
						name : 'condition/juanMoBatchNoMax',
						anchor : '100%',
						colspan : 3,
						fieldLabel : '至'
					}, {

						xtype : 'textfield',
						name : 'condition/batchNoMin',
						anchor : '100%',
						colspan : 3,
						fieldLabel : '元件序号'
					}, {

						xtype : 'textfield',
						name : 'condition/batchNoMax',
						anchor : '100%',
						colspan : 3,
						fieldLabel : '至'
					}, {

						xtype : 'combo',
						fieldLabel : '干湿膜',
						ref : '../dryWet',
						hiddenName : 'condition/dryWet',
						emptyText : '--请选择--',
						anchor : '75%',
						colspan : 4,
						store : [[null, '全部'], ['干', '干'], ['湿', '湿']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.dryWet.reset();
							}
						}
					}/*
						 * , {
						 * 
						 * xtype : 'textfield', name :
						 * 'condition/juanMoBatchNo', anchor : '75%', fieldLabel :
						 * '卷膜序号' }, {
						 * 
						 * xtype : 'textfield', name : 'condition/batchNo',
						 * anchor : '75%', fieldLabel : '元件序号' }
						 */]
				});

		this.queryPanel.addButton({
					text : "导出",
					rescode : '10002661',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "领取任务",
					// rescode : '10002661',
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onDuty
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({

			region : 'center',
			enableHdMenu : true,
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
					}, '-', {
						text : '班长挑水测',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : monitorFlag != 1,
						handler : this.onMonitorRemark
					}, '-', {
						text : '水测员工接收',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : waterTestFlag != 1,
						handler : this.onWaterRemark
					}, '-', {
						text : '工艺员备注',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : gyyFlag != 1,
						handler : this.onRemark
					}, '-', {
						text : '班长确认工艺员意见',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : monitorFlag != 1,
						handler : this.onMonitorRemark2
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
					}, '-', {
						text : '批量改订单',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : modifyOrderNoFlag != 1,
						handler : this.modiOrder
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.qijian.deleteQijian.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '元件序号',
						sortable : true,
						width : 120,
						dataIndex : 'batchNo'
					}, {
						header : '卷膜序号',
						sortable : true,
						width : 120,
						dataIndex : 'juanmoBatchNo'
					}, {
						header : '元件型号',
						width : 120,
						dataIndex : 'prodSpecName',
						sortable : true
					}, {
						header : '车号',
						sortable : true,
						width : 120,
						dataIndex : 'trailer'
					}, {
						header : '干湿膜',
						width : 120,
						dataIndex : 'dryWet',
						sortable : true
					}, {
						header : '检测气压',
						width : 80,
						dataIndex : 'presure',
						sortable : true
					}, {
						header : '泄压值',
						sortable : true,
						width : 60,
						dataIndex : 'checkResult'
					}, {
						header : '泄压合格',
						width : 70,
						dataIndex : 'isQualifiedName',
						sortable : true
					}, {
						header : '首/复检',
						width : 60,
						dataIndex : 'isFirstName',
						sortable : true
					}, {
						header : '生产时间',
						sortable : true,
						width : 110,
						dataIndex : 'produceDate'
					}, {
						header : '不良类型',
						width : 80,
						dataIndex : 'ngReasonName',
						sortable : true
					}, {
						header : '质检合格',
						width : 80,
						dataIndex : 'judgeFlagName',
						sortable : true
					}, {
						dataIndex : 'gyyRemark',
						header : '工艺员备注',
						sortable : true
					}, {
						dataIndex : 'gyyConclusion',
						header : '工艺结论',
						sortable : true
					}, {
						dataIndex : 'gyySpecName',
						header : '处理型号',
						sortable : true
					}, {
						dataIndex : 'gyyRemarkTime',
						header : '工艺备注时间'
					}, {
						dataIndex : 'monitorRemark',
						header : '班长挑水测'
					}, {
						dataIndex : 'monitorRemarkTime',
						header : '班长安排<br>水测时间'
					}, {
						dataIndex : 'waterRemark',
						header : '水测员工接收'
					}, {
						dataIndex : 'waterRemarkTime',
						header : '水测员工<br>接收时间'
					}, {
						dataIndex : 'monitorRemark2',
						header : '班长确认<br>工艺员意见'
					}, {
						dataIndex : 'monitorRemarkTime2',
						header : '班长确认时间'
					}, {
						header : '不良原因',
						width : 120,
						dataIndex : 'ngItem',
						sortable : true
					}, {
						header : '质检员',
						width : 80,
						dataIndex : 'judgerName',
						sortable : true
					}, {
						header : '判定时间',
						width : 110,
						dataIndex : 'judgeDate',
						sortable : true
					}, {
						header : '上端直径',
						width : 70,
						dataIndex : 'diameter',
						sortable : true
					}, {
						header : '下端直径',
						width : 70,
						dataIndex : 'diameter2',
						sortable : true
					}, {
						header : '膜片长度',
						width : 70,
						dataIndex : 'juanmoLength',
						sortable : true
					}, {
						header : '膜片批次',
						sortable : true,
						width : 190,
						dataIndex : 'tumoBatchStr'
					}, {
						header : '叠膜栈板号',
						sortable : true,
						width : 210,
						dataIndex : 'cdmBatchStr'
					}, {
						header : '底膜批次',
						sortable : true,
						width : 190,
						dataIndex : 'dimoBatchStr'
					}, {
						header : '订单号',
						width : 120,
						dataIndex : 'orderNo',
						sortable : true
					}, {
						header : '生产线',
						width : 100,
						dataIndex : 'lineCode',
						sortable : true
					}, {
						header : '班组',
						width : 70,
						dataIndex : 'teamName',
						sortable : true
					}, {
						header : '操作工',
						width : 100,
						dataIndex : 'workerName',
						sortable : true
					}, {
						header : '补换标者',
						width : 100,
						dataIndex : 'lastTagWorker',
						sortable : true
					}, {
						header : '补换标时间',
						width : 110,
						dataIndex : 'lastTagDate',
						sortable : true
					}, {
						header : '卷膜机台',
						width : 80,
						dataIndex : 'jmLineCode',
						sortable : true
					}, {
						header : '卷膜工',
						width : 100,
						dataIndex : 'jmWorkerName',
						sortable : true
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark',
						sortable : true
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
						}, {
							name : 'gyyRemark'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}, {
							name : 'gyyRemarkTime'
						}, {
							name : 'gyyRemarkUserId'
						}, {
							name : 'gyyRemarkUserName'
						}, {
							name : 'monitorRemark'
						}, {
							name : 'monitorRemarkTime'
						}, {
							name : 'monitorRemarkUserId'
						}, {
							name : 'monitorRemarkUserName'
						}, {
							name : 'waterRemark'
						}, {
							name : 'waterRemarkTime'
						}, {
							name : 'waterRemarkUserId'
						}, {
							name : 'waterRemarkUserName'
						}, {
							name : 'monitorRemark2'
						}, {
							name : 'monitorRemarkTime2'
						}, {
							name : 'monitorRemarkUserId2'
						}, {
							name : 'monitorRemarkUserName2'
						}, {
							name : 'dryWet'
						}, {
							name : 'trailer'
						}, {
							name : 'gyyConclusion'
						}, {
							name : 'gyySpecId'
						}, {
							name : 'gyySpecName'
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
						dataIndex : 'newSpecName'
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
							xtype : 'displayfield',
							height : '5',
							colspan : 2
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
							xtype : 'textfield',
							name : 'entity/stdStr',
							readOnly : true,
							allowBlank : false,
							ref : '../../stdStr',
							anchor : '90%',
							fieldLabel : '气检标准'
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
									readOnly : true,
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
									// readOnly : true,
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
									// readOnly : true,
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

	this.initChangeTagWindow = function() {
		var _this = this;
		this.changeTagWindow = this.changeTagWindow || new Ext.fn.FormWindow({
			title : '气检记录-换标',
			height : 480,
			width : 600,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						columns : 1,
						saveUrl : 'com.keensen.ump.qinsen.qijian.changeTag.biz.ext',
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
								_this.changeTagWindow.hide();

							}
						},

						fields : [{
									xtype : 'displayfield',
									height : '5'
								}, {
									xtype : 'datetimefield',
									format : "Y-m-d",
									anchor : '90%',
									ref : '../../produceDt',
									name : 'entity/produceDt',
									allowBlank : false,
									fieldLabel : '换标日期',
									value : new Date()
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									ref : '../../oldBatchNo',
									fieldLabel : '旧元件序号',
									name : 'entity/oldBatchNo',
									allowBlank : false,
									anchor : '90%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'prodspeccombobox',
									hiddenName : 'entity/newSpecId',
									ref : '../../newSpecId',
									anchor : '90%',
									fieldLabel : '新元件型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									allowBlank : true,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									ref : '../../newBatchNo',
									fieldLabel : '新元件序号',
									name : 'entity/newBatchNo',
									allowBlank : false,
									anchor : '90%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									name : 'entity/remark',
									xtype : 'textarea',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '95%',
									allowBlank : true
								}, {
									name : 'entity/workerId',
									ref : '../../workerId',
									value : nowStaffId,
									xtype : 'hidden'
								}]
					}]
		})
	}

	this.initMakeupTagWindow = function() {
		var _this = this;
		this.makeupTagWindow = this.makeupTagWindow || new Ext.fn.FormWindow({
			title : '气检记录-补标',
			height : 480,
			width : 600,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						columns : 1,
						saveUrl : 'com.keensen.ump.qinsen.qijian.makeupTag.biz.ext',
						successFn : function(i, r) {
							if (r.err != '0') {
								Ext.Msg.show({
											width : 400,
											title : "操作提示",
											msg : r.msg,
											icon : Ext.Msg.WARNING,
											buttons : Ext.Msg.OK,
											fn : function() {
												// _this.makeupTagWindow.hide();
											}
										})
							} else {
								_this.listPanel.store.load();
								_this.makeupTagWindow.hide();

							}
						},

						fields : [{
									xtype : 'displayfield',
									height : '5'
								}, {
									xtype : 'datetimefield',
									format : "Y-m-d",
									anchor : '90%',
									ref : '../../produceDt',
									name : 'entity/produceDt',
									allowBlank : false,
									fieldLabel : '换标日期',
									value : new Date()
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									ref : '../../juanmoBatchNo',
									fieldLabel : '卷膜序号',
									name : 'entity/juanmoBatchNo',
									allowBlank : false,
									anchor : '90%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'prodspeccombobox',
									hiddenName : 'entity/newSpecId',
									ref : '../../newSpecId',
									anchor : '90%',
									fieldLabel : '新元件型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									allowBlank : true,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									ref : '../../newBatchNo',
									fieldLabel : '新元件序号',
									name : 'entity/newBatchNo',
									allowBlank : false,
									anchor : '90%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									name : 'entity/remark',
									xtype : 'textarea',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '95%',
									allowBlank : true
								}, {
									name : 'entity/workerId',
									ref : '../../workerId',
									value : nowStaffId,
									xtype : 'hidden'
								}]
					}]
		})
	}

	this.initQjChangeEditWindow = function() {
		var _this = this;
		this.qjChangeEditWindow = this.qjChangeEditWindow
				|| new Ext.fn.FormWindow({
					title : '补换标记录-修改',
					height : 480,
					width : 600,
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.detailGrid,
						columns : 1,
						saveUrl : 'com.keensen.ump.qinsen.qijian.modiChangeRecordById.biz.ext',
						loadUrl : 'com.keensen.ump.qinsen.qijian.expandChange.biz.ext',
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
								_this.detailGrid.store.load();
								_this.qjChangeEditWindow.hide();

							}
						},

						fields : [{
									xtype : 'displayfield',
									height : '5'
								}, {
									ref : '../../flagName',
									dataIndex : 'flagName',
									anchor : '90%',
									xtype : 'displayfield',
									fieldLabel : '动作'
								}, {
									xtype : 'displayfield',
									height : '5'
								}, {
									xtype : 'datetimefield',
									format : "Y-m-d",
									anchor : '90%',
									ref : '../../produceDt',
									name : 'entity/produceDt',
									dataIndex : 'produceDt',
									allowBlank : false,
									fieldLabel : '换标日期'
								}, {
									xtype : 'displayfield',
									height : '5'
								}, {
									ref : '../../oldSpecName',
									dataIndex : 'oldSpecName',
									xtype : 'displayfield',
									fieldLabel : '旧元件型号',
									anchor : '90%'
								}, {
									xtype : 'displayfield',
									height : '5'
								}, {
									ref : '../../oldBatchNo',
									dataIndex : 'oldBatchNo',
									xtype : 'displayfield',
									fieldLabel : '旧元件序号',
									anchor : '90%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'prodspeccombobox',
									hiddenName : 'entity/newSpecId',
									ref : '../../newSpecId',
									dataIndex : 'newSpecId',
									anchor : '90%',
									fieldLabel : '新元件型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									allowBlank : true,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									ref : '../../newBatchNo',
									dataIndex : 'newBatchNo',
									name : 'entity/newBatchNo',
									allowBlank : false,
									fieldLabel : '新元件序号',
									anchor : '90%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									name : 'entity/remark',
									dataIndex : 'remark',
									xtype : 'textarea',
									fieldLabel : '备注',
									colspan : 1,
									anchor : '90%',
									allowBlank : true
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									ref : '../../recordId',
									xtype : 'hidden'
								}]
					}]
				})
	}

	this.initQiJianJudgeWindow = function() {
		var _this = this;
		this.qiJianJudgeWindow = this.qiJianJudgeWindow
				|| new Ext.fn.FormWindow({
					title : '气检记录-质检',
					height : 480,
					width : 600,
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						columns : 1,
						saveUrl : 'com.keensen.ump.qinsen.qijian.modiQiJianJudge.biz.ext',
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
								_this.qiJianJudgeWindow.hide();

							}
						},

						fields : [{
									xtype : 'displayfield',
									height : '5'
								}, {
									dataIndex : 'batchNo',
									xtype : 'displayfield',
									anchor : '90%',
									fieldLabel : '元件序号'
								}, {
									xtype : 'displayfield',
									height : '5'
								}, {
									ref : '../../ngReasonId',
									// hiddenName : 'entity/ngReasonId',
									dataIndex : 'ngReasonId',
									anchor : '90%',
									xtype : 'combobox',
									fieldLabel : '不良类型',
									triggerAction : 'all',
									store : this.ngReasonIdStore,
									valueField : 'propValueId',
									displayField : 'propValueName',
									addAllSelector : true,
									readOnly : true,
									editable : false,
									queryMode : 'local'
								}, {
									xtype : 'displayfield',
									height : '5'
								}, {

									xtype : 'combo',
									fieldLabel : '质检判定',
									ref : '../../judgeFlag',
									dataIndex : 'judgeFlag',
									hiddenName : 'entity/judgeFlag',
									emptyText : '--请选择--',
									allowBlank : false,
									anchor : '90%',
									store : [['Y', '合格'], ['N', '不合格']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.qiJianJudgeWindow.judgeFlag
													.reset();
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5'
								}, {
									ref : '../../ngItem',
									hiddenName : 'entity/ngItem',
									dataIndex : 'ngItem',
									anchor : '90%',
									xtype : 'combobox',
									fieldLabel : '不良原因',
									triggerAction : 'all',
									store : this.ngItemStore,
									valueField : 'ngItem',
									displayField : 'ngItem',
									addAllSelector : true,
									editable : true,
									queryMode : 'local',
									emptyText : '--请选择--',
									allowBlank : true,
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									ref : '../../recordId',
									xtype : 'hidden'
								}, {
									name : 'entity/judgerId',
									ref : '../../judgerId',
									value : nowStaffId,
									xtype : 'hidden'
								}]
					}]
				})
	}

	this.initRemindGyyWindow = function() {

		var remindGyySelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.remindGyyListPanel = this.remindGyyListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					selModel : remindGyySelModel,
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer(), remindGyySelModel, {
								dataIndex : 'batchNo',
								header : '元件序号'
							}, {
								dataIndex : 'waterRemark',
								header : '水测员工意见'
							}, {
								dataIndex : 'waterRemarkTime',
								header : '水测员工接收时间'
							}, {
								dataIndex : 'waterRemarkUserName',
								header : '水测员工'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.qijian.query4Gyy.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'batchNo'
								}, {
									name : 'waterRemark'
								}, {
									name : 'waterRemarkTime'
								}, {
									name : 'waterRemarkUserName'
								}, {
									name : 'recordId'
								}]
					})
				})

		this.remindGyyWindow = this.remindGyyWindow || new Ext.Window({
					title : '水测提醒工艺员',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.remindGyyListPanel]

				});
	}

	this.initRemindMonitorWindow = function() {

		var remindMonitorSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.remindMonitorListPanel = this.remindMonitorListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					selModel : remindMonitorSelModel,
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							remindMonitorSelModel, {
								dataIndex : 'batchNo',
								header : '元件序号'
							}, {
								dataIndex : 'gyyRemark',
								header : '工艺员意见'
							}, {
								dataIndex : 'gyyRemarkTime',
								header : '工艺员备注时间'
							}, {
								dataIndex : 'gyyRemarkUserName',
								header : '工艺员'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.qijian.query4Monitor.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'batchNo'
								}, {
									name : 'gyyRemark'
								}, {
									name : 'gyyRemarkTime'
								}, {
									name : 'gyyRemarkUserName'
								}, {
									name : 'recordId'
								}]
					})
				})

		this.remindMonitorWindow = this.remindMonitorWindow || new Ext.Window({
					title : '水测提醒班长',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					// animCollapse: true,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.remindMonitorListPanel]

				});
	}

	// 任务
	this.initViewDutyWindow = function() {

		var _this = this;

		var viewDutySelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.viewDutyListPanel = this.viewDutyListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					autoScroll : false,
					selModel : viewDutySelModel,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), viewDutySelModel, {
								dataIndex : 'qjBatchNo',
								header : '元件序号'
							}, {
								dataIndex : 'jmBatchNo',
								header : '卷膜序号'
							}, {
								dataIndex : 'jmSpecName',
								header : '生产规格型号'
							}, {
								dataIndex : 'checkResult',
								header : '气检值(KPa)'
							}, {
								dataIndex : 'isQualifiedName',
								header : '气检判定'
							}, {
								dataIndex : 'ngReasonName',
								header : '不良类型'
							}, {
								dataIndex : 'trailer',
								header : '车号'
							}, {
								dataIndex : 'position',
								header : '烘房位置'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.workorder2.queryQjDutyList.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'jmBatchNo'
								}, {
									name : 'orderId'
								}, {
									name : 'pkid'
								}, {
									name : 'jmBatchId'
								}, {
									name : 'jmSpecId'
								}, {
									name : 'jmSpecName'
								}, {
									name : 'qjSpecId'
								}, {
									name : 'qjSpecName'
								}, {
									name : 'checkResult'
								}, {
									name : 'isQualified'
								}, {
									name : 'ngReasonId'
								}, {
									name : 'ngReasonName'
								}, {
									name : 'trailer'
								}, {
									name : 'qjBatchNo'
								}, {
									name : 'isQualifiedName'
								}, {
									name : 'position'
								}]
					})
				})

		this.viewDutyPanel = this.viewDutyPanel || new Ext.fn.EditPanel({
			height : 350,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 3,
			loadUrl : 'com.keensen.ump.produce.component.workorder2.getQjDuty.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">作业信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '作业日期',
						ref : '../arrangeDate',
						readOnly : true,
						dataIndex : 'arrangeDate',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单号',
						ref : '../orderNo',
						readOnly : true,
						dataIndex : 'orderNo',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单类型',
						ref : '../orderType',
						readOnly : true,
						dataIndex : 'orderType',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单下达型号',
						ref : '../materSpecName2',
						readOnly : true,
						dataIndex : 'materSpecName2',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单数量',
						ref : '../orderAmount',
						readOnly : true,
						dataIndex : 'orderAmount',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '生产规格型号',
						ref : '../materSpecName',
						readOnly : true,
						dataIndex : 'materSpecName',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '待气检数量',
						ref : '../waitAmount',
						readOnly : true,
						dataIndex : 'waitAmount',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '已气检数量',
						ref : '../qjAmount',
						readOnly : true,
						dataIndex : 'qjAmount',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">贴标信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '卷膜胶带',
						ref : '../tape',
						readOnly : true,
						dataIndex : 'tape',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '端盖',
						ref : '../lid',
						readOnly : true,
						dataIndex : 'lid',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '序列号是否固定',
						ref : '../snRegular',
						readOnly : true,
						dataIndex : 'snRegular',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '标签制作方式',
						ref : '../makeLabel',
						readOnly : true,
						dataIndex : 'makeLabel',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '双标签',
						ref : '../labelDouble',
						readOnly : true,
						dataIndex : 'labelDouble',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '标签图纸编号',
						ref : '../labelDrawingCode',
						readOnly : true,
						dataIndex : 'labelDrawingCode',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">元件序号</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '前缀',
						ref : '../prefix1',
						name:'prefix1',
						readOnly : true,
						//dataIndex : 'prefix',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '起始编号',
						ref : '../snStart1',
						name:'snStart1',
						readOnly : true,
						//dataIndex : 'snStart',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '结束编号',
						ref : '../snEnd1',
						name:'snEnd1',
						readOnly : true,
						//dataIndex : 'snEnd',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '前缀',
						ref : '../prefix2',
						name:'prefix2',
						readOnly : true,
						//dataIndex : 'prefix2',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '起始编号',
						ref : '../snStart2',
						name:'snStart2',
						readOnly : true,
						//dataIndex : 'snStart2',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '结束编号',
						ref : '../snEnd2',
						name:'snEnd2',
						readOnly : true,
						//dataIndex : 'snEnd2',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '前缀',
						ref : '../prefix3',
						name:'prefix3',
						readOnly : true,
						//dataIndex : 'prefix3',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '起始编号',
						ref : '../snStart3',
						name:'snStart3',
						readOnly : true,
						//dataIndex : 'snStart3',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '结束编号',
						ref : '../snEnd3',
						name:'snEnd3',
						readOnly : true,
						//dataIndex : 'snEnd3',
						anchor : '85%',
						colspan : 1
					}],
			buttons : [{
						text : "刷新任务",
						scope : this,
						handler : this.onDuty
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.viewDutyWindow.hide();
						}
					}]

		})

		this.viewDutyWindow = this.viewDutyWindow || new Ext.Window({
					title : '气检任务',
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
					items : [this.viewDutyPanel, this.viewDutyListPanel]

				});

	}

	this.initEditWindow4Gyy = function() {
		// A、放行原订单；B、降级；C、改判其他无特殊要求的同型号产品；D、报废
		this.gyyConclusionStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', '放行原订单'], ['B', '降级'],
							['C', '改判其他无特殊要求的同型号产品'], ['D', '报废'], ['E', '送水测'], ['F', '染色解剖']]
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
						saveUrl : 'com.keensen.ump.qinsen.qijian.saveGyyConclusions.biz.ext',
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
}