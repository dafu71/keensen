Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.FactoryComboBox
 * @extends Ext.form.ComboBox
 * <p>工厂下拉框组件
 */
com.zoomlion.hjsrm.FactoryComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			autoload:true,
			mode : "local",
			valueField : "werks",
			displayField : "name1",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.zoomlion.hjsrm.FactoryComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseFactory.biz.ext',
							root : 'data',
							autoLoad : this.autoload,
							fields : [{
										name : "werks"
									}, {
										name : "name1"
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
Ext.reg("factorycombobox", com.zoomlion.hjsrm.FactoryComboBox);