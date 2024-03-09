com.keensen.ump.produce.quality.mptest.gyMgr = function() {
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
					renderTo : 'mptestgymgr',
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
					title : '【甘油浓度查询】',
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
						ref : '../batchNo',
						name : 'condition/batchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '膜片批号',
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
			title : '【甘油浓度列表】',
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
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}, {
						dataIndex : 'stepName',
						header : '当前步骤'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest2.queryGyRecordsByPage.biz.ext',
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
			title : '新增甘油浓度配料',
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
				saveUrl : 'com.keensen.ump.produce.quality.mptest2.saveGy.biz.ext',
				fields : [{
							ref : '../../batchNo',
							anchor : '85%',
							xtype : 'textfield',
							name : 'entity/batchNo',
							fieldLabel : '膜片批号',
							allowBlank : false
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
							xtype : 'textfield',
							name : 'list/outPlan',
							allowBlank : false,
							fieldLabel : '计划原有液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/gyPlan',
							allowBlank : false,
							fieldLabel : '计划添加甘油',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/roPlan',
							allowBlank : false,
							fieldLabel : '计划添加RO水',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/outReality',
							allowBlank : false,
							fieldLabel : '实际原有液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/gyReality',
							allowBlank : false,
							fieldLabel : '实际添加甘油',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/roReality',
							allowBlank : false,
							fieldLabel : '实际添加RO水',
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
				loadUrl : 'com.keensen.ump.produce.quality.mptest2.expandGyList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest2.modiGyListByFirst.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '膜片批号'
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
							dataIndex : 'outPlan',
							fieldLabel : '计划液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'gyPlan',
							fieldLabel : '计划添加甘油',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'roPlan',
							fieldLabel : '计划添加RO水',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'outReality',
							fieldLabel : '实际原有液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'gyReality',
							fieldLabel : '实际添加甘油',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'roReality',
							fieldLabel : '实际添加RO水',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/position',
							allowBlank : false,
							fieldLabel : '取样位置',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/concentration',
							allowBlank : false,
							fieldLabel : '甘油浓度',
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
				loadUrl : 'com.keensen.ump.produce.quality.mptest2.expandGyList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest2.modiGyListBySecond.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '膜片批号'
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
							dataIndex : 'outPlan',
							fieldLabel : '原计划液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'gyPlan',
							fieldLabel : '原计划添加甘油',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'roPlan',
							fieldLabel : '原计划添加RO水',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '取样位置',
							dataIndex : 'position',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '甘油浓度',
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
							dataIndex : 'outPlan',
							ref : '../../outPlan',
							name : 'list/outPlan',
							fieldLabel : '计划液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../gyPlan',
							fieldLabel : '计划添加甘油',
							name : 'list/gyPlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '计划添加RO水',
							name : 'list/roPlan',
							ref : '../../roPlan',
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
				loadUrl : 'com.keensen.ump.produce.quality.mptest2.expandGyList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest2.modiGyListByThird.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '膜片批号'
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
							dataIndex : 'outPlan',
							fieldLabel : '计划液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							dataIndex : 'gyPlan',
							fieldLabel : '计划添加甘油',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加RO水',
							dataIndex : 'roPlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/outReality',
							allowBlank : false,
							fieldLabel : '实际原有液体排放量',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/gyReality',
							allowBlank : false,
							fieldLabel : '实际添加甘油',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list/roReality',
							allowBlank : false,
							fieldLabel : '实际添加RO水',
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
						dataIndex : 'position',
						header : '取样位置'
					}, {
						dataIndex : 'concentration',
						header : '甘油浓度'
					}, {
						dataIndex : 'outPlan',
						header : '计划排放量（原有液体）'
					}, {
						dataIndex : 'gyPlan',
						header : '甘油计划添加量'
					}, {
						dataIndex : 'roPlan',
						header : 'RO水计划添加量'
					}, {
						dataIndex : 'outReality',
						header : '实际排放量（原有液体）'
					}, {
						dataIndex : 'gyReality',
						header : '甘油实际添加量'
					}, {
						dataIndex : 'roReality',
						header : 'RO水实际添加量'
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
				url : 'com.keensen.ump.produce.quality.mptest2.queryGyListRecords.biz.ext',
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
							name : 'outPlan'
						}, {
							name : 'gyPlan'
						}, {
							name : 'roPlan'
						}, {
							name : 'outReality'
						}, {
							name : 'gyReality'
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
							name : 'position'
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