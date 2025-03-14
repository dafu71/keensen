com.keensen.ump.produce.component.InteractiveSelectMgr = function() {
	this.initPanel = function() {

		this.initChooseSingleOrderWindow();
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'interactiveselectmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;

		var storageStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['膜片AB仓', '膜片AB仓'], ['膜片C仓', '膜片C仓'],
							['膜片发货仓', '膜片发货仓'], ['半成品仓', '半成品仓'],
							['试卷合格仓', '试卷合格仓']]
				});

		this.queryPanel = this.queryPanel || new Ext.fn.QueryPanel({
			height : 80,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			columns : 12,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			fields : [{
						xtype : 'trigger',
						emptyText : '单击旁边按钮选择订单',
						ref : '../orderNo',
						fieldLabel : '生产订单号',
						anchor : '100%',
						colspan : 3,
						editable : false,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onChooseOrder();
						}

					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecIdFilter',
						ref : '../prodSpecId',
						colspan : 3,
						fieldLabel : '生产元件型号'
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/mpSpecIdFilter',
						ref : '../mpSpecId',
						colspan : 3,
						fieldLabel : '膜片型号 ',
						listeners : {
							"select" : function(combo, record, index) {
								var prodSpecId = _this.queryPanel.prodSpecId
										.getValue();
								var mpSpecId = combo.getValue();

								var store = _this.standStore;
								var i = store.findBy(function(record, id) {
									// console.dir(mpSpecId + '=====' +
									// record.get('mpSpecId') + '=====' +
									// prodSpecId + '=====' +
									// record.get('prodSpecId'));
									return record.get('mpSpecId') == mpSpecId
											&& record.get('prodSpecId') == prodSpecId;
								});

								if (i != -1) {
									var rec = store.getAt(i);
									/*_this.queryPanel.mpSaltLowLimit
											.setValue(rec.get('aSaltLowLimit'));
									_this.queryPanel.mpSaltLowLimit2
											.setValue(rec.get('aSaltLowLimit'));
									_this.queryPanel.aGpdLowLimit.setValue(rec
											.get('aGpdLowLimit'));*/

								} else {
									/*_this.queryPanel.mpSaltLowLimit
											.setValue('');
									_this.queryPanel.mpSaltLowLimit2
											.setValue('');
									_this.queryPanel.aGpdLowLimit.setValue('');*/
								}

							}
						}
					}, {
						xtype : 'combobox',
						forceSelection : true,
						// allowBlank : false,
						mode : 'local',
						fieldLabel : '仓库名称',
						ref : '../storageName',
						hiddenName : 'condition/storageNameFilter',
						colspan : 3,
						emptyText : '--请选择--',
						editable : false,
						store : storageStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}/*, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						name : 'condition/mpSaltLowLimitFilter',
						ref : '../mpSaltLowLimit',
						readOnly : true,
						colspan : 3,
						fieldLabel : '膜片脱盐率<br>下限标准'
					}, {
						xtype : 'numberfield',
						name : 'condition/mpSaltLowLimitFilter2',
						ref : '../mpSaltLowLimit2',
						colspan : 3,
						fieldLabel : '膜片脱盐率<br>下限挑选值'
					}, {
						xtype : 'numberfield',
						name : 'condition/testYjSaltLowLimitDownFilter',
						value : 0,
						ref : '../testYjSaltLowLimitDownFilter',
						colspan : 3,
						fieldLabel : '试卷元件脱盐率<br>下限标准下调值'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						name : 'condition/aGpdLowLimitFilter',
						ref : '../aGpdLowLimit',
						readOnly : true,
						colspan : 3,
						fieldLabel : '产水量下限标准'
					}, {
						xtype : 'numberfield',
						name : 'condition/aGpdLowLimitFilter2',
						ref : '../aGpdLowLimit2',
						colspan : 3,
						fieldLabel : '产水量下限标准<br>放宽值'
					}*/, {
						xtype : 'hidden',
						name : 'condition/isStorage',
						value : 'Y'
					}]
		});
		
		this.queryPanel.buttons[0].setText('筛选')
	}

	this.initListPanel = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel = this.listPanel || new Ext.fn.ListPanel({

			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'mpBatchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'mpSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'materSpecName',
						header : '可卷制元件<br>型号'
					}, {
						dataIndex : 'area',
						header : '可卷制元件<br>膜面积'
					}, {
						dataIndex : 'denseNet',
						header : '可卷制元件<br>浓网规格'
					}, {
						dataIndex : 'yjGpdLow',
						header : '可卷制元件<br>最低产水量(理论换算)'/*
														 * , renderer :
														 * function(v, m, r, i) {
														 * if (v == null || v ==
														 * 'null') return '';
														 * var condition =
														 * r.get('condition3');
														 * if (condition == 'N') {
														 * return "<span
														 * style='color:red'>" +
														 * v + "</span>"; }
														 * else { return "<span
														 * style='color:green'>" +
														 * v + "</span>"; } }
														 */
					}, {
						dataIndex : 'yjGpdUp',
						header : '可卷制元件<br>最高产水量(理论换算)'/*
														 * , renderer :
														 * function(v, m, r, i) {
														 * if (v == null || v ==
														 * 'null') return '';
														 * var condition =
														 * r.get('condition4');
														 * if (condition == 'N') {
														 * return "<span
														 * style='color:red'>" +
														 * v + "</span>"; }
														 * else { return "<span
														 * style='color:green'>" +
														 * v + "</span>"; } }
														 */
					}, {
						dataIndex : 'yjGpdAvg',
						header : '可卷制元件<br>平均产水量(理论换算)',
						renderer : function(v, m, r, i) {
							if (v == null || v == 'null')
								return '';
							var condition = r.get('condition5');

							if (condition == 'N') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'yjGpdLowLimit',
						hidden : true,
						header : '可卷制元件产<br>水量下限'
					}, {
						dataIndex : 'yjGpdUpLimit',
						hidden : true,
						header : '可卷制元件产<br>水量上限'
					}, {
						dataIndex : 'yjSaltLowLimit',
						hidden : true,
						header : '可卷制元件<br>脱盐率下限'
					}, {
						dataIndex : 'storageName',
						sortable : true,
						header : '仓库名称'
					}, {
						dataIndex : 'storagePosition',
						sortable : true,
						header : '仓位名称'
					}, {
						dataIndex : 'amount',
						sortable : true,
						header : '数量'
					}, {
						xtype : 'dictcolumn',
						sortable : true,
						dictData : KS_YESORNO,
						dataIndex : 'isKeep',
						header : '是否保留品'
					}, {
						dataIndex : 'mpPointSaltRejection',
						sortable : true,
						header : '膜片<br>单点脱盐率'
					}, {
						dataIndex : 'mpSaltAvg',
						sortable : true,
						header : '膜片<br>平均脱盐率',
						renderer : function(v, m, r, i) {
							var isUlp = r.get('isUlp');
							if (v == null || v == 'null')
								return '';
							if (isUlp == '0')
								return v;
							var condition1 = r.get('condition1');
							if (condition1 == 'N') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'mpMinSaltRejection',
						sortable : true,
						header : '膜片<br>最低脱盐率',
						renderer : function(v, m, r, i) {
							var isUlp = r.get('isUlp');
							if (v == null || v == 'null')
								return '';
							if (isUlp == '1')
								return v;
							var condition1 = r.get('condition1');
							if (condition1 == 'N') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'mpSaltLowLimit',
						sortable : true,
						header : '膜片<br>脱盐率下限标准'
					}, {
						dataIndex : 'rMpPointSaltRejection',
						sortable : true,
						header : '膜片<br>复测脱盐率'
					}, {
						dataIndex : 'mpPointGfd',
						sortable : true,
						header : '膜片<br>单点通量'
					}, {
						dataIndex : 'mpMinGfd',
						sortable : true,
						header : '膜片<br>最低通量'
					}, {
						dataIndex : 'mpMaxGfd',
						sortable : true,
						header : '膜片<br>最高通量'
					}, {
						dataIndex : 'mpAvgGfd',
						sortable : true,
						header : '膜片<br>平均通量'
					}, {
						dataIndex : 'rMpPointGfd',
						sortable : true,
						header : '膜片<br>复测通量'
					}, {
						dataIndex : 'testMpBatchNo',
						sortable : true,
						header : '试卷<br>膜批次'
					}, {
						dataIndex : 'testYjSpecName',
						sortable : true,
						header : '试卷<br>元件型号'
					}, {
						dataIndex : 'testYjArea',
						sortable : true,
						header : '试卷<br>元件膜面积'
					}, {
						dataIndex : 'testYjDenseNet',
						sortable : true,
						header : '试卷<br>元件浓网规格'
					}, {
						dataIndex : 'testYjGpd',
						sortable : true,
						header : '试卷<br>元件产水量'
					}, {
						dataIndex : 'testYjSalt',
						sortable : true,
						header : '试卷<br>元件脱盐率'/*
												 * , renderer : function(v, m,
												 * r, i) { if (v == null || v ==
												 * 'null') return ''; var
												 * condition2 =
												 * r.get('condition2'); if
												 * (condition2 == 'N') { return "<span
												 * style='color:red'>" + v + "</span>"; }
												 * else { return "<span
												 * style='color:green'>" + v + "</span>"; } }
												 */
					}, {
						dataIndex : 'testYjGpdLowLimit',
						sortable : true,
						header : '试卷<br>元件产水量下限'
					}, {
						dataIndex : 'testYjGpdUpLimit',
						sortable : true,
						header : '试卷<br>元件产水量上限'
					}, {
						dataIndex : 'testYjSaltLowLimit',
						sortable : true,
						header : '试卷<br>元件脱盐率下限'
					}, {
						dataIndex : 'mpProduceDt',
						sortable : true,
						header : '生产时间'
					}, {
						dataIndex : 'remark',
						sortable : true,
						header : '生产备注'
					}, {
						dataIndex : 'condition',
						header : '可卷制<br>判定结果',
						renderer : function(v, m, r, i) {
							if (v == null || v == 'null')
								return '';
							var condition = r.get('condition');
							if (condition == '否') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.interactive.querySelectByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'mpBatchNo'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'area'
						}, {
							name : 'denseNet'
						}, {
							name : 'yjGpdLow'
						}, {
							name : 'yjGpdUp'
						}, {
							name : 'yjGpdAvg'
						}, {
							name : 'yjGpdLowLimit'
						}, {
							name : 'yjGpdUpLimit'
						}, {
							name : 'yjSaltLowLimit'
						}, {
							name : 'mpMinSaltRejection'
						}, {
							name : 'mpSaltLowLimit'
						}, {
							name : 'testYjSalt'
						}, {
							name : 'testYjSaltLowLimit'
						}, {
							name : 'condition1'
						}, {
							name : 'condition2'
						}, {
							name : 'condition3'
						}, {
							name : 'condition4'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'yjGpdLowLimitTrs'
						}, {
							name : 'yjGpdUpLimitTrs'
						}, {
							name : 'yjGpdAvgTrs'
						}, {
							name : 'testYjArea'
						}, {
							name : 'condition'
						}, {
							name : 'condition5'
						},{
							name : 'mpMaterCode'
						}, {
							name : 'storageName'
						}, {
							name : 'storagePosition'
						}, {
							name : 'amount'
						}, {
							name : 'isKeep'
						}, {
							name : 'mpPointSaltRejection'
						}, {
							name : 'rMpPointSaltRejection'
						}, {
							name : 'mpPointGfd'
						}, {
							name : 'mpMinGfd'
						}, {
							name : 'mpMaxGfd'
						}, {
							name : 'mpAvgGfd'
						}, {
							name : 'rMpPointGfd'
						}, {
							name : 'testMpBatchNo'
						}, {
							name : 'testYjSpecName'
						}, {
							name : 'testYjDenseNet'
						}, {
							name : 'testYjGpd'
						}, {
							name : 'testYjGpdLowLimit'
						}, {
							name : 'testYjGpdUpLimit'
						}, {
							name : 'mpProduceDt'
						}, {
							name : 'remark'
						}, {
							name : 'condition1b'
						}, {
							name : 'condition2b'
						}, {
							name : 'mpSaltAvg'
						}, {
							name : 'isUlp'
						}]
			})
		})
	}

	this.initChooseSingleOrderWindow = function() {

		var chooseSingleOrderSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseSingleOrderListPanel = this.chooseSingleOrderListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleOrder
							}],
					hsPage : true,
					selModel : chooseSingleOrderSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							chooseSingleOrderSelModel, {
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
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {},
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
								}, {
									name : 'materSpecId'
								}]
					})
				})

		this.queryChooseSingleOrderPanel = this.queryChooseSingleOrderPanel
				|| new Ext.fn.QueryPanel({
							height : 120,
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
									}]
						});

		this.queryChooseSingleOrderPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSingleOrderWindow.hide();
					}

				});

		this.chooseSingleOrderWindow = this.chooseSingleOrderWindow
				|| new Ext.Window({
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
							items : [this.queryChooseSingleOrderPanel,
									this.chooseSingleOrderListPanel]

						});
	}
}