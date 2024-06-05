com.keensen.ump.produce.quality.tumocheckMgr.prototype.initEvent = function() {

	var _this = this;
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

	this.editWindow.items.items[0].mon(this.editWindow.items.items[0],
			'aftersave', function() {
				this.listPanel.store.reload();
				/*
				 * var judgerName = this.editWindow.items.items[0].judgerName
				 * .getValue();
				 * 
				 * if (Ext.isEmpty(judgerName) || judgerName == '系统自动') {
				 * this.editWindow.items.items[0].judgercombobox.setValue(optId); }
				 */

		}, this);

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {

			})

}

com.keensen.ump.produce.quality.tumocheckMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.quality.quality.queryTumoCheck',
			templateFilename : 'ks_quality_tumocheck'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

/*
 * com.keensen.ump.produce.quality.tumocheckMgr.prototype.onJudgeBatch =
 * function() { // this.listPanel.onEdit(); var B =
 * this.listPanel.getSelectionModel().getSelections(); if (B && B.length != 0) {
 * if (B.length > 1) { Ext.Msg.alert("系统提示", "仅允许选择一条数据行!"); return } else { var
 * A = B[0]; // var materSpecCode = A.get('materSpecCode');
 * this.editWindow.items.items[0].loadData(A); this.editWindow.show(); //
 * this.editWindow.items.items[0].specId.setValue(materSpecCode); } } else {
 * Ext.Msg.alert("系统提示", "请选择一条数据行!"); return } }
 */

com.keensen.ump.produce.quality.tumocheckMgr.prototype.onJudgeBlock = function() {
	// this.listPanel.onEdit();
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length == 1) {
			var A = B[0];
			this.editWindow.items.items[0].loadData(A);
			this.editWindow.show();
		} else {
			// 批量保存样块性能人工判定
			var recordIds = [];
			Ext.each(B, function(r) {
						recordIds.push(r.data.recordId);
					});

			var url = 'com.keensen.ump.produce.quality.quality.saveTumocheckBatch.biz.ext';
			this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			this.requestMask.show();
			Ext.Ajax.request({
						url : url,
						method : "post",
						jsonData : {
							'recordIds' : recordIds.join(',')
						},
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								Ext.Msg.alert("系统提示", "样块性能判定成功!");
							}
							_this.listPanel.store.reload();
						},
						callback : function() {
							_this.requestMask.hide()
						}
					})
		}
	} else {
		Ext.Msg.alert("系统提示", "请选择数据!");
		return
	}
}

com.keensen.ump.produce.quality.tumocheckMgr.prototype.onDel = function() {
	var grid = this.listPanel;
	var _this = this;
	var C = grid.getSelectionModel().getSelections();
	if (C.length > 1) {
		Ext.Msg.alert('系统提示', '删除不支持批量操作，请选择1条记录');
		return false;
	} else {
		var url = 'com.keensen.ump.produce.quality.quality.deleteTumoCheck.biz.ext';
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
					url : url,
					method : "post",
					jsonData : {
						'entitys/recordId' : C[0].data.recordId
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "删除成功!");
						}
						_this.listPanel.store.reload();
					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
	}

};