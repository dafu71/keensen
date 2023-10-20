Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.EkgrpComboBox
 * @extends Ext.form.ComboBox
 * @author 刘鑫
 * <p>采购组下拉框组件
 */
com.zoomlion.hjsrm.EkgrpComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : true,
			triggerAction : "all",
			mode : "local",
			valueField : "ekgrp",
			displayField : "eknam",
			defaultValue:'',
			//resizable : false,
			//hideTrigger:true,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.zoomlion.hjsrm.EkgrpComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseEkgrp.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "ekgrp"
									}, {
										name : "eknam"
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
Ext.reg("ekgrpcombobox", com.zoomlion.hjsrm.EkgrpComboBox);