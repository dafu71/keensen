/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购订单查询 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchasequery.PurchasequeryMgr = function() {
	if (Ext.isEmpty(lifnr)) {
		var OR = false
	} else {
		var OR = true
	}
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'purchasequeryMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.werks = Ext.id();
		this.ebeln = Ext.id();
		this.matnr = Ext.id();
		this.maktx = Ext.id();
		this.lifnr = Ext.id();
		this.name1 = Ext.id();
		this.ekgrp = Ext.id();
		this.ekorg = Ext.id();
		this.bednr = Ext.id();
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 185,
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
								id : this.werks,
								dataIndex : 'query/werks',
								hiddenName : 'query/werks'
							}, {
								xtype : 'textfield',
								name : 'query/ebeln',
								id : this.ebeln,
								fieldLabel : '采购订单号'
							}, {
								xtype : 'textfield',
								name : 'query/matnr',
								id : this.matnr,
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'query/maktx',
								id : this.maktx,
								fieldLabel : '物料编码描述'
							}, {
								xtype : 'textfield',
								name : 'query/lifnr',
								id : this.lifnr,
								fieldLabel : '供应商帐号',
								hidden : OR
							}, {
								xtype : 'textfield',
								name : 'query/name1',
								id : this.name1,
								fieldLabel : '供应商名称',
								hidden : OR
							}, {
								xtype : 'ekorgcombobox',
								name : 'query/ekorg',
								fieldLabel : '采购组织',
								id : this.ekorg,
								dataIndex : 'query/ekorg',
								hiddenName : 'query/ekorg'
							}, {
								xtype : 'ekgrpcombobox',
								name : 'query/ekgrp',
								fieldLabel : '采购组',
								id : this.ekgrp,
								dataIndex : 'query/ekgrp',
								hiddenName : 'query/ekgrp'
							}, {
								xtype : 'textfield',
								name : 'query/bednr',
								id : this.bednr,
								fieldLabel : '需求跟踪号'
							}, {
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "订单发布日期",
								format : "Y-m-d",
								allowBlank : false
							}, {
								xtype : 'radiogroup',
								name : 'ifconfirm',
								anchor : '70%',
								colspan : 1,
								fieldLabel : '确认标识',
								items : [{
											boxLabel : '未确认',
											name : 'query/ifconfirm',
											inputValue : 'N'
										}, {
											boxLabel : '已确认',
											name : 'query/ifconfirm',
											inputValue : 'Y'
										}, {
											boxLabel : '全显示',
											name : 'query/ifconfirm',
											inputValue : '',
											checked : true
										}]
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 采购订单列表 】',
			hsPage : true,
			enableHdMenu : true,
			tbar : [{
						text : '手动更新数据',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onadd,
						rescode : '00421'
					}, {
						text : "导出",
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.exportExcel
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂'
					}, {
						dataIndex : 'loekz',
						header : '删除标记'
					}, {
						dataIndex : 'lifnr',
						header : '供应商帐号'
					}, {
						dataIndex : 'name1',
						header : '供应商名称'
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
						hidden : true
					}, {
						dataIndex : 'zquer',
						header : '确认数量'
					}, {
						dataIndex : 'meins',
						header : '计量单位'
					}, {
						dataIndex : 'ztext',
						header : '反馈信息'
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
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.purchase.purchasequery.querypurchase.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
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
							name : 'answer'
						}]
			})
		});
	}
}