com.keensen.ump.produce.component.ReworkResultMgr.prototype.initEvent = function() {

	var me = this;

	this.countReworkStore.load();

	this.countReworkStore.on('load', function() {

				var records = me.countReworkStore.getRange();
				var msg = '';
				Ext.each(records, function(r) {
							var step = r.data['step'];
							var cnt = r.data['cnt'];
							msg += step + ',共' + cnt + '条<br>';
						});
				
				// 创建一个简单的窗口
				var win = new Ext.Window({
							title : '系统提醒',
							width : 300,
							height : 240,
							layout : 'fit',
							items : [{
										xtype : 'panel',
										//title : '面板内容',
										html : msg
									}],
							buttons : [{
										text : '关闭',
										handler : function() {
											win.close();
										}
									}]
						});

				// 显示窗口
				win.show();

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

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.exportExcel = function() {

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.updateReworkByWaterTest = function() {

	var _this = this;
	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.prodrecord.updateReworkByWaterTest.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				Ext.Msg.alert("系统提示", "更新测试状态成功！", function() {
							_this.listPanel.store.load();

						})
			} else {
				Ext.Msg.alert("系统提示", "更新测试状态失败！")

			}

		},
		callback : function() {
			_this.requestMask.hide();

		}
	})
}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.onPlan = function() {

	this.excute('plan', '待下达返工执行计划');

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.onPlanJudge = function() {

	this.excute('planjudge', '待返工确认');

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.onQualityJudge = function() {

	this.excute('qualityjudge', '品管判定');

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.onQuality = function() {

	this.excute('quality', '品管意见');

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.onExcute = function() {

	this.excute('excute', '待执行返工生产');

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.onPlanModify = function() {

	this.excute('planmodify', '待执行返工生产');

}

com.keensen.ump.produce.component.ReworkResultMgr.prototype.excute = function(
		opt, title) {

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择记录！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < C.length; i++) {
			var step = C[i].data.step;
			if (step != title) {
				Ext.Msg.alert("系统提示", "请选择" + title + "的记录！");
				return;
			}
			arr.push(C[i].data.id);
		}

		var ids = arr.join(',')

		if (opt == 'planjudge') {
			this.planJudgeWindow.ids.setValue(ids);
			this.planJudgeWindow.show();
		}

		if (opt == 'plan') {
			this.planWindow.ids.setValue(ids);
			this.planWindow.show();
		}

		if (opt == 'qualityjudge') {
			this.qualityJudgeWindow.ids.setValue(ids);
			this.qualityJudgeWindow.show();
		}

		if (opt == 'quality') {
			this.qualityWindow.ids.setValue(ids);
			this.qualityWindow.show();
		}

		if (opt == 'excute') {
			this.excuteWindow.ids.setValue(ids);
			this.excuteWindow.show();
		}

		if (opt == 'planmodify') {
			Ext.Msg.confirm("系统提示", "您确定选择的记录状态变更为“待返工确认”吗？", function(D) {
				if (D == "yes") {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.keensen.ump.produce.component.prodrecord.updateRework.biz.ext',
						jsonData : {
							"param/ids" : ids,
							"param/step" : '待返工确认'
						},
						success : function(response, action) {
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "操作成功！", function() {
											A.store.reload({});

										})

							}

						}
					});
				}
			}, this)
		}
	}
}