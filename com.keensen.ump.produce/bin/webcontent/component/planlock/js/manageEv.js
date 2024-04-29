com.keensen.ump.produce.component.planlockMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.component.planlockMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.planlockMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '2000',
			namingsql : 'com.keensen.ump.produce.component.order.queryYxOrderTrace',
			templateFilename : 'ks_component_yxordertrace_export'
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

com.keensen.ump.produce.component.planlockMgr.prototype.onPrint = function() {

	var planDate = this.queryPanel.planDate.getValue();

	if (Ext.isEmpty(planDate)) {
		Ext.Msg.alert("系统提示", "请输入作业日期！");
		return false;
	}
	planDate = formatDate(planDate);
	window
			.open(
					'com.keensen.ump.produce.component.planlock.flow?condition/size=8&condition/planDate='
							+ planDate, "top");

};

com.keensen.ump.produce.component.planlockMgr.prototype.onPrint2 = function() {

	var planDate = this.queryPanel.planDate.getValue();

	if (Ext.isEmpty(planDate)) {
		Ext.Msg.alert("系统提示", "请输入作业日期！");
		return false;
	}
	planDate = formatDate(planDate);
	window
			.open(
					'com.keensen.ump.produce.component.planlock.flow?condition/size=4&condition/planDate='
							+ planDate, "top");

};

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirm = function() {
	this.onConfirmDo(0);
}

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirm2 = function() {
	this.onConfirmDo(1);
}

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirm3 = function() {
	this.onConfirmDo(2);
}

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirmDo = function(
		v) {
	var confirmStatusArr = ['已裁完', '未裁完在现场', '未裁完退仓'];
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records && records.length != 0) {

		var list = [];

		Ext.each(records, function(r) {
					var d = {
						'batchNo' : r.data['batchNo'],
						'length' : r.data['residue'],
						'id' : r.data['id'],
						'confirmStatus' : confirmStatusArr[v],
						'deleted' : parseInt(v) == 1 ? 'N' : 'Y',
						'prodSpecId' : r.data['materSpecId'],
						'storageName' : '线边仓'
					}
					list.push(d);

				});
		var mk = new Ext.LoadMask(Ext.getBody(), {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.component.neworder.confirmPlanDayBatch.biz.ext',
			jsonData : {
				"list" : list
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					// _this.listPanel.store.load();
					_this.listPanel.refresh();
				} else {
					mk.hide();
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});

	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}
function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}
