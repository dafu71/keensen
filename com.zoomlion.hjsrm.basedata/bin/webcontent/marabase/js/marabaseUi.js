/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 物料基础数据查询
 * 创建日期： 2015-1-28  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.marabase.MarabaseMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'marabaseMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 130,
					width : 500,
					columns : 3,
					border : true,
					title : '【 物料基础数据查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue:'3000',
								name : 'query/werks',
								fieldLabel : '工厂',
								dataIndex : 'query/werks',
								hiddenName : 'query/werks'
							},{
								xtype : 'textfield',
								name : 'query/matnr',
								fieldLabel : '物料编码'
							},{
								xtype : 'textfield',
								name : 'query/maktx',
								fieldLabel : '物料描述'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【物料基础数据列表 】',
			hsPage : true,
			tbar : [{
						text : '手动更新数据',
						rescode : '00621',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onadd
					}],
	        selModel : selModel,
			columns : [new Ext.grid.RowNumberer(),selModel , {
						dataIndex : 'werks',
						header : '工厂'
					},{
						dataIndex : 'matnr',
						header : '物料号'
					},{
						dataIndex : 'maktx',
						header : '物料描述'
					},{
						dataIndex : 'meins',
						header : '基本计量单位'
					},{
						dataIndex : 'zeinr',
						header : '工艺属性'
					},{
						dataIndex : 'ekgrp',
						header : '采购组'
					},{
						dataIndex : 'lgpro',
						header : '库存地点'
					},{
						dataIndex : 'minbe',
						header : '再订货数量'
					},{
						dataIndex : 'bstmi',
						header : '最小批量'
					},{
						dataIndex : 'plifz',
						header : '采购周期'
					},{
						dataIndex : 'zhwbm',
						header : '货位编码'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.basedata.basedata.marabasequery.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
						},{
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'meins'
						}, {
							name : 'zeinr'
						}, {
							name : 'ekgrp'
						}, {
							name : 'lgpro'
						}, {
							name : 'minbe'
						}, {
							name : 'bstmi'
						}, {
							name : 'plifz'
						}, {
							name : 'zhwbm'
						}]
			})
		});
	}
}