/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 外协大件库存状态维护 创建日期： 2014-12-15 作 者： 刘鑫
 ******************************************************************************/

com.zoomlion.hjsrm.kcgl.WxdjkcztwhMgr.prototype.initEvent = function() {

	var _this = this;
	this.listPanel.store.on({
		scope : this,
		'load' : function() {

			var store = _this.listPanel.store;
			var current = '';
			var flag = 0;
			store.each(function(r) {
						if (r.data.zleibname == current) {
							r.data.flag = flag

						} else {
							flag += 1;
							r.data.flag = flag
						}
						current = r.data.zleibname;

					});
			var index = 0;
			store.each(function(r) {
				if (r.data.flag && (parseInt(r.data.flag) % 2) == 1) {
					_this.listPanel.getView().getRow(index).style.backgroundColor = "#E0E0E0";
				} else {
					_this.listPanel.getView().getRow(index).style.backgroundColor = "#BEBEBE"; 
				}
				index += 1;
			});

			// _this.listPanel.view.refresh();

		}

	});
}

com.zoomlion.hjsrm.kcgl.WxdjkcztwhMgr.prototype.destroy = function() {
	this.cxlbqdshowWindow.destroy();
}
com.zoomlion.hjsrm.kcgl.WxdjkcztwhMgr.prototype.onSaveok = function() {
	var D = this.listPanel;
	var B = [];
	if (!this.subAll) {
		B = D.store.getModifiedRecords()
	} else {
		B = D.store.getRange()
	}
	if (B.length == 0) {
		Ext.Msg.alert("系统提示", "没有提交待保存的数据");
		return
	}
	var C = [];
	for (var A = 0; A < B.length; A++) {
		r = B[A];
		C = C.concat(r.data)
	}
	var _this = this;
	var store = _this.listPanel.store;
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savewxdjkcztwh.biz.ext',
				jsonData : {
					list : C
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						Ext.Msg.alert("系统提示", "保存成功", function() {
									store.reload();
									//_this.listPanel.getForm().reset();
								});
					}
				}
			});

}
com.zoomlion.hjsrm.kcgl.WxdjkcztwhMgr.prototype.exportExcel = function() {
	var _this = this;
	var store = _this.listPanel.store;
	var cool = _this.listPanel.store.getRange();
	var vals = [];
	Ext.each(cool, function(r) {
				vals.push(r.data);
			});
	var templatename = "WxdjkcztwhMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcel.biz.ext',
		jsonData : {
			excels : vals,
			templatename : templatename
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
function showCxlbqd(t) {

	var record = new Ext.data.Record({
				"zleibname" : t
			});
	Ext.getCmp("cxlbqdShow").items.items[0].form.reset();
	Ext.getCmp("cxlbqdShow").items.items[0].loadData(record);
	Ext.getCmp("cxlbqdShow").show();
};
