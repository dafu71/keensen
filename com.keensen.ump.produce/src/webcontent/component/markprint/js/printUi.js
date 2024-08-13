com.keensen.ump.produce.component.markprintMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'componentmarkprintmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}
	this.initInputWindow = function() {
		var _this = this;
		this.panel = this.panel || new Ext.Panel({});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '300',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '400',

			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'condition/prodBatchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '卷膜序号',
						ref : '../prodBatchNo',
						anchor : '80%',
						colspan : 1,
						keys : {
							key : Ext.EventObject.ENTER,
							fn : function(btn, e) {
								searchData();
							}
						},
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									this.onScan();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						// name : 'warehousing/position',
						readOnly : true,
						allowBlank : false,
						fieldLabel : '订单号',
						style : '{font-weight:bold;}',
						ref : '../orderNo',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						readOnly : true,
						allowBlank : false,
						anchor : '80%',
						ref : '../prodSpecName2',
						fieldLabel : '订单生产型号',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						readOnly : true,
						allowBlank : false,
						anchor : '80%',
						ref : '../prodSpecName',
						fieldLabel : '实际生产型号',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'combobox',
						anchor : '80%',
						colspan : 1,
						allowBlank : false,
						readOnly : true,
						name : 'entity/c',
						ref : '../dryWet',
						hiddenName : 'entity/dryWet',
						fieldLabel : '订单干/湿膜',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['干', '干'], ['湿', '湿']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : ""
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						readOnly : true,
						allowBlank : false,
						anchor : '80%',
						ref : '../dryWet2',
						fieldLabel : '生产干/湿膜',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textarea',
						readOnly : true,
						ref : '../remark',
						fieldLabel : '提示',
						anchor : '80%',
						colspan : 1,
						dataIndex : 'remark'
					}],
			buttons : [{
						text : "重置",
						scope : this,
						handler : this.onReset
					}]
		})

	}

}