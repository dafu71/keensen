com.zoomlion.hjsrm.deliverynote.PrintMgr.prototype.initEvent = function() {
	

	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var _this = this;
        var zasnh2 = _this.queryPanel.zasnh2.getValue();
		var regEx = new RegExp("\\n", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		var regEx = new RegExp(",,", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		_this.queryPanel.zasnh.setValue(zasnh2);
		vals["condition/zasnh"] = zasnh2;
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 双击选定
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onShow();
			}, this);
}

com.zoomlion.hjsrm.deliverynote.PrintMgr.prototype.onShow = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		if (C.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var D = C[0];
			var zasnh = D.get("zasnh");
			var store = this.listNotePanel.store;

			store.load({
						params : {
							"condition/zasnh" : zasnh,
							"condition/delflag" : "0"
						}
					});
			this.popWindow.zasnh = zasnh;
			this.popWindow.show();
		}

	}
}

// 销毁
com.zoomlion.hjsrm.deliverynote.PrintMgr.prototype.destroy = function() {
	this.popWindow.destroy();

}
// 批量打印
com.zoomlion.hjsrm.deliverynote.PrintMgr.prototype.onPrintBatch = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var params = [];
		var zasnhs = [];
		for (var i = 0, j = records.length; i < j; i++) {
			params.push('zasnhs=' + records[i].data.zasnh);
			zasnhs.push(records[i].data.zasnh);

		}
		
		var url, dostr;
		var printinfos;
		var result, ret;
		
		
		
		
		// 业务工单通用打印
		url = 'com.zoomlion.hjsrm.deliverynote.delivery.printBatch.biz.ext?'
				+ encodeURI(params.join('&'));
		if(Ext.isChrome){
			var wp ={};
			wp.LODOP = getLodop();  
			dostr = "wp.LODOP.PRINT_INIT('送货单打印');  ";
			
		}else{
			var wp = new webPrint();// 创建打印控件对象
			wp.init();// 打印对象初始化
			dostr = "create_print_init_deliverynote(wp.LODOP, ret.data);";
		}

		dostr += "printinfos = ret.data;";
		dostr += "Ext.each(printinfos, function(printinfo) {";
		dostr += " var codeStr = printinfo.codeStr;";
		dostr += " var zasnh = printinfo.zasnh;";
		dostr += " codeStr = codeStr.replace('LODOP.ADD_PRINT_TEXT','wp.LODOP.ADD_PRINT_BARCODE');";
		dostr += " codeStr = codeStr.replace('code', '128A' + '\",\"' + zasnh);";
		dostr += "add_print_object_deliverynote(wp.LODOP, printinfo);";
		dostr += "eval(codeStr);";
		dostr += "});";
		result = Ext.ex.XMLHttpRequestEx.synchRequest("POST", url);
		ret = Ext.decode(result);
		if (Ext.isEmpty(ret.data)) {
			Ext.Msg.alert("系统提示", "打印送货单异常,或此送货单打印需采购员确认，请重新查询！", function() {
					}, this);
			return;
		} else {
			eval(dostr);
			//wp.preview();// 打印预览
			wp.LODOP.PREVIEW();// 打印预览
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.savePrintNoBatch.biz.ext',
				jsonData : {
					zasnhs : zasnhs
				},
				success : function(response, action) {
					_this.listPanel.store.reload();
				}
			})
			
		}
	}
}

com.zoomlion.hjsrm.deliverynote.PrintMgr.prototype.onPrint = function() {
	// alert("打印送货单 " + this.popWindow.zasnh);
	var templateid = 'deliverynote';
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : '正在执行操作...'
			});
	this.requestMask.show();
	var zasnh = this.popWindow.zasnh;
	ValaObj = {
		zasnh : zasnh
	}
	var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
			'com.zoomlion.hjsrm.deliverynote.delivery.printNote.biz.ext?zasnh='
					+ zasnh);
	var ret = Ext.decode(result);
	var printinfo = ret.data;
	var codeStr = ret.data.codeStr;
	codeStr = codeStr.replace('LODOP.ADD_PRINT_TEXT',
			'wp.LODOP.ADD_PRINT_BARCODE');
	codeStr = codeStr.replace('code', '128A' + '","' + zasnh);

	/*
	 * var str="" for(var i in printinfo){ str += i + "=" + printinfo[i] +
	 * "\n\r"
	 *  } alert(str);
	 */
	var wp = new webPrint();// 创建打印控件对象
	wp.init();// 打印对象初始化
	eval('create_print_init_' + templateid + '(wp.LODOP)');

	eval('add_print_object_' + templateid + '(wp.LODOP,printinfo)');

	eval(codeStr);
	this.requestMask.hide();
	wp.preview();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.deliverynote.delivery.savePrintNo.biz.ext',
				jsonData : {
					niu : ValaObj
				}
			})
}