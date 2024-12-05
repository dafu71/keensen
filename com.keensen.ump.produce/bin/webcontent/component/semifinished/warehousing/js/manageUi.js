com.keensen.ump.produce.component.WarehousingMgr = function() {

	this.initPanel = function() {
		this.rec = {};
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'componentwarehousingmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
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
								anchor : '75%',
								fieldLabel : '卷膜序号'
							}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			region : "center",
			viewConfig : {
				forceFit : true
			},
			//autoExpandColumn : '4',
			delUrl : '1.biz.ext',
			hsPage : true,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						width : 100,
						header : '卷膜序号'
					}, {
						dataIndex : 'prodSpecName',
						width : 150,
						header : '元件型号'
					}, {
						dataIndex : 'position',
						width : 50,
						header : '库位'
					}, {
						dataIndex : 'createTime',
						width : 120,
						header : '入库时间'
					}, {
						dataIndex : 'createName',
						width : 60,
						header : '操作员'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'nameSqlId' : 'com.keensen.ump.produce.component.semifinished.queryWarehousing'
				},
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
							name : 'position'
						}, {
							name : 'remark'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'qjBatchId'
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
			height : '300',
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
						xtype : 'textfield',
						name : 'entity/batchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '卷膜序号',
						ref : '../batchNo',
						anchor : '80%',
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
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/prodSpecName',
						readOnly : true,
						fieldLabel : '元件型号',
						ref : '../prodSpecName',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/position',
						fieldLabel : '库位',
						ref : '../position',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textarea',
						name : 'entity/remark',
						fieldLabel : '入库时外观',
						ref : '../remark',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'hidden',
						name : 'entity/prodSpecId',
						ref : '../prodSpecId'
					}, {
						xtype : 'hidden',
						name : 'entity/orderNo',
						ref : '../orderNo'
					}, {
						xtype : 'hidden',
						name : 'entity/qjBatchId',
						ref : '../qjBatchId'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}