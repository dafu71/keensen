com.keensen.ump.produce.component.testtraceMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'testtracemgr',
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
						hiddenName : 'condition/testType',
						fieldLabel : '试卷类型',
						store : [['换产试卷', '换产试卷'], ['正常试卷', '正常试卷'],
								['发货试卷', '发货试卷'], ['生管试卷', '生管试卷'],
								['返厂试卷', '返厂试卷'], ['实验试卷', '实验试卷']]

					}, {
						xtype : 'textfield',
						colspan : 1,
						name : 'condition/batchNo',
						anchor : '75%',
						fieldLabel : '卷膜序号<br>涂膜批号'
					}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.EditListPanel({
			region : "center",
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '卷膜序号/涂膜批号'
					}, {
						dataIndex : 'category',
						header : '类型'
					}, {
						dataIndex : 'testType',
						header : '试卷类型'
					}, {
						dataIndex : 'createTime',
						header : '录入时间'
					}, {
						dataIndex : 'createName',
						header : '操作员'
					}, {
						dataIndex : 'fromIp',
						header : 'IP'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.queryTestTraceByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
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
			width : '600',
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
					}, {

						anchor : "80%",
						xtype : 'combo',
						hiddenName : 'entity/testType',
						ref : '../testType',
						fieldLabel : '试卷类型',
						allowBlank : false,
						value : '正常试卷',
						store : [['换产试卷', '换产试卷'], ['正常试卷', '正常试卷'],
								['发货试卷', '发货试卷'], ['生管试卷', '生管试卷'],
								['返厂试卷', '返厂试卷'], ['实验试卷', '实验试卷']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.inputPanel.testType.reset();
							}
						}

					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '卷膜序号<br>涂膜批号',
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
						handler : this.onSave
					}]
		})

	}

}