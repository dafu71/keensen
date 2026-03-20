com.keensen.ump.produce.component.household.DegradeMgr.prototype.initEvent = function() {
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.produce.component.household.DegradeMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.component.household.DegradeMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var materSpecCode = A.get('materSpecCode');
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

/*com.keensen.ump.produce.component.household.DegradeMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.base.storage.exportStorage.biz.ext",
		method : "post",
		jsonData : daochu,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					var fname = ret.fname;
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}*/

com.keensen.ump.produce.component.household.DegradeMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.component.household.DegradeMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();

}

com.keensen.ump.produce.component.household.DegradeMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.component.household.DegradeMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '家用膜降级元件',
			'com.keensen.ump.produce.component.household.queryDegrade');

}

com.keensen.ump.produce.component.household.DegradeMgr.prototype.onCalc = function(v) {
	var obj = !this.inputWindow.hidden?this.inputWindow:this.editWindow;
	var prodSpec = obj.prodSpecId;
	var prodSpecId = prodSpec.getValue();
	if(Ext.isEmpty(prodSpecId)){
		Ext.Msg.alert("系统提示", "请选择卷膜执行型号!");
		return false;
	}
	
	var store = prodSpec.store;	
	var i = store.find('id', prodSpecId);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到数据!");
		return false;
	}
	var rec = store.getAt(i);
	var blankingSize2 = rec.get('blankingSize');
	
	var blankingSize = roundToDecimalPlace(blankingSize2 * v,2);
	obj.blankingSize.setValue(blankingSize);
	
	
};

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}