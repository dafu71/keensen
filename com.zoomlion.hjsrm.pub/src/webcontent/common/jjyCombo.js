Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.JyyComboBox
 * @extends Ext.form.ComboBox
 * @author 刘鑫
 * <p>采购组织下拉框组件
 */
com.zoomlion.hjsrm.JyyComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : true,
			triggerAction : "all",
			mode : "local",
			valueField : "empcode",
			displayField : "empname",
			//defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "请选择",
			initComponent : function() {
				this.buildStore();
				com.zoomlion.hjsrm.JyyComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryJyyCombo.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "empcode"
									}, {
										name : "empname"
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
Ext.reg("jjycombobox", com.zoomlion.hjsrm.JyyComboBox);