com.keensen.ump.produce.component.applys.stockMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initStockOutWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'applysstockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : 'combobox',
						name : 'condition/prodType',
						hiddenName : 'condition/prodType',
						fieldLabel : '产品类型',
						anchor : '85%',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['工业8寸', '工业8寸'], ['工业4寸', '工业4寸'],
											['工业类4寸', '工业类4寸'], ['家用膜', '家用膜']]
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
						xtype : 'textfield',
						name : 'condition/prodSpecName',
						anchor : '85%',
						fieldLabel : '生产规格型号'
					}, {
						xtype : 'combobox',
						name : 'condition/dryWet',
						hiddenName : 'condition/dryWet',
						fieldLabel : '干/湿',
						anchor : '85%',
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
						emptyText : "--请选择--",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 3
					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '85%',
						fieldLabel : '元件序号%-%'
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'performanceIsok',
						hiddenName : 'condition/performanceIsok',
						fieldLabel : '性能判定',
						dictData : KS_YESORNO,
						anchor : '85%',
						emptyText : "是否合格",
						colspan : 1
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'apperanceIsok',
						hiddenName : 'condition/apperanceIsok',
						fieldLabel : '外观判定',
						dictData : KS_YESORNO,
						anchor : '85%',
						emptyText : "是否合格",
						colspan : 1
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
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			tbar : [{
						text : '工业膜扫码出库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onOut
					}, '-', {
						text : '家用膜出库',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onHHOut
					}, '->', {
						text : '元件出库记录',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onStockOut
					}],
			hsPage : true,
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'prodType',
						header : '产品类型'
					}, {
						dataIndex : 'markSpecCode',
						header : '元件标签型号'
					}, {
						dataIndex : 'prodSpecName',
						header : '生产规格型号'
					}, {
						dataIndex : 'dryWet',
						header : '干/湿'
					}, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'jmBatchNo',
						header : '卷膜序号'
					}, {
						dataIndex : 'jmProduceDt',
						header : '卷膜日期'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						/*xtype : 'dictcolumn',
						dictData : KS_COMPONENT_INDUSTRY_LABEL,*/
						header : '标签'
					}, {
						dataIndex : 'bag',
						header : '包装袋'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'stockTime',
						header : '入库日期'
					}, {
						dataIndex : 'performanceIsok',
						header : '性能判定'
					}, {
						dataIndex : 'performanceErr',
						header : '性能异常说明'
					}, {
						dataIndex : 'abnormal',
						header : '外观异常类型'
					}, {
						dataIndex : 'abnormalExplain',
						header : '外观异常说明'
					}, {
						dataIndex : 'apperanceIsok',
						header : '外观判定'
					}, {
						dataIndex : 'abnormalOther',
						header : '其他异常备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.applys.queryStockByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'prodType'
						}, {
							name : 'markSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'dryWet'
						}, {
							name : 'batchNo'
						}, {
							name : 'jmBatchNo'
						}, {
							name : 'jmProduceDt'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'bag'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'stockTime'
						}, {
							name : 'performanceIsok'
						}, {
							name : 'performanceErr'
						}, {
							name : 'abnormal'
						}, {
							name : 'abnormalExplain'
						}, {
							name : 'apperanceIsok'
						}, {
							name : 'type'
						}, {
							name : 'abnormalOther'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '扫码出库',
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
				saveUrl : 'com.keensen.ump.produce.component.applys.outofstock.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex : 'batchNo',
							name : 'map/batchNo',
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
						}, {
							xtype : 'hidden',
							ref : '../../type',
							name : 'map/type',
							value : '工业膜'
						}]
			}]
		});
	}

	this.initStockOutWindow = function() {

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
						header : '入库类型'
					}, {
						dataIndex : 'code',
						header : '请检单号'
					}, {
						dataIndex : 'stockTime',
						header : '入库时间'
					}, {
						dataIndex : 'stockName',
						header : '入库人'
					}, {
						dataIndex : 'createTime',
						header : '出库时间'
					}, {
						dataIndex : 'createName',
						header : '出库人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.applys.queryStockOutByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
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
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'id'
						}, {
							name : 'batchNo'
						}, {
							name : 'storage'
						}, {
							name : 'type'
						}, {
							name : 'code'
						}, {
							name : 'stockTime'
						}, {
							name : 'stockUserId'
						}, {
							name : 'stockName'
						}]
			})
		})

		this.queryPanel6 = this.queryPanel6 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : "dateregion",
						colspan : 1,
						anchor : '100%',
						nameArray : ['condition/createTimeStart',
								'condition/createTimeEnd'],
						fieldLabel : "出库日期",
						format : "Y-m-d"
					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '100%',
						fieldLabel : '元件序号%-%'
					}, {
						xtype : 'combobox',
						name : 'condition/type',
						hiddenName : 'condition/type',
						fieldLabel : '元件类型',
						anchor : '100%',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['工业膜', '工业膜'], ['家用膜', '家用膜']]
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
						this.stockOutWindow.hide();
					}

				});

		this.stockOutWindow = this.stockOutWindow || new Ext.Window({
					title : '出库记录查询',
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