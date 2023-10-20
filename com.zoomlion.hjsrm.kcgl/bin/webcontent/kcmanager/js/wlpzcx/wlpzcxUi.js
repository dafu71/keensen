/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购收货入库管理下物料凭证冲销界面
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.WlpzcxMgr = function() {
	this.initPanel = function() {
		this.initwlpzcxQueryPanel();
		this.initwlpzcxListPanel();
		this.initwlpzcxEditPanel();
		this.initwlpzcxtwoPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					title : '物料凭证冲销',
					panels : [this.wlpzcxtwoPanel, this.wlpzcxlistPanel]
				});
	}
this.initwlpzcxtwoPanel = function() {
		this.wlpzcxtwoPanel = new Ext.Panel({
		        	height : 200,
					layout : 'form',
					items : [this.wlpzcxqueryPanel,this.wlpzcxeditPanel]
				})
	};

	this.initwlpzcxEditPanel = function() {
		this.budat = Ext.id();
		this.bldat = Ext.id();
		this.mblnr1 = Ext.id();
		this.mjahr = Ext.id();
		this.wlpzcxeditPanel = new Ext.fn.EditPanel({
			height : 100,
			columns : 2,
			loadUrl : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.getkcglwlpzcx.biz.ext',
			saveUrl : '...',
			title : '【 物料凭证抬头 】',
			fields : [{
						xtype : 'textfield',
						name : 'mblnr',
						readOnly : true,
					    id : this.mblnr1,
						fieldLabel : '物料凭证号',
						columns : 1
					},{
						xtype : 'textfield',
						name : 'mjahr',
					    readOnly : true,
						id:   this.mjahr,
						fieldLabel : '年度',
						columns : 1
					},{
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
					}]
		/*	buttons : [{
						text : '保存',
						scope : this,
						handler : this.onSaveok
					}]*/

		})
	}
	
	this.initwlpzcxQueryPanel = function() {
		var myDate = new Date();
		this.mblnr = Ext.id();
		this.mjahr1 = Ext.id();
		this.wlpzcxqueryPanel = new Ext.fn.QueryPanel({
					height : 105, 
					columns : 3,
					border : true,
					title : '【 物料凭证查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'query/mblnr',
								id   :   this.mblnr,
								allowBlank : false,
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

	this.initwlpzcxListPanel = function() {
		this.ebeln = Ext.id();
		this.ebelp = Ext.id();
		this.menge = Ext.id();
		this.lgort = Ext.id();
		this.zquerb = Ext.id();
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.wlpzcxlistPanel = new Ext.fn.EditListPanel({
			title : '【 物料凭证列表 】',	
			height : 375,
			hsPage : true,
			tbar : [{
						text : '冲销',
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
						hidden:true,
						header : '输入移动原因',
                        editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false
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
						dataIndex : 'menge',
						id : this.menge,
						header : '数量'
					},{
						dataIndex : 'lgort',
						header : '库存地点'
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
						dataIndex : 'flag',
						header : '结算标志',
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
				url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.querykcglwlpzcx.biz.ext',
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
						    name : 'flag'
						},{
						    name : 'aufbr'
						},{
						    name : 'kostl'
						},{
						    name : 'knttp'
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