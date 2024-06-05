Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.ExecutorOptionComboBox
 * @extends Ext.form.ComboBox
 * <p>工序班组查询下拉框组件
 */
com.keensen.ump.ExecutorOptionComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "staffId",
			displayField : "staffNameCode",
			defaultValue:'',
			//自定义查询参数
			tacheCode:'',
			state:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.ExecutorOptionComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			listeners : {
				"expand" : function(A) {
					this.reset()
				}
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.qryExecutorOption.biz.ext',
							root : 'data',
							autoLoad : true,
							baseParams : {
								'condition/tacheCode' : this.tacheCode,
								'condition/state' : this.state
							},
							fields : [{
										name : "staffId"
									}, {
										name : "staffNameCode"
									}, {
										name : "staffName"
									}, {
										name : "staffCode"
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
Ext.reg("executoroptioncombobox", com.keensen.ump.ExecutorOptionComboBox);