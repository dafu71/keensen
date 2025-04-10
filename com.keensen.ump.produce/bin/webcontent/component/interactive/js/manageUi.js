com.keensen.ump.produce.component.InteractiveSelectMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initChooseSingleOrderWindow();

		this.initQueryPanel();
		this.initListPanel();

		this.initArrangeWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'interactiveselectmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.planWeekDateStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.interactive.queryDate4PlanWeek.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'startDate'
					}, {
						name : 'endDate'
					}, {
						name : 'planDate'
					}]
		})

		this.specStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.interactive.queryOrderMaterSpec.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'materSpecName'
					}, {
						name : 'materSpecName2'
					}, {
						name : 'materSpecId'
					}, {
						name : 'numPerWad'
					}, {
						name : 'blankingSize'
					}, {
						name : 'pageWidth'
					}, {
						name : 'mpSize'
					}]
		})

		this.standStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.interactive.queryStand.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'mpSpecName'
					}, {
						name : 'prodSpecName'
					}, {
						name : 'aGpdLowLimit'
					}, {
						name : 'aGpdUpLimit'
					}, {
						name : 'aGpdCenter'
					}, {
						name : 'aSaltLowLimit'
					}, {
						name : 'area'
					}, {
						name : 'denseNet'
					}, {
						name : 'mpSpecId'
					}, {
						name : 'prodSpecId'
					}, {
						name : 'recordId'
					}]
		})

		this.waterStdstore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.interactive.queryWaterStd.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {

		}	,
			fields : [{
						name : 'recordId'
					}, {
						name : 'mpSpecId'
					}, {
						name : 'prodSpecId'
					}, {
						name : 'aGpdLowLimit'
					}, {
						name : 'aGpdUpLimit'
					}, {
						name : 'aGpdCenter'
					}, {
						name : 'aSaltLowLimit'
					}, {
						name : 'aSaltUpLimit'
					}, {
						name : 'aFactorBLowLimit'
					}, {
						name : 'aFactorBUpLimit'
					}, {
						name : 'bSpecId'
					}, {
						name : 'bGpdLowLimit'
					}, {
						name : 'bGpdUpLimit'
					}, {
						name : 'bGpdCenter'
					}, {
						name : 'bSaltLowLimit'
					}, {
						name : 'bSaltUpLimit'
					}, {
						name : 'bFactorBLowLimit'
					}, {
						name : 'bFactorBUpLimit'
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
						name : 'mpSpecCode'
					}, {
						name : 'prodSpecCode'
					}, {
						name : 'prodSpecName'
					}, {
						name : 'area'
					}, {
						name : 'denseNet'
					}, {
						name : 'bSpecCode'
					}, {
						name : 'bSpecName'
					}, {
						name : 'componentSpec'
					}, {
						name : 'testLiquid'
					}, {
						name : 'density'
					}, {
						name : 'pressure'
					}, {
						name : 'tempreture'
					}, {
						name : 'ph'
					}, {
						name : 'recovery'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;

		var storageStore = new Ext.data.SimpleStore({
					fields : ['id', 'name'],
					data : [['1', '膜片AB仓'], ['2', '膜片C仓'], ['3', '膜片发货仓'],
							['4', '半成品仓'], ['5', '试卷合格仓']]
				})

		this.storagecombo = new Ext.form.ComboBox({
			store : storageStore,
			anchor : '100%',
			colspan : 3,
			fieldLabel : '仓库名称',
			displayField : 'name',
			valueField : 'id',
			myvalue : '',
			typeAhead : true,
			mode : 'local',
			// name : 'condition/storageIds',
			// hiddenName: 'condition/storageIds',
			tpl : '<tpl for="."><div class="x-combo-list-item"><span><input type="checkbox" {[values.check?"checked":""]} value="{[values.id]}" /></span><span >{name}</span></div></tpl>',
			triggerAction : 'all',
			emptyText : '--请选择--',
			selectOnFocus : true,

			onSelect : function(record, index) {
				if (_this.storagecombo.fireEvent('beforeselect',
						_this.storagecombo, record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					_this.storagecombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('name'));
									strvalue.push(rc.get('id'));
								}
							});
					_this.storagecombo.setValue(str.join());
					_this.storagecombo.myvalue = strvalue.join();
					_this.storagecombo.fireEvent('select', _this.storagecombo,
							record, index);
				}
			}
		})

		this.saltLowLimitChoose = this.saltLowLimitChoose
				|| new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "100%",
					colspan : 3,
					fieldLabel : '可卷制元件脱盐率<br>下限微调值',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.7,
								anchor : "100%",
								layout : "anchor",
								xtype : 'numberfield',
								name : 'condition/saltLowLimitChooseFilter'
							}, {
								columnWidth : 0.15,
								anchor : "100%",
								layout : "anchor",
								text : '+',
								xtype : 'button',
								handler : function() {
									var obj = _this.queryPanel.form
											.findField('condition/saltLowLimitChooseFilter');
									var value = obj.getValue()
									if (!Ext.isEmpty(value)) {
										value += 0.1;
										obj.setValue(value);
									}
								}

							}, {
								columnWidth : 0.15,
								anchor : "100%",
								layout : "anchor",
								text : '-',
								xtype : 'button',
								handler : function() {
									var obj = _this.queryPanel.form
											.findField('condition/saltLowLimitChooseFilter');
									var value = obj.getValue()
									if (!Ext.isEmpty(value)) {
										value -= 0.1;
										obj.setValue(value);
									}
								}

							}]
				});

		this.gpdLowLimitChoose = this.gpdLowLimitChoose || new Ext.Container({
			autoEl : 'div',
			layout : 'column',
			anchor : "100%",
			colspan : 3,
			fieldLabel : '可卷制元件产水量<br>下限微调值',
			defaults : {
				xtype : "container",
				autoEl : "div",
				anchor : "100%"
			},
			items : [{
						columnWidth : 0.7,
						anchor : "100%",
						layout : "anchor",
						xtype : 'numberfield',
						name : 'condition/gpdLowLimitChooseFilter'
					}, {
						columnWidth : 0.15,
						anchor : "100%",
						layout : "anchor",
						text : '+',
						xtype : 'button',
						handler : function() {
							var obj = _this.queryPanel.form
									.findField('condition/gpdLowLimitChooseFilter');
							var value = obj.getValue()
							if (!Ext.isEmpty(value)) {
								value += 10;
								obj.setValue(value);
							}
						}

					}, {
						columnWidth : 0.15,
						anchor : "100%",
						layout : "anchor",
						text : '-',
						xtype : 'button',
						handler : function() {
							var obj = _this.queryPanel.form
									.findField('condition/gpdLowLimitChooseFilter');
							var value = obj.getValue()
							if (!Ext.isEmpty(value)) {
								value -= 10;
								obj.setValue(value);
							}
						}

					}]
		});

		this.gpdUpLimitChoose = this.gpdUpLimitChoose || new Ext.Container({
			autoEl : 'div',
			layout : 'column',
			anchor : "100%",
			colspan : 3,
			fieldLabel : '可卷制元件产水量<br>上限微调值',
			defaults : {
				xtype : "container",
				autoEl : "div",
				anchor : "100%"
			},
			items : [{
						columnWidth : 0.7,
						anchor : "100%",
						layout : "anchor",
						xtype : 'numberfield',
						name : 'condition/gpdUpLimitChooseFilter'
					}, {
						columnWidth : 0.15,
						anchor : "100%",
						layout : "anchor",
						text : '+',
						xtype : 'button',
						handler : function() {
							var obj = _this.queryPanel.form
									.findField('condition/gpdUpLimitChooseFilter');
							var value = obj.getValue()
							if (!Ext.isEmpty(value)) {
								value += 10;
								obj.setValue(value);
							}
						}

					}, {
						columnWidth : 0.15,
						anchor : "100%",
						layout : "anchor",
						text : '-',
						xtype : 'button',
						handler : function() {
							var obj = _this.queryPanel.form
									.findField('condition/gpdUpLimitChooseFilter');
							var value = obj.getValue()
							if (!Ext.isEmpty(value)) {
								value -= 10;
								obj.setValue(value);
							}
						}

					}]
		});

		this.mpSaltLowLimitChoose = this.mpSaltLowLimitChoose
				|| new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "100%",
					colspan : 3,
					fieldLabel : '膜片脱盐率<br>下限微调值',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.7,
								anchor : "100%",
								layout : "anchor",
								xtype : 'numberfield',
								name : 'condition/mpSaltLowLimitChooseFilter'
							}, {
								columnWidth : 0.15,
								anchor : "100%",
								layout : "anchor",
								text : '+',
								xtype : 'button',
								handler : function() {
									var obj = _this.queryPanel.form
											.findField('condition/mpSaltLowLimitChooseFilter');
									var value = obj.getValue()
									if (!Ext.isEmpty(value)) {
										value += 0.1;
										obj.setValue(value);
									}
								}

							}, {
								columnWidth : 0.15,
								anchor : "100%",
								layout : "anchor",
								text : '-',
								xtype : 'button',
								handler : function() {
									var obj = _this.queryPanel.form
											.findField('condition/mpSaltLowLimitChooseFilter');
									var value = obj.getValue()
									if (!Ext.isEmpty(value)) {
										value -= 0.1;
										obj.setValue(value);
									}
								}

							}]
				});

		this.queryPanel = this.queryPanel || new Ext.fn.QueryPanel({
			height : 280,
			title : '筛选条件',
			border : true,
			collapsible : true,
			titleCollapse : true,
			columns : 12,
			border : true,
			fields : [{
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:12px;">第一步</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'trigger',
						emptyText : '单击旁边按钮选择订单',
						ref : '../orderNo',
						fieldLabel : '生产订单号',
						anchor : '100%',
						colspan : 3,
						editable : false,
						hideTrigger : false,
						allowBlank : false,
						scope : this,
						onTriggerClick : function() {
							_this.onChooseOrder();
						}

					}, {
						xtype : 'textfield',
						ref : '../orderSpecName',
						fieldLabel : '订单型号',
						anchor : '100%',
						colspan : 3,
						allowBlank : false

					}, {
						xtype : 'combobox',
						forceSelection : true,
						allowBlank : false,
						// readOnly : true,
						mode : 'local',
						fieldLabel : '生产型号',
						ref : '../prodSpecId',
						hiddenName : 'condition/prodSpecIdFilter',
						anchor : '100%',
						colspan : 3,
						emptyText : '',
						editable : false,
						store : this.specStore,
						displayField : "materSpecName",
						valueField : "materSpecId",
						listeners : {
							"expand" : function(A) {
								this.reset()
							},
							"select" : function(combo, record, index) {
								var prodSpecId = combo.getValue();

								var mpSize = record.get('mpSize');
								_this.queryPanel.mpSize.setValue(mpSize);
								var store = _this.waterStdstore;
								var i = store.findBy(function(record, id) {
									return record.get('prodSpecId') == prodSpecId;
								});

								if (i != -1) {
									var rec = store.getAt(i);
									var saltLowLimitStd = rec
											.get('aSaltLowLimit');
									var gpdLowLimitStd = rec
											.get('aGpdLowLimit');
									var gpdUpLimitStd = rec.get('aGpdUpLimit');
									_this.queryPanel.saltLowLimitStd
											.setValue(saltLowLimitStd);
									_this.queryPanel.form
											.findField('condition/saltLowLimitChooseFilter')
											.setValue(saltLowLimitStd);
									_this.queryPanel.gpdLowLimitStd
											.setValue(gpdLowLimitStd);
									_this.queryPanel.form
											.findField('condition/gpdLowLimitChooseFilter')
											.setValue(gpdLowLimitStd);
									_this.queryPanel.gpdUpLimitStd
											.setValue(gpdUpLimitStd);
									_this.queryPanel.form
											.findField('condition/gpdUpLimitChooseFilter')
											.setValue(gpdUpLimitStd);
								} else {

								}
							}
						}
					}
					// , {
					// xtype : 'prodspeccombobox',
					// hiddenName : 'condition/prodSpecIdFilter',
					// emptyText : '',
					// // hideTrigger : true,
					// ref : '../prodSpecId',
					// allowBlank : false,
					// colspan : 3,
					// fieldLabel : '生产型号'
					// }
					, {
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
									// console
									// .dir(mpSpecId + '====='
									// + record.get('mpSpecId')
									// + '=====' + prodSpecId
									// + '====='
									// + record.get('prodSpecId')
									// + '====='
									// + record.get('mpSpecId') == mpSpecId
									// + record.get('prodSpecId') == prodSpecId)
									return record.get('mpSpecId') == mpSpecId
											&& record.get('prodSpecId') == prodSpecId;
								});

								if (i != -1) {
									var rec = store.getAt(i);
									_this.queryPanel.mpSaltLowLimitStd
											.setValue(rec.get('aSaltLowLimit'));
									_this.queryPanel.form
											.findField('condition/mpSaltLowLimitChooseFilter')
											.setValue(rec.get('aSaltLowLimit'));

								} else {
									_this.queryPanel.mpSaltLowLimitStd
											.setValue('');
									_this.queryPanel.form
											.findField('condition/mpSaltLowLimitChooseFilter')
											.setValue('');
								}

							}
						}
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 12
					}, this.storagecombo, {
						xtype : 'checkbox',
						fieldLabel : '<p style="color:red;font-size:12px;">第二步</p>',
						ref : '../second',
						inputValue : 'Y',
						labelSeparator : '',// 去掉冒号
						anchor : '25%',
						colspan : 12
					}, {
						xtype : 'numberfield',
						name : 'condition/saltLowLimitStdFilter',
						ref : '../saltLowLimitStd',
						readOnly : true,
						colspan : 3,
						fieldLabel : '可卷制元件脱盐率<br>内控下限标准'
					}

					, this.saltLowLimitChoose
					/*
					 * , { xtype : 'numberfield', name :
					 * 'condition/saltLowLimitChooseFilter', ref :
					 * '../saltLowLimitChoose', colspan : 3, fieldLabel :
					 * '可卷制元件脱盐率<br>下限微调值' }
					 */
					, {
						xtype : 'numberfield',
						name : 'condition/gpdLowLimitStdFilter',
						ref : '../gpdLowLimitStd',
						readOnly : true,
						colspan : 3,
						fieldLabel : '可卷制元件产水量<br>内控下限标准'
					}, this.gpdLowLimitChoose
					/*
					 * { xtype : 'numberfield', name :
					 * 'condition/gpdLowLimitChooseFilter', ref :
					 * '../gpdLowLimitChoose', colspan : 3, fieldLabel :
					 * '可卷制元件产水量<br>下限微调值' }
					 */
					, {
						xtype : 'displayfield',
						height : 5,
						colspan : 12
					}, {
						xtype : 'numberfield',
						name : 'condition/gpdUpLimitStdFilter',
						ref : '../gpdUpLimitStd',
						readOnly : true,
						colspan : 3,
						fieldLabel : '可卷制元件产水量<br>内控上限标准'
					}, this.gpdUpLimitChoose
					/*
					 * { xtype : 'numberfield', name :
					 * 'condition/gpdUpLimitChooseFilter', ref :
					 * '../gpdUpLimitChoose', colspan : 3, fieldLabel :
					 * '可卷制元件产水量<br>上限微调值' }
					 */
					, {
						xtype : 'numberfield',
						name : 'condition/mpSaltLowLimitStdFilter',
						ref : '../mpSaltLowLimitStd',
						readOnly : true,
						colspan : 3,
						fieldLabel : '膜片脱盐率<br>内控下限标准'
					}, this.mpSaltLowLimitChoose
					/*
					 * { xtype : 'numberfield', name :
					 * 'condition/mpSaltLowLimitChooseFilter', ref :
					 * '../mpSaltLowLimitChoose', colspan : 3, fieldLabel :
					 * '膜片脱盐率<br>下限微调值' }
					 */
					, {
						xtype : 'hidden',
						name : 'condition/isStorage',
						value : 'Y'
					}, {
						xtype : 'hidden',
						name : 'condition/storageIdFilter'
					}, {
						xtype : 'hidden',
						ref : '../orderAmount'
					}, {
						xtype : 'hidden',
						ref : '../prodSpecIdChoose'
					}, {
						xtype : 'hidden',
						ref : '../mpSize'
					}]
		});

		this.queryPanel.buttons[0].setText('筛选');

		this.queryPanel.addButton({
					text : "生成锁定计划",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.createPlanDay
				});

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
			pageSize : 100,
			pageSizeComboStore : [10, 15, 20, 30, 40, 50, 100, 200, 500, 1000],

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
						hidden : false,
						header : '可卷制元件产<br>水量下限'
					}, {
						dataIndex : 'yjGpdUpLimit',
						hidden : false,
						header : '可卷制元件产<br>水量上限'
					}, {
						dataIndex : 'yjSaltLowLimit',
						hidden : false,
						header : '可卷制元件<br>内控脱盐率下限'
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
					}/*
						 * , { dataIndex : 'condition', header : '可卷制<br>判定结果',
						 * renderer : function(v, m, r, i) { if (v == null || v ==
						 * 'null') return ''; var condition =
						 * r.get('condition'); if (condition == '否') { return "<span
						 * style='color:red'>" + v + "</span>"; } else { return "<span
						 * style='color:green'>" + v + "</span>"; } } }
						 */],
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
						}, {
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
								width : 200,
								header : '订单编号',
								sortable : true
							}, {
								dataIndex : 'ifplan',
								width : 120,
								header : '制定计划与否',
								sortable : true,
								renderer : function(v, m, r, i) {
									var ifplan = r.get('ifplan');
									if (ifplan == '已制定') {
										return "<span style='color:red'>"
												+ ifplan + "</span>";

									} else {
										return ifplan;
									}
								}
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
							}, {
								dataIndex : 'gpdLowLimitStd',
								header : '产水量下限GPD',
								sortable : true
							}, {
								dataIndex : 'gpdUpLimitStd',
								header : '产水量上限GPD',
								sortable : true
							}, {
								dataIndex : 'gpdCenterStd',
								header : '产水量中心线GPD',
								sortable : true
							}, {
								dataIndex : 'saltLowLimitStd',
								header : '脱盐率下限%',
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
								}, {
									name : 'gpdLowLimitStd'
								}, {
									name : 'gpdUpLimitStd'
								}, {
									name : 'gpdCenterStd'
								}, {
									name : 'saltLowLimitStd'
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
							width : 1024,
							height : 600,
							layout : 'border',
							items : [this.queryChooseSingleOrderPanel,
									this.chooseSingleOrderListPanel]

						});
	}

	this.initArrangeWindow = function() {
		var _this = this;

		this.arrangePanel = this.arrangePanel || new Ext.fn.InputPanel({
					height : 35,
					region : 'north',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 6,
					saveUrl : '1.biz.ext',
					fields : [{
								xtype : 'datefield',
								fieldLabel : '排产日期',
								ref : '../planDate',
								name : 'planDate',
								format : "Y-m-d",
								anchor : '85%',
								allowBlank : false,
								value : new Date(),
								colspan : 3
							}, {
								xtype : 'numberfield',
								fieldLabel : '排产数量',
								ref : '../arrangeAmount',
								anchor : '85%',
								allowBlank : false,
								colspan : 3,
								listeners : {
									'change' : function(o, newValue, oldValue) {
										if (newValue == oldValue)
											return false;
										var mpSize = _this.queryPanel.mpSize
												.getValue();

										var arrangeLength = roundToDecimalPlace(
												newValue * mpSize, 2)
										Ext.getCmp(arrangeLengthId)
												.setValue('需膜片 '
														+ arrangeLength + '米');
									}
								}

							}]

				})

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel4Arrange = this.listPanel4Arrange
				|| new Ext.fn.EditListPanel({

					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					autoScroll : true,
					clicksToEdit : 1,
					tbar : [{
								text : '移除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.removeBatchNo

							}, '-', {
								text : '重选',
								scope : this,
								iconCls : 'icon-application_reset',
								handler : this.resetBatchNo

							}, '->', {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								value : '',
								id : orderAmountId
							}, {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								value : '',
								id : arrangeLengthId
							}, {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								value : '',
								id : useLengthSumId
							}],
					selModel : selModel2,
					columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'batchNo',
						sortable : true,
						width : 140,
						header : '涂膜批次',
						renderer : function(v, m, r, i) {

							var usedTimes = r.get('usedTimes');

							if (usedTimes > 0) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return v
							}
						}
					}, {
						dataIndex : 'usefulLength',
						sortable : true,
						width : 80,
						header : '可用长度'
					}, {
						dataIndex : 'usedLength',
						sortable : true,
						width : 80,
						header : '已选长度'
					}, {
						dataIndex : 'usedTimes',
						sortable : true,
						width : 80,
						header : '已选次数'
					}, {
						dataIndex : 'storageName',
						sortable : true,
						width : 140,
						header : '仓位'
					}, {
						dataIndex : 'storagePosition',
						sortable : true,
						width : 140,
						header : '库位'
					}, {

						dataIndex : 'useLength',
						sortable : true,
						width : 100,
						header : '使用长度',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									allowNegative : false,
									decimalPrecision : 2,
									minValue : 1,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))

					}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.interactive.queryTumo.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'batchNo'
								}, {
									name : 'recordId'
								}, {
									name : 'outLength'
								}, {
									name : 'usefulLength'
								}, {
									name : 'useLength'
								}, {
									name : 'usedLength'
								}, {
									name : 'usedTimes'
								}, {
									name : 'storageName'
								}, {
									name : 'storagePosition'
								}]
					})
				})

		this.arrangeWindow = this.arrangeWindow || new Ext.Window({
					title : '生成锁定计划',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.arrangePanel, this.listPanel4Arrange],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.doCreatePlanDay
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.arrangeWindow.hide();
								}
							}]

				});

	}
}