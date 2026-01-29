com.keensen.ump.produce.quality.DeliverStdMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();
		this.initCopyWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'deliverstdmgr',
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
					// title : '【膜片质检标准查询】',
					fields : [{
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '100%',
								fieldLabel : '膜片型号 ',
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
							}, {
								xtype : 'textfield',
								hiddenName : 'condition/client',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '客户 '
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
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【膜片质检标准列表】',
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
						text : '复制',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCopy
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
			delUrl : 'com.keensen.ump.produce.quality.quality.deleteMpDeliveryStd.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'client',
						header : '客户'
					}, {
						dataIndex : 'specName',
						header : '膜片规格型号'
					}, {
						dataIndex : 'thickAvg',
						header : '膜片平均厚度(μm)'
					}, {
						dataIndex : 'widthMp',
						header : '膜片宽幅(mm)'
					}, {
						dataIndex : 'widthValid',
						header : '有效涂布宽度(mm)'
					}, {
						dataIndex : 'gfdLowLimit',
						header : '通量下限(GFD'
					}, {
						dataIndex : 'gfdUpLimit',
						header : '通量上限(GFD)'
					}, {
						dataIndex : 'saltLowLimit',
						header : '脱盐率(%)'
					}, {
						dataIndex : 'conditionTest',
						header : '测试条件'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryMpDeliveryStd.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'client'
						}, {
							name : 'specName'
						}, {
							name : 'thickAvg'
						}, {
							name : 'widthMp'
						}, {
							name : 'widthValid'
						}, {
							name : 'gfdLowLimit'
						}, {
							name : 'gfdUpLimit'
						}, {
							name : 'saltLowLimit'
						}, {
							name : 'conditionTest'
						}, {
							name : 'id'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;
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
				columns : 12,
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveMpDeliveryStd.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							// dataIndex : 'specId',
							name : 'entity/specName',
							ref : '../../specName',
							anchor : '95%',
							fieldLabel : '膜片型号',
							colspan : 6
						}, {
							xtype : 'textfield',
							prodTacheId : '100',
							// dataIndex : 'client',
							name : 'entity/client',
							allowBlank : false,
							anchor : '95%',
							colspan : 6,
							fieldLabel : '客户 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							// dataIndex : 'thickAvg',
							ref : '../../thickAvg',
							name : 'entity/thickAvg',
							fieldLabel : '膜片平均厚度(μm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							// dataIndex : 'widthMp',
							ref : '../../widthMp',
							name : 'entity/widthMp',
							fieldLabel : '膜片宽幅(mm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							// dataIndex : 'widthValid',
							ref : '../../widthValid',
							name : 'entity/widthValid',
							fieldLabel : '有效涂布宽度(mm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							// dataIndex : 'saltLowLimit',
							ref : '../../saltLowLimit',
							name : 'entity/saltLowLimit',
							fieldLabel : '脱盐率(%)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							// dataIndex : 'gfdLowLimit',
							ref : '../../gfdLowLimit',
							name : 'entity/gfdLowLimit',
							fieldLabel : '通量下限(GFD)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							// dataIndex : 'gfdUpLimit',
							ref : '../../gfdUpLimit',
							name : 'entity/gfdUpLimit',
							fieldLabel : '通量上限(GFD)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',

							// dataIndex : 'conditionTest',
							ref : '../../conditionTest',
							name : 'entity/conditionTest',
							fieldLabel : '测试条件',
							allowBlank : false,
							anchor : '95%',
							colspan : 12
						}

				]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;
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
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.quality.quality.expandMpDeliveryStd.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveMpDeliveryStd.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							dataIndex : 'specName',
							name : 'entity/specName',
							ref : '../../specName',
							anchor : '95%',
							fieldLabel : '膜片型号',
							colspan : 6
						}, {
							xtype : 'textfield',
							prodTacheId : '100',
							dataIndex : 'client',
							name : 'entity/client',
							allowBlank : false,
							anchor : '95%',
							colspan : 6,
							fieldLabel : '客户 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							dataIndex : 'thickAvg',
							ref : '../../thickAvg',
							name : 'entity/thickAvg',
							fieldLabel : '膜片平均厚度(μm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							dataIndex : 'widthMp',
							ref : '../../widthMp',
							name : 'entity/widthMp',
							fieldLabel : '膜片宽幅(mm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							dataIndex : 'widthValid',
							ref : '../../widthValid',
							name : 'entity/widthValid',
							fieldLabel : '有效涂布宽度(mm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							dataIndex : 'saltLowLimit',
							ref : '../../saltLowLimit',
							name : 'entity/saltLowLimit',
							fieldLabel : '脱盐率(%)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							dataIndex : 'gfdLowLimit',
							ref : '../../gfdLowLimit',
							name : 'entity/gfdLowLimit',
							fieldLabel : '通量下限(GFD)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							dataIndex : 'gfdUpLimit',
							ref : '../../gfdUpLimit',
							name : 'entity/gfdUpLimit',
							fieldLabel : '通量上限(GFD)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',

							dataIndex : 'conditionTest',
							ref : '../../conditionTest',
							name : 'entity/conditionTest',
							fieldLabel : '测试条件',
							allowBlank : false,
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}

				]
			}]
		});
	}

	this.initCopyWindow = function() {

		var _this = this;
		this.copyWindow = this.copyWindow || new Ext.fn.FormWindow({
			title : '复制',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality.expandMpDeliveryStd.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveMpDeliveryStd.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							dataIndex : 'specName',
							name : 'entity/specName',
							ref : '../../specName',
							anchor : '95%',
							fieldLabel : '膜片型号',
							colspan : 6
						}, {
							xtype : 'textfield',
							prodTacheId : '100',
							dataIndex : 'client',
							name : 'entity/client',
							allowBlank : false,
							anchor : '95%',
							colspan : 6,
							fieldLabel : '客户 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							dataIndex : 'thickAvg',
							ref : '../../thickAvg',
							name : 'entity/thickAvg',
							fieldLabel : '膜片平均厚度(μm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							dataIndex : 'widthMp',
							ref : '../../widthMp',
							name : 'entity/widthMp',
							fieldLabel : '膜片宽幅(mm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							dataIndex : 'widthValid',
							ref : '../../widthValid',
							name : 'entity/widthValid',
							fieldLabel : '有效涂布宽度(mm)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							dataIndex : 'saltLowLimit',
							ref : '../../saltLowLimit',
							name : 'entity/saltLowLimit',
							fieldLabel : '脱盐率(%)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',

							dataIndex : 'gfdLowLimit',
							ref : '../../gfdLowLimit',
							name : 'entity/gfdLowLimit',
							fieldLabel : '通量下限(GFD)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',

							dataIndex : 'gfdUpLimit',
							ref : '../../gfdUpLimit',
							name : 'entity/gfdUpLimit',
							fieldLabel : '通量上限(GFD)',
							allowBlank : false,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textarea',

							dataIndex : 'conditionTest',
							ref : '../../conditionTest',
							name : 'entity/conditionTest',
							fieldLabel : '测试条件',
							allowBlank : false,
							anchor : '95%',
							colspan : 12
						}

				]
			}]
		});
	}

}