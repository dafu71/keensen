com.zoomlion.hjsrm.techChange.Manage.prototype.initEvent = function() {

	// 查询
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
	var _vals = this.queryPanel.getForm().getValues();
	this.queryPanel.fireEvent("query", this.queryPanel, _vals);
	
	// 双击选定
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onView();
			}, this);
}

// 生成工单弹窗
com.zoomlion.hjsrm.techChange.Manage.prototype.onAdd = function() {
	var _this = this;
	// 生成流水号
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techChange.techChange.getPkid.biz.ext',
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						// 先清空数据
						_this.inputPanel.getForm().reset();
						_this.listPanel2.store.removeAll();
						_this.sjPanel.store.removeAll();
						_this.zzPanel.store.removeAll();

						// 默认值
						_this.inputPanel.createtime.setValue(new Date());
						_this.inputPanel.createbyName.setValue(uname);
						_this.inputPanel.createby.setValue(uid);
						_this.inputPanel.orgname.setValue(uorg);
						_this.inputPanel.orgid.setValue(uorgid);

						var ret = result.ret;
						_this.pkid = ret;
						var attachmentParams = {
							relationId : _this.pkid,
							groupId : 'techchangefile'
						}
						Ext.getCmp(_this.attachId)
								.setPostParams(attachmentParams);
						Ext.getCmp(_this.attachId).loadParams = attachmentParams;
						Ext.getCmp(_this.attachId).loadAttachmentRemote();
						_this.inputPanel.techId.setValue(_this.pkid);

						_this.inputWindow.show();
					}
				},
				failure : function(resp, opts) {
					Ext.Msg.alert("系统提示", "系统错误，无法新增", function() {
							});

				}
			});

}

// 新增物料弹窗
com.zoomlion.hjsrm.techChange.Manage.prototype.onInsert = function() {
	if (Ext.isEmpty(this.inputPanel.matnr.getValue())) {
		Ext.Msg.alert("系统提示", "整机编码不能为空", function() {
				});
	} else {
		// var roottext = this.roottext;
		var roottext = this.inputPanel.matnr.getValue();
		var rootid = this.inputPanel.matnr.getValue();

		this.matnrLoader = new com.zoomlion.hjsrm.MatnrLoader({
					ifcheckbox : true,// 是否有复选框
					isASyncTree : true
				});

		this.matnrTree = new com.zoomlion.hjsrm.MatnrTree({
					title : '物料树',
					width : 480,
					height : 600,
					roottext : roottext,
					rootid : rootid,
					split : true,
					loader : this.matnrLoader,
					collapsible : true
				});

		// 选择物料弹窗
		this.popWindow = new Ext.Window({
					title : "查看物料",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 480,
					height : 600,
					layout : 'fit',
					items : [this.matnrTree],
					buttons : [{
								text : "选择确定",
								scope : this,
								handler : function() {
									this.onChoose();
								}
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.popWindow.hide();
								}
							}]

				});

		this.popWindow.show();
	}
}

// 输入物料弹窗
com.zoomlion.hjsrm.techChange.Manage.prototype.onInsert2 = function() {
	this.entryPanel.form.reset();
	this.entryWindow.show();

}

// 输入
com.zoomlion.hjsrm.techChange.Manage.prototype.onEntry = function() {
	// 校验
	if (!this.entryPanel.form.isValid()) {// 数据校验
		return false;
	}
	var flag = true;
	var tech_id = this.pkid;
	var store = this.listPanel2.store;
	var matnr = this.entryPanel.matnr.getValue();
	var maktx = this.entryPanel.maktx.getValue();

	var r = new Ext.data.Record({
				matnr : matnr,
				maktx : maktx,
				techId : tech_id
			})
	store.each(function(r) {// 不插入重复数据
				var mnr = r.data.matnr;
				if (flag && (mnr == matnr)) {
					flag = false;
				}
			}, this);
	if (flag) {
		store.add(r);
		this.entryPanel.form.reset();
	}
	return true;
}

// 输入并关闭
com.zoomlion.hjsrm.techChange.Manage.prototype.onEntry2 = function() {
	if(this.onEntry())	this.entryWindow.hide();
}

// 选择物料
com.zoomlion.hjsrm.techChange.Manage.prototype.onChoose = function() {
	var chkNodes = this.matnrTree.getChecked();
	var tech_id = this.pkid;
	var store = this.listPanel2.store;
	// alert(chkNodes.length);
	Ext.each(chkNodes, function(node) {
				var text = node.text;
				var arr = [];
				arr = text.split("|");
				var matnr = arr[0];
				var maktx = arr[1];

				var r = new Ext.data.Record({
							matnr : matnr,
							maktx : maktx,
							techId : tech_id
						})
				var flag = true;
				store.each(function(r) {// 不插入重复数据
							var mnr = r.data.matnr;
							if (flag && (mnr == matnr)) {
								flag = false;
							}
						}, this);
				if (flag) {
					store.add(r);
				}
			});
	this.popWindow.hide();
}

// 取消选定物料
com.zoomlion.hjsrm.techChange.Manage.prototype.onDel = function() {
	var A = this.listPanel2;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		Ext.each(C, function(r) {
					A.store.remove(r);
				})
	}
}

// 选择设计工程师
com.zoomlion.hjsrm.techChange.Manage.prototype.onInsertSj = function() {
	this.sjWindow.participantsEditPanel.form.reset();
	this.sjWindow.show();
}

// 取消选定设计工程师
com.zoomlion.hjsrm.techChange.Manage.prototype.onDelSj = function() {
	var A = this.sjPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		Ext.each(C, function(r) {
					A.store.remove(r);
				})
	}
}

// 选择总装技术人员
com.zoomlion.hjsrm.techChange.Manage.prototype.onInsertZz = function() {
	this.zzWindow.participantsEditPanel.form.reset();
	this.zzWindow.show();
}

// 选择供应商技术工程师
com.zoomlion.hjsrm.techChange.Manage.prototype.onInsertGys = function() {
	this.gysWindow.participantsEditPanel.form.reset();
	this.gysWindow.show();
}

// 取消选定总装技术人员、供应商技术工程师
com.zoomlion.hjsrm.techChange.Manage.prototype.onDelZz = function() {
	var A = this.zzPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		Ext.each(C, function(r) {
					A.store.remove(r);
				})
	}
}
// 保存工单
com.zoomlion.hjsrm.techChange.Manage.prototype.onSave = function() {
	// 校验
	if (!this.inputPanel.form.isValid()) {// 基础数据校验
		return;
	}
	// 附件不做必填校验
	// 物料校验
	var store1 = this.listPanel2.store;
	if (store1.getCount() == 0) {
		Ext.Msg.alert("系统提示", "请选择物料！");
		return;
	}
	// 角色校验
	var store2 = this.sjPanel.store;
	if (store2.getCount() == 0) {
		Ext.Msg.alert("系统提示", "请选择设计工程师！");
		return;
	}

	var store3 = this.zzPanel.store;
	if (store3.getCount() == 0) {
		Ext.Msg.alert("系统提示", "请选择总装技术人员或供应商技术人员！");
		return;
	}

	// 物料
	var records = store1.getRange();
	var materials = [];
	Ext.each(records, function(r) {
				materials.push(r.data);
			});
	// 角色
	var opts = [];
	var records = store2.getRange();
	Ext.each(records, function(r) {
				opts.push(r.data);
			});
	var records = store3.getRange();
	Ext.each(records, function(r) {
				opts.push(r.data);
			});

	// 提交
	var _this = this;
	var mk = new Ext.LoadMask(this.inputWindow.id, {
				msg : '正在提交，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techChange.techChange.createWork.biz.ext',
				jsonData : {
					list : this.inputPanel.form.getValues(),
					materials : materials,
					opts : opts
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var str = "工单创建成功！";
						Ext.Msg.alert("系统提示", str, function() {
									_this.listPanel.store.reload();
									_this.inputWindow.hide();
								})

					} else {
						mk.hide();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

}

// 查看
com.zoomlion.hjsrm.techChange.Manage.prototype.onView = function() {

	var A = this.listPanel;
	var techId;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		techId = r.get("tech_id");

	}
	var bodyWidth = Ext.getBody().getWidth();
	var bodyHeight = Ext.getBody().getHeight();

	var viewPanel = new Ext.Panel({
				autoScroll : true,
				// title : '【 工单查看 】',
				// region : "center",

				closable : false,
				xtype : 'panel',
				autoLoad : {
					url : description,
					scripts : true,
					params : {
						techId : techId,
						type : 'pop'
					}
				}

			});

	var viewWindow = new Ext.Window({
				title : "【 工单查看 】",
				id : Ext.id(),
				resizable : true,
				minimizable : false,
				maximizable : true,
				closeAction : "close",
				buttonAlign : "center",
				modal : true,
				// autoScroll : true,
				width : bodyWidth * 0.8,
				height : bodyHeight * 0.9,
				layout : 'fit',
				items : [viewPanel],
				buttons : [{
							text : "关闭",
							scope : this,
							handler : function() {
								viewWindow.close();
							}
						}]

			});

	viewWindow.show();
}

// 模拟完成业务
// com.zoomlion.hjsrm.techChange.Manage.prototype.onFirst = function() {
// var actionurl = "/techChange/first/first.jsp";
// this.doBusi(actionurl);
// }
//
// com.zoomlion.hjsrm.techChange.Manage.prototype.onSecond = function() {
// var actionurl = "/techChange/second/second.jsp";
// this.doBusi(actionurl);
// }
//
// com.zoomlion.hjsrm.techChange.Manage.prototype.onThird = function() {
// var actionurl = "/techChange/third/third.jsp";
// this.doBusi(actionurl);
// }
//
// com.zoomlion.hjsrm.techChange.Manage.prototype.onFourth = function() {
// var actionurl = "/techChange/fourth/fourth.jsp";
// this.doBusi(actionurl);
// }
//
// com.zoomlion.hjsrm.techChange.Manage.prototype.onFifth = function() {
// var actionurl = "/techChange/fifth/fifth.jsp";
// this.doBusi(actionurl);
// }
//
// com.zoomlion.hjsrm.techChange.Manage.prototype.doBusi = function(actionurl) {
// var A = this.listPanel;
// if (!A.getSelectionModel().getSelected()) {
// Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
// return;
// } else {
// var C = A.getSelectionModel().getSelections();
// var record = C[0];
// }
//
// var tabId = record.get('tech_id');
// var processinstid = record.get('processinstid');
//
// var spac = Ext.getCmp('spacepanel');
//
// spac.items.each(function(item) {// 关闭标签页
// if (item.id == ('menu' + tabId)) {
// spac.remove(item);
// }
// });
//
// var paramObj = {
// techId : tabId,
// processinstid : processinstid,
// actionurl : actionurl
// }
//
// spac.open({
// id : tabId,
// text : '流程处理',
// attributes : {
// respath : actionurl
// },
// params : paramObj
//
// });
// }
