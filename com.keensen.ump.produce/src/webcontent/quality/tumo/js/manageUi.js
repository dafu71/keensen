com.keensen.ump.produce.quality.tumoMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();

		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'tumomgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 210,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【涂膜记录查询】',
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
							}/*
								 * , { xtype : 'mplinecombobox', hiddenName :
								 * 'condition/lineId', anchor : '75%',
								 * fieldLabel : '生产线 ' }
								 */, {
								xtype : 'linecombobox',
								prodTacheId : '100',
								hiddenName : 'condition/lineId',
								anchor : '75%',
								fieldLabel : '生产线 '
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ddflag',
								anchor : '75%',
								dataIndex : 'condition/ddflag',
								hiddenName : 'condition/ddflag',
								fieldLabel : '是否让步',
								dictData : ABF_YESORNO
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}/*
								 * , { xtype : 'supcombobox', hiddenName :
								 * 'condition/supId', anchor : '75%', fieldLabel :
								 * '无纺布供应商' }, { xtype : 'combobox', anchor :
								 * '75%', name : 'condition/isWx', hiddenName :
								 * 'condition/isWx', fieldLabel : '是否外销',
								 * triggerAction : "all", store : new
								 * Ext.data.ArrayStore({ id : 0, fields :
								 * ['mykey', 'myvalue'], data : [['N', '否'],
								 * ['Y', '是']] }), mode : "local", editable :
								 * false, displayField : "myvalue", valueField :
								 * "mykey", forceSelection : true, emptyText :
								 * "--请选择--" }, { xtype : 'mpworkercombobox',
								 * hiddenName : 'condition/workerId', anchor :
								 * '75%', fieldLabel : '操作工' }
								 */, {
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
								xtype : 'dictcombobox',
								name : 'condition/ddflag',
								anchor : '75%',
								dataIndex : 'condition/ddflag',
								hiddenName : 'condition/ddflag',
								fieldLabel : '是否有订单号',
								dictData : ABF_YESORNO
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
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/judgeDtStart',
										'condition/judgeDtEnd'],
								fieldLabel : "判定时间",
								format : "Y-m-d"
							}, {
						xtype : 'dictcombobox',
						name : 'condition/ifPerFlag',
						hiddenName : 'condition/ifPerFlag',
						fieldLabel : '是否已批次<br>性能判定',
						anchor : '75%',
						dictData : ABF_YESORNO
					}, {
								xtype : 'hidden',
								name : 'condition/isCutOver',
								value : 'N'
							}, {
								xtype : 'hidden',
								name : 'condition/batchNoStr'
							} /*
								 * , { xtype : 'dictcombobox', name :
								 * 'condition/isQualified', anchor : '75%',
								 * dataIndex : 'condition/isQualified',
								 * hiddenName : 'condition/isQualified',
								 * fieldLabel : '是否合格', dictData : ABF_YESORNO }
								 */]
				});

		this.queryPanel.addButton({
					text : "导出发货请检单",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel2
				});
		this.queryPanel.addButton({
					text : "导出自检请检单",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;

		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					listeners : {

		}

				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【涂膜记录列表】',
			viewConfig : {
				forceFit : false
			},

			hsPage : true,
			id : 'quality-tumo-list',
			listeners : {

		}	,
			selModel : this.selModel,
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次',
						renderer : function(v, m, r, i) {
							var sendId = r.get('sendId');
							if (!Ext.isEmpty(sendId)) {
								return "<span style='color:blue;'>" + v
										+ "</span>"
							} else {
								return v;
							}
						}

					}, {
						dataIndex : 'produceDt',
						header : '生产日期'
					}, {
						dataIndex : 'judgeDt',
						header : '判定日期'
					}/*, {
						dataIndex : 'delivery',
						header : '可发货长度(米)'
					}*/, {
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
						xtype : 'dictcolumn',
						dataIndex : 'isQualified',
						header : '合格',
						dictData : ABF_YESORNO
					}/*
						 * , { dataIndex : 'createTime', header : '发货单生成日期' }, {
						 * dataIndex : 'createName', header : '发货单生成人' }
						 */],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumoByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/isCutOver' : 'N'
				},
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
						}, {
							name : 'isQualified'
						}, {
							name : 'createName'
						}, {
							name : 'createTime'
						}, {
							name : 'isCutOver'
						}, {
							name : 'delivery'
						}, {
							name : 'sendId'
						}, {
							name : 'sendAmount'
						}, {
							name : 'judgeDt'
						}]
			})
		})
	}

}