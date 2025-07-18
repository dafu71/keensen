com.keensen.ump.produce.component.ApplyStockConfirmMgr = function() {

	this.initPanel = function() {
		this.rec = {};

		this.initStore();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'applystockconfirmmgr',
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
								name : 'condition/code',
								anchor : '85%',
								fieldLabel : '栈板号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '85%',
								nameArray : ['condition/stockConfirmTimeStart',
										'condition/stockConfirmTimeEnd'],
								fieldLabel : "确认时间",
								format : "Y-m-d"
							}, {
								xtype : 'hidden',
								name : 'condition/ifstockconfirm',
								value : '1'
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
			// autoExpandColumn : '4',
			delUrl : 'com.keensen.ump.produce.component.apply.cancelStockConfirm.biz.ext',
			hsPage : true,
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onDel
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'code',
						sortable : true,
						header : '栈板号'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						width : 150,
						header : '订单号'
					}, {
						dataIndex : 'prodSpecName',
						sortable : true,
						header : '元件型号'
					}, {
						dataIndex : 'applyAmount',
						sortable : true,
						header : '请检数量'
					}, {
						dataIndex : 'stockConfirmUserName',
						sortable : true,
						header : '确认人'
					}, {
						dataIndex : 'stockConfirmTime',
						sortable : true,
						header : '确认时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryByPage.biz.ext.biz.ext',
				root : 'data',
				autoLoad : true,
				baseParams : {
					'condition/ifstockconfirm' : 1
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
							name : 'code'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderAmount'
						}, {
							name : 'applyAmount'
						}, {
							name : 'checkUserId'
						}, {
							name : 'checkUserName'
						}, {
							name : 'applyDate'
						}, {
							name : 'applyUserId'
						}, {
							name : 'applyUserName'
						}, {
							name : 'lid'
						}, {
							name : 'prodClassFlag'
						}, {
							name : 'tape'
						}, {
							name : 'markSpecialFlag'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'markSpecCode'
						}, {
							name : 'markIsok'
						}, {
							name : 'labelIsok'
						}, {
							name : 'apperanceIsok'
						}, {
							name : 'diameter'
						}, {
							name : 'final'
						}, {
							name : 'deal'
						}, {
							name : 'deal1'
						}, {
							name : 'deal2'
						}, {
							name : 'deal3'
						}, {
							name : 'storage'
						}, {
							name : 'manageUserId'
						}, {
							name : 'manageUserName'
						}, {
							name : 'orderType'
						}, {
							name : 'confirmDate'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'printCnt'
						}, {
							name : 'applyAmountTotal'
						}, {
							name : 'isExamine'
						}, {
							name : 'performance'
						}, {
							name : 'ifcstock'
						}, {
							name : 'stockConfirmTime'
						}, {
							name : 'stockConfirmUserName'
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
						xtype : 'textfield',
						height:30,
						style : '{font-weight:bold;font-size:18px;}',
						allowBlank : false,
						fieldLabel : '栈板号',
						ref : '../code',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									_this.onSave();

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