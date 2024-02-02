com.keensen.ump.produce.diaphragm.make.report.zmMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '铸膜不良',
					layout : 'ns',
					border : false,
					// renderTo : 'makereportzmmgr',
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
					title : '【铸膜不良查询】',
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
			title : '【铸膜不良列表】',
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
						dataIndex : 'theoryAmount',
						header : '理论投入数'
					}, {
						dataIndex : 'lose0',
						header : '无纺布取样'
					}, {
						dataIndex : 'lose1',
						header : '拼接固损'
					}, {
						dataIndex : 'lose2',
						header : '底膜取样'
					}, {
						dataIndex : 'lose3',
						header : '工艺取样'
					}, {
						dataIndex : 'lose4',
						header : '无纺布来料不良'
					}, {
						dataIndex : 'lose5',
						header : '设备故障报废'
					}, {
						dataIndex : 'lose6',
						header : '铸膜不良（已扯）'
					}, {
						dataIndex : 'lose7',
						header : '扯掉（打折/开头末尾刮痕）'
					}, {
						dataIndex : 'flaw0',
						header : '浅刮痕'
					}, {
						dataIndex : 'flaw1',
						header : '深刮痕'
					}, {
						dataIndex : 'flaw2',
						header : '铸膜不良'
					}, {
						dataIndex : 'total',
						header : '合计'
					}, {
						dataIndex : 'poor',
						header : '不良率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryZmPoorByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'theoryAmount'
						}, {
							name : 'lose0'
						}, {
							name : 'lose1'
						}, {
							name : 'lose2'
						}, {
							name : 'lose3'
						}, {
							name : 'lose4'
						}, {
							name : 'lose5'
						}, {
							name : 'lose6'
						}, {
							name : 'lose7'
						}, {
							name : 'flaw0'
						}, {
							name : 'flaw1'
						}, {
							name : 'flaw2'
						}, {
							name : 'teamId'
						}, {
							name : 'teamName'
						}, {
							name : 'total'
						}, {
							name : 'poor'
						}

				]
			})
		})
	}

}