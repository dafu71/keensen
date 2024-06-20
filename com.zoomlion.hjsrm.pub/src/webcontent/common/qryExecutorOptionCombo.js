Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.qryExecutorOptionComboBox
 * @extends Ext.form.ComboBox
 *          <p>
 *          待选操作工查询下拉框组件
 */
com.keensen.ump.qryExecutorOptionComboBox = Ext.extend(Ext.form.ComboBox, {
	editable : false,
	triggerAction : "all",
	mode : "local",
	valueField : "staffId",
	displayField : "staffNameCode",
	defaultValue : '',
	// 自定义查询参数
	teamId : '',
	state : '',
	// resizable : false,
	forceSelection : true,
	emptyText : "--请选择--",
	initComponent : function() {
		this.buildStore();
		com.keensen.ump.qryExecutorOptionComboBox.superclass.initComponent
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
					url : 'com.keensen.ump.qinsen.inst.qryExecutorOption.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/teamId' : this.teamId,
						'condition/state' : this.state
					},
					fields : [{
								name : 'staffId'
							}, {
								name : 'staffCode'
							}, {
								name : 'staffName'
							}, {
								name : 'produceNo'
							}, {
								name : 'produceMan'
							}, {
								name : 'staffNameCode'
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
Ext.reg("qryexecutoroptioncombobox", com.keensen.ump.qryExecutorOptionComboBox);