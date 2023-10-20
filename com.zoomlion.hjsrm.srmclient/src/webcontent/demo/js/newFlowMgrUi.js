com.zoomlion.hjsrm.srmclient.demo.NewFlowMgr = function() {
	this.initPanel = function() {
		this.initInputPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					renderTo : 'newFlowMgr',
					panels : [this.inputPanel]
				});

	}

	this.initInputPanel = function() {
		this.inputPanel = new Ext.fn.InputPanel({
			height : 100,
			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : 'com.zoomlion.hjsrm.srmclient.demo.testFlow.newFlow.biz.ext',
			title : '【 新建工单 】',
			fields : [{
						xtype : 'textfield',
						name : 'testflow/content',
						allowBlank : false,
						fieldLabel : '内容'
					}],
			buttons : [{
						text : '保存',
						scope : this,
						handler : this.onSave
					}]

		})
	}
}