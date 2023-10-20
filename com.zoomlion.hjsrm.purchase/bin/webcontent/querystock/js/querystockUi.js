com.zoomlion.hjsrm.purchase.QuerystockMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.buildExcelUploadWin();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'querystockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 库存报表查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '供应商描述'
							}, {
								xtype : "dateregion",
								value : new Date(),
								colspan : 2,
								anchor : '60%',
								nameArray : ['condition/startdate',
										'condition/endate'],
								fieldLabel : "创建日期",
								format : "Y-m-d"
							}]
				});

		this.queryPanel.addButton({
					text : "下载库存模版",
					iconCls : "icon-application_excel",
					hidden : Ext.isEmpty(lifnr) ? true : false,
					scope : this,
					handler : this.getSapApplyData
				});

		this.queryPanel.addButton({
					text : "上传库存",
					iconCls : "icon-application_excel",
					hidden : Ext.isEmpty(lifnr) ? true : false,
					scope : this,
					handler : this.onImportExcel
				});
				
		this.queryPanel.addButton({
					text : "导出",
					iconCls : "icon-application_excel",
					hidden : !Ext.isEmpty(lifnr) ? true : false,
					scope : this,
					handler : this.getData
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({singleSelect:true,header:''});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 库存报表列表 】',
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : Ext.isEmpty(lifnr) ? true : false,
						handler : this.onEdit
					},'->',{
						xtype : 'displayfield',
						hidden : Ext.isEmpty(lifnr) ? true : false,
						value :'<font style="color:red">提示：双击记录可修改&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'lifnr',
						header : '供应商帐号'
					}, {
						dataIndex : 'name1',
						header : '供应商名称'
					}, {
						dataIndex : 'erdat',
						header : '发布日期'
					}, {
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'maktx',
						header : '物料描述'
					}, {
						dataIndex : 'menge',
						header : '采购申请数量'
					}, {
						dataIndex : 'data1',
						header : '原材料'
					}, {
						dataIndex : 'data4',
						header : '半成品'
					}, {
						dataIndex : 'data5',
						header : '库存成品数量'
					}, {
						dataIndex : 'bhl',
						header : '备货率<br>(按采购申请)'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.purchase.queryapply.queryApplyStock.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'erdat'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'menge'
						}, {
							name : 'data1'
						}, {
							name : 'data2'
						}, {
							name : 'data3'
						}, {
							name : 'data4'
						}, {
							name : 'data5'
						}, {
							name : 'remark'
						},{
							name : 'pkid'
						},{
							name : 'bhl'
						}

				]
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
			height : 160,
			items : [{
						xtype : 'columnform',
						itemId : 'uploadForm',
						saveUrl : 'com.zoomlion.hjsrm.purchase.shzl.uploadApplydata.flow',
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
	
	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '库存修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			modal:true,
			items : [{
				xtype : 'editpanel',
				//ref:'../../../editpanel',
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.purchase.queryapply.loadApplydata.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.purchase.queryapply.saveApplydata.biz.ext',
				fields : [{
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'matnr',
						readOnly:true,
						name : 'apply/matnr',
						fieldLabel : '物料编码'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'maktx',
						readOnly:true,
						name : 'apply/maktx',
						fieldLabel : '物料描述'
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'data1',
						allowBlank : false,
						name : 'apply/data1',
						fieldLabel : '原材料'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'data4',
						allowBlank : false,
						name : 'apply/data4',
						fieldLabel : '半成品'
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					}, {
						xtype : 'textfield',
						colspan : 2,
						anchor : '40%',
						dataIndex : 'data5',
						allowBlank : false,
						name : 'apply/data5',
						fieldLabel : '库存成品数量'
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					}, {
						xtype : 'textfield',
						colspan : 2,
						anchor : '95%',
						dataIndex : 'remark',
						allowBlank : false,
						name : 'apply/remark',
						fieldLabel : '备注'
					}, {
						xtype : 'hidden',
						name : 'apply/pkid',
						dataIndex : 'pkid'
					}]
			}]

		});
	}
}