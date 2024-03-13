com.keensen.ump.qinsen.quality.applyMgr = function() {

	this.initPanel = function() {

		this.getRecentOrderNoStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.qinsen.apply.getRecentOrderNo.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : '',
					baseParams : {
						'condition/days' : 300
					},
					fields : [{
								name : 'orderNo'
							}]
				})

		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'qualityapplymgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}
	this.initInputWindow = function() {
		var _this = this;
		this.panel = this.panel || new Ext.Panel({
					title : '请检元件序号',
					items : [{
								id : 'apply-batchNoStr',
								xtype : 'textarea',
								width : '200',
								height : '600',
								emptyText : '请按顺序将元件序号扫码，或手工输入并回车换行',
								allowBlank : false
							}]
				});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '300',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			baseCls : "x-plain",
			width : '600',
			height : '500',
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.qinsen.apply.createApply.biz.ext',
			successFn : function(i, r) {
				if (r.err != '0') {
					var errData = r.msg;

					Ext.Msg.confirm('提示', '以下元件在气检记录的型号与当前型号不一致：' + r.msg
									+ '；是否需要从请检清单中移除？', function(btn) {
								if (btn === 'yes') {
									var errorBatchNos = r.msg.split(',');
									var orgBatchNos = Ext
											.getCmp('apply-batchNoStr')
											.getValue().split('\n');
									var batchNos = new Array();
									for (var i = 0; i < orgBatchNos.length; i++) {
										var orgBatchNo = orgBatchNos[i];
										var flag = true;// 型号是否正确
										errorBatchNos.forEach(function(val,
														index) {
													if (val.trim() == orgBatchNo.trim()) {
														flag = false;
														return false;
													}
												});
										if (flag)
											batchNos.push(orgBatchNo);
									}
									Ext.getCmp('apply-batchNoStr')
											.setValue(batchNos.join('\n'));// 回填一下
								}
							})
				} else {

				}
			},
			fields : [{

				xtype : 'combobox',
				fieldLabel : '车间',
				ref : '../workshopId',
				hiddenName : 'entity/workshopId',
				emptyText : '--请选择--',
				allowBlank : false,
				anchor : '85%',
				store : [[100066, '工业组件车间'], [100515, '新基地工业组件车间'],
						[100067, '家用组件车间']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.workshopId.reset();
					}
				}
			}, {
				xtype : 'datetimefield',
				format : "Y-m-d H:i:00",
				name : 'entity/applyTm',
				ref : '../applyTm',
				fieldLabel : '请检时间',
				allowBlank : false,
				anchor : '85%',
				colspan : 1,
				value : new Date()
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 2
			}, {

				xtype : 'combobox',
				fieldLabel : '订单类型',
				ref : '../orderTypeFlag',
				hiddenName : 'entity/orderTypeFlag',
				emptyText : '--请选择--',
				allowBlank : false,
				anchor : '85%',
				store : [['1', '公司标准'], ['2', '非公司标准']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.orderTypeFlag.reset();
					}
				}
			}, {
				xtype : 'combobox',
				ref : '../orderNo',
				hiddenName : 'entity/orderNo',
				store : this.getRecentOrderNoStore,
				valueField : "orderNo",
				displayField : "orderNo",
				// forceSelection : true,
				allowBlank : false,
				anchor : '85%',
				fieldLabel : '订单号 ',
				emptyText : '--请选择--',
				typeAhead : true,
				typeAheadDelay : 100,
				minChars : 1,
				mode : "local",
				lastQuery : '',
				editable : true,
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
				xtype : 'textfield',
				// name : 'entity/checkNo',
				allowBlank : false,
				readOnly : true,
				value : '系统自动生成',
				ref : '../checkNo',
				anchor : '85%',
				fieldLabel : '请检单号'
			}, {
				xtype : 'textfield',
				name : 'entity/stackNo',
				allowBlank : false,
				ref : '../stackNo',
				anchor : '85%',
				fieldLabel : '栈板号'
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 2
			}, {
				xtype : 'prodspeccombobox',
				ref : '../prodSpecId',
				hiddenName : 'entity/prodSpecId',
				anchor : '85%',
				fieldLabel : '元件型号 ',
				typeAhead : true,
				allowBlank : false,
				typeAheadDelay : 100,
				minChars : 1,
				lastQuery : '',
				editable : true,
				listeners : {
					'specialkey' : function() {
						return false;
					}
				}
			}, {
				ref : '../orderQuantity',
				anchor : '85%',
				allowBlank : false,
				xtype : 'numberfield',
				name : 'entity/orderQuantity',
				fieldLabel : '订单数量',
				minValue : 0,
				decimalPrecision : 0
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 2
			}, {

				xtype : 'combobox',
				fieldLabel : '元件类型',
				ref : '../prodClassFlag',
				hiddenName : 'entity/prodClassFlag',
				emptyText : '--请选择--',
				allowBlank : false,
				editable : false,
				anchor : '85%',
				store : [['D', '干'], ['W', '湿'], ['O', '干湿均可']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.prodClassFlag.reset();
					}
				}
			}, {

				xtype : 'combobox',
				fieldLabel : '端盖',
				ref : '../lid',
				hiddenName : 'entity/lid',
				emptyText : '--请选择--',
				allowBlank : false,
				editable : true,
				anchor : '85%',
				mode : "local",
				store : [['蜂窝', '蜂窝'], ['格栅', '格栅']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.lid.reset();
					}
				}
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 2
			}, {

				xtype : 'combobox',
				fieldLabel : '元件性能要求',
				ref : '../performance',
				hiddenName : 'entity/performance',
				emptyText : '--请选择--',
				allowBlank : false,
				editable : true,
				anchor : '85%',
				store : [['内控标准', '内控标准']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.performance.reset();
					}
				}
			}, {

				xtype : 'combobox',
				fieldLabel : '元件覆标签情况',
				ref : '../labelTypeFlag',
				hiddenName : 'entity/labelTypeFlag',
				emptyText : '--请选择--',
				allowBlank : false,
				anchor : '85%',
				store : [['1', '公司标准'], ['2', '中性'], ['3', '贴牌'], ['0', '不贴标']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.labelTypeFlag.reset();
					}
				}
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 2
			}, {
				ref : '../performance',
				name : 'entity/performance',
				anchor : '85%',
				xtype : 'textfield',
				fieldLabel : '标签显示元件型号',
				allowBlank : true
			}, {

				xtype : 'combobox',
				fieldLabel : '膜体所裹胶带',
				ref : '../tape',
				hiddenName : 'entity/tape',
				emptyText : '--请选择--',
				allowBlank : false,
				editable : true,
				anchor : '85%',
				store : [['白胶带', '白胶带'], ['网格胶带', '网格胶带']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.tape.reset();
					}
				}
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 2
			}, {

				xtype : 'combobox',
				fieldLabel : '包装箱唛头情况',
				ref : '../markTypeFlag',
				hiddenName : 'entity/markTypeFlag',
				emptyText : '--请选择--',
				allowBlank : false,
				anchor : '85%',
				store : [['1', '公司标准'], ['2', '中性'], ['3', '贴牌'], ['0', '不贴标']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.markTypeFlag.reset();
					}
				}
			}, {
				ref : '../markSpecName',
				name : 'entity/markSpecName',
				xtype : 'textfield',
				fieldLabel : '唛头显示元件型号',
				anchor : '85%',
				allowBlank : true
			}, {
				xtype : 'displayfield',
				height : '5',
				colspan : 2
			}, {

				xtype : 'combobox',
				fieldLabel : '加贴特殊唛头',
				ref : '../markSpecialFlag',
				hiddenName : 'entity/markSpecialFlag',
				emptyText : '--请选择--',
				allowBlank : false,
				anchor : '85%',
				store : [['Y', '是'], ['N', '否']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.inputPanel.markSpecialFlag.reset();
					}
				}
			}, {
				xtype : 'hidden',
				name : 'entity/batchNoStr',
				ref : '../batchNoStr'
			}, {
				xtype : 'hidden',
				name : 'entity/batchNoStr2',
				ref : '../batchNoStr2'
			}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}