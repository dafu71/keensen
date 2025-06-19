com.keensen.ump.qinsen.quality.tumocheckinputMgr = function() {

	this.initPanel = function() {

		this.initMasterPanel();
		this.initStdGrid();
		this.initRecGrid();

		this.optPanel = this.optPanel || new Ext.Panel({
					layout : 'border',
					height : '420',
					collapsible : false,
					titleCollapse : false,
					items : [this.masterPanel, this.stdGrid]
				});

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'tumocheckinputmgr',
					panels : [this.optPanel, this.recGrid]
				});

		return this.lay;

	}

	this.initMasterPanel = function() {
		var _this = this;
		this.masterPanel = this.masterPanel || new Ext.fn.InputPanel({
			// title:'检测录入',
			width : '700',
			height : '420',
			region : 'west',
			pgrid : '',
			columns : 6,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.qinsen.tumocheck.createRecord.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						// name : 'entity/cdmBatchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '请检信息',
						ref : '../checkCodeInfo',
						anchor : '90%',
						colspan : 6,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									this.dealCodeInfo();

								}
							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'entity/checkNo',
						ref : '../checkNo',
						colspan : 3,
						anchor : '90%',
						fieldLabel : '请检单号'
					}, {
						xtype : 'datetimefield',
						name : 'entity/checkTm',
						ref : '../checkTm',
						fieldLabel : '检测时间',
						colspan : 3,
						anchor : '90%',
						allowBlank : false,
						editable : true,
						format : "Y-m-d H:i:00",
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d H:i:00')
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
						ref : '../batchNo',
						allowBlank : false,
						anchor : '90%',
						colspan : 3,
						fieldLabel : '批次',
						listeners : {
							scope : this,
							'change' : this.batchNoChange
						}
					}, {
						xtype : 'textfield',
						ref : '../specName',
						readOnly : true,
						anchor : '90%',
						colspan : 3,
						fieldLabel : '膜片型号'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'numberfield',
						name : 'entity/positionLength',
						ref : '../positionLength',
						allowBlank : false,
						anchor : '90%',
						colspan : 3,
						fieldLabel : '取样位置'
					}, {

						xtype : 'combo',
						fieldLabel : '初/复检',
						allowBlank : false,
						ref : '../recheckFlag',
						hiddenName : 'entity/recheckFlag',
						emptyText : '--请选择--',
						anchor : '90%',
						colspan : 3,
						store : [['N', '初检'], ['Y', '复检']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.masterPanel.recheckFlag.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'numberfield',
						name : 'entity/conductivityIn',
						allowBlank : false,
						ref : '../conductivityIn',
						anchor : '90%',
						colspan : 3,
						fieldLabel : '进水电导'
					}, {

						xtype : 'combo',
						fieldLabel : '测试台',
						allowBlank : false,
						ref : '../macName',
						hiddenName : 'entity/macName',
						emptyText : '--请选择--',
						anchor : '90%',
						colspan : 3,
						store : [['1', '1'], ['2', '2'], ['3', '3'],
								['4', '4'], ['5', '5'], ['6', '6'], ['7', '7']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.masterPanel.macName.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">检测数据</p>',
						colspan : 6
					}, {
						xtype : 'numberfield',
						// name : 'entity/conductivityIn',
						ref : '../gfd1',
						allowBlank : false,
						anchor : '90%',
						colspan : 2,
						fieldLabel : '膜通量左(GFD)'
					}, {
						xtype : 'numberfield',
						ref : '../gfd2',
						allowBlank : false,
						anchor : '90%',
						colspan : 2,
						fieldLabel : '膜通量中(GFD)'
					}, {
						xtype : 'numberfield',
						ref : '../gfd3',
						allowBlank : false,
						anchor : '90%',
						colspan : 2,
						fieldLabel : '膜通量右(GFD)'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../cdtOut1',
						allowBlank : false,
						anchor : '90%',
						colspan : 2,
						fieldLabel : '产水电导左(μS/cm)'
					}, {
						xtype : 'numberfield',
						allowBlank : false,
						ref : '../cdtOut2',
						anchor : '90%',
						colspan : 2,
						fieldLabel : '产水电导中(μS/cm)'
					}, {
						xtype : 'numberfield',
						allowBlank : false,
						ref : '../cdtOut3',
						anchor : '90%',
						colspan : 2,
						fieldLabel : '产水电导右(μS/cm)'
					}, {
						xtype : 'displayfield',
						value : '<p style="color:red;">检测结果</p>',
						colspan : 6
					}, {
						xtype : 'numberfield',
						name : 'entity/gfdAvg',
						allowBlank : false,
						ref : '../gfdAvg',
						anchor : '90%',
						colspan : 3,
						fieldLabel : '膜通量'
					}, {
						xtype : 'numberfield',
						name : 'entity/saltRejection',
						allowBlank : false,
						ref : '../saltRejection',
						anchor : '90%',
						colspan : 3,
						fieldLabel : '脱盐率%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'mpperfcombobox',
						allowBlank : false,
						hiddenName : 'entity/perfFlagId',
						name : 'entity/perfFlagId',
						ref : '../perfFlagId',
						dataIndex : 'perfFlagId',
						anchor : '90%',
						colspan : 3,
						fieldLabel : '等级'
					}, {
						ref : '../judgeInfo',
						xtype : 'displayfield',
						value : '',
						anchor : '90%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'executoroptioncombobox',
						tacheCode : 'TM',
						state : 'A',
						allowBlank : false,
						hiddenName : 'entity/checkerId',
						ref : '../checkerId',
						name : 'entity/checkerId',
						anchor : '90%',
						colspan : 3,
						fieldLabel : '分析员'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'entity/remark',
						fieldLabel : '备注',
						anchor : '90%',
						colspan : 6
					}, {
						xtype : 'hidden',
						name : 'entity/gfdStr',
						ref : '../gfdStr'
					}, {
						xtype : 'hidden',
						name : 'entity/conductivityStr',
						ref : '../conductivityStr'
					}, {
						xtype : 'hidden',
						name : 'entity/batchId',
						ref : '../batchId'
					}],
			buttons : [{
						text : "保存",
						scope : this,
						iconCls : 'icon-page_save',
						handler : this.onSave

					}, {
						text : '重置',
						scope : this,
						iconCls : 'icon-application_reset',
						handler : this.refreshPage
					}]
		})

	}

	this.initStdGrid = function() {
	
		this.stdGrid = new Ext.fn.ListPanel({
			title : '【膜片质检标准列表】',
			height : '420',
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'lineName',
						header : '生产线'
					}, {
						dataIndex : 'macName',
						header : '测试台'
					}, {
						dataIndex : 'levelCode',
						header : '等级'
					}, {
						dataIndex : 'gfdStdStr',
						header : '膜通量GFD'
					}, {
						dataIndex : 'saltStdStr',
						header : '脱盐率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.tumocheck.queryStdRecords.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'recordId'
						}, {
							name : 'specId'
						}, {
							name : 'state'
						}, {
							name : 'levelId'
						}, {
							name : 'gfdLowSymbol'
						}, {
							name : 'gfdLowLimit'
						}, {
							name : 'gfdUpSymbol'
						}, {
							name : 'gfdUpLimit'
						}, {
							name : 'saltLowSymbol'
						}, {
							name : 'saltLowLimit'
						}, {
							name : 'saltUpSymbol'
						}, {
							name : 'saltUpLimit'
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
							name : 'gfdStdStr'
						}, {
							name : 'saltStdStr'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'dispOrder'
						}, {
							name : 'judgePriority'
						}, {
							name : 'levelCode'
						}, {
							name : 'stateName'
						}, {
							name : 'lineName'
						}, {
							name : 'lineID'
						}, {
							name : 'macName'
						}]
			})
		})
	}

	this.initRecGrid = function() {
		this.recGrid = this.recGrid || new Ext.fn.ListPanel({
			title : '【批次检测数据】',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '批次合格:'
					}, {
						xtype : 'displayfield',
						ref : '../isQualifiedTxt'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '批次等级:'
					}, {
						xtype : 'displayfield',
						ref : '../perfFlagTxt'
					}],
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'positionLength',
						header : '取样位置(m)'
					}, {
						dataIndex : 'gfdAvg',
						header : '膜通量均值'
					}, {
						header : '膜通量数据',
						dataIndex : 'gfdStr'
					}, {
						header : '进水电导',
						dataIndex : 'conductivityIn'
					}, {
						header : '出水电导数据',
						dataIndex : 'conductivityStr'
					}, {
						dataIndex : 'saltRejection',
						header : '脱盐率%'
					}, {
						dataIndex : 'perfFlagName',
						header : '性能等级'
					}, {
						dataIndex : 'recheckName',
						header : '首/复检'
					}, {
						dataIndex : 'checkerName',
						header : '分析员'
					}, {
						dataIndex : 'checkTime',
						header : '检测时间'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumoCheck.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
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
							name : 'isBatchQualified'
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
	}
}