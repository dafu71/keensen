com.keensen.ump.produce.component.vstorage.VstorageInputMgr.prototype.initEvent = function() {

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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);
			
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);

			}, this);

}

com.keensen.ump.produce.component.vstorage.VstorageInputMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.vstorage.VstorageInputMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.vstorage.VstorageInputMgr.prototype.onScan = function() {

	var _this = this;
	var batchNo = this.inputPanel.batchNo.getValue();

	if (Ext.isEmpty(batchNo)) {
		return;
	}

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.base.common.query.biz.ext',
		jsonData : {
			"condition/batchNo" : batchNo,
			"nameSqlId" : "com.keensen.ump.produce.component.vstorage.queryJuanmo"
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var data = result.data;

			if (Ext.isEmpty(data)) {
				_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">卷膜序号不存在或已在虚拟仓或已请检</p>');
				_this.inputPanel.batchNo.setValue('');
				
			} else {
				_this.inputPanel.msg.setValue('');
				_this.inputPanel.prodSpecName.setValue(data[0].prodSpecName);
				
				_this.onSave();

			}
		}
	});
}

com.keensen.ump.produce.component.vstorage.VstorageInputMgr.prototype.onSave = function() {
	var _this = this;
	
	if (this.inputPanel.form.isValid()) {
		
		var exceptionType = _this.inputPanel.exceptionType.getValue();
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			method : "POST",
			url : 'com.keensen.ump.produce.component.vstorage.saveVstorage.biz.ext',
			jsonData : this.inputPanel.form.getValues(),

			success : function(F) {
				var B = Ext.decode(F.responseText);
				if (B.success) {
					Ext.MessageBox.alert("操作提示", "保存成功!", function() {
								_this.listPanel.store.reload({});
								_this.inputPanel.form.reset();
								_this.inputPanel.exceptionType.setValue(exceptionType);
								_this.inputPanel.batchNo.focus().defer(100);
							})
				}
			},
			failure : function(C, B) {
				if (B.result.exception) {
					var A, E;
					if (B.result.exception.extype == "biz") {
						E = "【" + B.result.exception.message + "】";
						A = Ext.Msg.WARNING;
					} else {
						A = Ext.Msg.ERROR;
						E = "【系统发生异常！请与管理员联系】";
					}
					Ext.Msg.show({
								width : 350,
								title : "操作提示",
								msg : E,
								icon : A,
								buttons : Ext.Msg.OK
							})
				}
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

