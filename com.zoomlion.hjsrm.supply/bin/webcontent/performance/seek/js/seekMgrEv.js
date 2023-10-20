com.zoomlion.hjsrm.supply.SeekMgr.prototype.initEvent = function() {

	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var colModel = this.listPanel.colModel;

		var ytype = this.combo.getValue();
		if (ytype == '1') {//月绩效,成本绩效隐藏
			this.Hidden_zcost = true;
		} else {
			this.Hidden_zcost = false;
		}
		if (ytype != '3') {//非年度绩效，质量体系/技术合作隐藏
			this.Hidden_zqtxi = true;
			this.Hidden_zjshz = true;
		}else{
			this.Hidden_zqtxi = false;
			this.Hidden_zjshz = false;
		}

		colModel.setHidden(10, this.Hidden_zcost);
		colModel.setHidden(11, this.Hidden_zqtxi);
		colModel.setHidden(12, this.Hidden_zjshz);

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

// 删除选定的绩效
com.zoomlion.hjsrm.supply.SeekMgr.prototype.onDelete = function() {
	this.listPanel.onDel();
}