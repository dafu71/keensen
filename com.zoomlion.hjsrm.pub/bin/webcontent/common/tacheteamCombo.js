Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.TacheTeamComboBox
 * @extends Ext.form.ComboBox
 * <p>工序班组查询下拉框组件
 */
com.keensen.ump.TacheTeamComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "id",
			displayField : "name",
			defaultValue:'',
			tacheCode:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.TacheTeamComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			listeners : {
				"expand" : function(A) {
					this.reset()
				}
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryTacheTeam.biz.ext',
							root : 'data',
							autoLoad : true,
							baseParams : {
								'condition/tacheCode' : this.tacheCode
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
								load:function(){
									this.setValue(this.defaultValue);
									this.fireEvent('callback',this);
								}
							
							}
						});
				//
			}
		});
Ext.reg("tacheteamcombobox", com.keensen.ump.TacheTeamComboBox);