com.keensen.ump.produce.component.workorder.machineMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		
		this.initChooseWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workordermachinemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								fieldLabel : '机台编码'
							}, {
								xtype : 'textfield',
								name : 'condition/name',
								fieldLabel : '机台名称'
							}, {
								xtype : 'combobox',
								name : 'condition/type',
								hiddenName : 'condition/type',
								fieldLabel : '机台类型',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['裁叠膜', '裁叠膜'],
													['卷膜', '卷膜'],
													['气检', '气检'],
													['包装', '包装'],
													['焊管焊网', '焊管焊网'],
													['裁网', '裁网'],
													['绕丝', '绕丝']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "--请选择--",
								listeners : {
									"expand" : function(A) {
										this.reset()
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
					}, '->',{
						text : '关联机台',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onArrange
					}],
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			delUrl : 'com.keensen.ump.base.workorder.deleteMachine.biz.ext',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '机台编码'
					}, {
						dataIndex : 'name',
						header : '机台名称'
					}, {
						dataIndex : 'type',
						header : '机台类型'
					}, {
						dataIndex : 'ip',
						header : 'IP'
					}, {
						dataIndex : 'relationCode',
						header : '关联机台'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.workorder.queryMachineByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'code'
						}, {
							name : 'name'
						}, {
							name : 'type'
						}, {
							name : 'ip'
						}, {
							name : 'relationCode'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.base.workorder.saveMachine.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/name',
							allowBlank : false,
							fieldLabel : '机台名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							anchor : '95%',
							colspan : 1,
							allowBlank : false,
							name : 'entity/type',
							dataIndex : 'type',
							hiddenName : 'entity/type',
							fieldLabel : '机台类型',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										fields : ['mykey', 'myvalue'],
										data : [['裁叠膜', '裁叠膜'], ['卷膜', '卷膜'],
													['气检', '气检'],
													['包装', '包装'],
													['焊管焊网', '焊管焊网'],
													['裁网', '裁网'],
													['绕丝', '绕丝']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
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
							xtype : 'textfield',
							anchor : '95%',
							colspan : 1,
							name : 'entity/ip',
							allowBlank : false,
							fieldLabel : 'IP',
							anchor : '95%',
							colspan : 1,
							regex : /^((2((5[0-5])|([0-4]\d)))|([0-1]?\d{1,2}))(\.((2((5[0-5])|([0-4]\d)))|([0-1]?\d{1,2}))){3}$/,
							regexText : "不合法的IP"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							name : 'entity/remark',
							allowBlank : false,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {
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
				loadUrl : 'com.keensen.ump.base.workorder.expandMachine.biz.ext',
				saveUrl : 'com.keensen.ump.base.workorder.saveMachine.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/name',
							allowBlank : false,
							fieldLabel : '机台名称',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'name'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							anchor : '95%',
							colspan : 1,
							readOnly : true,
							// allowBlank : false,
							// name : 'entity/type',
							dataIndex : 'type',
							// hiddenName : 'entity/type',
							fieldLabel : '机台类型',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										fields : ['mykey', 'myvalue'],
										data : [['裁叠膜', '裁叠膜'], ['卷膜', '卷膜'],
													['气检', '气检'],
													['包装', '包装'],
													['焊管焊网', '焊管焊网'],
													['裁网', '裁网'],
													['绕丝', '绕丝']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
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
							xtype : 'textfield',
							anchor : '95%',
							colspan : 1,
							name : 'entity/ip',
							allowBlank : false,
							fieldLabel : 'IP',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'ip',
							regex : /^((2((5[0-5])|([0-4]\d)))|([0-1]?\d{1,2}))(\.((2((5[0-5])|([0-4]\d)))|([0-1]?\d{1,2}))){3}$/,
							regexText : "不合法的IP"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						},{
							xtype : 'textfield',
							name : 'entity/remark',
							allowBlank : false,
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 1,
							dataIndex : 'remark'
						}, {
							xtype : 'hidden',
							name : 'entity/code',
							dataIndex : 'code'
						}]
			}]
		});
	}
	
	this.initChooseWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : Ext.emptyFn
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			selModel : selModel2,
			tbar : [{
						text : '确定选择',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveArrange
					}, '-', {
						text : '关闭',
						scope : this,
						handler : function() {
							this.chooseWindow.hide();
						}
					}],
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel2, {
						dataIndex : 'code',
						header : '机台编码'
					}, {
						dataIndex : 'name',
						header : '机台名称'
					}, {
						dataIndex : 'ip',
						header : 'IP'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : '',
				baseParams : {
					'condition/nottype' : '裁叠膜'
				},
				fields : [{
							name : 'code'
						}, {
							name : 'name'
						}, {
							name : 'type'
						}, {
							name : 'ip'
						}]
			})
		})

		this.chooseWindow = this.chooseWindow || new Ext.Window({
					title : '机台分配',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.listPanel2]

				})
	}
}