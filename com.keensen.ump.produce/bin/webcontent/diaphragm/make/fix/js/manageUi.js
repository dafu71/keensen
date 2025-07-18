com.keensen.ump.produce.diaphragm.make.FixMgr = function() {
	this.initPanel = function() {
		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makefixmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	// 初始化store
	this.initStore = function() {

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.concentrationStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['16%', '16%'], ['17%', '17%'], ['18%', '18%']]
				});

		this.machineStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', '罗斯混料机A'], ['B', '豪杰特混料机B'], ['C', '豪杰特混料机C']]
				});

		this.tankStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'],
							['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'],
							['9', '9'], ['A', 'A'], ['B', 'B'], ['C', 'C'],
							['D', 'D'], ['E', 'E'], ['F', 'F']]
				});

		this.mptypeStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.mpzmytest.queryZmyStd.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'code'
					}, {
						name : 'mptype'
					}, {
						name : 'line'
					}, {
						name : 'c11'
					}, {
						name : 'c12'
					}, {
						name : 'c13'
					}, {
						name : 'c14'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;

		this.machineStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['A', '罗斯混料机A'], ['B', '豪杰特混料机B'], ['C', '豪杰特混料机C']]
				});

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【铸膜混料记录查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '混料批次'
							}, {
								xtype : 'textfield',
								name : 'condition/fixUsername',
								fieldLabel : '混料人'
							}, {
								xtype : 'textfield',
								name : 'condition/hitUsername',
								fieldLabel : '打料人'
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "记录日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '混料机',
								ref : '../../machine',
								hiddenName : 'condition/machine',
								// allowBlank : false,
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.machineStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '已用完',
							ref : '../used',
							hiddenName : 'condition/used',
							dataIndex : 'used',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					rescode : '10002661',
					//hidden:true,
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
			// title : '【铸膜混料记录列表】',
			hsPage : true,
			tbar : [{
						text : '新增混料',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}/*
						 * , '-', { text : '混料记录', scope : this, iconCls :
						 * 'icon-application_edit', handler : this.onEdit }
						 */, '-', {
						text : '打料记录',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit2
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '修改记录',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : modifyFlag != 1,
						handler : this.onEdit3
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'fixtotalc11'
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'fixtotalc12'
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'fixtotalc13'
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'fixtotalc14'
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'fixtotal'
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.make.make.deleteFixEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '混料批次'
					}, {
						dataIndex : 'mptype',
						header : '产品类型'
					}, {
						dataIndex : 'machine',
						header : '混料机'
					}, {
						dataIndex : 'psfName',
						header : '聚砜类型'
					}, {
						dataIndex : 'used',
						header : '已用完'
					}, {
						dataIndex : 'weight',
						header : '配料总重量(kg)'
					}, {
						dataIndex : 'c11',
						header : 'C11重量(kg)'
					}, {
						dataIndex : 'c12',
						header : 'C12重量(kg)'
					}, {
						dataIndex : 'c13',
						header : 'C13重量(kg)'
					}, {
						dataIndex : 'c14',
						header : 'C14重量(kg)'
					}, {
						dataIndex : 'concentration',
						header : '聚砜浓度'
					}, {
						dataIndex : 'cps',
						header : '铸膜液粘度'
					}, {
						dataIndex : 'fixStarttime',
						header : '混料开始时间'
					}, {
						dataIndex : 'hottime',
						header : '开始加热时间'
					}, {
						dataIndex : 'reachtime',
						header : '料液达到70℃时间'
					}, {
						dataIndex : 'keepDuration',
						header : '保持70-80℃时长'
					}, {
						dataIndex : 'fixUsername',
						header : '混料人'
					}, {
						dataIndex : 'hitStarttime',
						header : '打料开始时间'
					}, {
						dataIndex : 'hitOvertime',
						header : '打料结束时间'
					}, {
						dataIndex : 'loopStarttime',
						header : '内循环开始时间'
					}, {
						dataIndex : 'loopOvertime',
						header : '内循环结束时间'
					}, {
						dataIndex : 'jarNo',
						header : '脱气罐编号'
					}, {
						dataIndex : 'jarVacuum',
						header : '脱气罐 真空度'
					}/*
						 * , { dataIndex : 'vacuumDuration', header : '真空保持时长' }, {
						 * dataIndex : 'usetime', header : '料液使用时间' }
						 */, {
						dataIndex : 'hitUsername',
						header : '打料人'
					}/*
						 * , { dataIndex : 'remark', header : '备注' }
						 */],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.make.queryFixByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
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
							name : 'batchNo'
						}, {
							name : 'c11'
						}, {
							name : 'c12'
						}, {
							name : 'c13'
						}, {
							name : 'c14'
						}, {
							name : 'fixStarttime'
						}, {
							name : 'hottime'
						}, {
							name : 'reachtime'
						}, {
							name : 'keepDuration'
						}, {
							name : 'fixUserid'
						}, {
							name : 'hitStarttime'
						}, {
							name : 'hitOvertime'
						}, {
							name : 'loopStarttime'
						}, {
							name : 'loopOvertime'
						}, {
							name : 'jarNo'
						}, {
							name : 'jarVacuum'
						}, {
							name : 'vacuumDuration'
						}, {
							name : 'usetime'
						}, {
							name : 'hitUserid'
						}, {
							name : 'remark'
						}, {
							name : 'fixUsername'
						}, {
							name : 'hitUsername'
						}, {
							name : 'diff'
						}, {
							name : 'mptype'
						}, {
							name : 'machine'
						}, {
							name : 'psf'
						}, {
							name : 'weight'
						}, {
							name : 'psfName'
						}, {
							name : 'concentration'
						}, {
							name : 'used'
						}, {
							name : 'totalC11'
						}, {
							name : 'totalC12'
						}, {
							name : 'cps'
						}, {
							name : 'totalC13'
						}, {
							name : 'totalC14'
						}, {
							name : 'total'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增铸膜混料',
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
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Fix.biz.ext',
				fields : [{
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '混料机',
							ref : '../../machine',
							hiddenName : 'entity/machine',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.machineStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '产品类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.mptypeStore,
							displayField : "mptype",
							valueField : "mptype",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'entity/psf',
							allowBlank : false,
							fieldLabel : '聚砜类型',
							hiddenName : 'entity/psf',
							dictData : KS_PSF,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '脱气罐',
							ref : '../../jarNo',
							hiddenName : 'entity/jarNo',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.tankStore,
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
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '输入完毕单击旁边按钮计算',
							allowBlank : false,
							ref : '../../weight',
							name : 'entity/weight',
							fieldLabel : '配料总重量(kg)',
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
							xtype : 'numberfield',
							ref : '../../c11',
							name : 'entity/c11',
							allowBlank : false,
							fieldLabel : 'C11重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c12',
							name : 'entity/c12',
							allowBlank : false,
							fieldLabel : 'C12重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c13',
							name : 'entity/c13',
							fieldLabel : 'C13重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c14',
							name : 'entity/c14',
							fieldLabel : 'C14重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '聚砜浓度',
							ref : '../../concentration',
							hiddenName : 'entity/concentration',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.concentrationStore,
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
							colspan : 2
						}, {
							xtype : 'datetimefield',
							name : 'entity/fixStarttime',
							fieldLabel : '混料开始时间',
							anchor : '95%',
							format : "Y-m-d H:i:00",
							colspan : 1
						}, {
							xtype : 'datetimefield',
							name : 'entity/hottime',
							fieldLabel : '开始加热时间',
							anchor : '95%',
							format : "Y-m-d H:i:00",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							name : 'entity/reachtime',
							fieldLabel : '料液达70℃时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/keepDuration',
							fieldLabel : '保持70-80℃时长',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001501',
							allowBlank : false,
							anchor : '95%',
							ref : '../../fixUserid',
							hiddenName : 'entity/fixUserid',
							fieldLabel : '混料人'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}/*
							 * , { xtype : 'textarea', name : 'entity/remark',
							 * fieldLabel : '备注', anchor : '95%', colspan : 2 }
							 */, {
							xtype : 'hidden',
							ref : '../../fixUsername',
							name : 'entity/fixUsername'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '混料记录',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.make.expandFixEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Fix.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							fieldLabel : '混料批次',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/c11',
							dataIndex : 'c11',
							fieldLabel : 'C11重量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/c12',
							dataIndex : 'c12',
							fieldLabel : 'C12重量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							name : 'entity/fixStarttime',
							dataIndex : 'fixStarttime',
							fieldLabel : '混料开始时间',
							anchor : '95%',
							format : "Y-m-d H:i:00",
							colspan : 1
						}, {
							xtype : 'datetimefield',
							name : 'entity/hottime',
							dataIndex : 'hottime',
							fieldLabel : '开始加热时间',
							anchor : '95%',
							format : "Y-m-d H:i:00",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							name : 'entity/reachtime',
							dataIndex : 'reachtime',
							fieldLabel : '料液达70℃时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/keepDuration',
							dataIndex : 'keepDuration',
							fieldLabel : '保持70-80℃时长',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '混料人',
							name : 'entity/fixUsername',
							dataIndex : 'fixUsername',
							anchor : '95%',
							colspan : 1

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/remark',
							dataIndex : 'remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							dataIndex : 'fixUserid',
							name : 'entity/fixUserid'
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}]
			}]
		});
	}

	this.initEditWindow2 = function() {
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '打料记录',
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
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.make.expandFixEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Fix.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							readOnly : true,
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							fieldLabel : '混料批次',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/hitStarttime',
							dataIndex : 'hitStarttime',
							fieldLabel : '打料开始时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/hitOvertime',
							dataIndex : 'hitOvertime',
							fieldLabel : '打料结束时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/loopStarttime',
							dataIndex : 'loopStarttime',
							fieldLabel : '内循环开始时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/loopOvertime',
							dataIndex : 'loopOvertime',
							fieldLabel : '内循环结束时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/jarNo',
							readOnly : true,
							dataIndex : 'jarNo',
							fieldLabel : '脱气罐编号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/jarVacuum',
							dataIndex : 'jarVacuum',
							fieldLabel : '脱气罐 真空度',
							anchor : '95%',
							colspan : 1
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, { xtype : 'textfield', name :
							 * 'entity/vacuumDuration', dataIndex :
							 * 'vacuumDuration', fieldLabel : '真空保持时长', anchor :
							 * '95%', colspan : 1 }, { xtype : 'datetimefield',
							 * format : 'Y-m-d H:i:00', name : 'entity/usetime',
							 * dataIndex : 'usetime', fieldLabel : '料液使用时间',
							 * anchor : '95%', colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'operatorrolecombobox',
							currentRolecode : '10001501',
							ref : '../../hitUserid',
							allowBlank : false,
							anchor : '95%',
							ref : '../../hitUserid',
							hiddenName : 'entity/hitUserid',
							fieldLabel : '打料人'
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, { xtype : 'textarea', name :
							 * 'entity/remark', dataIndex : 'remark', fieldLabel :
							 * '备注', anchor : '95%', colspan : 2 }
							 */, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}, {
							xtype : 'hidden',
							ref : '../../hitUsername',
							dataIndex : 'hitUsername',
							name : 'entity/hitUsername'
						}, {
							xtype : 'hidden',
							value : '1',
							name : 'entity/submit'
						}]
			}]
		});
	}

	this.initEditWindow3 = function() {

		var _this = this;
		this.editWindow3 = this.editWindow3 || new Ext.fn.FormWindow({
			title : '修改记录',
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
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.make.expandFixEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							readOnly : true,
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							fieldLabel : '混料批次',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							readOnly : true,
							mode : 'local',
							fieldLabel : '混料机',
							ref : '../../machine',
							hiddenName : 'entity/machine',
							dataIndex : 'machine',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.machineStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							readOnly : true,
							mode : 'local',
							fieldLabel : '产品类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							dataIndex : 'mptype',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.mptypeStore,
							displayField : "mptype",
							valueField : "mptype",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'entity/psf',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '聚砜类型',
							hiddenName : 'entity/psf',
							dataIndex : 'psf',
							dictData : KS_PSF,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							readOnly : true,
							mode : 'local',
							fieldLabel : '脱气罐',
							ref : '../../jarNo',
							hiddenName : 'entity/jarNo',
							dataIndex : 'jarNo',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.tankStore,
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
							colspan : 2
						}, {
							xtype : 'trigger',
							emptyText : '输入完毕单击旁边按钮计算',
							allowBlank : false,
							ref : '../../weight',
							name : 'entity/weight',
							fieldLabel : '配料总重量(kg)',
							dataIndex : 'weight',
							anchor : '95%',
							colspan : 2,
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
							xtype : 'numberfield',
							ref : '../../c11',
							name : 'entity/c11',
							dataIndex : 'c11',
							allowBlank : false,
							fieldLabel : 'C11重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c12',
							name : 'entity/c12',
							dataIndex : 'c12',
							allowBlank : false,
							fieldLabel : 'C12重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							ref : '../../c13',
							name : 'entity/c13',
							dataIndex : 'c13',
							fieldLabel : 'C13重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							ref : '../../c14',
							name : 'entity/c14',
							dataIndex : 'c14',
							fieldLabel : 'C14重量(kg)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '聚砜浓度',
							ref : '../../concentration',
							hiddenName : 'entity/concentration',
							dataIndex : 'concentration',
							// allowBlank : false,
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.concentrationStore,
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
							colspan : 2
						}, {
							xtype : 'datetimefield',
							name : 'entity/fixStarttime',
							dataIndex : 'fixStarttime',
							fieldLabel : '混料开始时间',
							anchor : '95%',
							format : "Y-m-d H:i:00",
							colspan : 1
						}, {
							xtype : 'datetimefield',
							name : 'entity/hottime',
							dataIndex : 'hottime',
							fieldLabel : '开始加热时间',
							anchor : '95%',
							format : "Y-m-d H:i:00",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							name : 'entity/reachtime',
							dataIndex : 'reachtime',
							fieldLabel : '料液达70℃时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/keepDuration',
							dataIndex : 'keepDuration',
							fieldLabel : '保持70-80℃时长',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '混料人',
							dataIndex : 'fixUsername',
							anchor : '95%',
							colspan : 1

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/hitStarttime',
							dataIndex : 'hitStarttime',
							fieldLabel : '打料开始时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/hitOvertime',
							dataIndex : 'hitOvertime',
							fieldLabel : '打料结束时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/loopStarttime',
							dataIndex : 'loopStarttime',
							fieldLabel : '内循环开始时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:00',
							name : 'entity/loopOvertime',
							dataIndex : 'loopOvertime',
							fieldLabel : '内循环结束时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/jarVacuum',
							dataIndex : 'jarVacuum',
							fieldLabel : '脱气罐 真空度',
							anchor : '95%',
							colspan : 1
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, { xtype : 'textfield', name :
							 * 'entity/vacuumDuration', dataIndex :
							 * 'vacuumDuration', fieldLabel : '真空保持时长', anchor :
							 * '95%', colspan : 1 }, { xtype : 'datetimefield',
							 * format : 'Y-m-d H:i:00', name : 'entity/usetime',
							 * dataIndex : 'usetime', fieldLabel : '料液使用时间',
							 * anchor : '95%', colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'hitUsername',
							readOnly : true,
							fieldLabel : '打料人',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '已用完',
							ref : '../../used',
							hiddenName : 'entity/used',
							dataIndex : 'used',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, { xtype : 'textarea', name :
							 * 'entity/remark', dataIndex : 'remark', fieldLabel :
							 * '备注', anchor : '95%', colspan : 2 }
							 */, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}]
			}]
		});
	}
}