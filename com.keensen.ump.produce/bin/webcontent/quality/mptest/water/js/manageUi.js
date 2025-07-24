com.keensen.ump.produce.quality.mptest.waterMgr = function() {
	this.initPanel = function() {

		this.rec = {};

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initInputWindow2();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		this.initViewWindow();
		this.initEditWindow4();

		this.initBaseFormulaWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestwatermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
			height : 130,
			columns : 4,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			// title : '【水相液浓度查询】',
			fields : [{

				xtype : 'combobox',
				fieldLabel : '水相类型',
				ref : '../watertype',
				hiddenName : 'condition/watertype',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '95%',
				store : [['水相补充液', '水相补充液'], ['水相液', '水相液'], ['水相循环液', '水相循环液']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.watertype.reset();
					}
				}
			}, {

				xtype : 'combobox',
				fieldLabel : '线别',
				ref : '../line',
				hiddenName : 'condition/line',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '95%',
				store : [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],
						['E', 'E'], ['F', 'F']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.line.reset();
					}
				}
			}, {
				xtype : 'mpspeccombobox',
				valueField : "name",
				displayField : "name",
				fieldLabel : '膜片型号',
				ref : '../mptype',
				hiddenName : 'condition/mptype',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '95%',
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.mptype.reset();
					}
				}
			}, {
				ref : '../batchNo',
				name : 'condition/batchNo',
				anchor : '95%',
				xtype : 'textfield',
				fieldLabel : '水相液批号<br>膜片批号',
				allowBlank : true
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {

				xtype : 'combobox',
				fieldLabel : '当前步骤',
				ref : '../step',
				hiddenName : 'condition/step',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '95%',
				store : [['first', '分析'], ['second', '调整'], ['third', '配料'],
						['produce', '生产使用'], ['invalid', '报废']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.step.reset();
					}
				}
			}, {
				xtype : "dateregion",
				colspan : 1,
				anchor : '95%',
				nameArray : ['condition/createTimeStart',
						'condition/createTimeEnd'],
				fieldLabel : "记录日期",
				format : "Y-m-d"
			}]
		});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'dafu',
					handler : this.exportExcel
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

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【水相液浓度列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
				// xtype : 'splitbutton',
				text : '新增',
				scope : this,
				// scale : 'small',
				// rowspan : 1,
				// iconAlign : 'top',
				iconCls : 'icon-application_add',
				disabled : gyy != '1',
				handler : this.onAdd
					/*
					 * , arrowAlign : 'bottom', menu : [{ text : '水相(补充)液',
					 * scope : this, iconCls : 'icon-application_add', handler :
					 * this.onAdd }, { text : '水相循环液', scope : this, iconCls :
					 * 'icon-application_add', handler : this.onAdd2 }]
					 */
				}, '-', {
				text : '新增水相循环液',
				disabled : fxy != '1',
				scope : this,
				iconCls : 'icon-application_add',
				handler : this.onAdd2
			}, '-', {
				text : '分析',
				scope : this,
				iconCls : 'icon-application_edit',
				disabled : fxy != '1',
				handler : this.onEdit
			}, '-', {
				text : '调整',
				scope : this,
				iconCls : 'icon-application_edit',
				disabled : gyy != '1',
				handler : this.onEdit2
			}, '-', {
				text : '修改测试浓度',
				scope : this,
				iconCls : 'icon-application_edit',
				disabled : fxy != '1',
				handler : this.onEdit4
			}, '-', {
				text : '配料',
				scope : this,
				iconCls : 'icon-application_edit',
				disabled : ply != '1',
				handler : this.onEdit3
			}, '-', {
				text : '查看',
				scope : this,
				iconCls : 'icon-application_form_magnify',
				disabled : (ply != '1') && (fxy != '1') && (gyy != '1'),
				handler : this.onView
			}, '-', {
				text : '水相液配方',
				scope : this,
				iconCls : 'icon-application_form_magnify',
				hidden : gymanage != '1',
				handler : this.onBaseFormula
			}, '->', {
				text : '报废',
				scope : this,
				iconCls : 'icon-application_delete',
				disabled : invalid != '1',
				handler : this.onInvalid
			}/*
				 * , '->', { text : '打印标签', scope : this, iconCls :
				 * 'icon-printer', handler : this.onPrint }
				 */],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'watertype',
						header : '水相类型'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'code',
						header : '流水号'
					}, {
						dataIndex : 'mptype',
						header : '膜片型号'
					}, {
						dataIndex : 'batchNo',
						header : '水相液批号',
						renderer : function(v, m, r, i) {
							var watertype = r.get('watertype');
							var relationBatchNo = r.get('relationBatchNo');
							if (watertype == '水相循环液') {
								return relationBatchNo;
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'position',
						header : '取样位置'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}, {
						dataIndex : 'stepName',
						header : '当前步骤'
					}, {
						dataIndex : 'relationBatchNo',
						header : '膜片批号',
						renderer : function(v, m, r, i) {
							var watertype = r.get('watertype');
							var batchNo = r.get('batchNo');
							if (watertype == '水相循环液') {
								return batchNo;
							} else {
								return '';
							}
						}
					}, {
						dataIndex : 'c21Test',
						header : 'c21测试浓度',
						renderer : function(v, m, r, i) {
							var up21 = r.get('up21');
							var low21 = r.get('low21');
							if (parseFloat(v) >= parseFloat(low21)
									&& parseFloat(v) <= parseFloat(up21)) {
								return v
							} else {
								return "<span style='color:red'>" + v
										+ "</span>"
							}
						}
					}, {
						dataIndex : 'c23Test',
						header : 'c23测试浓度',
						renderer : function(v, m, r, i) {
							var up23 = r.get('up23');
							var low23 = r.get('low23');
							if (parseFloat(v) >= parseFloat(low23)
									&& parseFloat(v) <= parseFloat(up23)) {
								return v
							} else {
								return "<span style='color:red'>" + v
										+ "</span>"
							}
						}
					}, {
						dataIndex : 'c27Test',
						header : 'c27测试浓度',
						renderer : function(v, m, r, i) {
							var up27 = r.get('up27');
							var low27 = r.get('low27');
							if (parseFloat(v) >= parseFloat(low27)
									&& parseFloat(v) <= parseFloat(up27)) {
								return v
							} else {
								return "<span style='color:red'>" + v
										+ "</span>"
							}
						}
					}, {
						dataIndex : 'c28Test',
						header : 'c28测试浓度',
						renderer : function(v, m, r, i) {
							var up28 = r.get('up28');
							var low28 = r.get('low28');
							if (parseFloat(v) >= parseFloat(low28)
									&& parseFloat(v) <= parseFloat(up28)) {
								return v
							} else {
								return "<span style='color:red'>" + v
										+ "</span>"
							}
						}
					}, {
						dataIndex : 'c30Test',
						header : 'c30测试浓度',
						renderer : function(v, m, r, i) {
							var up30 = r.get('up30');
							var low30 = r.get('low30');
							if (parseFloat(v) >= parseFloat(low30)
									&& parseFloat(v) <= parseFloat(up30)) {
								return v
							} else {
								return "<span style='color:red'>" + v
										+ "</span>"
							}
						}
					}, {
						dataIndex : 'c29Test',
						header : 'c29测试浓度'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest5.queryWaterRecordsByPage.biz.ext',
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
							name : 'line'
						}, {
							name : 'mptype'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'step'
						}, {
							name : 'stateName'
						}, {
							name : 'stepName'
						}, {
							name : 'watertype'
						}, {
							name : 'relationBatchNo'
						}, {
							name : 'position'
						}, {
							name : 'code'
						}, {
							name : 'c21Test'
						}, {
							name : 'c23Test'
						}, {
							name : 'c29Test'
						}, {
							name : 'c27Test'
						}, {
							name : 'c28Test'
						}, {
							name : 'c30Test'
						}, {
							name : 'up21'
						}, {
							name : 'up23'
						}, {
							name : 'up29'
						}, {
							name : 'up27'
						}, {
							name : 'up28'
						}, {
							name : 'up30'
						}, {
							name : 'low21'
						}, {
							name : 'low23'
						}, {
							name : 'low29'
						}, {
							name : 'low27'
						}, {
							name : 'low28'
						}, {
							name : 'low30'
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
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.createWater.biz.ext',
				fields : [{

							xtype : 'combobox',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							hiddenName : 'entity/watertype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 2,
							store : [['水相补充液', '水相补充液'], ['水相液', '水相液']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.watertype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../batchNo',
							value : '自动生成',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '水相液批号',
							colspan : 2,
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '配料进度',
							ref : '../../reserve2',
							hiddenName : 'entity/reserve2',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 2,
							store : [['加急', '加急'], ['正常', '正常']],
							value : '正常',
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.reserve2.reset();
								}
							}
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
							colspan : 2,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E'], ['F', 'F']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.line.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'mpspeccombobox',
							valueField : "name",
							displayField : "name",
							fieldLabel : '膜片型号',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '输入配料总重量，单击旁边按钮计算物料重量',
							name : 'list/weightPlan',
							ref : '../../weightPlan',
							allowBlank : false,
							fieldLabel : '配料总重量(KG)',
							anchor : '95%',
							colspan : 2,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c21Plan',
							fieldLabel : '计划添加C21(g)',
							// readOnly : true,
							name : 'list/c21Plan',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'textfield',
							ref : '../../c22Plan',
							fieldLabel : '计划添加C22(g)',
							// readOnly : true,
							name : 'list/c22Plan',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c23Plan',
							fieldLabel : '计划添加C23(g)',
							// readOnly : true,
							name : 'list/c23Plan',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'textfield',
							ref : '../../c27Plan',
							fieldLabel : '计划添加C27(g)',
							// readOnly : true,
							allowBlank : false,
							name : 'list/c27Plan',
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c28Plan',
							fieldLabel : '计划添加C28(g)',
							// readOnly : true,
							allowBlank : false,
							name : 'list/c28Plan',
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'textfield',
							ref : '../../c30Plan',
							fieldLabel : '计划添加C30(g)',
							// readOnly : true,
							allowBlank : false,
							name : 'list/c30Plan',
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c24Plan',
							fieldLabel : '计划添加C24(g)',
							// readOnly : true,
							allowBlank : false,
							name : 'list/c24Plan',
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'textfield',
							ref : '../../c29Plan',
							fieldLabel : '计划添加C29(g)',
							// readOnly : true,
							allowBlank : false,
							name : 'list/c29Plan',
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../roPlan',
							fieldLabel : '计划添加RO水(KG)',
							// readOnly : true,
							allowBlank : false,
							name : 'list/roPlan',
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001322',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointId',
							hiddenName : 'list/appointId',
							fieldLabel : '下单员'
						}]
			}]
		});
	}

	this.initInputWindow2 = function() {
		var _this = this;
		this.inputWindow2 = this.inputWindow2 || new Ext.fn.FormWindow({
			title : '新增水相循环液',
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
				successFn : function(i, r) {
					if (r.code != '0') {
						var msg = r.code == 1 ? '存在未完结的水相循环液' : '关联水相液批号不存在';
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										_this.listPanel.store.reload();
										_this.inputWindow2.items.items[0].form
												.reset();
										_this.inputWindow2.hide();
									}
								})
					} else {
						_this.listPanel.store.reload();
						_this.inputWindow2.items.items[0].form.reset();
						_this.inputWindow2.hide();
					}
				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.createWater2.biz.ext',
				fields : [{
							xtype : 'trigger',
							emptyText : '输入膜片批号，单击旁边按钮查询涂膜信息',
							ref : '../../batchNo',
							name : 'entity/batchNo',
							anchor : '95%',
							fieldLabel : '膜片批号',
							allowBlank : false,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onQueryTumo();
							},
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../relationBatchNo',
							name : 'entity/relationBatchNo',
							anchor : '95%',
							xtype : 'textfield',
							fieldLabel : '水相液批号',
							colspan : 2,
							allowBlank : false,
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
							colspan : 2,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E'], ['F', 'F']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow2.line.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'mpspeccombobox',
							valueField : "name",
							displayField : "name",
							fieldLabel : '膜片型号',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 2,
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
							xtype : 'textfield',
							ref : '../../position',
							fieldLabel : '取样位置',
							allowBlank : false,
							name : 'list/position',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001323',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointId3',
							hiddenName : 'list/appointId3',
							fieldLabel : '分析员'
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
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListByFirst.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '95%',
							xtype : 'displayfield',
							colspan : 1,
							fieldLabel : '水相液批号<br>/膜片批次'
						}, {

							xtype : 'displayfield',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							dataIndex : 'watertype',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',

							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '95%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片型号',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'list/gc',
							hiddenName : 'list/gc',
							fieldLabel : '气相色谱仪',
							dictData : KS_GC_ITEM,
							anchor : '95%',
							colspan : 1,
							allowBlank : false
						}, {
							xtype : 'dictcombobox',
							name : 'list/hplc',
							hiddenName : 'list/hplc',
							fieldLabel : '液相色谱仪',
							dictData : KS_HPLC_ITEM,
							anchor : '95%',
							colspan : 1,
							allowBlank : false
						}

						/*
						 * , { xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加C21',
						 * dataIndex : 'c21Plan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'c21Reality',
						 * fieldLabel : '实际添加C21', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加C22',
						 * dataIndex : 'c22Plan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'c22Reality',
						 * fieldLabel : '实际添加C22', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加C23',
						 * dataIndex : 'c23Plan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'c23Reality',
						 * fieldLabel : '实际添加C23', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加C27',
						 * dataIndex : 'c27Plan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'c27Reality',
						 * fieldLabel : '实际添加C27', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加C28',
						 * dataIndex : 'c28Plan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'c28Reality',
						 * fieldLabel : '实际添加C28', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加C29',
						 * dataIndex : 'c29Plan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'c29Reality',
						 * fieldLabel : '实际添加C29', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加C30',
						 * dataIndex : 'c30Plan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'c30Reality',
						 * fieldLabel : '实际添加C30', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'displayfield', fieldLabel : '计划添加RO水',
						 * dataIndex : 'roPlan', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', dataIndex : 'roReality',
						 * fieldLabel : '实际添加RO水', anchor : '95%', colspan : 1 }, {
						 * xtype : 'displayfield', height : '5', colspan : 2 }, {
						 * xtype : 'textfield', ref : '../../position',
						 * fieldLabel : '取样位置', allowBlank : false, dataIndex :
						 * 'position', name : 'list/position', anchor : '95%',
						 * colspan : 1 }
						 */, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c21Test',
							fieldLabel : '测试浓度C21',
							decimalPrecision : 3,
							name : 'list/c21Test',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (Ext.isEmpty(newValue))
										return false;
									var c21 = _this.editWindow.c21.getValue();
									var diff21 = _this.editWindow.diff21
											.getValue();
									var c21Test = parseFloat(newValue);
									_this.onJudge(c21, diff21, c21Test,
											_this.editWindow.c21Info);
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../c21Info',
							// height : '5',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c23Test',
							fieldLabel : '测试浓度C23',
							decimalPrecision : 3,
							name : 'list/c23Test',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (Ext.isEmpty(newValue))
										return false;
									var c23 = _this.editWindow.c23.getValue();
									var diff23 = _this.editWindow.diff23
											.getValue();
									var c23Test = parseFloat(newValue);
									_this.onJudge(c23, diff23, c23Test,
											_this.editWindow.c23Info);
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../c23Info',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c24Test',
							fieldLabel : '测试浓度C24',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c24Test',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (Ext.isEmpty(newValue))
										return false;
									var c24 = _this.editWindow.c24.getValue();
									var diff24 = _this.editWindow.diff24
											.getValue();
									var c24Test = parseFloat(newValue);
									_this.onJudge(c24, diff24, c24Test,
											_this.editWindow.c24Info);
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../c24Info',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c27Test',
							fieldLabel : '测试浓度C27',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c27Test',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (Ext.isEmpty(newValue))
										return false;
									var c27 = _this.editWindow.c27.getValue();
									var diff27 = _this.editWindow.diff27
											.getValue();
									var c27Test = parseFloat(newValue);
									_this.onJudge(c27, diff27, c27Test,
											_this.editWindow.c27Info);
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../c27Info',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c28Test',
							fieldLabel : '测试浓度C28',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c28Test',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (Ext.isEmpty(newValue))
										return false;
									var c28 = _this.editWindow.c28.getValue();
									var diff28 = _this.editWindow.diff28
											.getValue();
									var c28Test = parseFloat(newValue);
									_this.onJudge(c28, diff28, c28Test,
											_this.editWindow.c28Info);
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../c28Info',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c30Test',
							fieldLabel : '测试浓度C30',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c30Test',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (Ext.isEmpty(newValue))
										return false;
									var c30 = _this.editWindow.c30.getValue();
									var diff30 = _this.editWindow.diff30
											.getValue();
									var c30Test = parseFloat(newValue);
									_this.onJudge(c30, diff30, c30Test,
											_this.editWindow.c30Info);
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../c30Info',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c29Test',
							fieldLabel : '测试浓度C29',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c29Test',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../position',
							fieldLabel : '取样位置',
							dataIndex : 'position',
							// allowBlank : false,
							name : 'list/position',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001323',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointId3',
							hiddenName : 'list/appointId3',
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
							value : 'second'
						}, {
							xtype : 'hidden',
							name : 'entity/mptype',
							dataIndex : 'mptype2'
						}, {
							xtype : 'hidden',
							name : 'entity/line',
							dataIndex : 'line2'
						}, {
							xtype : 'hidden',
							name : 'entity/watertype',
							dataIndex : 'watertype2'
						}, {
							xtype : 'hidden',
							dataIndex : 'c21',
							ref : '../../c21'
						}, {
							xtype : 'hidden',
							dataIndex : 'diff21',
							ref : '../../diff21'
						}, {
							xtype : 'hidden',
							dataIndex : 'c23',
							ref : '../../c23'
						}, {
							xtype : 'hidden',
							dataIndex : 'diff23',
							ref : '../../diff23'
						}, {
							xtype : 'hidden',
							dataIndex : 'c24',
							ref : '../../c24'
						}, {
							xtype : 'hidden',
							dataIndex : 'diff24',
							ref : '../../diff24'
						}, {
							xtype : 'hidden',
							dataIndex : 'c27',
							ref : '../../c27'
						}, {
							xtype : 'hidden',
							dataIndex : 'diff27',
							ref : '../../diff27'
						}, {
							xtype : 'hidden',
							dataIndex : 'c28',
							ref : '../../c28'
						}, {
							xtype : 'hidden',
							dataIndex : 'diff28',
							ref : '../../diff28'
						}, {
							xtype : 'hidden',
							dataIndex : 'c30',
							ref : '../../c30'
						}, {
							xtype : 'hidden',
							dataIndex : 'diff30',
							ref : '../../diff30'
						}, {
							xtype : 'numberfield',
							ref : '../../c22Test',
							fieldLabel : '测试浓度C22',
							decimalPrecision : 3,
							name : 'list/c22Test',
							hidden : true,
							// allowBlank : false,
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow2 = function() {
		var _this = this;
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
				columns : 6,
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList4Second.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListBySecond.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '95%',
							xtype : 'displayfield',
							fieldLabel : '批号/膜片批次',
							colspan : 3
						}, {

							xtype : 'displayfield',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							dataIndex : 'watertype',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '95%',
							colspan : 3
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片型号',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '95%',
							colspan : 3
						}, {
							xtype : 'displayfield',
							height : '5',
							ref : '../../displayfield1',
							colspan : 6
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield2',
							dataIndex : 'c21Plan',
							fieldLabel : '原计划添加C21(g)',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield3',
							fieldLabel : '原计划添加C22(g)',
							dataIndex : 'c22Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield5',
							fieldLabel : '原计划添加C23(g)',
							dataIndex : 'c23Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield4',
							height : '5',
							colspan : 6
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield6',
							fieldLabel : '原计划添加C27(g)',
							dataIndex : 'c27Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield8',
							fieldLabel : '原计划添加C28(g)',
							dataIndex : 'c28Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield11',
							fieldLabel : '原计划添加C30(g)',
							dataIndex : 'c30Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield14',
							height : '5',
							colspan : 6
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield240',
							fieldLabel : '原计划添加C24(g)',
							dataIndex : 'c24Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield290',
							fieldLabel : '原计划添加C29(g)',
							dataIndex : 'c29Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield12',
							fieldLabel : '原计划添加RO水(KG)',
							dataIndex : 'roPlan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'displayfield',
							ref : '../../position',
							fieldLabel : '取样位置',
							dataIndex : 'position',
							// allowBlank : false,
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield14',
							height : '5',
							colspan : 6
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield18',
							dataIndex : 'c21Test',
							fieldLabel : '测试浓度C21',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield19',
							dataIndex : 'c22Test',
							fieldLabel : '测试浓度C22',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield21',
							dataIndex : 'c23Test',
							fieldLabel : '测试浓度C23',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield20',
							height : '5',
							colspan : 6
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield22',
							dataIndex : 'c27Test',
							fieldLabel : '测试浓度C27',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield24',
							dataIndex : 'c28Test',
							fieldLabel : '测试浓度C28',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield27',
							dataIndex : 'c30Test',
							fieldLabel : '测试浓度C30',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield20',
							height : '5',
							colspan : 6
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield2400',
							dataIndex : 'c24Test',
							fieldLabel : '测试浓度C24',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield2900',
							dataIndex : 'c29Test',
							fieldLabel : '测试浓度C29',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {

							xtype : 'combobox',
							fieldLabel : '工艺意见',
							ref : '../../secondAdvise',
							hiddenName : 'list/secondAdvise',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 3,
							store : [['正常使用', '正常使用'], ['调整', '调整'],
									['报废', '报废']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow2.secondAdvise.reset();
								},
								'select' : function(combo, record, index) {
									var ireadonly = index != 1;
									this.editWindow2.c21Plan
											.setReadOnly(ireadonly);
									this.editWindow2.c22Plan
											.setReadOnly(ireadonly);
									this.editWindow2.c23Plan
											.setReadOnly(ireadonly);
									this.editWindow2.c27Plan
											.setReadOnly(ireadonly);
									this.editWindow2.c28Plan
											.setReadOnly(ireadonly);
									this.editWindow2.c30Plan
											.setReadOnly(ireadonly);
									this.editWindow2.roPlan
											.setReadOnly(ireadonly);
									this.editWindow2.c24Plan
											.setReadOnly(ireadonly);
									this.editWindow2.c29Plan
											.setReadOnly(ireadonly);

									this.editWindow2.c21Plan
											.setDisabled(ireadonly);
									this.editWindow2.c22Plan
											.setDisabled(ireadonly);
									this.editWindow2.c23Plan
											.setDisabled(ireadonly);
									this.editWindow2.c27Plan
											.setDisabled(ireadonly);
									this.editWindow2.c28Plan
											.setDisabled(ireadonly);
									this.editWindow2.c30Plan
											.setDisabled(ireadonly);
									this.editWindow2.roPlan
											.setDisabled(ireadonly);
									this.editWindow2.weightPlan
											.setDisabled(ireadonly);
									this.editWindow2.c24Plan
											.setDisabled(ireadonly);
									this.editWindow2.c29Plan
											.setDisabled(ireadonly);

									if (index != 1) {
										this.editWindow2.c21Plan.setValue('');
										this.editWindow2.c22Plan.setValue('');
										this.editWindow2.c23Plan.setValue('');
										this.editWindow2.c27Plan.setValue('');
										this.editWindow2.c28Plan.setValue('');
										this.editWindow2.c30Plan.setValue('');
										this.editWindow2.roPlan.setValue('');
										this.editWindow2.c24Plan.setValue('');
										this.editWindow2.c29Plan.setValue('');
										this.editWindow2.weightPlan
												.setValue('');
									}
								}
							}
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001322',
							allowBlank : false,
							anchor : '95%',
							colspan : 3,
							ref : '../../appointId',
							hiddenName : 'list/appointId',
							fieldLabel : '下单员'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							ref : '../../c21Plan',
							fieldLabel : '计划添加C21(g)',
							name : 'list/c21Plan',
							readOnly : true,
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'textfield',
							ref : '../../c22Plan',
							fieldLabel : '计划添加C22(g)',
							name : 'list/c22Plan',
							readOnly : true,
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'textfield',
							ref : '../../c23Plan',
							fieldLabel : '计划添加C23(g)',
							name : 'list/c23Plan',
							readOnly : true,
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							ref : '../../c27Plan',
							fieldLabel : '计划添加C27(g)',
							readOnly : true,
							name : 'list/c27Plan',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c28Plan',
							fieldLabel : '计划添加C28(g)',
							readOnly : true,
							name : 'list/c28Plan',
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'textfield',
							ref : '../../c30Plan',
							fieldLabel : '计划添加C30(g)',
							readOnly : true,
							name : 'list/c30Plan',
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							ref : '../../c24Plan',
							fieldLabel : '计划添加C24(g)',
							readOnly : true,
							name : 'list/c24Plan',
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'textfield',
							ref : '../../c29Plan',
							fieldLabel : '计划添加C29(g)',
							readOnly : true,
							name : 'list/c29Plan',
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'textfield',
							ref : '../../roPlan',
							fieldLabel : '计划添加RO水(KG)',
							name : 'list/roPlan',
							anchor : '95%',
							colspan : 2,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									else {
										_this.onCalc4tz();
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'trigger',
							emptyText : '输入完毕单击旁边按钮计算',
							ref : '../../weightPlan',
							// readOnly : true,
							fieldLabel : '计划总重量(KG)',
							name : 'list/weightPlan',
							anchor : '95%',
							colspan : 3,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc4tz();
							},
							regex : /^\d+(\.\d+)?$/,
							regexText : "不合法的数据格式"
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
						}, {
							xtype : 'hidden',
							ref : '../../ifok'
						}, {
							xtype : 'hidden',
							ref : '../../resultc21',
							dataIndex : 'resultc21'
						}, {
							xtype : 'hidden',
							ref : '../../resultc22',
							dataIndex : 'resultc22'
						}, {
							xtype : 'hidden',
							ref : '../../resultc23',
							dataIndex : 'resultc23'
						}, {
							xtype : 'hidden',
							ref : '../../resultc27',
							dataIndex : 'resultc27'
						}, {
							xtype : 'hidden',
							ref : '../../resultc28',
							dataIndex : 'resultc28'
						}, {
							xtype : 'hidden',
							ref : '../../resultc30',
							dataIndex : 'resultc30'
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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListByThird.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '95%',
							xtype : 'displayfield',
							fieldLabel : '水相液批号<br>/膜片批次'
						}, {

							xtype : 'displayfield',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							dataIndex : 'watertype',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '95%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片型号',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C21(g)',
							dataIndex : 'c21Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c21Reality',
							ref : '../../c21Reality',
							allowBlank : false,
							fieldLabel : '实际添加C21(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加C22(g)',
							dataIndex : 'c22Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c22Reality',
							ref : '../../c22Reality',
							allowBlank : false,
							fieldLabel : '实际添加C22(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加C23(g)',
							dataIndex : 'c23Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c23Reality',
							ref : '../../c23Reality',
							allowBlank : false,
							fieldLabel : '实际添加C23(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加C27(g)',
							dataIndex : 'c27Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c27Reality',
							ref : '../../c27Reality',
							allowBlank : false,
							fieldLabel : '实际添加C27(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加C28(g)',
							dataIndex : 'c28Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c28Reality',
							ref : '../../c28Reality',
							allowBlank : false,
							fieldLabel : '实际添加C28(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加C30(g)',
							dataIndex : 'c30Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c30Reality',
							ref : '../../c30Reality',
							allowBlank : false,
							fieldLabel : '实际添加C30(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加C24(g)',
							dataIndex : 'c24Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c24Reality',
							ref : '../../c24Reality',
							allowBlank : false,
							fieldLabel : '实际添加C24(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加C29(g)',
							dataIndex : 'c29Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/c29Reality',
							ref : '../../c29Reality',
							allowBlank : false,
							fieldLabel : '实际添加C29(g)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '计划添加RO水(KG)',
							dataIndex : 'roPlan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/roReality',
							allowBlank : false,
							ref : '../../roReality',
							fieldLabel : '实际添加RO水(KG)',
							anchor : '95%',
							colspan : 1,
							listeners : {
								'change' : function(o, newValue, oldValue) {
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
							xtype : 'displayfield',
							fieldLabel : '配料计划总重量(KG)',
							dataIndex : 'weightPlan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮计算',
							ref : '../../weightReality',
							name : 'list/weightReality',
							allowBlank : false,
							editable : false,
							fieldLabel : '配料实际总重量(KG)',
							anchor : '95%',
							colspan : 1,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc4pl();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001321',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointId2',
							hiddenName : 'list/appointId2',
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
						dataIndex : 'watertype',
						header : '水相类型'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mptype',
						header : '膜片型号'
					}, {
						dataIndex : 'batchNo',
						header : '水相液批号'
					}, {
						dataIndex : 'position',
						header : '取样位置'
					}, {
						dataIndex : 'c21Test',
						header : 'c21测试浓度'
					}, {
						dataIndex : 'c22Test',
						header : 'c22测试浓度'
					}, {
						dataIndex : 'c23Test',
						header : 'c23测试浓度'
					}, {
						dataIndex : 'c24Test',
						header : 'c24测试浓度'
					}, {
						dataIndex : 'c27Test',
						header : 'c27测试浓度'
					}, {
						dataIndex : 'c28Test',
						header : 'c28测试浓度'
					}, {
						dataIndex : 'c29Test',
						header : 'c29测试浓度'
					}, {
						dataIndex : 'c30Test',
						header : 'c30测试浓度'
					}, {
						dataIndex : 'c21Plan',
						header : 'c21计划添加量(g)'
					}, {
						dataIndex : 'c22Plan',
						header : 'c22计划添加量(g)'
					}, {
						dataIndex : 'c23Plan',
						header : 'c23计划添加量(g)'
					}, {
						dataIndex : 'c24Plan',
						header : 'c24计划添加量(g)'
					}, {
						dataIndex : 'c27Plan',
						header : 'c27计划添加量(g)'
					}, {
						dataIndex : 'c28Plan',
						header : 'c28计划添加量(g)'
					}, {
						dataIndex : 'c29Plan',
						header : 'c29计划添加量(g)'
					}, {
						dataIndex : 'c30Plan',
						header : 'c30计划添加量(g)'
					}, {
						dataIndex : 'roPlan',
						header : 'RO水计划添加量(KG)'
					}, {
						dataIndex : 'c21Reality',
						header : 'c21实际添加量(g)'
					}, {
						dataIndex : 'c22Reality',
						header : 'c22实际添加量(g)'
					}, {
						dataIndex : 'c23Reality',
						header : 'c23实际添加量(g)'
					}, {
						dataIndex : 'c24Reality',
						header : 'c24实际添加量(g)'
					}, {
						dataIndex : 'c27Reality',
						header : 'c27实际添加量(g)'
					}, {
						dataIndex : 'c28Reality',
						header : 'c28实际添加量(g)'
					}, {
						dataIndex : 'c29Reality',
						header : 'c29实际添加量(g)'
					}, {
						dataIndex : 'c30Reality',
						header : 'c30实际添加量(g)'
					}, {
						dataIndex : 'roReality',
						header : 'RO水实际添加量(KG)'
					}, {
						dataIndex : 'createName',
						header : '发起人'
					}, {
						dataIndex : 'appointName3',
						header : '分析员'
					}, {
						dataIndex : 'appointName',
						header : '下单员'
					}, {
						dataIndex : 'appointName2',
						header : '配料员'
					}, {
						dataIndex : 'createTime',
						header : '发起时间'
					}, {
						dataIndex : 'firstDate',
						header : '分析时间'
					}, {
						dataIndex : 'secondDate',
						header : '调整时间'
					}, {
						dataIndex : 'thirdDate',
						header : '配料时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest5.queryWaterListRecords.biz.ext',
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
							name : 'c21Test'
						}, {
							name : 'c22Test'
						}, {
							name : 'c23Test'
						}, {
							name : 'c27Test'
						}, {
							name : 'c28Test'
						}, {
							name : 'c29Test'
						}, {
							name : 'c30Test'
						}, {
							name : 'c24Test'
						}, {
							name : 'c21Plan'
						}, {
							name : 'c22Plan'
						}, {
							name : 'c23Plan'
						}, {
							name : 'c27Plan'
						}, {
							name : 'c28Plan'
						}, {
							name : 'c29Plan'
						}, {
							name : 'c30Plan'
						}, {
							name : 'c24Plan'
						}, {
							name : 'roPlan'
						}, {
							name : 'c21Reality'
						}, {
							name : 'c22Reality'
						}, {
							name : 'c23Reality'
						}, {
							name : 'c27Reality'
						}, {
							name : 'c28Reality'
						}, {
							name : 'c29Reality'
						}, {
							name : 'c30Reality'
						}, {
							name : 'c24Reality'
						}, {
							name : 'roReality'
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
							name : 'line'
						}, {
							name : 'mptype'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'step'
						}, {
							name : 'position'
						}, {
							name : 'watertype'
						}, {
							name : 'appointName'
						}, {
							name : 'appointName2'
						}, {
							name : 'appointName3'
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

	this.initEditWindow4 = function() {
		this.editWindow4 = this.editWindow4 || new Ext.fn.FormWindow({
			title : '修改测试浓度',
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
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListByModifyTest.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '95%',
							xtype : 'displayfield',
							colspan : 1,
							fieldLabel : '批号/膜片批次'
						}, {

							xtype : 'displayfield',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							dataIndex : 'watertype',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',

							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '95%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片型号',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'list/gc',
							hiddenName : 'list/gc',
							fieldLabel : '气相色谱仪',
							dataIndex : 'gc',
							dictData : KS_GC_ITEM,
							anchor : '95%',
							colspan : 1,
							allowBlank : false
						}, {
							xtype : 'dictcombobox',
							name : 'list/hplc',
							hiddenName : 'list/hplc',
							fieldLabel : '液相色谱仪',
							dataIndex : 'hplc',
							dictData : KS_HPLC_ITEM,
							anchor : '95%',
							colspan : 1,
							allowBlank : false
						}

						, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c21Test',
							fieldLabel : '测试浓度C21',
							dataIndex : 'c21Test',
							decimalPrecision : 3,
							name : 'list/c21Test',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c22Test',
							fieldLabel : '测试浓度C22',
							dataIndex : 'c22Test',
							decimalPrecision : 3,
							name : 'list/c22Test',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c23Test',
							fieldLabel : '测试浓度C23',
							dataIndex : 'c23Test',
							decimalPrecision : 3,
							name : 'list/c23Test',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c27Test',
							fieldLabel : '测试浓度C27',
							dataIndex : 'c27Test',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c27Test',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c28Test',
							dataIndex : 'c28Test',
							fieldLabel : '测试浓度C28',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c28Test',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c30Test',
							fieldLabel : '测试浓度C30',
							dataIndex : 'c30Test',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c30Test',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c24Test',
							dataIndex : 'c24Test',
							fieldLabel : '测试浓度C24',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c24Test',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c29Test',
							fieldLabel : '测试浓度C29',
							dataIndex : 'c29Test',
							decimalPrecision : 3,
							allowBlank : false,
							name : 'list/c29Test',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../position',
							dataIndex : 'position',
							fieldLabel : '取样位置',
							dataIndex : 'position',
							// allowBlank : false,
							name : 'list/position',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001323',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							ref : '../../appointId3',
							hiddenName : 'list/appointId3',
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
							value : 'second'
						}, {
							xtype : 'hidden',
							name : 'entity/mptype',
							dataIndex : 'mptype2'
						}, {
							xtype : 'hidden',
							name : 'entity/line',
							dataIndex : 'line2'
						}, {
							xtype : 'hidden',
							name : 'entity/watertype',
							dataIndex : 'watertype2'
						}]
			}]
		});
	}

	this.initBaseFormulaWindow = function() {
		var _this = this;

		var selModel4BaseFormula = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel4BaseFormula = this.listPanel4BaseFormula
				|| new Ext.fn.EditListPanel({

					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					autoScroll : true,
					clicksToEdit : 1,
					selModel : selModel4BaseFormula,

					tbar : [{
								xtype : 'displayfield',
								ref : '../info',
								value : '&nbsp;'
							}],

					columns : [new Ext.grid.RowNumberer(),
							selModel4BaseFormula, {
								dataIndex : 'watertype',
								sortable : true,
								width : 140,
								header : '水相液类型'
							}, {
								dataIndex : 'code',
								sortable : true,
								width : 100,
								header : '产品种类代码'
							}, {
								dataIndex : 'mptype',
								sortable : true,
								width : 100,
								header : '膜片类型'
							}, {
								dataIndex : 'line',
								sortable : true,
								width : 100,
								header : '涂膜线'
							}, {

								dataIndex : 'speed',
								sortable : true,
								width : 100,
								header : '泵速(L/h)',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'speed', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c21',
								sortable : true,
								width : 100,
								header : 'C21浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c21', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff21',
								sortable : true,
								width : 100,
								header : 'C21浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff21', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c22',
								sortable : true,
								width : 100,
								header : 'C22浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c22', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff22',
								sortable : true,
								width : 100,
								header : 'C22浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff22', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c23',
								sortable : true,
								width : 100,
								header : 'C23浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c23', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff23',
								sortable : true,
								width : 100,
								header : 'C23浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff23', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c24',
								sortable : true,
								width : 100,
								header : 'C24浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c24', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff24',
								sortable : true,
								width : 100,
								header : 'C24浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff24', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c27',
								sortable : true,
								width : 100,
								header : 'C27浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c27', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff27',
								sortable : true,
								width : 100,
								header : 'C27浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff27', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c28',
								sortable : true,
								width : 100,
								header : 'C28浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c28', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff28',
								sortable : true,
								width : 100,
								header : 'C28浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff28', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c30',
								sortable : true,
								width : 100,
								header : 'C30浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c30', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff30',
								sortable : true,
								width : 100,
								header : 'C30浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff30', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'c29',
								sortable : true,
								width : 100,
								header : 'C29浓度',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'c29', newValue,
															oldValue);
												}
											}
										}))

							}, {

								dataIndex : 'diff29',
								sortable : true,
								width : 100,
								header : 'C29浓度公差',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												},
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec.data['id'];
													_this.saveBaseFormula(id,
															'diff29', newValue,
															oldValue);
												}
											}
										}))

							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.quality.mpwatertest.queryBaseFormula.biz.ext',
						root : 'data',
						autoLoad : true,
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
									name : 'code'
								}, {
									name : 'mptype'
								}, {
									name : 'line'
								}, {
									name : 'c21'
								}, {
									name : 'c22'
								}, {
									name : 'c23'
								}, {
									name : 'c24'
								}, {
									name : 'c27'
								}, {
									name : 'c28'
								}, {
									name : 'c30'
								}, {
									name : 'diff21'
								}, {
									name : 'diff22'
								}, {
									name : 'diff23'
								}, {
									name : 'diff24'
								}, {
									name : 'diff27'
								}, {
									name : 'diff28'
								}, {
									name : 'diff30'
								}, {
									name : 'watertype'
								}, {
									name : 'c29'
								}, {
									name : 'diff29'
								}]
					})
				})

		this.baseFormulaWindow = this.baseFormulaWindow || new Ext.Window({
					title : '水相液配方',
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
					items : [this.listPanel4BaseFormula],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.baseFormulaWindow.hide();
								}
							}]

				});

	}
}