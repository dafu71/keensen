com.keensen.ump.base.AppearancestandMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();

		this.initPackageAWindow();
		this.initPackageBWindow();
		this.initPackageCWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'appearancestandmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['Y', '在用'], ['N', '停用'], ['W', '待审核']]
				})

		this.specTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['家用膜元件', '家用膜元件'], ['工业膜元件', '工业膜元件'],
							['商用膜元件', '商用膜元件']]
				})

		this.packageAStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.appearancestd.queryPackageA.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {},
					fields : [{
								name : 'code'
							}]
				})

		this.packageBStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.appearancestd.queryPackageB.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {},
					fields : [{
								name : 'code'
							}]
				})

		this.packageCStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.appearancestd.queryPackageC.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {},
					fields : [{
								name : 'code'
							}]
				})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 90,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/jmSpecName2',
								fieldLabel : '卷膜型号%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '膜元件类型',
								ref : '../specType',
								hiddenName : 'condition/specType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.specTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.specType.reset()
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
				forceFit : false
			},

			enableColumnMove : false,
			listeners : {
				'headerdblclick' : function(o, columnIndex, e) {
					var findElement = function(arr, target) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i] === target) {
								return i; // 返回索引
							}
						}
						return -1; // 未找到返回-1
					}
					var cm = o.getColumnModel(); // 获取列模型
					var title = cm.getColumnHeader(columnIndex); // 获取表头标题
					var length = cm.getColumnCount();

					if (title == 'A类标准包') {
						var arr = ['膜元件包装袋受控图纸编号', '膜元件包装箱受控图纸编号', '装箱标准',
								'膜元件端盖类型', '膜元件包装箱打托要求'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}
					if (title == 'B类标准包') {
						var arr = ['膜元件密封圈位置和数量', '膜元件包装端盖要求', '膜元件包装袋封口',
								'膜元件包装箱封口', 'QC标识', '整托货物警示标识'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}

					if (title == 'C类标准包') {
						var arr = ['膜体胶带颜色', '白膜进水端中心管长上限(mm)',
								'白膜出水端中心管长下限(mm)', '中心管连接适配器材质'];
						var isHidden = cm.isHidden(columnIndex + 1);
						for (var i = columnIndex; i < length; i++) {
							var title2 = cm.getColumnHeader(i);

							if (findElement(arr, title2) > -1)
								cm.setHidden(i, isHidden ? false : true);
						}
					}

				}

			},
			hsPage : true,

			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '->', {
						xtype : 'displayfield',
						value : '<span style="color:red">双击标题栏标准包编号，可以切换展开/折叠详情</span>&nbsp;&nbsp;&nbsp;&nbsp;'
					}, '-', {
						text : 'A类标准包',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPackageA
					}, '-', {
						text : 'B类标准包',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPackageB
					}, '-', {
						text : 'C类标准包',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onPackageC
					}],

			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'specId',
						header : '物料编号'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}, {
						dataIndex : 'specName',
						header : '卷膜型号'
					}, {
						dataIndex : 'specType',
						header : '膜元件类型'
					}, {
						dataIndex : 'packageA',
						header : 'A类标准包'
					}, {
						dataIndex : 'bagDrawingCode',
						header : '膜元件包装袋受控图纸编号'
					}, {
						dataIndex : 'boxDrawingCode',
						header : '膜元件包装箱受控图纸编号'
					}, {
						dataIndex : 'packingNum',
						header : '装箱标准'
					}, {
						dataIndex : 'lid',
						header : '膜元件端盖类型'
					}, {
						dataIndex : 'pallet',
						header : '膜元件包装箱打托要求'
					}, {
						dataIndex : 'packageB',
						header : 'B类标准包'
					}, {
						dataIndex : 'sealAmount',
						header : '膜元件密封圈位置和数量'
					}, {
						dataIndex : 'packingLid',
						header : '膜元件包装端盖要求'
					}, {
						dataIndex : 'bagSeal',
						header : '膜元件包装袋封口'
					}, {
						dataIndex : 'boxSeal',
						header : '膜元件包装箱封口'
					}, {
						dataIndex : 'qcTxt',
						header : 'QC标识'
					}, {
						dataIndex : 'packingTxt',
						header : '整托货物警示标识'
					}, {
						dataIndex : 'packageC',
						header : 'C类标准包'
					}, {
						dataIndex : 'tape',
						header : '膜体胶带颜色'
					}, {
						dataIndex : 'pipeLink',
						header : '中心管连接适配器材质'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.appearancestd.queryAppearanceStandByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'id'
						}, {
							name : 'specId'
						}, {
							name : 'specName'
						}, {
							name : 'specType'
						}, {
							name : 'bagDrawingCode'
						}, {
							name : 'boxDrawingCode'
						}, {
							name : 'packingNum'
						}, {
							name : 'lid'
						}, {
							name : 'pallet'
						}, {
							name : 'sealAmount'
						}, {
							name : 'packingLid'
						}, {
							name : 'bagSeal'
						}, {
							name : 'boxSeal'
						}, {
							name : 'qcTxt'
						}, {
							name : 'packingTxt'
						}, {
							name : 'tape'
						}, {
							name : 'pipeLink'
						}, {
							name : 'packageA'
						}, {
							name : 'packageB'
						}, {
							name : 'packageC'
						}, {
							name : 'state'
						}, {
							name : 'stateName'
						}

				]
			})
		})
	}

	this.initPackageAWindow = function() {
		var _this = this;

		var selModel4PackageA = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4PackageA = this.listPanel4PackageA
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					selModel : selModel4PackageA,
					clicksToEdit : 1,
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddPackageA
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEditPackageA
							}],
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4PackageA, {
								dataIndex : 'code',
								header : 'A类标准包编号'
							}, {
								dataIndex : 'bagDrawingCode',
								header : '膜元件包装袋受控图纸编号'
							}, {
								dataIndex : 'boxDrawingCode',
								header : '膜元件包装箱受控图纸编号'
							}, {
								dataIndex : 'packingNum',
								header : '装箱标准'
							}, {
								dataIndex : 'lid',
								header : '膜元件端盖类型'
							}, {
								dataIndex : 'pallet',
								header : '膜元件包装箱打托要求'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.appearancestd.queryPackageA.biz.ext',
						root : 'data',
						autoLoad : true,
						baseParams : {

					}	,
						fields : [{
									name : 'bagDrawingCode'
								}, {
									name : 'boxDrawingCode'
								}, {
									name : 'packingNum'
								}, {
									name : 'lid'
								}, {
									name : 'pallet'
								}, {
									name : 'code'
								}, {
									name : 'id'
								}]
					})
				})

		this.queryPanel4PackageA = this.queryPanel4PackageA
				|| new Ext.fn.QueryPanel({
							height : 70,
							columns : 4,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										fieldLabel : 'A类标准包编号',
										ref : '../code',
										name : 'condition/code',
										anchor : '100%',
										colspan : 1
									}]
						})

		this.queryPanel4PackageA.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.packageAWindow.hide();
					}

				});

		this.packageAWindow = this.packageAWindow || new Ext.Window({
					title : 'A类标准包',
					// 自定义属性
					opt : '',
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
					items : [this.queryPanel4PackageA, this.listPanel4PackageA]

				})

		this.inputWindow4PackageA = this.inputWindow4PackageA
				|| new Ext.fn.FormWindow({
					title : '新增',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						pgrid : _this.listPanel4PackageA,
						columns : 1,
						saveUrl : 'com.keensen.ump.base.appearancestd.savePackageA.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../code',
									name : 'entity/code',
									allowBlank : false,
									fieldLabel : 'A类标准包编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../bagDrawingCode',
									name : 'entity/bagDrawingCode',
									allowBlank : true,
									fieldLabel : '膜元件包装袋<br>受控图纸编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../boxDrawingCode',
									name : 'entity/boxDrawingCode',
									allowBlank : true,
									fieldLabel : '膜元件包装箱<br>受控图纸编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../packingNum',
									name : 'entity/packingNum',
									allowBlank : true,
									fieldLabel : '装箱标准',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../lid',
									name : 'entity/lid',
									allowBlank : true,
									fieldLabel : '膜元件端盖类型',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../pallet',
									name : 'entity/pallet',
									allowBlank : true,
									fieldLabel : '膜元件包装箱<br>打托要求',
									anchor : '95%',
									colspan : 1
								}]
					}]
				});

		this.editWindow4PackageA = this.editWindow4PackageA
				|| new Ext.fn.FormWindow({
					title : '修改',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : _this.listPanel4PackageA,
						successFn : function(i, r) {
							_this.listPanel4PackageA.store.load();
							_this.listPanel.store.load();
							_this.editWindow4PackageA.hide();

						},
						columns : 1,
						loadUrl : 'com.keensen.ump.base.appearancestd.expandPackageA.biz.ext',
						saveUrl : 'com.keensen.ump.base.appearancestd.savePackageA.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../code',
									name : 'entity/code',
									dataIndex : 'code',
									allowBlank : false,
									fieldLabel : 'A类标准包编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../bagDrawingCode',
									name : 'entity/bagDrawingCode',
									dataIndex : 'bagDrawingCode',
									allowBlank : true,
									fieldLabel : '膜元件包装袋<br>受控图纸编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../boxDrawingCode',
									name : 'entity/boxDrawingCode',
									dataIndex : 'boxDrawingCode',
									allowBlank : true,
									fieldLabel : '膜元件包装箱<br>受控图纸编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../packingNum',
									name : 'entity/packingNum',
									dataIndex : 'packingNum',
									allowBlank : true,
									fieldLabel : '装箱标准',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../lid',
									name : 'entity/lid',
									dataIndex : 'lid',
									allowBlank : true,
									fieldLabel : '膜元件端盖类型',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../pallet',
									name : 'entity/pallet',
									dataIndex : 'pallet',
									allowBlank : true,
									fieldLabel : '膜元件包装箱<br>打托要求',
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

	this.initPackageBWindow = function() {
		var _this = this;

		var selModel4PackageB = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4PackageB = this.listPanel4PackageB
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					selModel : selModel4PackageB,
					clicksToEdit : 1,
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddPackageB
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEditPackageB
							}],
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4PackageB, {
								dataIndex : 'code',
								header : 'B类标准包编号'
							}, {
								dataIndex : 'sealAmount',
								header : '膜元件密封圈位置和数量'
							}, {
								dataIndex : 'packingLid',
								header : '膜元件包装端盖要求'
							}, {
								dataIndex : 'bagSeal',
								header : '膜元件包装袋封口'
							}, {
								dataIndex : 'boxSeal',
								header : '膜元件包装箱封口'
							}, {
								dataIndex : 'qcTxt',
								header : 'QC标识'
							}, {
								dataIndex : 'packingTxt',
								header : '整托货物警示标识'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.appearancestd.queryPackageB.biz.ext',
						root : 'data',
						autoLoad : true,
						baseParams : {

					}	,
						fields : [{
									name : 'sealAmount'
								}, {
									name : 'packingLid'
								}, {
									name : 'bagSeal'
								}, {
									name : 'boxSeal'
								}, {
									name : 'qcTxt'
								}, {
									name : 'packingTxt'
								}, {
									name : 'code'
								}, {
									name : 'id'
								}]
					})
				})

		this.queryPanel4PackageB = this.queryPanel4PackageB
				|| new Ext.fn.QueryPanel({
							height : 70,
							columns : 4,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										fieldLabel : 'B类标准包编号',
										ref : '../code',
										name : 'condition/code',
										anchor : '100%',
										colspan : 1
									}]
						})

		this.queryPanel4PackageB.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.packageBWindow.hide();
					}

				});

		this.packageBWindow = this.packageBWindow || new Ext.Window({
					title : 'B类标准包',
					// 自定义属性
					opt : '',
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
					items : [this.queryPanel4PackageB, this.listPanel4PackageB]

				})

		this.inputWindow4PackageB = this.inputWindow4PackageB
				|| new Ext.fn.FormWindow({
					title : '新增',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						pgrid : _this.listPanel4PackageB,
						columns : 1,
						saveUrl : 'com.keensen.ump.base.appearancestd.savePackageB.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../code',
									name : 'entity/code',
									allowBlank : false,
									fieldLabel : 'B类标准包编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../sealAmount',
									name : 'entity/sealAmount',
									allowBlank : true,
									fieldLabel : '膜元件密封圈<br>位置和数量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../packingLid',
									name : 'entity/packingLid',
									allowBlank : true,
									fieldLabel : '膜元件包装<br>端盖要求',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../bagSeal',
									name : 'entity/bagSeal',
									allowBlank : true,
									fieldLabel : '膜元件包装袋<br>封口',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../boxSeal',
									name : 'entity/boxSeal',
									allowBlank : true,
									fieldLabel : '膜元件包装箱<br>封口',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../qcTxt',
									name : 'entity/qcTxt',
									allowBlank : true,
									fieldLabel : 'QC标识',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../packingTxt',
									name : 'entity/packingTxt',
									allowBlank : true,
									fieldLabel : '整托货物<br>警示标识',
									anchor : '95%',
									colspan : 1
								}]
					}]
				});

		this.editWindow4PackageB = this.editWindow4PackageB
				|| new Ext.fn.FormWindow({
					title : '修改',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : _this.listPanel4PackageB,
						successFn : function(i, r) {
							_this.listPanel4PackageB.store.load();
							_this.listPanel.store.load();
							_this.editWindow4PackageB.hide();

						},
						columns : 1,
						loadUrl : 'com.keensen.ump.base.appearancestd.expandPackageB.biz.ext',
						saveUrl : 'com.keensen.ump.base.appearancestd.savePackageB.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../code',
									name : 'entity/code',
									dataIndex : 'code',
									allowBlank : false,
									fieldLabel : 'B类标准包编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../sealAmount',
									name : 'entity/sealAmount',
									dataIndex : 'sealAmount',
									allowBlank : true,
									fieldLabel : '膜元件密封圈<br>位置和数量',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../packingLid',
									name : 'entity/packingLid',
									dataIndex : 'packingLid',
									allowBlank : true,
									fieldLabel : '膜元件包装<br>端盖要求',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../bagSeal',
									name : 'entity/bagSeal',
									dataIndex : 'bagSeal',
									allowBlank : true,
									fieldLabel : '膜元件包装袋<br>封口',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../boxSeal',
									name : 'entity/boxSeal',
									dataIndex : 'boxSeal',
									allowBlank : true,
									fieldLabel : '膜元件包装箱<br>封口',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../qcTxt',
									name : 'entity/qcTxt',
									dataIndex : 'qcTxt',
									allowBlank : true,
									fieldLabel : 'QC标识',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../packingTxt',
									name : 'entity/packingTxt',
									dataIndex : 'packingTxt',
									allowBlank : true,
									fieldLabel : '整托货物<br>警示标识',
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

	this.initPackageCWindow = function() {
		var _this = this;

		var selModel4PackageC = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4PackageC = this.listPanel4PackageC
				|| new Ext.fn.ListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					selModel : selModel4PackageC,
					clicksToEdit : 1,
					tbar : [{
								text : '新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onAddPackageC
							}, '-', {
								text : '修改',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onEditPackageC
							}],
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4PackageC, {
								dataIndex : 'code',
								header : 'C类标准包编号'
							}, {
								dataIndex : 'tape',
								header : '膜体胶带颜色'
							}, {
								dataIndex : 'pipeLink',
								header : '中心管连接适配器材质'
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.appearancestd.queryPackageC.biz.ext',
						root : 'data',
						autoLoad : true,
						baseParams : {

					}	,
						fields : [{
									name : 'tape'
								}, {
									name : 'pipeLink'
								}, {
									name : 'code'
								}, {
									name : 'id'
								}]
					})
				})

		this.queryPanel4PackageC = this.queryPanel4PackageC
				|| new Ext.fn.QueryPanel({
							height : 70,
							columns : 4,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										fieldLabel : 'C类标准包编号',
										ref : '../code',
										name : 'condition/code',
										anchor : '100%',
										colspan : 1
									}]
						})

		this.queryPanel4PackageC.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.packageCWindow.hide();
					}

				});

		this.packageCWindow = this.packageCWindow || new Ext.Window({
					title : 'C类标准包',
					// 自定义属性
					opt : '',
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
					items : [this.queryPanel4PackageC, this.listPanel4PackageC]

				})

		this.inputWindow4PackageC = this.inputWindow4PackageC
				|| new Ext.fn.FormWindow({
					title : '新增',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						pgrid : _this.listPanel4PackageC,
						columns : 1,
						saveUrl : 'com.keensen.ump.base.appearancestd.savePackageC.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../code',
									name : 'entity/code',
									allowBlank : false,
									fieldLabel : 'C类标准包编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../tape',
									name : 'entity/tape',
									allowBlank : true,
									fieldLabel : '膜体胶带颜色',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../pipeLink',
									name : 'entity/pipeLink',
									allowBlank : true,
									fieldLabel : '中心管连接<br>适配器材质',
									anchor : '95%',
									colspan : 1
								}]
					}]
				});

		this.editWindow4PackageC = this.editWindow4PackageC
				|| new Ext.fn.FormWindow({
					title : '修改',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : _this.listPanel4PackageC,
						successFn : function(i, r) {
							_this.listPanel4PackageC.store.load();
							_this.listPanel.store.load();
							_this.editWindow4PackageC.hide();

						},
						columns : 1,
						loadUrl : 'com.keensen.ump.base.appearancestd.expandPackageC.biz.ext',
						saveUrl : 'com.keensen.ump.base.appearancestd.savePackageC.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../code',
									name : 'entity/code',
									dataIndex : 'code',
									allowBlank : false,
									fieldLabel : 'C类标准包编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../tape',
									name : 'entity/tape',
									dataIndex : 'tape',
									allowBlank : true,
									fieldLabel : '膜体胶带颜色',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../pipeLink',
									name : 'entity/pipeLink',
									dataIndex : 'pipeLink',
									allowBlank : true,
									fieldLabel : '中心管连接<br>适配器材质',
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

	this.initInputWindow = function() {

		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : _this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.base.appearancestd.saveAppearanceStand.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/specId',
							colspan : 1,
							anchor : '95%',
							allowBlank : false,
							fieldLabel : '卷膜型号 ',
							listeners : {
								"expand" : function(A) {
									this.reset()
								},
								"change" : function(combo, record, index) {
									var specName = combo.getRawValue();
									_this.inputWindow.specName
											.setValue(specName);
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combo',
							fieldLabel : '状态',
							allowBlank : false,
							anchor : '95%',
							mode : 'local',
							emptyText : '--请选择--',
							editable : false,
							store : _this.stateStore,
							displayField : "name",
							valueField : "code",
							hiddenName : 'entity/state',
							value : 'Y',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '膜元件类型',
							ref : '../../specType',
							hiddenName : 'entity/specType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : _this.specTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.specType.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : 'A类标准包',
							ref : '../../packageA',
							hiddenName : 'entity/packageA',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.packageAStore,
							displayField : "code",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.packageA.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : 'B类标准包',
							ref : '../../packageB',
							hiddenName : 'entity/packageB',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.packageBStore,
							displayField : "code",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.packageB.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : 'C类标准包',
							ref : '../../packageC',
							hiddenName : 'entity/packageC',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.packageCStore,
							displayField : "code",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.packageC.reset()
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/specName',
							ref : '../../specName'
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : _this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.base.appearancestd.expandAppearanceStand.biz.ext',
				saveUrl : 'com.keensen.ump.base.appearancestd.saveAppearanceStand.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/specId',
							dataIndex : 'specId',
							colspan : 1,
							anchor : '95%',
							allowBlank : false,
							fieldLabel : '卷膜型号 ',
							listeners : {
								"expand" : function(A) {
									this.reset()
								},
								"change" : function(combo, record, index) {
									var specName = combo.getRawValue();
									_this.editWindow.specName
											.setValue(specName);
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combo',
							fieldLabel : '状态',
							allowBlank : false,
							anchor : '95%',
							mode : 'local',
							emptyText : '--请选择--',
							editable : false,
							store : _this.stateStore,
							displayField : "name",
							valueField : "code",
							hiddenName : 'entity/state',
							dataIndex : 'state',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '膜元件类型',
							ref : '../../specType',
							hiddenName : 'entity/specType',
							dataIndex : 'specType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : _this.specTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.specType.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : 'A类标准包',
							ref : '../../packageA',
							hiddenName : 'entity/packageA',
							dataIndex : 'packageA',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.packageAStore,
							displayField : "code",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.packageA.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : 'B类标准包',
							ref : '../../packageB',
							hiddenName : 'entity/packageB',
							dataIndex : 'packageB',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.packageBStore,
							displayField : "code",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.packageB.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : 'C类标准包',
							ref : '../../packageC',
							hiddenName : 'entity/packageC',
							dataIndex : 'packageC',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.packageCStore,
							displayField : "code",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.packageC.reset()
								}
							}
						}, {
							xtype : 'hidden',
							name : 'entity/specName',
							dataIndex : 'specName',
							ref : '../../specName'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}
}