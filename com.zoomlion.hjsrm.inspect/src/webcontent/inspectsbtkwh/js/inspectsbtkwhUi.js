/*
 * 刘鑫--三包不合格品退库记录表维护
 */
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr = function() {

	this.initPanel = function() {
		this.initWggzxtstore();
		this.initWggzjgstore();
		this.initStorematnr();
		this.initStorelifnr();
		this.initStoreqjlx();
		this.initStorewtsx();
		this.initStorewtsxa();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initQueryWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'inspectsbtkwhMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.selectlifnrWin = new com.zoomlion.hjsrm.selectlifnrWindow({});
	this.selectlifnreditWin = new com.zoomlion.hjsrm.selectlifnrWindow({});
	this.initStorematnr = function() {
		this.storematnr = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystorematnrgzxt.biz.ext',
			root : 'data',
			fields : [{
						name : 'matnr'
					}, {
						name : 'maktx'
					}, {
						name : 'gzxt'
					}, {
						name : 'gzjg'
					}]
		})
	}
	this.initStorelifnr = function() {
		this.storelifnr = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystorelifnr.biz.ext',
			root : 'data',
			fields : [{
						name : 'lifnr'
					}, {
						name : 'name1'
					}]
		})
	}
	this.initStoreqjlx = function() {
		this.storeqjlx = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystoreqjlx.biz.ext',
			root : 'data',
			fields : [{
						name : 'sid'
					}, {
						name : 'sname'
					}]
		})
	}

	this.initStorewtsx = function() {
		this.storewtsx = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystoregzxspx.biz.ext',
			root : 'data',
			fields : [{
						name : 'sid'
					}, {
						name : 'fid'
					}, {
						name : 'fname'
					}]
		})
	}
	this.initStorewtsxa = function() {
		this.storewtsxa = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystorewtsx.biz.ext',
			root : 'data',
			fields : [{
						name : 'sid'
					}, {
						name : 'fid'
					}, {
						name : 'fname'
					}]
		})
	}
	this.initWggzxtstore = function() {
		this.wggzxtstore = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querywggzxtstore.biz.ext',
			root : 'data',
			fields : [{
						name : 'sid'
					}, {
						name : 'sname'
					}]
		})
	}
	this.initWggzjgstore = function() {
		this.wggzjgstore = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querywggzjgstore.biz.ext',
			root : 'data',
			fields : [{
						name : 'sid'
					}, {
						name : 'sname'
					}]
		})
	}
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 190,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 三包退库记录查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/tkdh',
								fieldLabel : '退库单号'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								fieldLabel : '供应商'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								fieldLabel : '供应商名称'
							}, {
								xtype : 'jjycombobox',
								name : 'condition/jyy',
								dataIndex : 'condition/jyy',
								hiddenName : 'condition/jyy',
								fieldLabel : '鉴定员'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/clyj',
								dataIndex : 'condition/clyj',
								hiddenName : 'condition/clyj',
								fieldLabel : '处理意见',
								emptyText : '',
								dictData : GE_INSPECT_CLYJ
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/jystartdate',
										'condition/jyendate'],
								fieldLabel : "检验日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}, {
								xtype : 'textarea',
								height : '50',
								ref : "../matnr2",
								name : 'condition/matnr2',
								fieldLabel : '物料编码'
							}, {
								xtype : 'hidden',
								ref : "../matnr",
								name : 'condition/matnr'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 三包退库记录列表 】',
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						rescode : '00565',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						rescode : '00565',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						rescode : '00565',
						handler : this.onDel
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_lightning',
						rescode : '00566',
						handler : this.onQuery
					}, '-', {
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						rescode : '00566',
						handler : this.onExcel
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.inspect.inspectlljywh.delinspectsbtknote.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂',
						width : 60
					}, {
						dataIndex : 'sbtkno',
						header : '三包退库流水号'
					}, {
						dataIndex : 'tkdh',
						header : '退库单号'
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width : 150
					}, {
						dataIndex : 'maktx',
						header : '物料描述',
						width : 250
					}, {
						dataIndex : 'lifnr',
						header : '供应商编号'
					}, {
						dataIndex : 'name1',
						header : '供应商名称',
						width : 150
					}, {
						dataIndex : 'jyrq',
						header : '检验日期'
					}, {
						dataIndex : 'tksl',
						header : '退库数量'
					}, {
						dataIndex : 'gzxtname',
						header : '故障系统'
					}, {
						dataIndex : 'gzjgname',
						header : '故障结构'
					}, {
						dataIndex : 'gzxsname',
						header : '故障形式'
					}, {
						dataIndex : 'clyj',
						header : '处理意见'
					}, {
						dataIndex : 'jyy',
						header : '鉴定员工号'
					}, {
						dataIndex : 'jyyname',
						header : '鉴定员姓名'
					}, {
						dataIndex : 'tkyy',
						header : '退库原因及描述'
					}, {
						dataIndex : 'zatwrt',
						header : '出厂编号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.queryinspectsbtkwh.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
						}, {
							name : 'sbtkno'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'tkdh'
						}, {
							name : 'tksl'
						}, {
							name : 'tkyy'
						}, {
							name : 'clyj'
						}, {
							name : 'jyy'
						}, {
							name : 'jyyname'
						}, {
							name : 'jyrq'
						}, {
							name : 'gzxt'
						}, {
							name : 'gzxtname'
						}, {
							name : 'gzjg'
						}, {
							name : 'gzjgname'
						}, {
							name : 'gzxs'
						}, {
							name : 'gzxsname'
						}, {
							name : 'zatwrt'
						}]
			})
		});
	}
	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增三包退库记录',
			height : 280,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 6,
				saveUrl : '...',
				fields : [{
							xtype : 'factorycombobox',
							defaultValue : '3000',
							hiddenName : 'werks',
							ref:'../werks',
							allowBlank : false,
							fieldLabel : '工厂',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'tkdh',
							ref:'../tkdh',
							allowBlank : false,
							colspan : 2,
							fieldLabel : '退库单号'
						},{
							xtype : 'textfield',
							name : 'zatwrt',
							ref : '../zatwrt',
							//allowBlank : false,
							colspan : 2,
							fieldLabel : '出厂编号'
						},  {
							xtype : 'matnrallCombo',
							allowBlank : false,
							name : 'matnr',
							ref : '../matnr',
							colspan : 2,
							scope : this,
							fieldLabel : '物料编码',
							listeners : {
								'valid' : function(o, newValue, oldValue) {
									_this.storematnr.load({
										params : {
											"condition/matnr" : _this.inputWindow.items.items[0].matnr
													.getValue()
										}
									});
								}
							}
						}, {
							xtype : 'textfield',
							name : 'maktx',
							ref : '../maktx',
							colspan : 4,
							readOnly : true,
							fieldLabel : '物料描述'
						}, {
							xtype : 'combobox',
							name : 'lifnr',
							ref : '../lifnr',
							colspan : 3,
							fieldLabel : '供应商',
							triggerAction : "all",
							listeners : {
								scope : this,
								'focus' : function() {
									var B = _this.inputWindow.items.items[0].matnr
											.getValue()
									if (Ext.isEmpty(B)) {
										return false;
									} else {
										_this.storelifnr.load({
													params : {
														"condition/matnr" : B
													}
												});
									}
								},
								'select' : function(a, b, c) {
									_this.inputWindow.items.items[0].lifnrx
											.setValue(b.get('lifnr'));
								}
							},
							store : this.storelifnr,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "name1",
							valueField : "lifnr",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'button',
							anchor : '40%',
							colspan : 1,
							scope : this,
							text : '选择',
							iconCls : "icon-application_form_magnify",
							handler : this.chooselifnr
						}, {
							xtype : 'textfield',
							name : 'lifnrx',
							ref : '../lifnrx',
							fieldLabel : '隐藏供应商',
							hidden : true
						}, {
							xtype : 'numberfield',
							name : 'tksl',
							ref : '../tksl',
							allowBlank : false,
							colspan : 2,
							fieldLabel : '数量'
						}, {
							xtype : 'combobox',
							name : 'gzxt',
							ref : '../gzxt',
							colspan : 2,
							fieldLabel : '故障系统',
							triggerAction : "all",
							listeners : {
								scope : this,
								'change' : function() {
									var a = _this.inputWindow.items.items[0].gzjg
											.getValue();
									var b = _this.inputWindow.items.items[0].gzxs
											.getValue();
									if (!Ext.isEmpty(a)) {
										_this.wggzjgstore.removeAll();
										_this.inputWindow.items.items[0].gzjg
												.setValue();
									}
									if (!Ext.isEmpty(b)) {
										_this.storewtsx.removeAll();
										_this.inputWindow.items.items[0].gzxs
												.setValue();
									}
								}
							},
							store : this.wggzxtstore,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "sname",
							valueField : "sid",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'combobox',
							name : 'gzjg',
							ref : '../gzjg',
							colspan : 2,
							fieldLabel : '故障结构',
							triggerAction : "all",
							listeners : {
								scope : this,
								'focus' : function() {
									var B = _this.inputWindow.items.items[0].gzxt
											.getValue()
									if (Ext.isEmpty(B)) {
										return false;
									} else {
										_this.wggzjgstore.load({
													params : {
														"condition/psid" : B
													}
												});
									}
								},
								'change' : function() {
									var b = _this.inputWindow.items.items[0].gzxs
											.getValue();
									if (!Ext.isEmpty(b)) {
										_this.storewtsx.removeAll();
										_this.inputWindow.items.items[0].gzxs
												.setValue();
									}
								},
								'beforequery' : function() {
										var B = _this.inputWindow.items.items[0].gzxt
											.getValue()
										if (Ext.isEmpty(B)) {
											return false;
										}
									}
							},
							store : this.wggzjgstore,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "sname",
							valueField : "sid",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'combobox',
							name : 'gzxs',
							ref : '../gzxs',
							colspan : 2,
							fieldLabel : '故障形式',
							triggerAction : "all",
							listeners : {
								scope : this,
								'focus' : function() {
									var A = _this.inputWindow.items.items[0].matnr
											.getValue();
									var B = _this.inputWindow.items.items[0].gzjg
											.getValue();
									if (Ext.isEmpty(B) || Ext.isEmpty(A)) {
										return false;
									} else {
										_this.storewtsx.load({
													params : {
														"condition/sid" : B,
														"condition/matnr" : A
													}
												});
									}
								},
								'beforequery' : function() {
								    var A = _this.inputWindow.items.items[0].matnr
											.getValue();
									var B = _this.inputWindow.items.items[0].gzjg
											.getValue();
									if (Ext.isEmpty(B)||Ext.isEmpty(A)) {
										return false;
									}
									}	
							},
							store : this.storewtsx,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "fname",
							valueField : "fid",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'dictcombobox',
							name : 'clyj',
							dataIndex : 'clyj',
							hiddenName : 'clyj',
							ref : '../clyj',
							allowBlank : false,
							fieldLabel : '处理意见',
							value : '退库',
							emptyText : '',
							colspan : 2,
							dictData : GE_INSPECT_CLYJ
						}, {
							xtype : 'jjycombobox',
							name : 'jyy',
							ref : '../jyy',
							colspan : 2,
							hiddenName : 'jyy',
							allowBlank : false,
							fieldLabel : '鉴定员'
						}, {
							xtype : 'datefield',
							name : 'jyrq',
							ref : '../jyrq',
							colspan : 2,
							allowBlank : false,
							format : "Y-m-d",
							fieldLabel : '检验日期'
						}, {
							xtype : 'textarea',
							name : 'tkyy',
							height : 50,
							colspan : 6,
							fieldLabel : '退库原因及描述'
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '确认',
							scope : this,
							handler : function() {
								_this.onaddOk();
							}
						}, {
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}]
			}
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改三包退库记录',
			height : 280,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectlljywh.loadinspectsbtknote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'factorycombobox',
							defaultValue : '3000',
							hiddenName : 'werks',
							dataIndex : "werks",
							ref:'../werks',
							allowBlank : false,
							fieldLabel : '工厂',
							colspan : 2
						}, {
							xtype : 'textfield',
							hidden : true,
							name : 'sbtkno',
							ref:'../sbtkno',
							dataIndex : "sbtkno",
							fieldLabel : '三包退库流水号'
						}, {
							xtype : 'textfield',
							name : 'tkdh',
							dataIndex : "tkdh",
							allowBlank : true,
							ref : '../tkdh',
							colspan : 2,
							fieldLabel : '退库单号'
						},{
							xtype : 'textfield',
							name : 'zatwrt',
							ref : '../zatwrt',
							dataIndex : "zatwrt",
							//allowBlank : false,
							colspan : 2,
							fieldLabel : '出厂编号'
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'matnr',
							dataIndex : "matnr",
							ref : '../matnr',
							colspan : 2,
							fieldLabel : '物料编码'
						}, {
							xtype : 'textfield',
							name : 'maktx',
							dataIndex : "maktx",
							ref : '../maktx',
							colspan : 4,
							readOnly : true,
							fieldLabel : '物料描述'
						}, {
							xtype : 'combobox',
							name : 'lifnr',
							ref : '../lifnr',
							colspan : 3,
							dataIndex : "lifnr",
							fieldLabel : '供应商',
							triggerAction : "all",
							listeners : {
								scope : this,
								'focus' : function() {
									var B = _this.editWindow.items.items[0].matnr
											.getValue()
									if (Ext.isEmpty(B)) {
										return false;
									} else {
										_this.storelifnr.load({
													params : {
														"condition/matnr" : B
													}
												});
									}
								},
								'select' : function(a, b, c) {
									_this.editWindow.items.items[0].lifnrx
											.setValue(b.get('lifnr'));
								}
							},
							store : this.storelifnr,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "name1",
							valueField : "lifnr",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'button',
							anchor : '40%',
							colspan : 1,
							scope : this,
							text : '选择',
							iconCls : "icon-application_form_magnify",
							handler : this.chooselifnr
						}, {
							xtype : 'textfield',
							name : 'lifnrx',
							ref : '../lifnrx',
							fieldLabel : '隐藏供应商',
							hidden : true
						}, {
							xtype : 'numberfield',
							name : 'tksl',
							ref : '../tksl',
							dataIndex : "tksl",
							allowBlank : false,
							allowNegative : false,
							fieldLabel : '数量',
							colspan : 2
						}, {
							xtype : 'combobox',
							name : 'gzxt',
							ref : '../gzxt',
							dataIndex : "gzxt",
							colspan : 2,
							fieldLabel : '故障系统',
							triggerAction : "all",
							listeners : {
								scope : this,
								'change' : function() {
									var a = _this.editWindow.items.items[0].gzjg
											.getValue();
									var b = _this.editWindow.items.items[0].gzxs
											.getValue();
									if (!Ext.isEmpty(a)) {
										_this.wggzjgstore.removeAll();
										_this.editWindow.items.items[0].gzjg
												.setValue();
									}
									if (!Ext.isEmpty(b)) {
										_this.storewtsx.removeAll();
										_this.editWindow.items.items[0].gzxs
												.setValue();
									}
								}
							},
							store : this.wggzxtstore,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "sname",
							valueField : "sid",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'combobox',
							name : 'gzjg',
							ref : '../gzjg',
							colspan : 2,
							dataIndex : "gzjg",
							fieldLabel : '故障结构',
							triggerAction : "all",
							listeners : {
								scope : this,
								'focus' : function() {
									var B = _this.editWindow.items.items[0].gzxt
											.getValue()
									if (Ext.isEmpty(B)) {
										return false;
									} else {
										_this.wggzjgstore.load({
													params : {
														"condition/psid" : B
													}
												});
									}
								},
								'change' : function() {
									var b = _this.editWindow.items.items[0].gzxs
											.getValue();
									if (!Ext.isEmpty(b)) {
										_this.storewtsx.removeAll();
										_this.editWindow.items.items[0].gzxs
												.setValue();
									}
								},
								'beforequery' : function() {
								 var B = _this.editWindow.items.items[0].gzxt
											.getValue()
								if (Ext.isEmpty(B)) {
										return false;
									}
									}	
							},
							store : this.wggzjgstore,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "sname",
							valueField : "sid",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'combobox',
							name : 'gzxs',
							ref : '../gzxs',
							dataIndex : "gzxs",
							colspan : 2,
							fieldLabel : '故障形式',
							triggerAction : "all",
							listeners : {
								scope : this,
								'focus' : function() {
									var A = _this.editWindow.items.items[0].matnr
											.getValue();
									var B = _this.editWindow.items.items[0].gzjg
											.getValue();
									if (Ext.isEmpty(B) || Ext.isEmpty(A)) {
										return false;
									} else {
										_this.storewtsx.load({
													params : {
														"condition/sid" : B,
														"condition/matnr" : A
													}
												});
									}
								},
								'beforequery' : function() {
								   var A = _this.editWindow.items.items[0].matnr
											.getValue();
									var B = _this.editWindow.items.items[0].gzjg
											.getValue();
									if (Ext.isEmpty(B)||Ext.isEmpty(A)) {
										return false;
									}
									}	
							},
							store : this.storewtsx,
							mode : "local",
							anchor : '100%',
							editable : false,
							displayField : "fname",
							valueField : "fid",
							forceSelection : false,
							allowBlank : false,
							emptyText : "请选择"
						}, {
							xtype : 'dictcombobox',
							name : 'clyj',
							dataIndex : 'clyj',
							hiddenName : 'clyj',
							ref:'../clyj',
							allowBlank : false,
							fieldLabel : '处理意见',
							emptyText : '',
							colspan : 2,
							dictData : GE_INSPECT_CLYJ
						}, {
							xtype : 'jjycombobox',
							name : 'jyy',
							colspan : 2,
							ref:'../jyy',
							dataIndex : "jyy",
							hiddenName : 'jyy',
							allowBlank : false,
							fieldLabel : '鉴定员'
						}, {
							xtype : 'datefield',
							name : 'jyrq',
							dataIndex : "jyrq",
							ref:'../jyrq',
							colspan : 2,
							allowBlank : false,
							format : "Y-m-d",
							fieldLabel : '检验日期'
						}, {
							xtype : 'textarea',
							name : 'tkyy',
							dataIndex : 'tkyy',
							height : 50,
							colspan : 6,
							fieldLabel : '退库原因及描述'
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '确认',
							scope : this,
							handler : function() {
								_this.onsaveOk();
							}
						}, {
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}]
			}
		});
	}
	this.initQueryWindow = function() {
		var _this = this;
		this.queryWindow = this.queryWindow || new Ext.fn.FormWindow({
			title : '查看三包退库记录',
			height : 280,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectlljywh.loadinspectsbtknote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'textfield',
							defaultValue : '3000',
							hiddenName : 'werks',
							dataIndex : "werks",
							readOnly : true,
							fieldLabel : '工厂',
							colspan : 2
						}, {
							xtype : 'textfield',
							hidden : true,
							name : 'sbtkno',
							dataIndex : "sbtkno",
							fieldLabel : '三包退库检验流水号'
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'tkdh',
							dataIndex : "tkdh",
							ref : '../tkdh',
							colspan : 2,
							fieldLabel : '退库单号'
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'zatwrt',
							dataIndex : "zatwrt",
							//allowBlank : false,
							colspan : 2,
							fieldLabel : '出厂编号'
						},{
							xtype : 'textfield',
							readOnly : true,
							name : 'matnr',
							dataIndex : "matnr",
							ref : '../matnr',
							colspan : 2,
							fieldLabel : '物料编码'
						}, {
							xtype : 'textfield',
							name : 'maktx',
							dataIndex : "maktx",
							ref : '../maktx',
							colspan : 4,
							readOnly : true,
							fieldLabel : '物料描述'
						}, {
							xtype : 'textfield',
							name : 'lifnr',
							ref : '../lifnr',
							colspan : 4,
							readOnly : true,
							dataIndex : "lifnr",
							fieldLabel : '供应商'
						}, {
							xtype : 'textfield',
							name : 'lifnrx',
							ref : '../lifnrx',
							fieldLabel : '隐藏供应商',
							hidden : true
						}, {
							xtype : 'numberfield',
							name : 'tksl',
							ref : '../tksl',
							dataIndex : "tksl",
							readOnly : true,
							fieldLabel : '数量',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'gzxt',
							ref : '../gzxt',
							readOnly : true,
							dataIndex : "gzxt",
							colspan : 2,
							fieldLabel : '故障系统'
						}, {
							xtype : 'textfield',
							name : 'gzjg',
							ref : '../gzjg',
							colspan : 2,
							readOnly : true,
							dataIndex : "gzjg",
							fieldLabel : '故障结构'
						}, {
							xtype : 'textfield',
							name : 'gzxs',
							ref : '../gzxs',
							readOnly : true,
							dataIndex : "gzxs",
							colspan : 2,
							fieldLabel : '故障形式'
						}, {
							xtype : 'textfield',
							name : 'clyj',
							dataIndex : 'clyj',
							readOnly : true,
							fieldLabel : '处理意见',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'jyy',
							colspan : 2,
							dataIndex : "jyy",
							readOnly : true,
							fieldLabel : '鉴定员'
						}, {
							xtype : 'datefield',
							name : 'jyrq',
							dataIndex : "jyrq",
							colspan : 2,
							readOnly : true,
							format : "Y-m-d",
							fieldLabel : '检验日期'
						}, {
							xtype : 'textarea',
							name : 'tkyy',
							readOnly : true,
							dataIndex : 'tkyy',
							height : 50,
							colspan : 6,
							fieldLabel : '退库原因及描述'
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}]
			}
		});
	}
}
