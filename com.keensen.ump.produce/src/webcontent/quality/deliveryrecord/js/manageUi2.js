com.keensen.ump.produce.quality.deliveryrecordMgr = function() {
	this.initPanel = function() {

		this.resultStore = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [["合格", "合格"], ["不合格", "不合格"]]

				});

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		this.initReviewWindow();

		this.buildExcelUploadWin();
		this.buildExcelUploadWin2();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'deliveryrecordmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
			height : 80,
			columns : 4,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			// title : '【元件出货质检报告查询】',
			fields : [{
				xtype : "dateregion",
				colspan : 1,
				anchor : '95%',
				nameArray : ['condition/reportDtStart', 'condition/reportDtEnd'],
				fieldLabel : "报告日期",
				format : "Y-m-d"
			}, {
				xtype : 'textfield',
				name : 'condition/orderNo',
				anchor : '95%',
				fieldLabel : '订单号'
			}, {
				xtype : 'textfield',
				name : 'condition/labelingModel',
				anchor : '95%',
				fieldLabel : '贴标型号'
			}, {
				xtype : 'prodspeccombobox',
				hiddenName : 'condition/materSpecId',
				anchor : '95%',
				fieldLabel : '卷膜型号 ',
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
		});

		this.queryPanel.addButton({
					text : "水检数据模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "气检数据模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown2
				});

		this.queryPanel.addButton({
					text : "元件序列号清单模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown3
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【元件出货质检报告列表】',
			viewConfig : {
				forceFit : false
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
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onReview
					}, '-', {
						xtype : 'splitbutton',
						hidden : nqLimit != 1 && pgLimit != 1,
						text : '导入检测清单',
						iconCls : 'icon-application_form_magnify',
						arrowAlign : 'bottom',
						menu : [{
									text : '水检数据',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : function() {
										this.onImport(1);

									}
								}, {
									text : '气检数据',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : function() {
										this.onImport(2);

									}
								}, {
									text : '元件序列号',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : function() {
										this.onImport(3);

									}
								}]
					}, '-', {

						text : '中文报告打印',
						iconCls : 'icon-application_form_magnify',
						hidden : nqLimit != 1 && pgLimit != 1,
						scope : this,
						handler : this.onPrint3
					}, '-', {

						text : '英文报告打印',
						iconCls : 'icon-application_form_magnify',
						hidden : nqLimit != 1 && pgLimit != 1,
						scope : this,
						handler : this.onPrint3e
					}, '-', {

						text : '中文报告查看',
						iconCls : 'icon-application_form_magnify',
						hidden : nqLimit != 1 && pgLimit != 1,
						scope : this,
						handler : this.onView3
					}, '-', {

						text : '英文报告查看',
						iconCls : 'icon-application_form_magnify',
						hidden : nqLimit != 1 && pgLimit != 1,
						scope : this,
						handler : this.onView3e
					}, '->', {
						xtype : 'splitbutton',
						text : '合格证',
						hidden : true,
						scope : this,
						arrowAlign : 'bottom',
						iconCls : 'icon-application_form_magnify',
						menu : [{
									text : '打印',
									scope : this,
									iconCls : 'icon-printer',
									handler : this.onCertificatePrint
								}, {
									text : '查看',
									scope : this,
									iconCls : 'icon-application_form_magnify',
									handler : this.onCertificateView
								}]
					}, '-', {
						xtype : 'splitbutton',
						hidden : true,
						text : '合格证明细模板下载',
						iconCls : 'icon-application_form_magnify',
						arrowAlign : 'bottom',
						menu : [{
									text : '通用模板',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : this.onTemplateCommon
								}, {
									text : 'ZH模板',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : this.onTemplateZh
								}, {
									text : 'TOYOBO模板',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : this.onTemplateToyobo
								}]
					}, '-', {
						xtype : 'splitbutton',
						hidden : true,
						text : '合格证明细导入',
						iconCls : 'icon-application_form_magnify',
						arrowAlign : 'bottom',
						menu : [{
									text : '通用模板',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : this.onImportCommon
								}, {
									text : 'ZH模板',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : this.onImportZh
								}, {
									text : 'TOYOBO模板',
									scope : this,
									iconCls : 'icon-application_excel',
									handler : this.onImportToyobo
								}]
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.deliveryrecord.delete.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						sortable : true,
						header : '报告编号'
					}, {
						dataIndex : 'productName',
						sortable : true,
						header : '品名'
					}, {
						dataIndex : 'labelingModel',
						sortable : true,
						header : '贴标型号'
					}, {
						dataIndex : 'materSpecName',
						sortable : true,
						header : '卷膜型号'
					}, {
						dataIndex : 'client',
						sortable : true,
						header : '客户'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号'
					}, {
						dataIndex : 'checkDt',
						sortable : true,
						header : '检验日期'
					}, {
						dataIndex : 'orderAmount',
						sortable : true,
						header : '订单数量'
					}/*
						 * , { dataIndex : 'checkAmount', sortable : true,
						 * header : '抽检数量' }
						 */, {
						dataIndex : 'result',
						sortable : true,
						header : '结论'
					}, {
						dataIndex : 'inspector',
						sortable : true,
						header : '检验员'
					}, {
						dataIndex : 'reviewer',
						sortable : true,
						header : '审核人'
					}, {
						dataIndex : 'reportDt',
						sortable : true,
						header : '报告日期'
					}

			],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.deliveryrecord.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'client'
						}, {
							name : 'appearanceNum'
						}, {
							name : 'waterCheckNum'
						}, {
							name : 'desalinationCheckNum'
						}, {
							name : 'waterCheck2Num'
						}, {
							name : 'desalinationCheck2Num'
						}, {
							name : 'airStdStr'
						}, {
							name : 'airCheckNum'
						}, {
							name : 'airResult'
						}, {
							name : 'airCheck'
						}, {
							name : 'id'
						}, {
							name : 'code'
						}, {
							name : 'productName'
						}, {
							name : 'labelingModel'
						}, {
							name : 'batchNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'checkDt'
						}, {
							name : 'orderAmount'
						}, {
							name : 'checkAmount'
						}, {
							name : 'waterCheck'
						}, {
							name : 'desalinationCheck'
						}, {
							name : 'appearanceCheck'
						}, {
							name : 'waterResult'
						}, {
							name : 'desalinationResult'
						}, {
							name : 'appearanceResult'
						}, {
							name : 'waterCheck2'
						}, {
							name : 'desalinationCheck2'
						}, {
							name : 'waterResult2'
						}, {
							name : 'desalinationResult2'
						}, {
							name : 'result'
						}, {
							name : 'inspector'
						}, {
							name : 'reviewer'
						}, {
							name : 'reportDt'
						}, {
							name : 'materSpecId'
						}, {
							name : 'materSpecName'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;

		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增元件出货质检报告',
			height : 700,
			width : 1024,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 12,
				saveUrl : 'com.keensen.ump.produce.quality.deliveryrecord.save.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 12
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 4,
							name : 'entity/productName',
							hiddenName : 'entity/productName',
							dataIndex : 'productName',
							allowBlank : false,
							fieldLabel : '品名',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['纳滤膜元件', '纳滤膜元件'],
												['RO膜元件', 'RO膜元件'],
												['反渗透膜元件', '反渗透膜元件']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
							listeners : {
								select : function(combo, record) {
									var arr = ["entity/solution2",
											"entity/temperature2",
											"entity/ph2", "entity/recovery2",
											"entity/press2", "entity/water2",
											"entity/waterCheck2",
											"entity/waterResult2",
											"entity/desalination2",
											"entity/desalinationCheck2",
											"entity/desalinationResult2",
											"entity/desalinationCheck2Num",
											"entity/waterCheck2Num",
											"entity/pressWork2",
											"entity/rangePh2",
											"entity/rangeRunPh2",
											"entity/area2"];
									if (record.get('mykey') != '纳滤膜元件') {
										for (var i = 0; i < arr.length; i++) {
											_this.inputWindow.form
													.findField(arr[i])
													.setDisabled(true);
											_this.inputWindow.form
													.findField(arr[i])
													.setVisible(false);
										}

									} else {
										for (var i = 0; i < arr.length; i++) {
											_this.inputWindow.form
													.findField(arr[i])
													.setDisabled(false);
											_this.inputWindow.form
													.findField(arr[i])
													.setVisible(true);
										}
									}

								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/client',
							// allowBlank : false,
							fieldLabel : '客户',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'client'
						}, {
							xtype : 'textfield',
							name : 'entity/materCode',
							// allowBlank : false,
							fieldLabel : '物料号',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'materCode'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/materSpecId',
							allowBlank : false,
							anchor : '100%',
							colspan : 4,
							fieldLabel : '卷膜型号 ',
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
						}, {
							xtype : 'trigger',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '贴标型号',
							emptyText : "输入贴标型号，单击旁边按钮",
							anchor : '100%',
							colspan : 4,
							dataIndex : 'labelingModel',
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onStand();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'orderNo'
						}, {
							xtype : 'textfield',
							name : 'entity/orderAmount',
							allowBlank : false,
							fieldLabel : '订单数量',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'orderAmount'
						}, {
							xtype : 'datefield',
							allowBlank : false,
							name : 'entity/checkDt',
							format : "Y-m-d",
							fieldLabel : '检验日期',
							anchor : '100%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>测试条件</span>",
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>测试原水",
							anchor : '100%',
							colspan : 4,
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'temperature'
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'ph'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'press'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork',
							readOnly : true,
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'pressWork'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh',
							readOnly : true,
							fieldLabel : 'ph适应范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangePh'
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh',
							readOnly : true,
							fieldLabel : '连续运行时进水PH范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangeRunPh'
						}, {
							xtype : 'textfield',
							name : 'entity/area',
							readOnly : true,
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'area'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/solution2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>测试原水",
							anchor : '95%',
							colspan : 4,
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'temperature2'
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'ph2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'press2'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork2',
							readOnly : true,
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'pressWork2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh2',
							readOnly : true,
							fieldLabel : 'ph适应范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangePh2'
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh2',
							readOnly : true,
							fieldLabel : '连续运行时进水PH范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangeRunPh2'
						}, {
							xtype : 'textfield',
							name : 'entity/area2',
							readOnly : true,
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'area2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检验结论</span>",
							colspan : 12
						}, {
							xtype : 'textarea',
							height : 30,
							name : 'entity/appearance',
							value : '玻璃钢表面光洁平整,无裂纹、凹陷、变形等缺陷',
							readOnly : true,
							fieldLabel : '外观标准',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'appearance'
						}, {
							xtype : 'textfield',
							name : 'entity/appearanceNum',
							// readOnly : true,
							fieldLabel : '外观抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'appearanceNum'
						}, {
							xtype : 'textarea',
							height : 30,
							name : 'entity/appearanceCheck',
							value : '玻璃钢表面光洁平整,无裂纹、凹陷、变形',
							readOnly : true,
							fieldLabel : '外观检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'appearanceCheck'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/appearanceResult',
							hiddenName : 'entity/appearanceResult',
							dataIndex : 'appearanceResult',
							allowBlank : false,
							fieldLabel : '外观判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/water',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>产水量标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheckNum',
							// readOnly : true,
							fieldLabel : '产水抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheckNum'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							value : '详见检测清单',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheck',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "GPD";
									var str = _this.inputWindow.form
											.findField('entity/waterCheck')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.inputWindow.form
												.findField('entity/waterCheck')
												.setValue(str + searchStr);
									}
								}
							}

						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/waterResult',
							hiddenName : 'entity/waterResult',
							dataIndex : 'waterResult',
							allowBlank : false,
							fieldLabel : '产水量判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/water2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>产水标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck2Num',
							// readOnly : true,
							fieldLabel : '产水抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheck2Num'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck2',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							value : '详见检测清单',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheck2',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "GPD";
									var str = _this.inputWindow.form
											.findField('entity/waterCheck2')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.inputWindow.form
												.findField('entity/waterCheck2')
												.setValue(str + searchStr);
									}
								}
							}
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/waterResult2',
							hiddenName : 'entity/waterResult2',
							dataIndex : 'waterResult2',
							allowBlank : false,
							fieldLabel : '产水量判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/desalination',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>脱盐率标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalination'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheckNum',
							// readOnly : true,
							fieldLabel : '脱盐抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheckNum'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck',
							value : '详见检测清单',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheck',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "%";
									var str = _this.inputWindow.form
											.findField('entity/desalinationCheck')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.inputWindow.form
												.findField('entity/desalinationCheck')
												.setValue(str + searchStr);
									}
								}
							}
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/desalinationResult',
							hiddenName : 'entity/desalinationResult',
							dataIndex : 'desalinationResult',
							allowBlank : false,
							fieldLabel : '脱盐率判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/desalination2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>脱盐率标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalination2'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck2Num',
							// readOnly : true,
							fieldLabel : '脱盐抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheck2Num'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck2',
							value : '详见检测清单',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheck2',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "%";
									var str = _this.inputWindow.form
											.findField('entity/desalinationCheck2')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.inputWindow.form
												.findField('entity/desalinationCheck2')
												.setValue(str + searchStr);
									}
								}
							}
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/desalinationResult2',
							hiddenName : 'entity/desalinationResult2',
							dataIndex : 'desalinationResult2',
							allowBlank : false,
							fieldLabel : '脱盐率判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/airStdStr',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>气密性</span>检测标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'airStdStr'
						}, {
							xtype : 'textfield',
							name : 'entity/airCheckNum',
							// readOnly : true,
							fieldLabel : '气密抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'airCheckNum'
						}, {
							xtype : 'textfield',
							name : 'entity/airCheck',
							value : '详见检测清单',
							// allowBlank : false,
							readOnly : false,
							fieldLabel : '气密检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'airCheck'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/airResult',
							hiddenName : 'entity/airResult',
							dataIndex : 'airResult',
							// allowBlank : false,
							fieldLabel : '气密判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改元件出货质检报告',
			height : 700,
			width : 1024,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.quality.deliveryrecord.expand3.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.deliveryrecord.save.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 12
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 4,
							name : 'entity/productName',
							hiddenName : 'entity/productName',
							dataIndex : 'productName',
							allowBlank : false,
							fieldLabel : '品名',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['纳滤膜元件', '纳滤膜元件'],
												['RO膜元件', 'RO膜元件'],
												['反渗透膜元件', '反渗透膜元件']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
							listeners : {
								select : function(combo, record) {
									var arr = ["entity/solution2",
											"entity/temperature2",
											"entity/ph2", "entity/recovery2",
											"entity/press2", "entity/water2",
											"entity/waterCheck2",
											"entity/waterResult2",
											"entity/desalination2",
											"entity/desalinationCheck2",
											"entity/desalinationResult2",
											"entity/desalinationCheck2Num",
											"entity/waterCheck2Num",
											"entity/pressWork2",
											"entity/rangePh2",
											"entity/rangeRunPh2",
											"entity/area2"];
									if (record.get('mykey') != '纳滤膜元件') {
										for (var i = 0; i < arr.length; i++) {
											_this.editWindow.form
													.findField(arr[i])
													.setDisabled(true);
											_this.editWindow.form
													.findField(arr[i])
													.setVisible(false);
										}

									} else {
										for (var i = 0; i < arr.length; i++) {
											_this.editWindow.form
													.findField(arr[i])
													.setDisabled(false);
											_this.editWindow.form
													.findField(arr[i])
													.setVisible(true);
										}
									}

								}
							}
						}, {
							xtype : 'textfield',
							name : 'entity/client',
							// allowBlank : false,
							fieldLabel : '客户',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'client'
						}, {
							xtype : 'textfield',
							name : 'entity/materCode',
							// allowBlank : false,
							fieldLabel : '物料号',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'materCode'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/materSpecId',
							dataIndex : 'materSpecId',
							allowBlank : false,
							anchor : '100%',
							colspan : 4,
							fieldLabel : '卷膜型号 ',
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
						}, {
							xtype : 'trigger',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '贴标型号',
							emptyText : "输入贴标型号，单击旁边按钮",
							anchor : '100%',
							colspan : 4,
							dataIndex : 'labelingModel',
							editable : true,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onStand2();
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'orderNo'
						}, {
							xtype : 'textfield',
							name : 'entity/orderAmount',
							allowBlank : false,
							fieldLabel : '订单数量',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'orderAmount'
						}, {
							xtype : 'datefield',
							allowBlank : false,
							name : 'entity/checkDt',
							dataIndex : 'checkDt',
							format : "Y-m-d",
							fieldLabel : '检验日期',
							anchor : '100%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>测试条件</span>",
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>测试原水",
							anchor : '100%',
							colspan : 4,
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'temperature'
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'ph'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'press'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork',
							readOnly : true,
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'pressWork'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh',
							readOnly : true,
							fieldLabel : 'ph适应范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangePh'
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh',
							readOnly : true,
							fieldLabel : '连续运行时进水PH范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangeRunPh'
						}, {
							xtype : 'textfield',
							name : 'entity/area',
							readOnly : true,
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'area'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/solution2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>测试原水",
							anchor : '95%',
							colspan : 4,
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'temperature2'
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'ph2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 4,
							dataIndex : 'press2'
						}, {
							xtype : 'textfield',
							name : 'entity/pressWork2',
							readOnly : true,
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'pressWork2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/rangePh2',
							readOnly : true,
							fieldLabel : 'ph适应范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangePh2'
						}, {
							xtype : 'textfield',
							name : 'entity/rangeRunPh2',
							readOnly : true,
							fieldLabel : '连续运行时进水PH范围',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'rangeRunPh2'
						}, {
							xtype : 'textfield',
							name : 'entity/area2',
							readOnly : true,
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '100%',
							colspan : 4,
							dataIndex : 'area2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检验结论</span>",
							colspan : 12
						}, {
							xtype : 'textarea',
							height : 30,
							name : 'entity/appearance',
							value : '玻璃钢表面光洁平整,无裂纹、凹陷、变形等缺陷',
							readOnly : true,
							fieldLabel : '外观标准',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'appearance'
						}, {
							xtype : 'textfield',
							name : 'entity/appearanceNum',
							// readOnly : true,
							fieldLabel : '外观抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'appearanceNum'
						}, {
							xtype : 'textarea',
							height : 30,
							name : 'entity/appearanceCheck',
							value : '玻璃钢表面光洁平整,无裂纹、凹陷、变形',
							readOnly : true,
							fieldLabel : '外观检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'appearanceCheck'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/appearanceResult',
							hiddenName : 'entity/appearanceResult',
							dataIndex : 'appearanceResult',
							allowBlank : false,
							fieldLabel : '外观判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/water',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>产水量标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheckNum',
							// readOnly : true,
							fieldLabel : '产水抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheckNum'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							value : '详见检测清单',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheck',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "GPD";
									var str = _this.editWindow.form
											.findField('entity/waterCheck')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.editWindow.form
												.findField('entity/waterCheck')
												.setValue(str + searchStr);
									}
								}
							}

						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/waterResult',
							hiddenName : 'entity/waterResult',
							dataIndex : 'waterResult',
							allowBlank : false,
							fieldLabel : '产水量判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/water2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>产水标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck2Num',
							// readOnly : true,
							fieldLabel : '产水抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheck2Num'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck2',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							value : '详见检测清单',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheck2',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "GPD";
									var str = _this.editWindow.form
											.findField('entity/waterCheck2')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.editWindow.form
												.findField('entity/waterCheck2')
												.setValue(str + searchStr);
									}
								}
							}
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/waterResult2',
							hiddenName : 'entity/waterResult2',
							dataIndex : 'waterResult2',
							allowBlank : false,
							fieldLabel : '产水量判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/desalination',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>脱盐率标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalination'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheckNum',
							// readOnly : true,
							fieldLabel : '脱盐抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheckNum'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck',
							value : '详见检测清单',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheck',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "%";
									var str = _this.editWindow.form
											.findField('entity/desalinationCheck')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.editWindow.form
												.findField('entity/desalinationCheck')
												.setValue(str + searchStr);
									}
								}
							}
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/desalinationResult',
							hiddenName : 'entity/desalinationResult',
							dataIndex : 'desalinationResult',
							allowBlank : false,
							fieldLabel : '脱盐率判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/desalination2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>脱盐率标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalination2'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck2Num',
							// readOnly : true,
							fieldLabel : '脱盐抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheck2Num'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck2',
							value : '详见检测清单',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalinationCheck2',
							listeners : {
								'blur' : function() {
									return;
									var searchStr = "%";
									var str = _this.editWindow.form
											.findField('entity/desalinationCheck2')
											.getValue();
									var index = str.indexOf(searchStr);
									if (index == -1) {
										_this.editWindow.form
												.findField('entity/desalinationCheck2')
												.setValue(str + searchStr);
									}
								}
							}
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/desalinationResult2',
							hiddenName : 'entity/desalinationResult2',
							dataIndex : 'desalinationResult2',
							allowBlank : false,
							fieldLabel : '脱盐率判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							name : 'entity/airStdStr',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>气密性</span>检测标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'airStdStr'
						}, {
							xtype : 'textfield',
							name : 'entity/airCheckNum',
							// readOnly : true,
							fieldLabel : '气密抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'airCheckNum'
						}, {
							xtype : 'textfield',
							name : 'entity/airCheck',
							value : '详见检测清单',
							// allowBlank : false,
							readOnly : false,
							fieldLabel : '气密检验结果',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'airCheck'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							name : 'entity/airResult',
							hiddenName : 'entity/airResult',
							dataIndex : 'airResult',
							// allowBlank : false,
							fieldLabel : '气密判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initReviewWindow = function() {

		this.reviewWindow = this.reviewWindow || new Ext.fn.FormWindow({
			title : '审核元件出货质检报告',
			height : 700,
			width : 1024,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.quality.deliveryrecord.expand3.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.deliveryrecord.saveReview.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 12
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 4,
							name : 'productName',
							hiddenName : 'productName',
							dataIndex : 'productName',
							readOnly : true,
							fieldLabel : '品名',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['纳滤膜元件', '纳滤膜元件'],
												['RO膜元件', 'RO膜元件'],
												['反渗透膜元件', '反渗透膜元件']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '客户',
							anchor : '100%',
							colspan : 4,
							name : 'client',
							dataIndex : 'client'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '物料号',
							anchor : '100%',
							colspan : 4,
							name : 'materCode',
							dataIndex : 'materCode'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'prodspeccombobox',
							readOnly : true,
							dataIndex : 'materSpecId',
							name : 'materSpecId',
							anchor : '100%',
							colspan : 4,
							fieldLabel : '卷膜型号 ',
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
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '贴标型号',
							emptyText : "输入贴标型号，单击旁边按钮",
							anchor : '100%',
							colspan : 4,
							name : 'labelingModel',
							dataIndex : 'labelingModel'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '订单号',
							anchor : '100%',
							colspan : 4,
							name : 'orderNo',
							dataIndex : 'orderNo'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '订单数量',
							anchor : '100%',
							colspan : 4,
							name : 'orderAmount',
							dataIndex : 'orderAmount'
						}, {
							xtype : 'datefield',
							readOnly : true,
							dataIndex : 'checkDt',
							name : 'checkDt',
							format : "Y-m-d",
							fieldLabel : '检验日期',
							anchor : '100%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>测试条件</span>",
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>测试原水",
							anchor : '100%',
							colspan : 4,
							name : 'solution',
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '100%',
							colspan : 4,
							name : 'temperature',
							dataIndex : 'temperature'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '100%',
							colspan : 4,
							name : 'ph',
							dataIndex : 'ph'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '100%',
							colspan : 4,
							name : 'recovery',
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '100%',
							colspan : 4,
							name : 'press',
							dataIndex : 'press'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '100%',
							colspan : 4,
							name : 'pressWork',
							dataIndex : 'pressWork'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : 'ph适应范围',
							anchor : '100%',
							colspan : 4,
							name : 'rangePh',
							dataIndex : 'rangePh'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '连续运行时进水PH范围',
							anchor : '100%',
							colspan : 4,
							name : 'rangeRunPh',
							dataIndex : 'rangeRunPh'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '100%',
							colspan : 4,
							name : 'area',
							dataIndex : 'area'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>测试原水",
							anchor : '95%',
							colspan : 4,
							name : 'solution2',
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 4,
							name : 'temperature2',
							dataIndex : 'temperature2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 4,
							name : 'ph2',
							dataIndex : 'ph2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 4,
							name : 'recovery2',
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 4,
							name : 'press2',
							dataIndex : 'press2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '最高工作压力psi(MPa)',
							anchor : '100%',
							colspan : 4,
							name : 'pressWork2',
							dataIndex : 'pressWork2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : 'ph适应范围',
							anchor : '100%',
							colspan : 4,
							name : 'rangePh2',
							dataIndex : 'rangePh2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '连续运行时进水PH范围',
							anchor : '100%',
							colspan : 4,
							name : 'rangeRunPh2',
							dataIndex : 'rangeRunPh2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '有效膜面积ft2(m2)',
							anchor : '100%',
							colspan : 4,
							name : 'area2',
							dataIndex : 'area2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检验结论</span>",
							colspan : 12
						}, {
							xtype : 'textarea',
							height : 30,
							value : '玻璃钢表面光洁平整,无裂纹、凹陷、变形等缺陷',
							readOnly : true,
							fieldLabel : '外观标准',
							anchor : '100%',
							colspan : 3,
							name : 'appearance',
							dataIndex : 'appearance'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '外观抽检数量',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'appearanceNum'
						}, {
							xtype : 'textarea',
							height : 30,
							readOnly : true,
							fieldLabel : '外观检验结果',
							anchor : '100%',
							colspan : 3,
							name : 'appearanceCheck',
							dataIndex : 'appearanceCheck'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							readOnly : true,
							dataIndex : 'appearanceResult',
							name : 'appearanceResult',
							fieldLabel : '外观判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>产水量标准",
							anchor : '100%',
							colspan : 3,
							name : 'water',
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '产水抽检数量',
							anchor : '100%',
							colspan : 3,
							name : 'waterCheckNum',
							dataIndex : 'waterCheckNum'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '产水检验结果',
							value : '详见检测清单',
							anchor : '100%',
							colspan : 3,
							dataIndex : 'waterCheck'

						}, {
							xtype : 'combobox',
							name : 'waterResult',
							dataIndex : 'waterResult',
							anchor : '100%',
							colspan : 3,
							readOnly : true,
							fieldLabel : '产水量判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>产水标准",
							anchor : '100%',
							colspan : 3,
							name : 'water2',
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '产水抽检数量',
							anchor : '100%',
							colspan : 3,
							name : 'waterCheck2Num',
							dataIndex : 'waterCheck2Num'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '产水检验结果',
							value : '详见检测清单',
							anchor : '100%',
							colspan : 3,
							name : 'waterCheck2',
							dataIndex : 'waterCheck2'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							readOnly : true,
							name : 'waterResult2',
							dataIndex : 'waterResult2',
							fieldLabel : '产水量判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>脱盐率标准",
							anchor : '100%',
							colspan : 3,
							dataIndex : 'desalination'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '脱盐抽检数量',
							anchor : '100%',
							colspan : 3,
							name : 'desalinationCheckNum',
							dataIndex : 'desalinationCheckNum'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 3,
							name : 'desalinationCheck',
							dataIndex : 'desalinationCheck'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							readOnly : true,
							name : 'desalinationResult',
							dataIndex : 'desalinationResult',
							fieldLabel : '脱盐率判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>脱盐率标准",
							anchor : '100%',
							colspan : 3,
							name : 'desalination2',
							dataIndex : 'desalination2'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '脱盐抽检数量',
							anchor : '100%',
							colspan : 3,
							name : 'desalinationCheck2Num',
							dataIndex : 'desalinationCheck2Num'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 3,
							name : 'desalinationCheck2',
							dataIndex : 'desalinationCheck2'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							readOnly : true,
							name : 'desalinationResult2',
							dataIndex : 'desalinationResult2',
							fieldLabel : '脱盐率判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>气密性</span>检测标准",
							anchor : '100%',
							colspan : 3,
							name : 'airStdStr',
							dataIndex : 'airStdStr'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '气密抽检数量',
							anchor : '100%',
							colspan : 3,
							name : 'airCheckNum',
							dataIndex : 'airCheckNum'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '气密检验结果',
							anchor : '100%',
							colspan : 3,
							name : 'airCheck',
							dataIndex : 'airCheck'
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 3,
							readOnly : true,
							name : 'airResult',
							dataIndex : 'airResult',
							// allowBlank : false,
							fieldLabel : '气密判定',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'combobox',
							anchor : '100%',
							colspan : 6,
							name : 'entity/result',
							hiddenName : 'entity/result',
							dataIndex : 'result',
							allowBlank : false,
							fieldLabel : '结论',
							triggerAction : "all",
							store : this.resultStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}]
			}]
		});
	}

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入Excel',
			tag : '',
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
				saveUrl : 'com.keensen.ump.produce.quality.importDeliveryReportList.flow',
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

	// 导入合格证明细
	this.buildExcelUploadWin2 = function() {
		this.excelUploadWin2 = new Ext.Window({
			title : '导入Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			itype : '',// 自定义操作类型
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.quality.importCertificateList.flow',
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
						handler : this.doUpload2,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin2.hide();
						}
					}]
		});
	}
}