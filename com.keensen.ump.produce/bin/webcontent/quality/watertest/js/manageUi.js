com.keensen.ump.produce.quality.WaterTestMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initAddWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'hhwatertestmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.isProdQualifiedStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['NG', 'NG'], ['合格', '合格']]
				});

		this.waterStdStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.quality2.qaueryWaterStd.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'recordId'
					}, {
						name : 'mpSpecId'
					}, {
						name : 'prodSpecId'
					}, {
						name : 'aGpdLowLimit'
					}, {
						name : 'aGpdUpLimit'
					}, {
						name : 'aGpdCenter'
					}, {
						name : 'aSaltLowLimit'
					}, {
						name : 'aSaltUpLimit'
					}, {
						name : 'aFactorBLowLimit'
					}, {
						name : 'aFactorBUpLimit'
					}, {
						name : 'bSpecId'
					}, {
						name : 'bGpdLowLimit'
					}, {
						name : 'bGpdUpLimit'
					}, {
						name : 'bGpdCenter'
					}, {
						name : 'bSaltLowLimit'
					}, {
						name : 'bSaltUpLimit'
					}, {
						name : 'bFactorBLowLimit'
					}, {
						name : 'bFactorBUpLimit'
					}, {
						name : 'createDt'
					}, {
						name : 'changeDt'
					}, {
						name : 'creatorId'
					}, {
						name : 'changerId'
					}, {
						name : 'remark'
					}, {
						name : 'mpSpecCode'
					}, {
						name : 'prodSpecCode'
					}, {
						name : 'prodSpecName'
					}, {
						name : 'area'
					}, {
						name : 'denseNet'
					}, {
						name : 'bSpecCode'
					}, {
						name : 'bSpecName'
					}, {
						name : 'componentSpec'
					}, {
						name : 'testLiquid'
					}, {
						name : 'density'
					}, {
						name : 'pressure'
					}, {
						name : 'tempreture'
					}, {
						name : 'ph'
					}, {
						name : 'recovery'
					}]
		})
	}

	this.initQueryPanel = function() {

		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
			height : 110,
			columns : 4,
			border : true,
			id : 'watertestmgrqueryform',
			// collapsible : true,
			titleCollapse : false,
			fields : [{
						xtype : 'datefield',
						name : 'condition/testTimeStart',
						fieldLabel : '测试时间',
						colspan : 1,
						anchor : '85%',
						// allowBlank : false,
						editable : true,
						format : 'Y-m-d'
					}, {
						xtype : 'datefield',
						name : 'condition/testTimeEnd',
						fieldLabel : '至',
						colspan : 1,
						anchor : '85%',
						editable : true,
						format : 'Y-m-d'
					}, {
						xtype : 'testtypecombo',
						hiddenName : 'condition/testTypeId',
						anchor : '85%',
						fieldLabel : '检测类型',

						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/testSpecId',
						ref : '../testSpecId',
						anchor : '85%',
						fieldLabel : '元件型号',
						typeAhead : true,
						lazyRender : true,
						// typeAheadDelay : 100,
						minChars : 1,
						mode : 'local',
						// anyMatch : true,
						// lastQuery : '',
						forceSelection : true,
						editable : true,
						queryDelay : 200,// 查询延时，毫秒,
						listeners : {
							'focus' : {
								fn : function(e) {
									e.expand();
									this.doQuery(this.allQuery, true);
								},
								buffer : 200
							},
							"expand" : function(A) {
								// this.reset()
							},
							'beforequery' : function(e) {
								var combo = _this.queryPanel.testSpecId, size = 15, idx = 1;

								if (e.query === '' || e.query == null) {// 当输入框删除内容后，清除过滤器，
									// 显示原本store数据,使其能够再次检索
									combo.store.clearFilter();
									combo.expand();

								} else {
									if (!e.forceAll) {

										combo.store.clearFilter();// 使每次输入都能进行检索，不用担心输入过慢
										var input = e.query;
										// 检索的正则
										var regExp = new RegExp(".*" + input
												+ ".*");
										// 执行检索
										combo.store.filterBy(function(record,
														id) {
													if (idx > size) {
														return false;
													}
													var text = record
															.get(combo.displayField);
													var flag = regExp
															.test(text);
													if (flag) {
														idx++;
													}
													return flag;
												});
										combo.expand();
										return false;
									}
								}
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'combo',
						mode : 'local',
						fieldLabel : '判定',
						ref : '../isProdQualified',
						hiddenName : 'condition/isProdQualified',
						anchor : '85%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : _this.isProdQualifiedStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.queryPanel.isProdQualified.reset()
							}
						}
					}, {
						name : 'condition/batchNo',
						xtype : 'textfield',
						fieldLabel : '膜片批次%-%',
						anchor : '85%'
					}]
		});

		this.queryPanel.addButton({
					text : "导出",
					// rescode : '10002661',
					hidden : true,
					id : hwatertestExportButton,
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
			viewConfig : {
		// forceFit : true
			},
			hsPage : true,
			id : 'watertestmgrlist',
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.hwatertest.deleteWaterTest.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'testTime',
						header : '测试时间 '
					}, {
						dataIndex : 'testSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'testTypeName',
						header : '检测类型'
					}, {
						dataIndex : 'jName',
						header : '卷制员'
					}, {
						dataIndex : 'vacuumValue',
						header : '真空下降值'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'sn',
						header : '序号'
					}, {
						dataIndex : 'testPos',
						header : '测试位置'
					}, {
						dataIndex : 'pressure',
						header : '压力'
					}, {
						dataIndex : 'conductivity',
						header : '进水电导率'
					}, {
						dataIndex : 'tempreture',
						header : '温度'
					}, {
						dataIndex : 'conductivity2',
						header : '产水电导率'
					}, {
						dataIndex : 'flow',
						header : '产水流量'
					}, {
						dataIndex : 'flow2',
						header : '浓水流量'
					}, {
						dataIndex : 'gpd',
						header : '产水量'
					}, {
						dataIndex : 'salt',
						header : '脱盐率%'
					}, {
						dataIndex : 'prodGpdStd',
						header : '标准产水量gpd'
					}, {
						dataIndex : 'prodSaltStd',
						header : '标准脱盐率%'
					}, {
						dataIndex : 'isProdQualified',
						header : '单品判定'
					}, {
						dataIndex : 'wetSpecName',
						header : '湿膜元件型号'
					}, {
						dataIndex : 'wetBatchNo',
						header : '湿膜序列号'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.hwatertest.queryWaterTestByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
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
							name : 'batchNo'
						}, {
							name : 'isBatchQualified'
						}, {
							name : 'isProdQualified'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'testSpecId'
						}, {
							name : 'testSpecName'
						}, {
							name : 'prodBatchNo'
						}, {
							name : 'testPos'
						}, {
							name : 'testTime'
						}, {
							name : 'testLiquid'
						}, {
							name : 'density'
						}, {
							name : 'pressure'
						}, {
							name : 'tempreture'
						}, {
							name : 'ph'
						}, {
							name : 'recovery'
						}, {
							name : 'gpd'
						}, {
							name : 'salt'
						}, {
							name : 'prodGpdStd'
						}, {
							name : 'prodSaltStd'
						}, {
							name : 'testTypeId'
						}, {
							name : 'testTypeName'
						}, {
							name : 'vacuumValue'
						}, {
							name : 'sn'
						}, {
							name : 'wetSpecName'
						}, {
							name : 'wetBatchNo'
						}, {
							name : 'jName'
						}, {
							name : 'conductivity'
						}, {
							name : 'conductivity2'
						}, {
							name : 'flow'
						}, {
							name : 'flow2'
						}, {
							name : 'remark'
						}]
			})
		})
	}

	this.initAddWindow = function() {
		var _this = this;
		this.addWindow = this.addWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				// autoHide : false,
				columns : 24,
				saveUrl : 'com.keensen.ump.produce.quality.hwatertest.saveWaterTest.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检测信息</span>",
							colspan : 24
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							value : new Date(),
							name : 'entity/testTime',
							ref : '../../testTime',
							fieldLabel : '检测时间',
							allowBlank : false,
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'prodspeccombobox',
							emptyText : '',
							hiddenName : 'entity/testSpecId',
							anchor : '95%',
							colspan : 12,
							ref : '../../testSpecId',
							allowBlank : false,
							fieldLabel : '元件型号',
							listeners : {
								"expand" : function(A) {
									this.reset()
								},
								'select' : function(combo, record, index) {
									if (index > -1) {
										var testSpecId = combo.getValue();
										var i = _this.waterStdStore.find(
												'prodSpecId', testSpecId, 0,
												false);
										var rec = _this.waterStdStore.getAt(i);
										var bGpdLowLimit = rec
												.get('bGpdLowLimit');
										var bSaltLowLimit = rec
												.get('bSaltLowLimit');

										_this.addWindow.prodGpdStd
												.setValue(bGpdLowLimit);
										_this.addWindow.prodSaltStd
												.setValue(bSaltLowLimit);
										//_this.getGpd();
										//_this.getSalt();
										//_this.onCalc();
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testtypecombo',
							hiddenName : 'entity/testTypeId',
							ref : '../../testTypeId',
							anchor : '95%',
							colspan : 12,
							allowBlank : false,
							fieldLabel : '检测类型',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../jName',
							name : 'entity/jName',
							allowBlank : false,
							fieldLabel : '卷制员'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../vacuumValue',
							name : 'entity/vacuumValue',
							allowBlank : false,
							fieldLabel : '真空下降值'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../batchNo',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '膜批号'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../sn',
							name : 'entity/sn',
							// allowBlank : false,
							fieldLabel : '序号'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../testPos',
							name : 'entity/testPos',
							// allowBlank : false,
							fieldLabel : '测试位置'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../pressure',
							name : 'entity/pressure',
							allowBlank : false,
							fieldLabel : '压力psi'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>国标液</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../conductivity',
							name : 'entity/conductivity',
							allowBlank : false,
							fieldLabel : '进水电导率us/cm',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getSalt();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../tempreture',
							name : 'entity/tempreture',
							allowBlank : false,
							fieldLabel : '温度',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getGpd();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../conductivity2',
							name : 'entity/conductivity2',
							allowBlank : false,
							fieldLabel : '产水电导率us/cm',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getSalt();
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../flow',
							name : 'entity/flow',
							allowBlank : false,
							fieldLabel : '产水流量ml/min',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getGpd();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../flow2',
							name : 'entity/flow2',
							allowBlank : false,
							fieldLabel : '浓水流量ml/min'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../gpd',
							name : 'entity/gpd',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '产水量'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../salt',
							name : 'entity/salt',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '脱盐率%'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>标准</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../prodGpdStd',
							name : 'entity/prodGpdStd',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '产水量'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../prodSaltStd',
							name : 'entity/prodSaltStd',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '脱盐率%'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>判定</span>",
							colspan : 24
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮计算',
							name : 'entity/isProdQualified',
							dataIndex : 'isProdQualified',
							ref : '../../isProdQualified',
							// readOnly : true,
							allowBlank : false,
							editable : false,
							fieldLabel : '判定',
							// readOnly : true,
							anchor : '95%',
							colspan : 12,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc();
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'textarea',
							anchor : '95%',
							colspan : 24,
							ref : '../../remark',
							name : 'entity/remark',
							fieldLabel : '备注'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../wetSpecName',
							name : 'entity/wetSpecName',
							fieldLabel : '湿膜元件型号'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../wetBatchNo',
							name : 'entity/wetBatchNo',
							fieldLabel : '湿膜序列号'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				// autoHide : false,
				columns : 24,
				loadUrl : 'com.keensen.ump.produce.quality.hwatertest.expandWaterTest.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.hwatertest.saveWaterTest.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检测信息</span>",
							colspan : 24
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							//value : new Date(),
							name : 'entity/testTime',
							dataIndex : 'testTime',
							ref : '../../testTime',
							fieldLabel : '检测时间',
							allowBlank : false,
							anchor : '95%',
							colspan : 12
						}, {
							xtype : 'prodspeccombobox',
							emptyText : '',
							hiddenName : 'entity/testSpecId',
							dataIndex : 'testSpecId',
							anchor : '95%',
							colspan : 12,
							ref : '../../testSpecId',
							allowBlank : false,
							fieldLabel : '元件型号',
							listeners : {
								"expand" : function(A) {
									this.reset()
								},
								'select' : function(combo, record, index) {
									if (index > -1) {
										var testSpecId = combo.getValue();
										var i = _this.waterStdStore.find(
												'prodSpecId', testSpecId, 0,
												false);
										var rec = _this.waterStdStore.getAt(i);
										var bGpdLowLimit = rec
												.get('bGpdLowLimit');
										var bSaltLowLimit = rec
												.get('bSaltLowLimit');

										_this.editWindow.prodGpdStd
												.setValue(bGpdLowLimit);
										_this.editWindow.prodSaltStd
												.setValue(bSaltLowLimit);
										_this.getGpd();
										_this.getSalt();
										_this.onCalc();
									}
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testtypecombo',
							hiddenName : 'entity/testTypeId',
							dataIndex : 'testTypeId',
							ref : '../../testTypeId',
							anchor : '95%',
							colspan : 12,
							allowBlank : false,
							fieldLabel : '检测类型',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../jName',
							name : 'entity/jName',
							dataIndex : 'jName',
							allowBlank : false,
							fieldLabel : '卷制员'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../vacuumValue',
							dataIndex : 'vacuumValue',
							name : 'entity/vacuumValue',
							allowBlank : false,
							fieldLabel : '真空下降值'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../batchNo',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '膜批号'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../sn',
							name : 'entity/sn',
							dataIndex : 'sn',
							// allowBlank : false,
							fieldLabel : '序号'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../testPos',
							name : 'entity/testPos',
							dataIndex : 'testPos',
							// allowBlank : false,
							fieldLabel : '测试位置'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../pressure',
							name : 'entity/pressure',
							dataIndex : 'pressure',
							allowBlank : false,
							fieldLabel : '压力psi'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>国标液</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../conductivity',
							name : 'entity/conductivity',
							dataIndex : 'conductivity',
							allowBlank : false,
							fieldLabel : '进水电导率us/cm',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getSalt();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../tempreture',
							name : 'entity/tempreture',
							dataIndex : 'tempreture',
							allowBlank : false,
							fieldLabel : '温度',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getGpd();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../conductivity2',
							name : 'entity/conductivity2',
							dataIndex : 'conductivity2',
							allowBlank : false,
							fieldLabel : '产水电导率us/cm',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getSalt();
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../flow',
							name : 'entity/flow',
							dataIndex : 'flow',
							allowBlank : false,
							fieldLabel : '产水流量ml/min',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									_this.getGpd();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../flow2',
							name : 'entity/flow2',
							dataIndex : 'flow2',
							allowBlank : false,
							fieldLabel : '浓水流量ml/min'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../gpd',
							name : 'entity/gpd',
							dataIndex : 'gpd',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '产水量'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../salt',
							name : 'entity/salt',
							dataIndex : 'salt',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '脱盐率%'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>标准</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../prodGpdStd',
							name : 'entity/prodGpdStd',
							dataIndex : 'prodGpdStd',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '产水量'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../prodSaltStd',
							name : 'entity/prodSaltStd',
							dataIndex : 'prodSaltStd',
							readOnly : true,
							allowBlank : false,
							fieldLabel : '脱盐率%'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>判定</span>",
							colspan : 24
						}, {
							xtype : 'trigger',
							emptyText : '单击旁边按钮计算',
							name : 'entity/isProdQualified',
							dataIndex : 'isProdQualified',
							ref : '../../isProdQualified',
							// readOnly : true,
							allowBlank : false,
							editable : false,
							fieldLabel : '判定',
							// readOnly : true,
							anchor : '95%',
							colspan : 12,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onCalc();
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'textarea',
							anchor : '95%',
							colspan : 24,
							ref : '../../remark',
							dataIndex : 'remark',
							name : 'entity/remark',
							fieldLabel : '备注'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../wetSpecName',
							dataIndex : 'wetSpecName',
							name : 'entity/wetSpecName',
							fieldLabel : '湿膜元件型号'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 12,
							ref : '../../wetBatchNo',
							name : 'entity/wetBatchNo',
							dataIndex : 'wetBatchNo',
							fieldLabel : '湿膜序列号'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]

		});
	}

}