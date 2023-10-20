/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr = function() {
	this.initPanel = function() {
		this.rec = {};
		this.recb = {};
		this.initQueryPanel();
		this.initinspectcjzceditPanel();
		this.initinspectcjbceditPanel();
		this.initinspectqjzceditPanel();
		this.initinspectqjbceditPanel();
		this.initCjeditWindow();
		this.initQjeditWindow();
		this.initCjbceditWindow();
		this.initQjbceditWindow();
		this.initListPanel();
		this.initOperatorListPanel();// 弹出窗体操作员列
		this.initqjOperatorListPanel();// 弹出窗体操作员列
		this.initPopWindow();
		this.initqjPopWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'inspectrecordceditmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 210,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 质检记录查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/zasnh',
								fieldLabel : '送货单号'
							}, {
								xtype : 'textfield',
								name : 'condition/recordid',
								fieldLabel : '质检记录号'
							}, {
								xtype : 'textfield',
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/txz01',
								fieldLabel : '物料描述'
							}, {
								xtype : 'textfield',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								name : 'condition/lifnr',
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								name : 'condition/name1',
								fieldLabel : '供应商名称'
							}, {
								xtype : 'factorycombobox',
								defaultValue : '3000',
								columns : 1,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/wltm',
								fieldLabel : '物料条码'
							},{
								xtype : 'textfield',
								name : 'condition/ebeln',
								fieldLabel : '采购订单号'
							},{
								xtype : 'textfield',
								name : 'condition/tranu',
								fieldLabel : '检验人员'
							},{
								xtype : 'dictcombobox',
								name : 'condition/zjlb',
								dataIndex : 'condition/zjlb',
								hiddenName : 'condition/zjlb',
								fieldLabel : '质检类别',
								emptyText : '',
								dictData : GE_INSPECT_ZJLB
							}, {
								xtype : 'dictcombobox',
								name : 'condition/jgpd',
								dataIndex : 'condition/jgpd',
								hiddenName : 'condition/jgpd',
								fieldLabel : '结果判定',
								emptyText : '',
								dictData : GE_INSPECT_JGPD
							}, {
								xtype : 'dictcombobox',
								name : 'condition/zcbz',
								dataIndex : 'condition/zcbz',
								hiddenName : 'condition/zcbz',
								fieldLabel : '保存状态',
								emptyText : '',
								dictData : GE_INSPECT_ZCBZ
							},{
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createendate'],
								fieldLabel : "记录创建时间",
								format : "Y-m-d"
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 质检记录列表 】',
			hsPage : true,
			tbar : [{
						text : '维护记录',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onedit
					}, {
						text : '查看记录',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onquery
					}, {
						text : '删除暂存质检记录',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.ondel
					}],
			selModel : selModel,
			delUrl : '...',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'recordid',
						header : '质检记录ID'
					}, {
						xtype : 'dictcolumn',
						dictData : GE_INSPECT_ZCBZ,
						dataIndex : 'zcbz',
						header : '质检状态'
					}, {
						dataIndex : 'lifnr',
						header : '供应商代码'
					}, {
						dataIndex : 'name1',
						header : '供应商名称',
						width : 150
					}, {
						dataIndex : 'zasnh',
						header : '送货单号',
						width : 150
					}, {
						dataIndex : 'zasnp',
						header : '送货单行号'
					}, {
						dataIndex : 'ebeln',
						header : '采购订单号'
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号'
					}, {
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'txz01',
						header : '物料描述',
						width : 250
					}, {
						dataIndex : 'wltm',
						header : '物料条码'
					}, {
						dataIndex : 'werks',
						header : '工厂'
					}, {
						dataIndex : 'shsl',
						header : '送货数量'
					}, {
						dataIndex : 'cjsl',
						header : '抽检数量'
					}, {
						dataIndex : 'bhgsl',
						header : ' 不合格数量'
					}, {
						dataIndex : 'krksl',
						header : '可入库数量'
					}, {
						xtype : 'dictcolumn',
						dictData : GE_INSPECT_JGPD,
						dataIndex : 'jgpd',
						header : '结果判定'
					}, {
						dataIndex : 'zjlb',
						header : '质检类别'
					}, {
						dataIndex : 'tranu',
						header : '检验人员'
					}, {
						dataIndex : 'trant',
						header : '检验时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectcjqjrecord.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'recordid'
						}, {
							name : 'createtime'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'zasnh'
						}, {
							name : 'zasnp'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'matnr'
						}, {
							name : 'txz01'
						}, {
							name : 'wltm'
						}, {
							name : 'shsl'
						}, {
							name : 'cjsl'
						}, {
							name : 'bhgsl'
						}, {
							name : 'krksl'
						}, {
							name : 'jgpd'
						}, {
							name : 'werks'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}, {
							name : 'zcbz'
						}, {
							name : 'zjlb'
						}]
			})
		});
	}
	this.initCjeditWindow = function() {
		var cjeditWindow = Ext.id();
		this.cjzcattachId = Ext.id();
		var _this = this;
		this.cjeditWindow = this.cjeditWindow || new Ext.fn.FormWindow({
			title : '抽检记录表草稿',
			height : 600,
			width : 800,
			id : cjeditWindow,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.loadcjzcrecordnote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'textfield',
							name : 'cjrecordid',
							readOnly : true,
							fieldLabel : '抽检记录表单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'werks',
							hidden : true,
							fieldLabel : '工厂'
						}, {
							xtype : 'textfield',
							name : 'zjlb',
							hidden : true,
							fieldLabel : '质检类别'
						}, {
							xtype : 'textfield',
							name : 'pkid',
							hidden : true,
							fieldLabel : 'pkid'
						}, {
							xtype : 'datetimefield',
							name : 'createtime',
							readOnly : true,
							fieldLabel : '记录表生成时间',
							value : sysdate,
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'lifnr',
							readOnly : true,
							fieldLabel : '供应商代码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'name1',
							readOnly : true,
							fieldLabel : '供应商名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnh',
							readOnly : true,
							fieldLabel : '送货单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnp',
							readOnly : true,
							fieldLabel : '送货单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebeln',
							readOnly : true,
							fieldLabel : '采购订单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebelp',
							readOnly : true,
							fieldLabel : '采购订单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'matnr',
							readOnly : true,
							fieldLabel : '物料编码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'txz01',
							readOnly : true,
							fieldLabel : '物料描述',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'wltm',
							ref : '../wltm',
							fieldLabel : '物料条码',
							colspan : 3
						}, {
							xtype : 'numberfield',
							name : 'shsl',
							readOnly : true,
							ref : '../shsl',
							allowNegative : false,
							fieldLabel : '送检批量',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'cjsl',
							allowBlank : false,
							allowNegative : false,
							fieldLabel : '抽检数',
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var a = Ext.getCmp(cjeditWindow).items.items[0].form
											.findField('shsl').getValue();
									if (newValue > a) {
										o.setValue(a)
									}
								}
							},
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'bhgsl',
							allowBlank : false,
							fieldLabel : '不合格数',
							allowNegative : false,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var a = Ext.getCmp(cjeditWindow).items.items[0].form
											.findField('cjsl').getValue();
									if (Ext.isEmpty(a)) {
										o.setValue(a)
										Ext.Msg.alert('提示', '请先输入抽检数量！')
										return
									}
									var b = Ext.getCmp(cjeditWindow).items.items[0].form
											.findField('shsl').getValue();
									if (newValue > a) {
										o.setValue(a)
										Ext.getCmp(cjeditWindow).items.items[0].form
												.findField('krksl').setValue(b
														- a);
									} else {
										Ext.getCmp(cjeditWindow).items.items[0].form
												.findField('krksl').setValue(b
														- newValue);
									}
								}
							},
							ref : '../bhgsl',
							colspan : 1
						}, this.inspectcjzceditPanel, {
							colspan : 3,
							width : 700,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cjzcattachId,
							postParams : {
								relationId : 0,
								groupId : 'cjinspectfile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}, {
							xtype : 'numberfield',
							name : 'krksl',
							allowBlank : false,
							fieldLabel : '可入库数量',
							allowNegative : false,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var a = Ext.getCmp(cjeditWindow).items.items[0].form
											.findField('shsl').getValue();
									var b = Ext.getCmp(cjeditWindow).items.items[0].form
											.findField('cjsl').getValue();
									var c = Ext.getCmp(cjeditWindow).items.items[0].form
											.findField('bhgsl').getValue();
									if (Ext.isEmpty(b)) {
										o.setValue(b)
										Ext.Msg.alert('提示', '请先输入抽检数量！')
										return
									}
									if (Ext.isEmpty(c)) {
										o.setValue(c)
										Ext.Msg.alert('提示', '请先输入不合格数量！')
										return
									}
									if (newValue > a) {
										o.setValue(a)
									}
								}
							},
							colspan : 1
						}, {
							xtype : 'radiogroup',
							name : 'jgType',
							allowBlank : false,
							colspan : 2,
							fieldLabel : '结果判定',
							items : [{
										boxLabel : '合格',
										name : 'jgpd',
										inputValue : 1,
										checked : true
									}, {
										boxLabel : '拒收',
										name : 'jgpd',
										inputValue : 2
									}]
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '暂存',
							scope : this,
							handler : function() {
								_this.onzssaveOk();
							}
						}, {
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
	this.initCjbceditWindow = function() {
		var cjbceditWindow = Ext.id();
		this.cjbcattachId = Ext.id();
		var _this = this;
		this.cjbceditWindow = this.cjbceditWindow || new Ext.fn.FormWindow({
			title : '抽检记录表维护',
			height : 600,
			width : 800,
			id : cjbceditWindow,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.loadcjzcrecordnote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'textfield',
							name : 'cjrecordid',
							readOnly : true,
							fieldLabel : '抽检记录表单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'werks',
							hidden : true,
							fieldLabel : '工厂'
						}, {
							xtype : 'textfield',
							name : 'zjlb',
							hidden : true,
							fieldLabel : '质检类别'
						}, {
							xtype : 'textfield',
							name : 'pkid',
							hidden : true,
							fieldLabel : 'pkid'
						}, {
							xtype : 'datetimefield',
							name : 'createtime',
							readOnly : true,
							fieldLabel : '记录表生成时间',
							value : sysdate,
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'lifnr',
							readOnly : true,
							fieldLabel : '供应商代码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'name1',
							readOnly : true,
							fieldLabel : '供应商名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnh',
							readOnly : true,
							fieldLabel : '送货单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnp',
							readOnly : true,
							fieldLabel : '送货单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebeln',
							readOnly : true,
							fieldLabel : '采购订单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebelp',
							readOnly : true,
							fieldLabel : '采购订单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'matnr',
							readOnly : true,
							fieldLabel : '物料编码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'txz01',
							readOnly : true,
							fieldLabel : '物料描述',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'wltm',
							ref : '../wltm',
							readOnly : true,
							fieldLabel : '物料条码',
							colspan : 3
						}, {
							xtype : 'numberfield',
							name : 'shsl',
							readOnly : true,
							ref : '../shsl',
							allowNegative : false,
							fieldLabel : '送检批量',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'cjsl',
							ref : '../cjsl',
							allowBlank : false,
							allowNegative : false,
							readOnly : true,
							fieldLabel : '抽检数',
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var a = Ext.getCmp(cjbceditWindow).items.items[0].form
											.findField('shsl').getValue();
									if (newValue > a) {
										o.setValue(a)
									}
								}
							},
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'bhgsl',
							allowBlank : false,
							fieldLabel : '不合格数',
							ref : '../bhgsl',
							readOnly : true,
							allowNegative : false,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var a = Ext.getCmp(cjbceditWindow).items.items[0].form
											.findField('cjsl').getValue();
									if (Ext.isEmpty(a)) {
										o.setValue(a)
										Ext.Msg.alert('提示', '请先输入抽检数量！')
										return
									}
									var b = Ext.getCmp(cjbceditWindow).items.items[0].form
											.findField('shsl').getValue();
									if (newValue > a) {
										o.setValue(a)
										Ext.getCmp(cjbceditWindow).items.items[0].form
												.findField('krksl').setValue(b
														- a);
									} else {
										Ext.getCmp(cjbceditWindow).items.items[0].form
												.findField('krksl').setValue(b
														- newValue);
									}
								}
							},
							ref : '../bhgsl',
							colspan : 1
						}, this.inspectcjbceditPanel, {
							colspan : 3,
							width : 700,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cjbcattachId,
							postParams : {
								relationId : 0,
								groupId : 'cjinspectfile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}, {
							xtype : 'numberfield',
							name : 'krksl',
							ref : '../krksl',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '可入库数量',
							allowNegative : false,
							listeners : {
								'change' : function(o, newValue, oldValue) {
									var a = Ext.getCmp(cjbceditWindow).items.items[0].form
											.findField('shsl').getValue();
									var b = Ext.getCmp(cjbceditWindow).items.items[0].form
											.findField('cjsl').getValue();
									var c = Ext.getCmp(cjbceditWindow).items.items[0].form
											.findField('bhgsl').getValue();
									if (Ext.isEmpty(b)) {
										o.setValue(b)
										Ext.Msg.alert('提示', '请先输入抽检数量！')
										return
									}
									if (Ext.isEmpty(c)) {
										o.setValue(c)
										Ext.Msg.alert('提示', '请先输入不合格数量！')
										return
									}
									if (newValue > a) {
										o.setValue(a)
									}
								}
							},
							colspan : 1
						}, {
							xtype : 'radiogroup',
							name : 'jgType',
							ref : '../jgType',
							disabled : true,
							allowBlank : false,
							colspan : 2,
							fieldLabel : '结果判定',
							items : [{
										boxLabel : '合格',
										name : 'jgpd',
										inputValue : 1,
										checked : true
									}, {
										boxLabel : '拒收',
										name : 'jgpd',
										inputValue : 2
									}]
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}, {
							text : '撤销确认',
							scope : this,
							ref : '../jcsd',
							hidden : false,
							handler : function() {
								_this.jcsd();
							}
						}]
			}
		});
	}

	this.initQjeditWindow = function() {
		var qjeditWindow = Ext.id();
		this.qjzcattachId = Ext.id();
		var _this = this;
		this.qjeditWindow = this.qjeditWindow || new Ext.fn.FormWindow({
			title : '全检质检记录表维护',
			height : 600,
			width : 800,
			id : qjeditWindow,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.loadqjzcrecordnote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'textfield',
							name : 'qjrecordid',
							readOnly : true,
							fieldLabel : '全检记录表单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'werks',
							hidden : true,
							fieldLabel : '工厂'
						}, {
							xtype : 'textfield',
							name : 'zjlb',
							hidden : true,
							fieldLabel : '质检类别'
						}, {
							xtype : 'textfield',
							name : 'pkid',
							hidden : true,
							fieldLabel : 'pkid'
						}, {
							xtype : 'datetimefield',
							name : 'createtime',
							readOnly : true,
							fieldLabel : '记录表生成时间',
							value : sysdate,
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'lifnr',
							readOnly : true,
							fieldLabel : '供应商代码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'name1',
							readOnly : true,
							fieldLabel : '供应商名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnh',
							readOnly : true,
							fieldLabel : '送货单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnp',
							readOnly : true,
							fieldLabel : '送货单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebeln',
							readOnly : true,
							fieldLabel : '采购订单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebelp',
							readOnly : true,
							fieldLabel : '采购订单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'matnr',
							readOnly : true,
							fieldLabel : '物料编码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'txz01',
							readOnly : true,
							fieldLabel : '物料描述',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'wltm',
							allowBlank : false,
							readOnly : true,
							ref : '../wltm',
							fieldLabel : '物料条码',
							colspan : 3
						}, this.inspectqjzceditPanel, {
							colspan : 3,
							width : 700,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.qjzcattachId,
							postParams : {
								relationId : 0,
								groupId : 'qjinspectfile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}, {
							xtype : 'radiogroup',
							name : 'jgType',
							allowBlank : false,
							colspan : 3,
							fieldLabel : '结果判定',
							items : [{
										boxLabel : '合格',
										name : 'jgpd',
										inputValue : 1,
										checked : true
									}, {
										boxLabel : '不合格',
										name : 'jgpd',
										inputValue : 2
									}, {
										boxLabel : '让步接收',
										name : 'jgpd',
										inputValue : 3
									}]
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '暂存',
							scope : this,
							handler : function() {
								_this.onqjzssaveOk();
							}
						}, {
							text : '确认',
							scope : this,
							handler : function() {
								_this.onqjsaveOk();
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
	this.initQjbceditWindow = function() {
		var qjbceditWindow = Ext.id();
		this.qjbcattachId = Ext.id();
		var _this = this;
		this.qjbceditWindow = this.qjbceditWindow || new Ext.fn.FormWindow({
			title : '全检质检记录表维护',
			height : 600,
			width : 800,
			id : qjbceditWindow,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.loadqjzcrecordnote.biz.ext',
				saveUrl : '...',
				fields : [{
							xtype : 'textfield',
							name : 'qjrecordid',
							readOnly : true,
							fieldLabel : '全检记录表单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'werks',
							hidden : true,
							fieldLabel : '工厂'
						}, {
							xtype : 'textfield',
							name : 'zjlb',
							hidden : true,
							fieldLabel : '质检类别'
						}, {
							xtype : 'textfield',
							name : 'pkid',
							hidden : true,
							fieldLabel : 'pkid'
						}, {
							xtype : 'datetimefield',
							name : 'createtime',
							readOnly : true,
							fieldLabel : '记录表生成时间',
							value : sysdate,
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'lifnr',
							readOnly : true,
							fieldLabel : '供应商代码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'name1',
							readOnly : true,
							fieldLabel : '供应商名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnh',
							readOnly : true,
							fieldLabel : '送货单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zasnp',
							readOnly : true,
							fieldLabel : '送货单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebeln',
							readOnly : true,
							fieldLabel : '采购订单号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'ebelp',
							readOnly : true,
							fieldLabel : '采购订单行号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'matnr',
							readOnly : true,
							fieldLabel : '物料编码',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'txz01',
							readOnly : true,
							fieldLabel : '物料描述',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'wltm',
							readOnly : true,
							ref : '../wltm',
							fieldLabel : '物料条码',
							colspan : 3
						}, this.inspectqjbceditPanel, {
							colspan : 3,
							width : 700,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.qjbcattachId,
							postParams : {
								relationId : 0,
								groupId : 'qjinspectfile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}, {
							xtype : 'radiogroup',
							name : 'jgType',
							allowBlank : false,
							colspan : 3,
							disabled : true,
							fieldLabel : '结果判定',
							items : [{
										boxLabel : '合格',
										name : 'jgpd',
										inputValue : 1,
										checked : true
									}, {
										boxLabel : '不合格',
										name : 'jgpd',
										inputValue : 2
									}, {
										boxLabel : '让步接收',
										name : 'jgpd',
										inputValue : 3
									}]
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}, {
							text : '撤销确认',
							scope : this,
							ref : '../qjjcsd',
							hidden : false,
							handler : function() {
								_this.qjjcsd();
							}
						}]
			}
		});
	}
	this.initinspectcjzceditPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.inspectcjzceditPanel = new Ext.fn.EditListPanel({
			title : '抽检记录明细',
			autoScroll : true,
			clicksToEdit : 1,
			colspan : 3,
			height : 300,
			saveUrl : '...',
			delUrl : '...',
			hsPage : false,
			tbar : [{
						text : '添加故障类别',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelect
					}, {
						text : '移除故障类别',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelOperator
					}],
			sm : selModel,

			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "故障代码",
						dataIndex : "zjwtid",
						width : 80
					}, {
						header : "故障描述",
						dataIndex : "zjwtms",
						width : 180
					}, {
						header : "故障等级",
						dataIndex : "zjwtdj",
						width : 80,
						allowBlank : false,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.bz.dict.DictComboBox(
								{
									dictData : GE_INSPECT_CJWTDJ,
									editable : false,
									allowBlank : false,
									listeners : {
										'change' : function(o, newValue,
												oldValue) {
											_this.rec.data['zjwtdj'] = newValue;
											_this.inspectcjzceditPanel.view
													.refresh();
										}
									}
								}))
					}, {
						header : "故障计数",
						dataIndex : "zjwtjs",
						width : 180,
						allowBlank : false,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									decimalPrecision : 2,
									allowNegative : false,
									allowBlank : false,
									listeners : {
										'change' : function(o, newValue,
												oldValue) {
											_this.rec.data['zjwtjs'] = newValue;
											_this.inspectcjzceditPanel.view
													.refresh();
										}
									}
								}))
					}, {
						header : "备注",
						dataIndex : "text",
						width : 300,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									listeners : {
										'change' : function(o, newValue,
												oldValue) {
											_this.rec.data['text'] = newValue;
											_this.inspectcjzceditPanel.view
													.refresh();
										}
									}
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.getinspectzjcjrecordmx.biz.ext',
				root : 'data',
				fields : [{
							name : 'pkid'
						}, {
							name : 'cjrecordid'
						}, {
							name : 'zjwtid'
						}, {
							name : 'zjwtms'
						}, {
							name : 'zjwtdj'
						}, {
							name : 'zjwtjs'
						}, {
							name : 'text'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}]
			})
		})
	};
	this.initinspectcjbceditPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.inspectcjbceditPanel = new Ext.fn.EditListPanel({
			title : '抽检记录明细查看',
			autoScroll : true,
			clicksToEdit : 1,
			colspan : 3,
			height : 300,
			saveUrl : '...',
			delUrl : '...',
			hsPage : false,
			sm : selModel,
            
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "故障代码",
						dataIndex : "zjwtid",
						width : 80
					}, {
						header : "故障描述",
						dataIndex : "zjwtms",
						width : 180
					}, {
						header : "故障等级",
						dataIndex : "zjwtdj",
						width : 80,
						editable : false,
						allowBlank : false
					}, {
						header : "故障计数",
						dataIndex : "zjwtjs",
						width : 180,
						editable : false,
						allowBlank : false
					}, {
						header : "备注",
						dataIndex : "text",
						width : 300,
						editable : false
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.getinspectzjcjrecordmx.biz.ext',
				root : 'data',
				fields : [{
							name : 'pkid'
						}, {
							name : 'cjrecordid'
						}, {
							name : 'zjwtid'
						}, {
							name : 'zjwtms'
						}, {
							name : 'zjwtdj'
						}, {
							name : 'zjwtjs'
						}, {
							name : 'text'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}]
			})
		})
	};
	this.initinspectqjzceditPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.inspectqjzceditPanel = new Ext.fn.EditListPanel({
			title : '全检记录表明细',
			autoScroll : true,
			clicksToEdit : 1,
			colspan : 3,
			height : 320,
			saveUrl : '...',
			delUrl : '...',
			hsPage : false,
			tbar : [{
						text : '添加检验项目',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onqjSelect
					}, {
						text : '移除检验项目',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onqjDelOperator
					}],
			sm : selModel,

			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "检验项目",
						dataIndex : "jyxm",
						width : 120
					}, {
						header : "检验标准",
						dataIndex : "jybz",
						width : 240
					}, {
						header : "实际值",
						dataIndex : "qjsjz",
						width : 300,
						allowBlank : false,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									listeners : {
										'change' : function(o, newValue,
												oldValue) {
											_this.recb.data['qjsjz'] = newValue;
											_this.inspectqjzceditPanel.view
													.refresh();
										}
									}
								}))
					}, {
						header : "判定",
						dataIndex : "zjwtjs",
						width : 80,
						allowBlank : false,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.bz.dict.DictComboBox(
								{
									dictData : GE_INSPECT_QJPD,
									editable : false,
									allowBlank : false,
									listeners : {
										'change' : function(o, newValue,
												oldValue) {
											_this.recb.data['zjwtjs'] = newValue;
											_this.inspectqjzceditPanel.view
													.refresh();
										}
									}
								}))

					}, {
						header : "备注",
						dataIndex : "text2",
						width : 300,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									listeners : {
										'change' : function(o, newValue,
												oldValue) {
											_this.recb.data['text2'] = newValue;
											_this.inspectqjzceditPanel.view
													.refresh();
										}
									}
								}))
					}, {
						header : "检测方法",
						dataIndex : "text",
						width : 300
						//css : 'background:#c7c7c7;',
						//editor : new Ext.grid.GridEditor(new Ext.form.TextField(
						//		{
						//			listeners : {
						//				'change' : function(o, newValue,
						//						oldValue) {
						//					_this.recb.data['text'] = newValue;
						//					_this.inspectqjzceditPanel.view
						//							.refresh();
						//				}
						//			}
						//		}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.getInspectzjqjrecordmx.biz.ext',
				root : 'data',
				fields : [{
							name : 'pkid'
						}, {
							name : 'qjrecordid'
						}, {
							name : 'jyxm'
						}, {
							name : 'jybz'
						}, {
							name : 'qjsjz'
						}, {
							name : 'zjwtjs'
						}, {
							name : 'text'
						},, {
							name : 'text2'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}]
			})
		})
	};
	this.initinspectqjbceditPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.inspectqjbceditPanel = new Ext.fn.EditListPanel({
			title : '全检记录表明细',
			autoScroll : true,
			colspan : 3,
			height : 300,
			saveUrl : '...',
			delUrl : '...',
			hsPage : false,
			sm : selModel,

			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "检验项目",
						dataIndex : "jyxm",
						width : 120
					}, {
						header : "检验标准",
						dataIndex : "jybz",
						width : 240
					}, {
						header : "实际值",
						dataIndex : "qjsjz",
						width : 300,
						allowBlank : false
					}, {
						header : "判定",
						dataIndex : "zjwtjs",
						width : 80,
						allowBlank : false
					}, {
						header : "备注",
						dataIndex : "text2",
						width : 300
					}, {
						header : "检测方法",
						dataIndex : "text",
						width : 300
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.getInspectzjqjrecordmx.biz.ext',
				root : 'data',
				fields : [{
							name : 'pkid'
						}, {
							name : 'qjrecordid'
						}, {
							name : 'jyxm'
						}, {
							name : 'jybz'
						}, {
							name : 'qjsjz'
						}, {
							name : 'zjwtjs'
						}, {
							name : 'text'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}]
			})
		})
	};
	this.initPopWindow = function() {
		this.popWindow = new Ext.Window({
					title : '选择故障类别',
					closeAction : 'hide',
					layout : 'fit',
					padding : '5 5 5 5',
					modal : true,
					width : 700,
					height : 500,
					buttonAlign : 'center',
					currentRole : {},
					items : [this.operatorListPanel],
					buttons : [{
						text : '添加',
						scope : this,
						handler : function() {
							var selections = this.operatorListPanel.selModel
									.getSelections();
							this.popWindow.fireEvent('addOperator', selections);

						}
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.popWindow.hide();
						}
					}],
					tbar : [{
								xtype : 'label',
								text : '故障代码:'
							}, {
								xtype : 'textfield',
								ref : '../zjwtid',
								name : 'zjwtid'
							}, '-', {
								xtype : 'label',
								text : '故障描述:'
							}, {
								xtype : 'textfield',
								ref : '../zjwtms',
								name : 'zjwtms'
							}, '-', {
								text : '查询',
								scope : this,
								handler : function() {
									var _zjwtid = this.popWindow.zjwtid
											.getValue();
									var _zjwtms = this.popWindow.zjwtms
											.getValue();
									Ext.apply(this.popWindow.currentRole, {
												zjwtid : _zjwtid,
												zjwtms : _zjwtms
											})
									this.operatorListPanel
											.doQuery(this.popWindow.currentRole);
								}
							}, '-', {
								text : '重置',
								scope : this,
								handler : function() {
									this.popWindow.zjwtid.setValue();
									this.popWindow.zjwtms.setValue();
								}
							}],
					loadOperator : function(role) {
						this.operatorListPanel.doQuery(role);
					}

				})

	};
	this.initOperatorListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.operatorListPanel = new Ext.fn.ListPanel({
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "故障代码",
						autoWidth : true,
						dataIndex : "zjwtid"
					}, {
						header : "故障描述",
						autoWidth : true,
						width : 300,
						dataIndex : "zjwtms"
					}],
			sm : selModel,
			pageSize : 100,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectwtwh.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
						}, {
							name : 'bukrs'
						}, {
							name : 'zjwtid'
						}, {
							name : 'zjwtms'
						}, {
							name : 'statu'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'condition/zjwtid' : val.zjwtid,
					'condition/zjwtms' : val.zjwtms
				};
				this.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : this.pagingToolbar.pageSize
							}
						});
			}

		})

	};

	this.initqjPopWindow = function() {
		this.qjpopWindow = new Ext.Window({
			title : '选择检验项目',
			closeAction : 'hide',
			layout : 'fit',
			padding : '5 5 5 5',
			modal : true,
			width : 700,
			height : 500,
			buttonAlign : 'center',
			currentRole : {},
			items : [this.qjoperatorListPanel],
			buttons : [{
				text : '添加',
				scope : this,
				handler : function() {
					var selections = this.qjoperatorListPanel.selModel
							.getSelections();
					this.qjpopWindow.fireEvent('addOperator', selections);

				}
			}, {
				text : '关闭',
				scope : this,
				handler : function() {
					this.qjpopWindow.hide();
				}
			}],
			tbar : [{
						xtype : 'label',
						text : '检验项目:'
					}, {
						xtype : 'textfield',
						ref : '../jyxm',
						name : 'jyxm'
					}, '-', {
						xtype : 'label',
						text : '检验标准:'
					}, {
						xtype : 'textfield',
						ref : '../jybz',
						name : 'jybz'
					}, '-', {
						text : '查询',
						scope : this,
						handler : function() {
							var _jyxm = this.qjpopWindow.jyxm.getValue();
							var _jybz = this.qjpopWindow.jybz.getValue();
							var _matnr = this.qjeditWindow.items.items[0].form
									.findField('matnr').getValue();
							var _werks = this.qjeditWindow.items.items[0].form
									.findField('werks').getValue()
							Ext.apply(this.qjpopWindow.currentRole, {
										jyxm : _jyxm,
										jybz : _jybz,
										matnr : _matnr,
										werks : _werks
									})
							this.qjoperatorListPanel
									.doQuery(this.qjpopWindow.currentRole);
						}
					}, '-', {
						text : '重置',
						scope : this,
						handler : function() {
							this.qjpopWindow.jyxm.setValue();
							this.qjpopWindow.jybz.setValue();
						}
					}],
			loadOperator : function(role) {
				this.qjoperatorListPanel.doQuery(role);
			}

		})

	};

	/**
	 * 具体操作员选择
	 */
	this.initqjOperatorListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.qjoperatorListPanel = new Ext.fn.ListPanel({
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "检验项目",
						autoWidth : true,
						dataIndex : "jyxm"
					}, {
						header : "检验标准",
						autoWidth : true,
						width : 300,
						dataIndex : "jybz"
					},{
						header : "检测方法",
						autoWidth : true,
						width : 200,
						dataIndex : "text"
					}],
			sm : selModel,
			pageSize : 100,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectqjbzzbxz.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'jyxm'
						}, {
							name : 'jybz'
						}, {
							name : 'werks'
						}, {
							name : 'statu'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}, {
							name : 'text'
						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'condition/jyxm' : val.jyxm,
					'condition/jybz' : val.jybz,
					'condition/matnr' : val.matnr,
					'condition/werks' : val.werks
				};
				this.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : this.pagingToolbar.pageSize
							}
						});
			}

		})

	};
}
