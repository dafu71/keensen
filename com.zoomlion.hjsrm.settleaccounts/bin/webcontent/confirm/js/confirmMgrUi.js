com.zoomlion.hjsrm.settleaccounts.ConfirmMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();

		this.initListPanel();
		this.initListPanel2();
		this.initPopWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'accountsconfirmMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 200,
					// region : 'north',
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 查询凭证 】',
					fields : [{
								xtype : 'companycombobox',
								defaultValue : '3000',
								value : '3000',
								anchor : '95%',
								ref : '../bukrs',
								hiddenName : 'condition/bukrs',
								allowBlank : false,
								fieldLabel : '公司'
							}, {
								xtype : 'factorycombobox',
								//defaultValue : '3000',
								//value : '3000',
								anchor : '95%',
								ref : '../werks',
								allowBlank : false,
								autoload:false,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/jspz',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '结算凭证号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/datumstartdate',
										'condition/datumendate'],
								fieldLabel : "结算凭证创建日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr2',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '供应商'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '供应商名称'
							}, {
								xtype : 'radiogroup',
								name : 'opt',
								anchor : '70%',
								colspan : 1,
								fieldLabel : '确认标识',
								items : [{
											boxLabel : '待确认',
											name : 'condition/statu',
											inputValue : 0,
											checked : true
										}, {
											boxLabel : '已确认',
											name : 'condition/statu',
											inputValue : 1
										}]
							}]
				});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel
				|| new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 查询列表 】',
			hsPage : true,
			selModel : this.selModel,
			// region : 'center',
			delUrl : '...',
			tbar : [{
						text : '确认',
						ref : '../btnConfirm',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirm
					}, {
						text : '撤销',
						scope : this,
						ref : '../btnRepeal',
						iconCls : 'icon-application_delete',
						handler : this.onUnConfirm
					}, {
						text : '查看',
						scope : this,
						ref : '../btnView',
						iconCls : 'icon-application_lightning',
						handler : this.onView
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						header : '供应商编码',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						header : '结算凭证号',
						dataIndex : 'jspz'
					}, {
						header : '结算凭证日期',
						dataIndex : 'datum'
					}, {
						header : '结算总金额',
						dataIndex : 'jsje'
					}, {
						header : '税额',
						dataIndex : 'tax'
					}, {
						header : '返利总金额',
						dataIndex : 'flje'
					}, {
						header : '运费总金额',
						dataIndex : 'yfje'
					}, {
						header : '其他扣款总金额',
						dataIndex : 'qtkkje'
					}, {
						header : '确认标识',
						dataIndex : 'statu',
						renderer : function(v, m, r, i) {

							if (v == 1) {
								return "<span style='color:red'>已确认</span>";
							} else {
								return "<span style='color:blue'>待确认</span>";
							}
						}
					}, {
						header : '确认人',
						hidden:true,
						id : 'tranuId',
						dataIndex : 'tranu'
					}, {
						header : '确认时间',
						hidden:true,
						id : 'trantId',
						dataIndex : 'trant'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryUnConfirm.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'jspz'
						}, {
							name : 'datum'
						}, {
							name : 'tax'
						}, {
							name : 'flje'
						}, {
							name : 'yfje'
						}, {
							name : 'qtkkje'
						}, {
							name : 'mjahr'
						}, {
							name : 'jsje'
						}, {
							name : 'statu'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}]
			})
		});
	}

	this.initListPanel2 = function() {

		this.listPanel2 = new Ext.fn.ListPanel({
			title : '【 结算凭证明细列表 】',
			hsPage : false,
			delUrl : '...',

			// autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(),  {
						header : "文本备注",
						dataIndex : "ztext"
					}, {
						header : "与合同价一致",
						dataIndex : "flag_htj"
					},{
						header : "物料号",
						dataIndex : "matnr"
					},{
						header : "物料描述",
						dataIndex : "maktx",
						width : 200
					},{
						header : "待结算数量",
						dataIndex : "djssl"
					}, {
						header : "结算凭证号",
						dataIndex : "jspz"
					}, {
						header : "结算凭证行号",
						dataIndex : "jspzh"
					}, {
						header : "结算凭证年度",
						dataIndex : "mjahr"
					}, {
						header : "物料凭证编号",
						dataIndex : "mblnr"
					}, {
						header : "物料凭证中的项目",
						dataIndex : "zeile"
					}, {
						header : "凭证中的过账日期",
						dataIndex : "budat"
					}, {
						header : "借方/贷方标识",
						dataIndex : "shkzg"
					}, {
						header : "移动类型",
						dataIndex : "bwart"
					},  {
						header : "基本计量单位",
						dataIndex : "meins"
					}, {
						header : "结算金额（整行）",
						dataIndex : "hjsje"
					}, {
						header : "结算单价（含税）",
						dataIndex : "jsdj"
					}, {
						header : "结算价格单位",
						dataIndex : "jsdw"
					}, {
						header : "合同价",
						dataIndex : "kbetr"
					}, {
						header : "条件定价单位",
						dataIndex : "kpein"
					}, {
						header : "条件单位",
						dataIndex : "kmein"
					}, {
						header : "分摊其他扣款（单行）",
						dataIndex : "hqtkkje"
					}, {
						header : "分摊返利金额（单行）",
						dataIndex : "hflje"
					}, {
						header : "分摊运费额（单行）",
						dataIndex : "hyfje"
					}, {
						header : "扣款金额（单行）",
						dataIndex : "hkkje"
					}, {
						header : "其他扣款（单项）",
						dataIndex : "zcdf"
					}, {
						header : "参考凭证的凭证号",
						dataIndex : "lfbnr"
					}, {
						header : "参考凭证项目",
						dataIndex : "lfpos"
					}, {
						header : "采购组织",
						dataIndex : "ekorg"
					}, {
						header : "采购组",
						dataIndex : "ekgrp"
					}, {
						header : "最近写入日期",
						dataIndex : "zwrildt"
					}, {
						header : "最近写入者",
						dataIndex : "zwriusr"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryAccount.biz.ext',
				root : 'data',
				// autoLoad : true,
				// totalProperty : 'totalCount',
				fields : [{
							name : "jspz"
						}, {
							name : "jspzh"
						}, {
							name : "mjahr"
						}, {
							name : "mblnr"
						}, {
							name : "zeile"
						}, {
							name : "budat"
						}, {
							name : "shkzg"
						}, {
							name : "bwart"
						}, {
							name : "djssl"
						}, {
							name : "djssl_ck"
						}, {
							name : "meins"
						}, {
							name : "hjsje"
						}, {
							name : "jsdj"
						}, {
							name : "jsdw"
						}, {
							name : "kbetr"
						}, {
							name : "kpein"
						}, {
							name : "kmein"
						}, {
							name : "flag_htj"
						}, {
							name : "hqtkkje"
						}, {
							name : "hflje"
						}, {
							name : "hyfje"
						}, {
							name : "hkkje"
						}, {
							name : "zcdf"
						}, {
							name : "lfbnr"
						}, {
							name : "lfpos"
						}, {
							name : "ekorg"
						}, {
							name : "ekgrp"
						}, {
							name : "matnr"
						}, {
							name : "zwrildt"
						}, {
							name : "zwriusr"
						}, {
							name : "ztext"
						},{
							name : "maktx"
						}]
			})
		});
	}

	this.initPopWindow = function() {
		this.popWindow = this.popWindow || new Ext.Window({
					title : "查看结算凭证明细",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 800,
					height : 600,
					layout : 'fit',
					items : [this.listPanel2],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.popWindow.hide();
								}
							}]

				});
	}
}
