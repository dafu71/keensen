com.keensen.ump.produce.component.ApplyJudgeMgr = function() {

	this.initPanel = function() {
		
		this.initStore();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'applyjudgemgr',
					panels : [this.inputPanel]
				});
	}

	this.initStore = function() {

	}

	this.initInputWindow = function() {
		var _this = this;
		
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			baseCls : "x-plain",
			//width : '480',
			//height : '350',
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'textfield',
						style : '{font-weight:bold;font-size:18px;}',
						allowBlank : false,
						fieldLabel : '请检单编号',
						ref : '../code',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									_this.onSave();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						ref : '../msg',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}

}