com.zoomlion.hjsrm.srmclient.ReadHistoryMgr.prototype.initEvent = function() {

}

function showFile(v) {
	var attachmentParams = {
		relationId : v,
		groupId : 'readdeal'
	};
	var fid = Ext.getCmp(filewindow).fid;
	Ext.getCmp(fid).setPostParams(attachmentParams);
	Ext.getCmp(fid).loadParams = attachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
	Ext.getCmp(filewindow).show();
}