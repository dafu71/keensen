Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.ZvernComboBox
 * @extends Ext.form.ComboBox
 * <p>工厂下拉框组件
 */
com.zoomlion.hjsrm.ZvernComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "zvern",
			displayField : "zvern",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.zoomlion.hjsrm.ZvernComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryZvern.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "zvern"
									}, {
										name : "zvern"
									}],
							listeners : {
								scope : this,
								load:function(){
									this.setValue(this.defaultValue);
								}
							
							}
						});
				//
			}
		});
Ext.reg("zverncombobox", com.zoomlion.hjsrm.ZvernComboBox);