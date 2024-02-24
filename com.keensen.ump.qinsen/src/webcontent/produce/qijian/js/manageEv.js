com.keensen.ump.qinsen.produce.qijianMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/produceDtStart'];
		var end = vals['condition/produceDtEnd'];
		if (dayDiff(start, end) > 31) {
			Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
			return false;

		}
		var store = this.listPanel.store;

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.qijianAddWindow.juanMoBatchNo.on('keydown', function(field, e, eOpts) {
				if (e.keyCode == 13 && field.getValue()) {
					_this.dealJuanMoBatchNo();
				}
			});
	this.qijianAddWindow.checkResult.on('keydown', function(field, e, eOpts) {
				if (e.keyCode == 13 && field.getValue()) {
					_this.judge();
				}
			});

	// 气检记录-录入
	this.qijianAddWindow.activeItem.mon(this.qijianAddWindow.activeItem,
			'beforeSave', function() {

				if (Ext.isEmpty(this.qijianAddWindow.juanmoBatchId.getValue())) {
					Ext.Msg.alert("系统提示", '卷膜序号未通过验证');
					return false;
				}
				if (Ext.isEmpty(this.qijianAddWindow.isQualified.getValue())) {
					Ext.Msg.alert("系统提示", '没有判定结论');
					return false;
				}
				if (this.qijianAddWindow.isQualified.getValue() == 'N'
						&& Ext.isEmpty(this.qijianAddWindow.ngReasonId
								.getValue())) {
					Ext.Msg.alert("系统提示", '不合格时请选择不良类型');
					return false;
				}
			}, this);
			
	this.qijianEditWindow.activeItem.mon(this.qijianEditWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.produceDt) {
					data.produceDt = data.produceDt.split('.')[0];
					var date1 = data.produceDt.replace(regEx, "/");
					this.qijianEditWindow.items.items[0].form
							.findField('entity/produceDt')
							.setValue(new Date(date1));
				}

			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var recordId = cell.data.recordId;
				recordId = recordId + '';
				if (recordId.substr(0, 1) != '2') {
					Ext.Msg.alert('系统提示', '一期数据不能修改');
					return false;
				}
				this.qijianEditWindow.show();
				this.qijianEditWindow.loadData(cell);
			}, this);
			
	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				if(C.length>1){
					Ext.Msg.alert('系统提示', '不能批量删除');
					return false;
				}
				
				var r = C[0];
				var recordId = r.data.recordId;
				recordId = recordId + '';

				if (recordId.substr(0, 1) != '2') {
					Ext.Msg.alert('系统提示', '一期数据不能删除');
					return false;
				}
			})
}

com.keensen.ump.qinsen.produce.qijianMgr.prototype.onAdd = function() {
	this.qijianAddWindow.show();
	this.qijianAddWindow.juanMoBatchNo.focus();
}

com.keensen.ump.qinsen.produce.qijianMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.qinsen.produce.qijianMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.qinsen.produce.qijianMgr.prototype.dealJuanMoBatchNo = function() {
	var _this = this;
	var batchNo = _this.qijianAddWindow.juanMoBatchNo.getValue();
	_this.qijianAddWindow.juanmoBatchId.setValue('');
	_this.qijianAddWindow.prodSpecId.reset();
	_this.qijianAddWindow.isFirst.setValue('');
	_this.qijianAddWindow.recordId.setValue('');
	_this.qijianAddWindow.isQualified.setValue('');
	_this.qijianAddWindow.ngReasonId.reset();

	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.qinsen.juanmo.queryRecord.biz.ext",
				method : "post",
				jsonData : {
					'map/batchNo' : batchNo
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (!Ext.isEmpty(ret.data)) {
							var dd = ret.data;
							_this.qijianAddWindow.juanmoBatchId
									.setValue(dd.recordId);
							_this.qijianAddWindow.orderNo.setValue(dd.orderNo);
							_this.qijianAddWindow.prodSpecId
									.setValue(dd.prodSpecId);
							_this.qijianAddWindow.stdStr.setValue(dd.stdStr);

							if (!Ext.isEmpty(dd.qjRecordId)) {
								Ext.Msg.confirm('确认', '该卷膜产品已有气检记录，请确认是否复检？',
										function(btn) {
											if (btn === 'yes') {
												_this.qijianAddWindow.isFirst
														.setValue(dd.isFirst);
												_this.qijianAddWindow.recordId
														.setValue(dd.qjRecordId);
											}
										});
							} else {
								_this.qijianAddWindow.isFirst
										.setValue(dd.isFirst);
							}

						} else {
							Ext.Msg.alert("系统提示", "卷膜序号不存在，请检查！", function() {
										_this.qijianAddWindow.juanMoBatchNo
												.setValue('');
										return false;
									})

						}
					}
				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.qinsen.produce.qijianMgr.prototype.judge = function() {
	var _this = this;
	_this.qijianAddWindow.isQualified.setValue('');
	var checkResult = _this.qijianAddWindow.checkResult.getValue();
	if (Ext.isEmpty(checkResult)) {
		return false;
	}
	var stdStr = _this.qijianAddWindow.stdStr.getValue();
	if (Ext.isEmpty(stdStr)) {
		return false;
	}
	var stdArr = stdStr.split('-');
	if (checkResult < stdArr[0] || checkResult > stdArr[1]) {
		_this.qijianAddWindow.isQualified.setValue('N');
	} else {
		_this.qijianAddWindow.isQualified.setValue('Y');
	}
	return true;
}

com.keensen.ump.qinsen.produce.qijianMgr.prototype.destroy = function() {
	this.qijianAddWindow.destroy();
	this.qijianEditWindow.destroy();

}