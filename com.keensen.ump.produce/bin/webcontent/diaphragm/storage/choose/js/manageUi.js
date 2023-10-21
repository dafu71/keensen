com.keensen.ump.produce.diaphragm.storage.StorageChooseMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'storagechoosemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 220,
					columns : 4,
					border : true,
					//collapsible : true,
					titleCollapse : false,
					title : '【涂膜合格记录查询】',
					fields : [{
								xtype : 'datetimefield',
								name : 'condition/produceDtStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '75%',
								allowBlank : true,
								editable : true,
								format : 'Y-m-d H:i'
							}, {
								xtype : 'datetimefield',
								name : 'condition/produceDtEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '75%',
								allowBlank : true,
								editable : true,
								format : 'Y-m-d H:i'
							}, {
								xtype : 'mplinecombobox',
								hiddenName : 'condition/lineId',
								anchor : '75%',
								fieldLabel : '生产线 '
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'supcombobox',
								hiddenName : 'condition/supId',
								anchor : '75%',
								fieldLabel : '无纺布供应商'
							}, {
								xtype : 'combobox',
								anchor : '75%',
								name : 'condition/isWx',
								hiddenName : 'condition/isWx',
								fieldLabel : '是否外销',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											id : 0,
											fields : ['mykey', 'myvalue'],
											data : [['N', '否'], ['Y', '是']]
										}),
								mode : "local",
								editable : false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "--请选择--"
							}, {
								xtype : 'mpworkercombobox',
								hiddenName : 'condition/workerId',
								anchor : '75%',
								fieldLabel : '操作工'
							}, {
								xtype : 'storagecombobox',
								hiddenName : 'condition/storageId',
								anchor : '75%',
								fieldLabel : '仓库'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/planNo',
								anchor : '75%',
								fieldLabel : '计划单号'
							}, {
								xtype : 'textfield',
								name : 'condition/dimoBatchNo',
								anchor : '75%',
								fieldLabel : '底膜批次'
							}, {
								xtype : 'combobox',
								anchor : '75%',
								name : 'condition/yrkflag',
								hiddenName : 'condition/yrkflag',
								fieldLabel : '是否已入库',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
											id : 0,
											fields : ['mykey', 'myvalue'],
											data : [['否', '否'], ['是', '是']]
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
								xtype : 'dictcombobox',
								name : 'condition/rkflag',
								anchor : '75%',
								dataIndex : 'condition/rkflag',
								hiddenName : 'condition/rkflag',
								fieldLabel : '是否已生成<br>入库单',
								dictData : ABF_YESORNO
							}, {
								xtype : 'mpperfcombobox',
								hiddenName : 'condition/perfFlagId',
								anchor : '75%',
								fieldLabel : '膜片等级'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '75%',
								fieldLabel : '膜片批次'
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
			title : '【涂膜合格记录列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : 'choose-list',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'produceDt',
						header : '生产日期'
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
						dataIndex : 'dimoBatchNo',
						header : '底膜批次'
					}, {
						dataIndex : 'lineCode',
						header : '生产线'
					}, {
						dataIndex : 'materClassCode',
						header : '膜片系列'
					}, {
						dataIndex : 'materSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'supName',
						header : '无纺布供应商'
					}, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'perfFlagName',
						header : '等级'
					}, {
						dataIndex : 'storageName',
						header : '入库'
					}, {
						dataIndex : 'yrkflag',
						header : '已入库',
						renderer : function(v, m, r, i) {
							var yrkflag = r.get('yrkflag');
							if (yrkflag == '是') {
								return "<span style='color:red'>" + yrkflag
										+ "</span>";
							} else {
								return "<span style='color:blue'>" + yrkflag
										+ "</span>";
							}
						}
					}, {
						header : '操作',
						scope : this,
						renderer : function(v, m, r, i) {
							var yrkflag = r.get('yrkflag');
							if (yrkflag == '是')
								return;
							var id = r.get('recordId');
							var batchNo = r.get('batchNo');
							var rkflag = r.get('rkflag');
							var title = rkflag == 'n' ? '生成' : '取消';
							var style = rkflag == 'n'
									? "<a style='color:blue;text-decoration:none'"
									: "<a style='color:red;text-decoration:none'";
							var str = style + " href='javascript:dealchoose("
									+ Ext.encode(rkflag) + ","
									+ Ext.encode(batchNo) + "," + id + ");'>"
									+ title + "入库单</a>";

							return str;
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.choose.queryTumoByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'storageName'
						}, {
							name : 'storageId'
						}, {
							name : 'planNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'recordId'
						}, {
							name : 'rkflag'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'supName'
						}, {
							name : 'lineCode'
						}, {
							name : 'yrkflag'
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'qualifidLength'
						}]
			})
		})
	}

}