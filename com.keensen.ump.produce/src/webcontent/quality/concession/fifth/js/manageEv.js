com.keensen.ump.produce.quality.concessionFifthMgr.prototype.initEvent = function() {
	var _this = this;
	var prodSpecId = '';
	var r = new Ext.data.Record({
				processinstid : processinstid
			});
	this.viewPanel.loadData(r);

	this.viewPanel.mon(this.viewPanel, 'afterload', function() {
				var recordIds = this.viewPanel.form.findField('reserve1')
						.getValue();
				var pkid = this.viewPanel.form.findField('id')
						.getValue();
				this.inputPanel.form.findField('id')
						.setValue(pkid);
				prodSpecId = this.viewPanel.form.findField('prodSpecId')
						.getValue();
				var store = this.listPanel.store;
				store.load({
							params : {
								'condition/recordIds' : recordIds
							}
						});
			}, this);
	this.listPanel.store.on('load', function() {
				_this.viewPanel.form.findField('prodSpecId')
						.setValue(prodSpecId);
			})
}

com.keensen.ump.produce.quality.concessionFifthMgr.prototype.onSave = function() {
	// 校验
	if (!this.inputPanel.form.isValid()) {// 基础数据校验
		return;
	}

	this.inputPanel.saveBtn.disable();

	// 提交
	var _this = this;
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在提交，请稍候!'
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.concession.saveFifth.biz.ext',
				jsonData : {
					map : this.inputPanel.form.getValues(),
					workitemid : workitemid,
					processinstid : processinstid
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var list = Ext.getCmp(listId);
						if (list) {// 重新加载待办任务列表
							list.store.reload();
						}
						(function() {
								closeMyTab();
							}).defer(200);

					} else {
						mk.hide();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
}

com.keensen.ump.produce.quality.concessionFifthMgr.prototype.onClose = function() {
	closeMyTab();
}

function closeMyTab() {
	var tabId = "workinglistid";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}

// 驳回
com.keensen.ump.produce.quality.concessionFifthMgr.prototype.onRefuse = function() {
	var _this = this;
	var advise = this.inputPanel.form.findField('advise').getValue();
	if (Ext.isEmpty(advise)) {
		Ext.Msg.alert("系统提示", "请填写意见!");
		return;
	} else {

		var mk = new Ext.LoadMask(Ext.getBody(), {
					msg : '正在提交，请稍候!'
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.quality.concession.saveBack.biz.ext',
			jsonData : {
				map : this.inputPanel.form.getValues(),
				workitemid : workitemid,
				processinstid : processinstid
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					var list = Ext.getCmp(listId);
					if (list) {// 重新加载待办任务列表
						list.store.reload();
					}
		(function	() {
						closeMyTab();
					}).defer(200);

				} else {
					mk.hide();
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}
}