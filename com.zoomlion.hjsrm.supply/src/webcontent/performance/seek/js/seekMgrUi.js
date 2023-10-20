com.zoomlion.hjsrm.supply.SeekMgr = function() {
	this.initPanel = function() {

		this.Hidden_zcost = true;
		this.Hidden_zqtxi = true;
		this.Hidden_zjshz = true;
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'performanceseekMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var store = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [["1", "月度绩效"], ["2", "半年绩效"], ["3", "年度绩效"]]
				});
		this.combo = new Ext.form.ComboBox({
					store : store,
					displayField : 'myvalue',
					value : '1',
					editable : false,
					valueField : 'mykey',
					hiddenName : 'condition/ytype',
					typeAhead : true,
					mode : 'local',
					forceSelection : true,
					anchor : '80%',
					triggerAction : 'all',
					emptyText : '--请选择--',
					fieldLabel : '类型',
					selectOnFocus : true
				});
		this.queryPanel = new Ext.fn.QueryPanel({
					height : !Ext.isEmpty(lifnr) ? 150 : 180,
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 供应商绩效查询 】',
					fields : [{
								xtype : 'companycombobox',
								defaultValue : '3000',
								anchor : '80%',
								ref : '../bukrs',
								hiddenName : 'condition/bukrs',
								fieldLabel : '公司'
							}, {
								xtype : 'factorycombobox',
								defaultValue : '3000',
								anchor : '80%',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								anchor : '80%',
								fieldLabel : '供应商账号',
								value : Ext.isEmpty(lifnr) ? "" : lifnr,
								hidden : Ext.isEmpty(lifnr) ? false : true
							}, {
								xtype : 'textfield',
								anchor : '80%',
								name : 'condition/name1',
								fieldLabel : '供应商名称',
								hidden : Ext.isEmpty(lifnr) ? false : true
							}, this.combo, {
								xtype : 'textfield',
								name : 'condition/zdata',
								anchor : '80%',
								fieldLabel : '考核期间'
							}]
				});
	}

	this.initListPanel = function() {
		this.selModel = new Ext.grid.CheckboxSelectionModel({});

		this.listPanel = new Ext.fn.ListPanel({
			title : '【 供应商绩效列表 】',
			region : "center",
			hsPage : true,
			selModel : this.selModel,
			enableColumnMove : false,
			delUrl : 'com.zoomlion.hjsrm.supply.manager.supply.performanceMgr.deletePerformances.biz.ext',
			tbar : [{
						text : '删除',
						hidden : Ext.isEmpty(lifnr) ? false : true,
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelete
					}],
			// autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'zdata',
						header : '考核期间',
						width : 120
					}, {
						dataIndex : 'lifnr',
						header : '供应商编号',
						width : 100
					}, {
						dataIndex : 'name1',
						header : '供应商名称',
						width : 120
					}, {
						dataIndex : 'lsort',
						width : 100,
						header : '主供物资类别',
						xtype : 'dictcolumn',
						dictData : GE_SUPPLY_MATERIALTYPE
					}, {
						dataIndex : 'ltype',
						header : '供应商类型',
						width : 100,
						xtype : 'dictcolumn',
						dictData : GE_SUPPLY_MASSTYPE
					}, {
						dataIndex : 'lsyst',
						header : '供应商分级',
						width : 100,
						xtype : 'dictcolumn',
						dictData : GE_SUPPLY_SYSTEMATICS
					}, {
						dataIndex : 'zqual',
						header : '质量绩效'
					}, {
						dataIndex : 'zsupp',
						header : '供应绩效'
					}, {
						dataIndex : 'zcost',
						header : '成本绩效',
						hidden : this.Hidden_zcost
					}, {
						dataIndex : 'zqtxi',
						header : '质量体系',
						hidden : this.Hidden_zqtxi
					}, {
						dataIndex : 'zjshz',
						header : '技术合作',
						hidden : this.Hidden_zjshz
					}, {
						dataIndex : 'zzhjx',
						header : '综合绩效'
					}, {
						header : '同类型物资排名',
						dataIndex : 'ztlpm'
					}, {
						header : '绩效得分排名',
						dataIndex : 'zjxpm'
					}, {
						header : '绩效等级',
						dataIndex : 'zjxdj'
					}, {
						header : '备注',
						dataIndex : 'zbeiz'
					}],
			store : new Ext.data.JsonStore({
				url : "com.zoomlion.hjsrm.supply.manager.supply.performanceMgr.queryPerformances.biz.ext",
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'zbeiz'
						}, {
							name : 'zjxdj'
						}, {
							name : 'zjxpm'
						}, {
							name : 'zdata'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'lsort'
						}, {
							name : 'ltype'
						}, {
							name : 'lsyst'
						}, {
							name : 'zqual'
						}, {
							name : 'zsupp'
						}, {
							name : 'zcost'
						}, {
							name : 'zqtxi'
						}, {
							name : 'zjshz'
						}, {
							name : 'zzhjx'
						}, {
							name : 'ztlpm'
						}]
			})
		});
	}

}