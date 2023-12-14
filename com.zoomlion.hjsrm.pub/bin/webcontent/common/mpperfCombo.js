Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MpperfComboBox
 * @extends Ext.form.ComboBox
 * <p>膜片等级查询下拉框组件
 */
com.keensen.ump.MpperfComboBox = Ext.extend(Ext.form.ComboBox, {
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
				com.keensen.ump.MpperfComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			listeners : {
				"expand" : function(A) {
					this.reset()
				}
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryMpperf.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "id"
									}, {
										name : "name"
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
Ext.reg("mpperfcombobox", com.keensen.ump.MpperfComboBox);