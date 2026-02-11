com.keensen.ump.produce.component.storage.Report4NotOrderMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'report4notordermgr',
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
					// title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号'
							}, {
								xtype : 'combo',
								hiddenName : 'condition/storage',
								mode : 'local',
								ref : '../storage',
								fieldLabel : '仓库',
								editable : false,
								store : [['高架成品仓', '高架成品仓'],
										['高架C等品仓', '高架C等品仓']],
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}

							}, {								
								xtype : 'combo',
								mode : 'local',
								editable : false,
								hiddenName : 'condition/dryWet',
								ref : '../type',
								fieldLabel : '干/湿膜',
								store : [['干', '干'], ['湿', '湿']],
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}

							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// hidden : true,
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
			// title : '【仓库配置列表】',
			viewConfig : {
				forceFit : true
			},
			
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : stockAmountTotalId
					}],
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'jmSpecName',
						sortable : true,
						header : '卷膜型号'
					}, {
						dataIndex : 'dryWet',
						sortable : true,
						header : '干/湿'
					}, {
						dataIndex : 'storage',
						sortable : true,
						header : '仓库名称'
					}, {
						dataIndex : 'amount',
						sortable : true,
						header : '数量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryReport4NotOrder.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [ {
							name : 'jmSpecName'
						}, {
							name : 'dryWet'
						}, {
							name : 'storage'
						}, {
							name : 'amount'
						}, {
							name : 'stockAmountTotal'
						}]
			})
		})
	}

}