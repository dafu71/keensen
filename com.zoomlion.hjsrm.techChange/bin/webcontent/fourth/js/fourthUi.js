com.zoomlion.hjsrm.techChange.Fourth = function() {
	this.initPanel = function() {
		this.initInputPanel();
		this.initViewPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'techChangeFourth',
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
								fieldLabel : '研发修改<font style="color:red">*</font>',
								items : [{
											boxLabel : '已完成修改',
											name : 'flag',
											inputValue : '1',
											checked : true
										}, {
											boxLabel : '未完成修改',
											name : 'flag',
											inputValue : '0'
										}]
							}, {
								xtype : 'textarea',
								anchor : '80%',
								colspan : 1,
								name : 'advise',
								fieldLabel : '图样更改<br>通知单编码'
							}, {
								xtype : "hidden",
								ref : '../techId',
								value : techChangeFourth.techId,
								name : 'techId'
							}],
					buttons : [{
								text : "提交",
								scope : this,
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
							techId : techChangeFourth.techId
						}
					}

				});

	}

}