com.keensen.ump.produce.component.markprintMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "componentmarkprintmgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/templateName',
								anchor : '75%',
								fieldLabel : '图例名称'
							}, {
								xtype : 'textfield',
								name : 'condition/remark',
								anchor : '75%',
								fieldLabel : '备注说明'
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
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
			id : listid,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onCreate
					}],
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'templateName',
						header : '图例名称'
					}, {
						dataIndex : 'url',
						header : '地址'
					}, {
						dataIndex : 'remark',
						header : '备注说明'
					}, {
						dataIndex : 'code',
						header : '代码'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.makprint.queryMarkPrintByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'id'
						}, {
							name : 'templateName'
						}, {
							name : 'url'
						}, {
							name : 'remark'
						}, {
							name : 'code'
						}]
			})
		})
	}
}