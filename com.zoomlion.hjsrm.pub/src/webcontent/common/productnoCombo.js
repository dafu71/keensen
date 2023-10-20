Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.productNoComboBox
 * @extends Ext.form.ComboBox
 * @author dafu
 *         <p>
 *         车型代号下拉组件
 */
com.zoomlion.hjsrm.productNoComboBox = Ext.extend(Ext.form.ComboBox, {
	editable : true,
	triggerAction : "all",
	mode : "local",
	valueField : "productno",
	displayField : "productno",
	pno : '',// 车型代号
	defaultValue : '',
	// resizable : false,
	forceSelection : true,
	enableKeyEvents : true,
	// emptyText : "--请选择--",
	initComponent : function() {
		this.buildStore();
		com.zoomlion.hjsrm.productNoComboBox.superclass.initComponent
				.call(this);
		// this.store.load();

	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryProductNo.biz.ext',
			root : 'data',
			baseParams : {
				"condition/ssdj" : this.pno
			},
			autoLoad : true,
			fields : [{
						name : "productno"
					}, {
						name : "materialno"
					}, {
						name : "text"
					}],
			listeners : {
				scope : this,
				load : function() {
					this.setValue(this.defaultValue);
				}

			}
		});
		//
	}
});
Ext.reg("productnocombobox", com.zoomlion.hjsrm.productNoComboBox);