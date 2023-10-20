Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.OperatorroleComboBox
 * @extends Ext.form.ComboBox
 *          <p>
 *          角色操作员下拉框组件
 */
com.keensen.ump.OperatorroleComboBox = Ext.extend(Ext.form.ComboBox, {
	editable : false,
	triggerAction : "all",
	mode : "local",
	valueField : "userid",
	displayField : "operatorname",
	defaultValue : '',
	// resizable : false,
	currentRolecode : undefined, // 角色编码
	forceSelection : true,
	emptyText : "--请选择--",
	initComponent : function() {
		this.buildStore();
		com.keensen.ump.OperatorroleComboBox.superclass.initComponent
				.call(this);
		// this.store.load();

	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByRole.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {
				'condition/rolecode' : this.currentRolecode
			},
			fields : [{
						name : "userid"
					}, {
						name : "operatorname"
					}],
			listeners : {
				scope : this,
				load : function() {
					this.setValue(this.defaultValue);
					this.fireEvent('callback', this);
				}

			}
		});
		//
	}
});
Ext.reg("operatorrolecombobox", com.keensen.ump.OperatorroleComboBox);