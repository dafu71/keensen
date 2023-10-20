/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购收货入库管理下收货入库界面 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.ShrkMgr.prototype.destroy = function() {
	this.shrkeditPanel.destroy();
}
com.zoomlion.hjsrm.kcgl.ShrkMgr.prototype.initEvent = function() {
	Ext.getCmp(this.zasnh).focus(false, 100);
	var _this = this;
	// 增加查询事件
	this.shrkqueryPanel.mon(this.shrkqueryPanel, 'query', function(form, vals) {
		var store = this.shrklistPanel.store;
		store.removeAll();
		var t = Ext.getCmp(this.zasnh).getValue();
		this.shrkeditPanel.getForm().reset();
		var mk = new Ext.LoadMask(_this.shrklistPanel.id, {
					msg : '正在进行查询操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshdhyz.biz.ext',
			jsonData : {
				query : t
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "1") {
					Ext.Msg.alert("系统提示", "该送货单未进行确认或者不存在！", function() {
								// store.reload();
								// _this.listPanel.getForm().reset();
							});
				} else {
					var record = new Ext.data.Record();
					record.set('zasnh', t);
					this.shrkeditPanel.loadData(record);
					store.baseParams = vals;
					store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.shrklistPanel.pagingToolbar.pageSize
						}
					});
					Ext.getCmp(msgxx).setValue('');
				}
			}
		});

	}, this);

	// add by hw_zj 20170801 按照库管员工厂配置表进行检查，有工厂权限才可以过账对应的送货单
	this.shrkeditPanel.mon(this.shrkeditPanel, 'afterload',
			function(win, data) {
				var werks = data.werks;
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.checkStoreMagAuth.biz.ext',
					jsonData : {
						userid : userid,
						werks : werks
					},
					success : function(response, action) {
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.result == "1") {
							var text = "该库管员工号" + userid + "不具备工厂" + werks
									+ "的过账权限";
							Ext.Msg.alert("系统提示", text, function() {
									});
							_this.shrklistPanel.store.removeAll();
						}
					}
				});

			}, this);

	this.shrklistPanel.store.on('load', function() {
				_this.selModel.selectAll();
			});
}

com.zoomlion.hjsrm.kcgl.ShrkMgr.prototype.onSaveok = function() {
	var records = this.shrklistPanel.getSelectionModel().getSelections();
	var _this = this;
	var store = _this.shrklistPanel.store;
	var asnso = Ext.getCmp(this.zasnh1).getValue();
	var budat = Ext.getCmp(this.budat).getValue();
	var bldat = Ext.getCmp(this.bldat).getValue();
	var bgtxt = Ext.getCmp(this.bgtxt).getValue();
	var sfdpvn = Ext.getCmp(this.sfdpvn).getValue();

	// 工厂
	var werks = Ext.getCmp(this.werks).getValue();
	/*
	 * ValObj = { ebeln : Ext.getCmp(this.ebeln).getValue(), ebelp :
	 * Ext.getCmp(this.ebelp).getValue(), menge :
	 * Ext.getCmp(this.menge).getValue(), lgort :
	 * Ext.getCmp(this.lgort).getValue() }
	 */
	var purchases = [];
	var purchasex = [];
	Ext.each(records, function(r) {
				if (r.data.menge != 0) {
					purchases.push(r.data);
				}
			});
	Ext.each(records, function(r) {
				purchasex.push(r.data);
			});
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行保存！");
	} else if (!Ext.isEmpty(purchases)) {
		var mk = new Ext.LoadMask(_this.shrklistPanel.id, {
					msg : '正在进行过账操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshujuyichangyz.biz.ext',
			jsonData : {
				list : purchasex
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "0") {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkdelyz.biz.ext',
						jsonData : {
							list : purchasex
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.result == "0") {
								if (sfdpvn == "Y") {
									if (records.length > 1) {// & (werks !=
																// '3450')3450工厂不校验vn码
										Ext.Msg.alert("系统提示",
												"启用VN号管理的物料，不允许多条过账！");
										mk.hide();
									} else {
										Ext.Ajax.request({
											method : "post",
											scope : this,
											url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.create.biz.ext',
											jsonData : {
												asnso : asnso,// 送货单号
												budat : budat,// 过账日期
												bldat : bldat,// 凭证日期
												bgtxt : bgtxt,// 凭证抬头文本
												vt : purchases,
												list : purchasex
											},
											success : function(res, action) {
												var result = Ext
														.decode(res.responseText);
												var t = result.result;
												var k = "系统提示：" + t;
												if (result.success) {
													mk.hide();
														Ext.getCmp(msgxx)
																.setValue(k);
														store.reload();
														Ext.getCmp(msgxx)
																.setValue(k);
														Ext.getCmp(this.zasnh)
																.focus();
													
												}												
												return;//不执行下面的代码
												
												var t = result.result;
												var k = "系统提示：" + t;
												var v = Ext.util.Format.substr(
														t, 0, 1);
												if (result.success) {
													// -------2----
													if (v == "S") {
														Ext.Ajax.request({
															method : "post",
															scope : _this,
															url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglvnshrk.biz.ext',
															jsonData : {
																list : purchasex
															},
															success : function(
																	response,
																	action) {
																// 返回值处理
																var result = Ext
																		.decode(response.responseText);
																if (result.success) {
														// -------3----
																(function() {
																		Ext.Ajax
																				.request(
																						{
																							method : "post",
																							scope : _this,
																							url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getVnMblnrList.biz.ext',
																							success : function(
																									response,
																									action) {
																								// 返回值处理
																								var result = Ext
																										.decode(response.responseText);
																								if (result.success) {

																									mk
																											.hide();

																									Ext
																											.getCmp(msgxx)
																											.setValue(k);
																									store
																											.reload();
																									Ext
																											.getCmp(msgxx)
																											.setValue(k);
																									Ext
																											.getCmp(this.zasnh)
																											.focus();
																									// _this.shrklistPanel.getForm().reset();

																								}
																							},
																							failure : function(
																									resp,
																									opts) {
																								mk
																										.hide();
																							}
																						});
																	})
																			.defer(100);
																}
															},
															failure : function(
																	resp, opts) {
																mk.hide();
															}
														});
													} else {
														mk.hide();
														Ext.getCmp(msgxx)
																.setValue(k);
														store.reload();
														Ext.getCmp(msgxx)
																.setValue(k);
														Ext.getCmp(this.zasnh)
																.focus();
														// _this.shrklistPanel.getForm().reset();

													}
												}
											},
											failure : function(resp, opts) {
												mk.hide();
											}
										});
									}
								} else {
									Ext.Ajax.request({
										method : "post",
										scope : this,
										url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.create2.biz.ext',
										jsonData : {
											asnso : asnso,
											budat : budat,
											bldat : bldat,
											bgtxt : bgtxt,
											vt : purchases,
											list : purchasex
										},
										success : function(res, action) {
											var result = Ext
													.decode(res.responseText);
											var t = result.result;
											var k = "系统提示：" + t;
											
											if (result.success) {
													mk.hide();
														Ext.getCmp(msgxx)
																.setValue(k);
														store.reload();
														Ext.getCmp(msgxx)
																.setValue(k);
														Ext.getCmp(this.zasnh)
																.focus();
													
												}												
												return;//不执行下面的代码
											
											
											
											var v = Ext.util.Format.substr(t,
													0, 1);
											if (result.success) {
												// -------2----
												if (v == "S") {
													Ext.Ajax.request({
														method : "post",
														scope : _this,
														url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglshrk.biz.ext',
														jsonData : {
															list : purchasex
														},
														success : function(
																response,
																action) {
															// 返回值处理
															var result = Ext
																	.decode(response.responseText);
															if (result.success) {
													// -------3----
															(function() {
																	Ext.Ajax
																			.request(
																					{
																						method : "post",
																						scope : _this,
																						url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getMblnrList.biz.ext',
																						success : function(
																								response,
																								action) {
																							// 返回值处理
																							var result = Ext
																									.decode(response.responseText);
																							if (result.success) {

																								mk
																										.hide();

																								Ext
																										.getCmp(msgxx)
																										.setValue(k);
																								store
																										.reload();
																								Ext
																										.getCmp(msgxx)
																										.setValue(k);
																								Ext
																										.getCmp(this.zasnh)
																										.focus();
																								// _this.shrklistPanel.getForm().reset();

																							}
																						},
																						failure : function(
																								resp,
																								opts) {
																							mk
																									.hide();
																						}
																					});
																}).defer(100);
															}
														},
														failure : function(
																resp, opts) {
															mk.hide();
														}
													});
												} else {
													mk.hide();
													Ext.getCmp(msgxx)
															.setValue(k);
													store.reload();
													Ext.getCmp(msgxx)
															.setValue(k);
													Ext.getCmp(this.zasnh)
															.focus();
													// _this.shrklistPanel.getForm().reset();

												}
											}
										},
										failure : function(resp, opts) {
											mk.hide();
										}
									});
								}
							} else if (result.result == "1") {
								Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
								mk.hide();
							} else {
								Ext.Msg.alert("系统提示", "您登录的帐号已过期，请重新登录！");
								mk.hide();
							}
						}
					});
				} else {
					Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
					mk.hide();
				}
			},
			failure : function(response, opts) {
				mk.hide();
			}
		});
	} else if (Ext.isEmpty(purchases)) {
		var mk = new Ext.LoadMask(_this.shrklistPanel.id, {
					msg : '正在进行过账操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshujuyichangyz.biz.ext',
			jsonData : {
				list : purchasex
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "0") {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkdelyz.biz.ext',
						jsonData : {
							list : purchasex
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.result == "0") {
								if (sfdpvn == "Y") {
									Ext.Ajax.request({
										method : "post",
										scope : _this,
										url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglvnshrk.biz.ext',
										jsonData : {
											list : purchasex
										},
										success : function(response, action) {
											// 返回值处理
											var result = Ext
													.decode(response.responseText);
											if (result.success) {
												// 返回值处理
												var result = Ext
														.decode(response.responseText);
												if (result.success) {
													mk.hide();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													store.reload();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													Ext.getCmp(this.zasnh)
															.focus();
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
										scope : _this,
										url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglshrk.biz.ext',
										jsonData : {
											list : purchasex
										},
										success : function(response, action) {
											// 返回值处理
											var result = Ext
													.decode(response.responseText);
											if (result.success) {
												// 返回值处理
												var result = Ext
														.decode(response.responseText);
												if (result.success) {
													mk.hide();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													store.reload();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													Ext.getCmp(this.zasnh)
															.focus();
												}

											}
										},
										failure : function(resp, opts) {
											mk.hide();
										}
									});

								}
							} else if (result.result == "1") {
								Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
								mk.hide();
							} else {
								Ext.Msg.alert("系统提示", "您登录的帐号已过期，请重新登录！");
								mk.hide();
							}
						}
					});
				} else {
					Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
					mk.hide();
				}
			},
			failure : function(response, opts) {
				mk.hide();
			}
		});
	}
}


com.zoomlion.hjsrm.kcgl.ShrkMgr.prototype.onSaveok_ = function() {
	var records = this.shrklistPanel.getSelectionModel().getSelections();
	var _this = this;
	var store = _this.shrklistPanel.store;
	var asnso = Ext.getCmp(this.zasnh1).getValue();
	var budat = Ext.getCmp(this.budat).getValue();
	var bldat = Ext.getCmp(this.bldat).getValue();
	var bgtxt = Ext.getCmp(this.bgtxt).getValue();
	var sfdpvn = Ext.getCmp(this.sfdpvn).getValue();

	// 工厂
	var werks = Ext.getCmp(this.werks).getValue();
	/*
	 * ValObj = { ebeln : Ext.getCmp(this.ebeln).getValue(), ebelp :
	 * Ext.getCmp(this.ebelp).getValue(), menge :
	 * Ext.getCmp(this.menge).getValue(), lgort :
	 * Ext.getCmp(this.lgort).getValue() }
	 */
	var purchases = [];
	var purchasex = [];
	Ext.each(records, function(r) {
				if (r.data.menge != 0) {
					purchases.push(r.data);
				}
			});
	Ext.each(records, function(r) {
				purchasex.push(r.data);
			});
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行保存！");
	} else if (!Ext.isEmpty(purchases)) {
		var mk = new Ext.LoadMask(_this.shrklistPanel.id, {
					msg : '正在进行过账操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshujuyichangyz.biz.ext',
			jsonData : {
				list : purchasex
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "0") {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkdelyz.biz.ext',
						jsonData : {
							list : purchasex
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.result == "0") {
								if (sfdpvn == "Y") {
									if (records.length > 1) {// & (werks !=
																// '3450')3450工厂不校验vn码
										Ext.Msg.alert("系统提示",
												"启用VN号管理的物料，不允许多条过账！");
										mk.hide();
									} else {
										Ext.Ajax.request({
											method : "post",
											scope : this,
											url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.createVnMblnr.biz.ext',
											jsonData : {
												asnso : asnso,// 送货单号
												budat : budat,// 过账日期
												bldat : bldat,// 凭证日期
												bgtxt : bgtxt,// 凭证抬头文本
												vt : purchases
												//
											},
											success : function(res, action) {
												var result = Ext
														.decode(res.responseText);
												var t = result.result;
												var k = "系统提示：" + t;
												var v = Ext.util.Format.substr(
														t, 0, 1);
												if (result.success) {
													// -------2----
													if (v == "S") {
														Ext.Ajax.request({
															method : "post",
															scope : _this,
															url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglvnshrk.biz.ext',
															jsonData : {
																list : purchasex
															},
															success : function(
																	response,
																	action) {
																// 返回值处理
																var result = Ext
																		.decode(response.responseText);
																if (result.success) {
														// -------3----
																(function() {
																		Ext.Ajax
																				.request(
																						{
																							method : "post",
																							scope : _this,
																							url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getVnMblnrList.biz.ext',
																							success : function(
																									response,
																									action) {
																								// 返回值处理
																								var result = Ext
																										.decode(response.responseText);
																								if (result.success) {

																									mk
																											.hide();

																									Ext
																											.getCmp(msgxx)
																											.setValue(k);
																									store
																											.reload();
																									Ext
																											.getCmp(msgxx)
																											.setValue(k);
																									Ext
																											.getCmp(this.zasnh)
																											.focus();
																									// _this.shrklistPanel.getForm().reset();

																								}
																							},
																							failure : function(
																									resp,
																									opts) {
																								mk
																										.hide();
																							}
																						});
																	})
																			.defer(100);
																}
															},
															failure : function(
																	resp, opts) {
																mk.hide();
															}
														});
													} else {
														mk.hide();
														Ext.getCmp(msgxx)
																.setValue(k);
														store.reload();
														Ext.getCmp(msgxx)
																.setValue(k);
														Ext.getCmp(this.zasnh)
																.focus();
														// _this.shrklistPanel.getForm().reset();

													}
												}
											},
											failure : function(resp, opts) {
												mk.hide();
											}
										});
									}
								} else {
									Ext.Ajax.request({
										method : "post",
										scope : this,
										url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.createMblnr.biz.ext',
										jsonData : {
											asnso : asnso,
											budat : budat,
											bldat : bldat,
											bgtxt : bgtxt,
											vt : purchases
										},
										success : function(res, action) {
											var result = Ext
													.decode(res.responseText);
											var t = result.result;
											var k = "系统提示：" + t;
											var v = Ext.util.Format.substr(t,
													0, 1);
											if (result.success) {
												// -------2----
												if (v == "S") {
													Ext.Ajax.request({
														method : "post",
														scope : _this,
														url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglshrk.biz.ext',
														jsonData : {
															list : purchasex
														},
														success : function(
																response,
																action) {
															// 返回值处理
															var result = Ext
																	.decode(response.responseText);
															if (result.success) {
													// -------3----
															(function() {
																	Ext.Ajax
																			.request(
																					{
																						method : "post",
																						scope : _this,
																						url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getMblnrList.biz.ext',
																						success : function(
																								response,
																								action) {
																							// 返回值处理
																							var result = Ext
																									.decode(response.responseText);
																							if (result.success) {

																								mk
																										.hide();

																								Ext
																										.getCmp(msgxx)
																										.setValue(k);
																								store
																										.reload();
																								Ext
																										.getCmp(msgxx)
																										.setValue(k);
																								Ext
																										.getCmp(this.zasnh)
																										.focus();
																								// _this.shrklistPanel.getForm().reset();

																							}
																						},
																						failure : function(
																								resp,
																								opts) {
																							mk
																									.hide();
																						}
																					});
																}).defer(100);
															}
														},
														failure : function(
																resp, opts) {
															mk.hide();
														}
													});
												} else {
													mk.hide();
													Ext.getCmp(msgxx)
															.setValue(k);
													store.reload();
													Ext.getCmp(msgxx)
															.setValue(k);
													Ext.getCmp(this.zasnh)
															.focus();
													// _this.shrklistPanel.getForm().reset();

												}
											}
										},
										failure : function(resp, opts) {
											mk.hide();
										}
									});
								}
							} else if (result.result == "1") {
								Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
								mk.hide();
							} else {
								Ext.Msg.alert("系统提示", "您登录的帐号已过期，请重新登录！");
								mk.hide();
							}
						}
					});
				} else {
					Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
					mk.hide();
				}
			},
			failure : function(response, opts) {
				mk.hide();
			}
		});
	} else if (Ext.isEmpty(purchases)) {
		var mk = new Ext.LoadMask(_this.shrklistPanel.id, {
					msg : '正在进行过账操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshujuyichangyz.biz.ext',
			jsonData : {
				list : purchasex
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "0") {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkdelyz.biz.ext',
						jsonData : {
							list : purchasex
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.result == "0") {
								if (sfdpvn == "Y") {
									Ext.Ajax.request({
										method : "post",
										scope : _this,
										url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglvnshrk.biz.ext',
										jsonData : {
											list : purchasex
										},
										success : function(response, action) {
											// 返回值处理
											var result = Ext
													.decode(response.responseText);
											if (result.success) {
												// 返回值处理
												var result = Ext
														.decode(response.responseText);
												if (result.success) {
													mk.hide();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													store.reload();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													Ext.getCmp(this.zasnh)
															.focus();
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
										scope : _this,
										url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.savekcglshrk.biz.ext',
										jsonData : {
											list : purchasex
										},
										success : function(response, action) {
											// 返回值处理
											var result = Ext
													.decode(response.responseText);
											if (result.success) {
												// 返回值处理
												var result = Ext
														.decode(response.responseText);
												if (result.success) {
													mk.hide();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													store.reload();
													Ext.getCmp(msgxx)
															.setValue("过账成功");
													Ext.getCmp(this.zasnh)
															.focus();
												}

											}
										},
										failure : function(resp, opts) {
											mk.hide();
										}
									});

								}
							} else if (result.result == "1") {
								Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
								mk.hide();
							} else {
								Ext.Msg.alert("系统提示", "您登录的帐号已过期，请重新登录！");
								mk.hide();
							}
						}
					});
				} else {
					Ext.Msg.alert("系统提示", "数据异常请重新查询后再试！");
					mk.hide();
				}
			},
			failure : function(response, opts) {
				mk.hide();
			}
		});
	}
}
