com.keensen.ump.qinsen.produce.qijianchangeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'qijianchangemgr',
					panels : [this.queryPanel, this.listPanel]
				});
		return this.lay;
	}

	this.initQueryPanel = function() {
		var _this = this;		

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					collapsible : false,
					titleCollapse : false,
					// title : '【卷膜记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceBeginDate',
						fieldLabel : '补换标时间',
						colspan : 1,
						anchor : '95%',
						allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceEndDate',
						fieldLabel : '至',
						colspan : 1,
						anchor : '95%',
						editable : true,
						format : 'Y-m-d H:i',
						allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {

						xtype : 'textfield',
						name : 'condition/newBatchNo',
						anchor : '95%',
						fieldLabel : '新元件序号'
					}, {

						xtype : 'textfield',
						name : 'condition/oldBatchNo',
						anchor : '95%',
						fieldLabel : '旧元件序号'
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					rescode : '10002661',
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
			//title : '【补换标历史】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			delUrl : '2.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '动作',
						width : 50,
						dataIndex : 'flagName'
					}, {
						header : '旧元件序号',
						width : 120,
						dataIndex : 'oldBatchNo'
					}, {
						header : '旧型号',
						width : 90,
						dataIndex : 'oldSpecName'
					}, {
						header : '新元件序号',
						width : 120,
						dataIndex : 'newBatchNo'
					}, {
						header : '新型号',
						width : 90,
						dataIndex : 'newSpecName'
					}, {
						header : '生产日期',
						width : 100,
						dataIndex : 'produceDate'
					}, {
						header : '记录时间',
						width : 140,
						dataIndex : 'createDate'
					}, {
						header : '操作工',
						width : 120,
						dataIndex : 'workerName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.qijian.queryChangeRecordsByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'recordId'
						}, {
							name : 'juanmoBatchId'
						}, {
							name : 'oldBatchNo'
						}, {
							name : 'newBatchNo'
						}, {
							name : 'oldSpecId'
						}, {
							name : 'newSpecId'
						}, {
							name : 'workerId'
						}, {
							name : 'produceDt'
						}, {
							name : 'createDt'
						}, {
							name : 'changeDt'
						}, {
							name : 'creatorId'
						}, {
							name : 'changerId'
						}, {
							name : 'remark'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'oldSpecCode'
						}, {
							name : 'oldSpecName'
						}, {
							name : 'newSpecCode'
						}, {
							name : 'newSpecName'
						}, {
							name : 'produceDate'
						}, {
							name : 'workerName'
						}, {
							name : 'flagName'
						}, {
							name : 'createDate'
						}, {
							name : 'creatorName'
						}]
			})
		})
	}
}