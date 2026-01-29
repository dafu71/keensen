com.keensen.ump.qinsen.produce.FeedingMgr.prototype.initEvent = function() {

	var _this = this;
	
	this.feedingPanel.store.on('load', function() {

				if (_this.feedingPanel.store.getCount() > 0) {
					var record = _this.feedingPanel.store.getAt(0);
					var weightTotal = record.get('weightTotal');
					Ext.getCmp(weightTotalId).setValue(weightTotal);
				} else {
					Ext.getCmp(weightTotalId).setValue('');
				}

			})

	this.queryFeedingPanel.mon(this.queryFeedingPanel, 'query', function(form,
			vals) {
		var store = this.feedingPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.feedingPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}

com.keensen.ump.qinsen.produce.FeedingMgr.prototype.exportFeeding = function() {
	doQuerySqlAndExport(this, this.queryFeedingPanel, this.feedingPanel,
			'涂膜生产加料记录', 'com.keensen.ump.qinsen.tumo.queryFeeding');
}