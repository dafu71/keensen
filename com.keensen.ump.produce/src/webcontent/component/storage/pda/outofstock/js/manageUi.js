com.keensen.ump.produce.component.storage.OutofStockMgr = function() {

	this.initPanel = function() {
		this.rec = {};

		this.initStore();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'storageoutofstockmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}

	this.initStore = function() {

	}

	this.initInputWindow = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/checkCode',
								anchor : '100%',
								fieldLabel : '请检单号'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '元件序号'
							}, {
								xtype : "dateregion",
								colspan : 2,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "出库时间",
								format : "Y-m-d"
							}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			region : "center",
			viewConfig : {
				forceFit : false
			},
			// autoExpandColumn : '4',
			delUrl : '1.biz.ext',
			hsPage : true,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'batchNo',
						header : '元件序号'
					}, {
						dataIndex : 'checkCode',
						header : '请检单号'
					}, {
						dataIndex : 'trayCode',
						header : '托盘号'
					}, {
						dataIndex : 'orderNo',
						header : '出库订单号'
					}, {
						dataIndex : 'type',
						header : '出库类型'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'jmSpecName',
						header : '卷膜型号'
					}, {
						dataIndex : 'dryWet',
						header : '干湿'
					}, {
						dataIndex : 'specType',
						header : '元件类型'
					}, {
						dataIndex : 'storageCode',
						header : '库位码'
					}, {
						dataIndex : 'storage',
						header : '仓库名称'
					}, {
						dataIndex : 'type',
						header : '出库类型'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '出库时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryOutOfStockByPage.biz.ext.biz.ext',
				root : 'data',
				autoLoad : true,
				baseParams : {},
				totalProperty : 'totalCount',
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
							name : 'orderNo'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'storage'
						}, {
							name : 'position'
						}, {
							name : 'type'
						}, {
							name : 'orderId'
						}, {
							name : 'checkCode'
						}, {
							name : 'orderNo'
						}, {
							name : 'specType'
						}, {
							name : 'jmSpecName'
						}, {
							name : 'storageCode'
						}, {
							name : 'dryWet'
						}, {
							name : 'trayCode'
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
			width : '480',
			height : '420',
			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;font-size:16px;">出库顺序为托盘号>元件序号</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {

						anchor : "80%",
						colspan : 1,
						xtype : 'combo',
						allowBlank : false,
						ref : '../type',
						fieldLabel : '出库类型',
						value : '销售出库',
						store : [['销售出库', '销售出库'], ['其它出库', '其它出库']],
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}

					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						allowBlank : false,
						fieldLabel : '出库订单号',
						ref : '../orderNo',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									

								}

							}
						}
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						//allowBlank : false,
						fieldLabel : '托盘号',
						ref : '../trayCode',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}/*, {
						xtype : 'textfield',
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						//allowBlank : false,
						fieldLabel : '请检单号',
						ref : '../checkCode',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'textfield',
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						//allowBlank : false,
						fieldLabel : '库位码',
						ref : '../storageCode',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}*/, {
						xtype : 'textfield',
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						//allowBlank : false,
						fieldLabel : '元件序号',
						ref : '../batchNo',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						ref : '../msg',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}