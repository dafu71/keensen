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
					height : 120,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【元件出货质检报告查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/labelingModel',
								anchor : '75%',
								fieldLabel : '贴标型号'
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/materSpecId',
								anchor : '75%',
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
									}
								}
							}]
				});

		this.queryPanel.addButton({
					text : "元件明细模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【元件出货质检报告列表】',
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
						text : '导入元件',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onRelation
					}, '-', {
						text : '查看报告',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : '查看英文报告',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView2
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.deliveryrecord.delete.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '报告编号'
					}, {
						dataIndex : 'productName',
						header : '品名'
					}, {
						dataIndex : 'labelingModel',
						header : '贴标型号'
					}, {
						dataIndex : 'batchNo',
						header : '批号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'checkDt',
						header : '检验日期'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'checkAmount',
						header : '抽检数量'
					}, {
						dataIndex : 'result',
						header : '结论'
					}, {
						dataIndex : 'inspector',
						header : '检验员'
					}, {
						dataIndex : 'reviewer',
						header : '审核人'
					}, {
						dataIndex : 'reportDt',
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
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;

		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增元件出货质检报告',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 6,
				saveUrl : 'com.keensen.ump.produce.quality.deliveryrecord.save.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 6
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 3,
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
											"entity/desalinationResult2"];
									if (record.get('mykey') == '反渗透膜元件') {
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
							xtype : 'trigger',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '规格',
							emptyText : "输入规格，单击旁边按钮",
							anchor : '75%',
							colspan : 3,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'batchNo'
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderNo'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/orderAmount',
							allowBlank : false,
							fieldLabel : '订单数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderAmount'
						}, {
							xtype : 'textfield',
							name : 'entity/checkAmount',
							allowBlank : false,
							fieldLabel : '抽检数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'checkAmount'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'datefield',
							allowBlank : false,
							name : 'entity/checkDt',
							format : "Y-m-d",
							fieldLabel : '检验日期',
							anchor : '37%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>测试条件</span>",
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>测试原水",
							anchor : '95%',
							colspan : 2,
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'temperature'
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'ph'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'press'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/solution2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>测试原水",
							anchor : '95%',
							colspan : 2,
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'temperature2'
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'ph2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'press2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检验结果</span>",
							colspan : 6
						}, {
							xtype : 'textarea',
							name : 'entity/appearance',
							value : '表面光洁平整,无毛刺、损伤、污染、划痕、裂痕、破损等明显缺陷',
							readOnly : true,
							fieldLabel : '外观标准',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'appearance'
						}, {
							xtype : 'textarea',
							name : 'entity/appearanceCheck',
							value : '表面光洁平整,无毛刺、损伤、污染、划痕、裂痕、破损等缺陷',
							readOnly : true,
							fieldLabel : '外观检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'appearanceCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/water',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>产水量标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'waterCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/water2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>产水标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck2',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'waterCheck2'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/desalination',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>脱盐率标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalination'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalinationCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/desalination2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>脱盐率标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalination2'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck2',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalinationCheck2'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改元件出货质检报告',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.keensen.ump.produce.quality.deliveryrecord.expand.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.deliveryrecord.save.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 6
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 3,
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
											"entity/desalinationResult2"];
									if (record.get('mykey') == '反渗透膜元件') {
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
							xtype : 'trigger',
							name : 'entity/labelingModel',
							allowBlank : false,
							fieldLabel : '规格',
							emptyText : "输入规格，单击旁边按钮",
							anchor : '75%',
							colspan : 3,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							allowBlank : false,
							fieldLabel : '批号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'batchNo'
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderNo'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/orderAmount',
							allowBlank : false,
							fieldLabel : '订单数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderAmount'
						}, {
							xtype : 'textfield',
							name : 'entity/checkAmount',
							allowBlank : false,
							fieldLabel : '抽检数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'checkAmount'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'datefield',
							allowBlank : false,
							name : 'entity/checkDt',
							dataIndex : 'checkDt',
							format : "Y-m-d",
							fieldLabel : '检验日期',
							anchor : '37%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>测试条件</span>",
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/solution',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>测试原水",
							anchor : '95%',
							colspan : 2,
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'temperature'
						}, {
							xtype : 'textfield',
							name : 'entity/ph',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'ph'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/recovery',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							name : 'entity/press',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'press'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/solution2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>测试原水",
							anchor : '95%',
							colspan : 2,
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							name : 'entity/temperature2',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'temperature2'
						}, {
							xtype : 'textfield',
							name : 'entity/ph2',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'ph2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/recovery2',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							name : 'entity/press2',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'press2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检验结果</span>",
							colspan : 6
						}, {
							xtype : 'textarea',
							name : 'entity/appearance',
							value : '表面光洁平整,无毛刺、损伤、污染、划痕、裂痕、破损等明显缺陷',
							readOnly : true,
							fieldLabel : '外观标准',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'appearance'
						}, {
							xtype : 'textarea',
							name : 'entity/appearanceCheck',
							value : '表面光洁平整,无毛刺、损伤、污染、划痕、裂痕、破损等缺陷',
							readOnly : true,
							fieldLabel : '外观检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'appearanceCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/water',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>产水量标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'waterCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/water2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>产水标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							name : 'entity/waterCheck2',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '产水检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'waterCheck2'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/desalination',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>脱盐率标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalination'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalinationCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/desalination2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>脱盐率标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalination2'
						}, {
							xtype : 'textfield',
							name : 'entity/desalinationCheck2',
							allowBlank : false,
							readOnly : false,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalinationCheck2'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.keensen.ump.produce.quality.deliveryrecord.expand.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.deliveryrecord.saveReview.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 6
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 3,
							//name : 'entity/productName',
							hiddenName : 'entity/productName',
							dataIndex : 'productName',
							
							readOnly : true,
							fieldLabel : '品名',
							triggerAction : "all",
							store : new Ext.data.ArrayStore({
										id : 0,
										fields : ['mykey', 'myvalue'],
										data : [['纳滤膜元件', '纳滤膜元件'],
												['反渗透膜元件', '反渗透膜元件']]
									}),
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--"
						}, {
							xtype : 'trigger',
							//name : 'entity/labelingModel',
							
							readOnly : true,
							fieldLabel : '规格',
							emptyText : "输入规格，单击旁边按钮",
							anchor : '75%',
							colspan : 3,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							//name : 'entity/batchNo',
							
							readOnly : true,
							fieldLabel : '批号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'batchNo'
						}, {
							xtype : 'textfield',
							//name : 'entity/orderNo',
							readOnly : true,
							
							fieldLabel : '订单号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderNo'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							//name : 'entity/orderAmount',
							readOnly : true,
							
							fieldLabel : '订单数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderAmount'
						}, {
							xtype : 'textfield',
							//name : 'entity/checkAmount',
							readOnly : true,
							
							fieldLabel : '抽检数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'checkAmount'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'datefield',
							
							//name : 'entity/checkDt',
							readOnly : true,
							dataIndex : 'checkDt',
							format : "Y-m-d",
							fieldLabel : '检验日期',
							anchor : '37%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>测试条件</span>",
							colspan : 6
						}, {
							xtype : 'textfield',
							//name : 'entity/solution',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>测试原水",
							anchor : '95%',
							colspan : 2,
							dataIndex : 'solution'
						}, {
							xtype : 'textfield',
							//name : 'entity/temperature',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'temperature'
						}, {
							xtype : 'textfield',
							//name : 'entity/ph',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'ph'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							//name : 'entity/recovery',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'recovery'
						}, {
							xtype : 'textfield',
							//name : 'entity/press',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'press'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'solution2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>测试原水",
							anchor : '95%',
							colspan : 2,
							dataIndex : 'solution2'
						}, {
							xtype : 'textfield',
							name : 'temperature2',
							readOnly : true,
							fieldLabel : '温度（℃）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'temperature2'
						}, {
							xtype : 'textfield',
							name : 'ph2',
							readOnly : true,
							fieldLabel : 'pH',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'ph2'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'recovery2',
							readOnly : true,
							fieldLabel : '回收率（%）',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'recovery2'
						}, {
							xtype : 'textfield',
							name : 'press2',
							readOnly : true,
							fieldLabel : '测试压力',
							anchor : '95%',
							colspan : 2,
							dataIndex : 'press2'
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>检验结果</span>",
							colspan : 6
						}, {
							xtype : 'textarea',
							//name : 'entity/appearance',
							value : '表面光洁平整,无毛刺、损伤、污染、划痕、裂痕、破损等明显缺陷',
							readOnly : true,
							fieldLabel : '外观标准',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'appearance'
						}, {
							xtype : 'textarea',
							//name : 'entity/appearanceCheck',
							value : '表面光洁平整,无毛刺、损伤、污染、划痕、裂痕、破损等缺陷',
							readOnly : true,
							fieldLabel : '外观检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'appearanceCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
							//name : 'entity/appearanceResult',
							//hiddenName : 'entity/appearanceResult',
							dataIndex : 'appearanceResult',
							
							readOnly : true,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							//name : 'entity/water',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>产水量标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'water'
						}, {
							xtype : 'textfield',
							//name : 'entity/waterCheck',
							
							readOnly : false,
							fieldLabel : '产水检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'waterCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
							//name : 'entity/waterResult',
							hiddenName : 'entity/waterResult',
							dataIndex : 'waterResult',
							
							readOnly : true,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'water2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>产水标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'water2'
						}, {
							xtype : 'textfield',
							name : 'waterCheck2',
							
							readOnly : false,
							fieldLabel : '产水检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'waterCheck2'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
							name : 'waterResult2',
							//hiddenName : 'entity/waterResult2',
							dataIndex : 'waterResult2',
							
							readOnly : true,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							//name : 'entity/desalination',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>NaCl</span>脱盐率标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalination'
						}, {
							xtype : 'textfield',
							//name : 'entity/desalinationCheck',
							
							readOnly : true,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalinationCheck'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
							//name : 'entity/desalinationResult',
							//hiddenName : 'entity/desalinationResult',
							dataIndex : 'desalinationResult',
							
							readOnly : true,
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
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'desalination2',
							readOnly : true,
							fieldLabel : "<span style='color:red;'>MgSO4</span>脱盐率标准",
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalination2'
						}, {
							xtype : 'textfield',
							name : 'desalinationCheck2',
							
							readOnly : true,
							fieldLabel : '脱盐检验结果',
							anchor : '100%',
							colspan : 2,
							dataIndex : 'desalinationCheck2'
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
							name : 'desalinationResult2',
							//hiddenName : 'entity/desalinationResult2',
							dataIndex : 'desalinationResult2',
							
							readOnly : true,
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
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 2,
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
}