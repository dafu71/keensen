com.zoomlion.hjsrm.kcgl.MaterialMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
	}
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 160,
					//width : 500,
					region : 'north',
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 物料查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							},{
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}, {
								xtype : 'textfield',
								name : 'condition/pmatnr',
								fieldLabel : '车型物料编码'
							},{
								xtype : 'textfield',
								name : 'condition/pmaktx',
								fieldLabel : '车型物料描述'
							}, {
								xtype : 'textfield',
								name : 'condition/zcpcx',
								fieldLabel : '车型'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								fieldLabel : '供应商'
							}]
				});
	}
	
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel(
				{   header : '',
					singleSelect : true});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 物料列表 】',
			region : 'center',
			hsPage : true,
			selModel : selModel,
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'matnr',
						header : '大件物料编码'
					},{
						dataIndex : 'maktx',
						header : '大件物料描述'		
					},{
						dataIndex : 'pmatnr',
						header : '车型物料编码'
					},{
						dataIndex : 'pmaktx',
						header : '车型物料描述'		
					},{
						dataIndex : 'zcpcx',
						header : '车型'
					},{
						dataIndex : 'lifnr',
						header : '供应商编码'
					},{
						dataIndex : 'name1',
						header : '供应商'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryMaterials.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'matnr'
						}, {
							name : 'zcpcx'
						}, {
							name : 'maktx'
						}, {
							name : 'pmatnr'
						}, {
							name : 'lifnr'
						}, {
							name : 'pmaktx'
						}, {
							name : 'name1'
						}]
			})
		});
	}
}