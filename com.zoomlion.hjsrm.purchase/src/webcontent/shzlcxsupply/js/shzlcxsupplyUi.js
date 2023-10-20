/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 供应商送货指令查询
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
 com.zoomlion.hjsrm.purchase.shzlcxsupplyMgr = function() {
	this.initPanel = function() {
		this.initshzlcxsupplyQueryPanel();
		this.initshzlcxsupplyListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
				    renderTo : 'shzlcxsupplyMgr',
					panels : [this.shzlcxsupplyqueryPanel, this.shzlcxsupplylistPanel]
				});
	}

	this.initshzlcxsupplyQueryPanel = function() {
		this.shzlcxsupplyqueryPanel = new Ext.fn.QueryPanel({
					height : 160,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse :false,
					title : '【 送货指令查询 】',
					fields : [{
								xtype : 'companycombobox',
								defaultValue:'3000',
								name : 'query/bukrs',
								fieldLabel : '公司',
								dataIndex : 'query/bukrs',
								hiddenName : 'query/bukrs'
							},{
								xtype : 'factorycombobox',
								defaultValue:'3000',
								name : 'query/werks',
								fieldLabel : '工厂',
								dataIndex : 'query/werks',
								hiddenName : 'query/werks'
							},{
								xtype : 'textfield',
								name : 'query/zshso',
								fieldLabel : '送货指令号'
							},{
								xtype : 'textfield',
								name : 'query/matnr',
								fieldLabel : '物料编码'
							},{
								xtype : 'textfield',
								name : 'query/maktx',
								fieldLabel : '物料编码描述'
							},{
								xtype : 'ekorgcombobox',
								name : 'query/ekorg',
								fieldLabel : '采购组织',
								dataIndex : 'query/ekorg',
								hiddenName : 'query/ekorg'
							},{
								xtype : 'ekgrpcombobox',
								name : 'query/ekgrp',
								fieldLabel : '采购组',
							    dataIndex : 'query/ekgrp',
								hiddenName : 'query/ekgrp'
							},{
								xtype : "dateregion2",
								name : "entitya",
								fieldLabel : "交货日期",
								value1:new Date,
								value2:now,
								format : "Y-m-d"
							},{
								xtype : "dateregion",
								name : "entityb",
								fieldLabel : "创建日期",
								format : "Y-m-d"
							}]
				});
	}

	this.initshzlcxsupplyListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.shzlcxsupplylistPanel = new Ext.fn.EditListPanel({
			title : '【 送货指令列表 】',
			clicksToEdit : 1,
			hsPage : true,
			tbar : [{
						text : '保存',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onsaveok
					},{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
						}],	
	 selModel : selModel,
			columns : [new Ext.grid.RowNumberer(),selModel , {
						dataIndex : 'werks',
						header : '工厂',
						hidden : true
					},{
						dataIndex : 'zshso',
						header : '送货指令号'
					},{
						dataIndex : 'zshso_n',
						header : '送货指令行号'
					},{
						dataIndex : 'matnr',
						header : '物料编码'
					},{
						dataIndex : 'maktx',
						header : '物料描述'
					},{
						dataIndex : 'ekgrp',
						header : '采购组'
					},{
						dataIndex : 'ekorg',
						header : '采购组织'
					},{
						dataIndex : 'menge',
						header : '送货数量'
					},{
						dataIndex : 'zdate',
						header : '交货日期',
						sortable : true	
					},{
						dataIndex : 'ztext',
						header : '备注信息'
						
					},{
						dataIndex : 'ztext_01',
						header : '供应商反馈信息',
						css:'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField ({
						}))
					},{
						dataIndex : 'lifnr',
						header : '供应商帐号'
					},{
						dataIndex : 'name1',
						header : '供应商名称'
					},{
						dataIndex : 'trant',
						header : '创建时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.purchase.shzlwh.queryshzkcxsupply.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'bukrs'
						},{
							name : 'weaks'
						}, {
							name : 'zshso'
						}, {
							name : 'zshso_n'
						}, {
							name : 'lifnr'
						}, {
							name : 'matnr'
						}, {
							name : 'ekorg'
						}, {
							name : 'ekgrp'
						}, {
							name : 'menge'
						}, {
							name : 'zdate'
						}, {
							name : 'ztext'
						}, {
							name : 'ztext_01'
						}, {
							name : 'statu'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}, {
							name : 'name1'
						}, {
							name : 'txz01'
						},{
							name : 'maktx'
						}]
			})
		});
	}
}