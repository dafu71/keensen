com.keensen.ump.produce.quality.watertrialstdMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'watertrialstdmgr',
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
								hiddenName : 'condition/trialSpecId',
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
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '75%',
								fieldLabel : '贴标元件型号 ',
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
			autoExpandColumn : '12',
			viewConfig : {
				forceFit : false
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
			delUrl : 'com.keensen.ump.qinsen.std.deleteTrialWaterStdById.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '膜片型号',
						width : 120,
						dataIndex : 'mpSpecCode'
					}, {
						header : '试卷元件型号',
						width : 120,
						dataIndex : 'trialSpecName'
					}, {
						header : '膜面积',
						width : 60,
						dataIndex : 'area'
					}, {
						header : '浓网',
						width : 60,
						dataIndex : 'denseNet'
					}, {
						header : '产水量-下限',
						width : 100,
						dataIndex : 'gpdLowLimit'
					}, {
						header : '产水量-上限',
						width : 100,
						dataIndex : 'gpdUpLimit'
					}, {
						header : '产水量-中心线',
						width : 100,
						dataIndex : 'gpdCenter'
					}, {
						header : '脱盐率',
						width : 80,
						dataIndex : 'saltLowLimit'
					}, {
						header : '系数B',
						width : 80,
						dataIndex : 'factorBUpLimit'
					}, {
						header : '贴标元件型号',
						width : 120,
						dataIndex : 'prodSpecName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.std.queryTrialWaterStdByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'recordId'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'trialSpecId'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'gpdLowLimit'
						}, {
							name : 'gpdUpLimit'
						}, {
							name : 'gpdCenter'
						}, {
							name : 'saltLowLimit'
						}, {
							name : 'saltUpLimit'
						}, {
							name : 'factorBLowLimit'
						}, {
							name : 'factorBUpLimit'
						}, {
							name : 'createDt'
						}, {
							name : 'changeDt'
						}, {
							name : 'creatorId'
						}, {
							name : 'changerId'
						}, {
							name : 'remark'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'trialSpecCode'
						}, {
							name : 'trialSpecName'
						}, {
							name : 'area'
						}, {
							name : 'denseNet'
						}, {
							name : 'prodSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'dispOrder'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增水测标准',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {

									}
								})
					} else {
						Ext.getCmp(mylistid).store.load();
					}
				},
				columns : 2,
				saveUrl : 'com.keensen.ump.qinsen.std.insertTrialWaterStd.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/mpSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '膜片型号 '
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/trialSpecId',
							ref : '../../trialSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '试卷元件型号 '
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准</p>',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/gpdLowLimit',
							ref : '../../gpdLowLimit',
							fieldLabel : '产水量-下限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/gpdUpLimit',
							ref : '../../gpdUpLimit',
							fieldLabel : '产水量-上限',
							allowBlank : true,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/gpdCenter',
							ref : '../../gpdCenter',
							fieldLabel : '产水量-中心线',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/saltLowLimit',
							fieldLabel : '脱盐率(%)>=',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/factorBUpLimit',
							fieldLabel : '系数B-上限',
							anchor : '75%',
							minValue : 0,
							decimalPrecision : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '贴标元件型号 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/remark',
							xtype : 'textarea',
							fieldLabel : '备注',
							colspan : 2,
							anchor : '87%',
							allowBlank : true
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改水测标准',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {

									}
								})
					} else {
						Ext.getCmp(mylistid).store.load();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.qinsen.std.expandTrialWaterStand.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.std.updateTrialWaterStd.biz.ext',
				fields : [{
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/mpSpecId',
							dataIndex : 'mpSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '膜片型号 '
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/trialSpecId',
							dataIndex : 'trialSpecId',
							ref : '../../trialSpecId',
							readOnly : true,
							disabled : true,
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '试卷元件型号 '
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准</p>',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/recordId',
							ref : '../../recordId',
							dataIndex : 'recordId'
						}, {
							xtype : 'numberfield',
							dataIndex : 'gpdLowLimit',
							ref : '../../gpdLowLimit',
							name : 'entity/gpdLowLimit',
							fieldLabel : '产水量-下限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							dataIndex : 'gpdUpLimit',
							ref : '../../gpdUpLimit',
							name : 'entity/gpdUpLimit',
							fieldLabel : '产水量-上限',
							allowBlank : true,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							dataIndex : 'gpdCenter',
							ref : '../../gpdCenter',
							name : 'entity/gpdCenter',
							fieldLabel : '产水量-中心线',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							dataIndex : 'saltLowLimit',
							name : 'entity/saltLowLimit',
							fieldLabel : '脱盐率(%)>=',
							allowBlank : false,
							anchor : '75%',
							decimalPrecision : 4,
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							dataIndex : 'factorBUpLimit',
							name : 'entity/factorBUpLimit',
							fieldLabel : '系数B-上限',
							anchor : '75%',
							minValue : 0,
							decimalPrecision : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '贴标元件型号 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							dataIndex : 'remark',
							name : 'entity/remark',
							xtype : 'textarea',
							fieldLabel : '备注',
							colspan : 2,
							anchor : '87%',
							allowBlank : true
						}]
			}]
		});
	}

}