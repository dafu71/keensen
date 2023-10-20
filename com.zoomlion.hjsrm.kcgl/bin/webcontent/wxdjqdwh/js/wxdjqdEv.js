/*
 * 示例event @author rye
 */

com.zoomlion.hjsrm.kcgl.DjqdwhMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();

}
com.zoomlion.hjsrm.kcgl.DjqdwhMgr.prototype.initEvent = function() {

	// 增加查询事件
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.kcgl.DjqdwhMgr.prototype.onAdd = function() {
	var _this = this;
	this.inputWindow.show();

};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.kcgl.DjqdwhMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.kcgl.DjqdwhMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};
