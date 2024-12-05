com.keensen.ump.produce.diaphragm.storage.StorageRkdrkMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'storagerkdrkmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 210,
					columns : 4,
					border : true,
					//collapsible : true,
					titleCollapse : false,
					//title : '【入库单查询】',
					fields : [{
						xtype : "dateregion",
						colspan : 1,
						anchor : '95%',
						nameArray : ['condition/produceDtStart',
								'condition/produceDtEnd'],
						fieldLabel : "生产日期",
						format : "Y-m-d"
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
						xtype : 'textfield',
						name : 'condition/batchNo',
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
						xtype : 'mpperfcombobox',
						hiddenName : 'condition/perfFlagId',
						anchor : '75%',
						fieldLabel : '膜片等级'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					},{
						xtype : "dateregion",
						colspan : 1,
						anchor : '95%',
						nameArray : ['condition/createTimeStart',
								'condition/createTimeEnd'],
						fieldLabel : "入库单生成日期",
						format : "Y-m-d"
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
		this.listPanel = new Ext.fn.EditListPanel({
			//title : '【入库单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : 'rkdrk-list',
			selModel : selModel,
			clicksToEdit : 1,
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
						xtype : 'dictcolumn',
						dataIndex : 'shipflag',
						header : '是否发货',
						dictData : ABF_YESORNO
					}, {
						dataIndex : 'storageName',
						header : '入库'
					}, {
						dataIndex : 'position',
						header : '选择库位',
						width : 100,
						// renderer : function() {
						/*
						 * 给combobox设置id,得到选中显示的值，renderer就是用来转换的，这样就
						 * 可以就可以把现实隐藏值转换成显示的值，
						 */
						// return Ext.getCmp('positionComb').getRawValue();
						// },
						// sortable : true,
						
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new com.keensen.ump.StoragePosComboBox(
								{
									allowBlank : false,
									id : 'positionComb',
									scope : this,
									hiddenName : 'code',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									// valueField : 'code',
									// displayField : 'name',
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))
					}, {
						header : '操作',
						scope : this,
						renderer : function(v, m, r, i) {
							var id = r.get('recordId');
							var batchNo = r.get('batchNo');
							var position = r.get('position');
							var style = "<a style='color:red;text-decoration:none'";
							var str = style + " href='javascript:dealrkdrk("
									+ Ext.encode(position) + ","
									+ Ext.encode(batchNo) + "," + id + ");'>"
									+ "确认入库</a>";

							return str;
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.rkdrk.queryByPage.biz.ext',
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
							name : 'dimoBatchNo'
						}, {
							name : 'shipflag'
						}, {
							name : 'qualifidLength'
						}]
			})
		})
	}

}