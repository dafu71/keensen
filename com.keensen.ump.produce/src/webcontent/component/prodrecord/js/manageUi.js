com.keensen.ump.produce.component.ProdRecordMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.buildExcelUploadWin();

		this.initQueryPanel();
		this.initListPanel();

		this.initInputWindow();
		this.initEditWindow();
		
		this.initChangeLabelWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'prodrecordmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.whiteStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.prodTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['8寸', '8寸'], ['4寸', '4寸'], ['家用膜', '家用膜']]
				});

		this.dryWetStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['干', '干'], ['湿', '湿']]
				});

		this.labelStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['贴牌', '贴牌'], ['只贴序列号', '只贴序列号'],
							['客户标签', '客户标签'], ['无', '无']]
				});

		this.lidStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['客户端盖', '客户端盖'], ['无', '无']]
				});

		this.lidStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['客户端盖', '客户端盖'], ['无', '无']]
				});

		this.bagStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['无', '无'], ['有', '有']]
				});

		this.boxStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['司标', '司标'], ['中性', '中性'], ['客户包装箱', '客户包装箱'],
							['无', '无']]
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
								name : 'condition/client',
								fieldLabel : '客户名称%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '元件类型',
								ref : '../prodType',
								hiddenName : 'condition/prodType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.prodTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.prodType.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/prodName',
								fieldLabel : '产品名称%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '登记元件序列号%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/qjBatchNo',
								fieldLabel : '当前元件序列号%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '干/湿',
								ref : '../dryWet',
								hiddenName : 'condition/dryWet',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.dryWetStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.dryWet.reset()
									}
								}
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "登记日期",
								format : "Y-m-d"
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
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '复制新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddCopy
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '换标',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onChangeLabel
					}, '-', {
						text : '废止',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelete
					}, '->', {
						text : '打印唛头',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrintMarks
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.prodrecord.updateBatchStatus.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						width : 150,
						header : '登记日期'
					}, {
						dataIndex : 'isqj',
						width : 100,
						header : '是否有气检',
						renderer : function(v, m, r, i) {
							return v == 1
									? '<span style="color:red">是</span>'
									: '否';
						}
					}, {
						dataIndex : 'client',
						width : 100,
						header : '客户名称'
					}, {
						dataIndex : 'batchNo',
						width : 100,
						header : '登记元件序列号'
					}, {
						dataIndex : 'qjBatchNo',
						width : 100,
						header : '当前元件序列号'
					}, {
						dataIndex : 'prodType',
						width : 100,
						header : '元件类型'
					}, {
						dataIndex : 'prodName',
						width : 100,
						header : '产品名称'
					}, {
						dataIndex : 'qjSpecName',
						width : 100,
						header : '打印型号'
					}, {
						dataIndex : 'dryWet',
						width : 100,
						header : '干/湿'
					}, {
						dataIndex : 'quantity',
						width : 100,
						header : '返厂数量(支)'
					}, {
						dataIndex : 'white',
						width : 100,
						header : '白膜'
					}, {
						dataIndex : 'label',
						width : 100,
						header : '标签'
					}, {
						dataIndex : 'lid',
						width : 100,
						header : '端盖'
					}, {
						dataIndex : 'bag',
						width : 100,
						header : '包装袋'
					}, {
						dataIndex : 'box',
						width : 100,
						header : '包装箱'
					}, {
						dataIndex : 'locate',
						width : 100,
						header : '元件存放位置'
					}, {
						dataIndex : 'qijian',
						width : 100,
						header : '气检值(KPa)'
					}, {
						dataIndex : 'gpd',
						width : 100,
						header : '产水量(GPD)'
					}, {
						dataIndex : 'salt',
						width : 100,
						header : '脱盐率(%)'
					}, {
						dataIndex : 'describe',
						width : 100,
						header : '异常描述'
					}, {
						dataIndex : 'deal',
						width : 100,
						header : '返工或内部处理需求'
					}, {
						dataIndex : 'orderNo',
						width : 100,
						header : '返工处理的订单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.prodrecord.queryProdRecordByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'client'
						}, {
							name : 'prodType'
						}, {
							name : 'prodName'
						}, {
							name : 'dryWet'
						}, {
							name : 'quantity'
						}, {
							name : 'white'
						}, {
							name : 'label'
						}, {
							name : 'lid'
						}, {
							name : 'bag'
						}, {
							name : 'box'
						}, {
							name : 'locate'
						}, {
							name : 'batchNo'
						}, {
							name : 'qijian'
						}, {
							name : 'gpd'
						}, {
							name : 'salt'
						}, {
							name : 'describe'
						}, {
							name : 'deal'
						}, {
							name : 'orderNo'
						}, {
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'qjSpecName'
						}, {
							name : 'qjBatchNo'
						}, {
							name : 'isqj'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
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
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.prodrecord.saveBatchProdRecord.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/client',
							ref : '../../client',
							allowBlank : false,
							fieldLabel : '客户名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '元件类型',
							allowBlank : false,
							ref : '../../prodType',
							hiddenName : 'entity/prodType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.prodTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.prodType.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/prodName',
							ref : '../../prodName',
							allowBlank : false,
							fieldLabel : '产品名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '干/湿',
							allowBlank : false,
							ref : '../../dryWet',
							hiddenName : 'entity/dryWet',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.dryWetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.dryWet.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/quantity',
							ref : '../../quantity',
							allowBlank : false,
							fieldLabel : '返厂数量(支)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '白膜',
							ref : '../../white',
							allowBlank : false,
							hiddenName : 'entity/white',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.whiteStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.white.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '标签',
							ref : '../../label',
							allowBlank : false,
							hiddenName : 'entity/label',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.labelStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.label.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '端盖',
							ref : '../../lid',
							allowBlank : false,
							hiddenName : 'entity/lid',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.lidStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.lid.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '包装袋',
							ref : '../../bag',
							allowBlank : false,
							hiddenName : 'entity/bag',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.bagStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.bag.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '包装箱',
							ref : '../../box',
							allowBlank : false,
							hiddenName : 'entity/box',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.boxStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.box.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/locate',
							ref : '../../locate',
							allowBlank : false,
							fieldLabel : '元件存放位置',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/qijian',
							ref : '../../qijian',
							allowBlank : false,
							fieldLabel : '气检值(KPa)',
							anchor : '95%',
							value : '0.1',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/gpd',
							ref : '../../gpd',
							// allowBlank : false,
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/salt',
							ref : '../../salt',
							// allowBlank : false,
							fieldLabel : '脱盐率(%)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							ref : '../../orderNo',
							// allowBlank : false,
							fieldLabel : '返工处理订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/describe',
							ref : '../../describe',
							// allowBlank : false,
							fieldLabel : '异常描述',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/deal',
							ref : '../../deal',
							allowBlank : false,
							fieldLabel : '返工或内部<br>处理需求',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							value : '<p style="color:red;">多个元件序列号，用空格或逗号分开</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'textarea',
							ref : '../../batchNo',
							allowBlank : false,
							fieldLabel : '元件序列号',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							ref : '../../batchNos',
							name : 'entity/batchNos'
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
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.component.prodrecord.expandProdRecord.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.prodrecord.saveProdRecord.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/client',
							dataIndex : 'client',
							allowBlank : false,
							fieldLabel : '客户名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '元件类型',
							allowBlank : false,
							ref : '../../prodType',
							hiddenName : 'entity/prodType',
							dataIndex : 'prodType',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.prodTypeStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.prodType.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/prodName',
							dataIndex : 'prodName',
							allowBlank : false,
							fieldLabel : '产品名称',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '干/湿',
							allowBlank : false,
							ref : '../../dryWet',
							hiddenName : 'entity/dryWet',
							dataIndex : 'dryWet',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.dryWetStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.dryWet.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/quantity',
							dataIndex : 'quantity',
							allowBlank : false,
							fieldLabel : '返厂数量(支)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '白膜',
							ref : '../../white',
							allowBlank : false,
							hiddenName : 'entity/white',
							dataIndex : 'white',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.whiteStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.white.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '标签',
							ref : '../../label',
							allowBlank : false,
							hiddenName : 'entity/label',
							dataIndex : 'label',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.labelStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.label.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '端盖',
							ref : '../../lid',
							allowBlank : false,
							hiddenName : 'entity/lid',
							dataIndex : 'lid',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.lidStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.lid.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '包装袋',
							ref : '../../bag',
							allowBlank : false,
							hiddenName : 'entity/bag',
							dataIndex : 'bag',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.bagStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.bag.reset()
								}
							}
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '包装箱',
							ref : '../../box',
							allowBlank : false,
							hiddenName : 'entity/box',
							dataIndex : 'box',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : _this.boxStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.inputWindow.box.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/locate',
							dataIndex : 'locate',
							allowBlank : false,
							fieldLabel : '元件存放位置',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							fieldLabel : '元件序列号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/qijian',
							dataIndex : 'qijian',
							allowBlank : false,
							fieldLabel : '气检值(KPa)',
							anchor : '95%',
							value : '0.1',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/gpd',
							dataIndex : 'gpd',
							// allowBlank : false,
							fieldLabel : '产水量(GPD)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/salt',
							dataIndex : 'salt',
							// allowBlank : false,
							fieldLabel : '脱盐率(%)',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							// allowBlank : false,
							fieldLabel : '返工处理订单号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/describe',
							dataIndex : 'describe',
							// allowBlank : false,
							fieldLabel : '异常描述',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/deal',
							dataIndex : 'deal',
							allowBlank : false,
							fieldLabel : '返工或内部<br>处理需求',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	this.initChangeLabelWindow = function() {
		var _this = this;
		this.changeLabelWindow = this.changeLabelWindow
				|| new Ext.fn.FormWindow({
					title : '换标',
					height : 320,
					width : 480,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						successFn : function(i, r) {
							_this.changeLabelWindow.items.items[0].form.reset();
							_this.changeLabelWindow.hide();
							_this.listPanel.refresh();
						},
						columns : 2,
						loadUrl : 'com.keensen.ump.produce.component.prodrecord.expandProdRecord.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.prodrecord.saveProdRecord.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									dataIndex : 'batchNo',
									fieldLabel : '原元件序号',
									readOnly : true,
									anchor : '100%',
									colspan : 2

								},{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									dataIndex : 'prodName',
									fieldLabel : '原元件型号',
									readOnly : true,
									anchor : '100%',
									colspan : 2

								},{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/reserve1',
									dataIndex : 'reserve1',
									fieldLabel : '新元件序号',
									ref : '../../reserve1',
									allowBlank : false,
									anchor : '100%',
									colspan : 2

								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/reserve2',
									dataIndex : 'reserve2',
									fieldLabel : '新元件型号',
									ref : '../../reserve2',
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
}