com.keensen.ump.produce.quality.waterstdMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'waterstdmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					//title : '【产品水测标准查询】',
					fields : [{
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/mpSpecId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '75%',
								fieldLabel : '元件型号 ',
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
			//title : '【产品水测标准列表】',
			id : mylistid,
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
			delUrl : 'com.keensen.ump.produce.quality.quality2.deleteWaterStdById.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '膜片型号',
						width : 120,
						dataIndex : 'mpSpecCode'
					}, {
						header : '元件型号',
						width : 120,
						dataIndex : 'prodSpecName'
					}, {
						header : '膜面积',
						width : 60,
						dataIndex : 'area'
					}, {
						header : '浓网',
						width : 60,
						dataIndex : 'denseNet'
					}, {
						header : '标准1<br>产水量-下限',
						width : 100,
						dataIndex : 'aGpdLowLimit'
					}, {
						header : '标准1<br>产水量-上限',
						width : 100,
						dataIndex : 'aGpdUpLimit'
					}, {
						header : '标准1<br>产水量-中心线',
						width : 100,
						dataIndex : 'aGpdCenter'
					}, {
						header : '标准1<br>脱盐率',
						width : 80,
						dataIndex : 'aSaltLowLimit'
					}, {
						header : '标准1<br>系数B',
						width : 80,
						dataIndex : 'aFactorBUpLimit'
					}, {
						header : '标准2<br>产水量-下限',
						width : 100,
						dataIndex : 'bGpdLowLimit'
					}, {
						header : '标准2<br>脱盐率',
						width : 80,
						dataIndex : 'bSaltLowLimit'
					}, {
						header : '标准2<br>贴标元件型号',
						width : 120,
						dataIndex : 'bSpecName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryWaterStdByPage.biz.ext',
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
							name : 'prodSpecId'
						}, {
							name : 'aGpdLowLimit'
						}, {
							name : 'aGpdUpLimit'
						}, {
							name : 'aGpdCenter'
						}, {
							name : 'aSaltLowLimit'
						}, {
							name : 'aSaltUpLimit'
						}, {
							name : 'aFactorBLowLimit'
						}, {
							name : 'aFactorBUpLimit'
						}, {
							name : 'bSpecId'
						}, {
							name : 'bGpdLowLimit'
						}, {
							name : 'bGpdUpLimit'
						}, {
							name : 'bGpdCenter'
						}, {
							name : 'bSaltLowLimit'
						}, {
							name : 'bSaltUpLimit'
						}, {
							name : 'bFactorBLowLimit'
						}, {
							name : 'bFactorBUpLimit'
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
							name : 'prodSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'area'
						}, {
							name : 'denseNet'
						}, {
							name : 'bSpecCode'
						}, {
							name : 'bSpecName'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增产品水测标准',
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
				saveUrl : 'com.keensen.ump.produce.quality.quality2.insertWaterStd.biz.ext',
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
							fieldLabel : '元件型号 '
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准1</p>',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/aGpdLowLimit',
							ref : '../../aGpdLowLimit',
							fieldLabel : '产水量-下限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/aGpdUpLimit',
							ref : '../../aGpdUpLimit',
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
							name : 'entity/aGpdCenter',
							ref : '../../aGpdCenter',
							fieldLabel : '产水量-中心线',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/aSaltLowLimit',
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
							name : 'entity/aFactorBUpLimit',
							fieldLabel : '系数B-上限',
							anchor : '75%',
							minValue : 0,
							decimalPrecision : 4
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准2</p>',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/bGpdLowLimit',
							fieldLabel : '产水量-下限',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							name : 'entity/bSaltLowLimit',
							fieldLabel : '脱盐率(%)>=',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/bSpecId',
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
			title : '修改产品水测标准',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandWaterStand.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.updateWaterStd.biz.ext',
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
							readOnly : true,
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '元件型号 '
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准1</p>',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/recordId',
							ref : '../../recordId',
							dataIndex : 'recordId'
						}, {
							xtype : 'numberfield',
							dataIndex : 'aGpdLowLimit',
							ref : '../../aGpdLowLimit',
							name : 'entity/aGpdLowLimit',
							fieldLabel : '产水量-下限',
							allowBlank : false,
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							dataIndex : 'aGpdUpLimit',
							ref : '../../aGpdUpLimit',
							name : 'entity/aGpdUpLimit',
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
							dataIndex : 'aGpdCenter',
							ref : '../../aGpdCenter',
							name : 'entity/aGpdCenter',
							fieldLabel : '产水量-中心线',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							dataIndex : 'aSaltLowLimit',
							name : 'entity/aSaltLowLimit',
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
							dataIndex : 'aFactorBUpLimit',
							name : 'entity/aFactorBUpLimit',
							fieldLabel : '系数B-上限',
							anchor : '75%',
							minValue : 0,
							decimalPrecision : 4
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">标准2</p>',
							colspan : 2
						}, {
							xtype : 'numberfield',
							dataIndex : 'bGpdLowLimit',
							name : 'entity/bGpdLowLimit',
							fieldLabel : '产水量-下限',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'numberfield',
							dataIndex : 'bSaltLowLimit',
							name : 'entity/bSaltLowLimit',
							fieldLabel : '脱盐率(%)>=',
							anchor : '75%',
							minValue : 0
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/bSpecId',
							dataIndex : 'bSpecId',
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