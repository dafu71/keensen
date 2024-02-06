com.keensen.ump.produce.diaphragm.make.zmxMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initChooseWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makezmxmgr',
					panels : [this.queryPanel, this.listPanel]
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
					title : '【铸膜线生产记录查询】',
					fields : [{
								xtype : 'dictcombobox',
								name : 'condition/dimoType',
								anchor : '90%',
								fieldLabel : '底膜类型',
								hiddenName : 'condition/dimoType',
								dictData : KS_DIMO_TYPE
							}, {
								xtype : 'dictcombobox',
								name : 'condition/line',
								anchor : '90%',
								fieldLabel : '生产线别',
								hiddenName : 'condition/line',
								dictData : KS_ZM_LINE
							}, {
								xtype : "dateregion",
								anchor : '100%',
								colspan : 1,
								nameArray : ['condition/productDtStart',
										'condition/productDtEnd'],
								fieldLabel : "生产日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								anchor : '90%',
								name : 'condition/dimoBatchNo2',
								fieldLabel : '底膜批号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								anchor : '90%',
								name : 'condition/wfBatchNo2',
								fieldLabel : '无纺布批号'
							}, {
								xtype : 'textfield',
								anchor : '90%',
								name : 'condition/zmyBatchNo2',
								fieldLabel : '铸膜液批号'
							}, {
								xtype : 'supcombobox',
								hiddenName : 'condition/supId',
								anchor : '90%',
								fieldLabel : '无纺布供应商'
							}, {
								xtype : 'textfield',
								anchor : '90%',
								name : 'condition/createName',
								fieldLabel : '填报人'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'teamcombobox',
								name : 'condition/teamId',
								fieldLabel : '生产班组',
								hiddenName : 'condition/teamId',
								anchor : '90%',
								colspan : 1
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
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
			title : '【铸膜线生产记录列表】',
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
						text : '打印标签',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrint
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'dimoType',
						header : '底膜类型'
					}, {
						dataIndex : 'line',
						header : '生产线别'
					}, {
						dataIndex : 'productDt',
						header : '生产日期'
					}, {
						dataIndex : 'dimoBatchNo',
						header : '底膜批号',
						renderer : function(v, m, r, i) {
							var cnt = r.get('cnt');
							var dimoBatchNo = r.get('dimoBatchNo');
							if (cnt > 1) {
								return "<span style='color:red'>" + dimoBatchNo
										+ "</span>";

							} else {
								return dimoBatchNo;
							}
						}
					}, {
						dataIndex : 'supName',
						header : '无纺布（供应商）'
					}, {
						dataIndex : 'wfBatchNo',
						header : '无纺布批号'
					}, {
						dataIndex : 'zmyBatchNo',
						header : '铸膜液批号'
					}, {
						dataIndex : 'theoryAmount',
						header : '理论投入数'
					}, {
						dataIndex : 'dimoAmount',
						header : '底膜实际长度'
					}, {
						dataIndex : 'lose0',
						header : '无纺布取样'
					}, {
						dataIndex : 'lose1',
						header : '拼接固损'
					}, {
						dataIndex : 'lose2',
						header : '底膜取样'
					}, {
						dataIndex : 'lose3',
						header : '工艺取样'
					}, {
						dataIndex : 'lose4',
						header : '无纺布来料不良'
					}, {
						dataIndex : 'lose5',
						header : '设备故障报废'
					}, {
						dataIndex : 'lose6',
						header : '铸膜不良（已扯）'
					}, {
						dataIndex : 'lose7',
						header : '扯掉（打折/开头末尾刮痕）'
					}, {
						dataIndex : 'flaw0',
						header : '浅刮痕'
					}, {
						dataIndex : 'flaw1',
						header : '深刮痕'
					}, {
						dataIndex : 'flaw2',
						header : '铸膜不良'
					}, {
						dataIndex : 'abnormal',
						header : '铸膜异常记录'
					}, {
						dataIndex : 'teamName',
						header : '生产班组'
					}, {
						dataIndex : 'beforeAmount',
						header : '换班前数量'
					}, {
						dataIndex : 'curAmount',
						header : '本班数量'
					}/*
						 * , { dataIndex : 'totalAmount', header : '当班总计生产数量' }
						 */, {
						dataIndex : 'createName',
						header : '填报人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.make.queryZmxByPage.biz.ext',
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
							name : 'dimoType'
						}, {
							name : 'line'
						}, {
							name : 'productDt'
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'supName'
						}, {
							name : 'supId'
						}, {
							name : 'wfBatchNo'
						}, {
							name : 'zmyBatchNo'
						}, {
							name : 'theoryAmount'
						}, {
							name : 'lose0'
						}, {
							name : 'lose1'
						}, {
							name : 'lose2'
						}, {
							name : 'lose3'
						}, {
							name : 'lose4'
						}, {
							name : 'lose5'
						}, {
							name : 'lose6'
						}, {
							name : 'lose7'
						}, {
							name : 'flaw0'
						}, {
							name : 'flaw1'
						}, {
							name : 'flaw2'
						}, {
							name : 'teamId'
						}, {
							name : 'teamName'
						}, {
							name : 'beforeAmount'
						}, {
							name : 'curAmount'
						}, {
							name : 'totalAmount'
						}, {
							name : 'dimoAmount'
						}, {
							name : 'cnt'
						}, {
							name : 'abnormal'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;

		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增铸膜线生产记录',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Zmx.biz.ext',
				fields : [{
					xtype : 'dictcombobox',
					name : 'psf',
					allowBlank : false,
					fieldLabel : '聚砜选项',
					hiddenName : 'psf',
					dictData : KS_PSF,
					anchor : '47%',
					colspan : 2,
					listeners : {
						scope : this,
						select : function(combo, record) {
							var v = this.createDimoBatchNo();
							if (!Ext.isEmpty(v)) {
								_this.inputWindow.items.items[0].form
										.findField('entity/dimoBatchNo')
										.setValue(v);
							}
						}
					}
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'dictcombobox',
					name : 'entity/dimoType',
					allowBlank : false,
					fieldLabel : '底膜类型',
					hiddenName : 'entity/dimoType',
					dictData : KS_DIMO_TYPE,
					anchor : '95%',
					colspan : 1,
					listeners : {
						scope : this,
						select : function(combo, record) {
							var v = this.createDimoBatchNo();
							if (!Ext.isEmpty(v)) {
								_this.inputWindow.items.items[0].form
										.findField('entity/dimoBatchNo')
										.setValue(v);
							}
						}
					}
				}, {
					xtype : 'dictcombobox',
					name : 'entity/line',
					allowBlank : false,
					fieldLabel : '生产线别',
					hiddenName : 'entity/line',
					dictData : KS_ZM_LINE,
					anchor : '95%',
					colspan : 1,
					listeners : {
						scope : this,
						select : function(combo, record) {
							var v = this.createDimoBatchNo();
							if (!Ext.isEmpty(v)) {
								_this.inputWindow.items.items[0].form
										.findField('entity/dimoBatchNo')
										.setValue(v);
							}
						}
					}
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'datefield',
					name : 'entity/productDt',
					format : "Y-m-d",
					allowBlank : false,
					fieldLabel : '生产日期',
					value : new Date(),
					anchor : '95%',
					colspan : 1,
					listeners : {
						scope : this,
						select : function(combo, record) {
							var v = this.createDimoBatchNo();
							if (!Ext.isEmpty(v)) {
								_this.inputWindow.items.items[0].form
										.findField('entity/dimoBatchNo')
										.setValue(v);
							}
						}
					}
				}, {
					xtype : 'textfield',
					name : 'entity/dimoBatchNo',
					allowBlank : false,
					fieldLabel : '底膜批号',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					value : '<p style="color:red;">供应商信息</p>',
					colspan : 2
				}, {
					xtype : 'supcombobox',
					hiddenName : 'entity/supId',
					anchor : '95%',
					fieldLabel : '无纺布供应商',
					listeners : {
						select : function(combo, record) {
							var obj = _this.inputWindow.items.items[0].form
									.findField('entity/theoryAmount');
							if (record.get('id') == '300022') {
								obj.setValue(2000);
							} else if (record.get('id') == '300020') {
								obj.setValue(2100);
							} else if (record.get('id') == '300021') {
								obj.setValue(2200);
							} else {
								obj.setValue('');
							}
						}
					}
				}, {
					xtype : 'textfield',
					name : 'entity/wfBatchNo',
					fieldLabel : '无纺布批号',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					value : '<p style="color:red;">铸膜信息</p>',
					colspan : 2
				}, {
					xtype : 'trigger',
					name : 'entity/zmyBatchNo',
					fieldLabel : '铸膜液批号',
					anchor : '95%',
					colspan : 1,
					editable : true,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onChooseWindowShow(_this);
					}
				}, {
					xtype : 'numberfield',
					name : 'entity/theoryAmount',
					fieldLabel : '理论投入数',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					value : '<p style="color:red;">铸膜明细（米）</p>',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'entity/lose0',
					fieldLabel : '无纺布取样',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'numberfield',
					name : 'entity/lose1',
					fieldLabel : '拼接固损',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'entity/lose2',
					fieldLabel : '底膜取样',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'numberfield',
					name : 'entity/lose3',
					fieldLabel : '工艺取样',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'entity/lose4',
					fieldLabel : '无纺布来料不良',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'numberfield',
					name : 'entity/lose5',
					fieldLabel : '设备故障报废',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'entity/lose6',
					fieldLabel : '铸膜不良（已扯）',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'numberfield',
					name : 'entity/lose7',
					fieldLabel : '扯掉（打折/开头末尾刮痕）',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'entity/flaw0',
					fieldLabel : '浅刮痕',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'numberfield',
					name : 'entity/flaw1',
					fieldLabel : '深刮痕',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'entity/flaw2',
					fieldLabel : '铸膜不良',
					anchor : '47%',
					colspan : 2
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textarea',
					name : 'entity/abnormal',
					fieldLabel : '铸膜异常记录',
					anchor : '95%',
					colspan : 2
				}, {
					xtype : 'displayfield',
					value : '<p style="color:red;">生产信息</p>',
					colspan : 2
				}, {
					xtype : 'teamcombobox',
					name : 'entity/teamId',
					fieldLabel : '生产班组',
					hiddenName : 'entity/teamId',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'numberfield',
					name : 'entity/pumpSpeed',
					fieldLabel : '底膜泵速',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'entity/beforeAmount',
					fieldLabel : '换班前数量',
					anchor : '95%',
					colspan : 1
				}, {
					xtype : 'numberfield',
					name : 'entity/curAmount',
					fieldLabel : '本班数量',
					anchor : '95%',
					colspan : 1
				}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改铸膜线生产记录',
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
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.make.expandZmxEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Zmx.biz.ext',
				fields : [{
							xtype : 'dictcombobox',
							name : 'entity/dimoType',
							dataIndex : 'dimoType',
							allowBlank : false,
							fieldLabel : '底膜类型',
							readOnly : true,
							hiddenName : 'entity/dimoType',
							dictData : KS_DIMO_TYPE,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							name : 'entity/line',
							dataIndex : 'line',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '生产线别',
							hiddenName : 'entity/line',
							dictData : KS_ZM_LINE,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/productDt',
							dataIndex : 'productDt',
							allowBlank : false,
							readOnly : true,
							format : "Y-m-d",
							fieldLabel : '生产日期',
							// value : new Date(),
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/dimoBatchNo',
							dataIndex : 'dimoBatchNo',
							allowBlank : false,
							fieldLabel : '底膜批号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">供应商信息</p>',
							colspan : 2
						}, {
							xtype : 'supcombobox',
							hiddenName : 'entity/supId',
							dataIndex : 'supId',
							anchor : '95%',
							fieldLabel : '无纺布供应商',
							listeners : {
								select : function(combo, record) {
									var obj = _this.editWindow.items.items[0].form
											.findField('entity/theoryAmount');
									if (record.get('id') == '300022') {
										obj.setValue(2000);
									} else if (record.get('id') == '300020') {
										obj.setValue(2100);
									} else if (record.get('id') == '300021') {
										obj.setValue(2200);
									} else {
										obj.setValue('');
									}
								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/wfBatchNo',
							fieldLabel : '无纺布批号',
							dataIndex : 'wfBatchNo',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">铸膜信息</p>',
							colspan : 2
						}, {
							xtype : 'trigger',
							name : 'entity/zmyBatchNo',
							dataIndex : 'zmyBatchNo',
							fieldLabel : '铸膜液批号',
							anchor : '95%',
							colspan : 1,
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {

								_this.onChooseWindowShow(_this);
							}
						}, {
							xtype : 'numberfield',
							name : 'entity/theoryAmount',
							dataIndex : 'theoryAmount',
							fieldLabel : '理论投入数',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">铸膜明细（米）</p>',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/lose0',
							dataIndex : 'lose0',
							fieldLabel : '无纺布取样',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/lose1',
							dataIndex : 'lose1',
							fieldLabel : '拼接固损',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/lose2',
							dataIndex : 'lose2',
							fieldLabel : '底膜取样',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/lose3',
							dataIndex : 'lose3',
							fieldLabel : '工艺取样',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/lose4',
							dataIndex : 'lose4',
							fieldLabel : '无纺布来料不良',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/lose5',
							dataIndex : 'lose5',
							fieldLabel : '设备故障报废',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/lose6',
							dataIndex : 'lose6',
							fieldLabel : '铸膜不良（已扯）',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/lose7',
							dataIndex : 'lose7',
							fieldLabel : '扯掉（打折/开头末尾刮痕）',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/flaw0',
							dataIndex : 'flaw0',
							fieldLabel : '浅刮痕',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/flaw1',
							dataIndex : 'flaw1',
							fieldLabel : '深刮痕',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/flaw2',
							dataIndex : 'flaw2',
							fieldLabel : '铸膜不良',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/abnormal',
							dataIndex : 'abnormal',
							fieldLabel : '铸膜异常记录',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">生产信息</p>',
							colspan : 2
						}, {
							xtype : 'teamcombobox',
							name : 'entity/teamId',
							dataIndex : 'teamId',
							fieldLabel : '生产班组',
							hiddenName : 'entity/teamId',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/pumpSpeed',
							dataIndex : 'pumpSpeed',
							fieldLabel : '底膜泵速',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/beforeAmount',
							dataIndex : 'beforeAmount',
							fieldLabel : '换班前数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/curAmount',
							dataIndex : 'curAmount',
							fieldLabel : '本班数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/dimoBatchNo2',
							dataIndex : 'dimoBatchNo2'
						}]
			}]
		});
	}

	this.initChooseWindow = function() {

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【铸膜混料记录列表】',
			region : 'center',
			hsPage : true,
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
						header : '混料批次'
					}, {
						dataIndex : 'c11',
						header : 'C11重量'
					}, {
						dataIndex : 'c12',
						header : 'C12重量'
					}, {
						dataIndex : 'fixStarttime',
						header : '混料开始时间'
					}, {
						dataIndex : 'hottime',
						header : '开始加热时间'
					}, {
						dataIndex : 'reachtime',
						header : '料液达到70℃时间'
					}, {
						dataIndex : 'keepDuration',
						header : '保持70-80℃时长'
					}, {
						dataIndex : 'fixUsername',
						header : '混料人'
					}, {
						dataIndex : 'hitStarttime',
						header : '打料开始时间'
					}, {
						dataIndex : 'hitOvertime',
						header : '打料结束时间'
					}, {
						dataIndex : 'loopStarttime',
						header : '内循环开始时间'
					}, {
						dataIndex : 'loopOvertime',
						header : '内循环结束时间'
					}, {
						dataIndex : 'jarNo',
						header : '脱气罐编号'
					}, {
						dataIndex : 'jarVacuum',
						header : '脱气罐 真空度'
					}, {
						dataIndex : 'vacuumDuration',
						header : '真空保持时长'
					}, {
						dataIndex : 'usetime',
						header : '料液使用时间'
					}, {
						dataIndex : 'hitUsername',
						header : '打料人'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.make.queryFixByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
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
							name : 'batchNo'
						}, {
							name : 'c11'
						}, {
							name : 'c12'
						}, {
							name : 'fixStarttime'
						}, {
							name : 'hottime'
						}, {
							name : 'reachtime'
						}, {
							name : 'keepDuration'
						}, {
							name : 'fixUserid'
						}, {
							name : 'hitStarttime'
						}, {
							name : 'hitOvertime'
						}, {
							name : 'loopStarttime'
						}, {
							name : 'loopOvertime'
						}, {
							name : 'jarNo'
						}, {
							name : 'jarVacuum'
						}, {
							name : 'vacuumDuration'
						}, {
							name : 'usetime'
						}, {
							name : 'hitUserid'
						}, {
							name : 'remark'
						}, {
							name : 'fixUsername'
						}, {
							name : 'hitUsername'
						}, {
							name : 'diff'
						}]
			})
		})

		this.queryPanel2 = this.queryPanel2 || new Ext.fn.QueryPanel({
					height : 150,
					columns : 2,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					title : '【铸膜混料记录查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo2',
								anchor : '85%',
								fieldLabel : '混料批次'
							}, {
								xtype : 'textfield',
								name : 'condition/fixUsername',
								anchor : '85%',
								fieldLabel : '混料人'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'textfield',
								name : 'condition/hitUsername',
								anchor : '85%',
								fieldLabel : '打料人'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '85%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "记录日期",
								format : "Y-m-d"
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
					title : '选择铸膜混料批次',
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
}