com.zoomlion.hjsrm.srmclient.ReadDealMgr = function() {
	this.initPanel = function() {
		this.initInputPanel();
		this.initViewPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'readdealMgr',
					panels : [this.inputPanel, this.viewPanel]
				});
	}

	this.initInputPanel = function() {
		this.attachId = Ext.id();
		this.inputPanel = this.inputPanel || new Ext.form.FormPanel({
					height : 200,
					autoHide : false,

					buttonAlign : 'center',
					padding : "5 5 5 5",
					footerStyle : 'background-color: #dfe8f6;',
					layout : "form",
					labelWidth : 70,
					defaults : {
						anchor : '95%',
						msgTarget : 'side'
					},
					title : '【 阅读处理 】',
					items : [{
								xtype : 'textfield',
								width : 700,
								height : 50,
								name : 'readdeal/content',
								allowBlank : false,
								fieldLabel : '&nbsp;&nbsp;&nbsp;&nbsp;内容'
							}, {

								width : 700,
								isUploaded : true,
								xtype : 'attachmentlist',
								name : 'attachlist',
								id : this.attachId,
								postParams : {
									relationId : 0,
									groupId : 'readdeal',
									dataorgid : dataorgid,
									operatorid : operatorid,
									operatorname : operatorname
								},
								isDownload : true,
								fieldLabel : '附件列表',
								title : '附件列表',
								itemId : 'attachmentlist'
							}, {
								xtype : 'hidden',
								name : 'readdeal/pkid'
							}, {
								xtype : 'hidden',
								name : 'readdeal/readPkid',
								value : readPkid
							}],
					buttons : [{
								text : '已读',
								scope : this,
								handler : this.onSave
							}, {
								text : '关闭',
								scope : this,
								handler : this.onClose
							}]

				})
	}

	this.initViewPanel = function() {
		this.viewPanel = this.viewPanel || new Ext.Panel({
			        autoScroll : true,
					title : '【 工单查看 】',
					// region : "center",
					closable : false,
					xtype : 'panel',
					autoLoad : {
						url : description,
						scripts : true,
						params : {
							processinstid : processinstid
						}
					}

				});
	}

}