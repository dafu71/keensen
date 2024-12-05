com.keensen.ump.produce.component.applys.reworkMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();
		this.initSecondWindow();
		this.initThirdWindow();
		this.initThirdHalfWindow();

		this.initFourthWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'applysreworkmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								anchor : '95%',
								fieldLabel : '指令单编号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '95%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								anchor : '95%',
								fieldLabel : '元件型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "发起日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								fieldLabel : '发起部门',
								ref : '../dept',
								hiddenName : 'condition/dept',
								dataIndex : 'dept',
								emptyText : '--请选择--',
								editable : false,
								anchor : '95%',
								store : [['生产管理部', '生产管理部'], ['质量管理部', '质量管理部']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.dept.reset();
									}
								}
							}, {
								xtype : 'combobox',
								anchor : '95%',
								name : 'condition/type',
								hiddenName : 'condition/type',
								dataIndex : 'type',
								fieldLabel : '元件类型',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['工业膜', '工业膜'],
													['家用膜', '家用膜']]
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

								xtype : 'combobox',
								fieldLabel : '当前环节',
								ref : '../step',
								hiddenName : 'condition/step',
								emptyText : '--请选择--',
								allowBlank : true,
								editable : false,
								anchor : '95%',
								store : [['second', '返工指令'], ['third', '返工安排'],
										['thirdhalf', '返工实施'],
										['produce', '结果确认'], ['finish', '完结']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.step.reset();
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
			// title : '【营销订单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : mylistid,
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
						text : '返工指令 ',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onSecond
					}, '-', {
						text : '返工安排 ',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onThird
					}, '-', {
						text : '返工实施 ',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onThirdHalf
					}, '-', {
						text : '结果确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onFourth
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}/*
						 * , '-', { text : '打印', scope : this, iconCls :
						 * 'icon-printer', handler : this.onPrint }
						 */, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.applys.deleteRework.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '指令单编号'
					}, {
						dataIndex : 'happenDate',
						header : '日期'
					}, {
						dataIndex : 'dept',
						header : '发起部门'
					}, {
						dataIndex : 'type',
						header : '元件类型'
					}, {
						dataIndex : 'tache',
						header : '发生工序'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'materSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'defectAmount',
						header : '不良数量'
					}, {
						dataIndex : 'batchNoStr',
						header : '返工批号'
					}, {
						dataIndex : 'stepName',
						header : '当前环节'
					}, {
						dataIndex : 'createTime',
						header : '发起日期'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.applys.queryReworkByPage.biz.ext',
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
							name : 'code'
						}, {
							name : 'happenDate'
						}, {
							name : 'tache'
						}, {
							name : 'describe'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'defectType'
						}, {
							name : 'defectAmount'
						}, {
							name : 'batchNoStr'
						}, {
							name : 'firstId'
						}, {
							name : 'firstName'
						}, {
							name : 'reworkMethod'
						}, {
							name : 'reworkDeal'
						}, {
							name : 'secondId'
						}, {
							name : 'secondName'
						}, {
							name : 'secondTime'
						}, {
							name : 'reworkResponse'
						}, {
							name : 'reworkIncentive'
						}, {
							name : 'planFinishDate'
						}, {
							name : 'reworkOrderNo'
						}, {
							name : 'thirdId'
						}, {
							name : 'thirdName'
						}, {
							name : 'thirdTime'
						}, {
							name : 'ifOntime'
						}, {
							name : 'notOntime'
						}, {
							name : 'ifOk'
						}, {
							name : 'fourthId'
						}, {
							name : 'fourthName'
						}, {
							name : 'fourthTime'
						}, {
							name : 'step'
						}, {
							name : 'stepName'
						}, {
							name : 'materSpecName'
						}, {
							name : 'type'
						}, {
							name : 'dept'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				saveUrl : 'com.keensen.ump.produce.component.applys.saveRework.biz.ext',
				fields : [{
							xtype : 'datefield',
							fieldLabel : '发起日期',
							ref : '../../happenDate',
							name : 'entity/happenDate',
							format : 'Y-m-d',
							value : new Date(),
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'combobox',
							fieldLabel : '发起部门',
							ref : '../../dept',
							hiddenName : 'entity/dept',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 6,
							store : [['生产管理部', '生产管理部'], ['质量管理部', '质量管理部']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.dept.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'combobox',
							anchor : '95%',
							colspan : 4,
							name : 'condition/type',
							hiddenName : 'entity/type',
							allowBlank : false,
							fieldLabel : '元件类型',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										fields : ['mykey', 'myvalue'],
										data : [['工业膜', '工业膜'], ['家用膜', '家用膜']]
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
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/labelSpecId',
							ref : '../../labelSpecId',
							allowBlank : false,
							anchor : '95%',
							colspan : 4,
							fieldLabel : '元件标签型号',
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
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							ref : '../../prodSpecId',
							allowBlank : false,
							anchor : '95%',
							colspan : 4,
							fieldLabel : '元件规格型号',
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
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '不良数量',
							allowBlank : false,
							ref : '../../defectAmount',
							name : 'entity/defectAmount',
							minValue : 1,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'textfield',
							fieldLabel : '订单编号',
							// allowBlank : false,
							ref : '../../orderNo',
							name : 'entity/orderNo',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'combobox',
							fieldLabel : '发生工序',
							ref : '../../tache',
							hiddenName : 'entity/tache',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 4,
							store : [['工业', '工业'], ['家用', '家用']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.tache.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',
							fieldLabel : '返工批号',
							allowBlank : false,
							ref : '../../batchNoStr',
							name : 'entity/batchNoStr',
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">家用膜元件信息</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'datefield',
							ref : '../../jmDate',
							name : 'entity/jmDate',
							fieldLabel : '卷膜日期',
							format : "Y-m-d",
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'dictcombobox',
							name : 'entity/prodClassFlag',
							hiddenName : 'entity/prodClassFlag',
							// allowBlank : false,
							fieldLabel : '干/湿',
							dictData : KS_PROD_CLASS_FLAG,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/tumoBatchStr',
							fieldLabel : '膜批次',
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'combobox',
							name : 'tapColor',
							anchor : '95%',
							colspan : 6,
							hiddenName : 'entity/tapColor',
							ref : '../../tapColor',
							fieldLabel : '胶带颜色',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['蓝色', '蓝色'], ['绿色', '绿色'],
												['白色', '白色'], ['黄色', '黄色'],
												['灰色', '灰色']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.tapColor.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'dictcombobox',
							name : 'label',
							hiddenName : 'entity/label',
							fieldLabel : '标签',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_LABEL
						}, {
							xtype : 'dictcombobox',
							name : 'bag',
							hiddenName : 'entity/bag',
							fieldLabel : '包装袋',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_LABEL
						}, {
							xtype : 'dictcombobox',
							name : 'box',
							hiddenName : 'entity/box',
							fieldLabel : '包装箱',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_BOX
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">元件性能</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/gpdAvg',
							fieldLabel : '平均产水量',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/saltAvg',
							fieldLabel : '平均脱盐率%',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'dictcheckboxgroup',
							allowBlank : false,
							columns : 6,
							ref : '../../myabnormal',
							// hiddenName : 'abnormal',
							fieldLabel : '外观异常类型',
							anchor : '95%',
							colspan : 12,
							dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',
							name : 'entity/abnormalExplain',
							allowBlank : false,
							fieldLabel : '外观异常说明',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textarea',
							name : 'entity/abnormalOther',
							fieldLabel : '其他异常备注',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							ref : '../../step'
						}, {
							xtype : 'hidden',
							name : 'entity/batchNoStr2',
							ref : '../../batchNoStr2'
						}, {
							xtype : 'hidden',
							ref : '../../abnormal',
							name : 'entity/abnormal'
						}]
			}]
		});

		this.inputWindow.buttons[0].hide();
		this.inputWindow.buttons[1].hide();

		this.inputWindow.addButton({
					text : "申请返工意见",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onAddSave
				});

		this.inputWindow.addButton({
					text : "申请返工安排",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onAddSave2
				});

		this.inputWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.inputWindow.form.reset();
						this.inputWindow.hide();
					}
				});
	}

	this.initEditWindow = function() {
		var _this = this;
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
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.component.applys.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.applys.saveRework.biz.ext',
				fields : [{
							xtype : 'datefield',
							fieldLabel : '发起日期',
							ref : '../../happenDate',
							name : 'entity/happenDate',
							dataIndex : 'happenDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'combobox',
							fieldLabel : '发起部门',
							ref : '../../dept',
							hiddenName : 'entity/dept',
							dataIndex : 'dept',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 6,
							store : [['生产管理部', '生产管理部'], ['质量管理部', '质量管理部']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.dept.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'combobox',
							anchor : '95%',
							colspan : 4,
							name : 'condition/type',
							hiddenName : 'entity/type',
							dataIndex : 'type',
							allowBlank : false,
							fieldLabel : '元件类型',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										fields : ['mykey', 'myvalue'],
										data : [['工业膜', '工业膜'], ['家用膜', '家用膜']]
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
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/labelSpecId',
							ref : '../../labelSpecId',
							dataIndex : 'labelSpecId',
							allowBlank : false,
							anchor : '95%',
							colspan : 4,
							fieldLabel : '元件标签型号',
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
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							ref : '../../prodSpecId',
							dataIndex : 'prodSpecId',
							allowBlank : false,
							anchor : '95%',
							colspan : 4,
							fieldLabel : '元件规格型号',
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
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '不良数量',
							allowBlank : false,
							ref : '../../defectAmount',
							name : 'entity/defectAmount',
							dataIndex : 'defectAmount',
							minValue : 1,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'textfield',
							fieldLabel : '订单编号',
							// allowBlank : false,
							ref : '../../orderNo',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'combobox',
							fieldLabel : '发生工序',
							ref : '../../tache',
							hiddenName : 'entity/tache',
							dataIndex : 'tache',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '95%',
							colspan : 4,
							store : [['工业', '工业'], ['家用', '家用']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.tache.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',
							fieldLabel : '返工批号',
							allowBlank : false,
							ref : '../../batchNoStr',
							name : 'entity/batchNoStr',
							dataIndex : 'batchNoStr',
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">家用膜元件信息</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'datefield',
							ref : '../../jmDate',
							name : 'entity/jmDate',
							fieldLabel : '卷膜日期',
							dataIndex : 'jmDate',
							format : "Y-m-d",
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'dictcombobox',
							name : 'entity/prodClassFlag',
							hiddenName : 'entity/prodClassFlag',
							dataIndex : 'prodClassFlag',
							// allowBlank : false,
							fieldLabel : '干/湿',
							dictData : KS_PROD_CLASS_FLAG,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/tumoBatchStr',
							dataIndex : 'tumoBatchStr',
							fieldLabel : '膜批次',
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'combobox',
							name : 'tapColor',
							anchor : '95%',
							colspan : 6,
							hiddenName : 'entity/tapColor',
							dataIndex : 'tapColor',
							ref : '../../tapColor',
							fieldLabel : '胶带颜色',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['蓝色', '蓝色'], ['绿色', '绿色'],
												['白色', '白色'], ['黄色', '黄色'],
												['灰色', '灰色']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.tapColor.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'dictcombobox',
							name : 'label',
							hiddenName : 'entity/label',
							dataIndex : 'label',
							fieldLabel : '标签',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_LABEL
						}, {
							xtype : 'dictcombobox',
							name : 'bag',
							hiddenName : 'entity/bag',
							dataIndex : 'bag',
							fieldLabel : '包装袋',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_LABEL
						}, {
							xtype : 'dictcombobox',
							name : 'box',
							hiddenName : 'entity/box',
							dataIndex : 'box',
							fieldLabel : '包装箱',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_BOX
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">元件性能</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/gpdAvg',
							dataIndex : 'gpdAvg',
							fieldLabel : '平均产水量',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/saltAvg',
							dataIndex : 'saltAvg',
							fieldLabel : '平均脱盐率%',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'dictcheckboxgroup',
							allowBlank : false,
							columns : 6,
							ref : '../../myabnormal',
							dataIndex : 'abnormal',
							// hiddenName : 'abnormal',
							fieldLabel : '外观异常类型',
							anchor : '95%',
							colspan : 12,
							dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',
							name : 'entity/abnormalExplain',
							dataIndex : 'abnormalExplain',
							allowBlank : false,
							fieldLabel : '外观异常说明',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textarea',
							name : 'entity/abnormalOther',
							dataIndex : 'abnormalOther',
							fieldLabel : '其他异常备注',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							dataIndex : 'step'
						}, {
							xtype : 'hidden',
							name : 'entity/batchNoStr2',
							ref : '../../batchNoStr2'
						}, {
							xtype : 'hidden',
							ref : '../../abnormal',
							name : 'entity/abnormal'
						}, {
							xtype : 'hidden',
							name : 'entity/opt',
							value : 'modify'
						}]
			}]
		});
	}

	this.initSecondWindow = function() {
		var _this = this;
		this.secondWindow = this.secondWindow || new Ext.fn.FormWindow({
			title : '返工指令',
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
				loadUrl : 'com.keensen.ump.produce.component.applys.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.applys.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工指令</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '返工方法',
							allowBlank : false,
							ref : '../../reworkMethod',
							name : 'entity/reworkMethod',
							dataIndex : 'reworkMethod',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '处置方式',
							allowBlank : false,
							ref : '../../reworkDeal',
							name : 'entity/reworkDeal',
							dataIndex : 'reworkDeal',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'third'
						}]
			}]
		});
	}

	this.initThirdWindow = function() {
		var _this = this;
		this.thirdWindow = this.thirdWindow || new Ext.fn.FormWindow({
			title : '返工安排',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.component.applys.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.applys.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工安排</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'datefield',
							format : 'Y-m-d',
							fieldLabel : '返工开始日期',
							allowBlank : false,
							ref : '../../reworkStartDate',
							name : 'entity/reworkStartDate',
							dataIndex : 'reworkStartDate',
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '返工入库订单号',
							allowBlank : false,
							ref : '../../reworkOrderNo',
							name : 'entity/reworkOrderNo',
							dataIndex : 'reworkOrderNo',
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '返工工时(h)',
							allowBlank : false,
							ref : '../../reworkHours',
							name : 'entity/reworkHours',
							dataIndex : 'reworkHours',
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'datefield',
							fieldLabel : '要求入库日期',
							ref : '../../demandStockDate',
							name : 'entity/demandStockDate',
							dataIndex : 'demandStockDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'datefield',
							fieldLabel : '指令下达时间',
							ref : '../../releaseDate',
							name : 'entity/releaseDate',
							dataIndex : 'releaseDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'thirdhalf'
						}]
			}]
		});
	}

	this.initThirdHalfWindow = function() {
		var _this = this;
		this.thirdHalfWindow = this.thirdHalfWindow || new Ext.fn.FormWindow({
			title : '返工实施',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.component.applys.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.applys.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工实施</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							fieldLabel : '返工实施人',
							allowBlank : false,
							ref : '../../reworkExcuteUsers',
							name : 'entity/reworkExcuteUsers',
							dataIndex : 'reworkExcuteUsers',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'textfield',
							fieldLabel : '返工激励(元)',
							allowBlank : false,
							ref : '../../reworkIncentive',
							name : 'entity/reworkIncentive',
							dataIndex : 'reworkIncentive',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'dictcombobox',
							ref : '../../ifOntime',
							anchor : '90%',
							hiddenName : 'entity/ifOntime',
							dataIndex : 'ifOntime',
							allowBlank : false,
							fieldLabel : '是否按时完成',
							dictData : ABF_YESORNO,
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">材料消耗</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '卷膜白胶带(m)',
							// allowBlank : false,
							ref : '../../consumeTap',
							name : 'entity/consumeTap',
							dataIndex : 'consumeTap',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '卷膜网格胶带(m)',
							// allowBlank : false,
							ref : '../../consumeTap2',
							name : 'entity/consumeTap2',
							dataIndex : 'consumeTap2',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '元件标签(张)',
							// allowBlank : false,
							ref : '../../consumeLabel',
							name : 'entity/consumeLabel',
							dataIndex : 'consumeLabel',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '格栅端盖(个)',
							// allowBlank : false,
							ref : '../../consumeLid',
							name : 'entity/consumeLid',
							dataIndex : 'consumeLid',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '蜂窝端盖(个)',
							// allowBlank : false,
							ref : '../../consumeLid2',
							name : 'entity/consumeLid2',
							dataIndex : 'consumeLid2',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '玻纤纱(kg)',
							// allowBlank : false,
							ref : '../../consumeYarn',
							name : 'entity/consumeYarn',
							dataIndex : 'consumeYarn',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '环氧胶水(kg)',
							// allowBlank : false,
							ref : '../../consumeGlue',
							name : 'entity/consumeGlue',
							dataIndex : 'consumeGlue',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '包装袋(个)',
							// allowBlank : false,
							ref : '../../consumeBag',
							name : 'entity/consumeBag',
							dataIndex : 'consumeBag',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '包装箱(个)',
							// allowBlank : false,
							ref : '../../consumeBox',
							name : 'entity/consumeBox',
							dataIndex : 'consumeBox',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '唛头(张)',
							// allowBlank : false,
							ref : '../../consumeMark',
							name : 'entity/consumeMark',
							dataIndex : 'consumeMark',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '人工工时(h)',
							// allowBlank : false,
							ref : '../../consumeHours',
							name : 'entity/consumeHours',
							dataIndex : 'consumeHours',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'textarea',
							fieldLabel : '其他损失说明',
							// allowBlank : false,
							ref : '../../consumeLost',
							name : 'entity/consumeLost',
							dataIndex : 'consumeLost',
							anchor : '90%',
							colspan : 12
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'fourth'
						}]
			}]
		});
	}

	this.initFourthWindow = function() {
		var _this = this;
		this.fourthWindow = this.fourthWindow || new Ext.fn.FormWindow({
			title : '结果确认',
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
				loadUrl : 'com.keensen.ump.produce.component.applys.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.applys.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">结果确认</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							anchor : '85%',
							hiddenName : 'entity/ifOk',
							dataIndex : 'ifOk',
							allowBlank : false,
							fieldLabel : '返修后是否<br>符合入库标准',
							dictData : ABF_YESORNO
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'finish'
						}]
			}]
		});
	}

	this.initViewWindow = function() {

		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
			title : '查看',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'viewpanel',
				baseCls : "x-plain",
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.component.applys.expandRework.biz.ext',
				fields : [{
							xtype : 'datefield',
							fieldLabel : '发起日期',
							ref : '../../happenDate',
							name : 'entity/happenDate',
							dataIndex : 'happenDate',
							format : 'Y-m-d',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'combobox',
							fieldLabel : '发起部门',
							ref : '../../dept',
							hiddenName : 'entity/dept',
							dataIndex : 'dept',
							emptyText : '',
							readOnly : true,
							editable : false,
							anchor : '95%',
							colspan : 6,
							store : [['生产管理部', '生产管理部'], ['质量管理部', '质量管理部']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.dept.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'combobox',
							anchor : '95%',
							colspan : 4,
							name : 'condition/type',
							hiddenName : 'entity/type',
							dataIndex : 'type',
							readOnly : true,
							fieldLabel : '元件类型',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										fields : ['mykey', 'myvalue'],
										data : [['工业膜', '工业膜'], ['家用膜', '家用膜']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'prodspeccombobox',
							emptyText : "",
							hiddenName : 'entity/labelSpecId',
							ref : '../../labelSpecId',
							dataIndex : 'labelSpecId',
							readOnly : true,
							anchor : '95%',
							colspan : 4,
							fieldLabel : '元件标签型号',
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
							xtype : 'prodspeccombobox',
							emptyText : "",
							hiddenName : 'entity/prodSpecId',
							ref : '../../prodSpecId',
							dataIndex : 'prodSpecId',
							readOnly : true,
							anchor : '95%',
							colspan : 4,
							fieldLabel : '元件规格型号',
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
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '不良数量',
							readOnly : true,
							ref : '../../defectAmount',
							name : 'entity/defectAmount',
							dataIndex : 'defectAmount',
							minValue : 1,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'textfield',
							fieldLabel : '订单编号',
							readOnly : true,
							ref : '../../orderNo',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'combobox',
							fieldLabel : '发生工序',
							ref : '../../tache',
							hiddenName : 'entity/tache',
							dataIndex : 'tache',
							emptyText : '',
							readOnly : true,
							editable : false,
							anchor : '95%',
							colspan : 4,
							store : [['工业', '工业'], ['家用', '家用']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.tache.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',
							fieldLabel : '返工批号',
							readOnly : true,
							ref : '../../batchNoStr',
							name : 'entity/batchNoStr',
							dataIndex : 'batchNoStr',
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">家用膜元件信息</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'datefield',
							ref : '../../jmDate',
							readOnly : true,
							name : 'entity/jmDate',
							fieldLabel : '卷膜日期',
							dataIndex : 'jmDate',
							format : "Y-m-d",
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'dictcombobox',
							emptyText : "",
							name : 'entity/prodClassFlag',
							readOnly : true,
							hiddenName : 'entity/prodClassFlag',
							dataIndex : 'prodClassFlag',
							// allowBlank : false,
							fieldLabel : '干/湿',
							dictData : KS_PROD_CLASS_FLAG,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/tumoBatchStr',
							readOnly : true,
							dataIndex : 'tumoBatchStr',
							fieldLabel : '膜批次',
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'combobox',
							name : 'tapColor',
							anchor : '95%',
							colspan : 6,
							hiddenName : 'entity/tapColor',
							readOnly : true,
							dataIndex : 'tapColor',
							ref : '../../tapColor',
							fieldLabel : '胶带颜色',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['蓝色', '蓝色'], ['绿色', '绿色'],
												['白色', '白色'], ['黄色', '黄色'],
												['灰色', '灰色']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "",
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.tapColor.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'dictcombobox',
							emptyText : "",
							name : 'label',
							hiddenName : 'entity/label',
							readOnly : true,
							dataIndex : 'label',
							fieldLabel : '标签',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_LABEL
						}, {
							xtype : 'dictcombobox',
							emptyText : "",
							name : 'bag',
							hiddenName : 'entity/bag',
							readOnly : true,
							dataIndex : 'bag',
							fieldLabel : '包装袋',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_LABEL
						}, {
							xtype : 'dictcombobox',
							emptyText : "",
							name : 'box',
							hiddenName : 'entity/box',
							readOnly : true,
							dataIndex : 'box',
							fieldLabel : '包装箱',
							// allowBlank : false,
							anchor : '95%',
							colspan : 4,
							dictData : KS_COMPONENT_INDUSTRY_BOX
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">元件性能</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/gpdAvg',
							readOnly : true,
							dataIndex : 'gpdAvg',
							fieldLabel : '平均产水量',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/saltAvg',
							readOnly : true,
							dataIndex : 'saltAvg',
							fieldLabel : '平均脱盐率%',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'dictcheckboxgroup',
							emptyText : "",
							readOnly : true,
							columns : 6,
							ref : '../../myabnormal',
							dataIndex : 'abnormal',
							// hiddenName : 'abnormal',
							fieldLabel : '外观异常类型',
							anchor : '95%',
							colspan : 12,
							dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',
							name : 'entity/abnormalExplain',
							dataIndex : 'abnormalExplain',
							readOnly : true,
							fieldLabel : '外观异常说明',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textarea',
							name : 'entity/abnormalOther',
							dataIndex : 'abnormalOther',
							readOnly : true,
							fieldLabel : '其他异常备注',
							// allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工指令</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textarea',
							fieldLabel : '返工方法',
							readOnly : true,
							ref : '../../reworkMethod',
							name : 'entity/reworkMethod',
							dataIndex : 'reworkMethod',
							anchor : '90%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',
							fieldLabel : '处置方式',
							readOnly : true,
							ref : '../../reworkDeal',
							name : 'entity/reworkDeal',
							dataIndex : 'reworkDeal',
							anchor : '90%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工安排</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'datefield',
							format : 'Y-m-d',
							fieldLabel : '返工开始日期',
							readOnly : true,
							ref : '../../reworkStartDate',
							name : 'entity/reworkStartDate',
							dataIndex : 'reworkStartDate',
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '返工入库订单号',
							readOnly : true,
							ref : '../../reworkOrderNo',
							name : 'entity/reworkOrderNo',
							dataIndex : 'reworkOrderNo',
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '返工工时(h)',
							readOnly : true,
							ref : '../../reworkHours',
							name : 'entity/reworkHours',
							dataIndex : 'reworkHours',
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'datefield',
							fieldLabel : '要求入库日期',
							ref : '../../demandStockDate',
							name : 'entity/demandStockDate',
							dataIndex : 'demandStockDate',
							format : 'Y-m-d',
							readOnly : true,
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'datefield',
							fieldLabel : '指令下达时间',
							ref : '../../releaseDate',
							name : 'entity/releaseDate',
							dataIndex : 'releaseDate',
							format : 'Y-m-d',
							readOnly : true,
							anchor : '90%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工实施</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							fieldLabel : '返工实施人',
							readOnly : true,
							ref : '../../reworkExcuteUsers',
							name : 'entity/reworkExcuteUsers',
							dataIndex : 'reworkExcuteUsers',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'textfield',
							fieldLabel : '返工激励(元)',
							readOnly : true,
							ref : '../../reworkIncentive',
							name : 'entity/reworkIncentive',
							dataIndex : 'reworkIncentive',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'dictcombobox',
							ref : '../../ifOntime',
							anchor : '90%',
							hiddenName : 'entity/ifOntime',
							dataIndex : 'ifOntime',
							readOnly : true,
							fieldLabel : '是否按时完成',
							dictData : ABF_YESORNO,
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">材料消耗</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '卷膜白胶带(m)',
							readOnly : true,
							ref : '../../consumeTap',
							name : 'entity/consumeTap',
							dataIndex : 'consumeTap',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '卷膜网格胶带(m)',
							readOnly : true,
							ref : '../../consumeTap2',
							name : 'entity/consumeTap2',
							dataIndex : 'consumeTap2',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '元件标签(张)',
							readOnly : true,
							ref : '../../consumeLabel',
							name : 'entity/consumeLabel',
							dataIndex : 'consumeLabel',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '格栅端盖(个)',
							readOnly : true,
							ref : '../../consumeLid',
							name : 'entity/consumeLid',
							dataIndex : 'consumeLid',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '蜂窝端盖(个)',
							readOnly : true,
							ref : '../../consumeLid2',
							name : 'entity/consumeLid2',
							dataIndex : 'consumeLid2',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '玻纤纱(kg)',
							readOnly : true,
							ref : '../../consumeYarn',
							name : 'entity/consumeYarn',
							dataIndex : 'consumeYarn',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '环氧胶水(kg)',
							readOnly : true,
							ref : '../../consumeGlue',
							name : 'entity/consumeGlue',
							dataIndex : 'consumeGlue',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '包装袋(个)',
							readOnly : true,
							ref : '../../consumeBag',
							name : 'entity/consumeBag',
							dataIndex : 'consumeBag',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '包装箱(个)',
							readOnly : true,
							ref : '../../consumeBox',
							name : 'entity/consumeBox',
							dataIndex : 'consumeBox',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'numberfield',
							fieldLabel : '唛头(张)',
							readOnly : true,
							ref : '../../consumeMark',
							name : 'entity/consumeMark',
							dataIndex : 'consumeMark',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							fieldLabel : '人工工时(h)',
							readOnly : true,
							ref : '../../consumeHours',
							name : 'entity/consumeHours',
							dataIndex : 'consumeHours',
							anchor : '90%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 12
						}, {
							xtype : 'textarea',
							fieldLabel : '其他损失说明',
							readOnly : true,
							ref : '../../consumeLost',
							name : 'entity/consumeLost',
							dataIndex : 'consumeLost',
							anchor : '90%',
							colspan : 12
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">结果确认</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'dictcombobox',
							anchor : '85%',
							hiddenName : 'entity/ifOk',
							dataIndex : 'ifOk',
							readOnly : true,
							fieldLabel : '返修后是否<br>符合入库标准',
							dictData : ABF_YESORNO,
							colspan : 6
						}, {
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
	}
}