com.zoomlion.hjsrm.srmclient.demo.DoFlowMgr = function() {
	this.initPanel = function() {
		this.initEditPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					renderTo : 'doFlowMgr',
					panels : [this.editPanel]
				});

	}

	this.initEditPanel = function() {
		this.editPanel = new Ext.fn.EditPanel({
			height : 150,
			pgrid : '',
			columns : 1,
			border : true,
			saveUrl : 'com.zoomlion.hjsrm.srmclient.demo.testFlow.doFlow.biz.ext',
			loadUrl : "com.zoomlion.hjsrm.srmclient.demo.testFlow.queryTestflow.biz.ext",
			title : '【 审批工单 】',
			fields : [{
						xtype : 'displayfield',
						dataIndex : 'content',
						name : 'testflow/content',
						fieldLabel : '内容'
					}, {
						xtype : 'textfield',
						dataIndex : 'advise',
						allowBlank : false,
						name : 'testflow/advise',
						fieldLabel : '意见'
					}, {
						xtype : 'hidden',
						name : 'testflow/pkid',
						dataIndex : 'pkid'
					}, {
						xtype : 'hidden',
						name : 'testflow/workitemid',
						value : workitemid
					}],
			buttons : [{
						text : '保存',
						scope : this,
						handler : this.onSave
					}, {
						text : '关闭',
						scope : this,
						handler : this.onClose

					}]

		})
	}
}