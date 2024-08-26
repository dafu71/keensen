Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MachineComboBox
 * @extends Ext.form.ComboBox
 *          <p>
 *          机台查询下拉框组件
 */
com.keensen.ump.MachineComboBox = Ext.extend(Ext.form.ComboBox, {
	editable : false,
	lazyRender : true,
	triggerAction : "all",
	mode : "local",
	valueField : "code",
	displayField : "name",
	defaultValue : '',
	machineType : '',
	// resizable : false,
	forceSelection : true,
	emptyText : "--请选择--",
	initComponent : function() {
		this.buildStore();
		com.keensen.ump.MachineComboBox.superclass.initComponent.call(this);
		// this.store.load();

	},
	listeners : {
		"expand" : function(A) {
			this.reset()
		}
	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.workorder.queryMachine.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/type' : this.machineType
					},
					fields : [{
								name : "code"
							}, {
								name : "name"
							}, {
								name : "type"
							}, {
								name : "ip"
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
Ext.reg("machinecombobox", com.keensen.ump.MachineComboBox);