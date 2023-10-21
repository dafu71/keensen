com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'shipchoosemgr',
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
								xtype : 'textfield',
								name : 'condition/batchNo2',
								colspan : 1,
								anchor : '75%',
								fieldLabel : '膜片批次'
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
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
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
								xtype : 'mpperfcombobox',
								hiddenName : 'condition/perfFlagId',
								anchor : '75%',
								fieldLabel : '膜片等级'
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
								xtype : 'dictcombobox',
								name : 'condition/shipflag',
								anchor : '75%',
								dataIndex : 'condition/shipflag',
								hiddenName : 'condition/shipflag',
								fieldLabel : '是否已生成<br>发货单',
								dictData : ABF_YESORNO
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ddflag',
								anchor : '75%',
								dataIndex : 'condition/ddflag',
								hiddenName : 'condition/ddflag',
								fieldLabel : '是否有订单号',
								dictData : ABF_YESORNO
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
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
			tbar:[{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							},{
								xtype : 'displayfield',
								value : '合计长度(m)',
								id : 'shipchooseoutlength'
							},{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							},{
								xtype : 'displayfield',
								value : '合计可用长度(m)',
								id : 'shipchooseusefullength'
							},{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							},{
								xtype : 'displayfield',
								value : '合计合格长度(m)',
								id : 'shipchoosequalifidLength'
							},{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							},{
								xtype : 'displayfield',
								value : '合计不良长度(m)',
								id : 'shipchooseloss'
							},{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							},{
								xtype : 'displayfield',
								value : '合计A等长度(m)',
								id : 'shipchooseaqualifidlength'
							},{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							},{
								xtype : 'displayfield',
								value : '合计B等长度(m)',
								id : 'shipchoosebqualifidlength'
							},{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							},{
								xtype : 'displayfield',
								value : '合计C等长度(m)',
								id : 'shipchoosecqualifidlength'
							}],
			hsPage : true,
			id : 'ship-choose-list',
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
						dataIndex : 'loss',
						header : '不良(米)'
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
						header : '操作',
						scope : this,
						renderer : function(v, m, r, i) {
							var ifconfirm = r.get('ifconfirm');
							if(ifconfirm == 'y') return;
							var id = r.get('recordId');
							var batchNo = r.get('batchNo');
							var shipflag = r.get('shipflag');
							var title = shipflag == 'n' ? '生成' : '取消';
							var style = shipflag == 'n'
									? "<a style='color:blue;text-decoration:none'"
									: "<a style='color:red;text-decoration:none'";
							var str = style + " href='javascript:dealchoose2("
									+ Ext.encode(shipflag) + ","
									+ Ext.encode(batchNo) + "," + id + ");'>"
									+ title + "发货单</a>";

							return str;
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.choose.queryTumoByPage.biz.ext',
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
							name : 'planNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'recordId'
						}, {
							name : 'shipflag'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'supName'
						}, {
							name : 'lineCode'
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'ddflag'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'loss'
						}]
			})
		})
	}

}