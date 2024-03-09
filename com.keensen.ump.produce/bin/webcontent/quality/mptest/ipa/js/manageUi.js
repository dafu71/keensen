com.keensen.ump.produce.quality.mptest.ipaMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initIpaListStore();
		this.initInputWindow();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestipamgr',
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
					title : '【IPA浓度查询】',
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
			title : '【IPA浓度列表】',
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
				url : 'com.keensen.ump.produce.quality.mptest2.queryIpaRecordsByPage.biz.ext',
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

	this.initIpaListStore = function() {
		this.ipaListStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.mptest2.queryIpaListRecords.biz.ext',
			root : 'data',
			autoLoad : false,
			totalProperty : '',
			baseParams : {},
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
						name : 'ipaPlan'
					}, {
						name : 'roPlan'
					}, {
						name : 'outReality'
					}, {
						name : 'ipaReality'
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
						name : 'code'
					}]
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增IPA浓度配料',
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
				columns : 6,
				saveUrl : 'com.keensen.ump.produce.quality.mptest2.saveIpa.biz.ext',
				fields : [{
							ref : '../../batchNo',
							anchor : '85%',
							xtype : 'textfield',
							name : 'entity/batchNo',
							fieldLabel : '膜片批号',
							allowBlank : false,
							colspan : 3
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 3,
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
							value : '<p style="color:red;">4号槽</p>',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'list[1]/outPlan',
							allowBlank : false,
							fieldLabel : '计划排放量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[1]/ipaPlan',
							allowBlank : false,
							fieldLabel : '计划IPA浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[1]/roPlan',
							allowBlank : false,
							fieldLabel : '计划RO水浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'list[1]/code',
							value : '4#'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'list[1]/outReality',
							allowBlank : false,
							fieldLabel : '实际排放量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[1]/ipaReality',
							allowBlank : false,
							fieldLabel : '实际IPA浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[1]/roReality',
							allowBlank : false,
							fieldLabel : '实际RO水浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">7号槽</p>',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'list[2]/outPlan',
							allowBlank : false,
							fieldLabel : '计划排放量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[2]/ipaPlan',
							allowBlank : false,
							fieldLabel : '计划IPA浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[2]/roPlan',
							allowBlank : false,
							fieldLabel : '计划RO水浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'list[2]/code',
							value : '7#'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'list[2]/outReality',
							allowBlank : false,
							fieldLabel : '实际排放量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[2]/ipaReality',
							allowBlank : false,
							fieldLabel : '实际IPA浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[2]/roReality',
							allowBlank : false,
							fieldLabel : '实际RO水浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">9号槽</p>',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'list[3]/outPlan',
							allowBlank : false,
							fieldLabel : '计划排放量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[3]/ipaPlan',
							allowBlank : false,
							fieldLabel : '计划IPA浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[3]/roPlan',
							allowBlank : false,
							fieldLabel : '计划RO水浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'list[3]/code',
							value : '9#'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'list[3]/outReality',
							allowBlank : false,
							fieldLabel : '实际排放量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[3]/ipaReality',
							allowBlank : false,
							fieldLabel : '实际IPA浓度',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'list[3]/roReality',
							allowBlank : false,
							fieldLabel : '实际RO水浓度',
							anchor : '95%',
							colspan : 2
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;

		var selModel3 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.ListPanel({
					title : '【参考记录】',
					// region : 'center',
					height : 200,
					viewConfig : {
						forceFit : true
					},
					tbar : [],
					hsPage : false,
					autoScroll : true,
					selModel : selModel3,
					columns : [new Ext.grid.RowNumberer(), selModel3, {
								dataIndex : 'code',
								header : '漂洗槽编号'
							}, {
								dataIndex : 'outPlan',
								header : '计划排放量'
							}, {
								dataIndex : 'ipaPlan',
								header : 'IPA计划添加量'
							}, {
								dataIndex : 'roPlan',
								header : 'RO水计划添加量'
							}, {
								dataIndex : 'outReality',
								header : '实际排放量'
							}, {
								dataIndex : 'ipaReality',
								header : 'IPA实际添加量'
							}, {
								dataIndex : 'roReality',
								header : 'RO水实际添加量'
							}],
					store : this.ipaListStore
				})

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			baseCls : "x-plain",
			pgrid : this.listPanel,
			columns : 4,
			loadUrl : 'com.keensen.ump.produce.quality.mptest2.expandIpaByFirst.biz.ext',
			saveUrl : 'com.keensen.ump.produce.quality.mptest2.modiIpaListByFirst.biz.ext',
			fields : [{
						dataIndex : 'batchNo',
						anchor : '85%',
						xtype : 'displayfield',
						fieldLabel : '膜片批号',
						colspan : 2
					}, {

						xtype : 'displayfield',
						fieldLabel : '线别',
						ref : '../line',
						dataIndex : 'line',
						anchor : '85%',
						colspan : 2
					}, {
						xtype : 'hidden',
						ref : '../pkid',
						name : 'entity/id',
						dataIndex : 'relationId'
					}, {
						xtype : 'hidden',
						ref : '../step',
						dataIndex : 'step'
					}, {
						xtype : 'hidden',
						name : 'entity/step',
						value : 'second'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">4号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[1]/position',
						allowBlank : false,
						fieldLabel : '取样位置',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[1]/concentration',
						allowBlank : false,
						fieldLabel : 'IPA浓度',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[1]/id',
						dataIndex : 'code4'
					}, {
						xtype : 'hidden',
						name : 'list[1]/relationId',
						dataIndex : 'id'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">7号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[2]/position',
						allowBlank : false,
						fieldLabel : '取样位置',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[2]/concentration',
						allowBlank : false,
						fieldLabel : 'IPA浓度',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[2]/id',
						dataIndex : 'code7'
					}, {
						xtype : 'hidden',
						name : 'list[2]/relationId',
						dataIndex : 'id'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">9号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[3]/position',
						allowBlank : false,
						fieldLabel : '取样位置',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[3]/concentration',
						allowBlank : false,
						fieldLabel : 'IPA浓度',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[3]/id',
						dataIndex : 'code9'
					}, {
						xtype : 'hidden',
						name : 'list[3]/relationId',
						dataIndex : 'id'
					}]
		})

		this.editWindow = this.editWindow || new Ext.Window({
					title : '分析',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					closeAction : 'hide',
					buttonAlign : 'center',
					layout : 'form',
					items : [this.editPanel, this.listPanel3],
					buttons : [{
								text : "保存",
								scope : this,
								ref : '../saveBtn',
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.editWindow.hide();
								}
							}]
				});
	}

	this.initEditWindow2 = function() {

		var _this = this;

		var selModel4 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel4 = this.listPanel4 || new Ext.fn.ListPanel({
					title : '【参考记录】',
					// region : 'center',
					height : 200,
					viewConfig : {
						forceFit : true
					},
					tbar : [],
					hsPage : false,
					autoScroll : true,
					selModel : selModel4,
					columns : [new Ext.grid.RowNumberer(), selModel4, {
								dataIndex : 'code',
								header : '漂洗槽编号'
							}, {
								dataIndex : 'outPlan',
								header : '计划排放量'
							}, {
								dataIndex : 'ipaPlan',
								header : 'IPA计划添加量'
							}, {
								dataIndex : 'roPlan',
								header : 'RO水计划添加量'
							}, {
								dataIndex : 'outReality',
								header : '实际排放量'
							}, {
								dataIndex : 'ipaReality',
								header : 'IPA实际添加量'
							}, {
								dataIndex : 'roReality',
								header : 'RO水实际添加量'
							}],
					store : this.ipaListStore
				})

		this.editPanel2 = this.editPanel2 || new Ext.fn.EditPanel({
			baseCls : "x-plain",
			pgrid : this.listPanel,
			columns : 6,
			loadUrl : 'com.keensen.ump.produce.quality.mptest2.expandIpaBySecond.biz.ext',
			saveUrl : 'com.keensen.ump.produce.quality.mptest2.modiIpaListBySecond.biz.ext',
			fields : [{
						dataIndex : 'batchNo',
						anchor : '85%',
						xtype : 'displayfield',
						fieldLabel : '膜片批号',
						colspan : 3
					}, {

						xtype : 'displayfield',
						fieldLabel : '线别',
						ref : '../line',
						dataIndex : 'line',
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'hidden',
						ref : '../pkid',
						name : 'entity/id',
						dataIndex : 'relationId'
					}, {
						xtype : 'hidden',
						ref : '../step',
						dataIndex : 'step'
					}, {
						xtype : 'hidden',
						name : 'entity/step',
						value : 'third'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {

						xtype : 'combobox',
						fieldLabel : '是否合格',
						ref : '../ifok',
						hiddenName : 'entity/ifok',
						colspan : 6,
						emptyText : '--请选择--',
						allowBlank : false,
						editable : false,
						anchor : '80%',
						store : [['Y', '是'], ['N', '否']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.editPanel2.ifok.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">合格则发生产，不合格则重新配料</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 6
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">4号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[1]/outPlan',
						ref : '../outPlan1',
						fieldLabel : '计划排放量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[1]/ipaPlan',
						ref : '../ipaPlan1',
						fieldLabel : 'IPA计划添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[1]/roPlan',
						ref : '../roPlan1',
						fieldLabel : 'RO水计划添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[1]/id',
						dataIndex : 'code4'
					}, {
						xtype : 'hidden',
						name : 'list[1]/relationId',
						dataIndex : 'relationId'
					}, {
						xtype : 'hidden',
						name : 'list[1]/code',
						value : '4#'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">7号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[2]/outPlan',
						ref : '../outPlan2',
						fieldLabel : '计划排放量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[2]/ipaPlan',
						ref : '../ipaPlan2',
						fieldLabel : 'IPA计划添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[2]/roPlan',
						ref : '../roPlan2',
						fieldLabel : 'RO水计划添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[2]/id',
						dataIndex : 'code7'
					}, {
						xtype : 'hidden',
						name : 'list[2]/relationId',
						dataIndex : 'relationId'
					}, {
						xtype : 'hidden',
						name : 'list[2]/code',
						value : '7#'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">9号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[3]/outPlan',
						ref : '../outPlan3',
						fieldLabel : '计划排放量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[3]/ipaPlan',
						ref : '../ipaPlan3',
						fieldLabel : 'IPA计划添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[3]/roPlan',
						ref : '../roPlan3',
						fieldLabel : 'RO水计划添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[3]/id',
						dataIndex : 'code9'
					}, {
						xtype : 'hidden',
						name : 'list[3]/relationId',
						dataIndex : 'relationId'
					}, {
						xtype : 'hidden',
						name : 'list[3]/code',
						value : '9#'
					}],
			buttons : [{
						text : "保存",
						scope : this,
						ref : '../saveBtn',
						handler : this.onSave2
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editWindow2.hide();
						}
					}]
		})

		this.editWindow2 = this.editWindow2 || new Ext.Window({
					title : '调整',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					closeAction : 'hide',
					layout : 'form',
					items : [this.editPanel2, this.listPanel4]
				});
	}

	this.initEditWindow3 = function() {

		var _this = this;

		var selModel5 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel5 = this.listPanel5 || new Ext.fn.ListPanel({
					title : '【参考记录】',
					// region : 'center',
					height : 200,
					viewConfig : {
						forceFit : true
					},
					tbar : [],
					hsPage : false,
					autoScroll : true,
					selModel : selModel5,
					columns : [new Ext.grid.RowNumberer(), selModel5, {
								dataIndex : 'code',
								header : '漂洗槽编号'
							}, {
								dataIndex : 'outPlan',
								header : '计划排放量'
							}, {
								dataIndex : 'ipaPlan',
								header : 'IPA计划添加量'
							}, {
								dataIndex : 'roPlan',
								header : 'RO水计划添加量'
							}],
					store : this.ipaListStore
				})

		this.editPanel3 = this.editPanel3 || new Ext.fn.EditPanel({
			baseCls : "x-plain",
			pgrid : this.listPanel,
			columns : 6,
			loadUrl : 'com.keensen.ump.produce.quality.mptest2.expandIpaByThird.biz.ext',
			saveUrl : 'com.keensen.ump.produce.quality.mptest2.modiIpaListByThird.biz.ext',
			fields : [{
						dataIndex : 'batchNo',
						anchor : '85%',
						xtype : 'displayfield',
						fieldLabel : '膜片批号',
						colspan : 3
					}, {

						xtype : 'displayfield',
						fieldLabel : '线别',
						ref : '../line',
						dataIndex : 'line',
						anchor : '85%',
						colspan : 3
					}, {
						xtype : 'hidden',
						ref : '../pkid',
						name : 'entity/id',
						dataIndex : 'relationId'
					}, {
						xtype : 'hidden',
						ref : '../step',
						dataIndex : 'step'
					}, {
						xtype : 'hidden',
						name : 'entity/step',
						value : 'third'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">4号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[1]/outReality',
						ref : '../outReality1',
						allowBlank : false,
						fieldLabel : '实际排放量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[1]/ipaReality',
						ref : '../ipaReality1',
						allowBlank : false,
						fieldLabel : 'IPA实际添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[1]/roReality',
						ref : '../roReality1',
						allowBlank : false,
						fieldLabel : 'RO水实际添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[1]/id',
						dataIndex : 'code4'
					}, {
						xtype : 'hidden',
						name : 'list[1]/relationId',
						dataIndex : 'relationId'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">7号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[2]/outReality',
						ref : '../outReality2',
						allowBlank : false,
						fieldLabel : '实际排放量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[2]/ipaReality',
						ref : '../ipaReality2',
						allowBlank : false,
						fieldLabel : 'IPA实际添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[2]/roReality',
						ref : '../roReality2',
						allowBlank : false,
						fieldLabel : 'RO水实际添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[2]/id',
						dataIndex : 'code7'
					}, {
						xtype : 'hidden',
						name : 'list[2]/relationId',
						dataIndex : 'relationId'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">9号槽</p>',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'list[3]/outReality',
						ref : '../outReality3',
						allowBlank : false,
						fieldLabel : '实际排放量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[3]/ipaReality',
						ref : '../ipaReality3',
						allowBlank : false,
						fieldLabel : 'IPA实际添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'list[3]/roReality',
						ref : '../roReality3',
						allowBlank : false,
						fieldLabel : 'RO水实际添加量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'list[3]/id',
						dataIndex : 'code9'
					}, {
						xtype : 'hidden',
						name : 'list[3]/relationId',
						dataIndex : 'relationId'
					}],
			buttons : [{
						text : "保存",
						scope : this,
						ref : '../saveBtn',
						handler : this.onSave3
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editWindow3.hide();
						}
					}]
		})

		this.editWindow3 = this.editWindow3 || new Ext.Window({
					title : '配料',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					closeAction : 'hide',
					layout : 'form',
					items : [this.editPanel3, this.listPanel5]
				});
	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel6 = new Ext.grid.CheckboxSelectionModel({
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
			selModel : selModel6,
			columns : [new Ext.grid.RowNumberer(), selModel6, {
						dataIndex : 'code',
						header : '漂洗槽编号'
					}, {
						dataIndex : 'position',
						header : '取样位置'
					}, {
						dataIndex : 'concentration',
						header : 'IPA浓度'
					}, {
						dataIndex : 'outPlan',
						header : '计划排放量（原有液体）'
					}, {
						dataIndex : 'ipaPlan',
						header : 'IPA计划添加量'
					}, {
						dataIndex : 'roPlan',
						header : 'RO水计划添加量'
					}, {
						dataIndex : 'outReality',
						header : '实际排放量（原有液体）'
					}, {
						dataIndex : 'ipaReality',
						header : 'IPA实际添加量'
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
				url : 'com.keensen.ump.produce.quality.mptest2.queryIpaListRecords.biz.ext',
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
							name : 'ipaPlan'
						}, {
							name : 'roPlan'
						}, {
							name : 'outReality'
						}, {
							name : 'ipaReality'
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
						}, {
							name : 'code'
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