Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.ProdFlagSelComboBox
 * @extends Ext.form.ComboBox
 *          <p>
 *          生产类型查询下拉框组件
 */
com.keensen.ump.ProdFlagSelComboBox = Ext.extend(Ext.form.ComboBox, {
	editable : false,
	triggerAction : "all",
	mode : "local",
	valueField : "id",
	displayField : "name",
	defaultValue : '',
	// resizable : false,
	forceSelection : true,
	emptyText : "--请选择--",
	initComponent : function() {
		this.buildStore();
		com.keensen.ump.ProdFlagSelComboBox.superclass.initComponent.call(this);
		// this.store.load();

	},
	listeners : {
		"expand" : function(A) {
			this.reset()
		}
	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.base.queryProdFlagSel.biz.ext',
					root : 'data',
					autoLoad : true,
					fields : [{
								name : "id"
							}, {
								name : "name"
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
Ext.reg("prodflagselcombobox", com.keensen.ump.ProdFlagSelComboBox);