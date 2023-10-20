com.zoomlion.hjsrm.purchase.ShdconfirmMgr.prototype.initEvent = function() {
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var statu = this.queryPanel.form.findField('condition/statu')
				.getValue();
		if (!statu) {
			this.listPanel.btnConfirm.disable();
			this.listPanel.btnRepeal.enable();
		} else {
			this.listPanel.btnConfirm.enable();
			this.listPanel.btnRepeal.disable();
		}

		var start = vals['condition/arrivestartdate'];
			var end = vals['condition/arriveendate'];
			if (start == null || start == "") {

				Ext.Msg.alert("系统提示", "请选择创建起始日期！");
				return;
			}

			if (end == null || end == "") {

				Ext.Msg.alert("系统提示", "请选择创建结束日期！");
				return;
			}

			var datediff = (new Date(end)) - (new Date(start));
			datediff = datediff / 24 / 60 / 60 / 1000;
			if (datediff > 365) {
				Ext.Msg.alert("系统提示", "创建日期间隔不能大于12个月！");
				return;
			}
		
		
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});

	}, this);

	// 双击查看
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onView();
			}, this);
/*    this.selModel.on('beforerowselect', function(o, i, b, r) {
				var sfdpvn = r.get('sfdpvn');
				if (sfdpvn == "Z") {
					return false;
				}

			}, this);*/
}

com.zoomlion.hjsrm.purchase.ShdconfirmMgr.prototype.destroy = function() {
	this.popWindow.destroy();
}

// 查看
com.zoomlion.hjsrm.purchase.ShdconfirmMgr.prototype.onView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		if (C.length > 1) {// 撤销
			Ext.Msg.alert("系统提示", "请选择单行数据！");
			return;
		} else {
			var store = this.listPanel2.store;
			var zasnh = C[0].data.zasnh;
			store.baseParams = {
				"condition/zasnh" : zasnh
			};
			store.load({});
			this.popWindow.show();
		}

	}
}

// 确认
com.zoomlion.hjsrm.purchase.ShdconfirmMgr.prototype.onConfirm = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	var _this = this;
	var store = _this.listPanel.store;
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行保存！");
	} else {
		var flag = true;
		var shdconfirm = [];
		Ext.each(records, function(r) {
			var sfdpvn = r.data.sfdpvn;
			var zasnh = r.data.zasnh;
			//工厂
			var werks = r.data.werks;
			//3450工厂不校验、
			//3450同样校验，2018-12-04
			//if (werks != '3450'){
				if (sfdpvn == "Z") {
				    Ext.Msg.alert("系统提示", "送货单号"+zasnh+"的vn码没有输入完全，不允许确认！");
				    flag = false;
				}
			//}
			
			shdconfirm.push(r.data);
				});
	if (flag){
		var mk = new Ext.LoadMask(document.body, {
					msg : '正在保存数据，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.purchase.shdconfirm.shdconfirmyz.biz.ext',
			jsonData : {
				list : shdconfirm
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "1") {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.purchase.shdconfirm.saveshdconfirm.biz.ext',
						jsonData : {
							list : shdconfirm
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "保存成功", function() {
									store.reload();
										// _this.listPanel.getForm().reset();
									});
							}
						}
					});
				} else {
					Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
					mk.hide();
				}
			}
		});

	}
	}
}

// 撤销
com.zoomlion.hjsrm.purchase.ShdconfirmMgr.prototype.onUnConfirm = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	var _this = this;
	var store = _this.listPanel.store;
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行保存！");
	} else {
		var cxshdconfirm = [];
		Ext.each(records, function(r) {
					cxshdconfirm.push(r.data);
				});
		var mk = new Ext.LoadMask(document.body, {
					msg : '正在撤销数据，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.purchase.shdconfirm.shdcexiaoyz.biz.ext',
			jsonData : {
				list : cxshdconfirm
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "0") {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.purchase.shdconfirm.shdcxcxyz.biz.ext',
						jsonData : {
							list : cxshdconfirm
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.result == "1") {
								Ext.Ajax.request({
									method : "post",
									scope : this,
									url : 'com.zoomlion.hjsrm.purchase.shdconfirm.cxshdconfirm.biz.ext',
									jsonData : {
										list : cxshdconfirm
									},
									success : function(response, action) {
										mk.hide();
										// 返回值处理
										var result = Ext
												.decode(response.responseText);
										if (result.success) {
											Ext.Msg.alert("系统提示", "撤销成功",
													function() {
														store.reload();
														// _this.listPanel.getForm().reset();
												});
										}
									}
								});
							} else {
								Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
								mk.hide();
							}
						}
					});

				} else {
					Ext.Msg.alert("系统提示", "所选数据已入库不能再进行撤销！");
					mk.hide();
				}
			}
		})
	}
}
