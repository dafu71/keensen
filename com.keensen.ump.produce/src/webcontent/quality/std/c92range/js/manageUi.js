com.keensen.ump.produce.quality.C92RangeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'c92rangemgr',
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
								xtype : 'textfield',
								name : 'condition/reserve1',
								fieldLabel : '分类',
								anchor : '90%'
							},{
								xtype : 'linecombobox',
								prodTacheId : '100',
								hiddenName : 'condition/lineId',
								anchor : '90%',
								fieldLabel : '线别'
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '90%',
								fieldLabel : '膜种'
							}, {
								xtype : 'textfield',
								name : 'condition/trough',
								fieldLabel : '漂洗槽',
								anchor : '90%'
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
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '分类',
						width : 120,
						dataIndex : 'reserve1'
					}, {
						header : '线别',
						width : 120,
						dataIndex : 'line'
					}, {
						dataIndex : 'specName',
						header : '膜种'
					}, {
						dataIndex : 'trough',
						header : '漂洗槽'
					}, {
						dataIndex : 'densityLow',
						header : '下限'
					}, {
						header : '上限',
						dataIndex : 'densityUp'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryC92RangeByPage.biz.ext',
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
							name : 'lineId'
						}, {
							name : 'specId'
						}, {
							name : 'specName'
						}, {
							name : 'densityLow'
						}, {
							name : 'densityUp'
						}, {
							name : 'trough'
						}]
			})
		})
	}

	this.initEditWindow = function() {

		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '更新C92范围标准',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandC92Range2.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveC92Range.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							dataIndex : 'specId',
							ref : '../../specId',
							readOnly : true,
							anchor : '95%',
							fieldLabel : '膜种',
							colspan : 4
						}, {
							xtype : 'linecombobox',
							ref : '../../lineId',
							dataIndex : 'lineId',
							prodTacheId : '100',
							//hiddenName : 'entity/lineId',
							readOnly : true,
							anchor : '95%',
							colspan : 4,
							fieldLabel : '生产线 '
						}, {
							xtype : 'textfield',
							dataIndex : 'trough',
							ref : '../../trough',
							//name : 'entity/trough',
							fieldLabel : '换洗槽',
							readOnly : true,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'numberfield',
							dataIndex : 'densityLow',
							ref : '../../densityLow',
							name : 'entity/densityLow',
							fieldLabel : '下限',
							allowBlank:false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'numberfield',
							dataIndex : 'densityUp',
							ref : '../../densityUp',
							name : 'entity/densityUp',
							fieldLabel : '上限',
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