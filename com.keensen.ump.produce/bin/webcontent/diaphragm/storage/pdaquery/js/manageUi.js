com.keensen.ump.produce.diaphragm.storage.PdaqueryMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'pdaquerymgr',
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
			// title : '生产入库',
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
						name : 'batchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '批号',
						ref : '../batchNo',
						anchor : '80%',
						colspan : 1,
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
						name : 'position',
						allowBlank : false,
						fieldLabel : '库位',
						style : '{font-weight:bold;}',
						ref : '../position',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {

									var amount = this.inputPanel.form
											.findField("amount").getValue();
									if (Ext.isEmpty(amount)) {

									} else {
										this.onSave();
									}
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
						xtype : 'storagecombobox',
						emptyText : "",
						hiddenName : 'storageId',
						allowBlank : false,
						anchor : '80%',
						// readOnly : true,
						name : 'storageId',
						fieldLabel : '仓库',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'numberfield',
						name : 'amount',
						anchor : '80%',
						allowBlank : false,
						readOnly : true,
						fieldLabel : '数量',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'model',
						anchor : '80%',
						allowBlank : true,
						readOnly : true,
						fieldLabel : '膜片型号',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'combobox',
						readOnly : true,
						name : 'class',
						anchor : '80%',
						hiddenName : 'class',
						fieldLabel : '膜片等级',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['A等品', 'A等品'], ['B等品', 'B等品'],
											['C等品', 'C等品']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : ""
					}, {
						xtype : 'hidden',
						name : 'id'
					}, {
						xtype : 'hidden',
						name : 'oldValue'
					}],
			buttons : [{
						text : "更改库位",
						height : 30,
						scope : this,
						handler : this.savePosition
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						text : "调拨仓库",
						height : 30,
						scope : this,
						handler : this.saveAllocate
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						text : "出库",
						height : 30,
						scope : this,
						handler : this.saveOutofstock
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						labelSeparator : ''
					}, {
						text : "重置",
						height : 30,
						scope : this,
						handler : function(){
							this.inputPanel.form.reset();
						}
					}]
		})

	}

}