com.keensen.ump.produce.quality.concessionViewMgr.prototype.initEvent = function() {
	var _this = this;
	var prodSpecId = '';
	var r = new Ext.data.Record({
				processinstid : processinstid
			});
	this.editPanel.loadData(r);

	this.editPanel.mon(this.editPanel, 'afterload', function() {
				var recordIds = this.editPanel.form.findField('reserve1')
						.getValue();

				prodSpecId = this.editPanel.form.findField('prodSpecId')
						.getValue();
				var store = this.listPanel.store;
				store.load({
							params : {
								'condition/recordIds' : recordIds
							}
						});
				this.editPanel.picturePanel.update('');
				var pictureUrl = this.editPanel.pictureUrl.getValue();
				var pictureUrl2 = this.editPanel.pictureUrl2.getValue();
				var pictureUrl3 = this.editPanel.pictureUrl3.getValue();
				var url = '';
				if(!Ext.isEmpty(pictureUrl)){
					url +='<a href="/default/' + pictureUrl + '" target=_blank>查看图片</a>';
					url +='&nbsp;&nbsp;&nbsp;&nbsp;'
				}
				if(!Ext.isEmpty(pictureUrl2)){
					url +='<a href="/default/' + pictureUrl2 + '" target=_blank>查看图片</a>';
					url +='&nbsp;&nbsp;&nbsp;&nbsp;'
				}
				if(!Ext.isEmpty(pictureUrl3)){
					url +='<a href="/default/' + pictureUrl3 + '" target=_blank>查看图片</a>';
					url +='&nbsp;&nbsp;&nbsp;&nbsp;'
				}
				this.editPanel.picturePanel.update(url);
			}, this);
	this.listPanel.store.on('load', function() {
				_this.editPanel.form.findField('prodSpecId')
						.setValue(prodSpecId);
			})
}

com.keensen.ump.produce.quality.concessionViewMgr.prototype.onSave = function() {
	// 校验
	if (!this.editPanel.form.isValid()) {// 基础数据校验
		return;
	}

	var itemArr = [];
	var myCheckboxGroup = this.editPanel.form.findField('myCheckboxGroup');
	for (var i = 0; i < myCheckboxGroup.items.length; i++) {
		if (myCheckboxGroup.items.itemAt(i).checked) {
			itemArr.push(i);
		}
	}
	
	this.editPanel.form.findField('myitems').setValue(itemArr.join(','));
	
	this.editPanel.saveBtn.disable();

	// 提交
	var _this = this;
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在提交，请稍候!'
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.concession.saveFirst.biz.ext',
				jsonData : {
					entity : this.editPanel.form.getValues(),
					'entity/myitems':itemArr.join(','),
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
	(function			() {
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

com.keensen.ump.produce.quality.concessionViewMgr.prototype.onInvalid = function() {
	// 提交
	var _this = this;
	var pkid = this.editPanel.form.findField('id').getValue();
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在提交，请稍候!'
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.concession.saveInvalid.biz.ext',
				jsonData : {
					'map/id' : pkid,
					'map/advise' : '作废放行单',
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
	(function			() {
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

com.keensen.ump.produce.quality.concessionViewMgr.prototype.onClose = function() {
	closeMyTab();
}

function closeMyTab() {
	//var tabId = "showprocess" + processinstid;
	
	var tabId = "showprocess";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}