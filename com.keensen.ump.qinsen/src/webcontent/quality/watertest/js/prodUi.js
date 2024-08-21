com.keensen.ump.qinsen.quality.prodMgr = function() {
	this.initPanel = function() {
		this.initReTestWindow();
		this.initModifyWindow();
		return [this.reTestWindow, this.modifyWindow];
	}

	this.initReTestWindow = function() {
		var _this = this;
		this.reTestWindow = this.reTestWindow || new Ext.fn.FormWindow({
			title : '产品水测记录-复检',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : Ext.getCmp('watertestmgrlist'),
				autoHide : false,
				successFn : function(i, r) {
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										_this.reTestWindow.hide();
									}
								})
					} else {
						Ext.Msg.alert('系统提示', '操作成功！', function() {
									var store = Ext.getCmp('watertestmgrlist').store;
									store.baseParams = Ext
											.getCmp('watertestmgrqueryform')
											.getForm().getValues();
									store.reload();
									_this.reTestWindow.hide();
								});

					}
				},
				columns : 24,
				loadUrl : 'com.keensen.ump.qinsen.watertest.expandWatertest.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.watertest.modiRecordById.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>复检信息</span>",
							colspan : 24
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../juanmoBatchNo',
							dataIndex : 'juanmoBatchNo',
							fieldLabel : '卷膜序号'
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../prodBatchNo',
							dataIndex : 'prodBatchNo',
							fieldLabel : '元件序号'
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../airResult',
							dataIndex : 'airResult',
							fieldLabel : '气检值'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							value : new Date(),
							name : 'entity/rCheckTm',
							ref : '../../rCheckTm',
							fieldLabel : '复检时间',
							allowBlank : false,
							anchor : '95%',
							colspan : 8
						}, {
							xtype : 'prodspeccombobox',
							emptyText : '',
							hiddenName : 'entity/testSpecId',
							dataIndex : 'testSpecId',
							anchor : '95%',
							colspan : 8,
							ref : '../../testSpecId',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '测试型号'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../area',
							dataIndex : 'testSpecArea',
							readOnly : true,
							fieldLabel : '膜面积'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testmaccombo',
							hiddenName : 'entity/rMacName',
							valueField : 'propValueName',
							displayField : 'propValueName',
							anchor : '95%',
							colspan : 8,
							ref : '../../rMacName',
							allowBlank : false,
							fieldLabel : '测试膜壳'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>适配量产</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../aGpdLowLimit',
							readOnly : true,
							fieldLabel : '产水量下限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../aGpdUpLimit',
							readOnly : true,
							fieldLabel : '产水量上限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							// name : 'entity/prodSaltStd',
							ref : '../../aSaltLowLimit',
							readOnly : true,
							fieldLabel : '脱盐率'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							// name : 'entity/batchFactorBStd',
							ref : '../../aFactorBUpLimit',
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>适配单品</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../bGpdLowLimit',
							readOnly : true,
							fieldLabel : '产水量下限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							// name : 'entity/prodSaltStd',
							ref : '../../bSaltLowLimit',
							readOnly : true,
							fieldLabel : '脱盐率'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>初检结果</span>",
							colspan : 24
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							dataIndex : 'fGpd',
							ref : '../../fGpd',
							fieldLabel : '产水量'
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							dataIndex : 'fSalt',
							ref : '../../fSalt',
							fieldLabel : '脱盐率%'
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							dataIndex : 'fFactorB',
							ref : '../../fFactorB',
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>复检结果</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../rGpd',
							name : 'entity/rGpd',
							allowBlank : false,
							fieldLabel : '产水量',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									_this.calcFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../rSalt',
							name : 'entity/rSalt',
							allowBlank : false,
							fieldLabel : '脱盐率%',
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									_this.calcFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../rFactorB',
							name : 'entity/rFactorB',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>判定结果</span>",
							colspan : 24
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/ifProdSpecId',
							anchor : '95%',
							colspan : 8,
							ref : '../../ifProdSpecId',
							dataIndex : 'ifProdSpecId',
							allowBlank : false,
							fieldLabel : '拟入库型号',
							listeners : {
								scope : this,

								'select' : function(combo, record, index) {
									this.loadStd();
									this.reTestWindow.markSpecName
											.setValue(combo.getRawValue());
								}
							}
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/markSpecName',
							dataIndex : 'markSpecName',
							valueField : 'name',
							displayField : 'name',
							anchor : '95%',
							colspan : 8,
							ref : '../../markSpecName',
							allowBlank : false,
							fieldLabel : '拟贴标型号'
						}, new Ext.form.ComboBox({
									ref : '../../isProdQualified',
									hiddenName : 'entity/isProdQualified',
									fieldLabel : '判定结果',
									store : new Ext.data.SimpleStore({
												fields : ['value', 'name'],
												data : [['Y', '合格'],
														['N', '不合格']]
											}),
									valueField : 'value',
									displayField : 'name',
									editable : false,
									lazyRender : true,
									mode : 'local',
									triggerAction : 'all',
									emptyText : '未判...',
									anchor : '95%',
									colspan : 8,
									readOnly : true
								}), {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 24,
							ref : '../../judgeInfo',
							fieldLabel : '自动判定信息'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'qryexecutoroptioncombobox',
							teamId : '100069',
							emptyText : '',
							hiddenName : 'entity/rCheckerId',
							anchor : '95%',
							colspan : 8,
							ref : '../../rCheckerId',
							allowBlank : false,
							fieldLabel : '分析员'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							ref : '../../remark',
							xtype : 'textarea',
							name : 'entity/remark',
							dataIndex : 'remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 24,
							allowBlank : true
						}, {
							xtype : 'hidden',
							ref : '../../recordId',
							dataIndex : 'recordId',
							name : 'entity/recordId'
						}, {
							xtype : 'hidden',
							ref : '../../juanmoBatchId',
							dataIndex : 'juanmoBatchId',
							name : 'entity/juanmoBatchId'
						}]
			}]
		});
	}

	this.initModifyWindow = function() {
		var _this = this;
		this.modifyWindow = this.modifyWindow || new Ext.fn.FormWindow({
			title : '产品水测记录-修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : Ext.getCmp('watertestmgrlist'),
				autoHide : false,
				successFn : function(i, r) {
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {
										_this.modifyWindow.hide();
									}
								})
					} else {
						Ext.Msg.alert('系统提示', '操作成功！', function() {
									var store = Ext.getCmp('watertestmgrlist').store;
									store.baseParams = Ext
											.getCmp('watertestmgrqueryform')
											.getForm().getValues();
									store.reload();
									_this.modifyWindow.hide();
								});

					}
				},
				columns : 24,
				loadUrl : 'com.keensen.ump.qinsen.watertest.expandWatertest.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.watertest.modiRecordById.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检测信息</span>",
							colspan : 24
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../juanmoBatchNo',
							dataIndex : 'juanmoBatchNo',
							fieldLabel : '卷膜序号'
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../prodBatchNo',
							dataIndex : 'prodBatchNo',
							fieldLabel : '元件序号'
						}, {
							xtype : 'testtypecombo',
							hiddenName : 'entity/testTypeId',
							anchor : '95%',
							colspan : 8,
							fieldLabel : '检测类型',
							dataIndex : 'testTypeId',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'prodspeccombobox',
							emptyText : '',
							hiddenName : 'entity/testSpecId',
							dataIndex : 'testSpecId',
							anchor : '95%',
							colspan : 8,
							ref : '../../testSpecId',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '测试型号'
						}, {
							xtype : 'displayfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../area',
							dataIndex : 'testSpecArea',
							fieldLabel : '膜面积'
						}, {
							xtype : 'numberfield',
							anchor : '95%',
							colspan : 8,
							ref : '../../temp',
							dataIndex : 'temp',
							name : 'entity/temp',
							allowBlank : false,
							fieldLabel : '测试温度'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>适配标准</span>",
							colspan : 24
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../prodGpdLowLimit',
							allowBlank : false,
							// readOnly : true,
							fieldLabel : '产水量下限'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							ref : '../../prodGpdUpLimit',
							// readOnly : true,
							fieldLabel : '产水量上限'
						}, {
							xtype : 'textfield',
							allowBlank : false,
							anchor : '95%',
							colspan : 6,
							name : 'entity/prodSaltStd',
							dataIndex : 'prodSaltStd',
							ref : '../../prodSaltLowLimit',
							// readOnly : true,
							fieldLabel : '脱盐率'
						}, {
							xtype : 'textfield',
							anchor : '95%',
							colspan : 6,
							name : 'entity/prodFactorBStd',
							dataIndex : 'prodFactorBStd',
							ref : '../../prodFactorBUpLimit',
							// readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>初检信息</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							allowBlank : false,
							anchor : '95%',
							colspan : 8,
							dataIndex : 'fGpd',
							ref : '../../fGpd',
							fieldLabel : '产水量',
							listeners : {
								scope : this,
								"change" : function(A) {
									this.calcFFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							allowBlank : false,
							anchor : '95%',
							colspan : 8,
							dataIndex : 'fSalt',
							ref : '../../fSalt',
							fieldLabel : '脱盐率%',
							listeners : {
								scope : this,
								"change" : function(A) {
									this.calcFFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							allowBlank : false,
							anchor : '95%',
							colspan : 8,
							dataIndex : 'fFactorB',
							ref : '../../fFactorB',
							decimalPrecision : 4,
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testmaccombo',
							hiddenName : 'entity/fMacName',
							dataIndex : 'fMacName',
							valueField : 'propValueName',
							displayField : 'propValueName',
							anchor : '95%',
							colspan : 8,
							ref : '../../fMacName',
							allowBlank : false,
							fieldLabel : '测试膜壳'
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							//value : new Date(),
							name : 'entity/fCheckTm',
							// dataIndex : 'fCheckTm',
							ref : '../../fCheckTm',
							fieldLabel : '初检时间',
							allowBlank : false,
							anchor : '95%',
							colspan : 8
						}, {
							xtype : 'qryexecutoroptioncombobox',
							teamId : '100069',
							emptyText : '',
							hiddenName : 'entity/fCheckerId',
							dataIndex : 'fCheckerId',
							anchor : '95%',
							colspan : 8,
							ref : '../../fCheckerId',
							allowBlank : false,
							fieldLabel : '分析员'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>复检信息</span>",
							colspan : 24
						}, {
							xtype : 'numberfield',
							// allowBlank : false,
							anchor : '95%',
							colspan : 8,
							dataIndex : 'rGpd',
							ref : '../../rGpd',
							fieldLabel : '产水量',
							listeners : {
								scope : this,
								"change" : function(A) {
									this.calcRFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							// allowBlank : false,
							anchor : '95%',
							colspan : 8,
							dataIndex : 'rSalt',
							ref : '../../rSalt',
							fieldLabel : '脱盐率%',
							listeners : {
								scope : this,
								"change" : function(A) {
									this.calcRFactorB();
								}
							}
						}, {
							xtype : 'numberfield',
							// allowBlank : false,
							anchor : '95%',
							colspan : 8,
							dataIndex : 'rFactorB',
							ref : '../../rFactorB',
							decimalPrecision : 4,
							readOnly : true,
							fieldLabel : '系数B'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'testmaccombo',
							hiddenName : 'entity/rMacName',
							dataIndex : 'rMacName',
							valueField : 'propValueName',
							displayField : 'propValueName',
							anchor : '95%',
							colspan : 8,
							ref : '../../rMacName',
							// allowBlank : false,
							fieldLabel : '测试膜壳'
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:00",
							//value : new Date(),
							name : 'entity/rCheckTm',
							// dataIndex : 'fCheckTm',
							ref : '../../rCheckTm',
							fieldLabel : '复检时间',
							// allowBlank : false,
							anchor : '95%',
							colspan : 8
						}, {
							xtype : 'qryexecutoroptioncombobox',
							teamId : '100069',
							emptyText : '',
							hiddenName : 'entity/rCheckerId',
							dataIndex : 'rCheckerId',
							anchor : '95%',
							colspan : 8,
							ref : '../../rCheckerId',
							// allowBlank : false,
							fieldLabel : '分析员'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>判定信息</span>",
							colspan : 24
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/ifProdSpecId',
							anchor : '95%',
							colspan : 12,
							ref : '../../ifProdSpecId',
							dataIndex : 'ifProdSpecId',
							allowBlank : false,
							fieldLabel : '拟入库型号',
							listeners : {
								scope : this,

								'select' : function(combo, record, index) {
									// this.loadProdStd();
									// this.modifyWindow.markSpecName.setValue(combo.getRawValue());
								}
							}
						}, {
							xtype : 'prodspeccombobox',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							emptyText : '',
							hiddenName : 'entity/markSpecName',
							dataIndex : 'markSpecName',
							valueField : 'name',
							displayField : 'name',
							anchor : '95%',
							colspan : 12,
							ref : '../../markSpecName',
							allowBlank : false,
							fieldLabel : '拟贴标型号'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, new Ext.form.ComboBox({
									ref : '../../isProdQualified',
									hiddenName : 'entity/isProdQualified',
									dataIndex : 'isProdQualified',
									fieldLabel : '判定结果',
									store : new Ext.data.SimpleStore({
												fields : ['value', 'name'],
												data : [['Y', '合格'],
														['N', '不合格']]
											}),
									valueField : 'value',
									displayField : 'name',
									editable : false,
									lazyRender : true,
									mode : 'local',
									triggerAction : 'all',
									emptyText : '未判...',
									anchor : '95%',
									colspan : 12,
									allowBlank : false
								}), {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							ref : '../../remark',
							xtype : 'textarea',
							name : 'entity/remark',
							dataIndex : 'remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 24,
							allowBlank : true
						}, {
							xtype : 'hidden',
							ref : '../../recordId',
							dataIndex : 'recordId',
							name : 'entity/recordId'
						}, {
							xtype : 'hidden',
							ref : '../../juanmoBatchId',
							dataIndex : 'juanmoBatchId',
							name : 'entity/juanmoBatchId'
						}, {
							xtype : 'hidden',
							ref : '../../batchGpdStdStr',
							name : 'entity/batchGpdStdStr'
						}, {
							xtype : 'hidden',
							ref : '../../prodGpdStdStr',
							name : 'entity/prodGpdStdStr'
						}]
			}]
		});
	}
}