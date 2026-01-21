com.keensen.ump.produce.component.storage.QueryMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.component.storage.QueryMgr.prototype.onAllocate = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();

		var arrBatchNos = [];
		var arrIds = [];
		Ext.each(C, function(r) {
					var batchNo = r.data.batchNo;
					var pkid = r.data.id;
					arrBatchNos.push(batchNo);
					arrIds.push(pkid);
				})
		this.allocateWindow.show();
		this.allocateWindow.batchNo.setValue(arrBatchNos.join(','));
		this.allocateWindow.ids.setValue(arrIds.join(','));
	}
}

com.keensen.ump.produce.component.storage.QueryMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '库存查询',
			'com.keensen.ump.produce.component.storage.queryStorage', '0,1');

}

//订单仓元件销售出库 flag=1
//不同卷膜型号、不同订单、不同仓位可同时出库
com.keensen.ump.produce.component.storage.QueryMgr.prototype.onOutOfStockByDD = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();

		var arrBatchNos = [];
		var arrIds = [];
		
		for (var i = 0; i < C.length; i++) {
			var r = C[i];
			var batchNo = r.data.batchNo;
			var pkid = r.data.id;
			var storage = r.data.storage;
			
			if(storage != '高架订单仓'){
				Ext.Msg.alert("系统提示", "请选择订单仓元件！");
				return;
			}
			
			arrBatchNos.push(batchNo);
			arrIds.push(pkid);
		}
		
		this.outOfStockWindow.show();
		this.outOfStockWindow.batchNos.setValue(arrBatchNos.join(','));
		this.outOfStockWindow.ids.setValue(arrIds.join(','));
		this.outOfStockWindow.type.setValue('销售出库');
		this.outOfStockWindow.flag.setValue(1);
	}
}

//成品仓元件销售出库 flag=2
//（1）只能按同一卷膜型号批量出库，不同订单、不同仓位可出库到同一销售订单。
//（2）成品仓元件批量销售出库约定“先进先出”原则，按筛选条件过滤的元件序列号按入库时间升序排列，日期靠前的元件未选择而选择日期靠后的元件系统不允许出库；最后一个入库期元件可随机选择。
com.keensen.ump.produce.component.storage.QueryMgr.prototype.onOutOfStockByCP = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();

		var jmSpecName0 = C[0].data.jmSpecName;
		var arrBatchNos = [];
		var arrIds = [];
		for (var i = 0; i < C.length; i++) {
			var r = C[i];
			var batchNo = r.data.batchNo;
			var pkid = r.data.id;
			var storage = r.data.storage;
			var jmSpecName = r.data.jmSpecName;
			if(storage == '高架订单仓'){
				Ext.Msg.alert("系统提示", "请选择成品仓元件！");
				return;
			}
			if(jmSpecName0 != jmSpecName){
				Ext.Msg.alert("系统提示", "请选择同一卷膜型号的元件！");
				return;
			}
			
			arrBatchNos.push(batchNo);
			arrIds.push(pkid);
		}
		
		this.outOfStockWindow.show();
		this.outOfStockWindow.batchNos.setValue(arrBatchNos.join(','));
		this.outOfStockWindow.ids.setValue(arrIds.join(','));
		this.outOfStockWindow.type.setValue('销售出库');
		this.outOfStockWindow.jmSpecName.setValue(jmSpecName0);
		this.outOfStockWindow.flag.setValue(2);
	}
}

//其它出库 flag=3
//不同卷膜型号、不同订单、不同仓位可出库到同一销售订单
com.keensen.ump.produce.component.storage.QueryMgr.prototype.onOutOfStock = function() {
	
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();

		var arrBatchNos = [];
		var arrIds = [];
		for (var i = 0; i < C.length; i++) {
			var r = C[i];
			var batchNo = r.data.batchNo;
			var pkid = r.data.id;
			var storage = r.data.storage;
			
			arrBatchNos.push(batchNo);
			arrIds.push(pkid);
		}
		
		this.outOfStockWindow.show();
		this.outOfStockWindow.batchNos.setValue(arrBatchNos.join(','));
		this.outOfStockWindow.ids.setValue(arrIds.join(','));
		this.outOfStockWindow.type.setValue('其它出库');
		this.outOfStockWindow.flag.setValue(3);
	}
}

com.keensen.ump.produce.component.storage.QueryMgr.prototype.onQueryByBatchNos = function() {

	Ext.Msg.prompt('多元件序号查询', '多个序号请用逗号分隔，或一行一个批次', function(btn, text) {
		if (btn == 'ok') {
			if (Ext.isEmpty(text)) {
				Ext.Msg.alert("系统提示", "请输入批次号！");
				return;
			}

			var store = this.listPanel.store;
			var batchNoStr = text;
			var regEx = new RegExp("\\n", "gi");
			batchNoStr = batchNoStr.replace(regEx, ",");
			batchNoStr = batchNoStr.replaceAll('，', ',');
			batchNoStr = batchNoStr.replaceAll(' ', '');
			var arr = [];
			arr = batchNoStr.split(',');
			var arr2 = [];
			for (var i = 0; i < arr.length; i++) {
				arr2.push("'" + arr[i] + "'");
			}

			store.baseParams = {
				'condition/batchNoStr' : arr2.join(",") == "''"
						? null
						: arr2.join(",")
			};
			store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}
	}, this, true);
}