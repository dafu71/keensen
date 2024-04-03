com.keensen.ump.produce.component.selectMgr.prototype.initEvent = function() {
	var _this = this;

	this.queryPanel.form.findField("condition/produceDtStart")
			.setValue(new Date().add(Date.DAY, -33).format('Y-m-d'));

	this.queryPanel.form.findField("condition/produceDtEnd")
			.setValue(new Date());

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		var batchNoStr = this.queryPanel.form
				.findField("condition/tumoBatchNo2").getValue();

		var produceDtStart = this.queryPanel.form
				.findField("condition/produceDtStart").getValue();
		var produceDtEnd = this.queryPanel.form
				.findField("condition/produceDtEnd").getValue();

		if (Ext.isEmpty(batchNoStr)
				&& (Ext.isEmpty(produceDtStart) || Ext.isEmpty(produceDtEnd))) {
			Ext.Msg.alert("系统提示", "请输入批号或者选择查询时间段！");
			return false;
		}

		if (!Ext.isEmpty(batchNoStr)) {
			var regEx = new RegExp("\\n", "gi");
			batchNoStr = batchNoStr.replace(regEx, ",");
			batchNoStr = batchNoStr.replaceAll('，', ',');
			batchNoStr = batchNoStr.replaceAll(' ', '');
			var arr = [];
			arr = batchNoStr.split(',');
			if (arr.length > 999) {
				Ext.Msg.alert("系统提示", "批号数量不能超过999条，否则无法挑选！");
				return false;
			}

			var arr2 = [];
			for (var i = 0; i < arr.length; i++) {
				arr2.push("'" + arr[i] + "'");
			}
			this.queryPanel.getForm().findField('condition/tumoBatchNo')
					.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		}

		if (dayDiff(produceDtStart, produceDtEnd) > 33) {
			Ext.Msg.alert("系统提示", "查询间隔日期不能大于33天！");
			return false;

		}

		store.baseParams = store.baseParams = this.queryPanel.getForm()
				.getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 查询事件
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {
		var store = this.listPanel3.store;
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
				var tumoBatchNo = cell.get('tumoBatchNo');
				var tumoBatchId = cell.get('tumoBatchId');
				var mpSpecId = cell.get('mpSpecId');
				var testAvgGpd = cell.get('testAvgGpd');
				var testArea = cell.get('area');
				var saltRejection = cell.get('salt');
				var testSaltRejection = cell.get('testSaltRejection');
				var minSaltRejection = cell.get('minSaltRejection');
				var maxSaltRejection = cell.get('maxSaltRejection');
				var store = this.listPanel2.store;
				if (this.opt == 'select') {
					if (Ext.isEmpty(testAvgGpd) || Ext.isEmpty(testArea)) {
						Ext.Msg.alert("系统提示", "换算后水量平均值或者涂膜面积为空，无法挑选！");
						return false;
					}
					this.parmas = {
						"condition/tumoBatchNo" : tumoBatchNo,
						"condition/tumoBatchId" : tumoBatchId,
						"condition/mpSpecId" : mpSpecId,
						"condition/testAvgGpd" : testAvgGpd,
						"condition/saltRejection" : saltRejection,
						"condition/testSaltRejection" : testSaltRejection,
						"condition/minSaltRejection" : minSaltRejection,
						"condition/maxSaltRejection" : maxSaltRejection,
						"condition/recalc" : 'N',
						"condition/testArea" : testArea
					}
					store.load({
								params : this.parmas
							});
					this.viewWindow.show();

				}
			}, this);

}

com.keensen.ump.produce.component.selectMgr.prototype.onDeal = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	var l = C.length;
	if (l == 0) {
		Ext.Msg.alert("系统提示", "请重新选择数据！");
		return false;
	}
	if (l > 999) {
		// Ext.Msg.alert("系统提示", "数据不能超过999条，请重新选择！");
		// return false;
	}
	var arr = [];
	Ext.each(C, function(r) {
				var tumoBatchNo = r.data.tumoBatchNo;
				var tumoBatchId = r.data.tumoBatchId;
				var mpSpecId = r.data.mpSpecId;
				var testAvgGpd = r.data.testAvgGpd;
				var testArea = r.data.area;
				var saltRejection = r.data.salt;
				var testSaltRejection = r.data.testSaltRejection;
				var minSaltRejection = r.data.minSaltRejection;
				var maxSaltRejection = r.data.maxSaltRejection;

				if (Ext.isEmpty(testAvgGpd) || Ext.isEmpty(testArea)) {
					// Ext.Msg.alert("系统提示", "换算后水量平均值或者涂膜面积为空，无法挑选！");
					// return false;
				} else {

					var d = {
						'tumoBatchNo' : tumoBatchNo,
						'tumoBatchId' : tumoBatchId,
						'mpSpecId' : mpSpecId,
						'testAvgGpd' : testAvgGpd,
						'testArea' : testArea,
						'saltRejection' : saltRejection,
						'testSaltRejection' : testSaltRejection,
						'minSaltRejection' : minSaltRejection,
						'maxSaltRejection' : maxSaltRejection

					}
					arr.push(d);
				}
			})

	Ext.Ajax.request({
		method : "post",
		url : 'com.keensen.ump.produce.component.select.saveSelectBatch.biz.ext',
		jsonData : {
			'maps' : arr
		},
		success : function(F) {
			var B = Ext.decode(F.responseText);
			if (B.success) {
				Ext.MessageBox.alert("操作提示", "已处理成功!", function() {

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
		}
	})
}

com.keensen.ump.produce.component.selectMgr.prototype.onSelect = function() {
	this.opt = 'select';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.selectMgr.prototype.onCalc = function() {
	var store = this.listPanel2.store;
	this.parmas['condition/recalc'] = 'Y';
	store.load({
				params : this.parmas
			});

}

com.keensen.ump.produce.component.selectMgr.prototype.onQuery = function() {
	this.chooseWindow.show();
}

com.keensen.ump.produce.component.selectMgr.prototype.destroy = function() {
	this.viewWindow.destroy();
	this.chooseWindow.destroy();
}

com.keensen.ump.produce.component.selectMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '1000',
			namingsql : 'com.keensen.ump.produce.component.select.query',
			templateFilename : 'ks_component_select_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

function dayDiff(start, end) {
	var datediff = (new Date(end)) - (new Date(start));
	datediff = datediff / 24 / 60 / 60 / 1000;
	return datediff;

}