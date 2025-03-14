com.keensen.ump.produce.component.markprintMgr = function() {

	this.initPanel = function() {
		
		this.initInputWindow();		
		this.initViewDutyWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'componentmarkprintmgr',
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
								anchor : '95%',
								fieldLabel : '卷膜序号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "包装日期",
								format : "Y-m-d"
							}]
				});
				
		this.queryPanel.addButton({
					text : "查看任务",
					// rescode : '10002661',
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onDuty
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
			delUrl : '1.biz.ext',
			hsPage : true,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						// width : 100,
						header : '卷膜序号'
					}, {
						dataIndex : 'prodBatchNo',
						// width : 150,
						header : '元件序号'
					}, {
						dataIndex : 'createTime',
						// width : 120,
						header : '包装时间'
					}, {
						dataIndex : 'createName',
						// width : 60,
						header : '包装人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.makprint.queryPackageByPage2.biz.ext',
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
							name : 'prodBatchNo'
						}, {
							name : 'batchNo'
						}]
			})
		})

		this.panel = this.panel || new Ext.Panel({
					layout : 'border',
					items : [this.queryPanel, this.listPanel]

				});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '300',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '500',

			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 2
					}, {
						fieldLabel : '只作包装记录',
						xtype : 'checkbox',
						checked : true,
						ref : '../isRecord',
						inputValue : 'Y',
						anchor : '80%'
					}, {
						fieldLabel : '打印五星',
						xtype : 'checkbox',
						checked : false,
						ref : '../isStar',
						inputValue : 'Y',
						anchor : '80%'
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						// name : 'condition/juanmoBatchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '卷膜序号',
						ref : '../juanmoBatchNo',
						anchor : '80%',
						colspan : 2,
						keys : {
							key : Ext.EventObject.ENTER,
							fn : function(btn, e) {
								searchData();
							}
						},
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
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						readOnly : true,
						allowBlank : false,
						anchor : '80%',
						ref : '../prodBatchNo',
						fieldLabel : '元件序号',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						// name : 'warehousing/position',
						readOnly : true,
						allowBlank : false,
						fieldLabel : '订单号',
						style : '{font-weight:bold;}',
						ref : '../orderNo',
						anchor : '80%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						readOnly : true,
						allowBlank : false,
						anchor : '80%',
						ref : '../prodSpecName2',
						fieldLabel : '订单生产型号',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						readOnly : true,
						allowBlank : false,
						anchor : '80%',
						ref : '../prodSpecName',
						fieldLabel : '实际生产型号',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'combobox',
						anchor : '80%',
						colspan : 2,
						allowBlank : false,
						readOnly : true,
						name : 'entity/c',
						ref : '../dryWet',
						hiddenName : 'entity/dryWet',
						fieldLabel : '订单干/湿膜',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['干', '干'], ['湿', '湿']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : ""
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						readOnly : true,
						allowBlank : false,
						anchor : '80%',
						ref : '../dryWet2',
						fieldLabel : '生产干/湿膜',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textarea',
						readOnly : true,
						ref : '../remark',
						fieldLabel : '提示',
						anchor : '80%',
						colspan : 2,
						dataIndex : 'remark'
					}],
			buttons : [{
						text : "重置",
						scope : this,
						handler : this.onReset
					}]
		})

	}

	// 任务
	this.initViewDutyWindow = function() {

		var _this = this;

		var viewDutySelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.viewDutyListPanel = this.viewDutyListPanel
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					autoScroll : false,
					selModel : viewDutySelModel,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), viewDutySelModel, {
								dataIndex : 'qjBatchNo',
								header : '元件序号'
							}, {
								dataIndex : 'jmBatchNo',
								header : '卷膜序号'
							}, {
								dataIndex : 'jmSpecName',
								header : '生产规格型号'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.workorder2.queryPackDutyList.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'jmBatchNo'
								}, {
									name : 'orderId'
								}, {
									name : 'pkid'
								}, {
									name : 'jmBatchId'
								}, {
									name : 'jmSpecId'
								}, {
									name : 'jmSpecName'
								}, {
									name : 'qjSpecId'
								}, {
									name : 'qjSpecName'
								}, {
									name : 'checkResult'
								}, {
									name : 'isQualified'
								}, {
									name : 'ngReasonId'
								}, {
									name : 'ngReasonName'
								}, {
									name : 'qjBatchNo'
								}, {
									name : 'isQualifiedName'
								}]
					})
				})

		this.viewDutyPanel = this.viewDutyPanel || new Ext.fn.EditPanel({
			height : 300,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 3,
			loadUrl : 'com.keensen.ump.produce.component.workorder2.getPackDuty.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">作业信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '作业日期',
						ref : '../arrangeDate',
						readOnly : true,
						dataIndex : 'arrangeDate',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单号',
						ref : '../orderNo',
						readOnly : true,
						dataIndex : 'orderNo',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单类型',
						ref : '../orderType',
						readOnly : true,
						dataIndex : 'orderType',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单下达型号',
						ref : '../materSpecName2',
						readOnly : true,
						dataIndex : 'materSpecName2',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单数量',
						ref : '../orderAmount',
						readOnly : true,
						dataIndex : 'orderAmount',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '生产规格型号',
						ref : '../materSpecName',
						readOnly : true,
						dataIndex : 'materSpecName',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '待包装数量',
						ref : '../waitAmount',
						readOnly : true,
						dataIndex : 'waitAmount',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '已包装数量',
						ref : '../packAmount',
						readOnly : true,
						dataIndex : 'packAmount',
						anchor : '85%',
						colspan : 1
					}, {
							xtype : 'displayfield',
							ref : '../displayfield1',
							height : 5,
							colspan : 3
						}, {
							xtype : 'displayfield',
							ref : '../prodRemark',
							dataIndex : 'prodRemark',
							readOnly : true,
							anchor : '95%',
							fieldLabel : '订单生产备注',
							colspan : 4
						}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">贴标信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '卷膜胶带',
						ref : '../tape',
						readOnly : true,
						dataIndex : 'tape',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '端盖',
						ref : '../lid',
						readOnly : true,
						dataIndex : 'lid',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '序列号是否固定',
						ref : '../snRegular',
						readOnly : true,
						dataIndex : 'snRegular',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '标签制作方式',
						ref : '../makeLabel',
						readOnly : true,
						dataIndex : 'makeLabel',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '双标签',
						ref : '../labelDouble',
						readOnly : true,
						dataIndex : 'labelDouble',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '标签图纸',
						ref : '../picturePanel',
						height : '60',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'hidden',
						name : 'labelUrl',
						dataIndex : 'labelUrl'

					}],
			buttons : [{
						text : "刷新任务",
						scope : this,
						handler : this.onDuty
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.viewDutyWindow.hide();
						}
					}]

		})

		this.viewDutyWindow = this.viewDutyWindow || new Ext.Window({
					title : '包装任务',
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
					items : [this.viewDutyPanel, this.viewDutyListPanel]

				});

	}
}