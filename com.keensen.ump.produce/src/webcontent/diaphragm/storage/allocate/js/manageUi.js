com.keensen.ump.produce.diaphragm.storage.AllocateMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'allocatemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【调拨单查询】',
					fields : [{
								xtype : 'storagecombobox',
								hiddenName : 'condition/fromStorageId',
								anchor : '60%',
								fieldLabel : '源仓库'
							},{
								xtype : 'storagecombobox',
								hiddenName : 'condition/toStorageId',
								anchor : '60%',
								fieldLabel : '目标仓库'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '60%',
								fieldLabel : '批号'
							}, {
								xtype : "dateregion",
								anchor : '95%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "调拨日期",
								format : "Y-m-d"
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
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【调拨单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'fromStorageName',
						header : '源仓库'
					}, {
						dataIndex : 'toStorageName',
						header : '目标仓库'
					}, {
						dataIndex : 'batchNo',
						header : '批号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'createTime',
						header : '调拨日期'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.allocate.queryAllocate.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'fromStorageName'
						},{
							name : 'toStorageName'
						},{
							name : 'fromStorageId'
						},{
							name : 'toStorageId'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'remark'
						}, {
							name : 'id'
						}, {
							name : 'createTime'
						}]
			})
		})
	}	
	
}