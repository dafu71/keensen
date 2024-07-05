com.keensen.ump.qinsen.produce.compqueryMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initTumoListPanel();
		this.initTumoCheckListPanel();
		this.initCdmListPanel();
		this.initJuanMoDetailPanel();
		this.initWaterTestListPanel();
		this.initQjChangeListPanel();
		this.initRaosiListPanel();
		this.initApplyListPanel();

		this.initTabPanel();

		this.initViewWindow();

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'compquerymgr',
					panels : [this.queryPanel, this.listPanel]
				});
		return this.lay;
	}

	this.initQueryPanel = function() {
		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 165,
					columns : 4,
					border : true,
					collapsible : false,
					titleCollapse : false,
					// title : '【卷膜记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceBeginDate',
						fieldLabel : '生产时间',
						colspan : 1,
						anchor : '75%',
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
						anchor : '75%',
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '103',
						hiddenName : 'condition/lineId',
						anchor : '75%',
						fieldLabel : '气检生产线 '
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						anchor : '75%',
						fieldLabel : '气检元件型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '75%',
						fieldLabel : '气检订单号'
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
			id : 'produce-qijianmgr-list',
			tbar : [{
						text : '详情',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '气检<br>元件序号',
						width : 120,
						dataIndex : 'batchNo'
					}, {
						header : '生产线',
						width : 120,
						dataIndex : 'lineCode'
					}, {
						header : '订单号',
						width : 120,
						dataIndex : 'orderNo'
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
						header : '气检时间',
						width : 110,
						dataIndex : 'produceDate'
					}, {
						header : '合格入库',
						width : 120,
						dataIndex : 'applyJudgeResult'
					}, {
						header : '请检时间',
						width : 110,
						dataIndex : 'applyTime'
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
						header : '叠膜栈板号',
						width : 210,
						dataIndex : 'cdmBatchStr'
					}, {
						header : '膜片批次',
						width : 190,
						dataIndex : 'tumoBatchStr'
					}, {
						header : '底膜批次',
						width : 190,
						dataIndex : 'dimoBatchStr'
					}, {
						header : '气检操作工',
						width : 100,
						dataIndex : 'workerName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}, {
						header : '卷膜<br>卷膜序号',
						width : 120,
						dataIndex : 'juanmoBatchNo'
					}, {
						header : '生产线',
						width : 100,
						dataIndex : 'juanmoLineCode'
					}, {
						header : '订单号',
						width : 120,
						dataIndex : 'juanmoOrderNo'
					}, {
						header : '元件型号',
						width : 120,
						dataIndex : 'juanmoSpecName'
					}, {
						header : '试卷',
						width : 40,
						dataIndex : 'isTrialName'
					}, {
						header : '生产时间',
						width : 110,
						dataIndex : 'juanmoDate'
					}, {
						header : '膜页数',
						width : 70,
						dataIndex : 'pageCnt'
					}, {
						header : '混卷',
						width : 40,
						dataIndex : 'isMixStr'
					}, {
						header : '页数组成',
						width : 80,
						dataIndex : 'pageCntStr'
					}, {
						header : '下料尺寸',
						width : 70,
						dataIndex : 'blankingSize'
					}, {
						header : '浓网',
						width : 50,
						dataIndex : 'denseNet'
					}, {
						header : '页宽',
						width : 50,
						dataIndex : 'pageWidth'
					}, {
						header : '操作工',
						width : 100,
						dataIndex : 'juanmoWorkerName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'juanmoRemark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.compquery.queryRecordsByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
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
							name : 'prodSpecArea'
						}, {
							name : 'prodSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'juanmoLineId'
						}, {
							name : 'isTrial'
						}, {
							name : 'juanmoOrderNo'
						}, {
							name : 'juanmoSpecId'
						}, {
							name : 'blankingSize'
						}, {
							name : 'denseNet'
						}, {
							name : 'pageWidth'
						}, {
							name : 'juanmoDt'
						}, {
							name : 'juanmoTeamId'
						}, {
							name : 'juanmoWorkerId'
						}, {
							name : 'juanmoRemark'
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
							name : 'isTrialName'
						}, {
							name : 'juanmoLineCode'
						}, {
							name : 'juanmoSpecCode'
						}, {
							name : 'juanmoSpecName'
						}, {
							name : 'juanmoDate'
						}, {
							name : 'juanmoTeamName'
						}, {
							name : 'juanmoWorkerName'
						}, {
							name : 'inPageCnt'
						}, {
							name : 'inPageLength'
						}, {
							name : 'pageCnt'
						}, {
							name : 'pageLength'
						}, {
							name : 'cdmBatchStr'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'dimoBatchStr'
						}, {
							name : 'isMixStr'
						}, {
							name : 'pageCntStr'
						}, {
							name : 'applyJudgeResult'
						}, {
							name : 'applyTime'
						}]
			})
		})
	}

	this.initTumoListPanel = function() {
		var _this = this;

		this.tumoselModel = this.tumoselModel
				|| new Ext.grid.CheckboxSelectionModel({
							singleSelect : true,
							header : '',
							listeners : {

				}

						});
		this.tumolistPanel = new Ext.fn.ListPanel({
			title : '【涂膜】',
			// height : 150,
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			selModel : this.tumoselModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), this.tumoselModel, {
						header : '膜片批次',
						width : 120,
						dataIndex : 'batchNo'
					}, {
						header : '长度(m)',
						width : 60,
						dataIndex : 'outLength'
					}, {
						header : '可用长度(m)',
						width : 90,
						dataIndex : 'usefulLength'
					}, {
						header : '合格长度(m)',
						width : 90,
						dataIndex : 'qualifidLength'
					}, {
						header : '裁膜产出m',
						width : 80,
						dataIndex : 'caimoLength'
					}, {
						header : '不良m',
						width : 50,
						dataIndex : 'caimoLoss'
					}, {
						header : '底膜放卷长度',
						width : 80,
						dataIndex : 'dmUseLength'
					}, {
						header : '已裁完',
						width : 50,
						dataIndex : 'isCutOverName'
					}, {
						header : '最后裁膜时间',
						width : 110,
						dataIndex : 'lastCaimoDate'
					}, {
						header : '底膜批次',
						width : 120,
						dataIndex : 'dimoBatchNo'
					}, {
						header : '生产线',
						width : 50,
						dataIndex : 'lineCode'
					}, {
						header : '膜片型号',
						width : 80,
						dataIndex : 'materSpecName'
					}, {
						header : '无纺布供应商',
						width : 90,
						dataIndex : 'wfSupplierName'
					}, {
						header : '无纺布批号',
						width : 120,
						dataIndex : 'wfBatchNo'
					}, {
						header : '厚度(平均)',
						width : 80,
						dataIndex : 'thickAvg'
					}, {
						header : '厚度(最小)',
						width : 80,
						dataIndex : 'thickMin'
					}, {
						header : '厚度(最大)',
						width : 80,
						dataIndex : 'thickMax'
					}, {
						header : '标签数',
						width : 60,
						dataIndex : 'tagNum'
					}, {
						header : '标签长度',
						width : 80,
						dataIndex : 'tagLength'
					}, {
						header : '性能等级',
						width : 70,
						dataIndex : 'perfFlagName'
					}, {
						header : 'C21浓度',
						width : 70,
						dataIndex : 'mpd'
					}, {
						header : '是否合格',
						width : 70,
						dataIndex : 'isQualifiedName'
					}, {
						header : '订单号',
						width : 130,
						dataIndex : 'orderNo'
					}, {
						header : '计划单号',
						width : 120,
						dataIndex : 'planNo'
					}, {
						header : '生产类型',
						width : 70,
						dataIndex : 'prodFlagName'
					}, {
						header : '生产时间',
						width : 110,
						dataIndex : 'produceDate'
					}, {
						header : '班组',
						width : 70,
						dataIndex : 'teamName'
					}, {
						header : '时段',
						width : 50,
						dataIndex : 'teamSeg'
					}, {
						header : '操作工',
						width : 100,
						dataIndex : 'workerName'
					}, {
						header : '质检员',
						width : 100,
						dataIndex : 'judgerName'
					}, {
						header : '判定时间',
						width : 110,
						dataIndex : 'judgeTime'
					}, {
						header : '生产备注',
						width : 120,
						dataIndex : 'remark'
					}, {
						header : '判定说明',
						width : 120,
						dataIndex : 'judgeRemark'
					}, {
						header : '入库意见',
						width : 120,
						dataIndex : 'inboundRemark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.compquery.queryTumoRecords.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {},
				fields : [{
							name : 'recordId'
						}, {
							name : 'planNo'
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'batchNo'
						}, {
							name : 'lineId'
						}, {
							name : 'specId'
						}, {
							name : 'wfSupId'
						}, {
							name : 'prodFlagId'
						}, {
							name : 'produceDt'
						}, {
							name : 'teamId'
						}, {
							name : 'teamSeg'
						}, {
							name : 'outLength'
						}, {
							name : 'workerId'
						}, {
							name : 'perfFlagId'
						}, {
							name : 'isQualified'
						}, {
							name : 'judgerId'
						}, {
							name : 'judgeDt'
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
							name : 'judgeRemark'
						}, {
							name : 'isValid'
						}, {
							name : 'validTm'
						}, {
							name : 'verifierId'
						}, {
							name : 'wfBatchNo'
						}, {
							name : 'thickAvg'
						}, {
							name : 'thickMin'
						}, {
							name : 'thickMax'
						}, {
							name : 'tagNum'
						}, {
							name : 'tagLength'
						}, {
							name : 'inboundRemark'
						}, {
							name : 'orderNo'
						}, {
							name : 'isWx'
						}, {
							name : 'isCutOver'
						}, {
							name : 'outBatchNo'
						}, {
							name : 'isKeep'
						}, {
							name : 'mpd'
						}, {
							name : 'lineCode'
						}, {
							name : 'lineName'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'mpBatchCode'
						}, {
							name : 'qtJudgeFlag'
						}, {
							name : 'materClassId'
						}, {
							name : 'wfSupplierCode'
						}, {
							name : 'wfSupplierName'
						}, {
							name : 'prodFlagCode'
						}, {
							name : 'prodFlagName'
						}, {
							name : 'perfFlagCode'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'isQualifiedName'
						}, {
							name : 'isValidName'
						}, {
							name : 'isWxName'
						}, {
							name : 'isCutOverName'
						}, {
							name : 'isKeepName'
						}, {
							name : 'produceDate'
						}, {
							name : 'judgeTime'
						}, {
							name : 'validTime'
						}, {
							name : 'judgerName'
						}, {
							name : 'workerName'
						}, {
							name : 'verifierName'
						}, {
							name : 'teamName'
						}, {
							name : 'materClassCode'
						}, {
							name : 'caimoLength'
						}, {
							name : 'caimoLoss'
						}, {
							name : 'lastCaimoDate'
						}, {
							name : 'usefulLength'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'fMacName'
						}, {
							name : 'fGfdAvg'
						}, {
							name : 'fSaltRejection'
						}, {
							name : 'rMacName'
						}, {
							name : 'rGfdAvg'
						}, {
							name : 'rSaltRejection'
						}, {
							name : 'dmUseLength'
						}]
			})
		})
	}

	this.initTumoCheckListPanel = function() {
		var _this = this;
		var tumocheckselModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.tumochecklistPanel = new Ext.fn.ListPanel({
			title : '【膜片质检】',
			// height : 150,
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			delUrl : '1.biz.ext',
			selModel : tumocheckselModel,
			columns : [new Ext.grid.RowNumberer(), tumocheckselModel, {
						dataIndex : 'macName',
						header : '测试台'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						header : '膜片型号',
						dataIndex : 'materSpecName'
					}, {
						dataIndex : 'isWxName',
						header : '外销'
					}, {
						dataIndex : 'produceDate',
						header : '生产时间'
					}, {
						dataIndex : 'positionLength',
						header : '取样位置(m)'
					}, {
						dataIndex : 'gfdAvg',
						header : '膜通量均值'
					}, {
						dataIndex : 'saltRejection',
						header : '脱盐率%'
					}, {
						dataIndex : 'gfdStr',
						header : '膜通量数据'
					}, {
						dataIndex : 'conductivityIn',
						header : '进水电导'
					}, {
						dataIndex : 'conductivityStr',
						header : '出水电导数据'
					}, {
						dataIndex : 'recheckName',
						header : '首/复检'
					}, {
						dataIndex : 'perfFlagName',
						header : '样块性能等级'
					}/*
						 * , { dataIndex : 'batchPerfFlagName', header :
						 * '批次性能等级' }
						 */, {
						dataIndex : 'appearance',
						header : '外观'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'wfSupplierName',
						header : '无纺布供应商'
					}, {
						dataIndex : 'tagNum',
						header : '标签数'
					}, {
						dataIndex : 'tagLength',
						header : '标签长度'
					}, {
						dataIndex : 'thickAvg',
						header : '厚度(平均)'
					}, {
						dataIndex : 'thickMin',
						header : '厚度(最小)'
					}, {
						dataIndex : 'thickMax',
						header : '厚度(最大)'
					}, {
						dataIndex : 'judgerName',
						header : '质检员'
					}/*
						 * , { dataIndex : 'isBatchQualifiedName', header :
						 * '批次合格' }
						 *//*
						 * , { dataIndex : 'gfdStr', header : '膜通量数据' }, {
						 * dataIndex : 'conductivityIn', header : '进水电导' }, {
						 * dataIndex : 'conductivityStr', header : '出水电导数据' }
						 *//*
						 * , { dataIndex : 'isValidName', header : '批次验证' }
						 */, {
						dataIndex : 'checkerName',
						header : '分析员'
					}, {
						dataIndex : 'checkTime',
						header : '检测时间'
					}, {
						dataIndex : 'judgeTime',
						header : '判定时间'
					}, {
						dataIndex : 'produceRemark',
						header : '生产备注'
					}, {
						dataIndex : 'remark',
						header : '分析备注'
					}, {
						dataIndex : 'judgeRemark',
						header : '判定说明'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumocheckByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'macName'
						}, {
							name : 'batchNo'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'usefulLength'
						}, {
							name : 'lineCode'
						}, {
							name : 'isWxName'
						}, {
							name : 'produceDate'
						}, {
							name : 'positionLength'
						}, {
							name : 'gfdAvg'
						}, {
							name : 'saltRejection'
						}, {
							name : 'recheckName'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'batchPerfFlagName'
						}, {
							name : 'appearance'
						}, {
							name : 'orderNo'
						}, {
							name : 'wfSupplierName'
						}, {
							name : 'tagNum'
						}, {
							name : 'tagLength'
						}, {
							name : 'thickAvg'
						}, {
							name : 'thickMin'
						}, {
							name : 'thickMax'
						}, {
							name : 'judgerName'
						}, {
							name : 'isBatchQualifiedName'
						}, {
							name : 'gfdStr'
						}, {
							name : 'conductivityIn'
						}, {
							name : 'conductivityStr'
						}, {
							name : 'isValidName'
						}, {
							name : 'checkerName'
						}, {
							name : 'checkTime'
						}, {
							name : 'judgeTime'
						}, {
							name : 'produceRemark'
						}, {
							name : 'remark'
						}, {
							name : 'judgeRemark'
						}, {
							name : 'materSpecName'
						}, {
							name : 'batchId'
						}, {
							name : 'recordId'
						}]
			})
		})
	}

	this.initCdmListPanel = function() {
		var _this = this;
		this.cdmselModel = this.cdmselModel
				|| new Ext.grid.CheckboxSelectionModel({
							singleSelect : true,
							header : '',
							listeners : {

				}
						});

		this.cdmlistPanel = new Ext.fn.ListPanel({
			title : '【裁叠膜】',
			// height : 150,
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			selModel : this.cdmselModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), this.cdmselModel, {
						header : '栈板号',
						width : 120,
						dataIndex : 'batchNo'
					}, {
						header : '总页数',
						width : 60,
						dataIndex : 'quantity'
					}, {
						header : '未卷页数',
						width : 70,
						dataIndex : 'unusedQuantity'
					}, {
						header : '长度(m)',
						width : 70,
						dataIndex : 'outLength'
					}, {
						header : '膜片批次',
						width : 120,
						dataIndex : 'tumoBatchNo'
					}, {
						header : '膜片型号',
						width : 120,
						dataIndex : 'mpSpecName'
					}, {
						header : '订单号',
						width : 120,
						dataIndex : 'orderNo'
					}, {
						header : '元件型号',
						width : 120,
						dataIndex : 'cdmSpecName'
					}, {
						header : '不良米数',
						width : 80,
						dataIndex : 'totalLoss'
					}, {
						header : '单/混卷',
						width : 70,
						dataIndex : 'isToMixStr'
					}, {
						header : '每叠页数',
						width : 70,
						dataIndex : 'numPerWad'
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
						width : 60,
						dataIndex : 'pageWidth'
					}, {
						header : '生产时间',
						width : 110,
						dataIndex : 'produceDate'
					}, {
						header : '班组',
						width : 70,
						dataIndex : 'teamName'
					}, {
						header : '操作工',
						width : 100,
						dataIndex : 'workerName'
					}, {
						header : '备注',
						width : 120,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.cdm.queryRecords.biz.ext',
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
									name : 'tumoBatchId'
								}, {
									name : 'prodSpecId'
								}, {
									name : 'orderNo'
								}, {
									name : 'quantity'
								}, {
									name : 'numPerWad'
								}, {
									name : 'blankingSize'
								}, {
									name : 'denseNet'
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
									name : 'isToMix'
								}, {
									name : 'pageWidth'
								}, {
									name : 'tumoBatchNo'
								}, {
									name : 'mpSpecCode'
								}, {
									name : 'mpSpecName'
								}, {
									name : 'cdmSpecCode'
								}, {
									name : 'cdmSpecName'
								}, {
									name : 'outLength'
								}, {
									name : 'isToMixStr'
								}, {
									name : 'produceDate'
								}, {
									name : 'teamName'
								}, {
									name : 'workerName'
								}, {
									name : 'lineCode'
								}, {
									name : 'totalLoss'
								}, {
									name : 'unusedQuantity'
								}]
					})
		})
	}

	this.initJuanMoDetailPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.juanmodetailGrid = new Ext.fn.ListPanel({
			title : '【混卷组成】',
			// height : 150,
			hsPage : false,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '叠膜栈板号',
						width : 120,
						dataIndex : 'cdmBatchNo'
					}, {
						header : '膜片批次',
						width : 110,
						dataIndex : 'tumoBatchNo'
					}, {
						header : '膜片型号',
						width : 100,
						dataIndex : 'mpSpecCode'
					}, {
						header : '投入页数',
						width : 70,
						dataIndex : 'inQuantity'
					}, {
						header : '废弃页数',
						width : 70,
						dataIndex : 'lossQuantity'
					}, {
						header : '使用页数',
						width : 70,
						dataIndex : 'outQuantity'
					}, {
						header : '叠膜订单号',
						width : 120,
						dataIndex : 'cdmOrderNo'
					}, {
						header : '叠膜元件型号',
						width : 120,
						dataIndex : 'cdmSpecName'
					}, {
						header : '叠膜下料尺寸',
						width : 100,
						dataIndex : 'cdmBlankingSize'
					}, {
						header : '叠膜浓网',
						width : 70,
						dataIndex : 'cdmDenseNet'
					}, {
						header : '叠膜页宽',
						width : 70,
						dataIndex : 'cdmPageWidth'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.juanmo.queryDetailRecords.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {},
				fields : [{
							name : 'recordId'
						}, {
							name : 'mainBatchId'
						}, {
							name : 'cdmBatchId'
						}, {
							name : 'inQuantity'
						}, {
							name : 'outQuantity'
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
							name : 'lossQuantity'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'cdmBatchNo'
						}, {
							name : 'cdmOrderNo'
						}, {
							name : 'tumoBatchId'
						}, {
							name : 'cdmBlankingSize'
						}, {
							name : 'cdmDenseNet'
						}, {
							name : 'cdmPageWidth'
						}, {
							name : 'tumoBatchNo'
						}, {
							name : 'cdmSpecCode'
						}, {
							name : 'cdmSpecName'
						}, {
							name : 'mpSpecCode'
						}]
			})
		})
	}

	this.initWaterTestListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.watertestlistPanel = new Ext.fn.ListPanel({
			title : '【水测】',
			viewConfig : {
		// forceFit : true
			},
			hsPage : false,
			// height : 150,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
				header : '量产判定',
				width : 70,
				dataIndex : 'isBatchQualifiedName',
				renderer : function(value, metaData, rec, rowIndex, colIndex,
						store, view) {
					if (rec.data.isBatchQualified == 'N') {
						return '<font color="red">' + value + '</font>';
					} else {
						return value;
					}
				}
			}, {
				header : '单品判定',
				width : 70,
				dataIndex : 'isProdQualifiedName',
				renderer : function(value, metaData, rec, rowIndex, colIndex,
						store, view) {
					if (rec.data.isProdQualified == 'N') {
						return '<font color="red">' + value + '</font>';
					} else {
						return value;
					}
				}
			}, {
				header : '卷膜序号',
				width : 120,
				dataIndex : 'juanmoBatchNo'
			}, {
				header : '卷膜型号',
				width : 100,
				dataIndex : 'juanmoSpecName'
			}, {
				header : '元件序号',
				width : 120,
				dataIndex : 'prodBatchNo'
			}, {
				header : '测试型号',
				width : 80,
				dataIndex : 'testSpecName'
			}, {
				header : '拟入库型号',
				width : 120,
				dataIndex : 'ifProdSpecName'
			}, {
				header : '拟贴标型号',
				width : 120,
				dataIndex : 'markSpecName'
			}, {
				header : '膜片批次',
				width : 190,
				dataIndex : 'tumoBatchStr'
			}, {
				header : '底膜批次',
				width : 190,
				dataIndex : 'dimoBatchStr'
			}, {
				header : '检测类型',
				width : 80,
				dataIndex : 'testTypeName'
			}, {
				header : '气检值',
				width : 60,
				dataIndex : 'airResult'
			}, {
				header : '气检时间',
				width : 110,
				dataIndex : 'airDate'
			}, {
				header : '检测温度',
				width : 80,
				dataIndex : 'temp'
			}, {
				header : '初检<BR>产水量',
				width : 60,
				dataIndex : 'fGpd'
			}, {
				header : '初检<BR>脱盐率%',
				width : 70,
				dataIndex : 'fSalt'
			}, {
				header : '初检<BR>系数B',
				width : 70,
				dataIndex : 'fFactorB'
			}, {
				header : '初检<BR>检测时间',
				width : 110,
				dataIndex : 'fCheckTime'
			}, {
				header : '初检<BR>质检员',
				width : 90,
				dataIndex : 'fCheckerName'
			}, {
				header : '初检<BR>测试膜壳',
				width : 90,
				dataIndex : 'fMacName'

			}, {
				header : '复检<BR>产水量',
				width : 60,
				dataIndex : 'rGpd'
			}, {
				header : '复检<BR>脱盐率%',
				width : 70,
				dataIndex : 'rSalt'
			}, {
				header : '复检<BR>系数B',
				width : 70,
				dataIndex : 'rFactorB'
			}, {
				header : '复检<BR>检测时间',
				width : 110,
				dataIndex : 'rCheckTime'
			}, {
				header : '复检<BR>质检员',
				width : 90,
				dataIndex : 'rCheckerName'
			}, {
				header : '复检<BR>测试膜壳',
				width : 90,
				dataIndex : 'rMacName'
			}, {
				header : '量产标准<BR>GPD',
				width : 90,
				dataIndex : 'batchGpdStdStr'
			}, {
				header : '量产标准<BR>脱盐率%',
				width : 70,
				dataIndex : 'batchSaltStd'
			}, {
				header : '量产标准<BR>系数B%',
				width : 70,
				dataIndex : 'batchFactorBStd'
			}, {

				header : '单品标准<BR>GPD',
				width : 90,
				dataIndex : 'prodGpdStdStr'
			}, {
				header : '单品标准<BR>脱盐率%',
				width : 70,
				dataIndex : 'prodSaltStd'
			}, {
				header : '单品标准<BR>系数B%',
				width : 70,
				dataIndex : 'prodFactorBStd'
			}, {
				header : '判定说明',
				width : 120,
				dataIndex : 'remark'
			}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.watertest.queryRecords.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {},
						fields : [{
									name : 'recordId'
								}, {
									name : 'juanmoBatchId'
								}, {
									name : 'testTypeId'
								}, {
									name : 'temp'
								}, {
									name : 'fGpd'
								}, {
									name : 'fSalt'
								}, {
									name : 'fFactorB'
								}, {
									name : 'fCheckerId'
								}, {
									name : 'fCheckTm'
								}, {
									name : 'rGpd'
								}, {
									name : 'rSalt'
								}, {
									name : 'rFactorB'
								}, {
									name : 'rCheckerId'
								}, {
									name : 'rCheckTm'
								}, {
									name : 'isBatchQualified'
								}, {
									name : 'batchGpdStdStr'
								}, {
									name : 'batchSaltStd'
								}, {
									name : 'batchFactorBStd'
								}, {
									name : 'isProdQualified'
								}, {
									name : 'prodGpdStdStr'
								}, {
									name : 'prodSaltStd'
								}, {
									name : 'prodFactorBStd'
								}, {
									name : 'ifProdSpecId'
								}, {
									name : 'testSpecId'
								}, {
									name : 'markSpecName'
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
									name : 'fMacName'
								}, {
									name : 'rMacName'
								}, {
									name : 'isBatchQualifiedName'
								}, {
									name : 'isProdQualifiedName'
								}, {
									name : 'testTypeCode'
								}, {
									name : 'testTypeName'
								}, {
									name : 'fCheckerName'
								}, {
									name : 'fCheckTime'
								}, {
									name : 'rCheckerName'
								}, {
									name : 'rCheckTime'
								}, {
									name : 'ifProdSpecCode'
								}, {
									name : 'ifProdSpecName'
								}, {
									name : 'ifProdSpecArea'
								}, {
									name : 'testSpecCode'
								}, {
									name : 'testSpecName'
								}, {
									name : 'testSpecArea'
								}, {
									name : 'prodBatchNo'
								}, {
									name : 'airResult'
								}, {
									name : 'airQualified'
								}, {
									name : 'airQualifiedName'
								}, {
									name : 'airDate'
								}, {
									name : 'prodSpecCode'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'juanmoBatchNo'
								}, {
									name : 'juanmoSpecId'
								}, {
									name : 'juanmoSpecCode'
								}, {
									name : 'juanmoSpecName'
								}, {
									name : 'cdmBatchStr'
								}, {
									name : 'tumoBatchStr'
								}, {
									name : 'dimoBatchStr'
								}, {
									name : 'jmBatchNo'
								}]
					})
		})
	}

	this.initQjChangeListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.qjchangelistPanel = new Ext.fn.ListPanel({
			title : '【补换标】',
			viewConfig : {
				forceFit : false
			},
			// height : 150,
			hsPage : false,
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

	this.initRaosiListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.raosilistPanel = new Ext.fn.ListPanel({
			hsPage : false,
			title : '【绕丝】',
			// height : 150,
			viewConfig : {
				forceFit : true
			},
			selModel : selModel,
			delUrl : '1.biz.ext',
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
						url : 'com.keensen.ump.qinsen.raosi.queryRecords.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
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

	this.initApplyListPanel = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.applylistPanel = new Ext.fn.ListPanel({
			title : '【入库请检】',
			// height : 150,
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'code',
						sortable : true,
						header : '栈板号'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号',
						renderer : function(v, m, r, i) {
							var confirmDate = r.get('confirmDate');
							if (!Ext.isEmpty(confirmDate)) {
								return "<span style='color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'markSpecCode',
						sortable : true,
						header : '唛头显示型号'
					}, {
						dataIndex : 'prodSpecName',
						sortable : true,
						header : '元件型号'
					}, {
						dataIndex : 'orderAmount',
						sortable : true,
						header : '订单数量'
					}, {
						dataIndex : 'applyAmount',
						sortable : true,
						header : '请检数量'
					}, {
						dataIndex : 'printCnt',
						sortable : true,
						header : '打印次数'
					}, {
						dataIndex : 'applyAmountTotal',
						sortable : true,
						header : '请检总数量'
					}, {
						dataIndex : 'performance',
						sortable : true,
						header : '性能'
					}, {
						dataIndex : 'applyUserName',
						sortable : true,
						header : '请检人'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '请检时间'
					}, {
						xtype : 'dictcolumn',
						sortable : true,
						dictData : KS_YESORNO,
						dataIndex : 'isExamine',
						header : '是否已审核'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryApply.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {},
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
							name : 'code'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderAmount'
						}, {
							name : 'applyAmount'
						}, {
							name : 'checkUserId'
						}, {
							name : 'checkUserName'
						}, {
							name : 'applyDate'
						}, {
							name : 'applyUserId'
						}, {
							name : 'applyUserName'
						}, {
							name : 'lid'
						}, {
							name : 'prodClassFlag'
						}, {
							name : 'tape'
						}, {
							name : 'markSpecialFlag'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'markSpecCode'
						}, {
							name : 'markIsok'
						}, {
							name : 'labelIsok'
						}, {
							name : 'apperanceIsok'
						}, {
							name : 'diameter'
						}, {
							name : 'final'
						}, {
							name : 'deal'
						}, {
							name : 'deal1'
						}, {
							name : 'deal2'
						}, {
							name : 'deal3'
						}, {
							name : 'storage'
						}, {
							name : 'manageUserId'
						}, {
							name : 'manageUserName'
						}, {
							name : 'orderType'
						}, {
							name : 'confirmDate'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'printCnt'
						}, {
							name : 'applyAmountTotal'
						}, {
							name : 'isExamine'
						}, {
							name : 'performance'
						}]
			})
		})
	}

	this.initTabPanel = function() {
		this.tabPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.tumolistPanel, this.tumochecklistPanel,
							this.cdmlistPanel, this.juanmodetailGrid,
							this.watertestlistPanel, this.qjchangelistPanel,
							this.raosilistPanel, this.applylistPanel]
				});
		return this.tabPanel;
	};

	this.initViewWindow = function() {
		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '元件详情查询',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'fit',
					items : [this.tabPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.tumolistPanel.store.removeAll();
									this.tumochecklistPanel.store.removeAll();
									this.cdmlistPanel.store.removeAll();
									this.juanmodetailGrid.store.removeAll();
									this.watertestlistPanel.store.removeAll();
									this.qjchangelistPanel.store.removeAll();
									this.raosilistPanel.store.removeAll();
									this.applylistPanel.store.removeAll();
									this.viewWindow.hide();

								}
							}]
				});
	}

}