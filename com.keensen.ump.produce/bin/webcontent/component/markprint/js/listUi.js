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
					height : 80,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/prodBatchNo',
								anchor : '75%',
								fieldLabel : '元件序号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName2',
								anchor : '75%',
								fieldLabel : '订单生产型号'
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
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'ifPrint',
						header : '是否可打印'
					}, {
						dataIndex : 'prodBatchNo',
						header : '元件序号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'prodSpecName2',
						header : '订单生产型号'
					}, {
						dataIndex : 'prodSpecName',
						header : '生产型号'
					}, {
						dataIndex : 'dryWet',
						header : '订单干/湿膜'
					}, {
						dataIndex : 'dryWet2',
						header : '生产干/湿膜'
					}, {
						dataIndex : 'templateName',
						header : '唛头图纸编号'
					}, {
						dataIndex : 'printCnt',
						header : '打印次数'
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
						}]
			})
		})
	}

}