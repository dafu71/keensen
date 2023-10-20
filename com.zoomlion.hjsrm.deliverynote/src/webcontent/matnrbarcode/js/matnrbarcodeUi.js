com.zoomlion.hjsrm.deliverynote.MatnrbarcodeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'matnrbarcodeMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 130,
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 物料查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/matnr',
								ref : '../matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/maktx',
								ref : '../maktx',
								fieldLabel : '物料描述'
							}]
				});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel
				|| new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 送货单列表 】',
			stripeRows : true,
			hsPage : true,
			selModel : this.selModel,
			tbar : [{
						text : '打印',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCreate
					}],
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						dataIndex : 'matnr',
						header : '物料编码',
						width : 180
					}, {
						dataIndex : 'maktx',
						header : '物料描述',
						width : 250,
						renderer : function(v, m, r, i) {
							var flag = r.get("flag");
							if (flag == "是") {
								return "<span>" + "★" + v + "</span>";
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'flag',
						header : '关键件标志'
					}, {
						header : '是否有采购订单',
						dataIndex : 'sfcgdd',
						renderer : function(v, m, r, i) {
							if (v == "否") {
								return "<span style = 'color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.querymatnrbarcode.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'flag'
						}, {
							name : 'sfcgdd'
						}]
			})
		});
	}

	this.initInputWindow = function() {
		var _this = this;
		this.listPanel3 = new Ext.fn.InputPanel({
					height : 100,
					width : 760,
					columns : 2,
					border : true,
					//title : '打印说明：', 
					saveUrl : '...',
					fields : [{
								xtype : 'datetimefield',
								name : 'createtime',
								fieldLabel : '物料生产日期',
								colspan : 1,
								allowBlank : false,
								value : sysdate,
								minValue : sysdate,
								editable : true,
								format : 'Y-m-d'
							}, {
								fieldLabel : '打印数量',
								colspan : 1,
								regex : /^[1-9]\d*$/,
								allowBlank : false,
								regexText : '打印份数必须为数字，请检查...',
								name : 'dysl',
								minValue : 1,
								maxValue : 99,
								xtype : 'numberfield'
							}, {
								fieldLabel : '物料编码',
								colspan : 1,
								hidden : true,
								name : 'matnr',
								xtype : 'textfield'
							}, {
								fieldLabel : '物料描述',
								colspan : 1,
								hidden : true,
								name : 'maktx',
								xtype : 'textfield'
							}, {
								fieldLabel : 'flag',
								colspan : 1,
								hidden : true,
								name : 'flag',
								xtype : 'textfield'
							}, {
								xtype : 'radiogroup',
								name : 'tmlxType',
								allowBlank : false,
								colspan : 2,
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
							}, {
								 	xtype : 'displayfield',
								 	fieldLabel : '备注',
								 	colspan : 2,
								 	style:'color:red',
						            value : '请选择正确的打印机型 ' +
										'例：ZEBAR GK888t、GT830等中低端机型，请选择203dpi机型打印；' +
										'ZEBAR ZT210等中高端机型，请选择300dpi机型打印。' +
										'打印条码范例见图,' +
										'如有疑问请联系技术支持：黄平 0731-89939039'
							}]
				});
		this.listPanel4 = new Ext.fn.InputPanel({
			height : 170,
			width : 760,
			border : true,
			//title : '打印说明：', 
			saveUrl : '...',
			html : ' <div><img border="0" width="760" height="170" src="frame/ui/img/tmdytp.png" /></div'
		});
		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '选择打印日期和次数',
					height : 400,
					width : 800,
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
			        buttonAlign : "center",
					items : [this.listPanel3, this.listPanel4],
					buttons : [{
								text : "打印",
								scope : this,
								handler : function() {
									_this.onBarcode()
								}
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputWindow.hide()
								}
							}]
				});
	}
}