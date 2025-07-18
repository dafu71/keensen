com.keensen.ump.produce.component.snMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "componentsnmgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 100,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/prefix',
								anchor : '75%',
								fieldLabel : '前缀'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								anchor : '75%',
								fieldLabel : '元件型号'
							}, {

								xtype : 'combobox',
								fieldLabel : '元件类型',
								ref : '../useType',
								hiddenName : 'condition/useType',
								emptyText : '--请选择--',
								allowBlank : true,
								editable : false,
								anchor : '85%',
								colspan : 1,
								store : [['家用', '家用'], ['工业', '工业'],
										['非常规', '非常规']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.useType.reset();
									}
								}
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
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
						text : '生成序列号',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onCreate
					}],
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'useType',
						header : '元件类型'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
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
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.sn.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
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
						fieldLabel : '元件类型',
						ref : '../../useType',
						hiddenName : 'condition/useType',
						emptyText : '--请选择--',
						allowBlank : true,
						editable : false,
						anchor : '85%',
						colspan : 1,
						store : [['家用', '家用'], ['工业', '工业'], ['非常规', '非常规']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.inputWindow.useType.reset();
							},
							'select' : function(combo, record, index) {
								if (index < 0)
									return;
								if (index == 2) {
									_this.inputWindow.digit.setVisible(true);
									_this.inputWindow.rule.setVisible(true);
								} else {
									_this.inputWindow.digit.setVisible(false);
									_this.inputWindow.rule.setVisible(false);
									_this.inputWindow.digit.setValue(7 - index);
									_this.inputWindow.rule.setValue('');
								}

							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'condition/prodSpecName',
						ref : '../../prodSpecName',
						allowBlank : false,
						fieldLabel : '元件型号',
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
						colspan : 1
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
					}]

		})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '生成元件序列号',
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
}