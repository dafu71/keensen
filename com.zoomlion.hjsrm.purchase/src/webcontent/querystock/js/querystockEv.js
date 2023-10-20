com.zoomlion.hjsrm.purchase.QuerystockMgr.prototype.initEvent = function() {
	//this.queryPanel.fireEvent('query');
	
	var store =this.listPanel.store;
        store.baseParams =this.queryPanel.form.getValues();
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	 //修改
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
			
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onEdit();
			}, this);
}

com.zoomlion.hjsrm.purchase.QuerystockMgr.prototype.getData = function() {
	var _this = this;
	var vals = this.queryPanel.getForm().getValues();
	var start = vals['condition/startdate'];
	var end = vals['condition/endate'];
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
			if (datediff > 10) {
				Ext.Msg.alert("系统提示", "创建日期间隔不能大于10天！");
				return;
			}
			
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.purchase.queryapply.exportExcel.biz.ext",
				jsonData : vals,
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					_this.requestMask.hide()
					if (ret.success) {
						var fname = ret.fname;
							window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									+ fname;
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.zoomlion.hjsrm.purchase.QuerystockMgr.prototype.onImportExcel = function() {

	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.zoomlion.hjsrm.purchase.QuerystockMgr.prototype.doUpload = function() {

	var _this = this;
	this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
	// 校验
	this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
	// 文件名
	this.filePath = this.fileUploadObj.getValue();
	// 文件后缀
	this.sfileName = this.filePath.split(".");
	
	
	var arrLen = this.sfileName.length;

	if (arrLen ==0 || this.sfileName[arrLen-1] == null || this.sfileName[arrLen-1].toLowerCase() != "xls") {
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
							Ext.Msg.alert("操作提示", result.msg, function() {
										_this.listPanel.store.reload();
									});

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

com.zoomlion.hjsrm.purchase.QuerystockMgr.prototype.onEdit = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B.length == 1) {
		var erdat = B[0].get('erdat');

		if(erdat != now){
			Ext.Msg.alert("系统提示", "该记录是历史记录,无法修改！");
			return;
		}
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "请选择一条数据行!");
		return
	}
}

com.zoomlion.hjsrm.purchase.QuerystockMgr.prototype.getSapApplyData = function() {
	
	function getyyyyMMdd(){
	    var d = new Date();
	    var curr_date = d.getDate();
	    var curr_month = d.getMonth() + 1; 
	    var curr_year = d.getFullYear();
	    String(curr_month).length < 2 ? (curr_month = "0" + curr_month): curr_month;
	    String(curr_date).length < 2 ? (curr_date = "0" + curr_date): curr_date;
	    var yyyyMMdd = curr_year + "-" + curr_month +"-"+ curr_date;
	    return yyyyMMdd;
	}  
	
	var _this = this;
	//var vals = this.queryPanel.getForm().getValues();
	//var start = vals['condition/startdate'];
			//var end = vals['condition/endate'];
//			if (start == null || start == "") {
//
//				Ext.Msg.alert("系统提示", "请选择创建起始日期！");
//				return;
//			}
//
//			if (end == null || end == "") {
//
//				Ext.Msg.alert("系统提示", "请选择创建结束日期！");
//				return;
//			}
			//vals['condition/startdate'] = getyyyyMMdd();
			//vals['condition/endate'] = getyyyyMMdd(); 

//			var datediff = (new Date(end)) - (new Date(start));
//			datediff = datediff / 24 / 60 / 60 / 1000;
//			if (datediff > 31) {
//				Ext.Msg.alert("系统提示", "创建日期间隔不能大于1个月！");
//				return;
//			}
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.purchase.queryapply.exportExcel.biz.ext",
				//jsonData : vals,
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					_this.requestMask.hide()
					if (ret.success) {
						var fname = ret.fname;
							window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									+ fname;
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}