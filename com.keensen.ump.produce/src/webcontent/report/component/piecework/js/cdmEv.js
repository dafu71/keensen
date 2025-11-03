com.keensen.ump.produce.report.component.CdmMgr.prototype.initEvent = function() {

	var _this = this;

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);
			
	this.listPanel.selModel.on('rowdeselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = {};
				}).defer(100);
			}, this);

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		if (this.queryPanel.form.isValid) {

			var store = this.listPanel.store;
			store.baseParams = vals;
			store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}
	}, this);

	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();
				if (records.length == 0) {
					Ext.getCmp(quantityTotalId4cdm).setValue('');
				} else {
					var quantityTotal = records[0].data.quantityTotal;
					Ext.getCmp(quantityTotalId4cdm).setValue('产量合计:'
							+ quantityTotal);
				}
			});

}

com.keensen.ump.produce.report.component.CdmMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'裁叠膜产量统计',
			'com.keensen.ump.produce.component.productioncount.queryProducCdmList',
			'0,1');

}

com.keensen.ump.produce.report.component.CdmMgr.prototype.onCalculate = function() {

	var _this = this;
	var relationId = _this.rec.data['relationId'];
	if (Ext.isEmpty(relationId))
		return;

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.productioncount.calculateProductionCdmList.biz.ext",
		method : "post",
		jsonData : {
			'param/relationId' : relationId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					_this.listPanel.store.reload();
					_this.rec = {};
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})

}