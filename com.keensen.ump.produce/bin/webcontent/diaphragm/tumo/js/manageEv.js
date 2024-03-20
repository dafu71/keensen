com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var batchNoStr = this.queryPanel.form
				.findField("condition/batchNoStr2").getValue();
		var start = vals['condition/produceDtStart'];
		var end = vals['condition/produceDtEnd'];
		if (Ext.isEmpty(batchNoStr)) {
			if (Ext.isEmpty(start)) {
				Ext.Msg.alert("系统提示", "查询开始日期不能为空！");
				return false;
			}
			if (Ext.isEmpty(end)) {
				Ext.Msg.alert("系统提示", "查询结束日期不能为空！");
				return false;
			}

			if (dayDiff(start, end) > 91) {
				Ext.Msg.alert("系统提示", "查询间隔日期不能大于3个月！");
				return false;

			}
		}

		var store = this.listPanel.store;

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

		this.queryPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		this.queryPanel.getForm().findField('condition/isCutOver')
				.setValue('N');
		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}

function isNonNegativeFloat(str) {
	const regex = /^\d+(\.\d+)?$/;
	return regex.test(str);
}

// 发货请检单
com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onCheck = function() {
	// 订单号-计划单号
	var _this = this;
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var arr = [];
		var recordIdArr = [];
		var C = A.getSelectionModel().getSelections();

		var num = 0;
		var orderNo = C[0].data.orderNo;
		var planNo = C[0].data.planNo;
		var specId = C[0].data.specId;
		var list = [];
		if (Ext.isEmpty(orderNo)) {
			Ext.Msg.alert("系统提示", "请选择有订单号的数据！");
			return false;
		}
		if (Ext.isEmpty(planNo)) {
			Ext.Msg.alert("系统提示", "请选择有计划单号的数据！");
			return false;
		}
		var ok = true;
		var msg = '';
		Ext.each(C, function(r) {
					var odn = r.data.orderNo;
					var pln = r.data.planNo;
					var usefulLength = r.data.usefulLength;
					var isValid = r.data.isValid;
					var fGfdAvg = r.data.fGfdAvg;
					var title = r.data.title;
					if (Ext.isEmpty(fGfdAvg) && ok) {// 初测为空的，作为判断条件
						msg = "请选择初测不为空的数据！";
						ok = false;
					}

					// if(!Ext.isEmpty(isValid) &&
					// isValid=='Y'){//是否已人工质检验证,Y=是,N=否，作为判断条件
					if (Ext.isEmpty(title) && ok) {// 是否有请检单号作为判断条件
						msg = "请选择没有判定过的数据！";
						ok = false;
					}
					if (odn != orderNo && ok) {
						msg = "请选择相同订单号和计划单号数据！";
						ok = false;
					}
					if (pln != planNo && ok) {
						msg = "请选择相同订单号和计划单号数据！";
						ok = false;
					}
					var bn = r.data.batchNo;
					arr.push("'" + bn + "'");
					var recordId = r.data.recordId;
					recordIdArr.push(recordId);
					list.push(r.data);
					num += usefulLength;
				})
		if (ok) {
			var mk = new Ext.LoadMask(A.id, {
						msg : '正在保存，请稍候!',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.apply.createDiaphragmApply.biz.ext',
				jsonData : {
					'entity/types' : '发货',
					'entity/amount' : num,
					'entity/orderNo' : orderNo,
					'entity/planNo' : planNo,
					'entity/prodSpecId' : specId,
					list : list
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						Ext.Msg.alert("系统提示", "已生成发货请检单", function() {
									_this.inputPanel.form.reset();
									_this.inputWindow.hide();
								});
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

		} else {
			Ext.Msg.alert("系统提示", msg);
			return false;
		}
	}

}

// 自用请检单
com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onCheck2 = function() {
	// 订单号-计划单号
	var _this = this;
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var arr = [];
		var recordIdArr = [];
		var C = A.getSelectionModel().getSelections();

		var num = 0;
		var orderNo = C[0].data.orderNo;
		var planNo = C[0].data.planNo;
		var specId = C[0].data.specId;
		var list = [];
		if (!Ext.isEmpty(orderNo)) {
			Ext.Msg.alert("系统提示", "请选择没有有订单号的数据！");
			return false;
		}
		if (Ext.isEmpty(planNo)) {
			Ext.Msg.alert("系统提示", "请选择有计划单号的数据！");
			return false;
		}
		var ok = true;
		var msg = '';
		Ext.each(C, function(r) {
					var odn = r.data.orderNo;
					var pln = r.data.planNo;
					var usefulLength = r.data.usefulLength;
					var isValid = r.data.isValid;
					var fGfdAvg = r.data.fGfdAvg;
					var title = r.data.title;
					if (Ext.isEmpty(fGfdAvg) && ok) {// 初测为空的，作为判断条件
						msg = "请选择初测不为空的数据！";
						ok = false;
					}

					if (Ext.isEmpty(title) && ok) {// //是否有请检单号作为判断条件
						msg = "请选择没有判定过的数据！";
						ok = false;

					}
					// if (!Ext.isEmpty(odn)) {
					// msg = "请选择相同计划单号数据！"
					// ok = false;
					// }
					if (pln != planNo && ok) {
						msg = "请选择相同计划单号数据！"
						ok = false;
					}
					var bn = r.data.batchNo;
					arr.push("'" + bn + "'");
					var recordId = r.data.recordId;
					recordIdArr.push(recordId);
					list.push(r.data);
					num += usefulLength;
				})
		if (ok) {
			var mk = new Ext.LoadMask(A.id, {
						msg : '正在保存，请稍候!',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.apply.createDiaphragmApply.biz.ext',
				jsonData : {
					'entity/types' : '自用',
					'entity/amount' : num,
					'entity/planNo' : planNo,
					'entity/prodSpecId' : specId,
					list : list
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						Ext.Msg.alert("系统提示", "已生成自用请检单", function() {
									_this.inputPanel.form.reset();
									_this.inputWindow.hide();
								});
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

		} else {
			Ext.Msg.alert("系统提示", msg);
			return false;
		}
	}

}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onConcession = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var arr = [];
		var recordIdArr = [];
		var C = A.getSelectionModel().getSelections();

		var num = 0;
		var orderNo = C[0].data.orderNo;
		var specId = C[0].data.specId;
		if (Ext.isEmpty(orderNo)) {
			// Ext.Msg.alert("系统提示", "请选择有订单号的数据！");
			// return false;
		}
		var ok = true;
		Ext.each(C, function(r) {
					var odn = r.data.orderNo;
					var usefulLength = r.data.usefulLength;
					if (odn != orderNo) {
						// ok = false;
					}
					var bn = r.data.batchNo;
					arr.push("'" + bn + "'");
					var recordId = r.data.recordId;
					recordIdArr.push(recordId);
					num += usefulLength;
				})

		if (ok) {
			var store = this.listPanel2.store;
			store.load({
						params : {
							'condition/recordIds' : recordIdArr.join(',')
						}
					});
			// this.inputPanel.form.findField('entity/orderNo').setValue(orderNo);
			this.inputPanel.form.findField('entity/prodSpecId')
					.setValue(specId);
			this.inputPanel.form.findField('entity/num').setValue(num);
			this.inputPanel.form.findField('entity/reserve1')
					.setValue(recordIdArr.join(','));
			this.inputPanel.form.findField('entity/reserve5').setValue(arr
					.join(','));
			this.inputWindow.show();
		} else {
			// Ext.Msg.alert("系统提示", "请选择相同订单号数据！");
			// return false;
		}
	}

}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onSaveConcession = function() {
	var _thispanel = this.inputPanel;
	var _thislist = this.listPanel2;
	var _this = this;

	if (_thispanel.form.isValid()) {
		var mk = new Ext.LoadMask(_thispanel.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();

		var itemArr = [];
		var myCheckboxGroup = this.inputPanel.form.findField('myCheckboxGroup');
		for (var i = 0; i < myCheckboxGroup.items.length; i++) {
			if (myCheckboxGroup.items.itemAt(i).checked) {
				itemArr.push(i);
			}
		}
		this.inputPanel.form.findField('entity/myitems').setValue(itemArr
				.join(','));
		var forms = _thispanel.getForm().getValues();

		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.quality.concession.createWorkFlow.biz.ext',
			jsonData : forms,
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "提交成功", function() {
								_this.inputPanel.form.reset();
								_this.inputWindow.hide();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}

}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.exportExcel2 = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumoOrigin',
			templateFilename : 'ks_mp_fhqjd'
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

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumoOrigin',
			templateFilename : 'ks_mp_zjqjd'
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

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onUploadWindowShow = function(
		o) {
	this.uploadWin.myflag = o;
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();

};

// 文件上传
com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.doUpload = function() {
	var _this = this;
	this.uploadInputPanel = this.uploadWin.getComponent('uploadForm');
	// 校验
	this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
	// 文件名
	this.filePath = this.fileUploadObj.getValue();
	// 文件后缀
	this.sfileName = this.filePath.split(".");

	var array = ['bmp', 'jpg', 'png', 'tif', 'gif', 'pcx', 'tga', 'exif',
			'fpx', 'svg', 'psd', 'cdr', 'pcd', 'dxf', 'ufo', 'eps', 'ai',
			'raw', 'wmf', 'webp', 'avif', 'apng'];
	var extname = this.sfileName[1].toLowerCase();
	if (extname == null || array.indexOf(extname) == -1) {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为图片文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (this.uploadInputPanel.form.isValid()) {
		var url = 'com.keensen.ump.produce.quality.uploadConcession.flow';
		this.uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						var fname = result.msg;
						fname = '/myupload/concession/' + fname;
						if (result.success) {
							_this.uploadWin.hide();
							var myflag = _this.uploadWin.myflag;
							if (myflag == '1') {
								_this.inputPanel.form.findField('pictureUrl')
										.setValue(_this.filePath);
								_this.inputPanel.form
										.findField('entity/pictureUrl')
										.setValue(fname);
							} else if (myflag == '2') {
								_this.inputPanel.form.findField('pictureUrl2')
										.setValue(_this.filePath);
								_this.inputPanel.form
										.findField('entity/pictureUrl2')
										.setValue(fname);
							} else if (myflag == '3') {
								_this.inputPanel.form.findField('pictureUrl3')
										.setValue(_this.filePath);
								_this.inputPanel.form
										.findField('entity/pictureUrl3')
										.setValue(fname);
							}

						}
					},
					failure : function(form, action) {
						Ext.MessageBox.show({
									title : '操作提示',
									buttons : Ext.MessageBox.OK,
									msg : "导入失败，请检查文件格式或网络是否正常",
									icon : Ext.MessageBox.ERROR
								});
					}
				});
	}

}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onSecondJudge = function() {
	var _this = this;
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var ok = true;
		var msg = '';
		var recordIdArr = [];
		Ext.each(C, function(r) {
					var trend = r.data.trend;
					var recordId = r.data.recordId;
					if (Ext.isEmpty(trend) || trend != '待二次判定') {// 待二次判定
						msg = "请选择待二次判定的数据！";
						ok = false;
					}

					var recordId = r.data.recordId;
					recordIdArr.push(recordId);
				})
		if (ok) {
			var mk = new Ext.LoadMask(A.id, {
						msg : '正在保存，请稍候!',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.quality.saveDiaphragmTumoTrend.biz.ext',
				jsonData : {
					'recordIds' : recordIdArr.join(','),
					'trend' : '二次判定-发货'
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						Ext.Msg.alert("系统提示", "走向已经更新", function() {
									_this.listPanel.store.load();
								});
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

		} else {
			Ext.Msg.alert("系统提示", msg);
			return false;
		}
	}

}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onSecondJudge2 = function() {
	var _this = this;
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var ok = true;
		var msg = '';
		var recordIdArr = [];
		Ext.each(C, function(r) {
					var trend = r.data.trend;
					var recordId = r.data.recordId;
					if (Ext.isEmpty(trend) || trend != '待二次判定') {// 待二次判定
						msg = "请选择待二次判定的数据！";
						ok = false;
					}

					var recordId = r.data.recordId;
					recordIdArr.push(recordId);
				})
		if (ok) {
			var mk = new Ext.LoadMask(A.id, {
						msg : '正在保存，请稍候!',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.quality.saveDiaphragmTumoTrend.biz.ext',
				jsonData : {
					'recordIds' : recordIdArr.join(','),
					'trend' : '二次判定-自用'
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						Ext.Msg.alert("系统提示", "走向已经更新", function() {
									_this.listPanel.store.load();
								});
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

		} else {
			Ext.Msg.alert("系统提示", msg);
			return false;
		}
	}

}