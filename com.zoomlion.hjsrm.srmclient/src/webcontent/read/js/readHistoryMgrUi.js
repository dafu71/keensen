com.zoomlion.hjsrm.srmclient.ReadHistoryMgr = function() {

	this.initPanel = function() {
		this.initListPanel();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'readhistoryMgr',
					panels : [this.listPanel]
				});
	}

	this.initListPanel = function() {

		this.listPanel = new Ext.fn.ListPanel({
			title : '【 转阅记录 】',
			hsPage : true,
			delUrl : '...',
			autoExpandColumn : '3',
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'readername',
						header : '阅读人',
						width : 60,
						sortable : false
					}, {
						dataIndex : 'readtime',
						format : 'Y-m-d H:i:s',
						width : 140,
						header : '阅读时间'
					}, {
						dataIndex : 'content',
						width : 500,
						header : '处理内容'

					}, {
						header : '附件',
						dataIndex : 'pkid',
						width : 100,
						renderer : function(v, p, record, rowIndex, colIndex) {
							return '<a style="text-decoration:none" href="javascript:showFile('
									+ v + ')">' + '查看附件' + '</a>';
						}

					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryReadRecords.biz.ext',
				root : 'data',
				baseParams : {
					'condition/esheetno' : esheetno,
					'condition/status' : 1
				},
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'readername'
						}, {
							name : 'readtime'
						}, {
							name : 'content'
						}, {
							name : 'pkid'
						}]
			})
		});
	}

	this.initViewWindow = function() {
		this.veattachId = Ext.id();
		this.viewWindow = this.viewWindow || new Ext.Window({
					id : filewindow,
					closeAction : 'hide',
					fid : this.veattachId,
					title : '查看附件',
					height : 400,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
								isUploaded : false,
								xtype : 'attachmentlist',
								name : 'attachlist',
								id : this.veattachId,
								postParams : {
									relationId : 0,
									groupId : 'readdeal'
								},
								isDownload : true,
								fieldLabel : '附件列表',
								title : '附件列表',
								itemId : 'attachmentlist'

							}]
				});
	}
}