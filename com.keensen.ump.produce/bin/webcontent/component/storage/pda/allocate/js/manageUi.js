com.keensen.ump.produce.component.storage.PdaAllocateMgr = function() {

	this.initPanel = function() {
		this.rec = {};

		this.initStore();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'pdaallocatemgr',
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
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '元件序号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "调拨时间",
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
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'fromStorageCode',
						header : '原库位码'
					}, {
						dataIndex : 'fromStorage',
						header : '原仓库名称'
					}, {
						dataIndex : 'fromTrayCode',
						header : '原托盘号'
					}, {
						dataIndex : 'toStorageCode',
						header : '目标库位码'
					}, {
						dataIndex : 'toStorage',
						header : '目标仓库名称'
					}, {
						dataIndex : 'toTrayCode',
						header : '目标托盘号'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '调拨时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryAllocateByPage.biz.ext',
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
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'toStorage'
						}, {
							name : 'toStorageCode'
						}, {
							name : 'fromStorage'
						}, {
							name : 'fromStorageCode'
						}, {
							name : 'fromTrayCode'
						}, {
							name : 'toTrayCode'
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
			height : '450',
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
						value : '<p style="color:red;font-size:16px;">顺序为托盘号>元件序号</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						height : 30,
						style : '{font-weight:bold;font-size:18px;}',
						// allowBlank : false,
						fieldLabel : '托盘号',
						ref : '../fromTrayCode',
						anchor : '95%',
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
						xtype : 'textarea',
						height : 100,
						style : '{font-weight:bold;font-size:18px;}',
						// allowBlank : false,
						fieldLabel : '元件序号',
						ref : '../batchNos',
						anchor : '95%',
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
						value : '<p style="color:red;">光标置于此框内后扫码(一行一个)，或手工录入</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
							xtype : 'displayfield',
							height : '10',
							colspan : 1
						}, {

							anchor : "95%",
							colspan : 1,
							xtype : 'combo',
							mode : 'local',
							allowBlank : false,
							editable:false,
							hiddenName : 'toStorage',
							ref : '../toStorage',
							fieldLabel : '目标仓库',
							store : [['高架成品仓', '高架成品仓'], ['高架订单仓', '高架订单仓'],
									['高架C等品仓', '高架C等品仓']],
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
							fieldLabel : '目标库位码',
							ref : '../toStorageCode',
							name : 'toStorageCode',
							anchor : '95%',
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
							fieldLabel : '目标托盘号',
							ref : '../toTrayCode',
							name : 'toTrayCode',
							anchor : '95%',
							colspan : 1,
							listeners : {
								scope : this,
								specialkey : function(C, D) {
									if (D.getKey() == Ext.EventObject.ENTER) {

									}

								}
							}
						}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}