com.keensen.ump.produce.quality.C42RangeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'c42rangemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					titleCollapse : false,
					fields : [{
								xtype : 'linecombobox',
								prodTacheId : '100',
								valueField:'code',
								hiddenName : 'condition/line',
								anchor : '90%',
								fieldLabel : '线别'
							}, {
								xtype : 'mpspeccombobox',
								valueField:'name',
								hiddenName : 'condition/mptype',
								anchor : '90%',
								fieldLabel : '膜种'
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【产品水测标准列表】',
			id : mylistid,
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}],
			selModel : selModel,
			delUrl : '123.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel,  {
						header : '线别',
						width : 120,
						dataIndex : 'line'
					}, {
						dataIndex : 'mptype',
						header : '膜种'
					}, {
						dataIndex : 'c42',
						header : 'C42浓度%'
					}, {
						dataIndex : 'diff42',
						header : '偏差范围%'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryC42RangeByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'status'
						}, {
							name : 'line'
						}, {
							name : 'c42'
						}, {
							name : 'diff42'
						}, {
							name : 'mptype'
						}]
			})
		})
	}

	this.initEditWindow = function() {

		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '更新C42范围标准',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandC42Range.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveC42Range.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							dataIndex : 'mptype',
							ref : '../../mptype',
							valueField:'name',
							readOnly : true,
							anchor : '95%',
							fieldLabel : '膜种',
							colspan : 6
						}, {
							xtype : 'linecombobox',
							valueField:'code',
							ref : '../../line',
							dataIndex : 'line',
							prodTacheId : '100',
							//hiddenName : 'entity/lineId',
							readOnly : true,
							anchor : '95%',
							colspan : 6,
							fieldLabel : '生产线 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'numberfield',
							decimalPrecision:3,
							dataIndex : 'c42',
							ref : '../../c42',
							name : 'entity/c42',
							fieldLabel : 'C42浓度%',
							allowBlank:false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'numberfield',
							decimalPrecision:3,
							dataIndex : 'diff42',
							ref : '../../diff42',
							name : 'entity/diff42',
							fieldLabel : '偏差范围%',
							allowBlank:false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}]
			}]
		});
	}

}