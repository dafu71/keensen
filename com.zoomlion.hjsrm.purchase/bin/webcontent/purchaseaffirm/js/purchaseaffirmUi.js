/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购订单确认 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchaseaffirm.PurchaseaffirmMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'purchaseaffirmMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.ebeln = Ext.id();
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 采购订单查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								name : 'query/werks',
								fieldLabel : '工厂',
								dataIndex : 'query/werks',
								hiddenName : 'query/werks'
							}, {
								xtype : 'textfield',
								name : 'query/ebeln',
								id : this.ebeln,
								fieldLabel : '采购订单号'
							}, {
								xtype : 'textfield',
								name : 'query/maktx',
								fieldLabel : '物料编码描述'
							}, {
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "订单发布日期",
								format : "Y-m-d"
							}, {
								xtype : 'textarea',
								height : '50',
								ref : "../matnr2",
								name : 'query/matnr2',
								fieldLabel : '物料编码'
							}, {
								xtype : 'hidden',
								ref : "../matnr",
								name : 'query/matnr'
							}]
				});
	}

	this.initListPanel = function() {
		this.amount = 0;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.EditListPanel({
			title : '【 采购订单列表 】',
			id : listid,
			hsPage : true,
			tbar : [{
						text : '确认',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveok
					}, {
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂',
						width : 40
					}, {
						dataIndex : 'ebeln',
						header : '采购订单号'
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号'
					}, {
						dataIndex : 'aedat',
						header : '发布日期'
					}, {
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'maktx',
						header : '物料描述'
					}, {
						dataIndex : 'menge',
						header : '采购订单数量'
					}, {
						dataIndex : 'eindt',
						header : '交货日期'
					}, {
						dataIndex : 'answer',
						header : '答交日期',
						hidden : true,
						sortable : true,
						format : "Y-m-d",
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.DateField(
								{
									listeners : {
										'blur' : function(o) {
											var list = Ext.getCmp(listid);
											var rec = list.getSelectionModel()
													.getSelections();
											var maxanswer = rec[0]
													.get("maxanswer");
											var minanswer = rec[0]
													.get("aedat");
											if (Ext.isEmpty(o.value))
												return;
											if (o.value > maxanswer) {
												Ext.Msg.alert("系统提示",
														"您答复的日期已超出最大交货周期！",
														function() {
															o.setValue('');
															var rowIndex = list.getStore().indexOf(rec[0]);
															list.getStore().getAt(rowIndex).set('answer','');
														});
											}
											if (o.value < minanswer) {
												Ext.Msg.alert("系统提示",
														"您答复的日期不能小于发布日期！",
														function() {
															o.setValue('');
															var rowIndex = list.getStore().indexOf(rec[0]);
															list.getStore().getAt(rowIndex).set('answer','');
														});
											}
										}
									},
									format : "Y-m-d",
									editable : true
								})),
						renderer : function(value) {
							
							if (Ext.isEmpty(value))
								return '';
						
							if (typeof value == "string") {								
								return value;
							} else {								
								return value.format("Y-m-d");
							}
						}
						/*
						 * , renderer : function(value) { if (value instanceof
						 * Date) { return new Date(value).format("Y-m-d"); }
						 * else { var regEx = new RegExp("\\-", "gi"); var temp =
						 * value.split('.')[0]; var v = temp.replace(regEx,
						 * "-"); value = v.substring(0, 10); return value; } }
						 */

					}, {
						dataIndex : 'zquer',
						header : '已确认数量'
					}, {
						dataIndex : 'zquerb',
						header : '输入确认数量',
						width : 100,
						allowBlank : false,
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision : 2,
									allowNegative : false,
									listeners : {
										'focus' : function() {
											var list = Ext.getCmp(listid);
											var rec = list.getSelectionModel()
													.getSelections();
											this.amount = rec[0].get("zquera");
										},
										'change' : function(o, newValue,
												oldValue) {

											var amount = this.amount;
											if (newValue > amount) {
												o.setValue(amount);
											}
											if (newValue == '0') {
												o.setValue(amount);
											}
										},
										'specialkey' : function(field, e) {
											return false
										}
									}

								}))
					}, {
						dataIndex : 'zquera',
						header : '输入确认数量',
						hidden : true
					}, {
						dataIndex : 'meins',
						header : '计量单位'
					}, {
						dataIndex : 'ztext',
						header : '输入反馈信息',
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{}))
					}, {
						dataIndex : 'lifnr',
						header : '供应商帐号'
					}, {
						dataIndex : 'name1',
						header : '供应商名称'
					}, {
						dataIndex : 'lgort',
						header : '库存地点'
					}, {
						xtype : 'dictcolumn',
						dictData : GE_PURCHASE_XMFPLB,
						dataIndex : 'pstyp',
						header : '项目类别'
					}, {
						xtype : 'dictcolumn',
						dictData : GE_PURCHASE_KMFPLB,
						dataIndex : 'knttp',
						header : '科目分配类别'
					}, {
						dataIndex : 'ekgrp',
						header : '采购组'
					}, {
						dataIndex : 'ekorg',
						header : '采购组织'
					}, {
						dataIndex : 'bednr',
						header : '需求跟踪号'
					}, {
						dataIndex : 'aufnr',
						header : '生产订单号'
					}, {
						dataIndex : 'kostl',
						header : '成本中心'
					}, {
						dataIndex : 'loekz',
						header : '删除标记',
						hidden : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.purchase.purchasaffirm.querypurchaseaffirm.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'zquera'
						}, {
							name : 'zquerb'
						}, {
							name : 'werks'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'aedat'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'menge'
						}, {
							name : 'eindt'
						}, {
							name : 'zquer'
						}, {
							name : 'meins'
						}, {
							name : 'ztext'
						}, {
							name : 'lgort'
						}, {
							name : 'pstyp'
						}, {
							name : 'knttp'
						}, {
							name : 'ekgrp'
						}, {
							name : 'ekorg'
						}, {
							name : 'bednr'
						}, {
							name : 'aufnr'
						}, {
							name : 'kostl'
						}, {
							name : 'loekz'
						}, {
							name : 'maxanswer'
						}]
			})
		});
	}
}