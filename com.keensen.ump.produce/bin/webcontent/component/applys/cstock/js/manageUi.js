com.keensen.ump.produce.component.applys.cstockMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initCodeStore();
		this.initDcodeStore();
		this.initInputWindow();

		this.initStockWindow();
		this.initAllocateWindow();
		this.initHHAllocateWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'applyscstockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initCodeStore = function() {
		this.codeStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.produce.component.applys.queryCode.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {

		}			,
					fields : [{
								name : 'code'
							}]
				})
	}

	this.initDcodeStore = function() {
		this.dcodeStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.allocate.queryDcode4Scan.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {

		}	,
			fields : [{
						name : 'dcode'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								fieldLabel : '请检单号'
							}, {
								xtype : 'textfield',
								name : 'condition/dcode',
								fieldLabel : '调拨单号'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '元件序列号'
							}, {
								xtype : 'combobox',
								name : 'condition/type',
								hiddenName : 'condition/type',
								fieldLabel : '元件类型',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['工业膜', '工业膜'],
													['家用膜', '家用膜']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "--请选择--",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								name : 'condition/state',
								hiddenName : 'condition/state',
								fieldLabel : '状态',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											fields : ['mykey', 'myvalue'],
											data : [['0', '待入库'], ['1', '入库']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "--请选择--",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "入库日期",
								format : "Y-m-d"
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			tbar : [{
						text : '工业膜扫码入库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '元件及时库存',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onStock
					}, '->', {
						text : '工业膜调拨',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onAllocate
					}, '-', {
						text : '家用膜调拨',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onAllocate2
					}],
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			delUrl : '123.biz.ext',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'dcode',
						header : '调拨单号',
						sortable : true
					}, {
						dataIndex : 'code',
						header : '请检单号',
						sortable : true
					}, {
						dataIndex : 'prodSpecName',
						sortable : true,
						header : '元件型号'
					}, {
						dataIndex : 'markSpecCode',
						sortable : true,
						header : '唛头显示型号'
					}, {
						dataIndex : 'batchNo',
						header : '元件序列号',
						sortable : true
					}, {
						dataIndex : 'type',
						header : '元件类型',
						sortable : true
					}, {
						dataIndex : 'stateName',
						header : '状态',
						sortable : true
					}, {
						dataIndex : 'applyDate',
						header : '请检时间',
						sortable : true
					}, {
						dataIndex : 'checkDate',
						header : '检验完成时间',
						sortable : true
					}, {
						dataIndex : 'createTime',
						header : '确认入C仓时间',
						sortable : true
					}, {
						dataIndex : 'createName',
						header : '确认入C仓操作员',
						sortable : true
					}, {
						dataIndex : 'updateTime',
						header : '实际入C仓时间',
						sortable : true
					}, {
						dataIndex : 'updateName',
						header : '实际入C仓操作员',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.applys.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'code'
						}, {
							name : 'batchNo'
						}, {
							name : 'type'
						}, {
							name : 'stateName'
						}, {
							name : 'state'
						}, {
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
							name : 'applyDate'
						}, {
							name : 'checkDate'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'markSpecCode'
						}, {
							name : 'dcode'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '扫码入库',
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
				columns : 1,
				successFn : function(i, r) {
					if (r.ret != '1') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.ret,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										_this.inputWindow.batchNo.setValue('');
										_this.inputWindow.batchNo.focus()
												.defer(100);
									}
								})
					} else {
						_this.inputWindow.batchNo.setValue('');
						_this.listPanel.store.reload();
						_this.inputWindow.batchNo.focus();
					}
				},
				autoHide : false,
				saveUrl : 'com.keensen.ump.produce.component.applys.warehousing.biz.ext',
				fields : [{
							xtype : 'combobox',
							hiddenName : 'entity/dcode',
							// allowBlank : false,
							store : _this.dcodeStore,
							ref : '../../dcode',
							anchor : '95%',
							colspan : 1,
							mode : "local",
							fieldLabel : '调拨单编码',
							valueField : 'dcode',
							displayField : 'dcode',
							typeAhead : true,
							typeAheadDelay : 100,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							hiddenName : 'entity/code',
							// allowBlank : false,
							store : _this.codeStore,
							ref : '../../code',
							anchor : '95%',
							colspan : 1,
							mode : "local",
							fieldLabel : '请检单编码',
							valueField : 'code',
							displayField : 'code',
							typeAhead : true,
							typeAheadDelay : 100,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'batchNo',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../../batchNo',
							anchor : '95%',
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
						}]
			}]
		});

		this.inputWindow.addButton({
					text : "重新加载调拨单和请检单编码",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onQueryCode
				});

		this.initStockWindow = function() {

			var selModel6 = new Ext.grid.CheckboxSelectionModel({
						singleSelect : false,
						header : ''
					});

			this.listPanel6 = this.listPanel6 || new Ext.fn.ListPanel({
				region : 'center',
				viewConfig : {
					forceFit : true
				},
				hsPage : true,
				selModel : selModel6,
				delUrl : '1.biz.ext',
				columns : [new Ext.grid.RowNumberer(), selModel6, {
							dataIndex : 'batchNo',
							header : '元件序号'
						}, {
							dataIndex : 'type',
							header : '元件类型'
						}],
				store : new Ext.data.JsonStore({
					url : 'com.keensen.ump.produce.component.applys.queryStockByPage.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : 'totalCount',
					baseParams : {},
					fields : [{
								name : 'batchNo'
							}, {
								name : 'type'
							}]
				})
			})

			this.queryPanel6 = this.queryPanel6 || new Ext.fn.QueryPanel({
						height : 80,
						columns : 2,
						border : true,
						region : 'north',
						// collapsible : true,
						titleCollapse : false,
						fields : [{
									xtype : 'textfield',
									name : 'condition/batchNo',
									anchor : '85%',
									fieldLabel : '元件序号'
								}, {
									xtype : 'combobox',
									name : 'condition/type',
									hiddenName : 'condition/type',
									fieldLabel : '元件类型',
									anchor : '85%',
									triggerAction : "all",
									store : new Ext.data.ArrayStore({
												fields : ['mykey', 'myvalue'],
												data : [['工业膜', '工业膜'],
														['家用膜', '家用膜']]
											}),
									mode : "local",
									editable : false,
									displayField : "myvalue",
									valueField : "mykey",
									forceSelection : true,
									emptyText : "--请选择--",
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}]
					});

			// this.queryPanel3.addButton({
			// text : "导出",
			// scope : this,
			// iconCls : 'icon-application_excel',
			// handler : this.exportstandExcel
			// });

			this.queryPanel6.addButton({
						text : "关闭",
						scope : this,
						handler : function() {
							this.stockWindow.hide();
						}

					});

			this.stockWindow = this.stockWindow || new Ext.Window({
						title : 'C仓库存查询',
						resizable : true,
						minimizable : false,
						maximizable : true,
						closeAction : "hide",
						buttonAlign : "center",
						autoScroll : false,
						modal : true,
						width : 1024,
						height : 600,
						layout : 'border',
						items : [this.queryPanel6, this.listPanel6]

					});
		}
	}

	this.initAllocateWindow = function() {
		var _this = this;
		this.allocateWindow = this.allocateWindow || new Ext.fn.FormWindow({
			title : '工业膜调拨',
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
				columns : 1,
				successFn : function(i, r) {
					if (r.ret != '1') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.ret,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {

									}
								})
					} else {
						_this.allocateWindow.hide();
					}
				},
				autoHide : false,
				saveUrl : 'com.keensen.ump.produce.component.allocate.allocate.biz.ext',
				fields : [{
							xtype : 'combobox',
							fieldLabel : '发起部门',
							ref : '../../dept',
							hiddenName : 'dept',
							allowBlank : false,
							dataIndex : 'dept',
							emptyText : '--请选择--',
							editable : false,
							anchor : '95%',
							store : [['生产管理部', '生产管理部'], ['质量管理部', '质量管理部']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									_this.allocateWindow.dept.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textarea',
							allowBlank : false,
							fieldLabel : '批号',
							ref : '../../batchNo',
							emptyText : '多个批次请用逗号分隔，或一行一个批次',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'batchNoStr',
							ref : '../../batchNoStr'
						}]
			}]
		});
	}

	this.initHHAllocateWindow = function() {
		var _this = this;

		this.hhallocatePanel = this.hhallocatePanel || new Ext.fn.InputPanel({
			// height : 380,
			region : 'center',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 12,
			saveUrl : 'com.keensen.ump.produce.component.applys.addHHApply2.biz.ext',
			fields : [{
						xtype : 'combobox',
						fieldLabel : '发起部门',
						ref : '../dept',
						hiddenName : 'dept',
						allowBlank : false,
						dataIndex : 'dept',
						emptyText : '--请选择--',
						editable : false,
						colspan : 6,
						anchor : '95%',
						store : [['生产管理部', '生产管理部'], ['质量管理部', '质量管理部']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								_this.allocateWindow.dept.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">元件请检信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'prodSpecName',
						valueField : 'name',
						fieldLabel : '元件型号',
						allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						allowBlank : false,
						name : 'dryWet',
						ref : '../dryWet',
						hiddenName : 'dryWet',
						fieldLabel : '干/湿膜',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['干', '干'], ['湿', '湿']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : ""
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						name : 'markSpecCode',
						fieldLabel : '唛头显示型号',
						allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',
						name : 'applyAmount',
						allowBlank : false,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'datefield',
						ref : '../jmDate',
						name : 'jmDate',
						fieldLabel : '卷膜日期',
						format : "Y-m-d",
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						name : 'tumoBatchStr',
						fieldLabel : '膜批次',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'combobox',
						name : 'tapColor',
						anchor : '95%',
						colspan : 6,
						hiddenName : 'tapColor',
						ref : '../tapColor',
						fieldLabel : '胶带颜色',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['蓝色', '蓝色'], ['绿色', '绿色'],
											['白色', '白色'], ['黄色', '黄色'],
											['灰色', '灰色']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--",
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.hhallocatePanel.tapColor.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						name : 'label',
						hiddenName : 'label',
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 4,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'dictcombobox',
						name : 'bag',
						hiddenName : 'bag',
						fieldLabel : '包装袋',
						// allowBlank : false,
						anchor : '95%',
						colspan : 4,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'dictcombobox',
						name : 'box',
						hiddenName : 'box',
						fieldLabel : '包装箱',
						// allowBlank : false,
						anchor : '95%',
						colspan : 4,
						dictData : KS_COMPONENT_INDUSTRY_BOX
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">元件性能</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'textfield',
						name : 'gpdAvg',
						fieldLabel : '平均产水量',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'saltAvg',
						fieldLabel : '平均脱盐率%',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						ref : '../myabnormal',
						// hiddenName : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						name : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						name : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'hidden',
						ref : '../abnormal',
						name : 'abnormal'
					}],
			buttons : [{
						text : "保存",
						scope : this,
						handler : this.onSaveHHAllocate
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.hhallocatePanel.form.reset();
							this.hhallocateWindow.hide();
						}
					}]

		})

		this.hhallocateWindow = this.hhallocateWindow || new Ext.Window({
					title : '家用膜调拨',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.hhallocatePanel]

				});

	}
}