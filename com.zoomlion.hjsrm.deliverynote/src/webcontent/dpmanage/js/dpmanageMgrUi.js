com.zoomlion.hjsrm.deliverynote.DpmanageMgr = function() {
	this.initPanel = function() {
		//this.curwerks = '3000';//当前工厂
		this.initStorevnbm();
		this.isChassis = false;
		this.sel = ["0|0"];
		this.amount = 0;	
		this.initQueryPanel();
		this.initListPanel();
		this.initListPanel3();
		this.initPopWindow();
		this.initVnWindow();
		this.initVnDetailWindow();
		this.initQueryPanel2();
		this.initQueryPanel3();
		this.initListNotePanel();
		this.initCreatePanel();
		this.initDelPanel();
		this.initVnpanel();
		this.initMainPanel();
		this.buildExcelUploadWin();

		return new Ext.fn.fnLayOut({
			layout : 'fit',
			border : false,
			renderTo : 'dpnotemanageMgr',
			panels : [this.mainPanel]
				// panels : [this.queryPanel, this.listPanel]
			});
	}
	
	
	this.initMainPanel = function() {
		this.mainPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.createPanel, this.delPanel, this.vnPanel]
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
					title : "底盘送货单创建",
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
					title : "底盘送货单删除",
					layout : 'fit',
					items : [this.content2]
				})
	};
	this.initVnpanel = function() {
        this.content3 = new Ext.Panel({
					layout : "fit",
					items : [new Ext.Container({
								layout : "border",
								items : [this.queryPanel3,this.listPanel3]
							})]
				});
				
		this.vnPanel = new Ext.Panel({
					title : "底盘vn号维护",
					layout : 'fit',
					items : [this.content3]
				})
	};
	this.initStorevnbm = function() {
		this.storevnbm = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.deliverynote.delivery.querystorevnbm.biz.ext',
			root : 'data',
			fields : [{
						name : 'vnbm'
					}]
		})
	};
	this.initQueryPanel3 = function() {
		this.queryPanel3 = new Ext.fn.QueryPanel({
					height : 170,
					region : "north",
					columns : 3,
					border : true,
					collapsible : true,
					title : '【 底盘带vn号送货单查询 】',
					fields : [{
								xtype : 'factorycombobox',
								ref : '../werks',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							},  {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createenddate'],
								fieldLabel : "送货单创建日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/vnm',
								fieldLabel : 'VN码'
							},{
								xtype : 'hidden',
								name : 'condition/lifnr',
								value : lifnr,
								disabled : Ext.isEmpty(lifnr) ? true : false
							},{
								xtype : 'textarea',
								height : '50',
								ref : "../zasnh2",
								name : 'condition/zasnh2',
								fieldLabel : '送货单号'
							}, {
								xtype : 'hidden',
								ref : "../zasnh",
								name : 'condition/zasnh'
							}]
				});
	}
	
this.initListPanel3 = function() {
		this.selModel3 = this.selModel3 || new Ext.grid.CheckboxSelectionModel({
				// singleSelect : true,
				// header : ''
				});
		this.listPanel3 = new Ext.fn.ListPanel({
			title : '【 底盘带vn号送货单列表 】',
			region : "center",
			hsPage : true,
			selModel : this.selModel3,
			delUrl : '...',
			tbar : [{
						text : 'VN码维护',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					},{
						text : '模板下载',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.vnexport
					},{
						text : '导入',
						scope : this,
						iconCls : 'icon-application_excel',
						hidden : lifnr == '0000003450',//3450无权导入
						handler : this.vnimport
					}],
			//autoExpandColumn : '8',
			columns : [new Ext.grid.RowNumberer(), this.selModel3, {
						dataIndex : 'zasnh',
						header : '送货单号',
						width : 120,
						sortable : false
					}, {
						header : '底盘总数',
						dataIndex : 'sumvn'
					}, {
						header : '录入vn数',
						dataIndex : 'vns'
					}, {
						header : '预计到货日期',
						dataIndex : 'arrivedate'
					}, {
						header : '供应商帐号',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1',
						width : 300
					}, {
						header : '库存地点',
						dataIndex : 'lgort'
					}/*, {
						header : '库存地点描述',
						dataIndex : 'lgort2'
					}*/, {
						header : '创建人',
						dataIndex : 'createby'
					}, {
						header : '创建时间',
						dataIndex : 'createtime'
					}, {
						header : '是否被确认',
						dataIndex : 'status',
						hidden:true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryvnNotes.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'zasnh'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'lgort'
						}, {
							name : 'lgort2'
						}, {
							name : 'createby'
						}, {
							name : 'createtime'
						}, {
							name : 'arrivedate'
						}, {
							name : 'print'
						}, {
							name : 'sumvn'
						}, {
							name : 'vns'
						}, {
							name : 'status'
						}]
			})
		});
	}
	
	this.initQueryPanel2 = function() {
		this.queryPanel2 = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					region : "north",
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 底盘送货单查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/zasnh',
								fieldLabel : '底盘送货单号'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createendate'],
								fieldLabel : "采购订单发布日期",
								format : "Y-m-d"
							}]
				});
	}

	this.initListNotePanel = function() {
		this.selModel2 = new Ext.grid.CheckboxSelectionModel({});
		this.listNotePanel = new Ext.fn.ListPanel({
			title : '【 底盘送货单列表 】',
			region : "center",
			hsPage : true,
			selModel : this.selModel2,
			delUrl : 'com.zoomlion.hjsrm.deliverynote.delivery.deleteVnNoteDetails.biz.ext',
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelNote
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel2, {
				dataIndex : 'zasnh',
				header : '底盘送货单号',
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
				header : '底盘送货单行号',
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
				dataIndex : 'vnbm',
				header : 'VN号',
				sortable : false
			},{
				dataIndex : 'vnid',
				header : 'vnid',
				hidden : true
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
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryVnNote4Delete.biz.ext',
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
						}, {
							name : 'vnbm'
						}, {
							name : 'vnid'
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
								format : "Y-m-d"
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
				|| new Ext.grid.CheckboxSelectionModel({
				singleSelect :true,
				header :''});
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
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryVnOrders.biz.ext',
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

		this.selModel4 = this.selModel4
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
			/*tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelSelected
					}, '->', {
						xtype : 'displayfield',
						ref : '../amountinfo'

					}],*/
			selModel : this.selModel4,
			columns : [new Ext.grid.RowNumberer(), this.selModel4, {
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
									decimalPrecision : 0,
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
											var list = Ext.getCmp(listid);
										    var rec = list.getSelectionModel().getSelections();
										    this.amount = rec[0].get("amount");		
											var maxamount = this.amount;
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
					title : "创建底盘送货单",
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
									this.selModel4.clearSelections();
									this.inputPanel.form.reset();
									this.popWindow.hide();
								}
							}]

				});
	}
	this.initVnWindow = function() {
		var _this = this;
		this.focus = Ext.id();
		this.editvnpanel = new Ext.fn.EditListPanel({
					//title : '【 VN号维护列表 】',
					clicksToEdit : 1,
					hsPage : false,
				    tbar : [{
						text : '导入',
						scope : this,
						hidden:true,
						id:this.focus,
						iconCls : 'icon-application_excel',
						handler : this.onDelSelected
					}],
					delUrl : '....biz.ext',
					// autoExpandColumn : '4',
					columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'zasnh',
						header : '送货单号',
						width : 120,
						sortable : false
					}, {
						dataIndex : 'zasnp',
						header : '送货单行号',
						width : 80
					},{
						dataIndex : 'vnbm',
						header : 'VN编码',
						width : 150,
						sortable : true,
						css : 'background:#c7c7c7;',
                       /* editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
								name : 'vnbm',						
							     vtype : 'unique',
							     vtypeText : '该编码已存在',
							     tablename:'genl_vn_coincident'								
								}))*/
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox({
								allowBlank : false,
								triggerAction : "all",
								selectOnFocus :true,
								lazyRender : true,
								store : this.storevnbm,
								name : "vnbm",
								mode : "local",
								anchor : '100%',
								editable : true,
								typeAhead : true,
								displayField : "vnbm",
								valueField : "vnbm",
								//checkname:'checkname',//校验字段
								//checkvalue:'',//校验值
								vtype : 'unique',
							    vtypeText : '该编码已存在',
							    tablename:'genl_vn_coincident',
								forceSelection : true,
								listeners : {
							scope : this,
							'beforequery' : function(e) {
								
								var combo = e.combo;
								//combo.checkvalue = _this.curwerks + '|' + e.query;
								if (!e.forceAll) {
									var value = e.query;
									combo.store.filterBy(function(record) {
												var text = record
														.get(combo.displayField);
												return (text.indexOf(value) != -1);
											});
									combo.expand();
									return false;
								}
							}
						}

							}))
					}, {
						dataIndex : 'ebeln',
						header : '采购订单号',
						width : 120,
						sortable : false
					}, {
						dataIndex : 'ebelp',
						width : 80,
						header : '采购订单行号'
					}, {
						dataIndex : 'aedat',
						header : '发布日期'
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width : 180
					}, {
						dataIndex : 'txz01',
						header : '物料描述',
						width : 250,
						renderer : function(v, m, r, i) {
							var flag = r.get("flag");
							if (flag == "1") {
								return "<span>"
										+"★"+ v + "</span>";
							} else {
								return v;
							}
						}
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
						header : '生产订单号',
						dataIndex : 'aufnr'
					}, {
						header : '成本中心',
						dataIndex : 'kostl'
					}, {
						header : '关键件标志',
						dataIndex : 'flag',
						hidden : true
					}, {
						header : 'vnid',
						dataIndex : 'vnid',
						hidden : true
					}],
					store : new Ext.data.JsonStore({
								url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryvndetail.biz.ext',
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
											name : 'flag'
										}, {
											name : 'vnbm'
										}, {
											name : 'vnid'
										}]
							})
				});

		this.vnWindow = this.vnWindow || new Ext.Window({
					title : "VN号维护",
					resizable : true,
					minimizable : false,
					maximizable : true,
					zasnh : "",// 自定义属性，保存送货单编号
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 800,
					height : 600,
					layout : 'fit',
					items : [this.editvnpanel],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSavevndetail
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									// this.sel = ["0|0"];
									this.vnWindow.hide();
								}
							}]

				});

	}
	this.initVnDetailWindow = function() {
		this.listvnpanel = new Ext.fn.EditListPanel({
					//title : '【 VN号维护列表 】',
					hsPage : false,			
					delUrl : '....biz.ext',
					// autoExpandColumn : '4',
					columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'zasnh',
						header : '送货单号',
						width : 120,
						sortable : false
					}, {
						dataIndex : 'zasnp',
						header : '送货单行号',
						width : 80
					},{
						dataIndex : 'vnbm',
						header : 'VN编码',
						width : 150,
						sortable : true		
					}, {
						dataIndex : 'ebeln',
						header : '采购订单号',
						width : 120,
						sortable : false
					}, {
						dataIndex : 'ebelp',
						width : 80,
						header : '采购订单行号'
					}, {
						dataIndex : 'aedat',
						header : '发布日期'
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width : 180
					}, {
						dataIndex : 'txz01',
						header : '物料描述',
						width : 250,
						renderer : function(v, m, r, i) {
							var flag = r.get("flag");
							if (flag == "1") {
								return "<span>"
										+"★"+ v + "</span>";
							} else {
								return v;
							}
						}
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
						header : '生产订单号',
						dataIndex : 'aufnr'
					}, {
						header : '成本中心',
						dataIndex : 'kostl'
					}, {
						header : '关键件标志',
						dataIndex : 'flag',
						hidden : true
					}, {
						header : 'vnid',
						dataIndex : 'vnid',
						hidden : true
					}],
					store : new Ext.data.JsonStore({
								url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryvndetail.biz.ext',
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
											name : 'flag'
										}, {
											name : 'vnbm'
										}, {
											name : 'vnid'
										}]
							})
				});

		this.vnDetailWindow = this.vnDetailWindow || new Ext.Window({
					title : "VN号查看",
					resizable : true,
					minimizable : false,
					maximizable : true,
					zasnh : "",// 自定义属性，保存送货单编号
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 800,
					height : 600,
					layout : 'fit',
					items : [this.listvnpanel],
					buttons : [ {
								text : "关闭",
								scope : this,
								handler : function() {
									// this.sel = ["0|0"];
									this.vnDetailWindow.hide();
								}
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
						saveUrl : 'com.zoomlion.hjsrm.deliverynote.uploadVnbmlifnr.flow',
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