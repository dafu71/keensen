/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectnotzjlbmgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'inspectnotzjlbmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 无质检类别数据查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								columns : 1,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								columns : 1,
								name : 'condition/lifnr',
								fieldLabel : '供应商'
							}, {
								xtype : 'textfield',
								columns : 1,
								name : 'condition/name1',
								fieldLabel : '供应商描述'
							},{
								xtype : 'textfield',
								columns : 1,
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							},{
								xtype : 'textarea',
								height : '50',
								ref : "../matnr2",
								name : 'condition/matnr2',
								fieldLabel : '物料编码'
							}, {
								xtype : 'hidden',
								ref : "../matnr",
								name : 'condition/matnr'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 无质检类别数据列表 】',
			hsPage : true,
			tbar : [{
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			selModel : selModel,
			delUrl : '...',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂'
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width:150
					}, {
						dataIndex : 'maktx',
						header : '物料描述',
						width:250
					}, {
						dataIndex : 'lifnr',
						header : '供应商代码',
						width:150
					}, {
						dataIndex : 'name1',
						header : '供应商名称',
						width:200
					},{
						dataIndex : 'zeinr',
						header : '工艺属性',
						width:100
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectnotzjlb.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						fields : [ {
									name : 'werks'
								}, {
									name : 'matnr'
								}, {
									name : 'maktx'
								}, {
									name : 'lifnr'
								},  {
									name : 'name1'
								},{
									name : 'zjlb'
								}, {
									name : 'zeinr'
								},{
									name : 'tranu'
								}, {
									name : 'trant'
								}]
					})
		});
	}
}
