com.keensen.ump.qinsen.produce.CaidiemoMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.defectTmWin = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'TM',
					recTacheCode : 'CM'
				});
		this.defectZmWin = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'ZM',
					recTacheCode : 'CM'
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
					height : 180,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【裁叠膜记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceBeginDate',
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
						name : 'condition/produceEndDate',
						fieldLabel : '至',
						colspan : 1,
						anchor : '75%',
						editable : true,
						format : 'Y-m-d H:i',
						allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'componentlinecombobox',
						prodTacheId : '100',
						hiddenName : 'condition/lineId',
						anchor : '85%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/mpSpecId',
						anchor : '75%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						anchor : '75%',
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
						anchor : '75%',
						fieldLabel : '操作工'
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '75%',
						fieldLabel : '订单号'
					}, {
						ref : '../batchNo',
						name : 'condition/batchNo',
						anchor : '75%',
						xtype : 'textfield',
						fieldLabel : '栈板号'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						ref : '../tumoBatchNoStr',
						name : 'condition/tumoBatchNoStr',
						anchor : '75%',
						xtype : 'textfield',
						fieldLabel : '膜片批次%-%'
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
							}]
				});

		this.listPanel = new Ext.fn.ListPanel({
			title : '【涂膜记录列表】',
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
			delUrl : '1.biz.ext',
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
														_this.inputWindow
																.hide();
													}
												})
									} else {
										Ext.getCmp(listid).store.load();
										_this.inputWindow.hide();
									}
								},
								columns : 2,
								saveUrl : '1.biz.ext',
								fields : [{
											name : 'tumoBatchNo',
											fieldLabel : '膜片批次',
											colspan : 2,
											anchor : '75%'
										}, {
											xtype : 'displayfield',
											value : '光标置于此框内后扫码或手工录入后按回车',
											height : '5',
											colspan : 2
										}]
							}]
				});
	}
}