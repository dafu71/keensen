com.keensen.ump.produce.component.YxorderInputMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.opt = '';

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();

		this.buildExcelUploadWin();

		this.initAddJmSpecNameWindow();
		this.initAddJmSpecNameWindow2();
		this.initAddJmSpecNameWindow3();

		this.initAddOrderWindow();
		
		this.initStockConfirmWindow();
		
		this.initChooseLableWindow();
		this.initChooseMarkWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'yxorderinputmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['待仓库确认', '待仓库确认'], ['待计划确认', '待计划确认'],
							['已确认', '已确认']]
				});

		this.jmSpecName4StandardStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.orderrecord.queryJmSpecName4Standard.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'jmSpecName'
					}]
		})

		this.jmSpecName4NotStandardStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.orderrecord.queryJmSpecName4NotStandard.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'jmSpecName'
					}]
		})

		// 密封圌位置，包括:6.35+1mm、25+2mm、55+2mm 30±2mm
		this.sealPositionStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['6.35±1mm', '6.35±1mm'], ['25±2mm', '25±2mm'],
							['55±2mm', '55±2mm'], ['30±2mm', '30±2mm'],
							['10±2mm', '10±2mm']]
				});

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.goodsWithReportStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否'], ['电子版检测报告', '电子版检测报告']]
				});

		this.agreeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['同意', '同意'], ['不同意', '不同意']]
				});

		// 下拉选项：红、橙、黄、绿、青、蓝、紫
		this.colorStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['红', '红'], ['橙', '橙'], ['黄', '黄'], ['绿', '绿'],
							['青', '青'], ['蓝', '蓝'], ['紫', '紫'], ['灰', '灰']]
				});

		this.orderTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['公司标准', '公司标准'], ['非公司标准', '非公司标准'],
							['有外观评审', '有外观评审']]
				});
		// 工业、商用、家用
		this.typeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['工业膜', '工业膜'], ['家用膜', '家用膜'], ['商用膜', '商用膜'],
							['膜片', '膜片'], ['其他', '其他']]
				});

		// 8寸、4寸、类4寸、常规通量(家用)、大通量(家用)、其它
		this.hpmcStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['8寸', '8寸'], ['4寸', '4寸'], ['类4寸', '类4寸'],
							['常规通量(家用)', '常规通量(家用)'], ['大通量(家用)', '大通量(家用)'],
							['其他', '其他'], ['膜片', '膜片']]
				});

		// 下拉选项：经济款、待处理款、普通款，默认为普通款
		this.styleStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['经济款', '经济款'], ['待处理款', '待处理款'], ['普通款', '普通款']]
				});

		// 测试标准选项：司标XLP、司标ULP、司标BW、司标SW、司标NF、司标NF1-R、家用(1812/2012/2812)、家用(3012/3213)、家用NF、
		// 其他(测试条件修改后显示其他)，默认为“公司标准”
		this.testStandStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标XLP', '司标XLP'], ['司标ULP', '司标ULP'],
							['司标BW', '司标BW'], ['司标SW', '司标SW'],
							['司标NF', '司标NF'], ['司标NF1-R', '司标NF1-R'],
							['家用(1812/2012/2812)', '家用(1812/2012/2812)'],
							['家用(3012/3213)', '家用(3012/3213)'], ['其他', '其他'],
							['公司标准', '公司标准']]
				});

		// 端盖类型选项：蜂窝、格栅、梳齿、旋熔、定制、其他,未选则默认公司标准
		// 删除其他、公司标准、旋熔。同时要改成必选项，不选不能下单 2025-07-30 罗
		// 梳齿改梳齿五星蜂窝
		// 蜂窝需要改为帽檐蜂窝（非五星） 2025-08-04
		this.lidStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['帽檐蜂窝(非五星)', '帽檐蜂窝(非五星)'], ['格栅', '格栅'],
							['梳齿五星蜂窝', '梳齿五星蜂窝'], ['定制', '定制']]
				});

		// 卷膜胶带选项：印刷双层、印刷三层、网纹 蓝胶带 绿胶带 白胶带 黄胶带 灰胶带
		this.tapeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['印刷双层', '印刷双层'], ['印刷三层', '印刷三层'], ['网纹', '网纹'],
							['公司标准', '公司标准'], ['蓝胶带', '蓝胶带'], ['绿胶带', '绿胶带'],
							['白胶带', '白胶带'], ['黄胶带', '黄胶带'], ['灰胶带', '灰胶带'],
							['水光蓝胶带', '水光蓝胶带'], ['黑色亮光胶带', '黑色亮光胶带'],
							['耐酸碱白胶带', '耐酸碱白胶带']]
				});

		// 制作方式下拉选项：印刷、打印
		this.makeLabelStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['印刷', '印刷'], ['打印', '打印'], ['UV打印', 'UV打印'],
							['客供', '客供'], ['无需制作', '无需制作']]
				});

		// 材质：打印纸/PET不干胶
		this.materialStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['打印纸', '打印纸'], ['PET不干胶', 'PET不干胶'], ['无', '无']]
				});

		// 材质：白色/透明
		this.backStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['白色', '白色'], ['透明', '透明'], ['客户定制', '客户定制'],
							['无', '无'], ['参考PANTONE369C', '参考PANTONE369C']]
				});

		// 第二标签贴的位置下拉选项：产品上、真空袋上、其他
		this.positionLabelStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['产品上', '产品上'], ['真空袋上', '真空袋上'], ['其他', '其他']]
				});

		// 第二标签贴的位置下拉选项：包装箱上、打托保鲜膜上、其他，默认无
		this.positionMarkStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['包装箱上', '包装箱上'], ['打托保鲜膜上', '打托保鲜膜上'],
							['其他', '其他']]
				});
		// 托盘材质 "下拉选项：普通木质、出口熏蒸木质、出口免熏蒸木质、塑料，默认“公司标准”"
		this.trayStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['普通木质', '普通木质'], ['出口免熏蒸木质', '出口免熏蒸木质'],
							['塑料', '塑料'], ['不打托', '不打托']]
				});

		// 托盘尺寸
		// 下拉选项：1100mm×1100mm、1200mm×800mm、1200mm×1000mm、1219mm×1016mm，默认“公司标准”
		this.traySizeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['1100mm×1100mm', '1100mm×1100mm'],
							['1200mm×800mm', '1200mm×800mm'],
							['1200mm×1000mm', '1200mm×1000mm'],
							['1219mm×1016mm', '1219mm×1016mm'],
							['公司标准', '公司标准']]
				});

		this.orderMaterSpecStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.yxorderbase.queryOrderMaterSpec.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'materSpecName'
					}, {
						name : 'materSpecName2'
					}, {
						name : 'materSpecId'
					}]
		})

		// 订单类型
		this.orderBrandStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['常规产品', '常规产品'], ['展品', '展品'], ['样品', '样品']]
				});

		// 调整原因选项：插单、调单、改单、终止、暂停、其他
		this.adjustReasonStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['插单', '插单'], ['调单', '调单'], ['改单', '改单'],
							['终止', '终止'], ['暂停', '暂停'], ['其他', '其他']]
				});

		// 是否接单
		this.ifgetStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['需工艺确认', '需工艺确认'], ['需品管确认', '需品管确认'], ['是', '是'],
							['否', '否']]
				});

		this.gyyStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['订单确认', '订单计划员确认'], ['计划员确认', '物控计划员确认']]
				});

		this.labelDrawingLogoStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.paramaterspec.queryLabelDrawingLogo.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'logo'
					}]
		})

		this.markDrawingLogoStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.paramaterspec.queryMarkDrawingLogo.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'logo'
					}]
		})

		this.labelDrawingSpecNameStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.paramaterspec.queryLabelDrawingSpecName.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'specName'
					}]
		})

		this.markDrawingSpecNameStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.paramaterspec.queryMarkDrawingSpecName.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'specName'
					}]
		})

		// 计划状态 制定中，申购邮件已发，采购已下单
		this.materPlanStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['制定中', '制定中'], ['申购邮件已发', '申购邮件已发'],
							['采购已下单', '采购已下单']]
				});

		// 到货状态 未到货，已到货
		this.materGoodsStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['未到货', '未到货'], ['已到货', '已到货']]
				});

		// 物料名称 标签、唛头、真空袋、纸箱
		this.materNameStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['标签', '标签'], ['唛头', '唛头'], ['真空袋', '真空袋'],
							['纸箱', '纸箱'], ['浓网', '浓网'], ['第二标签', '第二标签'],
							['第二唛头', '第二唛头']]
				});

		// 物料单位 个/张
		this.materUnitStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['个', '个'], ['张', '张']]
				});

		this.baseMaterStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.mater.queryBaswMater.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {},
					fields : [{
								name : 'id'
							}, {
								name : 'drawingCode'
							}, {
								name : 'materCode'
							}, {
								name : 'materName'
							}, {
								name : 'specName'
							}, {
								name : 'unit'
							}]
				})

		this.yxorderStockAmountStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.common.query.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {
				'nameSqlId' : 'com.keensen.ump.produce.component.yxorderbase.queryYxorderStockAmount'
			},
			fields : [{
						name : 'materCode'
					}, {
						name : 'amount'
					}, {
						name : 'materName'
					}, {
						name : 'unit'
					}, {
						name : 'specName'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNoStr',
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号%-%'
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/deliveryDateStart',
										'condition/deliveryDateEnd'],
								fieldLabel : "约定发货日期",
								format : "Y-m-d"
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '订单状态',
								ref : '../state',
								hiddenName : 'condition/state',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.stateStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.state.reset()
									}
								}
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
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : true,

			tbar : [{
						text : '新增订单',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '->', {
						text : '订单仓库确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onStockConfirm
					}, '-', {
						text : '订单计划确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirm
					}],

			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'deliveryDate',
						header : '与生产管理部<br>约定的发货日期'
					}, {
						dataIndex : 'ifReview',
						header : '是否有外观评审'
					}, {
						dataIndex : 'reviewNo',
						header : '评审号'
					}, {
						dataIndex : 'ifStandard',
						header : '是否公司标准'
					}, {
						dataIndex : 'jmSpecName',
						header : '卷膜型号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'wetAmount',
						header : '可接受湿膜数量'
					}, {
						dataIndex : 'labelSn',
						header : '标签序列号段'
					}, {
						dataIndex : 'markSn',
						header : '唛头序列号段'
					}, {
						dataIndex : 'state',
						header : '状态'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.orderrecord.queryOrderInputListByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
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
							name : 'relationId'
						}, {
							name : 'jmSpecName'
						}, {
							name : 'ifReview'
						}, {
							name : 'ifStandard'
						}, {
							name : 'reviewNo'
						}, {
							name : 'reviewId'
						}, {
							name : 'amount'
						}, {
							name : 'wetAmount'
						}, {
							name : 'labelSn'
						}, {
							name : 'markSn'
						}, {
							name : 'orderNo'
						}, {
							name : 'deliveryDate'
						}, {
							name : 'state'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;

		var selModel4Add = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4Add = this.listPanel4Add || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			tbar : [{
						text : '<p style="color:red;font-size:14px;">无外观评审-司标</p>',
						autoHeight : true,
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddList
					}, '-', {
						text : '<p style="color:red;font-size:14px;">无外观评审-非司标</p>',
						autoHeight : true,
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddList2
					}, '-', {
						text : '<p style="color:red;font-size:14px;">有外观评审</p>',
						autoHeight : true,
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddList3
					}, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel4Add
					}],
			autoScroll : false,
			selModel : selModel4Add,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel4Add, {
						dataIndex : 'ifReview',
						header : '是否有外观评审'
					}, {
						dataIndex : 'reviewNo',
						header : '评审号'
					}, {
						dataIndex : 'ifStandard',
						header : '是否公司标准'
					}, {
						dataIndex : 'jmSpecName',
						header : '卷膜型号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'wetAmount',
						header : '可接受湿膜数量'
					}, {
						dataIndex : 'labelSn',
						header : '标签序列号段'
					}, {
						dataIndex : 'markSn',
						header : '唛头序列号段'
					}, {
						dataIndex : 'state',
						header : '状态'
					}],
			store : new Ext.data.JsonStore({
						url : '1.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

			}			,
						fields : [{
									name : 'jmSpecName'
								}, {
									name : 'ifReview'
								}, {
									name : 'ifStandard'
								}, {
									name : 'reviewNo'
								}, {
									name : 'reviewId'
								}, {
									name : 'amount'
								}, {
									name : 'wetAmount'
								}, {
									name : 'labelSn'
								}, {
									name : 'markSn'
								}, {
									name : 'state'
								}]
					})
		})

		this.inputPanel4Add = this.inputPanel4Add || new Ext.fn.InputPanel({
					height : 120,
					region : 'north',
					baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 12,
					saveUrl : 'com.keensen.ump.produce.component.apply.add.biz.ext',
					fields : [{
								xtype : 'textfield',
								name : 'orderNo',
								ref : '../orderNo',
								allowBlank : false,
								fieldLabel : '订单号',
								colspan : 6

							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 12
							}, {
								xtype : 'datefield',
								name : 'deliveryDate',
								fieldLabel : '与生产管理部<br>约定的发货日期',
								colspan : 6,
								anchor : '100%',
								allowBlank : false,
								editable : true,
								format : 'Y-m-d'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputPanel4Add.form.reset();
									this.inputWindow4Add.hide();
								}
							}]

				})

		this.inputWindow4Add = this.inputWindow4Add || new Ext.Window({
					title : '新增',
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
					items : [this.inputPanel4Add, this.listPanel4Add]

				});

	}

	this.initAddJmSpecNameWindow = function() {
		var _this = this;

		this.addJmSpecNameWindow = this.addJmSpecNameWindow
				|| new Ext.fn.FormWindow({
					title : '无外观评审-司标',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
								xtype : 'inputpanel',
								baseCls : "x-plain",
								columns : 2,
								saveUrl : '1.biz.ext',
								fields : [{
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'combobox',
											forceSelection : false,
											// readOnly : true,
											allowBlank : false,
											mode : 'local',
											fieldLabel : '卷膜型号',
											ref : '../../jmSpecName',
											hiddenName : 'jmSpecName',
											anchor : '95%',
											colspan : 1,
											emptyText : '--请选择--',
											editable : true,
											store : _this.jmSpecName4StandardStore,
											displayField : "jmSpecName",
											valueField : "jmSpecName",
											listeners : {
												"expand" : function(A) {
													this.reset()
												},
												'specialkey' : function() {
													return false;
												}
											}
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'numberfield',
											ref : '../../amount',
											allowBlank : false,
											fieldLabel : '数量',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'numberfield',
											ref : '../../wetAmount',
											allowBlank : false,
											fieldLabel : '可接受湿膜数量',
											anchor : '95%',
											colspan : 1
										}]
							}]
				});

		this.addJmSpecNameWindow.buttons[0].hide();
		this.addJmSpecNameWindow.buttons[1].hide();

		this.addJmSpecNameWindow.addButton({
					text : "确定",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onInsertJmSpecName4Standard
				});

		this.addJmSpecNameWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.addJmSpecNameWindow.items.items[0].form.reset();
						this.addJmSpecNameWindow.hide();
					}
				});
	}

	this.initAddJmSpecNameWindow2 = function() {
		var _this = this;

		this.addJmSpecNameWindow2 = this.addJmSpecNameWindow2
				|| new Ext.fn.FormWindow({
					title : '无外观评审-非司标',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
								xtype : 'inputpanel',
								baseCls : "x-plain",
								columns : 2,
								saveUrl : '1.biz.ext',
								fields : [{
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'combobox',
											forceSelection : false,
											// readOnly : true,
											allowBlank : false,
											mode : 'local',
											fieldLabel : '卷膜型号',
											ref : '../../jmSpecName',
											hiddenName : 'jmSpecName',
											anchor : '95%',
											colspan : 1,
											emptyText : '--请选择--',
											editable : true,
											store : _this.jmSpecName4NotStandardStore,
											displayField : "jmSpecName",
											valueField : "jmSpecName",
											listeners : {
												"expand" : function(A) {
													this.reset()
												},
												'specialkey' : function() {
													return false;
												}
											}
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'numberfield',
											ref : '../../amount',
											allowBlank : false,
											fieldLabel : '数量',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'numberfield',
											ref : '../../wetAmount',
											allowBlank : false,
											fieldLabel : '可接受湿膜数量',
											anchor : '95%',
											colspan : 1
										}]
							}]
				});

		this.addJmSpecNameWindow2.buttons[0].hide();
		this.addJmSpecNameWindow2.buttons[1].hide();

		this.addJmSpecNameWindow2.addButton({
					text : "确定",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onInsertJmSpecName4NotStandard
				});

		this.addJmSpecNameWindow2.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.addJmSpecNameWindow2.items.items[0].form.reset();
						this.addJmSpecNameWindow2.hide();
					}
				});
	}

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		var _this = this;
		this.excelUploadWin = this.excelUploadWin || new Ext.Window({
			title : '导入评审Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.component.importReview.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择评审',
							id : reviewupload,
							allowBlank : false,
							inputType : 'file',
							listeners : {
								'render' : function(e) {
									const fileId = e.autoEl.id
									var f = document.getElementById(fileId);
									f.addEventListener('change',
											function(event) {
												// const file =
												// event.target.files[0];
												// alert(file)
												_this.doUpload();

											});

								}
							}
						}]
			}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin.hide();
						}
					}]
		});
	}

	this.initAddJmSpecNameWindow3 = function() {
		var _this = this;

		var selModel4AddJmSpecName = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel4AddJmSpecName = this.listPanel4AddJmSpecName
				|| new Ext.fn.EditListPanel({

					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : false,
					autoScroll : true,
					clicksToEdit : 1,
					selModel : selModel4AddJmSpecName,
					columns : [new Ext.grid.RowNumberer(),
							selModel4AddJmSpecName, {
								dataIndex : 'reviewNo',
								sortable : true,
								width : 140,
								header : '评审号'
							}, {
								dataIndex : 'jmSpecName',
								sortable : true,
								width : 100,
								header : '卷膜型号'
							}, {
								dataIndex : 'labelSn',
								sortable : true,
								width : 100,
								header : '标签序列号'
							}, {
								dataIndex : 'markSn',
								sortable : true,
								width : 100,
								header : '唛头序列号'
							}, {

								dataIndex : 'amount',
								sortable : true,
								width : 100,
								header : '数量',
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

							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.orderrecord.queryReview.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : '',
						baseParams : {

					}	,
						fields : [{
									name : 'reviewId'
								}, {
									name : 'jmSpecName'
								}, {
									name : 'labelSn'
								}, {
									name : 'markSn'
								}, {
									name : 'reviewNo'
								}, {
									name : 'amount'
								}]
					})
				})

		this.addJmSpecNameWindow3 = this.addJmSpecNameWindow3
				|| new Ext.Window({
							title : '有外观评审',
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
							items : [this.listPanel4AddJmSpecName],
							buttons : [{
										text : "确定",
										scope : this,
										iconCls : 'icon-application_add',
										handler : this.onInsertJmSpecName4Review
									}, {
										text : "关闭",
										scope : this,
										handler : function() {
											this.addJmSpecNameWindow3.hide();
										}
									}]

						});

	}

	this.initAddOrderWindow = function() {

		var _this = this;
		this.addOrderWindow = this.addOrderWindow || new Ext.fn.FormWindow({
			title : '生产计划录入',
			height : 600,
			width : 1024,
			autoScroll : true,
			resizable : true,
			minimizable : false,
			maximizable : true,
			maximized : true,
			items : [{
				xtype : 'editpanel',
				autoScroll : true,
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					if (r.err != '0') {
						Ext.Msg.show({
									width : 400,
									title : "操作提示",
									msg : r.msg,
									icon : Ext.Msg.WARNING,
									buttons : Ext.Msg.OK,
									fn : function() {

									}
								})
					} else {
						_this.addOrderWindow.items.items[0].form.reset();
						_this.addOrderWindow.hide();
						_this.listPanel.refresh();
					}
				},
				columns : 24,
				loadUrl : 'com.keensen.ump.produce.component.orderrecord.expandOrderInputList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveEntity.biz.ext',
				fields : [{
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">基本信息</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					xtype : 'textfield',
					name : 'entity/orderNo',
					dataIndex : 'orderNo',
					ref : '../../orderNo',
					allowBlank : false,
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					fieldLabel : '<a class="mya" title="订单编号编码说明" onclick="describeOrderNo();">销售订单编号</a>'
				}, {
					xtype : 'textfield',
					readOnly : true,
					allowBlank : false,
					fieldLabel : '销售订单类型',
					ref : '../../orderType',
					name : 'entity/orderType',
					dataIndex : 'orderType',
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'combobox',
					forceSelection : true,
					allowBlank : false,
					mode : 'local',
					fieldLabel : '款式',
					ref : '../../style',
					hiddenName : 'entity/style',
					dataIndex : 'style',
					anchor : '100%',
					colspan : 6,
					emptyText : '--请选择--',
					editable : false,
					store : this.styleStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							this.reset()
						}
					}
				}, {
					xtype : 'textfield',
					readOnly : true,
					allowBlank : false,
					fieldLabel : '卷膜型号',
					ref : '../../materSpecName2',
					name : 'entity/materSpecName2',
					dataIndex : 'materSpecName2',
					anchor : '100%',
					colspan : 6

				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : false,
					allowBlank : false,
					// readOnly : true,
					mode : 'local',
					fieldLabel : '产品类型',
					ref : '../../type',
					hiddenName : 'entity/type',
					dataIndex : 'type',
					anchor : '100%',
					colspan : 6,
					emptyText : '--请选择--',
					editable : false,
					store : this.typeStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							this.reset()
						},
						"select" : function(combo, record, index) {
							var type = combo.getValue();
							var back = type == '工业膜' ? '透明' : '白色';
							_this.addOrderWindow.back.setValue(back);
						}
					}
				}, {
					xtype : 'combobox',
					forceSelection : true,
					allowBlank : false,
					// readOnly : true,
					mode : 'local',
					fieldLabel : '货品名称',
					ref : '../../hpmc',
					hiddenName : 'entity/hpmc',
					dataIndex : 'hpmc',
					anchor : '100%',
					colspan : 6,
					emptyText : '--请选择--',
					editable : false,
					store : this.hpmcStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							this.reset()
						}
					}
				}, {
					xtype : 'textfield',
					name : 'entity/ddxj',
					dataIndex : 'ddxj',
					fieldLabel : '销售订单星级',
					// readOnly : true,
					hidden : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'textfield',
					name : 'entity/dryWet',
					ref : '../../dryWet',
					dataIndex : 'dryWet',
					fieldLabel : '干/湿',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'numberfield',
					name : 'entity/orderAmount',
					dataIndex : 'orderAmount',
					ref : '../../orderAmount',
					allowBlank : false,
					fieldLabel : '订单数量(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'textfield',
					name : 'entity/wetPercent',
					ref : '../../wetPercent',
					dataIndex : 'wetPercent',
					// fieldLabel : '湿膜比例',
					fieldLabel : '可接受湿膜(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'numberfield',
					name : 'entity/dryAmount',
					dataIndex : 'dryAmount',
					ref : '../../dryAmount',
					allowBlank : false,
					fieldLabel : '发库存干膜(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					listeners : {
						'specialkey' : function() {
							return false;
						},
						'change' : function(o, newValue, oldValue) {
							if (newValue == oldValue)
								return false;
							var wetAmount = _this.addOrderWindow.wetAmount
									.getValue();
							var dryAmount = newValue;
							var stockAmount = parseInt(dryAmount)
									+ parseInt(wetAmount);
							var orderAmount = _this.addOrderWindow.orderAmount
									.getValue();
							var prodAmount = orderAmount - stockAmount;
							_this.addOrderWindow.stockAmount
									.setValue(stockAmount);
							_this.addOrderWindow.prodAmount
									.setValue(prodAmount);
						}
					}
				}, {
					xtype : 'numberfield',
					name : 'entity/wetAmount',
					dataIndex : 'wetAmount',
					ref : '../../wetAmount',
					allowBlank : false,
					fieldLabel : '发库存湿膜(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					listeners : {
						'specialkey' : function() {
							return false;
						},
						'change' : function(o, newValue, oldValue) {
							if (newValue == oldValue)
								return false;
							var dryAmount = _this.addOrderWindow.dryAmount
									.getValue();
							var wetAmount = newValue;
							var stockAmount = parseInt(dryAmount)
									+ parseInt(wetAmount);
							var orderAmount = _this.addOrderWindow.orderAmount
									.getValue();
							var prodAmount = orderAmount - stockAmount;
							_this.addOrderWindow.stockAmount
									.setValue(stockAmount);
							_this.addOrderWindow.prodAmount
									.setValue(prodAmount);
						}
					}
				}, {
					xtype : 'trigger',
					emptyText : '单击旁边按钮计算',
					name : 'entity/stockAmount',
					dataIndex : 'stockAmount',
					ref : '../../stockAmount',
					// readOnly : true,
					allowBlank : false,
					editable : false,
					fieldLabel : '发库存膜元件(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onCalc();
					},
					regex : /^\d+(\.\d+)?$/,
					regexText : "不合法的数据格式"
				}, {
					xtype : 'trigger',
					emptyText : '单击旁边按钮计算',
					name : 'entity/prodAmount',
					dataIndex : 'prodAmount',
					ref : '../../prodAmount',
					// readOnly : true,
					allowBlank : false,
					editable : false,
					fieldLabel : '需生产/入库(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onCalc();
					},
					regex : /^\d+(\.\d+)?$/,
					regexText : "不合法的数据格式"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'datefield',
					format : "Y-m-d",
					name : 'entity/orderDate',
					dataIndex : 'orderDate',
					ref : '../../orderDate',
					allowBlank : false,
					minValue : new Date(),
					// readOnly : true,
					fieldLabel : '生产计划日期',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					listeners : {
						scope : this,
						"change" : function(o, newvalue, oldvalue) {
							_this.onCalcPeriod();
						}
					}
				}, {
					xtype : 'textfield',
					name : 'entity/deliveryDate',
					dataIndex : 'deliveryDate',
					ref : '../../deliveryDate',
					allowBlank : true,
					hidden : true,
					fieldLabel : '交货日期',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					listeners : {
						scope : this,
						"change" : function(o, newvalue, oldvalue) {

						}
					}
				}, {
					xtype : 'datefield',
					format : "Y-m-d",
					name : 'entity/demandStockDate',
					dataIndex : 'demandStockDate',
					ref : '../../demandStockDate',
					allowBlank : false,
					fieldLabel : '入库日期',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					listeners : {
						scope : this,
						"change" : function(o, newvalue, oldvalue) {
							_this.onCalcPeriod();
						}
					}
				}, {
					xtype : 'trigger',
					name : 'entity/period',
					emptyText : '单击旁边按钮计算',
					dataIndex : 'period',
					ref : '../../period',
					allowBlank : false,
					// readOnly:true,
					editable : false,
					fieldLabel : '生产周期(天)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onCalcPeriod();
					}
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">性能要求<br>测试条件</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					name : 'entity/saltLow',
					dataIndex : 'saltLow',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '最低脱盐率(%)',
					// minValue : 0,
					// decimalPrecision : 2,
					allowBlank : false
				}, {
					name : 'entity/gpdLow',
					dataIndex : 'gpdLow',
					anchor : '100',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '产水量下限(GPD)',
					// minValue : 0,
					// decimalPrecision : 0,
					allowBlank : false
				}, {
					name : 'entity/gpdUp',
					dataIndex : 'gpdUp',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '产水量上限(GPD)',
					// minValue : 0,
					// decimalPrecision : 0,
					allowBlank : false
				}, {
					name : 'entity/testStand',
					ref : '../../testStand',
					dataIndex : 'testStand',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试液种类',
					// minValue : 0,
					// decimalPrecision : 0,
					allowBlank : false
				}/*, {
					xtype : 'combobox',
					forceSelection : true,
					allowBlank : false,
					mode : 'local',
					fieldLabel : '测试标准',
					ref : '../../testStand',
					hiddenName : 'entity/testStand',
					dataIndex : 'testStand',
					anchor : '100%',
					colspan : 6,
					emptyText : '--请选择--',
					editable : false,
					store : this.testStandStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							this.reset()
						}
					}
				}*/, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					name : 'entity/pressure',
					dataIndex : 'pressure',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '操作压力(PSi)'// ,
						// minValue : 0,
						// decimalPrecision : 0
					}, {
					name : 'entity/temperature',
					dataIndex : 'temperature',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试温度(℃)'// ,
						// decimalPrecision : 0
					}, {
					name : 'entity/concentration',
					dataIndex : 'concentration',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试液浓度（ppm）'// ,
						// decimalPrecision : 2
					}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					name : 'entity/recyclePercent',
					dataIndex : 'recyclePercent',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '单支回收率（%）'// ,
						// minValue : 2,
						// decimalPrecision : 0
					}, {
					name : 'entity/ph',
					dataIndex : 'ph',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试PH值'// ,
						// decimalPrecision : 0
					}, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">卷膜主材</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					name : 'entity/denseNet',
					dataIndex : 'denseNet',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '浓网厚度（Mil）'// ,
						// decimalPrecision : 0
					}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '端盖类型',
					ref : '../../lid',
					hiddenName : 'entity/lid',
					dataIndex : 'lid',
					anchor : '100%',
					colspan : 6,
					emptyText : '--请选择--',
					editable : false,
					store : this.lidStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							this.reset()
						}
					}
				}, {	// 端盖类型这里，如果选择定制，须要填端盖图纸编号
							name : 'entity/reserve5',
							dataIndex : 'reserve5',
							ref : '../../reserve5',
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '端盖图纸编号'
						}

						/*, {
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/mpSpecId',
							dataIndex : 'mpSpecId',
							anchor : '100%',
							colspan : 6,
							fieldLabel : '膜片限定'
						}*/, {
					name : 'entity/denseNetCdm',
					dataIndex : 'denseNetCdm',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '叠膜工艺'// ,
						// decimalPrecision : 0
					}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'combobox',
							forceSelection : false,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '卷膜胶带',
							ref : '../../tape',
							hiddenName : 'entity/tape',
							dataIndex : 'tape',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.tapeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							hidden : true,
							mode : 'local',
							fieldLabel : '耐酸碱要求',
							ref : '../../aar',
							hiddenName : 'entity/aar',
							dataIndex : 'aar',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '彩带颜色',
							ref : '../../color',
							hiddenName : 'entity/color',
							dataIndex : 'color',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.colorStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/colorCode',
							dataIndex : 'colorCode',
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '彩带色卡编号'
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">标签</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							name : 'entity/label',
							dataIndex : 'label',
							ref : '../../label',
							allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '标签类型',
							decimalPrecision : 0
						}, {
							name : 'entity/labelDrawingCode',
							ref : '../../labelDrawingCode',
							dataIndex : 'labelDrawingCode',
							allowBlank : false,
							editable : false,
							anchor : '100%',
							colspan : 6,
							fieldLabel : '图纸编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择图纸编号',
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoose4Label(1);
							}

						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '新制版',
							ref : '../../newMakeLabel',
							hiddenName : 'entity/newMakeLabel',
							dataIndex : 'newMakeLabel',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
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
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '制作方式',
							ref : '../../makeLabel',
							hiddenName : 'entity/makeLabel',
							dataIndex : 'makeLabel',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.makeLabelStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								},
								"select" : function(combo, record, index) {
									var makeLabel = combo.getValue();
									// 制作方式为打印，默认为打印纸/制作方式为印刷与UV打印，默认为PET不干胶
									// 制作方式为打印，默认为白色/制作方式为印刷与UV打印，默认为透明
									if (makeLabel == '打印') {
										_this.addOrderWindow.material
												.setValue('打印纸');
										_this.addOrderWindow.back
												.setValue('白色');
									}
									if (makeLabel == '印刷'
											|| makeLabel == 'UV打印') {
										_this.addOrderWindow.material
												.setValue('PET不干胶');
										_this.addOrderWindow.back
												.setValue('透明');
									}
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '材质',
							ref : '../../material',
							hiddenName : 'entity/material',
							dataIndex : 'material',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.materialStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '底色',
							ref : '../../back',
							hiddenName : 'entity/back',
							dataIndex : 'back',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.backStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}

						, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '序列是否固定',
							ref : '../../snRegular',
							hiddenName : 'entity/snRegular',
							dataIndex : 'snRegular',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'textfield',
							fieldLabel : '标签LOGO',
							ref : '../../logoLabel',
							dataIndex : 'logoLabel',
							hiddenName : 'entity/logoLabel',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '标签型号',
							ref : '../../specNameLabel',
							dataIndex : 'specNameLabel',
							hiddenName : 'entity/specNameLabel',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							name : 'entity/snStart',
							dataIndex : 'snStart',
							ref : '../../snStart',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '序列开始号',
							decimalPrecision : 0
						}, {
							name : 'entity/snEnd',
							dataIndex : 'snEnd',
							ref : '../../snEnd',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '序列结束号',
							decimalPrecision : 0
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '双标签',
							ref : '../../labelDouble',
							hiddenName : 'entity/labelDouble',
							dataIndex : 'labelDouble',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/labelRuleDouble',
							dataIndex : 'labelRuleDouble',
							// allowBlank : false,
							anchor : '100%',
							colspan : 12,
							xtype : 'textfield',
							fieldLabel : '双标签时第二个标签图纸编号规则',
							decimalPrecision : 0
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '第二标签贴的位置 ',
							ref : '../../positionLabel',
							hiddenName : 'entity/positionLabel',
							dataIndex : 'positionLabel',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.positionLabelStore,
							displayField : "name",
							valueField : "code",
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
							name : 'entity/labelDrawingCode2',
							ref : '../../labelDrawingCode2',
							dataIndex : 'labelDrawingCode2',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '第二标签图纸编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择图纸编号',
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoose4Label(2);
							}
						}, {
							xtype : 'textfield',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '第二标签LOGO',
							ref : '../../logoLabel2',
							dataIndex : 'logoLabel2',
							name : 'entity/logoLabel2',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '第二标签型号',
							ref : '../../specNameLabel2',
							dataIndex : 'specNameLabel2',
							name : 'entity/specNameLabel2',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '第二标签制作方式',
							ref : '../../makeLabel2',
							dataIndex : 'makeLabel2',
							name : 'entity/makeLabel2',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">密封圈</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							xtype : 'combo',
							mode : 'local',
							// forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '密封圈位置',
							ref : '../../sealPosition',
							hiddenName : 'entity/sealPosition',
							dataIndex : 'sealPosition',
							anchor : '100%',
							colspan : 24,
							emptyText : '--请选择--',
							editable : true,
							store : _this.sealPositionStore,
							displayField : "name",
							valueField : "code",
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
							name : 'entity/sealAmount',
							dataIndex : 'sealAmount',
							allowBlank : true,
							anchor : '100%',
							colspan : 24,
							xtype : 'textfield',
							fieldLabel : '密封圈数量'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							name : 'entity/sealRequire',
							dataIndex : 'sealRequire',
							allowBlank : true,
							anchor : '100%',
							colspan : 24,
							xtype : 'textfield',
							fieldLabel : '家用密封圈固定胶带要求'
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">唛头</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							name : 'entity/mark',
							ref : '../../mark',
							dataIndex : 'mark',
							allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '唛头类型'
						}, {
							name : 'entity/markDrawingCode',
							ref : '../../markDrawingCode',
							dataIndex : 'markDrawingCode',
							allowBlank : false,
							anchor : '100%',
							colspan : 6,
							fieldLabel : '唛头编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择图纸编号',
							editable : false,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoose4Mark(1);
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '制作方式',
							ref : '../../makeMark',
							hiddenName : 'entity/makeMark',
							dataIndex : 'makeMark',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.makeLabelStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '新制版',
							ref : '../../newMakeMark',
							hiddenName : 'entity/newMakeMark',
							dataIndex : 'newMakeMark',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
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
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '唛头号是否固定',
							ref : '../../markRegular',
							hiddenName : 'entity/markRegular',
							dataIndex : 'markRegular',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'textfield',
							fieldLabel : '唛头LOGO',
							ref : '../../logoMark',
							dataIndex : 'logoMark',
							name : 'entity/logoMark',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'textfield',// 系统"唛头型呈" 将强置必填字段
							fieldLabel : '唛头型号',
							allowBlank : false,
							ref : '../../specNameMark',
							dataIndex : 'specNameMark',
							name : 'entity/specNameMark',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							name : 'entity/markStart',
							dataIndex : 'markStart',
							ref : '../../markStart',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '唛头开始号',
							decimalPrecision : 0
						}, {
							name : 'entity/markEnd',
							dataIndex : 'markEnd',
							ref : '../../markEnd',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '唛头结束号',
							decimalPrecision : 0
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '箱唛号是否需要与标签保持一致',
							ref : '../../ifkeep',
							hiddenName : 'entity/ifkeep',
							dataIndex : 'ifkeep',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
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
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '双唛头',
							ref : '../../markDouble',
							hiddenName : 'entity/markDouble',
							dataIndex : 'markDouble',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/markRuleDouble',
							dataIndex : 'markRuleDouble',
							// allowBlank : false,
							anchor : '100%',
							colspan : 12,
							xtype : 'textfield',
							fieldLabel : '双唛头时第二个标签图纸编号规则',
							decimalPrecision : 0
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '第二唛头贴的位置 ',
							ref : '../../positionMark',
							hiddenName : 'entity/positionMark',
							dataIndex : 'positionMark',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.positionMarkStore,
							displayField : "name",
							valueField : "code",
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
							name : 'entity/markDrawingCode2',
							ref : '../../markDrawingCode2',
							dataIndex : 'markDrawingCode2',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							fieldLabel : '第二唛头图纸编号',
							xtype : 'trigger',
							emptyText : '单击旁边按钮选择图纸编号',
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onChoose4Mark(2);
							}
						}, {
							xtype : 'textfield',
							fieldLabel : '第二唛头LOGO',
							ref : '../../logoMark2',
							dataIndex : 'logoMark2',
							name : 'entity/logoMark2',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '第二唛头型号',
							ref : '../../specNameMark2',
							dataIndex : 'specNameMark2',
							name : 'entity/specNameMark2',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'textfield',
							fieldLabel : '第二唛头制作方式',
							ref : '../../makeMark2',
							dataIndex : 'makeMark2',
							name : 'entity/makeMark2',
							anchor : '100%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">拍照</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '需要标准拍照',
							ref : '../../ifphoto',
							hiddenName : 'entity/ifphoto',
							dataIndex : 'ifphoto',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : true,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">包装</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							name : 'entity/bag',
							dataIndex : 'bag',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '真空包装袋型号'
						}, {
							name : 'entity/bagDrawingCode',
							dataIndex : 'bagDrawingCode',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '真空包装袋图纸编号'
						}, {
							name : 'entity/box',
							dataIndex : 'box',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '包装箱型号'
						}, {
							name : 'entity/boxDrawingCode',
							dataIndex : 'boxDrawingCode',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '包装箱图纸编号'
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 24
						}, {
							name : 'entity/packingNum',
							dataIndex : 'packingNum',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'numberfield',
							allowBlank : false,
							allowDecimals : false,
							fieldLabel : '装箱（支/箱）'
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '中芯管打磨',
							ref : '../../ifpolish',
							hiddenName : 'entity/ifpolish',
							dataIndex : 'ifpolish',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/packingLid',
							dataIndex : 'packingLid',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '包装端盖'
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">打包</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '托盘材质',
							ref : '../../tray',
							hiddenName : 'entity/tray',
							dataIndex : 'tray',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.trayStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '托盘尺寸',
							ref : '../../traySize',
							hiddenName : 'entity/traySize',
							dataIndex : 'traySize',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.traySizeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/packingLayer',
							dataIndex : 'packingLayer',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '打包层数'
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '出货报告是否随货',
							ref : '../../goodsWithReport',
							hiddenName : 'entity/goodsWithReport',
							dataIndex : 'goodsWithReport',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.goodsWithReportStore,
							displayField : "name",
							valueField : "code",
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
							name : 'entity/pallet',
							dataIndex : 'pallet', //
							// allowBlank : false,
							anchor : '100%',
							colspan : 24,
							xtype : 'textfield',
							fieldLabel : '打件/打托要求'
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">营销管理</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							name : 'entity/khxj',
							dataIndex : 'khxj',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '客户星级评定'
						}, {
							name : 'entity/cpxj',
							dataIndex : 'cpxj',
							// allowBlank : false,
							anchor : '100%',
							colspan : 6,
							xtype : 'textfield',
							fieldLabel : '产品星级评定'
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;font-size:16px;">确认</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 24
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '检查无误可发<br>制造中心确认',
							ref : '../../ifsubmit',
							hiddenName : 'entity/ifsubmit',
							// dataIndex : 'goodsWithReport',
							anchor : '100%',
							colspan : 6,
							emptyText : '--请选择--',
							editable : false,
							store : this.ynStore,
							value : '是',
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/photoSingle',
							ref : '../../photoSingle2'
						}, {
							xtype : 'hidden',
							name : 'entity/photoAll',
							ref : '../../photoAll2'
						}, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});

		this.addOrderWindow.buttons[0].hide();
		this.addOrderWindow.buttons[1].hide();

		this.addOrderWindow.addButton({
					text : "保存",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onAddSave
				});

		this.addOrderWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.addOrderWindow.form.reset();
						this.addOrderWindow.hide();
					}
				});
	}

	this.initStockConfirmWindow = function() {
		var _this = this;
		this.stockConfirmWindow = this.stockConfirmWindow
				|| new Ext.fn.FormWindow({
					title : '仓库确认',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {
							_this.stockConfirmWindow.items.items[0].form
									.reset();
							_this.stockConfirmWindow.hide();
							_this.listPanel.refresh();
						},
						columns : 2,
						loadUrl : '1.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.orderrecord.saveOrderInputList.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									//name : 'entity/dryStockAmount',
									fieldLabel : '订单号',
									ref : '../../orderNo',
									readOnly : true,
									anchor : '100%',
									colspan : 2

								},{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									//name : 'entity/dryStockAmount',
									fieldLabel : '卷膜型号',
									ref : '../../jmSpecName',
									readOnly : true,
									anchor : '100%',
									colspan : 2

								},{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									//name : 'entity/dryStockAmount',
									fieldLabel : '销售订单数量(支)',
									ref : '../../orderAmount',
									readOnly : true,
									anchor : '100%',
									colspan : 2

								},{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									//name : 'entity/dryStockAmount',
									fieldLabel : '可接受湿膜数量(支)',
									ref : '../../wetAmount',
									readOnly : true,
									anchor : '100%',
									colspan : 2

								},{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/dryStockAmount',
									fieldLabel : '发库存干膜(支)',
									ref : '../../dryStockAmount',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/wetStockAmount',
									fieldLabel : '发库存湿膜(支)',
									ref : '../../wetStockAmount',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									name : 'entity/id',
									ref : '../../pkid',
									xtype : 'hidden',
									dataIndex : 'id'
								}, {
									name : 'entity/state',
									ref : '../../state',
									xtype : 'hidden',
									value : '待计划确认'
								}]
					}]
				});
	}
	
	// ChooseLable
	this.initChooseLableWindow = function() {
		var _this = this;

		var selModel4ChooseLable = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChooseLable = this.listPanel4ChooseLable
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : true,
					selModel : selModel4ChooseLable,
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseLable
							}],
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4ChooseLable, {
								dataIndex : 'drawingName',
								hidden : true,
								header : '图纸名称'
							}, {
								dataIndex : 'drawingCode',
								header : '图纸编号'
							}, {
								dataIndex : 'materCode',
								header : '物料号'
							}, {
								dataIndex : 'logo',
								hidden : true,
								header : '标签LOGO'
							}, {
								dataIndex : 'specName',
								header : '贴牌型号'
							}, {
								dataIndex : 'labelSize',
								hidden : true,
								header : '标签尺寸'
							}, {
								dataIndex : 'url',
								header : '标签背景图',
								renderer : function(value, metaData, rec,
										rowIndex, colIndex, store, view) {
									if (!Ext.isEmpty(value)) {

										return '<img src="'
												+ markRootUrl
												+ value
												+ '?ver='
												+ rec.data.id
												+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

									}
								}
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.paramaterspec.queryLabelDrawingByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/status' : 1
						},
						fields : [{
									name : 'drawingCode'
								}, {
									name : 'logo'
								}, {
									name : 'specName'
								}, {
									name : 'drawingName'
								}, {
									name : 'materCode'
								}, {
									name : 'labelSize'
								}, {
									name : 'url'
								}]
					})
				})

		this.queryPanel4ChooseLable = this.queryPanel4ChooseLable
				|| new Ext.fn.QueryPanel({
							height : 110,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [/*
										 * { xtype : 'combobox', forceSelection :
										 * true, mode : 'local', fieldLabel :
										 * '标签LOGO', // ref : '../../logoLabel',
										 * hiddenName : 'condition/logo', anchor :
										 * '100%', colspan : 1, emptyText : '',
										 * editable : false, store :
										 * this.labelDrawingLogoStore,
										 * displayField : "logo", valueField :
										 * "logo" },
										 */{
										xtype : 'combobox',
										forceSelection : true,
										mode : 'local',
										fieldLabel : '贴牌型号',
										// ref : '../../specNameLabel',
										hiddenName : 'condition/specName',
										anchor : '100%',
										colspan : 1,
										emptyText : '',
										editable : false,
										store : this.labelDrawingSpecNameStore,
										displayField : "specName",
										valueField : "specName"
									}/*
										 * , { xtype : 'displayfield', height :
										 * '5', colspan : 2 }, { xtype :
										 * 'textfield', mode : 'local',
										 * fieldLabel : '%-标签LOGO-%', // ref :
										 * '../../logoLabel', name :
										 * 'condition/logo2', anchor : '100%',
										 * colspan : 1 }
										 */, {
										xtype : 'textfield',
										mode : 'local',
										fieldLabel : '%-贴牌型号-%',
										ref : '../specNameLabel',
										name : 'condition/specName2',
										anchor : '100%',
										colspan : 1
									}, {
										xtype : 'displayfield',
										height : 5,
										colspan : 4
									}, {
										xtype : 'textfield',
										name : 'condition/drawingCode',
										anchor : '100%',
										fieldLabel : '图纸编号'
									}, {
										xtype : 'hidden',
										ref : '../status',
										name : 'condition/status',
										value : 1
									}]
						})

		this.queryPanel4ChooseLable.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseLableWindow.hide();
					}

				});

		this.chooseLableWindow = this.chooseLableWindow || new Ext.Window({
					title : '标签图纸编号查询',
					// 自定义属性
					opt : '',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 900,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4ChooseLable,
							this.listPanel4ChooseLable]

				})
	}
	
	// ChooseMark
	this.initChooseMarkWindow = function() {
		var _this = this;

		var selModel4ChooseMark = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChooseMark = this.listPanel4ChooseMark
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : true,
					selModel : selModel4ChooseMark,
					tbar : [{
								text : '打印效果预览',
								scope : this,
								iconCls : 'icon-application_form_magnify',
								handler : this.onPreView
							}, {
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseMark
							}],
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4ChooseMark, {
								dataIndex : 'drawingName',
								header : '图纸名称'
							}, {
								dataIndex : 'drawingCode',
								header : '图纸编号'
							}/*
								 * , { dataIndex : 'drawingCode', header :
								 * '干/湿', renderer : function(v, m, r, i) { var
								 * idx = v.indexOf('-G'); return idx > -1 ? "干" :
								 * "湿"; } }
								 */, {
								dataIndex : 'materCode',
								header : '物料号'
							}, {
								dataIndex : 'logo',
								header : '标签LOGO'
							}, {
								dataIndex : 'specName',
								header : '贴牌型号'
							}, {
								dataIndex : 'labelSize',
								header : '标签尺寸'
							}, {
								dataIndex : 'url',
								header : '标签背景图',
								renderer : function(value, metaData, rec,
										rowIndex, colIndex, store, view) {
									if (!Ext.isEmpty(value)) {

										return '<img src="'
												+ markRootUrl
												+ value
												+ '?ver='
												+ rec.data.id
												+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

									}
								}
							}, {
								dataIndex : 'url2',
								header : '唛头示例图纸',
								renderer : function(value, metaData, rec,
										rowIndex, colIndex, store, view) {
									if (!Ext.isEmpty(value)) {

										return '<img src="'
												+ markRootUrl
												+ value
												+ '?ver='
												+ rec.data.id
												+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

									}
								}
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.paramaterspec.queryMarkDrawingByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'condition/status' : 1
						},
						fields : [{
									name : 'drawingCode'
								}, {
									name : 'logo'
								}, {
									name : 'specName'
								}, {
									name : 'drawingName'
								}, {
									name : 'materCode'
								}, {
									name : 'labelSize'
								}, {
									name : 'url'
								}, {
									name : 'url2'
								}, {
									name : 'code'
								}]
					})
				})

		this.queryPanel4ChooseMark = this.queryPanel4ChooseMark
				|| new Ext.fn.QueryPanel({
							height : 140,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'combobox',
										forceSelection : true,
										mode : 'local',
										fieldLabel : '标签LOGO',
										// ref : '../../logoLabel',
										hiddenName : 'condition/logo',
										anchor : '100%',
										colspan : 1,
										emptyText : '',
										editable : false,
										store : this.labelDrawingLogoStore,
										displayField : "logo",
										valueField : "logo"
									}, {
										xtype : 'combobox',
										forceSelection : true,
										mode : 'local',
										fieldLabel : '贴牌型号',
										// ref : '../../specNameLabel',
										hiddenName : 'condition/specName',
										anchor : '100%',
										colspan : 1,
										emptyText : '',
										editable : false,
										store : this.labelDrawingSpecNameStore,
										displayField : "specName",
										valueField : "specName"
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										xtype : 'textfield',
										mode : 'local',
										fieldLabel : '%-标签LOGO-%',
										// ref : '../../logoLabel',
										name : 'condition/logo2',
										anchor : '100%',
										colspan : 1
									}, {
										xtype : 'textfield',
										mode : 'local',
										fieldLabel : '%-贴牌型号-%',
										ref : '../specNameLabel',
										name : 'condition/specName2',
										anchor : '100%',
										colspan : 1
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 2
									}, {
										xtype : 'textfield',
										mode : 'local',
										fieldLabel : '%-图纸编号-%',
										// ref : '../../drawingCode',
										name : 'condition/drawingCode',
										anchor : '100%',
										colspan : 1
									}, {
										xtype : 'hidden',
										ref : '../status',
										name : 'condition/status',
										value : 1
									}]
						})

		this.queryPanel4ChooseMark.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseMarkWindow.hide();
					}

				});

		this.chooseMarkWindow = this.chooseMarkWindow || new Ext.Window({
					title : '唛头图纸编号查询',
					// 自定义属性
					opt : '',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 900,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4ChooseMark,
							this.listPanel4ChooseMark]

				})
	}
}