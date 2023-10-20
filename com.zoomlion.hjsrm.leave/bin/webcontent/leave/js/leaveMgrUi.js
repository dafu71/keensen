com.zoomlion.hjsrm.settleaccounts.ManageMgr = function() {

	this.initPanel = function() {

		this.sel = ["0"];

		this.rec = {};

		this.initQueryPanel();

		this.initListPanel();

		this.initInputWindow();

		this.initCreateWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'accountsmanageMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	// 查询
	this.initQueryPanel = function() {

		// var store = new Ext.data.ArrayStore({
		// fields : ['mykey', 'myvalue'],
		// data : [["1", "可结算"], ["0", "不可结算"]]
		// });
		//
		// this.combo = new Ext.form.ComboBox({
		// store : store,
		// displayField : 'myvalue',
		// valueField : 'mykey',
		// typeAhead : true,
		// mode : 'local',
		// forceSelection : true,
		// anchor : '95%',
		// value : '1',
		// triggerAction : 'all',
		// emptyText : '--请选择--',
		// hiddenName : 'condition/flag',
		// fieldLabel : '是否可结算',
		// selectOnFocus : true
		// });

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 220,
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 查询凭证 】',
					fields : [{
								xtype : 'companycombobox',
								defaultValue : '3000',
								anchor : '95%',
								ref : '../bukrs',
								hiddenName : 'condition/bukrs',
								fieldLabel : '公司'
							}, {
								xtype : 'factorycombobox',
								defaultValue : '3000',
								anchor : '95%',
								ref : '../werks',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
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
								xtype : 'textarea',
								name : 'condition/mblnrs2',
								anchor : '95%',
								fieldLabel : '物料凭证号',
								ref : "../mblnr2",
								height : 50,
								colspan : 1
							}, {
								xtype : 'textarea',
								name : 'condition/matnrs2',
								anchor : '95%',
								fieldLabel : '物料编码',
								ref : "../matnr2",
								height : 50,
								colspan : 1
							}, {
								xtype : "dateregion",
								allowBlank : false,
								colspan : 2,
								anchor : '45%',
								nameArray : ['condition/ruksjstartdate',
										'condition/ruksjendate'],
								fieldLabel : "参考凭证&nbsp;&nbsp;<br>过账日期",
								format : "Y-m-d"
							}, {
								xtype : "hidden",
								name : 'condition/flag',
								value : '1'
							}, {
								xtype : 'hidden',
								ref : "../matnrs",
								name : 'condition/matnrs'
							}, {
								xtype : 'hidden',
								ref : "../mblnrs",
								name : 'condition/mblnrs'
							}]
				});
	}

	// 查询列表
	this.initListPanel = function() {

		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel = new Ext.fn.ListPanel({
			title : '【 查询列表 】',
			hsPage : true,
			pageSize : 200,
			selModel : this.selModel,
			// autoHeight:true,
			height : 300,
			delUrl : '...',
			viewConfig : {
		// autoFill:true

			},
			listeners : {
				rowmousedown : function() {
					return false;
				}
			},
			tbar : [{
						text : '创建',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onSelect
					},{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), this.selModel, {
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
						dataIndex : 'lfbnr'
					}, {
						header : '参考凭证行号',
						dataIndex : 'lfpos'
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
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryJiesuanPage.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					"condition/ekorg" : 3001,
					'condition/bukrs' : 3000,
					'condition/werks' : 3000,
					'condition/flag' : 1
				},
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

	// 生成结算凭证弹窗
	this.initCreateWindow = function() {
		var _this = this;
		this.selModel2 = this.selModel2
				|| new Ext.grid.CheckboxSelectionModel({
							singleSelect : true,
							header : ''
						});
		this.listPanel2 = new Ext.fn.EditListPanel({
			title : '【 生成结算凭证 】',
			subAll : true,
			id : listid,
			clicksToEdit : 1,
			hsPage : false,
			selModel : this.selModel2,
			delUrl : '...',
			tbar : [{
						text : '移除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDselect
					}, '-', {
						text : '生成',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : function() {
							if (!this.listPanel2.isValid()) {
								return;
							} else {

								// 生成结算凭证store
								var tostore = this.listPanel2.store;
								if (tostore.getCount() > 300) {
									Ext.Msg.alert("系统提示",
											"待结算凭证数据不能超过300行，请移除部分数据！");
									return;
								} else {
									this.inputPanel.flje.setValue(0);
									this.inputPanel.yfje.setValue(0);
									this.inputPanel.qtkkje.setValue(0);
									this.inputWindow.show();

								}

							}
						}
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), this.selModel2, {
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
											// var list = Ext.getCmp(listid);
											// var rec =
											// list.getSelectionModel()
											// .getSelections();
											// this.rec = rec[0];
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
												o.setValue(djssl);
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

											var myid = _this.rec.data['myid'];

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
									emptyText : 0,
									value : 0,
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
						// value:'F1',
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
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryJiesuan.biz.ext',
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
							name : 'm_taxrt'
						}, {
							name : 'm_zcdf'
						}]
			})
		});

		this.createWindow = this.createWindow || new Ext.Window({
					title : "生成结算凭证",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closable : false,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					modal : true,
					width : 1024,
					// height : 660,
					height : 550,
					// layout : 'form',
					layout : 'fit',
					items : [this.listPanel2],
					buttons : [{
						text : "确定",
						scope : this,
						handler : function() {
							if (!this.listPanel2.isValid()) {
								return;
							} else {
								// 生成结算凭证store
								var tostore = this.listPanel2.store;
								if (tostore.getCount() > 300) {
									Ext.Msg.alert("系统提示",
											"待结算凭证数据不能超过300行，请移除部分数据！");
									return;
								} else {
									this.inputPanel.flje.setValue(0);
									this.inputPanel.yfje.setValue(0);
									this.inputPanel.qtkkje.setValue(0);
									this.inputWindow.show();
								}
							}
						}
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.sel = ["0"];
							this.selModel.clearSelections();
							this.inputPanel.form.reset();
							this.createWindow.hide();
						}
					}]

				});
	}

	// 金额输入弹窗
	this.initInputWindow = function() {

		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 150,
					pgrid : '',
					columns : 1,
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
								xtype : 'displayfield'
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
								xtype : 'displayfield'
							}, {
								xtype : 'numberfield',
								value : 0,
								ref : '../qtkkje',
								anchor : '80%',
								name : 'qtkkje',
								allowBlank : false,
								fieldLabel : '其他扣款总金额'
							}]

				});

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : "生成结算凭证",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					modal : true,
					autoScroll : true,
					width : 400,
					height : 200,
					layout : 'fit',
					items : [this.inputPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputWindow.hide();
								}
							}]

				});
	}

}