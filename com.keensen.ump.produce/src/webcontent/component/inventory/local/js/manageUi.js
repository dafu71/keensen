com.keensen.ump.produce.component.inventory.LocalMgr = function() {

	this.initPanel = function() {

		this.initInputWindow();

		this.initQueryJuanmoWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'inventorylocalmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}
	this.initInputWindow = function() {
		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 3,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					// title : '【盘库查询】',
					fields : [{

						anchor : "95%",
						colspan : 1,
						xtype : 'combo',
						ref : '../position',
						hiddenName : 'condition/position',
						fieldLabel : '岗位',
						store : [['1', '卷膜岗位'], ['2', '气检岗位'], ['5', '绕丝岗位'],
								['6', '包装岗位'], ['11', '水测岗位'], ['10', '白膜仓库']/*
																				 * ,
																				 * ['12',
																				 * '返修仓库']
																				 */],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.position.reset();
							}
						}

					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '95%',
						fieldLabel : '元件序号'
					}, {
						xtype : 'textfield',
						name : 'condition/juanmoBatchNo',
						anchor : '95%',
						fieldLabel : '卷膜序号'
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 3
					}, {
						xtype : 'textfield',
						name : 'condition/createName',
						anchor : '95%',
						fieldLabel : '盘库人'
					}, {
						xtype : "dateregion",
						colspan : 2,
						anchor : '95%',
						nameArray : ['condition/createTimeStart',
								'condition/createTimeEnd'],
						fieldLabel : "盘库时间",
						format : "Y-m-d"
					}]
				});

		/*
		 * this.queryPanel.addButton({ text : "模板下载", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.onDown });
		 * this.queryPanel.addButton({ text : "导入盘库", scope : this, iconCls :
		 * 'icon-application_excel', rescode : '10003201', handler :
		 * this.importExcel });
		 */
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'KS00307' && uid != 'dafu'
							&& uid != 'KS00524',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "卷膜记录查询",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'KS00307' && uid != 'dafu'
							&& uid != 'KS00524',
					handler : this.queryJuanmo
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【未盘点库存列表】',
			// title : '【盘点库存列表】',
			region : "center",
			viewConfig : {
				forceFit : true
			},
			hsPage : true,

			tbar : ['->', {
						text : '删除',
						scope : this,
						hidden : uid != 'KS00307' && uid != 'dafu'
								&& uid != 'KS00524',
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			id : listid,
			clicksToEdit : 1,
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.stocktaking.deleteInventoryLocal.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 50
							}), selModel, {
						dataIndex : 'batchNo',
						header : '元件序号',
						width : 100
					}, {
						dataIndex : 'juanmoBatchNo',
						header : '卷膜序号',
						width : 100
					}, {
						dataIndex : 'prodSpecName',
						header : '卷膜执行型号',
						width : 100
					}, {
						dataIndex : 'produceDt',
						header : '卷膜日期',
						width : 100
					}, {
						dataIndex : 'position',
						header : '岗位',
						width : 100
					}, {
						dataIndex : 'createTime',
						header : '盘库时间',
						width : 120
					}, {
						dataIndex : 'createName',
						header : '盘库人',
						width : 100
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.stocktaking.queryInventoryLocalByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'juanmoBatchNo'
						}, {
							name : 'batchNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'createTime'
						}, {
							name : 'createName'
						}, {
							name : 'produceDt'
						}, {
							name : 'id'
						}, {
							name : 'position'
						}]
			})
		})
		this.panel = this.panel || new Ext.Panel({
					layout : 'border',
					items : [this.queryPanel, this.listPanel]

				});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '500',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '350',
			// title : '生产入库',
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.produce.component.stocktaking.saveInventoryLocal.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 2
					}, {
						xtype : 'displayfield',
						ref : '../lastBatchNo',
						fieldLabel : '<p style="color:red;font-size:12px;">上支元件</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:12px;">总数量</p>',
						labelSeparator : '',// 去掉冒号
						ref : '../count',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 10,
						colspan : 2
					}, {
						xtype : 'radiogroup',
						colspan : 2,
						columns : 3,
						name : 'position',
						ref : '../position',
						allowBlank : false,
						fieldLabel : '岗位<span style="color:red">*</span>',
						value : 1,
						anchor : '100%',
						items : [{
									boxLabel : '卷膜岗位',
									name : 'entity/position',
									inputValue : '1'
								}, {
									boxLabel : '气检岗位',
									name : 'entity/position',
									inputValue : '2'
								}, {
									boxLabel : '绕丝岗位',
									name : 'entity/position',
									inputValue : '5'
								}, {
									boxLabel : '水测岗位',
									name : 'entity/position',
									inputValue : '11'
								}, {
									boxLabel : '包装岗位',
									name : 'entity/position',
									inputValue : '6'
								}, {
									boxLabel : '白膜仓库',
									name : 'entity/position',
									inputValue : '10'
								}/*
									 * , { boxLabel : '返修仓库', name :
									 * 'entity/position', inputValue : '12' }
									 */]
					}, {
						xtype : 'displayfield',
						height : 10,
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/juanmoBatchNo',
						style : '{font-weight:bold;}',
						// allowBlank : false,
						fieldLabel : '卷膜序号',
						ref : '../juanmoBatchNo',
						anchor : '80%',
						colspan : 2,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									this.onSave();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
						style : '{font-weight:bold;}',
						// allowBlank : false,
						fieldLabel : '元件序号',
						ref : '../batchNo',
						anchor : '80%',
						colspan : 2,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									this.onSave();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						ref : '../info',
						colspan : 2
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

	this.initQueryJuanmoWindow = function() {
		var _this = this;

		var selModel4QueryJuanmo = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4QueryJuanmo = this.listPanel4QueryJuanmo
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : true,
					selModel : selModel4QueryJuanmo,

					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4QueryJuanmo, {
								dataIndex : 'juanmoBatchNo',
								header : '卷膜序号'
							}, {
								dataIndex : 'prodSpecName',
								header : '卷膜执行型号'
							}, {
								dataIndex : 'produceDt',
								header : '生产时间'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.stocktaking.queryJuanmo4StocktakingByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/status' : 1
						},
						fields : [{
									name : 'juanmoBatchNo'
								}, {
									name : 'prodSpecName'
								}, {
									name : 'specName'
								}, {
									name : 'produceDt'
								}, {
									name : 'juanmoBatchId'
								}]
					})
				})

		this.queryPanel4QueryJuanmo = this.queryPanel4QueryJuanmo
				|| new Ext.fn.QueryPanel({
							height : 110,
							columns : 3,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : 'datetimefield',
								name : 'condition/produceDtStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '100%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i',
								value : new Date().add(Date.DAY, -1)
										.format('Y-m-d 00:00')
							}, {
								xtype : 'datetimefield',
								name : 'condition/produceDtEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '100%',
								editable : true,
								format : 'Y-m-d H:i',
								// allowBlank : false,
								value : new Date().add(Date.DAY, 1)
										.format('Y-m-d 00:00')
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : 'datetimefield',
								name : 'condition/stockConfirmTimeStart',
								fieldLabel : '请检入库确认时间',
								colspan : 1,
								anchor : '100%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i',
								value : new Date().add(Date.DAY, -1)
										.format('Y-m-d 00:00')
							}, {
								xtype : 'datetimefield',
								name : 'condition/stockConfirmTimeEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '100%',
								editable : true,
								format : 'Y-m-d H:i',
								// allowBlank : false,
								value : new Date().add(Date.DAY, 1)
										.format('Y-m-d 00:00')
							}, {
								// fieldLabel : '不显示需生产<br>或入库为零',
								xtype : 'checkbox',
								boxLabel : '不显示请检入库确认<br>时间段数据',
								// checked : true,
								name : 'condition/isNotStockConfirm',
								inputValue : 'Y',
								anchor : '100%'
							}]
						})

		this.queryPanel4QueryJuanmo.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.queryJuanmoWindow.hide();
					}

				});

		this.queryPanel4QueryJuanmo.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'KS00307' && uid != 'dafu'
							&& uid != 'KS00524',
					handler : this.exportJmExcel
				});

		this.queryJuanmoWindow = this.queryJuanmoWindow || new Ext.Window({
					title : '卷膜生产记录查询',
					// 自定义属性
					opt : '',
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
					items : [this.queryPanel4QueryJuanmo,
							this.listPanel4QueryJuanmo]

				})
	}

}