com.keensen.ump.produce.component.inventory.K3StockMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.buildExcelUploadWin();
		
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'k3stockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.storageStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['退料仓', '退料仓'], ['元件不良仓', '元件不良仓'], ['待检仓', '待检仓'],
							['返厂仓', '返厂仓'], ['办公用品', '办公用品'], ['代管仓', '代管仓'],
							['膜片AB仓', '膜片AB仓'], ['膜片C仓', '膜片C仓'],
							['膜片发货仓', '膜片发货仓'], ['半成品1号仓', '半成品1号仓'],
							['研发1号仓', '研发1号仓'], ['资产备件1号仓', '资产备件1号仓'],
							['膜片车间1号仓', '膜片车间1号仓'], ['原材料1号仓', '原材料1号仓'],
							['工业组件1号仓', '工业组件1号仓'], ['家用组件1号仓', '家用组件1号仓'],
							['膜片不良1号仓', '膜片不良1号仓'], ['丙类化学品库', '丙类化学品库'],
							['原材料车间线边仓', '原材料车间线边仓'], ['高架成品仓', '高架成品仓'],
							['高架订单仓', '高架订单仓'], ['高架C等品仓', '高架C等品仓']]
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
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '元件序列号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/materCode',
								fieldLabel : '物料代码%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '仓库名称',
								ref : '../storage',
								hiddenName : 'condition/storage',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.storageStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.storage.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/position',
								fieldLabel : '仓位名称%-%'
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {
								xtype : "dateregion",
								colspan : 2,
								// anchor : '75%',
								nameArray : ['condition/storeTimeStart',
										'condition/storeTimeEnd'],
								fieldLabel : "卷制/入库时间",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/prodState',
								fieldLabel : '序列号状态%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								fieldLabel : '物料名称%-%'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : true,
					handler : this.exportExcel
				});
				
		this.queryPanel.addButton({
					text : "模板下载",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "全量导入",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelete
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.inventory.updateBatchStatus.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materCode',
						width : 100,
						header : '物料代码'
					}, {
						dataIndex : 'batchNo',
						width : 100,
						header : '元件序列号'
					}, {
						dataIndex : 'className',
						width : 100,
						header : '大类'
					}, {
						dataIndex : 'prodSpecName',
						width : 100,
						header : '物料名称'
					}, {
						dataIndex : 'origSpecName',
						width : 100,
						header : '原卷制型号'
					}, {
						dataIndex : 'amount',
						width : 100,
						header : '数量'
					}, {
						dataIndex : 'prodType',
						width : 100,
						header : '规格型号'
					}, {
						dataIndex : 'storage',
						width : 100,
						header : '仓库名称'
					}, {
						dataIndex : 'position',
						width : 100,
						header : '仓位名称'
					}, {
						dataIndex : 'prodState',
						width : 100,
						header : '序列号状态'
					}, {
						dataIndex : 'remark',
						width : 100,
						header : '备注'
					}, {
						dataIndex : 'storeTime',
						width : 100,
						header : '卷制/入库时间'
					}, {
						dataIndex : 'apperance',
						width : 100,
						header : '端面/外观'
					}, {
						dataIndex : 'lid',
						width : 100,
						header : '端盖'
					}, {
						dataIndex : 'tape',
						width : 100,
						header : '标签（司标/贴牌）'
					}, {
						dataIndex : 'fGpd',
						width : 100,
						header : '初检产水量'
					}, {
						dataIndex : 'fSalt',
						width : 100,
						header : '初检脱盐率%'
					}, {
						dataIndex : 'fCheckTm',
						width : 100,
						header : '初检检测时间'
					}, {
						dataIndex : 'rGpd',
						width : 100,
						header : '复检产水量'
					}, {
						dataIndex : 'rSalt',
						width : 100,
						header : '复检脱盐率%'
					}, {
						dataIndex : 'rCheckTm',
						width : 100,
						header : '复检检测时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.inventory.queryK3StockByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'materCode'
						}, {
							name : 'batchNo'
						}, {
							name : 'className'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'origSpecName'
						}, {
							name : 'amount'
						}, {
							name : 'prodType'
						}, {
							name : 'storage'
						}, {
							name : 'position'
						}, {
							name : 'prodState'
						}, {
							name : 'remark'
						}, {
							name : 'storeTime'
						}, {
							name : 'apperance'
						}, {
							name : 'lid'
						}, {
							name : 'tape'
						}, {
							name : 'fGpd'
						}, {
							name : 'fSalt'
						}, {
							name : 'fCheckTm'
						}, {
							name : 'rGpd'
						}, {
							name : 'rSalt'
						}, {
							name : 'rCheckTm'
						}, {
							name : 'id'
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
						saveUrl : 'com.keensen.ump.produce.component.importOrder.flow',
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