com.zoomlion.hjsrm.sysconfig.SysconfigMgr.prototype.initEvent = function() {
	var _this = this;
	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				var store = this.listPanel.store;
				store.baseParams = vals;
				store.load();
			}, this);
	
	//	根据dataorgid给所属公司默认值
	_this.combo = _this.queryPanel.getForm().findField('org');
	_this.combostore = _this.combo.store;
	_this.combostore.load({
		callback:function(){
			if(dataorgid != 0){
				_this.combo.setValue(dataorgid);
			}
		}
	});
	
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "正在执行操作..."
						});
		this.requestMask.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.frame.tools.sysconfig.SysconfigManage.loadSysconfig.biz.ext',
			jsonData : {
				entity : cell.data
			},
			success : function(response, action) {
				var result = Ext.decode(response.responseText);
				if (result.success) {
					CONFIGTEMP = Ext.decode(result.data.dicts);
					this.editWindow = this.getEditWindow(cell.data.paramtype);
					this.requestMask.hide();
					this.editWindow.show();
					this.editWindow.items.items[0].form
							.loadRecord(new Ext.data.Record(result.data));
				}
			}
		});
	}, this);
};

com.zoomlion.hjsrm.sysconfig.SysconfigMgr.prototype.reloadRache = function() {
	var mk = new Ext.LoadMask('sysconfigMgr', {
				msg : '正在刷新参数缓存，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		url : 'com.zoomlion.hjsrm.frame.tools.sysconfig.SysconfigManage.reloadSysconfigCache.biz.ext',
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.success) {
				mk.hide();
				Ext.Msg.alert("系统提示", "操作成功!");
			}
		}
	});
}
com.zoomlion.hjsrm.sysconfig.SysconfigMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.zoomlion.hjsrm.sysconfig.SysconfigMgr.prototype.upImage = function() {
	this.inputWindow.show();
}