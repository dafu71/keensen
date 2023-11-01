Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MaterSpecComboBox
 * @extends Ext.form.ComboBox
 * <p>膜片型号查询下拉框组件
 * materClassIds : '100030027'  气捡元件
 */
com.keensen.ump.MaterSpecComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			materClassIds:'',
			mode : "local",
			valueField : "id",
			displayField : "name",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.MaterSpecComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryMaterSpecList.biz.ext',
							root : 'data',
							autoLoad : true,
							baseParams : {
								'condition/materClassIds' : this.materClassIds
							},
							fields : [{
										name : "id"
									}, {
										name : "name"
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
Ext.reg("materspeccombobox", com.keensen.ump.MaterSpecComboBox);