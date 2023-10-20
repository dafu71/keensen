/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 质检记录表生成 创建日期： 2015-06-23 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr = function() {
	this.initPanel = function() {
		this.rec = {};
		this.recb = {};
		this.initrcQueryPanel();
		this.initrcEditPanel();
		this.initinspectrceditPanel();
		this.initqjinspectrceditPanel();
		this.initrctwoPanel();
		this.initrcListPanel();
		this.initCreateWindow();
		this.initqjCreateWindow();
		this.initOperatorListPanel();// 弹出窗体操作员列
		this.initPopWindow();
		this.initqjOperatorListPanel();// 弹出窗体操作员列表
		this.initqjPopWindow();// 弹出选择操作员窗体
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					title : '质检记录生成',
					renderTo : 'inspectrecordcreatemgr',
					panels : [this.rctwoPanel, this.rclistPanel]
				});
	}
	this.initrctwoPanel = function() {
		this.rctwoPanel = new Ext.Panel({
					collapsible : true,
					titleCollapse : true,
					height : 220,
					layout : 'form',
					items : [this.rcqueryPanel, this.rceditPanel]
				})
	};
	this.initrcEditPanel = function() {
		this.zasnh1 = Ext.id();
		this.rceditPanel = new Ext.fn.EditPanel({
			columns : 3,
			loadUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.getInspectrc.biz.ext',
			saveUrl : '...',
			title : '【 送货单抬头 】',
			fields : [{
						xtype : 'textfield',
						name : 'zasnh',
						readOnly : true,
						id : this.zasnh1,
						fieldLabel : '送货单号',
						columns : 1
					}, {
						xtype : 'textfield',
						name : 'lifnr',
						readOnly : true,
						fieldLabel : '供应商',
						columns : 1
					}, {
						xtype : 'textfield',
						name : 'name1',
						readOnly : true,
						fieldLabel : '供应商描述',
						columns : 1
					}, {
						xtype : 'datetimefield',
						readOnly : true,
						name : 'arrivedate',
						fieldLabel : '预计到货时间',
						colspan : 1,
						format : "Y-m-d H:i:s"
					}, {
						xtype : 'datetimefield',
						name : 'createtime',
						readOnly : true,
						fieldLabel : '创建时间',
						colspan : 1,
						format : 'Y-m-d H:i:s '
						// value : new Date()
				}	, {
						xtype : 'textfield',
						name : 'zjlb',
						readOnly : true,
						fieldLabel : '质检类别',
						columns : 1
					}]
				/*
				 * buttons : [{ text : '保存', scope : this, handler :
				 * this.onSaveok }]
				 */

		})
	}

	this.initrcQueryPanel = function() {
		this.zasnh = Ext.id();
		this.rcqueryPanel = new Ext.fn.QueryPanel({
			height : 105,
			columns : 3,
			border : true,
			title : '【 送货单查询 】',

			/*
			 * keys : [{ key : 13, fn : function() {
			 * document.getElementById("enter").click();
			 * document.getElementById("reset").click(); }, scope : this }],
			 */
			fields : [{
						xtype : 'textfield',
						name : 'query/zasnh',
						allowBlank : false,
						id : this.zasnh,
						fieldLabel : '送货单号',
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									document.getElementById("enter").click();
									document.getElementById("reset").click();
								}

							}
						}
					}],
			buildButtons : function() {
				this.buttons = [{
					text : "查询",
					ref : "../queryButton",
					id : "enter",
					iconCls : "icon-application_form_magnify",
					scope : this,
					handler : function() {
						var A = this.getForm().getValues();
						var fs = Ext.lib.Ajax
								.serializeForm(this.getForm().el.dom);
						if (this.form.isValid()) {
							this.fireEvent("query", this, A)
						}
					}
				}, {
					text : "重置",
					ref : "../restButton",
					id : "reset",
					iconCls : "icon-application_reset",
					scope : this,
					handler : function() {
						var A = this.getForm().getValues();
						var B = this.fireEvent("reset", this, A);
						if (B) {
							this.getForm().reset();
							var sdname = "";
							var sdvalue = "";
							Ext.each(this.findByType("datefield"),
									function(dfd) {
										if (dfd.name.indexOf("/startDate") > -1) {
											sdname = dfd.name;
											sdname = sdname.substring(0, sdname
															.indexOf("/")
															+ 1);
											sdvalue = dfd.value;
										}
										if (dfd.name
												.indexOf(sdname + "endDate") > -1) {
											dfd.setMinValue(sdvalue);
										}
									});
						}
					}
				}]
			}

		});
	}

	this.initrcListPanel = function() {
		this.selModel = this.selModel
				|| new Ext.grid.CheckboxSelectionModel({});
		this.rclistPanel = new Ext.fn.ListPanel({
			title : '【 送货单列表 】',
			height : 375,
			hsPage : true,
			tbar : [{
						text : '生成质检记录表',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onCreate
					}],
			selModel : this.selModel,
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'zasnh',
						header : '送货单号',
						width : 150
					}, {
						dataIndex : 'pkid',
						header : '主键',
						hidden : true
					}, {
						dataIndex : 'zasnp',
						header : '行号'
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
						header : '物料描述'
					}, {
						dataIndex : 'menge_m',
						header : '采购订单数量'
					}, {
						dataIndex : 'amount',
						header : '送货数量'
					}, {
						dataIndex : 'num',
						header : '已质检数量'
					}, {
						dataIndex : 'zjlb',
						header : '质检类别'
					}, {
						dataIndex : 'lifnr',
						header : '供应商编码',
						hidden : true
					}, {
						dataIndex : 'name1',
						header : '供应商名称',
						hidden : true
					}, {
						dataIndex : 'werks',
						header : '工厂',
						hidden : true
					}],

			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectrecordcreate.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'return_amount'
						}, {
							name : 'pkid'
						}, {
							name : 'menge_m'
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
							name : 'menge'
						}, {
							name : 'lgort'
						}, {
							name : 'amount'
						}, {
							name : 'sgtxt'
						}, {
							name : 'zjlb'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'werks'
						}, {
							name : 'num'
						}]
			})
		});
	}
	this.initCreateWindow = function() {
		var createwindow = Ext.id();
		this.cjattachId = Ext.id();
		this.wltm = Ext.id();
		var _this = this;
		this.createWindow = this.createWindow || new Ext.fn.FormWindow({
			title : '生成抽检质检记录表',
			height : 600,
			width : 800,
			id : createwindow,
			resizable : false,
			minimizable : false,
			maximizable : false,
			closable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 3,
				saveUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.saveinspectlbwh.biz.ext',
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
							id:this.wltm,
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
									var a = Ext.getCmp(createwindow).items.items[0].form
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
									var a = Ext.getCmp(createwindow).items.items[0].form
											.findField('cjsl').getValue();
									if (Ext.isEmpty(a)) {
										o.setValue(a)
										Ext.Msg.alert('提示', '请先输入抽检数量！')
										return
									}
									var b = Ext.getCmp(createwindow).items.items[0].form
											.findField('shsl').getValue();
									if (newValue > a) {
										o.setValue(a)
										Ext.getCmp(createwindow).items.items[0].form
												.findField('krksl').setValue(b
														- a);
									} else {
										Ext.getCmp(createwindow).items.items[0].form
												.findField('krksl').setValue(b
														- newValue);
									}
								}
							},
							ref : '../bhgsl',
							colspan : 1
						}, this.inspectrceditPanel, {
							colspan : 3,
							width : 700,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cjattachId,
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
									var a = Ext.getCmp(createwindow).items.items[0].form
											.findField('shsl').getValue();
									var b = Ext.getCmp(createwindow).items.items[0].form
											.findField('cjsl').getValue();
									var c = Ext.getCmp(createwindow).items.items[0].form
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
							text : '放弃检查',
							scope : this,
							handler : function() {
								_this.ongbOk();
							}
						}]
			}
		});
	}
	this.initqjCreateWindow = function() {
		var qjcreatewindow = Ext.id();
		this.qjattachId = Ext.id();
		var _this = this;
		this.qjcreateWindow = this.qjcreateWindow || new Ext.fn.FormWindow({
			title : '生成全检质检记录表',
			height : 600,
			width : 800,
			id : qjcreatewindow,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 3,
				saveUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.saveinspectlbwh.biz.ext',
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
							ref : '../wltm',
							fieldLabel : '物料条码',
							colspan : 3
						}, this.qjinspectrceditPanel, {
							colspan : 3,
							width : 700,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.qjattachId,
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
	this.initinspectrceditPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.inspectrceditPanel = new Ext.fn.EditListPanel({
			title : '故障清单',
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
						width : 180,
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
											_this.inspectrceditPanel.view
													.refresh();
										}
									}
								}))
					}, {
						header : "故障计数",
						dataIndex : "zjwtjs",
						width : 80,
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
											_this.inspectrceditPanel.view
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
											_this.inspectrceditPanel.view
													.refresh();
										}
									}
								}))
					}],
			store : new Ext.data.JsonStore({
						url : '...',
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
	this.initqjinspectrceditPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.qjinspectrceditPanel = new Ext.fn.EditListPanel({
			title : '检验项目',
			clicksToEdit : 1,
			autoScroll : true,
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
											_this.qjinspectrceditPanel.view
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
											_this.qjinspectrceditPanel.view
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
											_this.qjinspectrceditPanel.view
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
							//	{
								//	listeners : {
								//		'change' : function(o, newValue,
								//				oldValue) {
								//			_this.recb.data['text'] = newValue;
								//			_this.qjinspectrceditPanel.view
								//					.refresh();
								//		}
								//	}
							//	}))
					}],
			store : new Ext.data.JsonStore({})
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
							}]

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
							var _matnr = this.qjcreateWindow.items.items[0].form
									.findField('matnr').getValue();
							var _werks = this.qjcreateWindow.items.items[0].form
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
						width : 200,
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

}