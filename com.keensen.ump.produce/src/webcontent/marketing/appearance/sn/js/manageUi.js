com.keensen.ump.produce.marketing.SnMgr = function() {

	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();

		this.initModifyNumtWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "marketingsnmgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		
		this.useTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['非常规', '贴牌非规则']]
				});

		this.statusStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['1', '在用'], ['0', '停用']]
				});

	}

	this.initQueryPanel = function() {

		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/prefix',
								anchor : '95%',
								fieldLabel : '前缀'
							}, {
								xtype : 'textfield',
								name : 'condition/drawingCode',
								anchor : '95%',
								fieldLabel : '图纸编号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								anchor : '95%',
								fieldLabel : '标签型号%-%'
							}, {

								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '标签类型',
								ref : '../useType',
								hiddenName : 'condition/useType',
								emptyText : '--请选择--',
								value : '非常规',
								allowBlank : true,
								editable : false,
								anchor : '95%',
								colspan : 1,
								store : _this.useTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									scope : this,
									'expand' : function(A) {
										_this.queryPanel.useType.reset();
									}
								}
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {

								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '状态',
								ref : '../status2',
								hiddenName : 'condition/status',
								emptyText : '--请选择--',
								allowBlank : true,
								editable : false,
								anchor : '95%',
								colspan : 1,
								store : _this.statusStore,
								displayField : "name",
								valueField : "code",
								value : 1,
								listeners : {
									scope : this,
									'expand' : function(A) {
										_this.queryPanel.status2.reset();
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName2',
								anchor : '95%',
								fieldLabel : '标签型号'
							}, {
								xtype : 'hidden',
								name : 'condition/useType',
								value : '非常规'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					hidden : true,
					iconCls : 'icon-application_excel',
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
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '新增规则',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改规则',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onModify
					}, '-', {
						text : '停用规则',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onStop

					}/*
						 * , '-', { text : '生成序列号', hidden : uid != 'LHY' && uid !=
						 * 'dafu' && uid != 'KS01147', scope : this, iconCls :
						 * 'icon-application_add', handler : this.onCreate },
						 * '->', { text : '修改当前数量', hidden : uid != 'dafu' &&
						 * uid != 'KS01147', scope : this, iconCls :
						 * 'icon-application_edit', handler : this.onModifyNum }
						 */],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.sn.modifySnStatus.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'useType',
						header : '标签类型',
						renderer : function(v, m, r, i) {
							var prefix = r.get("prefix");

							if (prefix.substr(0, 1) == 'K')
								return '公司标签';

							if (v == '家用')
								return '贴牌规则（家用）';
							if (v == '工业')
								return '贴牌规则（工业）';
							if (v == '非常规')
								return '贴牌非规则';
							return v;
						}
					}, {
						dataIndex : 'drawingCode',
						header : '图纸编号'
					}, {
						dataIndex : 'prodSpecName',
						header : '标签型号'
					}, {
						dataIndex : 'reserve1',
						header : '标签LOGO'
					}, {
						dataIndex : 'reserve2',
						header : '制作方式'
					}, {
						dataIndex : 'prefix',
						header : '前缀'
					}, {
						dataIndex : 'num',
						header : '当前数量'
					}, {
						dataIndex : 'digit',
						header : '后缀编号位数'
					}, {
						dataIndex : 'sn',
						header : '当前最大序列号'
					}, {
						dataIndex : 'rule',
						header : '编码规则'
					}, {
						dataIndex : 'createTime',
						header : '规则保存时间'
					}, {
						dataIndex : 'createName',
						header : '规则编制人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.marketing.appearance.querySnByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/status' : 1,
					'condition/useType' : '非常规'
				},
				fields : [{
							name : 'id'
						}, {
							name : 'useType'
						}, {
							name : 'prefix'
						}, {
							name : 'num'
						}, {
							name : 'sn'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'digit'
						}, {
							name : 'rule'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'drawingCode'
						}, {
							name : 'createName'
						}, {
							name : 'createTime'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 500,
					region : 'center',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 1,
					saveUrl : 'com.keensen.ump.produce.component.sn.createSn.biz.ext',
					fields : [{

								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '标签类型',
								ref : '../../useType',
								//value:'非常规',
								hiddenName : 'condition/useType',
								emptyText : '--请选择--',
								allowBlank : false,
								editable : false,
								anchor : '85%',
								colspan : 1,
								store : _this.useTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.inputWindow.useType.reset();
									},
									'select' : function(combo, record, index) {
										if (index < 0)
											return;
										_this.getExample();
										if (index == 2) {
											// _this.inputWindow.digit.setVisible(true);
											// _this.inputWindow.rule.setVisible(true);
										} else {
											// _this.inputWindow.digit.setVisible(false);
											// _this.inputWindow.rule.setVisible(false);
											// _this.inputWindow.digit.setValue(7
											// -
											// index);
											// _this.inputWindow.rule.setValue('');
										}

									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/drawingCode',
								ref : '../../drawingCode',
								// allowBlank : false,
								fieldLabel : '图纸编号',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								ref : '../../prodSpecName',
								allowBlank : false,
								fieldLabel : '标签型号',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/reserve1',
								ref : '../../reserve1',
								// allowBlank : false,
								fieldLabel : '标签LOGO',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/reserve2',
								ref : '../../reserve2',
								// allowBlank : false,
								fieldLabel : '制作方式',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/prefix',
								ref : '../../prefix',
								allowBlank : false,
								fieldLabel : '前缀',
								anchor : '85%',
								colspan : 1,
								listeners : {
									scope : this,
									'change' : function(A) {
										_this.getExample();
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'numberfield',
								allowDecimals : false,
								minValue : 0,
								maxValue : 60000,
								name : 'condition/num',
								ref : '../../num',
								allowBlank : false,
								fieldLabel : '数量 ',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'numberfield',
								allowDecimals : false,
								minValue : 1,
								maxValue : 60000,
								name : 'condition/digit',
								ref : '../../digit',
								allowBlank : false,
								fieldLabel : '后缀编号位数 ',
								anchor : '85%',
								colspan : 1,
								listeners : {
									scope : this,
									'change' : function(A) {
										_this.getExample();
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/rule',
								ref : '../../rule',
								// allowBlank : false,
								fieldLabel : '编码规则',
								anchor : '85%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '30',
								colspan : 1
							}, {
								xtype : 'hidden',
								name : 'condition/id',
								ref : '../../pkid'
							}, {
								xtype : 'textfield',
								ref : '../../example',
								readOnly : true,
								fieldLabel : '编码示例',
								anchor : '85%',
								colspan : 1
							}]

				})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : "生成标签序列号",
					layout : 'border',
					height : 600,
					width : 800,
					closeAction : "hide",
					buttonAlign : "center",
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [this.inputPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputPanel.form.reset();
									this.inputWindow.hide();
								}
							}]
				});
	}

	this.initModifyNumtWindow = function() {
		var _this = this;
		this.modifyNumWindow = this.modifyNumWindow || new Ext.fn.FormWindow({
			title : '修改当前数量',
			height : 240,
			width : 300,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : '1.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.sn.modifySnNum.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/num',
							dataIndex : 'num',
							fieldLabel : '当前数量 ',
							ref : '../../num',
							allowBlank : false,
							anchor : '100%',
							colspan : 2

						}, {
							name : 'entity/id',
							ref : '../../pkid',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
	}
}