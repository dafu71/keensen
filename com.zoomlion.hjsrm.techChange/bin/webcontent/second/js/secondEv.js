com.zoomlion.hjsrm.techChange.Second.prototype.initEvent = function() {

}

// 保存
com.zoomlion.hjsrm.techChange.Second.prototype.onSave = function() {
	// 校验
	if (!this.inputPanel.form.isValid()) {// 基础数据校验
		return;
	}

	var flag = this.inputPanel.form.getValues()["flag"];
	var advise = this.inputPanel.form.getValues()["advise"];
	if (flag == 1 && Ext.isEmpty(advise)) {
		Ext.Msg.alert("系统提示", "请输入TC电子图修改期限");
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
				url : 'com.zoomlion.hjsrm.techChange.techChange.saveCheck.biz.ext',
				jsonData : {
					check : this.inputPanel.form.getValues(),
					workitemid : techChangeSecond.workitemid,
					processinstid : techChangeSecond.processinstid
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var list = Ext.getCmp(techChangeSecond.listId);
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

com.zoomlion.hjsrm.techChange.Second.prototype.onClose = function() {
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