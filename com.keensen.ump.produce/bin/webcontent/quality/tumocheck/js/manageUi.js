com.keensen.ump.produce.quality.tumocheckMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'tumocheckmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					//title : '【膜片分析查询】',
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
						anchor : '95%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '95%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'textfield',
						name : 'condition/batchNoStr',
						anchor : '95%',
						fieldLabel : '膜片批次'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'prodflagselcombobox',
						hiddenName : 'condition/prodFlagId',
						anchor : '95%',
						fieldLabel : '生产类型'
					}, {
						xtype : 'mpperfcombobox',
						hiddenName : 'condition/perfFlagId',
						anchor : '95%',
						fieldLabel : '样块性能'
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
						 * emptyText : '--请选择--' }, { xtype : 'dictcombobox',
						 * name : 'condition/isBatchValid', hiddenName :
						 * 'condition/isBatchValid', fieldLabel : '批次验证', anchor :
						 * '75%', dictData : ABF_YESORNO }, { xtype :
						 * 'displayfield', height : '5', colspan : 4 }
						 */, {
						xtype : 'dictcombobox',
						name : 'condition/isWx',
						hiddenName : 'condition/isWx',
						fieldLabel : '是否外销',
						anchor : '95%',
						dictData : ABF_YESORNO
					}, {
						xtype : 'dictcombobox',
						name : 'condition/ifPerFlag',
						hiddenName : 'condition/ifPerFlag',
						fieldLabel : '是否已样块<br>性能判定',
						anchor : '95%',
						dictData : ABF_YESORNO
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					//hidden:uid != 'KS00307' && uid != 'XXB',
					hidden:true,
					id : tumocheckExportButton,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			//title : '【膜片分析列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [/*
					 * { text : '批次判定', scope : this, iconCls :
					 * 'icon-application_edit', handler : this.onJudgeBatch }
					 */{
						text : '样块性能判定',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onJudgeBlock
					}, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			id : 'tumocheck-list',
			delUrl : 'com.keensen.ump.produce.quality.quality.deleteTumoCheck.biz.ext',			
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'macName',
						header : '测试台'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						header : '膜片型号',
						dataIndex : 'materSpecName'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度'
					}, {
						dataIndex : 'lineCode',
						header : '生产线'
					}, {
						dataIndex : 'isWxName',
						header : '外销'
					}/*
						 * , { dataIndex : 'produceDate', header : '生产时间' }
						 */, {
						dataIndex : 'positionLength',
						header : '取样位置(m)'
					}, {
						dataIndex : 'gfdAvg',
						header : '膜通量均值(GFD)'
					}, {
						dataIndex : 'saltRejection',
						header : '脱盐率%'
					}, {
						dataIndex : 'gfdStr',
						hidden:true,
						header : '膜通量数据'
					}, {
						dataIndex : 'gfdStr1',
						header : '膜通量左(GFD)'
					}, {
						dataIndex : 'gfdStr2',
						header : '膜通量中(GFD)'
					}, {
						dataIndex : 'gfdStr3',
						header : '膜通量右(GFD)'
					}, {
						dataIndex : 'conductivityIn',
						header : '进水电导(μS/cm)'
					}, {
						dataIndex : 'conductivityStr',
						hidden:true,
						header : '出水电导数据'
					}, {
						dataIndex : 'conductivityStr1',
						header : '产水电导左(μS/cm)'
					}, {
						dataIndex : 'conductivityStr2',
						header : '产水电导中(μS/cm)'
					}, {
						dataIndex : 'conductivityStr3',
						header : '产水电导右(μS/cm)'
					}, {
						dataIndex : 'recheckName',
						header : '首/复检'
					}, {
						dataIndex : 'perfFlagName',
						header : '样块性能等级'
					}/*
						 * , { dataIndex : 'batchPerfFlagName', header :
						 * '批次性能等级' }
						 */, {
						dataIndex : 'appearance',
						header : '外观'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}/*
						 * , { dataIndex : 'wfSupplierName', header : '无纺布供应商' }
						 */, {
						dataIndex : 'tagNum',
						header : '标签数'
					}, {
						dataIndex : 'tagLength',
						header : '标签长度'
					}, {
						dataIndex : 'thickAvg',
						header : '厚度(平均)'
					}, {
						dataIndex : 'thickMin',
						header : '厚度(最小)'
					}, {
						dataIndex : 'thickMax',
						header : '厚度(最大)'
					}, {
						dataIndex : 'judgerName',
						header : '质检员'
					}/*
						 * , { dataIndex : 'isBatchQualifiedName', header :
						 * '批次合格' }
						 *//*
						 * , { dataIndex : 'gfdStr', header : '膜通量数据' }, {
						 * dataIndex : 'conductivityIn', header : '进水电导' }, {
						 * dataIndex : 'conductivityStr', header : '出水电导数据' }
						 *//*
						 * , { dataIndex : 'isValidName', header : '批次验证' }
						 */, {
						dataIndex : 'checkerName',
						header : '分析员'
					}, {
						dataIndex : 'checkTime',
						header : '检测时间'
					}, {
						dataIndex : 'judgeTime',
						header : '判定时间'
					}, {
						dataIndex : 'produceRemark',
						header : '生产备注'
					}, {
						dataIndex : 'remark',
						header : '分析备注'
					}, {
						dataIndex : 'judgeRemark',
						header : '判定说明'
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
							name : 'gfdStr1'
						}, {
							name : 'gfdStr2'
						}, {
							name : 'gfdStr3'
						}, {
							name : 'conductivityIn'
						}, {
							name : 'conductivityStr'
						}, {
							name : 'conductivityStr1'
						}, {
							name : 'conductivityStr2'
						}, {
							name : 'conductivityStr3'
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
	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '样块性能人工判定',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 4,
				loadUrl : 'com.keensen.ump.produce.quality.quality.expandTumoCheck2.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveTumoCheck2.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>样块信息</span>",
							colspan : 4
						}, {
							xtype : 'textfield',
							dataIndex : 'batchNo',
							name : 'entity/batchNo',
							readOnly : true,
							fieldLabel : '批次号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'materSpecName',
							readOnly : true,
							fieldLabel : '膜片型号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							dataIndex : 'gfdAvg',
							readOnly : true,
							fieldLabel : '膜通量均值',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'saltRejection',
							readOnly : true,
							fieldLabel : '脱盐率%',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'textfield',
							dataIndex : 'isWxName',
							readOnly : true,
							fieldLabel : '是否外销',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'macName',
							readOnly : true,
							fieldLabel : '测试台',
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
							anchor : '48%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
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
							dataIndex : 'tagNum',
							readOnly : true,
							fieldLabel : '标签数',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'tagLength',
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
							fieldLabel : '生产备注',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>样块性能判定</span>",
							colspan : 4
						}, {
							xtype : 'mpperfcombobox',
							allowBlank : false,
							hiddenName : 'entity/perfFlagId',
							name : 'entity/perfFlagId',
							dataIndex : 'perfFlagId',
							anchor : '95%',
							colspan : 2,
							fieldLabel : '等级'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>判定规则</span>",
							dataIndex : 'rule',
							colspan : 4
						}, {
							xtype : 'hidden',
							name : 'entity/recordId',
							dataIndex : 'recordId'
						}, {
							xtype : 'hidden',
							name : 'entity/judgerId',
							value : operatorid
						}]
			}]
		});
	}
}