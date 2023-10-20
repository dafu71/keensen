/*
 * 示例event @author rye
 */

com.zoomlion.hjsrm.kcgl.WxdjkccxMgr.prototype.initEvent = function() {

	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var _this = this;

		var matnr2 = _this.queryPanel.matnr2.getValue();
		var regEx = new RegExp("\\n", "gi");

		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		var regEx = new RegExp(",,", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		_this.queryPanel.matnr.setValue(matnr2);
		vals["condition/matnr"] = matnr2;

		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
		this.listPanel.msg.setValue();		
	}, this);
	
this.listPanel.store.on('load', function(o) {
		var t= o.getRange();
         if(t.length > 0){
				Ext.getCmp(msgxxx).setValue("库存金额汇总："+t[0].get('sum_menge'))
				}
			});
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.kcgl.WxdjkccxMgr.prototype.exportExcel = function() {
	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.kcgl.kcglDaji.exportExcelnew.biz.ext',
		success : function(response, action) {
			this.requestMask.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				var fname = result.fname;
				window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
						+ fname;
			}
		},
		failure : function(resp, opts) {
			this.requestMask.hide();
		}
	});
};