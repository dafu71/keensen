com.keensen.ump.produce.quality.watercondMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initMaterClassStore();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'watercondmgr',
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
					//title : '【水测标准测试条件查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/materClassCode',
								anchor : '75%',
								fieldLabel : '类型'

							}, {
								xtype : 'textfield',
								name : 'condition/condition',
								anchor : '75%',
								fieldLabel : '测试条件'

							}]
				});

	}

	this.initMaterClassStore = function() {
		this.materClassStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.quality2.queryMaterClass2.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'materClassId'
					}, {
						name : 'materClassCode'
					}, {
						name : 'materClassName'
					}]
		})
	}
	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			//title : '【水测标准测试条件列表】',
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
			delUrl : 'com.keensen.ump.produce.quality.quality2.deleteWaterStdCond.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materClassCode',
						header : '类型'
					}, {
						dataIndex : 'condition',
						header : '测试条件'
					}, {
						dataIndex : 'solid',
						header : '测试溶液'
					}, {
						dataIndex : 'press',
						header : '测试压力'
					}, {
						dataIndex : 'recovery',
						header : '回收率'
					}, {
						dataIndex : 'temperature',
						header : '水温'
					}, {
						dataIndex : 'ph',
						header : 'PH'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryWaterStdcondByPage.biz.ext',
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
							name : 'materClassId'
						}, {
							name : 'condition'
						}, {
							name : 'solid'
						}, {
							name : 'press'
						}, {
							name : 'recovery'
						}, {
							name : 'temperature'
						}, {
							name : 'ph'
						}, {
							name : 'materClassCode'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增水测标准测试条件',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveWaterStdCond.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '测试条件',
							name : 'entity/condition',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							anchor : '95%',
							fieldLabel : '类型',
							triggerAction : "all",
							store : this.materClassStore,
							valueField : 'materClassId',
							displayField : 'materClassCode',
							hiddenName : 'entity/materClassId',
							name : 'entity/materClassId',
							editable : false,
							forceSelection : true,
							mode : 'local',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							},
							emptyText : '--请选择--',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '测试溶液',
							name : 'entity/solid',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '测试压力',
							name : 'entity/press',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '回收率%',
							name : 'entity/recovery',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '水温',
							name : 'entity/temperature',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : 'PH',
							name : 'entity/ph',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改水测标准测试条件',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandWaterStdCond.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveWaterStdCond.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '测试条件',
							name : 'entity/condition',
							dataIndex : 'condition',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							anchor : '95%',
							fieldLabel : '类型',
							triggerAction : "all",
							store : this.materClassStore,
							valueField : 'materClassId',
							dataIndex : 'materClassId',
							displayField : 'materClassCode',
							hiddenName : 'entity/materClassId',
							name : 'entity/materClassId',
							editable : false,
							forceSelection : true,
							mode : 'local',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							},
							emptyText : '--请选择--',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '测试溶液',
							name : 'entity/solid',
							dataIndex : 'solid',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '测试压力',
							name : 'entity/press',
							dataIndex : 'press',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '回收率%',
							name : 'entity/recovery',
							dataIndex : 'recovery',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : '水温',
							name : 'entity/temperature',
							dataIndex : 'temperature',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							fieldLabel : 'PH',
							name : 'entity/ph',
							dataIndex : 'ph',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

}