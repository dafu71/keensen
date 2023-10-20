com.zoomlion.hjsrm.techChange.Third = function() {
	this.initPanel = function() {

		this.initInputPanel();
		this.initViewPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					autoScroll : true,
					border : false,
					renderTo : 'techChangeThird',
					panels : [this.inputPanel, this.viewPanel]
				});
	}

	this.initInputPanel = function() {
		this.attachId = Ext.id();
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 200,
					// title : "基础信息",
					pgrid : '',
					columns : 1,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'radiogroup',
								name : 'flags',
								allowBlank : false,
								colspan : 1,
								anchor : '40%',
								fieldLabel : '处理结果<font style="color:red">*</font>',
								items : [{
											boxLabel : '图纸已完成修改',
											name : 'flag',
											inputValue : '1',
											checked : true
										}, {
											boxLabel : '不需修改',
											name : 'flag',
											inputValue : '0'
										}]
							}, {
								xtype : 'textarea',
								anchor : '80%',
								colspan : 1,
								name : 'advise',
								fieldLabel : '处理意见'
							}, {
								colspan : 1,
								anchor : '80%',
								isUploaded : true,
								xtype : 'attachmentlist',
								name : 'attachlist',
								id : this.attachId,
								postParams : {
									relationId : 0,
									groupId : 'techchangeConfirm',
									dataorgid : dataorgid,
									operatorid : operatorid,
									operatorname : operatorname
								},
								isDownload : true,
								fieldLabel : '附件列表',
								title : '附件列表',
								itemId : 'attachmentlist'
							}, {
								xtype : "hidden",
								ref : '../techId',
								value : techChangeThird.techId,
								name : 'techId'
							}, {
								xtype : "hidden",
								ref : '../confirmId',
								name : 'confirmId'
							}],
					buttons : [{
								text : "提交",
								scope : this,
								ref:'../saveBtn',
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.onClose();
								}
							}]

				});

	}

	this.initViewPanel = function() {
		var description = "techChange/view/view.jsp";
		this.viewPanel = new Ext.Panel({
					autoScroll : true,
					autoHeight : true,
					// title : '【 工单查看 】',
					// region : "center",
					closable : false,
					xtype : 'panel',
					autoLoad : {
						url : description,
						scripts : true,
						params : {
							techId : techChangeThird.techId
						}
					}

				});

	}

}