com.keensen.ump.produce.diaphragm.storage.WarehousingMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initInputWindow2();
		this.buildExcelUploadWin();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'warehousingmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片入库查询】',
					fields : [{
								xtype : 'storagecombobox',
								hiddenName : 'condition/storageId',
								anchor : '80%',
								fieldLabel : '仓库'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '80%',
								fieldLabel : '批号'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/type',
								hiddenName : 'condition/type',
								fieldLabel : '入库类型',
								anchor : '80%',
								dictData : WAREHOUSING_TYPE
							}, {
								xtype : 'mpspeccombobox2',
								hiddenName : 'condition/model',
								anchor : '80%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "入库日期",
								format : "Y-m-d"
							}, {
								xtype : 'combobox',
								anchor : '80%',
								name : 'condition/class',
								hiddenName : 'condition/class',
								fieldLabel : '膜片等级',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['A等品', 'A等品'],
													['B等品', 'B等品'],
													['C等品', 'C等品']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "--请选择--"
							}, {
								xtype : 'storageposcombobox',
								hiddenName : 'condition/position',
								anchor : '80%',
								fieldLabel : '库位'
							}/*
								 * , { xtype : 'combobox', name :
								 * 'condition/ifdelivery', hiddenName :
								 * 'condition/ifdelivery', fieldLabel : '是否发货',
								 * anchor : '60%', triggerAction : "all", store :
								 * new Ext.data.ArrayStore({ id : 0, fields :
								 * ['k', 'v'], data : [['是', '是'], ['否', '否']]
								 * }), mode : "local", editable : false,
								 * displayField : "v", valueField : "k",
								 * forceSelection : true, emptyText : "请选择" }
								 *//*
								 * , { xtype : 'combobox', name :
								 * 'condition/ifrecieve', hiddenName :
								 * 'condition/ifrecieve', fieldLabel : '仓库接收确认',
								 * anchor : '60%', triggerAction : "all", store :
								 * new Ext.data.ArrayStore({ id : 0, fields :
								 * ['k', 'v'], data : [['是', '是'], ['否', '否']]
								 * }), mode : "local", editable : false,
								 * displayField : "v", valueField : "k",
								 * forceSelection : true, emptyText : "请选择" }
								 */]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
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
			// title : '【膜片入库列表】',
			id : 'warehousingmgrlist',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '生产入库',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '退货入库',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd2
					}/*
						 * , '-', { text : '仓库接收确认', scope : this, iconCls :
						 * 'icon-application_edit', handler : this.onConfirm }
						 *//*
						 * , '-', { text : '模板下载', scope : this, iconCls :
						 * 'icon-application_excel', disabled : true, handler :
						 * this.down }, '-', { text : '批量导入', scope : this,
						 * iconCls : 'icon-application_excel', disabled : true,
						 * handler : this.importwarehousing }
						 */],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'storageName',
						header : '仓库名称'
					}, {
						dataIndex : 'position',
						header : '库位'
					}, {
						dataIndex : 'batchNo',
						header : '批号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'type',
						header : '入库类型',
						dictData : WAREHOUSING_TYPE
					}, {
						dataIndex : 'createTime',
						header : '入库日期'
					}, {
						dataIndex : 'model',
						header : '膜片型号'
					}, {
						dataIndex : 'class',
						header : '膜片等级'
					}/*
						 * , { dataIndex : 'ifdelivery', header : '是否发货' }
						 *//*
						 * , { dataIndex : 'ifrecieve', header : '仓库接收确认' }
						 */, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.warehousing.queryWarehousing.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'storageName'
						}, {
							name : 'batchNo'
						}, {
							name : 'type'
						}, {
							name : 'amount'
						}, {
							name : 'remark'
						}, {
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'model'
						}, {
							name : 'class'
						}, {
							name : 'ifdelivery'
						}, {
							name : 'ifrecieve'
						}, {
							name : 'position'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '生产入库',
			height : 260,
			width : 800,
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

					if (r.ret != '1') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.ret,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										currentWindow = 'inputWindow';
										Ext.getCmp('warehousingmgrlist').store
												.load();
									}
								})
					} else {
						currentWindow = 'inputWindow';
						Ext.getCmp('warehousingmgrlist').store.load();
					}
				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.warehousing.warehousing.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'warehousing/batchNo',
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
							xtype : 'textfield',
							name : 'warehousing/position',
							allowBlank : false,
							fieldLabel : '库位',
							ref : '../position',
							anchor : '100%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {

										var amount = this.inputWindow.form
												.findField("warehousing/amount")
												.getValue();
										if (Ext.isEmpty(amount)) {

										} else {
											var w = this.inputWindow;
											Ext.Msg.confirm("系统提示", "是否确认入库?",
													function(btnText) {
														if (btnText == "yes") {
															w.saveData();
														}
													})

										}
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
							xtype : 'displayfield',
							fieldLabel : ' ',
							value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'storagecombobox',
							emptyText : "",
							hiddenName : 'warehousing/storageId',
							// allowBlank : false,
							readOnly : true,
							name : 'warehousing/storageId',
							fieldLabel : '仓库'
									+ "<span style='color:red'>*</span>",
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'warehousing/amount',
							// allowBlank : false,
							readOnly : true,
							fieldLabel : '数量'
									+ "<span style='color:red'>*</span>",
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : ' ',
							labelSeparator : '',// 去掉冒号
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'warehousing/model',
							allowBlank : true,
							readOnly : true,
							fieldLabel : '膜片型号',
							colspan : 1
						}, {
							xtype : 'combobox',
							readOnly : true,
							name : 'warehousing/class',
							hiddenName : 'warehousing/class',
							fieldLabel : '膜片等级',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['A等品', 'A等品'], ['B等品', 'B等品'],
												['C等品', 'C等品']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : ""
						}/*
							 * , { xtype : 'radiogroup', name :
							 * 'warehousing/class', allowBlank : true,
							 * fieldLabel : '膜片等级', anchor : '60%', items : [{
							 * boxLabel : 'A', name : 'warehousing/class',
							 * inputValue : 'A', checked : true }, { boxLabel :
							 * 'B', name : 'warehousing/class', inputValue : 'B' }, {
							 * boxLabel : 'C', name : 'warehousing/class',
							 * inputValue : 'C' }], colspan : 1 }
							 *//*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }
							 *//*
							 * , { xtype : 'radiogroup', name :
							 * 'warehousing/ifdelivery', allowBlank : true,
							 * fieldLabel : '是否发货', anchor : '60%', items : [{
							 * boxLabel : '是', name : 'warehousing/ifdelivery',
							 * inputValue : '是', checked : true }, { boxLabel :
							 * '否', name : 'warehousing/ifdelivery', inputValue :
							 * '否' }], colspan : 1 }
							 *//*
							 * , { xtype : 'radiogroup', name :
							 * 'warehousing/ifrecieve', allowBlank : true,
							 * fieldLabel : '仓库接收确认', anchor : '60%', items : [{
							 * boxLabel : '是', name : 'warehousing/ifrecieve',
							 * inputValue : '是' }, { boxLabel : '否', name :
							 * 'warehousing/ifrecieve', inputValue : '否',
							 * checked : true }], colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							height : '50',
							name : 'warehousing/remark',
							allowBlank : true,
							fieldLabel : '备注',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'warehousing/type',
							value : '生产入库'
						}]
			}]
		});
	}

	this.initInputWindow2 = function() {
		// 1、退货入库的膜片，必须是发货仓出去的
		// 2、退货入库直接入返厂仓
		this.inputWindow2 = this.inputWindow2 || new Ext.fn.FormWindow({
			title : '退货入库',
			height : 380,
			width : 800,
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
					if (r.ret != '1') {
						Ext.Msg.show({
							width : 350,
							title : "操作提示",
							msg : r.ret,
							icon : Ext.Msg.WARNING,
							buttons : Ext.Msg.OK,
							fn : function() {
								currentWindow = 'inputWindow2';
								Ext.getCmp('warehousingmgrlist').store.reload();
							}
						})
					} else {
						currentWindow = 'inputWindow2';
						Ext.getCmp('warehousingmgrlist').store.reload();
					}
				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.warehousing.warehousing3.biz.ext',
				fields : [{
					xtype : 'textfield',
					name : 'warehousing/batchNo',
					allowBlank : false,
					fieldLabel : '批号',
					ref : '../batchNo',
					colspan : 1,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								// this.onScan();
								this.inputWindow2.form
										.findField("warehousing/position")
										.focus(false, 100);
							}

						}
					}
				}, {
					xtype : 'textfield',
					name : 'warehousing/position',
					allowBlank : false,
					fieldLabel : '库位',
					ref : '../position',
					colspan : 1,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								// this.onScan();
								this.inputWindow2.form
										.findField("warehousing/storageId")
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
					xtype : 'displayfield',
					fieldLabel : ' ',
					value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					value : '返厂仓',
					readOnly : true,
					fieldLabel : '退至仓库',
					colspan : 2
				}/*, {
					xtype : 'storagecombobox',
					hiddenName : 'warehousing/storageId',
					allowBlank : false,
					name : 'warehousing/storageId',
					fieldLabel : '仓库',
					colspan : 2
				}*/, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					allowBlank : true,
					name : 'warehousing/customerCode',
					fieldLabel : '客户',
					colspan : 2
				}/*
					 * , { xtype : 'customerCombo', hiddenName :
					 * 'warehousing/customerName', allowBlank : false, name :
					 * 'warehousing/customerName', fieldLabel : '客户' }
					 */, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'numberfield',
					name : 'warehousing/amount',
					allowBlank : false,
					fieldLabel : '数量',
					colspan : 2
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textfield',
					name : 'warehousing/model',
					allowBlank : true,
					fieldLabel : '膜片型号',
					colspan : 1
				}, {
					xtype : 'radiogroup',
					name : 'warehousing/class',
					allowBlank : true,
					fieldLabel : '膜片等级',
					anchor : '60%',
					items : [{
								boxLabel : 'A',
								name : 'warehousing/class',
								inputValue : 'A',
								checked : true
							}, {
								boxLabel : 'B',
								name : 'warehousing/class',
								inputValue : 'B'
							}, {
								boxLabel : 'C',
								name : 'warehousing/class',
								inputValue : 'C'
							}],
					colspan : 1
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'radiogroup',
					name : 'warehousing/ifdelivery',
					allowBlank : true,
					fieldLabel : '是否发货',
					anchor : '60%',
					items : [{
								boxLabel : '是',
								name : 'warehousing/ifdelivery',
								inputValue : '是',
								checked : true
							}, {
								boxLabel : '否',
								name : 'warehousing/ifdelivery',
								inputValue : '否'
							}],
					colspan : 1
				}/*
					 * , { xtype : 'radiogroup', name : 'warehousing/ifrecieve',
					 * allowBlank : true, fieldLabel : '仓库接收确认', anchor : '60%',
					 * items : [{ boxLabel : '是', name :
					 * 'warehousing/ifrecieve', inputValue : '是', checked : true }, {
					 * boxLabel : '否', name : 'warehousing/ifrecieve',
					 * inputValue : '否' }], colspan : 1 }
					 */, {
					xtype : 'displayfield',
					height : '5',
					colspan : 2
				}, {
					xtype : 'textarea',
					height : '50',
					name : 'warehousing/remark',
					allowBlank : true,
					fieldLabel : '备注',
					colspan : 2
				}, {
					xtype : 'hidden',
					name : 'warehousing/type',
					value : '退货入库'
				}, {
					xtype : 'hidden',
					name : 'warehousing/storageId',
					value : 3
				}
				, {
					xtype : 'hidden',
					name : 'warehousing/toId',
					value : 81
				}
				/*
				 * , { xtype : 'hidden', name : 'warehousing/customerCode' }
				 */
				]
			}]
		});
	}

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.importwarehousing.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择文件',
							allowBlank : false,
							inputType : 'file'
						}]
			}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin.hide();
						}
					}]
		});
	}
}