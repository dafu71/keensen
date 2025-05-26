Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.TestTypeCombo
 * @extends Ext.form.ComboBox
 *          <p>
 *          检测类型查询下拉框组件
 */
com.keensen.ump.TestTypeCombo = Ext.extend(Ext.form.ComboBox, {
	editable : false,
	triggerAction : "all",
	mode : "local",
	valueField : "propValueId",
	displayField : "propValueName",
	propCode : 'WATER_TEST_TYPE',
	defaultValue : '',
	// resizable : false,
	forceSelection : true,
	emptyText : "--请选择--",
	initComponent : function() {
		this.buildStore();
		com.keensen.ump.TestTypeCombo.superclass.initComponent.call(this);
		// this.store.load();

	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
					url : 'com.keensen.ump.qinsen.inst.getPropOptionByPropCode.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/sysCode' : 'PQMS',
						'condition/propCode' : this.propCode
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
Ext.reg("testtypecombo", com.keensen.ump.TestTypeCombo);