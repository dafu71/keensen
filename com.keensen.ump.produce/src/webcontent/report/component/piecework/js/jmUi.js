com.keensen.ump.produce.report.component.JmMgr = function() {
	this.initPanel = function() {
		
		this.rec = {};
		
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '工业卷膜',
					layout : 'ns',
					border : false,
					panels : [this.queryPanel, this.listPanel]
				});
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
						xtype : "dateregion",
						colspan : 1,
						anchor : '100%',
						nameArray : ['condition/dateCountStart',
								'condition/dateCountEnd'],
						fieldLabel : "生产日期",
						format : "Y-m-d",
						value : new Date()
					}, {
						xtype : 'textfield',
						name : 'condition/userName',
						anchor : '100%',
						fieldLabel : '操作工'

					}, {
						xtype : 'textfield',
						name : 'condition/prodSpecName',
						anchor : '100%',
						fieldLabel : '元件型号'
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
			tbar : [{
						text : '重新计算',
						scope : this,
						hidden : modifyLimit != 1,
						iconCls : 'icon-application_edit',
						handler : this.onCalculate
					},'->', {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : quantityTotalId2
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}],
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'dataCount',
						header : '生产日期'
					}, {
						dataIndex : 'userName',
						header : '操作工'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'quantity',
						header : '生产数量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.productioncount.queryProductJmListByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'userName'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'dataCount'
						}, {
							name : 'quantity'
						}, {
							name : 'quantityTotal'
						}, {
							name : 'relationId'
						}

				]
			})
		})
	}

}