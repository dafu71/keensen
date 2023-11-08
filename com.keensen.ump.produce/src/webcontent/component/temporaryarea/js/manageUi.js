com.keensen.ump.produce.component.TempareaMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initInputWindow2();
		this.initInputWindow3();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "temporaryareamgr",
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
					title : '【膜片待用区查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo2',
								anchor : '75%',
								fieldLabel : '膜片批次 '
							}, {
								xtype : 'textfield',
								name : 'condition/storageName',
								anchor : '75%',
								fieldLabel : '仓库'
							}, {
								xtype : 'textfield',
								name : 'condition/position',
								anchor : '75%',
								fieldLabel : '仓位'
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【膜片待用区列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '入库',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onRuku
					}, '-', {
						text : '出库',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onChuku
					}, '-', {
						text : '还库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onHuanku
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.order.deletePlanEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'storageName',
						header : '仓库'
					}, {
						dataIndex : 'position',
						header : '仓位'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.temporaryarea.queryAreaByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'batchNo'
						}, {
							name : 'storageName'
						}, {
							name : 'position'
						}, {
							name : 'amount'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '入库',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				autoHide : false,
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
						Ext.getCmp(listid).store.load();
					}
				},
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.temporaryarea.saveRuku.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../batchNo',
							anchor : '100%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.onScan();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'textfield',
							emptyText : "",
							name : 'entity/storageName',
							allowBlank : false,
							fieldLabel : '仓库',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.inputWindow.items.items[0].position.focus(false, 100);
									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/position',
							allowBlank : false,
							fieldLabel : '库位',
							ref : '../position',
							anchor : '100%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '数量',
							colspan : 1
						}]
			}]
		});
	}
	
	this.initInputWindow2 = function() {
		this.inputWindow2 = this.inputWindow2 || new Ext.fn.FormWindow({
			title : '出库',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				autoHide : false,
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
						Ext.getCmp(listid).store.load();
					}
				},
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.temporaryarea.saveChuku.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../batchNo',
							anchor : '100%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.onScan2();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'textfield',
							emptyText : "",
							name : 'entity/storageName',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '仓库',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height:5,
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/position',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '库位',
							ref : '../position',
							anchor : '100%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height:5,
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '数量',
							colspan : 1
						}]
			}]
		});
	}
	
	this.initInputWindow3 = function() {
		this.inputWindow3 = this.inputWindow3 || new Ext.fn.FormWindow({
			title : '还库',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				autoHide : false,
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
						Ext.getCmp(listid).store.load();
					}
				},
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.temporaryarea.saveHuanku.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../batchNo',
							anchor : '100%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.onScan3();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'textfield',
							emptyText : "",
							name : 'entity/storageName',
							allowBlank : false,
							fieldLabel : '仓库',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										this.inputWindow3.items.items[0].position.focus(false, 100);
									}

								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/position',
							allowBlank : false,
							fieldLabel : '库位',
							ref : '../position',
							anchor : '100%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						},{
							xtype : 'numberfield',
							name : 'entity/amount',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '数量',
							colspan : 1
						}]
			}]
		});
	}

}