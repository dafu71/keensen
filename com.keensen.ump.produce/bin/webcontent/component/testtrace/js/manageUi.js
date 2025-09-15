com.keensen.ump.produce.component.testtraceMgr = function() {

	this.initPanel = function() {
		this.rec = {};
		this.initProdStore();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'testtracemgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}

	this.initProdStore = function() {
		this.prodStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.testtrace.queryProdSpecName.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'prodSpecName'
					}, {
						name : 'prodSpecId'
					}]
		})

		this.diaphragmTestStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.testtrace.queryDiaphragmTest2.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'materSpecName'
					}, {
						name : 'materSpecId'
					}, {
						name : 'materCode'
					}, {
						name : 'prodSpecName'
					}, {
						name : 'prodSpecId'
					}, {
						name : 'length'
					}, {
						name : 'sampleLength'
					}, {
						name : 'sampleAmount'
					}, {
						name : 'newBatchCode'
					}, {
						name : 'sampleLengthLow'
					}, {
						name : 'sampleLengthUp'
					}]
		})
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
						ref : '../testType',
						hiddenName : 'condition/testType',
						fieldLabel : '试卷类型',
						store : [['换产试卷', '换产试卷'], ['正常试卷', '正常试卷'],
								['发货试卷', '发货试卷'], ['生管试卷', '生管试卷'],
								['返厂试卷', '返厂试卷'], ['实验试卷', '实验试卷']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.testType.reset();
							}
						}

					}, {
						xtype : 'textfield',
						colspan : 1,
						name : 'condition/batchNo2',
						anchor : '75%',
						fieldLabel : '涂膜批号'
					}, {
						xtype : 'hidden',
						name : 'condition/category',
						value : '涂膜'
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
			autoExpandColumn : '7',
			tbar : [{
				text : '删除',
				scope : this,
				iconCls : 'icon-application_delete',
				disabled : (uid != 'KS00610') && (uid != 'KS01313')
						&& (uid != 'KS00524') && (uid != 'dafu') && (uid != 'KS00307'),
				handler : this.onDelete
			}],
			delUrl : 'com.keensen.ump.produce.component.testtrace.delete.biz.ext',
			hsPage : true,
			id : 'testtracemgr-list',
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						width : 100,
						header : '涂膜批号'
					}, {
						dataIndex : 'testType',
						width : 80,
						header : '试卷类型'
					}, {
						dataIndex : 'prodSpecName',
						width : 150,
						header : '叠膜型号',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									allowBlank : false,
									typeAhead : true,
									typeAheadDelay : 100,
									triggerAction : "all",
									lazyRender : true,
									readOnly : true,
									mode : 'local',
									emptyText : '--请选择--',
									lastQuery : '',
									store : _this.diaphragmTestStore,
									hiddenName : 'prodSpecName',
									editable : true,
									valueField : 'prodSpecName',
									displayField : 'prodSpecName',
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec.data['id'];
											_this.saveProdSpecName(id,
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'testLength',
						width : 80,
						header : '试卷膜片<br>长度'
					}, {
						dataIndex : 'testAmount',
						width : 60,
						header : '试卷支数'
					}, {
						dataIndex : 'createTime',
						width : 60,
						header : '录入时间'
					}, {
						dataIndex : 'createName',
						width : 60,
						header : '操作员'
					}, {
						header : '操作',
						scope : this,
						renderer : function(v, m, r, i) {
							var confirmUser = r.get('confirmUser');
							var id = r.get('id');
							if (Ext.isEmpty(confirmUser)) {
								var style = "<a style='color:red;text-decoration:none'";
								var str = style + " href='javascript:confirm("
										+ id + ");'>" + "确认</a>";

								return str;
							} else {
								return confirmUser;
							}
						}
					}/*
						 * , { dataIndex : 'fromIp', header : 'IP' }
						 */],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.queryTestTraceByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/category' : '涂膜'
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
							name : 'prodSpecName'
						}, {
							name : 'confirmUser'
						}, {
							name : 'testLength'
						}, {
							name : 'testAmount'
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
			width : '520',
			height : '330',
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 2
					}/*
						 * , {
						 * 
						 * anchor : "80%", xtype : 'combo', hiddenName :
						 * 'entity/testType', ref : '../testType', fieldLabel :
						 * '试卷类型', allowBlank : false, value : '换产试卷', store :
						 * [['换产试卷', '换产试卷'], ['正常试卷', '正常试卷'], ['发货试卷',
						 * '发货试卷'], ['生管试卷', '生管试卷'], ['返厂试卷', '返厂试卷'], ['实验试卷',
						 * '实验试卷']], listeners : { scope : this, 'expand' :
						 * function(A) { this.inputPanel.testType.reset(); } } }
						 */, {
						xtype : 'radiogroup',
						columns : 3,
						name : 'testType',
						ref : '../testType',
						allowBlank : false,
						fieldLabel : '试卷类型<span style="color:red">*</span>',
						anchor : '90%',
						items : [{
									boxLabel : '换产试卷',
									name : 'entity/testType',
									inputValue : '0',
									checked : true
								}, {
									boxLabel : '正常试卷',
									name : 'entity/testType',
									inputValue : '1'
								}, {
									boxLabel : '发货试卷',
									name : 'entity/testType',
									inputValue : '2'
								}, {
									boxLabel : '生管试卷',
									name : 'entity/testType',
									inputValue : '3'
								}, {
									boxLabel : '返厂试卷',
									name : 'entity/testType',
									inputValue : '4'
								}, {
									boxLabel : '实验试卷',
									name : 'entity/testType',
									inputValue : '5'
								}],
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '20',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '涂膜批号',
						ref : '../batchNo',
						anchor : '90%',
						colspan : 2,
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
						height : '20',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'displayfield',
						ref : '../info',
						readOnly : true,
						fieldLabel : '送样长度标准',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'combobox',
						allowBlank : false,
						//readOnly : true,
						triggerAction : "all",
						mode : "local",
						// forceSelection : true,
						fieldLabel : '叠膜型号',
						ref : '../prodSpecName',
						anchor : '90%',
						colspan : 2,
						emptyText : '--请选择--',
						// typeAhead : true,
						// typeAheadDelay : 100,
						// minChars : 1,
						// queryMode : 'local',
						// lastQuery : '',
						editable : false,
						store : this.diaphragmTestStore,
						// mode : "local",
						displayField : "prodSpecName",
						valueField : "prodSpecName",
						hiddenName : 'entity/reserve1',
						listeners : {
							scope : this,
							'specialkey' : function() {
								return false;
							},
							'select' : function(combo, record, eOpts) {
								this.inputPanel.prodSpecId
										.setValue(record.data.prodSpecId);

							}
						}
					}, {
						xtype : 'displayfield',
						height : '20',
						colspan : 2
					}, {
						xtype : 'trigger',
						emptyText : '单击旁边按钮计算',
						name : 'entity/testLength',
						dataIndex : 'testLength',
						ref : '../testLength',
						// readOnly : true,
						allowBlank : false,
						editable : true,
						fieldLabel : '试卷膜片&nbsp;&nbsp;<br>长度(米)',
						// readOnly : true,
						anchor : '90%',
						colspan : 1,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onCalc();
						},
						regex : /^\d+(\.\d+)?$/,
						regexText : "不合法的数据格式"
					}/*
						 * , { xtype : 'numberfield', fieldLabel : '试卷膜片长度',
						 * anchor : '95%', // allowBlank : false, ref :
						 * '../testLength', name : 'entity/testLength', colspan :
						 * 1 }, { xtype : 'numberfield', fieldLabel : '试卷支数',
						 * anchor : '95%', // allowBlank : false, ref :
						 * '../testAmount', name : 'entity/testAmount', colspan :
						 * 1 }
						 */, {
						xtype : 'trigger',
						emptyText : '单击旁边按钮计算',
						name : 'entity/testAmount',
						dataIndex : 'testAmount',
						ref : '../testAmount',
						// readOnly : true,
						allowBlank : false,
						editable : true,
						fieldLabel : '试卷支数',
						// readOnly : true,
						anchor : '90%',
						colspan : 1,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onCalc2();
						},
						regex : /^\d+(\.\d+)?$/,
						regexText : "不合法的数据格式"
					}, {
						xtype : 'hidden',
						name : 'entity/reserve4',
						ref : '../prodSpecId'
					}, {
						xtype : 'hidden',
						ref : '../sampleLength'
					}, {
						xtype : 'hidden',
						ref : '../materSpecName'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSubmit
					}]
		})

	}

}