com.keensen.ump.produce.diaphragm.tumo.tumoMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();

		this.initListPanel();

		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'tumomgr2',
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
			tbar : [{
						text : '发起让步放行',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onConcession
					}],
			hsPage : true,
			id : 'diaphragm-tumo-list',
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
					}/*
						 * , { dataIndex : 'delivery', header : '可发货长度(米)' }
						 */, {
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
				autoLoad : false,
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

	this.initInputWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【异常状态描述】',
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : false,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'outLength',
						header : '实发长度(m)'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度m'
					}, {
						dataIndex : 'fGfdAvg',
						header : '初检膜通量'
					}, {
						dataIndex : 'fSaltRejection',
						header : '初检脱盐率%'
					}, {
						dataIndex : 'rGfdAvg',
						header : '复测膜通量'
					}, {
						dataIndex : 'rSaltRejection',
						header : '复测脱盐率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumoOrigin.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'rSaltRejection'
						}, {
							name : 'rGfdAvg'
						}, {
							name : 'fGfdAvg'
						}, {
							name : 'fSaltRejection'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}]
			})
		})

		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 240,
					region : 'north',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 2,
					saveUrl : 'com.keensen.ump.produce.quality.concession.saveConcession.biz.ext',
					fields : [{
								xtype : 'textfield',
								name : 'entity/orderNo',
								allowBlank : false,
								fieldLabel : '客户/订单号',
								anchor : '95%',
								colspan : 1
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'entity/specId',
								allowBlank : false,
								anchor : '95%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'textfield',
								name : 'entity/dept',
								fieldLabel : '申请部门',
								allowBlank : false,
								anchor : '95%',
								colspan : 1
							}, {
								xtype : 'numberfield',
								name : 'entity/num',
								allowBlank : false,
								fieldLabel : '数量',
								anchor : '95%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'dictcheckboxgroup',
								name : 'entity/item',
								allowBlank : false,
								fieldLabel : '放行类型',
								anchor : '95%',
								dictData : KS_QUALITY_JUDGE_ITEM,
								colspan : 1
							}, {
								xtype : 'dictcombobox',
								name : 'entity/ifKey',
								fieldLabel : '是否关键特性',
								allowBlank : false,
								dictData : ABF_YESORNO,
								anchor : '95%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'textarea',
								name : 'entity/reason',
								allowBlank : false,
								fieldLabel : '让步接收理由',
								anchor : '95%',
								colspan : 2
							}],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onSaveConcession
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputPanel.form.reset();
									this.inputWindow.hide();
								}
							}]

				})
				
		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '发起让步放行',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.inputPanel, this.listPanel2]

				});

		
	}
}