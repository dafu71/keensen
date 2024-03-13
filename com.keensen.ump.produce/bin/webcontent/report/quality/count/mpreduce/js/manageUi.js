com.keensen.ump.produce.report.quality.mpreduceMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					renderTo : 'mpreducemgr',
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
			title : '【膜片降级清单查询】',
			fields : [{
				xtype : "dateregion",
				anchor : '100%',
				allowBlank : false,
				colspan : 1,
				nameArray : ['condition/reduceDtStart', 'condition/reduceDtEnd'],
				fieldLabel : "降级日期",
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
			title : '【膜片降级清单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'reduceMonth',
						header : '月份'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'specCode',
						header : '订单规格型号'
					}, {
						dataIndex : 'amount',
						header : '订单数量'
					}, {
						dataIndex : 'ext18',
						header : '产品性能'
					}, {
						dataIndex : 'specCode2',
						header : '膜片规格型号'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'qualifidLength',
						header : '数量'
					}, {
						dataIndex : 'reduce',
						header : '降级原因'
					}

			],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality2.queryMpreduceByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'recordId'
						}, {
							name : 'specCode2'
						}, {
							name : 'batchNo'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'reduce'
						}, {
							name : 'reduceDt'
						}, {
							name : 'orderNo'
						}, {
							name : 'amount'
						}, {
							name : 'ext18'
						}, {
							name : 'specId'
						}, {
							name : 'specCode'
						}, {
							name : 'reduceMonth'
						}

				]
			})
		})
	}

}