com.keensen.ump.produce.component.yxorderMgr = function() {
	this.initPanel = function() {
		this.rec = {};

		this.initTemplateNameStore();
		this.initPlanYear();
		this.initWeekArr();

		this.initQueryPanel();
		this.initListPanel();

		this.buildExcelUploadWin();
		this.initUploadWindow();

		this.initPlanWeekWindow();
		this.initViewPlanWeekWindow();
		this.initEditPlanWeekWindow();

		this.initUpdatematerialWindow();
		this.initUpdateAmountWindow();
		this.initAddOrderWindow();

		this.initOrderMaterSpecWindow();
		this.initAddOrderMaterSpecWindow();

		this.initUpdateTemplateNameWindow();
		this.initUpdatematerialWindow2();

		this.initAddOrderWindow2();

		this.initStore();
		this.initOrderViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentyxordermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		// 制定中，物控计划员确认，正式发布，修订中
		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['制定中', '制定中'], ['物控计划员确认', '物控计划员确认'],
							['正式发布', '正式发布'], ['修订中', '修订中'], ['不能接单', '不能接单']]
				});

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.goodsWithReportStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否'], ['电子版检测报告', '电子版检测报告']]
				});
				
		// 下拉选项：红、橙、黄、绿、青、蓝、紫
		this.colorStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['红', '红'], ['橙', '橙'], ['黄', '黄'], ['绿', '绿'],
							['青', '青'], ['蓝', '蓝'], ['紫', '紫']]
				});

		this.orderTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['公司标准', '公司标准'], ['非公司标准', '非公司标准']]
				});
		// 工业、商用、家用
		this.typeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['工业膜', '工业膜'], ['家用膜', '家用膜'], ['商用膜', '商用膜'], ['膜片', '膜片'], ['其他', '其他']]
				});

		// 8寸、4寸、类4寸、常规通量(家用)、大通量(家用)
		this.hpmcStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['8寸', '8寸'], ['4寸', '4寸'], ['类4寸', '类4寸'],
							['常规通量(家用)', '常规通量(家用)'], ['大通量(家用)', '大通量(家用)']]
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
		this.lidStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['蜂窝', '蜂窝'], ['格栅', '格栅'], ['梳齿', '梳齿'],
							['旋熔', '旋熔'], ['定制', '定制'], ['其他', '其他'],
							['公司标准', '公司标准']]
				});

		// 卷膜胶带选项：印刷双层、印刷三层、网纹
		// 卷膜胶带选项：印刷双层、印刷三层、网纹 蓝胶带 绿胶带 白胶带 黄胶带 灰胶带
		this.tapeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['印刷双层', '印刷双层'], ['印刷三层', '印刷三层'], ['网纹', '网纹'],
							['公司标准', '公司标准'],
							['蓝胶带', '蓝胶带'],
							['绿胶带', '绿胶带'],
							['白胶带', '白胶带'],
							['黄胶带', '黄胶带'],
							['灰胶带', '灰胶带'], ['水光蓝胶带', '水光蓝胶带']]
				});

		// 制作方式下拉选项：印刷、打印
		this.makeLabelStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['印刷', '印刷'], ['打印', '打印']]
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
					data : [['普通木质', '普通木质'], ['出口熏蒸木质', '出口熏蒸木质'],
							['出口免熏蒸木质', '出口免熏蒸木质'], ['塑料', '塑料'],
							['公司标准', '公司标准']]
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
					data : [['常规产品', '常规产品'], ['实验订单', '实验订单']]
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
	}

	this.initPlanYear = function() {
		this.planYearArr = [];
		for (var i = 0; i < 10; i++) {
			this.planYearArr.push([2024 + i, 2024 + i])
		}
	}

	this.initTemplateNameStore = function() {
		this.templateNameStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.makprint.queryTemplateName.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'templateName'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 100,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
								// anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								// anchor : '75%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ifplan2',
								hiddenName : 'condition/ifplan2',
								fieldLabel : '是否已制定计划',
								// anchor : '75%',
								dictData : KS_YESORNO
							}]
				});

		this.queryPanel.addButton({
					text : "模板下载",
					scope : this,
					hidden:true,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});
		this.queryPanel.addButton({
					text : "订单导入",
					scope : this,
					hidden:true,
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【营销订单列表】',
			viewConfig : {
				forceFit : false
			},
			enableHdMenu : true,
			columnLines : true,
			hsPage : true,
			id : mylistid,
			tbar : [{
						text : '新增生产主计划',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddPlanWeek
					}, '-', {
						text : '修改订单下达型号',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onUpdateMaterial2
					}/*
						 * , '-', { text : '查看生产主计划', scope : this, iconCls :
						 * 'icon-application_form_magnify', handler :
						 * this.onViewPlanWeek }
						 */, '-', {
						text : '修改生产规格',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onUpdateMaterial
					}, '-', {
						text : '修改订单数量',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onUpdateAmount
					}, '-', {
						text : '修改唛头图纸编号',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onUpdateTemplateName
					}, '-', {
						text : '订单复制新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddOrder
					}, '-', {
						text : '订单新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddOrder2
					}, '->', {
						text : '订单详情',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onOrderView
					}, '-', {
						text : '订单生产型号查询',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onOrderMaterSpec
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.neworder.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderType',
						header : '订单类型',
						sortable : true
					}, {
						dataIndex : 'orderNo',
						header : '订单编号',
						sortable : true
					}, {
						dataIndex : 'templateName',
						header : '唛头图纸编号',
						sortable : true
					}, {
						dataIndex : 'materSpecName2',
						header : '订单下达型号',
						sortable : true
					}, {
						dataIndex : 'materSpecName',
						header : '对应生产规格',
						sortable : true
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量',
						sortable : true
					}, {
						dataIndex : 'orderDate',
						header : '订单日期',
						sortable : true
					}, {
						dataIndex : 'ifplan',
						header : '制定计划与否',
						renderer : function(v, m, r, i) {
							var ifplan = r.get('ifplan');
							if (ifplan == '已制定') {
								return "<span style='color:red'>" + ifplan
										+ "</span>";

							} else {
								return ifplan;
							}
						},
						sortable : true
					}, {
						dataIndex : 'arrangeAmount',
						header : '已排产数量',
						sortable : true
					}, {
						dataIndex : 'scfs',
						header : '生产方式',
						sortable : true
					}, {
						dataIndex : 'bm',
						header : '编码',
						sortable : true
					}, {
						dataIndex : 'sffh',
						header : '是否发货',
						sortable : true
					}, {
						dataIndex : 'type',
						header : '类型',
						sortable : true
					}, {
						dataIndex : 'createTime',
						header : '最近导入时间',
						sortable : true
					}, {
						dataIndex : 'khxj',
						header : '客户星级',
						sortable : true
					}, {
						dataIndex : 'cpxj',
						header : '产品星级',
						sortable : true
					}, {
						dataIndex : 'ddxj',
						header : '订单星级',
						sortable : true
					}, {
						dataIndex : 'hpmc',
						header : '货品名称',
						sortable : true
					}, {
						dataIndex : 'dw',
						header : '单位',
						sortable : true
					}, {
						dataIndex : 'cpgg',
						header : '产品规格',
						sortable : true
					}, {
						dataIndex : 'dryWet',
						header : '干膜/湿',
						sortable : true
					}, {
						dataIndex : 'dfh',
						header : '待发货（发库存）',
						sortable : true
					}, {
						dataIndex : 'xsc',
						header : '需生产或入库数量',
						sortable : true
					}, {
						dataIndex : 'sbkcgm',
						header : '司标库存（干膜）',
						sortable : true
					}, {
						dataIndex : 'sbkcsm',
						header : '司标库存（湿膜）',
						sortable : true
					}, {
						dataIndex : 'bq',
						header : '标签',
						sortable : true
					}, {
						dataIndex : 'bag',
						header : '真空包装袋',
						sortable : true
					}, {
						dataIndex : 'box',
						header : '包装箱',
						sortable : true
					}, {
						dataIndex : 'mark',
						header : '唛头',
						sortable : true
					}, {
						dataIndex : 'pack',
						header : '打包方式',
						sortable : true
					}, {
						dataIndex : 'performance',
						header : '产品性能',
						sortable : true
					}, {
						dataIndex : 'lidTape',
						header : '端盖+胶带',
						sortable : true
					}, {
						dataIndex : 'lid',
						header : '端盖',
						sortable : true
					}, {
						dataIndex : 'tape',
						header : '胶带',
						sortable : true
					}, {
						dataIndex : 'tray',
						header : '托盘',
						sortable : true
					}, {
						dataIndex : 'remark',
						header : '其它备注'
					}, {
						dataIndex : 'demandStockDate',
						header : '生产交期',
						sortable : true
					}, {
						dataIndex : 'rksl',
						header : '入库数量（支）',
						sortable : true
					}, {
						dataIndex : 'jhwcsj',
						header : '计划完成时间',
						sortable : true
					}, {
						dataIndex : 'scwcrq',
						header : '生产完成日期',
						sortable : true
					}, {
						dataIndex : 'id',
						header : '订单ID',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryYxOrderByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'id'
						}, {
							name : 'lidTape'
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
							name : 'scfs'
						}, {
							name : 'bm'
						}, {
							name : 'sffh'
						}, {
							name : 'orderType'
						}, {
							name : 'type'
						}, {
							name : 'khxj'
						}, {
							name : 'cpxj'
						}, {
							name : 'ddxj'
						}, {
							name : 'orderNo'
						}, {
							name : 'orderDate'
						}, {
							name : 'hpmc'
						}, {
							name : 'dw'
						}, {
							name : 'materSpecName'
						}, {
							name : 'cpgg'
						}, {
							name : 'dryWet'
						}, {
							name : 'orderAmount'
						}, {
							name : 'dfh'
						}, {
							name : 'xsc'
						}, {
							name : 'sbkcgm'
						}, {
							name : 'sbkcsm'
						}, {
							name : 'bq'
						}, {
							name : 'bag'
						}, {
							name : 'box'
						}, {
							name : 'mark'
						}, {
							name : 'pack'
						}, {
							name : 'performance'
						}, {
							name : 'remark'
						}, {
							name : 'demandStockDate'
						}, {
							name : 'rksl'
						}, {
							name : 'jhwcsj'
						}, {
							name : 'scwcrq'
						}, {
							name : 'cnt'
						}, {
							name : 'arrangeAmount'
						}, {
							name : 'ifplan'
						}, {
							name : 'materSpecName2'
						}, {
							name : 'templateName'
						}, {
							name : 'baseId'
						}]
			})
		})

		// 右键菜单
		this.listPanel.addListener('rowcontextmenu', rightClickFn);// 右键菜单代码关键部分
		var rightClick = new Ext.menu.Menu({
			// id : 'rightClickCont',
			items : [{
						handler : function() {
							if (Ext.isEmpty(_this.rec.data)) {
								Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
								return;
							} else {
								copyToClipboard(_this.rec.data['orderNo']);
							}
						},
						text : '复制订单编号'
					}, {
						handler : function() {
							if (Ext.isEmpty(_this.rec.data)) {
								Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
								return;
							} else {
								if (!Ext
										.isEmpty(_this.rec.data['templateName']))
									copyToClipboard(_this.rec.data['templateName'])
								else
									copyToClipboard(' ');
							}
						},
						text : '复制唛头图纸编号'
					}, {
						handler : function() {
							if (Ext.isEmpty(_this.rec.data)) {
								Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
								return;
							} else {
								copyToClipboard(_this.rec.data['materSpecName2']);
							}
						},
						text : '复制订单下达型号'
					}, {
						handler : function() {
							if (Ext.isEmpty(_this.rec.data)) {
								Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
								return;
							} else {
								copyToClipboard(_this.rec.data['materSpecName']);
							}
						},
						text : '复制对应生产规格'
					}]
		});
		// 右键菜单代码关键部分
		function rightClickFn(grid, rowindex, e) {
			var B = _this.listPanel.getSelectionModel().getSelections();
			if (B.length != 0) {
				e.preventDefault();
				rightClick.showAt(e.getXY());
			}
		}

	}

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
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
				saveUrl : 'com.keensen.ump.produce.component.importYxOrder.flow',
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

	this.initUploadWindow = function() {
		var _this = this;
		this.uploadForm = this.uploadForm || new Ext.form.FormPanel({
					labelAlign : 'right',
					buttonAlign : "center",
					title : '文件上传',
					labelWidth : 60,
					frame : true,
					url : "com.zoomlion.hjsrm.frame.bclib.file.UploadFileBackId.flow",
					width : 360,
					height : 100,
					fileUpload : true,
					items : [{
								xtype : 'textfield',
								fieldLabel : '文件名',
								name : 'uploadFile',
								inputType : 'file'// 文件类型
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								name : 'relationId'
							}, {
								xtype : 'hidden',
								name : 'groupId',
								value : ''
							}, {
								xtype : 'hidden',
								name : 'dataorgid',
								value : dataorgid
							}, {
								xtype : 'hidden',
								name : 'operatorid',
								value : operatorid
							}, {
								xtype : 'hidden',
								name : 'operatorname',
								value : operatorname
							}]
				});

		this.uploadWindow = this.uploadWindow || new Ext.Window({
			id : 'componentuploadwindow',
			width : 360,
			modal : true,
			height : 150,
			buttonAlign : "center",
			closeAction : "hide",
			layout : "fit",
			items : [this.uploadForm],
			buttons : [{
				text : '上传',
				handler : function() {
					var groupId = _this.uploadForm.getForm()
							.findField('groupId').getValue();
					_this.uploadForm.getForm().submit({
						clientValidation : true,
						success : function(form, response) {
							Ext.Msg.alert('操作提示', '上传成功!');
							/*
							 * var fileId = response.result.fileId; var fileName =
							 * response.result.fileName; var size =
							 * response.result.fileSize; var type =
							 * response.result.fileType; var store =
							 * Ext.getCmp(_this.veattachId).getStore(); var F =
							 * new Ext.data.Record({ id : fileId, filename :
							 * fileName, size : size, type : type });
							 * store.add(F)
							 */
							if (groupId == 'componentlabel') {
								var store = Ext.getCmp('componentlabel')
										.getStore();
							} else {
								var store = Ext.getCmp('componentmark')
										.getStore();
							}
							Ext.Ajax.request({
								url : "com.zoomlion.hjsrm.frame.bclib.file.FileBclib.queryFileList.biz.ext",
								jsonData : {
									'groupId' : _this.uploadForm.getForm()
											.findField('groupId').getValue(),
									'relationId' : _this.uploadForm.getForm()
											.findField('relationId').getValue()
								},
								success : function(B) {
									var A = Ext.decode(B.responseText);
									var J = A.files;
									if (J) {
										var I = [];
										for (var H = 0; H < J.length; H++) {
											var fileName = J[H].fileName;
											var fileType = fileName
													.substr(fileName
															.lastIndexOf('.'));
											I.push([J[H].fileId, J[H].fileId,
													J[H].fileName, fileType,
													J[H].fileSize, -4, 100,
													J[H].filePath])
										}
										store.removeAll();
										store.loadData(I);
										_this.uploadWindow.hide();
									}
								}
							})

						},
						failure : function(form, response) {
							Ext.Msg.alert('操作提示', '上传失败!');
						}
					});
				}
			}, {
				text : "关闭",
				handler : function() {
					_this.uploadWindow.hide()
				}
			}]
		})
	}

	this.initWeekArr = function() {
		this.weekArr = [];
		for (var i = 1; i < 53; i++) {
			this.weekArr.push([i, i])
		}
	}

	this.initPlanWeekWindow = function() {
		var _this = this;
		this.planWeekWindow = this.planWeekWindow || new Ext.fn.FormWindow({
			title : '新增生产主计划',
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
						// _this.listPanel.store.load();
						if (_this.viewPlanWeekWindow.isVisible()) {
							var B = _this.listPanel.getSelectionModel()
									.getSelections();
							var A = B[0];

							_this.listPanel2.store.load({
										params : {
											'condition/relationId' : A.data.id
										}
									});
						}
						_this.planWeekWindow.items.items[0].form.reset();
						_this.planWeekWindow.hide();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandYxOrder.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanWeek.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">订单信息</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '编码',
							ref : '../../bm',
							dataIndex : 'bm',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单号',
							ref : '../../orderNo',
							dataIndex : 'orderNo',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '规格型号',
							ref : '../../materSpecName',
							dataIndex : 'materSpecName',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '干/湿膜',
							ref : '../../dryWet',
							dataIndex : 'dryWet',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '数量',
							ref : '../../orderAmount',
							dataIndex : 'orderAmount',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '需生产数量',
							ref : '../../xsc',
							dataIndex : 'xsc',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '标签',
							ref : '../../bq',
							dataIndex : 'bq',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '产品性能',
							ref : '../../performance',
							dataIndex : 'performance',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '订单日期',
							ref : '../../orderDate',
							dataIndex : 'orderDate',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '生产交期',
							ref : '../../demandStockDate',
							dataIndex : 'demandStockDate',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">制定计划</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'combobox',
							fieldLabel : '计划年度',
							ref : '../../planYear',
							hiddenName : 'entity/planYear',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							store : this.planYearArr,
							value : new Date().getFullYear(),
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.planWeekWindow.planYear.reset();
								}
							}
						}/*
							 * , { xtype : 'combobox', fieldLabel : '计划制定周', ref :
							 * '../../planWeek', hiddenName : 'entity/planWeek',
							 * emptyText : '--请选择--', allowBlank : false,
							 * editable : false, anchor : '85%', store :
							 * this.weekArr, value : getCurrentWeekNumber(),
							 * listeners : { scope : this, 'expand' :
							 * function(A) {
							 * this.planWeekWindow.planWeek.reset(); } } }
							 */, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/startDate',
							fieldLabel : '计划开始时间',
							allowBlank : false,
							anchor : '85%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'datefield',
							name : 'entity/endDate',
							fieldLabel : '计划结束时间',
							allowBlank : false,
							anchor : '85%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/enterDate',
							fieldLabel : '入库日期',
							allowBlank : false,
							anchor : '85%',
							format : "Y-m-d",
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/jmAmount',
							fieldLabel : '卷膜数量',
							allowBlank : false,
							anchor : '85%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/waitAmount',
							fieldLabel : '待排产数量',
							allowBlank : false,
							anchor : '85%',
							minValue : 0,
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							name : 'entity/remark',
							xtype : 'textarea',
							fieldLabel : '备注',
							colspan : 2,
							anchor : '87%',
							allowBlank : true
						}, {
							name : 'entity/relationId',
							xtype : 'hidden',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initViewPlanWeekWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			// title : '【周计划】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddPlanWeek2
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEditPlanWeek
					}, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelPlanWeek
					}],
			hsPage : false,
			autoScroll : true,
			selModel : selModel2,
			delUrl : 'com.keensen.ump.produce.component.neworder.deletePlanWeek.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'orderDate',
						header : '订单日期'
					}, {
						dataIndex : 'planYear',
						header : '计划制定年度'
					}/*
						 * , { dataIndex : 'planWeek', header : '计划制定周' }
						 */, {
						dataIndex : 'startDate',
						header : '开始日期'
					}, {
						dataIndex : 'endDate',
						header : '结束日期'
					}, {
						dataIndex : 'bm',
						header : '编码'
					}, {
						dataIndex : 'performance',
						header : '产品性能'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'dryWet',
						header : '干/湿膜'
					}, {
						dataIndex : 'orderAmount',
						header : '数量'
					}, {
						dataIndex : 'xsc',
						header : '需生产数量'
					}, {
						dataIndex : 'bq',
						header : '标签'
					}, {
						dataIndex : 'enterDate',
						header : '入库日期'
					}, {
						dataIndex : 'jmAmount',
						header : '卷膜数量'
					}, {
						dataIndex : 'waitAmount',
						header : '待排产数量'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryPlanWeek.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'bm'
						}, {
							name : 'orderNo'
						}, {
							name : 'materSpecName'
						}, {
							name : 'dryWet'
						}, {
							name : 'orderAmount'
						}, {
							name : 'xsc'
						}, {
							name : 'bq'
						}, {
							name : 'performance'
						}, {
							name : 'orderDate'
						}, {
							name : 'relationId'
						}, {
							name : 'planYear'
						}, {
							name : 'planWeek'
						}, {
							name : 'enterDate'
						}, {
							name : 'amount'
						}, {
							name : 'jmAmount'
						}, {
							name : 'enterAmount'
						}, {
							name : 'waitAmount'
						}, {
							name : 'remark'
						}, {
							name : 'startDate'
						}, {
							name : 'endDate'
						}, {
							name : 'id'
						}]
			})
		})

		this.viewPlanWeekWindow = this.viewPlanWeekWindow || new Ext.Window({
					title : '周计划明细',
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
					items : [this.listPanel2],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.viewPlanWeekWindow.hide();
								}
							}]

				});

	}

	this.initEditPlanWeekWindow = function() {
		var _this = this;
		this.editPlanWeekWindow = this.editPlanWeekWindow
				|| new Ext.fn.FormWindow({
					title : '修改生产主计划',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel2,
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
								// _this.listPanel.store.load();
								if (_this.editPlanWeekWindow.isVisible()) {
									var B = _this.listPanel.getSelectionModel()
											.getSelections();
									var A = B[0];

									_this.listPanel2.store.load({
												params : {
													'condition/relationId' : A.data.id
												}
											});
								}
								_this.editPlanWeekWindow.items.items[0].form
										.reset();
								_this.editPlanWeekWindow.hide();
							}
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandPlanWeek.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.savePlanWeek.biz.ext',
						fields : [{
									xtype : 'displayfield',
									fieldLabel : '<p style="color:red;">制定计划</p>',
									labelSeparator : '',// 去掉冒号
									colspan : 2
								}, {
									xtype : 'combobox',
									fieldLabel : '计划年度',
									ref : '../../planYear',
									hiddenName : 'entity/planYear',
									dataIndex : 'planYear',
									emptyText : '--请选择--',
									allowBlank : false,
									editable : false,
									anchor : '85%',
									store : this.planYearArr,
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editPlanWeekWindow.planYear
													.reset();
										}
									}
								}/*
									 * , { xtype : 'combobox', fieldLabel :
									 * '计划制定周', hiddenName : 'entity/planWeek',
									 * ref : '../../planWeek', emptyText :
									 * '--请选择--', allowBlank : false, editable :
									 * false, anchor : '85%', store :
									 * this.weekArr, dataIndex : 'planWeek',
									 * listeners : { scope : this, 'expand' :
									 * function(A) {
									 * this.editPlanWeekWindow.planWeek
									 * .reset(); } } }
									 */, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'datefield',
									name : 'entity/startDate',
									fieldLabel : '计划开始时间',
									dataIndex : 'startDate',
									allowBlank : false,
									readOnly : true,
									anchor : '85%',
									format : "Y-m-d",
									colspan : 1
								}, {
									xtype : 'datefield',
									name : 'entity/endDate',
									dataIndex : 'endDate',
									fieldLabel : '计划结束时间',
									readOnly : true,
									allowBlank : false,
									anchor : '85%',
									format : "Y-m-d",
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'datefield',
									name : 'entity/enterDate',
									dataIndex : 'enterDate',
									fieldLabel : '入库日期',
									allowBlank : false,
									anchor : '85%',
									format : "Y-m-d",
									colspan : 1
								}, {
									xtype : 'displayfield',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/jmAmount',
									dataIndex : 'jmAmount',
									fieldLabel : '卷膜数量',
									allowBlank : false,
									anchor : '85%',
									minValue : 0,
									colspan : 1
								}, {
									xtype : 'numberfield',
									name : 'entity/waitAmount',
									dataIndex : 'waitAmount',
									fieldLabel : '待排产数量',
									allowBlank : false,
									anchor : '85%',
									minValue : 0,
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/remark',
									dataIndex : 'remark',
									xtype : 'textarea',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '87%',
									allowBlank : true
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

	this.initUpdatematerialWindow = function() {
		var _this = this;
		this.updatematerialWindow = this.updatematerialWindow
				|| new Ext.fn.FormWindow({
					title : '修改生产规格',
					height : 240,
					width : 300,
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
								_this.updatematerialWindow.items.items[0].form
										.reset();
								_this.updatematerialWindow.hide();
								_this.listPanel.refresh();
							}
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandYxOrder.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.saveEntity3.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'prodspeccombobox',
									dataIndex : 'materSpecId',
									hiddenName : 'entity/materSpecId',
									ref : '../../materSpecId',
									allowBlank : false,
									anchor : '100%',
									colspan : 2,
									fieldLabel : '元件型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var materSpecName = _this.updatematerialWindow.materSpecId
													.getRawValue();
											_this.updatematerialWindow.materSpecName
													.setValue(materSpecName);
										}
									}
								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
								}, {
									name : 'entity/orderNo',
									xtype : 'hidden',
									dataIndex : 'orderNo'
								}, {
									name : 'entity/materSpecName',
									ref : '../../materSpecName',
									dataIndex : 'materSpecName',
									xtype : 'hidden'
								}]
					}]
				});
	}

	this.initUpdateAmountWindow = function() {
		var _this = this;
		this.updateAmountWindow = this.updateAmountWindow
				|| new Ext.fn.FormWindow({
					title : '修改订单数量',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {
							_this.updateAmountWindow.items.items[0].form
									.reset();
							_this.updateAmountWindow.hide();
							_this.listPanel.refresh();
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandYxOrder.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.saveEntity.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'numberfield',
									name : 'entity/orderAmount',
									dataIndex : 'orderAmount',
									fieldLabel : '订单数量 ',
									ref : '../../orderAmount',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
								}]
					}]
				});
	}

	this.initAddOrderWindow = function() {
		var _this = this;
		this.addOrderWindow = this.addOrderWindow || new Ext.fn.FormWindow({
			title : '订单复制新增',
			height : 240,
			width : 300,
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
						_this.addOrderWindow.items.items[0].form.reset();
						_this.addOrderWindow.hide();
						_this.listPanel.refresh();
					}
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.neworder.expandYxOrder.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.neworder.saveEntity2.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							fieldLabel : '订单编号 ',
							ref : '../../orderNo',
							readOnly : true,
							anchor : '100%',
							colspan : 2

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/materSpecName2',
							dataIndex : 'materSpecName2',
							fieldLabel : '订单下达型号 ',
							ref : '../../orderNo',
							readOnly : true,
							anchor : '100%',
							colspan : 2

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/orderAmount',
							dataIndex : 'orderAmount',
							fieldLabel : '订单数量 ',
							ref : '../../orderAmount',
							allowBlank : false,
							anchor : '100%',
							colspan : 2

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/materSpecId',
							ref : '../../materSpecId',
							allowBlank : false,
							anchor : '100%',
							colspan : 2,
							fieldLabel : '元件型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									var materSpecName = _this.addOrderWindow.materSpecId
											.getRawValue();
									_this.addOrderWindow.materSpecName
											.setValue(materSpecName);
								}
							}
						}, {
							name : 'entity/fromId',
							xtype : 'hidden',
							dataIndex : 'id'
						}, {
							name : 'entity/materSpecName',
							ref : '../../materSpecName',
							xtype : 'hidden'
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
			delUrl : 'com.keensen.ump.produce.component.neworder.deleteOrderMaterSpec.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel3, {
						dataIndex : 'materSpecName2',
						header : '订单元件型号'
					}, {
						dataIndex : 'materSpecName',
						header : '生产元件型号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.order.queryOrderMaterSpecByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'materSpecName'
						}, {
							name : 'materSpecName2'
						}, {
							name : 'materSpecId'
						}]
			})
		})

		this.queryPanel3 = this.queryPanel3 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/materSpecName2',
								anchor : '85%',
								fieldLabel : '订单元件型号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								anchor : '85%',
								fieldLabel : '生产元件型号'
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
							title : '订单生产型号查询',
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
							items : [this.queryPanel3, this.listPanel3]

						});
	}

	this.initAddOrderMaterSpecWindow = function() {
		var _this = this;
		this.addOrderMaterSpecWindow = this.addOrderMaterSpecWindow
				|| new Ext.fn.FormWindow({
					title : '新增订单生产型号',
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
						saveUrl : 'com.keensen.ump.produce.component.neworder.insertOrderMaterSpec.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName2',
									fieldLabel : '订单下达型号 ',
									ref : '../../orderNo',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'prodspeccombobox',
									hiddenName : 'entity/materSpecId',
									ref : '../../materSpecId',
									allowBlank : false,
									anchor : '100%',
									colspan : 2,
									fieldLabel : '生产元件型号 ',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}]
					}]
				});
	}

	this.initUpdateTemplateNameWindow = function() {
		var _this = this;
		this.updateTemplateNameWindow = this.updateTemplateNameWindow
				|| new Ext.fn.FormWindow({
					title : '修改唛头图纸编号',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {
							_this.updateTemplateNameWindow.items.items[0].form
									.reset();
							_this.updateTemplateNameWindow.hide();
							_this.listPanel.refresh();
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandYxOrder.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.saveEntity.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'combobox',
									dataIndex : 'templateName',
									typeAhead : true,
									typeAheadDelay : 100,
									triggerAction : "all",
									lazyRender : true,
									forceSelection : true,
									mode : 'local',
									fieldLabel : '唛头图纸编号',
									ref : '../../templateName',
									hiddenName : 'entity/templateName',
									// allowBlank : false,
									anchor : '95%',
									colspan : 2,
									emptyText : '--请选择--',
									editable : true,
									store : this.templateNameStore,
									displayField : "templateName",
									valueField : "templateName",
									queryDelay : 200,// 查询延时，毫秒,
									listeners : {
										'focus' : {
											fn : function(e) {
												e.expand();
												this.doQuery(this.allQuery,
														true);
											},
											buffer : 200
										},
										"expand" : function(A) {
											// this.reset()
										},
										'beforequery' : function(e) {
											var combo = _this.updateTemplateNameWindow.templateName, size = 15, idx = 1;

											if (e.query === ''
													|| e.query == null) {// 当输入框删除内容后，清除过滤器，
												// 显示原本store数据,使其能够再次检索
												combo.store.clearFilter();
												combo.expand();

											} else {
												if (!e.forceAll) {

													combo.store.clearFilter();// 使每次输入都能进行检索，不用担心输入过慢
													var input = e.query;
													// 检索的正则
													var regExp = new RegExp(".*"
															+ input + ".*");
													// 执行检索
													combo.store
															.filterBy(
																	function(
																			record,
																			id) {
																		if (idx > size) {
																			return false;
																		}
																		var text = record
																				.get(combo.displayField);
																		var flag = regExp
																				.test(text);
																		if (flag) {
																			idx++;
																		}
																		return flag;
																	});
													combo.expand();
													return false;
												}
											}
										}
									}

								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
								}]
					}]
				});
	}

	this.initUpdatematerialWindow2 = function() {
		var _this = this;
		this.updatematerialWindow2 = this.updatematerialWindow2
				|| new Ext.fn.FormWindow({
					title : '修改订单下达型号',
					height : 240,
					width : 300,
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
								_this.updatematerialWindow2.items.items[0].form
										.reset();
								_this.updatematerialWindow2.hide();
								_this.listPanel.refresh();
							}
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.neworder.expandYxOrder.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.saveEntity4.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/materSpecName2',
									dataIndex : 'materSpecName2',
									ref : '../../materSpecName2',
									allowBlank : false,
									anchor : '100%',
									colspan : 2,
									fieldLabel : '订单下达型号 '
								}, {
									name : 'entity/id',
									xtype : 'hidden',
									dataIndex : 'id'
								}]
					}]
				});
	}

	this.initAddOrderWindow2 = function() {
		var _this = this;
		this.addOrderWindow2 = this.addOrderWindow2 || new Ext.fn.FormWindow({
			title : '新增订单',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					_this.addOrderWindow2.items.items[0].form.reset();
					_this.addOrderWindow2.hide();
					_this.listPanel.refresh();

				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.neworder.saveEntity.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							fieldLabel : '订单编号 ',
							ref : '../../orderNo',
							allowBlank : false,
							anchor : '80%',
							colspan : 2

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/materSpecId',
							ref : '../../materSpecId',
							allowBlank : false,
							anchor : '80%',
							colspan : 2,
							fieldLabel : '对应生产规格',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									var materSpecName = _this.addOrderWindow2.materSpecId
											.getRawValue();
									_this.addOrderWindow2.materSpecName
											.setValue(materSpecName);
									_this.addOrderWindow2.materSpecName2
											.setValue(materSpecName);
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/orderAmount',
							dataIndex : 'orderAmount',
							fieldLabel : '订单数量 ',
							ref : '../../orderAmount',
							allowBlank : false,
							anchor : '80%',
							colspan : 2

						}, {
							name : 'entity/materSpecName2',
							ref : '../../materSpecName2',
							xtype : 'hidden'
						}, {
							name : 'entity/materSpecName',
							ref : '../../materSpecName',
							xtype : 'hidden'
						}]
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
					fieldLabel : '销售订单下达型号',
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
					fieldLabel : '销售订单类型',
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
					xtype : 'combobox',
					forceSelection : true,
					readOnly : true,
					mode : 'local',
					fieldLabel : '产品类型',
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
					xtype : 'displayfield',
					height : 5,
					colspan : 24
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

				}, {
					xtype : 'textfield',
					readOnly : true,
					dataIndex : 'ddxj',
					fieldLabel : '销售订单星级',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
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
					fieldLabel : '发库存干膜数量(支)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6
				}, {
					xtype : 'numberfield',
					dataIndex : 'wetAmount',
					ref : '../../wetAmount',
					readOnly : true,
					fieldLabel : '发库存湿膜数量(支)',
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
					fieldLabel : '发库存数量(支)',
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
					fieldLabel : '需生产或入库数量(支)',
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
					fieldLabel : '生产周期(天)',
					// readOnly : true,
					anchor : '100%',
					colspan : 6,
					hideTrigger : false,
					scope : this
				}, {
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">性能要求<br>测试条件</p>',
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
					fieldLabel : '浓网厚度（Mil）'// ,
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
				}/*
					 * , { xtype : 'combobox', forceSelection : true, hidden :
					 * true, // allowBlank : false, mode : 'local', fieldLabel :
					 * '水流箭头', ref : '../../waterArrow', readOnly : true,
					 * dataIndex : 'waterArrow', anchor : '100%', colspan : 6,
					 * emptyText : '', editable : false, store : this.ynStore,
					 * displayField : "name", valueField : "code" }
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
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">密封圈</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					readOnly : true,
					dataIndex : 'sealPosition',
					allowBlank : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '密封圈位置'
				}, {
					readOnly : true,
					dataIndex : 'sealAmount',
					allowBlank : true,
					anchor : '100%',
					colspan : 6,
					xtype : 'textfield',
					fieldLabel : '密封圈数量'
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
					xtype : 'displayfield',
					fieldLabel : '<p style="color:red;font-size:16px;">拍照</p>',
					labelSeparator : '',// 去掉冒号
					colspan : 24
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '需要拍照',
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
				}, {
					xtype : 'combobox',
					forceSelection : true,
					// allowBlank : false,
					mode : 'local',
					fieldLabel : '每款型号',
					ref : '../../ifanyone',
					readOnly : true,
					dataIndex : 'ifanyone',
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
					xtype : 'dictcheckboxgroup',
					columns : 6,
					ref : '../../photoSingle',
					dataIndex : 'photoSingle',
					readOnly : true,
					fieldLabel : '单支拍照要求',
					anchor : '100%',
					colspan : 24,
					dictData : KS_YXORDER_PHOTO_SINGLE
				}, {
					xtype : 'displayfield',
					height : 5,
					colspan : 24
				}, {
					xtype : 'dictcheckboxgroup',
					columns : 6,
					ref : '../../photoAll',
					dataIndex : 'photoAll',
					readOnly : true,
					fieldLabel : '整托拍照要求',
					anchor : '100%',
					colspan : 24,
					dictData : KS_YXORDER_PHOTO_ALL
				}, {
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
				}, {
					name : 'entity/productRemark',
					dataIndex : 'productRemark',
					readOnly : true,
					anchor : '100%',
					colspan : 12,
					xtype : 'textfield',
					fieldLabel : '产品备注'
				}]
			}]
		});

		this.orderViewWindow.buttons[0].hide();
	}
}