com.keensen.ump.produce.component.markprintlistMgr.prototype.initEvent = function() {

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
	
	this.viewOrderPanel.mon(this.viewOrderPanel, 'afterload',
			function(win, data) {

				if (Ext.isEmpty(data)) {
					
				} else {

					this.viewOrderPanel.picturePanel.update('');
					if (!Ext.isEmpty(data.labelUrl)) {
						var labelUrl = labelRootUrl;
						labelUrl += data.labelUrl;

						labelUrl = '<img title="单击查看完整图片" src="'
								+ labelUrl
								+ '?ver='
								+ data.orderNo
								+ '" onclick= "javascript:window.open('
								+ "'"
								+ labelUrl
								+ "'"
								+ ');" style="cursor: pointer;width:auto; height:auto; max-width:98%; max-height:50px;" />';

						this.viewOrderPanel.picturePanel.update(labelUrl);
					}
					
					this.viewOrderPanel.picturePanel4firsrMarkUrl.update('');
					if (!Ext.isEmpty(data.firsrMarkUrl)) {
						var firsrMarkUrl = labelRootUrl;
						firsrMarkUrl += data.firsrMarkUrl;

						firsrMarkUrl = '<img title="单击查看完整图片" src="'
								+ firsrMarkUrl
								+ '?ver='
								+ data.orderNo
								+ '" onclick= "javascript:window.open('
								+ "'"
								+ firsrMarkUrl
								+ "'"
								+ ');" style="cursor: pointer;width:auto; height:auto; max-width:98%; max-height:50px;" />';

						this.viewOrderPanel.picturePanel4firsrMarkUrl.update(firsrMarkUrl);
					}
					
					this.viewOrderPanel.picturePanel4secondMarkUrl.update('');
					if (!Ext.isEmpty(data.secondMarkUrl)) {
						var secondMarkUrl = labelRootUrl;
						secondMarkUrl += data.secondMarkUrl;

						secondMarkUrl = '<img title="单击查看完整图片" src="'
								+ secondMarkUrl
								+ '?ver='
								+ data.orderNo
								+ '" onclick= "javascript:window.open('
								+ "'"
								+ secondMarkUrl
								+ "'"
								+ ');" style="cursor: pointer;width:auto; height:auto; max-width:98%; max-height:50px;" />';

						this.viewOrderPanel.picturePanel4secondMarkUrl.update(secondMarkUrl);
					}

					
				}
			}, this);
	
	
}

com.keensen.ump.produce.component.markprintlistMgr.prototype.onPrint = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();

	for (var i = 0; i < records.length; i++) {
		var ifPrint = records[i].data.ifPrint;
		if (ifPrint == '否') {
			Ext.Msg.alert("系统提示", "请选择可以打印的元件！");
			return;
		}
	}
	var templateName = records[0].data.templateName;
	for (var i = 0; i < records.length; i++) {
		var _templateName = records[i].data.templateName;
		if (templateName != _templateName) {
			Ext.Msg.alert("系统提示", "请选择相同唛头图纸编号的元件！");
			return;
		}
	}
	var list = [];
	Ext.each(records, function(r) {
				var prodBatchNo = r.data['prodBatchNo'];				
				list.push("'" + prodBatchNo + "'");
			});
	var prodBatchNos = list.join(',');
	var f = document.getElementById('componentmarkprintlistForm');
	f.prodBatchNos.value = prodBatchNos;
	f.code.value = records[0].data.code;
	var actionUrl = 'com.keensen.ump.produce.component.printMarks.flow?time='
			+ Math.random() + '&token=' + Date.now();

	f.action = actionUrl;
	f.submit();

}

com.keensen.ump.produce.component.markprintlistMgr.prototype.onPreView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();
	var templateName = records[0].data.templateName;
	

	var f = document.getElementById('componentmarktemplatepreviewForm2');
	f.drawingCode.value = templateName;
	var actionUrl = 'com.keensen.ump.produce.component.printMarks4PreView.flow?time='
			+ Math.random() + '&token=' + Date.now();

	f.action = actionUrl;
	f.submit();

}

com.keensen.ump.produce.component.markprintlistMgr.prototype.onQueryByBatchNos = function() {
	Ext.Msg.prompt('多元件查询', '多个元件批次请用逗号分隔，或一行一个批次', function(btn, text) {
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
				if(arr2.indexOf("'" + arr[i] + "'") != -1) continue;
				arr2.push("'" + arr[i] + "'");
			}

			
			store.baseParams = {
				'condition/batchNoStr2' : arr2.join(",") == "''" ? null : arr2
						.join(",")
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

com.keensen.ump.produce.component.markprintlistMgr.prototype.onQueryByJmBatchNos = function() {
	Ext.Msg.prompt('多卷膜查询', '多个卷膜批次请用逗号分隔，或一行一个批次', function(btn, text) {
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
				if(arr2.indexOf("'" + arr[i] + "'") != -1) continue;
				arr2.push("'" + arr[i] + "'");
			}

			store.baseParams = {
				'condition/jmbatchNoStr' : arr2.join(",") == "''" ? null : arr2
						.join(",")
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

com.keensen.ump.produce.component.markprintlistMgr.prototype.onPrint2 = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();

	for (var i = 0; i < records.length; i++) {
		var ifPrint = records[i].data.ifPrint;
		if (ifPrint == '否') {
			Ext.Msg.alert("系统提示", "请选择可以打印的元件！");
			return;
		}
	}
	var templateName = records[0].data.templateName;
	for (var i = 0; i < records.length; i++) {
		var _templateName = records[i].data.templateName;
		if (templateName != _templateName) {
			Ext.Msg.alert("系统提示", "请选择相同唛头图纸编号的元件！");
			return;
		}
	}
	var list = [];
	Ext.each(records, function(r) {
				var prodBatchNo = r.data['prodBatchNo'];				
				list.push("'" + prodBatchNo + "'");
			});
	var prodBatchNos = list.join(',');
	var f = document.getElementById('componentmarkprintlistForm');
	f.prodBatchNos.value = prodBatchNos;
	f.code.value = records[0].data.code;
	var actionUrl = 'com.keensen.ump.produce.component.printMarks.flow?time='
			+ Math.random() + '&token=' + Date.now() + '&isStar=Y';

	f.action = actionUrl;
	f.submit();

}

com.keensen.ump.produce.component.markprintlistMgr.prototype.onViewOrder = function() {
	
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();
	if(records.length>1){
		Ext.Msg.alert("系统提示", "请选择一行数据！");
		return;
	}
	var B = {};
	B.data = {
		juanmoBatchNo : records[0].get('juanmoBatchNo')
	};
	this.viewOrderPanel.form.reset();
	if (!this.viewOrderWindow.isVisible()) {
		this.viewOrderWindow.show();
	}
	this.viewOrderPanel.loadData(B);

}