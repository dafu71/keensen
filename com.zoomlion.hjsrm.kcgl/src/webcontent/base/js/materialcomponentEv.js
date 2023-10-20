com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr.prototype.initEvent = function() {
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
};

com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};

com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr.prototype.onInsert = function() {
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
			url : "com.zoomlion.hjsrm.kcgl.stockmanage.addComponent.biz.ext",
			jsonData : this.inputPanel.form.getValues(),
			success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var flag = ret.ret;
					if (flag == 0) {
						_this.inputPanel.form.reset();
						_this.inputWindow.hide();
						_this.listPanel.store.reload();
					}else if(flag == 1){
						Ext.Msg.alert("操作提示", '大件物料不存在,请重新输入物料编码');
					}else if(flag == 3){
						Ext.Msg.alert("操作提示", '车型物料不存在,请重新输入物料编码');
					}else{
						Ext.Msg.alert("操作提示", '车型对应大件物料已存在,不能重复添加,请重新输入物料编码');
					}
						
			},
			callback : function() {
				_this.requestMask.hide()
			}
	})		
};

com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr.prototype.onAddSupplier = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	}else{
		var matnr = records[0].get('matnr')	;
		this.supplierPanel.form.findField('supplier/matnr').setValue(matnr);
		this.supplierWindow.show();
	}

};

com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr.prototype.onInsertSupplier = function() {
	var _this = this;
	if (!this.supplierPanel.form.isValid()) {
			return;
	}
	this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
	this.requestMask.show();
	Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.kcgl.stockmanage.addSupplier.biz.ext",
			jsonData : this.supplierPanel.form.getValues(),
			success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var flag = ret.flag;
					if (flag == 0) {
						_this.supplierPanel.form.reset();
						_this.supplierWindow.hide();
						_this.listPanel.store.reload();
					}else if(flag==2){
						Ext.Msg.alert("操作提示", '物料不存在,请重新输入物料编码');
					}else{
						Ext.Msg.alert("操作提示", '大件物料对应供应商已存在,请重新选择供应商');
					}
						
			},
			callback : function() {
				_this.requestMask.hide()
			}
	})		
};

