com.zoomlion.hjsrm.srmclient.demo.batchDealMgr = function() {
	this.initPanel = function() {
		this.initEditPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					renderTo : 'batchdealmgrdiv',
					panels : [this.editPanel]
				});

	}
	
	this.initEditPanel = function() {
		this.editPanel = new Ext.fn.EditPanel({
			height : 150,
			pgrid : '',
			columns : 1,
			border : true,
			saveUrl : 'aaa.biz.ext',
			loadUrl : "bbb.biz.ext",
			title : '【 审批工单 】',
			fields : [{
						xtype : 'displayfield',
						ref : "../processinstids",
						fieldLabel : '流程Id'
					},{
						xtype : 'displayfield',
						ref : "../workitemids",
						fieldLabel : '工作项Id'
					}],
			buttons : [{
						text : '关闭',
						scope : this,
						handler : this.onClose

					}]

		})
	}
}