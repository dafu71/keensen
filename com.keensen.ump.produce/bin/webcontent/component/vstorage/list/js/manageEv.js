com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.initEvent = function() {

	var me = this;
	
	this.getRight();
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

	me.onMsg();

	this.editWindow4Gyy.activeItem.mon(this.editWindow4Gyy.activeItem,
			'afterSave', function(gird, cell) {
				me.onMsg();
			}, this);

	this.editWindow4Pg.activeItem.mon(this.editWindow4Pg.activeItem,
			'afterSave', function(gird, cell) {
				me.onMsg();
			}, this);

}

// 获取权限
com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.getRight = function() {
	var _this = this;
	Ext.Ajax.request({
		url : "produce/component/vstorage/list/js/right.json",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			var data = ret.data;
			var monitor = data[0].monitor;
			var gyy = data[0].gyy;
			var pg = data[0].pg;
			var jhy = data[0].jhy;
			var manager = data[0].manager;
			
			Ext.getCmp(monitorDealId).setVisible(monitor.indexOf(uid) != -1);
			Ext.getCmp(monitorRemarkId).setVisible(monitor.indexOf(uid) != -1);
			Ext.getCmp(gyyRemarkId).setVisible(gyy.indexOf(uid) != -1);
			Ext.getCmp(pgRemarkId).setVisible(pg.indexOf(uid) != -1);
			Ext.getCmp(warehousingId).setVisible(jhy.indexOf(uid) != -1);
			Ext.getCmp(modiOrderId).setVisible(jhy.indexOf(uid) != -1);
			Ext.getCmp(importVStorageId).setVisible(manager.indexOf(uid) != -1);
			Ext.getCmp(checkOverTimeId).setVisible(manager.indexOf(uid) != -1);
			//var firstButton = panel.tbar.items.get(0); 
			//alert(firstButton.text);
			

		},
		callback : function() {
		}
	})
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '虚拟仓记录',
			'com.keensen.ump.produce.component.vstorage.queryVstorage', '0,1');
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onGyyRemark = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	var arr = new Array();
	for (var i = 0; i < records.length; i++) {
		var exceptionType = records[i].get('exceptionType');
		if (exceptionType != '需要工艺给意见') {
			Ext.Msg.alert('系统提示', '请选择需要工艺给意见的数据');
			return false;
		}

		var recordId = records[i].get('qjBatchId');
		arr.push(recordId);
	}
	this.editWindow4Gyy.recordIds.setValue(arr.join(','));
	this.editWindow4Gyy.show();
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onPgRemark = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	var arr = new Array();
	for (var i = 0; i < records.length; i++) {
		var exceptionType = records[i].get('exceptionType');
		if (exceptionType != '需要品管给意见') {
			Ext.Msg.alert('系统提示', '请选择需要品管给意见的数据');
			return false;
		}

		var recordId = records[i].get('qjBatchId');
		arr.push(recordId);
	}
	this.editWindow4Pg.recordIds.setValue(arr.join(','));
	this.editWindow4Pg.show();
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onWarehousing = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert('系统提示', '请先选择单条数据');
		return false;
	}

	var exceptionType = records[0].get('exceptionType');
	if (exceptionType != '需要计划员处理') {
		Ext.Msg.alert('系统提示', '请选择需要计划员处理的数据');
		return false;
	}

	var jmBatchNo = records[0].get('jmBatchNo');

	var spacepanel = Ext.getCmp('spacepanel');

	if (jmBatchNo == '') {
		return;
	}

	var itemId = 'menu10003222';
	var url = '/produce/component/semifinished/warehousing/index.jsp?jmBatchNo='
			+ jmBatchNo;
	var title = 'PDA入库';
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
				id : '10003222',
				text : title,
				attributes : {
					respath : url
				}
			});

}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onModiOrder = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}

	for (var i = 0; i < records.length; i++) {

		var recordId = records[i].get('qjBatchId');
		var dryWet = records[i].get('dryWet');

		if (dryWet == '干' && modifyOrderNoFlag4Dry == 0) {
			Ext.Msg.alert('系统提示', '您无权修改干膜订单号');
			return false;
		}

		if (dryWet == '湿' && modifyOrderNoFlag4Wet == 0) {
			Ext.Msg.alert('系统提示', '您无权修改湿膜订单号');
			return false;
		}

	}
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onChooseSingleOrder = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	var arr = new Array();
	for (var i = 0; i < records.length; i++) {

		var recordId = records[i].get('qjBatchId');
		var dryWet = records[i].get('dryWet');

		if (dryWet == '干' && modifyOrderNoFlag4Dry == 0) {
			Ext.Msg.alert('系统提示', '您无权修改干膜订单号');
			return false;
		}

		if (dryWet == '湿' && modifyOrderNoFlag4Wet == 0) {
			Ext.Msg.alert('系统提示', '您无权修改湿膜订单号');
			return false;
		}

		recordId = recordId + '';
		if (recordId.substr(0, 1) != '2') {
			// Ext.Msg.alert('系统提示', '一期数据不能修改');
			// return false;
		}
		arr.push(recordId);
	}

	var orderNo = '';
	var prodSpecId = '';
	var orderNo = '';
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		orderNo = B[0].get('orderNo');
		prodSpecId = B[0].get('materSpecId');

	}

	if (Ext.isEmpty(orderNo)) {
		Ext.Msg.alert('系统提示', '请选择订单号');
		return false;
	}

	Ext.Msg.confirm('提示', '共' + records.length + '个批次，您确定要修改这些产品的订单号？',
			function(btn) {
				if (btn === 'yes') {
					_this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "后台正在操作,请稍候!"
									});
					_this.requestMask.show();
					Ext.Ajax.request({
						url : "com.keensen.ump.produce.component.vstorage.modiOrderAndProdSpecId.biz.ext",
						method : "post",
						jsonData : {
							orderNo : orderNo,
							prodSpecId : prodSpecId,
							recordIds : arr.join(',')
						},
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								Ext.Msg.alert("系统提示", "操作成功！", function() {
											_this.listPanel.store.load();
											_this.chooseSingleOrderWindow
													.hide();
											_this.onMsg();

										})
							} else {
								Ext.Msg.alert("系统提示", "修改订单号失败！")

							}

						},
						callback : function() {
							_this.requestMask.hide()
						}
					})
				}
			});

}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onMsg = function() {
	var _this = this;

	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.vstorage.queryVstorage2Msg.biz.ext",
		method : "post",
		jsonData : {
			'condition/exceptionType' : ''
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {
				var datas = ret.data;
				if (Ext.isEmpty(datas))
					return;
				var msg = '';
				for (var i = 0; i < datas.length; i++) {
					msg += datas[i].exceptionType + '共';
					msg += datas[i].amount + "条;<br>";

				}
				showNotification(msg);
			} else {

			}

		},
		callback : function() {

		}
	})
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.importVStorage = function() {
	var _this = this;

	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();

	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.vstorage.importVStorage.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {

				var dryAmount = ret.dryAmount;
				var wetAmount = ret.wetAmount;
				var msg = '导入干膜:' + dryAmount + '条<br>'
				msg += '导入湿膜:' + wetAmount + '条<br>'
				Ext.Msg.alert("系统提示", msg, function() {
							_this.listPanel.store.reload();
							_this.onMsg();
						});
			} else {
				Ext.Msg.alert("系统提示", '导入失败')
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.removeVstorage = function() {
	var _this = this;

	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();

	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.vstorage.removeVstorage.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {

				Ext.Msg.alert("系统提示", '操作成功', function() {
							_this.listPanel.store.reload();
							_this.onMsg();

						});
			} else {
				Ext.Msg.alert("系统提示", '导入失败')
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onMonitorRemark = function() {
	var _this = this;

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		var recordIds = [];
		for (var i = 0; i < C.length; i++) {
			var r = C[i];
			var ngReasonName = r.data['ngReasonName'];
			var exceptionType = r.data['exceptionType'];
			if (Ext.isEmpty(ngReasonName)) {
				Ext.Msg.alert("系统提示", "请选择质检不合格的记录！");
				return;

			} else if (exceptionType != '需班长处理') {
				Ext.Msg.alert("系统提示", "请选择需班长处理的记录！");
				return;
			} else {
				recordIds.push(r.data['recordId']);
			}
		}

		var monitorRemark = '本次元件已送水测';
		Ext.Msg.prompt('班长挑水测', '请输入', function(btn, text) {
			if (btn == 'ok') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.vstorage.saveMonitorRemark.biz.ext",
					method : "post",
					jsonData : {
						'monitorRemark' : text,
						'recordIds' : recordIds.join(",")
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "操作成功！", function() {
										_this.listPanel.store.reload();
										_this.onMsg();

									})
						} else {
							Ext.Msg.alert("系统提示", "备注失败！")

						}

					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
			}
		}, this, true, monitorRemark);
	}
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onMonitorDeal = function() {
	var _this = this;

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		var recordIds = [];
		for (var i = 0; i < C.length; i++) {
			var r = C[i];
			var exceptionType = r.data['exceptionType'];
			if (exceptionType != '需班长处理') {
				Ext.Msg.alert("系统提示", "请选择需班长处理的记录！");
				return;
			} else {
				recordIds.push(r.data['recordId']);
			}
		}
		this.monitorDealWindow.items.items[0].form.reset();
		this.monitorDealWindow.recordIds.setValue(recordIds.join(","));
		this.monitorDealWindow.show();
	}
}

// 干膜元件7天、湿膜元件15天未请检即为超期停留(卷膜时间与当前时间的差)
com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.checkOverTime = function() {
	var _this = this;

	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();

	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.vstorage.checkOverTime5.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {

				Ext.Msg.alert("系统提示", '操作成功', function() {
							_this.listPanel.store.reload();
							_this.onMsg();

						});
			} else {
				Ext.Msg.alert("系统提示", '操作失败')
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

function showNotification(message) {

	const divs = document.getElementsByClassName('notification');;

	for (var i = 0; i < divs.length; i++) {
		divs[i].remove()
	}

	// 创建通知元素
	const notification = document.createElement('div');
	notification.className = 'notification';

	// 添加内容
	notification.innerHTML = '<div class="notification-content">' + message
			+ '</div><button class="notification-close">&times;</button>';

	// 添加到页面
	document.body.appendChild(notification);

	// 添加关闭事件
	notification.querySelector('.notification-close').addEventListener('click',
			function() {
				hideNotification(notification);
			});

	// 显示通知
	setTimeout(function() {
				notification.classList.add('show');
			}, 100);

	// 10秒后自动关闭
	// setTimeout(function() {
	// hideNotification(notification);
	// }, 10000);
}

function hideNotification(notification) {
	notification.classList.remove('show');
	setTimeout(function() {
				notification.remove();
			}, 500);
}