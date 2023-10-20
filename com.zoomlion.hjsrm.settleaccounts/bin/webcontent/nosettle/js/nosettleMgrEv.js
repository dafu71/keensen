com.zoomlion.hjsrm.settleaccounts.NosettleMgr.prototype.initEvent = function() {
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

				var lifnr = this.queryPanel.lifnr.getValue();
				var werks = this.queryPanel.werks.getValue();
				if (Ext.isEmpty(lifnr)) {
					Ext.Msg.alert("系统提示", "请输入供应商编码!");
					return;
				} else if (Ext.isEmpty(werks)) {
					Ext.Msg.alert("系统提示", "请选择对应工厂!");
					return;
				} else {				
					if(lifnr.length < 10){
						var j = 10 - lifnr.length;
						for (var i = 0; i < j ; i++){
							lifnr = '0'+lifnr;
						}
					}
					var store = this.listPanel.store;					
                      vals["condition/lifnr"] = lifnr;
					/*
					 * var matnr2 = this.queryPanel.matnr2.getValue(); // 换行符替换
					 * var regEx = new RegExp("\\n", "gi"); matnr2 =
					 * matnr2.replace(regEx, ","); // 单引号替换 var regEx = new
					 * RegExp("'", "gi"); matnr2 = matnr2.replace(regEx, ""); //
					 * 中文逗号替换 var regEx = new RegExp("，", "gi"); matnr2 =
					 * matnr2.replace(regEx, ","); // 空格替换 var regEx = new
					 * RegExp("\\s", "gi"); matnr2 = matnr2.replace(regEx, ","); //
					 * 多个逗号替换 var regEx = new RegExp(",,", "gi"); matnr2 =
					 * matnr2.replace(regEx, ",");
					 * 
					 * if (!Ext.isEmpty(matnr2)) {
					 * 
					 * var arr = []; arr = matnr2.split(",");
					 * 
					 * var str = ""; for (var i = 0; i < arr.length; i++) { str +=
					 * "'" + arr[i] + "',"; }
					 * 
					 * str += "'0'"; this.queryPanel.matnrs.setValue(str);
					 * vals["condition/matnrs"] = str; }
					 * 
					 * var mblnr2 = this.queryPanel.mblnr2.getValue();
					 * 
					 * var regEx = new RegExp("\\n", "gi");
					 * 
					 * mblnr2 = mblnr2.replace(regEx, ","); var regEx = new
					 * RegExp("\\s", "gi"); mblnr2 = mblnr2.replace(regEx, ",");
					 * 
					 * var regEx = new RegExp(",,", "gi"); mblnr2 =
					 * mblnr2.replace(regEx, ",");
					 * 
					 * this.queryPanel.mblnrs.setValue(mblnr2);
					 * vals["condition/mblnrs"] = mblnr2;
					 */
					store.baseParams = vals;
					store.load(/*
								 * { params : { "pageCond/begin" : 0,
								 * "pageCond/length" :
								 * this.listPanel.pagingToolbar.pageSize } }
								 */);
				}

			}, this);
}

// 导出
com.zoomlion.hjsrm.settleaccounts.NosettleMgr.prototype.exportExcel = function() {
	var _this = this;
	var lifnr = this.queryPanel.lifnr.getValue();
	var werks = this.queryPanel.werks.getValue();
	if (Ext.isEmpty(lifnr)) {
		Ext.Msg.alert("系统提示", "请输入供应商编码!");
		return;
	} else if (Ext.isEmpty(werks)) {
		Ext.Msg.alert("系统提示", "请选择对应工厂!");
		return;
	} else {
		if(lifnr.length < 10){
						var j = 10 - lifnr.length;
						for (var i = 0; i < j ; i++){
							lifnr = '0'+lifnr;
						}
					}
		var daochu = _this.queryPanel.getForm().getValues();
		daochu["condition/lifnr"] = lifnr;
		var templatename = "nosettle";
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "正在执行操作..."
						});
		this.requestMask.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryNosettle.biz.ext',
			jsonData : daochu,
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcel.biz.ext',
						jsonData : {
							excels : result.data,
							templatename : templatename
						},
						success : function(response, action) {
							this.requestMask.hide();
							// 返回值处理
							var res = Ext.decode(response.responseText);
							if (res.success) {
								var fname = res.fname;
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
										+ fname;
							}
						},
						failure : function(resp, opts) {
							this.requestMask.hide();
						}
					});
				}
			}
		});
	}

}