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
					columns : 2,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/checkCode',
								anchor : '85%',
								fieldLabel : '请检单号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '85%',
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
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'jmSpecName',
						header : '卷膜型号'
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
						header : '入库类型'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '入库时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryWarehousingByPage.biz.ext.biz.ext',
				root : 'data',
				autoLoad : true,
				baseParams : {
				},
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
			height : '350',
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

						anchor : "80%",
						colspan : 1,
						xtype : 'combo',
						allowBlank : false,
						ref : '../type',
						fieldLabel : '入库类型',
						value : '生产入库',
						store : [['生产入库', '生产入库'], ['其他入库', '其他入库']]

					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {

						anchor : "80%",
						colspan : 1,
						xtype : 'combo',
						allowBlank : false,
						ref : '../storage',
						fieldLabel : '仓库',
						store : [['高架成品仓', '高架成品仓'], ['高架订单仓', '高架订单仓'],
								['高架C等品仓', '高架C等品仓']]

					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						allowBlank : false,
						fieldLabel : '请检单号',
						ref : '../checkCode',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									_this.queryCheck();

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
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						allowBlank : false,
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
					}, {
						xtype : 'hidden',
						ref : '../checkId'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}