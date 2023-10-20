com.zoomlion.hjsrm.srmclient.WorkLogMgr = function() {

	this.initPanel = function() {

		this.initListPanel();
		this.initLogViewPanel();

		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'workLogMgr',
					panels : [this.logViewPanel]
				});
	}

	this.initLogViewPanel = function() {
		this.logViewPanel = new Ext.fn.ViewPanel({
			columns : 1,
			loadUrl : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryEsBasicinfo.biz.ext',
			fields : [{
						dataIndex : 'processtype',
						style : 'padding-top:3px;padding-left:10px;border:none',
						allowBlank : true,
						fieldLabel : '流程类型',
						anchor : '90%',
						dictData : PROCESSTYPE,
						hideTrigger : true,
						shadow : false,
						xtype : 'dictcombobox'
					}, {
						dataIndex : 'orgname',
						style : 'padding-top:3px;padding-left:10px;',
						allowBlank : true,
						fieldLabel : '发起部门',
						anchor : '90%',
						xtype : 'displayfield'
					}, {
						dataIndex : 'processinstname',
						style : 'padding-top:3px;padding-left:10px;',
						allowBlank : true,
						fieldLabel : '任务名称',
						anchor : '90%',
						xtype : 'displayfield'
					}, this.listPanel]

		})

	}

	this.initListPanel = function() {
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 流程日志 】',
			autoHeight : true,
			hsPage : false,
			delUrl : '...',
			autoExpandColumn : '6',
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'workitemname',
						header : '环节名称'
					}, {
						dataIndex : 'username',
						header : '处理人'
					}, {
						dataIndex : 'orgname',
						header : '部门'
					}, {
						dataIndex : 'time',
						width : 180,
						header : '处理时间',
						format : "Y-m-d H:i:s",
						renderer : function(v) {
							if(v){
								var len = v.indexOf(".");
								return v.substring(0,len);
							}
						}
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'status',
						header : '处理结果',
						dictData : CA_LAST_RESULT
					}, {

						dataIndex : 'opinion',
						header : '处理意见'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryEsAuditopinion.biz.ext',
				root : 'list',
				autoLoad : true,
				baseParams : {
					processinstid : processinstid,
					rootprocinstid : rootprocinstid

				},
				fields : [{
							name : 'workitemname'
						}, {
							name : 'username'
						}, {
							name : 'orgname'
						}, {
							name : 'time'
						}, {
							name : 'username'
						}, {
							name : 'status'
						}, {
							name : 'opinion'
						}]
			})
		});
	}

}
