com.keensen.ump.produce.component.yxorderMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.buildExcelUploadWin();
		this.initUploadWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentyxordermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【营销订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
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
								anchor : '100%',
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
			title : '【营销订单列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : listid,
			tbar : ['->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.neworder.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
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
						dataIndex : 'orderNo',
						header : '订单编号'
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
						dataIndex : 'orderAmount',
						header : '订单数量'
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
						header : '要求入库日期'
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

}