com.zoomlion.hjsrm.deliverynote.PrintMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();
		this.initPopWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'noteprintMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					columns : 3,
					border : true,
					collapsible : true,
					title : '【 送货单查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/vnbm',
								fieldLabel : 'VN编码'
							},{
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

	this.initListPanel = function() {
		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
				// singleSelect : true,
				// header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 送货单列表 】',
			region : "center",
			hsPage : true,
			selModel : this.selModel,
			delUrl : '...',
			tbar : [{
						text : '显示明细',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onShow
					}, {
						text : '打印',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrintBatch
					}],
			autoExpandColumn : '6',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'zasnh',
						header : '送货单号',
						width : 120,
						sortable : false
					}, {
						header : '打印次数',
						dataIndex : 'print',
						renderer : function(v, m, r, i) {
							return v - 1
						}
					}, {
						header : '预计到货日期',
						dataIndex : 'arrivedate'
					}, {
						header : '供应商帐号',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
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
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryNotes.biz.ext',
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
						}]
			})
		});
	}

	this.initPopWindow = function() {

		var url = !Ext.isEmpty(lifnr)
				? "com.zoomlion.hjsrm.deliverynote.delivery.queryNote4Delete.biz.ext"
				: "com.zoomlion.hjsrm.deliverynote.delivery.queryAllNoteDetails.biz.ext";
		this.listNotePanel = new Ext.fn.ListPanel({
					title : '【 送货单明细列表 】',
					hsPage : false,
					delUrl : '....biz.ext',
					// autoExpandColumn : '4',
					columns : [new Ext.grid.RowNumberer(), {
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
					}],
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
											name : 'flag'
										}]
							})
				});

		this.popWindow = this.popWindow || new Ext.Window({
					title : "送货单明细",
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
					items : [this.listNotePanel],
					buttons : [{
								text : "打印",
								scope : this,
								handler : this.onPrint
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									// this.sel = ["0|0"];
									this.popWindow.hide();
								}
							}]

				});

	}
}