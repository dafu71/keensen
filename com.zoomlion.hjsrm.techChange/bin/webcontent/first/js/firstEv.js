com.zoomlion.hjsrm.techChange.First.prototype.initEvent = function() {
	var cell = new Ext.data.Record({
				techId : techChangeFirst.techId
			})
	var attachmentParams = {
		relationId : techChangeFirst.techId,
		groupId : 'techchangefile'
	};
	Ext.getCmp(this.attachId).setPostParams(attachmentParams);
	Ext.getCmp(this.attachId).loadParams = attachmentParams;
	Ext.getCmp(this.attachId).loadAttachmentRemote();
	this.inputPanel.loadData(cell);

	// 物料列表
	var store = this.listPanel2.store;
	store.baseParams = {
		"condition/techId" : techChangeFirst.techId
	};
	store.load({});

	// 角色加载
	var store = this.sjPanel.store;
	store.baseParams = {
		"condition/techId" : techChangeFirst.techId
	};
	store.load({});

	var store = this.zzPanel.store;
	store.baseParams = {
		"condition/techId" : techChangeFirst.techId
	};
	store.load({});

	// 加载产品型号
	this.inputPanel.productno.store.on({
				scope : this,
				'load' : function() {
					this.inputPanel.productno
							.setValue(this.inputPanel.productno2.getValue());

				}

			});

	this.inputPanel.mon(this.inputPanel, 'afterload', function(o, data) {
				this.inputPanel.productno2.setValue(data.productno);
				this.inputPanel.matnr.setValue(data.matnr);

			}, this);
}

// 新增物料弹窗
com.zoomlion.hjsrm.techChange.First.prototype.onInsert = function() {
	if (Ext.isEmpty(this.inputPanel.matnr.getValue())) {
		Ext.Msg.alert("系统提示", "整机编码不能为空", function() {
				});
	} else {
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
com.zoomlion.hjsrm.techChange.First.prototype.onInsert2 = function() {
	this.entryPanel.form.reset();
	this.entryWindow.show();

}

// 输入
com.zoomlion.hjsrm.techChange.First.prototype.onEntry = function() {
	// 校验
	if (!this.entryPanel.form.isValid()) {// 数据校验
		return false;
	}
	var flag = true;
	var tech_id = techChangeFirst.techId;
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
com.zoomlion.hjsrm.techChange.First.prototype.onEntry2 = function() {
	if(this.onEntry())	this.entryWindow.hide();
}

// 选择物料
com.zoomlion.hjsrm.techChange.First.prototype.onChoose = function() {
	var chkNodes = this.matnrTree.getChecked();
	var tech_id = techChangeFirst.techId;
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
com.zoomlion.hjsrm.techChange.First.prototype.onDel = function() {
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
com.zoomlion.hjsrm.techChange.First.prototype.onInsertSj = function() {
	this.sjWindow.participantsEditPanel.form.reset();
	this.sjWindow.show();
}

// 取消选定设计工程师
com.zoomlion.hjsrm.techChange.First.prototype.onDelSj = function() {
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
com.zoomlion.hjsrm.techChange.First.prototype.onInsertZz = function() {
	this.zzWindow.participantsEditPanel.form.reset();
	this.zzWindow.show();
}

// 选择供应商技术工程师
com.zoomlion.hjsrm.techChange.First.prototype.onInsertGys = function() {
	this.gysWindow.participantsEditPanel.form.reset();
	this.gysWindow.show();
}

// 取消选定总装技术人员、供应商技术工程师
com.zoomlion.hjsrm.techChange.First.prototype.onDelZz = function() {
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
com.zoomlion.hjsrm.techChange.First.prototype.onSave = function() {
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

	var techId = techChangeFirst.techId;

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
	this.buttonPanel.btnSave.disable();
	// 提交
	var _this = this;
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在提交，请稍候!'
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techChange.techChange.modifyWork.biz.ext',
				jsonData : {
					list : this.inputPanel.form.getValues(),
					materials : materials,
					opts : opts,
					workitemid : techChangeFirst.workitemid,
					processinstid : techChangeFirst.processinstid
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var list = Ext.getCmp(techChangeFirst.listId);
						if (list) {// 重新加载待办任务列表
							list.store.reload();
						}
						(function() {
								closeMyTab();
							}).defer(200);

					} else {
						mk.hide();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

}
com.zoomlion.hjsrm.techChange.First.prototype.onClose = function() {
	closeMyTab();
}

function closeMyTab() {
	var tabId = "workinglistid";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}