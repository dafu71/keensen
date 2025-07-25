com.keensen.ump.qinsen.produce.CaidiemoMgr = function() {

	this.initPanel = function() {

		// var defectTmWinId = Ext.id();
		// var defectZmWinId = Ext.id();

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		this.initUpdateLocationWindow();

		this.initRemainLengthWindow();

		this.initUpdateIsCutOverWindow();

		this.initChooseOrderWindow();

		this.defectTmWin = new com.keensen.ump.defectWindow({
					// id : defectTmWinId,
					relationListId : 'produce-caidiemo-list',
					dutyTacheCode : 'TM',
					recTacheCode : 'CM'
				});
		this.defectZmWin = new com.keensen.ump.defectWindow({
					// id : defectZmWinId,
					relationListId : 'produce-caidiemo-list',
					dutyTacheCode : 'ZM',
					batchNoControl : true,
					recTacheCode : 'CM'
				});

		this.defectViewWindow = new com.keensen.ump.defectViewWindow({
					id : 'cdm-defectviewwindow'
				});

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'caidiemomgr',
					panels : [this.queryPanel, this.listPanel]
				});

	}

	this.initStore = function() {

		this.pageTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['长页', '长页'], ['短页', '短页']]
				});

		this.cdmdutyStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.workorder2.queryBatchNo4CdmDuty.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'planId'
					}, {
						name : 'orderId'
					}, {
						name : 'planDate'
					}, {
						name : 'batchNo'
					}]
		})
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					// title : '【裁叠膜记录查询】',
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
						xtype : 'componentlinecombobox',
						hiddenName : 'condition/lineId',
						anchor : '95%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/mpSpecId',
						anchor : '95%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						anchor : '95%',
						fieldLabel : '元件型号 ',
						typeAhead : true,
						typeAheadDelay : 100,
						minChars : 1,
						queryMode : 'local',
						lastQuery : '',
						editable : true,
						listeners : {
							'specialkey' : function() {
								return false;
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
						ref : '../batchNo',
						name : 'condition/batchNo',
						anchor : '95%',
						xtype : 'textfield',
						fieldLabel : '栈板号'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						ref : '../tumoBatchNoStr',
						name : 'condition/tumoBatchNoStr',
						anchor : '95%',
						xtype : 'textfield',
						fieldLabel : '膜片批次%-%'
					}, {

						xtype : 'combo',
						fieldLabel : '已裁完',
						ref : '../isCutOver',
						name : 'condition/isCutOver',
						hiddenName : 'condition/isCutOver',
						// value : 'N',
						emptyText : '--请选择--',
						// readOnly : true,
						allowBlank : true,
						// value : 'N',
						anchor : '95%',
						colspan : 1,
						store : [[null, '全部'], ['Y', '是'], ['N', '否']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.isCutOver.reset();
							}
						}
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					rescode : '10002661',
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "剩余可用长度提醒",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onWarn
				});

	}

	this.initListPanel = function() {
		var _this = this;
		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : '',
					listeners : {

		}
				});

		this.bar = this.bar || new Ext.Toolbar({
					items : [{
								text : '新增工业膜',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAdd
							}, '-', {
								text : '新增家用膜',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAdd2
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEdit
							}, '-', {
								text : '膜页栈板存放',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onUpdateLocation
							}, '-', {
								text : '打印标签',
								scope : this,
								iconCls : 'icon-printer',
								handler : this.onPrintCaidieMoTag
							}, '->', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDel
							}, '->', {
								text : '录入铸膜不良',
								scope : this,
								iconCls : 'icon-application_add',
								hidden : true,
								handler : this.onaddZmDefect
							}, '->', {
								text : '录入涂膜不良',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onaddTmDefect
							}]
				});

		this.listPanel = new Ext.fn.ListPanel({
			// title : '【裁叠膜记录列表】',
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计长度(m):',
						id : 'totalCdmLengthTxt'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计页数:',
						id : 'totalQuantityTxt'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计未卷页数:',
						id : 'totalUnusedQuantityTxt'
					}],
			hsPage : true,
			id : 'produce-caidiemo-list',
			listeners : {
				// 第二行工具栏
				render : function() {
					scope : this, _this.bar.render(_this.listPanel.tbar);
				}
			},
			selModel : this.selModel,
			delUrl : 'com.keensen.ump.qinsen.cdm.deleteCaidiemo.biz.ext',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
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
						header : '已裁完',
						width : 50,
						dataIndex : 'isCutOverName'
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
						dataIndex : 'totalLoss',
						renderer : function(v, m, r, i) {
							if (!Ext.isEmpty(v) && v > 0) {
								var tumoBatchNo = r.get('tumoBatchNo');
								var style = "<a style='text-decoration:none'";
								var str = style
										+ " href='javascript:defectView("
										+ Ext.encode(tumoBatchNo) + ");'>" + v
										+ "</a>";

								return str;
							}
						}
					}, {
						header : '剩余可用长度',
						width : 80,
						dataIndex : 'remainLength'
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
						header : '长/短页',
						width : 60,
						dataIndex : 'pageType'
					}, {
						header : '膜页栈板储位',
						width : 120,
						dataIndex : 'location'
					}, {
						header : '生产时间',
						width : 110,
						dataIndex : 'produceDate'
					}, {
						header : '生产线',
						width : 70,
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
						header : '备注',
						width : 120,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.cdm.queryRecordsByPage.biz.ext',
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
								}, {
									name : 'isCutOver'
								}, {
									name : 'isCutOverName'
								}, {
									name : 'location'
								}, {
									name : 'remainLength'
								}, {
									name : 'pageType'
								}, {
									name : 'dmBatchId'
								}, {
									name : 'dimoBatchNo'
								}]
					})
		})
	}

	this.initInputWindow = function() {
		var _this = this;

		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增裁叠膜记录',
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

						var recordIdStr = r.recordIdStr;
						Ext.Msg.confirm('提示', '是否立即打印产品标签？', function(btn) {
							// Ext.getCmp('produce-caidiemo-list').store.reload();
							var store = _this.listPanel.store;

							store.baseParams = _this.queryPanel.getForm()
									.getValues();
							store.load({
								params : {
									"pageCond/begin" : 0,
									"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
								}
							});
							_this.inputWindow.hide();
							if (btn === 'yes') {
								var f = document.getElementById('cdmprintForm');
								f.batchIdStr.value = recordIdStr;
								var actionUrl = 'com.keensen.ump.qinsen.printCaidiemoTags.flow?token='
										+ Date.now();
								f.action = actionUrl;
								f.submit();
							}
						});
					}
				},
				columns : 24,
				saveUrl : 'com.keensen.ump.qinsen.cdm.insertCaidiemo.biz.ext',
				fields : [{
					xtype : 'displayfield',
					fieldLabel : "<span style='color:red'>" + '作业计划信息'
							+ "</span>",
					colspan : 24,
					labelSeparator : ''// 去掉冒号
				}, {
					xtype : 'textfield',
					ref : '../../orderNo',
					name : 'entity/orderNo',
					// readOnly : true,
					allowBlank : false,
					anchor : '86%',
					fieldLabel : '订单号',
					colspan : 10
				}, {
					xtype : 'button',
					text : '选择订单',
					id : chooseOrderBtn,
					scope : this,
					handler : function() {
						this.chooseOrder();
					},
					colspan : 2
				}, {
					xtype : 'prodspeccombobox',
					ref : '../../prodSpecId',
					hiddenName : 'entity/prodSpecId',
					state : 'Y',
					anchor : '86%',
					fieldLabel : '生产规格型号 ',
					//readOnly : true,
					allowBlank : false,
					typeAhead : true,
					typeAheadDelay : 100,
					minChars : 1,
					queryMode : 'local',
					lastQuery : '',
					editable : true,
					listeners : {
						scope : this,
						'specialkey' : function() {
							return false;
						},
						'select' : function(combo, record, eOpts) {
							this.inputWindow.blankingSize
									.setValue(record.data.blankingSize);
							this.inputWindow.pageWidth
									.setValue(record.data.pageWidth);
							this.inputWindow.denseNet
									.setValue(record.data.denseNet);
						},

						beforeselect: function(combo, record, index) {
							// 不执行任何操作，从而禁用触发器点击功能
							var flag = Ext.getCmp(chooseOrderBtn).isVisible();
							if(!flag) return false;
						}
					},
					colspan : 12
				}, {
					xtype : 'displayfield',
					ref : '../../displayfield1',
					height : 5,
					colspan : 24
				}, {
					xtype : 'textfield',
					ref : '../../orderType',
					// name : 'entity/orderType',
					readOnly : true,
					// allowBlank : false,
					anchor : '86%',
					fieldLabel : '订单类型',
					colspan : 12
				}, {
					xtype : 'textfield',
					ref : '../../materSpecName2',
					// name : 'entity/materSpecName2',
					// allowBlank : false,
					readOnly : true,
					anchor : '86%',
					fieldLabel : '订单下达型号',
					colspan : 12
				}, {
					xtype : 'displayfield',
					ref : '../../displayfield2',
					height : 5,
					colspan : 24
				}, {
					xtype : 'textfield',
					ref : '../../orderAmount',
					// name : 'entity/orderAmount',
					// allowBlank : false,
					readOnly : true,
					anchor : '86%',
					fieldLabel : '订单数量(支)',
					colspan : 12
				}, {
					xtype : 'textfield',
					ref : '../../planDate',
					name : 'entity/planDate',
					// allowBlank : false,
					readOnly : true,
					anchor : '86%',
					fieldLabel : '锁定计划日期',
					colspan : 12
				}, {
					xtype : 'displayfield',
					ref : '../../displayfield3',
					height : 5,
					colspan : 24
				}, {
					xtype : 'textfield',
					ref : '../../jmAmount',
					// name : 'entity/jmAmount',
					// allowBlank : false,
					readOnly : true,
					anchor : '86%',
					fieldLabel : '计划卷膜数量(支)',
					colspan : 12
				}, {
					xtype : 'textfield',
					ref : '../../realityAmount',
					// name : 'entity/jmAmount',
					// allowBlank : false,
					readOnly : true,
					anchor : '86%',
					fieldLabel : '实际卷膜数量(支)',
					colspan : 12
				}, {
					xtype : 'displayfield',
					ref : '../../displayfield1',
					height : 5,
					colspan : 24
				}, {
					xtype : 'textfield',
					ref : '../../prodRemark',
					// name : 'entity/jmAmount',
					// allowBlank : false,
					readOnly : true,
					anchor : '95%',
					fieldLabel : '订单生产备注',
					colspan : 24
				}, {
					xtype : 'displayfield',
					fieldLabel : "<span style='color:red'>" + '裁叠膜信息'
							+ "</span>",
					colspan : 24,
					labelSeparator : ''// 去掉冒号
				}, /*
					 * { ref : '../../tumoBatchNo', name : 'entity/tumoBatchNo',
					 * style : '{font-weight:bold;}', fieldLabel : '膜片批次',
					 * allowBlank : false, colspan : 12, anchor : '86%',
					 * listeners : { scope : this, specialkey : function(C, D) {
					 * if (D.getKey() == Ext.EventObject.ENTER) {
					 * this.dealTumoBatchNo(); } } } }
					 */{
					xtype : 'combobox',
					forceSelection : true,
					// readOnly : true,
					allowBlank : false,
					mode : 'local',
					fieldLabel : '膜片批次',
					ref : '../../tumoBatchNo',
					// hiddenName : 'entity/tumoBatchNo',
					anchor : '86%',
					colspan : 12,
					emptyText : '--请选择--',
					editable : false,
					store : this.cdmdutyStore,
					displayField : "batchNo",
					valueField : "batchNo",
					listeners : {
						"expand" : function(A) {
							this.reset()
						},
						'select' : function(combo, record, index) {
							if (index > -1) {

								/*
								 * var orderNo = record.data.orderNo; var
								 * tumoBatchNo = record.data.batchNo; var planId =
								 * record.data.planId; var orderId =
								 * record.data.orderId;
								 * 
								 * var orderType = record.data.orderType; var
								 * materSpecName2 = record.data.materSpecName2;
								 * var orderAmount = record.data.orderAmount;
								 * var planDate = record.data.planDate; var
								 * jmAmount = record.data.jmAmount; var
								 * materSpecId = record.data.materSpecId;
								 * _this.inputWindow.orderNo.setValue(orderNo);
								 * _this.inputWindow.tumoBatchNo
								 * .setValue(tumoBatchNo);
								 * _this.inputWindow.planId.setValue(planId);
								 * _this.inputWindow.orderType.setValue(orderType);
								 * _this.inputWindow.materSpecName2
								 * .setValue(materSpecName2);
								 * _this.inputWindow.orderAmount
								 * .setValue(orderAmount);
								 * _this.inputWindow.planDate.setValue(planDate);
								 * _this.inputWindow.jmAmount.setValue(jmAmount);
								 * _this.inputWindow.prodSpecId.setValue(materSpecId);
								 * _this.inputWindow.orderId.setValue(orderId);
								 */
								var planId = record.data.planId;
								_this.inputWindow.planId.setValue(planId);
								_this.dealTumoBatchNo();
							}
						}
					}
				}, {
					ref : '../../tumoBatchNo2',
					name : 'entity/tumoBatchNo',
					style : '{font-weight:bold;}',
					emptyText : '光标置于此框内后扫码',
					fieldLabel : '膜片批次扫码',
					allowBlank : false,
					colspan : 12,
					anchor : '86%',
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.checkTumoBatchNo();

							}

						}
					}
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					ref : '../../cnt',
					fieldLabel : '栈板数',
					xtype : 'numberfield',
					name : 'entity/cnt',
					allowBlank : false,
					anchor : '86%',
					minValue : 1,
					decimalPrecision : 0,
					colspan : 12
				}, {
					xtype : 'textfield',
					anchor : '86%',
					ref : '../../batchNo',
					name : 'entity/batchNo',
					allowBlank : false,
					fieldLabel : '起始栈板号',
					colspan : 12
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 24
				}, {
					xtype : 'datetimefield',
					format : "Y-m-d H:i:00",
					name : 'entity/produceDt',
					dataIndex : 'produceDt',
					ref : '../../produceDt',
					fieldLabel : '生产时间',
					allowBlank : false,
					anchor : '86%',
					colspan : 12
				}, {
					xtype : 'componentlinecombobox',
					ref : '../../lineId',
					hiddenName : 'entity/lineId',
					allowBlank : false,
					anchor : '86%',
					fieldLabel : '生产线',
					colspan : 12
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 24
				}, {
					ref : '../../isToMix',
					name : 'entity/isToMix',
					hiddenName : 'entity/isToMix',
					anchor : '86%',
					xtype : 'combo',
					fieldLabel : '单/混卷',
					allowBlank : false,
					store : [['Y', '混卷'], ['N', '单卷']],
					emptyText : '--请选择--',
					listeners : {
						scope : this,
						'expand' : function(A) {
							this.inputWindow.isToMix.reset();
						}
					},
					colspan : 12
				}, {
					ref : '../../isCutOver',
					xtype : 'combo',
					name : 'entity/isCutOver',
					hiddenName : 'entity/isCutOver',
					anchor : '86%',
					fieldLabel : '已裁完',
					allowBlank : false,
					store : [['Y', '是'], ['N', '否']],
					emptyText : '--请选择--',
					listeners : {
						scope : this,
						'expand' : function(A) {
							this.inputWindow.isCutOver.reset();
						}
					},
					colspan : 12
				}, {
					xtype : 'displayfield',
					value : '<p style="color:red;">工艺变更中，暂以纸质文件为准。</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 12
				}, {
					xtype : 'displayfield',
					height : '5',
					hidden : true,
					colspan : 24
				}, {
					ref : '../../blankingSize',
					name : 'entity/blankingSize',
					fieldLabel : '膜片下料尺寸',
					xtype : 'textfield',
					hidden : true,
					readOnly : true,
					anchor : '86%',
					colspan : 12
				}/*
					 * , { ref : '../../denseNet', name : 'entity/denseNet',
					 * fieldLabel : '浓网', xtype : 'textfield', readOnly : true,
					 * anchor : '86%', colspan : 12 }
					 */, {
					ref : '../../denseNetType',
					name : 'entity/denseNet',
					fieldLabel : '浓网型号',
					xtype : 'textfield',
					readOnly : true,
					hidden : true,
					anchor : '100%',
					colspan : 6
				}, {
					ref : '../../denseNetWidth',
					name : 'entity/denseNetWidth',
					fieldLabel : '浓网尺寸',
					xtype : 'textfield',
					readOnly : true,
					hidden : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'displayfield',
					height : '5',
					hidden : true,
					colspan : 24
				}, {
					ref : '../../pageWidth',
					name : 'entity/pageWidth',
					fieldLabel : '页宽',
					xtype : 'textfield',
					readOnly : true,
					hidden : true,
					anchor : '86%',
					colspan : 12
				}, {
					ref : '../../lightNetType',
					name : 'entity/lightNetType',
					fieldLabel : '淡网型号',
					xtype : 'textfield',
					readOnly : true,
					hidden : true,
					anchor : '100%',
					colspan : 6
				}, {
					ref : '../../lightNetShortPage',
					name : 'entity/lightNetShortPage',
					fieldLabel : '淡网短页',
					xtype : 'textfield',
					readOnly : true,
					hidden : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 24
				}, {
					ref : '../../numPerWad',
					fieldLabel : '每叠页数',
					allowBlank : false,
					name : 'entity/numPerWad',
					xtype : 'numberfield',
					minValue : 0,
					decimalPrecision : 1,
					anchor : '86%',
					colspan : 12
				}, {
					ref : '../../quantity',
					fieldLabel : '栈板页数',
					allowBlank : false,
					name : 'entity/quantity',
					xtype : 'numberfield',
					minValue : 0,
					decimalPrecision : 1,
					anchor : '86%',
					colspan : 12
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 24
				}, {
					xtype : 'tacheteamcombobox',
					tacheCode : 'CM',
					name : 'entity/teamId',
					fieldLabel : '生产班组',
					hiddenName : 'entity/teamId',
					ref : '../../teamId',
					allowBlank : false,
					anchor : '86%',
					colspan : 12
				}, {
					ref : '../../workerName',
					xtype : 'displayfield',
					fieldLabel : '操作工',
					anchor : '86%',
					value : nowStaffName,
					colspan : 12
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 24
				}, {
					// name : 'entity/remark',
					ref : '../../denseNetCdm',
					height : 30,
					xtype : 'textarea',
					readOnly : true,
					fieldLabel : '叠膜要求',
					colspan : 24,
					anchor : '86%'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 24
				}, {
					name : 'entity/remark',
					height : 30,
					xtype : 'textarea',
					fieldLabel : '备注',
					colspan : 24,
					anchor : '86%',
					allowBlank : true
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 24
				}, {
					xtype : 'combo',
					fieldLabel : '长页/短页',
					ref : '../../pageType',
					allowBlank : false,
					mode : 'local',
					anchor : '86%',
					colspan : 12,
					emptyText : '--请选择--',
					editable : false,
					store : _this.pageTypeStore,
					dataIndex : 'pageType',
					hiddenName : 'entity/pageType',
					displayField : "name",
					valueField : "code",
					scope : this,
					listeners : {
						"expand" : function(A) {
							this.reset()
						}
					}
				}, {
					name : 'entity/workerId',
					xtype : 'hidden',
					value : nowStaffId
				}, {
					name : 'entity/tumoBatchId',
					ref : '../../tumoBatchId',
					xtype : 'hidden'
				}, {
					name : 'entity/startSeq',
					xtype : 'hidden',
					ref : '../../startSeq'
				}, {
					name : 'entity/planId',
					xtype : 'hidden',
					ref : '../../planId'
				}, {
					name : 'entity/orderId',
					xtype : 'hidden',
					ref : '../../orderId'
				}]
			}]
		});

		/*
		 * this.inputWindow.addButton({ text : "领取任务", scope : this, handler :
		 * this.onPlan });
		 */
		/*
		 * this.inputWindow.addButton({ text : "完工报告", scope : this, handler :
		 * this.onReport });
		 */
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改裁叠膜记录',
			height : 480,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
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
										_this.editWindow.hide();
									}
								})
					} else {
						Ext.getCmp('produce-caidiemo-list').store.load();
						_this.editWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.qinsen.cdm.expandCaidiemo.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.cdm.modifyCaidiemo.biz.ext',
				fields : [{
							ref : '../../tumoBatchNo',
							dataIndex : 'tumoBatchNo',
							fieldLabel : '膜片批次',
							readOnly : true,
							colspan : 1,
							anchor : '75%'
						}, {
							xtype : 'textfield',
							anchor : '75%',
							ref : '../../batchNo',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '起始栈板号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
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
							xtype : 'componentlinecombobox',
							ref : '../../lineId',
							dataIndex : 'lineId',
							hiddenName : 'entity/lineId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '生产线 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../orderNo',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							allowBlank : false,
							readOnly : true,
							anchor : '75%',
							fieldLabel : '订单号'
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							state : 'Y',
							anchor : '75%',
							fieldLabel : '元件型号 ',
							readOnly : true,
							allowBlank : false,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								scope : this,
								'specialkey' : function() {
									return false;
								},
								'select' : function(combo, record, eOpts) {
									this.editWindow.blankingSize
											.setValue(record.data.blankingSize);
									this.editWindow.pageWidth
											.setValue(record.data.pageWidth);
									this.editWindow.denseNet
											.setValue(record.data.denseNet);
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../isToMix',
							name : 'entity/isToMix',
							hiddenName : 'entity/isToMix',
							dataIndex : 'isToMix',
							anchor : '75%',
							xtype : 'combo',
							fieldLabel : '单/混卷',
							allowBlank : false,
							store : [['Y', '混卷'], ['N', '单卷']],
							emptyText : '--请选择--',
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.isToMix.reset();
								}
							},
							colspan : 1
						}, {
							ref : '../../isCutOver',
							xtype : 'combo',
							name : 'entity/isCutOver',
							hiddenName : 'entity/isCutOver',
							dataIndex : 'isCutOver',
							anchor : '75%',
							fieldLabel : '已裁完',
							allowBlank : false,
							store : [['Y', '是'], ['N', '否']],
							emptyText : '--请选择--',
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.isCutOver.reset();
								}
							},
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../blankingSize',
							dataIndex : 'blankingSize',
							name : 'entity/blankingSize',
							fieldLabel : '下料尺寸',
							xtype : 'textfield',
							readOnly : true,
							anchor : '75%'
						}, {
							ref : '../../denseNet',
							name : 'entity/denseNet',
							dataIndex : 'denseNet',
							fieldLabel : '浓网',
							xtype : 'textfield',
							readOnly : true,
							anchor : '75%'
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
							anchor : '75%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../numPerWad',
							fieldLabel : '每叠页数',
							dataIndex : 'numPerWad',
							allowBlank : false,
							name : 'entity/numPerWad',
							xtype : 'numberfield',
							minValue : 0,
							decimalPrecision : 1,
							anchor : '75%'
						}, {
							ref : '../../quantity',
							fieldLabel : '栈板页数',
							allowBlank : false,
							name : 'entity/quantity',
							dataIndex : 'quantity',
							xtype : 'numberfield',
							minValue : 0,
							decimalPrecision : 1,
							anchor : '75%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'tacheteamcombobox',
							tacheCode : 'CM',
							name : 'entity/teamId',
							dataIndex : 'teamId',
							fieldLabel : '生产班组',
							hiddenName : 'entity/teamId',
							ref : '../../teamId',
							allowBlank : false,
							anchor : '75%',
							colspan : 1
						}, {
							ref : '../../workerId',
							name : 'entity/workerId',
							hiddenName : 'entity/workerId',
							xtype : 'componentworkercombobox',
							fieldLabel : '操作工',
							anchor : '75%',
							dataIndex : 'workerId'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/remark',
							xtype : 'textarea',
							fieldLabel : '备注',
							colspan : 2,
							anchor : '86%',
							allowBlank : true,
							dataIndex : 'remark'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 24
						}, {
							xtype : 'combo',
							fieldLabel : '长页/短页',
							ref : '../../pageType',
							// allowBlank : false,
							mode : 'local',
							anchor : '75%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.pageTypeStore,
							dataIndex : 'pageType',
							hiddenName : 'entity/pageType',
							displayField : "name",
							valueField : "code",
							scope : this,
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/recordId',
							xtype : 'hidden',
							dataIndex : 'recordId'
						}, {
							name : 'entity/tumoBatchId',
							xtype : 'hidden',
							dataIndex : 'tumoBatchId'
						}]
			}]
		});
	}

	this.initUpdateLocationWindow = function() {
		var _this = this;
		this.updateLocationWindow = this.updateLocationWindow
				|| new Ext.fn.FormWindow({
					title : '膜页栈板存放',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {
							_this.updateLocationWindow.hide();
							_this.listPanel.refresh();
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.qinsen.cdm.expandCaidiemo.biz.ext',
						saveUrl : 'com.keensen.ump.qinsen.cdm.updateLocation.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/batchNo',
									dataIndex : 'batchNo',
									fieldLabel : '叠膜栈板号',
									ref : '../../batchNo',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/location',
									dataIndex : 'location',
									fieldLabel : '膜页栈板储位',
									ref : '../../location',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									name : 'entity/recordId',
									ref : '../../recordId',
									xtype : 'hidden',
									dataIndex : 'recordId'
								}]
					}]
				});
	}

	this.initRemainLengthWindow = function() {

		var selModel4RemainLength = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel4RemainLength = this.listPanel4RemainLength
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : true,
					selModel : selModel4RemainLength,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							selModel4RemainLength, {
								dataIndex : 'batchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'produceDt',
								header : '生产时间'
							}, {
								dataIndex : 'remainLength',
								header : '剩余可用长度'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.compquery.queryRemainLengthByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'batchNo'
								}, {
									name : 'produceDt'
								}, {
									name : 'remainLength'
								}]
					})
				})

		this.queryPanel4RemainLength = this.queryPanel4RemainLength
				|| new Ext.fn.QueryPanel({
					height : 110,
					columns : 2,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'radiogroup',
								colspan : 2,
								columns : 2,
								name : 'condition',
								ref : '../reserve1',
								allowBlank : false,
								fieldLabel : '',
								anchor : '100%',
								items : [{
											boxLabel : '数量X>=50m或者数量X<=-50m',
											name : 'condition/condition',
											inputValue : '1',
											checked : true
										}, {
											boxLabel : '数量3m<=X<=50m或者数量-50m<=X<=-3',
											name : 'condition/condition',
											inputValue : '2'
										}]
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							},

							{
								xtype : 'datetimefield',
								name : 'condition/produceDtStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '90%',
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
								anchor : '90%',
								editable : true,
								format : 'Y-m-d H:i',
								// allowBlank : false,
								value : new Date().add(Date.DAY, 1)
										.format('Y-m-d 00:00')
							}]
				});

		this.queryPanel4RemainLength.addButton({
					text : "导出",
					scope : this,
					// rescode : '10002661',
					iconCls : 'icon-application_excel',
					handler : this.exportRemainLength
				});

		this.queryPanel4RemainLength.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.remainLengthWindow.hide();
					}

				});

		this.remainLengthWindow = this.remainLengthWindow || new Ext.Window({
					title : '剩余可用长度提醒',
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
					items : [this.queryPanel4RemainLength,
							this.listPanel4RemainLength]

				});
	}

	this.initUpdateIsCutOverWindow = function() {
		var _this = this;
		this.updateIsCutOverWindow = this.updateIsCutOverWindow
				|| new Ext.fn.FormWindow({
					title : '膜片裁完确认',
					height : 320,
					width : 480,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {

							_this.updateIsCutOverWindow.hide();
							var _vals = _this.queryPanel.getForm().getValues();
							_this.queryPanel.fireEvent("query",
									_this.queryPanel, _vals);

						},
						columns : 2,
						saveUrl : 'com.keensen.ump.qinsen.tumo.saveTumoIsCutOver.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									fieldLabel : '膜片批次',
									anchor : '90%',
									colspan : 2,
									allowBlank : false,
									readOnly : true,
									name : 'tumo/batchNo',
									ref : '../../batchNo'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'radiogroup',
									columns : 2,
									name : 'isCutOver',
									ref : '../../isCutOver',
									allowBlank : false,
									fieldLabel : '是否已裁完<span style="color:red">*</span>',
									anchor : '90%',
									items : [{
												boxLabel : '已裁完',
												name : 'tumo/isCutOver',
												inputValue : 'Y',
												checked : true
											}, {
												boxLabel : '未裁完',
												name : 'tumo/isCutOver',
												inputValue : 'N'
											}],
									colspan : 2
								}, {
									name : 'tumo/recordId',
									ref : '../../recordId',
									xtype : 'hidden'
								}]
					}]
				});
	}

	this.initChooseOrderWindow = function() {

		var chooseOrderSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseOrderListPanel = this.chooseOrderListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.chooseOrderOk
							}],
					hsPage : true,
					selModel : chooseOrderSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(), chooseOrderSelModel,
							{
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
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {

					}	,
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
								}]
					})
				})

		this.queryChooseOrderPanel = this.queryChooseOrderPanel
				|| new Ext.fn.QueryPanel({
							height : 130,
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
									}, {
										xtype : "dateregion",
										colspan : 1,
										// anchor : '75%',
										nameArray : ['condition/planDateStart',
												'condition/planDateEnd'],
										fieldLabel : "计划日期",
										format : "Y-m-d"
									}, {
										xtype : 'hidden',
										name : 'condition/homeType',
										value : 1
									}]
						});

		this.queryChooseOrderPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseOrderWindow.hide();
					}

				});

		this.chooseOrderWindow = this.chooseOrderWindow || new Ext.Window({
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
					items : [this.queryChooseOrderPanel,
							this.chooseOrderListPanel]

				});
	}
}