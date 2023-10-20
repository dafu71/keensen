com.zoomlion.hjsrm.srmclient.demo.ViewFlowMgr = function() {
	this.initPanel = function() {
		this.initViewPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					renderTo : 'viewFlowMgr',
					panels : [this.viewpanel]
				});

	}

	this.initViewPanel = function() {
		this.viewpanel = new Ext.fn.ViewPanel({
			height : 150,
			columns : 1,
			autoHide : false,
			border : true,
			loadUrl : "com.zoomlion.hjsrm.srmclient.demo.testFlow.queryTestflow.biz.ext",
			title : '【 查看工单 】',
			fields : [{
						xtype : 'displayfield',
						dataIndex : 'content',
						fieldLabel : '内容'
					},{
						xtype : 'displayfield',
						dataIndex : 'advise',
						fieldLabel : '意见'
					}],
			buttons : [{
						text : '关闭',
						scope : this,
						handler : this.onClose
					}]

		})
	}
}