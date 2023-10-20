com.zoomlion.hjsrm.kcgl.DrawingmanageMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.buildExcelUploadWin();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'drawingmanagemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
			height : 200,
			// width : 500,
			region : 'north',
			columns : 4,
			border : true,
			collapsible : true,
			titleCollapse : false,
			title : '【图纸发放查询 】',
			fields : [{
						xtype : 'textfield',
						name : 'condition/matnr',
						anchor : '100%',
						fieldLabel : '物料编码(模糊)'
					}, {
						xtype : 'textfield',
						name : 'condition/maktx',
						anchor : '100%',
						fieldLabel : '物料描述'
					}, {
						xtype : 'textfield',
						name : 'condition/zcpcx',
						anchor : '100%',
						fieldLabel : '适用车型'
					}, {
						xtype : 'textfield',
						name : 'condition/lifnr',
						anchor : '100%',
						fieldLabel : '供应商代码'
					}, {
						xtype : 'textfield',
						name : 'condition/name1',
						anchor : '100%',
						fieldLabel : '供应商名称'
					}, {
						xtype : "dateregion",
						anchor : '100%',
						// width : 200,
						nameArray : ['condition/startDown', 'condition/endDown'],
						fieldLabel : "工艺下发时间",
						format : "Ymd"
					}, {
						xtype : 'textfield',
						name : 'condition/singman',
						anchor : '100%',
						fieldLabel : '签收人'
					}, {
						xtype : "dateregion",
						anchor : '100%',
						// width : 200,
						nameArray : ['condition/startSign', 'condition/endSign'],
						fieldLabel : "签收时间",
						format : "Ymd"
					}, {
						xtype : 'textarea',
						name : 'condition/matnr2',
						ref : "../matnr2",
						anchor : '100%',
						fieldLabel : '物料编码(精准)'
					}, {
						xtype : 'combobox',
						name : 'condition/delflag',
						hiddenName : 'condition/delflag',
						value : 'N',
						ref : '../delflag',
						fieldLabel : '数据状态',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['','全部'],['N', '未删除'], ['Y', '已删除']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "请选择",
						hidden : Ext.isEmpty(lifnr) ? false : true
					}, {
						xtype : 'hidden',
						ref : '../lifnr2',
						value : Ext.isEmpty(lifnr) ? '' : lifnr,
						name : 'condition/lifnr2'
					}]
		});

		this.queryPanel.addButton({
					text : "导入",
					iconCls : "icon-application_excel",
					hidden : optflag == '0',
					scope : this,
					handler : this.onImportExcel
				});
		this.queryPanel.addButton({
					text : "导出",
					iconCls : "icon-application_excel",
					scope : this,
					handler : this.onExportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 图纸发放列表 】',
			stripeRows : true,
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : optflag == '0',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						ref : '../btnDel',
						hidden : optflag == '0',
						iconCls : 'icon-application_delete',
						handler : this.onDelete
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.kcgl.drawingprovide.deleteProvide.biz.ext',
			viewConfig : {
		// forceFit : true
			},
			autoExpandColumn : '2',
			columns : [new Ext.grid.RowNumberer(), selModel, {
				dataIndex : 'matnr',
				header : '物料编码',
				width : 200,
				renderer : function(v, m, r, i) {
					var delflag = r.get("delflag");
					if (delflag == "Y") {
						return "<span style='text-decoration:line-through'>"
								+ v + "</span>";
					} else {
						return v;
					}
				}
			}, {
				dataIndex : 'maktx',
				header : '物料描述'
			}, {
				dataIndex : 'zcpcx',
				header : '适用车型'
			}, {
				dataIndex : 'drawingtype',
				header : '图纸类别'
			}, {
				dataIndex : 'drawingcode',
				header : '图样更改单号<br>或技术通知单'
			}, {
				dataIndex : 'attribute',
				header : '工艺属性'
			}, {
				dataIndex : 'warehousing',
				header : '入库件'
			}, {
				dataIndex : 'lifnr',
				header : '供应商代码'
			}, {
				dataIndex : 'name1',
				header : '供应商名称'
			}, {
				dataIndex : 'downtime',
				header : '工艺下发时间'
			}, {
				dataIndex : 'singman',
				header : '签收人'
			}, {
				dataIndex : 'signtime',
				header : '签收时间'
			}, {
				dataIndex : 'remark',
				header : '备注'
			}, {
				dataIndex : 'operator',
				header : '操作员'
			}, {
				dataIndex : 'opttime',				
				header : '更新时间'
			}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.drawingprovide.queryProvide.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'pkid'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'zcpcx'
						}, {
							name : 'drawingtype'
						}, {
							name : 'drawingcode'
						}, {
							name : 'attribute'
						}, {
							name : 'warehousing'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'downtime'
						}, {
							name : 'singman'
						}, {
							name : 'signtime'
						}, {
							name : 'remark'
						}, {
							name : 'operator'
						}, {
							name : 'opttime'
						}, {
							name : 'delflag'
						}]
			})
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
			height : 160,
			items : [{
						xtype : 'columnform',
						itemId : 'uploadForm',
						saveUrl : 'com.zoomlion.hjsrm.kcgl.uploadDrawingProvide.flow',
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

	// 修改窗口
	this.initEditWindow = function() {
		var _this = this;

		this.editPanel = this.editPanel || new Ext.FormPanel({
					height : 590,
					buttonAlign : 'center',
					labelAlign : "right",
					layout : 'form',
					autoHide : false,
					border : true,
					items : [{
								xtype : 'displayfield',
								value : '&nbsp;'
							}, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/matnr',
								fieldLabel : '物料编码',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/maktx',
								fieldLabel : '物料描述',
								allowBlank : false
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/zcpcx',
								fieldLabel : '适用车型',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/drawingtype',
								fieldLabel : '图纸类别',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/drawingcode',
								fieldLabel : '图样更改单号<br>或技术通知单',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/attribute',
								fieldLabel : '工艺属性',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/warehousing',
								fieldLabel : '入库件',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/lifnr',
								fieldLabel : '供应商代码',
								allowBlank : false
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/name1',
								fieldLabel : '供应商名称',
								readOnly : true,
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/downtime',
								fieldLabel : '工艺下发时间',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/singman',
								fieldLabel : '签收人',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/signtime',
								fieldLabel : '签收时间',
								allowBlank : true
							}/*, {
								xtype : 'displayfield',
								value : '&nbsp;'
							}*/, {
								xtype : 'textfield',
								width : 300,
								name : 'provide/remark',
								fieldLabel : '备注',
								allowBlank : true
							}, {
								xtype : 'hidden',
								name : 'provide/pkid'
							}],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onUpdate
							}, {
								text : "取消",
								scope : this,
								handler : function() {
									this.editPanel.form.reset();
									this.editWindow.hide();
								}
							}]
				});

		this.editWindow = this.editWindow || new Ext.Window({
					title : '修改',
					height : 650,
					width : 480,
					resizable : true,// 窗口边框和托动大小
					minimizable : false,// 设置窗口不能最小化
					maximizable : true,// 设置窗口能最大化
					modal : true,
					items : [this.editPanel]
				});
	}
}