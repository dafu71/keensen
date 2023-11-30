com.keensen.ump.produce.diaphragm.ship.TraceMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initTumoWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shiptracemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【订单跟进查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/planNo',
								anchor : '75%',
								fieldLabel : '计划单号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/planDateStart',
										'condition/planDateEnd'],
								fieldLabel : "计划发货日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}, {
								fieldLabel : '不统计已裁膜',
								xtype : 'checkbox',
								checked : true,
								name : 'condition/isCutOver',
								inputValue : 'N',
								anchor : '100%'
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【订单跟进列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '涂膜记录',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onTumo
					}],
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.ship.plan.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'planDate',
						header : '计划发货日期'
					}, {
						dataIndex : 'planAmount',
						header : '计划数量'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'orderDate',
						header : '要求发货日期'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'materSpecCode',
						header : '型号'
					}, {
						dataIndex : 'tamount',
						header : '涂膜投入'
					}, {
						dataIndex : 'camount',
						header : '涂膜产出'
					}, {
						dataIndex : 'stockAmount',
						header : '入库数量'
					}, {
						dataIndex : 'aamount',
						header : '可发货(A等品)'
					}, {
						dataIndex : 'usefulAmount',
						header : '可用数量'
					}, {
						dataIndex : 'onceAmount',
						header : '一检数量'
					}, {
						dataIndex : 'twiceAmount',
						header : '二检数量'
					}, {
						dataIndex : 'sendamount',
						header : '已发货数量'
					}, {
						dataIndex : 'passrate',
						header : '发货合格率'
					}

			/*
			 * , { dataIndex : 'planRemark', header : '计划备注' }
			 */],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.trace.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/isCutOver' : 'N'
				},
				fields : [{
							name : 'orderNo'
						}, {
							name : 'amount'
						}, {
							name : 'orderAmount'
						}, {
							name : 'planAmount'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'specId'
						}, {
							name : 'planRemark'
						}, {
							name : 'planNo'
						}, {
							name : 'planDate'
						}, {
							name : 'orderDate'
						}, {
							name : 'tamount'
						}, {
							name : 'camount'
						}, {
							name : 'aamount'
						}, {
							name : 'passrate'
						}, {
							name : 'sendamount'
						}, {
							name : 'onceAmount'
						}, {
							name : 'twiceAmount'
						}, {
							name : 'usefulAmount'
						}, {
							name : 'stockAmount'
						}]
			})
		})
	}

	this.initTumoWindow = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.tumolistPanel = new Ext.fn.ListPanel({
			title : '【涂膜记录】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '涂膜批号'
					}, {
						dataIndex : 'produceDt',
						header : '生产时间'
					}, {
						dataIndex : 'outLength',
						header : '长度(米)'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度(米)'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度(米)'
					}, {
						dataIndex : 'perfFlagName',
						header : '等级'
					}, {
						dataIndex : 'judgeDt',
						header : '判定时间'
					}, {
						dataIndex : 'tumoRemark',
						header : '生产备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.trace.queryTumoAllByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'produceDt'
						}, {
							name : 'outLength'
						}, {
							name : 'judgeDt'
						}, {
							name : 'tumoRemark'
						}, {
							name : 'usefulLength'
						}, {
							name : 'qualifidLength'
						}]
			})
		})

		this.tumoWindow = this.tumoWindow || new Ext.Window({
					title : "涂膜工序",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 1024,
					height : 800,
					layout : 'fit',
					draggable : false,
					constrain : true,
					hasvcode : true,
					remoteIP : "",
					redirect : true,
					modal : true,
					items : [this.tumolistPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.tumoWindow.hide();
								}
							}]

				});
	}

}