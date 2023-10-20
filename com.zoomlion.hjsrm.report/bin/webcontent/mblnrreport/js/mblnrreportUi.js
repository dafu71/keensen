/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 物料凭证查询
 * 创建日期： 2015-1-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.mblnrreport.MblnrreportMgr = function() {
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
					renderTo : 'mblnrreportMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var myDate = new Date();
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 195,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 物料凭证查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								name : 'query/werks',
								fieldLabel : '工厂',
								dataIndex : 'query/werks',
								hiddenName : 'query/werks'
							}, {
								xtype : 'textfield',
								name : 'query/mblnr',
								fieldLabel : '物料凭证号'
							}, {
								xtype : 'textfield',
								name : 'query/mjahr',
								allowBlank : false,
								fieldLabel : '年度',
								value : myDate.getFullYear()
							}, {
								xtype : 'textfield',
								name : 'query/zasnh',
								fieldLabel : '送货单号'
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
								fieldLabel : '物料描述'
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
								xtype : 'textfield',
								name : 'query/username',
								fieldLabel : '操作员'
							}, {
								xtype : 'textfield',
								name : 'query/lgort',
								fieldLabel : '库存地点'
							},{
								xtype : 'textfield',
								name : 'query/vnbm',
								fieldLabel : 'VN编码'
							}, {
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "过账日期",
								format : "Y-m-d"
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【物料凭证列表 】',
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
						dataIndex : 'mblnr',
						header : '物料凭证号',
						width : 82
					}, {
						dataIndex : 'mjahr',
						header : '年度',
						width : 40
					}, {
						dataIndex : 'zeile',
						header : '行号',
						width : 40
					}, {
						dataIndex : 'bwart',
						header : '移动类型',
						width : 60
					}, {
						dataIndex : 'menge',
						header : '物料凭证数量',
						width : 82
					}, {
						dataIndex : 'meins',
						header : '计量单位',
						width : 60
					}, {
						dataIndex : 'zasnh',
						header : '送货单号'
					}, {
						dataIndex : 'lifnr',
						header : '供应商帐号'
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
						header : '采购订单号'
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号'
					}, {
						dataIndex : 'menge1',
						header : '采购订单数量'
					}, {
						dataIndex : 'meins1',
						header : '计量单位'
					}, {
						dataIndex : 'budat',
						header : '过账日期'
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
						dataIndex : 'txz01',
						header : '物料描述',
						width : 330,
						renderer : function(v, m, r, i) {
							var str = "<a  ";
							str += " title='" + v;
							str += "'>" + v + "</a>";
							return str;
						}
					}, {
						dataIndex : 'vnbm',
						header : 'VN编码'
					}, {
						dataIndex : 'lfbnr',
						header : '参考凭证'
					}, {
						dataIndex : 'lfbja',
						header : '参考凭证年度'
					}, {
						dataIndex : 'lfpos',
						header : '参考凭证行号'
					}, {
						dataIndex : 'lgort',
						header : '库存地点'
					}, {
						dataIndex : 'username',
						header : '操作人'
					}, {
						dataIndex : 'trant',
						header : '操作时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.report.mblnrreport.mblnrreportquery.biz.ext',
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
							name : 'zasnh'
						}, {
							name : 'matnr'
						}, {
							name : 'txz01'
						}, {
							name : 'menge'
						}, {
							name : 'menge1'
						}, {
							name : 'username'
						}, {
							name : 'tranu'
						}, {
							name : 'meins'
						}, {
							name : 'meins1'
						}, {
							name : 'trant'
						}, {
							name : 'lgort'
						}, {
							name : 'budat'
						}, {
							name : 'cpudt'
						}, {
							name : 'mblnr'
						}, {
							name : 'mjahr'
						}, {
							name : 'zeile'
						}, {
							name : 'bwart'
						}, {
							name : 'lfbnr'
						}, {
							name : 'lfbja'
						}, {
							name : 'lfpos'
						}, {
							name : 'grund'
						}, {
							name : 'vnbm'
						}]
			})
		});
	}
}