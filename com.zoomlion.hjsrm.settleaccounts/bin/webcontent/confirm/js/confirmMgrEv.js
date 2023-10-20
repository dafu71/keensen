com.zoomlion.hjsrm.settleaccounts.ConfirmMgr.prototype.initEvent = function() {
	this.queryPanel.werks.mon(this.queryPanel.werks,'callback',function(){	
		var r = this.queryPanel.werks.store.getAt(0);
		this.queryPanel.werks.setValue(r.data['werks']);
	},this)
	
	this.queryPanel.bukrs.mon(this.queryPanel.bukrs,'select',function(c,r,i){
		var bukrs = r.data['bukrs'];
		if(!Ext.isEmpty(bukrs)){
			this.queryPanel.werks.store.removeAll();
			this.queryPanel.werks.store.baseParams = {"param/bukrs":bukrs};
			this.queryPanel.werks.store.load();
		}
		},this)
		
	this.queryPanel.bukrs.mon(this.queryPanel.bukrs,'callback',function(){	
		var r = this.queryPanel.bukrs.store.getAt(0);
		this.queryPanel.bukrs.setValue(r.data['bukrs']);
		this.queryPanel.werks.store.removeAll();
		this.queryPanel.werks.store.baseParams = {"param/bukrs":r.data['bukrs']};
		this.queryPanel.werks.store.load();
	},this)
	
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var statu = this.queryPanel.form.findField('condition/statu')
				.getValue();
		
		var colmodel = this.listPanel.getColumnModel();
		var tranuIndex = colmodel.getIndexById("tranuId");
		var trantIndex = colmodel.getIndexById("trantId");
		
		if (!statu) {
			this.listPanel.btnConfirm.disable();
			this.listPanel.btnRepeal.enable();
			colmodel.setHidden(tranuIndex,false);
			colmodel.setHidden(trantIndex,false);
			
		} else {
			this.listPanel.btnConfirm.enable();
			this.listPanel.btnRepeal.disable();
			colmodel.setHidden(tranuIndex,true);
			colmodel.setHidden(trantIndex,true);
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
}

com.zoomlion.hjsrm.settleaccounts.ConfirmMgr.prototype.destroy = function() {
	this.popWindow.destroy();
}

// 查看
com.zoomlion.hjsrm.settleaccounts.ConfirmMgr.prototype.onView = function() {
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
			var jspz = C[0].data.jspz;
			var mjahr = C[0].data.mjahr;
			store.baseParams = {
				"condition/jspz" : jspz,
				"condition/mjahr" : mjahr
			};
			store.load({});
			this.popWindow.show();
		}

	}
}

// 确认
com.zoomlion.hjsrm.settleaccounts.ConfirmMgr.prototype.onConfirm = function() {
	this.doConfirm('1');
}

// 撤销
com.zoomlion.hjsrm.settleaccounts.ConfirmMgr.prototype.onUnConfirm = function() {
	this.doConfirm('0');
}

// 执行确认与撤销操作
com.zoomlion.hjsrm.settleaccounts.ConfirmMgr.prototype.doConfirm = function(
		statu) {

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		if (statu == '0' && C.length > 1) {// 撤销
			Ext.Msg.alert("系统提示", "只能单笔撤销！");
			return;
		} else {
			var _this = this;
			var datas = [];
			Ext.each(C, function(r) {
						datas.push(r.data);
					});

			this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "正在执行操作..."
							});
			this.requestMask.show();
Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.guestyz.biz.ext',
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "1") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.confirm.biz.ext',
				jsonData : {
					"datas" : datas,
					"statu" : statu
				},
				success : function(response, action) {
					_this.requestMask.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {

						Ext.Msg.alert("系统提示", "操作成功", function() {
									_this.listPanel.store.reload();

								});
					}
				},
				failure : function(resp, opts) {
					_this.requestMask.hide();
				}
			});
				}else{
					Ext.Msg.alert("系统提示", "您登录的帐号已过期，请重新登录！");
					mk.hide();
				}
			}
			});

		}

	}
}