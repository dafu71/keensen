com.keensen.ump.qinsen.quality.DefectMgr.prototype.initEvent = function() {

	var _this = this;

	if (!Ext.isEmpty(tumoBatchNo4Search) && 'null' != tumoBatchNo4Search) {
		// alert(tumoBatchNo4Search);
		this.queryPanel.tumoBatchNoStr.setValue(tumoBatchNo4Search);
		this.queryPanel.form.findField('condition/produceDtStart').setValue('');
		this.queryPanel.form.findField('condition/produceDtEnd').setValue('');
		var store = this.listPanel.store;
		store.baseParams = {
			'condition/tumoBatchNoStr' : tumoBatchNo4Search
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});

	}

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var recordId = r.data.recordId;
				recordId = recordId + '';

				if (recordId.substr(0, 1) != '2') {
					Ext.Msg.alert('系统提示', '一期数据不能删除');
					return false;
				}
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.qinsen.quality.DefectMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.base.storage.exportStorage.biz.ext",
		method : "post",
		jsonData : daochu,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					var fname = ret.fname;
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAdd = function() {
	// this.inputWindow.show();

}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.destroy = function() {
	this.defectTmWin.destroy();
	this.defectTmWin2.destroy();
	this.defectZmWin.destroy();
	this.defectZmWin2.destroy();
}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

// 涂膜录入涂膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddTm = function() {
	this.defectTmWin.show();
};

// 涂膜录入铸膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddZm = function() {
	this.defectZmWin.show();
};

// 裁膜录入涂膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddTm2 = function() {
	this.defectTmWin2.show();
};

// 裁膜录入铸膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddZm2 = function() {
	this.defectZmWin2.show();
};