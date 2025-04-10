com.keensen.ump.qinsen.quality.watertestMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initFirstTestWindow();
		this.initFirstTestWindow2();

		this.initTrialPanel();
		this.initProdPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "watertestmgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initTrialPanel = function() {
		this.trialmgr = new com.keensen.ump.qinsen.quality.trialMgr();
		this.trialPanel = this.trialmgr.initPanel();
		this.trialmgr.initEvent();
		this.reTestWindow = this.trialPanel[0];
		this.modifyWindow = this.trialPanel[1];
	};

	this.initProdPanel = function() {
		this.prodmgr = new com.keensen.ump.qinsen.quality.prodMgr();
		this.prodPanel = this.prodmgr.initPanel();
		this.prodmgr.initEvent();
		this.reTestWindow2 = this.prodPanel[0];
		this.modifyWindow2 = this.prodPanel[1];
	};

	this.initQueryPanel = function() {

		var _this = this;

		this.hpmcStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['8寸', '8寸'], ['4寸', '4寸'], ['类4寸', '类4寸'],
							['常规通量(家用)', '常规通量(家用)'], ['大通量(家用)', '大通量(家用)'],
							['其他', '其他'], ['膜片', '膜片']]
				});

		this.queryPanel = new Ext.fn.QueryPanel({
			height : 150,
			columns : 4,
			border : true,
			id : 'watertestmgrqueryform',
			// collapsible : true,
			titleCollapse : false,
			fields : [{
						xtype : 'datetimefield',
						name : 'condition/fCheckBeginDate',
						fieldLabel : '初检时间',
						colspan : 1,
						anchor : '85%',
						// allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/fCheckEndDate',
						fieldLabel : '至',
						colspan : 1,
						anchor : '85%',
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'testtypecombo',
						hiddenName : 'condition/testTypeId',
						anchor : '85%',
						fieldLabel : '检测类型',

						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/testSpecId',
						ref : '../testSpecId',
						anchor : '85%',
						fieldLabel : '测试型号',
						typeAhead : true,
						lazyRender : true,
						// typeAheadDelay : 100,
						minChars : 1,
						mode : 'local',
						// anyMatch : true,
						// lastQuery : '',
						forceSelection : true,
						editable : true,
						queryDelay : 200,// 查询延时，毫秒,
						listeners : {
							'focus' : {
								fn : function(e) {
									e.expand();
									this.doQuery(this.allQuery, true);
								},
								buffer : 200
							},
							"expand" : function(A) {
								// this.reset()
							},
							'beforequery' : function(e) {
								var combo = _this.queryPanel.testSpecId, size = 15, idx = 1;

								if (e.query === '' || e.query == null) {// 当输入框删除内容后，清除过滤器，
									// 显示原本store数据,使其能够再次检索
									combo.store.clearFilter();
									combo.expand();

								} else {
									if (!e.forceAll) {

										combo.store.clearFilter();// 使每次输入都能进行检索，不用担心输入过慢
										var input = e.query;
										// 检索的正则
										var regExp = new RegExp(".*" + input
												+ ".*");
										// 执行检索
										combo.store.filterBy(function(record,
														id) {
													if (idx > size) {
														return false;
													}
													var text = record
															.get(combo.displayField);
													var flag = regExp
															.test(text);
													if (flag) {
														idx++;
													}
													return flag;
												});
										combo.expand();
										return false;
									}
								}
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'dictcombobox',
						hiddenName : 'condition/isBatchQualified',
						fieldLabel : '量产判定(合格)',
						dictData : KS_YESORNO,
						anchor : '85%',
						emptyText : "--请选择--",
						colspan : 1
					}, {
						xtype : 'dictcombobox',
						hiddenName : 'condition/isProdQualified',
						fieldLabel : '单品判定(合格)',
						dictData : KS_YESORNO,
						anchor : '85%',
						emptyText : "--请选择--",
						colspan : 1
					}, {
						name : 'condition/dimoBatchNo',
						xtype : 'textfield',
						fieldLabel : '底膜批次',
						anchor : '85%'
					}, {
						name : 'condition/tumoBatchNoStr',
						xtype : 'textfield',
						fieldLabel : '膜片批次%-%',
						anchor : '85%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						name : 'condition/juanmoBatchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '卷膜序号'
					}, {
						name : 'condition/prodBatchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '元件序号'
					}, {
						name : 'condition/testSpecName',
						xtype : 'textfield',
						fieldLabel : '测试型号%-%',
						anchor : '85%'
					}, {
						xtype : 'combobox',
						forceSelection : true,
						// allowBlank : false,
						mode : 'local',
						fieldLabel : '元件类型',
						ref : '../../hpmc',
						hiddenName : 'condition/hpmc',
						dataIndex : 'hpmc',
						anchor : '85%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.hpmcStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}]
		});

		this.queryPanel.addButton({
					text : "导出",
					// rescode : '10002661',
					hidden : true,
					id : watertestExportButton,
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
			viewConfig : {
		// forceFit : true
			},
			hsPage : true,
			id : 'watertestmgrlist',
			tbar : [/*
					 * { text : '试卷初检', scope : this, iconCls :
					 * 'icon-application_add', handler : this.firstTest }, '-',
					 */{
						text : '初检',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.otherFirstTest
					}, '-', {
						text : '复检',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.reTest
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.modiRecord
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.delRecord
					}, '-', {
						text : '判定说明',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewRemark
					}, '-', {
						text : '工艺员备注',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : gyyFlag != 1,
						handler : this.onRemark
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.watertest.deleteWatertest.biz.ext',
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
				header : '元件类型',
				width : 120,
				dataIndex : 'hpmc'
			}, {
				header : '工艺员备注 ',
				width : 120,
				dataIndex : 'gyyRemark'
			}, {
				header : '测试型号',
				width : 80,
				dataIndex : 'testSpecName'
			}/*
				 * , { header : '拟入库型号', width : 120, dataIndex :
				 * 'ifProdSpecName' }, { header : '拟贴标型号', width : 120,
				 * dataIndex : 'markSpecName' }
				 */, {
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
				width : 300,
				dataIndex : 'remark'
			}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.watertest.queryRecordsByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
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
						}, {
							name : 'gyyRemark'
						}, {
							name : 'hpmc'
						}]
			})
		})
	}

	this.initFirstTestWindow = function() {
		var _this = this;
		this.firstTestWindow = this.firstTestWindow || new Ext.fn.FormWindow({
			title : '试卷水测记录-初检',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
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
										_this.firstTestWindow.hide();
									}
								})
					} else {
						Ext.Msg.alert('系统提示', '操作成功！', function() {
									var store = _this.listPanel.store;
									store.baseParams = _this.queryPanel
											.getForm().getValues();
									store.reload();
									_this.firstTestWindow.hide();
								});

					}
				},
				columns : 24,
				saveUrl : 'com.keensen.ump.qinsen.watertest.createRecord.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检测信息</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							ref : '../../checkCode',
							style : '{font-weight:bold;}',
							allowBlank : false,
							fieldLabel : '产品编码',
							emptyText : '手工输入后回车，卷膜序号、元件序号均可',
							anchor : '95%',
							colspan : 16,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.dealCodeInfo();

									}

								}
							}
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../juanmoBatchNo',
							// name : 'entity/juanmoBatchNo',
							allowBlank : false,
							fieldLabel : '卷膜序号'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../temp',
							name : 'entity/temp',
							allowBlank : false,
							fieldLabel : '测试温度'
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							value : new Date(),
							name : 'entity/fCheckTm',
							ref : '../../fCheckTm',
							fieldLabel : '检测时间',
							allowBlank : false,
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../qjResult',
							readOnly : true,
							fieldLabel : '气检值'
						}, {
							xtype : 'prodspeccombobox',
							emptyText : '',
							hiddenName : 'entity/testSpecId',
							anchor : '95%',
							colspan : 8,
							ref : '../../testSpecId',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '测试型号'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../area',
							readOnly : true,
							fieldLabel : '膜面积'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../fGpd',
							name : 'entity/fGpd',
							allowBlank : false,
							fieldLabel : '产水量',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									_this.calcFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../fSalt',
							name : 'entity/fSalt',
							allowBlank : false,
							fieldLabel : '脱盐率%',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									_this.calcFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../fFactorB',
							name : 'entity/fFactorB',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testmaccombo',
							hiddenName : 'entity/fMacName',
							valueField : 'propValueName',
							displayField : 'propValueName',
							anchor : '95%',
							colspan : 8,
							ref : '../../fMacName',
							allowBlank : false,
							fieldLabel : '测试膜壳'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>适配量产标准</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../batchGpdLowLimit',
							readOnly : true,
							fieldLabel : '产水量下限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../batchGpdUpLimit',
							readOnly : true,
							fieldLabel : '产水量上限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							name : 'entity/batchSaltStd',
							ref : '../../batchSaltLowLimit',
							readOnly : true,
							fieldLabel : '脱盐率'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							name : 'entity/batchFactorBStd',
							ref : '../../batchFactorBUpLimit',
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>量产判定</span>",
							colspan : 24
						}, new Ext.form.ComboBox({
									ref : '../../isBatchQualified',
									hiddenName : 'entity/isBatchQualified',
									fieldLabel : '判定结果',
									store : new Ext.data.SimpleStore({
												fields : ['value', 'name'],
												data : [['Y', '合格'],
														['N', '不合格']]
											}),
									valueField : 'value',
									displayField : 'name',
									editable : false,
									lazyRender : true,
									mode : 'local',
									triggerAction : 'all',
									emptyText : '未判...',
									anchor : '95%',
									colspan : 8,
									readOnly : true
								}), {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 24,
							ref : '../../batchJudgeInfo',
							fieldLabel : '自动判定信息'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>适配单品标准</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../prodGpdLowLimit',
							readOnly : true,
							fieldLabel : '产水量下限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../prodGpdUpLimit',
							readOnly : true,
							fieldLabel : '产水量上限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							name : 'entity/prodSaltStd',
							ref : '../../prodSaltLowLimit',
							readOnly : true,
							fieldLabel : '脱盐率'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							name : 'entity/prodFactorBStd',
							ref : '../../prodFactorBUpLimit',
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>单品判定</span>",
							colspan : 24
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/ifProdSpecId',
							anchor : '95%',
							colspan : 8,
							ref : '../../ifProdSpecId',
							allowBlank : false,
							fieldLabel : '拟入库型号',
							listeners : {
								scope : this,

								'select' : function(combo, record, index) {
									this.loadProdStd();
									this.firstTestWindow.markSpecName
											.setValue(combo.getRawValue());
								}
							}
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/markSpecName',
							valueField : 'name',
							displayField : 'name',
							anchor : '95%',
							colspan : 8,
							ref : '../../markSpecName',
							allowBlank : false,
							fieldLabel : '拟贴标型号'
						}, new Ext.form.ComboBox({
									ref : '../../isProdQualified',
									hiddenName : 'entity/isProdQualified',
									fieldLabel : '判定结果',
									store : new Ext.data.SimpleStore({
												fields : ['value', 'name'],
												data : [['Y', '合格'],
														['N', '不合格']]
											}),
									valueField : 'value',
									displayField : 'name',
									editable : false,
									lazyRender : true,
									mode : 'local',
									triggerAction : 'all',
									emptyText : '未判...',
									anchor : '95%',
									colspan : 8,
									readOnly : true
								}), {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 24,
							ref : '../../prodJudgeInfo',
							fieldLabel : '自动判定信息'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'qryexecutoroptioncombobox',
							teamId : '100069',
							emptyText : '',
							hiddenName : 'entity/fCheckerId',
							anchor : '95%',
							colspan : 8,
							ref : '../../fCheckerId',
							allowBlank : false,
							fieldLabel : '分析员'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							ref : '../../remark',
							xtype : 'textarea',
							name : 'entity/remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 24,
							allowBlank : true
						}, {
							xtype : 'hidden',
							ref : '../../juanmoBatchId',
							name : 'entity/juanmoBatchId'
						}, {
							xtype : 'hidden',
							ref : '../../testTypeId',
							name : 'entity/testTypeId',
							value : 300040
						}, {
							xtype : 'hidden',
							ref : '../../batchGpdStdStr',
							name : 'entity/batchGpdStdStr'
						}, {
							xtype : 'hidden',
							ref : '../../prodGpdStdStr',
							name : 'entity/prodGpdStdStr'
						}]
			}]
		});
	}

	this.initFirstTestWindow2 = function() {
		var _this = this;
		this.firstTestWindow2 = this.firstTestWindow2
				|| new Ext.fn.FormWindow({
					title : '产品水测记录-初检',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
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
												_this.firstTestWindow2.hide();
											}
										})
							} else {
								Ext.Msg.alert('系统提示', '操作成功！', function() {
											var store = _this.listPanel.store;
											store.baseParams = _this.queryPanel
													.getForm().getValues();
											store.reload();
											_this.firstTestWindow2.hide();
										});

							}
						},
						columns : 24,
						saveUrl : 'com.keensen.ump.qinsen.watertest.createRecord.biz.ext',
						fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检测信息</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							ref : '../../checkCode',
							style : '{font-weight:bold;}',
							allowBlank : false,
							fieldLabel : '产品编码',
							emptyText : '手工输入后回车，卷膜序号、元件序号均可',
							anchor : '95%',
							colspan : 16,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.dealCodeInfo2();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../qjResult',
							fieldLabel : '气检值'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testtypecombo',
							hiddenName : 'entity/testTypeId',
							ref : '../../testTypeId',
							anchor : '85%',
							colspan : 12,
							fieldLabel : '检测类型',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							value : new Date(),
							name : 'entity/fCheckTm',
							ref : '../../fCheckTm',
							fieldLabel : '检测时间',
							allowBlank : false,
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../temp',
							name : 'entity/temp',
							allowBlank : false,
							fieldLabel : '测试温度'
						}, {
							xtype : 'prodspeccombobox',
							emptyText : '',
							hiddenName : 'entity/testSpecId',
							anchor : '95%',
							colspan : 8,
							ref : '../../testSpecId',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '测试型号'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../area',
							readOnly : true,
							fieldLabel : '膜面积'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testmaccombo',
							hiddenName : 'entity/fMacName',
							valueField : 'propValueName',
							displayField : 'propValueName',
							anchor : '95%',
							colspan : 8,
							ref : '../../fMacName',
							allowBlank : false,
							fieldLabel : '测试膜壳'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>适配量产</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../aGpdLowLimit',
							readOnly : true,
							fieldLabel : '产水量下限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../aGpdUpLimit',
							readOnly : true,
							fieldLabel : '产水量上限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							// name : 'entity/prodSaltStd',
							ref : '../../aSaltLowLimit',
							readOnly : true,
							fieldLabel : '脱盐率'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							// name : 'entity/batchFactorBStd',
							ref : '../../aFactorBUpLimit',
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>适配单品</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../bGpdLowLimit',
							readOnly : true,
							fieldLabel : '产水量下限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							// name : 'entity/prodSaltStd',
							ref : '../../bSaltLowLimit',
							readOnly : true,
							fieldLabel : '脱盐率'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检测结果</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../fGpd',
							name : 'entity/fGpd',
							allowBlank : false,
							fieldLabel : '产水量',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									_this.calcFactorB2();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../fSalt',
							name : 'entity/fSalt',
							allowBlank : false,
							fieldLabel : '脱盐率%',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									_this.calcFactorB2();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../fFactorB',
							name : 'entity/fFactorB',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>判定结果</span>",
							colspan : 24
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/ifProdSpecId',
							anchor : '95%',
							colspan : 8,
							ref : '../../ifProdSpecId',
							allowBlank : false,
							fieldLabel : '拟入库型号',
							listeners : {
								scope : this,

								'select' : function(combo, record, index) {
									this.loadProdStd();
									this.firstTestWindow2.markSpecName
											.setValue(combo.getRawValue());
								}
							}
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/markSpecName',
							valueField : 'name',
							displayField : 'name',
							anchor : '95%',
							colspan : 8,
							ref : '../../markSpecName',
							allowBlank : false,
							fieldLabel : '拟贴标型号'
						}, new Ext.form.ComboBox({
									ref : '../../isProdQualified',
									hiddenName : 'entity/isProdQualified',
									fieldLabel : '判定结果',
									store : new Ext.data.SimpleStore({
												fields : ['value', 'name'],
												data : [['Y', '合格'],
														['N', '不合格']]
											}),
									valueField : 'value',
									displayField : 'name',
									editable : false,
									lazyRender : true,
									mode : 'local',
									triggerAction : 'all',
									emptyText : '未判...',
									anchor : '95%',
									colspan : 8,
									readOnly : true
								}), {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 24,
							ref : '../../judgeInfo',
							fieldLabel : '自动判定信息'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'qryexecutoroptioncombobox',
							teamId : '100069',
							emptyText : '',
							hiddenName : 'entity/fCheckerId',
							anchor : '95%',
							colspan : 8,
							ref : '../../fCheckerId',
							allowBlank : false,
							fieldLabel : '分析员'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							ref : '../../remark',
							xtype : 'textarea',
							name : 'entity/remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 24,
							allowBlank : true
						}, {
							xtype : 'hidden',
							ref : '../../juanmoBatchId',
							name : 'entity/juanmoBatchId'
						}, {
							xtype : 'hidden',
							ref : '../../juanmoBatchNo',
							name : 'entity/juanmoBatchNo'
						}, {
							xtype : 'hidden',
							ref : '../../prodGpdStdStr',
							name : 'entity/prodGpdStdStr'
						}, {
							xtype : 'hidden',
							ref : '../../prodSaltStd',
							name : 'entity/prodSaltStd'
						}, {
							xtype : 'hidden',
							ref : '../../prodFactorBStd',
							name : 'entity/prodFactorBStd'
						}]
					}]
				});
	}
}