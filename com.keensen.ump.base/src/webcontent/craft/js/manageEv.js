com.keensen.ump.base.CraftMgr.prototype.initEvent = function() {

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				var store = this.listPanel.store;
				store.baseParams = vals;
				store.load({});
			}, this);

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);


}

com.keensen.ump.base.CraftMgr.prototype.modifyMater = function(materSpecId,
		field, fieldDescribe, newValue, oldValue) {

	// 此处加权限判定
	if (modifyLimit != 1)
		return false;
	var obj = {};
	obj['entity/materSpecId'] = materSpecId;
	obj['entity/' + field] = newValue;
	obj['entity/newValue'] = newValue;
	obj['entity/oldValue'] = oldValue;
	obj['entity/fieldDescribe'] = fieldDescribe;
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.qinsen.std.modifyMater.biz.ext',
				jsonData : obj,
				success : function(response, action) {
					var ret = Ext.decode(response.responseText);
					if (ret.success) {
						Ext.Msg.alert("系统提示", fieldDescribe + "修改成功！");
					} else {
						Ext.Msg.alert("系统提示", fieldDescribe + "修改失败！");
					}
				}
			});
}

com.keensen.ump.base.CraftMgr.prototype.onAdd = function() {
	this.inputWindow.show();
}

com.keensen.ump.base.CraftMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '卷制工艺参数',
			'com.keensen.ump.base.mater.queryMaterSpecList');

}