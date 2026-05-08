com.keensen.ump.produce.quality.ProddefectListMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'proddefectlistmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.belongTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['研发库存', '研发库存'], ['研发在制', '研发在制'],
							['产品库存', '产品库存'], ['返厂元件', '返厂元件'],
							['生产制程', '生产制程']]
				});

		this.dealTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['报废-切割', '报废-切割'], ['报废-贴中性标处理', '报废-贴中性标处理'],
							['返工', '返工'], ['降级', '降级']]
				});

		this.tacheStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['卷膜', '卷膜'], ['气检', '气检'], ['切边', '切边'],
							['包装', '包装'], ['水测', '水测']]
				});

		this.firstStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['固损', '固损'], ['不良', '不良']]
				});

		this.secondStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['外观', '外观'], ['性能', '性能'], ['尺寸', '尺寸'],
							['取样损耗', '取样损耗'], ['拼接损耗', '拼接损耗'],
							['试卷损耗', '试卷损耗']]
				});

	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 140,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片质检标准查询】',
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '不良一级目录',
								ref : '../first',
								hiddenName : 'condition/first',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.firstStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.first.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/second',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '二级目录%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/third',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '三级目录%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/fourth',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '四级目录%-%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '元件归属类型',
								ref : '../belongType',
								hiddenName : 'condition/belongType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.belongTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.belongType.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '产生工序',
								ref : '../tache',
								hiddenName : 'condition/tache',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.tacheStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.tache.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '处理方式',
								ref : '../dealType',
								hiddenName : 'condition/dealType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.dealTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.dealType.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '卷膜序号%-%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/dept',
								fieldLabel : '责任部门%-%',
								anchor : '100%',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/rp',
								fieldLabel : '责任人%-%',
								anchor : '100%',
								colspan : 1
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// hidden : true,
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
			// title : '【膜片质检标准列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
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
			delUrl : 'com.keensen.ump.produce.quality.defect.deleteComponentDefect.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'belongType',
						header : '元件归属类型'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'batchNo',
						header : '卷膜序号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批号'
					}, {
						dataIndex : 'prodSpecName',
						header : '卷膜执行型号'
					}, {
						dataIndex : 'first',
						header : '不良一级目录'
					}, {
						dataIndex : 'second',
						header : '不良二级目录'
					}, {
						dataIndex : 'third',
						header : '不良三级目录'
					}, {
						dataIndex : 'fourth',
						header : '不良四级目录'
					}, {
						dataIndex : 'createTime',
						header : '不良记录时间'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'tmLength',
						header : '膜片长度'
					}, {
						dataIndex : 'tache',
						header : '产生工序'
					}, {
						dataIndex : 'reason',
						header : '产生原因'
					}, {
						dataIndex : 'dept',
						header : '责任部门'
					}, {
						dataIndex : 'rp',
						header : '责任人'
					}, {
						dataIndex : 'createName',
						header : '记录人'
					}, {
						dataIndex : 'dealType',
						header : '处理方式'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.defect.queryComponentDefectByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'rp'
						}, {
							name : 'reason'
						}, {
							name : 'dept'
						}, {
							name : 'method'
						}, {
							name : 'recordId'
						}, {
							name : 'batchNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'blankingSize'
						}, {
							name : 'pageCnt'
						}, {
							name : 'pageWidth'
						}, {
							name : 'tmLength'
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
							name : 'id'
						}, {
							name : 'amount'
						}, {
							name : 'belongType'
						}, {
							name : 'tache'
						}, {
							name : 'dealType'
						}, {
							name : 'reason'
						}, {
							name : 'dept'
						}, {
							name : 'pgUserId'
						}, {
							name : 'pgUserName'
						}, {
							name : 'pgUpdateTime'
						}, {
							name : 'first'
						}, {
							name : 'second'
						}, {
							name : 'third'
						}, {
							name : 'fourth'
						}]
			})
		})
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
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.defect.expandComponentDefect.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.defect.saveComponentDefectByPg.biz.ext',
				fields : [{
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'batchNo',
							fieldLabel : '卷膜序号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'prodSpecName',
							fieldLabel : '卷膜执行型号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'defectName',
							fieldLabel : '不良项目',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							allowBlank : false,
							name : 'entity/amount',
							dataIndex : 'amount',
							fieldLabel : '数量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '元件归属类型',
							dataIndex : 'belongType',
							ref : '../../belongType',
							hiddenName : 'entity/belongType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : _this.belongTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.belongType.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '产生工序',
							dataIndex : 'tache',
							ref : '../../tache',
							hiddenName : 'entity/tache',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.tacheStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.tache.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '处理方式',
							dataIndex : 'dealType',
							ref : '../../dealType',
							hiddenName : 'entity/dealType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.dealTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.dealType.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/reason',
							dataIndex : 'reason',
							fieldLabel : '产生原因',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/dept',
							dataIndex : 'dept',
							fieldLabel : '责任部门',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/rp',
							dataIndex : 'rp',
							fieldLabel : '责任人',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}
}