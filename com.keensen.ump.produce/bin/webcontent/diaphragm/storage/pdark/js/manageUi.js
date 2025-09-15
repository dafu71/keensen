com.keensen.ump.produce.diaphragm.storage.PdarkMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'pdarkmgr',
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
			saveUrl : 'com.keensen.ump.produce.diaphragm.storage.warehousing.warehousing.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					},  {
						fieldLabel : '仓库不变',
						xtype : 'checkbox',
						checked : false,
						ref : '../ifChange',
						inputValue: '1'
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					},{
						xtype : 'textfield',
						name : 'warehousing/batchNo',
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
						name : 'warehousing/position',
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
											.findField("warehousing/amount")
											.getValue();
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
						lazyRender : true,
						// queryDelay : 200,// 查询延时，毫秒,
						emptyText : "",
						hiddenName : 'warehousing/storageId',
						allowBlank : false,
						anchor : '80%',
						// readOnly : true,
						ref : '../storageId',
						name : 'warehousing/storageId',
						fieldLabel : '仓库',
						colspan : 1,
						listeners : {
							scope : this,
							'expand' : function(combo) {
								combo.store.filterBy(function(record) {
											return record.get('id') == 1
													|| record.get('id') == 2
													|| record.get('id') == 3 || record.get('id') == 81
										});

							}
						}
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'numberfield',
						name : 'warehousing/amount',
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
						name : 'warehousing/model',
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
						name : 'warehousing/class',
						anchor : '80%',
						hiddenName : 'warehousing/class',
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
						name : 'warehousing/type',
						value : '生产入库'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}