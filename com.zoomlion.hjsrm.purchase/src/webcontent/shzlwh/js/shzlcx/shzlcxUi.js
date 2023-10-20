/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 送货指令查询 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchase.shzlcxMgr = function() {
	this.initPanel = function() {
		this.initshzlcxQueryPanel();
		this.initshzlcxListPanel();
		return new Ext.fn.fnLayOut({
					title : '送货指令查询',
					layout : 'ns',
					border : false,
					panels : [this.shzlcxqueryPanel, this.shzlcxlistPanel]
				});
	}

	this.initshzlcxQueryPanel = function() {
		this.shzlcxqueryPanel = new Ext.fn.QueryPanel({
					height : 208,
					width : 500,
					columns : 3,
					border : true,
					title : '【 送货指令查询 】',
					fields : [{
								xtype : 'companycombobox',
								defaultValue : '3000',
								name : 'query/bukrs',
								fieldLabel : '公司',
								dataIndex : 'query/bukrs',
								hiddenName : 'query/bukrs'
							}, {
								xtype : 'factorycombobox',
								defaultValue : '3000',
								name : 'query/werks',
								fieldLabel : '工厂',
								dataIndex : 'query/werks',
								hiddenName : 'query/werks'
							}, {
								xtype : 'textfield',
								name : 'query/zshso',
								fieldLabel : '送货指令号'
							}, {
								xtype : 'textarea',
								height : '50',
								ref : "../matnr2",
								name : 'query/matnr2',
								fieldLabel : '物料编码'
							}, {
								xtype : 'hidden',
								ref : "../matnr",
								name : 'query/matnr'
							}, {
								xtype : 'textfield',
								name : 'query/maktx',
								fieldLabel : '物料编码描述'
							}, {
								xtype : 'textfield',
								name : 'query/lifnr',
								fieldLabel : '供应商帐号'
							}, {
								xtype : 'textfield',
								name : 'query/name1',
								fieldLabel : '供应商名称'
							}, {
								xtype : 'ekorgcombobox',
								name : 'query/ekorg',
								fieldLabel : '采购组织',
								dataIndex : 'query/ekorg',
								hiddenName : 'query/ekorg'
							}, {
								xtype : 'ekgrpcombobox',
								name : 'query/ekgrp',
								fieldLabel : '采购组',
								dataIndex : 'query/ekgrp',
								hiddenName : 'query/ekgrp'
							}, {
								xtype : "dateregion2",
								allowBlank : false,
								name : "entitya",
								fieldLabel : "交货日期",
								value1:new Date,
								value2:now,
								format : "Y-m-d"
							}, {
								xtype : "dateregion",
								name : "entityb",
								fieldLabel : "创建日期",
								format : "Y-m-d"
							}]
				});
	}

	this.initshzlcxListPanel = function() {
		var _this = this;
		this.amount = 0;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.shzlcxlistPanel = new Ext.fn.EditListPanel({
			title : '【 送货指令列表 】',
			id : listid,
			clicksToEdit : 1,
			subAll : true,
			hsPage : true,
			tbar : [{
						text : '保存',
						scope : this,
						iconCls : 'icon-application_add',
						rescode : '00643',
						handler : this.onsaveok
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.ondel
					},{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
						}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂',
						hidden : true
					}, {
						dataIndex : 'zshso',
						header : '送货指令号'
					}, {
						dataIndex : 'zshso_n',
						header : '送货指令行号'
					}, {
						dataIndex : 'lifnr',
						header : '供应商帐号'
					}, {
						dataIndex : 'name1',
						header : '供应商名称'
					}, {
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'maktx',
						header : '物料描述'
					}, {
						dataIndex : 'ekgrp',
						header : '采购组'
					}, {
						dataIndex : 'ekorg',
						header : '采购组织'
					}, {
						dataIndex : 'menge',
						header : '送货数量',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{}))
					}, {
						dataIndex : 'zdate',
						header : '交货日期',
						sortable : true,
						format : "Y-m-d",
						//css : 'background:#c7c7c7;',
						/*editor : new Ext.grid.GridEditor(new Ext.form.DateField(
								{	listeners : {
										'focus' : function() {
											var list = Ext.getCmp(listid);
											var rec = list.getSelectionModel()
													.getSelections();
											this.amount = rec[0].get("zdate");
										},
										'select' : function(o, newValue
												) {
											
											var amount = this.amount;
											if (Ext.isEmpty(newValue)) {
												o.setValue(amount);
											}

										},
										'specialkey':function(field,e){
										return false
										}

									},
									format : "Y-m-d",
									editable:false
								})),*/
						renderer : function(value) {  
						  if(value instanceof Date){
						  	return new Date(value).format("Y-m-d");
						  }else{
						  	var regEx = new RegExp("\\-","gi");
						  	var temp = value.split('.')[0];
						  	var v = temp.replace(regEx,"-");
						  	value = v.substring(0,10);
						  	return value;
						  	}
						  	}

					}, {
						dataIndex : 'ztext',
						header : '备注信息',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{}))
					}, {
						dataIndex : 'ztext_01',
						header : '供应商反馈信息'
					}, {
						dataIndex : 'statu',
						header : '删除标记'
					}, {
						dataIndex : 'trant',
						header : '创建时间'
					}, {
						dataIndex : 'gznum',
						header : '入库数据'
					}, {
						dataIndex : 'amount',
						header : '开单量'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.purchase.shzlwh.queryshzlcx.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						fields : [{
									name : 'bukrs'
								}, {
									name : 'weaks'
								}, {
									name : 'zshso'
								}, {
									name : 'zshso_n'
								}, {
									name : 'lifnr'
								}, {
									name : 'matnr'
								}, {
									name : 'ekorg'
								}, {
									name : 'ekgrp'
								}, {
									name : 'menge'
								}, {
									name : 'zdate'
								}, {
									name : 'ztext'
								}, {
									name : 'ztext_01'
								}, {
									name : 'statu'
								}, {
									name : 'tranu'
								}, {
									name : 'trant'
								}, {
									name : 'name1'
								}, {
									name : 'txz01'
								}, {
									name : 'maktx'
								}, {
									name : 'gznum'
								}, {
									name : 'amount'
								}]
					})
		});
	}
}