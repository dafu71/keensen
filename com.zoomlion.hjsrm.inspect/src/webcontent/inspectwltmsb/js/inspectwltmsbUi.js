/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 物料条码识别 创建日期： 2015-06-23 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.inspect.Inspectwltmsbmgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();	
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					title : '物料条码识别',
					renderTo : 'inspectwltmsbemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}
	this.initQueryPanel = function() {
		this.wltm = Ext.id();
		this.queryPanel = new Ext.fn.QueryPanel({
			height : 105,
			columns : 3,
			border : true,
			title : '【 物料条码查询 】',

			/*
			 * keys : [{ key : 13, fn : function() {
			 * document.getElementById("enter").click();
			 * document.getElementById("reset").click(); }, scope : this }],
			 */
			fields : [{
						xtype : 'textfield',
						name : 'condition/wltm',
						allowBlank : false,
						id : this.wltm,
						fieldLabel : '物料条码',
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									document.getElementById("enter").click();
									document.getElementById("reset").click();
								}

							}
						}
					}],
			buildButtons : function() {
				this.buttons = [{
					text : "查询",
					ref : "../queryButton",
					id : "enter",
					iconCls : "icon-application_form_magnify",
					scope : this,
					handler : function() {
						var A = this.getForm().getValues();
						var fs = Ext.lib.Ajax
								.serializeForm(this.getForm().el.dom);
						if (this.form.isValid()) {
							this.fireEvent("query", this, A)
						}
					}
				}, {
					text : "重置",
					ref : "../restButton",
					id : "reset",
					iconCls : "icon-application_reset",
					scope : this,
					handler : function() {
						var A = this.getForm().getValues();
						var B = this.fireEvent("reset", this, A);
						if (B) {
							this.getForm().reset();
							var sdname = "";
							var sdvalue = "";
							Ext.each(this.findByType("datefield"),
									function(dfd) {
										if (dfd.name.indexOf("/startDate") > -1) {
											sdname = dfd.name;
											sdname = sdname.substring(0, sdname
															.indexOf("/")
															+ 1);
											sdvalue = dfd.value;
										}
										if (dfd.name
												.indexOf(sdname + "endDate") > -1) {
											dfd.setMinValue(sdvalue);
										}
									});
						}
					}
				}]
			}

		});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel
				|| new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 物料条码查询结果列表 】',
			hsPage : true,
			selModel : this.selModel,
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'txz01',
						header : '物料描述',
						width : 250
					},  {
						dataIndex : 'lifnr',
						header : '供应商编码'
					}, {
						dataIndex : 'name1',
						header : '供应商名称'
					},{
						dataIndex : 'createtime',
						header : '送货日期',
						width : 180
					},{
						dataIndex : 'zjlb',
						header : '质检类别'
					},{
						dataIndex : 'zjtranu',
						header : '检验员'
					},{
						dataIndex : 'zjtrant',
						header : '检验时间'
					},{
						dataIndex : 'recordid',
						header : '检验记录号'
					},{
						xtype : 'dictcolumn',
						dictData : GE_INSPECT_JGPD,
						dataIndex : 'jgpd',
						header : '质检结果'
					},{
						xtype : 'dictcolumn',
						dictData : GE_INSPECT_ZCBZ,
						dataIndex : 'zcbz',
						header : '质检状态'
					},{
						dataIndex : 'zasnh',
						header : '送货单号'
					},{
						dataIndex : 'zasnp',
						header : '行号'
					},{
						dataIndex : 'shsl',
						header : '送货数量'
					},{
						dataIndex : 'ekgrp',
						header : '采购员'
					}, {
						dataIndex : 'ebeln',
						header : '采购订单号'
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号'
					}, {
						dataIndex : 'aedat',
						header : '订单发布时期'
					}, {
						dataIndex : 'zeinr',
						header : '工艺属性'
					}],

			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectwltmsb.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'matnr'
						}, {
							name : 'txz01'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'createtime'
						}, {
							name : 'zjlb'
						}, {
							name : 'zjtranu'
						}, {
							name : 'zjtrant'
						}, {
							name : 'recordid'
						}, {
							name : 'jgpd'
						}, {
							name : 'zasnh'
						}, {
							name : 'zasnp'
						}, {
							name : 'shsl'
						}, {
							name : 'ekgrp'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'aedat'
						}, {
							name : 'zeinr'
						}, {
							name : 'zcbz'
						}]
			})
		});
	}
}