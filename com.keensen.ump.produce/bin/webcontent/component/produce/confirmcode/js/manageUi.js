com.keensen.ump.produce.component.produce.ConfirmCodeMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'confirmcodemgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}
	this.initInputWindow = function() {
		var _this = this;
		this.panel = this.panel || new Ext.Panel({});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '300',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '400',
			// title : '生产入库',
			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.produce.component.produce.createConfirmCode.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						value:'<p style="color:red;">初始确认码为888888</p>',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					},{
						xtype : 'textfield',
						name : 'oldcode',
						inputType : "password",
						allowBlank : false,
						fieldLabel : '原确认码',
						ref : '../oldcode',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					},{
						xtype : 'textfield',
						name : 'newcode',
						inputType : "password",
						allowBlank : false,
						fieldLabel : '新设确认码',
						ref : '../newcode',
						anchor : '80%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					},{
						xtype : 'textfield',
						name : 'newcode2',
						inputType : "password",
						allowBlank : false,
						fieldLabel : '重复确认码',
						ref : '../newcode2',
						anchor : '80%',
						colspan : 1
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}