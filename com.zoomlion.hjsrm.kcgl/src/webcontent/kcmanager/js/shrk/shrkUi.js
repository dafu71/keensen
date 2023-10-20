/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购收货入库管理下收货入库界面 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.ShrkMgr = function() {
	this.initPanel = function() {
		this.initshrkQueryPanel();
		this.amount = 0;
		this.initshrkListPanel();
		this.initshrkEditPanel();
		this.initshrktwoPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					title : '收货入库',
					panels : [this.shrktwoPanel, this.shrklistPanel]
				});
	}
	this.initshrktwoPanel = function() {
		this.shrktwoPanel = new Ext.Panel({
					height : 220,
					layout : 'form',
					items : [this.shrkqueryPanel, this.shrkeditPanel]
				})
	};
	this.initshrkEditPanel = function() {
		this.budat = Ext.id();
		this.bldat = Ext.id();
		this.zasnh1 = Ext.id();
		this.bgtxt = Ext.id();
		this.sfdpvn = Ext.id();
		this.werks = Ext.id();   //add by hw_zj 20170801
		this.shrkeditPanel = new Ext.fn.EditPanel({
			columns : 3,
			loadUrl : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.getkcglshrk.biz.ext',
			saveUrl : '...',
			title : '【 收货入库抬头 】',
			fields : [{
						xtype : 'textfield',
						name : 'zasnh',
						readOnly : true,
						id : this.zasnh1,
						fieldLabel : '送货单号',
						columns : 1
					}, {
						xtype : 'textfield',
						name : 'lifnr',
						readOnly : true,
						fieldLabel : '供应商',
						columns : 1
					}, {
						xtype : 'textfield',
						name : 'name1',
						readOnly : true,
						fieldLabel : '供应商描述',
						columns : 1
					},{
						xtype : 'textfield',
						readOnly : true,
						name : 'arrivedate',
						fieldLabel : '预计到货时间',
						colspan : 1,
						format : "Y-m-d"
					}, {
						xtype : 'datetimefield',
						name : 'noticetime',
						fieldLabel : '过账日期',
						id : this.budat,
						allowBlank : false,
						colspan : 1,
						format : 'Y-m-d ',
						value : sysdate
						//value : new Date()
					}, {
						xtype : 'datetimefield',
						name : 'noticetime',
						fieldLabel : '凭证日期',
						id : this.bldat,
						allowBlank : false,
						colspan : 1,
						format : 'Y-m-d ',
						value : sysdate
						//value : new Date()
					},{
						xtype : 'textfield',
						name : 'bgtxt',
						id : this.bgtxt,
						fieldLabel : '凭证抬头文本',
						maxLength : 24,
						colspan : 1
					},{
						xtype : 'textfield',
						name : 'sfdpvn',
						id:this.sfdpvn,
						hidden : true,
						fieldLabel : '是否启用底盘vn',
						colspan : 1
					},{
						xtype : 'textfield',
						name : 'werks',
						fieldLabel : '工厂',
						id : this.werks,
						colspan : 1
					}]
				/*
				 * buttons : [{ text : '保存', scope : this, handler :
				 * this.onSaveok }]
				 */

			})
	}

	this.initshrkQueryPanel = function() {
		this.zasnh = Ext.id();
		this.shrkqueryPanel = new Ext.fn.QueryPanel({
			height : 105,
			columns : 3,
			border : true,
			title : '【 收货入库查询 】',
			
			/*keys : [{
						key : 13,
						fn : function() {
							document.getElementById("enter").click();
							document.getElementById("reset").click();
						},
						scope : this
					}],*/
			fields : [{
						xtype : 'textfield',
						name : 'query/zasnh',
						allowBlank : false,
						id : this.zasnh,
						fieldLabel : '送货单号',
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

	this.initshrkListPanel = function() {
		this.ebeln = Ext.id();
		this.ebelp = Ext.id();
		this.menge = Ext.id();
		this.lgort = Ext.id();
		this.zquerb = Ext.id();
	    this.msg = Ext.id();
		this.amount = 0;
		this.rec = {};
		this.selModel = this.selModel
				|| new Ext.grid.CheckboxSelectionModel({});
		this.shrklistPanel = new Ext.fn.EditListPanel({
			title : '【 收货入库列表 】',
			height : 375,
			id : list1id,
			hsPage : true,
			tbar : [{
						text : '过账',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveok
					},'->',
					   {
						xtype : 'displayfield',
						name : 'msg',
						style:'color:red',
						width:400,
						id:msgxx
					}],
			selModel : this.selModel,
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'zasnh',
						header : '送货单号',
						hidden : true
					}, {
						dataIndex : 'pkid',
						header : '主键',
						hidden : true
					}, {
						dataIndex : 'zasnp',
						header : '行号'
					}, {
						dataIndex : 'ebeln',
						id : this.ebeln,
						header : '采购订单号'
					}, {
						dataIndex : 'ebelp',
						id : this.ebelp,
						header : '采购订单行号'
					}, {
						dataIndex : 'werks',
						header : '工厂'
					},{
						dataIndex : 'matnr',
						header : '物料编码'
					}, {
						dataIndex : 'txz01',
						header : '物料描述'
					}, {
						dataIndex : 'vnbm',
						header : 'VN编码'
					}, {
						dataIndex : 'menge_m',
						id : this.menge,
						header : '采购订单数量'
					}, {
						dataIndex : 'amount',
						header : '送货数量'
					}, {
						dataIndex : 'mengezj',
						header : '可入库数量'
					},{
						dataIndex : 'menge',
						header : '实际入库数量',
						width : 100,
						allowBlank : false,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision : 2,
									allowNegative : false,
									listeners : {
										'focus' : function() {
											var list = Ext.getCmp(list1id);
											var rec = list.getSelectionModel()
													.getSelections();

											this.amount = rec[0].get("mengezj");

										},
										'change' : function(o, newValue,
												oldValue) {

											var amount = this.amount;
											if (newValue > amount) {
												o.setValue(amount);
											}

										},
										'specialkey' : function(field, e) {
											return false
										}
									}

								}))
					},{
						dataIndex : 'return_amount',
						header : '检退数量',
						id : this.zquerb,
						width : 100,
						renderer : function(v, m, r, i) {
							var amounta = r.get('menge');
							var amountb = r.get('amount');
							var t = amountb - amounta;
							if (t > 0) {
								return t;
							} else {
								return 0;
							}
						}
					}, {
						dataIndex : 'lgort',
						id : this.lgort,
						header : '库存地点',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false
								}))
					},{
						dataIndex : 'sgtxt',
						header : '项目文本',
						css : 'background:#c7c7c7;',
						width:150,
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									maxLength :48
								}))
					},{
						dataIndex : 'charg',
						header : '批次',
						css : 'background:#c7c7c7;',
						width:150,
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									maxLength :10,
									listeners : {	
										'change' : function(o, newValue,
												oldValue) {
												var up = Ext.util.Format.uppercase(newValue);
												o.setValue(up);
										},
										'specialkey' : function(field, e) {
											if(e.getKey() == Ext.EventObject.ENTER){
											var up1 = Ext.util.Format.uppercase(field.getValue());
												field.setValue(up1);
											}
											if(e.getKey() == Ext.EventObject.TAB){
											var up1 = Ext.util.Format.uppercase(field.getValue());
												field.setValue(up1);
											}
										}
									}
								}))
					},{
						dataIndex : 'aufnr',
						header : '生产订单号'
					},{
						dataIndex : 'kostl',
						header : '成本中心'
					},{
						dataIndex : 'knttp',
						header : '科目分配类别'
					}],

			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.querykcglshrk.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						fields : [{
									name : 'return_amount'
								}, {
									name : 'pkid'
								}, {
									name : 'menge_m'
								}, {
									name : 'zasnh'
								}, {
									name : 'zasnp'
								}, {
									name : 'ebeln'
								}, {
									name : 'ebelp'
								}, {
									name : 'matnr'
								}, {
									name : 'txz01'
								}, {
									name : 'menge'
								}, {
									name : 'lgort'
								}, {
									name : 'amount'
								},{
									name : 'sgtxt'
								},{
									name : 'mengezj'
								},{
									name : 'aufnr'
								},{
									name : 'kostl'
								},{
									name : 'knttp'
								},{
									name : 'charg'
								},{
									name : 'werks'
								},{
									name : 'vnbm'
								}]
					})
		});
	}

}