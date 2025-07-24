com.keensen.ump.produce.component.yxorderbaseMgr = function() {
	this.initPanel = function() {

		this.optColumnWin = new com.keensen.ump.optColumnWindow({
					module : 'yxorderbase',
					optUserId : uid
				});

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		this.buildExcelUploadWin();

		this.initAddOrderWindow();
		this.initConfirmWindow();
		this.initConfirmListWindow();
		this.initOrderViewWindow();

		this.initAdjustWindow();
		this.initPConfirmWindow();
		this.initMConfirmWindow();

		this.initOrderMaterSpecWindow();
		this.initAddOrderMaterSpecWindow();

		this.initTConfirmWindow();

		this.initUpdateRemarkWindow();

		this.initChooseLableWindow();
		this.initChooseMarkWindow();

		this.initMCConfirmWindow();
		this.initAddMaterWindow();

		this.initViewMCWindow();

		this.initMCConfirmWindow2();

		this.initPGConfirmWindow();

		this.initChooseSpecWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'yxorderbasemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		// 最终目的地 国内/国外
		this.destStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['国内', '国内'], ['国外', '国外']]
				});

		// 制定中，物控计划员确认，正式发布，修订中
		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['制定中', '制定中'], ['物控计划员确认', '物控计划员确认'],
							['订单计划员确认', '订单计划员确认'], ['正式发布', '正式发布'],
							['不能接单', '不能接单'], ['取消订单', '取消订单'],
							['调整申请', '调整申请'], ['计划员确认', '计划员确认'],
							['制造中心确认', '制造中心确认'], ['工艺员确认', '工艺员确认'],
							['品管确认', '品管确认']]
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
					data : [['公司标准', '公司标准'], ['贴牌产品', '贴牌产品'],
							['特规产品', '特规产品']]
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
		/*
		 * this.lidStore = new Ext.data.SimpleStore({ fields : ['code', 'name'],
		 * data : [['蜂窝', '蜂窝'], ['格栅', '格栅'], ['梳齿', '梳齿'], ['旋熔', '旋熔'],
		 * ['定制', '定制'], ['其他', '其他'], ['公司标准', '公司标准'], ['梳齿蜂窝', '梳齿蜂窝']] });
		 */
		this.lidStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['格栅', '格栅'], ['定制', '定制'], ['公司标准', '公司标准'],
							['梳齿蜂窝', '梳齿蜂窝']]
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
					data : [['印刷', '印刷'], ['打印', '打印'], /* ['UV打印', 'UV打印'], */
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
							['纸箱', '纸箱'], ['浓网', '浓网']]
				});

		// 物料单位 个/张
		this.materUnitStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['个', '个'], ['张', '张']]
				});

		/*
		 * this.labelDrawingStore = new Ext.data.JsonStore({ url :
		 * 'com.keensen.ump.base.paramaterspec.queryLabelDrawing.biz.ext', root :
		 * 'data', autoLoad : true, baseParams : {}, fields : [{ name :
		 * 'drawingCode' }, { name : 'logo' }, { name : 'specName' }] })
		 * 
		 * this.markDrawingStore = new Ext.data.JsonStore({ url :
		 * 'com.keensen.ump.base.paramaterspec.queryMarkDrawing.biz.ext', root :
		 * 'data', autoLoad : true, baseParams : {}, fields : [{ name :
		 * 'drawingCode' }, { name : 'logo' }, { name : 'specName' }] })
		 */

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
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandYxOrderBase.biz.ext',
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
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					fieldLabel : '<a class="mya" title="订单编号编码说明" onclick="describeOrderNo();">销售订单编号</a>'
				}, {
					xtype : 'combobox',
					forceSelection : false,
					// readOnly : true,
					allowBlank : false,
					mode : 'local',
					fieldLabel : '订单下达型号',
					ref : '../../materSpecName2',
					hiddenName : 'entity/materSpecName2',
					dataIndex : 'materSpecName2',
					anchor : '100%',
					colspan : 6,
					emptyText : '--请选择--',
					editable : true,
					store : this.orderMaterSpecStore,
					displayField : "materSpecName2",
					valueField : "materSpecName2",
					listeners : {
						"expand" : function(A) {
							this.reset()
						},
						'specialkey' : function() {
							return false;
						}
					}
				}, {
					xtype : 'combobox',
					forceSelection : true,
					allowBlank : false,
					mode : 'local',
					fieldLabel : '产品类型',
					ref : '../../orderType',
					hiddenName : 'entity/orderType',
					dataIndex : 'orderType',
					anchor : '100%',
					colspan : 6,
					emptyText : '--请选择--',
					editable : false,
					store : this.orderTypeStore,
					displayField : "name",
					valueField : "code",
					listeners : {
						"expand" : function(A) {
							this.reset()
						},
						'specialkey' : function() {
							return false;
						},
						'select' : function(combo, record, index) {
							if (index == 0) {
								_this.addOrderWindow.traySize.setValue('公司标准');
								_this.addOrderWindow.label.setValue('公司标准');
								_this.addOrderWindow.mark.setValue('公司标准');
								_this.addOrderWindow.makeLabel.setValue('印刷');
								_this.addOrderWindow.makeMark.setValue('打印');
							}
						}
					}
				}, {
					xtype : 'trigger',
					name : 'entity/reserve3',
					emptyText : '单击旁边按钮选择',
					dataIndex : 'reserve3',
					ref : '../../reserve3',
					allowBlank : false, 
					editable : false,
					fieldLabel : '卷制型号', 
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.chooseSpec();
					}
				}/*
					 * , { anchor : '40%', colspan : 6, xtype : 'button',
					 * iconCls : 'icon-application_form_magnify', text :
					 * '导入下单参数', scope : this, handler : function() {
					 * this.chooseSpec(); } }
					 */, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : true,
					allowBlank : false,
					// readOnly : true,
					mode : 'local',
					fieldLabel : '商品类型',
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
				}/*
					 * , { xtype : 'textfield', name : 'entity/ddxj', dataIndex :
					 * 'ddxj', fieldLabel : '销售订单星级', // readOnly : true, anchor :
					 * '100%', colspan : 6 }
					 */, {
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
					xtype : 'displayfield',
					value : '<p style="color:red;">单击旁边按钮带出产品参数</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 6
				}/*
					 * , { xtype : 'combobox', forceSelection : true, allowBlank :
					 * false, mode : 'local', fieldLabel : '最终目的地', ref :
					 * '../../reserve4', hiddenName : 'entity/reserve4',
					 * dataIndex : 'reserve4', anchor : '100%', colspan : 6,
					 * emptyText : '--请选择--', editable : false, store :
					 * this.destStore, displayField : "name", valueField :
					 * "code", listeners : { "expand" : function(A) {
					 * this.reset() } } }
					 */, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
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
					xtype : 'textfield',
					name : 'entity/wetPercent',
					ref : '../../wetPercent',
					dataIndex : 'wetPercent',
					fieldLabel : '湿膜比例',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
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
					fieldLabel : '发库存(支)',
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
					colspan : 6
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 6
				}, {
					xtype : 'displayfield',
					value : '<p style="color:red;">单击旁边按钮计算发库存数量</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 6
				}, {
					xtype : 'displayfield',
					value : '<p style="color:red;">单击旁边按钮计算需生产或入库数量</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 6
				}, {
					xtype : 'datefield',
					format : "Y-m-d",
					name : 'entity/orderDate',
					dataIndex : 'orderDate',
					ref : '../../orderDate',
					allowBlank : false,
					minValue : new Date(),
					// readOnly : true,
					fieldLabel : '营销订单下达日期',
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
					fieldLabel : '入库间隔期(天)',
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
					name : 'entity/productRemark',
					dataIndex : 'productRemark',
					// allowBlank : false,
					anchor : '100%',
					height : 100,
					colspan : 24,
					xtype : 'textarea',
					fieldLabel : '产品备注'
				}, {
					xtype : 'displayfield',
					fieldLabel : ' ',
					value : '<p style="color:red;">非必要勿填，填写要准确与简洁。填写后，请核对内容，不得与下方单列内容重复与冲突。一旦冲突，造成返工，请主动参与。</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}

				, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">性能要求<br>与测试条件</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					name : 'entity/saltLow',
					dataIndex : 'saltLow',
					ref : '../../saltLow',
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
					ref : '../../gpdLow',
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
					ref : '../../gpdUp',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '产水量上限(GPD)',
					// minValue : 0,
					// decimalPrecision : 0,
					allowBlank : false
				}, {
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
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					name : 'entity/pressure',
					dataIndex : 'pressure',
					ref : '../../pressure',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '操作压力(PSi)'// ,
						// minValue : 0,
						// decimalPrecision : 0
					}, {
					name : 'entity/temperature',
					dataIndex : 'temperature',
					ref : '../../temperature',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试温度(℃)'// ,
						// decimalPrecision : 0
					}, {
					name : 'entity/concentration',
					dataIndex : 'concentration',
					ref : '../../concentration',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试液浓度（mg/L）'// ,
						// decimalPrecision : 2
					}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					name : 'entity/recyclePercent',
					dataIndex : 'recyclePercent',
					ref : '../../recyclePercent',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '单支回收率（%）'// ,
						// minValue : 2,
						// decimalPrecision : 0
					}, {
					name : 'entity/ph',
					dataIndex : 'ph',
					ref : '../../ph',
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
					ref : '../../denseNet',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '浓网规格'// ,
						// decimalPrecision : 0
					}, {
					xtype : 'combobox',
					forceSelection : true,
					allowBlank : false,
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
				}, {//端盖类型这里，如果选择定制，须要填端盖图纸编号
					name : 'entity/reserve5',
					dataIndex : 'reserve5',
					ref:'../../reserve5',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '端盖图纸编号'
				}, {
					xtype : 'mpspeccombobox',
					hiddenName : 'entity/mpSpecId',
					dataIndex : 'mpSpecId',
					anchor : '100%',
					colspan : 6,
					fieldLabel : '膜片限定'
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : true,
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
					fieldLabel : '彩带色卡编号',
					decimalPrecision : 0
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
								_this.addOrderWindow.material.setValue('打印纸');
								_this.addOrderWindow.back.setValue('白色');
							}
							if (makeLabel == '印刷' || makeLabel == 'UV打印') {
								_this.addOrderWindow.material
										.setValue('PET不干胶');
								_this.addOrderWindow.back.setValue('透明');
							}
						}
					}
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
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
					// allowBlank : false,
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
				}/*
					 * , { xtype : 'combobox', forceSelection : true, //
					 * allowBlank : false, hidden : true, mode : 'local',
					 * fieldLabel : '水流箭头', ref : '../../waterArrow', hiddenName :
					 * 'entity/waterArrow', dataIndex : 'waterArrow', anchor :
					 * '100%', colspan : 6, emptyText : '--请选择--', editable :
					 * false, store : this.ynStore, displayField : "name",
					 * valueField : "code", listeners : { "expand" : function(A) {
					 * this.reset() } } }
					 */, {
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
					xtype : 'displayfield',
					value : '<p style="color:red;">固定序列号参见图纸</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 6
				}/*
					 * , { xtype : 'combobox', forceSelection : true, hidden :
					 * true, // allowBlank : false, mode : 'local', fieldLabel :
					 * '要NSF标识', ref : '../../labelNsf', hiddenName :
					 * 'entity/labelNsf', dataIndex : 'labelNsf', anchor :
					 * '100%', colspan : 6, emptyText : '--请选择--', editable :
					 * false, store : this.ynStore, displayField : "name",
					 * valueField : "code", listeners : { "expand" : function(A) {
					 * this.reset() } } }
					 */, {
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
					name : 'entity/sealPosition',
					dataIndex : 'sealPosition',
					allowBlank : true,
					anchor : '100%',
					colspan : 24,
					xtype : 'textfield',
					fieldLabel : '密封圈位置'
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
				}/*
					 * , { xtype : 'combobox', forceSelection : true, hidden :
					 * true, // allowBlank : false, mode : 'local', fieldLabel :
					 * '要NSF标识', ref : '../../markNsf', hiddenName :
					 * 'entity/markNsf', dataIndex : 'markNsf', anchor : '100%',
					 * colspan : 6, emptyText : '--请选择--', editable : false,
					 * store : this.ynStore, displayField : "name", valueField :
					 * "code", listeners : { "expand" : function(A) {
					 * this.reset() } } }
					 */, {
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
					xtype : 'textfield',
					allowBlank : false,
					fieldLabel : '唛头型号',
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
					value : '<p style="color:red;">仅提供唛头照、绕丝后标签照、包装封箱前照</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 18
				}/*
					 * , { xtype : 'combobox', forceSelection : true, //
					 * allowBlank : false, mode : 'local', fieldLabel : '每款型号',
					 * ref : '../../ifanyone', hiddenName : 'entity/ifanyone',
					 * dataIndex : 'ifanyone', anchor : '100%', colspan : 6,
					 * emptyText : '--请选择--', editable : false, store :
					 * this.ynStore, displayField : "name", valueField : "code",
					 * listeners : { "expand" : function(A) { this.reset() } } }
					 *//*
					 * , { xtype : 'displayfield', height : 5, colspan : 24 }, {
					 * xtype : 'dictcheckboxgroup', columns : 6, ref :
					 * '../../photoSingle', dataIndex : 'photoSingle',
					 * fieldLabel : '单支拍照要求', anchor : '100%', colspan : 24,
					 * dictData : KS_YXORDER_PHOTO_SINGLE }, { xtype :
					 * 'displayfield', height : 5, colspan : 24 }, { xtype :
					 * 'dictcheckboxgroup', columns : 6, ref : '../../photoAll',
					 * dataIndex : 'photoAll', fieldLabel : '整托拍照要求', anchor :
					 * '100%', colspan : 24, dictData : KS_YXORDER_PHOTO_ALL }
					 */, {
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
					ref : '../../bagDrawingCode',
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
					ref : '../../boxDrawingCode',
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
					xtype : 'textfield',
					fieldLabel : '装箱支数要求'
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

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
								fieldLabel : '销售订单编号'
							}, {
								xtype : 'textfield',
								name : 'condition/prodName',
								fieldLabel : '产品名称'
							} /*
								 * , { xtype : 'textfield', name :
								 * 'condition/client', fieldLabel : '客户名称' }
								 */, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "下单日期",
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
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {
								xtype : 'combobox',
								forceSelection : true,
								// allowBlank : false,
								mode : 'local',
								fieldLabel : '商品类型',
								ref : '../../type',
								hiddenName : 'condition/type',
								dataIndex : 'type',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.typeStore,
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
								fieldLabel : '货品名称',
								ref : '../../hpmc',
								hiddenName : 'condition/hpmc',
								dataIndex : 'hpmc',
								anchor : '100%',
								colspan : 1,
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
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '是否已发货',
								ref : '../deliveryState',
								hiddenName : 'condition/deliveryState',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.ynStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.deliveryState.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/createName',
								fieldLabel : '导入操作员'
							}]
				});
		this.queryPanel.addButton({
					text : "模板下载",
					disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "导入统计表",
					disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});

		this.queryPanel.addButton({
					text : "导出",
					// disabled : allRight != '1',
					id : exportButton,
					// rescode : '10003669',
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '生产计划录入',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddOrder
					}, '-', {
						text : '订单详情',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onOrderView
					}, '-', {
						xtype : 'splitbutton',
						disabled : allRight != '1',
						text : '物控计划员',
						// scale : 'small',
						// rowspan : 1,
						// iconAlign : 'top',
						iconCls : 'icon-application_add',
						arrowAlign : 'bottom',
						menu : [{
									text : '接单',
									scope : this,
									iconCls : 'icon-application_add',
									handler : this.onMCConfirm
								}, {
									text : '修改',
									scope : this,
									iconCls : 'icon-application_edit',
									handler : this.onMCConfirm2
								}, {
									text : '列表字段设置',
									scope : this,
									iconCls : 'icon-application_form_magnify',
									handler : function() {
										this.optColumnWin.show();
									}
								}]
					}, '-', {
						text : '订单计划员接单',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirm
					}, '-', {
						text : '接单记录',
						disabled : allRight != '1' && uid != 'KS00524',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onConfirmList
					}, '-', {
						text : '工艺员确认',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onTConfirm
					}, '-', {
						text : '品管确认',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPGConfirm
					}, '-', {
						text : '订单下达型号',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onOrderMaterSpec
					}, '-', {
						text : '变更发货状态',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onChange
					}, '-', {
						text : '取消订单',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCancel
					}, '->', {
						text : '调整申请',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onAdjust
					}, '-', {
						text : '计划员确认',
						disabled : allRight != '1',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPConfirm
					}, '-', {
						text : '制造中心确认',
						scope : this,
						iconCls : 'icon-application_edit',
						disabled : mConfirm != '1',
						handler : this.onMConfirm
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}/*
						 * , '-', { text : '列表字段设置', scope : this, iconCls :
						 * 'icon-application_form_magnify', handler : function() {
						 * this.optColumnWin.show(); } }
						 */],
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'state',
						header : '订单状态',
						renderer : function(v, m, r, i) {
							if (v == '不能接单') {
								return "<span style='color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						},
						sortable : true
					}, {
						dataIndex : 'deliveryState',
						header : '是否已发货',
						renderer : function(v, m, r, i) {
							if (v == '是') {
								return "<span style='color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						},
						sortable : true
					}, {
						dataIndex : 'orderNo',
						header : '销售订单编号',
						sortable : true
					}, {
						dataIndex : 'orderDate',
						header : '下单日期',
						sortable : true
					}, {
						dataIndex : 'demandStockDate',
						header : '入库日期',
						sortable : true
					}/*
						 * , { dataIndex : 'prodName', header : '产品名称', sortable :
						 * true }
						 */, {
						dataIndex : 'materSpecName2',
						header : '订单下达型号',
						sortable : true
					}, {
						dataIndex : 'hpmc',
						header : '货品名称',
						sortable : true
					}, {
						dataIndex : 'dryWet',
						header : '干/湿',
						sortable : true
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量',
						sortable : true
					}, {
						dataIndex : 'prodAmount',
						header : '需生产或入库数量',
						sortable : true
					}, {
						dataIndex : 'dryAmount',
						header : '发库存干膜数量（支）',
						sortable : true
					}, {
						dataIndex : 'wetAmount',
						header : '发库存湿膜数量（支）',
						sortable : true
					}, {
						dataIndex : 'stockAmount',
						header : '发库存数量（支）',
						sortable : true
					}, {
						dataIndex : 'mpSpecName',
						header : '膜片限定',
						sortable : true
					}, {
						dataIndex : 'label',
						header : '标签',
						sortable : true
					}, {
						dataIndex : 'makeLabel',
						header : '标签制作方式',
						sortable : true
					}, {
						dataIndex : 'material',
						header : '材质',
						sortable : true
					}, {
						dataIndex : 'back',
						header : '底色',
						sortable : true
					}, {
						dataIndex : 'labelDrawingCode',
						header : '标签内部图纸编号',
						sortable : true
					}, {
						dataIndex : 'newMakeLabel',
						header : '新制版',
						sortable : true
					}, {
						dataIndex : 'waterArrow',
						header : '水流箭头',
						hidden : true,
						sortable : true
					}, {
						dataIndex : 'snRegular',
						header : '序列是否固定',
						sortable : true
					}, {
						dataIndex : 'labelNsf',
						hidden : true,
						header : '要NSF标识',
						sortable : true
					}, {
						dataIndex : 'snStart',
						header : '序列开始号',
						sortable : true
					}, {
						dataIndex : 'snEnd',
						header : '序列结束号',
						sortable : true
					}, {
						dataIndex : 'labelDouble',
						header : '双标签',
						sortable : true
					}, {
						dataIndex : 'labelRuleDouble',
						header : '双标时第二个标签图纸编号规则',
						sortable : true
					}, {
						dataIndex : 'positionLabel',
						header : '第二标签贴的位置',
						sortable : true
					}, {
						dataIndex : 'bag',
						header : '真空包装袋',
						sortable : true
					}, {
						dataIndex : 'bagDrawingCode',
						header : '真空包装袋内部图纸编号',
						sortable : true
					}, {
						dataIndex : 'box',
						header : '包装箱',
						sortable : true
					}, {
						dataIndex : 'boxDrawingCode',
						header : '包装箱内部图纸编号',
						sortable : true
					}, {
						dataIndex : 'mark',
						header : '唛头',
						sortable : true
					}, {
						dataIndex : 'markDrawingCode',
						header : '唛头内部图纸编号',
						sortable : true
					}, {
						dataIndex : 'makeMark',
						header : '唛头制作方式',
						sortable : true
					}, {
						dataIndex : 'newMakeMark',
						header : '唛头新制版',
						sortable : true
					}, {
						dataIndex : 'markNsf',
						hidden : true,
						header : '要NSF标识',
						sortable : true
					}, {
						dataIndex : 'markRegular',
						header : '唛头号固定',
						sortable : true
					}, {
						dataIndex : 'markStart',
						header : '唛头开始号',
						sortable : true
					}, {
						dataIndex : 'markDrawingCode2',
						header : '第二唛头图纸编号',
						sortable : true
					}, {
						dataIndex : 'markEnd',
						header : '唛头结束号',
						sortable : true
					}, {
						dataIndex : 'ifkeep',
						header : '箱唛号是否需要与标签保持一致',
						sortable : true
					}, {
						dataIndex : 'markDouble',
						header : '双唛头',
						sortable : true
					}, {
						dataIndex : 'markRuleDouble',
						header : '双唛头时第二个标签图纸编号规则',
						sortable : true
					}, {
						dataIndex : 'positionMark',
						header : '第二唛头贴的位置 ',
						sortable : true
					}, {
						dataIndex : 'lid',
						header : '端盖',
						sortable : true
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带',
						sortable : true
					}, {
						dataIndex : 'aar',
						header : '耐酸碱要求',
						hidden : true,
						sortable : true
					}, {
						dataIndex : 'color',
						header : '彩带颜色',
						sortable : true
					}, {
						dataIndex : 'colorCode',
						header : '彩带色卡编号',
						sortable : true
					}, {
						dataIndex : 'productRemark',
						header : '产品备注',
						sortable : true
					}, {
						dataIndex : 'dept',
						header : '负责人主属部门',
						sortable : true
					}, {
						dataIndex : 'cplb',
						header : '产品类别',
						sortable : true
					}, {
						dataIndex : 'director',
						header : '负责人',
						sortable : true
					}, {
						dataIndex : 'client',
						hidden : true,
						header : '客户名称',
						sortable : true
					}, {
						dataIndex : 'nation',
						hidden : true,
						header : '国家',
						sortable : true
					}, {
						dataIndex : 'province',
						hidden : true,
						header : '省',
						sortable : true
					}, {
						dataIndex : 'city',
						hidden : true,
						header : '市',
						sortable : true
					}, {
						dataIndex : 'district',
						hidden : true,
						header : '区',
						sortable : true
					}, {
						dataIndex : 'type',
						header : '商品类型',
						sortable : true
					}, {
						dataIndex : 'deliveryDate',
						header : '交货日期',
						sortable : true
					}, {
						dataIndex : 'orderType',
						header : '订单类型',
						sortable : true
					}, {
						dataIndex : 'style',
						header : '款式',
						sortable : true
					}, {
						dataIndex : 'wetPercent',
						header : '湿膜比例',
						sortable : true
					}, {
						dataIndex : 'period',
						header : '入库间隔期',
						sortable : true
					}, {
						dataIndex : 'sealPosition',
						header : '密封圈位置',
						sortable : true
					}, {

						dataIndex : 'sealAmount',
						header : '密封圈数量',
						sortable : true
					}, {

						dataIndex : 'sealRequire',
						header : '家用密封圈固定胶带要求',
						sortable : true
					}, {
						dataIndex : 'ifphoto',
						header : '需要标准拍照',
						sortable : true
					}/*
						 * , { dataIndex : 'ifanyone', header : '每款型号', sortable :
						 * true }
						 *//*
						 * , { dataIndex : 'photoSingle', header : '单支拍照要求',
						 * xtype : 'dictcolumn', dictData :
						 * KS_YXORDER_PHOTO_SINGLE, sortable : true }, {
						 * dataIndex : 'photoAll', header : '整托拍照要求', xtype :
						 * 'dictcolumn', dictData : KS_YXORDER_PHOTO_ALL,
						 * sortable : true }
						 */, {
						dataIndex : 'packingNum',
						header : '装箱支数要求',
						sortable : true
					}, {
						dataIndex : 'ifpolish',
						header : '中芯管打磨',
						sortable : true
					}, {
						dataIndex : 'tray',
						header : '托盘材质',
						sortable : true
					}, {
						dataIndex : 'traySize',
						header : '托盘尺寸',
						sortable : true
					}, {
						dataIndex : 'packingLayer',
						header : '打包层数',
						sortable : true
					}, {
						dataIndex : 'pallet',
						header : '打件/打托要求',
						sortable : true
					}, {
						dataIndex : 'goodsWithReport',
						header : '出货报告是否随货',
						sortable : true
					}, {
						dataIndex : 'saltLow',
						header : '最低脱盐率（%）',
						sortable : true
					}, {
						dataIndex : 'gpdLow',
						header : '产水量下限（GPD）',
						sortable : true
					}, {
						dataIndex : 'gpdUp',
						header : '产水量上限（GPD）',
						sortable : true
					}, {
						dataIndex : 'testStand',
						header : '测试标准',
						sortable : true
					}, {
						dataIndex : 'pressure',
						header : '操作压力（PSi）',
						sortable : true
					}, {
						dataIndex : 'temperature',
						header : '测试温度（℃ ）',
						sortable : true
					}, {
						dataIndex : 'concentration',
						header : '测试液浓度（mg/L）',
						sortable : true
					}, {
						dataIndex : 'recyclePercent',
						header : '单支回收率（%）',
						sortable : true
					}, {
						dataIndex : 'ph',
						header : '测试PH值',
						sortable : true
					}, {
						dataIndex : 'denseNet',
						header : '浓网规格',
						sortable : true
					}, {
						dataIndex : 'khxj',
						header : '客户星级评定',
						sortable : true
					}, {
						dataIndex : 'cpxj',
						header : '产品星级评定',
						sortable : true
					}, {
						dataIndex : 'createName',
						header : '导入操作员',
						sortable : true
					}, {
						dataIndex : 'createTime',
						header : '导入时间',
						sortable : true
					}, {
						dataIndex : 'id',
						header : '订单id',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.yxorderbase.queryOrderBaseByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
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
							name : 'dept'
						}, {
							name : 'khxj'
						}, {
							name : 'cpxj'
						}, {
							name : 'cplb'
						}, {
							name : 'orderNo'
						}, {
							name : 'director'
						}, {
							name : 'client'
						}, {
							name : 'nation'
						}, {
							name : 'province'
						}, {
							name : 'city'
						}, {
							name : 'district'
						}, {
							name : 'orderDate'
						}, {
							name : 'prodName'
						}, {
							name : 'dryWet'
						}, {
							name : 'orderAmount'
						}, {
							name : 'label'
						}, {
							name : 'labelDrawingCode'
						}, {
							name : 'bag'
						}, {
							name : 'bagDrawingCode'
						}, {
							name : 'box'
						}, {
							name : 'boxDrawingCode'
						}, {
							name : 'mark'
						}, {
							name : 'markDrawingCode'
						}, {
							name : 'markDrawingCode2'
						}, {
							name : 'productRemark'
						}, {
							name : 'deliveryDate'
						}, {
							name : 'state'
						}, {
							name : 'orderType'
						}, {
							name : 'materSpecName2'
						}, {
							name : 'type'
						}, {
							name : 'style'
						}, {
							name : 'wetPercent'
						}, {
							name : 'dryAmount'
						}, {
							name : 'wetAmount'
						}, {
							name : 'stockAmount'
						}, {
							name : 'prodAmount'
						}, {
							name : 'demandStockDate'
						}, {
							name : 'period'
						}, {
							name : 'saltLow'
						}, {
							name : 'gpdLow'
						}, {
							name : 'gpdUp'
						}, {
							name : 'testStand'
						}, {
							name : 'pressure'
						}, {
							name : 'temperature'
						}, {
							name : 'concentration'
						}, {
							name : 'recyclePercent'
						}, {
							name : 'ph'
						}, {
							name : 'denseNet'
						}, {
							name : 'lid'
						}, {
							name : 'tape'
						}, {
							name : 'aar'
						}, {
							name : 'color'
						}, {
							name : 'colorCode'
						}, {
							name : 'makeLabel'
						}, {
							name : 'newMakeLabel'
						}, {
							name : 'waterArrow'
						}, {
							name : 'snRegular'
						}, {
							name : 'labelNsf'
						}, {
							name : 'snStart'
						}, {
							name : 'snEnd'
						}, {
							name : 'labelDouble'
						}, {
							name : 'labelRuleDouble'
						}, {
							name : 'positionLabel'
						}, {
							name : 'makeMark'
						}, {
							name : 'newMakeMark'
						}, {
							name : 'markNsf'
						}, {
							name : 'markRegular'
						}, {
							name : 'markStart'
						}, {
							name : 'markEnd'
						}, {
							name : 'ifkeep'
						}, {
							name : 'markDouble'
						}, {
							name : 'markRuleDouble'
						}, {
							name : 'positionMark'
						}, {
							name : 'ifphoto'
						}, {
							name : 'ifanyone'
						}, {
							name : 'photoSingle'
						}, {
							name : 'photoAll'
						}, {
							name : 'packingNum'
						}, {
							name : 'ifpolish'
						}, {
							name : 'tray'
						}, {
							name : 'traySize'
						}, {
							name : 'packingLayer'
						}, {
							name : 'packingTxt'
						}, {
							name : 'goodsWithReport'
						}, {
							name : 'hpmc'
						}, {
							name : 'sealPosition'
						}, {
							name : 'sealAmount'
						}, {
							name : 'deliveryState'
						}, {
							name : 'mpSpecName'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'back'
						}, {
							name : 'material'
						}, {
							name : 'pallet'
						}, {
							name : 'sealRequire'
						}]
			})
		})
	}

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = this.excelUploadWin || new Ext.Window({
			title : '导入Excel',
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
				saveUrl : 'com.keensen.ump.produce.component.importYxOrderBase.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择文件',
							allowBlank : false,
							inputType : 'file'
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

	this.initConfirmWindow = function() {

		var _this = this;

		this.confirmWindow = this.confirmWindow || new Ext.fn.FormWindow({
			title : '订单计划员确认',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
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
						_this.listPanel.store.reload();
						_this.confirmWindow.items.items[0].form.reset();
						_this.confirmWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandYxOrderBaseAndConfirm.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveConfirm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '需生产或入库(支)',
							ref : '../../orderAmount',
							dataIndex : 'orderAmount',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '订单类型',
							value : '常规产品',
							ref : '../../orderType',
							hiddenName : 'entity/orderType',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.orderBrandStore,
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
							fieldLabel : '有生产规格书',
							value : '是',
							ref : '../../ifbook',
							hiddenName : 'entity/ifbook',
							anchor : '100%',
							colspan : 1,
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
						}/*
							 * , { xtype : 'displayfield', height : '5', colspan :
							 * 2 }, { xtype : 'combobox', forceSelection : true, //
							 * allowBlank : false, readOnly : true, mode :
							 * 'local', fieldLabel : '材料齐套', ref :
							 * '../../ifall', // hiddenName : 'entity/ifall',
							 * anchor : '100%', colspan : 1, emptyText :
							 * '--请选择--', editable : false, store :
							 * this.ynStore, displayField : "name", valueField :
							 * "code", listeners : { "expand" : function(A) {
							 * this.reset() } } }, { xtype : 'combobox',
							 * forceSelection : true, // allowBlank : false,
							 * readOnly : true, mode : 'local', fieldLabel :
							 * '材料到货满足交期', ref : '../../ifdelivery', //
							 * hiddenName : 'entity/ifdelivery', anchor :
							 * '100%', colspan : 1, emptyText : '--请选择--',
							 * editable : false, store : this.ynStore,
							 * displayField : "name", valueField : "code",
							 * listeners : { "expand" : function(A) {
							 * this.reset() } } }, { xtype : 'displayfield',
							 * height : '5', colspan : 2 }, { xtype :
							 * 'displayfield', fieldLabel : '标签新制版', ref :
							 * '../../newMakeLabel', dataIndex : 'newMakeLabel',
							 * anchor : '85%', colspan : 1 }, { xtype :
							 * 'displayfield', fieldLabel : '唛头新制版', ref :
							 * '../../newMakeMark', dataIndex : 'newMakeMark',
							 * anchor : '85%', colspan : 1 }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '产能满足',
							value : '是',
							ref : '../../ifsatisfy',
							hiddenName : 'entity/ifsatisfy',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '考虑非生产日',
							ref : '../../ifconsider',
							hiddenName : 'entity/ifconsider',
							value : '是',
							anchor : '100%',
							colspan : 1,
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
							fieldLabel : '考虑保养日',
							ref : '../../ifconsider2',
							hiddenName : 'entity/ifconsider2',
							value : '否',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '入库间隔期',
							ref : '../../period',
							dataIndex : 'period',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '符合固定入库期',
							ref : '../../ifwarehousing',
							hiddenName : 'entity/ifwarehousing',
							value : '是',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '能否接单',
							ref : '../../ifget',
							hiddenName : 'entity/ifget',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.ifgetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							fieldLabel : '确认人员',
							value : userName,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '反馈内容',
							ref : '../../reason',
							name : 'entity/reason',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							fieldLabel : '建议调整入库日期',
							ref : '../../adviseDate',
							name : 'entity/adviseDate',
							format : "Y-m-d",
							anchor : '85%',
							colspan : 1
						}, {
							name : 'entity/relationId',
							ref : '../../pkid',
							xtype : 'hidden',
							dataIndex : 'id'
						}, {
							ref : '../../confirmId',
							xtype : 'hidden',
							dataIndex : 'confirmId'
						}]
			}]
		});

		this.confirmWindow.buttons[0].hide();
		this.confirmWindow.buttons[1].hide();

		this.confirmWindow.addButton({
					text : "保存",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onConfirmSave
				});

		this.confirmWindow.addButton({
					text : "查看接单历史记录",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onConfirmList2
				});

		this.confirmWindow.addButton({
					text : "查看物控计划员接单",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onViewMC
				});

		this.confirmWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.confirmWindow.form.reset();
						this.confirmWindow.hide();
					}
				});
	}

	this.initConfirmListWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.confirmListPanel = this.confirmListPanel || new Ext.fn.ListPanel({
			region : 'center',
			cls : 'custom-row-height', // 应用自定义的CSS类
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			autoScroll : true,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'ifget',
						header : '能否接单'
					}, {
						dataIndex : 'createName',
						header : '确认人'
					}, {
						dataIndex : 'createTime',
						width : 150,
						header : '确认时间'
					}, {
						dataIndex : 'reason',
						width : 400,
						header : '不能接单时反馈原因'
					}, {
						dataIndex : 'mReason',
						width : 400,
						header : '物控不能接单反馈原因'
					}, {
						dataIndex : 'adviseDate',
						width : 150,
						header : '建议调整入库日期'
					}, {
						dataIndex : 'ifbook',
						header : '生产规格书'
					}, {
						dataIndex : 'ifall',
						header : '材料齐套'
					}, {
						dataIndex : 'ifdelivery',
						header : '材料到货满足交期'
					}, {
						dataIndex : 'ifsatisfy',
						header : '产能满足'
					}, {
						dataIndex : 'ifconsider',
						header : '考虑非生产日'
					}, {
						dataIndex : 'ifconsider2',
						header : '考虑保养日'
					}, {
						dataIndex : 'ifwarehousing',
						header : '符合固定入库期'
					}, {
						dataIndex : 'tAdvise',
						header : '工艺意见'
					}, {
						dataIndex : 'tTime',
						header : '工艺确认时间'
					}, {
						dataIndex : 'tName',
						header : '工艺员'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.yxorderbase.queryYxOrderConfirm.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'orderBrand'
						}, {
							name : 'ifbook'
						}, {
							name : 'ifall'
						}, {
							name : 'ifdelivery'
						}, {
							name : 'ifsatisfy'
						}, {
							name : 'ifconsider'
						}, {
							name : 'ifconsider2'
						}, {
							name : 'ifwarehousing'
						}, {
							name : 'ifget'
						}, {
							name : 'reason'
						}, {
							name : 'adviseDate'
						}, {
							name : 'relationId'
						}, {
							name : 'orderNo'
						}, {
							name : 'tName'
						}, {
							name : 'tTime'
						}, {
							name : 'tAdvise'
						}, {
							name : 'mReason'
						}]
			})
		})

		this.confirmListWindow = this.confirmListWindow || new Ext.Window({
					title : '接单记录',
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
					items : [this.confirmListPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.confirmListWindow.hide();
								}
							}]

				});

	}

	this.initOrderViewWindow = function() {
		var _this = this;
		this.orderViewWindow = this.orderViewWindow || new Ext.fn.FormWindow({
			title : '销售订单详情',
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
				columns : 24,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandYxOrderBase.biz.ext',
				saveUrl : '1.biz.ext',
				fields : [{
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">基本信息</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					xtype : 'textfield',
					readOnly : true,
					dataIndex : 'orderNo',
					ref : '../../orderNo',
					anchor : '100%',
					colspan : 6,
					fieldLabel : '销售订单编号 '
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '订单下达型号',
					ref : '../../materSpecName2',
					dataIndex : 'materSpecName2',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.orderMaterSpecStore,
					displayField : "materSpecName2",
					valueField : "materSpecName2"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '产品类型',
					ref : '../../orderType',
					dataIndex : 'orderType',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.orderTypeStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'textfield',
					dataIndex : 'reserve3',
					ref : '../../reserve3',
					readOnly : true,
					fieldLabel : '卷制型号', // readOnly :true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '商品类型',
					ref : '../../type',
					dataIndex : 'type',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.typeStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '货品名称',
					ref : '../../hpmc',
					dataIndex : 'hpmc',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.hpmcStore,
					displayField : "name",
					valueField : "code"

				}/*
					 * , { xtype : 'textfield', readOnly : true, dataIndex :
					 * 'ddxj', fieldLabel : '销售订单星级', // readOnly : true, anchor :
					 * '100%', colspan : 6 }
					 */, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '款式',
					ref : '../../style',
					dataIndex : 'style',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.styleStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'textfield',
					readOnly : true,
					ref : '../../dryWet',
					dataIndex : 'dryWet',
					fieldLabel : '干/湿',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'textfield',
					readOnly : true,
					ref : '../../wetPercent',
					dataIndex : 'wetPercent',
					fieldLabel : '湿膜比例',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'numberfield',
					readOnly : true,
					dataIndex : 'orderAmount',
					ref : '../../orderAmount',
					fieldLabel : '销售订单数量(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'numberfield',
					readOnly : true,
					dataIndex : 'dryAmount',
					ref : '../../dryAmount',
					fieldLabel : '发库存干膜(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'numberfield',
					dataIndex : 'wetAmount',
					ref : '../../wetAmount',
					readOnly : true,
					fieldLabel : '发库存湿膜(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'trigger',
					// emptyText : '单击旁边按钮计算',
					dataIndex : 'stockAmount',
					ref : '../../stockAmount',
					// readOnly : true,
					readOnly : true,
					editable : false,
					fieldLabel : '发库存(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this
				}, {
					xtype : 'trigger',
					// emptyText : '单击旁边按钮计算',
					dataIndex : 'prodAmount',
					ref : '../../prodAmount',
					// readOnly : true,
					readOnly : true,
					editable : false,
					fieldLabel : '需生产或入库(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this,
					regex : /^\d+(\.\d+)?$/,
					regexText : "不合法的数据格式"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'textfield',
					dataIndex : 'orderDate',
					ref : '../../orderDate',
					readOnly : true,
					readOnly : true,
					fieldLabel : '下单日期',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'textfield',
					dataIndex : 'deliveryDate',
					ref : '../../deliveryDate',
					readOnly : true,
					hidden : true,
					fieldLabel : '交货日期',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'datefield',
					format : "Y-m-d",
					dataIndex : 'demandStockDate',
					ref : '../../demandStockDate',
					readOnly : true,
					fieldLabel : '入库日期',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'trigger',
					// emptyText : '单击旁边按钮计算',
					dataIndex : 'period',
					ref : '../../period',
					readOnly : true,
					editable : true,
					fieldLabel : '入库间隔期(天)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					// name : 'entity/productRemark',
					dataIndex : 'productRemark',
					readOnly : true,
					anchor : '100%',
					colspan : 24,
					height : 100,
					xtype : 'textarea',
					fieldLabel : '产品备注'
				}, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">性能要求<br>与测试条件</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					dataIndex : 'saltLow',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '最低脱盐率(%)',
					readOnly : true
				}, {
					dataIndex : 'gpdLow',
					anchor : '100',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '产水量下限(GPD)',
					readOnly : true
				}, {
					dataIndex : 'gpdUp',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '产水量上限(GPD)',
					readOnly : true
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '测试标准',
					ref : '../../testStand',
					dataIndex : 'testStand',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.testStandStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					readOnly : true,
					dataIndex : 'pressure',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '操作压力(PSi)'// ,
						// minValue : 0,
						// decimalPrecision : 0
					}, {
					readOnly : true,
					dataIndex : 'temperature',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试温度(℃)'// ,
						// decimalPrecision : 0
					}, {
					readOnly : true,
					dataIndex : 'concentration',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '测试液浓度（mg/L）'// ,
						// decimalPrecision : 2
					}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					readOnly : true,
					dataIndex : 'recyclePercent',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '单支回收率（%）'// ,
						// minValue : 2,
						// decimalPrecision : 0
					}, {
					readOnly : true,
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
					readOnly : true,
					dataIndex : 'denseNet',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '浓网规格'// ,
						// decimalPrecision : 0
					}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '端盖类型',
					ref : '../../lid',
					hiddenName : 'entity/lid',
					dataIndex : 'lid',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.lidStore,
					displayField : "name",
					valueField : "code"
				}, {
					readOnly : true,
					dataIndex : 'reserve5',
					ref:'../../reserve5',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '端盖图纸编号'
				}, {
					xtype : 'mpspeccombobox',
					emptyText : '',
					readOnly : true,
					dataIndex : 'mpSpecId',
					anchor : '100%',
					colspan : 6,
					fieldLabel : '膜片限定'
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '卷膜胶带',
					readOnly : true,
					ref : '../../tape',
					hiddenName : 'entity/tape',
					dataIndex : 'tape',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.tapeStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					hidden : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '耐酸碱要求',
					ref : '../../aar',
					dataIndex : 'aar',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					readOnly : true,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '彩带颜色',
					ref : '../../color',
					readOnly : true,
					dataIndex : 'color',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.colorStore,
					displayField : "name",
					valueField : "code"
				}, {
					readOnly : true,
					dataIndex : 'colorCode',
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '彩带色卡编号',
					decimalPrecision : 0
				}, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">标签</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					dataIndex : 'label',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '标签类型',
					decimalPrecision : 0
				}, {
					dataIndex : 'labelDrawingCode',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '图纸编号',
					decimalPrecision : 0
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '新制版',
					ref : '../../newMakeLabel',
					dataIndex : 'newMakeLabel',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '制作方式',
					ref : '../../makeLabel',
					dataIndex : 'makeLabel',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.makeLabelStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '材质',
					ref : '../../material',
					dataIndex : 'material',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.materialStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '底色',
					ref : '../../back',
					dataIndex : 'back',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.backStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}

						/*
						 * , { xtype : 'combobox', forceSelection : true, hidden :
						 * true, // allowBlank : false, mode : 'local',
						 * fieldLabel : '水流箭头', ref : '../../waterArrow',
						 * readOnly : true, dataIndex : 'waterArrow', anchor :
						 * '100%', colspan : 6, emptyText : '', editable :
						 * false, store : this.ynStore, displayField : "name",
						 * valueField : "code" }
						 */, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '序列是否固定',
					ref : '../../snRegular',
					dataIndex : 'snRegular',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}/*
					 * , { xtype : 'combobox', forceSelection : true, hidden :
					 * true, // allowBlank : false, mode : 'local', fieldLabel :
					 * '要NSF标识', ref : '../../labelNsf', readOnly : true,
					 * dataIndex : 'labelNsf', anchor : '100%', colspan : 6,
					 * emptyText : '', editable : false, store : this.ynStore,
					 * displayField : "name", valueField : "code" }
					 */, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '标签LOGO',
					ref : '../../logoLabel',
					dataIndex : 'logoLabel',
					hiddenName : 'entity/logoLabel',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.labelDrawingLogoStore,
					displayField : "logo",
					valueField : "logo"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '标签型号',
					ref : '../../specNameLabel',
					dataIndex : 'specNameLabel',
					hiddenName : 'entity/specNameLabel',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.labelDrawingSpecNameStore,
					displayField : "specName",
					valueField : "specName"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					readOnly : true,
					dataIndex : 'snStart',
					ref : '../../snStart',
					// allowBlank : false,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '序列开始号',
					decimalPrecision : 0
				}, {
					readOnly : true,
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
					readOnly : true,
					dataIndex : 'labelDouble',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}, {
					readOnly : true,
					dataIndex : 'labelRuleDouble',
					// allowBlank : false,
					anchor : '100%',
					colspan : 12,
					xtype : 'textfield',
					fieldLabel : '双标签时第二个标签图纸编号规则'
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '第二标签贴的位置 ',
					ref : '../../positionLabel',
					readOnly : true,
					dataIndex : 'positionLabel',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.positionLabelStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					name : 'entity/labelDrawingCode2',
					ref : '../../labelDrawingCode2',
					dataIndex : 'labelDrawingCode2',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '第二标签图纸编号'
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '第二标签LOGO',
					ref : '../../logoLabel2',
					dataIndex : 'logoLabel2',
					hiddenName : 'entity/logoLabel2',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.labelDrawingLogoStore,
					displayField : "logo",
					valueField : "logo"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '第二标签型号',
					ref : '../../specNameLabel2',
					dataIndex : 'specNameLabel2',
					hiddenName : 'entity/specNameLabel2',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.labelDrawingSpecNameStore,
					displayField : "specName",
					valueField : "specName"
				}, {
					xtype : 'textfield',
					fieldLabel : '第二标签制作方式',
					readOnly : true,
					ref : '../../makeLabel2',
					dataIndex : 'makeLabel2',
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">密封圈</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					readOnly : true,
					dataIndex : 'sealPosition',
					allowBlank : true,
					anchor : '100%',
					colspan : 24,
					xtype : 'textfield',
					fieldLabel : '密封圈位置'
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					readOnly : true,
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
					readOnly : true,
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
					dataIndex : 'mark',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '唛头类型',
					decimalPrecision : 0
				}, {
					dataIndex : 'markDrawingCode',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '唛头编号'
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '制作方式',
					ref : '../../makeMark',
					dataIndex : 'makeMark',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.makeLabelStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '新制版',
					ref : '../../newMakeMark',
					dataIndex : 'newMakeMark',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}/*
					 * , { xtype : 'combobox', forceSelection : true, hidden :
					 * true, // allowBlank : false, mode : 'local', fieldLabel :
					 * '要NSF标识', ref : '../../markNsf', readOnly : true,
					 * dataIndex : 'markNsf', anchor : '100%', colspan : 6,
					 * emptyText : '', editable : false, store : this.ynStore,
					 * displayField : "name", valueField : "code" }
					 */, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '唛头号是否固定',
					ref : '../../markRegular',
					dataIndex : 'markRegular',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '唛头LOGO',
					ref : '../../logoMark',
					dataIndex : 'logoMark',
					hiddenName : 'entity/logoMark',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.labelDrawingLogoStore,
					displayField : "logo",
					valueField : "logo"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '唛头型号',
					ref : '../../specNameMark',
					dataIndex : 'specNameMark',
					hiddenName : 'entity/specNameMark',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.markDrawingSpecNameStore,
					displayField : "specName",
					valueField : "specName"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					readOnly : true,
					dataIndex : 'markStart',
					ref : '../../markStart',
					// allowBlank : false,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '唛头开始号',
					decimalPrecision : 0
				}, {
					readOnly : true,
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
					readOnly : true,
					mode : 'local',
					fieldLabel : '箱唛号是否需要与标签保持一致',
					ref : '../../ifkeep',
					hiddenName : 'entity/ifkeep',
					dataIndex : 'ifkeep',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
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
					readOnly : true,
					dataIndex : 'markDouble',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}, {
					readOnly : true,
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
					readOnly : true,
					dataIndex : 'positionMark',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.positionMarkStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					name : 'entity/markDrawingCode2',
					ref : '../../markDrawingCode2',
					dataIndex : 'markDrawingCode2',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '第二唛头图纸编号'
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '第二唛头LOGO',
					ref : '../../logoMark2',
					dataIndex : 'logoMark2',
					hiddenName : 'entity/logoMark2',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.markDrawingLogoStore,
					displayField : "logo",
					valueField : "logo"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '第二唛头型号',
					ref : '../../specNameMark2',
					dataIndex : 'specNameMark2',
					hiddenName : 'entity/specNameMark2',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.markDrawingSpecNameStore,
					displayField : "specName",
					valueField : "specName"
				}, {
					xtype : 'textfield',
					fieldLabel : '第二唛头制作方式',
					ref : '../../makeMark2',
					dataIndex : 'makeMark2',
					readOnly : true,
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
					readOnly : true,
					dataIndex : 'ifphoto',
					anchor : '100%',
					colspan : 6,
					// emptyText : '--请选择--',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}/*
					 * , { xtype : 'combobox', forceSelection : true, //
					 * allowBlank : false, mode : 'local', fieldLabel : '每款型号',
					 * ref : '../../ifanyone', readOnly : true, dataIndex :
					 * 'ifanyone', anchor : '100%', colspan : 6, emptyText : '',
					 * editable : false, store : this.ynStore, displayField :
					 * "name", valueField : "code" }
					 *//*
					 * , { xtype : 'displayfield', height : 5, colspan : 24 }, {
					 * xtype : 'dictcheckboxgroup', columns : 6, ref :
					 * '../../photoSingle', dataIndex : 'photoSingle', readOnly :
					 * true, fieldLabel : '单支拍照要求', anchor : '100%', colspan :
					 * 24, dictData : KS_YXORDER_PHOTO_SINGLE }, { xtype :
					 * 'displayfield', height : 5, colspan : 24 }, { xtype :
					 * 'dictcheckboxgroup', columns : 6, ref : '../../photoAll',
					 * dataIndex : 'photoAll', readOnly : true, fieldLabel :
					 * '整托拍照要求', anchor : '100%', colspan : 24, dictData :
					 * KS_YXORDER_PHOTO_ALL }
					 */, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">包装</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					name : 'entity/bag',
					dataIndex : 'bag',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '真空包装袋型号'
				}, {
					name : 'entity/bagDrawingCode',
					dataIndex : 'bagDrawingCode',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '真空包装袋图纸编号'
				}, {
					name : 'entity/box',
					dataIndex : 'box',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '包装箱型号'
				}, {
					name : 'entity/boxDrawingCode',
					dataIndex : 'boxDrawingCode',
					readOnly : true,
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
					readOnly : true,
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '装箱支数要求'
				}, {
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '中芯管打磨',
					ref : '../../ifpolish',
					dataIndex : 'ifpolish',
					anchor : '100%',
					colspan : 6,
					// emptyText : '--请选择--',
					editable : false,
					store : this.ynStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">打包</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '托盘材质',
					ref : '../../tray',
					readOnly : true,
					dataIndex : 'tray',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.trayStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '托盘尺寸',
					ref : '../../traySize',
					readOnly : true,
					dataIndex : 'traySize',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.traySizeStore,
					displayField : "name",
					valueField : "code"
				}, {
					readOnly : true,
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
					readOnly : true,
					dataIndex : 'goodsWithReport',
					anchor : '100%',
					colspan : 6,
					emptyText : '',
					editable : false,
					store : this.goodsWithReportStore,
					displayField : "name",
					valueField : "code"
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					name : 'entity/packingTxt',
					dataIndex : 'packingTxt',
					readOnly : true,
					anchor : '100%',
					colspan : 12,
					xtype : 'textfield',
					fieldLabel : '打包标识要求'
				}, {
					name : 'entity/pallet',
					dataIndex : 'pallet',
					readOnly : true,
					anchor : '100%',
					colspan : 12,
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
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '客户星级评定'
				}, {
					name : 'entity/cpxj',
					dataIndex : 'cpxj',
					readOnly : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '产品星级评定'
				}]
			}]
		});

		this.orderViewWindow.buttons[0].hide();
	}

	this.initAdjustWindow = function() {

		var _this = this;

		this.adjustWindow = this.adjustWindow || new Ext.fn.FormWindow({
			title : '调整申请',
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
						_this.listPanel.store.reload();
						_this.adjustWindow.items.items[0].form.reset();
						_this.adjustWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandAdjust.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveAdjust.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">调整申请</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							dataIndex : 'adjustReason',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '调整原因',
							ref : '../../adjustReason',
							hiddenName : 'entity/adjustReason',
							anchor : '85%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.adjustReasonStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '调整内容',
							allowBlank : false,
							dataIndex : 'adjustContent',
							ref : '../../adjustContent',
							name : 'entity/adjustContent',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">计划员确认</p>',
							labelSeparator : '',// 去掉冒号
							ref : '../../pconfirm',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							dataIndex : 'ifall',
							fieldLabel : '材料齐套',
							ref : '../../ifall',
							// hiddenName : 'entity/ifall',
							anchor : '85%',
							colspan : 2,
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
							ref : '../../pconfirm2',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '产能满足',
							dataIndex : 'ifsatisfy',
							ref : '../../ifsatisfy',
							// hiddenName : 'entity/ifsatisfy',
							anchor : '85%',
							colspan : 2,
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
							ref : '../../pconfirm3',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '交期满足',
							dataIndex : 'ifdelivery',
							ref : '../../ifdelivery',
							// hiddenName : 'entity/ifdelivery',
							anchor : '85%',
							colspan : 2,
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
							ref : '../../pconfirm4',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							dataIndex : 'ifget',
							fieldLabel : '能否接单',
							ref : '../../ifget',
							// hiddenName : 'entity/ifget',
							anchor : '85%',
							colspan : 2,
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
							ref : '../../pconfirm5',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '备注说明',
							// name : 'entity/reserve1',
							readOnly : true,
							// allowBlank : false,
							dataIndex : 'reserve1',
							ref : '../../reserve1',
							// name : 'entity/adjustContent',
							anchor : '85%',
							colspan : 2
						}, {
							name : 'entity/baseId',
							xtype : 'hidden',
							dataIndex : 'baseId'
						}, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});

	}

	this.initPConfirmWindow = function() {

		var _this = this;

		this.pconfirmWindow = this.pconfirmWindow || new Ext.fn.FormWindow({
			title : '计划员确认',
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
						_this.listPanel.store.reload();
						_this.pconfirmWindow.items.items[0].form.reset();
						_this.pconfirmWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandAdjust.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.savePConfirm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">调整申请</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							dataIndex : 'adjustReason',
							forceSelection : true,
							readOnly : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '调整原因',
							ref : '../../adjustReason',
							// hiddenName : 'entity/adjustReason',
							anchor : '85%',
							colspan : 2,
							emptyText : '',
							editable : false,
							store : this.adjustReasonStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '调整内容',
							readOnly : true,
							// allowBlank : false,
							dataIndex : 'adjustContent',
							ref : '../../adjustContent',
							// name : 'entity/adjustContent',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">计划员确认</p>',
							labelSeparator : '',// 去掉冒号
							ref : '../../pconfirm',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							dataIndex : 'ifall',
							fieldLabel : '材料齐套',
							ref : '../../ifall',
							hiddenName : 'entity/ifall',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '产能满足',
							dataIndex : 'ifsatisfy',
							ref : '../../ifsatisfy',
							hiddenName : 'entity/ifsatisfy',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '交期满足',
							dataIndex : 'ifdelivery',
							ref : '../../ifdelivery',
							hiddenName : 'entity/ifdelivery',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							dataIndex : 'ifget',
							fieldLabel : '能否接单',
							ref : '../../ifget',
							hiddenName : 'entity/ifget',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '备注说明',
							name : 'entity/reserve1',
							// readOnly : true,
							// allowBlank : false,
							dataIndex : 'reserve1',
							ref : '../../reserve1',
							// name : 'entity/adjustContent',
							anchor : '85%',
							colspan : 2
						}, {
							name : 'entity/baseId',
							xtype : 'hidden',
							dataIndex : 'baseId'
						}, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});

	}

	this.initMConfirmWindow = function() {

		var _this = this;

		this.mconfirmWindow = this.mconfirmWindow || new Ext.fn.FormWindow({
			title : '制造中心确认',
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
						_this.listPanel.store.reload();
						_this.mconfirmWindow.items.items[0].form.reset();
						_this.mconfirmWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandAdjust.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveMConfirm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">调整申请</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							dataIndex : 'adjustReason',
							forceSelection : true,
							readOnly : true,
							// allowBlank : false,
							mode : 'local',
							fieldLabel : '调整原因',
							ref : '../../adjustReason',
							// hiddenName : 'entity/adjustReason',
							anchor : '85%',
							colspan : 2,
							emptyText : '',
							editable : false,
							store : this.adjustReasonStore,
							displayField : "name",
							valueField : "code"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '调整内容',
							readOnly : true,
							// allowBlank : false,
							dataIndex : 'adjustContent',
							ref : '../../adjustContent',
							// name : 'entity/adjustContent',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">计划员确认</p>',
							labelSeparator : '',// 去掉冒号
							ref : '../../pconfirm',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							dataIndex : 'ifall',
							fieldLabel : '材料齐套',
							ref : '../../ifall',
							// hiddenName : 'entity/ifall',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '产能满足',
							dataIndex : 'ifsatisfy',
							ref : '../../ifsatisfy',
							// hiddenName : 'entity/ifsatisfy',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '交期满足',
							dataIndex : 'ifdelivery',
							ref : '../../ifdelivery',
							// hiddenName : 'entity/ifdelivery',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							dataIndex : 'ifget',
							fieldLabel : '能否接单',
							ref : '../../ifget',
							// hiddenName : 'entity/ifget',
							anchor : '85%',
							colspan : 2,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							fieldLabel : '备注说明',
							// name : 'entity/reserve1',
							readOnly : true,
							// allowBlank : false,
							dataIndex : 'reserve1',
							ref : '../../reserve1',
							// name : 'entity/adjustContent',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">制造中心确认</p>',
							labelSeparator : '',// 去掉冒号
							ref : '../../pconfirm',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '制造中心主任确认',
							ref : '../../mConfirm',
							hiddenName : 'entity/mConfirm',
							dataIndex : 'mConfirm',
							anchor : '85%',
							colspan : 2,
							emptyText : '--请选择--',
							editable : false,
							store : this.agreeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/baseId',
							xtype : 'hidden',
							dataIndex : 'baseId'
						}, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});

	}

	this.initOrderMaterSpecWindow = function() {

		var selModel3 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddSpec
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelSpec
					}],
			hsPage : true,
			selModel : selModel3,
			delUrl : 'com.keensen.ump.base.base.deleteMarketingSpec.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel3, {
						dataIndex : 'prodSpecName',
						header : '订单下达型号'
					}, {
						dataIndex : 'hpmc',
						header : '货品名称'
					}, {
						dataIndex : 'type',
						header : '商品类型'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.base.queryOrderProcNameByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'prodSpecName'
						}, {
							name : 'hpmc'
						}, {
							name : 'type'
						}]
			})
		})

		this.queryPanel3 = this.queryPanel3 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/prodSpecName2',
								anchor : '85%',
								fieldLabel : '订单下达型号'
							}, {
								xtype : 'combobox',
								forceSelection : true,
								// allowBlank : false,
								mode : 'local',
								fieldLabel : '商品类型',
								ref : '../../type',
								hiddenName : 'condition/type',
								dataIndex : 'type',
								anchor : '85%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.typeStore,
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
								fieldLabel : '货品名称',
								ref : '../../hpmc',
								hiddenName : 'condition/hpmc',
								dataIndex : 'hpmc',
								anchor : '85%',
								colspan : 1,
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
							}]
				});

		// this.queryPanel3.addButton({
		// text : "导出",
		// scope : this,
		// iconCls : 'icon-application_excel',
		// handler : this.exportOrderMaterSpecExcel
		// });

		this.queryPanel3.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.orderMaterSpecWindow.hide();
					}

				});

		this.orderMaterSpecWindow = this.orderMaterSpecWindow
				|| new Ext.Window({
							title : '订单下达型号查询',
							resizable : true,
							minimizable : false,
							maximizable : true,
							closeAction : "hide",
							buttonAlign : "center",
							autoScroll : false,
							modal : true,
							width : 800,
							height : 600,
							layout : 'border',
							items : [this.queryPanel3, this.listPanel3]

						});
	}

	this.initAddOrderMaterSpecWindow = function() {
		var _this = this;
		this.addOrderMaterSpecWindow = this.addOrderMaterSpecWindow
				|| new Ext.fn.FormWindow({
					title : '新增订单下达型号',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {
							_this.addOrderMaterSpecWindow.items.items[0].form
									.reset();
							_this.addOrderMaterSpecWindow.hide();
							_this.listPanel3.refresh();
						},
						columns : 2,
						saveUrl : 'com.keensen.ump.base.base.saveMarketingSpec.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/prodSpecName',
									fieldLabel : '订单下达型号 ',
									ref : '../../prodSpecName',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'combobox',
									forceSelection : true,
									// allowBlank : false,
									mode : 'local',
									fieldLabel : '商品类型',
									ref : '../../type',
									hiddenName : 'entity/type',
									dataIndex : 'type',
									anchor : '100%',
									colspan : 2,
									emptyText : '--请选择--',
									editable : false,
									store : this.typeStore,
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
									colspan : 2
								}, {
									xtype : 'combobox',
									forceSelection : true,
									allowBlank : false,
									mode : 'local',
									fieldLabel : '货品名称',
									ref : '../../hpmc',
									hiddenName : 'entity/hpmc',
									dataIndex : 'hpmc',
									anchor : '100%',
									colspan : 2,
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
								}]
					}]
				});
	}

	this.initTConfirmWindow = function() {

		var _this = this;

		this.tconfirmWindow = this.tconfirmWindow || new Ext.fn.FormWindow({
			title : '工艺确认',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
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
						_this.listPanel.store.reload();
						_this.tconfirmWindow.items.items[0].form.reset();
						_this.tconfirmWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandConfirm.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveTConfirm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '需生产或入库数量(只)',
							ref : '../../orderAmount',
							dataIndex : 'orderAmount',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '订单类型',
							ref : '../../orderType',
							dataIndex : 'orderType',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.orderBrandStore,
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
							readOnly : true,
							mode : 'local',
							fieldLabel : '有生产规格书',
							ref : '../../ifbook',
							dataIndex : 'ifbook',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '材料齐套',
							ref : '../../ifall',
							dataIndex : 'ifall',
							anchor : '100%',
							colspan : 1,
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
							readOnly : true,
							mode : 'local',
							fieldLabel : '材料到货满足交期',
							ref : '../../ifdelivery',
							dataIndex : 'ifdelivery',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '标签新制版',
							ref : '../../newMakeLabel',
							dataIndex : 'newMakeLabel',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '唛头新制版',
							ref : '../../newMakeMark',
							dataIndex : 'newMakeMark',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '产能满足',
							ref : '../../ifsatisfy',
							dataIndex : 'ifsatisfy',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '考虑非生产日',
							ref : '../../ifconsider',
							dataIndex : 'ifconsider',
							anchor : '100%',
							colspan : 1,
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
							readOnly : true,
							mode : 'local',
							fieldLabel : '考虑保养日',
							ref : '../../ifconsider2',
							dataIndex : 'ifconsider2',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '入库间隔期',
							ref : '../../period',
							dataIndex : 'period',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '符合固定入库期',
							ref : '../../ifwarehousing',
							dataIndex : 'ifwarehousing',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '能否接单',
							ref : '../../ifget',
							dataIndex : 'ifget',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.ifgetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							eadOnly : true,
							fieldLabel : '确认人员',
							dataIndex : 'createName',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							readOnly : true,
							fieldLabel : '反馈内容',
							ref : '../../reason',
							dataIndex : 'reason',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							readOnly : true,
							fieldLabel : '建议调整入库日期',
							ref : '../../adviseDate',
							dataIndex : 'adviseDate',
							format : "Y-m-d",
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">工艺意见</p>',
							labelSeparator : '',// 去掉冒号
							ref : '../../pconfirm',
							colspan : 2
						}, {
							xtype : 'textarea',
							allowBlank : false,
							fieldLabel : '意见',
							ref : '../../tAdvise',
							name : 'entity/tAdvise',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '能否接单',
							ref : '../../tRoute',
							dataIndex : 'tRoute',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.gyyStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}, {
							name : 'entity/relationId',
							xtype : 'hidden',
							dataIndex : 'relationId'
						}]
			}]
		});
	}

	this.initUpdateRemarkWindow = function() {
		var _this = this;
		this.updateRemarkWindow = this.updateRemarkWindow
				|| new Ext.fn.FormWindow({
					title : '生产计划录入',
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
							_this.updateRemarkWindow.items.items[0].form
									.reset();
							_this.updateRemarkWindow.hide();
							_this.listPanel.refresh();
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandYxOrderBase.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveEntity.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textarea',
									name : 'entity/productRemark',
									dataIndex : 'productRemark',
									fieldLabel : '产品备注',
									ref : '../../productRemark',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									name : 'entity/state',
									xtype : 'hidden',
									value : '正式发布'
								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
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

					}	,
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

					}	,
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

	// 物控计划员确认
	this.initMCConfirmWindow = function() {

		var _this = this;

		var mcconfirmSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.mcconfirmListPanel = this.mcconfirmListPanel
				|| new Ext.fn.ListPanel({
					// title : '【请检元件清单】',
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddMC
							}, '-', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelMC
							}],
					autoScroll : false,
					selModel : mcconfirmSelModel,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), mcconfirmSelModel, {
								dataIndex : 'planState',
								header : '计划状态'
							}, {
								dataIndex : 'goodsState',
								header : '到货状态'
							}, {
								dataIndex : 'applyDate',
								header : '申请日期'
							}, {
								dataIndex : 'materCode',
								header : '物料长代码'
							}, {
								dataIndex : 'materName',
								header : '物料名称'
							}, {
								dataIndex : 'materType',
								header : '物料类型'
							}, {
								dataIndex : 'specName',
								header : '规格型号'
							}, {
								dataIndex : 'unit',
								header : '单位'
							}, {
								dataIndex : 'amount',
								header : '采购数量'
							}, {
								dataIndex : 'k3',
								header : 'K3库存'
							}, {
								dataIndex : 'demandDate',
								header : '需求日期'
							}, {
								dataIndex : 'remark',
								header : '备注'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.yxorderbase.queryYxOrderMCConfirm.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : '',
						baseParams : {

					}	,
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
									name : 'planState'
								}, {
									name : 'goodsState'
								}, {
									name : 'applyDate'
								}, {
									name : 'materCode'
								}, {
									name : 'materName'
								}, {
									name : 'specName'
								}, {
									name : 'unit'
								}, {
									name : 'amount'
								}, {
									name : 'k3'
								}, {
									name : 'demandDate'
								}, {
									name : 'remark'
								}, {
									name : 'relationId'
								}, {
									name : 'baseId'
								}, {
									name : 'materType'
								}]
					})
				})

		this.mcconfirmInputPanel = this.mcconfirmInputPanel
				|| new Ext.fn.EditPanel({
					height : 320,
					region : 'north',
					baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 6,
					loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandConfirm.biz.ext',
					saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveMCConfirm5.biz.ext',
					fields : [{
								xtype : 'displayfield',
								fieldLabel : '订单号',
								ref : '../orderNo',
								dataIndex : 'orderNo',
								anchor : '85%',
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '需生产或入库(支)',
								ref : '../orderAmount',
								dataIndex : 'orderAmount',
								anchor : '85%',
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '入库日期',
								ref : '../demandStockDate',
								dataIndex : 'demandStockDate',
								anchor : '85%',
								colspan : 2
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'combobox',
								forceSelection : true,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '材料齐套',
								dataIndex : 'ifall',
								ref : '../ifall',
								hiddenName : 'ifall',
								anchor : '85%',
								colspan : 3,
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
								dataIndex : 'ifdelivery',
								// allowBlank : false,
								mode : 'local',
								fieldLabel : '材料到货&nbsp;<br>满足交期',
								ref : '../ifdelivery',
								hiddenName : 'ifdelivery',
								anchor : '85%',
								colspan : 3,
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
								height : '5',
								colspan : 6
							}, {
								xtype : 'combobox',
								forceSelection : true,
								// allowBlank : false,
								mode : 'local',
								fieldLabel : '标签是否&nbsp;<br>需要采购',
								ref : '../ifSaleLabel',
								hiddenName : 'ifSaleLabel',
								dataIndex : 'ifSaleLabel',
								anchor : '85%',
								colspan : 3,
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
								height : '5',
								colspan : 6
							}, {
								xtype : 'displayfield',
								fieldLabel : '标签新制版',
								ref : '../newMakeLabel',
								dataIndex : 'newMakeLabel',
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								fieldLabel : '唛头新制版',
								ref : '../newMakeMark',
								dataIndex : 'newMakeMark',
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'textarea',
								fieldLabel : '反馈内容',
								dataIndex : 'mReason',
								ref : '../mReason',
								name : 'mReason',
								anchor : '90%',
								colspan : 6
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'datefield',
								fieldLabel : '建议调整<br>入库日期',
								ref : '../adviseDate',
								name : 'adviseDate',
								dataIndex : 'adviseDate',
								format : "Y-m-d",
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'combobox',
								forceSelection : true,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '能否接单',
								dataIndex : 'ifget',
								ref : '../ifget',
								hiddenName : 'ifget',
								anchor : '85%',
								colspan : 3,
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
								name : 'relationId',
								ref : '../relationId',
								xtype : 'hidden'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveMCConfirm
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.mcconfirmInputPanel.form.reset();
									this.mcconfirmWindow.hide();
								}
							}]

				})

		this.mcconfirmWindow = this.mcconfirmWindow || new Ext.Window({
					title : '物料计划员确认',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.mcconfirmInputPanel, this.mcconfirmListPanel]

				});

	}

	// 新增物料计划
	this.initAddMaterWindow = function() {
		var _this = this;

		this.addMaterWindow = this.addMaterWindow || new Ext.fn.FormWindow({
					title : '新增采购计划',
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
											forceSelection : true,
											allowBlank : false,
											mode : 'local',
											fieldLabel : '计划状态',
											ref : '../../planState',
											anchor : '95%',
											colspan : 1,
											emptyText : '--请选择--',
											editable : false,
											store : this.materPlanStateStore,
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
											fieldLabel : '到货状态',
											ref : '../../goodsState',
											anchor : '95%',
											colspan : 1,
											emptyText : '--请选择--',
											editable : false,
											store : this.materGoodsStateStore,
											displayField : "name",
											valueField : "code",
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'datefield',
											ref : '../../applyDate',
											allowBlank : false,
											fieldLabel : '申请日期',
											format : "Y-m-d",
											anchor : '95%',
											value : new Date(),
											colspan : 1
										}, {
											xtype : 'textfield',
											ref : '../../specName',
											allowBlank : false,
											fieldLabel : '规格型号',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'trigger',
											emptyText : '单击旁边按钮填充',
											ref : '../../labelDrawingCode',
											dataIndex : 'labelDrawingCode',
											editable : false,
											hideTrigger : false,
											fieldLabel : '标签图号',
											anchor : '95%',
											colspan : 1,
											onTriggerClick : function() {
												_this.onFill();
											}
										}, {
											xtype : 'trigger',
											emptyText : '单击旁边按钮填充',
											ref : '../../markDrawingCode',
											dataIndex : 'markDrawingCode',
											editable : true,
											hideTrigger : false,
											fieldLabel : '唛头图号',
											anchor : '95%',
											colspan : 1,
											onTriggerClick : function() {
												_this.onFill2();
											}
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'trigger',
											// emptyText : '单击旁边按钮填充',
											ref : '../../bagDrawingCode',
											dataIndex : 'bagDrawingCode',
											editable : false,
											hideTrigger : false,
											readOnly : true,
											fieldLabel : '包装袋图纸',
											anchor : '95%',
											colspan : 1,
											onTriggerClick : function() {
												// _this.onFill();
											}
										}, {
											xtype : 'trigger',
											// emptyText : '单击旁边按钮填充',
											ref : '../../boxDrawingCode',
											dataIndex : 'boxDrawingCode',
											editable : false,
											hideTrigger : false,
											readOnly : true,
											fieldLabel : '包装箱图纸',
											anchor : '95%',
											colspan : 1,
											onTriggerClick : function() {
												// _this.onFill2();
											}
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'textfield',
											ref : '../../snStart',
											dataIndex : 'snStart',
											readOnly : true,
											fieldLabel : '序列开始号',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'textfield',
											ref : '../../snEnd',
											dataIndex : 'snEnd',
											readOnly : true,
											fieldLabel : '序列结束号',
											anchor : '95%',
											colspan : 1
										}

										, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'trigger',
											ref : '../../materCode',
											editable : true,
											hideTrigger : false,
											allowBlank : false,
											fieldLabel : '物料长代码',
											regex : /^0\d.0\d.0\d.\d{4}$/,
											regexText : "不合法的格式",
											anchor : '95%',
											colspan : 1,
											onTriggerClick : function() {
												_this.onFill3();
											}
										}, {
											xtype : 'textfield',
											ref : '../../materName',
											allowBlank : false,
											fieldLabel : '物料名称',
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'combobox',
											forceSelection : false,
											allowBlank : false,
											mode : 'local',
											fieldLabel : '物料类型',
											ref : '../../materType',
											anchor : '95%',
											colspan : 1,
											emptyText : '--请选择--',
											editable : true,
											store : this.materNameStore,
											displayField : "name",
											valueField : "code",
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'combobox',
											forceSelection : true,
											allowBlank : false,
											mode : 'local',
											fieldLabel : '单位',
											ref : '../../unit',
											anchor : '95%',
											colspan : 1,
											emptyText : '--请选择--',
											editable : false,
											store : this.materUnitStore,
											displayField : "name",
											valueField : "code",
											listeners : {
												"expand" : function(A) {
													this.reset()
												}
											}
										}, {
											xtype : 'numberfield',
											ref : '../../amount',
											allowBlank : false,
											fieldLabel : '采购数量',
											anchor : '95%',
											minValue : 0,
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'numberfield',
											ref : '../../k3',
											allowBlank : false,
											fieldLabel : 'K3库存',
											anchor : '95%',
											minValue : 0,
											colspan : 1
										}, {
											xtype : 'datefield',
											ref : '../../demandDate',
											allowBlank : false,
											fieldLabel : '需求日期',
											format : "Y-m-d",
											anchor : '95%',
											colspan : 1
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'textarea',
											ref : '../../remark',
											allowBlank : false,
											fieldLabel : '备注',
											anchor : '95%',
											colspan : 2
										}]
							}]
				});

		this.addMaterWindow.buttons[0].hide();
		this.addMaterWindow.buttons[1].hide();

		this.addMaterWindow.addButton({
					text : "新增",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onInsertMater
				});

		this.addMaterWindow.addButton({
					text : "新增并关闭",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onInsertMater2
				});

		this.addMaterWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.addMaterWindow.items.items[0].form.reset();
						this.addMaterWindow.hide();
					}
				});
	}

	// 查看物控计划员确认
	this.initViewMCWindow = function() {

		var _this = this;

		var viewMCSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.viewMCListPanel = this.viewMCListPanel || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			autoScroll : false,
			selModel : viewMCSelModel,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), viewMCSelModel, {
						dataIndex : 'planState',
						header : '计划状态'
					}, {
						dataIndex : 'goodsState',
						header : '到货状态'
					}, {
						dataIndex : 'applyDate',
						header : '申请日期'
					}, {
						dataIndex : 'materCode',
						header : '物料长代码'
					}, {
						dataIndex : 'materName',
						header : '物料名称'
					}, {
						dataIndex : 'specName',
						header : '规格型号'
					}, {
						dataIndex : 'unit',
						header : '单位'
					}, {
						dataIndex : 'amount',
						header : '采购数量'
					}, {
						dataIndex : 'k3',
						header : 'K3库存'
					}, {
						dataIndex : 'demandDate',
						header : '需求日期'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.yxorderbase.queryYxOrderMCConfirm.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
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
							name : 'planState'
						}, {
							name : 'goodsState'
						}, {
							name : 'applyDate'
						}, {
							name : 'materCode'
						}, {
							name : 'materName'
						}, {
							name : 'specName'
						}, {
							name : 'unit'
						}, {
							name : 'amount'
						}, {
							name : 'k3'
						}, {
							name : 'demandDate'
						}, {
							name : 'remark'
						}, {
							name : 'relationId'
						}, {
							name : 'baseId'
						}]
			})
		})

		this.viewMCInputPanel = this.viewMCInputPanel || new Ext.fn.EditPanel({
			height : 320,
			region : 'north',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 2,
			loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandConfirmById.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : '订单号',
						ref : '../orderNo',
						readOnly : true,
						dataIndex : 'orderNo',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '需生产或入库(支)',
						ref : '../orderAmount',
						readOnly : true,
						dataIndex : 'orderAmount',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'combobox',
						forceSelection : true,
						readOnly : true,
						mode : 'local',
						fieldLabel : '材料齐套',
						ref : '../ifall',
						hiddenName : 'ifall',
						anchor : '85%',
						colspan : 1,
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
						readOnly : true,
						mode : 'local',
						fieldLabel : '材料到货&nbsp;<br>满足交期',
						ref : '../ifdelivery',
						hiddenName : 'ifdelivery',
						anchor : '85%',
						colspan : 1,
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
						height : '5',
						colspan : 2
					}, {
						xtype : 'combobox',
						forceSelection : true,
						readOnly : true,
						mode : 'local',
						fieldLabel : '标签是否&nbsp;<br>需要采购',
						ref : '../ifSaleLabel',
						hiddenName : 'ifSaleLabel',
						anchor : '85%',
						colspan : 1,
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
						height : '5',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '标签新制版',
						ref : '../newMakeLabel',
						dataIndex : 'newMakeLabel',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '唛头新制版',
						ref : '../newMakeMark',
						dataIndex : 'newMakeMark',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textarea',
						fieldLabel : '反馈内容',
						readOnly : true,
						ref : '../mReason',
						dataIndex : 'mReason',
						anchor : '90%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'datefield',
						fieldLabel : '建议调整<br>入库日期',
						ref : '../adviseDate',
						readOnly : true,
						dataIndex : 'adviseDate',
						format : "Y-m-d",
						anchor : '85%',
						colspan : 1
					}],
			buttons : [{
						text : "关闭",
						scope : this,
						handler : function() {
							this.viewMCWindow.hide();
						}
					}]

		})

		this.viewMCWindow = this.viewMCWindow || new Ext.Window({
					title : '物料计划员确认',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.viewMCInputPanel, this.viewMCListPanel]

				});

	}

	// 修改物控计划员确认
	this.initMCConfirmWindow2 = function() {

		var _this = this;

		var mcconfirmSelModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.mcconfirmListPanel2 = this.mcconfirmListPanel2
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddMC
							}, '-', {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelMC2
							}],
					autoScroll : false,
					selModel : mcconfirmSelModel2,
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), mcconfirmSelModel2, {
								dataIndex : 'planState',
								header : '计划状态'
							}, {
								dataIndex : 'goodsState',
								header : '到货状态'
							}, {
								dataIndex : 'applyDate',
								header : '申请日期'
							}, {
								dataIndex : 'materCode',
								header : '物料长代码'
							}, {
								dataIndex : 'materName',
								header : '物料名称'
							}, {
								dataIndex : 'materType',
								width : 150,
								header : '物料类型'
							}, {
								dataIndex : 'specName',
								header : '规格型号'
							}, {
								dataIndex : 'unit',
								header : '单位'
							}, {
								dataIndex : 'amount',
								header : '采购数量'
							}, {
								dataIndex : 'k3',
								header : 'K3库存'
							}, {
								dataIndex : 'demandDate',
								header : '需求日期'
							}, {
								dataIndex : 'remark',
								header : '备注'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.yxorderbase.queryYxOrderMCConfirm.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : '',
						baseParams : {

					}	,
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
									name : 'planState'
								}, {
									name : 'goodsState'
								}, {
									name : 'applyDate'
								}, {
									name : 'materCode'
								}, {
									name : 'materName'
								}, {
									name : 'specName'
								}, {
									name : 'unit'
								}, {
									name : 'amount'
								}, {
									name : 'k3'
								}, {
									name : 'demandDate'
								}, {
									name : 'remark'
								}, {
									name : 'relationId'
								}, {
									name : 'baseId'
								}, {
									name : 'materType'
								}]
					})
				})

		this.mcconfirmInputPanel2 = this.mcconfirmInputPanel2
				|| new Ext.fn.EditPanel({
					height : 320,
					region : 'north',
					baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 6,
					loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandConfirm.biz.ext',
					saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveMCConfirm5.biz.ext',
					fields : [{
								xtype : 'displayfield',
								fieldLabel : '订单号',
								ref : '../orderNo',
								dataIndex : 'orderNo',
								anchor : '85%',
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '需生产或入库(支)',
								ref : '../orderAmount',
								dataIndex : 'orderAmount',
								anchor : '85%',
								colspan : 2
							}, {
								xtype : 'displayfield',
								fieldLabel : '入库日期',
								ref : '../demandStockDate',
								dataIndex : 'demandStockDate',
								anchor : '85%',
								colspan : 2
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'combobox',
								forceSelection : true,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '材料齐套',
								ref : '../ifall',
								hiddenName : 'ifall',
								anchor : '85%',
								colspan : 3,
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
								allowBlank : false,
								mode : 'local',
								fieldLabel : '材料到货&nbsp;<br>满足交期',
								ref : '../ifdelivery',
								hiddenName : 'ifdelivery',
								anchor : '85%',
								colspan : 3,
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
								height : '5',
								colspan : 6
							}, {
								xtype : 'combobox',
								forceSelection : true,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '标签是否&nbsp;<br>需要采购',
								ref : '../ifSaleLabel',
								hiddenName : 'ifSaleLabel',
								anchor : '85%',
								colspan : 3,
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
								height : '5',
								colspan : 6
							}, {
								xtype : 'displayfield',
								fieldLabel : '标签新制版',
								ref : '../newMakeLabel',
								dataIndex : 'newMakeLabel',
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								fieldLabel : '唛头新制版',
								ref : '../newMakeMark',
								dataIndex : 'newMakeMark',
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'textarea',
								fieldLabel : '反馈内容',
								ref : '../mReason',
								dataIndex : 'mReason',
								name : 'mReason',
								anchor : '90%',
								colspan : 6
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 6
							}, {
								xtype : 'datefield',
								fieldLabel : '建议调整<br>入库日期',
								ref : '../adviseDate',
								dataIndex : 'adviseDate',
								name : 'adviseDate',
								format : "Y-m-d",
								anchor : '85%',
								colspan : 3
							}, {
								xtype : 'combobox',
								forceSelection : true,
								allowBlank : false,
								mode : 'local',
								fieldLabel : '能否接单',
								ref : '../ifget',
								hiddenName : 'ifget',
								anchor : '85%',
								colspan : 3,
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
								name : 'id',
								ref : '../pkid',
								dataIndex : 'id',
								xtype : 'hidden'
							}, {
								name : 'relationId',
								dataIndex : 'relationId',
								xtype : 'hidden'
							}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSaveMCConfirm2
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.mcconfirmInputPanel2.form.reset();
									this.mcconfirmWindow2.hide();
								}
							}]

				})

		this.mcconfirmWindow2 = this.mcconfirmWindow2 || new Ext.Window({
					title : '物料计划员修改',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.mcconfirmInputPanel2,
							this.mcconfirmListPanel2]

				});

	}

	this.initPGConfirmWindow = function() {

		var _this = this;

		this.pgconfirmWindow = this.pgconfirmWindow || new Ext.fn.FormWindow({
			title : '品管确认',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
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
						_this.listPanel.store.reload();
						_this.pgconfirmWindow.items.items[0].form.reset();
						_this.pgconfirmWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.yxorderbase.expandConfirm.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.yxorderbase.saveTConfirm.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '需生产或入库数量(只)',
							ref : '../../orderAmount',
							dataIndex : 'orderAmount',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '订单类型',
							ref : '../../orderType',
							dataIndex : 'orderType',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.orderBrandStore,
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
							readOnly : true,
							mode : 'local',
							fieldLabel : '有生产规格书',
							ref : '../../ifbook',
							dataIndex : 'ifbook',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '材料齐套',
							ref : '../../ifall',
							dataIndex : 'ifall',
							anchor : '100%',
							colspan : 1,
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
							readOnly : true,
							mode : 'local',
							fieldLabel : '材料到货满足交期',
							ref : '../../ifdelivery',
							dataIndex : 'ifdelivery',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '标签新制版',
							ref : '../../newMakeLabel',
							dataIndex : 'newMakeLabel',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '唛头新制版',
							ref : '../../newMakeMark',
							dataIndex : 'newMakeMark',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '产能满足',
							ref : '../../ifsatisfy',
							dataIndex : 'ifsatisfy',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '考虑非生产日',
							ref : '../../ifconsider',
							dataIndex : 'ifconsider',
							anchor : '100%',
							colspan : 1,
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
							readOnly : true,
							mode : 'local',
							fieldLabel : '考虑保养日',
							ref : '../../ifconsider2',
							dataIndex : 'ifconsider2',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '入库间隔期',
							ref : '../../period',
							dataIndex : 'period',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '符合固定入库期',
							ref : '../../ifwarehousing',
							dataIndex : 'ifwarehousing',
							anchor : '100%',
							colspan : 1,
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
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							readOnly : true,
							mode : 'local',
							fieldLabel : '能否接单',
							ref : '../../ifget',
							dataIndex : 'ifget',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.ifgetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							eadOnly : true,
							fieldLabel : '确认人员',
							dataIndex : 'createName',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							readOnly : true,
							fieldLabel : '反馈内容',
							ref : '../../reason',
							dataIndex : 'reason',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							readOnly : true,
							fieldLabel : '建议调整入库日期',
							ref : '../../adviseDate',
							dataIndex : 'adviseDate',
							format : "Y-m-d",
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">品管意见</p>',
							labelSeparator : '',// 去掉冒号
							ref : '../../pconfirm',
							colspan : 2
						}, {
							xtype : 'textarea',
							allowBlank : false,
							fieldLabel : '意见',
							ref : '../../tAdvise',
							name : 'entity/tAdvise',
							anchor : '85%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							forceSelection : true,
							allowBlank : false,
							mode : 'local',
							fieldLabel : '能否接单',
							ref : '../../tRoute',
							dataIndex : 'tRoute',
							anchor : '100%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.gyyStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							name : 'entity/id',
							xtype : 'hidden',
							dataIndex : 'id'
						}, {
							name : 'entity/relationId',
							xtype : 'hidden',
							dataIndex : 'relationId'
						}]
			}]
		});
	}

	// ChooseSpec
	this.initChooseSpecWindow = function() {
		var _this = this;

		var selModel4ChooseSpec = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChooseSpec = this.listPanel4ChooseSpec
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					hsPage : true,
					selModel : selModel4ChooseSpec,
					tbar : [{
								text : '确定选择',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onSelect4ChooseSpec
							}],
					delUrl : '111.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4ChooseSpec, {
								dataIndex : 'materSpecName',

								header : '卷制型号'
							}, {
								dataIndex : 'denseNet',
								header : '浓网规格'
							}, {
								dataIndex : 'lid',
								header : '端盖类型'
							}, {
								dataIndex : 'saltLow',

								header : '最低脱盐率(%)'
							}, {
								dataIndex : 'gpdLow',
								header : '产水量下限(GPD)'
							}, {
								dataIndex : 'gpdUp',

								header : '产水量上限(GPD)'
							}, {
								dataIndex : 'pressure',

								header : '操作压力(PSi)'
							}, {
								dataIndex : 'temperature',

								header : '测试温度(℃)'
							}, {
								dataIndex : 'concentration',

								header : '测试液浓度（mg/L）'
							}, {
								dataIndex : 'recyclePercent',

								header : '单支回收率（%）'
							}, {
								dataIndex : 'ph',

								header : '测试PH值'
							}, {
								dataIndex : 'labelDrawingCode',
								header : '标签图纸编号'
							}, {
								dataIndex : 'bagDrawingCode',
								header : '真空装图纸编号'
							}, {
								dataIndex : 'boxDrawingCode',
								header : '包装箱图纸编号'
							}, {
								dataIndex : 'markDrawingCode',
								header : '唛头图纸编号'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.produce.component.yxorderbase.querySpecByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {

					}	,
						fields : [{
									name : 'materSpecName'
								}, {
									name : 'materSpecId'
								}, {
									name : 'denseNet'
								}, {
									name : 'lid'
								}, {
									name : 'saltLow'
								}, {
									name : 'gpdLow'
								}, {
									name : 'gpdUp'
								}, {
									name : 'pressure'
								}, {
									name : 'temperature'
								}, {
									name : 'concentration'
								}, {
									name : 'recyclePercent'
								}, {
									name : 'ph'
								}, {
									name : 'labelDrawingCode'
								}, {
									name : 'bagDrawingCode'
								}, {
									name : 'boxDrawingCode'
								}, {
									name : 'markDrawingCode'
								}]
					})
				})

		this.queryPanel4ChooseSpec = this.queryPanel4ChooseSpec
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 2,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										fieldLabel : '%-卷制型号-%',
										ref : '../materSpecName',
										name : 'condition/materSpecName',
										anchor : '100%',
										colspan : 1
									}, {
										xtype : 'textfield',
										fieldLabel : '产品类型',
										name : 'condition/prodType',
										ref : '../prodType',
										readOnly : true
									}]
						})

		this.queryPanel4ChooseSpec.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseSpecWindow.hide();
					}

				});

		this.chooseSpecWindow = this.chooseSpecWindow || new Ext.Window({
					title : '卷制型号查询',
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
					items : [this.queryPanel4ChooseSpec,
							this.listPanel4ChooseSpec]

				})
	}
}