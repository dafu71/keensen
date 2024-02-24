com.keensen.ump.produce.diaphragm.make.report.wasteMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '固废统计',
					layout : 'ns',
					border : false,
					renderTo : 'makereportwastemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【固废查询】',
					fields : [{
						xtype : "dateregion",
						anchor : '100%',
						allowBlank : false,
						colspan : 1,
						nameArray : ['condition/productDtStart',
								'condition/productDtEnd'],
						fieldLabel : "生产日期",
						format : "Y-m-d"
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
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
			title : '【固废列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'teamName',
						header : '生产班组'
					}, {
						dataIndex : 'cnt',
						header : '涂膜投入底膜卷数'
					}, {
						dataIndex : 'c3',
						header : '开头不良'
					}, {
						dataIndex : 'c9',
						header : '末尾取样'
					}, {
						dataIndex : 'c11',
						header : '换卷拆切'
					}, {
						dataIndex : 'c10',
						header : '底膜剩余'
					}, {
						dataIndex : 'total',
						header : '固损合计'
					}, {
						dataIndex : 'poor',
						header : '固损率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryWasteByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'teamName'
						}, {
							name : 'c3'
						}, {
							name : 'c9'
						}, {
							name : 'c10'
						}, {
							name : 'c11'
						}, {
							name : 'total'
						}, {
							name : 'cnt'
						}, {
							name : 'poor'
						}

				]
			})
		})
	}

}