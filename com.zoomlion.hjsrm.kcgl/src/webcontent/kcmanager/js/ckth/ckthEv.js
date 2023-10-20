/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购收货入库管理下仓库退货界面 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.CkthMgr.prototype.destroy = function() {
	this.cktheditPanel.destroy();
}
com.zoomlion.hjsrm.kcgl.CkthMgr.prototype.initEvent = function() {

	// 增加查询事件
	this.ckthqueryPanel.mon(this.ckthqueryPanel, 'query', function(form, vals) {
		var store = this.ckthlistPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.ckthlistPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}

com.zoomlion.hjsrm.kcgl.CkthMgr.prototype.onSaveok = function() {
	var records = this.ckthlistPanel.getSelectionModel().getSelections();
	for (var i = 0; i < records.length; i++) {
		var a = records[i].get('delflag');
		if (a == 1) {
			Ext.Msg.alert("系统提示", "所选数据中送货单被删除，无法进行退货！");
			return;
		}
	}
	for (var i = 0; i < records.length; i++) {
		var b = records[i].get('menge');
		if (Ext.isEmpty(b)) {
			Ext.Msg.alert("系统提示", "所选数据中退货数量不能为空，无法进行退货！");
			return;
		}
	}
	var _this = this;
	var store = _this.ckthlistPanel.store;
	var budat = Ext.getCmp(this.budat).getValue();
	var bldat = Ext.getCmp(this.bldat).getValue();
	var bgtxt = Ext.getCmp(this.bgtxt).getValue();
	/*
	 * ValObj = { ebeln : Ext.getCmp(this.ebeln).getValue(), ebelp :
	 * Ext.getCmp(this.ebelp).getValue(), menge :
	 * Ext.getCmp(this.menge).getValue(), lgort :
	 * Ext.getCmp(this.lgort).getValue() }
	 */
	var purchases = [];
	Ext.each(records, function(r) {
				purchases.push(r.data);
			});
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行退货！");
	} else {
		var mk = new Ext.LoadMask(_this.ckthlistPanel.id, {
					msg : '正在进行过账操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.wlpzcxdelyz.biz.ext',
			jsonData : {
				list : purchases
			},
			success : function(response, action) {
				var sfvn = records[0].get('sfvn');
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "1") {
					if (sfvn == 'Y') {
						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.returnVnMblnr.biz.ext',
							jsonData : {
								budat : budat,
								bldat : bldat,
								bgtxt : bgtxt,
								vt : purchases
							},
							success : function(res, action) {
								var result = Ext.decode(res.responseText);
								var t = result.result;
								var v = Ext.util.Format.substr(t, 0, 1);
								if (result.success) {
									if (v == "S") {
										Ext.Ajax.request({
											method : "post",
											scope : this,
											url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglckth.biz.ext',
											jsonData : {
												list : purchases
											},
											success : function(response, action) {
												// 返回值处理
												var result = Ext
														.decode(response.responseText);
												if (result.success) {
										(function	() {
														Ext.Ajax.request({
															method : "post",
															scope : this,
															url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getVnMblnrList.biz.ext',
															success : function(
																	response,
																	action) {
																mk.hide();
																// 返回值处理
																var result = Ext
																		.decode(response.responseText);
																if (result.success) {
																	Ext.Msg
																			.alert(
																					"系统提示",
																					t,
																					function() {
																						store
																								.reload();
																						// _this.shrklistPanel.getForm().reset();
																					});
																}
															},
															failure : function(
																	resp, opts) {
																mk.hide();
															}
														});
													}).defer(100);
												}
											},
											failure : function(resp, opts) {
												mk.hide();
											}
										});
									} else {
										Ext.Msg.alert("系统提示", t, function() {
											store.reload();
											mk.hide();
												// _this.ckthlistPanel.getForm().reset();
											});
									}
								}
							},
							failure : function(resp, opts) {
								mk.hide();
							}
						});
					} else {
						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.returnMblnr.biz.ext',
							jsonData : {
								budat : budat,
								bldat : bldat,
								bgtxt : bgtxt,
								vt : purchases
							},
							success : function(res, action) {
								var result = Ext.decode(res.responseText);
								var t = result.result;
								var v = Ext.util.Format.substr(t, 0, 1);
								if (result.success) {
									if (v == "S") {
										Ext.Ajax.request({
											method : "post",
											scope : this,
											url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglckth.biz.ext',
											jsonData : {
												list : purchases
											},
											success : function(response, action) {
												// 返回值处理
												var result = Ext
														.decode(response.responseText);
												if (result.success) {
										(function	() {
														Ext.Ajax.request({
															method : "post",
															scope : this,
															url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getMblnrList.biz.ext',
															success : function(
																	response,
																	action) {
																mk.hide();
																// 返回值处理
																var result = Ext
																		.decode(response.responseText);
																if (result.success) {
																	Ext.Msg
																			.alert(
																					"系统提示",
																					t,
																					function() {
																						store
																								.reload();
																						// _this.shrklistPanel.getForm().reset();
																					});
																}
															},
															failure : function(
																	resp, opts) {
																mk.hide();
															}
														});
													}).defer(100);
												}
											},
											failure : function(resp, opts) {
												mk.hide();
											}
										});
									} else {
										Ext.Msg.alert("系统提示", t, function() {
											store.reload();
											mk.hide();
												// _this.ckthlistPanel.getForm().reset();
											});
									}
								}
							},
							failure : function(resp, opts) {
								mk.hide();
							}
						});
					}
				} else if (result.result == "0") {
					Ext.Msg.alert("系统提示", "所选数据中有送货单被删除或已经结算的物料凭证号！");
					mk.hide();
				} else {
					Ext.Msg.alert("系统提示", "您登录的帐号已过期，请重新登录！");
					mk.hide();
				}
			}
		});

	}

}
