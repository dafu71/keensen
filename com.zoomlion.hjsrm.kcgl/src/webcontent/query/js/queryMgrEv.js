com.zoomlion.hjsrm.kcgl.QueryMgr.prototype.initEvent = function() {

}

com.zoomlion.hjsrm.kcgl.QueryMgr.prototype.onReset = function() {
	this.queryPanel.form.reset();
}

com.zoomlion.hjsrm.kcgl.QueryMgr.prototype.exportExcel = function() {
	var zvern = this.queryPanel.zvern.getValue();
	
	

	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.kcgl.kcglDaji.exportExcel.biz.ext',
		jsonData : {
			zvern : zvern
		},
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

}