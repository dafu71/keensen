com.keensen.ump.produce.quality.mptest.waterMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initInputWindow2();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		this.initViewWindow();
		this.initEditWindow4();

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
			height : 120,
			columns : 5,
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
			}]
		});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
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
				forceFit : true
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
							fieldLabel : '配料总重量(kg)',
							anchor : '95%',
							colspan : 2,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc();
							},
							regex : /^[0-9]\d*$/,
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
							readOnly : true,
							name : 'list/c21Plan',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c22Plan',
							fieldLabel : '计划添加C22(g)',
							readOnly : true,
							name : 'list/c22Plan',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c23Plan',
							fieldLabel : '计划添加C23(g)',
							readOnly : true,
							name : 'list/c23Plan',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c27Plan',
							fieldLabel : '计划添加C27(g)',
							readOnly : true,
							allowBlank : false,
							name : 'list/c27Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c28Plan',
							fieldLabel : '计划添加C28(g)',
							readOnly : true,
							allowBlank : false,
							name : 'list/c28Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c30Plan',
							fieldLabel : '计划添加C30(g)',
							readOnly : true,
							allowBlank : false,
							name : 'list/c30Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../roPlan',
							fieldLabel : '计划添加RO水(kg)',
							readOnly : true,
							allowBlank : false,
							name : 'list/roPlan',
							anchor : '95%',
							colspan : 1
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
							fieldLabel : '工艺员'
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
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c22Test',
							fieldLabel : '测试浓度C22',
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
							decimalPrecision : 3,
							name : 'list/c23Test',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c27Test',
							fieldLabel : '测试浓度C27',
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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList4Second.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListBySecond.biz.ext',
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
							ref : '../../displayfield1',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield2',
							dataIndex : 'c21Plan',
							fieldLabel : '原计划添加C21(g)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield3',
							fieldLabel : '原计划添加C22(g)',
							dataIndex : 'c22Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield4',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield5',
							fieldLabel : '原计划添加C23(g)',
							dataIndex : 'c23Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield6',
							fieldLabel : '原计划添加C27(g)',
							dataIndex : 'c27Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield7',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield8',
							fieldLabel : '原计划添加C28(g)',
							dataIndex : 'c28Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield11',
							fieldLabel : '原计划添加C30(g)',
							dataIndex : 'c30Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield14',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield12',
							fieldLabel : '原计划添加RO水(kg)',
							dataIndex : 'roPlan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../position',
							fieldLabel : '取样位置',
							dataIndex : 'position',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield14',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield18',
							dataIndex : 'c21Test',
							fieldLabel : '测试浓度C21',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield19',
							dataIndex : 'c22Test',
							fieldLabel : '测试浓度C22',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield20',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield21',
							dataIndex : 'c23Test',
							fieldLabel : '测试浓度C23',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield22',
							dataIndex : 'c27Test',
							fieldLabel : '测试浓度C27',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield23',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield24',
							dataIndex : 'c28Test',
							fieldLabel : '测试浓度C28',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield27',
							dataIndex : 'c30Test',
							fieldLabel : '测试浓度C30',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '工艺意见',
							ref : '../../secondAdvise',
							hiddenName : 'list/secondAdvise',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							store : [['正常使用', '正常使用'], ['调整', '调整'],
									['水相报废', '水相报废']],
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

									if (index != 1) {
										this.editWindow2.c21Plan.setValue('');
										this.editWindow2.c22Plan.setValue('');
										this.editWindow2.c23Plan.setValue('');
										this.editWindow2.c27Plan.setValue('');
										this.editWindow2.c28Plan.setValue('');
										this.editWindow2.c30Plan.setValue('');
										this.editWindow2.roPlan.setValue('');
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
							colspan : 1,
							ref : '../../appointId',
							hiddenName : 'list/appointId',
							fieldLabel : '工艺员'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c21Plan',
							fieldLabel : '计划添加C21(g)',
							name : 'list/c21Plan',
							readOnly : true,
							anchor : '95%',
							colspan : 1,
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
							colspan : 1,
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
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c23Plan',
							fieldLabel : '计划添加C23(g)',
							name : 'list/c23Plan',
							readOnly : true,
							anchor : '95%',
							colspan : 1,
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
							ref : '../../c27Plan',
							fieldLabel : '计划添加C27(g)',
							readOnly : true,
							name : 'list/c27Plan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c28Plan',
							fieldLabel : '计划添加C28(g)',
							readOnly : true,
							name : 'list/c28Plan',
							anchor : '95%',
							colspan : 1,
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
							colspan : 1,
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
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../roPlan',
							fieldLabel : '计划添加RO水(kg)',
							name : 'list/roPlan',
							anchor : '95%',
							colspan : 1,
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
							ref : '../../weightPlan',
							readOnly : true,
							fieldLabel : '计划总重量(kg)',
							name : 'list/weightPlan',
							anchor : '95%',
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
							fieldLabel : '计划添加RO水(kg)',
							dataIndex : 'roPlan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'list/roReality',
							allowBlank : false,
							ref : '../../roReality',
							fieldLabel : '实际添加RO水(kg)',
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
							fieldLabel : '配料计划总重量(kg)',
							dataIndex : 'weightPlan',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../weightReality',
							name : 'list/weightReality',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '配料实际总重量(kg)',
							anchor : '95%',
							colspan : 1
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
						dataIndex : 'c27Test',
						header : 'c27测试浓度'
					}, {
						dataIndex : 'c28Test',
						header : 'c28测试浓度'
					}, {
						dataIndex : 'c30Test',
						header : 'c30测试浓度'
					}, {
						dataIndex : 'c21Plan',
						header : 'c21计划添加量'
					}, {
						dataIndex : 'c22Plan',
						header : 'c22计划添加量'
					}, {
						dataIndex : 'c23Plan',
						header : 'c23计划添加量'
					}, {
						dataIndex : 'c27Plan',
						header : 'c27计划添加量'
					}, {
						dataIndex : 'c28Plan',
						header : 'c28计划添加量'
					}, {
						dataIndex : 'c30Plan',
						header : 'c30计划添加量'
					}, {
						dataIndex : 'roPlan',
						header : 'RO水计划添加量'
					}, {
						dataIndex : 'c21Reality',
						header : 'c21实际添加量'
					}, {
						dataIndex : 'c22Reality',
						header : 'c22实际添加量'
					}, {
						dataIndex : 'c23Reality',
						header : 'c23实际添加量'
					}, {
						dataIndex : 'c27Reality',
						header : 'c27实际添加量'
					}, {
						dataIndex : 'c28Reality',
						header : 'c28实际添加量'
					}, {
						dataIndex : 'c30Reality',
						header : 'c30实际添加量'
					}, {
						dataIndex : 'roReality',
						header : 'RO水实际添加量'
					}, {
						dataIndex : 'createName',
						header : '发起人'
					}, {
						dataIndex : 'appointName3',
						header : '分析员'
					}, {
						dataIndex : 'appointName',
						header : '工艺员'
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
}