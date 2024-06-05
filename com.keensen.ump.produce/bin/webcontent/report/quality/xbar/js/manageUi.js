com.keensen.ump.produce.report.quality.xbar.XbarMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initXPanel();
		this.initRPanel();
		this.initViewPanel();
		this.initMpStandStore();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					autoScroll : true,
					border : false,
					renderTo : 'xbarmgr',
					panels : [this.queryPanel, this.listPanel, this.viewPanel]
				});
	}

	this.initMpStandStore = function() {
		this.mpStandStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.quality.queryMpStand.biz.ext',
			root : 'data',
			autoLoad : false,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'recordId'
					}, {
						name : 'spectId'
					}, {
						name : 'specName'
					}, {
						name : 'levelId'
					}, {
						name : 'levelName'
					}, {
						name : 'gfd'
					}, {
						name : 'salt'
					}, {
						name : 'stateName'
					}, {
						name : 'macName'
					}, {
						name : 'testSolid'
					}, {
						name : 'method'
					}, {
						name : 'testSolid'
					}, {
						name : 'isWxName'
					}, {
						name : 'gfdLow'
					}, {
						name : 'gfdUp'
					}, {
						name : 'gfdAvg'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					//title : '【Xbar-R控制图查询】',
					fields : [{
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								allowBlank : false,
								name : 'condition/specId',
								anchor : '90%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'mplinecombobox',
								hiddenName : 'condition/lineId',
								allowBlank : false,
								anchor : '90%',
								fieldLabel : '生产线 '
							}, {
								xtype : "dateregion",
								anchor : '100%',
								allowBlank : false,
								colspan : 1,
								nameArray : ['condition/createDtStart',
										'condition/createDtEnd'],
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
			//title : '【Xbar-R控制图列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			height : 300,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'specName',
						header : '膜片类型'
					}, {
						dataIndex : 'lineName',
						header : '生产线别'
					}, {
						dataIndex : 'createDt',
						header : '生产日期'
					}, {
						dataIndex : 'batchNo',
						header : '批号'
					}, {
						dataIndex : 'positionLength',
						header : '取样位置'
					}, {
						dataIndex : 'gfdFirst',
						header : '样本左'
					}, {
						dataIndex : 'gfdSecond',
						header : '样本中'
					}, {
						dataIndex : 'gfdThird',
						header : '样本右'
					}, {
						dataIndex : 'gfdSum',
						header : '样本和'
					}, {
						dataIndex : 'gfdAvg',
						header : '样本平均'
					}, {
						dataIndex : 'gfdDiff',
						header : '样本差'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality.queryXbar.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'specName'
						}, {
							name : 'lineName'
						}, {
							name : 'createDt'
						}, {
							name : 'batchNo'
						}, {
							name : 'positionLength'
						}, {
							name : 'gfdFirst'
						}, {
							name : 'gfdSecond'
						}, {
							name : 'gfdThird'
						}, {
							name : 'gfdSum'
						}, {
							name : 'gfdAvg'
						}, {
							name : 'gfdDiff'
						}, {
							name : 'lineId'
						}, {
							name : 'rn'
						}]
			})
		})
	}

	this.initXPanel = function() {
		this.xPanel = new Ext.Panel({
			height : 300,
			html : '<div id="main" style = "width:100%;height:300px;margin:0 auto">X控制图</div>'

		})
	};

	this.initRPanel = function() {
		this.rPanel = new Ext.Panel({
			height : 300,
			html : '<div id="main2" style = "width:100%;height:300px;margin:0 auto">R控制图</div>'

		})
	};

	this.initViewPanel = function() {
		Ext.applyIf(this.xPanel, {
					region : 'center'
				});
		Ext.applyIf(this.rPanel, {
					region : 'south'
				});
		this.viewPanel = new Ext.Panel({
					height : 600,
					layout : 'fit',
					items : [new Ext.Container({
								layout : "border",
								autoScroll : true,
								items : [this.xPanel, this.rPanel]
							})]
				})
	}
}