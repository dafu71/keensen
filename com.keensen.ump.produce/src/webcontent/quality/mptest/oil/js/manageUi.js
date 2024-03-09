com.keensen.ump.produce.quality.mptest.oilMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		this.initViewWindow();

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
					title : '【油相液浓度查询】',
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
								['D', 'D'], ['E', 'E']],
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
						store : [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
								['NF', 'NF']],
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
						fieldLabel : '油相液批号',
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
						store : [['first', '分析'], ['second', '调整'],
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
			title : '【油相液浓度列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '分析',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '调整',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit2
					}, '-', {
						text : '配料',
						scope : this,
						iconCls : 'icon-application_edit',
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
						dataIndex : 'tank',
						header : '备料罐'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mptype',
						header : '膜片类型'
					}, {
						dataIndex : 'batchNo',
						header : '油相液批号'
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
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增油相液浓度配料',
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
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '油相液批号',
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '备料罐',
							ref : '../../tank',
							hiddenName : 'entity/tank',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['1号', '1号'], ['2号', '2号'], ['3号', '3号']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.tank.reset();
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
							anchor : '85%',
							colspan : 2,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E']],
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

							xtype : 'combobox',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['BW', 'BW'], ['ULP', 'ULP'],
									['SW', 'SW'], ['NF', 'NF']],
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
							xtype : 'textfield',
							name : 'list/c41Plan',
							allowBlank : false,
							fieldLabel : '计划添加C41',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c42Plan',
							allowBlank : false,
							fieldLabel : '计划添加C42',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/c41Reality',
							allowBlank : false,
							fieldLabel : '实际添加C41',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c42Reality',
							allowBlank : false,
							fieldLabel : '实际添加C42',
							anchor : '85%',
							colspan : 1
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
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.mptest.expandOilList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest.modiOilListByFirst.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '油相液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '备料罐',
							ref : '../../tank',
							dataIndex : 'tank',
							anchor : '85%',
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
							fieldLabel : '计划添加C41',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c42Plan',
							fieldLabel : '计划添加C42',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'c41Reality',
							fieldLabel : '实际添加C41',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c42Reality',
							fieldLabel : '实际添加C42',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/concentration',
							allowBlank : false,
							fieldLabel : '油相浓度',
							anchor : '85%',
							colspan : 1
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
							fieldLabel : '油相液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '备料罐',
							ref : '../../tank',
							dataIndex : 'tank',
							anchor : '85%',
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
							fieldLabel : '原计划添加C41',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '原计划添加C42',
							dataIndex : 'c42Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '油相浓度',
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
							fieldLabel : '计划添加C41',
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
							fieldLabel : '计划添加C42',
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
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '油相液批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '备料罐',
							ref : '../../tank',
							dataIndex : 'tank',
							anchor : '85%',
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
							 * '油相浓度', dataIndex : 'concentration', anchor :
							 * '85%', colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'c41Plan',
							fieldLabel : '计划添加C41',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C42',
							dataIndex : 'c42Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/c41Reality',
							allowBlank : false,
							fieldLabel : '实际添加C41',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/c42Reality',
							allowBlank : false,
							fieldLabel : '实际添加C42',
							anchor : '85%',
							colspan : 1
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
						dataIndex : 'concentration',
						header : '油相浓度'
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
						dataIndex : 'c42Reality',
						header : 'c42实际添加量'
					}, {
						dataIndex : 'firstName',
						header : '分析员'
					}, {
						dataIndex : 'secondName',
						header : '工艺员'
					}, {
						dataIndex : 'thirdName',
						header : '配料员'
					}, {
						dataIndex : 'firstDate',
						header : '接样时间'
					}, {
						dataIndex : 'secondDate',
						header : '工艺调整时间'
					}, {
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