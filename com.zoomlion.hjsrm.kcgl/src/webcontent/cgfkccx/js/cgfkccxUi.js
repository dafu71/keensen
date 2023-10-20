/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购方库存查询
 * 创建日期： 2014-12-15  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.CgfkccxMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'CgfkccxMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.maktx = Ext.id();
		this.matnr = Ext.id();
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 200,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 采购方库存查询条件 】',
					fields : [{
								xtype : 'textarea',
								height: 100,
								name : 'query/matnr',
								id : this.matnr,
								columns : 1,
								fieldLabel : '物料编码'
							},{
								xtype : 'factorycombobox',
								defaultValue:'3000',
								name : 'query/werks',
								fieldLabel : '工厂',
								dataIndex : 'query/werks',
								columns : 1,
								hiddenName : 'query/werks'
							},{
								xtype : 'textfield',
								name : 'query/maktx',
								columns : 1,
								id : this.maktx,
								fieldLabel : '物料编码描述'
							}]
				});
	}

	this.initListPanel = function() {	
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 采购方库存查询列表 】',
			hsPage : true,
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'werks',
						header : '工厂'
					},{
						dataIndex : 'matnr',
						header : '物料编码'
					},{
						dataIndex : 'maktx',
						header : '物料描述'
					},{
						dataIndex : 'lgort',
						header : '库位'
					},{
						dataIndex : 'labst',
						header : '可用库存'
					},{
						dataIndex : 'speme',
						header : '冻结库存'
					},{
						dataIndex : 'meins',
						header : '计量单位'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.sapinterface.SapMaterialStock.SapMaterialStock.getMaterialStockList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'lgort'
						}, {
							name : 'labst'
						}, {
							name : 'speme'
						}, {
							name : 'meins'
						}]
			})
		});
	}
}