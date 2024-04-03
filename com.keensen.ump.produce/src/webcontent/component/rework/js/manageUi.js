com.keensen.ump.produce.component.reworkMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initChooseWindow();

		this.initInputWindow();
		this.initEditWindow();
		this.initSecondWindow();
		this.initThirdWindow();
		this.initFourthWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentreworkmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								anchor : '85%',
								fieldLabel : '编号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '85%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								anchor : '85%',
								fieldLabel : '元件型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '85%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "发起日期",
								format : "Y-m-d"
							}, {

								xtype : 'combobox',
								fieldLabel : '当前环节',
								ref : '../step',
								hiddenName : 'condition/step',
								emptyText : '--请选择--',
								allowBlank : true,
								editable : false,
								anchor : '85%',
								store : [['second', '返工指令'], ['third', '返工安排'],
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
						text : '结果确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onFourth
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : '打印',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrint
					}, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.neworder.deleteRework.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '文件编号'
					}, {
						dataIndex : 'happenDate',
						header : '日期'
					}, {
						dataIndex : 'tache',
						header : '发生工序'
					}, {
						dataIndex : 'describe',
						header : '不良现象'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'materSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'defectType',
						xtype : 'dictcolumn',
						dictData : KS_COMPONENT_REWORK_DEFECT,
						header : '不良类型'
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
				url : 'com.keensen.ump.produce.component.neworder.queryReworkByPage.biz.ext',
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
						}]
			})
		})
	}

	this.initChooseWindow = function() {

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			region : 'center',
			hsPage : false,
			viewConfig : {
				forceFit : true
			},
			selModel : selModel2,
			tbar : [{
						text : '选择',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onChoose
					}],
			delUrl : 'com.keensen.ump.produce.diaphragm.make.make.deleteFixEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'batchNo',
						header : '元件批号'
					}, {
						dataIndex : 'materSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'produceDt',
						header : '生产日期'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryBatchNo.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'batchNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'materSpecName'
						}, {
							name : 'materSpecId'
						}]
			})
		})

		this.queryPanel2 = this.queryPanel2 || new Ext.fn.QueryPanel({
					height : 70,
					columns : 2,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								ref : '../orderNo',
								name : 'condition/orderNo',
								anchor : '85%',
								fieldLabel : '订单编号'
							}, {
								xtype : 'textfield',
								ref : '../materSpecName',
								name : 'condition/materSpecName',
								anchor : '85%',
								fieldLabel : '元件型号'
							}]
				});
		this.queryPanel2.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseWindow.hide();
					}

				});

		this.chooseWindow = this.chooseWindow || new Ext.Window({
					title : '选择元件批次',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 820,
					height : 600,
					layout : 'border',
					items : [this.queryPanel2, this.listPanel2]

				});
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
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.neworder.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">不良现象</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'datefield',
							fieldLabel : '日期',
							ref : '../../happenDate',
							name : 'entity/happenDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'combobox',
							fieldLabel : '发生工序',
							ref : '../../tache',
							hiddenName : 'entity/tache',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
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
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '不良现象',
							allowBlank : false,
							ref : '../../describe',
							name : 'entity/describe',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							fieldLabel : '订单编号',
							allowBlank : false,
							ref : '../../orderNo',
							name : 'entity/orderNo',
							anchor : '85%',
							colspan : 1,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChooseWindowShow(_this);
							}
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							ref : '../../prodSpecId',
							allowBlank : false,
							anchor : '85%',
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
							value : '<p style="color:red;">输入订单编号，单击按钮查询膜片批次</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : 20,
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							name : 'entity/defectType',
							anchor : '85%',
							hiddenName : 'entity/defectType',
							allowBlank : false,
							fieldLabel : '不良类型',
							dictData : KS_COMPONENT_REWORK_DEFECT
						}, {
							xtype : 'numberfield',
							fieldLabel : '不良数量',
							allowBlank : false,
							ref : '../../defectAmount',
							name : 'entity/defectAmount',
							minValue : 1,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '返工批号',
							allowBlank : false,
							ref : '../../batchNoStr',
							name : 'entity/batchNoStr',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'second'
						}]
			}]
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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">不良现象</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'datefield',
							fieldLabel : '日期',
							ref : '../../happenDate',
							name : 'entity/happenDate',
							dataIndex : 'happenDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'combobox',
							fieldLabel : '发生工序',
							ref : '../../tache',
							hiddenName : 'entity/tache',
							dataIndex : 'tache',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							store : [['工业', '工业'], ['家用', '家用']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.tache.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '不良现象',
							allowBlank : false,
							ref : '../../describe',
							name : 'entity/describe',
							dataIndex : 'describe',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							fieldLabel : '订单编号',
							allowBlank : false,
							ref : '../../orderNo',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 1,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChooseWindowShow(_this);
							}
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							ref : '../../prodSpecId',
							allowBlank : false,
							anchor : '85%',
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
							value : '<p style="color:red;">输入订单编号，单击按钮查询膜片批次</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : 20,
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							name : 'entity/defectType',
							anchor : '85%',
							hiddenName : 'entity/defectType',
							dataIndex : 'defectType',
							allowBlank : false,
							fieldLabel : '不良类型',
							dictData : KS_COMPONENT_REWORK_DEFECT
						}, {
							xtype : 'numberfield',
							fieldLabel : '不良数量',
							allowBlank : false,
							ref : '../../defectAmount',
							name : 'entity/defectAmount',
							dataIndex : 'defectAmount',
							minValue : 1,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '返工批号',
							allowBlank : false,
							ref : '../../batchNoStr',
							name : 'entity/batchNoStr',
							dataIndex : 'batchNoStr',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'second'
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
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.saveRework.biz.ext',
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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工安排</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '返工负责人',
							allowBlank : false,
							ref : '../../reworkResponse',
							name : 'entity/reworkResponse',
							dataIndex : 'reworkResponse',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '返工激励（元）',
							allowBlank : false,
							ref : '../../reworkIncentive',
							name : 'entity/reworkIncentive',
							dataIndex : 'reworkIncentive',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							fieldLabel : '计划完成日期',
							ref : '../../planFinishDate',
							name : 'entity/planFinishDate',
							dataIndex : 'planFinishDate',
							format : 'Y-m-d',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '返工入库订单号',
							allowBlank : false,
							ref : '../../reworkOrderNo',
							name : 'entity/reworkOrderNo',
							dataIndex : 'reworkOrderNo',
							anchor : '90%',
							colspan : 1
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
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandRework.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.saveRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">结果确认</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							ref : '../../ifOntime',
							anchor : '85%',
							hiddenName : 'entity/ifOntime',
							dataIndex : 'ifOntime',
							allowBlank : false,
							fieldLabel : '是否按时完成',
							dictData : ABF_YESORNO
						}, {
							xtype : 'dictcombobox',
							anchor : '85%',
							hiddenName : 'entity/ifOk',
							dataIndex : 'ifOk',
							allowBlank : false,
							fieldLabel : '返修后是否<br>符合标准',
							dictData : ABF_YESORNO
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '延时完成说明',
							allowBlank : true,
							ref : '../../notOntime',
							name : 'entity/notOntime',
							dataIndex : 'notOntime',
							anchor : '90%',
							colspan : 2
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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandRework.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">不良现象</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'datefield',
							fieldLabel : '日期',
							ref : '../../happenDate',
							name : 'entity/happenDate',
							dataIndex : 'happenDate',
							format : 'Y-m-d',
							readOnly : true,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'combobox',
							fieldLabel : '发生工序',
							ref : '../../tache',
							hiddenName : 'entity/tache',
							dataIndex : 'tache',
							emptyText : '--请选择--',
							readOnly : true,
							editable : false,
							anchor : '85%',
							store : [['工业', '工业'], ['家用', '家用']]
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '不良现象',
							readOnly : true,
							ref : '../../describe',
							name : 'entity/describe',
							dataIndex : 'describe',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '订单编号',
							readOnly : true,
							ref : '../../orderNo',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							ref : '../../prodSpecId',
							readOnly : true,
							anchor : '85%',
							fieldLabel : '元件型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : ''
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'entity/defectType',
							anchor : '85%',
							hiddenName : 'entity/defectType',
							dataIndex : 'defectType',
							readOnly : true,
							fieldLabel : '不良类型',
							dictData : KS_COMPONENT_REWORK_DEFECT
						}, {
							xtype : 'numberfield',
							fieldLabel : '不良数量',
							readOnly : true,
							ref : '../../defectAmount',
							name : 'entity/defectAmount',
							dataIndex : 'defectAmount',
							minValue : 1,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '返工批号',
							readOnly : true,
							ref : '../../batchNoStr',
							name : 'entity/batchNoStr',
							dataIndex : 'batchNoStr',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工指令</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '返工方法',
							readOnly : true,
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
							readOnly : true,
							ref : '../../reworkDeal',
							name : 'entity/reworkDeal',
							dataIndex : 'reworkDeal',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">返工安排</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'textfield',
							fieldLabel : '返工负责人',
							readOnly : true,
							ref : '../../reworkResponse',
							name : 'entity/reworkResponse',
							dataIndex : 'reworkResponse',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '返工激励（元）',
							readOnly : true,
							ref : '../../reworkIncentive',
							name : 'entity/reworkIncentive',
							dataIndex : 'reworkIncentive',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							fieldLabel : '计划完成日期',
							ref : '../../planFinishDate',
							name : 'entity/planFinishDate',
							dataIndex : 'planFinishDate',
							format : 'Y-m-d',
							readOnly : true,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '返工入库订单号',
							readOnly : true,
							ref : '../../reworkOrderNo',
							name : 'entity/reworkOrderNo',
							dataIndex : 'reworkOrderNo',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">结果确认</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							ref : '../../ifOntime',
							anchor : '85%',
							hiddenName : 'entity/ifOntime',
							dataIndex : 'ifOntime',
							readOnly : true,
							fieldLabel : '是否按时完成',
							dictData : ABF_YESORNO
						}, {
							xtype : 'dictcombobox',
							anchor : '85%',
							hiddenName : 'entity/ifOk',
							dataIndex : 'ifOk',
							readOnly : true,
							fieldLabel : '返修后是否<br>符合标准',
							dictData : ABF_YESORNO
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '延时完成说明',
							readOnly : true,
							ref : '../../notOntime',
							name : 'entity/notOntime',
							dataIndex : 'notOntime',
							anchor : '90%',
							colspan : 2
						}, {
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
	}
}