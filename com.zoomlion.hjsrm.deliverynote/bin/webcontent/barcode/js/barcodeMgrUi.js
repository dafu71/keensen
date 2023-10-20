com.zoomlion.hjsrm.deliverynote.BarcodeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initPopWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'notebarcodeMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : !Ext.isEmpty(lifnr) ? 170 : 190,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 送货单查询 】',
					fields : [{
								xtype : 'textfield',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								name : 'condition/lifnr2',
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								name : 'condition/name1',
								fieldLabel : '供应商描述'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/flag',
								dataIndex : 'condition/flag',
								hiddenName : 'condition/flag',
								fieldLabel : '是否关键件',
								dictData : GE_MATNR_SFGJJ
							},
							//{
							//	xtype : 'dictcombobox',
							//	name : 'condition/zjlb',
							//	dataIndex : 'condition/zjlb',
							//	hiddenName : 'condition/zjlb',
							//	fieldLabel : '质检类别',
							//	emptyText : '',
							//	dictData : GE_INSPECT_ZJLB
							//},
							{
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createenddate'],
								fieldLabel : "送货单创建日期",
								format : "Y-m-d"
							}, {
								xtype : 'hidden',
								name : 'condition/lifnr',
								value : lifnr,
								disabled : Ext.isEmpty(lifnr) ? true : false
							}, {
								xtype : 'hidden',
								name : 'condition/delflag',
								value : 0
							}, {
								xtype : 'hidden',
								name : 'condition/matnrnotnull',
								value : 1
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
							}, {
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

	this.initListPanel = function() {

		var url = !Ext.isEmpty(lifnr)
				? "com.zoomlion.hjsrm.deliverynote.delivery.queryNote4Delete.biz.ext"
				: "com.zoomlion.hjsrm.deliverynote.delivery.queryAllNoteDetails.biz.ext";
		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({

		});
		this.listPanel = new Ext.fn.ListPanel({
					title : '【 送货单列表 】',
					stripeRows : true,
					hsPage : true,
					delUrl : '....biz.ext',
					selModel : this.selModel,
					tbar : [{
								text : '确认',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onCreate
							}],
					// autoExpandColumn : '4',
					columns : [new Ext.grid.RowNumberer(), this.selModel, {
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
						dataIndex : 'createtime',
						header : '送货单创建日期',
						width : 90,
						sortable : false
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
								return "<span>" + "★" + v + "</span>";
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'amount',
						header : '送货数量'
					}, {
						header : '计量单位',
						dataIndex : 'meins'
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
						header : '供应商帐号',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						header : '关键件标志',
						dataIndex : 'flag',
						hidden : true
					}
					//, {
					//	header : '质检类别',
					//	dataIndex : 'zjlb'
					//}
					],
					store : new Ext.data.JsonStore({
								url : url,
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
											name : 'createtime'
										}, {
											name : 'zjlb'
										}, {
											name : 'flag'
										}]
							})
				});
	}

	this.initPopWindow = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel2 = new Ext.fn.EditListPanel({
			title : '生成条码列表',
			subAll : true,
			hsPage : false,
			// autoHeight : true,
			// autoWidth : true,
			autoScroll : true,
			height : 300,
			width : 760,
			delUrl : "....biz.ext",
			// autoExpandColumn : '6',
			clicksToEdit : 1,
			viewConfig : {
				forceFit : true
			},

			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : '供应商帐号',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						dataIndex : 'createtime',
						header : '送货单创建日期',
						width : 90,
						sortable : false
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width : 180
					}, {
						dataIndex : 'maktx',
						header : '物料描述',
						width : 250,
						renderer : function(v, m, r, i) {
							var flag = r.get("flag");
							if (flag == "1") {
								return "<span>" + "★" + v + "</span>";
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'amount',
						header : '送货数量'
					}, {
						dataIndex : 'codeamount',
						header : '条码数量',
						width : 70,
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									allowNegative : false,
									allowDecimals : false,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))
					}, {
						dataIndex : 'meins',
						header : '计量单位',
						width : 60
					}
					//, {
					//	dataIndex : 'zjlb',
					//	header : '质检类别',
					//	width : 60
					//}
					, {
						dataIndex : 'printNum',
						header : '打印次数',
						width : 80
					}, {
						dataIndex : 'flag',
						header : '是否为关键件',
						hidden : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryNotes4Barcode.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						}, {
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'meins'
						}, {
							name : 'amount'
						}, {
							name : 'codeamount'
						}, {
							name : 'name1'
						}, {
							name : 'createtime'
						}, {
							name : 'printNum'
						}, {
							name : 'zjlb'
						}, {
							name : 'flag'
						}]
			})
		});
		this.listPanel3 = new Ext.fn.InputPanel({
					height : 70,
					width : 760,
					columns : 3,
					border : true,
					//title : '打印说明：', 
					saveUrl : '...',
					fields : [{
								xtype : 'radiogroup',
								name : 'tmlxType',
								allowBlank : false,
								colspan : 3,
								fieldLabel : '条码类型',
								items : [{
									boxLabel : '203dpi机型',
									name : 'tmlx',
									inputValue : 1
										//checked : true
									}, {
									boxLabel : '300dpi机型',
									name : 'tmlx',
									inputValue : 2
								}]
							},{
								 	xtype : 'displayfield',
								 	fieldLabel : '备注',
								 	colspan : 3,
								 	style:'color:red',
						            value : '请选择正确的打印机型 ' +
										'例：ZEBAR GK888t、GT830等中低端机型，请选择203dpi机型打印；' +
										'ZEBAR ZT210等中高端机型，请选择300dpi机型打印。' +
										'打印条码范例见图,' +
										'如有疑问请联系技术支持：黄平 0731-89939039'
							}]
				});
		this.listPanel4 = new Ext.fn.InputPanel({
					height : 160,
					width : 760,
					border : true,
					//title : '打印说明：', 
					saveUrl : '...',
					html :  ' <div><img border="0" width="760" height="160" src="frame/ui/img/tmdytp.png" /></div'
				});

		this.popWindow = this.popWindow || new Ext.Window({
			title : "生成条码",
			resizable : true,
			minimizable : false,
			maximizable : true,
			closeAction : "hide",
			buttonAlign : "center",
			autoScroll : true,
			width : 800,
			height : 600,
			layout : 'form',
			draggable : false,
			constrain : true,
			hasvcode : true,
			remoteIP : "",
			redirect : true,
			modal : true,
			items : [this.listPanel2, this.listPanel3,this.listPanel4],
			buttons : [{
						text : "打印",
						scope : this,
						handler : this.onBarcode
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.popWindow.hide();
						}
					}]

		});

	}
}