com.zoomlion.hjsrm.purchase.ShdconfirmMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();

		this.initListPanel();
		this.initListPanel2();
		this.initPopWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'shdconfirmMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 140,
					// region : 'north',
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 查询送货单 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								value:'3000',
								anchor : '95%',
								ref : '../werks',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/zasnh',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '送货单号'
							},  {
								xtype : 'textfield',
								name : 'condition/lifnr',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '供应商'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '供应商名称'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/arrivestartdate',
										'condition/arriveendate'],
								fieldLabel : "创建日期",
								format : "Y-m-d"
							},{
								xtype : 'radiogroup',
								name : 'opt',
								anchor : '70%',
								colspan : 1,
								fieldLabel : '确认标识',
								items : [{
											boxLabel : '待确认',
											name : 'condition/statu',
											inputValue : 'N',
											checked : true
										}, {
											boxLabel : '已确认',
											name : 'condition/statu',
											inputValue : 'Y'
										}]
							}]
				});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel
				|| new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 查询列表 】',
			hsPage : true,
			selModel : this.selModel,
			// region : 'center',
			delUrl : '...',
			tbar : [{
						text : '确认',
						ref : '../btnConfirm',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirm
					}, {
						text : '撤销',
						scope : this,
						ref : '../btnRepeal',
						iconCls : 'icon-application_delete',
						handler : this.onUnConfirm
					}, {
						text : '查看',
						scope : this,
						ref : '../btnView',
						iconCls : 'icon-application_lightning',
						handler : this.onView
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						header : '供应商编码',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1',
						width:200
					}, {
						header : '送货单号',
						dataIndex : 'zasnh'
					}, {
						header : '预计到货日期',
						dataIndex : 'arrivedate'
					}, {
						header : '创建日期',
						dataIndex : 'createtime'
					}, {
						header : '删除标记',
						dataIndex : 'delflag',
						hidden:true
					},{
						header : '是否启用vn码',
						dataIndex : 'sfdpvn',
						renderer : function(v, m, r, i) {

							if (v == "Z") {
								return "<span style='color:red'>是</span>";
							} else if(v == "Y"){
								return "<span style='color:blue'>是</span>";
							}else{
								return "<span style='color:blue'>否</span>";
							}
						}
					}, {
						header : '确认标识',
						dataIndex : 'status',
						renderer : function(v, m, r, i) {

							if (v == "Y") {
								return "<span style='color:red'>已确认</span>";
							} else {
								return "<span style='color:blue'>待确认</span>";
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.purchase.shdconfirm.queryshdconfirm.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'zasnh'
						}, {
							name : 'arrivedate'
						}, {
							name : 'createtime'
						}, {
							name : 'lgort'
						}, {
							name : 'delflag'
						}, {
							name : 'werks'
						}, {
							name : 'print'
						}, {
							name : 'status'
						}, {
							name : 'sfdpvn'
						}]
			})
		});
	}

	this.initListPanel2 = function() {

		this.listPanel2 = new Ext.fn.ListPanel({
			title : '【 送货单明细列表 】',
			hsPage : false,
			delUrl : '...',

			//autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(),  {
				dataIndex : 'zasnh',
				header : '送货单号',
				width : 120,
				sortable : false
			}, {
				dataIndex : 'zasnp',
				header : '送货单行号',
				width : 80
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
				dataIndex : 'lgort'
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
				header : 'VN编码',
				dataIndex : 'vnbm'
			}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.purchase.shdconfirm.queryshd.biz.ext',
				root : 'data',
				// autoLoad : true,
				// totalProperty : 'totalCount',
				fields : [{
							name : "zasnh"
						}, {
							name : "zasnp"
						}, {
							name : "delflag"
						}, {
							name : "werks"
						}, {
							name : "print"
						}, {
							name : "ebeln"
						}, {
							name : "remark2"
						}, {
							name : "ebelp"
						}, {
							name : "aedat"
						}, {
							name : "amount"
						}, {
							name : "return_amount"
						}, {
							name : "matnr"
						}, {
							name : "txz01"
						}, {
							name : "zhwbm"
						}, {
							name : "menge"
						}, {
							name : "eindt"
						}, {
							name : "meins"
						}, {
							name : "lgort"
						}, {
							name : "lifnr"
						}, {
							name : "name1"
						}, {
							name : "pstyp"
						}, {
							name : "knttp"
						}, {
							name : "ekgrp"
						}, {
							name : "ekorg"
						}, {
							name : "aufnr"
						}, {
							name : "kostl"
						}, {
							name : "cangtui"
						}, {
							name : "ruku"
						}, {
							name : "createtime"
						}, {
							name : "vnbm"
						}]
			})
		});
	}

	this.initPopWindow = function() {
		this.popWindow = this.popWindow || new Ext.Window({
					title : "查看送货单明细",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 800,
					height : 400,
					layout : 'fit',
					items : [this.listPanel2],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.popWindow.hide();
								}
							}]

				});
	}
}
