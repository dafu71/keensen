/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购订单执行报表 创建日期： 2014-1-27 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.ebelnreport.EbelnreportMgr = function() {
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
					renderTo : 'ebelnreportMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 185,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 采购执行情况查询 】',
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
								fieldLabel : '采购订单号'
							}, {
								xtype : 'textfield',
								name : 'query/matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'query/maktx',
								fieldLabel : '物料编码描述'
							}, {
								xtype : 'textfield',
								name : 'query/lifnr',
								fieldLabel : '供应商帐号',
								hidden : OR
							}, {
								xtype : 'textfield',
								name : 'query/name1',
								fieldLabel : '供应商名称',
								hidden : OR
							}, {
								xtype : 'ekorgcombobox',
								name : 'query/ekorg',
								fieldLabel : '采购组织',
								dataIndex : 'query/ekorg',
								hiddenName : 'query/ekorg'
							}, {
								xtype : 'ekgrpcombobox',
								name : 'query/ekgrp',
								fieldLabel : '采购组',
								dataIndex : 'query/ekgrp',
								hiddenName : 'query/ekgrp'
							}, {
								xtype : 'textfield',
								name : 'query/bednr',
								fieldLabel : '需求跟踪号'
							}, {
								xtype : 'dictcombobox',
								name : 'query/opt1',
								fieldLabel : '交货完成度',
								hiddenName : 'query/opt1',
								dictData : GE_PURCHASE_WQJHZT
							}, {
								xtype : 'dictcombobox',
								name : 'query/opt2',
								fieldLabel : '确认完成度',
								hiddenName : 'query/opt2',
								dictData : GE_PURCHASE_WQQRZT
							}, {
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "订单交货日期",
								format : "Y-m-d"
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 采购执行情况列表 】',
			hsPage : true,
			tbar : [{
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
						dataIndex : 'lifnr',
						header : '供应商帐号',
						width : 82
					}, {
						dataIndex : 'name1',
						header : '供应商名称',
						renderer : function(v, m, r, i) {
							var str = "<a  ";
							str += " title='" + v;
							str += "'>" + v + "</a>";
							return str;
						}
					}, {
						dataIndex : 'ebeln',
						header : '采购订单号',
						width : 82
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号',
						width : 82
					}, {
						dataIndex : 'aedat',
						header : '发布日期'
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width : 160,
						renderer : function(v, m, r, i) {
							if(v==null){
								return 
							}else{
							var str = "<a  ";
							str += " title='" + v;
							str += "'>" + v + "</a>";
							return str;
						}
						}
					}, {
						dataIndex : 'maktx',
						header : '物料描述',
						width : 330,
						renderer : function(v, m, r, i) {
							var str = "<a  ";
							str += " title='" + v;
							str += "'>" + v + "</a>";

							return str;
						}
					}, {
						dataIndex : 'menge',
						header : '采购订单数量'
					}, {
						dataIndex : 'zquer',
						header : '确认数量'
					}, {
						dataIndex : 'amount',
						header : '累计送货数量'
					}, {
						dataIndex : 'return_amount',
						header : '累计验退数量'
					}, {
						dataIndex : 'cangtui',
						header : '累计仓退数量'
					}, {
						dataIndex : 'ruku',
						header : '累计入库数量'
					}, {
						dataIndex : 'meins',
						header : '计量单位'
					}, {
						dataIndex : 'eindt',
						header : '交货日期'
					}, {
						dataIndex : 'zcdat',
						header : '首次确认时间'
					}, {
						dataIndex : 'createtime',
						header : '首次送货时间'
					}, {
						dataIndex : 'trant',
						header : '首次入库时间'
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
					}, {
						dataIndex : 'loekz',
						header : '删除标记'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.report.ebelnreport.ebelnreportquery.biz.ext',
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
							name : 'amount'
						}, {
							name : 'return_amount'
						}, {
							name : 'cangtui'
						}, {
							name : 'ruku'
						}, {
							name : 'zcdat'
						}, {
							name : 'createtime'
						}, {
							name : 'trant'
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
						}]
			})
		});
	}
}