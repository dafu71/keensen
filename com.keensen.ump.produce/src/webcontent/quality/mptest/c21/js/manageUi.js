com.keensen.ump.produce.quality.mptest.c21Mgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestc21mgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【C21浓度查询】',
					fields : [{

						xtype : 'combobox',
						fieldLabel : '线别',
						ref : '../line',
						hiddenName : 'condition/line',
						emptyText : '--请选择--',
						allowBlank : true,
						editable : false,
						anchor : '85%',
						store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
								['D', 'D'], ['E', 'E']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.line.reset();
							}
						}
					}, {

						xtype : 'combobox',
						fieldLabel : '膜片类型',
						ref : '../mptype',
						hiddenName : 'condition/mptype',
						emptyText : '--请选择--',
						allowBlank : true,
						editable : false,
						anchor : '85%',
						store : [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
								['NF', 'NF']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.mptype.reset();
							}
						}
					}, {
						ref : '../batchNo',
						name : 'condition/batchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '膜片批号',
						allowBlank : true
					}]
				});
				
		this.queryPanel.addButton({
					text : "导出",
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
			title : '【C21浓度列表】',
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
			delUrl : 'com.keensen.ump.produce.quality.mptest3.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mptype',
						header : '膜片类型'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'concentration',
						header : 'C21浓度'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest3.queryC21ByPage.biz.ext',
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
							name : 'batchNo'
						}, {
							name : 'mptype'
						}, {
							name : 'concentration'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增C21浓度配料',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.mptest3.saveC21Head.biz.ext',
				fields : [{
							ref : '../../batchNo',
							name : 'entity/batchNo',
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '膜片批号',
							allowBlank : false
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.line.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['BW', 'BW'], ['ULP', 'ULP'],
									['SW', 'SW'], ['NF', 'NF']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/concentration',
							allowBlank : false,
							fieldLabel : 'C21浓度',
							anchor : '85%',
							colspan : 2
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改C21浓度配料',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.mptest3.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest3.saveC21Head.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							name : 'entity/batchNo',
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '膜片批号'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 1,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.line.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {

							xtype : 'combobox',
							fieldLabel : '膜片类型',
							dataIndex : 'mptype',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 1,
							store : [['BW', 'BW'], ['ULP', 'ULP'],
									['SW', 'SW'], ['NF', 'NF']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/concentration',
							dataIndex : 'concentration',
							allowBlank : false,
							fieldLabel : 'C21浓度',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

}