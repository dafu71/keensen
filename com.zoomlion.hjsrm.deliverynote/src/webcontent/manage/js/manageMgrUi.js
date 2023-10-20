com.zoomlion.hjsrm.deliverynote.ManageMgr = function() {
	this.initPanel = function() {
		this.isChassis = false;
		this.sel = ["0|0"];
		this.amount = 0;
		this.initQueryPanel();
		this.initListPanel();
		this.initPopWindow();
		this.initQueryPanel2();
		this.initListNotePanel();
		this.initCreatePanel();
		this.initDelPanel();
		this.initMainPanel();

		return new Ext.fn.fnLayOut({
			layout : 'fit',
			border : false,
			renderTo : 'notemanageMgr',
			panels : [this.mainPanel]
				// panels : [this.queryPanel, this.listPanel]
			});
	}

	this.initMainPanel = function() {
		this.mainPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.createPanel, this.delPanel]
				});

	};

	this.initCreatePanel = function() {

		this.content = new Ext.Panel({
					layout : "fit",
					items : [new Ext.Container({
								layout : "border",
								items : [this.queryPanel, this.listPanel]
							})]
				});

		this.createPanel = new Ext.Panel({
					layout : 'fit',
					title : "送货单创建",
					items : [this.content]
				})
	};

	this.initDelPanel = function() {

		this.content2 = new Ext.Panel({
					layout : "fit",
					items : [new Ext.Container({
								layout : "border",
								items : [this.queryPanel2, this.listNotePanel]
							})]
				});

		this.delPanel = new Ext.Panel({
					title : "送货单删除",
					layout : 'fit',
					items : [this.content2]
				})
	};

	this.initQueryPanel2 = function() {
		this.queryPanel2 = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					region : "north",
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 送货单查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/zasnh',
								fieldLabel : '送货单号'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createendate'],
								fieldLabel : "采购订单发布日期",
								format : "Y-m-d",
								allowBlank:false
							}]
				});
	}

	this.initListNotePanel = function() {
		this.selModel2 = new Ext.grid.CheckboxSelectionModel({});
		this.listNotePanel = new Ext.fn.ListPanel({
			title : '【 送货单列表 】',
			region : "center",
			hsPage : true,
			selModel : this.selModel2,
			delUrl : 'com.zoomlion.hjsrm.deliverynote.delivery.deleteNoteDetails.biz.ext',
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelNote
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel2, {
				dataIndex : 'zasnh',
				header : '送货单号',
				width : 120,
				sortable : false,
				renderer : function(v, m, r, i) {
					var delflag = r.get("delflag");
					if (delflag == "1") {
						return "<span style='text-decoration:line-through'>"
								+ v + "</span>";
					} else {
						return v;
					}
				}
			}, {
				dataIndex : 'zasnp',
				header : '送货单行号',
				width : 80,
				renderer : function(v, m, r, i) {
					var delflag = r.get("delflag");
					if (delflag == "1") {
						return "<span style='text-decoration:line-through'>"
								+ v + "</span>";
					} else {
						return v;
					}
				}
			}, {
				dataIndex : 'ebeln',
				header : '采购订单号',
				sortable : false
			}, {
				dataIndex : 'ebelp',
				header : '采购订单行号'
			}, {
				dataIndex : 'aedat',
				header : '发布日期'
			}, {
				dataIndex : 'matnr',
				header : '物料编码'
			}, {
				dataIndex : 'txz01',
				header : '物料描述'
			}, {
				dataIndex : 'menge',
				header : '采购订单数量'
			}, {
				dataIndex : 'amount',
				header : '送货数量'
			}, {
				dataIndex : 'return_amount',
				header : '验退数量'
			}, {
				dataIndex : 'cangtui',
				header : '仓退数量'
			}, {
				dataIndex : 'ruku',
				header : '入库数量'
			}, {
				header : '交货日期',
				dataIndex : 'eindt'
			}, {
				header : '计量单位',
				dataIndex : 'meins'
			}, {
				header : '库存地点',
				dataIndex : 'lgort',
				renderer : function(v, m, r, i) {
					if (v == 0) {
						return "";
					} else {
						return v;
					}
				}
			}, {
				header : '供应商帐号',
				dataIndex : 'lifnr'
			}, {
				header : '供应商名称',
				dataIndex : 'name1'
			}, {
				header : '项目类别',
				dataIndex : 'pstyp'
			}, {
				header : '科目分配类别',
				dataIndex : 'knttp'
			}, {
				header : '采购组',
				dataIndex : 'ekgrp'
			}, {
				header : '采购组织',
				dataIndex : 'ekorg'
			}, {
				header : '过量交货限度',
				dataIndex : 'uebto'
			}, {
				header : '批次',
				dataIndex : 'charg'
			}, {
				header : '生产订单号',
				dataIndex : 'aufnr'
			}, {
				header : '成本中心',
				dataIndex : 'kostl'
			}/*
				 * , { header : '底盘状态', dataIndex : 'status',renderer :
				 * function(v, m, r, i) { if (v == 'N') { return "未确认"; } else {
				 * return "确认"; } } }
				 */],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryNote4Delete.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'pkid'
						}, {
							name : 'zasnh'
						}, {
							name : 'zasnp'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'aedat'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'menge'
						}, {
							name : 'eindt'
						}, {
							name : 'meins'
						}, {
							name : 'lgort'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'pstyp'
						}, {
							name : 'knttp'
						}, {
							name : 'ekgrp'
						}, {
							name : 'ekorg'
						}, {
							name : 'aufnr'
						}, {
							name : 'kostl'
						}, {
							name : 'amount'
						}, {
							name : 'return_amount'
						}, {
							name : 'cangtui'
						}, {
							name : 'ruku'
						}, {
							name : 'delflag'
						}, {
							name : 'txz01'
						}, {
							name : 'charg'
						}, {
							name : 'uebto'
						}, {
							name : 'status'
						}]
			})
		});
	}
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 180,
					columns : 3,
					region : "north",
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 订单查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								ref : "../werks",
								// allowBlank:false,
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/ebeln',
								fieldLabel : '采购订单号'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/aedatstartdate',
										'condition/aedatendate'],
								fieldLabel : "订单发布日期",
								format : "Y-m-d",
								allowBlank:false
							}, {
								xtype : 'textfield',
								name : 'condition/lgort',
								fieldLabel : '库存地点'
							}, {
								xtype : 'textfield',
								name : 'condition/txz01',
								fieldLabel : '物料编码描述'
							}, {
								xtype : 'textarea',
								height : '50',
								ref : "../matnr2",
								name : 'condition/matnr2',
								fieldLabel : '物料编码'
							}, {
								xtype : 'hidden',
								ref : "../matnr",
								name : 'condition/matnr'
							}/*
								 * , { xtype : 'textfield', name :
								 * 'condition/field12', fieldLabel : '采购组' }
								 */]
				});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel
				|| new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 采购订单列表 】',
			region : "center",
			hsPage : true,
			selModel : this.selModel,
			delUrl : '...',
			tbar : [{
						text : '创建',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCreate
					}, {
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'ebeln',
						header : '采购订单号',
						sortable : false
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号'
					}, {
						dataIndex : 'aedat',
						header : '发布日期'
					}, {
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'txz01',
						header : '物料描述'
					}, {
						dataIndex : 'menge',
						header : '采购订单数量'
					}, {
						dataIndex : 'amount',
						header : '待送货数量'
					}, {
						header : '交货日期',
						dataIndex : 'eindt'
					}, {
						header : '计量单位',
						dataIndex : 'meins'
					}, {
						header : '库存地点',
						dataIndex : 'lgort',
						renderer : function(v, m, r, i) {
							if (v == 0) {
								return "";
							} else {
								return v;
							}
						}
					}, {
						header : '供应商帐号',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						header : '项目类别',
						dataIndex : 'pstyp'
					}, {
						header : '科目分配类别',
						dataIndex : 'knttp'
					}, {
						header : '采购组',
						dataIndex : 'ekgrp'
					}, {
						header : '采购组织',
						dataIndex : 'ekorg'
					}, {
						header : '过量交货限度',
						dataIndex : 'uebto'
					}, {
						header : '批次',
						dataIndex : 'charg'
					}, {
						header : '生产订单号',
						dataIndex : 'aufnr'
					}, {
						header : '成本中心',
						dataIndex : 'kostl'
					}, {
						header : '工厂',
						dataIndex : 'werks',
						hidden : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryOrders.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'aedat'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'menge'
						}, {
							name : 'eindt'
						}, {
							name : 'meins'
						}, {
							name : 'lgort'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'pstyp'
						}, {
							name : 'knttp'
						}, {
							name : 'ekgrp'
						}, {
							name : 'ekorg'
						}, {
							name : 'aufnr'
						}, {
							name : 'kostl'
						}, {
							name : 'amount'
						}, {
							name : 'txz01'
						}, {
							name : 'charg'
						}, {
							name : 'uebto'
						}, {
							name : 'werks'
						}]
			})
		});
	}

	this.initPopWindow = function() {
		var _this = this;
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 50,
					region : 'north',
					baseCls : "x-panel",
					pgrid : '',
					columns : 2,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'textfield',
								readOnly : true,
								name : 'lifnrinfo',
								ref : '../lindrinfo',
								fieldLabel : '供应商'
							}, {
								xtype : 'datefield',
								ref : '../arrivedate',
								name : 'arrivedate',
								allowBlank : false,
								fieldLabel : '预计到货日期',
								format : "Y-m-d"
							}, {
								xtype : 'hidden',
								name : 'werks',
								ref : '../werks'
							}]

				})

		this.selModel3 = this.selModel3
				|| new Ext.grid.CheckboxSelectionModel({});
		this.listPanel2 = new Ext.fn.EditListPanel({
			title : '采购订单列表',
			subAll : true,
			id : listid,
			hsPage : false,
			// autoHeight : true,
			// autoWidth : true,
			autoScroll : true,
			// height : '485',
			region : 'center',
			width : '860',
			delUrl : "....biz.ext",
			// autoExpandColumn : '6',
			clicksToEdit : 1,
			//viewConfig : {
				//forceFit : true
			//},
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelSelected
					}, '->', {
						xtype : 'displayfield',
						ref : '../amountinfo'

					}],
			selModel : this.selModel3,
			columns : [new Ext.grid.RowNumberer(), this.selModel3, {
						dataIndex : 'ebeln',
						header : '采购订单号',
						width : 90
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号',
						width : 90
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width : 100
					}, {
						dataIndex : 'txz01',
						header : '物料描述',
						width : 100
					}, {
						dataIndex : 'amount',
						header : '待送货数量',
						width : 80
					},{
						dataIndex : 'maxamount',
						header : '最大送货数量',
						width : 80
					//	hidden : true
					}, {
						dataIndex : 'sendamount',
						header : '本次送货数量',
						width : 90,
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									allowNegative : false,
									minValue : 1,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										// 'focus' : function() {
										// var list = Ext.getCmp(listid);
										// var rec = list.getSelectionModel()
										// .getSelections();
										// this.amount = rec[0].get("amount");
										// },
										'change' : function(o, newValue,
												oldValue) {
											var maxamount = _this.maxamount;
											if (newValue > maxamount) {
												o.setValue(maxamount);
											}
										}
									}
								}))
					}, {
						dataIndex : 'meins',
						header : '计量单位',
						width : 60
					}, {
						dataIndex : 'knttp',
						header : '科目分配类别',
						width : 70
					}, {
						dataIndex : 'lgort',
						header : '库存地点',
						width : 70,
						renderer : function(v, m, r, i) {
							if (v == 0) {
								return "";
							} else {
								return v;
							}
						}
					}, 
					//	{
					//	dataIndex : 'zjlb',
					//	header : '质检类别',
					//	width : 70
					//}, 
						{
						dataIndex : 'aufnr',
						hidden : true,
						header : '生产订单'
					}, {
						dataIndex : 'kostl',
						hidden : true,
						header : '成本中心'
					},{
						header : '过量交货限度',
						dataIndex : 'uebto'
					},{
						header : '批次',
						dataIndex : 'charg'
					}, {
						dataIndex : 'remark',
						header : '备注',
						width : 100,
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{}))
					},{
						header : '工厂',
						dataIndex : 'werks',
						hidden :true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryOrder4Create.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'meins'
						}, {
							name : 'amount'
						},{
							name : 'maxamount'
						}, {
							name : 'sendamount'
						}, {
							name : 'lgort'
						}, {
							name : 'remark'
						}, {
							name : 'knttp'
						}, {
							name : 'txz01'
						}, {
							name : 'aufnr'
						}, {
							name : 'kostl'
						},{
							name : 'charg'
						}, {
							name : 'uebto'
						}, {
							name : 'zjlb'
						},{
						    name : 'werks'
						}]
			})
		});

		this.popWindow = this.popWindow || new Ext.Window({
					title : "创建送货单",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					modal : true,
					width : 880,
					// height : 660,
					height : 550,
					// layout : 'form',
					layout : 'border',
					items : [this.inputPanel, this.listPanel2],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.sel = ["0|0"];
									this.selModel.clearSelections();
									this.inputPanel.form.reset();
									this.popWindow.hide();
								}
							}]

				});
	}
}