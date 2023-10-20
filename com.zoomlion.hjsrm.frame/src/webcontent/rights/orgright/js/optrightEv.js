com.zoomlion.hjsrm.orgright.orgrightMgr.prototype.destroy = function() {
	this.optorgMgr.orgQuerySetWin.destroy();
}
com.zoomlion.hjsrm.orgright.orgrightMgr.prototype.initEvent = function() {
	/**
	 * 操作员查询按钮触发事件处理
	 */
	this.operQueryPanel.mon(this.operQueryPanel, 'query', function(formpanel,
			vals) {
		var store = this.operGridPanel.store;
		delete vals[vals.param];
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.operGridPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}



/**
 * 人员机构查询权限配置
 */
com.zoomlion.hjsrm.orgright.orgrightMgr.prototype.onSetOrgQuery = function() {
	var record = this.operGridPanel.selModel.getSelections();
	if (record.length != 0) {
		if (record.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return;
		} else if(record[0].data.status == '3' || record[0].data.status == '2'){
				Ext.Msg.alert("系统提示", "该操作员已经被锁定或者注销!");
				return;
			} else {
			this.optorgMgr.orgQuerySetWin.show();
			this.optorgMgr.orgQuerySetPanel.store.operatorid = record[0].get('operatorid');
			this.optorgMgr.orgQuerySetPanel.store.load({
				params:{
					operatorid:record[0].get('operatorid')
				}
			});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
	}
}

