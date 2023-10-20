com.zoomlion.hjsrm.settleaccounts.ModifyMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.initQueryPanel();
		this.initListPanel();

		this.initListPanel2();
		this.initPopWindow();

		this.initListPanel3();

		this.initInputPanel();

		this.initListPanel4();

		this.initModifyWindow();

		this.initConditionWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'accountsmodifyMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
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
								allowBlank : false,
								anchor : '95%',
								ref : '../bukrs',
								hiddenName : 'condition/bukrs',
								fieldLabel : '公司'
							}, {
								xtype : 'factorycombobox',
								//defaultValue : '3000',
								anchor : '95%',
								autoload:false,
								allowBlank : false,
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
								xtype : 'hidden',
								name : 'condition/lifnr',
								value : lifnr
							}, {
								xtype : 'hidden',
								name : 'condition/statu',
								value : 0
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
			selModel : this.selModel,
			// region : 'center',
			delUrl : 'com.zoomlion.hjsrm.settleaccounts.accounts.delAccounts.biz.ext',
			tbar : [{
						text : '删除',
						ref : '../btnDelete',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelete
					}, /*{
						text : '修改',
						scope : this,
						ref : '../btnEdit',
						iconCls : 'icon-application_edit',
						handler : this.onCondition
					}, */{
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
						header : '结算凭证年度',
						dataIndex : 'mjahr'
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
							name : 'ekorg'
						}, {
							name : 'mwskz'
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
			columns : [new Ext.grid.RowNumberer(), {
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
					}, {
						header : "待结算数量",
						dataIndex : "djssl"
					}, {
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
						header : "与合同价一致",
						dataIndex : "flag_htj"
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
						header : "物料号",
						dataIndex : "matnr"
					}, {
						header : "最近写入日期",
						dataIndex : "zwrildt"
					}, {
						header : "最近写入者",
						dataIndex : "zwriusr"
					}, {
						header : "文本备注",
						dataIndex : "ztext"
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

	this.initModifyWindow = function() {
		this.modifyWindow = this.modifyWindow || new Ext.Window({
					title : "修改结算凭证明细",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.listPanel3, this.listPanel4, this.inputPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.modifyWindow.hide();
								}
							}]

				});
	}

	this.initListPanel3 = function() {
		this.selModel3 = this.selModel3
				|| new Ext.grid.CheckboxSelectionModel({
							singleSelect : true,
							header : ''
						});
		this.listPanel3 = new Ext.fn.ListPanel({
			title : '【 查询列表 】',
			hsPage : false,
			selModel : this.selModel3,
			// autoHeight:true,
			height : 200,
			region : 'north',
			delUrl : '...',
			viewConfig : {
		// autoFill:true

			},
			tbar : [{
						text : '选定',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelect
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel3, {
						dataIndex : 'flag',
						header : '可选择',
						width : 60,
						renderer : function(v, m, r, i) {

							if (v == "1") {
								return "<span style='color:red'>是</span>";
							} else {
								return "<span style='color:blue'>否</span>";
							}
						}

					}, {
						dataIndex : 'mblnr',
						header : '物料凭证号'
					}, {
						dataIndex : 'zeile',
						header : '物料凭证行号'
					}, {
						dataIndex : 'mjahr',
						header : '物料凭证年度'
					}, {
						dataIndex : 'budat',
						header : '过账日期'
					}, {
						dataIndex : 'matnr',
						header : '物料号'
					}, {
						dataIndex : 'txz01',
						header : '物料描述'
					}, {
						header : '收货数量',
						dataIndex : 'erfmg'
					}, {
						header : '单位',
						dataIndex : 'erfme'
					}, {
						header : '待结算数量',
						dataIndex : 'djssl'
					}, {
						header : '合同价',
						dataIndex : 'kbetr'
					}, {
						header : '合同价格单位',
						dataIndex : 'kpein'
					}, {
						header : '合同计量单位',
						dataIndex : 'kmein'
					}, {
						header : '结算单价（含税）',
						dataIndex : 'jsdj'
					}, {
						header : '结算价格单位',
						dataIndex : 'jsdw'
					}, {
						header : '与合同价一致',
						dataIndex : 'flag_htj'
					}, {
						header : '移动类型',
						dataIndex : 'bwart'
					}, {
						header : '借贷标识',
						dataIndex : 'shkzg'
					}, {
						header : '货币码',
						dataIndex : 'waers'
					}, {
						header : '采购订单号',
						dataIndex : 'ebeln'
					}, {
						header : '采购订单行号',
						dataIndex : 'ebelp'
					}, {
						header : '生产订单号',
						dataIndex : 'aufnr'
					}, {
						header : '成本中心',
						dataIndex : 'kostl'
					}, {
						header : '参考凭证号',
						dataIndex : 'lfpos'
					}, {
						header : '参考凭证行号',
						dataIndex : 'lfbnr'
					}, {
						header : '参考凭证年度',
						dataIndex : 'lfbja'
					}, {
						header : '供应商编码',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						header : '公司',
						dataIndex : 'butxt'
					}, {
						header : '工厂',
						dataIndex : 'werksname'
					}, {
						header : '采购组织',
						dataIndex : 'ekotx'
					}, {
						header : '采购组',
						dataIndex : 'eknam'
					}, {
						header : '提示',
						dataIndex : 'tishi'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryCreateAccounts.biz.ext',
				root : 'data',
				// autoLoad : true,
				// totalProperty : 'totalCount',
				fields : [{
							name : 'mblnr'
						}, {
							name : 'zeile'
						}, {
							name : 'mjahr'
						}, {
							name : 'budat'
						}, {
							name : 'matnr'
						}, {
							name : 'txz01'
						}, {
							name : 'erfmg'
						}, {
							name : 'erfme'
						}, {
							name : 'djssl'
						}, {
							name : 'djssl_ck'
						}, {
							name : 'kbetr'
						}, {
							name : 'kpein'
						}, {
							name : 'kmein'
						}, {
							name : 'jsdj'
						}, {
							name : 'jsdw'
						}, {
							name : 'flag_htj'
						}, {
							name : 'bwart'
						}, {
							name : 'shkzg'
						}, {
							name : 'waers'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'aufnr'
						}, {
							name : 'kostl'
						}, {
							name : 'lfpos'
						}, {
							name : 'lfbnr'
						}, {
							name : 'lfbja'
						}, {
							name : 'lifnr'
						}, {
							name : 'bukrs'
						}, {
							name : 'werks'
						}, {
							name : 'ekorg'
						}, {
							name : 'ekgrp'
						}, {
							name : 'amount'
						}, {
							name : 'name1'
						}, {
							name : 'flag'
						}, {
							name : 'myid'
						}, {
							name : 'tishi'
						}, {
							name : 'ekotx'
						}, {
							name : 'eknam'
						}, {
							name : 'm_ztext'
						}, {
							name : 'm_djssl'
						}, {
							name : 'm_jsdj'
						}, {
							name : 'm_jsdw'
						}, {
							name : 'm_flag_htj'
						}, {
							name : 'm_hkkje'
						}, {
							name : 'm_mwskz'
						}, {
							name : 'butxt'
						}, {
							name : 'werksname'
						}, {
							name : 'chayi'
						}, {
							name : 'mein'
						}, {
							name : 'menge'
						}]
			})
		});
	}

	this.initListPanel4 = function() {

		var _this = this;
		this.selModel4 = this.selModel4
				|| new Ext.grid.CheckboxSelectionModel({
							singleSelect : true,
							header : ''
						});

		this.listPanel4 = new Ext.fn.EditListPanel({
			title : '【 生成结算凭证 】',
			subAll : true,
			id : listid,
			clicksToEdit : 1,
			hsPage : false,
			region : 'center',
			selModel : this.selModel4,
			delUrl : '...',
			tbar : [{
						text : '移除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDselect
					}/*
						 * , '-', { text : '生成', scope : this, iconCls :
						 * 'icon-application_edit', handler : function() { if
						 * (!this.listPanel4.isValid()) { return; } else {
						 * this.inputPanel.flje.setValue(0);
						 * this.inputPanel.yfje.setValue(0);
						 * this.inputPanel.qtkkje.setValue(0);
						 * this.modifyWindow.show(); } } }
						 */],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel4, {
						dataIndex : 'mblnr',
						header : '物料凭证号'
					}, {
						dataIndex : 'zeile',
						header : '物料凭证行号'
					}, {
						dataIndex : 'mjahr',
						header : '物料凭证年度'
					}, {
						dataIndex : 'budat',
						header : '过账日期'
					}, {
						dataIndex : 'matnr',
						header : '物料号'
					}, {
						dataIndex : 'txz01',
						header : '物料描述'
					}, {
						dataIndex : 'm_ztext',
						header : '备注',
						css : 'background:#c7c7c7;',
						scope : this,
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									listeners : {
										'specialkey' : function() {
											return false;
										},
										// 'focus' : _this.onGetCurRecord,

										'change' : function(o, newValue,
												oldValue) {
											_this.rec.data['m_ztext'] = newValue;
											Ext.getCmp(listid).view.refresh();
										}
									}

								}))
					}, {
						header : '收货数量',
						dataIndex : 'erfmg'
					}, {
						header : '待结算数量',
						dataIndex : 'm_djssl',
						css : 'background:#c7c7c7;',

						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'focus' : function() {
//											if (!!(_this.rec.data['bwart'])==false) {
//												var list = Ext.getCmp(listid);
//												var rec = list
//														.getSelectionModel()
//														.getSelections();
//												_this.rec = rec[0];
//											}

											var bwart = _this.rec.data['bwart'];
											if (bwart != '101') {
												Ext.Msg.alert("系统提示",
														"该记录待结算数量不允许修改！");
											}

										},
										'change' : function(o, newValue,
												oldValue) {

											var bwart = _this.rec.data['bwart'];

											if (bwart != '101') {
												o.setValue(oldValue);
												return;
											} else {

												var djssl = _this.rec.data['djssl'];// 最大值
												var chayi = _this.rec.data['chayi'];// 最小值
												var myid = _this.rec.data['myid'];

												// 101
												var value = 0;
												if (newValue > djssl
														|| newValue <= chayi) {
													o.setValue(djssl);
													value = djssl;
												} else {
													value = newValue;
												}
												_this.rec.data['m_djssl'] = value;
												Ext.getCmp(listid).view
														.refresh();
											}
										}
									}
								}

						))
					}, {
						header : '结算单价（含税）',
						dataIndex : 'm_jsdj',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									scope : this,
									allowNegative : false,
									allowBlank : false,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										// 'focus' : _this.onGetCurRecord,
										'change' : function(o, newValue,
												oldValue) {

											var myid = _this.rec.data['myid'];

											if (newValue == 0) {
												o.setValue(oldValue);
												return;
											} else {
												_this.onRefreshRecord(myid,
														'm_jsdj', newValue,
														true);
												Ext.getCmp(listid).view
														.refresh();
											}
										}

									}
								}))
					}, {
						header : '结算价格单位',
						dataIndex : 'm_jsdw',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									scope : this,
									allowNegative : false,
									allowBlank : false,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										// 'focus' : _this.onGetCurRecord,
										'change' : function(o, newValue,
												oldValue) {

											var myid = this.rec.data['myid'];

											if (newValue == 0) {
												o.setValue(oldValue);
												return;
											} else {
												_this.onRefreshRecord(myid,
														'm_jsdw', newValue,
														true);
												Ext.getCmp(listid).view
														.refresh();
											}
										}

									}
								}))
					}, {
						header : '与合同价一致',
						dataIndex : 'm_flag_htj'
					}, {
						header : '单行扣款',
						dataIndex : 'm_zcdf',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										// 'focus' : _this.onGetCurRecord,
										'change' : function(o, newValue,
												oldValue) {

											var bwart = _this.rec.data['bwart'];

											if (bwart != '101') {// 非101
												o.setValue(oldValue);
												return;
											} else {
												_this.rec.data['m_zcdf'] = newValue;
												Ext.getCmp(listid).view
														.refresh();
											}
										}

									}

								}))
					}, {
						header : '税码',
						dataIndex : 'm_mwskz',
						css : 'background:#c7c7c7;',
						// value:'F8',
						editor : new Ext.grid.GridEditor(new Ext.bz.dict.DictComboBox(
								{
									dictData : GE_PRUCHASE_TARIFF,
									scope : this,
									valueField : "DICTID",
									displayField : "DICTID",

									listeners : {
										'specialkey' : function() {
											return false;
										},
										// 'focus' : _this.onGetCurRecord,
										"select" : function(o) {

											var myid = _this.rec.data['myid'];

											_this.onRefreshRecord(myid,
													'm_taxrt', o.getValue());
											_this.onRefreshRecord(myid,
													'm_mwskz', o.getValue(),
													false);

											Ext.getCmp(listid).view.refresh();
										}
									}

								}))
					}, {
						header : '税率',
						xtype : 'dictcolumn',
						dictData : GE_PRUCHASE_TARIFF,
						dataIndex : 'm_taxrt'
					}, {
						header : '货币码',
						dataIndex : 'waers'
					}, {
						header : '移动类型',
						dataIndex : 'bwart'
					}, {
						header : '借贷标识',
						dataIndex : 'shkzg'
					}, {
						header : '计量单位',
						dataIndex : 'waers'
					}, {
						header : '采购订单号',
						dataIndex : 'ebeln'
					}, {
						header : '采购订单行号',
						dataIndex : 'ebelp'
					}, {
						header : '生产订单号',
						dataIndex : 'aufnr'
					}, {
						header : '成本中心',
						dataIndex : 'kostl'
					}, {
						header : '参考凭证号',
						dataIndex : 'lfpos'
					}, {
						header : '参考凭证行号',
						dataIndex : 'lfbnr'
					}, {
						header : '参考凭证年度',
						dataIndex : 'lfbja'
					}, {
						header : '合同价',
						dataIndex : 'kbetr'
					}, {
						header : '合同价格单位',
						dataIndex : 'kpein'
					}, {
						header : '合同计量单位',
						dataIndex : 'kmein'
					}, {
						header : '供应商编码',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						header : '公司',
						dataIndex : 'butxt'
					}, {
						header : '工厂',
						dataIndex : 'werksname'
					}, {
						header : '采购组织',
						dataIndex : 'ekotx'
					}, {
						header : '采购组',
						dataIndex : 'eknam'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryCreated.biz.ext',
				root : 'data',
				// autoLoad : true,
				// totalProperty : 'totalCount',
				fields : [{
							name : 'mblnr'
						}, {
							name : 'zeile'
						}, {
							name : 'mjahr'
						}, {
							name : 'budat'
						}, {
							name : 'matnr'
						}, {
							name : 'txz01'
						}, {
							name : 'erfmg'
						}, {
							name : 'erfme'
						}, {
							name : 'djssl'
						}, {
							name : 'djssl_ck'
						}, {
							name : 'kbetr'
						}, {
							name : 'kpein'
						}, {
							name : 'kmein'
						}, {
							name : 'jsdj'
						}, {
							name : 'jsdw'
						}, {
							name : 'flag_htj'
						}, {
							name : 'bwart'
						}, {
							name : 'shkzg'
						}, {
							name : 'waers'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'aufnr'
						}, {
							name : 'kostl'
						}, {
							name : 'lfpos'
						}, {
							name : 'lfbnr'
						}, {
							name : 'lfbja'
						}, {
							name : 'lifnr'
						}, {
							name : 'bukrs'
						}, {
							name : 'werks'
						}, {
							name : 'ekorg'
						}, {
							name : 'ekgrp'
						}, {
							name : 'amount'
						}, {
							name : 'name1'
						}, {
							name : 'flag'
						}, {
							name : 'myid'
						}, {
							name : 'tishi'
						}, {
							name : 'ekotx'
						}, {
							name : 'eknam'
						}, {
							name : 'm_ztext'
						}, {
							name : 'm_djssl'
						}, {
							name : 'm_jsdj'
						}, {
							name : 'm_jsdw'
						}, {
							name : 'm_flag_htj'
						}, {
							name : 'm_hkkje'
						}, {
							name : 'm_mwskz'
						}, {
							name : 'butxt'
						}, {
							name : 'werksname'
						}, {
							name : 'chayi'
						}, {
							name : 'mein'
						}, {
							name : 'menge'
						}, {
							name : 'zcdf'
						}, {
							name : 'm_zcdf'
						}, {
							name : 'm_taxrt'
						}]
			})
		});
	}

	this.initInputPanel = function() {

		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 50,
					pgrid : '',
					region : 'south',
					columns : 3,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'numberfield',
								allowBlank : false,
								allowNegative : false,
								anchor : '80%',
								value : 0,
								name : 'flje',
								ref : '../flje',
								fieldLabel : '返利总金额'
							}, {
								xtype : 'numberfield',
								value : 0,
								ref : '../yfje',
								allowNegative : false,
								anchor : '80%',
								name : 'yfje',
								allowBlank : false,
								fieldLabel : '运费总金额'
							}, {
								xtype : 'numberfield',
								value : 0,
								ref : '../qtkkje',
								anchor : '80%',
								name : 'qtkkje',
								allowBlank : false,
								fieldLabel : '其他扣款总金额'
							}, {
								xtype : 'hidden',
								ref : "../mwskz"
							}, {
								xtype : 'hidden',
								ref : "../taxrt"
							}, {
								xtype : 'hidden',
								ref : "../jspz"
							}, {
								xtype : 'hidden',
								ref : "../mjahr"
							}]

				});
	}

	this.initConditionWindow = function() {
		this.conditionPanel = this.conditionPanel || new Ext.fn.InputPanel({
					height : 120,
					pgrid : '',
					region : 'south',
					columns : 1,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'textfield',
								anchor : '90%',
								name : 'matnr',
								ref : '../matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : "dateregion",
								anchor : '90%',
								nameArray : ['ruksjstartdate', 'ruksjendate'],
								format : "Y-m-d",
								ref : '../ruksj',
								fieldLabel : '参考凭证过账日期'
							}, {
								xtype : 'hidden',
								ref : "../mwskz"
							}, {
								xtype : 'hidden',
								ref : "../taxrt"
							}/*
								 * , { xtype : 'textfield', ref : '../mblnr',
								 * anchor : '90%', name : 'mblnr', fieldLabel :
								 * '物料凭证' }
								 */]

				});

		this.conditionWindow = this.conditionWindow || new Ext.Window({
					title : "备选凭证查询",
					resizable : true,
					modal : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 420,
					height : 170,
					layout : 'fit',
					items : [this.conditionPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onEdit
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.conditionWindow.hide();
								}
							}]

				});
	}

}