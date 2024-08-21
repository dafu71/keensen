com.keensen.ump.qinsen.produce.CaidiemoMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		this.defectTmWin = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'TM',
					recTacheCode : 'CM'
				});
		this.defectZmWin = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'ZM',
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
						//value : 'N',
						emptyText : '--请选择--',
						//readOnly : true,
						allowBlank : true,
						//value : 'N',
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
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAdd
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEdit
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
								}]
					})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增裁叠膜记录',
			height : 480,
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
							Ext.getCmp(listid).store.load();
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
				columns : 2,
				saveUrl : 'com.keensen.ump.qinsen.cdm.insertCaidiemo.biz.ext',
				fields : [{
							ref : '../../tumoBatchNo',
							name : 'entity/tumoBatchNo',
							style : '{font-weight:bold;}',
							fieldLabel : '膜片批次',
							allowBlank : false,
							colspan : 2,
							anchor : '86%',
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.dealTumoBatchNo();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							value : "<span style='color:red'>"
									+ '光标置于此框内后扫码或手工录入后按回车' + "</span>",
							colspan : 2
						}, {
							ref : '../../cnt',
							fieldLabel : '栈板数',
							xtype : 'numberfield',
							name : 'entity/cnt',
							allowBlank : false,
							anchor : '75%',
							minValue : 1,
							decimalPrecision : 0
						}, {
							xtype : 'textfield',
							anchor : '75%',
							ref : '../../batchNo',
							name : 'entity/batchNo',
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
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '订单号'
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							hiddenName : 'entity/prodSpecId',
							state:'Y',
							anchor : '75%',
							fieldLabel : '元件型号 ',
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
							anchor : '75%',
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
							}
						}, {
							ref : '../../isCutOver',
							xtype : 'combo',
							name : 'entity/isCutOver',
							hiddenName : 'entity/isCutOver',
							anchor : '75%',
							fieldLabel : '已裁完',
							allowBlank : false,
							store : [['Y', '是'], ['N', '否']],
							emptyText : '--请选择--',
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.isCutOver.reset();
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
							readOnly : true,
							anchor : '75%'
						}, {
							ref : '../../denseNet',
							name : 'entity/denseNet',
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
							fieldLabel : '生产班组',
							hiddenName : 'entity/teamId',
							ref : '../../teamId',
							allowBlank : false,
							anchor : '75%',
							colspan : 1
						}, {
							ref : '../../workerName',
							xtype : 'displayfield',
							fieldLabel : '操作工',
							anchor : '75%',
							value : nowStaffName
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
							allowBlank : true
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
						}]
			}]
		});
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
						Ext.getCmp(listid).store.load();
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
							anchor : '75%',
							fieldLabel : '订单号'
						}, {
							xtype : 'prodspeccombobox',
							ref : '../../prodSpecId',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							state:'Y',
							anchor : '75%',
							fieldLabel : '元件型号 ',
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
							}
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
							xtype : 'mpworkercombobox',
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
							name : 'entity/recordId',
							xtype : 'hidden',
							dataIndex : 'recordId'
						}]
			}]
		});
	}
}