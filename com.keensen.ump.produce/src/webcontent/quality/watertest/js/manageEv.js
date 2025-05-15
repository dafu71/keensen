com.keensen.ump.produce.quality.WaterTestMgr.prototype.initEvent = function() {
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
			
	// 修改加载数据后事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.testTime) {
					data.testTime = data.testTime.split('.')[0];
					var date1 = data.testTime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('entity/testTime')
							.setValue(new Date(date1));
				}
				

			}, this);
}

com.keensen.ump.produce.quality.WaterTestMgr.prototype.onAdd = function() {
	this.addWindow.show();
}

com.keensen.ump.produce.quality.WaterTestMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.WaterTestMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.WaterTestMgr.prototype.getGpd = function() {
	
	var obj = this.addWindow.isVisible()?this.addWindow:this.editWindow;
	
	var tempreture = obj.tempreture.getValue();
	var flow = obj.flow.getValue();
	if (Ext.isEmpty(tempreture) || Ext.isEmpty(flow))
		return;

	tempreture = parseFloat(tempreture);
	flow = parseFloat(flow);
	var temp = tempreture > 25 ? 2640 : 3020;
	// 温度校正系数
	var factor = 1 / (Math.exp(temp * (1 / 298 - 1 / (273 + tempreture))));
	if (flow == 0) {
		obj.gpd.setValue(0);
	} else {
		var gpd = flow / 3785 * 1440 * factor * 1.08;
		gpd = roundToDecimalPlace(gpd, 1);
		obj.gpd.setValue(gpd);
	}
}

com.keensen.ump.produce.quality.WaterTestMgr.prototype.getSalt = function() {

	var obj = this.addWindow.isVisible()?this.addWindow:this.editWindow;
	
	var conductivity = obj.conductivity.getValue();
	var conductivity2 = obj.conductivity2.getValue();
	if (Ext.isEmpty(conductivity) || Ext.isEmpty(conductivity2))
		return;
	conductivity = parseFloat(conductivity);
	conductivity2 = parseFloat(conductivity2);
	if (conductivity == 0) {
		obj.salt.setValue(0);
	} else {
		var salt = (1 - conductivity2 / conductivity) * 100;
		salt = roundToDecimalPlace(salt, 2);
		obj.salt.setValue(salt);
	}
}

com.keensen.ump.produce.quality.WaterTestMgr.prototype.onCalc = function() {
	var _this = this;
	var obj = this.addWindow.isVisible()?this.addWindow:this.editWindow;
	var prodGpdStd = obj.prodGpdStd.getValue();
	var prodSaltStd = obj.prodSaltStd.getValue();
	var gpd = obj.gpd.getValue();
	var salt = obj.salt.getValue();
	if (Ext.isEmpty(gpd) || Ext.isEmpty(salt) || Ext.isEmpty(prodSaltStd)
			|| Ext.isEmpty(prodGpdStd)) {
		Ext.Msg.alert("系统提示", '国标液产水量、脱盐率或标准产水量、脱盐率为空！');
		return false;
	}
	prodGpdStd = parseFloat(prodGpdStd);
	prodSaltStd = parseFloat(prodSaltStd);
	gpd = parseFloat(gpd);
	salt = parseFloat(salt);
	if (gpd >= prodGpdStd && salt >= prodSaltStd) {
		obj.isProdQualified.setValue('合格');
	}else{
		obj.isProdQualified.setValue('NG');
	}
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}
