com.zoomlion.hjsrm.srmclient.WorkingMgr = function() {

	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workingMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					border : true,
					title : '【 待办任务查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/esheetno',
								fieldLabel : '编号'
							}, {
								xtype : 'textfield',
								name : 'condition/processinstname',
								fieldLabel : '标题'
							}, {
								xtype : 'dictcombobox',
								hiddenName : 'condition/processtype',
								fieldLabel : '业务类型',
								dictData : PROCESSTYPE
							}, {
								xtype : 'textfield',
								name : 'condition/username',
								fieldLabel : '发起人'
							}, {
								xtype : 'textfield',
								name : 'condition/deptname',
								fieldLabel : '发起部门'
							}, {
								xtype : 'textfield',
								name : 'condition/workitemname',
								fieldLabel : '工作项'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/applydatestartdate',
										'condition/applydateendate'],
								fieldLabel : "发起时间",
								format : "Y-m-d"
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		var listId = "workinglistid";
		this.listPanel = new Ext.fn.ListPanel({
			id : listId,
			title : '【 待办任务列表 】',
			hsPage : true,
			selModel : selModel,
			delUrl : '...',
			autoExpandColumn : '4',
			/*tbar : [{
						text : '批量处理',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onBatchDeal
					}],*/
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'esheetno',
						header : '编号',
						width : 120,
						sortable : false
					}, {
						dataIndex : 'deptname',
						header : '发起部门'
					}, {
						dataIndex : 'processinstname',
						header : '标题',
						renderer : function(v, m, r, i) {
							var datediff = r.get('datediff');
							var id = r.get('id');
							var fontcolor = "color:#000000";
							if (datediff >= 2 && datediff <= 7) {
								fontcolor = "color:#0000ff";
							}
							if (datediff > 7) {
								fontcolor = "color:#ff0000";
							}

							var str = "<a  style='" + fontcolor
									+ "' href='javascript:doExec();' ";
							str += " title='流程实例：" + r.get('processinstid')
									+ "|活动实例：" + r.get('activityinstid')
									+ "|工作项：" + r.get('workitemid');
							str += "'>" + v + "</a>";

							return str;

						}
					}, {
						dataIndex : 'workitemname',
						header : '工作项'
					}, {
						dataIndex : 'username',
						header : '发起人'
					}, {
						dataIndex : 'applydate',
						width : 120,
						header : '发起时间'
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'processtype',
						header : '业务类型',
						dictData : PROCESSTYPE
					}, {
						header : '流程图',
						width : 50,
						scope : this,
						renderer : function(v, m, r, i) {
							return "<img alt='流程图' src='srmclient/working/img/color_wheel.png' onclick='showProcessGraph("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>";
						}
					}, {
						header : '日志',
						width : 50,
						scope : this,
						renderer : function(v, m, r, i) {
							return "<img alt='流程日志' src='srmclient/working/img/chart_organisation.png' onclick='showHistory("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>";
						}
					}/*, {
						header : '操作',
						width : 150,
						scope : this,
						renderer : function(v, m, r, i) {
							var id = r.get('id');
							var str = "<a href='javascript:reassign("
									+ Ext.encode(listId) + "," + i + ");'>"
									+ "转办</a>";
							str += "&nbsp;&nbsp;<a href='javascript:sendread("
									+ Ext.encode(listId) + "," + i + ");'>"
									+ "转阅</a>";
							str += "&nbsp;&nbsp;<a href='javascript:sendMsg("
									+ Ext.encode(listId) + "," + i + ","
									+ Ext.encode("短信提醒") + ");'>" + "短信提醒</a>";
							return str;
						}
					}*/],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.remainQuery.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'esheetno'
						}, {
							name : 'deptname'
						}, {
							name : 'processinstname'
						}, {
							name : 'workitemname'
						}, {
							name : 'username'
						}, {
							name : 'applydate'
						}, {
							name : 'processtype'
						}, {
							name : 'workitemid'
						}, {
							name : 'processinstid'
						}, {
							name : 'datediff'
						}, {
							name : 'currentstate'
						}, {
							name : 'actionurl'
						}, {
							name : 'id'
						}, {
							name : 'rootprocinstid'
						}, {
							name : 'activityinstid'
						}, {
							name : 'processtypename'
						}]
			})
		});
	}

}