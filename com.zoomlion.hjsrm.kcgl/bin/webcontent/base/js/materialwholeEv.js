com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.initEvent = function() {
	
	this.queryPanel.mon(this.queryPanel, 'query', function() {
		var _val = this.queryPanel.getForm().getValues() || {};
		this.listPanel.store.baseParams = _val;
		this.listPanel.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}


com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};

com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.onInsert = function() {
	var _this = this;
	if (!this.inputPanel.form.isValid()) {
			return;
	}
	this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
	this.requestMask.show();
	Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.kcgl.stockmanage.addWhole.biz.ext",
			jsonData : this.inputPanel.form.getValues(),
			success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var flag = ret.ret;
					if (flag == 0) {
						_this.inputPanel.form.reset();
						_this.inputWindow.hide();
						_this.listPanel.store.reload();
					}else if(flag == 1){
						Ext.Msg.alert("操作提示", '物料不存在,请重新输入物料编码');
					}else{
						Ext.Msg.alert("操作提示", '车型物料已存在,请重新输入物料编码');
					}
						
			},
			callback : function() {
				_this.requestMask.hide()
			}
	})		
};

com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.onEdit = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	}else{
		var matnr = records[0].get('matnr')	;
		var zcpcx = records[0].get('zcpcx')	;
		this.editPanel.form.findField('whole/matnr').setValue(matnr);
		this.editPanel.form.findField('whole/zcpcx').setValue(zcpcx);
		this.editWindow.show();
	}

};

com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.onUpdate = function() {
	var _this = this;
	if (!this.editPanel.form.isValid()) {
			return;
	}
	this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
	this.requestMask.show();
	Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.kcgl.stockmanage.updateWhole.biz.ext",
			jsonData : this.editPanel.form.getValues(),
			success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						_this.editWindow.hide();
						_this.listPanel.store.reload();
					}
						
			},
			callback : function() {
				_this.requestMask.hide()
			}
	})		
};

com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.onAddComponent = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	}else{
		var pmatnr = records[0].get('matnr')	;
		this.componentPanel.form.findField('component/pmatnr').setValue(pmatnr);
		this.componentWindow.show();
	}

};

com.zoomlion.hjsrm.kcgl.MaterialwholeMgr.prototype.onInsertComponent = function() {
	var _this = this;
	if (!this.componentPanel.form.isValid()) {
			return;
	}
	this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
	this.requestMask.show();
	Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.kcgl.stockmanage.addComponent.biz.ext",
			jsonData : this.componentPanel.form.getValues(),
			success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var flag = ret.ret;
					if (flag == 0) {
						_this.componentPanel.form.reset();
						_this.componentWindow.hide();
						_this.listPanel.store.reload();
					}else if(flag == 1){
						Ext.Msg.alert("操作提示", '物料不存在,请重新输入物料编码');
					}else{
						Ext.Msg.alert("操作提示", '大件物料已存在,请重新输入物料编码');
					}
						
			},
			callback : function() {
				_this.requestMask.hide()
			}
	})		
};
