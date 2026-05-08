com.keensen.ump.produce.quality.CdmDefectListMgr = function() {

	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initEditWindow();
		this.initUpdateDeptWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'cdmdefectlistmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.iftearStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.firstStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['固损', '固损'], ['不良', '不良']]
				});

		this.secondStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['外观', '外观'], ['性能', '性能'], ['尺寸', '尺寸'],
							['取样损耗', '取样损耗'], ['拼接损耗', '拼接损耗'],
							['试卷损耗', '试卷损耗']]
				});

		this.tacheStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['铸膜', '铸膜'], ['涂膜', '涂膜'], ['裁叠膜', '裁叠膜']]
				});

		this.deptStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['元件制造部', '元件制造部'], ['膜片制造部', '膜片制造部'],
							/* ['生产管理部', '生产管理部'], ['财务部-仓库组', '财务部-仓库组'], */
							['设备能源部', '设备能源部'], ['研发中心-工艺部', '研发中心-工艺部'],
							['研发中心-研发部', '研发中心-研发部']

					]
				});
		this.reasonStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['设备故障', '设备故障'], ['人员操作失误', '人员操作失误']

					]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片质检标准查询】',
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '类型',
								ref : '../first',
								hiddenName : 'condition/first',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.firstStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.first.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/second',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良二级目录%%'
							}, {
								xtype : 'textfield',
								name : 'condition/third',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良三级目录%%'
							}, {
								xtype : 'textfield',
								name : 'condition/fourth',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良四级目录%%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/defectName',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良项目%%'
							}, {
								xtype : 'textfield',
								name : 'condition/cdmBatchNo',
								ref : '../cdmBatchNo',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '裁叠膜栈板号%%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '记录工序',
								ref : '../tache',
								hiddenName : 'condition/tache',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.tacheStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.tache.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '产生工序',
								ref : '../tacheCause',
								hiddenName : 'condition/tacheCause',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.tacheStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.tacheCause.reset()
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/lineName',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '生产线%%'
							}, {
								xtype : "datetimeregion",
								colspan : 2,
								anchor : '75%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "不良记录时间",
								format : "Y-m-d H:i"
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '是否已扯',
								hidden : true,
								ref : '../iftear',
								hiddenName : 'condition/iftear',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.iftearStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.iftear.reset()
									}
								}
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								hiddenName : 'condition/relationId'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// hidden : true,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【膜片质检标准列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : pgLimit != 1,
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						// hidden : true,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : lengthTotalId
					}, '->', {
						text : '批量修改责任部门',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : pgLimit != 1,
						handler : this.onEditBatch
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.defect.deleteCdmDefectList.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'cdmBatchNo',
						header : '裁叠膜栈板号'
					}, {
						dataIndex : 'tmBatchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'defectName',
						width : 200,
						header : '不良项目'
					}, {
						dataIndex : 'first',
						header : '不良类型'
					}, {
						dataIndex : 'createTime',
						width : 120,
						header : '不良记录时间'
					}, {
						dataIndex : 'tacheCause',
						header : '产生工序'
					}, {
						dataIndex : 'tache',
						header : '记录工序'
					}, {
						dataIndex : 'position',
						hidden : true,
						header : '收卷位置'
					}, {
						dataIndex : 'length',
						header : '不良长度'
					}, {
						dataIndex : 'numLabel',
						hidden : true,
						header : '标签数'
					}, {
						dataIndex : 'iftear',
						hidden : true,
						header : '是否已扯'
					}, {
						dataIndex : 'dye',
						hidden : true,
						header : '染色情况'
					}, {
						dataIndex : 'horizontal',
						hidden : true,
						header : '横向边距'
					}, {
						dataIndex : 'horizontal2',
						hidden : true,
						header : '横向边距距离'
					}, {
						dataIndex : 'vertical',
						hidden : true,
						header : '纵向间隔(走布方向,cm)'
					}, {
						dataIndex : 'reason',
						header : '产生原因'
					}, {
						dataIndex : 'advise',
						hidden : true,
						header : '使用意见'
					}, {
						dataIndex : 'dept',
						header : '责任部门'
					}, {
						dataIndex : 'lineName',
						header : '生产线'
					}, {
						dataIndex : 'recorder',
						header : '记录人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.defect.queryCdmDefectListByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tmBatchNo'
						}, {
							name : 'materSpecName'
						},{
							name : 'lengthTotal'
						}, {
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
							name : 'defectId'
						}, {
							name : 'tacheCause'
						}, {
							name : 'position'
						}, {
							name : 'length'
						}, {
							name : 'numLabel'
						}, {
							name : 'iftear'
						}, {
							name : 'dye'
						}, {
							name : 'horizontal'
						}, {
							name : 'horizontal2'
						}, {
							name : 'vertical'
						}, {
							name : 'reason'
						}, {
							name : 'dept'
						}, {
							name : 'team'
						}, {
							name : 'recorder'
						}, {
							name : 'relationId'
						}, {
							name : 'tmBatchNo'
						}, {
							name : 'tache'
						}, {
							name : 'defectName'
						}, {
							name : 'first'
						}, {
							name : 'lineName'
						}, {
							name : 'advise'
						}, {
							name : 'cdmBatchNo'
						}]
			})
		})
	}

	this.initEditWindow = function() {

		var _this = this;

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
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
				loadUrl : 'com.keensen.ump.produce.quality.defect.expandCdmDefectList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.defect.saveCdmDefectList.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'cdmBatchNo',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '裁叠膜栈板号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'defectName',
							readOnly : true,
							fieldLabel : '不良项目',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'length',
							readOnly : true,
							fieldLabel : '不良长度',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '产生原因',
							ref : '../../reason',
							hiddenName : 'entity/reason',
							dataIndex : 'reason',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.reasonStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '责任部门',
							ref : '../../dept',
							hiddenName : 'entity/dept',
							dataIndex : 'dept',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.deptStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initUpdateDeptWindow = function() {
		var _this = this;
		this.updateDeptWindow = this.updateDeptWindow
				|| new Ext.fn.FormWindow({
					title : '修改责任部门',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {

							_this.updateDeptWindow.items.items[0].form.reset();
							_this.updateDeptWindow.hide();
							_this.listPanel.refresh();

						},
						columns : 2,
						saveUrl : 'com.keensen.ump.produce.quality.defect.updateBatchCdmmDefectDept.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}

								, {
									xtype : 'combobox',
									forceSelection : true,
									allowBlank : false,
									mode : 'local',
									fieldLabel : '责任部门',
									ref : '../../dept',
									hiddenName : 'entity/dept',
									dataIndex : 'dept',
									anchor : '95%',
									colspan : 2,
									emptyText : '--请选择--',
									editable : false,
									store : this.deptStore,
									displayField : "name",
									valueField : "code",
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'hidden',
									name : 'entity/ids',
									ref : '../../ids'
								}]
					}]
				});
	}
}