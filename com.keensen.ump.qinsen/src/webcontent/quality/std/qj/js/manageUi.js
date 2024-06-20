com.keensen.ump.produce.quality.qjstdMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'qjstdmgr',
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
					fields : [{
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '75%',
								fieldLabel : '元件型号',
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
			id : mylistid,
			autoExpandColumn : '5',
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
			delUrl : 'com.keensen.ump.qinsen.qijian.deleteQjStdById.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '元件型号',
						width : 120,
						dataIndex : 'prodSpecName'
					}, {
						header : '标准',
						width : 100,
						dataIndex : 'stdStr'
					}, {
						header : '状态',
						width : 60,
						dataIndex : 'stateName'
					}, {
						header : '备注',
						width : 160,
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.qijian.queryQjStdByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {

			}			,
						fields : [{
									name : 'recordId'
								}, {
									name : 'prodSpecId'
								}, {
									name : 'lowLimit'
								}, {
									name : 'upLimit'
								}, {
									name : 'state'
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
									name : 'stdStr'
								}, {
									name : 'prodSpecCode'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'stateName'
								}]
					})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '气检标准-录入',
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
								Ext.getCmp(mylistid).store.reload();
								_this.inputWindow.form.reset();
								_this.inputWindow.hide();
							}
						},
						columns : 2,
						saveUrl : 'com.keensen.ump.qinsen.qijian.insertQjStd.biz.ext',
						fields : [{
									xtype : 'prodspeccombobox',
									hiddenName : 'entity/prodSpecId',
									ref : '../../prodSpecId',
									allowBlank : false,
									anchor : '75%',
									fieldLabel : '元件型号 ',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/lowLimit',
									ref : '../../lowLimit',
									fieldLabel : '下限',
									decimalPrecision : 1,
									allowBlank : false,
									anchor : '75%',
									minValue : 0,
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/upLimit',
									ref : '../../upLimit',
									fieldLabel : '上限',
									allowBlank : false,
									anchor : '75%',
									decimalPrecision : 1,
									minValue : 0,
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
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
								}, {
									xtype : 'hidden',
									name : 'entity/state',
									ref : '../../state',
									value : 'Y'
								}]
					}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '气检标准-修改',
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
						Ext.getCmp(mylistid).store.reload();
						_this.editWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.qinsen.qijian.expandQjStd.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.qijian.updateQjStdById.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							dataIndex : 'prodSpecId',
							ref : '../../prodSpecId',
							allowBlank : false,
							anchor : '75%',
							fieldLabel : '元件型号 ',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							anchor : '95%',
							colspan : 1,
							allowBlank : false,
							name : 'entity/state',
							dataIndex : 'state',
							hiddenName : 'entity/state',
							fieldLabel : '状态',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										fields : ['mykey', 'myvalue'],
										data : [['Y', '在用'], ['N', '失效']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/lowLimit',
							dataIndex : 'lowLimit',
							ref : '../../lowLimit',
							fieldLabel : '下限',
							decimalPrecision : 1,
							allowBlank : false,
							anchor : '75%',
							minValue : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/upLimit',
							dataIndex : 'upLimit',
							ref : '../../upLimit',
							fieldLabel : '上限',
							allowBlank : false,
							anchor : '75%',
							decimalPrecision : 1,
							minValue : 0,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/remark',
							dataIndex : 'remark',
							xtype : 'textarea',
							fieldLabel : '备注',
							colspan : 2,
							anchor : '87%',
							allowBlank : true
						}, {
							xtype : 'hidden',
							name : 'entity/recordId',
							ref : '../../recordId',
							dataIndex : 'recordId'
						}]
			}]
		});
	}

}