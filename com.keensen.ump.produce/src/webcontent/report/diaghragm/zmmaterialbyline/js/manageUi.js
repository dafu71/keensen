com.keensen.ump.produce.report.diaghragm.ZmMaterialByLineMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'zmmaterialbylinemgr',
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
								xtype : 'datetimefield',
								name : 'condition/productDtStart',
								ref : '../productDtStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '100%',
								allowBlank : false,
								ref : '../productDtStart',
								editable : true,
								format : 'Y-m-d H:i',
								value : new Date(getFirstDate())
										.format('Y-m-d H:i')
							}, {
								xtype : 'datetimefield',
								name : 'condition/productDtEnd',
								ref : '../productDtEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '100%',
								editable : true,
								allowBlank : false,
								format : 'Y-m-d H:i',
								ref : '../productDtEnd',
								value : new Date().add(Date.DAY, 0)
										.format('Y-m-d H:i')
							}, {
								xtype : 'dictcombobox',
								name : 'condition/line',
								anchor : '100%',
								fieldLabel : '生产线别',
								hiddenName : 'condition/line',
								dictData : KS_ZM_LINE
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
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			/*
			 * tbar : [{ text : '修改', scope : this, iconCls :
			 * 'icon-application_edit', handler : this.onEdit }],
			 */
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'theoryAmount',
						header : '铸膜产量(米)'
					}, {
						dataIndex : 'theoryAmount2',
						header : '无纺布(米)'
					}, {
						dataIndex : 'c11Bom',
						header : 'C11<br>BOM用量(kg)'
					}, {
						dataIndex : 'c11Reality',
						header : 'C11<br>实际用量(kg)'
					}, {
						dataIndex : 'c11Diff',
						header : 'C11<br>差异(kg)'
					}, {
						dataIndex : 'c12Bom',
						header : 'C12<br>BOM用量(kg)'
					}, {
						dataIndex : 'c12Reality',
						header : 'C12<br>实际用量(kg)'
					}, {
						dataIndex : 'c12Diff',
						header : 'C12<br>差异(kg)'
					}, {
						dataIndex : 'c13Bom',
						header : 'C13<br>BOM用量(kg)'
					}, {
						dataIndex : 'c13Reality',
						header : 'C13<br>实际用量(kg)'
					}, {
						dataIndex : 'c13Diff',
						header : 'C13<br>差异(kg)'
					}, {
						dataIndex : 'c14Bom',
						header : 'C14<br>BOM用量(kg)'
					}, {
						dataIndex : 'c14Reality',
						header : 'C14<br>实际用量(kg)'
					}, {
						dataIndex : 'c14Diff',
						header : 'C14<br>差异(kg)'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.diaghragm.queryZmMaterialByLine2.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'line'
						}, {
							name : 'theoryAmount'
						}, {
							name : 'theoryAmount2'
						}, {
							name : 'c11Bom'
						}, {
							name : 'c11Reality'
						}, {
							name : 'c11Diff'
						}, {
							name : 'c12Bom'
						}, {
							name : 'c12Reality'
						}, {
							name : 'c12Diff'
						}, {
							name : 'c13Bom'
						}, {
							name : 'c13Reality'
						}, {
							name : 'c13Diff'
						}, {
							name : 'c14Bom'
						}, {
							name : 'c14Reality'
						}, {
							name : 'c14Diff'
						}]
			})
		})
	}

}