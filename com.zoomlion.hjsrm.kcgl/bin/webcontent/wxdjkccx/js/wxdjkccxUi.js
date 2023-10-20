/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.kcgl.WxdjkccxMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'wxdjkccxMgr',
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
					title : '【 外协大件库存状态查询 】', 
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							},{
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							},{
								xtype : 'textfield',
								name : 'condition/lifnr',
								fieldLabel : '供应商编码'
							},{
								xtype : 'textfield',
								name : 'condition/name1',
								fieldLabel : '供应商描述'
							},{
								xtype : 'textfield',
								name : 'condition/cxdm',
								fieldLabel : '车型代码',
								hidden : true
							},{
								xtype : 'textfield',
								name : 'condition/cxmc',
								fieldLabel : '车型名称'
							}, {
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
			title : '【 外协大件库存状态列表 】',
			hsPage : true,
			tbar : [{
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					},'->',
					   {
						xtype : 'displayfield',
						ref : "../msg",
						style:'color:red',
						id:msgxxx
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂',
						width:55
					},{
						dataIndex : 'cxmc',
						header : '车型名称',
						width:120
					},{
						dataIndex : 'matnr',
						header : '物料编码',
						width:150
					},{
						dataIndex : 'maktx',
						header : '物料描述',
						width:250
						
					},{
						dataIndex : 'lifnr',
						header : '供应商编码'
					},{
						dataIndex : 'name1',
						header : '供应商名称'			
					},{
						dataIndex : 'cxdm',
						header : '车型代码',
						hidden : true
						
					},{
						dataIndex : 'menge_a_z',
						width:102,
						header : '未完成计划数(总)'
					},{
						dataIndex : 'menge_b_z',
						width:55,
						header : '投料(总)'
					},{
						dataIndex : 'menge_c_z',
						width:66,
						header : '半成品(总)'
					},{
						dataIndex : 'menge_d_z',
						width:91,
						header : '待表面处理(总)'
					},{
						dataIndex : 'menge_e_z',
						width:81,
						header : '送货状态(总)'
					},{
						dataIndex : 'menge_a',
						header : '未完成计划数',
						width:82
					},{
						dataIndex : 'menge_b',
						header : '投料',
						width:38
					},{
						dataIndex : 'menge_c',
						header : '半成品',
						width:51
					},{
						dataIndex : 'menge_d',
						header : '待表面处理',
						width:79		
					},{
						dataIndex : 'menge_e',
						header : '送货状态',
						width:65
					},{
						dataIndex : 'stprs',
						header : '标准价格',
						width:65
					},{
						dataIndex : 'peinh',
						header : '价格单位',
						width:65
					},{
						dataIndex : 'menge_f',
						header : '库存金额',
						width:65
					},{
						dataIndex : 'zcret',
						header : '更改时间',
						width:150
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.kcglDaji.querywxdjwhcx.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
						},{
							name : 'name1'
						},{
							name : 'cxmc'
						},{
							name : 'lifnr'
						},{
							name : 'cxdm'
						},{
							name : 'matnr'
						},{
							name : 'maktx'
						},{
							name : 'menge_a_z'
						}, {
							name : 'menge_b_z'
						}, {
							name : 'menge_c_z'
						}, {
							name : 'menge_d_z'
						}, {
							name : 'menge_e_z'
						}, {
							name : 'menge_a'
						}, {
							name : 'menge_b'
						}, {
							name : 'menge_c'
						}, {
							name : 'menge_d'
						}, {
							name : 'menge_e'
						},{
							name : 'stprs'
						},{
							name : 'peinh'
						},{
							name : 'menge_f'
						},{
							name : 'sum_menge'
						},{
							name : 'zcret'
						}]
			})
		});
	}
}
