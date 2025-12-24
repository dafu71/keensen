com.keensen.ump.base.CraftStdMgr.prototype.initEvent = function() {

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				var store = this.listPanel.store;
				store.baseParams = vals;
				store.load({});
			}, this);

	this.queryPanel4ChoosePackage.mon(this.queryPanel4ChoosePackage, 'query',
			function(form, vals) {
				var store = this.listPanel4ChoosePackage.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChoosePackage.pagingToolbar.pageSize
					}
				});
			}, this);

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
					_this.listPanel.materSpecId.setValue(r.data['materSpecId']);
					_this.listPanel.materSpecName
							.setValue(r.data['materSpecName']);
				}).defer(100);
			}, this);

	this.listPanel.selModel.on('rowdeselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = {};
					_this.listPanel.materSpecId.setValue('');
					_this.listPanel.materSpecName.setValue('');
				}).defer(100);
			}, this);

}

com.keensen.ump.base.CraftStdMgr.prototype.modifyMater = function(
		materSpecId, field, fieldDescribe, newValue, oldValue) {

	var _this = this;

	var craftNo = _this.rec.data['craftNo'];

	var craftArr = ['numPerWad', 'blankingSize', 'mpWidth', 'denseNet',
			'denseNetWidth', 'denseNetSpan', 'lightNetLongType',
			'lightNetLongPage', 'lightNetLongSpan', 'lightNetShortType',
			'lightNetShortPage', 'drawNetShortWidth', 'pipe'];

	if (!Ext.isEmpty(craftNo) && craftArr.indexOf(field) > -1) {
		Ext.Msg.alert("系统提示", fieldDescribe + "是工艺包项目，不能修改！");
		return false;
	}

	if(field == 'pressureArange' && !isValidRealNumberPattern(newValue)){
		Ext.Msg.alert("系统提示", "泄压值范围格式错误！");
		return false;
	}
	
	
	// 此处加权限判定
	if (modifyLimit != 1)
		return false;
	var obj = {};
	obj['entity/materSpecId'] = materSpecId;
	obj['entity/' + field] = newValue;
	obj['entity/newValue'] = newValue;
	obj['entity/oldValue'] = oldValue;
	obj['entity/fieldDescribe'] = fieldDescribe;
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.qinsen.std.modifyMater.biz.ext',
				jsonData : obj,
				success : function(response, action) {
					var ret = Ext.decode(response.responseText);
					if (ret.success) {
						Ext.Msg.alert("系统提示", fieldDescribe + "修改成功！",
								function() {
									_this.listPanel.store.reload();
								});

					} else {
						Ext.Msg.alert("系统提示", fieldDescribe + "修改失败！");
					}
				}
			});
}

com.keensen.ump.base.CraftStdMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	this.inputWindow.preparationTime.setValue(formatDate(new Date()));
	this.setReadOnly(false);

}

com.keensen.ump.base.CraftStdMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '司标产品卷制检验规格书',
			'com.keensen.ump.base.mater.queryMaterSpecList');

}

com.keensen.ump.base.CraftStdMgr.prototype.onChoosePackage = function() {
	this.choosePackageWindow.show();
}

com.keensen.ump.base.CraftStdMgr.prototype.onSelect4ChoosePackage = function() {

	var A = this.listPanel4ChoosePackage;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var craftNo = records[0].data.craftNo;
		var numPerWad = records[0].data.numPerWad;
		var blankingSize = records[0].data.blankingSize;
		var mpWidth = records[0].data.mpWidth;
		var denseNet = records[0].data.denseNet;
		var denseNetWidth = records[0].data.denseNetWidth;
		var denseNetSpan = records[0].data.denseNetSpan;
		var lightNetLongType = records[0].data.lightNetLongType;
		var lightNetLongPage = records[0].data.lightNetLongPage;
		var lightNetLongSpan = records[0].data.lightNetLongSpan;
		var lightNetShortType = records[0].data.lightNetShortType;
		var lightNetShortPage = records[0].data.lightNetShortPage;
		var drawNetShortWidth = records[0].data.drawNetShortWidth;
		var pipe = records[0].data.pipe;

		var obj = this.inputWindow.isVisible()? this.inputWindow:this.editWindow;
		
		obj.craftNo.setValue(craftNo);
		obj.numPerWad.setValue(numPerWad);
		obj.blankingSize.setValue(blankingSize);
		obj.mpWidth.setValue(mpWidth);
		obj.denseNet.setValue(denseNet);
		obj.denseNetWidth.setValue(denseNetWidth);
		obj.denseNetSpan.setValue(denseNetSpan);
		obj.lightNetLongType.setValue(lightNetLongType);
		obj.lightNetLongPage.setValue(lightNetLongPage);
		obj.lightNetLongSpan.setValue(lightNetLongSpan);
		obj.lightNetShortType.setValue(lightNetShortType);
		obj.lightNetShortPage.setValue(lightNetShortPage);
		obj.drawNetShortWidth.setValue(drawNetShortWidth);
		obj.pipe.setValue(pipe);

		if(this.inputWindow.isVisible())
			this.setReadOnly(true);

		this.choosePackageWindow.hide();
	}

}

com.keensen.ump.base.CraftStdMgr.prototype.setReadOnly = function(readonly) {

	this.inputWindow.numPerWad.setReadOnly(readonly);
	this.inputWindow.blankingSize.setReadOnly(readonly);
	this.inputWindow.mpWidth.setReadOnly(readonly);
	this.inputWindow.denseNet.setReadOnly(readonly);
	this.inputWindow.denseNetWidth.setReadOnly(readonly);
	this.inputWindow.denseNetSpan.setReadOnly(readonly);
	this.inputWindow.lightNetLongType.setReadOnly(readonly);
	this.inputWindow.lightNetLongPage.setReadOnly(readonly);
	this.inputWindow.lightNetLongSpan.setReadOnly(readonly);
	this.inputWindow.lightNetShortType.setReadOnly(readonly);
	this.inputWindow.lightNetShortPage.setReadOnly(readonly);
	this.inputWindow.drawNetShortWidth.setReadOnly(readonly);
	this.inputWindow.pipe.setReadOnly(readonly);
}

com.keensen.ump.base.CraftStdMgr.prototype.onAdd2 = function() {

	var r = this.rec;
	if (Ext.isEmpty(r.data)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	this.inputWindow.show();

	this.inputWindow.craftNo.setValue(r.data.craftNo);
	this.inputWindow.numPerWad.setValue(r.data.numPerWad);
	this.inputWindow.blankingSize.setValue(r.data.blankingSize);
	this.inputWindow.mpWidth.setValue(r.data.mpWidth);
	this.inputWindow.denseNet.setValue(r.data.denseNet);
	this.inputWindow.denseNetWidth.setValue(r.data.denseNetWidth);
	this.inputWindow.denseNetSpan.setValue(r.data.denseNetSpan);
	this.inputWindow.lightNetLongType.setValue(r.data.lightNetLongType);
	this.inputWindow.lightNetLongPage.setValue(r.data.lightNetLongPage);
	this.inputWindow.lightNetLongSpan.setValue(r.data.lightNetLongSpan);
	this.inputWindow.lightNetShortType.setValue(r.data.lightNetShortType);
	this.inputWindow.lightNetShortPage.setValue(r.data.lightNetShortPage);
	this.inputWindow.drawNetShortWidth.setValue(r.data.drawNetShortWidth);
	this.inputWindow.pipe.setValue(r.data.pipe);

	this.inputWindow.state.setValue('W');
	this.inputWindow.prodType.setValue(r.data.prodType);
	this.inputWindow.fileNo.setValue(r.data.fileNo);
	this.inputWindow.bookVersion.setValue(r.data.bookVersion);
	this.inputWindow.preparationTime.setValue(formatDate(new Date()));
	this.inputWindow.area.setValue(r.data.area);
	this.inputWindow.denseNetCdm.setValue(r.data.denseNetCdm);
	this.inputWindow.juanmo.setValue(r.data.juanmo);

	this.inputWindow.materSpecName.setValue(r.data.materSpecName);
	this.inputWindow.jmSpecName.setValue(r.data.jmSpecName);
	
	//this.inputWindow.testPressure.setValue(r.data.testPressure);
	//this.inputWindow.keepPressureTime.setValue(r.data.keepPressureTime);
	//this.inputWindow.pressureArange.setValue(r.data.pressureArange);
	//this.inputWindow.testLiquid.setValue(r.data.testLiquid);
	//this.inputWindow.testLiquidDensity.setValue(r.data.testLiquidDensity);
	//this.inputWindow.testLiquidPressure.setValue(r.data.testLiquidPressure);
	//this.inputWindow.testLiquidTemp.setValue(r.data.testLiquidTemp);
	//this.inputWindow.testLiquidPh.setValue(r.data.testLiquidPh);
	//this.inputWindow.testLiquidRecovery.setValue(r.data.testLiquidRecovery);
	//this.inputWindow.testLiquidGpd.setValue(r.data.testLiquidGpd);
	//this.inputWindow.testLiquidSalt.setValue(r.data.testLiquidSalt);

	this.inputWindow.intakePipeLength.setValue(r.data.intakePipeLength);
	this.inputWindow.effluentPipeLength.setValue(r.data.effluentPipeLength);
	this.inputWindow.diameter.setValue(r.data.diameter);
	this.inputWindow.juanmoTape.setValue(r.data.juanmoTape);

	if (Ext.isEmpty(r.data.craftNo))
		this.setReadOnly(false)
	else
		this.setReadOnly(true);

}

com.keensen.ump.base.CraftStdMgr.prototype.onModify = function() {

	var r = this.rec;
	if (Ext.isEmpty(r.data)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	this.editWindow.show();

	this.editWindow.materSpecId.setValue(r.data.materSpecId);
	this.editWindow.craftNo.setValue(r.data.craftNo);
	this.editWindow.numPerWad.setValue(r.data.numPerWad);
	this.editWindow.blankingSize.setValue(r.data.blankingSize);
	this.editWindow.mpWidth.setValue(r.data.mpWidth);
	this.editWindow.denseNet.setValue(r.data.denseNet);
	this.editWindow.denseNetWidth.setValue(r.data.denseNetWidth);
	this.editWindow.denseNetSpan.setValue(r.data.denseNetSpan);
	this.editWindow.lightNetLongType.setValue(r.data.lightNetLongType);
	this.editWindow.lightNetLongPage.setValue(r.data.lightNetLongPage);
	this.editWindow.lightNetLongSpan.setValue(r.data.lightNetLongSpan);
	this.editWindow.lightNetShortType.setValue(r.data.lightNetShortType);
	this.editWindow.lightNetShortPage.setValue(r.data.lightNetShortPage);
	this.editWindow.drawNetShortWidth.setValue(r.data.drawNetShortWidth);
	this.editWindow.pipe.setValue(r.data.pipe);

	this.editWindow.state.setValue('W');
	this.editWindow.prodType.setValue(r.data.prodType);
	this.editWindow.fileNo.setValue(r.data.fileNo);
	this.editWindow.bookVersion.setValue(r.data.bookVersion);
	this.editWindow.preparationTime.setValue(formatDate(new Date()));
	this.editWindow.area.setValue(r.data.area);
	this.editWindow.denseNetCdm.setValue(r.data.denseNetCdm);
	this.editWindow.juanmo.setValue(r.data.juanmo);

	this.editWindow.materSpecName.setValue(r.data.materSpecName);
	this.editWindow.jmSpecName.setValue(r.data.jmSpecName);
	
	this.editWindow.testPressure.setValue(r.data.testPressure);
	this.editWindow.keepPressureTime.setValue(r.data.keepPressureTime);
	this.editWindow.pressureArange.setValue(r.data.pressureArange);
	this.editWindow.testLiquid.setValue(r.data.testLiquid);
	this.editWindow.testLiquidDensity.setValue(r.data.testLiquidDensity);
	this.editWindow.testLiquidPressure.setValue(r.data.testLiquidPressure);
	this.editWindow.testLiquidTemp.setValue(r.data.testLiquidTemp);
	this.editWindow.testLiquidPh.setValue(r.data.testLiquidPh);
	this.editWindow.testLiquidRecovery.setValue(r.data.testLiquidRecovery);
	this.editWindow.testLiquidGpd.setValue(r.data.testLiquidGpd);
	this.editWindow.testLiquidSalt.setValue(r.data.testLiquidSalt);

	this.editWindow.intakePipeLength.setValue(r.data.intakePipeLength);
	this.editWindow.effluentPipeLength.setValue(r.data.effluentPipeLength);
	this.editWindow.diameter.setValue(r.data.diameter);
	this.editWindow.juanmoTape.setValue(r.data.juanmoTape);

	

}

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}

function isValidRealNumberPattern(str) {
  const regex = /^(\d+(\.\d+)?)-(\d+(\.\d+)?)$/;
  return regex.test(str);
}