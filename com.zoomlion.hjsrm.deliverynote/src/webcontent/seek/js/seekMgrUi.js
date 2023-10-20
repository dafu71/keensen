com.zoomlion.hjsrm.deliverynote.SeekMgr = function() {
	this.initPanel = function() {
		this.isChassis = false;
		this.initQueryPanel();
		this.initListNotePanel();
		// this.initContent();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'noteseekMgr',
					panels : [this.queryPanel, this.listNotePanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : !Ext.isEmpty(lifnr) ? 190 : 220,
					columns : 3,
					// region : 'north',
					collapsible : true,
					titleCollapse : false,
					border : true,
					title : '【 送货单查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createenddate'],
								fieldLabel : "送货单创建日期",
								format : "Y-m-d",
								allowBlank:false
							}, {
								xtype : 'textfield',
								name : 'condition/zasnh',
								fieldLabel : '送货单号'
							}, {
								xtype : 'textfield',
								name : 'condition/ebeln',
								fieldLabel : '采购订单号'
							}, {
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
								xtype : 'textfield',
								name : 'condition/txz01',
								fieldLabel : '物料编码描述'
							}, {
								xtype : 'textfield',
								name : 'condition/vnbm',
								fieldLabel : 'VN编码'
							}
							// , {
							// xtype : 'dictcombobox',
							// name : 'condition/zjlb',
							// dataIndex : 'condition/zjlb',
							// hiddenName : 'condition/zjlb',
							// fieldLabel : '质检类别',
							// emptyText : '',
							// dictData : GE_INSPECT_ZJLB
							// }
							, {
								xtype : 'combobox',
								name : 'condition/sfbl',
								hiddenName : 'condition/sfbl',
								ref : '../sfbl',
								fieldLabel : '是否办理',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
									        id: 0,
											fields : ['sfblid', 'sfblname'],
											data : [['<','未办理'], ['>=','已办理']]
										}),
								mode : "local",
								editable:false,
								displayField : "sfblname",
								valueField : "sfblid",
								forceSelection : true,
								emptyText : "请选择"
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/arrivestartdate',
										'condition/arriveendate'],
								fieldLabel : "预计到货日期",
								format : "Y-m-d"
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
							}]
				});
	}

	this.initListNotePanel = function() {
		this.selModel2 = new Ext.grid.CheckboxSelectionModel({});
		var _this = this;
		var url = !Ext.isEmpty(lifnr)
				? "com.zoomlion.hjsrm.deliverynote.delivery.queryNote4Delete.biz.ext"
				: "com.zoomlion.hjsrm.deliverynote.delivery.queryAllNoteDetails.biz.ext";
		this.listNotePanel = new Ext.fn.ListPanel({
			title : '【 送货单列表 】',
			hsPage : true,
			tbar : [{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			selModel : this.selModel2,
			// region : 'center',
			delUrl : 'com.zoomlion.hjsrm.deliverynote.delivery.deleteNoteDetails.biz.ext',
			// autoExpandColumn : '4',
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
				header : '物料编码'
			}, {
				dataIndex : 'txz01',
				header : '物料描述'
			},{
				dataIndex : 'vnbm',
				header : 'VN编码'
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
				header : '预计到货日期',
				dataIndex : 'arrivedate'
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
				header : '过量交货限度',
				dataIndex : 'uebto'
			}, {
				header : '批次',
				dataIndex : 'charg'
			}
					// , {
					// header : '质检类别',
					// dataIndex : 'zjlb'
					// }
					, {
						header : '打印次数',
						dataIndex : 'print',
						renderer : function(v, m, r, i) {
							return v - 1
						}
					}, {
						header : '备注',
						dataIndex : 'status',
						renderer : function(v, m, r, i) {
							if (_this.isChassis) {// 当前用户是底盘供应商
								if (v == "Y") {
									return "已确认，可以打印";
								} else {
									return "未确认，不可打印";
								}
							} else {
								return "";
							}
						}
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
									name : 'print'
								}, {
									name : 'status'
								}, {
									name : 'arrivedate'
								}, {
									name : 'charg'
								}, {
									name : 'uebto'
								}, {
									name : 'zjlb'
								}, {
									name : 'vnbm'
								}]
					})
		});
	}

	/*
	 * this.initContent = function() { this.content = new Ext.Panel({
	 * layout:"fit", items : [new Ext.Container({ layout : "border", items :
	 * [this.queryPanel, this.listNotePanel] })] }) }
	 */

}