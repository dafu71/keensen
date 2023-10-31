Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MarkspecComboBox
 * @extends Ext.form.ComboBox
 * <p>唛头显示型号查询下拉框组件
 */
com.keensen.ump.MarkspecComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "markSpecName",
			displayField : "markSpecName",
			defaultValue:'',
			//resizable : false,
			queryMode : 'local',
			anyMatch : true,
			lastQuery : '',
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.MarkspecComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryMarkSpec.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "markSpecName"
									}, {
										name : "markSpecName"
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
Ext.reg("markspeccombobox", com.keensen.ump.MarkspecComboBox);