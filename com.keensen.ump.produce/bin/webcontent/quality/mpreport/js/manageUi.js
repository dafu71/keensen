com.keensen.ump.produce.quality.MpDeliveryReportMgr = function() {
	this.initPanel = function() {

		this.resultStore = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [["合格", "合格"], ["不合格", "不合格"]]

				});

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initReviewWindow();
		this.buildExcelUploadWin();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mpdeliveryreportmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.resultStore = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [["合格", "合格"], ["不合格", "不合格"]]

				});

		this.productNameStore = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [["反渗透膜片", "反渗透膜片"], ["纳滤膜片", "纳滤膜片"]]

				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
			height : 110,
			columns : 4,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			// title : '【膜片出货质检报告查询】',
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
				fieldLabel : '订单号%-%'
			}, {
				xtype : 'textfield',
				name : 'condition/labelSpecName',
				anchor : '95%',
				fieldLabel : '规格型号%-%'
			}, {
				xtype : 'mpspeccombobox',
				hiddenName : 'condition/materSpecId',
				anchor : '95%',
				fieldLabel : '膜片型号 ',
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
				xtype : 'displayfield',
				height : '5',
				colspan : 4
			}, {
				xtype : 'textfield',
				name : 'condition/client2',
				anchor : '95%',
				fieldLabel : '客户%-%'
			}]
		});
		
		this.queryPanel.addButton({
					text : "膜片明细模板",
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
			// title : '【膜片出货质检报告列表】',
			viewConfig : {
				forceFit : true
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
						text : '导入膜片',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onRelation
					}, '->', {
						text : '中文报告',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewReport
					}, '-', {
						text : '英文报告',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewReport2
					}, '-', {
						text : '曼胡报告',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewReport3
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.mpreport.deleteMpDeliveryReport.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						width : 120,
						header : '报告编号'
					}, {
						dataIndex : 'productName',
						header : '货品名称'
					}, {
						dataIndex : 'client',
						header : '客户'
					}, {
						dataIndex : 'labelSpecName',
						header : '规格型号'
					}, {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'orderAmount',
						header : '订单数量'
					}, {
						dataIndex : 'checkDt',
						header : '检验日期'
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
					}, {
						dataIndex : 'reviewDt',
						header : '审核日期'
					}, {
						dataIndex : 'cnt',
						header : '膜批次数量'
					}

			],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mpreport.queryMpDeliveryReportByPage.biz.ext',
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
							name : 'code'
						}, {
							name : 'productName'
						}, {
							name : 'labelSpecName'
						}, {
							name : 'materSpecId'
						}, {
							name : 'orderNo'
						}, {
							name : 'orderAmount'
						}, {
							name : 'checkDt'
						}, {
							name : 'result'
						}, {
							name : 'inspector'
						}, {
							name : 'reviewer'
						}, {
							name : 'reportDt'
						}, {
							name : 'reviewDt'
						}, {
							name : 'inspectorId'
						}, {
							name : 'reviewerId'
						}, {
							name : 'materSpecName'
						}, {
							name : 'client'
						}, {
							name : 'cnt'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;

		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
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
				saveUrl : 'com.keensen.ump.produce.quality.mpreport.saveMpDeliveryReport.biz.ext',
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
							fieldLabel : '货品名称',
							triggerAction : "all",
							store : _this.productNameStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
							listeners : {

							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							dataIndex : 'labelSpecName',
							allowBlank : false,
							fieldLabel : '规格型号',
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/materSpecId',
							dataIndex : 'materSpecId',
							allowBlank : false,
							anchor : '75%',
							colspan : 3,
							fieldLabel : '膜片型号 ',
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
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderNo'
						}, {
							xtype : 'textfield',
							name : 'entity/orderAmount',
							allowBlank : false,
							fieldLabel : '订单数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderAmount'
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
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'entity/client',
							allowBlank : false,
							fieldLabel : '客户名称',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'client'
						}]
			}]
		});
	}

	this.initEditWindow = function() {

		var _this = this;

		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.keensen.ump.produce.quality.mpreport.expandMpDeliveryReport.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mpreport.saveMpDeliveryReport.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 6
						}, {
							xtype : 'textfield',
							// name : 'entity/code',
							dataIndex : 'code',
							readOnly : true,
							fieldLabel : '报告编号',
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 3,
							name : 'entity/productName',
							hiddenName : 'entity/productName',
							dataIndex : 'productName',
							allowBlank : false,
							fieldLabel : '货品名称',
							triggerAction : "all",
							store : _this.productNameStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true,
							emptyText : "--请选择--",
							listeners : {

							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/labelSpecName',
							dataIndex : 'labelSpecName',
							allowBlank : false,
							fieldLabel : '规格型号',
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/materSpecId',
							dataIndex : 'materSpecId',
							allowBlank : false,
							anchor : '75%',
							colspan : 3,
							fieldLabel : '膜片型号 ',
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
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderNo'
						}, {
							xtype : 'textfield',
							name : 'entity/orderAmount',
							allowBlank : false,
							fieldLabel : '订单数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderAmount'
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
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'textfield',
							name : 'entity/client',
							allowBlank : false,
							fieldLabel : '客户名称',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'client'
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}]
			}]
		});
	}

	this.initReviewWindow = function() {

		var _this = this;

		this.reviewWindow = this.reviewWindow || new Ext.fn.FormWindow({
			title : '审核',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 6,
				loadUrl : 'com.keensen.ump.produce.quality.mpreport.expandMpDeliveryReport.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mpreport.saveReview.biz.ext',
				fields : [{
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>产品信息</span>",
							colspan : 6
						}, {
							xtype : 'textfield',
							// name : 'entity/code',
							dataIndex : 'code',
							readOnly : true,
							fieldLabel : '报告编号',
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 3,
							readOnly : true,
							dataIndex : 'productName',
							fieldLabel : '货品名称',
							triggerAction : "all",
							store : _this.productNameStore,
							mode : "local",
							editable : false,
							displayField : "myvalue",
							valueField : "mykey",
							forceSelection : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							readOnly : true,
							dataIndex : 'labelSpecName',
							fieldLabel : '规格型号',
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'mpspeccombobox',
							readOnly : true,
							dataIndex : 'materSpecId',
							anchor : '75%',
							colspan : 3,
							fieldLabel : '膜片型号 ',
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
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '订单号',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderNo'
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '订单数量',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'orderAmount'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'datefield',
							readOnly : true,
							dataIndex : 'checkDt',
							format : "Y-m-d",
							fieldLabel : '检验日期',
							anchor : '75%',
							colspan : 3
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '客户名称',
							anchor : '75%',
							colspan : 3,
							dataIndex : 'client'
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 6
						}, {
							xtype : 'combobox',
							anchor : '75%',
							colspan : 3,
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
				saveUrl : 'com.keensen.ump.produce.quality.importMpDeliveryDetail.flow',
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