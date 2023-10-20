com.zoomlion.hjsrm.srmclient.WorkedMgr = function() {

	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'workedMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					border : true,
					title : '【 已办任务查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/esheetno',
								fieldLabel : '编号'
							}, {
								xtype : 'textfield',
								name : 'condition/busiprocessname',
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
								name : 'condition/curactivityinstname',
								fieldLabel : '当前环节'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/applydate_min',
										'condition/applydate_max'],
								fieldLabel : "发起时间",
								format : "Y-m-d"
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		var listId = "workdelistid";
		this.listPanel = new Ext.fn.ListPanel({
			id : listId,
			title : '【 已办任务列表 】',
			hsPage : true,
			selModel : selModel,
			delUrl : '...',
			tbar : [{
						text : '批量催办',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.insertHastens
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'esheetno',
						header : '编号',
						sortable : false
					}, {
						dataIndex : 'deptname',
						header : '发起部门'
					}, {
						dataIndex : 'processinstname',
						header : '标题',
						width : 150,
						renderer : function(v, m, r, i) {
							var datediff = r.get('datediff');
							var fontcolor = "color:#000000";
							if (datediff >= 2 && datediff <= 7) {
								fontcolor = "color:#0000ff";
							}
							if (datediff > 7) {
								fontcolor = "color:#ff0000";
							}
							return "<a style='" + fontcolor
									+ "' href='javascript:showDetail("
									+ Ext.encode(listId) + "," + i + ");'>" + v
									+ "</a>";
						}
					}, {
						dataIndex : 'curactivityinstname',
						header : '当前环节'
					}, {
						dataIndex : 'username',
						header : '发起人'
					}, {
						dataIndex : 'applydate',
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
							return "<img alt='流程图' src='srmclient/worked/img/color_wheel.png' onclick='showProcessGraph("
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
							return "<img alt='流程日志' src='srmclient/worked/img/chart_organisation.png' onclick='showHistory("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>";
						}
					}, {
						header : '操作',
						width : 200,
						scope : this,
						renderer : function(v, m, r, i) {
							var processinstid = r.get('processinstid');
							var busiprocessinstid = r.get('busiprocessinstid');
							// var busiprocessname = r.get('busiprocessname');
							var busiprocessname = "123";
							var processtype = r.get('processtype');
							var str = "<a href='javascript:insertHasten("
									+ processinstid + ");'>" + "催办</a>";
							str += "&nbsp;&nbsp;<a href='javascript:sendMsg("
									+ Ext.encode(listId) + "," + i + ","
									+ Ext.encode("短信催办") + ");'>" + "短信催办</a>";
							str += "&nbsp;&nbsp;<a href='javascript:sendread("
									+ Ext.encode(listId) + "," + i + ");'>"
									+ "转阅</a>";
							return str;
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryWorked.biz.ext',
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
							name : 'description'
						}, {
							name : 'id'
						}, {
							name : 'busiprocessinstid'
						}, {
							name : 'curactivityinstname'
						}, {
							name : 'rootprocinstid'
						}, {
							name : 'busiprocessname'
						}, {
							name : 'processtypename'
						}]
			})
		});
	}

}