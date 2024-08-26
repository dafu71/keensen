/*
 * 时隔半年SRM 刘鑫--外协来料检验记录表维护 这个菜单绝对的模板菜单（没有之一！）
 */
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr = function() {

	this.initPanel = function() {
		this.initStorematnr();
		this.initStorelifnr();
		this.initStorezjlb();
		this.initStorezjlbedit();
		this.initStoreqjlx();
		this.initStorewtsx();
		this.initStorewtsxa();
		this.initQueryPanel();
		this.initlisteditPanel();
		this.initediteditPanel();
		this.initqueryeditPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initQueryWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'inspectwxlljywhMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.selectlifnrWin = new com.zoomlion.hjsrm.selectlifnrWindow({});
	this.selectlifnreditWin = new com.zoomlion.hjsrm.selectlifnrWindow({});
	this.initStorematnr = function() {
		this.storematnr = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystorematnr.biz.ext',
			root : 'data',
			fields : [{
						name : 'matnr'
					}, {
						name : 'maktx'
					}, {
						name : 'dxjlb'
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
	this.initStorezjlb = function() {
		this.storezjlb = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystorezjlb.biz.ext',
			root : 'data',
			fields : [{
						name : 'zjlb'
					}]
		})
	}
	this.initStorezjlbedit = function() {
		this.storezjlbedit = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.querystorezjlb.biz.ext',
			root : 'data',
			fields : [{
						name : 'zjlb'
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

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 200,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 外协来料检验记录查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/djlx',
								dataIndex : 'condition/djlx',
								hiddenName : 'condition/djlx',
								fieldLabel : '单据类型',
								emptyText : '',
								dictData : GE_INSPECT_DJLX
							}, {
								xtype : 'textfield',
								name : 'condition/djbh',
								fieldLabel : '单据编号'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								fieldLabel : '供应商',
								disabled : !Ext.isEmpty(lifnr) 
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								fieldLabel : '供应商名称',
								disabled : !Ext.isEmpty(lifnr)
							}, {
								xtype : 'dictcombobox',
								name : 'condition/zjlb',
								dataIndex : 'condition/zjlb',
								hiddenName : 'condition/zjlb',
								fieldLabel : '质检类别',
								emptyText : '',
								dictData : GE_INSPECT_ZJLB
							}, {
								xtype : 'dictcombobox',
								name : 'condition/dxjlb',
								dataIndex : 'condition/dxjlb',
								hiddenName : 'condition/dxjlb',
								fieldLabel : '大/小件类别',
								emptyText : '',
								dictData : GE_INSPECT_DXJFL
							}, {
								xtype : 'jjycombobox',
								name : 'condition/jyy',
								dataIndex : 'condition/jyy',
								hiddenName : 'condition/jyy',
								fieldLabel : '检验员'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/jyjl',
								dataIndex : 'condition/jyjl',
								hiddenName : 'condition/jyjl',
								fieldLabel : '检验结论',
								emptyText : '',
								dictData : GE_INSPECT_JYJL
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
			title : '【 外协来料检验记录列表 】',
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						//rescode : '00561',
						handler : this.onAdd,
						hidden : !Ext.isEmpty(lifnr),
						disabled : myDisabled
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						//rescode : '00561',
						handler : this.onEdit,
						hidden : !Ext.isEmpty(lifnr),
						disabled : myDisabled
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						//rescode : '00561',
						handler : this.onDel,
						hidden : !Ext.isEmpty(lifnr),
						disabled : myDisabled
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_lightning',
						//rescode : '00562',
						handler : this.onQuery
					}, '-', {
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						//rescode : '00562',
						handler : this.onExcel
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.inspect.inspectlljywh.delinspectwxlljynote.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂',
						width : 60
					}, {
						dataIndex : 'wxllno',
						header : '外协记录表流水号'
					}, {
						dataIndex : 'djlx',
						header : '单据类型'
					}, {
						dataIndex : 'djbh',
						header : '单据编号'
					}, {
						dataIndex : 'jyrq',
						header : '检验日期'
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
						dataIndex : 'dxjlb',
						header : '大/小件类别'
					}, {
						dataIndex : 'gyswlbh',
						header : '供应商物料编码'
					}, {
						dataIndex : 'zjlb',
						header : '质检类别'
					},  {
						dataIndex : 'jjs',
						header : '检验数'
					}, {
						dataIndex : 'bhgs',
						header : '不合格数'
					},{
						dataIndex : 'bhgx',
						header : '不合格项'
					}, {
						dataIndex : 'jyjl',
						header : '检验结论'
					}, {
						dataIndex : 'clyj',
						header : '处理意见'
					}, {
						dataIndex : 'jyy',
						header : '检验员工号'
					}, {
						dataIndex : 'empname',
						header : '检验员姓名'
					}, {
						dataIndex : 'text',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.queryinspectwxlljywh.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
						}, {
							name : 'wxllno'
						}, {
							name : 'djlx'
						}, {
							name : 'djbh'
						}, {
							name : 'lifnr'
						}, {
							name : 'zjlb'
						}, {
							name : 'dxjlb'
						}, {
							name : 'jyy'
						}, {
							name : 'jyjl'
						}, {
							name : 'jyrq'
						}, {
							name : 'jyfs'
						}, {
							name : 'matnr'
						}, {
							name : 'gyswlbh'
						}, {
							name : 'jjs'
						}, {
							name : 'bhgs'
						}, {
							name : 'text'
						}, {
							name : 'clyj'
						}, {
							name : 'statu'
						}, {
							name : 'createtime'
						}, {
							name : 'createuserid'
						}, {
							name : 'modifytime'
						}, {
							name : 'modifyuserid'
						}, {
							name : 'name1'
						}, {
							name : 'maktx'
						}, {
							name : 'empname'
						},{
							name : 'bhgx'
						}]
			})
		});
	}
	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增外协来料检验记录',
			height : 620,
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
							allowBlank : false,
							fieldLabel : '工厂',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'djlx',
							dataIndex : 'djlx',
							hiddenName : 'djlx',
							allowBlank : false,
							fieldLabel : '单据类型',
							emptyText : '',
							colspan : 2,
							dictData : GE_INSPECT_DJLX
						}, {
							xtype : 'textfield',
							name : 'djbh',
							colspan : 2,
							fieldLabel : '单据编号'
						}, {
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
									_this.storezjlb.load({
										params : {
											"condition/matnr" : _this.inputWindow.items.items[0].matnr
													.getValue(),
											"condition/lifnr" : b.get('lifnr')
										}
									});
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
							xtype : 'dictcombobox',
							name : 'dxjlb',
							ref : '../dxjlb',
							dataIndex : 'dxjlb',
							hiddenName : 'dxjlb',
							allowBlank : false,
							colspan : 2,
							fieldLabel : '大小件类别',
							emptyText : '',
							dictData : GE_INSPECT_DXJFL
						}, {
							xtype : 'textfield',
							name : 'gyswlbh',
							colspan : 2,
							fieldLabel : '供应商物料编号'
						}, {
							xtype : 'numberfield',
							name : 'jjs',
							ref : '../jjs',
							allowBlank : false,
							allowNegative : false,
							fieldLabel : '检验数',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'bhgs',
							ref:'../bhgs',
							allowBlank : false,
							fieldLabel : '不合格数',
							allowNegative : false,
							listeners : {
								'focus' : function() {
									var a = _this.inputWindow.items.items[0].form
											.findField('jjs').getValue();
									if (Ext.isEmpty(a)) {
										Ext.Msg.alert('提示', '请先输入检验数量！')
										return
									}
								},
								'change' : function(o, newValue, oldValue) {
									var a = _this.inputWindow.items.items[0].form
											.findField('jjs').getValue();
									if (newValue > a) {
										o.setValue(a)
									}
									/*if(newValue == 0){
										_this.inputWindow.items.items[0].form
											.findField('jyjl').setValue('合格');
									    _this.inputWindow.items.items[0].form
											.findField('clyj').setValue('合格');
									}else{
										_this.inputWindow.items.items[0].form
											.findField('jyjl').setValue('不合格');
									    _this.inputWindow.items.items[0].form
											.findField('clyj').setValue();
									}*/
								}  
							},
							ref : '../bhgs',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'zjlb',
							ref : '../zjlb',
							dataIndex : 'zjlb',
							hiddenName : 'zjlb',
							colspan : 2,
							allowBlank : false,
							fieldLabel : '质检类别',
							emptyText : '',
							dictData : GE_INSPECT_ZJLB
						}, {
							xtype : 'textfield',
							name : 'text',
							ref:'../text',
							colspan : 4,
							fieldLabel : '备注'
						}, this.listeditPanel, {
							xtype : 'displayfield',
							colspan : 6
						}, {
							xtype : 'dictcombobox',
							name : 'jyjl',
							ref : '../jyjl',
							dataIndex : 'jyjl',
							hiddenName : 'jyjl',
							allowBlank : false,
							fieldLabel : '检验结论',
							emptyText : '',
							/*listeners : {
								'select' : function(a, b, c) {
									var k = _this.inputWindow.items.items[0].form
											.findField('bhgs').getValue();
									if (k==0&&a.getValue()=='不合格') {										
										_this.inputWindow.items.items[0].form
											.findField('jyjl').setValue();									
									}
									if (k!=0&&a.getValue()=='合格') {										
										_this.inputWindow.items.items[0].form
											.findField('jyjl').setValue();									
									}
								}
							},*/
							colspan : 3,
							dictData : GE_INSPECT_JYJL
						}, {
							xtype : 'dictcombobox',
							name : 'clyj',
							ref : '../clyj',
							dataIndex : 'clyj',
							hiddenName : 'clyj',
							allowBlank : false,
							fieldLabel : '处理意见',
							/*listeners : {
								'select' : function(a, b, c) {
									var k = _this.inputWindow.items.items[0].form
											.findField('bhgs').getValue();
									if (k==0&&a.getValue()!='合格') {										
										_this.inputWindow.items.items[0].form
											.findField('clyj').setValue();									
									}
									if (k!=0&&a.getValue()=='合格') {										
										_this.inputWindow.items.items[0].form
											.findField('clyj').setValue();									
									}
								}
							},*/
							emptyText : '',
							colspan : 3,
							dictData : GE_INSPECT_CLYJ
						}, {
							xtype : 'jjycombobox',
							name : 'jyy',
							colspan : 3,
							hiddenName : 'jyy',
							allowBlank : false,
							fieldLabel : '检验员'
						}, {
							xtype : 'datefield',
							name : 'jyrq',
							colspan : 3,
							allowBlank : false,
							format : "Y-m-d",
							fieldLabel : '检验日期'
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
			title : '编辑外协来料检验记录',
			height : 620,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectlljywh.loadinspectwxlljynote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'textfield',
							dataIndex : "wxllno",
							name : 'wxllno',
							allowBlank : false,
							hidden : true,
							fieldLabel : '外协来料检验流水号',
							colspan : 2
						}, {
							xtype : 'factorycombobox',
							// defaultValue : '3000',
							dataIndex : "werks",
							hiddenName : 'werks',
							allowBlank : false,
							fieldLabel : '工厂',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'djlx',
							dataIndex : 'djlx',
							hiddenName : 'djlx',
							allowBlank : false,
							fieldLabel : '单据类型',
							emptyText : '',
							colspan : 2,
							dictData : GE_INSPECT_DJLX
						}, {
							xtype : 'textfield',
							name : 'djbh',
							dataIndex : 'djbh',
							colspan : 2,
							fieldLabel : '单据编号'
						}, {
							xtype : 'textfield',
							allowBlank : false,
							dataIndex : 'matnr',
							name : 'matnr',
							ref : '../matnr',
							colspan : 2,
							readOnly : true,
							fieldLabel : '物料编码'
						}, {
							xtype : 'textfield',
							name : 'maktx',
							dataIndex : 'maktx',
							ref : '../maktx',
							colspan : 4,
							readOnly : true,
							fieldLabel : '物料描述'
						}, {
							xtype : 'combobox',
							name : 'lifnr',
							ref : '../lifnr',
							dataIndex : 'lifnr',
							colspan : 3,
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
									_this.storezjlbedit.load({
										params : {
											"condition/matnr" : _this.editWindow.items.items[0].matnr
													.getValue(),
											"condition/lifnr" : b.get('lifnr')
										}
									});
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
							handler : this.chooselifnredit
						}, {
							xtype : 'textfield',
							name : 'lifnrx',
							ref : '../lifnrx',
							fieldLabel : '隐藏供应商',
							hidden : true
						}, {
							xtype : 'dictcombobox',
							name : 'dxjlb',
							ref : '../dxjlb',
							dataIndex : 'dxjlb',
							hiddenName : 'dxjlb',
							allowBlank : false,
							colspan : 2,
							fieldLabel : '大小件类别',
							emptyText : '',
							dictData : GE_INSPECT_DXJFL
						}, {
							xtype : 'textfield',
							name : 'gyswlbh',
							dataIndex : 'gyswlbh',
							colspan : 2,
							fieldLabel : '供应商物料编号'
						}, {
							xtype : 'numberfield',
							name : 'jjs',
							ref : '../jjs',
							dataIndex : 'jjs',
							allowBlank : false,
							allowNegative : false,
							fieldLabel : '检验数',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'bhgs',
							dataIndex : 'bhgs',
							allowBlank : false,
							fieldLabel : '不合格数',
							allowNegative : false,
							listeners : {
								'focus' : function() {
									var a = _this.editWindow.items.items[0].form
											.findField('jjs').getValue();
									if (Ext.isEmpty(a)) {
										Ext.Msg.alert('提示', '请先输入检验数量！')
										return
									}
								},
								'change' : function(o, newValue, oldValue) {
									var a = _this.editWindow.items.items[0].form
											.findField('jjs').getValue();
									if (newValue > a) {
										o.setValue(a)
									}
									/*if(newValue == 0){
										_this.editWindow.items.items[0].form
											.findField('jyjl').setValue('合格');
									    _this.editWindow.items.items[0].form
											.findField('clyj').setValue('合格');
									}else{
										_this.editWindow.items.items[0].form
											.findField('jyjl').setValue('不合格');
									    _this.editWindow.items.items[0].form
											.findField('clyj').setValue();
									}*/
								}  
							},
							ref : '../bhgs',
							colspan : 2
						}, {
							xtype : 'dictcombobox',
							name : 'zjlb',
							ref : '../zjlb',
							dataIndex : 'zjlb',
							hiddenName : 'zjlb',
							colspan : 2,
							allowBlank : false,
							fieldLabel : '质检类别',
							emptyText : '',
							dictData : GE_INSPECT_ZJLB
						}, {
							xtype : 'textfield',
							name : 'text',
							dataIndex : 'text',
							ref:'../text',
							colspan : 4,
							fieldLabel : '备注'
						}, this.editeditPanel, {
							xtype : 'displayfield',
							colspan : 6
						}, {
							xtype : 'dictcombobox',
							name : 'jyjl',
							dataIndex : 'jyjl',
							hiddenName : 'jyjl',
							ref:'../jyjl',
							allowBlank : false,
							fieldLabel : '检验结论',
							emptyText : '',
							/*listeners : {
								'select' : function(a, b, c) {
									var k = _this.editWindow.items.items[0].form
											.findField('bhgs').getValue();
									if (k==0&&a.getValue()=='不合格') {										
										_this.editWindow.items.items[0].form
											.findField('jyjl').setValue();									
									}
									if (k!=0&&a.getValue()=='合格') {										
										_this.editWindow.items.items[0].form
											.findField('jyjl').setValue();									
									}
								}
							},  */
							colspan : 3,
							dictData : GE_INSPECT_JYJL
						}, {
							xtype : 'dictcombobox',
							name : 'clyj',
							dataIndex : 'clyj',
							ref:'../clyj',
							hiddenName : 'clyj',
							allowBlank : false,
							fieldLabel : '处理意见',
							emptyText : '',
						    /* listeners : {
								'select' : function(a, b, c) {
									var k = _this.editWindow.items.items[0].form
											.findField('bhgs').getValue();
									if (k==0&&a.getValue()!='合格') {										
										_this.editWindow.items.items[0].form
											.findField('clyj').setValue();									
									}
									if (k!=0&&a.getValue()=='合格') {										
										_this.editWindow.items.items[0].form
											.findField('clyj').setValue();									
									}
								}
							},  */
							colspan : 3,
							dictData : GE_INSPECT_CLYJ
						}, {
							xtype : 'jjycombobox',
							name : 'jyy',
							colspan : 3,
							dataIndex : 'jyy',
							hiddenName : 'jyy',
							allowBlank : false,
							fieldLabel : '检验员'
						}, {
							xtype : 'datefield',
							name : 'jyrq',
							dataIndex : 'jyrq',
							colspan : 3,
							allowBlank : false,
							format : "Y-m-d",
							fieldLabel : '检验日期'
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
			title : '查看外协来料检验记录',
			height : 620,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectlljywh.loadinspectwxlljynote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'textfield',
							dataIndex : "wxllno",
							name : 'wxllno',
							allowBlank : false,
							hidden : true,
							fieldLabel : '外协来料检验流水号',
							colspan : 2
						}, {
							xtype : 'textfield',
							// defaultValue : '3000',
							dataIndex : "werks",
							readOnly : true,
							hiddenName : 'werks',
							allowBlank : false,
							fieldLabel : '工厂',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'djlx',
							readOnly : true,
							dataIndex : 'djlx',
							hiddenName : 'djlx',
							allowBlank : false,
							fieldLabel : '单据类型',
							emptyText : '',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'djbh',
							readOnly : true,
							dataIndex : 'djbh',
							colspan : 2,
							fieldLabel : '单据编号'
						}, {
							xtype : 'textfield',
							allowBlank : false,
							dataIndex : 'matnr',
							name : 'matnr',
							ref : '../matnr',
							colspan : 2,
							readOnly : true,
							fieldLabel : '物料编码'
						}, {
							xtype : 'textfield',
							name : 'maktx',
							dataIndex : 'maktx',
							ref : '../maktx',
							colspan : 4,
							readOnly : true,
							fieldLabel : '物料描述'
						}, {
							xtype : 'textfield',
							name : 'lifnr',
							ref : '../lifnr',
							dataIndex : 'lifnr',
							colspan : 4,
							readOnly : true,
							fieldLabel : '供应商'
						}, {
							xtype : 'textfield',
							name : 'dxjlb',
							ref : '../dxjlb',
							dataIndex : 'dxjlb',
							allowBlank : false,
							readOnly : true,
							colspan : 2,
							fieldLabel : '大小件类别'
						}, {
							xtype : 'textfield',
							name : 'gyswlbh',
							dataIndex : 'gyswlbh',
							readOnly : true,
							colspan : 2,
							fieldLabel : '供应商物料编号'
						}, {
							xtype : 'numberfield',
							name : 'jjs',
							ref : '../jjs',
							dataIndex : 'jjs',
							readOnly : true,
							allowBlank : false,
							allowNegative : false,
							fieldLabel : '检验数',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'bhgs',
							dataIndex : 'bhgs',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '不合格数',
							ref : '../bhgs',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'zjlb',
							ref : '../zjlb',
							readOnly : true,
							dataIndex : 'zjlb',
							colspan : 2,
							allowBlank : false,
							fieldLabel : '质检类别'
						}, {
							xtype : 'textfield',
							name : 'text',
							readOnly : true,
							dataIndex : 'text',
							colspan : 4,
							fieldLabel : '备注'
						}, this.queryeditPanel, {
							xtype : 'displayfield',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'jyjl',
							dataIndex : 'jyjl',
							readOnly : true,
							fieldLabel : '检验结论',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'clyj',
							dataIndex : 'clyj',
							readOnly : true,
							fieldLabel : '处理意见',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'jyy',
							colspan : 3,
							dataIndex : 'jyy',
							readOnly : true,
							fieldLabel : '检验员'
						}, {
							xtype : 'datefield',
							name : 'jyrq',
							dataIndex : 'jyrq',
							colspan : 3,
							readOnly : true,
							format:'Y-m-d',
							fieldLabel : '检验日期'
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
	this.initlisteditPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel();
		var colModel = new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(),
				selModel, {
					header : "PKID",
					dataIndex : "pkid",
					hidden : true
				}, {
					header : "问题描述",
					dataIndex : "wtms",
					width : 200,
					editor : new Ext.grid.GridEditor(new Ext.form.TextField({}))
				}, {
					header : "部位",
					dataIndex : "wtbw",
					ref : '../wtbw',
					editor : new Ext.grid.GridEditor(new Ext.form.TextField({}))
				}, {
					header : "缺陷类型",
					dataIndex : "qxlx",
					ref : '../qxlx',
					width : 150,
					scope : this,
					renderer : function(value) {
						var rowIndex = this.storeqjlx.find("sid", "" + value);
						if (rowIndex < 0)
							return '';
						var record = this.storeqjlx.getAt(rowIndex);
						return record ? record.get('sname') : '';
					},
					editor : new Ext.grid.GridEditor(new Ext.form.ComboBox({
								allowBlank : false,
								listeners : {
									scope : this,
									'select' : function(combo, record, index) {
										var B = _this.listeditPanel
												.getSelectionModel()
												.getSelections();
										B[0].data['qxlxname'] = combo.getRawValue();
										if (!Ext.isEmpty(B[0].get('wtsx'))) {
											_this.storewtsx.removeAll();
											B[0].data['wtsx'] = '';
										}
									},
									'specialkey' : function(field, e) {
										if (e.getKey() == Ext.EventObject.ENTER) {
											// e.keyCode = 9
											return false;
										}
									}
								},
								triggerAction : "all",
								lazyRender : true,
								store : this.storeqjlx,
								name : "qxlx",
								mode : "local",
								anchor : '100%',
								editable : true,
								displayField : "sname",
								valueField : "sid",
								forceSelection : true,
								emptyText : "请选择"

							}))
				}, {
					header : "qxlxname",
					dataIndex : "qxlxname",
					hidden : true
				},{
					header : "问题属性",
					dataIndex : "wtsx",
					ref : '../wtsx',
					width : 150,
					allowBlank : false,
					scope : this,
					renderer : function(value) {
						var rowIndex = this.storewtsxa.find("fid", "" + value);
						if (rowIndex < 0)
							return '';
						var record = this.storewtsxa.getAt(rowIndex);
						return record ? record.get('fname') : '';
					},
					editor : new Ext.grid.GridEditor(new Ext.form.ComboBox({
								allowBlank : false,
								listeners : {
									scope : this,
									'select' : function(combo, record, index) {
										var B = _this.listeditPanel
												.getSelectionModel()
												.getSelections();
									   B[0].data['wtsxname'] = combo.getRawValue();
									},
									'focus' : function() {
										var B = _this.listeditPanel
												.getSelectionModel()
												.getSelections();
										if (Ext.isEmpty(B[0].get('qxlx'))) {
											return false;
										} else {
											_this.storewtsx.load({
														params : {
															"condition/sid" : B[0]
																	.get('qxlx')

														}
													});
										}
									},
									'beforequery' : function() {
										var B = _this.listeditPanel
												.getSelectionModel()
												.getSelections();
										if (Ext.isEmpty(B[0].get('qxlx'))) {
											return false;
										}
									},
									'specialkey' : function(field, e) {
										if (e.getKey() == Ext.EventObject.ENTER) {
											return false;
										}
									}
								},
								triggerAction : "all",
								lazyRender : true,
								store : this.storewtsx,
								name : "wtsx",
								mode : "local",
								anchor : '100%',
								editable : true,
								displayField : "fname",
								valueField : "fid",
								forceSelection : true,

								emptyText : "请选择"

							}))
				}, {
					header : "wtsxname",
					dataIndex : "wtsxname",
					hidden : true
				},{
					header : "故障等级",
					dataIndex : "gzdj",
					width : 80,
					editor : new Ext.grid.GridEditor(new Ext.bz.dict.DictComboBox(
							{
								dictData : GE_INSPECT_CJWTDJ,
								allowBlank : false,
								editable : true
							}))
				}]);
		this.listeditPanel = new Ext.fn.EditListPanel({
					//title : '不合格项',
					autoScroll : true,
					clicksToEdit : 1,
					colspan : 6,
					columns : 6,
					height : 320,
					saveUrl : '...',
					delUrl : '...',
					subAll : false,
					hsPage : false,
					sm : selModel,
					cm : colModel,
					tbar : [{
								xtype : 'button',
								text : "新增",
								iconCls : 'icon-application_add',
								scope : this,
								handler : this.onAddmx
							}, "-", {
								xtype : 'button',
								text : "删除",
								iconCls : 'icon-application_delete',
								scope : this,
								handler : this.onDelmx
							}],
					store : new Ext.data.JsonStore({
								autoLoad : false,
								url : '...',
								root : 'data',
								fields : []
							})
				})
	};
	this.initediteditPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel();
		var colModel = new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(),
				selModel, {
					header : "PKID",
					dataIndex : "pkid",
					hidden : true
				}, {
					header : "问题描述",
					dataIndex : "wtms",
					width : 200,
					editor : new Ext.grid.GridEditor(new Ext.form.TextField({}))
				}, {
					header : "部位",
					dataIndex : "wtbw",
					ref : '../wtbw',
					editor : new Ext.grid.GridEditor(new Ext.form.TextField({}))
				}, {
					header : "缺陷类型",
					dataIndex : "qxlx",
					ref : '../qxlx',
					width : 150,
					scope : this,
					renderer : function(value) {
						var rowIndex = this.storeqjlx.find("sid", "" + value);
						if (rowIndex < 0)
							return '';
						var record = this.storeqjlx.getAt(rowIndex);
						return record ? record.get('sname') : '';
					},
					editor : new Ext.grid.GridEditor(new Ext.form.ComboBox({
								allowBlank : false,
								listeners : {
									scope : this,
									'select' : function(combo, record, index) {
										var B = _this.editeditPanel
												.getSelectionModel()
												.getSelections();
										B[0].data['qxlxname'] = combo.getRawValue();
										if (!Ext.isEmpty(B[0].get('wtsx'))) {
											_this.storewtsx.removeAll();
											B[0].data['wtsx'] = '';
										}
									},
									'specialkey' : function(field, e) {
										if (e.getKey() == Ext.EventObject.ENTER) {
											// e.keyCode = 9
											return false;
										}
									}
								},
								triggerAction : "all",
								lazyRender : true,
								store : this.storeqjlx,
								name : "qxlx",
								mode : "local",
								anchor : '100%',
								editable : true,
								displayField : "sname",
								valueField : "sid",
								forceSelection : true,
								emptyText : "请选择"

							}))
				}, {
					header : "qxlxname",
					dataIndex : "qxlxname",
					hidden : true
				},{
					header : "问题属性",
					dataIndex : "wtsx",
					ref : '../wtsx',
					width : 150,
					allowBlank : false,
					scope : this,
					renderer : function(value) {
			
						var rowIndex = this.storewtsxa.find("fid", "" + value);
						if (rowIndex < 0)
							return '';
						var record = this.storewtsxa.getAt(rowIndex);
						return record ? record.get('fname') : '';
					},
					editor : new Ext.grid.GridEditor(new Ext.form.ComboBox({
								allowBlank : false,
								listeners : {
									scope : this,
									'select' : function(combo, record, index) {
										var B = _this.editeditPanel
												.getSelectionModel()
												.getSelections();
										B[0].data['wtsxname'] = combo.getRawValue();
									},
									'focus' : function() {
										var B = _this.editeditPanel
												.getSelectionModel()
												.getSelections();
										if (Ext.isEmpty(B[0].get('qxlx'))) {
											return false;
										} else {
											_this.storewtsx.load({
														params : {
															"condition/sid" : B[0]
																	.get('qxlx')

														}
													});
										}
									},
									'beforequery' : function() {
										var B = _this.editeditPanel
												.getSelectionModel()
												.getSelections();
										if (Ext.isEmpty(B[0].get('qxlx'))) {
											return false;
										}
									},
									'specialkey' : function(field, e) {
										if (e.getKey() == Ext.EventObject.ENTER) {
											return false;
										}
									}
								},
								triggerAction : "all",
								lazyRender : true,
								store : this.storewtsx,
								name : "wtsx",
								mode : "local",
								anchor : '100%',
								editable : true,
								displayField : "fname",
								valueField : "fid",
								forceSelection : true,

								emptyText : "请选择"

							}))
				},{
					header : "wtsxname",
					dataIndex : "wtsxname",
					hidden : true
				}, {
					header : "故障等级",
					dataIndex : "gzdj",
					width : 80,
					editor : new Ext.grid.GridEditor(new Ext.bz.dict.DictComboBox(
							{
								dictData : GE_INSPECT_CJWTDJ,
								allowBlank : false,
								editable : true
							}))
				}]);
		this.editeditPanel = new Ext.fn.EditListPanel({
			title : '不合格项',
			autoScroll : true,
			clicksToEdit : 1,
			colspan : 6,
			columns : 6,
			height : 320,
			saveUrl : '...',
			delUrl : '...',
			subAll : false,
			hsPage : false,
			sm : selModel,
			cm : colModel,
			tbar : [{
						xtype : 'button',
						text : "新增",
						iconCls : 'icon-application_add',
						scope : this,
						handler : this.onAddeditmx
					}, "-", {
						xtype : 'button',
						text : "删除",
						iconCls : 'icon-application_delete',
						scope : this,
						handler : this.onDeleditmx
					}],
			store : new Ext.data.JsonStore({
				autoLoad : false,
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.loadinspectwxlljydetail.biz.ext',
				root : 'data',
				fields : [{
							name : 'pkid'
						}, {
							name : 'wxllno'
						}, {
							name : 'wtms'
						}, {
							name : 'wtbw'
						}, {
							name : 'qxlx'
						}, {
							name : 'wtsx'
						}, {
							name : 'gzdj'
						}, {
							name : 'qxlxname'
						}, {
							name : 'wtsxname'
						}]
			})
		})
	};
	this.initqueryeditPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel();
		var colModel = new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(),
				selModel, {
					header : "PKID",
					dataIndex : "pkid",
					hidden : true
				}, {
					header : "问题描述",
					dataIndex : "wtms",
					width : 200
				}, {
					header : "部位",
					dataIndex : "wtbw",
					ref : '../wtbw'
				}, {
					header : "缺陷类型",
					dataIndex : "sname",
					ref : '../sname',
					width : 150
				}, {
					header : "问题属性",
					dataIndex : "fname",
					ref : '../fname',
					width : 150
				}, {
					header : "故障等级",
					dataIndex : "gzdj",
					width : 80
				}]);
		this.queryeditPanel = new Ext.fn.ListPanel({
			title : '不合格项',
			autoScroll : true,
			clicksToEdit : 1,
			colspan : 6,
			columns : 6,
			height : 320,
			saveUrl : '...',
			delUrl : '...',
			subAll : false,
			hsPage : false,
			sm : selModel,
			cm : colModel,
			store : new Ext.data.JsonStore({
				autoLoad : false,
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.loadinspectwxlljydetail.biz.ext',
				root : 'data',
				fields : [{
							name : 'pkid'
						}, {
							name : 'wxllno'
						}, {
							name : 'wtms'
						}, {
							name : 'wtbw'
						}, {
							name : 'qxlx'
						}, {
							name : 'wtsx'
						}, {
							name : 'gzdj'
						}, {
							name : 'fname'
						}, {
							name : 'sname'
						}]
			})
		})
	};
}
