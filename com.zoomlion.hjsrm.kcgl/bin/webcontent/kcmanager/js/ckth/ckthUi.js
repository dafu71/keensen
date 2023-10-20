/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购收货入库管理下仓库退货界面
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.CkthMgr = function() {
	this.initPanel = function() {
		this.initckthQueryPanel();
		this.initckthListPanel();
		this.initckthEditPanel();
		this.initckthtwoPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					title : '仓库退货',
					panels : [this.ckthtwoPanel, this.ckthlistPanel]
				});
	}
this.initckthtwoPanel = function() {
		this.ckthtwoPanel = new Ext.Panel({
		        	height : 200,
					layout : 'form',
					items : [this.ckthqueryPanel,this.cktheditPanel]
				})
	};

	this.initckthEditPanel = function() {
		this.budat = Ext.id();
		this.bldat = Ext.id();
		this.bgtxt = Ext.id();
		this.cktheditPanel = new Ext.fn.EditPanel({
			height : 100,
			columns : 2,
			loadUrl : '...',
			saveUrl : '...',
			title : '【 物料凭证抬头 】',
			fields : [{
						xtype : 'datetimefield',
						name : 'noticetime',
						fieldLabel : '过账日期',
						id : this.budat,
						allowBlank : false,
						colspan : 1,
						format : 'Y-m-d ',
						value : sysdate
						//value:new Date()
					},{
						xtype : 'datetimefield',
						name : 'noticetime',
						fieldLabel : '凭证日期',
						id : this.bldat,
						allowBlank : false,
						colspan : 1,
						format : 'Y-m-d ',
						value : sysdate
						//value:new Date()
								},{
						xtype : 'textfield',
						name : 'bgtxt',
						id : this.bgtxt,
						fieldLabel : '凭证抬头文本',
						maxLength : 24,
						colspan : 1
					}]
		/*	buttons : [{
						text : '保存',
						scope : this,
						handler : this.onSaveok
					}]*/

		})
	}
	
	this.initckthQueryPanel = function() {
		var myDate = new Date();
		this.mblnr = Ext.id();
		this.mjahr1 = Ext.id();
		this.ckthqueryPanel = new Ext.fn.QueryPanel({
					height : 105, 
					columns : 3,
					border : true,
					title : '【 物料凭证查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'query/mblnr',
								 allowBlank : false,
								id   :   this.mblnr,
								fieldLabel : '物料凭证号'
							},{
						        xtype : 'textfield',
						        name : 'query/mjahr',
						        id:   this.mjahr1,
						        allowBlank : false,
						        fieldLabel : '年度',
						        value:myDate.getFullYear()
					         }]
				});
	}

	this.initckthListPanel = function() {
		this.ebeln = Ext.id();
		this.ebelp = Ext.id();
		this.mengea = Ext.id();
		this.lgort = Ext.id();
		this.zquerb = Ext.id();
		this.amount = 0;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.ckthlistPanel = new Ext.fn.EditListPanel({
			title : '【 物料凭证列表 】',	
			height : 375,
			id : list2id,
			hsPage : true,
			tbar : [{
						text : '退货',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveok
					}],	
	 selModel : selModel,
			columns : [new Ext.grid.RowNumberer(),selModel , 
				     {
						dataIndex : 'mblnr',
						header : '物料凭证号'
					},{
						dataIndex : 'mjahr',
						header : '物料凭证年度'
					}, {
						dataIndex : 'zeile',
						header : '物料凭证行号'
					}, {
						dataIndex : 'bwart',
						header : '移动类型'
					}, {
						dataIndex : 'ebeln',
						header : '采购订单号'
					}, {
						dataIndex : 'ebelp',
						header : '采购订单行号'
					},  {
						dataIndex : 'grund',
						header : '移动原因',
						allowBlank : false,
						css : 'background:#c7c7c7;',
                        editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									 allowBlank : false,
									   typeAhead: true,
                                       triggerAction: 'all',
                                       lazyRender:true,
                                       mode: 'local',
                                       editable:false,
                                      store: new Ext.data.ArrayStore({
                                        id: 0,
                                        fields: [
                                           'myId',
                                          'displayText'
                                             ],
                                        data: [[0001, '1.质量低劣'], [0002, '2.未完成的'],[0003, '3.损坏的']]
                                          }),
                                          valueField: 'myId',
                                          displayField: 'displayText'

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
						dataIndex : 'werks',
						header : '工厂'
					},{
						dataIndex : 'matnr',
						header : '物料编码'
					},{
						dataIndex : 'txz01',
						header : '物料描述'
					},{
						dataIndex : 'vnbm',
						header : 'VN编码'
					},{
						dataIndex : 'mengea',
				        id : this.mengea,
						header : '入库数量'
					},{
						dataIndex : 'menge',
						header : '退货数量',
						width : 100,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									allowNegative : false,
									decimalPrecision :0,
								listeners : {
										'focus' : function() {
											var list = Ext.getCmp(list2id);
											var rec = list.getSelectionModel()
													.getSelections();
											this.amount = rec[0].get("mengea");
										},
										'change' : function(o, newValue,
												oldValue) {
											
											var amount = this.amount;
											if (newValue > amount) {
												o.setValue(amount);
											}

										},
										'specialkey':function(field,e){
										return false
										}

									}

								}))
					},{
						dataIndex : 'lgort',
						header : '库存地点',
						css : 'background:#c7c7c7;',
						 editor : new Ext.grid.GridEditor(new Ext.form.TextField({
                       }))
					},{
						dataIndex : 'charg',
						header : '批次',
						css : 'background:#c7c7c7;',
						 editor : new Ext.grid.GridEditor(new Ext.form.TextField({
						 	maxLength :10
                       }))
					},{
						dataIndex : 'lfbnr',
						header : '参考物料凭证'
					},{
						dataIndex : 'lfbja',
						header : '参考物料年度'
					},{
						dataIndex : 'lfpos',
						header : '参考物料行号'
					},{
						dataIndex : 'delflag',
						header : '删除标记',
						hidden : true
					},{
						dataIndex : 'aufbr',
						header : '生产订单号'
					},{
						dataIndex : 'kostl',
						header : '成本中心'
					},{
						dataIndex : 'knttp',
						header : '科目分配类别'
					},{
						dataIndex : 'sfvn',
						header : '是否启用vn号',
						renderer : function(v, m, r, i) {
					if (v == 'Y') {
						return "是";
					} else {
						return "否";
					}
				}
					},{
						dataIndex : 'mblno',
						header : 'VN序列号'
					}],
					
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.querykcglckth.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'mblnr'
						},{
							name : 'mjahr'
						},{
							name : 'zeile'
						},{
							name : 'bwart'
						},{
							name : 'ebeln'
						},{
							name : 'ebelp'
						},{
							name : 'grund'
						}, {
							name : 'matnr'
						}, {
							name : 'txz01'
						}, {
							name : 'menge'
						}, {
							name : 'mengea'
						}, {
							name : 'lgort'
						}, {
							name : 'lfbnr'
						}, {
							name : 'lfbja'
						}, {
							name : 'lfpos'
						},{
							name : 'delflag'
						},{
							name : 'sgtxt'
						},{
							name : 'aufbr'
						},{
							name : 'kostl'
						},{
							name : 'knttp'
						},{
							name : 'charg'
						},{
							name : 'werks'
						},{
							name : 'mblno'
						},{
							name : 'vnbm'
						},{
							name : 'sfvn'
						}]
			})
		});
	}
}