com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();
	this.viewcpqdWindow.destroy();
	this.storeTelxx.destroy();
	this.supplyQueryTelxx.destroy();
}
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.initEvent = function() {	
	this.storecool.load();
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listNotePanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listNotePanel.pagingToolbar.pageSize
					}
				});

	}, this);

	this.listNotePanel.store.on('beforeload', function() {

			});
	// 增加新增前事件
	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function(gird, cell) {
				 this.inputWindow.items.items[0].form
											.findField('cpqd/name1')
											.focus(false, 100);		
		
			}, this);
	// 增加修改前事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function(gird, cell) {
				 this.editWindow.items.items[0].form
											.findField('cpqd/name1')
											.focus(false, 100);		
		
			}, this);
	// 增加修改事件
	this.listNotePanel.mon(this.listNotePanel, 'update', function(gird, cell) {
		var _this = this;
		this.editWindow.items.items[0].form.findField('cpqd/ssxl').store.load({params : {
				     "condition/ssdj": '3',
			         "condition/hbdm": cell.data.sszl
					}});	
		this.editWindow.items.items[0].form.findField('cpqd/sszl').store.load({params : {
						 "condition/ssdj": '2',
			         "condition/hbdm": cell.data.ssdl
					}});
					(function(){
					   _this.editWindow.show();
	                   _this.editWindow.loadData(cell);		
					}).defer(200)
			
			}, this);
}
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var templatename = "CpqdwhqueryMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.querycpqdwhcxdaochu.biz.ext',
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
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.xzMb = function() {
	var _this = this;
	var templatename = "CpqdwhcxxzMb";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.querycpqdwhcxxzMb.biz.ext',
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
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.onImportExcel = function() {

		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.excelUploadWin.show();
	
}
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.onEdit = function() {
	this.listNotePanel.onEdit();
};
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.onDel = function() {
	this.listNotePanel.onDel();
};
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.onquery = function() {
	var B = this.listNotePanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			Ext.getCmp("viewcpqdWindow").items.items[0].loadData(A);
			Ext.getCmp("viewcpqdWindow").show();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};
// 文件上传
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr.prototype.doUpload = function() {

	var _this = this;
		this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
		// 校验
		this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
		// 文件名
		this.filePath = this.fileUploadObj.getValue();
		// 文件后缀
		this.sfileName = this.filePath.split(".");

		if (this.sfileName[1] == null
				|| this.sfileName[1].toLowerCase() != "xls") {
			Ext.MessageBox.show({
						title : '操作提示',
						buttons : Ext.MessageBox.OK,
						msg : '文件必须为Excel xls文件',
						icon : Ext.MessageBox.ERROR
					});
			return false;
		}
		if (this.uploadInputPanel.form.isValid()) {
			var url = this.uploadInputPanel.saveUrl;
			this.uploadInputPanel.form.submit({
						method : "POST",
						timeout : 1200,
						url : url,
						waitTitle : "操作提示",
						waitMsg : "上传数据中...",
						success : function(form, action) {
							var result = action.result;
							if (result.success) {
								_this.excelUploadWin.hide();
								Ext.Msg.alert("操作提示", result.msg,function(){
									_this.listNotePanel.store.reload();
								}
								);
								
							}
						},
						failure : function(form, action) {
							Ext.MessageBox.show({
										title : '操作提示',
										buttons : Ext.MessageBox.OK,
										msg : "导入失败，您没有导入权限或者请检查文件格式或网络是否正常",
										icon : Ext.MessageBox.ERROR
									});
						}
					});
		}
}
function supplyShowxx(value) {

	var v = Ext.util.Format.substr(value, 1, 10);
	var fid = Ext.getCmp("showSupplyInfoxx").fid;
	var fid1 = Ext.getCmp("showSupplyInfoxx").fid1;
	var fid2 = Ext.getCmp("showSupplyInfoxx").fid2;
	var fid3 = Ext.getCmp("showSupplyInfoxx").fid3;
	var fid4 = Ext.getCmp("showSupplyInfoxx").fid4;
	var fid5 = Ext.getCmp("showSupplyInfoxx").fid5;
	var record = new Ext.data.Record({
				"lifnr" : v
			});
	Ext.getCmp("showSupplyInfoxx").items.items[0].loadData(record);
	Ext.getCmp("showSupplyInfoxx").show();

	var dk = Ext.getCmp('supplyTelPanelxx').getStore();
	dk.baseParams = {
		"entity/lifnr" : v
	};
	dk.load();

	var vattachmentParams = {
		relationId : v,
		groupId : 'swdjpaperwork'
	};

	Ext.getCmp(fid).setPostParams(vattachmentParams);
	Ext.getCmp(fid).loadParams = vattachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
	var vattachmentParams1 = {
		relationId : v,
		groupId : 'zzjgparperwork'
	};
	Ext.getCmp(fid1).setPostParams(vattachmentParams1);
	Ext.getCmp(fid1).loadParams = vattachmentParams1;
	Ext.getCmp(fid1).loadAttachmentRemote();
	var vattachmentParams2 = {
		relationId : v,
		groupId : 'yyzzpaperwork'
	};
	Ext.getCmp(fid2).setPostParams(vattachmentParams2);
	Ext.getCmp(fid2).loadParams = vattachmentParams2;
	Ext.getCmp(fid2).loadAttachmentRemote();

	var vattachmentParams3 = {
		relationId : v,
		groupId : 'txrzpaperwork'
	};
	Ext.getCmp(fid3).setPostParams(vattachmentParams3);
	Ext.getCmp(fid3).loadParams = vattachmentParams3;
	Ext.getCmp(fid3).loadAttachmentRemote();

	var vattachmentParams4 = {
		relationId : v,
		groupId : 'gsjjpaperwork'
	};
	Ext.getCmp(fid4).setPostParams(vattachmentParams4);
	Ext.getCmp(fid4).loadParams = vattachmentParams4;
	Ext.getCmp(fid4).loadAttachmentRemote();

	var vattachmentParams5 = {
		relationId : v,
		groupId : 'qtfjpaperwork'
	};
	Ext.getCmp(fid5).setPostParams(vattachmentParams5);
	Ext.getCmp(fid5).loadParams = vattachmentParams5;
	Ext.getCmp(fid5).loadAttachmentRemote();
};