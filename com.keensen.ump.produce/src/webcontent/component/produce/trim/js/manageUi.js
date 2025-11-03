com.keensen.ump.produce.component.produce.TrimMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();
		
		this.initProduceCountWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentproducetrimmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		
		this.machineCodeStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : '切边'
					},
					fields : [{
								name : 'code'
							}, {
								name : 'name'
							}, {
								name : 'type'
							}, {
								name : 'ip'
							}]
				})

		
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					// title : '【BOM查询】',
					fields : [{

								xtype : 'textfield',
								name : 'condition/jmBatchNo',
								anchor : '100%',
								fieldLabel : '卷膜批号%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '生产机台号',
								ref : '../machineCode',
								hiddenName : 'condition/machineCode',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.machineCodeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.machineCode.reset()
									}
								}
							}, {
								xtype : 'datetimefield',
								name : 'condition/createTimeStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '100%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i:00'
							}, {
								xtype : 'datetimefield',
								name : 'condition/createTimeEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '100%',
								editable : true,
								format : 'Y-m-d H:i:00'
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {

								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '100%',
								fieldLabel : '订单号%-%'
							}, {

								xtype : 'textfield',
								name : 'condition/operateUserName',
								anchor : '100%',
								fieldLabel : '操作工%-%'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
					handler : this.exportExcel
				});
				
		this.queryPanel.addButton({
					text : "工作量查询",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onQueryQuantity
				});

		this.queryPanel.addButton({
			text : "<span style='color:red;font-size:14px;'>上&nbsp;&nbsp;机</span>",
			height : 40,
			scope : this,
			iconCls : 'icon-application_add',
			handler : this.onStart
		});

		this.queryPanel.addButton({
			text : "<span style='color:red;font-size:14px;'>下&nbsp;&nbsp;机</span>",
			height : 40,
			scope : this,
			iconCls : 'icon-application_edit',
			handler : this.onEnd
		});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【BOM列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						id : addTrimBtn,
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
					}/*, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}*/],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.produce.deleteTrim.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'machineCode',
						header : '机台'
					}, {
						dataIndex : 'jmBatchNo',
						header : '卷膜批号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'intakePipeLength',
						header : '白膜进水端长度'
					}, {
						dataIndex : 'effluentPipeLength',
						header : '白膜出水端长度'
					}, {
						dataIndex : 'isOverlap',
						header : '是否膜页重叠'
					}, {
						dataIndex : 'createTime',
						width : 120,
						header : '生产时间'
					}, {
						dataIndex : 'operateUserName',
						width : 120,
						header : '操作工'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.produce.queryTrimByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
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
							name : 'status'
						}, {
							name : 'machineCode'
						}, {
							name : 'operaterUserId'
						}, {
							name : 'operateUserName'
						}, {
							name : 'juanmoBatchId'
						}, {
							name : 'lineId'
						}, {
							name : 'isOverlap'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'intakePipeLength'
						}, {
							name : 'effluentPipeLength'
						}, {
							name : 'jmBatchNo'
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
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : _this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.produce.saveTrim.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							// fieldLabel : '不显示需生产<br>或入库为零',
							xtype : 'checkbox',
							boxLabel : '新增后不关闭',
							checked : true,
							ref : '../../closeFlag',
							inputValue : 'Y',
							anchor : '100%'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/jmBatchNo',
							style : '{font-weight:bold;}',
							emptyText : '光标置于此框内后扫码',
							ref : '../../jmBatchNo',
							allowBlank : false,
							fieldLabel : '卷膜序号',
							anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {
										_this.onScan();

									}

								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							// name : 'entity/lightNetType',
							ref : '../../orderNo',
							readOnly : true,
							fieldLabel : '订单号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							ref : '../../prodSpecName',
							fieldLabel : '元件型号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							ref : '../../intakePipeLength',
							fieldLabel : '白膜进水端长度',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							ref : '../../effluentPipeLength',
							fieldLabel : '白膜出水端长度',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '是否膜页重叠',
							ref : '../../isOverlap',
							hiddenName : 'entity/isOverlap',
							anchor : '95%',
							colspan : 2,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							value : '否',
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.isOverlap.reset()
								}
							}
						}, {
							xtype : 'hidden',
							ref : '../../juanmoBatchId',
							name : 'entity/juanmoBatchId'
						}, {
							xtype : 'hidden',
							ref : '../../machineCode',
							name : 'entity/machineCode'
						}],

				successFn : function(i, r) {
					var store = _this.listPanel.store;
					store.baseParams = _this.queryPanel.form.getValues();
					store.load();
					if (!_this.inputWindow.closeFlag.checked) {
						_this.inputWindow.hide();
					}
					_this.inputWindow.orderNo.setValue('');
					_this.inputWindow.prodSpecName.setValue('');
					_this.inputWindow.intakePipeLength.setValue('');
					_this.inputWindow.effluentPipeLength.setValue('');
					_this.inputWindow.juanmoBatchId.setValue('');
					_this.inputWindow.jmBatchNo.setValue('');
					_this.inputWindow.jmBatchNo.focus().defer(100);
				}

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
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandTrim.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.produce.saveTrim.biz.ext',
				fields : [{
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '卷膜序号',
							dataIndex : 'jmBatchNo',
							ref : '../../jmBatchNo',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '是否膜页重叠',
							dataIndex : 'isOverlap',
							ref : '../../isOverlap',
							hiddenName : 'entity/isOverlap',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.isOverlap.reset()
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initProduceCountWindow = function() {

		var _this = this;

		var selModel4ProduceCount = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel4ProduceCount = this.listPanel4ProduceCount
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : ['->', {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								value : '',
								id : quantityTotalId
							}, {
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}],
					hsPage : true,
					selModel : selModel4ProduceCount,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							selModel4ProduceCount, {
								dataIndex : 'dataCount',
								header : '生产日期'
							}, {
								dataIndex : 'userName',
								header : '操作工'
							}, {
								dataIndex : 'prodSpecName',
								header : '元件型号'
							}, {
								dataIndex : 'quantity',
								header : '生产数量'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.productioncount.queryProductTrimListByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'userName'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'dataCount'
								}, {
									name : 'quantity'
								}, {
									name : 'quantityTotal'
								}]
					})
				})

		this.queryPanel4ProduceCount = this.queryPanel4ProduceCount
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 4,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : "dateregion",
								colspan : 2,
								anchor : '95%',
								nameArray : ['condition/dateCountStart',
										'condition/dateCountEnd'],
								fieldLabel : "生产日期",
								format : "Y-m-d",
								value : new Date()
							}, {
								xtype : 'textfield',
								name : 'condition/userName',
								anchor : '95%',
								fieldLabel : '操作工',
								value : nowStaffName

							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								anchor : '95%',
								fieldLabel : '元件型号'
							}]
						});

		this.queryPanel4ProduceCount.addButton({
					text : "导出",
					scope : this,
					hidden : true,
					iconCls : 'icon-application_excel',
					handler : this.exportProduceCountExcel
				});

		this.queryPanel4ProduceCount.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.produceCountWindow.hide();
					}

				});

		this.produceCountWindow = this.produceCountWindow || new Ext.Window({
					title : '产量统计',
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
					items : [this.queryPanel4ProduceCount,
							this.listPanel4ProduceCount]

				});
	}
}