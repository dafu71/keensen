Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MpspecComboBox2
 * @extends Ext.form.ComboBox
 *          <p>
 *          膜片型号查询下拉框组件
 */
com.keensen.ump.MpspecComboBox2 = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "name",
			displayField : "name",
			defaultValue : '',
			// resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.MpspecComboBox2.superclass.initComponent
						.call(this);
				// this.store.load();

			},
			listeners : {
				"expand" : function(A) {
					this.reset()
				}
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url : 'com.keensen.ump.base.base.queryMpspec.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "id"
									}, {
										name : "name"
									}, {
										name : "code"
									}, {
										name : "mpBatchCode"
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
Ext.reg("mpspeccombobox2", com.keensen.ump.MpspecComboBox2);