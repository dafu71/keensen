com.keensen.ump.base.AppearancestdMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'appearancestdmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/specName',
								fieldLabel : '产品型号%-%'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					//hidden : true,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			/*tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}],*/
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'specName',
						header : '产品型号'
					}, {
						dataIndex : 'prodType',
						header : '产品类型'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'tape',
						header : '胶带'
					}, {
						dataIndex : 'labelSize',
						header : '标签尺寸'
					}, {
						dataIndex : 'labelDrawingCode',
						header : '标签图纸编号'
					}, {
						dataIndex : 'coverLabelSize',
						header : '覆盖标签尺寸'
					}, {
						dataIndex : 'coverLabelDrawingCode',
						header : '覆盖标签图纸号'
					}, {
						dataIndex : 'bagSize',
						header : '真空装袋尺寸'
					}, {
						dataIndex : 'bagDrawingCode',
						header : '真空装图纸编号'
					}, {
						dataIndex : 'boxDrawingSize',
						header : '包装箱尺寸'
					}, {
						dataIndex : 'boxDrawingCode',
						header : '包装箱图纸编号'
					}, {
						dataIndex : 'boxMarkSize',
						header : '箱体唛头尺寸'
					}, {
						dataIndex : 'markDrawingCode',
						header : '唛头图纸编号'
					}, {
						dataIndex : 'countPerBox',
						header : '支数/箱'
					}, {
						dataIndex : 'countPerFloor',
						header : '箱数/层'
					}, {
						dataIndex : 'countFloor',
						header : '层数'
					}, {
						dataIndex : 'traySize',
						header : '托盘尺寸（m）'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.appearancestd.queryAppearanceStdByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'specName'
						}, {
							name : 'prodType'
						}, {
							name : 'lid'
						}, {
							name : 'tape'
						}, {
							name : 'labelSize'
						}, {
							name : 'labelDrawingCode'
						}, {
							name : 'coverLabelSize'
						}, {
							name : 'coverLabelDrawingCode'
						}, {
							name : 'bagSize'
						}, {
							name : 'bagDrawingCode'
						}, {
							name : 'boxDrawingSize'
						}, {
							name : 'boxDrawingCode'
						}, {
							name : 'boxMarkSize'
						}, {
							name : 'markDrawingCode'
						}, {
							name : 'countPerBox'
						}, {
							name : 'countPerFloor'
						}, {
							name : 'countFloor'
						}, {
							name : 'traySize'
						}, {
							name : 'specId'
						}, {
							name : 'id'
						}]
			})
		})
	}

}