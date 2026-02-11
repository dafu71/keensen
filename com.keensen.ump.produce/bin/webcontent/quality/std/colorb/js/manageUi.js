com.keensen.ump.produce.quality.ColorbMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'colorbmgr',
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
					// title : '【产品水测标准查询】',
					fields : [{
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/materSpecId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					rescode : '10002661',
					scope : this,
					iconCls : 'icon-application_excel',
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
			// title : '【产品水测标准列表】',
			id : mylistid,
			// autoExpandColumn : '12',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.std.deleteMpColorb.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'bUp',
						header : 'b*标准上限'
					}, {
						dataIndex : 'bDown',
						header : 'b*标准下限'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.std.queryMpColorbByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'materSpecId'
						}, {
							name : 'bUp'
						}, {
							name : 'bDown'
						},{
							name : 'materSpecName'
						} , {
							name : 'id'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.std.saveMpColorb.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/materSpecId',
							allowBlank : false,
							anchor : '75%',
							colspan : 1,
							fieldLabel : '膜片型号 '
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">标准</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/bDown',
							ref : '../../bDown',
							fieldLabel : 'b*标准下限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/bUp',
							ref : '../../bUp',
							fieldLabel : 'b*标准上限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}]
			}]
		})
	}

	this.initEditWindow = function() {

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.std.expandMpColorb.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.std.saveMpColorb.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/materSpecId',
							dataIndex : 'materSpecId',
							allowBlank : false,
							anchor : '75%',
							colspan : 1,
							fieldLabel : '膜片型号 '
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">标准</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/bDown',
							dataIndex : 'bDown',
							ref : '../../bDown',
							fieldLabel : 'b*标准下限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/bUp',
							dataIndex : 'bUp',
							ref : '../../bUp',
							fieldLabel : 'b*标准上限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id',
							height : '5',
							colspan : 2
						}]
			}]
		})
	}

}