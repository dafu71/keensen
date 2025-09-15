com.keensen.ump.base.AppearancestdMgr.prototype.initEvent = function() {
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}

com.keensen.ump.base.AppearancestdMgr.prototype.onDelete = function() {

	this.listPanel.onDel();

}

com.keensen.ump.base.AppearancestdMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '司标元件外观标准',
			'com.keensen.ump.base.appearancestd.queryAppearanceStd');
}

com.keensen.ump.base.AppearancestdMgr.prototype.onDown = function() {

	var fname = "k3-template.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

