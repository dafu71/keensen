com.keensen.ump.produce.quality.deliverystandMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

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
					height : 120,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【元件发货质检标准查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/labelingModel',
								anchor : '75%',
								fieldLabel : '贴标型号'
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/materSpecId',
								anchor : '75%',
								fieldLabel : '元件型号 ',
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
			title : '【元件发货质检标准列表】',
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
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.deliverystand.delete.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'labelingModel',
						header : '贴标型号'
					}, {
						dataIndex : 'materSpecName',
						header : '元件型号'
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
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.deliverystand.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
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
				saveUrl : 'com.keensen.ump.produce.quality.deliverystand.save.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/materSpecId',
							name : 'entity/materSpecId',
							fieldLabel : '元件型号',
							anchor : '95%',
							colspan : 2,
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
							fieldLabel : "<span style='color:red;'>NaCl测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 2
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
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							fieldLabel : 'pH值',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							fieldLabel : '回收率(%)',
							anchor : '95%',
							colspan : 2
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
				loadUrl : 'com.keensen.ump.produce.quality.deliverystand.expand.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.deliverystand.save.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '贴标型号',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'labelingModel'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/materSpecId',
							name : 'entity/materSpecId',
							fieldLabel : '元件型号',
							anchor : '95%',
							colspan : 2,
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
							fieldLabel : "<span style='color:red;'>NaCl测试条件</span>",
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							fieldLabel : '测试溶液',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'solution'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 2,
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
							colspan : 2,
							dataIndex : 'ph'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 2,
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
							colspan : 2,
							dataIndex : 'recovery'
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
							colspan : 2,
							dataIndex : 'solution2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							fieldLabel : '温度(c)',
							anchor : '95%',
							colspan : 2,
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
							colspan : 2,
							dataIndex : 'ph2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							fieldLabel : '测试压力psi(Mpa)',
							anchor : '95%',
							colspan : 2,
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
							colspan : 2,
							dataIndex : 'recovery2'
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

}