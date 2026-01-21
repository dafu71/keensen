com.keensen.ump.base.AppearancestandMgr.prototype.initEvent = function() {
	
	this.initList();
	
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

	this.queryPanel4PackageA.mon(this.queryPanel4PackageA, 'query', function(
			form, vals) {
		var store = this.listPanel4PackageA.store;
		store.baseParams = vals;
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.listPanel4PackageA.pagingToolbar.pageSize
			}
		});
	}, this);

	this.queryPanel4PackageB.mon(this.queryPanel4PackageB, 'query', function(
			form, vals) {
		var store = this.listPanel4PackageB.store;
		store.baseParams = vals;
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.listPanel4PackageB.pagingToolbar.pageSize
			}
		});
	}, this);

	this.queryPanel4PackageC.mon(this.queryPanel4PackageC, 'query', function(
			form, vals) {
		var store = this.listPanel4PackageC.store;
		store.baseParams = vals;
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.listPanel4PackageC.pagingToolbar.pageSize
			}
		});
	}, this);

	// 修改事件
	this.listPanel4PackageA.mon(this.listPanel4PackageA, 'update', function(
					gird, cell) {
				this.editWindow4PackageA.show();
				this.editWindow4PackageA.loadData(cell);
			}, this);

	this.listPanel4PackageB.mon(this.listPanel4PackageB, 'update', function(
					gird, cell) {
				this.editWindow4PackageB.show();
				this.editWindow4PackageB.loadData(cell);
			}, this);

	this.listPanel4PackageC.mon(this.listPanel4PackageC, 'update', function(
					gird, cell) {
				this.editWindow4PackageC.show();
				this.editWindow4PackageC.loadData(cell);
			}, this);

	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
}

com.keensen.ump.base.AppearancestandMgr.prototype.onDelete = function() {

	this.listPanel.onDel();

}

com.keensen.ump.base.AppearancestandMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '司标元件外观标准',
			'com.keensen.ump.base.appearancestd.queryAppearanceStand');
}

com.keensen.ump.base.AppearancestandMgr.prototype.onPackageA = function() {
	this.packageAWindow.show();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onAddPackageA = function() {
	this.inputWindow4PackageA.show();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onEditPackageA = function() {
	this.listPanel4PackageA.onEdit();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onPackageB = function() {
	this.packageBWindow.show();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onAddPackageB = function() {
	this.inputWindow4PackageB.show();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onEditPackageB = function() {
	this.listPanel4PackageB.onEdit();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onPackageC = function() {
	this.packageCWindow.show();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onAddPackageC = function() {
	this.inputWindow4PackageC.show();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onEditPackageC = function() {
	this.listPanel4PackageC.onEdit();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onAdd = function() {
	this.inputWindow.show();
}

com.keensen.ump.base.AppearancestandMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.base.AppearancestandMgr.prototype.initList = function() {
	var findElement2 = function(arr, target) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === target) {
				return i; // 返回索引
			}
		}
		return -1; // 未找到返回-1
	}
	var arr = ['膜元件包装袋受控图纸编号', '膜元件包装箱受控图纸编号', '装箱标准', '膜元件端盖类型', '膜元件包装箱打托要求',
			'膜元件密封圈位置和数量', '膜元件包装端盖要求', '膜元件包装袋封口', '膜元件包装箱封口', 'QC标识',
			'整托货物警示标识', '膜体胶带颜色', '白膜进水端中心管长上限(mm)', '白膜出水端中心管长下限(mm)',
			'中心管连接适配器材质'];
	var cm = this.listPanel.getColumnModel(); // 获取列模型
	var length = cm.getColumnCount();
	for (var i = 0; i < length; i++) {
		var title2 = cm.getColumnHeader(i);
		if (findElement2(arr, title2) > -1)
			cm.setHidden(i, true);
	}
}