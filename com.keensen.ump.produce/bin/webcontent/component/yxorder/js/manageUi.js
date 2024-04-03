com.keensen.ump.produce.component.yxorderMgr = function() {
	this.initPanel = function() {

		this.initPlanYear();
		this.initWeekArr();

		this.initQueryPanel();
		this.initListPanel();

		this.buildExcelUploadWin();
		this.initUploadWindow();

		this.initPlanWeekWindow();
		this.initViewPlanWeekWindow();
		this.initEditPlanWeekWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentyxordermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initPlanYear = function() {
		this.planYearArr = [];
		for (var i = 0; i < 10; i++) {
			this.planYearArr.push([2024 + i, 2024 + i])
		}
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								anchor : '75%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '75%',
								nameArray : ['condition/orderDateStart',
										'condition/orderDateEnd'],
								fieldLabel : "订单日期",
								format : "Y-m-d"
							}]
				});

		this.queryPanel.addButton({
					text : "模板下载",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});
		this.queryPanel.addButton({
					text : "订单导入",
					scope : this,
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
			hsPage : true,
			id : mylistid,
			tbar : [{
						text : '新增生产主计划',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddPlanWeek
					}/*, '-', {
						text : '查看生产主计划',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewPlanWeek
					}*/, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.neworder.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
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
						}
					}, {
						dataIndex : 'arrangeAmount',
						header : '已排产数量'
					}, {
						dataIndex : 'scfs',
						header : '生产方式'
					}, {
						dataIndex : 'bm',
						header : '编码'
					}, {
						dataIndex : 'sffh',
						header : '是否发货'
					}, {
						dataIndex : 'orderType',
						header : '订单类型'
					}, {
						dataIndex : 'type',
						header : '类型'
					}, {
						dataIndex : 'khxj',
						header : '客户星级'
					}, {
						dataIndex : 'cpxj',
						header : '产品星级'
					}, {
						dataIndex : 'ddxj',
						header : '订单星级'
					}, {
						dataIndex : 'orderDate',
						header : '订单日期'
					}, {
						dataIndex : 'hpmc',
						header : '货品名称'
					}, {
						dataIndex : 'dw',
						header : '单位'
					}, {
						dataIndex : 'materSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'cpgg',
						header : '产品规格'
					}, {
						dataIndex : 'dryWet',
						header : '干膜/湿'
					}, {
						dataIndex : 'dfh',
						header : '待发货（发库存）'
					}, {
						dataIndex : 'xsc',
						header : '需生产或入库数量'
					}, {
						dataIndex : 'sbkcgm',
						header : '司标库存（干膜）'
					}, {
						dataIndex : 'sbkcsm',
						header : '司标库存（湿膜）'
					}, {
						dataIndex : 'bq',
						header : '标签'
					}, {
						dataIndex : 'bag',
						header : '真空包装袋'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'mark',
						header : '唛头'
					}, {
						dataIndex : 'pack',
						header : '打包方式'
					}, {
						dataIndex : 'performance',
						header : '产品性能'
					}, {
						dataIndex : 'remark',
						header : '其它备注'
					}, {
						dataIndex : 'demandStockDate',
						header : '生产交期'
					}, {
						dataIndex : 'rksl',
						header : '入库数量（支）'
					}, {
						dataIndex : 'jhwcsj',
						header : '计划完成时间'
					}, {
						dataIndex : 'scwcrq',
						header : '生产完成日期'
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
						}]
			})
		})
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
						}/*, {
							xtype : 'combobox',
							fieldLabel : '计划制定周',
							ref : '../../planWeek',
							hiddenName : 'entity/planWeek',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							store : this.weekArr,
							value : getCurrentWeekNumber(),
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.planWeekWindow.planWeek.reset();
								}
							}
						}*/, {
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
					}/*, {
						dataIndex : 'planWeek',
						header : '计划制定周'
					}*/, {
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
								}/*, {
									xtype : 'combobox',
									fieldLabel : '计划制定周',
									hiddenName : 'entity/planWeek',
									ref : '../../planWeek',
									emptyText : '--请选择--',
									allowBlank : false,
									editable : false,
									anchor : '85%',
									store : this.weekArr,
									dataIndex : 'planWeek',
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.editPlanWeekWindow.planWeek
													.reset();
										}
									}
								}*/, {
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
}