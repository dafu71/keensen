Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.ComponentteamCombo
 * @extends Ext.form.ComboBox
 * <p>班组查询下拉框组件
 */
com.keensen.ump.ComponentteamCombo = Ext.extend(Ext.form.ComboBox, {
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
				com.keensen.ump.ComponentteamCombo.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryComponentTeam.biz.ext',
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
Ext.reg("componentteamcombo", com.keensen.ump.ComponentteamCombo);