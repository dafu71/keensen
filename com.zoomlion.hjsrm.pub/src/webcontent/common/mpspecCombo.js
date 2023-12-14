Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MpspecComboBox
 * @extends Ext.form.ComboBox
 * <p>膜片型号查询下拉框组件
 */
com.keensen.ump.MpspecComboBox = Ext.extend(Ext.form.ComboBox, {
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
				com.keensen.ump.MpspecComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			listeners : {
				"expand" : function(A) {
					this.reset()
				}
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryMpspec.biz.ext',
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
Ext.reg("mpspeccombobox", com.keensen.ump.MpspecComboBox);