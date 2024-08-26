com.keensen.ump.produce.component.workorder.dutyMgr = function() {
	this.initPanel = function() {
		this.rec = {};
		this.initMachineStore();
		this.initQueryPanel();
		this.initListPanel();
		this.initArrangeWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workorderdutymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initMachineStore = function() {
		this.machineStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : this.machineType
					},
					fields : [{
								name : 'code'
							}, {
								name : 'name'
							}, {
								name : 'type'
							}, {
								name : 'ip'
							}]
				})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'datefield',
								ref : '../planDate',
								name : 'condition/planDate',
								fieldLabel : '作业日期',
								format : "Y-m-d",
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								ref : '../orderNo',
								// anchor : '95%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								// anchor : '95%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '95%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textarea',
								name : 'condition/batchNoStr2',
								emptyText : '多个批次请用逗号分隔，或一行一个批次',
								colspan : 2,
								anchor : '85%',
								fieldLabel : '膜片批次'
							}, {
								xtype : 'combo',
								fieldLabel : '尺寸',
								ref : '../size',
								hiddenName : 'condition/size',
								emptyText : '--请选择--',
								anchor : '95%',
								colspan : 1,
								store : [['8', '8寸'], ['4', '4寸']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.size.reset();
									}
								}
							}, {
								xtype : 'machinecombobox',
								hiddenName : 'condition/machineCode',
								ref : '../../machineCode',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '机台 ',
								typeAhead : true,
								typeAheadDelay : 100,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : 'hidden',
								name : 'condition/batchNoStr'
							}, {
								xtype : 'hidden',
								name : 'condition/orderby',
								value : 1
							}]
				});

		
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.EditListPanel({
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : mylistid,
			clicksToEdit : 1,
			tbar : [{
						text : '任务快捷安排',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onArrange

					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						width : 150,
						header : '订单编号',
						sortable : true
					}, {
						dataIndex : 'planDate',
						header : '作业日期',
						sortable : true
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次',
						sortable : true
					}, {
						dataIndex : 'productOrder',
						header : '生产顺序',
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : true,
									allowNegative : true,
									minValue : 0,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'focus' : function() {
											var cdmState = _this.rec.data['cdmState'];
											if (cdmState != '0') {
												_this.queryPanel.orderNo.focus();
												return false;
											}
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var cdmState = _this.rec.data['cdmState'];
											if (cdmState != '0') {
												return false;
											} else {
												var id = _this.rec.data['id'];
												_this.saveProductOrder(id,
														newValue, oldValue);
											}
										}
									}
								}))
					}, {
						dataIndex : 'cdmCode',
						width : 150,
						header : '裁叠膜机台',
						sortable : true,
						css : 'background:#c7c7c7;',
						scope : this,
						renderer : function(value) {
							var rowIndex = this.machineStore.find("code", ""
											+ value);
							if (rowIndex < 0)
								return '';
							var record = this.machineStore.getAt(rowIndex);
							return record ? record.get('name') : rowIndex;
						},
						editor : new Ext.grid.GridEditor(new com.keensen.ump.MachineComboBox(
								{
									machineType : '裁叠膜',
									lazyRender : true,
									allowBlank : false,
									// id : 'cdmCodeComb',
									scope : this,
									// readOnly : modifyFlag != 1,
									hiddenName : 'code',
									typeAhead : true,
									typeAheadDelay : 100,
									editable : true,
									valueField : 'code',
									displayField : 'name',
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'focus' : function() {
											var cdmState = _this.rec.data['cdmState'];
											if (cdmState != '0') {
												_this.queryPanel.orderNo.focus();
												return false;
											}
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var cdmState = _this.rec.data['cdmState'];
											if (cdmState != '0') {
												return false;
											} else {
												var id = _this.rec.data['id'];
												_this.saveCdmCode(id, newValue,
														oldValue);
											}
										}
									}
								}))
					}, {
						dataIndex : 'dutyName',
						header : '任务安排人',
						sortable : true
					}, {
						dataIndex : 'dutyTime',
						width : 150,
						header : '任务安排时间',
						sortable : true
					}, {
						dataIndex : 'cdmStateName',
						header : '裁叠膜生产状态',
						width : 150,
						sortable : true
					}, {
						dataIndex : 'cdmReportName',
						header : '裁叠膜报告人',
						sortable : true
					}, {
						dataIndex : 'cdmReportTime',
						width : 150,
						header : '裁叠膜报告时间',
						sortable : true
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号',
						sortable : true
					}, {
						dataIndex : 'size',
						header : '尺寸',
						sortable : true
					}, {
						dataIndex : 'jmAmount',
						header : '卷膜数量',
						sortable : true
					}, {
						dataIndex : 'orderDate',
						header : '订单交期',
						sortable : true
					}, {
						dataIndex : 'orderRemark',
						header : '订单备注'
					}, {
						dataIndex : 'materSpecCode',
						header : '膜片物料编码',
						sortable : true
					}, {
						dataIndex : 'yjAvgGpd',
						header : '可卷制元件<br>换算平均产水量'
					}, {
						dataIndex : 'saltRejection',
						header : '按试卷型号<br>换算脱盐率'
					}, {
						dataIndex : 'meterAmount',
						header : '米数'
					}, {
						dataIndex : 'residue',
						header : '剩余米数'
					}, {
						dataIndex : 'storageName',
						header : '仓库',
						sortable : true
					}, {
						dataIndex : 'storagePosition',
						header : '库位',
						sortable : true
					}, {
						dataIndex : 'planDate',
						header : '作业日期',
						sortable : true
					}, {
						dataIndex : 'mpRemark',
						header : '膜片备注'
					}, {
						dataIndex : 'cmWorker',
						header : '裁膜人员'
					}, {
						dataIndex : 'prodSpecName',
						header : '卷制元件型号'
					}, {
						dataIndex : 'testAvgGpd',
						header : '按试卷型号<br>换算平均产水量'
					}, {
						dataIndex : 'testMaterSpec',
						header : '试卷元件型号'
					}, {
						dataIndex : 'testBatchNo',
						header : '试卷膜批号'
					}, {
						dataIndex : 'testGpd',
						header : '试卷元件产水'
					}, {
						dataIndex : 'testSaltRejection2',
						header : '试卷元件脱盐'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryPlanDayByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/orderby' : 1
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
							name : 'relationId'
						}, {
							name : 'orderId'
						}, {
							name : 'planDate'
						}, {
							name : 'jmAmount'
						}, {
							name : 'batchNo'
						}, {
							name : 'meterAmount'
						}, {
							name : 'position'
						}, {
							name : 'mpRemark'
						}, {
							name : 'problem'
						}, {
							name : 'productOrder'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'materSpecId'
						}, {
							name : 'orderAmount'
						}, {
							name : 'xsc'
						}, {
							name : 'orderDate'
						}, {
							name : 'weekRemark'
						}, {
							name : 'planYear'
						}, {
							name : 'planWeek'
						}, {
							name : 'enterDate'
						}, {
							name : 'orderRemark'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'testAvgGpd'
						}, {
							name : 'saltRejection'
						}, {
							name : 'testMaterSpec'
						}, {
							name : 'testBatchNo'
						}, {
							name : 'testGpd'
						}, {
							name : 'testSaltRejection2'
						}, {
							name : 'cmWorker'
						}, {
							name : 'confirmDate'
						}, {
							name : 'storageName'
						}, {
							name : 'storagePosition'
						}, {
							name : 'size'
						}, {
							name : 'residue'
						}, {
							name : 'confirmStatus'
						}, {
							name : 'yjAvgGpd'
						}, {
							name : 'yjAvgGpd'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'cdmCode'
						}, {
							name : 'cdmState'
						}, {
							name : 'cdmStateName'
						}, {
							name : 'dutyTime'
						}, {
							name : 'dutyUserId'
						}, {
							name : 'dutyName'
						}, {
							name : 'cdmReportTime'
						}, {
							name : 'cdmReportUserId'
						}, {
							name : 'cdmReportName'
						}]
			})
		})
	}

	this.initArrangeWindow = function() {
		this.arrangeWindow = this.arrangeWindow || new Ext.fn.FormWindow({
			title : '快捷安排',
			height : 240,
			width : 300,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.workorder.batchArrange.biz.ext',
				fields : [{
							xtype : 'machinecombobox',
							hiddenName : 'entity/cmdCode',
							ref : '../../cmdCode',
							machineType : '裁叠膜',
							allowBlank : false,
							anchor : '90%',
							colspan : 2,
							fieldLabel : '裁叠膜机台 ',
							typeAhead : true,
							typeAheadDelay : 100,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/ids',
							ref : '../../ids'
						}]
			}]
		});
	}
}