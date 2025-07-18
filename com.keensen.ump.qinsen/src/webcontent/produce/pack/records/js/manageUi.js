com.keensen.ump.qinsen.produce.printrecordsMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'printrecordsmgr',
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
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/printBeginDate',
						fieldLabel : '打印时间',
						colspan : 1,
						anchor : '95%',
						//allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/printEndDate',
						fieldLabel : '至',
						colspan : 1,
						anchor : '95%',
						editable : true,
						format : 'Y-m-d H:i',
						//allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'textfield',
						name : 'condition/markSpecName',
						anchor : '95%',
						fieldLabel : '唛头显示型号'
					}, {
						xtype : 'textfield',
						name : 'condition/batchNoStr',
						anchor : '95%',
						fieldLabel : '元件序列号%-%'
					}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			id : listid,
			tbar : [/*{
						text : '复制请检',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.copyBatches
					}*/],
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '打印时间',
						dataIndex : 'printTime'
					}, {
						header : '打印人',
						dataIndex : 'workerName'
					}, {
						header : '唛头标记型号',
						dataIndex : 'markSpecName'
					}, {
						header : '打印星标',
						dataIndex : 'isWithStarName'
					}, {
						header : '图片',
						dataIndex : 'imgUrl',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							var imgUri = rec.data.imgUri;
							var imgUrl = rec.data.imgUrl;
							var logoId = rec.data.logoId;
							var recordId = rec.data.recordId;
							//if (logoId.length == 9 && logoId.charAt(0) == '2') {
								return '<img src="'
										+ rootUrl
										+ imgUri
										+ '?ver='
										+ recordId
										+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

							//} else {
							//	return '<img src="'
							//			+ imgUrl
							//			+ '?ver='
							//			+ recordId
							//			+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';
							//}
						}
					}, {
						header : '元件支数',
						dataIndex : 'quantity'
					}, {
						header : '元件序列号',
						dataIndex : 'batchNoStr'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.pack.queryPrintRecordsByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'recordId'
						}, {
							name : 'printTm'
						}, {
							name : 'markSpecName'
						}, {
							name : 'logoId'
						}, {
							name : 'workerId'
						}, {
							name : 'batchNoStr'
						}, {
							name : 'quantity'
						}, {
							name : 'isWithStar'
						}, {
							name : 'customerId'
						}, {
							name : 'logoCode'
						}, {
							name : 'logoName'
						}, {
							name : 'imgUri'
						}, {
							name : 'printTime'
						}, {
							name : 'isWithStarName'
						}, {
							name : 'workerName'
						}, {
							name : 'imgUrl'
						}]
			})
		})
	}

}