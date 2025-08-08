com.keensen.ump.produce.component.markprintMgr.prototype.initEvent = function() {

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

	this.viewDutyPanel.mon(this.viewDutyPanel, 'afterload',
			function(win, data) {

				if (Ext.isEmpty(data)) {
					this.viewDutyListPanel.store.removeAll();
				} else {

					this.viewDutyPanel.picturePanel.update('');
					if (!Ext.isEmpty(data.labelUrl)) {
						var labelUrl = labelRootUrl;
						labelUrl += data.labelUrl;

						labelUrl = '<img title="单击查看完整图片" src="'
								+ labelUrl
								+ '?ver='
								+ data.orderNo
								+ '" onclick= "javascript:window.open('
								+ "'"
								+ labelUrl
								+ "'"
								+ ');" style="cursor: pointer;width:auto; height:auto; max-width:98%; max-height:50px;" />';

						this.viewDutyPanel.picturePanel.update(labelUrl);
					}

					var relationId = data.pkid;
					var store = this.viewDutyListPanel.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							})
				}
			}, this);

}

// 扫码
com.keensen.ump.produce.component.markprintMgr.prototype.onScan = function() {
	var _this = this;
	var obj = this.inputPanel.juanmoBatchNo;

	var isRecord = this.inputPanel.isRecord.getValue();
	
	var isStar = this.inputPanel.isStar.getValue();

	var juanmoBatchNo = obj.getValue();
	if (Ext.isEmpty(juanmoBatchNo)) {
		Ext.Msg.alert("系统提示", "请输入卷膜序号！");
		return;
	}
	this.inputPanel.remark.setValue('');
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.makprint.queryMarkPrint.biz.ext',
		jsonData : {
			"condition/prodBatchNo" : juanmoBatchNo
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.msg != 1) {
				Ext.Msg.alert("系统提示", result.msg, function() {
							_this.inputPanel.juanmoBatchNo.setValue('');
							_this.inputPanel.juanmoBatchNo.focus().defer(100);

						});

			} else {
				var data = result.data[0];
				var dryWet2 = data.dryWet2;
				var dryWet = data.dryWet;

				var prodBatchNo = data.prodBatchNo
				var str = '';
				if (Ext.isEmpty(data.orderNo)) {
					str += "没有找到订单信息\n";
					_this.inputPanel.remark.setValue(str);

					return;

				}

				_this.inputPanel.orderNo.setValue(data.orderNo);
				_this.inputPanel.juanmoBatchNo.setValue(data.juanmoBatchNo);
				_this.inputPanel.prodSpecName.setValue(data.prodSpecName);
				_this.inputPanel.prodSpecName2.setValue(data.prodSpecName2);
				_this.inputPanel.dryWet.setValue(data.dryWet);
				_this.inputPanel.dryWet2.setValue(data.dryWet2);
				_this.inputPanel.prodBatchNo.setValue(data.prodBatchNo);

				if (!isRecord) {
					if (Ext.isEmpty(data.url)) {
						str += "没有找到唛头图纸\n";
					}
					if (dryWet.indexOf(dryWet2) == -1) {
						str += "生产为" + dryWet2 + "膜,订单为" + dryWet + "膜\n";
					}
					if (!Ext.isEmpty(str)) {
						_this.inputPanel.remark.setValue(str);
						return;
					}
				}
				if (!isRecord) {
					
					var f = document.getElementById('componentmarkprintForm');
					//f.prodBatchNo.value = data.prodBatchNo;
					f.prodBatchNo.value = data.printBatchNo;
					f.dryWet.value = data.dryWet2;
					f.url.value = data.url;
					f.prodSpecName.value = data.prodSpecName;
					f.prodSpecName2.value = data.prodSpecName2;
					f.code.value = data.code;
					f.isStar.value = isStar == true?"Y":"N"; 
					f.templateName.value = data.templateName;
					
					var actionUrl = 'com.keensen.ump.produce.component.printMark.flow?time='
							+ Math.random() + '&token=' + Date.now();

					f.action = actionUrl;
					f.submit();
					_this.inputPanel.prodBatchNo.setValue('');
					_this.inputPanel.juanmoBatchNo.setValue('');
				} else {

					var mk = new Ext.LoadMask(Ext.getBody(), {
								msg : '正在保存，请稍候!',
								removeMask : true
							});
					mk.show();

					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.keensen.ump.produce.component.makprint.savePackage.biz.ext',
						jsonData : {
							'entity/batchNo' : juanmoBatchNo,
							'entity/prodBatchNo' : prodBatchNo
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								_this.listPanel.store.reload();
								_this.inputPanel.form.reset();
								_this.inputPanel.remark.setValue('包装记录保存成功!');

							}
						},
						failure : function(resp, opts) {
							mk.hide();
						}
					});

				}
			}
		}
	});
}

com.keensen.ump.produce.component.markprintMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.markprintMgr.prototype.onReset = function() {
	this.inputPanel.form.reset();
	this.inputPanel.prodBatchNo.focus(false, 100);
}

com.keensen.ump.produce.component.markprintMgr.prototype.onDuty = function() {
	var A = {};
	A.data = {
		id : 1
	};
	this.viewDutyPanel.form.reset();
	if (!this.viewDutyWindow.isVisible()) {
		this.viewDutyWindow.show();
	}
	this.viewDutyPanel.loadData(A);

}