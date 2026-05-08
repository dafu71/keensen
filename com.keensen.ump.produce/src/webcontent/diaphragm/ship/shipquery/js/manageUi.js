com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr = function() {

	this.initPanel = function() {
		
		this.initQueryPanel();
		this.initListPanel();
		this.initAddReportWindow();
		
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shipquerymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 175,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : "dateregion",
						colspan : 1,
						anchor : '95%',
						nameArray : ['condition/produceDtStart',
								'condition/produceDtEnd'],
						fieldLabel : "生产日期",
						format : "Y-m-d"
					}, {
						xtype : 'mplinecombobox',
						hiddenName : 'condition/lineId',
						anchor : '95%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '95%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'textfield',
						name : 'condition/batchNo2',
						anchor : '95%',
						fieldLabel : '膜片批次'
					}/*
						 * , { xtype : 'displayfield', height : '5', colspan : 4 }, {
						 * xtype : 'supcombobox', hiddenName :
						 * 'condition/supId', anchor : '95%', fieldLabel :
						 * '无纺布供应商' }, { xtype : 'combobox', anchor : '95%',
						 * name : 'condition/isWx', hiddenName :
						 * 'condition/isWx', fieldLabel : '是否外销', triggerAction :
						 * "all", store : new Ext.data.ArrayStore({ id : 0,
						 * fields : ['mykey', 'myvalue'], data : [['N', '否'],
						 * ['Y', '是']] }), mode : "local", editable : false,
						 * displayField : "myvalue", valueField : "mykey",
						 * forceSelection : true, emptyText : "--请选择--" }, {
						 * xtype : 'mpworkercombobox', hiddenName :
						 * 'condition/workerId', anchor : '95%', fieldLabel :
						 * '操作工' }, { xtype : 'storagecombobox', hiddenName :
						 * 'condition/storageId', anchor : '95%', fieldLabel :
						 * '仓库' }
						 */, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '95%',
						fieldLabel : '订单号'
					}, {
						xtype : 'textfield',
						name : 'condition/planNo',
						anchor : '95%',
						fieldLabel : '计划单号'
					}, {
						xtype : 'textfield',
						name : 'condition/dimoBatchNo',
						anchor : '95%',
						fieldLabel : '底膜批次'
					}, {
						xtype : 'mpperfcombobox',
						hiddenName : 'condition/perfFlagId',
						anchor : '95%',
						fieldLabel : '膜片等级'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/deliveryOrderNo',
						anchor : '95%',
						fieldLabel : '实际发货<br>订单号'
					}, {
						xtype : "dateregion",
						colspan : 1,
						anchor : '95%',
						nameArray : ['condition/deliveryDtStart',
								'condition/deliveryDtEnd'],
						fieldLabel : "实际发货日期",
						format : "Y-m-d"
					}, {
						xtype : 'textarea',
						name : 'condition/batchNoStr2',
						emptyText : '多个批次请用逗号分隔，或一行一个批次',
						colspan : 1,
						anchor : '95%',
						fieldLabel : '多膜片批次'
					}, {
						xtype : 'textfield',
						name : 'condition/clientName',
						anchor : '95%',
						fieldLabel : '发货客户'
					}, {
						xtype : 'hidden',
						name : 'condition/batchNoStr'
					}/*
						 * , { xtype : 'displayfield', height : '5', colspan : 4 }
						 *//*
						 * , { xtype : 'dictcombobox', name :
						 * 'condition/ifconfirm', anchor : '95%', dataIndex :
						 * 'condition/ifconfirm', hiddenName :
						 * 'condition/ifconfirm', fieldLabel : '是否已发货', dictData :
						 * ABF_YESORNO }
						 */]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					rescode : '10003668',
					hidden : true,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.EditListPanel({

			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '生成出货报告',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onCreateReport
					}, '-', {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : sendAmountTotalId
					}],
			hsPage : true,
			id : 'ship-shipquery-list',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
				header : '操作',
				scope : this,
				renderer : function(v, m, r, i) {
					var id = r.get('id');
					if (uid == 'KS00880' || uid == 'dafu') {
						var style = "<a style='color:red;text-decoration:none'";
						var str = style + " href='javascript:dealship(" + id
								+ ");'>" + "取消发货单</a>";

						return str
					} else
						return '';
				}
			}, {
				dataIndex : 'batchNo',
				header : '膜片批次'
			}, {
				dataIndex : 'deliveryOrderNo',
				header : '实际发货<br>订单号'
			}, {
				dataIndex : 'deliveryDt',
				header : '实际发货时间'
			}, {
				dataIndex : 'clientName',
				hidden : uid != 'KS00610',
				header : '实际发货客户'
			}, {
				dataIndex : 'produceDt',
				header : '生产日期'
			}, {
				dataIndex : 'sendAmount',
				header : '发货长度(米)'
			}, {
				dataIndex : 'outLength',
				header : '长度(米)'
			}, {
				dataIndex : 'usefulLength',
				header : '可用长度(米)'
			}, {
				dataIndex : 'qualifidLength',
				header : '合格长度(米)'
			}, {
				dataIndex : 'loss',
				header : '不良(米)'
			}, {
				header : '膜片卷号',
				width : 100,
				dataIndex : 'outBatchNo'
			}, {
				dataIndex : 'dimoBatchNo',
				header : '底膜批次'
			}, {
				dataIndex : 'lineCode',
				header : '生产线'
			}, {
				dataIndex : 'materClassCode',
				header : '膜片系列'
			}, {
				dataIndex : 'materSpecCode',
				header : '膜片型号'
			}, {
				dataIndex : 'supName',
				header : '无纺布供应商'
			}, {
				dataIndex : 'planNo',
				header : '计划单号'
			}, {
				dataIndex : 'orderNo',
				header : '订单号'
			}, {
				dataIndex : 'perfFlagName',
				header : '等级'
			}, {
				dataIndex : 'createName',
				header : '发货单生成人'
			}, {
				dataIndex : 'createTime',
				header : '发货单生成时间'
			}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.shipquery.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'specId'
						},{
							name : 'outBatchNo'
						}, {
							name : 'sendAmountTotal'
						}, {
							name : 'batchNo'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'storageName'
						}, {
							name : 'storageId'
						}, {
							name : 'planNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'recordId'
						}, {
							name : 'rkflag'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'supName'
						}, {
							name : 'lineCode'
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'ifconfirm'
						}, {
							name : 'id'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'createName'
						}, {
							name : 'loss'
						}, {
							name : 'createTime'
						}, {
							name : 'sendAmount'
						}, {
							name : 'deliveryOrderNo'
						}, {
							name : 'deliveryDt'
						}, {
							name : 'clientName'
						}]
			})
		})
	}

	// 新增出货报告
	this.initAddReportWindow = function() {

		var _this = this;
		
		this.productNameStore = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [["反渗透膜片", "反渗透膜片"], ["纳滤膜片", "纳滤膜片"]]

				});

		var addSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.addReportListPanel = this.addReportListPanel
				|| new Ext.fn.ListPanel({
							height : 400,
							sm : addSelModel,
							region : 'center',
							viewConfig : {
								forceFit : false
							},
							// autoExpandColumn : '3',
							hsPage : false,
							autoScroll : true,
							delUrl : '1.biz.ext',
							columns : [addSelModel, {
										dataIndex : 'batchNo',
										header : '批号'
									}, {
										dataIndex : 'dm',
										header : '底膜号'
									}, {
										dataIndex : 'amountIndeed',
										header : '长度实发数量m'
									}, {
										dataIndex : 'amountUse',
										header : '长度可用数量m'
									}, {
										dataIndex : 'thickAvg',
										header : '尺寸平均厚度μm '
									}, {
										dataIndex : 'widthMp',
										header : '尺寸宽幅mm'
									}, {
										dataIndex : 'widthValid',
										header : '尺寸有效涂布宽度mm'
									}, {
										dataIndex : 'gfd',
										header : '性能通量GFD '
									}, {
										dataIndex : 'salt',
										header : '性能脱盐率%'
									}, {
										dataIndex : 'defect1',
										header : '外观瑕疵点位置、类型和长度 '
									}, {
										dataIndex : 'defect2',
										header : '外观瑕疵标签个数'
									}, {
										dataIndex : 'package',
										header : '包装'
									}, {
										dataIndex : 'result',
										header : '膜片批次判定'
									}],
							store : new Ext.data.JsonStore({
										url : 'com.keensen.ump.produce.quality.mpreport.query4CreateDeliveryMpReport.biz.ext',
										root : 'data',
										autoLoad : false,
										totalProperty : '',
										baseParams : {

							}			,
										fields : [{
													name : 'batchNo'
												}, {
													name : 'dm'
												}, {
													name : 'amountIndeed'
												}, {
													name : 'amountUse'
												}, {
													name : 'thickAvg'
												}, {
													name : 'widthMp'
												}, {
													name : 'widthValid'
												}, {
													name : 'gfd'
												}, {
													name : 'salt'
												}, {
													name : 'defect1'
												}, {
													name : 'defect2'
												}, {
													name : 'package'
												}, {
													name : 'result'
												}

										]
									})
						})

		this.addReportPanel = this.addReportPanel || new Ext.fn.InputPanel({
					height : 200,
					region : 'north',
					baseCls : "x-plain",
					// pgrid : this.listPanel,
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 6,
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'displayfield',
								fieldLabel : "<span style='color:red;'>产品信息</span>",
								colspan : 6
							}, {
								xtype : 'combobox',
								anchor : '75%',
								colspan : 3,
								name : 'productName',
								hiddenName : 'productName',
								dataIndex : 'productName',
								allowBlank : false,
								fieldLabel : '货品名称',
								triggerAction : "all",
								store : _this.productNameStore,
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "--请选择--",
								listeners : {

								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'textfield',
								name : 'labelSpecName',
								dataIndex : 'labelSpecName',
								ref:'../../labelSpecName',
								allowBlank : false,
								fieldLabel : '规格型号',
								anchor : '75%',
								colspan : 3
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'materSpecId',
								dataIndex : 'materSpecId',
								ref:'../../materSpecId',
								allowBlank : false,
								anchor : '75%',
								colspan : 3,
								fieldLabel : '膜片型号 ',
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
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'textfield',
								name : 'orderNo',
								ref:'../../orderNo',
								allowBlank : false,
								fieldLabel : '订单号',
								anchor : '75%',
								colspan : 3,
								dataIndex : 'orderNo'
							}, {
								xtype : 'textfield',
								name : 'orderAmount',
								ref:'../../orderAmount',
								allowBlank : false,
								fieldLabel : '订单数量',
								anchor : '75%',
								colspan : 3,
								dataIndex : 'orderAmount'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'datefield',
								allowBlank : false,
								name : 'checkDt',
								dataIndex : 'checkDt',
								ref:'../../checkDt',
								format : "Y-m-d",
								fieldLabel : '检验日期',
								anchor : '75%',
								colspan : 3
							}, {
								xtype : 'textfield',
								name : 'client',
								ref:'../../client',
								allowBlank : false,
								fieldLabel : '客户名称',
								anchor : '75%',
								colspan : 3,
								dataIndex : 'client'
							}, {
								xtype : 'hidden',
								ref:'../../recordIds'
							}]

				})

		this.addReportWindow = this.addReportWindow || new Ext.Window({
					title : '新增出货报告',
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
					items : [this.addReportPanel, this.addReportListPanel],
					buttons : [{
								text : "加载膜片明细",
								scope : this,
								handler : function() {
									this.onDetailLoad();
								}
							},{
								text : "保存",
								scope : this,
								handler : function() {
									this.onSaveAdd();
								}
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.addReportPanel.form.reset();
									this.addReportWindow.hide();
								}
							}]
				});

	}
}