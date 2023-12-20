com.keensen.ump.produce.quality.timojudgeMgr = function() {
	this.initPanel = function() {

		this.validStore = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [['Y', '合格'], ['N', '不合格']]
				});
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'timojudgemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 180,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【膜片质检判定查询】',
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
						name : 'condition/batchNoStr',
						anchor : '75%',
						fieldLabel : '膜片批次'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'prodflagselcombobox',
						hiddenName : 'condition/prodFlagId',
						anchor : '75%',
						fieldLabel : '生产类型'
					}, {
						xtype : 'mpperfcombobox',
						hiddenName : 'condition/batchPerfFlagId',
						anchor : '75%',
						fieldLabel : '批次性能'
					}, {
						xtype : 'combobox',
						anchor : '75%',
						fieldLabel : '批次判定',
						triggerAction : "all",
						store : this.validStore,
						valueField : 'mykey',
						displayField : 'myvalue',
						hiddenName : 'condition/isBatchQualified',
						name : 'condition/isBatchQualified',
						editable : false,
						forceSelection : true,
						mode : 'local',

						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						},
						emptyText : '--请选择--'
					}/*
						 * , { xtype : 'combobox', anchor : '75%', fieldLabel :
						 * '批次判定', triggerAction : "all", store : new
						 * Ext.data.ArrayStore({ fields : ['mykey', 'myvalue'],
						 * data : [['Y', '合格'], ['N', '不合格']] }), valueField :
						 * 'mykey', displayField : 'myvalue', hiddenName :
						 * 'condition/isBatchQualified', name :
						 * 'condition/isBatchQualified', editable : false,
						 * forceSelection : true, mode : 'local',
						 * 
						 * listeners : { "expand" : function(A) { this.reset() } },
						 * emptyText : '--请选择--' } , { xtype : 'dictcombobox',
						 * name : 'condition/isBatchValid', hiddenName :
						 * 'condition/isBatchValid', fieldLabel : '批次验证', anchor :
						 * '75%', dictData : ABF_YESORNO }, { xtype :
						 * 'displayfield', height : '5', colspan : 4 }
						 */, {
						xtype : 'dictcombobox',
						name : 'condition/isWx',
						hiddenName : 'condition/isWx',
						fieldLabel : '是否外销',
						anchor : '75%',
						dictData : ABF_YESORNO
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'dictcombobox',
						name : 'condition/ifPerFlag',
						hiddenName : 'condition/ifPerFlag',
						fieldLabel : '是否已批次<br>性能判定',
						anchor : '75%',
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
		this.listPanel = new Ext.fn.EditListPanel({
			title : '【膜片质检判定列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [/*
					 * { text : '批次判定', scope : this, iconCls :
					 * 'icon-application_edit', handler : this.onJudgeBatch }
					 */{
						text : '质检判定',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onJudge
					}],
			id : 'timojudge-list',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'lineName',
						header : '生产线'
					}, {
						dataIndex : 'isWxName',
						header : '是否外销'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度'
					}, {
						dataIndex : 'mpd',
						header : 'C21浓度'
					}, {
						dataIndex : 'batchPerfFlagName',
						header : '批次性能等级'
					}, {
						dataIndex : 'isBatchQualifiedName',
						header : '批次合格'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumoJudgeByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'recordId'
						}, {
							name : 'batchNo'
						}, {
							name : 'lineId'
						}, {
							name : 'specId'
						}, {
							name : 'isWx'
						}, {
							name : 'lineCode'
						}, {
							name : 'lineName'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'isWxName'
						}, {
							name : 'usefulLength'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'tagNum'
						}, {
							name : 'tagLength'
						}, {
							name : 'thickMax'
						}, {
							name : 'thickMin'
						}, {
							name : 'thickAvg'
						}, {
							name : 'produceRemark'
						}, {
							name : 'batchPerfFlagId'
						}, {
							name : 'batchPerfFlagName'
						}, {
							name : 'isBatchQualified'
						}, {
							name : 'isBatchQualifiedName'
						}, {
							name : 'mpd'
						}]
			})
		})
	}
	this.initEditWindow = function() {

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【样块性能列表】',
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : false,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'macName',
						header : '测试台'
					}, {
						dataIndex : 'positionLength',
						header : '取样位置'
					}, {
						dataIndex : 'gfdAvg',
						header : '膜通量均值'
					}, {
						dataIndex : 'saltRejection',
						header : '脱盐率%'
					}, {
						dataIndex : 'recheckName',
						header : '首/复检'
					}, {
						dataIndex : 'perfFlagName',
						header : '样块性能等级'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumocheckByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'macName'
						}, {
							name : 'batchNo'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'usefulLength'
						}, {
							name : 'lineCode'
						}, {
							name : 'isWxName'
						}, {
							name : 'produceDate'
						}, {
							name : 'positionLength'
						}, {
							name : 'gfdAvg'
						}, {
							name : 'saltRejection'
						}, {
							name : 'recheckName'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'batchPerfFlagName'
						}, {
							name : 'appearance'
						}, {
							name : 'orderNo'
						}, {
							name : 'wfSupplierName'
						}, {
							name : 'tagNum'
						}, {
							name : 'tagLength'
						}, {
							name : 'thickAvg'
						}, {
							name : 'thickMin'
						}, {
							name : 'thickMax'
						}, {
							name : 'judgerName'
						}, {
							name : 'isBatchQualifiedName'
						}, {
							name : 'gfdStr'
						}, {
							name : 'conductivityIn'
						}, {
							name : 'conductivityStr'
						}, {
							name : 'isValidName'
						}, {
							name : 'checkerName'
						}, {
							name : 'checkTime'
						}, {
							name : 'judgeTime'
						}, {
							name : 'produceRemark'
						}, {
							name : 'remark'
						}, {
							name : 'judgeRemark'
						}, {
							name : 'materSpecName'
						}, {
							name : 'batchId'
						}, {
							name : 'recordId'
						}]
			})
		})

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 420,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			loadUrl : 'com.keensen.ump.produce.quality.quality.expandTumoJudge.biz.ext',
			saveUrl : 'com.keensen.ump.produce.quality.quality.saveTumoCheck.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>外观判定</span>",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'tagNum',
						name:'tagNum',
						readOnly : true,
						fieldLabel : '标签数',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'tagLength',
						name : 'tagLength',
						readOnly : true,
						fieldLabel : '标签长度m',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textarea',
						dataIndex : 'produceRemark',
						readOnly : true,
						fieldLabel : '异常备注',
						anchor : '95%',
						height : 50,
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'mpd',
						readOnly : true,
						fieldLabel : 'C21浓度',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'combobox',
						allowBlank : false,
						dataIndex : 'appearanceIsQualified',
						anchor : '95%',
						colspan : 2,
						fieldLabel : '外观是否合格',
						triggerAction : "all",
						store : this.validStore,
						valueField : 'mykey',
						displayField : 'myvalue',
						hiddenName : 'entity/appearanceIsQualified',
						name : 'entity/appearanceIsQualified',
						editable : false,
						forceSelection : true,
						mode : 'local',

						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						},
						emptyText : '--请选择--'
					}, {
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>厚度判定</span>",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'thickMin',
						readOnly : true,
						fieldLabel : '厚度(最小)',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'thickMax',
						readOnly : true,
						fieldLabel : '厚度(最大)',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'thickAvg',
						readOnly : true,
						fieldLabel : '厚度(平均)',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'combobox',
						allowBlank : false,
						dataIndex : 'thickIsQualified',
						anchor : '95%',
						colspan : 2,
						fieldLabel : '厚度是否合格',
						triggerAction : "all",
						store : this.validStore,
						valueField : 'mykey',
						displayField : 'myvalue',
						hiddenName : 'entity/thickIsQualified',
						name : 'entity/thickIsQualified',
						editable : false,
						forceSelection : true,
						mode : 'local',

						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						},
						emptyText : '--请选择--'
					}, {
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>综合批次判定</span>",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'batchNo',
						name : 'entity/batchNo',
						fieldLabel : '膜片批号号',
						readOnly : true,
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						name : 'entity/orderNo',
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'mpperfcombobox',
						allowBlank : false,
						hiddenName : 'entity/perfFlagId',
						name : 'entity/perfFlagId',
						dataIndex : 'batchPerfFlagId',
						anchor : '95%',
						colspan : 2,
						fieldLabel : '批次等级'
					}, {
						xtype : 'combobox',
						allowBlank : false,
						dataIndex : 'isBatchQualified',
						anchor : '95%',
						colspan : 2,
						fieldLabel : '是否合格',
						triggerAction : "all",
						store : this.validStore,
						valueField : 'mykey',
						displayField : 'myvalue',
						hiddenName : 'entity/isQualified',
						name : 'entity/isQualified',
						editable : false,
						forceSelection : true,
						mode : 'local',

						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						},
						emptyText : '--请选择--'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textarea',
						dataIndex : 'judgeRemark',
						name : 'entity/judgeRemark',
						fieldLabel : '判定说明',
						anchor : '95%',
						height : 50,
						colspan : 4
					}, {
						xtype : 'hidden',
						name : 'entity/recordId',
						dataIndex : 'recordId'
					}, {
						xtype : 'hidden',
						name : 'entity/judgerId',
						value : operatorid
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel.form.reset();
							this.editWindow.hide();
						}
					}]

		})

		this.editWindow = this.editWindow || new Ext.Window({
					title : '膜片质检判定',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					layout : 'border',
					items : [this.editPanel, this.listPanel2]

				});

	}
}