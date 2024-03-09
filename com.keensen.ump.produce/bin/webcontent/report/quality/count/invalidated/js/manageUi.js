com.keensen.ump.produce.report.quality.invalidatedMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					renderTo : 'invalidatedmgr',
					border : false,
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
					title : '【膜片报废清单查询】',
					fields : [{
						xtype : "dateregion",
						anchor : '100%',
						allowBlank : false,
						colspan : 1,
						nameArray : ['condition/produceDtStart',
								'condition/produceDtEnd'],
						fieldLabel : "报废日期",
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
			title : '【膜片报废清单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'eloss1',
						header : '实验报废数量'
					}, {
						dataIndex : 'eloss2',
						header : '实验工业转家用待处理数量'
					}, {
						dataIndex : 'ploss1',
						header : '试量产报废数量'
					}, {
						dataIndex : 'ploss2',
						header : '试量产工业转家用待处理数量'
					}, {
						dataIndex : 'tloss1',
						header : '量产报废数量'
					}, {
						dataIndex : 'tloss2',
						header : '量产工业转家用待处理数量'
					}, {
						dataIndex : 'loss1',
						header : '报废数量合计'
					}, {
						dataIndex : 'loss2',
						header : '工业转家用待处理数量合计'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality2.queryInvalidatedByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'materSpecCode'
						}, {
							name : 'eloss1'
						}, {
							name : 'eloss2'
						}, {
							name : 'ploss1'
						}, {
							name : 'ploss2'
						}, {
							name : 'tloss1'
						}, {
							name : 'tloss2'
						}, {
							name : 'loss1'
						}, {
							name : 'loss2'
						}

				]
			})
		})
	}

}