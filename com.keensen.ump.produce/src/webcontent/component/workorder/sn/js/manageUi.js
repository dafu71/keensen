com.keensen.ump.produce.component.workorder.SnMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.rec2 = {};

		this.initQueryPanel();
		this.initListPanel();

		this.initChooseSingleOrderWindow();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workordersnmgr',
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
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								colspan : 1,
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'prodspeccombobox',
								dataIndex : 'materSpecId',
								hiddenName : 'condition/materSpecId',
								ref : '../materSpecId',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '生产型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true
							}, {
								xtype : 'textfield',
								name : 'condition/prefix',
								colspan : 1,
								fieldLabel : '前缀%-%'
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
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
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
			delUrl : 'com.keensen.ump.produce.component.workorder2.deleteSn.biz.ext',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						header : '生产型号'
					}, {
						dataIndex : 'prefix',
						header : '前缀'
					}, {
						dataIndex : 'snStart',
						header : '起始编号'
					}, {
						dataIndex : 'snEnd',
						header : '结束编号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.workorder2.query4SnByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'orderId'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'prefix'
						}, {
							name : 'snStart'
						}, {
							name : 'snEnd'
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
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				successFn : function(i, r) {

					_this.inputWindow.items.items[0].form.reset();
					_this.inputWindow.hide();
					_this.listPanel.refresh();

				},
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.component.workorder2.saveSn.biz.ext',
				fields : [{
							xtype : 'trigger',
							// name : 'entity/orderNo',
							emptyText : '单击旁边按钮选择',
							fieldLabel : '订单号',
							editable : false,
							allowBlank : false,
							ref : '../../orderNo',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onChooseOrder();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							// name : 'entity/materSpecName',
							readOnly : true,
							fieldLabel : '规格型号',
							ref : '../../materSpecName',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/prefix',
							fieldLabel : '前缀',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/snStart',
							fieldLabel : '起始编号',
							allowBlank : false,
							minValue : 0,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/snEnd',
							fieldLabel : '结束编号',
							allowBlank : false,
							minValue : 1,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/orderId',
							ref : '../../orderId'
						}]
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
				successFn : function(i, r) {

					_this.editWindow.items.items[0].form.reset();
					_this.editWindow.hide();
					_this.listPanel.refresh();

				},

				columns : 1,
				loadUrl : 'com.keensen.ump.produce.component.workorder2.expandSn.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.workorder2.saveSn.biz.ext',
				fields : [{
							xtype : 'trigger',
							// name : 'entity/orderNo',
							emptyText : '单击旁边按钮选择',
							dataIndex : 'orderNo',
							fieldLabel : '订单号',
							editable : false,
							allowBlank : false,
							ref : '../../orderNo',
							anchor : '95%',
							colspan : 1,
							onTriggerClick : function() {
								_this.onChooseOrder();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							// name : 'entity/materSpecName',
							readOnly : true,
							fieldLabel : '规格型号',
							ref : '../../materSpecName',
							dataIndex : 'materSpecName',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/prefix',
							dataIndex : 'prefix',
							fieldLabel : '前缀',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/snStart',
							dataIndex : 'snStart',
							fieldLabel : '起始编号',
							allowBlank : false,
							minValue : 0,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/snEnd',
							dataIndex : 'snEnd',
							fieldLabel : '结束编号',
							allowBlank : false,
							minValue : 1,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/orderId',
							dataIndex : 'orderId',
							ref : '../../orderId'
						}, {
							xtype : 'hidden',
							name : 'entity/oldOrderId',
							dataIndex : 'oldOrderId',
							ref : '../../oldOrderId'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id',
							ref : '../../pkid'
						}]
			}]
		});
	}

	this.initChooseSingleOrderWindow = function() {

		var chooseSingleOrderSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.chooseSingleOrderListPanel = this.chooseSingleOrderListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseSingleOrder
							}],
					hsPage : true,
					selModel : chooseSingleOrderSelModel,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer(),
							chooseSingleOrderSelModel, {
								dataIndex : 'orderType',
								header : '订单类型',
								sortable : true
							}, {
								dataIndex : 'orderNo',
								header : '订单编号',
								sortable : true
							}, {
								dataIndex : 'templateName',
								header : '唛头图纸编号',
								sortable : true
							}, {
								dataIndex : 'materSpecName2',
								header : '订单下达型号',
								sortable : true
							}, {
								dataIndex : 'materSpecName',
								header : '对应生产规格',
								sortable : true
							}, {
								dataIndex : 'orderAmount',
								header : '订单数量',
								sortable : true
							}, {
								dataIndex : 'orderDate',
								header : '订单日期',
								sortable : true
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.neworder.queryYxOrderByPage.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
									name : 'id'
								}, {
									name : 'lidTape'
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
									name : 'scfs'
								}, {
									name : 'bm'
								}, {
									name : 'sffh'
								}, {
									name : 'orderType'
								}, {
									name : 'type'
								}, {
									name : 'khxj'
								}, {
									name : 'cpxj'
								}, {
									name : 'ddxj'
								}, {
									name : 'orderNo'
								}, {
									name : 'orderDate'
								}, {
									name : 'hpmc'
								}, {
									name : 'dw'
								}, {
									name : 'materSpecName'
								}, {
									name : 'cpgg'
								}, {
									name : 'dryWet'
								}, {
									name : 'orderAmount'
								}, {
									name : 'dfh'
								}, {
									name : 'xsc'
								}, {
									name : 'sbkcgm'
								}, {
									name : 'sbkcsm'
								}, {
									name : 'bq'
								}, {
									name : 'bag'
								}, {
									name : 'box'
								}, {
									name : 'mark'
								}, {
									name : 'pack'
								}, {
									name : 'performance'
								}, {
									name : 'remark'
								}, {
									name : 'demandStockDate'
								}, {
									name : 'rksl'
								}, {
									name : 'jhwcsj'
								}, {
									name : 'scwcrq'
								}, {
									name : 'cnt'
								}, {
									name : 'arrangeAmount'
								}, {
									name : 'ifplan'
								}, {
									name : 'materSpecName2'
								}, {
									name : 'templateName'
								}, {
									name : 'baseId'
								}]
					})
				})

		this.queryChooseSingleOrderPanel = this.queryChooseSingleOrderPanel
				|| new Ext.fn.QueryPanel({
							height : 120,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/orderNo2',
										// anchor : '75%',
										fieldLabel : '订单号'
									}, {
										xtype : 'textfield',
										name : 'condition/materSpecName',
										// anchor : '75%',
										fieldLabel : '规格型号 '
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										xtype : "dateregion",
										colspan : 1,
										// anchor : '75%',
										nameArray : [
												'condition/orderDateStart',
												'condition/orderDateEnd'],
										fieldLabel : "订单日期",
										format : "Y-m-d"
									}]
						});

		this.queryChooseSingleOrderPanel.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSingleOrderWindow.hide();
					}

				});

		this.chooseSingleOrderWindow = this.chooseSingleOrderWindow
				|| new Ext.Window({
							title : '订单查询',
							projectId : '',
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
							items : [this.queryChooseSingleOrderPanel,
									this.chooseSingleOrderListPanel]

						});
	}
}