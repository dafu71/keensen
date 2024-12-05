com.keensen.ump.produce.component.applys.cstockMgr.prototype.initEvent = function() {
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
	
	// 查询事件
	this.queryPanel6.mon(this.queryPanel6, 'query', function(form, vals) {
		var store = this.listPanel6.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel6.pagingToolbar.pageSize
					}
				});
	}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {

			}, this);
			
	this.allocateWindow.activeItem.mon(this.allocateWindow.activeItem, 'beforeSave',
			function() {
				var batchNoStr = this.allocateWindow.batchNo.getValue();
				if (!Ext.isEmpty(batchNoStr)) {
					var regEx = new RegExp("\\n", "gi");
					batchNoStr = batchNoStr.replace(regEx, ",");
					batchNoStr = batchNoStr.replaceAll('，', ',');
					batchNoStr = batchNoStr.replaceAll(' ', '');
					var arr = [];
					arr = batchNoStr.split(',');
					var arr2 = [];
					for (var i = 0; i < arr.length; i++) {
						arr2.push(arr[i]);
					}
					this.allocateWindow.batchNoStr
							.setValue(arr2.join(",") == "''" ? null : arr2
									.join(","));
				}
				
			}, this);
}

com.keensen.ump.produce.component.applys.cstockMgr.prototype.onEdit = function() {
	// this.inputWindow.form.reset();
	this.inputWindow.show();
}

// 扫码
com.keensen.ump.produce.component.applys.cstockMgr.prototype.onScan = function() {
	var code =  this.inputWindow.code.getValue();
	var dcode = this.inputWindow.dcode.getValue();
	if (Ext.isEmpty(code) && Ext.isEmpty(dcode)) {
		Ext.Msg.alert("系统提示", "请选择调拨单或请检单！");
		return;
	}
	
	var batchNo = this.inputWindow.batchNo.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	
	this.inputWindow.saveData();
	
}

com.keensen.ump.produce.component.applys.cstockMgr.prototype.onStock = function() {
	// this.inputWindow.form.reset();
	this.stockWindow.show();
}

com.keensen.ump.produce.component.applys.cstockMgr.prototype.destroy = function() {
	this.inputWindow.destroy();
	this.stockWindow.destroy();
}

com.keensen.ump.produce.component.applys.cstockMgr.prototype.onQueryCode = function() {
	this.codeStore.reload();
	this.dcodeStore.reload();
}

com.keensen.ump.produce.component.applys.cstockMgr.prototype.onAllocate = function() {
	this.allocateWindow.form.reset();
	this.allocateWindow.show();
}

com.keensen.ump.produce.component.applys.cstockMgr.prototype.onAllocate2 = function() {
	this.hhallocatePanel.form.reset();
	this.hhallocateWindow.show();
}

com.keensen.ump.produce.component.applys.cstockMgr.prototype.onSaveHHAllocate = function() {
	var _this = this;

	var itemArr = [];
	var myCheckboxGroup = this.hhallocatePanel.myabnormal;
	for (var i = 0; i < myCheckboxGroup.items.length; i++) {
		if (myCheckboxGroup.items.itemAt(i).checked) {
			itemArr.push(i);
		}
	}

	this.hhallocatePanel.abnormal.setValue(itemArr.join(','));	

	if (this.hhallocatePanel.form.isValid()) {		

		var mk = new Ext.LoadMask(this.hhallocateWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.applys.addHHApply2.biz.ext',
					jsonData : {
						'entity' : this.hhallocatePanel.form.getValues()
					},
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							// _this.listPanel.store.load();
							_this.listPanel.refresh();
							_this.hhallocateWindow.hide();
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
