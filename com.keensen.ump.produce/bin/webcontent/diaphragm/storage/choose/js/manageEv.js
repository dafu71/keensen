com.keensen.ump.produce.diaphragm.storage.StorageChooseMgr.prototype.initEvent = function() {

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

}

function dealchoose(rkflag, batchNo, index) {
	var A = Ext.getCmp('choose-list');
	var title = rkflag == 'n' ? '是否生成入库单?' : '是否取消入库单?';
	Ext.Msg.confirm("系统提示", title, function(btnText) {
		if (btnText == "yes") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.diaphragm.storage.choose.createRukudan.biz.ext',
				jsonData : {
					"flag" : rkflag,
					"recordId" : index,
					"batchNo" : batchNo
				},
				success : function(response, action) {
					A.store.load({
								params : {
									"pageCond/begin" : 0,
									"pageCond/length" : A.pagingToolbar.pageSize
								}
							});
				}
			});
		}
	})

}