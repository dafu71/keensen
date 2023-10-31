Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MpworkerComboBox2
 * @extends Ext.form.ComboBox
 * <p>膜片操作工查询下拉框组件
 */
com.keensen.ump.MpworkerComboBox2 = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "code",
			displayField : "name",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.MpworkerComboBox2.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryMpworker.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "code"
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
Ext.reg("mpworkercombobox2", com.keensen.ump.MpworkerComboBox2);