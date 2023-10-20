com.zoomlion.hjsrm.techChange.Second = function() {
	this.initPanel = function() {
		this.initInputPanel();
		this.initViewPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'techChangeSecond',
					panels : [this.inputPanel, this.viewPanel]
				});
	}

	this.initInputPanel = function() {
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 150,
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
								fieldLabel : '处理意见<font style="color:red">*</font>',
								items : [{
											boxLabel : '同意',
											name : 'flag',
											inputValue : '1',
											checked : true
										}, {
											boxLabel : '驳回',
											name : 'flag',
											inputValue : '0'
										}]
							}, {
								xtype : 'textarea',
								anchor : '80%',
								colspan : 1,
								name : 'advise',
								fieldLabel : 'TC电子图<br>修改期限'
							}, {
								xtype : "hidden",
								ref : '../techId',
								value : techChangeSecond.techId,
								name : 'techId'
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
							techId : techChangeSecond.techId
						}
					}

				});

	}

}