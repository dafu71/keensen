com.keensen.ump.produce.component.TempareaMgr = function() {

	this.initPanel = function() {

		this.initStore();
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

	this.initStore = function() {
		this.workshopStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['工业车间', '工业车间'], ['家用车间', '家用车间']]
				});

		// 黄灯预警，红灯超期
		this.warnStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['yellow', '黄灯预警'], ['red', '红灯超期']]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片待用区查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo2',
								anchor : '100%',
								fieldLabel : '膜片批次%-%'
							}/*
								 * , { xtype : 'textfield', name :
								 * 'condition/storageName', anchor : '100%',
								 * fieldLabel : '仓库%-%' }, { xtype :
								 * 'textfield', name : 'condition/position',
								 * anchor : '100%', fieldLabel : '仓位%-%' }
								 */, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '车间',
								ref : '../workshop',
								hiddenName : 'condition/workshop',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.workshopStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.workshop.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/specName',
								anchor : '100%',
								fieldLabel : '膜片型号%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '报警',
								ref : '../ifWarn',
								hiddenName : 'condition/ifWarn',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.warnStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.ifWarn.reset()
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

		this.queryPanel.addButton({
					text : "更新",
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.onUpdate
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
				// singleSelect : true,
				// header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【膜片待用区列表】',
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
					}/*
						 * , '-', { text : '还库', scope : this, iconCls :
						 * 'icon-application_edit', handler : this.onHuanku }
						 */
					, '->', {
						text : '预警超期说明',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						// 自用的预期标准改为：ULP系列与BW(含HW)系列、SW系列为80个自然日，NF系列标准为160个自然日。
						// 大于此标准后，每天邮件或汽泡提醒（提醒内容：有膜片快超期，请立即处理），直至库存产品被领出裁膜。
						// 另外膜片自用的超标标准也修改为：ULP系列与BW(含HW)系列、SW系列片为90个自然日，NF系列膜片标准为180个自然日。

						// 申请把SW2-1和SW3-1改为60个自然日，避免海水膜频繁调仓
						handler : function() {
							var s = '预警超期说明:<br>'
							s += '自用膜片超期标准：ULP与BW（含HW）系列为84个自然日,NF、SW系列膜片为174个自然日;<br>';
							s += '自用膜片预期标准：ULP与BW（含HW）为70个自然日,NF、SW系列标准为170个自然日;<br>';
							Ext.Msg.alert("预警规则", s);
						}
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.order.deletePlanEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'specName',
						header : '膜片型号'
					}, {
						dataIndex : 'workshop',
						header : '车间'
					}/*
						 * , { dataIndex : 'storageName', header : '仓库' }, {
						 * dataIndex : 'position', header : '仓位' }
						 */, {
						dataIndex : 'amount',
						header : '入库可用长度（米）'
					}, {
						dataIndex : 'remainLength',
						header : '实时可用长度（米）'
					}, {
						dataIndex : 'diff',
						header : '呆滞时间(天)'
					}, {
						dataIndex : 'ifWarn',
						// width : 60,
						header : '报警',
						renderer : function(v, m, r, i) {
							var ifWarn = r.get('ifWarn');
							if (!Ext.isEmpty(ifWarn)) {
								return '<img src="produce/component/semifinished/img/'
										+ ifWarn
										+ '.png" width="20" height="20">';

							}
						}
					}, {
						dataIndex : 'produceDt',
						header : '生产时间'
					}, {
						dataIndex : 'createTime',
						header : '入库时间'
					}, {
						dataIndex : 'createName',
						header : '入库操作人'
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
						}, {
							name : 'createTime'
						}, {
							name : 'createName'
						}, {
							name : 'produceDt'
						}, {
							name : 'diff'
						}, {
							name : 'specName'
						}, {
							name : 'specId'
						}, {
							name : 'workshop'
						}, {
							name : 'remainLength'
						}, {
							name : 'ifWarn'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;
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
										_this.inputWindow.amount.setValue('');
										_this.inputWindow.batchNo.setValue('');
										_this.inputWindow.batchNo.focus(false,
												100);
									}
								})
					} else {
						_this.listPanel.store.reload();
						_this.inputWindow.amount.setValue('');
						_this.inputWindow.batchNo.setValue('');
						_this.inputWindow.batchNo.focus(false, 100);
					}
				},
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.temporaryarea.saveRuku.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../../batchNo',
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
						}/*
							 * , { xtype : 'textfield', emptyText : "", name :
							 * 'entity/storageName', allowBlank : false,
							 * fieldLabel : '仓库', colspan : 1, listeners : {
							 * scope : this, specialkey : function(C, D) { if
							 * (D.getKey() == Ext.EventObject.ENTER) {
							 * this.inputWindow.items.items[0].position
							 * .focus(false, 100); } } } }, { xtype :
							 * 'displayfield', fieldLabel : ' ', value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							 * labelSeparator : '',// 去掉冒号 colspan : 1 }, {
							 * xtype : 'textfield', name : 'entity/position',
							 * allowBlank : false, fieldLabel : '库位', ref :
							 * '../position', anchor : '100%', colspan : 1 }, {
							 * xtype : 'displayfield', fieldLabel : ' ', value : '<p style="color:red;">光标置于此框内后扫码，或手工录入</p>',
							 * labelSeparator : '',// 去掉冒号 colspan : 1 }
							 */, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '车间',
							ref : '../../workshop',
							hiddenName : 'entity/workshop',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.workshopStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.workshop.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							height : 5,
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							ref : '../../amount',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '数量',
							colspan : 1
						}]
			}]
		});
	}

	this.initInputWindow2 = function() {
		var _this = this;
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
						_this.listPanel.store.reload();
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
							height : 5,
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
							height : 5,
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
		var _this = this;
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
						_this.listPanel.store.reload();
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
										this.inputWindow3.items.items[0].position
												.focus(false, 100);
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

}