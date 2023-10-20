

com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr = function() {
	this.initPanel = function() {
		Ext.QuickTips.init(); //为组件提供提示信息功能，form的主要提示信息就是客户端验证的错误信息。   
		Ext.form.Field.prototype.msgTarget = 'side';
		this.initListActionPanel();		
		this.initEditPanel();	
		this.initBackItemPanel();
        this.initBackItemWindow();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'guidang1Mgr',
					panels : [this.editPanel]
				});

	}

this.initEditPanel = function() {
	    var _this = this;
		this.fattachId = Ext.id();
		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 600,
			pgrid : '',
			columns : 2,
			border : true,
			autoScroll : true,
			saveUrl : '---',
			loadUrl : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.gettybgbyproid.biz.ext',
			title : '【 图样变更归档 】',
			fields : [{
						xtype : 'textfield',
						name : 'tybgId',
						dataIndex : 'tybgId',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'processinstid',
						dataIndex : 'processinstid',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'processStatus',
						dataIndex : 'processStatus',
						hidden : true
					}, {
						xtype : 'hidden',
						name : 'workitemid',
						value : workitemid
					}, {
						xtype : 'textfield',
						name : 'tybgPersonId',
						dataIndex : 'tybgPersonId',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'tybgPersonName',
						fieldLabel : '更改发起人',
						anchor : '80%',
						readOnly : true,
						colspan : 1,
						dataIndex : 'tybgPersonName'
					}, {
						xtype : 'textfield',
						name : 'deptId',
						dataIndex : 'deptId',
						hidden : true
					}, {
						xtype : 'textfield',
						name : 'deptName',
						fieldLabel : '部门名称',
						readOnly : true,
						colspan : 1,
						dataIndex : 'deptName'
					}, {
						xtype : 'textfield',
						name : 'tybgContact',
						fieldLabel : '联系方式',
						anchor : '80%',
						readOnly : true,
						colspan : 1,
						dataIndex : 'tybgContact'
					}, {
						xtype : 'textarea',
						name : 'tybgTitle',
						fieldLabel : '标题',
						anchor : '90%',
						colspan : 2,
						readOnly : true,
						blankText : "请输入标题！",
						height : 30
					}, {
						xtype : 'htmleditor',
						fieldLabel : '正文',
						colspan : 2,
						anchor : '90%',
						readOnly : true,
						allowBlank : false,
						name : 'tybgText',
						dataIndex : 'tybgText',
						height : 120
					}, {
						colspan : 2,
						width : 700,
						height : 80,
						isUploaded : false,
						xtype : 'attachmentlist',
						name : 'attachlist',
						id : this.fattachId,
						postParams : {
							relationId : 0,
							groupId : 'tybgfile'
						},
						isDownload : true,
						fieldLabel : '附件列表',
						title : '附件列表',
						itemId : 'attachmentlist'
					}, {
									xtype : 'displayfield',
									name : 'executePersonName',
									fieldLabel : '归档下发处理人',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'executePersonName',
									allowBlank : false,
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									name : 'executeTime',
									fieldLabel : '处理时间',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'executeTime',
									allowBlank : false,
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									name : 'executeText',
									fieldLabel : '处理意见',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'executeText',
									allowBlank : false,
									anchor : '90%',
									colspan : 2
								}, {
						name : 'actionsPersonName',
						dataIndex : 'actionsPersonName',
						id : actionsPersonId,
						fieldLabel : '归档人',
						style : 'padding-top:3px;padding-left:10px;',
						anchor : '80%',
						readOnly : true,
						xtype : 'textfield',
						allowBlank : false,
						colspan : 1

					}, {
						xtype : 'datetimefield',
						name : 'actonsTime',
						style : 'padding-top:3px;padding-left:10px;',
						fieldLabel : '归档时间',
						dataIndex : 'actonsTime',
						anchor : '80%',
						readOnly : true,
						allowBlank : false,
						colspan : 1,
						value : new Date()
					},{
						xtype : 'textarea',
						name : 'actionsText',
						fieldLabel : '归档意见',
						style : 'padding-top:3px;padding-left:10px;',
						dataIndex : 'actionsText',
						id : this.actionsText,
						allowBlank : false,
						anchor : '90%',
						maxLength : 1000,
						emptyText : '请输入相关处理意见!',
						height : 100,
						colspan : 2
					},this.listActionPanel],
			buttons : [{
						text : '回退',
						scope : this,
						handler : function() {
							if (_this.editPanel.getForm().isValid()) {
								_this.onBackItem();
							}

						}
					},{
						text : '提交',
						scope : this,
						handler : function(){
							if (_this.editPanel.getForm().isValid()) {
								    _this.onSave();
							}
						
						}
					}, {
						text : '关闭',
						scope : this,
						handler : this.onClose

					}]

		})
	}
	
		
	/**
	 * 技术通知中，流程处理信息
	 */
this.initListActionPanel = function() {
		this.listActionPanel = new Ext.fn.ListPanel({
					title : '流程处理信息',
					autoHeight:true,
					hsPage : false,
					colspan : 2,
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
			"entity/processinstid" : processinstid
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
	// //////////////////////////////////回退窗口//////////////////////////////////////////

	/**
	 * 技术通知新增表单
	 */
	this.initBackItemWindow = function() {
		this.veattachId = Ext.id();
		this.backItemWindow = this.backItemWindow || new Ext.Window({
					columns : 2,
					autoScroll : true,
					collapsible : true,
					maximizable : false,
					constrain : true,
					modal : true,
					padding : 1,
					buttonAlign : "center",
					layout : "fit",
					id : 'backItemShow',
					saveUrl : '...',
					width : 480,
					height : 300,
					title : '技术通知回退',
					border : true,
					buttons : [{
								text : '确定',
								scope : this,
								handler : this.onBack

							}, {
								text : "关闭",
								scope : this,
								handler : this.onBackClose
							}],
					items : [this.backitemPanel]
				});
	};

	/**
	 * 技术通知中，流程处理信息
	 */
	this.initBackItemPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({singleSelect : true});
		this.backitemPanel = new Ext.fn.ListPanel({
					title : '流程环节',
					autoHeight : true,
					hsPage : false,
					colspan : 2,
					id : "backitemPanel",
					delUrl : '...',
					autoExpandColumn : '2',
					sm : selModel,
					viewConfig : {
						forceFit : true									
					},
					columns : [new Ext.grid.RowNumberer(), selModel, {
								header : "流程环节",
								dataIndex : "name"
							}],
					store : this.backItemStore
				})
	};

	this.backItemStore = this.backItemStore || new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.queryBackItemstybg.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				baseParams : {
					"entity/processinstid" : processinstid,
					"entity/workitemid" : workitemid
				},
				fields : [{
							name : 'id'
						}, {
							name : 'name'
						}]
	});
	
}