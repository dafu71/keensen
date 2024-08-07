com.keensen.ump.qinsen.produce.tumoMgr = function() {
	this.initPanel = function() {

		var defectTmWinId = Ext.id();
		var defectZmWinId = Ext.id();

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initEditMpdWindow();

		this.initSendChecWindow();

		this.defectTmWin = new com.keensen.ump.defectWindow({
					id : defectTmWinId,
					dutyTacheCode : 'TM',
					recTacheCode : 'TM'
				});
		this.defectZmWin = new com.keensen.ump.defectWindow({
					id : defectZmWinId,
					dutyTacheCode : 'ZM',
					recTacheCode : 'TM'
				});

		this.defectViewWindow = new com.keensen.ump.defectViewWindow({
					id : 'tm-defectviewwindow'
				});
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'producetumomgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 200,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					// title : '【涂膜记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceDtStart',
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
						name : 'condition/produceDtEnd',
						fieldLabel : '至',
						colspan : 1,
						anchor : '75%',
						editable : true,
						format : 'Y-m-d H:i',
						//allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}/*
						 * , { xtype : 'mplinecombobox', hiddenName :
						 * 'condition/lineId', anchor : '75%', fieldLabel : '生产线 ' }
						 */, {
						xtype : 'linecombobox',
						prodTacheId : '100',
						hiddenName : 'condition/lineId',
						anchor : '75%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '75%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'supcombobox',
						hiddenName : 'condition/supId',
						anchor : '75%',
						fieldLabel : '无纺布供应商'
					}, {

						xtype : 'combo',
						fieldLabel : '判定结果',
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
						fieldLabel : '是否外销',
						ref : '../isWx',
						hiddenName : 'condition/isWx',
						emptyText : '--请选择--',
						anchor : '75%',
						store : [[null, '全部'], ['Y', '是'], ['N', '否']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.isWx.reset();
							}
						}
					}, {
						xtype : 'mpworkercombobox',
						hiddenName : 'condition/workerId',
						anchor : '75%',
						fieldLabel : '操作工'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/orderNoStr',
						anchor : '75%',
						fieldLabel : '订单号%-%'
					}, {
						xtype : 'textfield',
						name : 'condition/planNo',
						anchor : '75%',
						fieldLabel : '计划单号'
					}, {
						xtype : 'textfield',
						name : 'condition/dimoBatchNo',
						anchor : '75%',
						fieldLabel : '底膜批次'
					}, {

						xtype : 'textfield',
						name : 'condition/batchNoStr',
						anchor : '75%',
						fieldLabel : '膜片批次%-%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/outBatchNo',
						anchor : '75%',
						fieldLabel : '膜片卷号'
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

		this.bar = this.bar || new Ext.Toolbar({
					items : [{
								text : '新增涂膜记录',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAdd
							}, '-', {
								text : '修改涂膜记录',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEdit
							}, '-', {
								text : '打印标签',
								scope : this,
								iconCls : 'icon-printer',
								handler : this.onPrintTumoTag
							}, '->', {
								text : '删除涂膜记录',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDel
							}, '->', {
								text : '录入铸膜不良',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onaddZmDefect
							}, '->', {
								text : '录入涂膜不良',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onaddTmDefect
							}, '->', {
								text : 'C21浓度',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onModiTech
							}, '->', {
								text : '送检',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSendCheck
							}]
				});

		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : '',
					listeners : {

		}

				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【涂膜记录列表】',
			id : 'produce-tumo-list',
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计长度(m)',
						id : 'totalLengthTxt'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计可用长度(m)',
						id : 'totalUsefulLengthTxt'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计裁膜产出(m)',
						id : 'totalCdmLengthTxt'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计不良(m)',
						id : 'totalLossTxt'
					}],
			hsPage : true,
			id : 'produce-tumo-list',
			listeners : {
				// 第二行工具栏
				render : function() {
					scope : this, _this.bar.render(_this.listPanel.tbar);
				}
			},
			selModel : this.selModel,
			delUrl : 'com.keensen.ump.qinsen.tumo.deleteTumo.biz.ext',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
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
						dataIndex : 'caimoLoss',
						renderer : function(v, m, r, i) {
							if (!Ext.isEmpty(v) && v > 0) {
								var tumoBatchNo = r.get('batchNo');
								var style = "<a style='text-decoration:none'";
								var str = style
										+ " href='javascript:defectView("
										+ Ext.encode(tumoBatchNo) + ");'>" + v
										+ "</a>";

								return str;
							}
						}
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
						header : '膜片系列',
						width : 80,
						dataIndex : 'materClassCode'
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
						header : '初检测试台',
						width : 90,
						dataIndex : 'fMacName'
					}, {
						header : '初检膜通量',
						width : 90,
						dataIndex : 'fGfdAvg'
					}, {
						header : '初检脱盐率%',
						width : 90,
						dataIndex : 'fSaltRejection'
					}, {
						header : '复检测试台',
						width : 90,
						dataIndex : 'rMacName'
					}, {
						header : '复检膜通量',
						width : 90,
						dataIndex : 'rGfdAvg'
					}, {
						header : '复检脱盐率%',
						width : 90,
						dataIndex : 'rSaltRejection'
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
						header : '保留品',
						width : 70,
						dataIndex : 'isKeepName'
					}, {
						header : '质检验证',
						width : 70,
						dataIndex : 'isValidName'
					}, {
						header : '外销',
						width : 50,
						dataIndex : 'isWxName'
					}, {
						header : '膜片卷号',
						width : 100,
						dataIndex : 'outBatchNo'
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
						url : 'com.keensen.ump.qinsen.tumo.queryRecordsByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
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

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增涂膜记录',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						autoHide : false,
						successFn : function(i, r) {
							if (r.err != '0') {
								Ext.Msg.show({
											width : 400,
											title : "操作提示",
											msg : r.msg,
											icon : Ext.Msg.WARNING,
											buttons : Ext.Msg.OK,
											fn : function() {
												_this.inputWindow.hide();
											}
										})
							} else {
								Ext.getCmp('produce-tumo-list').store.load();
								_this.inputWindow.hide();
							}
						},
						columns : 2,
						saveUrl : 'com.keensen.ump.qinsen.tumo.saveTumo.biz.ext',
						fields : [{
									xtype : 'datetimefield',
									format : "Y-m-d H:i:00",
									name : 'entity/produceDt',
									ref : '../../produceDt',
									fieldLabel : '生产时间',
									allowBlank : false,
									value : new Date(),
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'prodflagselcombobox',
									hiddenName : 'entity/prodFlagId',
									ref : '../../prodFlagId',
									allowBlank : false,
									anchor : '75%',
									colspan : 1,
									fieldLabel : '生产类型'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'linecombobox',
									ref : '../../lineId',
									prodTacheId : '100',
									hiddenName : 'entity/lineId',
									name : 'entity/lineId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '生产线 '
								}, {
									xtype : 'textfield',
									name : 'entity/dimoBatchNo',
									ref : '../../dimoBatchNo',
									fieldLabel : '底膜批次',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'supcombobox',
									hiddenName : 'entity/wfSupId',
									name : 'entity/wfSupId',
									ref : '../../wfSupId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '无纺布供应商'
								}, {
									xtype : 'textfield',
									name : 'entity/wfBatchNo',
									ref : '../../wfBatchNo',
									fieldLabel : '无纺布批号',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'mpspeccombobox',
									hiddenName : 'entity/specId',
									ref : '../../specId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '膜片型号 '
								}, {
									xtype : 'textfield',
									name : 'entity/batchNo',
									ref : '../../batchNo',
									fieldLabel : '膜片批次',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/planNo',
									fieldLabel : '计划单号',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {

									xtype : 'combo',
									fieldLabel : '是否外销',
									ref : '../../isWx',
									hiddenName : 'entity/isWx',
									emptyText : '--请选择--',
									allowBlank : false,
									anchor : '75%',
									store : [[null, '全部'], ['Y', '是'],
											['N', '否']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.inputWindow.isWx.reset();
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/orderNo',
									fieldLabel : '订单号',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/outLength',
									fieldLabel : '产出长度',
									allowBlank : true,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '保留品',
									ref : '../../isKeep',
									hiddenName : 'entity/isKeep',
									value : 'N',
									emptyText : '--请选择--',
									allowBlank : true,
									anchor : '75%',
									store : [[null, '全部'], ['Y', '是'],
											['N', '否']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.inputWindow.isKeep.reset();
										}
									}
								}, {
									name : 'entity/thickAvg',
									fieldLabel : '厚度(平均)',
									xtype : 'numberfield',
									decimalPrecision : 1,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/thickMin',
									fieldLabel : '厚度(最小)',
									xtype : 'numberfield',
									decimalPrecision : 1,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									name : 'entity/thickMax',
									fieldLabel : '厚度(最大)',
									xtype : 'numberfield',
									decimalPrecision : 1,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/tagNum',
									fieldLabel : '标签数',
									xtype : 'numberfield',
									decimalPrecision : 0,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									name : 'entity/tagLength',
									fieldLabel : '标签长度m',
									xtype : 'numberfield',
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'teamcombobox',
									name : 'entity/teamId',
									fieldLabel : '生产班组',
									hiddenName : 'entity/teamId',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'combo',
									name : 'entity/teamSeg',
									ref : '../../teamSeg',
									hiddenName : 'entity/teamSeg',
									fieldLabel : '时段',
									emptyText : '--请选择--',
									allowBlank : false,
									anchor : '75%',
									store : [['早', '早'], ['中', '中'], ['晚', '晚']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.inputWindow.teamSeg.reset();
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'mpworkercombobox',
									hiddenName : 'entity/workerId',
									name : 'entity/workerId',
									ref : '../../workerId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '操作工'
								}, {
									xtype : 'textfield',
									name : 'entity/outBatchNo',
									fieldLabel : '膜片卷号',
									// allowBlank : false,
									readOnly : true,
									emptyText : '系统自动生成',
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '已裁完',
									ref : '../../isCutOver',
									name : 'entity/isCutOver',
									hiddenName : 'entity/isCutOver',
									value : 'N',
									emptyText : '--请选择--',
									readOnly : true,
									allowBlank : true,
									value : 'N',
									anchor : '37.5%',
									colspan : 1,
									store : [[null, '全部'], ['Y', '是'],
											['N', '否']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.inputWindow.isCutOver.reset();
										}
									}
								}, {
									name : 'entity/dmUseLength',
									fieldLabel : '底膜放卷长度',
									xtype : 'numberfield',
									decimalPrecision : 0,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/remark',
									xtype : 'textarea',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '85%',
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									anchor : '85%',
									colspan : 2
								}, {
									name : 'entity/inboundRemark',
									xtype : 'textarea',
									fieldLabel : '入库意见',
									anchor : '85%',
									colspan : 2,
									allowBlank : true
								}]
					}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改涂膜记录',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
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
												_this.editWindow.hide();
											}
										})
							} else {
								Ext.getCmp('produce-tumo-list').store.load();
								_this.editWindow.hide();
							}
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.qinsen.tumo.expandTumo.biz.ext',
						saveUrl : 'com.keensen.ump.qinsen.tumo.saveTumo.biz.ext',
						fields : [{
									xtype : 'datetimefield',
									format : "Y-m-d H:i:00",
									name : 'entity/produceDt',
									dataIndex : 'produceDt',
									ref : '../../produceDt',
									fieldLabel : '生产时间',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'prodflagselcombobox',
									hiddenName : 'entity/prodFlagId',
									dataIndex : 'prodFlagId',
									ref : '../../prodFlagId',
									allowBlank : false,
									anchor : '75%',
									colspan : 1,
									fieldLabel : '生产类型'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'linecombobox',
									ref : '../../lineId',
									dataIndex : 'lineId',
									prodTacheId : '100',
									hiddenName : 'entity/lineId',
									name : 'entity/lineId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '生产线 '
								}, {
									xtype : 'textfield',
									name : 'entity/dimoBatchNo',
									ref : '../../dimoBatchNo',
									dataIndex : 'dimoBatchNo',
									fieldLabel : '底膜批次',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'supcombobox',
									hiddenName : 'entity/wfSupId',
									dataIndex : 'wfSupId',
									name : 'entity/wfSupId',
									ref : '../../wfSupId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '无纺布供应商'
								}, {
									xtype : 'textfield',
									name : 'entity/wfBatchNo',
									dataIndex : 'wfBatchNo',
									ref : '../../wfBatchNo',
									fieldLabel : '无纺布批号',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'mpspeccombobox',
									hiddenName : 'entity/specId',
									name : 'entity/specId',
									dataIndex : 'specId',
									ref : '../../specId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '膜片型号 '
								}, {
									xtype : 'textfield',
									name : 'entity/batchNo',
									dataIndex : 'batchNo',
									ref : '../../batchNo',
									fieldLabel : '膜片批次',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/planNo',
									dataIndex : 'planNo',
									fieldLabel : '计划单号',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {

									xtype : 'combo',
									fieldLabel : '是否外销',
									ref : '../../isWx',
									dataIndex : 'isWx',
									hiddenName : 'entity/isWx',
									emptyText : '--请选择--',
									allowBlank : false,
									anchor : '75%',
									store : [[null, '全部'], ['Y', '是'],
											['N', '否']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editWindow.isWx.reset();
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/orderNo',
									dataIndex : 'orderNo',
									fieldLabel : '订单号',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/outLength',
									dataIndex : 'outLength',
									fieldLabel : '产出长度',
									allowBlank : true,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '保留品',
									dataIndex : 'isKeep',
									ref : '../../isKeep',
									hiddenName : 'entity/isKeep',
									value : 'N',
									emptyText : '--请选择--',
									allowBlank : true,
									anchor : '75%',
									store : [[null, '全部'], ['Y', '是'],
											['N', '否']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editWindow.isKeep.reset();
										}
									}
								}, {
									name : 'entity/thickAvg',
									dataIndex : 'thickAvg',
									fieldLabel : '厚度(平均)',
									xtype : 'numberfield',
									decimalPrecision : 1,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/thickMin',
									dataIndex : 'thickMin',
									fieldLabel : '厚度(最小)',
									xtype : 'numberfield',
									decimalPrecision : 1,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									name : 'entity/thickMax',
									dataIndex : 'thickMax',
									fieldLabel : '厚度(最大)',
									xtype : 'numberfield',
									decimalPrecision : 1,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/tagNum',
									dataIndex : 'tagNum',
									fieldLabel : '标签数',
									xtype : 'numberfield',
									decimalPrecision : 0,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									name : 'entity/tagLength',
									dataIndex : 'tagLength',
									fieldLabel : '标签长度m',
									xtype : 'numberfield',
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'teamcombobox',
									name : 'entity/teamId',
									dataIndex : 'teamId',
									fieldLabel : '生产班组',
									hiddenName : 'entity/teamId',
									allowBlank : false,
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'combo',
									name : 'entity/teamSeg',
									dataIndex : 'teamSeg',
									ref : '../../teamSeg',
									hiddenName : 'entity/teamSeg',
									fieldLabel : '时段',
									emptyText : '--请选择--',
									allowBlank : false,
									anchor : '75%',
									store : [['早', '早'], ['中', '中'], ['晚', '晚']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editWindow.teamSeg.reset();
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'mpworkercombobox',
									hiddenName : 'entity/workerId',
									name : 'entity/workerId',
									dataIndex : 'workerId',
									ref : '../../workerId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '操作工'
								}, {
									xtype : 'textfield',
									name : 'entity/outBatchNo',
									dataIndex : 'outBatchNo',
									fieldLabel : '膜片卷号',
									// allowBlank : false,
									readOnly : true,
									emptyText : '系统自动生成',
									anchor : '75%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {

									xtype : 'combo',
									fieldLabel : '已裁完',
									ref : '../../isCutOver',
									name : 'entity/isCutOver',
									dataIndex : 'isCutOver',
									hiddenName : 'entity/isCutOver',
									value : 'N',
									emptyText : '--请选择--',
									readOnly : true,
									allowBlank : true,
									value : 'N',
									anchor : '37.5%',
									colspan : 1,
									store : [[null, '全部'], ['Y', '是'],
											['N', '否']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editWindow.isCutOver.reset();
										}
									}
								}, {
									name : 'entity/dmUseLength',
									dataIndex : 'dmUseLength',
									fieldLabel : '底膜放卷长度',
									xtype : 'numberfield',
									decimalPrecision : 0,
									minValue : 0,
									allowBlank : true,
									anchor : '75%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/remark',
									dataIndex : 'remark',
									xtype : 'textarea',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '85%',
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									anchor : '85%',
									colspan : 2
								}, {
									name : 'entity/inboundRemark',
									dataIndex : 'inboundRemark',
									xtype : 'textarea',
									fieldLabel : '入库意见',
									anchor : '85%',
									colspan : 2,
									allowBlank : true
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									xtype : 'hidden'
								}]
					}]
		});
	}

	this.initEditMpdWindow = function() {
		var _this = this;
		this.editMpdWindow = this.editMpdWindow || new Ext.fn.FormWindow({
			title : '修改C21浓度',
			height : 300,
			width : 400,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
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
												_this.editMpdWindow.hide();
											}
										})
							} else {
								Ext.getCmp('produce-tumo-list').store.load();
								_this.editMpdWindow.hide();
							}
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.qinsen.tumo.expandTumo.biz.ext',
						saveUrl : 'com.keensen.ump.qinsen.tumo.saveTumoMpd.biz.ext',
						fields : [{
									xtype : 'mpspeccombobox',
									dataIndex : 'specId',
									ref : '../../specId',
									readOnly : true,
									anchor : '75%',
									fieldLabel : '膜片型号 ',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									dataIndex : 'batchNo',
									ref : '../../batchNo',
									name : 'entity/batchNo',
									fieldLabel : '膜片批次',
									readOnly : true,
									anchor : '75%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/mpd',
									dataIndex : 'mpd',
									fieldLabel : 'C21浓度',
									allowBlank : false,
									anchor : '75%',
									colspan : 2
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									xtype : 'hidden'
								}]
					}]
		});
	}

	this.initSendChecWindow = function() {
		var _this = this;
		this.sendChecWindow = this.sendChecWindow || new Ext.fn.FormWindow({
			title : '膜片送检',
			height : 300,
			width : 400,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
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
										_this.sendChecWindow.hide();
									}
								})
					} else {
						Ext.getCmp('produce-tumo-list').store.load();
						_this.sendChecWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.qinsen.tumo.expandTumo4SendCheck.biz.ext',
				saveUrl : '1.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							dataIndex : 'specId',
							ref : '../../specId',
							readOnly : true,
							anchor : '75%',
							fieldLabel : '膜片型号 ',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'batchNo',
							ref : '../../batchNo',
							fieldLabel : '膜片批次',
							readOnly : true,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/checkNo',
							ref : '../../checkNo',
							dataIndex : 'checkNo',
							fieldLabel : '送检单号',
							readOnly : true,
							allowBlank : false,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							decimals : 0,
							minValue : 0,
							maxValue : 10000,
							allowBlank : false,
							name : 'entity/positionLength',
							ref : '../../positionLength',
							dataIndex : 'mpd',
							fieldLabel : '取样位置',
							allowBlank : false,
							anchor : '75%',
							colspan : 2
						}, {
							name : 'entity/batchId',
							dataIndex : 'recordId',
							xtype : 'hidden'
						}]
			}]
		});

		this.sendChecWindow.buttons[0].hide();
		this.sendChecWindow.buttons[1].hide();
		this.sendChecWindow.addButton({
					text : "打印",
					scope : this,
					// iconCls : 'icon-application_excel',
					handler : this.onPrintSendCheck
				});
		this.sendChecWindow.addButton({
					text : "关闭",
					scope : this,
					// iconCls : 'icon-application_excel',
					handler : function() {
						this.sendChecWindow.form.reset();
						this.sendChecWindow.hide()
					}
				});

	}
}