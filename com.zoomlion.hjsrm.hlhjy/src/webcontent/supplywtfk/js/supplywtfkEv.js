/*
 *  @author 刘鑫 供应商合理化建议
 */

com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();

}
com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.initEvent = function() {

	// 增加查询事件
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
    // 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
				var attachmentParams = {
					relationId : cell.data.wtfkid,
					groupId : 'supplywtfkfile'
				};
				Ext.getCmp(this.eattachId).setPostParams(attachmentParams);
				Ext.getCmp(this.eattachId).loadParams = attachmentParams;
				Ext.getCmp(this.eattachId).loadAttachmentRemote();

			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var _this = this;
				if (!Ext.isEmpty(lifnr)) {
					var liu = data.clzt;
					if (liu == 1) {
						this.editWindow.items.items[0].createname
								.setReadOnly(false)
						this.editWindow.items.items[0].tctime
								.setReadOnly(false)
						this.editWindow.items.items[0].createtel
								.setReadOnly(false)
						this.editWindow.items.items[0].wtlx.setReadOnly(false)
						this.editWindow.items.items[0].wtms.setReadOnly(false)
						this.editWindow.items.items[0].recvusername
								.setReadOnly(false)
						Ext.getCmp(_this.eattachId).isUploaded = true;
						// a.setReadOnly(true);
					} else {
						this.editWindow.items.items[0].createname
								.setReadOnly(true)
						this.editWindow.items.items[0].tctime.setReadOnly(true)
						this.editWindow.items.items[0].createtel
								.setReadOnly(true)
						this.editWindow.items.items[0].wtlx.setReadOnly(true)
						this.editWindow.items.items[0].wtms.setReadOnly(true)
						this.editWindow.items.items[0].recvusername
								.setReadOnly(true)
						Ext.getCmp(_this.eattachId).isUploaded = false;
						if (liu == 3 || liu == 4) {
							this.editWindow.items.items[0].supqr
									.setReadOnly(false)
						}
					}
				} else {
					var cool = data.supqr;
					if (cool == 2) {
						this.editWindow.items.items[0].jhjjtime
								.setReadOnly(true)
						this.editWindow.items.items[0].zrrname
								.setReadOnly(true)
						this.editWindow.items.items[0].sjjjtime
								.setReadOnly(true)
						this.editWindow.items.items[0].jjfa.setReadOnly(true)
						this.editWindow.items.items[0].clzt.setReadOnly(true)
					} else {
						this.editWindow.items.items[0].jhjjtime
								.setReadOnly(false)
						this.editWindow.items.items[0].zrrname
								.setReadOnly(false)
						this.editWindow.items.items[0].sjjjtime
								.setReadOnly(false)
						this.editWindow.items.items[0].jjfa.setReadOnly(false)
						this.editWindow.items.items[0].clzt.setReadOnly(false)
					}
				}

				var regEx = new RegExp("\\-", "gi");
				if (data.tctime) {
					data.tctime = data.tctime.split('.')[0];
					var date1 = data.tctime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('tctime')
							.setValue(new Date(date1));
				}
				if (data.jhjjtime) {
					data.jhjjtime = data.jhjjtime.split('.')[0];
					var date2 = data.jhjjtime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('jhjjtime')
							.setValue(new Date(date2));
				}
				if (data.sjjjtime) {
					data.sjjjtime = data.sjjjtime.split('.')[0];
					var date3 = data.sjjjtime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('sjjjtime')
							.setValue(new Date(date3));
				}
			}, this);
this.viewWindow.activeItem.mon(this.viewWindow.activeItem, 'afterload',
			function(win, data) {
				var _this = this;
				var regEx = new RegExp("\\-", "gi");
				if (data.tctime) {
					data.tctime = data.tctime.split('.')[0];
					var date1 = data.tctime.replace(regEx, "/");
					this.viewWindow.items.items[0].form
							.findField('hlhjy/tctime')
							.setValue(new Date(date1));
				}
				if (data.jhjjtime) {
					data.jhjjtime = data.jhjjtime.split('.')[0];
					var date2 = data.jhjjtime.replace(regEx, "/");
					this.viewWindow.items.items[0].form
							.findField('hlhjy/jhjjtime')
							.setValue(new Date(date2));
				}
				if (data.sjjjtime) {
					data.sjjjtime = data.sjjjtime.split('.')[0];
					var date3 = data.sjjjtime.replace(regEx, "/");
					this.viewWindow.items.items[0].form
							.findField('hlhjy/sjjjtime')
							.setValue(new Date(date3));
				}
			}, this);
com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.onsaveOk = function() {
	if (!this.editWindow.form.isValid()) {
			return;
		}
	if (Ext.isEmpty(lifnr)) {
				var t =this.editWindow.form.findField("clzt")
						.getValue()
				var k =this.editWindow.form.findField("sjjjtime")
						.getValue()
				var f =this.editWindow.form.findField("supqr")
						.getValue()
				if (f==2){
					Ext.Msg.alert('系统提示', '无法进行保存！');
					return
				}
				if (t == 3 && Ext.isEmpty(k)){
					Ext.Msg.alert('系统提示', '请维护实际解决时间！');
					return
				 }
	}
	var _this = this;
	var store = _this.listPanel.store;
	var vals = this.editWindow.items.items[0].getForm().getValues();
	var mk = new Ext.LoadMask(document.body, {
					msg : '正在保存数据，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.hlhjy.hlhjy.savehlhjy.biz.ext',
			jsonData : {
				hlhjy : vals
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.editWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
						store.reload();
							// _this.listPanel.getForm().reset();
						});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
};
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.onAdd = function() {
	var _this = this;
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.hlhjy.hlhjy.newhlhjy.biz.ext',
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var wtfkid = ret.wtfkid;
						this.inputWindow.items.items[0].form
								.findField('hlhjy/wtfkid').setValue(wtfkid);
						var attachmentParams = {
							relationId : wtfkid,
							groupId : 'supplywtfkfile'
						}
						Ext.getCmp(_this.attachId)
								.setPostParams(attachmentParams);
						Ext.getCmp(_this.attachId).loadParams = attachmentParams;
						Ext.getCmp(_this.attachId).loadAttachmentRemote();
					} else {
						Ext.Msg.alert('系统提示', '获取公共主键失败');
					}
				}
			}, this);
	this.inputWindow.show();

};

com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.onView = function() {
	var regEx = new RegExp("\\-", "gi");
	var B = this.listPanel.getSelectionModel().getSelections();
	var fid = Ext.getCmp("wtfkShow").fid;
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			Ext.getCmp("wtfkShow").items.items[0].loadData(A);
			Ext.getCmp("wtfkShow").show();
			var attachmentParams = {
				relationId :A.get("wtfkid") ,
				groupId : 'supplywtfkfile'
			}
			Ext.getCmp(fid).setPostParams(attachmentParams);
			Ext.getCmp(fid).loadParams = attachmentParams;
			Ext.getCmp(fid).loadAttachmentRemote();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};

/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};
com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var templatename = "SupplywtfkMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.hlhjy.hlhjy.queryhlhjydaochu.biz.ext',
		jsonData : daochu,
		success : function(response, action) {
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcel.biz.ext',
					jsonData : {
						excels : result.data,
						templatename : templatename
					},
					success : function(response, action) {
						this.requestMask.hide();
						// 返回值处理
						var res = Ext.decode(response.responseText);
						if (res.success) {
							var fname = res.fname;
							window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									+ fname;
						}
					},
					failure : function(resp, opts) {
						this.requestMask.hide();
					}
				});
			}
		}
	});

}
