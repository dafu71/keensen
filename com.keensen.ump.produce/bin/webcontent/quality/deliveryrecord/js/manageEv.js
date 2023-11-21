com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.initEvent = function() {
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
				var _this = this;
				var productName = cell.get('productName');
				var arr = ["entity/solution2", "entity/temperature2",
						"entity/ph2", "entity/recovery2", "entity/press2",
						"entity/water2", "entity/waterCheck2",
						"entity/waterResult2", "entity/desalination2",
						"entity/desalinationCheck2",
						"entity/desalinationResult2"];
				if (productName == '反渗透膜元件') {
					for (var i = 0; i < arr.length; i++) {
						_this.editWindow.form.findField(arr[i])
								.setDisabled(true);
						_this.editWindow.form.findField(arr[i])
								.setVisible(false);
					}

				} else {
					for (var i = 0; i < arr.length; i++) {
						_this.editWindow.form.findField(arr[i])
								.setDisabled(false);
						_this.editWindow.form.findField(arr[i])
								.setVisible(true);
					}
				}
				this.editWindow.show();
				this.editWindow.loadData(cell);

			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.onStand = function() {
	var productName = this.inputWindow.form.findField("entity/productName")
			.getValue();
	if (Ext.isEmpty(productName)) {
		Ext.Msg.alert("系统提示", "请选择品名！");
		return;
	}
	var labelingModel = this.inputWindow.form.findField("entity/labelingModel")
			.getValue();
	if (Ext.isEmpty(labelingModel)) {
		Ext.Msg.alert("系统提示", "请输入规格！");
		return;
	}
	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.produce.quality.deliverystand.query.biz.ext",
				method : "post",
				jsonData : {
					'condition/labelingModel' : labelingModel
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var data = ret.data;
						if (Ext.isEmpty(data) || Ext.isEmpty(data[0])
								|| data[0].id == null) {
							Ext.Msg.alert("系统提示", "没有查询到发货质检标准,请先维护质检标准数据！")
						} else {

							var solution = data[0].solution;
							_this.inputWindow.form.findField("entity/solution")
									.setValue(solution);
							var temperature = data[0].temperature;
							_this.inputWindow.form
									.findField("entity/temperature")
									.setValue(temperature);
							var recovery = data[0].recovery;
							_this.inputWindow.form.findField("entity/recovery")
									.setValue(recovery);
							var ph = data[0].ph;
							_this.inputWindow.form.findField("entity/ph")
									.setValue(ph);
							var press = data[0].press;
							_this.inputWindow.form.findField("entity/press")
									.setValue(press);

							var water = data[0].water;
							_this.inputWindow.form.findField("entity/water")
									.setValue(water);
							var desalination = data[0].desalination;
							_this.inputWindow.form
									.findField("entity/desalination")
									.setValue(desalination);

							if (productName == '纳滤膜元件') {
								var solution2 = data[0].solution2;
								_this.inputWindow.form
										.findField("entity/solution2")
										.setValue(solution2);
								var temperature2 = data[0].temperature2;
								_this.inputWindow.form
										.findField("entity/temperature2")
										.setValue(temperature2);
								var recovery2 = data[0].recovery2;
								_this.inputWindow.form
										.findField("entity/recovery2")
										.setValue(recovery2);
								var ph2 = data[0].ph2;
								_this.inputWindow.form.findField("entity/ph2")
										.setValue(ph2);
								var press2 = data[0].press2;
								_this.inputWindow.form
										.findField("entity/press2")
										.setValue(press2);

								var water2 = data[0].water2;
								_this.inputWindow.form
										.findField("entity/water2")
										.setValue(water2);
								var desalination2 = data[0].desalination2;
								_this.inputWindow.form
										.findField("entity/desalination2")
										.setValue(desalination2);
							}
						}

					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
};

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.onAdd = function() {
	this.inputWindow.form.findField('entity/appearanceResult').setValue('合格');
	this.inputWindow.form.findField('entity/waterResult').setValue('合格');
	this.inputWindow.form.findField('entity/waterResult2').setValue('合格');
	this.inputWindow.form.findField('entity/desalinationResult').setValue('合格');
	this.inputWindow.form.findField('entity/desalinationResult2')
			.setValue('合格');

	this.inputWindow.show();

}

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.excelUploadWin.destroy();
}

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.onView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		var productName = r.data.productName;
		window
				.open('com.keensen.ump.produce.quality.deliveryreport.flow?entity/id='
						+ id);

	}

};

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.onView2 = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		var productName = r.data.productName;
		window
				.open('com.keensen.ump.produce.quality.deliveryreport.flow?type=e&entity/id='
						+ id);

	}

};

com.keensen.ump.produce.quality.deliveryrecordMgr.prototype.onReview = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var cell = C[0];
		var productName = cell.get('productName');
		var arr = ["solution2", "temperature2", "ph2", "recovery2", "press2",
				"water2", "waterCheck2", "waterResult2", "desalination2",
				"desalinationCheck2", "desalinationResult2"];
		if (productName == '反渗透膜元件') {
			for (var i = 0; i < arr.length; i++) {
				_this.reviewWindow.form.findField(arr[i]).setVisible(false);
			}

		} else {
			for (var i = 0; i < arr.length; i++) {
				_this.reviewWindow.form.findField(arr[i]).setVisible(true);
			}
		}
		
		this.reviewWindow.show();
		this.reviewWindow.loadData(cell);
	
		
	}
};
