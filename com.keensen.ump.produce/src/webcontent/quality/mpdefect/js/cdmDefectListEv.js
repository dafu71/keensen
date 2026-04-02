com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.initEvent = function() {

	var _this = this;
	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();
				if (records.length == 0) {
					Ext.getCmp(lengthTotalId).setValue('');
					return
				}

				var lengthTotal = records[0].data.lengthTotal;

				Ext.getCmp(lengthTotalId).setValue('不良长度合计(m):' + lengthTotal);
			})

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

	if (!Ext.isEmpty(relationId4Search) && 'null' != relationId4Search) {
		// alert(tumoBatchNo4Search);
		this.queryPanel.relationId.setValue(relationId4Search);
		this.queryPanel.cdmBatchNo.setValue(cdmBatchNo4Search);

		var store = this.listPanel.store;
		store.baseParams = {
			'condition/relationId' : relationId4Search
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});

	}

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.onDel = function() {

	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.onEditBatch = function() {
	
	var C = this.listPanel.getSelectionModel().getSelections();
	var arr = [];
	if (C.length > 0) {
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.id);
			
		}
		
		this.updateDeptWindow.ids.setValue(arr.join(','));
		this.updateDeptWindow.show();
	}
}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.onEdit = function() {
	if (this.onSingleSelect()) {
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert('系统提示', '请选择一条记录');
		return false;
	}
}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '裁叠膜工序不良记录',
			'com.keensen.ump.produce.quality.defect.queryCdmDefectList');
}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}