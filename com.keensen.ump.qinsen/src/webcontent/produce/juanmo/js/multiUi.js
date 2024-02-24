com.keensen.ump.qinsen.produce.juanmo.multiMgr = function() {
	this.initPanel = function() {
		this.createPanel();
		return new Ext.fn.fnLayOut({
					title : '混卷录入',
					layout : 'we',
					border : false,
					panels : [this.managePanel, this.panel4]
				});
	}

	this.createPanel = function() {
		this.cdmPanel = this.cdmPanel || new Ext.fn.ColumnFormPanel({
					height : 140,
					width : 800,
					title : '叠膜信息',
					columns : 12,
					autoHide : true,
					border : false,
					fields : [{
								xtype : 'textfield',
								name : 'cdmBatchNo',
								style : '{font-weight:bold;}',
								allowBlank : false,
								fieldLabel : '叠膜栈板号',
								ref : '../cdmBatchNo',
								anchor : '100%',
								colspan : 4,
								listeners : {
									scope : this,
									specialkey : function(C, D) {
										if (D.getKey() == Ext.EventObject.ENTER) {
											this.dealCdmBatchNo();
										}

									}
								}
							}, {
								ref : '../inQuantity',
								name : 'inQuantity',
								fieldLabel : '投入页数',
								allowBlank : false,
								xtype : 'numberfield',
								minValue : 0,
								decimalPrecision : 1,
								colspan : 4,
								anchor : '100%'
							}, {
								ref : '../outQuantity',
								name : 'outQuantity',
								allowBlank : false,
								fieldLabel : '使用页数',
								xtype : 'numberfield',
								minValue : 0,
								decimalPrecision : 1,
								colspan : 4,
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'prodSpecId',
								ref : '../prodSpecId',
								anchor : '100%',
								fieldLabel : '元件型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								emptyText : '',
								readOnly : true,
								colspan : 3
							}, {
								ref : '../blankingSize',
								name : 'blankingSize',
								fieldLabel : '下料尺寸',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../denseNet',
								name : 'denseNet',
								fieldLabel : '浓网',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../pageWidth',
								name : 'pageWidth',
								fieldLabel : '页宽',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../cdmBatchId',
								name : 'cdmBatchId',
								xtype : 'hidden'
							}, {
								ref : '../orderNo',
								name : 'orderNo',
								xtype : 'hidden'
							}],
					buttons : [{
								text : "添加",
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.addDetail

							}, {
								text : '重置',
								scope : this,
								iconCls : 'icon-application_reset',
								handler : function() {
									this.cdmPanel.form.reset();
									this.cdmPanel.cdmBatchNo.focus();
								}
							}]

				})
		this.mainPanel = this.mainPanel || new Ext.fn.ColumnFormPanel({
					height : 230,
					width : 800,
					title : '卷膜信息',
					columns : 12,
					autoHide : true,
					border : false,
					fields : [{
								xtype : 'datetimefield',
								format : "Y-m-d H:i:00",
								name : 'produceDt',
								ref : '../produceDt',
								fieldLabel : '生产时间',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								value : new Date()
							}, {
								xtype : 'linecombobox',
								prodTacheId : 102,
								ref : '../lineId',
								hiddenName : 'lineId',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								fieldLabel : '生产线 '
							}, {

								xtype : 'combo',
								fieldLabel : '试卷',
								ref : '../isTrial',
								hiddenName : 'isTrial',
								emptyText : '--请选择--',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								store : [['N', '否'], ['Y', '是']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.mainPanel.isTrial.reset();
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								ref : '../cnt',
								fieldLabel : '元件支数',
								xtype : 'numberfield',
								name : 'cnt',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								minValue : 1,
								decimalPrecision : 0
							}, {
								xtype : 'textfield',
								name : 'juanMoBatchNo',
								ref : '../juanMoBatchNo',
								allowBlank : false,
								anchor : '100%',
								colspan : 4,
								fieldLabel : '起始卷膜序号'
							}, {
								xtype : 'textfield',
								name : 'orderNo',
								allowBlank : false,
								ref : '../orderNo',
								anchor : '100%',
								colspan : 4,
								fieldLabel : '订单号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'prodSpecId',
								ref : '../prodSpecId',
								anchor : '100%',
								colspan : 4,
								fieldLabel : '元件型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								allowBlank : false,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : 'tacheteamcombobox',
								tacheCode : 'JM',
								name : 'teamId',
								fieldLabel : '生产班组',
								hiddenName : 'teamId',
								ref : '../teamId',
								allowBlank : false,
								anchor : '100%',
								colspan : 4
							}, {
								ref : '../../workerName',
								xtype : 'displayfield',
								fieldLabel : '操作工',
								anchor : '100%',
								colspan : 4,
								value : nowStaffName
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								ref : '../pageCnt',
								name : 'pageCnt',
								fieldLabel : '膜页数',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../blankingSize',
								name : 'blankingSize',
								fieldLabel : '下料尺寸',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../denseNet',
								name : 'denseNet',
								fieldLabel : '浓网',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								ref : '../pageWidth',
								name : 'pageWidth',
								fieldLabel : '页宽',
								xtype : 'textfield',
								readOnly : true,
								anchor : '100%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								name : 'remark',
								ref : '../remark',
								xtype : 'textarea',
								height : 30,
								fieldLabel : '备注',
								anchor : '100%',
								colspan : 12,
								allowBlank : true
							}, {
								ref : '../cdmBatchId',
								name : 'cdmBatchId',
								xtype : 'hidden'
							}, {
								ref : '../startSeq',
								name : 'startSeq',
								xtype : 'hidden'
							}, {
								ref : '../prefix',
								name : 'prefix',
								xtype : 'hidden'
							}, {
								name : 'workerId',
								xtype : 'hidden',
								value : nowStaffId
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
								handler : function() {
									this.clearInfo();
								}
							}]

				})
		this.detailGrid = this.detailGrid || new Ext.grid.GridPanel({
					width : '100%',
					title : '混卷组成',
					height : 150,
					autoScroll : true,
					// margin : '5 3 2 3',
					store : new Ext.data.JsonStore({
								fields : ['cdmBatchId', 'cdmBatchNo',
										'orderNo', 'inquantity', 'outquantity',
										'remark', 'cdmSpecCode', 'cdmSpecName',
										'blankingSize', 'denseNet',
										'pageWidth', 'produceDate']
							}),
					columns : [new Ext.grid.RowNumberer({
										header : '行',
										width : 40
									}), {
								header : '栈板号',
								width : 120,
								dataIndex : 'cdmBatchNo'
							}, {
								header : '投入页数',
								width : 70,
								dataIndex : 'inQuantity',
								decimalPrecision : 1,
								minValue : 0
							}, {
								header : '使用页数',
								width : 70,
								dataIndex : 'outQuantity',
								decimalPrecision : 1,
								minValue : 0
							}, {
								header : '订单号',
								width : 120,
								dataIndex : 'orderNo'
							}, {
								header : '元件型号',
								width : 120,
								dataIndex : 'cdmSpecName'
							}, {
								header : '下料尺寸(m)',
								width : 90,
								dataIndex : 'blankingSize'
							}, {
								header : '浓网(mil)',
								width : 70,
								dataIndex : 'denseNet'
							}, {
								header : '页宽(m)',
								width : 70,
								dataIndex : 'pageWidth'
							}, {
								header : '生产时间',
								width : 110,
								dataIndex : 'produceDate'
							}, {
								header : '备注',
								width : 120,
								dataIndex : 'remark'
							}],
					autoSizeColumns : true,
					columnLines : true,
					resizable : true,
					viewConfig : {
						enableTextSelection : true
					}

				})
		this.panel4 = this.panel4 || new Ext.Panel({});
		this.managePanel = new Ext.Panel({
					layout : 'form',
					height : '100%',
					width : 800,
					items : [this.cdmPanel, this.mainPanel, this.detailGrid]

				})
	}
}