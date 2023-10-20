com.zoomlion.hjsrm.rights.orgAuthMgr.prototype.initEvent = function() {
	// this.authTreePanel.disable();

	/**
	 * 列表中行双击事件处理
	 */
	this.gridPanel.mon(this.gridPanel, 'rowclick', function(grid, rowIndex,
					event) {
				var mk = new Ext.LoadMask(this.lay.id, {
							msg : '正在更新数据，请稍候！',
							removeMask : true
						});
				mk.show();
				var _this = this;
				var tree = this.authTreePanel;
				var store = this.gridPanel.store;

				var rec = store.getAt(rowIndex);
				tree.selRow = rowIndex;// 当前选择的行
				var loader = tree.getLoader();
				var orgid = rec.get('orgid');
				loader.baseParams['orgid'] = orgid;
				tree.getRootNode().reload();
				tree.getRootNode().deepExpand(false, function() {
							tree.collapseAll();
							mk.hide();
						}, this);
			}, this);

	this.authTreePanel.mon(this.authTreePanel, 'checkchange', function() {
				this.authTreePanel.isChanged = true;
			}, this);

}

com.zoomlion.hjsrm.rights.orgAuthMgr.prototype.onSaveRes = function() {
	var _this = this.authTreePanel;
	if (!_this.isChanged) {
		return;
	}
	var orgid = _this.loader.baseParams.orgid;
	var checks = _this.getChecked();
	var checkids = [];
	for (var i = 0; i < checks.length; i++) {
		checkids.push(checks[i].attributes['resid']);
	}
	var mk = new Ext.LoadMask(this.lay.id, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.frame.rights.orgauth.OrgAuthManage.saveResAuth.biz.ext',
		params : {
			'checkids' : checkids,
			'orgid' : orgid
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.success) {
				mk.hide();
				Ext.MessageBox.alert("提示", "设置成功!", function() {
						});
			}
		}
	});
}

/**
 * 收起事件
 */
com.zoomlion.hjsrm.rights.orgAuthMgr.prototype.doCollapseAll = function() {
	this.authTreePanel.collapseAll();
}

/**
 * 展开事件
 */
com.zoomlion.hjsrm.rights.orgAuthMgr.prototype.doExpandAll = function() {
	this.authTreePanel.expandAll();
}
