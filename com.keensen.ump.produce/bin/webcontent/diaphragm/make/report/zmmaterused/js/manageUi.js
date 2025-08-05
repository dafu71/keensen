com.keensen.ump.produce.diaphragm.make.report.ZmMaterUsedMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'zmmaterusedmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : "dateregion",
								anchor : '100%',
								allowBlank : false,
								colspan : 1,
								nameArray : ['condition/productDtStart',
										'condition/productDtEnd'],
								fieldLabel : "铸膜生产日期",
								format : "Y-m-d"
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'c11',
						header : 'C11重量(kg)'
					}, {
						dataIndex : 'c12a',
						header : 'C12重量(kg)<br>苏威'
					}, {
						dataIndex : 'c12b',
						header : 'C12重量(kg)<br>巴斯夫'
					}, {
						dataIndex : 'c12c',
						header : 'C12重量(kg)<br>优巨'
					}, {
						dataIndex : 'c12d',
						header : 'C12重量(kg)<br>沃顿'
					}, {
						dataIndex : 'c12s',
						header : 'C12重量(kg)<br>样品'
					}, {
						dataIndex : 'c12',
						header : 'C12合计重量(kg)'
					}, {
						dataIndex : 'c13',
						header : 'C13重量(kg)'
					}, {
						dataIndex : 'c14',
						header : 'C14重量(kg)'
					}, {
						dataIndex : 'cloth300020',
						header : '无纺布(m)<br>三菱'
					}, {
						dataIndex : 'cloth300021',
						header : '无纺布(m)<br>三木'
					}, {
						dataIndex : 'cloth300022',
						header : '无纺布(m)<br>天间'
					}, {
						dataIndex : 'cloth300025',
						header : '无纺布(m)<br>康捷'
					}, {
						dataIndex : 'cloth300026',
						header : '无纺布(m)<br>样品'
					}, {
						dataIndex : 'cloth',
						header : '无纺布合计(m)'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryZmMaterUsed.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'c11'
						}, {
							name : 'c12a'
						}, {
							name : 'c12b'
						}, {
							name : 'c12c'
						}, {
							name : 'c12d'
						}, {
							name : 'c12s'
						}, {
							name : 'c12'
						}, {
							name : 'c13'
						}, {
							name : 'c14'
						}, {
							name : 'cloth300020'
						}, {
							name : 'cloth300021'
						}, {
							name : 'cloth300022'
						}, {
							name : 'cloth300025'
						}, {
							name : 'cloth300026'
						}, {
							name : 'cloth'
						}

				]
			})
		})
	}

}