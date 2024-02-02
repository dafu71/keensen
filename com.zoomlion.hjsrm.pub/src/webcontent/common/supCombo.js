Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.SupComboBox
 * @extends Ext.form.ComboBox
 * <p>供应商下拉框组件
 */
com.keensen.ump.SupComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "id",
			displayField : "name",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.SupComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			listeners : {
				"expand" : function(A) {
					this.reset()
				}
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.querySup.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "id"
									}, {
										name : "name"
									}, {
										name : "code"
									}],
							listeners : {
								scope : this,
								load:function(){
									this.setValue(this.defaultValue);
									this.fireEvent('callback',this);
								}
							
							}
						});
				//
			}
		});
Ext.reg("supcombobox", com.keensen.ump.SupComboBox);