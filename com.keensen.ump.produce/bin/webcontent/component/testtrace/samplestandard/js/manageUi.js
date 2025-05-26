com.keensen.ump.produce.component.SampleStandardMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'samplestandardmgr',
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
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '75%',
								fieldLabel : '试卷元件型号',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// rescode : '10002661',
					hidden : true,
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
			autoExpandColumn : '12',
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
			delUrl : 'com.keensen.ump.produce.component.testtrace.deleteSampleStandard.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '膜片型号',
						// width : 120,
						dataIndex : 'materSpecName'
					}, {
						header : '试卷元件型号',
						// width : 120,
						dataIndex : 'prodSpecName'
					}, {
						header : '送样长度',
						// width : 60,
						dataIndex : 'sampleLength'
					}, {
						header : '送样频次',
						// width : 60,
						dataIndex : 'sampleTimes'
					}, {
						header : '试卷支数',
						// width : 100,
						dataIndex : 'amount'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.querySampleStandardByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'materSpecName'
						}, {
							name : 'materSpecId'
						}, {
							name : 'materCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'sampleLength'
						}, {
							name : 'sampleTimes'
						}, {
							name : 'amount'
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
				saveUrl : 'com.keensen.ump.produce.component.testtrace.saveSampleStandard.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/materSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '膜片型号 '
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							ref : '../../prodSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '试卷元件型号 '
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准</p>',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/sampleLength',
							ref : '../../sampleLength',
							fieldLabel : '送样长度',
							allowBlank : false,
							anchor : '75%',
							allowDecimals : false,
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							ref : '../../amount',
							fieldLabel : '试卷支数',
							allowBlank : false,
							anchor : '75%',
							allowDecimals : false,
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/sampleTimes',
							allowBlank : false,
							ref : '../../sampleTimes',
							fieldLabel : '送样频次',
							anchor : '85%',
							colspan : 2,
							minValue : 0
						}]
			}]
		});
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
				loadUrl : 'com.keensen.ump.produce.component.testtrace.expandSampleStandard2.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.testtrace.saveSampleStandard.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/materSpecId',
							dataIndex : 'materSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '膜片型号 '
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							ref : '../../prodSpecId',
							dataIndex : 'prodSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '试卷元件型号 '
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准</p>',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/sampleLength',
							ref : '../../sampleLength',
							dataIndex : 'sampleLength',
							fieldLabel : '送样长度',
							allowBlank : false,
							anchor : '75%',
							allowDecimals : false,
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							ref : '../../amount',
							dataIndex : 'amount',
							fieldLabel : '试卷支数',
							allowBlank : false,
							anchor : '75%',
							allowDecimals : false,
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/sampleTimes',
							dataIndex : 'sampleTimes',
							allowBlank : false,
							ref : '../../sampleTimes',
							fieldLabel : '送样频次',
							anchor : '85%',
							colspan : 2,
							minValue : 0
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

}