Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MeasurementUnitCombo
 * @extends Ext.form.ComboBox
 *          <p>
 *          计量单位查询下拉框组件
 */
com.keensen.ump.MeasurementUnitCombo = Ext.extend(Ext.form.ComboBox, {
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
		com.keensen.ump.MeasurementUnitCombo.superclass.initComponent.call(this);
		// this.store.load();

	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
					url : 'com.keensen.ump.qinsen.inst.getPropOptionByPropCode.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/sysCode' : 'BLUESEA',
						'condition/propCode' : 'MEASUREMENT_UNIT'
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
Ext.reg("measurementunitcombo", com.keensen.ump.MeasurementUnitCombo);