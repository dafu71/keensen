com.keensen.ump.produce.report.diaghragm.MaterialByLineMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'materialbylinemgr',
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
								.format('Y-m-d 00:00')
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
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '100',
						hiddenName : 'condition/lineId',
						ref : '../lineId',
						anchor : '100%',
						fieldLabel : '生产线 ',
						colspan : 1
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
						dataIndex : 'lineCode',
						header : '线别'
					}, {
						dataIndex : 'outLength',
						header : '产量(米)'
					}, {
						dataIndex : 'c41Bom',
						header : 'C41<br>BOM用量'
					}, {
						dataIndex : 'c41Reality',
						header : 'C41<br>实际用量'
					}, {
						dataIndex : 'c41Diff',
						header : 'C41<br>差异'
					}, {
						dataIndex : 'c42Bom',
						header : 'C42<br>BOM用量'
					}, {
						dataIndex : 'c42Reality',
						header : 'C42<br>实际用量'
					}, {
						dataIndex : 'c42Diff',
						header : 'C42<br>差异'
					}, {
						dataIndex : 'c51Bom',
						header : 'C51<br>BOM用量'
					}, {
						dataIndex : 'c51Reality',
						header : 'C51<br>实际用量'
					}, {
						dataIndex : 'c51Diff',
						header : 'C51<br>差异'
					}, {
						dataIndex : 'pva165Bom',
						header : 'PVA165<br>BOM用量'
					}, {
						dataIndex : 'pva165Reality',
						header : 'PVA165<br>实际用量'
					}, {
						dataIndex : 'pva165Diff',
						header : 'PVA165<br>差异'
					}, {
						dataIndex : 'pva205Bom',
						header : 'PVA205<br>BOM用量'
					}, {
						dataIndex : 'pva205Reality',
						header : 'PVA205<br>实际用量'
					}, {
						dataIndex : 'pva205Diff',
						header : 'PVA205<br>差异'
					}, {
						dataIndex : 'pva540Bom',
						header : 'PVA540<br>BOM用量'
					}, {
						dataIndex : 'pva540Reality',
						header : 'PVA540<br>实际用量'
					}, {
						dataIndex : 'pva540Diff',
						header : 'PVA540<br>差异'
					}, {
						dataIndex : 'c71Bom',
						header : 'C71<br>BOM用量'
					}, {
						dataIndex : 'c71Reality',
						header : 'C71<br>实际用量'
					}, {
						dataIndex : 'c71Diff',
						header : 'C71<br>差异'
					}, {
						dataIndex : 'c72Bom',
						header : 'C72<br>BOM用量'
					}, {
						dataIndex : 'c72Reality',
						header : 'C72<br>实际用量'
					}, {
						dataIndex : 'c72Diff',
						header : 'C72<br>差异'
					}, {
						dataIndex : 'c21Bom',
						header : 'C21<br>BOM用量'
					}, {
						dataIndex : 'c21Reality',
						header : 'C21<br>实际用量'
					}, {
						dataIndex : 'c21Diff',
						header : 'C21<br>差异'
					}, {
						dataIndex : 'c22Bom',
						header : 'C22<br>BOM用量'
					}, {
						dataIndex : 'c22Reality',
						header : 'C22<br>实际用量'
					}, {
						dataIndex : 'c22Diff',
						header : 'C22<br>差异'
					}, {
						dataIndex : 'c22aBom',
						header : 'C22-A<br>BOM用量'
					}, {
						dataIndex : 'c22aReality',
						header : 'C22-A<br>实际用量'
					}, {
						dataIndex : 'c22aDiff',
						header : 'C22-A<br>差异'
					}, {
						dataIndex : 'c24Bom',
						hidden:true,
						header : 'C24<br>BOM用量'
					}, {
						dataIndex : 'c24Reality',
						hidden:true,
						header : 'C24<br>实际M用量'
					}, {
						dataIndex : 'c24Diff',
						hidden:true,
						header : 'C24<br>差异'
					}, {
						dataIndex : 'c29Bom',
						header : 'C29<br>BOM用量'
					}, {
						dataIndex : 'c29Reality',
						header : 'C29<br>实际M用量'
					}, {
						dataIndex : 'c29Diff',
						header : 'C29<br>差异'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.diaghragm.queryMaterialByLine.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'lineCode'
						}, {
							name : 'lineId'
						}, {
							name : 'outLength'
						}, {
							name : 'c41Bom'
						}, {
							name : 'c41Reality'
						}, {
							name : 'c41Diff'
						}, {
							name : 'c42Bom'
						}, {
							name : 'c42Reality'
						}, {
							name : 'c42Diff'
						}, {
							name : 'c51Bom'
						}, {
							name : 'c51Reality'
						}, {
							name : 'c51Diff'
						}, {
							name : 'pva165Bom'
						}, {
							name : 'pva165Reality'
						}, {
							name : 'pva165Diff'
						}, {
							name : 'pva205Bom'
						}, {
							name : 'pva205Reality'
						}, {
							name : 'pva205Diff'
						}, {
							name : 'pva540Bom'
						}, {
							name : 'pva540Reality'
						}, {
							name : 'pva540Diff'
						}, {
							name : 'c71Bom'
						}, {
							name : 'c71Reality'
						}, {
							name : 'c71Diff'
						}, {
							name : 'c72Bom'
						}, {
							name : 'c72Reality'
						}, {
							name : 'c72Diff'
						}, {
							name : 'c21Bom'
						}, {
							name : 'c21Reality'
						}, {
							name : 'c21Diff'
						}, {
							name : 'c22Bom'
						}, {
							name : 'c22Reality'
						}, {
							name : 'c22Diff'
						}, {
							name : 'c24Bom'
						}, {
							name : 'c24Reality'
						}, {
							name : 'c24Diff'
						}, {
							name : 'c29Bom'
						}, {
							name : 'c29Reality'
						}, {
							name : 'c29Diff'
						}, {
							name : 'c22aBom'
						}, {
							name : 'c22aReality'
						}, {
							name : 'c22aDiff'
						}]
			})
		})
	}

}