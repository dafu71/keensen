com.keensen.ump.produce.component.storage.Report4StockMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'report4stockmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		// 产品类型
		this.prodTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['工业膜', '工业膜'], ['家用膜', '家用膜'], ['商用膜', '商用膜']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;

		this.gpdChoose = this.gpdChoose || new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "100%",
					colspan : 1,
					fieldLabel : '初检产水量范围',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								xtype : 'numberfield',
								name : 'condition/fGpdDown'
							}, {
								columnWidth : 0.1,
								anchor : "100%",
								layout : "anchor",
								value : '至',
								xtype : 'displayfield'

							}, {
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								xtype : 'numberfield',
								name : 'condition/fGpdUp'

							}]
				});

		this.saltChoose = this.saltChoose || new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "100%",
					colspan : 1,
					fieldLabel : '初检脱盐率范围',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								xtype : 'numberfield',
								name : 'condition/fSaltDown'
							}, {
								columnWidth : 0.1,
								anchor : "100%",
								layout : "anchor",
								value : '至',
								xtype : 'displayfield'

							}, {
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								xtype : 'numberfield',
								name : 'condition/fSaltUp'

							}]
				});

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 230,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【仓库配置查询】',
					fields : [{
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/prodName2',
								anchor : '100%',
								fieldLabel : '产品名称%-%'
							}, {
								xtype : 'textfield',
								name : 'condition/jmSpecName2',
								fieldLabel : '卷膜型号%-%'
							}, {
								xtype : 'combo',
								hiddenName : 'condition/storage',
								mode : 'local',
								ref : '../storage',
								fieldLabel : '仓库',
								editable : false,
								store : [['高架成品仓', '高架成品仓'],
										['高架订单仓', '高架订单仓'],
										['高架C等品仓', '高架C等品仓']],
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}

							}, {
								xtype : 'textfield',
								name : 'condition/position',
								fieldLabel : '仓位名称'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '产品类型',
								hiddenName : 'condition/prodType',
								ref : '../prodType',
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
								colspan : 1,
								name : 'condition/dryWet2',
								anchor : '100%',
								fieldLabel : '干/湿膜%-%'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/checkCode2',
								anchor : '100%',
								fieldLabel : '请检单号%-%'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/orderNo2',
								anchor : '100%',
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/trayCode',
								anchor : '100%',
								fieldLabel : '托盘号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/stockTimeStart',
										'condition/stockTimeEnd'],
								fieldLabel : "仓库接收元件确认时间",
								format : "Y-m-d"
							}, this.gpdChoose, this.saltChoose, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textarea',
								colspan : 1,
								name : 'condition/batchNoStr2',
								emptyText : '多个批次请用逗号分隔，或一行一个批次',
								anchor : '100%',
								fieldLabel : '元件序列号'
							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/orderNoAllocate2',
								anchor : '100%',
								fieldLabel : '调拨后订单号%%'
							}, {
								xtype : 'hidden',
								name : 'condition/batchNoStr'
							}, {
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号'
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					//hidden : true,
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【仓库配置列表】',
			viewConfig : {
				forceFit : false
			},
			pageSize : 100,
			pageSizeComboStore : [10, 15, 20, 30, 40, 50, 100, 200, 500, 1000],
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'materCode',
						sortable : true,
						header : '物料代码'
					}, {
						dataIndex : 'batchNo',
						sortable : true,
						header : '序列号'
					}, {
						dataIndex : 'checkCode',
						sortable : true,
						header : '请检单号'
					}, {
						dataIndex : 'type',
						sortable : true,
						header : '产品类型'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号'
					}, {
						dataIndex : 'orderNoAllocate',
						header : '调拨后订单号'
					}, {
						dataIndex : 'director',
						sortable : true,
						header : '业务员'
					}, {
						dataIndex : 'prodName',
						sortable : true,
						header : '产品名称'
					}, {
						dataIndex : 'jmSpecName',
						sortable : true,
						header : '卷膜型号'
					}, {
						dataIndex : 'tape',
						sortable : true,
						header : '卷膜胶带'
					}, {
						dataIndex : 'specNameLabel',
						sortable : true,
						header : '标签型号'
					}, {
						dataIndex : 'bag',
						sortable : true,
						header : '包装袋'
					}, {
						dataIndex : 'box',
						sortable : true,
						header : '包装箱'
					}, {
						dataIndex : 'lid',
						sortable : true,
						header : '端盖类型'
					}, {
						dataIndex : 'amount',
						sortable : true,
						header : '数量'
					}, {
						dataIndex : 'dryWet',
						sortable : true,
						header : '干/湿'
					}, {
						dataIndex : 'storage',
						sortable : true,
						header : '仓库名称'
					}, {
						dataIndex : 'position',
						sortable : true,
						header : '仓位名称'
					}, {
						dataIndex : 'stockTime',
						sortable : true,
						header : '仓库接收元件确认时间'
					}, {
						dataIndex : 'dateDelivery',
						sortable : true,
						header : '发货日期'
					}, {
						dataIndex : 'fGpd',
						sortable : true,
						header : '初检产水量'
					}, {
						dataIndex : 'fSalt',
						sortable : true,
						header : '初检脱盐率%'
					}, {
						dataIndex : 'fCheckTm',
						sortable : true,
						header : '初检检测时间'
					}, {
						dataIndex : 'rGpd',
						sortable : true,
						header : '复检产水量'
					}, {
						dataIndex : 'rSalt',
						sortable : true,
						header : '复检脱盐率%'
					}, {
						dataIndex : 'rCheckTm',
						sortable : true,
						header : '复检检测时间'
					}, {
						dataIndex : 'disinfectTime',
						sortable : true,
						header : '最后1次消毒时间'
					}, {
						dataIndex : 'deliveryDateLatest',
						sortable : true,
						hidden:true,
						header : '计划最晚发货日期'
					}, {
						dataIndex : 'overDate',
						sortable : true,
						header : '超期天数'
					}, {
						dataIndex : 'abnormal',
						sortable : true,
						header : '外观异常类型'
					}, {
						dataIndex : 'abnormalExplain',
						sortable : true,
						header : '外观异常说明'
					}, {
						dataIndex : 'abnormalOther',
						sortable : true,
						header : '其他异常备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.storage.queryReport4Stock.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'materCode'
						}, {
							name : 'batchNo'
						}, {
							name : 'checkCode'
						}, {
							name : 'type'
						}, {
							name : 'orderNo'
						}, {
							name : 'director'
						}, {
							name : 'prodName'
						}, {
							name : 'jmSpecName'
						}, {
							name : 'tape'
						}, {
							name : 'specNameLabel'
						}, {
							name : 'bag'
						}, {
							name : 'box'
						}, {
							name : 'lid'
						}, {
							name : 'amount'
						}, {
							name : 'dryWet'
						}, {
							name : 'storage'
						}, {
							name : 'position'
						}, {
							name : 'stockTime'
						}, {
							name : 'jmCreateDt'
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
							name : 'disinfectTime'
						}, {
							name : 'deliveryDateLatest'
						}, {
							name : 'overDate'
						}, {
							name : 'abnormal'
						}, {
							name : 'abnormalExplain'
						}, {
							name : 'abnormalOther'
						}, {
							name : 'dateDelivery'
						}, {
							name : 'orderNoAllocate'
						}, {
							name : 'baseIdAllocate'
						}]
			})
		})
	}

}