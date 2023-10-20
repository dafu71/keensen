Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.EkorgComboBox
 * @extends Ext.form.ComboBox
 * @author 刘鑫
 * <p>采购组织下拉框组件
 */
com.zoomlion.hjsrm.EkorgComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : true,
			triggerAction : "all",
			mode : "local",
			valueField : "ekorg",
			displayField : "ekotx",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.zoomlion.hjsrm.EkorgComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseEkorg.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "ekorg"
									}, {
										name : "ekotx"
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
Ext.reg("ekorgcombobox", com.zoomlion.hjsrm.EkorgComboBox);