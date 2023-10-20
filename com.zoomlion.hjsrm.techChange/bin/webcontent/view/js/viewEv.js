com.zoomlion.hjsrm.techChange.View.prototype.initEvent = function() {
	var cell = new Ext.data.Record({
				techId : techId
			})
	var attachmentParams = {
		relationId : techId,
		groupId : 'techchangefile'
	};
	Ext.getCmp(this.attachId).setPostParams(attachmentParams);
	Ext.getCmp(this.attachId).loadParams = attachmentParams;
	Ext.getCmp(this.attachId).loadAttachmentRemote();
	this.basePanel.loadData(cell);

	var store = this.listPanel2.store;
	store.baseParams = {
		"condition/techId" : techId
	};
	store.load({});

	var store = this.secondPanel.store;
	store.baseParams = {
		"condition/techId" : techId
	};
	store.load({});

	var store = this.thirdPanel.store;
	store.baseParams = {
		"condition/techId" : techId
	};
	store.load({});

	var store = this.fourthPanel.store;
	store.baseParams = {
		"condition/techId" : techId
	};
	store.load({});

	var store = this.fifthPanel.store;
	store.baseParams = {
		"condition/techId" : techId
	};
	store.load({});

	// 过滤显示
	this.fifthPanel.store.on({
				scope : this,
				'load' : function(o) {
					if (o.getCount() == 0) {
						this.fifthPanel.hide();
						return;
					}
				}
			});
			
	this.fourthPanel.store.on({
				scope : this,
				'load' : function(o) {
					if (o.getCount() == 0) {
						this.fourthPanel.hide();
						return;
					}
				}
			});
			
	this.thirdPanel.store.on({
				scope : this,
				'load' : function(o) {
					if (o.getCount() == 0) {
						this.thirdPanel.hide();
						return;
					}
				}
			});
			
	this.secondPanel.store.on({
				scope : this,
				'load' : function(o) {
					if (o.getCount() == 0) {
						this.secondPanel.hide();
						return;
					}
				}
			});

}

// 审核附件查看
function viewFiles(id) {
	var attachId = Ext.id();

	var attachmentParams = {
		relationId : id,
		groupId : 'techchangeConfirm'
	};
	var filePanel = new Ext.fn.EditPanel({
				height : 480,
				pgrid : '',
				columns : 2,
				autoHide : false,
				border : true,
				loadUrl : 'bbb.biz.ext',
				saveUrl : 'aaa.biz.ext',
				fields : [{
							colspan : 2,
							anchor : '100%',
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : attachId,
							postParams : {
								relationId : id,
								groupId : 'techchangeConfirm',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}]

			})

	var fileWindow = new Ext.Window({
				title : "附件查看",
				resizable : true,
				minimizable : false,
				maximizable : true,
				closeAction : "close",
				buttonAlign : "center",
				modal : true,
				autoScroll : true,
				width : 600,
				height : 480,
				layout : 'fit',
				items : [filePanel],
				buttons : [{
							text : "关闭",
							scope : this,
							handler : function() {
								fileWindow.hide();
							}
						}]

			});
	Ext.getCmp(attachId).setPostParams(attachmentParams);
	Ext.getCmp(attachId).loadParams = attachmentParams;
	Ext.getCmp(attachId).loadAttachmentRemote();
	fileWindow.show();
}