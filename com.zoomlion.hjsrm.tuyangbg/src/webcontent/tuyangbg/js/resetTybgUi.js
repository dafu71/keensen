

/*
 * 新增图样变更流程
 */
com.zoomlion.hjsrm.tuyangbg.ResetTybgMgr = function() {
	/**
	 * 初始化新增窗口
	 */
	this.initPanel = function() {
		Ext.QuickTips.init(); // 为组件提供提示信息功能，form的主要提示信息就是客户端验证的错误信息。
		Ext.form.Field.prototype.msgTarget = 'side';
        this.initListActionPanel();
		this.initResetTybgPanel();// 主窗口Panel

		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					autoScroll : true,
					renderTo : 'addtybgMgr',
					panels : [this.resetTybgPanel]
				});

	}

	/**
	 * 技术通知新增表单
	 */
	this.initResetTybgPanel = function() {
		var _this = this;
		this.xattachId = Ext.id();
		this.productTypeId = Ext.id();
		this.sendDeptId = Ext.id();
		this.resetTybgPanel = this.resetTygbPanel
				|| new Ext.fn.EditPanel({
					columns : 2,
					autoScroll : true,
					saveUrl : '...',
					title : '【 图样变更重填 】',
					border : true,
					loadUrl : "com.zoomlion.hjsrm.tuyangbg.tuyangbg.gettybgbyproid.biz.ext",
					loadData : function(A) {
						this.requestMask = this.requestMask
								|| new Ext.LoadMask(Ext.getBody(), {
											msg : "正在执行操作..."
										});
						this.requestMask.show();
						Ext.Ajax.request({
							url : this.loadUrl,
							scope : this,
							jsonData : {
								entity : A.data
							},
							success : function(C) {
								var B = Ext.decode(C.responseText);
								if (B.success) {
									var D = this.fireEvent("beforeload", this,
											B.data);
									if (!D) {
										return
									}
									this.form
											.loadRecord(new Ext.data.Record(B.data));
									this.fireEvent("afterload", this, B.data)
								}
							},
							callback : function() {
								this.requestMask.hide()
							}
						})
					},
					buttons : [{
						text : '提交',
						scope : this,
						handler : function() {
							if (_this.resetTybgPanel.getForm().isValid()) {
								_this.onSaveOk();
							}
						}
					}, {
						text : '关闭',
						scope : this,
						handler : this.onClose
					}],
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
						anchor : '80%',
						colspan : 1,
						dataIndex : 'deptName'
					}, {
						xtype : 'textfield',
						name : 'tybgContact',
						fieldLabel : '联系方式',
						anchor : '80%',
						colspan : 1,
						dataIndex : 'tybgContact'
					}, {
						xtype : 'textarea',
						name : 'tybgTitle',
						fieldLabel : '标题',
						anchor : '90%',
						colspan : 2,
						blankText : "请输入标题！",
						height : 50
					}, {
						xtype : 'htmleditor',
						fieldLabel : '正文',
						colspan : 2,
						anchor : '90%',
						allowBlank : false,
						name : 'tybgText',
						dataIndex : 'tybgText',
						height : 200
					}, {
						colspan : 2,
						width : 700,
						height : 80,
						isUploaded : true,
						xtype : 'attachmentlist',
						name : 'attachlist',
						id : this.xattachId,
						fileTypes : "*.pdf",
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
					},this.listActionPanel,{
							xtype : 'selectParticipateField3',
							currentRolecode : '00263',
							name : 'pts',
							allowBlank : false,
							fieldLabel : '参与者',
							maxLength : 500,
							colspan : 2
						}]

				});
	};
	
	
		
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
}