com.keensen.ump.produce.quality.deliverystandMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		// 复制
		this.initCopyWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'deliverystandmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【元件发货质检标准查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/labelingModel',
								anchor : '75%',
								fieldLabel : '贴标型号'
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/materSpecId',
								anchor : '75%',
								fieldLabel : '卷膜型号',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【元件发货质检标准列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '复制',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCopy
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.deliverystand.delete.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'labelingModel',
						header : '贴标型号'
					}, {
						dataIndex : 'materSpecName',
						header : '卷膜型号'
					}, {
						dataIndex : 'client',
						header : '客户'
					}, {
						dataIndex : 'airStdStr',
						header : '气密性标准'
					}, {
						dataIndex : 'solution',
						header : 'NaCl<br>测试溶液'
					}, {
						dataIndex : 'temperature',
						header : 'NaCl<br>温度(c)'
					}, {
						dataIndex : 'ph',
						header : 'NaCl<br>pH值'
					}, {
						dataIndex : 'press',
						header : 'NaCl<br>测试压力psi(Mpa)'
					}, {
						dataIndex : 'recovery',
						header : 'NaCl<br>回收率(%)'
					}, {
						dataIndex : 'water',
						header : 'NaCl<br>产水量(GPD)'
					}, {
						dataIndex : 'desalination',
						header : 'NaCl<br>最低脱盐率(%)'
					}, {
						dataIndex : 'pressWork',
						header : 'NaCl<br>最高工作压力psi(MPa)'
					}, {
						dataIndex : 'rangePh',
						header : 'NaCl<br>ph适应范围'
					}, {
						dataIndex : 'rangeRunPh',
						header : 'NaCl<br>连续运行时进水PH范围'
					}, {
						dataIndex : 'area',
						header : 'NaCl<br>有效膜面积ft2(m2)'
					}, {
						dataIndex : 'solution2',
						header : 'MgSO4<br>测试溶液'
					}, {
						dataIndex : 'temperature2',
						header : 'MgSO4<br>温度(c)'
					}, {
						dataIndex : 'ph2',
						header : 'MgSO4<br>pH值'
					}, {
						dataIndex : 'press2',
						header : 'MgSO4<br>测试压力psi(Mpa)'
					}, {
						dataIndex : 'recovery2',
						header : 'MgSO4<br>回收率(%)'
					}, {
						dataIndex : 'water2',
						header : 'MgSO4<br>产水量(GPD)'
					}, {
						dataIndex : 'desalination2',
						header : 'MgSO4<br>最低脱盐率(%)'
					}, {
						dataIndex : 'pressWork2',
						header : 'MgSO4<br>最高工作压力psi(MPa)'
					}, {
						dataIndex : 'rangePh2',
						header : 'MgSO4<br>ph适应范围'
					}, {
						dataIndex : 'rangeRunPh2',
						header : 'MgSO4<br>连续运行时进水PH范围'
					}, {
						dataIndex : 'area2',
						header : 'MgSO4<br>有效膜面积ft2(m2)'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.deliverystand.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'client'
						}, {
							name : 'airStdStr'
						}, {
							name : 'pressWork'
						}, {
							name : 'rangePh'
						}, {
							name : 'rangeRunPh'
						}, {
							name : 'area'
						}, {
							name : 'pressWork2'
						}, {
							name : 'rangePh2'
						}, {
							name : 'rangeRunPh2'
						}, {
							name : 'area2'
						}, , {
							name : 'id'
						}, {
							name : 'labelingModel'
						}, {
							name : 'materSpecId'
						}, {
							name : 'materSpecName'
						}, {
							name : 'solution'
						}, {
							name : 'temperature'
						}, {
							name : 'ph'
						}, {
							name : 'press'
						}, {
							name : 'recovery'
						}, {
							name : 'water'
						}, {
							name : 'desalination'
						}, {
							name : 'solution2'
						}, {
							name : 'temperature2'
						}, {
							name : 'ph2'
						}, {
							name : 'press2'
						}, {
							name : 'recovery2'
						}, {
							name : 'water2'
						}, {
							name : 'desalination2'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增元件发货质检标准',
			height : 650,
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
				saveUrl : 'com.keensen.ump.produce.quality.deliverystand.save.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/materSpecId',
							name : 'entity/materSpecId',
							fieldLabel : '卷膜型号',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/client',
							fieldLabel : '客户',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/airStdStr',
							fieldLabel : '气密性标准',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>NaCl测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork',
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh',
							fieldLabel : 'ph适应范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh',
							fieldLabel : '连续运行时进水PH范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/area',
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>NaCl标准</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/water',
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/desalination',
							fieldLabel : '最低脱盐率(%)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>MgSO4测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution2',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork2',
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh2',
							fieldLabel : 'ph适应范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh2',
							fieldLabel : '连续运行时进水PH范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/area2',
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>MgSO4标准</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/water2',
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/desalination2',
							fieldLabel : '最低脱盐率(%)',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改元件发货质检标准',
			height : 650,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.deliverystand.expand.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.deliverystand.save.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'labelingModel'
						}, {
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/materSpecId',
							name : 'entity/materSpecId',
							fieldLabel : '卷膜型号',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							},
							dataIndex : 'materSpecId'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/client',
							fieldLabel : '客户',
							dataIndex : 'client',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/airStdStr',
							dataIndex : 'airStdStr',
							fieldLabel : '气密性标准',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>NaCl测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'temperature'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'ph'
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'press'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork',
							dataIndex : 'pressWork',
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh',
							dataIndex : 'rangePh',
							fieldLabel : 'ph适应范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh',
							dataIndex : 'rangeRunPh',
							fieldLabel : '连续运行时进水PH范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/area',
							dataIndex : 'area',
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>NaCl标准</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/water',
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							name : 'entity/desalination',
							fieldLabel : '最低脱盐率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'desalination'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>MgSO4测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution2',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'temperature2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'ph2'
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'press2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork2',
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'pressWork2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh2',
							fieldLabel : 'ph适应范围',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'rangePh2'
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh2',
							fieldLabel : '连续运行时进水PH范围',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'rangeRunPh2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/area2',
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'area2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>MgSO4标准</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/water2',
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							name : 'entity/desalination2',
							fieldLabel : '最低脱盐率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'desalination2'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initCopyWindow = function() {
		this.copyWindow = this.copyWindow || new Ext.fn.FormWindow({
			title : '复制新增元件发货质检标准',
			height : 650,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.deliverystand.expand.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.deliverystand.save.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'labelingModel'
						}, {
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/materSpecId',
							name : 'entity/materSpecId',
							fieldLabel : '卷膜型号',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							},
							dataIndex : 'materSpecId'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/client',
							fieldLabel : '客户',
							dataIndex : 'client',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/airStdStr',
							dataIndex : 'airStdStr',
							fieldLabel : '气密性标准',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>NaCl测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'temperature'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'ph'
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'press'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork',
							dataIndex : 'pressWork',
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh',
							dataIndex : 'rangePh',
							fieldLabel : 'ph适应范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh',
							dataIndex : 'rangeRunPh',
							fieldLabel : '连续运行时进水PH范围',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/area',
							dataIndex : 'area',
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>NaCl标准</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/water',
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							name : 'entity/desalination',
							fieldLabel : '最低脱盐率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'desalination'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>MgSO4测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution2',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'temperature2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'ph2'
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'press2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork2',
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'pressWork2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh2',
							fieldLabel : 'ph适应范围',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'rangePh2'
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh2',
							fieldLabel : '连续运行时进水PH范围',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'rangeRunPh2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/area2',
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'area2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>MgSO4标准</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/water2',
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							name : 'entity/desalination2',
							fieldLabel : '最低脱盐率(%)',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'desalination2'
						}]
			}]
		});
	}

}