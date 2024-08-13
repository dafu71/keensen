com.keensen.ump.produce.component.testtrace2Mgr = function() {

	this.initPanel = function() {
		this.rec = {};
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'testtrace2mgr',
					panels : [this.inputPanel, this.panel, this.panel2]
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

						anchor : "75%",
						colspan : 1,
						xtype : 'combo',
						ref : '../testCondition',
						hiddenName : 'condition/testCondition',
						fieldLabel : '测试条件',
						store : [['不配液加不清管道', '不配液加不清管道'],
								['不配液加清管道', '不配液加清管道'], ['配液加不清管道', '配液加不清管道'],
								['配液加清管道', '配液加清管道']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.testCondition.reset();
							}
						}

					}, {
						xtype : 'textfield',
						colspan : 1,
						name : 'condition/batchNo',
						anchor : '75%',
						fieldLabel : '卷膜序号'
					}, {
						xtype : 'hidden',
						name : 'condition/category',
						value : '卷膜'
					}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.EditListPanel({
			region : "center",
			viewConfig : {
				forceFit : false
			},
			autoExpandColumn : '4',
			tbar : [ {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onDelete
					}],
			delUrl : 'com.keensen.ump.produce.component.testtrace.delete.biz.ext',
			hsPage : true,
			id : 'testtrace2mgr-list',
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						width:100,
						header : '卷膜序号'
					}, {
						dataIndex : 'prodSpecName2',
						width:150,
						header : '元件型号'
					}, {
						dataIndex : 'testCondition',
						width:100,
						header : '测试条件',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									allowBlank : false,
									typeAhead : true,
									typeAheadDelay : 100,
									triggerAction : "all",
									lazyRender : true,
									minChars : 1,
									mode : 'local',
									lastQuery : '',
									allowBlank : false,
									// mode : 'local',
									emptyText : '--请选择--',
									// lastQuery : '',
									store : new Ext.data.SimpleStore({
												fields : ["testCondition",
														"testCondition"],
												data : [
														['不配液加不清管道', '不配液加不清管道'],
														['不配液加清管道', '不配液加清管道'],
														['配液加不清管道', '配液加不清管道'],
														['配液加清管道', '配液加清管道']]
											}),

									hiddenName : 'testCondition',
									// editable : true,
									valueField : 'testCondition',
									displayField : 'testCondition',
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec.data['id'];
											_this.saveTestCondition(id,
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'createTime',
						width:120,
						header : '录入时间'
					}, {
						dataIndex : 'createName',
						width:60,
						header : '操作员'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.queryTestTraceByPage2.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/category' : '卷膜'
				},
				fields : [{
							name : 'category'
						}, {
							name : 'batchNo'
						}, {
							name : 'createTime'
						}, {
							name : 'createName'
						}, {
							name : 'fromIp'
						}, {
							name : 'id'
						}, {
							name : 'testType'
						}, {
							name : 'testCondition'
						}, {
							name : 'prodSpecName2'
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
			height : '200',
			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					}/*
						 * , {
						 * 
						 * anchor : "80%", xtype : 'combo', hiddenName :
						 * 'entity/testCondition', ref : '../testCondition',
						 * fieldLabel : '测试条件', allowBlank : false, value :
						 * '不配液加不清管道', store : [['不配液加不清管道', '不配液加不清管道'],
						 * ['不配液加清管道', '不配液加清管道'], ['配液加不清管道', '配液加不清管道'],
						 * ['配液加清管道', '配液加清管道']], listeners : { scope : this,
						 * 'expand' : function(A) {
						 * this.inputPanel.testCondition.reset(); } } }
						 */, {
						xtype : 'displayfield',
						height : '5',
						colspan : 1
					}, {
						xtype : 'radiogroup',
						columns : 2,
						name : 'testCondition',
						ref : '../testCondition',
						allowBlank : false,
						fieldLabel : '测试条件<span style="color:red">*</span>',
						anchor : '100%',
						items : [{
									boxLabel : '不配液加不清管道',
									name : 'entity/testCondition',
									inputValue : '0',
									checked : true
								}, {
									boxLabel : '不配液加清管道',
									name : 'entity/testCondition',
									inputValue : '1'
								}, {
									boxLabel : '配液加不清管道',
									name : 'entity/testCondition',
									inputValue : '2'
								}, {
									boxLabel : '配液加清管道',
									name : 'entity/testCondition',
									inputValue : '3'
								}],
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
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
									this.onScan();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onScan
					}]
		})

	}

}