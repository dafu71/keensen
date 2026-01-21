com.keensen.ump.produce.component.ReworkResultMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initPlanJudgeWindow();
		this.initQualityJudgeWindow();
		this.initPlanWindow();
		this.initQualityWindow();
		this.initExcuteWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'reworkresultmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		
		this.countReworkStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.prodrecord.countRework.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'step'
					}, {
						name : 'cnt'
					}]
		})

		// 返工实际情况
		this.situationReworkStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['切玻璃钢', '切玻璃钢'], ['报废', '报废'],
							['仅消毒后退回仓库', '仅消毒后退回仓库'],
							['未返工直接退回仓库', '未返工直接退回仓库'], ['其他处理', '其他处理']]
				});

		// 计划指令→品管判定→返工执行→结果确认
		this.stepStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['待返工确认', '待返工确认'], ['品管判定', '品管判定'],
							['待测试', '待测试'], ['品管意见', '品管意见'],
							['待下达返工执行计划', '待下达返工执行计划'], ['待执行返工生产', '待执行返工生产'],
							['结果确认', '结果确认']]
				});

		this.haveOrNotStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['有', '有'], ['无', '无']]
				});

		this.sourceStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['返厂元件', '返厂元件'], ['库存元件', '库存元件']]
				});

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.prodTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['8寸', '8寸'], ['4寸', '4寸'], ['家用膜', '家用膜']]
				});

		this.dryWetStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['干', '干'], ['湿', '湿']]
				});

		this.labelStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['贴牌', '贴牌'], ['只贴序列号', '只贴序列号'],
							['客户标签', '客户标签'], ['无', '无']]
				});

		this.lidStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['客户端盖', '客户端盖'], ['无', '无']]
				});

		this.lidStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['客户端盖', '客户端盖'], ['无', '无']]
				});

		this.bagStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['无', '无'], ['有', '有']]
				});

		this.boxStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['中性', '中性'], ['客户包装箱', '客户包装箱'],
							['无', '无']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								fieldLabel : '指令单编号'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '元件类型',
								ref : '../prodType',
								hiddenName : 'condition/prodType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.prodTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.prodType.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/prodName',
								fieldLabel : '产品名称%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '当前状态',
								dataIndex : 'step',
								ref : '../step',
								hiddenName : 'condition/step',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.stepStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.step.reset()
									}
								}
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '有无贴标<br>处理意见',
								dataIndex : 'adviseLabelIf',
								ref : '../adviseLabelIf',
								hiddenName : 'condition/adviseLabelIf',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.haveOrNotStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.adviseLabelIf.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '有无返工<br>执行计划',
								dataIndex : 'planExcuteIf',
								ref : '../planExcuteIf',
								hiddenName : 'condition/planExcuteIf',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.haveOrNotStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.planExcuteIf.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '有无返工<br>实际情况',
								dataIndex : 'situationReworkIf',
								ref : '../situationReworkIf',
								hiddenName : 'condition/situationReworkIf',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.haveOrNotStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.situationReworkIf
												.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '有无元件<br>返工结果',
								dataIndex : 'resultReworkIf',
								ref : '../resultReworkIf',
								hiddenName : 'condition/resultReworkIf',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.haveOrNotStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.resultReworkIf.reset()
									}
								}
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : [
										'condition/timeFinishedDemandStart',
										'condition/timeFinishedDemandEnd'],
								fieldLabel : "返工要求<br>完成时间",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '旧序列号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/qjBatchNo',
								fieldLabel : '新序列号%-%'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
					handler : this.exportExcel
				});
				
		this.queryPanel.addButton({
					text : "更新测试状态",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.updateReworkByWaterTest
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '计划员判定',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlanJudge
					}, '-', {
						text : '品管判定',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onQualityJudge
					}, '-', {
						text : '品管意见',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onQuality
					}, '-', {
						text : '下达返工执行计划',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlan
					}, '-', {
						text : '返工执行',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onExcute
					}, '-', {
						text : '计划员修改状态',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlanModify
					}],
			hsPage : true,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'step',
						width:150,
						header : '当前状态'
					}, {
						dataIndex : 'code',
						header : '指令单编号'
					}, {
						dataIndex : 'prodType',
						header : '元件类型'
					}, {
						dataIndex : 'prodName',
						header : '产品名称'
					}, {
						dataIndex : 'white',
						header : '白膜'
					}, {
						dataIndex : 'dryWet',
						header : '干/湿'
					}, {
						dataIndex : 'batchNo',
						header : '旧序列号'
					}, {
						dataIndex : 'qjBatchNo',
						header : '当前序列号'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'stockTime',
						header : '库龄'
					}, {
						dataIndex : 'fCheckTm',
						header : '初测时间'
					}, {
						dataIndex : 'fGpd',
						header : '初始产水量'
					}, {
						dataIndex : 'fSalt',
						header : '初始脱盐率'
					}, {
						dataIndex : 'waterTheory',
						header : '理论产水量'
					}, {
						dataIndex : 'saltTheory',
						header : '理论脱盐率'
					}, {
						dataIndex : 'isProdQualifiedName',
						header : '性能判定结果'
					}, {
						dataIndex : 'remarkPlanner',
						header : '计划员备注'
					}, {
						dataIndex : 'sampling',
						header : '抽测'
					}, {
						dataIndex : 'rCheckTm',
						header : '抽测时间'
					}, {
						dataIndex : 'rGpd',
						header : '实际产水量'
					}, {
						dataIndex : 'rSalt',
						header : '实际脱盐率'
					}, {
						dataIndex : 'adviseLabel',
						header : '贴标处理意见'
					}, {
						dataIndex : 'explainQuality',
						header : '品管说明'
					}, {
						dataIndex : 'planExcute',
						header : '返工执行计划'
					}, {
						dataIndex : 'explainPlanner',
						header : '计划员说明'
					}, {
						dataIndex : 'situationRework',
						header : '返工实际情况'
					}, {
						dataIndex : 'explainMake',
						header : '元件制造说明'
					}, {
						dataIndex : 'resultRework',
						header : '元件返工结果'
					}, {
						dataIndex : 'timeFinishedDemand',
						header : '返工要求完成时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.prodrecord.queryReworkByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'createTime'
						}, {
							name : 'code'
						}, {
							name : 'prodType'
						}, {
							name : 'prodName'
						}, {
							name : 'white'
						}, {
							name : 'dryWet'
						}, {
							name : 'batchNo'
						}, {
							name : 'qjBatchNo'
						}, {
							name : 'checkResult'
						}, {
							name : 'stockTime'
						}, {
							name : 'fCheckTm'
						}, {
							name : 'fGpd'
						}, {
							name : 'fSalt'
						}, {
							name : 'waterTheory'
						}, {
							name : 'saltTheory'
						}, {
							name : 'isProdQualifiedName'
						}, {
							name : 'remarkPlanner'
						}, {
							name : 'sampling'
						}, {
							name : 'rCheckTm'
						}, {
							name : 'rGpd'
						}, {
							name : 'rSalt'
						}, {
							name : 'adviseLabel'
						}, {
							name : 'explainQuality'
						}, {
							name : 'planExcute'
						}, {
							name : 'explainPlanner'
						}, {
							name : 'situationRework'
						}, {
							name : 'explainMake'
						}, {
							name : 'resultRework'
						}, {
							name : 'timeFinishedDemand'
						}, {
							name : 'step'
						}]
			})
		})
	}

	this.initPlanWindow = function() {

		var _this = this;
		this.planWindow = this.planWindow || new Ext.fn.FormWindow({
			title : '返工执行计划',
			height : 480,
			width : 600,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.prodrecord.updateRework.biz.ext',
				successFn : function(i, r) {
					_this.listPanel.store.load();
					_this.planWindow.hide();

				},
				fields : [{
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d",
							anchor : '90%',
							ref : '../../timeFinishedDemand',
							name : 'param/timeFinishedDemand',
							allowBlank : false,
							fieldLabel : '返工要求<br>完成时间'
						}, {
							xtype : 'textarea',
							ref : '../../remarkPlanner',
							fieldLabel : '计划员备注',
							name : 'param/remarkPlanner',
							allowBlank : false,
							anchor : '90%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							ref : '../../planExcute',
							fieldLabel : '返工执行计划',
							name : 'param/planExcute',
							allowBlank : false,
							anchor : '90%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							ref : '../../explainPlanner',
							fieldLabel : '计划员说明',
							name : 'param/explainPlanner',
							allowBlank : false,
							anchor : '90%'
						}, {
							name : 'param/ids',
							ref : '../../ids',
							xtype : 'hidden'
						}, {
							name : 'param/step',
							value : '待执行返工生产',
							xtype : 'hidden'
						}]
			}]
		})
	}

	this.initQualityWindow = function() {

		var _this = this;
		this.qualityWindow = this.qualityWindow || new Ext.fn.FormWindow({
			title : '品管意见',
			height : 480,
			width : 600,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.prodrecord.updateRework.biz.ext',
				successFn : function(i, r) {
					_this.listPanel.store.load();
					_this.qualityWindow.hide();

				},

				fields : [ {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							ref : '../../adviseLabel',
							fieldLabel : '贴标处理意见',
							name : 'param/adviseLabel',
							allowBlank : false,
							anchor : '90%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							ref : '../../explainQuality',
							fieldLabel : '品管说明',
							name : 'param/explainQuality',
							allowBlank : false,
							anchor : '90%'
						}, {
							name : 'param/ids',
							ref : '../../ids',
							xtype : 'hidden'
						}, {
							name : 'param/step',
							value : '待下达返工执行计划',
							xtype : 'hidden'
						}]
			}]
		})
	}

	this.initExcuteWindow = function() {

		var _this = this;
		this.excuteWindow = this.excuteWindow || new Ext.fn.FormWindow({
			title : '返工执行',
			height : 480,
			width : 600,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.prodrecord.updateRework.biz.ext',
				successFn : function(i, r) {
					_this.listPanel.store.load();
					_this.excuteWindow.hide();
				},

				fields : [{
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '返工实际情况',
							dataIndex : 'situationRework',
							ref : '../../situationRework',
							hiddenName : 'param/situationRework',
							anchor : '90%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.situationReworkStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.excuteWindow.situationRework.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							ref : '../../explainMake',
							fieldLabel : '元件制造说明',
							name : 'param/explainMake',
							allowBlank : false,
							anchor : '90%'
						}, {
							name : 'param/ids',
							ref : '../../ids',
							xtype : 'hidden'
						}, {
							name : 'param/step',
							value : '结果确认',
							xtype : 'hidden'
						}]
			}]
		})
	}

	this.initPlanJudgeWindow = function() {

		var _this = this;
		this.planJudgeWindow = this.planJudgeWindow || new Ext.fn.FormWindow({
			title : '计划员判定',
			height : 480,
			width : 600,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.prodrecord.updateRework2.biz.ext',
				successFn : function(i, r) {
					_this.listPanel.store.load();
					_this.planJudgeWindow.hide();

				},
				fields : [{
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '是否需要品管<br>提供意见',
							ref : '../../ifQuality',
							hiddenName : 'param/ifQuality',
							anchor : '90%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.planJudgeWindow.ifQuality.reset()
								}
							}
						}, {
							name : 'param/ids',
							ref : '../../ids',
							xtype : 'hidden'
						}]
			}]
		})
	}
	
	this.initQualityJudgeWindow = function() {

		var _this = this;
		this.qualityJudgeWindow = this.qualityJudgeWindow || new Ext.fn.FormWindow({
			title : '品管判定',
			height : 480,
			width : 600,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.prodrecord.updateRework3.biz.ext',
				successFn : function(i, r) {
					_this.listPanel.store.load();
					_this.qualityJudgeWindow.hide();

				},

				fields : [{
							xtype : 'displayfield',
							height : '5'
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '是否抽测',
							dataIndex : 'sampling',
							ref : '../../sampling',
							hiddenName : 'param/sampling',
							anchor : '90%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank:false,
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.qualityJudgeWindow.sampling.reset()
								}
							}
						}, {
							name : 'param/ids',
							ref : '../../ids',
							xtype : 'hidden'
						}]
			}]
		})
	}
}