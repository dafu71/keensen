Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.TestMacCombo
 * @extends Ext.form.ComboBox
 *          <p>
 *          测试膜壳查询下拉框组件
 */
com.keensen.ump.TestMacCombo = Ext.extend(Ext.form.ComboBox, {
	editable : false,
	triggerAction : "all",
	mode : "local",
	valueField : "propValueId",
	displayField : "propValueName",
	defaultValue : '',
	// resizable : false,
	forceSelection : true,
	emptyText : "--请选择--",
	initComponent : function() {
		this.buildStore();
		com.keensen.ump.TestMacCombo.superclass.initComponent.call(this);
		// this.store.load();

	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
					url : 'com.keensen.ump.qinsen.inst.getPropOptionByPropCode.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/sysCode' : 'PQMS',
						'condition/propCode' : 'WATER_TEST_MAC'
					},
					fields : [{
								name : "propValueId"
							}, {
								name : "propValueName"
							}, {
								name : "propValueCode"
							}, {
								name : "isDefault"
							}],
					listeners : {
						scope : this,
						load : function() {
							this.setValue(this.defaultValue);
							this.fireEvent('callback', this);
						}

					}
				});
		//
	}
});
Ext.reg("testmaccombo", com.keensen.ump.TestMacCombo);