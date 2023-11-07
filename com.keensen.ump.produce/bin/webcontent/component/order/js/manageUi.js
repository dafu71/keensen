com.keensen.ump.produce.component.OrderMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initEditWindow();
		this.initInputWindow2();
		this.buildExcelUploadWin();
		this.initViewWindow();

		this.initUploadWindow();

		this.initEditWindow2();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentordermgr',
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
					title : '【订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								anchor : '75%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}]
				});

		this.queryPanel.addButton({
					text : "导入即时库存",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel2
				});
		this.queryPanel.addButton({
					text : "即时库存模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown2
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【订单列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : '锁定计划',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPlan
					}, '-', {
						text : '营销确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirm
					}, '-', {
						text : '模板下载',
						scope : this,
						iconCls : 'icon-application_excel',
						// disabled : true,
						handler : this.onDown
					}, '-', {
						text : '订单导入',
						scope : this,
						iconCls : 'icon-application_excel',
						// disabled : true,
						handler : this.importExcel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.order.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderType',
						header : '订单类型'
					}, {
						dataIndex : 'type',
						header : '类型'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'orderDate',
						header : '订单日期'
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'dryWet',
						header : '干膜/湿'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'prodAmount',
						header : '需生产或入库数量'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'bag',
						header : '真空包装袋'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'mark',
						header : '唛头'
					}, {
						dataIndex : 'pack',
						header : '打包方式'
					}, {
						dataIndex : 'performance',
						header : '产品性能'
					}, {
						dataIndex : 'remark',
						header : '其它备注'
					}, {
						dataIndex : 'demandStockDate',
						header : '要求入库日期'
					}, {
						dataIndex : 'confirm',
						header : '营销确认'
					}, {
						dataIndex : 'confirmedby',
						header : '确认人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.order.queryOrderByPage.biz.ext',
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
							name : 'orderType'
						}, {
							name : 'type'
						}, {
							name : 'orderNo'
						}, {
							name : 'orderDate'
						}, {
							name : 'materSpecName'
						}, {
							name : 'dryWet'
						}, {
							name : 'orderAmount'
						}, {
							name : 'prodAmount'
						}, {
							name : 'label'
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
							name : 'confirm'
						}, {
							name : 'confirmedby'
						}, {
							name : 'confirmedbyUserid'
						}]
			})
		})
	}

	this.initEditWindow = function() {

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改订单',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 4,
				loadUrl : 'com.keensen.ump.produce.component.order.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.order.saveEntity.biz.ext',
				fields : [{
					xtype : 'combobox',
					anchor : '95%',
					colspan : 2,
					allowBlank : false,
					name : 'entity/orderType',
					dataIndex : 'orderType',
					hiddenName : 'entity/orderType',
					fieldLabel : '订单类型',
					triggerAction : "all",
					store : new Ext.data.ArrayStore({
								fields : ['mykey', 'myvalue'],
								data : [['公司标准', '公司标准'], ['非公司标准', '非公司标准'],
										['其它', '其它']]
							}),
					mode : "local",
					editable : false,
					displayField : "myvalue",
					valueField : "mykey",
					forceSelection : true,
					emptyText : "--请选择--"
				}, {
					xtype : 'combobox',
					anchor : '95%',
					colspan : 2,
					allowBlank : false,
					name : 'entity/type',
					dataIndex : 'type',
					hiddenName : 'entity/type',
					fieldLabel : '类型',
					triggerAction : "all",
					store : new Ext.data.ArrayStore({
								fields : ['mykey', 'myvalue'],
								data : [['工业膜', '工业膜'], ['家用膜', '家用膜'],
										['商用膜', '商用膜'], ['膜壳', '膜壳'],
										['其它', '其它']]
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
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/orderNo',
					allowBlank : false,
					fieldLabel : '订单编号',
					anchor : '95%',
					colspan : 2,
					dataIndex : 'orderNo'
				}, {
					xtype : 'datefield',
					format : "Y-m-d",
					name : 'entity/orderDate',
					allowBlank : false,
					fieldLabel : '订单日期',
					anchor : '95%',
					colspan : 2,
					dataIndex : 'orderDate'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/materSpecName',
					allowBlank : false,
					fieldLabel : '规格型号',
					anchor : '95%',
					colspan : 2,
					dataIndex : 'materSpecName'
				}, {
					xtype : 'combobox',
					anchor : '95%',
					colspan : 2,
					allowBlank : false,
					name : 'entity/dryWet',
					dataIndex : 'dryWet',
					hiddenName : 'entity/dryWet',
					fieldLabel : '干膜/湿',
					triggerAction : "all",
					store : new Ext.data.ArrayStore({
								fields : ['mykey', 'myvalue'],
								data : [['干', '干'], ['湿', '湿'], ['干/湿', '干/湿'],
										['其它', '其它']]
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
					colspan : 4
				}, {
					xtype : 'numberfield',
					name : 'entity/orderAmount',
					fieldLabel : '订单数量',
					anchor : '95%',
					colspan : 2,
					dataIndex : 'orderAmount'
				}, {
					xtype : 'numberfield',
					name : 'entity/prodAmount',
					fieldLabel : '需生产/入库数量',
					anchor : '95%',
					colspan : 2,
					dataIndex : 'prodAmount'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/label',
					fieldLabel : '标签',
					anchor : '95%',
					colspan : 4,
					dataIndex : 'label'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/bag',
					fieldLabel : '真空包装袋',
					anchor : '95%',
					colspan : 4,
					dataIndex : 'bag'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/box',
					fieldLabel : '包装箱',
					anchor : '95%',
					colspan : 4,
					dataIndex : 'box'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/mark',
					fieldLabel : '唛头',
					anchor : '95%',
					colspan : 4,
					dataIndex : 'mark'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/pack',
					fieldLabel : '打包方式',
					anchor : '95%',
					colspan : 4,
					dataIndex : 'pack'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/performance',
					fieldLabel : '产品性能',
					anchor : '95%',
					colspan : 4,
					dataIndex : 'performance'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'textfield',
					name : 'entity/remark',
					fieldLabel : '其它备注',
					anchor : '95%',
					colspan : 4,
					dataIndex : 'remark'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					xtype : 'datefield',
					format : "Y-m-d",
					name : 'entity/demandStockDate',
					fieldLabel : '要求入库日期',
					anchor : '95%',
					colspan : 2,
					dataIndex : 'demandStockDate'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					isUploaded : false,
					colspan : 4,
					isDelete : true,
					xtype : 'attachmentlist',
					name : 'attachlist',
					id : 'componentlabel',
					postParams : {
						relationId : 0,
						groupId : 'componentlabel'
					},
					isDownload : true,
					fieldLabel : '标签图纸',
					title : '标签图纸',
					itemId : 'attachmentlist'
				}, {
					xtype : 'displayfield',
					height : '5',
					colspan : 4
				}, {
					isUploaded : false,
					isDelete : true,
					colspan : 4,
					xtype : 'attachmentlist',
					name : 'attachlist2',
					id : 'componentmark',
					postParams : {
						relationId : 0,
						groupId : 'componentmark'
					},
					isDownload : true,
					fieldLabel : '唛头图纸',
					title : '唛头图纸',
					itemId : 'attachmentlist2'
				}, {
					xtype : 'hidden',
					name : 'entity/id',
					dataIndex : 'id'
				}]
			}]
		});
	}

	this.initInputWindow2 = function() {
	
		var me = this;
		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.ListPanel({
			title : '【批次信息】',
			height : 140,
			//region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : true,
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'amount',
						header : '米数'
					}, {
						dataIndex : 'storageName',
						header : '仓库'
					}, {
						dataIndex : 'position',
						header : '仓位'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.order.queryPlanStock.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'storageId'
						}, {
							name : 'storageName'
						}, {
							name : 'position'
						}

				]
			})
		})

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【计划单列表】',
			height : 190,
			//region : 'south',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			autoScroll : true,
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelPlan
					}],
			delUrl : 'com.keensen.ump.produce.component.order.deletePlanEntity.biz.ext',
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'team',
						header : '生产车间'
					}, {
						dataIndex : 'productDt',
						header : '作业日期'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}/*, {
						dataIndex : 'amount',
						header : '米数'
					}, {
						dataIndex : 'storageName',
						header : '仓库'
					}, {
						dataIndex : 'position',
						header : '仓位'
					}*/, {
						dataIndex : 'productDemand',
						header : '生产要求'
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.order.queryPlan.biz.ext',
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
							name : 'planNo'
						}, {
							name : 'teamid'
						}, {
							name : 'team'
						}, {
							name : 'productDt'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'storageId'
						}, {
							name : 'storageName'
						}, {
							name : 'position'
						}, {
							name : 'productDemand'
						}, {
							name : 'productOrder'
						}, {
							name : 'remark'
						}, {
							name : 'orderId'
						}, {
							name : 'orderNo'
						}

				]
			})
		})

		this.inputPanel2 = this.inputPanel2 || new Ext.fn.InputPanel({
			height : 270,
			//region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			saveUrl : 'com.keensen.ump.produce.component.order.savePlan.biz.ext',
			fields : [/*{
						xtype : 'displayfield',
						fieldLabel : '计划单号',
						value : '<p style="color:red;">系统自动生成</p>',
						anchor : '47%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, */{
						xtype : 'componentteamcombo',
						hiddenName : 'entity/teamid',
						name : 'entity/teamid',
						allowBlank : false,
						colspan : 2,
						anchor : '95%',
						fieldLabel : '生产车间'
					}, {
						xtype : 'datefield',
						name : 'entity/productDt',
						dataIndex : 'productDt',
						allowBlank : false,
						fieldLabel : '作业日期',
						anchor : '95%',
						format : "Y-m-d",
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'trigger',
						name : 'entity/batchNo',
						// id:'planordernotrigger',
						allowBlank : true,
						fieldLabel : '膜片批次',
						anchor : '95%',
						colspan : 4,
						editable : true,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							var batchNo = me.inputPanel2.form
									.findField("entity/batchNo").getValue();
							me.onBatchNo(batchNo);
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">输入批次号， 多个批号以逗号分隔,点击旁边按钮加载批次信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 4
					}, {
						xtype : 'textarea',
						height : '30',
						name : 'entity/productDemand',
						allowBlank : true,
						fieldLabel : '生产要求',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'numberfield',
						name : 'entity/productOrder',
						minValue : 1,
						allowBlank : false,
						fieldLabel : '生产顺序',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'entity/orderNo',
						readOnly : true,
						allowBlank : false,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'numberfield',
						name : 'entity/orderAmount',
						readOnly : true,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'entity/materSpecName',
						readOnly : true,
						anchor : '95%',
						fieldLabel : '规格型号 ',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/orderDate',
						readOnly : true,
						anchor : '95%',
						fieldLabel : '订单交期 ',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textarea',
						height : '50',
						name : 'entity/remark',
						allowBlank : true,
						fieldLabel : '订单备注',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'hidden',
						name : 'entity/orderId'
					}, {
						xtype : 'hidden',
						name : 'entity/batchNoStr'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSavePlan
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.inputPanel2.form.reset();
							this.inputWindow2.hide();
						}
					}]

		})

		this.inputWindow2 = this.inputWindow2 || new Ext.Window({
					title : '新增计划单',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 820,
					height : 600,
					layout : 'form',
					items : [this.inputPanel2, this.listPanel3, this.listPanel2]

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
						saveUrl : 'com.keensen.ump.produce.component.importOrder.flow',
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

	this.initViewWindow = function() {

		this.viewWindow = this.viewWindow || new Ext.fn.FormWindow({
			title : '查看',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'viewpanel',
				columns : 4,
				loadUrl : 'com.keensen.ump.produce.component.order.expandEntity.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '订单类型',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'orderType'
						}, {
							xtype : 'displayfield',
							fieldLabel : '类型',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'type'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单编号',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'orderNo'
						}, {
							xtype : 'displayfield',
							format : "Y-m-d",
							fieldLabel : '订单日期',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'orderDate'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '规格型号',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'materSpecName'
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'dryWet'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单数量',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'orderAmount'
						}, {
							xtype : 'displayfield',
							fieldLabel : '需生产/入库数量',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'prodAmount'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '标签',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'label'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '真空包装袋',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'bag'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '包装箱',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'box'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '唛头',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'mark'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '打包方式',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'pack'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '产品性能',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'performance'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '其它备注',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'remark'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							format : "Y-m-d",
							fieldLabel : '要求入库日期',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'demandStockDate'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '标签图纸',
							anchor : '95%',
							name : 'componentlabel',
							colspan : 4,
							value : ''
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : '唛头图纸',
							anchor : '95%',
							name : 'componentmark',
							colspan : 4,
							value : ''
						}, {
							xtype : 'hidden',
							name : 'componentlabelname',
							dataIndex : 'componentlabelname'
						}, {
							xtype : 'hidden',
							name : 'componentlabelid',
							dataIndex : 'componentlabelid'
						}, {
							xtype : 'hidden',
							name : 'componentmarkname',
							dataIndex : 'componentmarkname'
						}, {
							xtype : 'hidden',
							name : 'componentmarkid',
							dataIndex : 'componentmarkid'
						}]
			}]
		});
	}

	this.initUploadWindow = function() {
		var _this = this;
		this.uploadForm = this.uploadForm || new Ext.form.FormPanel({
					labelAlign : 'right',
					buttonAlign : "center",
					title : '文件上传',
					labelWidth : 60,
					frame : true,
					url : "com.zoomlion.hjsrm.frame.bclib.file.UploadFileBackId.flow",
					width : 360,
					height : 100,
					fileUpload : true,
					items : [{
								xtype : 'textfield',
								fieldLabel : '文件名',
								name : 'uploadFile',
								inputType : 'file'// 文件类型
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								name : 'relationId'
							}, {
								xtype : 'hidden',
								name : 'groupId',
								value : ''
							}, {
								xtype : 'hidden',
								name : 'dataorgid',
								value : dataorgid
							}, {
								xtype : 'hidden',
								name : 'operatorid',
								value : operatorid
							}, {
								xtype : 'hidden',
								name : 'operatorname',
								value : operatorname
							}]
				});

		this.uploadWindow = this.uploadWindow || new Ext.Window({
			id : 'componentuploadwindow',
			width : 360,
			modal : true,
			height : 150,
			buttonAlign : "center",
			closeAction : "hide",
			layout : "fit",
			items : [this.uploadForm],
			buttons : [{
				text : '上传',
				handler : function() {
					var groupId = _this.uploadForm.getForm()
							.findField('groupId').getValue();
					_this.uploadForm.getForm().submit({
						clientValidation : true,
						success : function(form, response) {
							Ext.Msg.alert('操作提示', '上传成功!');
							/*
							 * var fileId = response.result.fileId; var fileName =
							 * response.result.fileName; var size =
							 * response.result.fileSize; var type =
							 * response.result.fileType; var store =
							 * Ext.getCmp(_this.veattachId).getStore(); var F =
							 * new Ext.data.Record({ id : fileId, filename :
							 * fileName, size : size, type : type });
							 * store.add(F)
							 */
							if (groupId == 'componentlabel') {
								var store = Ext.getCmp('componentlabel')
										.getStore();
							} else {
								var store = Ext.getCmp('componentmark')
										.getStore();
							}
							Ext.Ajax.request({
								url : "com.zoomlion.hjsrm.frame.bclib.file.FileBclib.queryFileList.biz.ext",
								jsonData : {
									'groupId' : _this.uploadForm.getForm()
											.findField('groupId').getValue(),
									'relationId' : _this.uploadForm.getForm()
											.findField('relationId').getValue()
								},
								success : function(B) {
									var A = Ext.decode(B.responseText);
									var J = A.files;
									if (J) {
										var I = [];
										for (var H = 0; H < J.length; H++) {
											var fileName = J[H].fileName;
											var fileType = fileName
													.substr(fileName
															.lastIndexOf('.'));
											I.push([J[H].fileId, J[H].fileId,
													J[H].fileName, fileType,
													J[H].fileSize, -4, 100,
													J[H].filePath])
										}
										store.removeAll();
										store.loadData(I);
										_this.uploadWindow.hide();
									}
								}
							})

						},
						failure : function(form, response) {
							Ext.Msg.alert('操作提示', '上传失败!');
						}
					});
				}
			}, {
				text : "关闭",
				handler : function() {
					_this.uploadWindow.hide()
				}
			}]
		})
	}

	this.initEditWindow2 = function() {

		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '营销确认',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 4,
				loadUrl : 'com.keensen.ump.produce.component.order.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.order.saveOrderConfirm.biz.ext',
				fields : [{
							xtype : 'textarea',
							name : 'entity/confirm',
							style : '{background-color:white;}',
							allowBlank : false,
							fieldLabel : '确认意见',
							height : 300,
							anchor : '95%',
							colspan : 4,
							dataIndex : 'confirm'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}
}