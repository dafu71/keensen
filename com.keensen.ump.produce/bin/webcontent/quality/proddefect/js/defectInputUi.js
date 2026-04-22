com.keensen.ump.produce.quality.ProddefectInputMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initChooseJmWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'proddefectinputmgr',
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
					height : 110,
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
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
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
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'tmLength',
						header : '膜片长度'
					}, {
						dataIndex : 'tache',
						header : '产生工序'
					}, {
						dataIndex : 'dealType',
						header : '处理方式'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.defect.queryProdDefectListByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
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
							name : 'method'
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

	this.initInputWindow = function() {

		var _this = this;

		this.deptStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['元件制造部', '元件制造部'], ['膜片制造部', '膜片制造部'],
							/* ['生产管理部', '生产管理部'], ['财务部-仓库组', '财务部-仓库组'], */
							['设备能源部', '设备能源部'], ['研发中心-工艺部', '研发中心-工艺部'],
							['研发中心-研发部', '研发中心-研发部']

					]
				});

		this.firstStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['固损', '固损'], ['不良', '不良']]
				});

		var selModel4EditDefect = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4EditDefect = this.listPanel4EditDefect
				|| new Ext.fn.EditListPanel({
					region : 'center',
					hsPage : false,
					viewConfig : {
						forceFit : true
					},
					clicksToEdit : 1,
					selModel : selModel4EditDefect,
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer(), selModel4EditDefect,
							{
								dataIndex : 'first',
								header : '一级目录'
							}, {
								dataIndex : 'second',
								header : '二级目录'
							}, {
								dataIndex : 'third',
								header : '三级目录'
							}, {
								dataIndex : 'fourth',
								header : '四级目录'
							}, {
								dataIndex : 'amount',
								header : '数量(支)',
								css : 'background:#c7c7c7;',
								editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
										{
											allowBlank : false,
											scope : this,
											allowNegative : false,
											decimalPrecision : 3,
											minValue : 0,
											listeners : {
												'specialkey' : function() {
													return false;
												}
											}
										}))
							}, {
								dataIndex : 'belongType',
								header : '元件归属类型',
								css : 'background:#c7c7a7;',
								editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
										{
											allowBlank : false,
											mode : 'local',
											emptyText : '--请选择--',
											editable : false,
											store : _this.belongTypeStore,
											displayField : "name",
											valueField : "code",
											scope : this,
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}))
							}, {
								dataIndex : 'tache',
								header : '产生工序',
								css : 'background:#c7c7b7;',
								editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
										{
											//allowBlank : false,
											mode : 'local',
											emptyText : '--请选择--',
											editable : false,
											store : _this.tacheStore,
											displayField : "name",
											valueField : "code",
											scope : this,
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}))
							}, {
								dataIndex : 'dealType',
								header : '处理方式',
								css : 'background:#c7c7a7;',
								editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
										{
											//allowBlank : false,
											mode : 'local',
											emptyText : '--请选择--',
											editable : false,
											store : _this.dealTypeStore,
											displayField : "name",
											valueField : "code",
											scope : this,
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}))
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.quality.defect.queryComponentDefect4Create.biz.ext',
						root : 'data',
						hsPage : false,
						autoLoad : true,
						autoScroll : true,
						clicksToEdit : 1,
						baseParams : {

					}	,
						fields : [{
									name : 'defectId'
								}, {
									name : 'first'
								}, {
									name : 'second'
								}, {
									name : 'third'
								}, {
									name : 'fourth'
								}, {
									name : 'amount'
								}, {
									name : 'tache'
								}, {
									name : 'belongType'
								}, {
									name : 'dealType'
								}]
					})
				})

		this.queryPanel4EditDefect = this.queryPanel4EditDefect
				|| new Ext.fn.QueryPanel({
							height : 70,
							columns : 4,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '一级目录',
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
										_this.queryPanel4EditDefect.first
												.reset()
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
							}]
						});

		this.queryPanel4EditDefect.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.editDefectWindow.hide();
					}

				});

		this.editDefectWindow = this.editDefectWindow || new Ext.Window({
					title : '元件不良录入',
					recordId : '',// 关联的卷膜记录ID
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4EditDefect,
							this.listPanel4EditDefect],
					buttons : [{
								text : '保存',
								handler : this.onSave,
								scope : this
							}]

				});

	}

	this.initChooseJmWindow = function() {

		var selModel4ChooseJm = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChooseJm = this.listPanel4ChooseJm
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onChooseOk
							}],
					hsPage : true,
					selModel : selModel4ChooseJm,
					delUrl : 'com.keensen.ump.base.base.deleteMarketingSpec.biz.ext',
					columns : [new Ext.grid.RowNumberer(), selModel4ChooseJm, {
								dataIndex : 'recordId',
								header : '卷膜记录ID'
							}, {
								dataIndex : 'batchNo',
								header : '卷膜序号'
							}, {
								dataIndex : 'produceDt',
								header : '卷膜日期'
							}, {
								dataIndex : 'orderNo',
								header : '订单号'
							}, {
								dataIndex : 'prodSpecName',
								header : '卷膜执行型号'
							}, {
								dataIndex : 'tumoBatchStr',
								header : '膜片批号'
							}, {
								dataIndex : 'blankingSize',
								header : '下料尺寸'
							}, {
								dataIndex : 'pageCnt',
								header : '页数'
							}, {
								dataIndex : 'pageWidth',
								header : '页宽'
							}, {
								dataIndex : 'tmLength',
								header : '膜片长度'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.quality.defect.queryJmByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {},
						fields : [{
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
								}]
					})
				})

		this.queryPanel4ChooseJm = this.queryPanel4ChooseJm
				|| new Ext.fn.QueryPanel({
							height : 110,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
								xtype : 'datetimefield',
								name : 'condition/produceDtStart',
								fieldLabel : '生产时间',
								colspan : 1,
								anchor : '100%',
								// allowBlank : false,
								editable : true,
								format : 'Y-m-d H:i',
								value : new Date().add(Date.DAY, -1)
										.format('Y-m-d 00:00')
							}, {
								xtype : 'datetimefield',
								name : 'condition/produceDtEnd',
								fieldLabel : '至',
								colspan : 1,
								anchor : '100%',
								editable : true,
								format : 'Y-m-d H:i',
								// allowBlank : false,
								value : new Date().add(Date.DAY, 1)
										.format('Y-m-d 00:00')
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 2
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '100%',
								fieldLabel : '卷膜执行型号'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '卷膜序号%-%'
							}]
						});

		this.queryPanel4ChooseJm.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseJmWindow.hide();
					}

				});

		this.chooseJmWindow = this.chooseJmWindow || new Ext.Window({
					title : '卷膜选择',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4ChooseJm, this.listPanel4ChooseJm]

				});
	}
}