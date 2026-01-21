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
								colspan : 1,
								name : 'condition/checkCode2',
								anchor : '100%',
								fieldLabel : '请检单号%-%'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '元件序号'
							}, {
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
			// title : '【仓库配置列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'checkCode',
						header : '请检单'
					}, {
						dataIndex : 'jmSpecName',
						header : '卷膜型号'
					}, {
						dataIndex : 'dryWet',
						header : '干/湿'
					}, {
						dataIndex : 'lid',
						header : '端盖类型'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带颜色'
					}, {
						dataIndex : 'storage',
						header : '仓库名称'
					}, {
						dataIndex : 'position',
						header : '仓位名称'
					}, {
						dataIndex : 'fCheckTm',
						header : '初测时间'
					}, {
						dataIndex : 'fSalt',
						header : '初测脱盐率%'
					}, {
						dataIndex : 'fGpd',
						header : '初测产水量gpd'
					}, {
						dataIndex : 'rCheckTm',
						header : '复测时间'
					}, {
						dataIndex : 'rSalt',
						header : '复测脱盐率%'
					}, {
						dataIndex : 'rGpd',
						header : '复测产水量gpd'
					}, {
						dataIndex : 'disinfectTime',
						header : '最后1次消毒时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryReport4NotOrder.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'checkCode'
						}, {
							name : 'jmSpecName'
						}, {
							name : 'dryWet'
						}, {
							name : 'lid'
						}, {
							name : 'tape'
						}, {
							name : 'storage'
						}, {
							name : 'position'
						}, {
							name : 'fCheckTm'
						}, {
							name : 'fSalt'
						}, {
							name : 'fGpd'
						}, {
							name : 'rCheckTm'
						}, {
							name : 'rSalt'
						}, {
							name : 'rGpd'
						}, {
							name : 'disinfectTime'
						}]
			})
		})
	}

}