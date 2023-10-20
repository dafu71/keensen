Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.CompanyComboBox
 * @extends Ext.form.ComboBox
 * <p>工厂下拉框组件
 */
com.zoomlion.hjsrm.CompanyComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "bukrs",
			displayField : "butxt",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.zoomlion.hjsrm.CompanyComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseCompany.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "bukrs"
									}, {
										name : "butxt"
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
Ext.reg("companycombobox", com.zoomlion.hjsrm.CompanyComboBox);