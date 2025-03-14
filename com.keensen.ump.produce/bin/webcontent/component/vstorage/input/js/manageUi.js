com.keensen.ump.produce.component.vstorage.VstorageInputMgr = function() {

	this.initPanel = function() {
		this.rec = {};

		this.initStore();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'vstorageinputmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}

	this.initStore = function() {

		// 超计划生产、需要给工艺意见、需要品管给意见、超期停留
		this.exceptionTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['超计划生产', '超计划生产'], ['需要工艺给意见', '需要工艺给意见'],
							['需要品管给意见', '需要品管给意见'], ['超期停留', '超期停留']
							, ['需班长处理', '需班长处理']]
				});

	}

	this.initInputWindow = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/batchNo',
								anchor : '85%',
								fieldLabel : '卷膜序号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '85%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "入仓日期",
								format : "Y-m-d"
							}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			region : "center",
			viewConfig : {
				forceFit : true
			},
			// autoExpandColumn : '4',
			delUrl : '1.biz.ext',
			hsPage : true,
			
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'jmBatchNo',
						//width : 100,
						header : '卷膜序号'
					}, {
						dataIndex : 'prodSpecName',
						//width : 120,
						header : '元件型号'
					}, {
						dataIndex : 'createTime',
						//width : 120,
						header : '入仓时间'
					}, {
						dataIndex : 'createName',
						//width : 120,
						header : '入仓操作员'
					}, {
						dataIndex : 'exceptionType',
						//width : 150,
						header : '异常停留分类'
					}, {
						dataIndex : 'remark',
						//width : 160,
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.vstorage.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'jmBatchNo'
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
							name : 'exceptionType'
						}, {
							name : 'remark'
						}, {
							name : 'prodSpecName'
						}]
			})
		})
		this.panel = this.panel || new Ext.Panel({
					layout : 'border',
					items : [this.queryPanel, this.listPanel]

				});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '500',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",
			width : '480',
			height : '350',
			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/jmBatchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '卷膜序号',
						ref : '../batchNo',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									_this.onScan();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						// name : 'entity/prodSpecName',
						readOnly : true,
						fieldLabel : '元件型号',
						ref : '../prodSpecName',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '异常停留分类',
						allowBlank : false,
						ref : '../exceptionType',
						hiddenName : 'entity/exceptionType',
						anchor : '80%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.exceptionTypeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.inputPanel.exceptionType.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textarea',
						name : 'entity/remark',
						fieldLabel : '备注',
						ref : '../remark',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						ref : '../msg',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}