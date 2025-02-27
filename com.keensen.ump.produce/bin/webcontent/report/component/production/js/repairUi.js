com.keensen.ump.produce.report.component.RepairMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '返修数据',
					layout : 'ns',
					border : false,
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
						fieldLabel : "生产日期",
						format : "Y-m-d"
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden:true,
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
						dataIndex : 'produceDt',
						header : '生产日期'
					}, {
						dataIndex : 'bAmount4',
						header : '类4寸补标'
					}, {
						dataIndex : 'hAmount4',
						header : '类4寸换标'
					}, {
						dataIndex : 'bAmount8',
						header : '8寸补标'
					}, {
						dataIndex : 'hAmount8',
						header : '8寸换标'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.component.queryQjChange.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'bAmount4'
						}, {
							name : 'bAmount8'
						}, {
							name : 'hAmount4'
						}, {
							name : 'hAmount8'
						}, {
							name : 'produceDt'
						}

				]
			})
		})
	}

}