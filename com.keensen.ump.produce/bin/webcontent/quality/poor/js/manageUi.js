com.keensen.ump.produce.quality.poorMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		this.initAbilitionWindow();

		this.initAbilitionJudgeWindow();
		this.initAbilitionQueryWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'poormgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.industryInvalidTypeStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.poorrecord.queryIndustryInvalidType2.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {

		}	,
			fields : [{
						name : "dictid"
					}, {
						name : "dictname"
					}]
		});

		this.invalidDealMethodStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.poorrecord.queryInvalidDealMethod2.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {

		}	,
			fields : [{
						name : "dictid"
					}, {
						name : "dictname"
					}]
		});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 180,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【元件不良记录查询】',
					fields : [{
						xtype : "dateregion",
						colspan : 1,
						anchor : '100%',
						nameArray : ['condition/invalidDtStart',
								'condition/invalidDtEnd'],
						fieldLabel : "报废日期",
						format : "Y-m-d"
					}, {
						xtype : 'combobox',
						anchor : '100%',
						name : 'condition/workshop',
						hiddenName : 'condition/workshop',
						fieldLabel : '车间',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['工业组件', '工业组件'], ['家用组件', '家用组件']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--",
						listeners : {
							select : function(combo, record) {
								if (record.get('mykey') == '工业组件') {
									_this.queryPanel.form
											.findField("condition/invalidType")
											.setDisabled(false);
									_this.queryPanel.form
											.findField("condition/invalidType")
											.setVisible(true);
									_this.queryPanel.form
											.findField("condition/invalidType2")
											.setDisabled(true);
									_this.queryPanel.form
											.findField("condition/invalidType2")
											.setVisible(false);
								} else {
									_this.queryPanel.form
											.findField("condition/invalidType")
											.setDisabled(true);
									_this.queryPanel.form
											.findField("condition/invalidType")
											.setVisible(false);
									_this.queryPanel.form
											.findField("condition/invalidType2")
											.setDisabled(false);
									_this.queryPanel.form
											.findField("condition/invalidType2")
											.setVisible(true);

								}

							}
						}
					}, {
						xtype : 'prodspeccombobox',
						ref : '../prodSpecSel',
						hiddenName : 'condition/materSpecId',
						anchor : '100%',
						fieldLabel : '元件型号 ',
						typeAhead : true,
						typeAheadDelay : 100,
						minChars : 1,
						lastQuery : '',
						editable : true,
						listeners : {
							'specialkey' : function() {
								return false;
							}
						}
					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '100%',
						fieldLabel : '膜片批次'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'condition/invalidCode',
						anchor : '100%',
						fieldLabel : '报废单编码'
					}, {
						xtype : 'textfield',
						name : 'condition/responsible',
						anchor : '100%',
						fieldLabel : '责任人'
					}, {
						xtype : 'textfield',
						name : 'condition/department',
						anchor : '100%',
						fieldLabel : '责任部门'
					}, {
						xtype : 'dictcombobox',
						name : 'condition/dealMethod',
						anchor : '100%',
						hiddenName : 'condition/dealMethod',
						fieldLabel : '处理方式',
						dictData : KS_INVALID_DEAL_METHOD
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'dictcombobox',
						name : 'condition/componentType',
						anchor : '100%',
						hiddenName : 'condition/componentType',
						fieldLabel : '元件归属类型',
						dictData : KS_COMPONENT_TYPE
					}, {
						xtype : 'dictcombobox',
						name : 'condition/invalidType',
						anchor : '100%',
						hiddenName : 'condition/invalidType',
						fieldLabel : '不合格类型<br>(工业）',
						dictData : KS_INDUSTRY_INVALID_TYPE
					}, {
						xtype : 'dictcombobox',
						name : 'condition/invalidType2',
						anchor : '100%',
						hiddenName : 'condition/invalidType2',
						fieldLabel : '不合格类型<br>(民用）',
						dictData : KS_CIVIL_INVALID_TYPE
					}, {
						xtype : "dateregion",
						colspan : 1,
						anchor : '100%',
						nameArray : ['condition/createTimeStart',
								'condition/createTimeEnd'],
						fieldLabel : "录入日期",
						format : "Y-m-d"
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'dafu' && uid != 'KS00307' && uid != 'KS01408',
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
			// title : '【元件不良记录列表】',
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
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '不合格膜片长度:'
					}, {
						xtype : 'textfield',
						width : 100,
						readOnly : true,
						ref : '../length'

					}, '->', {
						text : '元件报废判定',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onAbilition
					}, '-', {
						text : '元件报废申请查询',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onAbolitionQuery

					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.poorrecord.deletePoor.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'workshop',
						header : '车间'
					}, {
						dataIndex : 'invalidDt',
						sortable : true,
						header : '报废日期'
					}, {
						dataIndex : 'invalidCode',
						width : 120,
						sortable : true,
						header : '报废单编码'
					}, {
						dataIndex : 'materSpecName',
						width : 120,
						header : '元件型号'
					}, {
						dataIndex : 'batchNo',
						width : 120,
						header : '膜片批次'
					}, {
						dataIndex : 'juanmoBatchNo',
						width : 120,
						header : '卷膜序号'
					}, {
						dataIndex : 'componentNumber',
						width : 120,
						header : '元件序列号'
					}, {
						dataIndex : 'amount',
						header : '不合格数量,支'
					}, {
						dataIndex : 'length',
						header : '不合格膜片长度，m'
					}, {
						dataIndex : 'machine',
						header : '卷制机台'
					}, {
						dataIndex : 'tapColor',
						header : '胶带颜色'
					}, {
						dataIndex : 'describe',
						header : '不合格描述'
					}, {
						dataIndex : 'invalidTypeName',
						header : '不合格类型'
					}, {
						dataIndex : 'responsible',
						header : '责任人'
					}, {
						dataIndex : 'dealMethod',
						header : '处理方式'
					}, {
						dataIndex : 'department',
						header : '责任部门'
					}, {
						dataIndex : 'componentType',
						header : '元件归属类型'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '录入日期'
					}, {
						dataIndex : 'createName',
						header : '录入'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.poorrecord.querypoorByPage.biz.ext',
				root : 'data',
				autoLoad : false,
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
							name : 'workshop'
						}, {
							name : 'invalidDt'
						}, {
							name : 'invalidCode'
						}, {
							name : 'materSpecId'
						}, {
							name : 'batchNo'
						}, {
							name : 'componentNumber'
						}, {
							name : 'amount'
						}, {
							name : 'length'
						}, {
							name : 'machine'
						}, {
							name : 'describe'
						}, {
							name : 'invalidType'
						}, {
							name : 'invalidType2'
						}, {
							name : 'invalidTypeName'
						}, {
							name : 'responsible'
						}, {
							name : 'dealMethod'
						}, {
							name : 'department'
						}, {
							name : 'componentType'
						}, {
							name : 'materSpecName'
						}, {
							name : 'tapColor'
						}, {
							name : 'juanmoBatchNo'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增元件不良记录',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				autoHide : false,
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.poorrecord.savePoor.biz.ext',
				fields : [{
					xtype : 'combobox',
					allowBlank : false,
					anchor : '75%',
					colspan : 1,
					name : 'entity/workshop',
					hiddenName : 'entity/workshop',
					fieldLabel : '车间',
					triggerAction : "all",
					store : new Ext.data.ArrayStore({
								id : 0,
								fields : ['mykey', 'myvalue'],
								data : [['工业组件', '工业组件'], ['家用组件', '家用组件']]
							}),
					mode : "local",
					editable : false,
					displayField : "myvalue",
					valueField : "mykey",
					forceSelection : true,
					emptyText : "--请选择--",
					listeners : {
						select : function(combo, record) {
							if (record.get('mykey') == '工业组件') {
								_this.inputWindow.form
										.findField("entity/invalidType")
										.setDisabled(false);
								_this.inputWindow.form
										.findField("entity/invalidType")
										.setVisible(true);
								_this.inputWindow.form
										.findField("entity/invalidType2")
										.setDisabled(true);
								_this.inputWindow.form
										.findField("entity/invalidType2")
										.setVisible(false);
							} else {
								_this.inputWindow.form
										.findField("entity/invalidType")
										.setDisabled(true);
								_this.inputWindow.form
										.findField("entity/invalidType")
										.setVisible(false);
								_this.inputWindow.form
										.findField("entity/invalidType2")
										.setDisabled(false);
								_this.inputWindow.form
										.findField("entity/invalidType2")
										.setVisible(true);

							}

						}
					}
				}, {
					xtype : 'datefield',
					allowBlank : false,
					name : 'entity/invalidDt',
					format : "Y-m-d",
					fieldLabel : '报废日期',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/invalidCode',
					fieldLabel : '报废单编码',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'prodspeccombobox',
					allowBlank : false,
					hiddenName : 'entity/materSpecId',
					name : 'entity/materSpecId',
					colspan : 1,
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
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'trigger',
					allowBlank : true,
					ref : '../../juanmoBatchNo',
					name : 'entity/juanmoBatchNo',
					emptyText : "输入卷膜序号，单击旁边按钮",
					fieldLabel : '卷膜序号',
					anchor : '75%',
					colspan : 1,
					editable : true,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onGetBatchNo();
					}
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : false,
					name : 'entity/batchNo',
					fieldLabel : '膜片批次',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/componentNumber',
					fieldLabel : '元件序列号',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/invalidType',
					anchor : '75%',
					hiddenName : 'entity/invalidType',
					fieldLabel : '不合格类型<br>(工业）',
					dictData : KS_INDUSTRY_INVALID_TYPE,
					colspan : 1
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/invalidType2',
					anchor : '75%',
					hiddenName : 'entity/invalidType2',
					fieldLabel : '不合格类型<br>(民用）',
					dictData : KS_CIVIL_INVALID_TYPE,
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					allowBlank : false,
					name : 'entity/amount',
					fieldLabel : '不合格数量,支',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/machine',
					fieldLabel : '卷制机台',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'trigger',
					name : 'entity/length',
					// id:'planordernotrigger',
					allowBlank : false,
					fieldLabel : '不合格膜长度m',
					anchor : '75%',
					colspan : 1,
					editable : true,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onCalculate();
					}
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/tapColor',
					fieldLabel : '胶带颜色',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					fieldLabel : ' ',
					value : '<p style="color:red;">选择元件型号,及输入不合格数量，点击旁边按钮获取不合格膜片长度</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 2
				}, {
					xtype : 'textfield',
					name : 'entity/describe',
					allowBlank : false,
					fieldLabel : '不合格描述',
					anchor : '90%',
					colspan : 2
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/responsible',
					fieldLabel : '责任人',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/department',
					fieldLabel : '责任部门',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/dealMethod',
					anchor : '75%',
					hiddenName : 'entity/dealMethod',
					fieldLabel : '处理方式',
					dictData : KS_INVALID_DEAL_METHOD,
					colspan : 1
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/componentType',
					anchor : '75%',
					colspan : 1,
					hiddenName : 'entity/componentType',
					fieldLabel : '元件归属类型',
					dictData : KS_COMPONENT_TYPE
				}]
			}]
		});

	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改元件不良记录',
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
				loadUrl : 'com.keensen.ump.produce.quality.poorrecord.expandPoorEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.poorrecord.savePoor.biz.ext',
				fields : [{
					xtype : 'combobox',
					allowBlank : false,
					anchor : '75%',
					colspan : 1,
					name : 'entity/workshop',
					hiddenName : 'entity/workshop',
					dataIndex : 'workshop',
					fieldLabel : '车间',
					triggerAction : "all",
					store : new Ext.data.ArrayStore({
								id : 0,
								fields : ['mykey', 'myvalue'],
								data : [['工业组件', '工业组件'], ['家用组件', '家用组件']]
							}),
					mode : "local",
					editable : false,
					displayField : "myvalue",
					valueField : "mykey",
					forceSelection : true,
					emptyText : "--请选择--",
					listeners : {
						select : function(combo, record) {
							if (record.get('mykey') == '工业组件') {
								_this.editWindow.form
										.findField("entity/invalidType")
										.setDisabled(false);
								_this.editWindow.form
										.findField("entity/invalidType")
										.setVisible(true);
								_this.editWindow.form
										.findField("entity/invalidType2")
										.setDisabled(true);
								_this.editWindow.form
										.findField("entity/invalidType2")
										.setVisible(false);
							} else {
								_this.editWindow.form
										.findField("entity/invalidType")
										.setDisabled(true);
								_this.editWindow.form
										.findField("entity/invalidType")
										.setVisible(false);
								_this.editWindow.form
										.findField("entity/invalidType2")
										.setDisabled(false);
								_this.editWindow.form
										.findField("entity/invalidType2")
										.setVisible(true);

							}

						}
					}
				}, {
					xtype : 'datefield',
					allowBlank : false,
					name : 'entity/invalidDt',
					dataIndex : 'invalidDt',
					format : "Y-m-d",
					fieldLabel : '报废日期',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/invalidCode',
					dataIndex : 'invalidCode',
					fieldLabel : '报废单编码',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'prodspeccombobox',
					dataIndex : 'materSpecId',
					allowBlank : false,
					hiddenName : 'entity/materSpecId',
					name : 'entity/materSpecId',
					colspan : 1,
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
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'trigger',
					allowBlank : true,
					ref : '../../juanmoBatchNo',
					name : 'entity/juanmoBatchNo',
					dataIndex : 'juanmoBatchNo',
					fieldLabel : '卷膜序号',
					emptyText : "输入卷膜序号，单击旁边按钮",
					anchor : '75%',
					colspan : 1,
					editable : true,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onGetBatchNo2();
					}
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : false,
					name : 'entity/batchNo',
					dataIndex : 'batchNo',
					fieldLabel : '膜片批次',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/componentNumber',
					dataIndex : 'componentNumber',
					fieldLabel : '元件序列号',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/invalidType',
					dataIndex : 'invalidType',
					anchor : '75%',
					hiddenName : 'entity/invalidType',
					fieldLabel : '不合格类型<br>(工业）',
					dictData : KS_INDUSTRY_INVALID_TYPE,
					colspan : 1
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/invalidType2',
					dataIndex : 'invalidType2',
					anchor : '75%',
					hiddenName : 'entity/invalidType2',
					fieldLabel : '不合格类型<br>(民用）',
					dictData : KS_CIVIL_INVALID_TYPE,
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					allowBlank : false,
					name : 'entity/amount',
					dataIndex : 'amount',
					fieldLabel : '不合格数量,支',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/machine',
					dataIndex : 'machine',
					fieldLabel : '卷制机台',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'trigger',
					name : 'entity/length',
					dataIndex : 'length',
					allowBlank : false,
					fieldLabel : '不合格膜长度m',
					anchor : '75%',
					colspan : 1,
					editable : true,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onCalculate2();
					}
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/tapColor',
					dataIndex : 'tapColor',
					fieldLabel : '胶带颜色',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					fieldLabel : ' ',
					value : '<p style="color:red;">选择元件型号,及输入不合格数量，点击旁边按钮获取不合格膜片长度</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 2
				}, {
					xtype : 'textfield',
					name : 'entity/describe',
					dataIndex : 'describe',
					allowBlank : false,
					fieldLabel : '不合格描述',
					anchor : '90%',
					colspan : 2
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/responsible',
					dataIndex : 'responsible',
					fieldLabel : '责任人',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'entity/department',
					dataIndex : 'department',
					fieldLabel : '责任部门',
					anchor : '75%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/dealMethod',
					dataIndex : 'dealMethod',
					anchor : '75%',
					hiddenName : 'entity/dealMethod',
					fieldLabel : '处理方式',
					dictData : KS_INVALID_DEAL_METHOD,
					colspan : 1
				}, {
					xtype : 'dictcombobox',
					allowBlank : false,
					name : 'entity/componentType',
					dataIndex : 'componentType',
					anchor : '75%',
					colspan : 1,
					hiddenName : 'entity/componentType',
					fieldLabel : '元件归属类型',
					dictData : KS_COMPONENT_TYPE
				}, {
					xtype : 'hidden',
					name : 'entity/id',
					dataIndex : 'id'
				}]
			}]
		});
	}

	this.initAbilitionWindow = function() {

		var selModel4Abilition = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4Abilition = this.listPanel4Abilition
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '判定',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onAbilitionJudge
							}],
					hsPage : true,
					selModel : selModel4Abilition,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 20
									}), selModel4Abilition, {
								dataIndex : 'code',
								width : 150,
								header : '报废单编码'
							}, {
								dataIndex : 'deptName',
								width : 150,
								header : '申请部门'
							}, {
								dataIndex : 'belongType',
								header : '归属类型'
							}, {
								dataIndex : 'createName',
								header : '申请人'
							}, {
								dataIndex : 'createTime',
								header : '申请时间'
							}, {
								dataIndex : 'result',
								header : '判定结果'
							}, {
								dataIndex : 'judgeTime',
								header : '判定时间'
							}, {
								dataIndex : 'judgeUserName',
								header : '判定人'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.quality.abilition.queryAbilitionByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'code'
								}, {
									name : 'dept'
								}, {
									name : 'code'
								}, {
									name : 'deptName'
								}, {
									name : 'createName'
								}, {
									name : 'createTime'
								}, {
									name : 'belongType'
								}, {
									name : 'result'
								}, {
									name : 'judgeUserName'
								}, {
									name : 'judgeTime'
								}, {
									name : 'id'
								}]
					})
				})

		this.queryPanel4Abilition = this.queryPanel4Abilition
				|| new Ext.fn.QueryPanel({
							height : 110,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "申请日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/code',
								anchor : '100%',
								fieldLabel : '报废单编码%-%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'textfield',
								name : 'condition/deptName',
								anchor : '100%',
								fieldLabel : '申请部门%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/createName',
								anchor : '100%',
								fieldLabel : '申请人%-%'
							}]
						});

		this.queryPanel4Abilition.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportAbilitionExcel
				});

		this.queryPanel4Abilition.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.abilitionWindow.hide();
					}

				});

		this.abilitionWindow = this.abilitionWindow || new Ext.Window({
					title : '元件报废判定',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4Abilition,
							this.listPanel4Abilition]

				});
	}

	this.initAbilitionJudgeWindow = function() {

		var _this = this;

		var selModel4AbilitionJudge = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel4AbilitionJudge = this.listPanel4AbilitionJudge
				|| new Ext.fn.EditListPanel({

					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					autoScroll : true,
					clicksToEdit : 1,
					selModel : selModel4AbilitionJudge,

					tbar : [{
								xtype : 'displayfield',
								ref : '../info',
								value : '&nbsp;'
							}],

					columns : [new Ext.grid.RowNumberer(),
							selModel4AbilitionJudge, {
								dataIndex : 'prodSpecName',
								sortable : true,
								width : 140,
								header : '元件型号'
							}, {
								dataIndex : 'jmBatchNo',
								sortable : true,
								width : 100,
								header : '卷膜序号'
							}, {
								dataIndex : 'tmBatchNo',
								sortable : true,
								width : 100,
								header : '膜片批次'
							}, {

								dataIndex : 'invalidType',
								sortable : true,
								width : 100,
								header : '不合格类型',
								css : 'background:#c7c7a7;',
								editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
										{
											allowBlank : false,
											mode : 'local',
											hiddenName : 'dictid',
											anchor : '100%',
											colspan : 6,
											emptyText : '--请选择--',
											editable : false,
											store : _this.industryInvalidTypeStore,
											displayField : "dictname",
											valueField : "dictid",
											scope : this,
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}))

							}, {

								dataIndex : 'describe',
								width : 200,
								sortable : true,
								header : '不合格描述',
								css : 'background:#c7c7b7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : true,
											scope : this,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))

							}, {

								dataIndex : 'responsible',
								sortable : true,
								width : 100,
								header : '责任人',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : true,
											scope : this,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))

							}, {

								dataIndex : 'department',
								sortable : true,
								width : 100,
								header : '责任部门',
								css : 'background:#c7c7d7;',
								editor : new Ext.grid.GridEditor(new Ext.form.TextField(
										{
											allowBlank : true,
											scope : this,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))

							}, {

								dataIndex : 'dealMethod',
								sortable : true,
								width : 100,
								header : '处理方式',
								css : 'background:#c7c7e7;',
								editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
										{
											allowBlank : false,
											mode : 'local',
											hiddenName : 'dictid',
											anchor : '100%',
											colspan : 6,
											emptyText : '--请选择--',
											editable : false,
											store : _this.invalidDealMethodStore,
											displayField : "dictname",
											valueField : "dictid",
											scope : this,
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}))

							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.quality.abilition.queryAbilitionList.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'id'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'jmBatchNo'
								}, {
									name : 'tmBatchNo'
								}, {
									name : 'invalidType'
								}, {
									name : 'describe'
								}, {
									name : 'responsible'
								}, {
									name : 'department'
								}, {
									name : 'dealMethod'
								}, {
									name : 'relationId'
								}]
					})
				})

		this.abilitionJudgeWindow = this.abilitionJudgeWindow
				|| new Ext.Window({
							title : '报废判定',
							resizable : true,
							minimizable : false,
							maximizable : true,
							closeAction : "hide",
							buttonAlign : "center",
							autoScroll : false,
							modal : true,
							width : 1024,
							height : 600,
							layout : 'border',
							items : [this.listPanel4AbilitionJudge],
							buttons : [{
										text : "保存",
										scope : this,
										handler : this.onSaveAbilitionJudge
									}, {
										text : "关闭",
										scope : this,
										handler : function() {
											this.abilitionJudgeWindow.hide();
										}
									}]

						});

	}

	this.initAbilitionQueryWindow = function() {

		var selModel4AbilitionQuery = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel4AbilitionQueryList = this.listPanel4AbilitionQueryList
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					tbar : [{
								text : '打印',
								scope : this,
								iconCls : 'icon-printer',
								handler : this.onPrint
							}],
					hsPage : true,
					selModel : selModel4AbilitionQuery,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 20
									}), selModel4AbilitionQuery, {
								dataIndex : 'code',
								width : 150,
								header : '报废单编码'
							}, {
								dataIndex : 'deptName',
								width : 150,
								header : '申请部门'
							}, {
								dataIndex : 'belongType',
								header : '归属类型'
							}, {
								dataIndex : 'juanmoLength',
								header : '膜片长度(m)'
							}, {
								dataIndex : 'materCode',
								header : '物料代码'
							}, {
								dataIndex : 'prodSpecName',
								header : '元件型号'
							}, {
								dataIndex : 'tapeColor',
								header : '胶带颜色'
							}, {
								dataIndex : 'dryWet',
								header : '干/湿膜'
							}, {
								dataIndex : 'jmBatchNo',
								header : '卷膜序号'
							}, {
								dataIndex : 'tmBatchNo',
								header : '膜片批次'
							}, {
								dataIndex : 'amount',
								header : '报废数量'
							}, {
								dataIndex : 'unit',
								header : '单位'
							}, {
								dataIndex : 'returnFactory',
								header : '入库/返厂日期'
							}, {
								dataIndex : 'checkTm',
								// format : "Y-m-d",
								header : '水测时间'
							}, {
								dataIndex : 'gpd',
								header : '产水量'
							}, {
								dataIndex : 'salt',
								header : '脱盐率'
							}, {
								dataIndex : 'describe',
								header : '报废原因'
							}, {
								dataIndex : 'responsible',
								header : '责任人'
							}, {
								dataIndex : 'department',
								header : '责任部门'
							}, {
								dataIndex : 'dealMethod',
								header : '处理方式'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.quality.abilition.queryAbilitionListByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'jmBatchNo'
								}, {
									name : 'tmBatchNo'
								}, {
									name : 'tapeColor'
								}, {
									name : 'amount'
								}, {
									name : 'juanmoLength'
								}, {
									name : 'dryWet'
								}, {
									name : 'checkTm'
								}, {
									name : 'gpd'
								}, {
									name : 'salt'
								}, {
									name : 'code'
								}, {
									name : 'dept'
								}, {
									name : 'code'
								}, {
									name : 'deptName'
								}, {
									name : 'createName'
								}, {
									name : 'createTime'
								}, {
									name : 'belongType'
								}, {
									name : 'prodSpecId'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'department'
								}, {
									name : 'dealMethod'
								}, {
									name : 'responsible'
								}, {
									name : 'describe'
								}, {
									name : 'returnFactory'
								}, {
									name : 'materCode'
								}, {
									name : 'unit'
								}]
					})
				})

		this.queryPanel4AbilitionQuery = this.queryPanel4AbilitionQuery
				|| new Ext.fn.QueryPanel({
							height : 110,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "申请日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/code',
								anchor : '100%',
								fieldLabel : '报废单编码%-%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'textfield',
								name : 'condition/jmBatchNo',
								anchor : '100%',
								fieldLabel : '卷膜序号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/createName',
								anchor : '100%',
								fieldLabel : '申请人%-%'
							}]
						});

		this.queryPanel4AbilitionQuery.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportAbilitionQuery
				});

		this.queryPanel4AbilitionQuery.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.abilitionQueryWindow.hide();
					}

				});

		this.abilitionQueryWindow = this.abilitionQueryWindow
				|| new Ext.Window({
							title : '元件报废查询',
							resizable : true,
							minimizable : false,
							maximizable : true,
							closeAction : "hide",
							buttonAlign : "center",
							autoScroll : false,
							modal : true,
							width : 1024,
							height : 600,
							layout : 'border',
							items : [this.queryPanel4AbilitionQuery,
									this.listPanel4AbilitionQueryList]

						});
	}
}