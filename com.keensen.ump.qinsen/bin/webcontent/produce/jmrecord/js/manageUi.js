com.keensen.ump.qinsen.produce.jmrecordMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initDetailPanel();
		this.initEditWindow();

		this.initDetailAddWindow();
		this.initDetailEditWindow();

		this.gridPanel = this.gridPanel || new Ext.Panel({
					layout : 'border',
					collapsible : false,
					titleCollapse : false,
					items : [this.listPanel, this.detailGrid]
				});

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'jmrecordmgr',
					panels : [this.queryPanel, this.gridPanel]
				});
		return this.lay;
	}
	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 140,
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
						// allowBlank : false,
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
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '102',
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
						xtype : 'componentworkercombobox',
						hiddenName : 'condition/workerId',
						anchor : '75%',
						fieldLabel : '操作工'
					}, {

						xtype : 'combo',
						fieldLabel : '气检合格',
						ref : '../isAirQualifiedId',
						hiddenName : 'condition/isAirQualifiedId',
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
						xtype : 'displayfield',
						height : '5',
						colspan : 4
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

						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '75%',
						fieldLabel : '卷膜序号'
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
			// title : '【卷膜记录列表】',
			region : 'center',
			hsPage : true,
			id : 'produce-jmrecord-list',
			tbar : [{
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
						text : '打印标签',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrintTag
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.juanmo.deleteJuanmoMain.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 40
							}), selModel, {
						header : '卷膜序号',
						width : 120,
						dataIndex : 'batchNo'
					}, {
						header : '生产线',
						width : 60,
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
						header : '车号',
						sortable : true,
						width : 50,
						dataIndex : 'trailer'
					}, {
						header : '试卷',
						width : 40,
						dataIndex : 'isTrialName'
					}, {
						header : '生产时间',
						width : 110,
						dataIndex : 'produceDate'
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
						header : '混卷',
						width : 40,
						dataIndex : 'isMixStr'
					}, {
						header : '投入页数',
						width : 70,
						dataIndex : 'pageCnt'
					}, {
						header : '废弃页数',
						width : 70,
						dataIndex : 'lossPageCnt'
					}, {
						header : '膜页数',
						width : 70,
						dataIndex : 'pageCnt'
					}, {
						header : '页数组成',
						width : 80,
						dataIndex : 'pageCntStr'
					}, {
						header : '气检',
						width : 60,
						dataIndex : 'isAirQualifiedName'
					}, {
						header : '合格入库',
						width : 70,
						dataIndex : 'applyJudgeResult'
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
						header : '班组',
						width : 70,
						dataIndex : 'teamName'
					}, {
						header : '操作工',
						width : 100,
						dataIndex : 'workerName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.juanmo.queryRecordsByPage.biz.ext',
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
							name : 'orderNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'blankingSize'
						}, {
							name : 'denseNet'
						}, {
							name : 'pageWidth'
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
							name : 'prodSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'isTrialName'
						}, {
							name : 'produceDay'
						}, {
							name : 'produceDate'
						}, {
							name : 'teamName'
						}, {
							name : 'workerName'
						}, {
							name : 'lineCode'
						}, {
							name : 'inPageCnt'
						}, {
							name : 'inPageLength'
						}, {
							name : 'lossPageCnt'
						}, {
							name : 'lossPageLength'
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
							name : 'isAirQualifiedName'
						}, {
							name : 'applyJudgeResult'
						}, {
							name : 'trailer'
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
			title : '【混卷组成】',
			region : 'south',
			collapsible : true,
			height : 150,
			hsPage : false,
			id : 'produce-jmdetailrecord-list',
			tbar : [{
						text : '添加',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.addDetailRecord
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.modiDetailRecord
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.delDetailRecord
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.juanmo.delDetailRecord.biz.ext',
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

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '卷膜主记录修改',
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
										// _this.editWindow.hide();
									}
								})
					} else {
						Ext.getCmp(listid).store.load();
						_this.editWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.qinsen.juanmo.expandJuanmo.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.juanmo.modiRecordById.biz.ext',
				fields : [{
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							dataIndex : 'produceDt',
							name : 'entity/produceDt',
							ref : '../../produceDt',
							fieldLabel : '生产时间',
							allowBlank : false,
							anchor : '85%',
							colspan : 1,
							value : new Date()
						}, {
							xtype : 'linecombobox',
							prodTacheId : 102,
							ref : '../../lineId',
							hiddenName : 'entity/lineId',
							dataIndex : 'lineId',
							allowBlank : false,
							anchor : '85%',
							fieldLabel : '生产线 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combo',
							fieldLabel : '试卷',
							ref : '../../isTrial',
							dataIndex : 'isTrial',
							hiddenName : 'entity/isTrial',
							emptyText : '--请选择--',
							allowBlank : false,
							anchor : '85%',
							store : [['N', '否'], ['Y', '是']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputPanel.isTrial.reset();
								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							ref : '../../batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							anchor : '85%',
							fieldLabel : '卷膜序号'
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
							anchor : '85%',
							fieldLabel : '订单号'
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							ref : '../../prodSpecId',
							state : 'Y',
							anchor : '85%',
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
							ref : '../../blankingSize',
							name : 'entity/blankingSize',
							fieldLabel : '下料尺寸',
							xtype : 'textfield',
							dataIndex : 'blankingSize',
							readOnly : true,
							anchor : '85%'
						}, {
							ref : '../../denseNet',
							name : 'entity/denseNet',
							dataIndex : 'denseNet',
							fieldLabel : '浓网',
							xtype : 'textfield',
							readOnly : true,
							anchor : '85%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../pageWidth',
							name : 'entity/pageWidth',
							dataIndex : 'pageWidth',
							fieldLabel : '页宽',
							xtype : 'textfield',
							readOnly : true,
							anchor : '85%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'tacheteamcombobox',
							tacheCode : 'JM',
							name : 'entity/teamId',
							dataIndex : 'teamId',
							fieldLabel : '生产班组',
							hiddenName : 'entity/teamId',
							ref : '../../teamId',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							ref : '../../workerName',
							xtype : 'componentworkercombobox',
							hiddenName : 'entity/workerId',
							dataIndex : 'workerId',
							fieldLabel : '操作工',
							anchor : '85%'
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
							anchor : '90%',
							allowBlank : true
						}, {
							name : 'entity/recordId',
							dataIndex : 'recordId',
							xtype : 'hidden'
						}]
			}]
		});
	}

	this.initDetailAddWindow = function() {

		this.detailAddWindow = this.detailAddWindow || new Ext.fn.FormWindow({
			title : '卷膜子记录-添加',
			height : 600,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.detailGrid,
				columns : 2,
				saveUrl : 'com.keensen.ump.qinsen.juanmo.createDetailRecord.biz.ext',
				fields : [{
							xtype : 'displayfield',
							value : '<p style="color:red;">卷膜主信息</p>',
							colspan : 2
						}, {
							xtype : 'textfield',
							anchor : '90%',
							ref : '../../juanMoBatchNo',
							readOnly : true,
							name : 'juanMoBatchNo',
							fieldLabel : '卷膜序号'
						}, {
							xtype : 'datetimefield',
							// format : "Y-m-d H:i:00",
							anchor : '90%',
							ref : '../../produceDt',
							readOnly : true,
							name : 'produceDt',
							fieldLabel : '生产时间'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'orderNo',
							readOnly : true,
							ref : '../../orderNo',
							anchor : '90%',
							fieldLabel : '订单号'
						}, {
							xtype : 'prodspeccombobox',
							name : 'prodSpecId',
							ref : '../../prodSpecId',
							anchor : '90%',
							fieldLabel : '元件型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							readOnly : true

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../pageCnt',
							name : 'pageCnt',
							fieldLabel : '膜页数',
							xtype : 'textfield',
							readOnly : true,
							anchor : '90%'
						}, {
							ref : '../../blankingSize',
							name : 'blankingSize',
							fieldLabel : '下料尺寸',
							xtype : 'textfield',
							readOnly : true,
							anchor : '90%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../denseNet',
							name : 'denseNet',
							fieldLabel : '浓网',
							xtype : 'textfield',
							readOnly : true,
							anchor : '90%'
						}, {
							ref : '../../pageWidth',
							name : 'pageWidth',
							fieldLabel : '页宽',
							xtype : 'textfield',
							readOnly : true,
							anchor : '90%'
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">添加叠膜信息</p>',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/cdmBatchNo',
							ref : '../../cdmBatchNo',
							style : '{font-weight:bold;}',
							allowBlank : false,
							fieldLabel : '叠膜栈板号',
							anchor : '90%',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.dealCdmBatchNo();

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
							ref : '../../inQuantity',
							name : 'entity/inQuantity',
							fieldLabel : '投入页数',
							allowBlank : false,
							xtype : 'numberfield',
							minValue : 0,
							decimalPrecision : 1,
							anchor : '90%'
						}, {
							ref : '../../outQuantity',
							name : 'entity/outQuantity',
							fieldLabel : '使用页数',
							allowBlank : false,
							xtype : 'numberfield',
							minValue : 0,
							decimalPrecision : 1,
							anchor : '90%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'orderNo2',
							readOnly : true,
							ref : '../../orderNo2',
							anchor : '90%',
							fieldLabel : '订单号'
						}, {
							xtype : 'prodspeccombobox',
							name : 'prodSpecId2',
							ref : '../../prodSpecId2',
							anchor : '90%',
							fieldLabel : '元件型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							readOnly : true

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../blankingSize2',
							name : 'blankingSize2',
							fieldLabel : '下料尺寸',
							xtype : 'textfield',
							readOnly : true,
							anchor : '85%'
						}, {
							ref : '../../denseNet2',
							name : 'denseNet2',
							fieldLabel : '浓网',
							xtype : 'textfield',
							readOnly : true,
							anchor : '85%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../pageWidth2',
							name : 'pageWidth2',
							fieldLabel : '页宽',
							xtype : 'textfield',
							readOnly : true,
							anchor : '85%'
						}, {
							ref : '../../mainBatchId',
							name : 'entity/mainBatchId',
							xtype : 'hidden'
						}, {
							ref : '../../cdmBatchId',
							name : 'entity/cdmBatchId',
							xtype : 'hidden'
						}]
			}]
		})
	}

	this.initDetailEditWindow = function() {
		var _this = this;
		this.detailEditWindow = this.detailEditWindow
				|| new Ext.fn.FormWindow({
					title : '卷膜子记录-修改',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.detailGrid,
						columns : 2,
						loadUrl : 'com.keensen.ump.qinsen.juanmo.expandJuanmoDetail.biz.ext',
						saveUrl : 'com.keensen.ump.qinsen.juanmo.updateDetailRecordById.biz.ext',
						fields : [{
									xtype : 'textfield',
									ref : '../../juanMoBatchNo',
									dataIndex : 'juanMoBatchNo',
									readOnly : true,
									anchor : '85%',
									fieldLabel : '卷膜序号'
								}, {
									dataIndex : 'cdmBatchNo',
									xtype : 'textfield',
									ref : '../../cdmBatchNo',
									readOnly : true,
									anchor : '85%',
									fieldLabel : '叠膜栈板号'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									dataIndex : 'cdmOrderNo',
									xtype : 'textfield',
									ref : '../../cdmOrderNo',
									readOnly : true,
									anchor : '85%',
									fieldLabel : '叠膜订单号'
								}, {
									dataIndex : 'cdmSpecId',
									xtype : 'prodspeccombobox',
									ref : '../../cdmSpecId',
									anchor : '85%',
									fieldLabel : '元件型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									readOnly : true,
									anchor : '85%',
									fieldLabel : '叠膜元件型号'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									dataIndex : 'cdmBlankingSize',
									xtype : 'textfield',
									ref : '../../cdmBlankingSize',
									readOnly : true,
									anchor : '85%',
									fieldLabel : '裁膜下料尺寸'
								}, {
									dataIndex : 'cdmDenseNet',
									xtype : 'textfield',
									ref : '../../cdmDenseNet',
									readOnly : true,
									anchor : '85%',
									fieldLabel : '叠膜浓网'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									dataIndex : 'cdmPageWidth',
									fieldLabel : '叠膜页宽',
									xtype : 'textfield',
									ref : '../../cdmPageWidth',
									readOnly : true,
									anchor : '85%'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									dataIndex : 'tumoBatchNo',
									fieldLabel : '膜片批次',
									xtype : 'textfield',
									ref : '../../tumoBatchNo',
									readOnly : true,
									anchor : '85%'
								}, {
									dataIndex : 'mpSpecId',
									fieldLabel : '膜片型号',
									ref : '../../mpSpecId',
									xtype : 'mpspeccombobox',
									anchor : '85%',
									readOnly : true

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									ref : '../../inQuantity',
									dataIndex : 'inQuantity',
									name : 'entity/inQuantity',
									fieldLabel : '投入页数',
									allowBlank : false,
									xtype : 'numberfield',
									minValue : 0,
									decimalPrecision : 1,
									anchor : '85%'
								}, {
									ref : '../../outQuantity',
									dataIndex : 'outQuantity',
									name : 'entity/outQuantity',
									fieldLabel : '使用页数',
									allowBlank : false,
									xtype : 'numberfield',
									minValue : 0,
									decimalPrecision : 1,
									anchor : '85%'
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									xtype : 'hidden'
								}]
					}]
				});
	}
}