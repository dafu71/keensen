com.zoomlion.hjsrm.srmclient.ReadMgr = function() {

	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();

		this.initReadPanel();

		this.initQueryPanel2();
		this.initListPanel2();

		this.initReadedPanel();

		this.initMainPanel();

		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'readMgr',
					panels : [this.mainPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					region : "north",
					border : true,
					title : '【 待阅工单查询 】',
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
								name : 'condition/orgname',
								fieldLabel : '发起部门'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/applydate_min',
										'condition/applydate_max'],
								fieldLabel : "发起时间",
								format : "Y-m-d"
							}, {
								xtype : 'hidden',
								name : 'condition/status',
								value : '0'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			id : listId,
			title : '【 待阅工单列表 】',
			hsPage : true,
			selModel : selModel,
			region : "center",
			delUrl : '...',
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'esheetno',
						header : '编号',
						width : 120,
						sortable : false
					}, {
						dataIndex : 'orgname',
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

							return "<a style='" + fontcolor
									+ "' href='javascript:updateReadInsert("
									+ Ext.encode(listId) + "," + i + ");'>" + v
									+ "</a>";

						}
					}, {
						dataIndex : 'username',
						header : '发起人'
					}, {
						dataIndex : 'applydate',
						width : 120,
						header : '发起时间'
					}, {
						dataIndex : 'sendtime',
						header : '送阅时间'
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
					}, {
						header : '操作',
						scope : this,
						renderer : function(v, m, r, i) {
							var id = r.get('id');
							var str = "<a href='javascript:readHistory("
									+ Ext.encode(listId) + "," + i + ");'>"
									+ "转阅记录</a>";

							return str;
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryRead.biz.ext',
				root : 'data',
				baseParams : {
					'condition/status' : 0
				},
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'esheetno'
						}, {
							name : 'orgname'
						}, {
							name : 'processinstname'
						}, {
							name : 'sendtime'
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
							name : 'eid'
						}, {
							name : 'rootprocinstid'
						}, {
							name : 'activityinstid'
						}, {
							name : 'description'
						}]
			})
		});
	}

	this.initQueryPanel2 = function() {
		this.queryPanel2 = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					region : "north",
					border : true,
					title : '【 已阅工单查询 】',
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
								name : 'condition/orgname',
								fieldLabel : '发起部门'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/applydate_min',
										'condition/applydate_max'],
								fieldLabel : "发起时间",
								format : "Y-m-d"
							}, {
								xtype : 'hidden',
								name : 'condition/status',
								value : '1'
							}]
				});
	}

	this.initListPanel2 = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel2 = new Ext.fn.ListPanel({
			id : listId2,
			title : '【 已阅工单列表 】',
			hsPage : true,
			selModel : selModel,
			region : "center",
			delUrl : '...',
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'esheetno',
						header : '编号',
						width : 120,
						sortable : false
					}, {
						dataIndex : 'orgname',
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

							return "<a style='" + fontcolor
									+ "' href='javascript:showDetail("
									+ Ext.encode(listId2) + "," + i + ");'>"
									+ v + "</a>";

						}
					}, {
						dataIndex : 'username',
						header : '发起人'
					}, {
						dataIndex : 'applydate',
						width : 120,
						header : '发起时间'
					}, {
						dataIndex : 'sendtime',
						header : '送阅时间'
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
									+ Ext.encode(listId2)
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
									+ Ext.encode(listId2)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>";
						}
					}, {
						header : '操作',
						scope : this,
						renderer : function(v, m, r, i) {
							var id = r.get('id');
							var str = "<a href='javascript:readHistory("
									+ Ext.encode(listId2) + "," + i + ");'>"
									+ "转阅记录</a>";

							return str;
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryRead.biz.ext',
				root : 'data',
				baseParams : {
					'condition/status' : 1
				},
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'esheetno'
						}, {
							name : 'orgname'
						}, {
							name : 'processinstname'
						}, {
							name : 'sendtime'
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
							name : 'eid'
						}, {
							name : 'rootprocinstid'
						}, {
							name : 'activityinstid'
						}, {
							name : 'description'
						}]
			})
		});
	}

	this.initMainPanel = function() {

		this.mainPanel = new Ext.fn.TabPanel({
					activeTab : 0,
					items : [this.readPanel, this.readedPanel]
				});

	};

	this.initReadPanel = function() {
		this.readPanel = new Ext.Panel({
					title : "待阅工单",
					layout : 'border',
					items : [this.queryPanel, this.listPanel]
				})
	};

	this.initReadedPanel = function() {
		this.readedPanel = new Ext.Panel({
					layout : 'border',
					title : "已阅工单",
					items : [this.queryPanel2, this.listPanel2]
				})
	};

}