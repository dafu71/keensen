Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.LineComboBox
 * @extends Ext.form.ComboBox
 *          <p>
 *          生产线查询下拉框组件
 */
com.keensen.ump.LineComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			prodTacheId : '',
			mode : "local",
			valueField : "id",
			displayField : "name",
			defaultValue : '',
			// resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.LineComboBox.superclass.initComponent
						.call(this);
				// this.store.load();

			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url : 'com.keensen.ump.base.base.qryLineOption.biz.ext',
							root : 'data',
							autoLoad : true,
							baseParams : {
								'condition/prodTacheId' : this.prodTacheId
							},
							fields : [{
										name : "id"
									}, {
										name : "name"
									}, {
										name : "code"
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
Ext.reg("linecombobox", com.keensen.ump.LineComboBox);