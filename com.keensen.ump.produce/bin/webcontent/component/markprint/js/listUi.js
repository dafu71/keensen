com.keensen.ump.produce.component.markprintlistMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "componentmarkprintlistmgr",
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
					fields : [{
								xtype : 'textfield',
								name : 'condition/prodBatchNo',
								anchor : '85%',
								fieldLabel : '元件序号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '85%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName2',
								anchor : '85%',
								fieldLabel : '订单生产型号'
							}, {
								xtype : 'textfield',
								name : 'condition/templateName',
								anchor : '85%',
								fieldLabel : '唛头图纸编号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'numberfield',
								name : 'condition/printCnt',
								anchor : '85%',
								fieldLabel : '打印次数'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ifPrint',
								hiddenName : 'condition/ifPrint',
								fieldLabel : '是否可打印',
								anchor : '85%',
								dictData : KS_YESORNO
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
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '打印',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrint
					}, '-', {
						text : '打印效果预览',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onPreView
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'ifPrint',
						header : '是否可打印',
						sortable : true
					}, {
						dataIndex : 'juanmoBatchNo',
						header : '卷膜序号',
						sortable : true
					}, {
						dataIndex : 'prodBatchNo',
						header : '元件序号',
						sortable : true
					}, {
						dataIndex : 'orderNo',
						header : '订单号',
						sortable : true
					}, {
						dataIndex : 'prodSpecName2',
						header : '订单生产型号',
						sortable : true
					}, {
						dataIndex : 'prodSpecName',
						header : '生产型号',
						sortable : true
					}, {
						dataIndex : 'dryWet',
						header : '订单干/湿膜',
						sortable : true
					}, {
						dataIndex : 'dryWet2',
						header : '生产干/湿膜',
						sortable : true
					}, {
						dataIndex : 'templateName',
						header : '唛头图纸编号',
						sortable : true
					}, {
						dataIndex : 'printCnt',
						header : '打印次数',
						sortable : true
					}, {
						dataIndex : 'maxPrintDate',
						header : '最近打印时间',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.makprint.queryMarkPrintListByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'juanmoBatchId'
						}, {
							name : 'prodBatchNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderNo'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'prodSpecName2'
						}, {
							name : 'templateName'
						}, {
							name : 'url'
						}, {
							name : 'templateId'
						}, {
							name : 'dryWet'
						}, {
							name : 'dryWet2'
						}, {
							name : 'mark'
						}, {
							name : 'waterBatchId'
						}, {
							name : 'code'
						}, {
							name : 'printCnt'
						}, {
							name : 'ifPrint'
						}, {
							name : 'maxPrintDate'
						}]
			})
		})
	}

}