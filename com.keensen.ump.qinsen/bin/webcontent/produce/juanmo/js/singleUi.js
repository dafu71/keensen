com.keensen.ump.qinsen.produce.juanmo.singleMgr = function() {
	this.initPanel = function() {
		this.initInputPanel();
		return new Ext.fn.fnLayOut({
					title : '单卷录入',
					layout : 'new',
					border : false,
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}
	
	this.initInputPanel = function() {
		var _this = this;
		this.panel = this.panel || new Ext.Panel({});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '300',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '500',
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.qinsen.juanmo.quickCreateRecords.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/cdmBatchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '叠膜栈板号',
						ref : '../cdmBatchNo',
						anchor : '90%',
						colspan : 2,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									this.dealCdmBatchNo();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'datetimefield',
						format : "Y-m-d H:i:00",
						name : 'entity/produceDt',
						ref : '../produceDt',
						fieldLabel : '生产时间',
						allowBlank : false,
						anchor : '85%',
						colspan : 1,
						value : new Date()
					}, {
						xtype : 'linecombobox',
						prodTacheId : 102,
						ref : '../lineId',
						hiddenName : 'entity/lineId',
						allowBlank : false,
						anchor : '85%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {

						xtype : 'combobox',
						fieldLabel : '试卷',
						ref : '../isTrial',
						hiddenName : 'entity/isTrial',
						emptyText : '--请选择--',
						allowBlank : false,
						anchor : '85%',
						store : [['N', '否'], ['Y', '是']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.inputPanel.isTrial.reset();
							}
						}
					}, {
						xtype : 'textfield',
						name : 'entity/juanMoBatchNo',
						ref : '../juanMoBatchNo',
						allowBlank : false,
						anchor : '85%',
						fieldLabel : '卷膜序号'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/orderNo',
						allowBlank : false,
						ref : '../orderNo',
						anchor : '85%',
						fieldLabel : '订单号'
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'entity/prodSpecId',
						ref : '../prodSpecId',
						anchor : '85%',
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
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						ref : '../inQuantity',
						name : 'entity/inQuantity',
						allowBlank : false,
						fieldLabel : '投入页数',
						xtype : 'numberfield',
						minValue : 0,
						decimalPrecision : 1,
						anchor : '85%'
					}, {
						ref : '../outQuantity',
						name : 'entity/outQuantity',
						fieldLabel : '膜页数',
						xtype : 'textfield',
						readOnly:true,
						anchor : '85%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						ref : '../blankingSize',
						name : 'entity/blankingSize',
						fieldLabel : '下料尺寸',
						xtype : 'textfield',
						readOnly:true,
						anchor : '85%'
					}, {
						ref : '../denseNet',
						name : 'entity/denseNet',
						fieldLabel : '浓网',
						xtype : 'textfield',
						readOnly:true,
						anchor : '85%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						ref : '../pageWidth',
						name : 'entity/pageWidth',
						fieldLabel : '页宽',
						xtype : 'textfield',
						readOnly:true,
						anchor : '85%'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'tacheteamcombobox',
						tacheCode : 'JM',
						name : 'entity/teamId',
						fieldLabel : '生产班组',
						hiddenName : 'entity/teamId',
						ref : '../teamId',
						allowBlank : false,
						anchor : '85%',
						colspan : 1
					}, {
						ref : '../../workerName',
						xtype : 'displayfield',
						fieldLabel : '操作工',
						anchor : '85%',
						value : nowStaffName
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						name : 'entity/remark',
						xtype : 'textarea',
						fieldLabel : '备注',
						colspan : 2,
						anchor : '90%',
						allowBlank : true
					}, {
						ref : '../cdmBatchId',
						name : 'entity/cdmBatchId',
						xtype : 'hidden'
					}, {
						ref : '../startSeq',
						name : 'entity/startSeq',
						xtype : 'hidden'
					}, {
						ref : '../prefix',
						name : 'entity/prefix',
						xtype : 'hidden'
					}, {
						name : 'entity/workerId',
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
							var teamId = this.inputPanel.teamId.getValue();
							this.inputPanel.form.reset();
							this.inputPanel.cdmBatchNo.focus();
							this.inputPanel.teamId.setValue(teamId);// 班组维持不变
						}
					}]
		})

	}
}