com.zoomlion.hjsrm.purchase.QueryapplyMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'queryapplymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 160,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 采购申请查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								name : 'condition/werks',
								fieldLabel : '工厂',
								hiddenName : 'condition/werks'
							}, {
								xtype : 'textfield',
								name : 'condition/banfn',
								fieldLabel : '采购申请号'
							}, {
								xtype : 'textfield',
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '供应商描述'
							}, {
								xtype : 'textfield',
								name : 'condition/bednr',
								fieldLabel : '需求跟踪号'
							}, {
								xtype : 'ekorgcombobox',
								//defaultValue : '3001',
								anchor : '95%',
								ref : '../ekorg',
								hiddenName : 'condition/ekorg',
								disabled : Ext.isEmpty(lifnr) ? true : false,
								hidden : Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '采购组织'
							},{
								xtype : 'ekgrpcombobox',
								name : 'condition/ekgrp',
								fieldLabel : '采购组',
								hidden : Ext.isEmpty(lifnr) ? true : false,
								hiddenName : 'condition/ekgrp'
							}, {
								fieldLabel : '查询供应商为空',
								xtype : 'checkbox',
								value : '1',
								name : 'condition/nulllifnr'
							}]
				});

		this.queryPanel.addButton({
					text : "手动获取采购申请",
					iconCls : "icon-application_edit",
					hidden : !Ext.isEmpty(lifnr) ? true : false,
					scope : this,
					handler : this.getSapApplyOrder
				});
				
		this.queryPanel.addButton({
					text : "导出",
					hidden : exportflag == '0' ,
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 采购申请列表 】',
			hsPage : true,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werksname',
						header : '工厂'
					}, {
						dataIndex : 'lifnr',
						header : '供应商帐号'
					}, {
						dataIndex : 'name1',
						header : '供应商名称'
					}, {
						dataIndex : 'banfn',
						header : '采购申请号'
					}, {
						dataIndex : 'bnfpo',
						header : '采购申请行号'
					}, {
						dataIndex : 'erdat',
						header : '发布日期'
					}, {
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'maktx',
						header : '物料描述'
					}, {
						dataIndex : 'menge',
						header : '采购申请数量'
					}, {
						dataIndex : 'lfdat',
						header : '交货日期'
					}, {
						dataIndex : 'meins',
						header : '计量单位'
					}, {
						dataIndex : 'lgort',
						header : '库存地点'
					}, {
						dataIndex : 'bstyp',
						header : '项目类别'
					}, {
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
				url : 'com.zoomlion.hjsrm.purchase.queryapply.queryApplylist.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/werks' : 3000
				},
				fields : [{
							name : 'werks'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'banfn'
						}, {
							name : 'bnfpo'
						}, {
							name : 'erdat'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'menge'
						}, {
							name : 'lfdat'
						}, {
							name : 'meins'
						}, {
							name : 'lgort'
						}, {
							name : 'bstyp'
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
							name : 'werksname'
						}]
			})
		})
	}
}