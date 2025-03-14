com.keensen.ump.qinsen.produce.juanmo.singleMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initInputPanel();
		return new Ext.fn.fnLayOut({
					title : '单卷录入',
					layout : 'new',
					border : false,
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}

	this.initStore = function() {
		this.jmdutyStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.workorder2.queryBatchNo4JmDuty.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'cdmRecordId'
					}, {
						name : 'batchNo'
					}, {
						name : 'location'
					}]
		})
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

			width : '640',
			height : '520',
			pgrid : '',
			columns : 24,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.qinsen.juanmo.quickCreateRecords.biz.ext',
			fields : [{
				xtype : 'displayfield',
				fieldLabel : "<span style='color:red;font-size:16px;'>"
						+ '作业计划信息' + "</span>",
				colspan : 24,
				labelSeparator : ''// 去掉冒号
			}, {
				xtype : 'textfield',
				name : 'entity/orderNo',
				readOnly : true,
				allowBlank : false,
				ref : '../orderNo',
				anchor : '100%',
				colspan : 12,
				fieldLabel : '订单号'
			}, {
				xtype : 'textfield',
				ref : '../orderAmount',
				readOnly : true,
				// allowBlank : false,
				anchor : '100%',
				fieldLabel : '订单数量(支)',
				colspan : 12
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				xtype : 'prodspeccombobox',
				hiddenName : 'entity/prodSpecId',
				ref : '../prodSpecId',
				state : 'Y',
				anchor : '100%',
				colspan : 12,
				fieldLabel : '元件型号 ',
				emptyText : '',
				readOnly : true,
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
				xtype : 'textfield',
				ref : '../jmAmount',
				readOnly : true,
				// allowBlank : false,
				anchor : '100%',
				fieldLabel : '计划卷膜数量(支)',
				colspan : 12
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				xtype : 'textfield',
				ref : '../realityAmount',
				readOnly : true,
				// allowBlank : false,
				anchor : '100%',
				fieldLabel : '实际卷膜数量(支)',
				colspan : 12
			}, {
				xtype : 'textfield',
				ref : '../location',
				readOnly : true,
				// allowBlank : false,
				anchor : '100%',
				fieldLabel : '膜页栈板储位',
				colspan : 12
			}, {
				xtype : 'displayfield',
				ref : '../displayfield1',
				height : 5,
				colspan : 24
			}, {
				xtype : 'textfield',
				ref : '../prodRemark',
				// name : 'entity/jmAmount',
				// allowBlank : false,
				readOnly : true,
				anchor : '95%',
				fieldLabel : '订单生产备注',
				colspan : 24
			}, {
				xtype : 'displayfield',
				fieldLabel : "<span style='color:red;font-size:16px;'>"
						+ '卷膜信息' + "</span>",
				colspan : 24,
				labelSeparator : ''// 去掉冒号
			}, {
				ref : '../juanmo',
				xtype : 'textfield',
				fieldLabel : '卷膜工艺要求',
				colspan : 24,
				anchor : '90%',
				readOnly : true
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				xtype : 'combobox',
				forceSelection : true,
				// readOnly : true,
				allowBlank : false,
				mode : 'local',
				fieldLabel : '叠膜栈板号',
				ref : '../cdmBatchNo2',
				anchor : '86%',
				colspan : 12,
				emptyText : '--请选择--',
				editable : false,
				store : this.jmdutyStore,
				displayField : "batchNo",
				valueField : "batchNo",
				listeners : {
					"expand" : function(A) {
						this.reset()
					},
					'select' : function(combo, record, index) {
						if (index > -1) {
							_this.inputPanel.location.setValue(record
									.get('location'));
						}
					}
				}
			}, {
				xtype : 'textfield',
				name : 'entity/cdmBatchNo',
				style : '{font-weight:bold;}',
				allowBlank : false,
				fieldLabel : '叠膜栈板号',
				ref : '../cdmBatchNo',
				anchor : '90%',
				colspan : 12,
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
				colspan : 12
			}, {
				xtype : 'displayfield',
				fieldLabel : ' ',
				value : '<p style="color:red;">光标置于此框内后扫栈板号验证</p>',
				labelSeparator : '',// 去掉冒号
				colspan : 12
			}, {
				xtype : 'displayfield',
				colspan : 24
			}, {
				xtype : 'datetimefield',
				format : "Y-m-d H:i:00",
				name : 'entity/produceDt',
				ref : '../produceDt',
				fieldLabel : '生产时间',
				allowBlank : false,
				anchor : '85%',
				colspan : 12,
				value : new Date()
			}, {
				xtype : 'linecombobox',
				prodTacheId : 102,
				ref : '../lineId',
				hiddenName : 'entity/lineId',
				allowBlank : false,
				anchor : '85%',
				colspan : 12,
				fieldLabel : '生产线 '
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {

				xtype : 'combobox',
				fieldLabel : '试卷',
				ref : '../isTrial',
				hiddenName : 'entity/isTrial',
				emptyText : '--请选择--',
				allowBlank : false,
				anchor : '85%',
				colspan : 12,
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
				colspan : 12,
				fieldLabel : '卷膜序号'
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				ref : '../inQuantity',
				name : 'entity/inQuantity',
				allowBlank : false,
				fieldLabel : '投入页数',
				xtype : 'numberfield',
				minValue : 0,
				decimalPrecision : 1,
				colspan : 12,
				anchor : '85%'
			}, {
				ref : '../outQuantity',
				name : 'entity/outQuantity',
				fieldLabel : '膜页数',
				xtype : 'textfield',
				readOnly : true,
				colspan : 12,
				anchor : '85%'
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				ref : '../blankingSize',
				name : 'entity/blankingSize',
				fieldLabel : '下料尺寸',
				xtype : 'textfield',
				readOnly : true,
				colspan : 12,
				anchor : '85%'
			}, {
				ref : '../denseNet',
				name : 'entity/denseNet',
				fieldLabel : '浓网',
				xtype : 'textfield',
				readOnly : true,
				colspan : 12,
				anchor : '85%'
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				ref : '../pageWidth',
				name : 'entity/pageWidth',
				fieldLabel : '页宽',
				xtype : 'textfield',
				readOnly : true,
				colspan : 12,
				anchor : '85%'
			}, {
				ref : '../trailer',
				name : 'entity/trailer',
				fieldLabel : '车号',
				xtype : 'textfield',
				// readOnly : true,
				colspan : 12,
				anchor : '85%'
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				xtype : 'tacheteamcombobox',
				tacheCode : 'JM',
				name : 'entity/teamId',
				fieldLabel : '生产班组',
				hiddenName : 'entity/teamId',
				ref : '../teamId',
				allowBlank : false,
				anchor : '85%',
				colspan : 12
			}, {
				ref : '../../workerName',
				xtype : 'displayfield',
				fieldLabel : '操作工',
				anchor : '85%',
				colspan : 12,
				value : nowStaffName
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				ref : '../lightNetType',
				// name : 'entity/lightNetType',
				fieldLabel : '淡网型号',
				xtype : 'textfield',
				readOnly : true,
				anchor : '85%',
				colspan : 12
			}, {
				ref : '../lightNetShortPage',
				// name : 'entity/lightNetShortPage',
				fieldLabel : '淡网短页',
				xtype : 'textfield',
				readOnly : true,
				anchor : '85%',
				colspan : 12
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 24
			}, {
				name : 'entity/remark',
				xtype : 'textarea',
				fieldLabel : '备注',
				height : 30,
				colspan : 24,
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
			}, {
				name : 'entity/orderId',
				xtype : 'hidden',
				ref : '../orderId'
			}, {
				name : 'entity/planDate',
				xtype : 'hidden',
				ref : '../planDate'
			}],
			buttons : [{
						text : "领取任务",
						scope : this,
						iconCls : 'icon-page_save',
						handler : this.onGetDuty

					}, {
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