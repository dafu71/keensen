com.keensen.ump.produce.report.quality.diaghragm.UnqualifiedMgr = function() {
	
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'diaghragmunqualifiedmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.yearMonthStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.report.component.queryYearMonth.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'id'
					}, {
						name : 'name'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'combobox',
								forceSelection : true,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '月份',
								ref : '../ymStart',
								hiddenName : 'condition/ymStart',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.yearMonthStore,
								displayField : "name",
								valueField : "id",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}, {
								xtype : 'combobox',
								forceSelection : true,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '至',
								ref : '../ymEnd',
								hiddenName : 'condition/ymEnd',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.yearMonthStore,
								displayField : "name",
								valueField : "id",
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
					// hidden : true,
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
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'yearMonth',
						header : '月份'
					}, {
						dataIndex : 'zmScrap',
						header : '铸膜工序报废数'
					}, {
						dataIndex : 'tmScrap',
						header : '涂膜工序报废数'
					}, {
						dataIndex : 'cdmScrap',
						header : '裁叠膜工序报废数'
					}, {
						dataIndex : 'prodScrap',
						header : '元件报废数'
					}, {
						dataIndex : 'prodDegrade',
						header : '元件降级数'
					}, {
						dataIndex : 'hhprodDegrade',
						header : '家用元件降级数'
					}, {
						dataIndex : 'wfAmount',
						header : '无纺布投入数'
					}, {
						dataIndex : 'percentInvalid',
						header : '不合格率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.component.queryMpPercentInvalid.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'yearMonth'
						}, {
							name : 'zmScrap'
						}, {
							name : 'tmScrap'
						}, {
							name : 'cdmScrap'
						}, {
							name : 'prodScrap'
						}, {
							name : 'prodDegrade'
						}, {
							name : 'hhprodDegrade'
						}, {
							name : 'wfAmount'
						}, {
							name : 'percentInvalid'
						}

				]
			})
		})
	}

}