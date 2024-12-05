com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();

		this.initOrderNoWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shipchoosemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 210,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					//title : '【涂膜记录查询】',
					fields : [{
								xtype : 'datetimefield',
								name : 'condition/produceDtStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '75%',
								allowBlank : true,
								editable : true,
								format : 'Y-m-d H:i'
							}, {
								xtype : 'datetimefield',
								name : 'condition/produceDtEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '75%',
								allowBlank : true,
								editable : true,
								format : 'Y-m-d H:i'
							}/*
								 * , { xtype : 'mplinecombobox', hiddenName :
								 * 'condition/lineId', anchor : '75%',
								 * fieldLabel : '生产线 ' }
								 */, {
								xtype : 'linecombobox',
								prodTacheId : '100',
								hiddenName : 'condition/lineId',
								anchor : '75%',
								fieldLabel : '生产线 '
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ddflag',
								anchor : '75%',
								dataIndex : 'condition/ddflag',
								hiddenName : 'condition/ddflag',
								fieldLabel : '是否让步',
								dictData : ABF_YESORNO
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}/*
								 * , { xtype : 'supcombobox', hiddenName :
								 * 'condition/supId', anchor : '75%', fieldLabel :
								 * '无纺布供应商' }, { xtype : 'combobox', anchor :
								 * '75%', name : 'condition/isWx', hiddenName :
								 * 'condition/isWx', fieldLabel : '是否外销',
								 * triggerAction : "all", store : new
								 * Ext.data.ArrayStore({ id : 0, fields :
								 * ['mykey', 'myvalue'], data : [['N', '否'],
								 * ['Y', '是']] }), mode : "local", editable :
								 * false, displayField : "myvalue", valueField :
								 * "mykey", forceSelection : true, emptyText :
								 * "--请选择--" }, { xtype : 'mpworkercombobox',
								 * hiddenName : 'condition/workerId', anchor :
								 * '75%', fieldLabel : '操作工' }
								 */, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
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
								fieldLabel : '不展示已发货',
								xtype : 'checkbox',
								checked : false,
								name : 'condition/isDelivery',
								inputValue : 'N',
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textarea',
								name : 'condition/batchNoStr2',
								emptyText : '多个批次请用逗号分隔，或一行一个批次',
								colspan : 2,
								anchor : '85%',
								fieldLabel : '膜片批次'
							}, {
								xtype : 'hidden',
								name : 'condition/isCutOver',
								value : 'N'
							}, {
								xtype : 'hidden',
								name : 'condition/batchNoStr'
							} /*
								 * , { xtype : 'dictcombobox', name :
								 * 'condition/isQualified', anchor : '75%',
								 * dataIndex : 'condition/isQualified',
								 * hiddenName : 'condition/isQualified',
								 * fieldLabel : '是否合格', dictData : ABF_YESORNO }
								 */]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		/*
		 * this.queryPanel.addButton({ text : "导出发货请检单", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel2 });
		 */
	}

	this.initListPanel = function() {
		var _this = this;

		this.bar = this.bar || new Ext.Toolbar({
					items : [{
								text : '生成发货单',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onCreate
							}, '-', {
								text : '变更订单后生成发货单',
								scope : this,
								disabled : true,
								hidden : true,
								iconCls : 'icon-application_edit',
								handler : this.onCreate2
							}, {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								value : '',
								id : 'shipchoosecount'
							}/*
								 * , '-', { text : '取消发货单', scope : this,
								 * iconCls : 'icon-application_delete', handler :
								 * this.onCancel }
								 */]
				});

		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
			singleSelect : false,
			listeners : {
				selectionchange : function() {
					var cnt = _this.listPanel.getSelectionModel().getCount();
					Ext
							.getCmp('shipchoosecount')
							.setValue('已选择 <span style="color:red;font-weight: bold;">'
									+ cnt + '</span> 栏');

				}
			}

		});
		this.listPanel = new Ext.fn.ListPanel({
			//title : '【涂膜记录列表】',
			viewConfig : {
				forceFit : false
			},
			enableHdMenu : true,
			columnLines : true,
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计长度(m)',
						id : 'shipchooseoutlength'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计可用长度(m)',
						id : 'shipchooseusefullength'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计合格长度(m)',
						id : 'shipchoosequalifidLength'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计不良长度(m)',
						id : 'shipchooseloss'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计A等长度(m)',
						id : 'shipchooseaqualifidlength'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计B等长度(m)',
						id : 'shipchoosebqualifidlength'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '合计C等长度(m)',
						id : 'shipchoosecqualifidlength'
					}],
			hsPage : true,
			id : 'ship-choose-list',
			listeners : {
				// 第二行工具栏
				render : function() {
					scope : this, _this.bar.render(_this.listPanel.tbar);
				}
			},
			selModel : this.selModel,
			columns : [new Ext.grid.RowNumberer(), this.selModel, /*
																	 * { header :
																	 * '操作',
																	 * width :
																	 * 120,
																	 * scope :
																	 * this,
																	 * renderer :
																	 * function(v,
																	 * m, r, i) {
																	 * var
																	 * ifconfirm =
																	 * r.get('ifconfirm');
																	 * if
																	 * (ifconfirm ==
																	 * 'y')
																	 * return;
																	 * var id =
																	 * r.get('recordId');
																	 * var
																	 * batchNo =
																	 * r.get('batchNo');
																	 * var
																	 * shipflag =
																	 * r.get('shipflag');
																	 * var title =
																	 * shipflag ==
																	 * 'n' ?
																	 * '生成' :
																	 * '取消'; var
																	 * style =
																	 * shipflag ==
																	 * 'n' ? "<a
																	 * style='color:blue;text-decoration:none'" : "<a
																	 * style='color:red;text-decoration:none'";
																	 * var str =
																	 * style + "
																	 * href='javascript:dealchoose2(" +
																	 * Ext.encode(shipflag) +
																	 * "," +
																	 * Ext.encode(batchNo) +
																	 * "," + id +
																	 * ");'>" +
																	 * title +
																	 * "发货单</a>";
																	 * 
																	 * return
																	 * str; } },
																	 */		{
						dataIndex : 'batchNo',
						header : '膜片批次',
						renderer : function(v, m, r, i) {
							var sendId = r.get('sendId');
							if (!Ext.isEmpty(sendId)) {
								return "<span style='color:blue;'>" + v
										+ "</span>"
							} else {
								return v;
							}
						}

					}, {
						dataIndex : 'produceDt',
						header : '生产日期'
					}, {
						dataIndex : 'delivery',
						header : '可发货长度(米)'
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
						xtype : 'dictcolumn',
						dataIndex : 'isQualified',
						header : '合格',
						dictData : ABF_YESORNO
					}/*
						 * , { dataIndex : 'createTime', header : '发货单生成日期' }, {
						 * dataIndex : 'createName', header : '发货单生成人' }
						 */],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.choose.queryTumoByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/isCutOver' : 'N'
				},
				fields : [{
							name : 'batchNo'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'planNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'recordId'
						}, {
							name : 'shipflag'
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
							name : 'ddflag'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'loss'
						}, {
							name : 'isQualified'
						}, {
							name : 'createName'
						}, {
							name : 'createTime'
						}, {
							name : 'isCutOver'
						}, {
							name : 'delivery'
						}, {
							name : 'sendId'
						}, {
							name : 'sendAmount'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;

		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			height : 300,
			pgrid : this.listPanel,
			autoHide : true,
			autoScroll : false,
			border : true,
			columns : 1,
			saveUrl : 'com.keensen.ump.produce.diaphragm.ship.choose.createShips2.biz.ext',
			fields : [{
						xtype : 'textfield',
						name : 'entity/orderNo',
						allowBlank : false,
						fieldLabel : '订单号',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/planNo',
						allowBlank : false,
						anchor : '85%',
						fieldLabel : '计划单号 ',
						colspan : 1
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSaveCreate
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.inputPanel.form.reset();
							this.inputWindow.hide();
						}
					}]

		});

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '变更订单后生成发货单',
					height : 300,
					width : 400,
					// itemCls:'required',
					// style:'margin-top:10px',
					resizable : true,
					minimizable : false,
					maximizable : true,
					layout : 'fit',
					items : [this.inputPanel]
				});

	}

	this.initOrderNoWindow = function() {
		var _this = this;
		this.orderNoWindow = this.orderNoWindow || new Ext.fn.FormWindow({
					title : '实际发货订单',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
								xtype : 'inputpanel',
								baseCls : "x-plain",
								pgrid : this.listPanel,
								columns : 2,
								saveUrl : '1.biz.ext',
								fields : [{
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'textfield',
											ref : '../../deliveryOrderNo',
											fieldLabel : '实际发货订单号',
											anchor : '100%',
											colspan : 2

										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'datetimefield',
											ref : '../../deliveryDt',
											fieldLabel : '实际发货时间',
											format : "Y-m-d H:i:00",
											value : new Date(),
											anchor : '100%',
											colspan : 2
										}]
							}]
				});
		this.orderNoWindow.buttons[0].hide();
		this.orderNoWindow.buttons[1].hide();

		this.orderNoWindow.addButton({
					text : "确定",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onCreateOrder
				});

		this.orderNoWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.orderNoWindow.hide();
					}
				});

	}
}