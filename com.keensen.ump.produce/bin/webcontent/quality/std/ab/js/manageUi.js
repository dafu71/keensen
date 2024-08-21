com.keensen.ump.produce.quality.abMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'abmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					titleCollapse : false,
					fields : [{
						xtype : "dateregion",
						colspan : 1,
						anchor : '100%',
						nameArray : ['condition/createTimeStart',
								'condition/createTimeEnd'],
						fieldLabel : "更新日期",
						format : "Y-m-d"
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
						text : '更新',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}],
			selModel : selModel,
			delUrl : '123.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : 'A值',
						width : 120,
						dataIndex : 'a'
					}, {
						dataIndex : 'b',
						header : 'B值'
					}, {
						dataIndex : 'createName',
						header : '更新人'
					}, {
						dataIndex : 'createTime',
						header : '更新时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryC21StdByPage.biz.ext',
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
							name : 'a'
						}, {
							name : 'b'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '更新C21标准',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					Ext.getCmp(mylistid).store.load();
					_this.inputWindow.hide();
				},
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.quality.quality2.insertC21Std.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/a',
							fieldLabel : 'A值',
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/b',
							fieldLabel : 'B值',
							anchor : '75%',
							colspan : 1
						}]
			}]
		});
	}

}