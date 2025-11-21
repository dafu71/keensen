com.keensen.ump.produce.diaphragm.zmx.pda.WarehousingMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'zmxpdawarehousingmgr',
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
			saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.updateZmxPosition.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'param/dimoBatchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '底膜批号',
						ref : '../dimoBatchNo',
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
						name : 'param/position',
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
						xtype : 'numberfield',
						ref : '../residue',
						anchor : '80%',
						// allowBlank : false,
						readOnly : true,
						fieldLabel : '数量',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						ref : '../dimoType',
						anchor : '80%',
						allowBlank : true,
						readOnly : true,
						fieldLabel : '底膜类型',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						ref : '../supName',
						anchor : '80%',
						allowBlank : true,
						readOnly : true,
						fieldLabel : '无纺布供应商',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						ref : '../psfName',
						anchor : '80%',
						allowBlank : true,
						readOnly : true,
						fieldLabel : '聚砜类型',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'textfield',
						ref : '../line',
						anchor : '80%',
						allowBlank : true,
						readOnly : true,
						fieldLabel : '生产线别',
						colspan : 1
					}],
			buttons : [{
				text : "<span style='color:red;font-size:14px;'>入&nbsp;&nbsp;库</span>",
				height : 40,
				scope : this,
				handler : this.onSave
			}]
		})

	}

}