/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购合同查询
 * 创建日期： 2014-12-12  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.cghtquery.CghtqueryMgr = function() {
    if (Ext.isEmpty(lifnr)){ var OR = false}
		else{ var OR = true}
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'cghtqueryMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 175,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 采购合同查询 】',
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
								fieldLabel : '物料编码描述'
							}, {
								xtype : 'textfield',
								name : 'query/lifnr',
								fieldLabel : '供应商帐号',
								hidden:OR
							},{
								xtype : 'textfield',
								name : 'query/name1',
								fieldLabel : '供应商名称',
								hidden:OR
							},{
								xtype : 'ekorgcombobox',
								name : 'query/ekorg',
								fieldLabel : '采购组织',
								dataIndex : 'query/ekorg',
								hiddenName : 'query/ekorg'
							},{
								xtype : 'textfield',
								name : 'query/ebeln',
								fieldLabel : '协议编号'
							},{
								xtype : 'textfield',
								name : 'query/verkf',
								fieldLabel : '纸质合同号'
							},{
								xtype : 'dictcombobox',
								name : 'query/frgrl',
								dataIndex : 'query/frgrl',
								hiddenName : 'query/frgrl',
								fieldLabel : '是否审批通过',
								dictData : GE_MATNR_SFGJJ
							},{
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "合同创建日期",
								format : "Y-m-d"
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 采购订单列表 】',
			hsPage : true,
			tbar : [{
						text : '手动更新数据',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onadd,
						rescode : '00422'
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
						dataIndex : 'matnr',
						header : '物料编码'
					},{
						dataIndex : 'maktx',
						header : '物料描述'
					},{
						dataIndex : 'frgrl',
						header : '是否审批通过'
					},{
						dataIndex : 'kbetr',
						header : '价格'
					},{
						dataIndex : 'kpein',
						header : '价格单位'
					},{
						dataIndex : 'konwa',
						header : '货币'
					},{
						dataIndex : 'kmein',
						header : '计量单位'
					},{
						dataIndex : 'ebeln',
						header : '协议编号'
					},{
						dataIndex : 'ebelp',
						header : '行项目'
					},{
						dataIndex : 'lifnr',
						header : '供应商帐号'
					},{
						dataIndex : 'name1',
						header : '供应商名称'
					},{
						dataIndex : 'kdatb',
						header : '有效起始时间'
					},{
						dataIndex : 'kdate',
						header : '有效截止时间'
					},{ xtype : 'dictcolumn',
				        dictData : GE_CGHT_XMLB,
						dataIndex : 'pstyp',
						header : '项目类别'
					},{
						dataIndex : 'verkf',
						header : '采购合同号'
					},{
						dataIndex : 'ekorg',
						header : '采购组织'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.purchase.cghtquery.querycght.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
						},{
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'frgrl'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'verkf'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'kbetr'
						}, {
							name : 'kpein'
						}, {
							name : 'konwa'
						}, {
							name : 'kmein'
						}, {
							name : 'kdatb'
						}, {
							name : 'kdate'
						}, {
							name : 'pstyp'
						}, {
							name : 'ekorg'
						}]
			})
		});
	}
}