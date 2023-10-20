com.zoomlion.hjsrm.kcgl.QueryMgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					renderTo : 'kcglqueryMgr',
					panels : [this.queryPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = this.queryPanel || new Ext.FormPanel({
					height : 150,
					layout : 'column',
					buttonAlign : 'center',
					border : true,
					title : '【 版本查询 】',
					saveUrl : '....biz.ext',
					items : [{
								xtype : 'displayfield',
								value:'&nbsp;',
								columnWidth : .33
							},{
								xtype : 'displayfield',
								value:'&nbsp;',
								columnWidth : .33
							},{
								xtype : 'displayfield',
								value:'&nbsp;',
								columnWidth : .33
							},{
								xtype : 'displayfield',
								value:'&nbsp;',
								columnWidth : .4
							}, {
								xtype : 'zverncombobox',
								columnWidth : .2,
								emptyText : '当前版本',
								editable : true,
								anchor : '30%',
								hiddenName : 'zvern',
								ref : 'zvern',
								fieldLabel : '版本'
							}, {
								xtype : 'displayfield',
								value:'&nbsp;',
								columnWidth : .4
							}],
					buttons : [{
								text : "导出",
								scope : this,
								handler : this.exportExcel
							}, {
								text : "重置",
								scope : this,
								handler : this.onReset
							}]
				});
	}
}