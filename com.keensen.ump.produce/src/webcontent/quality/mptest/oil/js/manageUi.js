com.keensen.ump.produce.quality.mptest.oilMgr = function() {
	this.initPanel = function() {

		this.mptypeArr = [['BW1-1', 'BW1-1'], ['BW2-1', 'BW2-1'],
				['BW3-1', 'BW3-1'], ['ULP1-1', 'ULP1-1'], ['ULP2-1', 'ULP2-1'],
				['ULP3-1', 'ULP3-1'], ['NF1-R', 'NF1-R'], ['SW1-1', 'SW1-1'],
				['NF1', 'NF1'], ['NF2', 'NF2']];

		this.mptypeMap = new Map();

		this.mptypeMap.set('BW1-1', [0.245, 0.25, 0.255]);
		this.mptypeMap.set('BW2-1', [0.245, 0.25, 0.255]);
		this.mptypeMap.set('BW3-1', [0.245, 0.25, 0.255]);
		this.mptypeMap.set('ULP1-1', [0.215, 0.22, 0.225]);
		this.mptypeMap.set('ULP2-1', [0.195, 0.20, 0.205]);
		this.mptypeMap.set('ULP3-1', [0.145, 0.15, 0.155]);
		this.mptypeMap.set('NF1-R', [0.145, 0.15, 0.155]);
		this.mptypeMap.set('SW1-1', [0.315, 0.32, 0.325]);
		this.mptypeMap.set('NF1', [0.245, 0.25, 0.255]);
		this.mptypeMap.set('NF2', [0.245, 0.25, 0.255]);

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		this.initViewWindow();
		this.initInputWindow2();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestoilmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【新配液浓度查询】',
					fields : [{
						xtype : 'combobox',
						fieldLabel : '线别',
						ref : '../line',
						hiddenName : 'condition/line',
						emptyText : '--请选择--',
						allowBlank : true,
						editable : false,
						anchor : '85%',
						store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
								['D', 'D'], ['E', 'E'], ['F', 'F']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.line.reset();
							}
						}
					}, {

						xtype : 'combobox',
						fieldLabel : '膜片类型',
						ref : '../mptype',
						hiddenName : 'condition/mptype',
						emptyText : '--请选择--',
						allowBlank : true,
						editable : false,
						anchor : '85%',
						store : this.mptypeArr,
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.mptype.reset();
							}
						}
					}, {
						ref : '../batchNo',
						name : 'condition/batchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '物料批号',
						allowBlank : true
					}, {

						xtype : 'combobox',
						fieldLabel : '当前步骤',
						ref : '../step',
						hiddenName : 'condition/step',
						emptyText : '--请选择--',
						allowBlank : true,
						editable : false,
						anchor : '85%',
						store : [['first', '分析'], /* ['second', '调整'], */
								['third', '配料'], ['produce', '生产使用']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.step.reset();
							}
						}
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
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【新配液浓度列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						xtype : 'splitbutton',
						text : '新增',
						// scale : 'small',
						// rowspan : 1,
						// iconAlign : 'top',
						iconCls : 'icon-application_add',
						arrowAlign : 'bottom',
						menu : [{
									text : '新配油相液',
									scope : this,
									iconCls : 'icon-application_add',
									handler : this.onAdd
								}, {
									text : '回流油相液',
									scope : this,
									iconCls : 'icon-application_add',
									handler : this.onAdd2
								}]
					}, '-', {
						text : '分析',
						scope : this,
						iconCls : 'icon-application_edit',
						disabled : fxy != '1',
						handler : this.onEdit
					}/*
						 * , '-', { text : '调整', scope : this, iconCls :
						 * 'icon-application_edit', handler : this.onEdit2 }
						 */, '-', {
						text : '配料',
						scope : this,
						iconCls : 'icon-application_edit',
						disabled : ply != '1',
						handler : this.onEdit3
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'reserve1',
						header : '油相类型'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mptype',
						header : '膜片类型'
					}, {
						dataIndex : 'batchNo',
						header : '物料批号'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}, {
						dataIndex : 'stepName',
						header : '当前步骤'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest.queryOilRecordsByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
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
							name : 'tank'
						}, {
							name : 'line'
						}, {
							name : 'mptype'
						}, {
							name : 'batchNo'
						}, {
							name : 'refluxNo'
						}, {
							name : 'state'
						}, {
							name : 'stateName'
						}, {
							name : 'step'
						}, {
							name : 'stepName'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
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
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.mptest.saveOil.biz.ext',
				fields : [{
							ref : '../../batchNo',
							value : '自动生成',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '物料批号',
							readOnly : true
						}, {
							ref : '../../refluxNo',
							value : '自动生成',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '回流液批号',
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E'], ['F', 'F']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.line.reset();
								}
							}
						}, {
							xtype : 'mpspeccombobox',
							valueField : "name",
							displayField : "name",
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield200',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '输入完毕单击旁边按钮计算',
							ref : '../../weightPlan',
							allowBlank : false,
							// hidden : true,
							fieldLabel : '配料总重量(kg)',
							anchor : '95%',
							colspan : 1,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'numberfield',
							name : 'list/concentration',
							ref : '../../concentration',
							decimalPrecision : 3,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C42浓度(%)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield100',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/c41Plan',
							ref : '../../c41Plan',
							allowBlank : false,
							// hidden : true,
							fieldLabel : '计划添加C41(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c42Plan',
							ref : '../../c42Plan',
							allowBlank : false,
							// hidden : true,
							fieldLabel : '计划添加C42(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield300',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/c41Reality',
							ref : '../../c41Reality',
							allowBlank : false,
							fieldLabel : '实际添加C41(kg)',
							anchor : '95%',
							colspan : 1
							/*
							 * , listeners : { scope : this, 'blur' : function() {
							 * var mptype = this.inputWindow.mptype .getValue();
							 * var c41Reality = this.inputWindow.c41Reality
							 * .getValue(); if(Ext.isEmpty(mptype)||
							 * Ext.isEmpty(c41Reality)){ return; } var std =
							 * this.mptypeMap.get(mptype)[0]; var std2 =
							 * this.mptypeMap.get(mptype)[1]; var std3 =
							 * this.mptypeMap.get(mptype)[2]; var str = '<font
							 * color=red>建议C42添加上限' + 10 parseFloat(c41Reality)
							 * parseFloat(std3) + ',' + '下限' + 10 *
							 * parseFloat(c41Reality) parseFloat(std) + '</font>';
							 * this.inputWindow.msg.setValue(str); } }
							 */
					}	, {
							xtype : 'numberfield',
							name : 'list/c42Reality',
							ref : '../../c42Reality',
							allowBlank : false,
							fieldLabel : '实际添加C42(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/reflux',
							ref : '../../reflux',
							allowBlank : true,
							fieldLabel : '回流液重量(kg)',
							anchor : '48%',
							colspan : 2,
							listeners : {
								scope : this,
								'blur' : function() {
									// var mptype =
									// this.inputWindow.mptype.getValue();
									// var reflux =
									// this.inputWindow.reflux.getValue();
									// var std = this.mptypeMap.get(mptype)[0];
									// var std2 = this.mptypeMap.get(mptype)[1];
									// var std3 = this.mptypeMap.get(mptype)[2];
									// var str = 'C42添加上限' +
									// 10*parseFloat(reflux)*parseFloat(std3) +
									// ',' + '下限' +
									// 10*parseFloat(reflux)*parseFloat(std);
									// this.inputWindow.msg.setValue(str);
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001321',
							valueField : "operatorname",
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointPly',
							hiddenName : 'list/appointPly',
							fieldLabel : '配料人'
						}, {
							xtype : 'displayfield',
							ref : '../../msg',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/reserve1',
							ref : '../../reserve1'
						}, {
							xtype : 'hidden',
							ref : '../../weight',
							name : 'list/weight',
							ref : '../../weight'
						}]
			}]
		});

		this.queryPanel.addButton({
					text : "分析室测试任务看板",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onBoard
				});
		this.queryPanel.addButton({
					text : "产线配料任务看板",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onBoard2
				});
	}

	this.initInputWindow2 = function() {
		var _this = this;
		this.inputWindow2 = this.inputWindow2 || new Ext.fn.FormWindow({
			title : '新增',
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
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.mptest.saveOil.biz.ext',
				fields : [{
							ref : '../../refluxNo',
							value : '自动生成',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '回流液批号',
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E'], ['F', 'F']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow2.line.reset();
								}
							}
						}, {
							xtype : 'mpspeccombobox',
							valueField : "name",
							displayField : "name",
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow2.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/reflux',
							ref : '../../reflux',
							allowBlank : false,
							fieldLabel : '回流液重量(kg)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								'blur' : function() {
									// var mptype =
									// this.inputWindow.mptype.getValue();
									// var reflux =
									// this.inputWindow.reflux.getValue();
									// var std = this.mptypeMap.get(mptype)[0];
									// var std2 = this.mptypeMap.get(mptype)[1];
									// var std3 = this.mptypeMap.get(mptype)[2];
									// var str = 'C42添加上限' +
									// 10*parseFloat(reflux)*parseFloat(std3) +
									// ',' + '下限' +
									// 10*parseFloat(reflux)*parseFloat(std);
									// this.inputWindow.msg.setValue(str);
								}
							}
						}, {
							xtype : 'trigger',
							name : 'list/concentration',
							ref : '../../concentration',
							decimalPrecision : 3,
							allowBlank : false,
							// hidden : true,
							fieldLabel : 'C42浓度(%)',
							anchor : '95%',
							colspan : 1,
							emptyText : '单击旁边按钮获取C42浓度',
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc2();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001321',
							valueField : "operatorname",
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointPly',
							hiddenName : 'list/appointPly',
							fieldLabel : '配料人'
						}, {
							xtype : 'displayfield',
							ref : '../../msg',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/reserve1',
							ref : '../../reserve1'
						}, {
							xtype : 'hidden',
							ref : '../../weight',
							name : 'list/weight',
							ref : '../../weight'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '分析',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.mptest.expandOilList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest.modiOilListByFirst.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							ref : '../../batchNo',
							colspan : 2,
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '新配液批号'
						}, {
							dataIndex : 'refluxNo',
							ref : '../../refluxNo',
							colspan : 2,
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '回流液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}/*
							 * , {
							 * 
							 * xtype : 'displayfield', fieldLabel : '备料罐', ref :
							 * '../../tank', dataIndex : 'tank', anchor : '85%',
							 * colspan : 1 }
							 */, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'list/c41Reality',
							dataIndex : 'c41Reality',
							ref : '../../c41Reality',
							fieldLabel : '实际添加C41(kg)',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'c42Reality',
							readOnly : true,
							name : 'list/c42Reality',
							ref : '../../c42Reality',
							fieldLabel : '实际添加C42(g)',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'reflux',
							name : 'list/reflux',
							ref : '../../reflux',
							fieldLabel : '回流液重量(kg)',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							readOnly : true,
							dataIndex : 'weight',
							name : 'list/weight',
							ref : '../../weight',
							fieldLabel : '总重量(kg)',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}/*
							 * , { xtype : 'displayfield', fieldLabel : '标准',
							 * ref : '../../standard', colspan : 2 }
							 */, {
							xtype : 'numberfield',
							decimalPrecision : 3,
							// name : 'list/concentration',
							dataIndex : 'concentrationStd',
							ref : '../../concentration2',
							readOnly : true,
							fieldLabel : '标准C42浓度(%)',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '输入C42浓度，单击旁边按钮计算计划添加量',
							name : 'list/concentration',
							ref : '../../concentration',
							allowBlank : false,
							allowDecimals : true,
							fieldLabel : '新配C42浓度(%)',
							anchor : '85%',
							colspan : 2,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc4fx();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
							/*
							 * , listeners : { scope : this, 'blur' : function() {
							 * var concentration = this.editWindow.concentration
							 * .getValue(); if (Ext.isEmpty(concentration)) {
							 * return false; } var mptype =
							 * this.editWindow.mptype .getValue(); var std =
							 * this.mptypeMap.get(mptype)[0]; var std2 =
							 * this.mptypeMap.get(mptype)[1]; var std3 =
							 * this.mptypeMap.get(mptype)[2]; var weight =
							 * this.editWindow.weight .getValue(); var total =
							 * parseFloat(weight); if (concentration < std ||
							 * concentration > std3) { // 实际总重量 // var total =
							 * parseFloat(c41Reality) // +
							 * parseFloat(c42Reality); var low = 0; var up = 0;
							 * this.editWindow.ifok.setValue('N'); // C42浓度低于
							 * 标准，添加C42 if (concentration < std) {
							 * this.editWindow.c41Plan.setValue(0); //
							 * C42添加量=（下限-测试值）*实际总重量 ~ // （上限限-测试值）*实际总重量 low =
							 * (std - concentration) * total 1000; up = (std3 -
							 * concentration) * total 1000;
							 * this.editWindow.c42Plan .setValue('下限' +
							 * low.toFixed(3) + 'g,上限' + up.toFixed(3) + 'g'); }
							 * else {// C42浓度高于标准，添加C41
							 * this.editWindow.c42Plan.setValue(0); low =
							 * ((concentration - std3) / std2) total; up =
							 * ((concentration - std) / std2) total;
							 * this.editWindow.c41Plan .setValue('下限' +
							 * low.toFixed(3) + 'kg,上限' + up.toFixed(3) + 'kg'); } }
							 * else { this.editWindow.ifok.setValue('Y'); } } }
							 */
					}	, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '判定意见',
							ref : '../../ifok',
							hiddenName : 'entity/ifok',
							emptyText : '--请选择--',
							allowBlank : false,
							readOnly : false,
							editable : false,
							anchor : '85%',
							store : [['生产使用', '生产使用'], ['调整', '调整'],
									['报废', '报废']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.ifok.reset();
								}
							},
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">合格则发生产，不合格则重新配料</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c41Plan',
							// dataIndex : 'c41Plan',
							fieldLabel : '需补投C41(kg)',
							readOnly : true,
							name : 'list/c41Plan',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c42Plan',
							// dataIndex : 'c42Plan',
							fieldLabel : '需补投添加C42(g)',
							readOnly : true,
							name : 'list/c42Plan',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001323',
							valueField : "operatorname",
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointFxy',
							hiddenName : 'list/appointFxy',
							fieldLabel : '分析员'
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'third'
						}, {
							xtype : 'hidden',
							ref : '../../reserve1',
							// name : 'entity/reserve1',
							dataIndex : 'reserve1'
						}, {
							xtype : 'hidden',
							ref : '../../weight2',
							dataIndex : 'weight2'
						}, {
							xtype : 'hidden',
							ref : '../../c41Plan2',
							name : 'list/c41Plan2',
							dataIndex : 'c41Reality2'
						}, {
							xtype : 'hidden',
							ref : '../../c42Plan2',
							name : 'list/c42Plan2',
							dataIndex : 'c42Reality2'
						}]
			}]
		});
	}

	this.initEditWindow2 = function() {
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '调整',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.mptest.expandOilList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest.modiOilListBySecond.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '新配液批号'
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, {
							 * 
							 * xtype : 'displayfield', fieldLabel : '备料罐', ref :
							 * '../../tank', dataIndex : 'tank', anchor : '85%',
							 * colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'c41Plan',
							fieldLabel : '原计划添加C41(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '原计划添加C42(g)',
							dataIndex : 'c42Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '新配浓度',
							dataIndex : 'concentration',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '是否合格',
							ref : '../../ifok',
							hiddenName : 'entity/ifok',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							store : [['Y', '是'], ['N', '否']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow2.ifok.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">合格则发生产，不合格则重新配料</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c41Plan',
							fieldLabel : '计划添加C41(kg)',
							name : 'list/c41Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c42Plan',
							fieldLabel : '计划添加C42(g)',
							name : 'list/c42Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'pkid'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'third'
						}]
			}]
		});
	}

	this.initEditWindow3 = function() {
		var _this = this;
		this.editWindow3 = this.editWindow3 || new Ext.fn.FormWindow({
			title : '配料',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.mptest.expandOilList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest.modiOilListByThird.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							ref : '../../batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '新配液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							dataIndex : 'refluxNo',
							ref : '../../refluxNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '回流液批号'
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, {
							 * 
							 * xtype : 'displayfield', fieldLabel : '备料罐', ref :
							 * '../../tank', dataIndex : 'tank', anchor : '85%',
							 * colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, { xtype : 'displayfield', fieldLabel :
							 * '新配浓度', dataIndex : 'concentration', anchor :
							 * '85%', colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'c41Plan',
							ref : '../../c41Plan',
							name : 'list/c41Plan',
							readOnly : true,
							fieldLabel : '计划添加C41(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'list/c42Plan',
							ref : '../../c42Plan',
							fieldLabel : '计划添加C42(g)',
							dataIndex : 'c42Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'weight',
							name : 'list/weight',
							ref : '../../weight',
							fieldLabel : '总重量(kg)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'concentration',
							// name : 'list/concentration',
							ref : '../../concentration',
							fieldLabel : '实测浓度(%)',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/c41Reality',
							dataIndex : 'c41Advise',
							ref : '../../c41Reality',
							value : 0,
							allowBlank : false,
							fieldLabel : '实际补投<br>C41(kg)',
							anchor : '85%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var reserve1 = _this.editWindow3.reserve1
											.getValue();
									if (reserve1 == '新配油相液')
										return false;
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4pl();
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'list/c42Reality',
							dataIndex : 'c42Advise',
							ref : '../../c42Reality',
							allowBlank : false,
							value : 0,
							fieldLabel : '实际补投<br>C42(g)',
							anchor : '85%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var reserve1 = _this.editWindow3.reserve1
											.getValue();
									if (reserve1 == '新配油相液')
										return false;
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4pl();
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							name : 'list/reflux',
							ref : '../../reflux',
							dataIndex : 'reflux',
							allowBlank : false,
							// readOnly : true,
							value : 0,
							fieldLabel : '回流液重量(kg)',
							anchor : '85%',
							colspan : 1,
							emptyText : '输入完毕单击旁边按钮计算',
							editable : false,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc4pl();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001321',
							valueField : "operatorname",
							allowBlank : false,
							anchor : '85%',
							colspan : 1,
							ref : '../../appointPly',
							hiddenName : 'list/appointPly',
							fieldLabel : '配料人'
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'first'
						}, {
							xtype : 'hidden',
							ref : '../../reserve1',
							// name : 'entity/reserve1',
							dataIndex : 'reserve1'
						}/*
							 * , { xtype : 'hidden', name :
							 * 'entity/concentration', dataIndex :
							 * 'concentration' }
							 */
						, {
							xtype : 'hidden',
							ref : '../../weight2',
							dataIndex : 'weight2'
						}, {
							xtype : 'hidden',
							ref : '../../c41Reality2',
							name : 'list/c41Reality2',
							dataIndex : 'c41Reality2'
						}, {
							xtype : 'hidden',
							ref : '../../c42Reality2',
							name : 'list/c42Reality2',
							dataIndex : 'c42Reality2'
						}]
			}]
		});
	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【详情】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			tbar : [],
			hsPage : false,
			autoScroll : true,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'concentration',
						header : '新配浓度'
					}, {
						dataIndex : 'weight',
						header : '总重量'
					}, {
						dataIndex : 'c41Plan',
						header : 'c41计划添加量'
					}, {
						dataIndex : 'c42Plan',
						header : 'c42计划添加量'
					}, {
						dataIndex : 'c41Reality',
						header : 'c41实际添加量'
					}, {
						dataIndex : 'reflux',
						header : '回流液重量'
					}, {
						dataIndex : 'reflux',
						header : 'c41计划添加量'
					}, {
						dataIndex : 'appointFxy',
						header : '分析员'
					}/*
						 * , { dataIndex : 'secondName', header : '工艺员' }
						 */, {
						dataIndex : 'appointPly',
						header : '配料员'
					}, {
						dataIndex : 'firstDate',
						header : '接样时间'
					}/*
						 * , { dataIndex : 'secondDate', header : '工艺调整时间' }
						 */, {
						dataIndex : 'thirdDate',
						header : '配料时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest.queryOilListRecords.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
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
							name : 'concentration'
						}, {
							name : 'c41Plan'
						}, {
							name : 'c42Plan'
						}, {
							name : 'c41Reality'
						}, {
							name : 'c42Reality'
						}, {
							name : 'firstName'
						}, {
							name : 'firstId'
						}, {
							name : 'secondName'
						}, {
							name : 'secondId'
						}, {
							name : 'thirdName'
						}, {
							name : 'thirdId'
						}, {
							name : 'firstDate'
						}, {
							name : 'secondDate'
						}, {
							name : 'thirdDate'
						}, {
							name : 'relationId'
						}, {
							name : 'reflux'
						}, {
							name : 'weight'
						}, {
							name : 'appointFxy'
						}, {
							name : 'appointPly'
						}]
			})
		})

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '测试明细',
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
					items : [this.listPanel2],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.viewWindow.hide();
								}
							}]

				});

	}
}