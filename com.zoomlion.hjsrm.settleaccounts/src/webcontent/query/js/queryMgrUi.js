com.zoomlion.hjsrm.settleaccounts.QueryMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'accountsqueryMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 220,
					// region : 'north',
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 查询凭证 】',
					fields : [{
								xtype : 'companycombobox',
								defaultValue : '3000',
								value : '3000',
								allowBlank : false,
								anchor : '95%',
								ref : '../bukrs',
								hiddenName : 'condition/bukrs',
								fieldLabel : '公司'
							}, {
								xtype : 'factorycombobox',
								//defaultValue : '3000',
								//value : '3000',
								allowBlank : false,
								autoload:false,
								anchor : '95%',
								ref : '../werks',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/jspz',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '结算凭证号'
							}, {
								xtype : 'textfield',
								name : 'condition/mjahr',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '结算凭证年度',
								value : curYear
							}, {
								xtype : 'ekorgcombobox',
								defaultValue : '3001',
								anchor : '95%',
								ref : '../ekorg',
								hiddenName : 'condition/ekorg',
								fieldLabel : '采购组织'
							}, {
								xtype : 'textfield',
								name : 'condition/ekgrp',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '采购组'
							}, {
								xtype : 'textfield',
								name : 'condition/belnr',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '预制发票号'
							}, {
								xtype : 'textfield',
								name : 'condition/mblnr',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '物料凭证号'
							}, {
								xtype : 'textfield',
								name : 'condition/matnr',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '物料号'
							}, {
								xtype : 'textfield',
								name : 'condition/txz01',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '物料描述'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr2',
								ref:'../lifnr',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '供应商',
								hidden:!Ext.isEmpty(lifnr)
							}, {
								xtype : 'textfield',
								name : 'condition/lifnrname',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '供应商名称',
								hidden:!Ext.isEmpty(lifnr)
							}, {
								xtype : 'radiogroup',
								name : 'opt',
								anchor : '100%',
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
										}, {
											boxLabel : '全显示',
											name : 'condition/statu',
											inputValue : 3
										}]
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/datumstartdate',
										'condition/datumendate'],
								fieldLabel : "凭证创建日期",
								format : "Y-m-d",
								allowBlank : false
							}]
				});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 查询列表 】',
			hsPage : true,
			tbar : [{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					},{
						text : '手动更新数据',
						rescode : '00622',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onadd
					}],
			selModel : this.selModel,
			delUrl : '....biz.ext',

			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						header : '结算凭证号',
						dataIndex : 'jspz'
					}, {
						header : '确认状态',
						dataIndex : 'statu',
						renderer : function(v, m, r, i) {

							if (v == 1) {
								return "<span style='color:red'>已确认</span>";
							} else {
								return "<span style='color:blue'>待确认</span>";
							}
						}
					}, {
						header : '结算凭证行号',
						dataIndex : 'jspzh'
					}, {
						header : '结算凭证年度',
						dataIndex : 'mjahr'
					}, {
						header : '物料凭证编号',
						dataIndex : 'mblnr'
					}, {
						header : '物料凭证中的项目',
						dataIndex : 'zeile'
					}, {
						header : '凭证中的过账日期',
						dataIndex : 'budat'
					}, {
						header : '供应商编码',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'lifnrname'
					}, {
						header : '公司',
						dataIndex : 'butxt'
					}, {
						header : '工厂',
						dataIndex : 'werksname'
					}, {
						header : '借方/贷方标识',
						dataIndex : 'shkzg'
					}, {
						header : '移动类型',
						dataIndex : 'bwart'
					}, {
						header : '待结算数量',
						dataIndex : 'djssl'
					}
					/*, {
						header : '待结算数量（参考）',
						dataIndex : 'djssl_ck'
					}
					*/
					, {
						header : '基本计量单位',
						dataIndex : 'meins'
					}, {
						header : '结算金额（整行）',
						dataIndex : 'hjsje'
					}, {
						header : '结算单价（含税）',
						dataIndex : 'jsdj'
					}, {
						header : '结算价格单位',
						dataIndex : 'jsdw'
					}, {
						header : '合同价',
						dataIndex : 'kbetr'
					}, {
						header : '条件定价单位',
						dataIndex : 'kpein'
					}, {
						header : '条件单位',
						dataIndex : 'kmein'
					}, {
						header : '与合同价一致',
						dataIndex : 'flag_htj'
					}
					/*, {
						header : '过程',
						dataIndex : 'kalsm'
					}*/
					, {
						header : '分摊其他扣款（单行）',
						dataIndex : 'hqtkkje'
					}, {
						header : '分摊返利金额（单行）',
						dataIndex : 'hflje'
					}, {
						header : '分摊运费额（单行）',
						dataIndex : 'hyfje'
					}
					/*
					, {
						header : '扣款金额（单行）',
						dataIndex : 'hkkje'
					}
					*/
					, {
						header : '其他扣款（单项）',
						dataIndex : 'zcdf'
					}, {
						header : '参考凭证的凭证号',
						dataIndex : 'lfbnr'
					}, {
						header : '参考凭证项目',
						dataIndex : 'lfpos'
					}, {
						header : '当前期间的会计年度',
						dataIndex : 'lfgja'
					}
					/*,{
						header : '送货全退扣款金额',
						dataIndex : 'shqtk'
					}, {
						header : '送货全退扣款金额（单行）',
						dataIndex : 'hshqtk'
					}, {
						header : '送货全退扣款记录',
						dataIndex : 'shqtkbh'
					}*/
					, {
						header : '货币码',
						dataIndex : 'waers'
					}, {
						header : '预制发票号',
						dataIndex : 'belnr'
					}, {
						header : '预制发票行号',
						dataIndex : 'buzei'
					}, {
						header : '预制发票年度',
						dataIndex : 'gjahr'
					}, {
						header : '采购组织',
						dataIndex : 'ekotx'
					}, {
						header : '采购组',
						dataIndex : 'eknam'
					}, {
						header : '采购凭证号',
						dataIndex : 'ebeln'
					}, {
						header : '采购凭证的项目编号',
						dataIndex : 'ebelp'
					}, {
						header : '物料号',
						dataIndex : 'matnr'
					}, {
						header : '物料描述',
						dataIndex : 'txz01'
					}
					/*, {
						header : '物料组',
						dataIndex : 'matkl'
					}
					*/
					, {
						header : '订单号',
						dataIndex : 'aufnr'
					}, {
						header : '数量',
						dataIndex : 'menge'
					}, {
						header : '最近写入日期',
						dataIndex : 'zwrildt'
					}, {
						header : '最近写入者',
						dataIndex : 'zwriusr'
					}, {
						header : '文本备注',
						dataIndex : 'ztext'
					}, {
						header : 'VN编码',
						dataIndex : 'vnbm'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryLists.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'jspz'
						},{
							name : 'statu'
						}, {
							name : 'jspzh'
						}, {
							name : 'mjahr'
						}, {
							name : 'mblnr'
						}, {
							name : 'zeile'
						}, {
							name : 'budat'
						}, {
							name : 'shkzg'
						}, {
							name : 'bwart'
						}, {
							name : 'djssl'
						}, {
							name : 'djssl_ck'
						}, {
							name : 'meins'
						}, {
							name : 'hjsje'
						}, {
							name : 'jsdj'
						}, {
							name : 'jsdw'
						}, {
							name : 'kbetr'
						}, {
							name : 'kpein'
						}, {
							name : 'kmein'
						}, {
							name : 'flag_htj'
						}, {
							name : 'kalsm'
						}, {
							name : 'hqtkkje'
						}, {
							name : 'hflje'
						}, {
							name : 'hyfje'
						}, {
							name : 'hkkje'
						}, {
							name : 'zcdf'
						}, {
							name : 'lfbnr'
						}, {
							name : 'lfpos'
						}, {
							name : 'lfgja'
						}, {
							name : 'shqtk'
						}, {
							name : 'hshqtk'
						}, {
							name : 'shqtkbh'
						}, {
							name : 'waers'
						}, {
							name : 'belnr'
						}, {
							name : 'buzei'
						}, {
							name : 'gjahr'
						}, {
							name : 'ekorg'
						}, {
							name : 'ekgrp'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'matnr'
						}, {
							name : 'matkl'
						}, {
							name : 'aufnr'
						}, {
							name : 'menge'
						}, {
							name : 'zwrildt'
						}, {
							name : 'zwriusr'
						}, {
							name : 'ztext'
						}, {
							name : 'ekotx'
						}, {
							name : 'eknam'
						}, {
							name : 'werksname'
						}, {
							name : 'butxt'
						}, {
							name : 'txz01'
						}, {
							name : 'lifnr'
						}, {
							name : 'lifnrname'
						}, {
							name : 'vnbm'
						}]
			})
		});
	}

}