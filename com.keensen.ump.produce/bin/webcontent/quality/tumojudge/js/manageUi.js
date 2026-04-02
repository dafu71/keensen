com.keensen.ump.produce.quality.timojudgeMgr = function() {
	this.initPanel = function() {

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.validStore = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [['Y', '合格'], ['N', '不合格']]
				});
		this.applyStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.apply.queryDiaphragmApply.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {
				'condition/isJudged' : 'N'
			},
			fields : [{
						name : 'id'
					}, {
						name : 'title'
					}]
		})
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		this.initInputWindow();

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
					// title : '【膜片质检判定查询】',
					fields : [{
						xtype : "dateregion",
						colspan : 1,
						anchor : '100%',
						nameArray : ['condition/produceDtStart',
								'condition/produceDtEnd'],
						fieldLabel : "生产日期",
						format : "Y-m-d"
					}, {
						xtype : 'mplinecombobox',
						hiddenName : 'condition/lineId',
						anchor : '100%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '100%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'textfield',
						name : 'condition/batchNoStr',
						anchor : '100%',
						fieldLabel : '膜片批次'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'prodflagselcombobox',
						hiddenName : 'condition/prodFlagId',
						anchor : '100%',
						fieldLabel : '生产类型'
					}, {
						xtype : 'mpperfcombobox',
						hiddenName : 'condition/batchPerfFlagId',
						anchor : '100%',
						fieldLabel : '批次性能'
					}, {
						xtype : 'combobox',
						anchor : '100%',
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
						anchor : '100%',
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
						anchor : '100%',
						dictData : ABF_YESORNO
					}, {
						xtype : 'combobox',
						anchor : '100%',
						fieldLabel : '选择请检单',
						triggerAction : "all",
						store : this.applyStore,
						valueField : 'id',
						displayField : 'title',
						hiddenName : 'condition/applyId',
						name : 'condition/applyId',
						editable : false,
						forceSelection : true,
						mode : 'local',
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						},
						emptyText : '--请选择--',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'condition/title',
						anchor : '100%',
						fieldLabel : '请检单'
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "更新请检单状态",
					scope : this,
					iconCls : 'icon-application_form_edit',
					handler : this.onUpdateApplyIsJudged
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.EditListPanel({
			// title : '【膜片质检判定列表】',
			viewConfig : {
				forceFit : false
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
					}, '->', {
						text : '查看涂膜不良记录',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.defectView
					}, '-', {
						text : '查看底膜不良记录',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.defectView2
					}, '-', {
						text : '膜片降级',
						scope : this,
						hidden : true,
						iconCls : 'icon-application_edit',
						handler : this.onReduce
					}],
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						sortable : true,
						header : '膜片批号'
					}, {
						dataIndex : 'title',
						sortable : true,
						header : '请检单'
					}, {
						dataIndex : 'materSpecName',
						sortable : true,
						header : '膜片型号'
					}, {
						dataIndex : 'trend',
						sortable : true,
						header : '走向'
					}, {
						dataIndex : 'lineName',
						sortable : true,
						header : '生产线'
					}, {
						dataIndex : 'isWxName',
						sortable : true,
						header : '是否外销'
					}, {
						dataIndex : 'qualifidLength',
						sortable : true,
						header : '合格长度'
					}, {
						dataIndex : 'usefulLength',
						sortable : true,
						header : '可用长度'
					}, {
						dataIndex : 'mpd',
						header : 'C21浓度'
					}, {
						header : 'b*均值',
						width : 150,
						width : 70,
						dataIndex : 'colorbAvg'
					}, {
						header : 'b*是否合格',
						width : 100,
						renderer : function(v, m, r, i) {

							var colorbOk = r.get('colorbOk');
							var colorbAvg = r.get('colorbAvg');
							if (colorbAvg == 0)
								return '';

							if (colorbOk == '不合格') {
								return "<span style='color:red'>" + '不合格'
										+ "</span>";
							}
							return colorbOk;

						}
					}, {
						dataIndex : 'rGfdAvg',
						header : '复测膜通量'
					}, {
						dataIndex : 'rSaltRejection',
						header : '复测脱盐率'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号'
					}, {
						dataIndex : 'produceRemark',
						header : '生产备注'
					}, {
						dataIndex : 'perfIsQualifiedName',
						header : '性能判定'
					}, {
						dataIndex : 'batchPerfFlagName',
						header : '综合批次等级'
					}, {
						dataIndex : 'isBatchQualifiedName',
						header : '综合批次合格'
					}, {
						dataIndex : 'reduce',
						header : '降级原因'
					}, {
						dataIndex : 'reduceDt',
						header : '降级时间'
					}, {
						dataIndex : 'judgeTime',
						header : '判定时间'
					}, {
						dataIndex : 'judgerName',
						// hidden:true,
						header : '判定人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumoJudgeByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'zmId'
						},{
							name : 'dimoBatchNo'
						},{
							name : 'defectAdvise'
						},{
							name : 'isAPlus'
						}, {
							name : 'aPlusLength'
						}, {
							name : 'isReport'
						},{
							name : 'gyyRemark'
						}, {
							name : 'defectNotearLength'
						}, {
							name : 'colorbAvg'
						}, {
							name : 'colorbOk'
						}, {
							name : 'defectPicture'
						}, {
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
						}, {
							name : 'orderNo'
						}, {
							name : 'rGfdAvg'
						}, {
							name : 'rSaltRejection'
						}, {
							name : 'trend'
						}, {
							name : 'title'
						}, {
							name : 'reduce'
						}, {
							name : 'reduceDt'
						}, {
							name : 'perfIsQualifiedName'
						}, {
							name : 'judgerName'
						},{
							name : 'judgeTime'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		var _this = this;
		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			// title : '【样块性能列表】',
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
			height : 500,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			loadUrl : 'com.keensen.ump.produce.quality.quality.expandTumoJudge.biz.ext',
			saveUrl : 'com.keensen.ump.produce.quality.quality.saveTumoCheck3.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>外观判定</span>",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'mpd',
						ref : '../mpd',
						readOnly : true,
						fieldLabel : 'C21浓度',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'combobox',
						allowBlank : false,
						dataIndex : 'mpdIsQualified',
						ref : '../mpdIsQualified',
						anchor : '100%',
						colspan : 1,
						fieldLabel : 'C21是否合格',
						triggerAction : "all",
						store : this.validStore,
						valueField : 'mykey',
						displayField : 'myvalue',
						hiddenName : 'entity/mpdIsQualified',
						name : 'entity/mpdIsQualified',
						editable : false,
						readOnly : true,
						forceSelection : true,
						mode : 'local',

						listeners : {
							"expand" : function(A) {
								// this.reset()
							},
							"select" : function(combo, record) {
								var isBatchQualified = _this.editPanel.form
										.findField('isBatchQualified2')
										.getValue();
								var mpdIsQualified = combo.getValue();
								var thickIsQualified = _this.editPanel.form
										.findField('entity/thickIsQualified')
										.getValue();
								var appearanceIsQualified = _this.editPanel.form
										.findField('entity/appearanceIsQualified')
										.getValue();
								if ("N" == mpdIsQualified) {
									_this.editPanel.form
											.findField('entity/isQualified')
											.setValue("N");
									_this.editPanel.form
											.findField('entity/isQualified')
											.fireEvent('change');
									_this.editPanel.form
											.findField('entity/perfFlagId')
											.setValue("300032");
									_this.editPanel.form
											.findField('entity/perfFlagId')
											.fireEvent('change');
								} else {
									if ("Y" == isBatchQualified
											&& "Y" == thickIsQualified
											&& "Y" == appearanceIsQualified) {

										_this.editPanel.form
												.findField('entity/isQualified')
												.setValue("Y");
										_this.editPanel.form
												.findField('entity/isQualified')
												.fireEvent('change');
										_this.editPanel.form
												.findField('entity/perfFlagId')
												.setValue("300029");
										_this.editPanel.form
												.findField('entity/perfFlagId')
												.fireEvent('change');
									}
								}
							}
						},
						emptyText : '--请选择--'
					}, {

						xtype : 'combo',
						fieldLabel : '保留品',
						dataIndex : 'isKeep',
						ref : '../isKeep',
						hiddenName : 'entity/isKeep',
						value : 'N',
						emptyText : '--请选择--',
						allowBlank : true,
						readOnly : true,
						colspan : 1,
						anchor : '95%',
						store : [[null, '全部'], ['Y', '是'], ['N', '否']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.editPanel.isKeep.reset();
							}
						}

					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'tagNum',
						ref : '../tagNum',
						name : 'tagNum',
						readOnly : true,
						fieldLabel : '标签数',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textfield',
						dataIndex : 'tagLength',
						ref : '../tagLength',
						name : 'tagLength',
						readOnly : true,
						fieldLabel : '标签长度m',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textfield',
						dataIndex : 'colorbAvg',
						ref : '../colorbAvg',
						name : 'colorbAvg',
						readOnly : true,
						fieldLabel : '色差b*',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textfield',
						dataIndex : 'colorbOk',
						ref : '../colorbOk',
						name : 'colorbOk',
						readOnly : true,
						fieldLabel : 'b*是否合格',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'defectNotearLength',
						ref : '../defectNotearLength',
						name : 'defectNotearLength',
						readOnly : true,
						fieldLabel : '未扯且边距<br>大于4cm长度',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textfield',
						dataIndex : 'defectAdvise',
						ref : '../defectAdvise',
						name : 'defectAdvise',
						readOnly : true,
						fieldLabel : '使用意见',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textarea',
						dataIndex : 'produceRemark',
						ref : '../produceRemark',
						readOnly : true,
						fieldLabel : '异常备注',
						anchor : '95%',
						height : 30,
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'combobox',
						allowBlank : false,
						dataIndex : 'appearanceIsQualified',
						anchor : '95%',
						colspan : 2,
						fieldLabel : '外观是否能发货',
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
								// this.reset()
							},
							"select" : function(combo, record) {

								return;
								/*
								 * var isBatchQualified = _this.editPanel.form
								 * .findField('isBatchQualified2') .getValue();
								 * var appearanceIsQualified = combo.getValue();
								 * var thickIsQualified = _this.editPanel.form
								 * .findField('entity/thickIsQualified')
								 * .getValue(); var mpdIsQualified =
								 * _this.editPanel.mpdIsQualified .getValue();
								 * if ("N" == appearanceIsQualified) {
								 * _this.editPanel.form
								 * .findField('entity/isQualified')
								 * .setValue("N"); _this.editPanel.form
								 * .findField('entity/isQualified')
								 * .fireEvent('change'); _this.editPanel.form
								 * .findField('entity/perfFlagId')
								 * .setValue("300032"); _this.editPanel.form
								 * .findField('entity/perfFlagId')
								 * .fireEvent('change'); } else { if ("Y" ==
								 * isBatchQualified && "Y" == thickIsQualified &&
								 * "Y" == mpdIsQualified) { _this.editPanel.form
								 * .findField('entity/isQualified')
								 * .setValue("Y"); _this.editPanel.form
								 * .findField('entity/isQualified')
								 * .fireEvent('change'); _this.editPanel.form
								 * .findField('entity/perfFlagId')
								 * .setValue("300029"); _this.editPanel.form
								 * .findField('entity/perfFlagId')
								 * .fireEvent('change'); } }
								 */
							}
						},
						emptyText : '--请选择--'
					},
					{
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>厚度判定</span>",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'thickMin',
						readOnly : true,
						fieldLabel : '厚度(最小)',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textfield',
						dataIndex : 'thickMax',
						readOnly : true,
						fieldLabel : '厚度(最大)',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textfield',
						dataIndex : 'thickAvg',
						readOnly : true,
						fieldLabel : '厚度(平均)',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'combobox',
						allowBlank : false,
						dataIndex : 'thickIsQualified',
						anchor : '100%',
						colspan : 1,
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
								// this.reset()
							},
							"select" : function(combo, record) {
								var isBatchQualified = _this.editPanel.form
										.findField('isBatchQualified2')
										.getValue();
								var thickIsQualified = combo.getValue();
								var appearanceIsQualified = _this.editPanel.form
										.findField('entity/appearanceIsQualified')
										.getValue();
								var mpdIsQualified = _this.editPanel.mpdIsQualified
										.getValue();
								if ("N" == thickIsQualified) {
									_this.editPanel.form
											.findField('entity/isQualified')
											.setValue("N");
									_this.editPanel.form
											.findField('entity/isQualified')
											.fireEvent('change');
									_this.editPanel.form
											.findField('entity/perfFlagId')
											.setValue("300032");
									_this.editPanel.form
											.findField('entity/perfFlagId')
											.fireEvent('change');
								} else {
									if ("Y" == isBatchQualified
											&& "Y" == appearanceIsQualified
											&& "Y" == mpdIsQualified) {
										_this.editPanel.form
												.findField('entity/isQualified')
												.setValue("Y");
										_this.editPanel.form
												.findField('entity/isQualified')
												.fireEvent('change');
										_this.editPanel.form
												.findField('entity/perfFlagId')
												.setValue("300029");
										_this.editPanel.form
												.findField('entity/perfFlagId')
												.fireEvent('change');
									}
								}
							}
						},
						emptyText : '--请选择--'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'qualifidLength',
						ref : '../qualifidLength',
						readOnly : true,
						fieldLabel : '合格长度',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>性能判定</span>",
						colspan : 4
					}, {
						xtype : 'dictcombobox',
						name : 'entity/perfIsQualified',
						hiddenName : 'entity/perfIsQualified',
						dataIndex : 'perfIsQualified',
						ref : '../perfIsQualified',
						fieldLabel : '是否合格',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>综合批次判定</span>",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'batchNo',
						ref : '../batchNo',
						name : 'entity/batchNo',
						fieldLabel : '膜片批号',
						readOnly : true,
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						//name : 'entity/orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'mpperfcombobox',
						allowBlank : false,
						hiddenName : 'entity/perfFlagId',
						ref : '../perfFlagId',
						name : 'entity/perfFlagId',
						dataIndex : 'batchPerfFlagId',
						anchor : '100%',
						colspan : 1,
						fieldLabel : '批次等级',
						listeners : {
							scope : this,
							"expand" : function(A) {
								// this.reset()
							},
							"change" : function(A) {
								var perfFlagId = _this.editPanel.perfFlagId
										.getValue();
								var isBatchQualified = _this.editPanel.isBatchQualified
										.getValue();
								var isKeep = _this.editPanel.isKeep.getValue();
								var isWx = _this.editPanel.isWx.getValue();
								var mpdIsQualified = _this.editPanel.mpdIsQualified
										.getValue();
								_this.editPanel.trend.setValue(trend(
										perfFlagId, isBatchQualified, isKeep,
										isWx, mpdIsQualified));
							}
						}

					}, {
						xtype : 'combobox',
						allowBlank : false,
						dataIndex : 'isBatchQualified',
						ref : '../isBatchQualified',
						anchor : '100%',
						colspan : 1,
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
							scope : this,
							"expand" : function(A) {
								// this.reset()
							},
							"change" : function(A) {
								var perfFlagId = _this.editPanel.perfFlagId
										.getValue();
								var isBatchQualified = _this.editPanel.isBatchQualified
										.getValue();
								var isKeep = _this.editPanel.isKeep.getValue();
								var isWx = _this.editPanel.isWx.getValue();
								var mpdIsQualified = _this.editPanel.mpdIsQualified
										.getValue();
								_this.editPanel.trend.setValue(trend(
										perfFlagId, isBatchQualified, isKeep,
										isWx, mpdIsQualified));
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
						height : 30,
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'trend',
						ref : '../trend',
						name : 'entity/trend',
						fieldLabel : '走向',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '是否A+等级',
						ref : '../isAPlus',
						dataIndex : 'isAPlus',
						hiddenName : 'entity/isAPlus',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.isAPlus.reset()
							},
							"change" : function(A) {
								var isAPlus = _this.editPanel.isAPlus
										.getValue();
								var qualifidLength = _this.editPanel.qualifidLength
										.getValue();
								if(isAPlus == '是'){
									_this.editPanel.aPlusLength.setValue(qualifidLength);
								}else{
									_this.editPanel.aPlusLength.setValue(0);
								}
								
							}
						}
					}, {
						xtype : 'numberfield',
						dataIndex : 'aPlusLength',
						ref : '../aPlusLength',
						dataIndex : 'aPlusLength',
						name : 'entity/aPlusLength',
						fieldLabel : 'A+品长度(m)',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '入C仓已提交<br>5why分析报告',
						ref : '../isReport',
						dataIndex : 'isReport',
						hiddenName : 'entity/isReport',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.isReport.reset()
							}
						}
					}, {
						xtype : 'textfield',
						dataIndex : 'gyyRemark',
						ref : '../gyyRemark',
						readOnly:true,
						//name : 'entity/gyyRemark',
						fieldLabel : '入C仓膜片<br>工艺意见',
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'hidden',
						name : 'entity/recordId',
						ref : '../recordId',
						dataIndex : 'recordId'
					}, {
						xtype : 'hidden',
						name : 'entity/judgerId',
						value : operatorid
					}, {
						xtype : 'hidden',
						name : 'isBatchQualified2',
						dataIndex : 'isBatchQualified'
					}, {
						xtype : 'hidden',
						ref : '../isWx',
						dataIndex : 'isWx'
					}, {
						xtype : 'hidden',
						ref : '../defectPicture',
						dataIndex : 'defectPicture'
					}, {
						xtype : 'hidden',
						ref : '../dimoBatchNo',
						dataIndex : 'dimoBatchNo'
					}, {
						xtype : 'hidden',
						ref : '../zmId',
						dataIndex : 'zmId'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					},{
						text : "驳回",
						scope : this,
						handler : this.onReject
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel.form.reset();
							this.editWindow.hide();
						}
					}, {
						text : "查看涂膜不良记录",
						scope : this,
						handler : this.defectView
					}, {
						text : "查看底膜不良记录",
						scope : this,
						handler : this.defectView2
					}, {
						text : "查看瑕疵图",
						scope : this,
						handler : this.viewDefectPicture
					}]

		})

		this.editWindow = this.editWindow || new Ext.Window({
					title : '膜片质检判定',
					height : 650,
					width : 1024,
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

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '膜片降级',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				// pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.quality.updateTumoReduce.biz.ext',
				fields : [{
							ref : '../../batchNo',
							anchor : '85%',
							colspan : 2,
							xtype : 'textarea',
							fieldLabel : '膜片批号',
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '降级原因',
							ref : '../../reduce',
							hiddenName : 'reduce',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['膜片漏气', '膜片漏气'], ['膜片性能', '膜片性能'],
									['膜片变色', '膜片变色'], ['膜片外观', '膜片外观']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.reduce.reset();
								}
							}
						}, {
							xtype : 'hidden',
							ref : '../../recordIds',
							name : 'recordIds'
						}]
			}]
		});
	}
}