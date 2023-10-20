/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购订单查询
 * 创建日期： 2014-12-23  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.tuyangbg.TuyangbgMgr = function() {
	this.initPanel = function() {
		this.initListActionPanel();
		this.initQueryPanel();
		this.initListPanel();
		this.initInputtybgPanel();
		this.inittybgInputWindow();
		this.inittybgqueryWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'tuyangbgMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					width : 500,
					columns : 3,
					border : true,
					title : '图样变更通知单查询',
					fields : [{
								xtype : 'textfield',
								name : 'query/tybgTitle',
								fieldLabel : '标题',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'query/tybgId',
								fieldLabel : '编号',
								colspan : 1
							}, {
								xtype : 'dictcombobox',
								hiddenName : 'query/processStatus',
								fieldLabel : '流程状态',
								labelWidth :80,
								colspan : 1,
								dictData : TYBG_PROCESS_STATUS
							}, {
								xtype : 'textfield',
								name : 'query/tybgPersonName',
								width : 80,
								colspan : 1,
								fieldLabel : '发起人'
							}, {
								xtype : "dateregion",
								anchor : "100%",
								colspan : 1,
								nameArray : ['query/appstarttime',
										'query/appendtime'],
								fieldLabel : "发起时间",
								labelWidth :70,
								format : "Y-m-d"
							}, {
								xtype : 'orgtreecombo',
								fieldLabel : '发起部门',
								valueField : 'orgname',
								dataIndex : 'org',
								colspan : 1,
								displayField : 'orgname',
								queryType : 'dataorg',
								hiddenName : 'query/orgname',
								name : 'query/orgname'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			id : listId,
			title : '图样变更通知单查询列表',
			hsPage : true,
			autoExpandColumn : '4',
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}],	
	 selModel : selModel,
			columns : [new Ext.grid.RowNumberer(),selModel , {
						dataIndex : 'tybgTitle',
						header : '标题'	,
						width:200 
					},{
						dataIndex : 'tybgId',
						header : '图样变更ID',
						width:100
					},{
						dataIndex : 'tybgPersonId',
						header : '发起人ID',
						hidden :true
					},{
						dataIndex : 'tybgPersonName',
						header : '发起人姓名'
					},{
						dataIndex : 'deptId',
						header :'部门ID',
						hidden :true
					},{
						dataIndex : 'deptName',
						header : '部门名称'
					},{
						dataIndex : 'tybgContact',
						header : '联系方式'
					},{
						dataIndex : 'tybgTime',
						header : '发起时间'
					},{
						dataIndex : 'processinstid',
						header : '流程ID'
					},{
						dataIndex : 'processStatus',
						header : '流程状态'
					},{
						header : '操作',
						width : 100,
						scope : this,
						renderer : function(v, m, r, i) {
							var id = r.get('tybgId');
							var str = "<a href='javascript:showtybgquery("
									+ Ext.encode(listId) + "," + i + ");'>"
									+ "查看</a>";
									var processstatus = r.get('processStatus');									
									if(processstatus!='结束' && processstatus!='终止'){
										str+= "&nbsp;&nbsp;<a href='javascript:stopNotice("
										+ Ext.encode(listId) + "," + i + ");'>"
										+ "终止</a>";
									}							
							return str;
						}
					}, {
						header : '日志',
						width : 60,
						scope : this,
						renderer : function(v, m, r, i) {
							return "<img alt='流程日志' src='srmclient/working/img/chart_organisation.png' onclick='showHistory("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>&nbsp;&nbsp;<img alt='流程图' src='srmclient/working/img/color_wheel.png' onclick='showProcessGraph("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>";
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.querytybgnotice.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'tybgId'
						},{
							name : 'tybgPersonId'
						}, {
							name : 'tybgPersonName'
						},{
							name : 'deptName'
						},{
							name : 'deptId'
						}, {
							name : 'tybgContact'
						}, {
							name : 'tybgTitle'
						}, {
							name : 'tybgText'
						}, {
							name : 'tybgTime'
						}, {
							name : 'processinstid'
						}, {
							name : 'processStatus'
						},{
						    name : 'rootprocinstid'
						}]
			})
		});
	}
	this.inittybgqueryWindow = function() {
	    this.veattachId = Ext.id();
		this.tybgqueryWindow = this.tybgqueryWindow || new Ext.fn.ShowWindow({
			id : 'tybgqueryShow',
			fid : this.veattachId,
			title : '查看变更信息',
			width : 850,
		    height : 620,
		    defaults:{autoScroll : true},
			autoScroll : true,
            border : true,
			items : [{
				xtype : 'viewpanel',
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.gettybgdatabyid.biz.ext',
				fields : [{
							        xtype : 'textfield',
							        name : 'tybgId',
							        dataIndex : 'tybgId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'processinstid',
							        dataIndex : 'processinstid',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'processStatus',
							        dataIndex : 'processStatus',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'tybgPersonId',
							        dataIndex : 'tybgPersonId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'deptId',
							        dataIndex : 'deptId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'tybgPersonName',
							        fieldLabel : '更改发起人',
							        readOnly : true,
							        colspan : 1,
							        dataIndex : 'tybgPersonName'
						        },{
							        xtype : 'textfield',
							        name : 'deptName',
							        fieldLabel : '部门名称',
							        readOnly : true,
							        colspan : 1,
							        dataIndex : 'deptName'
						        },{
							        xtype : 'textfield',
							        name : 'tybgContact',
							        fieldLabel : '联系方式',
							        colspan : 1,
							        dataIndex : 'tybgContact'
						        },{
									xtype : 'textarea',
									name : 'tybgTitle',
									fieldLabel : '标题',
									colspan : 2,
									allowBlank : false,
									blankText : "请输入标题！",
									height:50
								},{
									xtype : 'htmleditor',
							        allowBlank : false,
							        fieldLabel : '正文',
							        colspan : 2,
							        name : 'tybgText',
							        dataIndex : 'tybgText',
							        height:150
								},{
							colspan : 2,
							width : 700,
							height:80,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId,
							postParams : {
								relationId : 0,
								groupId : 'tybgfile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						},this.listActionPanel]
			}]
		})
	};
		this.initInputtybgPanel = function() {
		this.attachId = Ext.id();
		this.inputtybgPanel = this.inputtybgPanel || new Ext.fn.InputPanel({
						columns:2,
						saveUrl:'...',
						autoScroll : true,
						border:false,
						fields:[{
							        xtype : 'textfield',
							        name : 'tybgId',
							        dataIndex : 'tybgId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'processinstid',
							        dataIndex : 'processinstid',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'processStatus',
							        dataIndex : 'processStatus',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'deptId',
							        dataIndex : 'deptId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'tybgPersonId',
							        dataIndex : 'tybgPersonId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'tybgPersonName',
							        fieldLabel : '更改发起人',
							        readOnly : true,
							        colspan : 1,
							        dataIndex : 'tybgPersonName'
						        },{
							        xtype : 'textfield',
							        name : 'deptName',
							        fieldLabel : '部门名称',
							        readOnly : true,
							        colspan : 1,
							        dataIndex : 'deptName'
						        },{
							        xtype : 'textfield',
							        name : 'tybgContact',
							        fieldLabel : '联系方式',
							        colspan : 1,
							        dataIndex : 'tybgContact'
						        },{
									xtype : 'textarea',
									name : 'tybgTitle',
									fieldLabel : '标题',
									colspan : 2,
									allowBlank : false,
									blankText : "请输入标题！",
									height:50
								},{
									xtype : 'htmleditor',
							        allowBlank : false,
							        fieldLabel : '正文',
							        colspan : 2,
							        name : 'tybgText',
							        dataIndex : 'tybgText',
							        height:250
								},{
							colspan : 2,
							width : 700,
							height:100,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.attachId,
							fileTypes : "*.pdf",
							postParams : {
								relationId : 0,
								groupId : 'tybgfile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : this.isDownload,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						},{
							xtype : 'selectParticipateField3',
							currentRolecode : '00263',
							name : 'pts',
							allowBlank : false,
							fieldLabel : '参与者',
							maxLength : 500,
							colspan : 2
						}]
						});	
	}

		this.inittybgInputWindow = function() {
		var _this = this;
		this.tybginputWindow = this.tybginputWindow || new Ext.fn.FormWindow({
					title : '新增图样变更通知单',
					xtype : 'inputpanel',
					pgrid : this.inputtybgPanel,
					height : 550,
			        width : 800,
					items : [_this.inputtybgPanel],
					buildButtons : function() {
						this.buttons = [{
									text : '保存并发起流程',
									scope : this,
									handler : function() {
										_this.onSendOk();
									}
								}, {
									text : '关闭',
									scope : this,
									handler : function() {
										this.hide();
									}
								}]
					}
				})
	};
		this.initListActionPanel = function() {
		this.listActionPanel = new Ext.fn.ListPanel({
					title : '流程处理信息',
					autoHeight:true,
					hsPage : false,
					colspan : 2,
					id:"viewlistActionPanel2",
					delUrl : '...',
					autoExpandColumn : '2',
					columns : [new Ext.grid.RowNumberer(),{
								header : "流程环节",								
								dataIndex : "itemsName"
							}, {
								header : "处理意见",								
								dataIndex : "actionsText"
							},{
								header : "处理人",								
								dataIndex : "actionsPersonName"
							},{
								header : "处理时间",	
								anchor : '100%',
								dataIndex : "actonsTime"
							}],
					store : this.storeAction					
				})
	};

	this.storeAction = this.storeAction || new Ext.data.JsonStore({
		url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.queryTybgNoticeItems.biz.ext',
		root : 'data',		
		totalProperty : 'totalCount',
		baseParams : {
			"entity/processinstid" : ""
		},
		fields : [{
					name : 'itemsName'
				}, {
					name : 'actionsText'// 操作内容
				}, {
					name : 'actionsPersonName'// 登陆用户名
				}, {
					name : 'actonsTime'// 操作时间
				}]
	});
	
}