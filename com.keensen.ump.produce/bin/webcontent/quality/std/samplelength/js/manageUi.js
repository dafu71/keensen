com.keensen.ump.produce.quality.SampleLengthMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'samplelengthmgr',
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
								hiddenName : 'condition/mpSpecId',
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
			delUrl : 'com.keensen.ump.produce.quality.quality3.deleteSampleLength.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'mpSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'prodSpecName',
						header : '试卷元件型号'
					}, {
						dataIndex : 'testLength',
						header : '送样长度下限'
					}, {
						dataIndex : 'testLength2',
						header : '送样长度上限'
					}, {
						dataIndex : 'testFrequency',
						header : '送样频次'
					}, {
						dataIndex : 'testAmount',
						header : '试卷元件数量'
					}, {
						dataIndex : 'testRequire',
						header : '测试要求'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality3.querySampleLengthByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'mpSpecName'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'testLength'
						}, {
							name : 'testFrequency'
						}, {
							name : 'testAmount'
						}, {
							name : 'testRequire'
						}, {
							name : 'testLength2'
						}, {
							name : 'id'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增送样长度标准标准',
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
				saveUrl : 'com.keensen.ump.produce.quality.quality3.saveSampleLength.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/mpSpecId',
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
							fieldLabel : '<p style="color:red;font-size:16px;">标准</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/testLength',
							ref : '../../testLength',
							fieldLabel : '送样长度下限(米)',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/testLength2',
							ref : '../../testLength2',
							fieldLabel : '送样长度上限(米)',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/testFrequency',
							ref : '../../testFrequency',
							allowBlank : false,
							fieldLabel : '送样频次',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/testAmount',
							fieldLabel : '试卷元件数量(支)',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/testRequire',
							xtype : 'textarea',
							fieldLabel : '测试要求',
							colspan : 2,
							anchor : '87%'
						}]
			}]
		})
	}

	this.initEditWindow = function() {

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改送样长度标准标准',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality3.expandSampleLength.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality3.saveSampleLength.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/mpSpecId',
							dataIndex : 'mpSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '膜片型号 '
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							ref : '../../prodSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '试卷元件型号 '
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">标准</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/testLength',
							ref : '../../testLength',
							dataIndex : 'testLength',
							fieldLabel : '送样长度下限(米)',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/testLength2',
							ref : '../../testLength2',
							fieldLabel : '送样长度上限(米)',
							dataIndex : 'testLength2',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/testFrequency',
							ref : '../../testFrequency',
							dataIndex : 'testFrequency',
							allowBlank : false,
							fieldLabel : '送样频次',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/testAmount',
							dataIndex : 'testAmount',
							fieldLabel : '试卷元件数量(支)',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/testRequire',
							dataIndex : 'testRequire',
							xtype : 'textarea',
							fieldLabel : '测试要求',
							colspan : 2,
							anchor : '87%'
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