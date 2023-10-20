com.zoomlion.hjsrm.settleaccounts.PrintMgr.prototype.initEvent = function() {
	
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

		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});

	}, this);

	// combo选择
	this.combo.mon(this.combo, 'select', function(o, r, i) {
				this.popWindow.jspz = o.getValue();
				this.onWrite(this.popWindow.jspz);
			}, this);
}

// 销毁
com.zoomlion.hjsrm.settleaccounts.PrintMgr.prototype.destroy = function() {
	this.popWindow.destroy();
}

// 打印
com.zoomlion.hjsrm.settleaccounts.PrintMgr.prototype.onPrint = function() {
	//var wp = new webPrint();// 创建打印控件对象
	//wp.init();// 打印对象初始化
	if(Ext.isChrome){
		var wp ={};
		wp.LODOP = getLodop(); 				
				
	}else{
		var wp = new webPrint();// 创建打印控件对象
		wp.init();// 打印对象初始化				
	}
	
	wp.LODOP.PRINT_INIT("结算凭证打");// 初始化打印任务
	wp.LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");
	var strHtm = this.popPanel.getEl().dom.innerHTML;
	var dom = this.popPanel.getEl().dom;
	var divs = dom.getElementsByTagName('div');
	var oldWidth = "";
	var oldHeight = "";
	for (var i in divs) {
		if (divs[i].className == 'x-panel-body') {
			oldWidth = divs[i].style.width;// 待替换的宽度
			oldHeight = divs[i].style.height;// 待替换的高度

		}
	}
	strHtm = strHtm.replace(oldWidth, '1020px');
	strHtm = strHtm.replace(oldHeight, '722px');

	wp.LODOP.ADD_PRINT_TABLE("2%", "1%", "96%", "98%", strHtm);
	wp.LODOP.SET_PRINT_STYLEA(0, "TableHeightScope", 3);
	wp.LODOP.PREVIEW();// 打印预览

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.settleaccounts.accounts.modifyPrintCount.biz.ext',
		jsonData : {
			jspz : this.popWindow.jspz
		}
	})

	// this.popWindow.hide();
}

// 查看
com.zoomlion.hjsrm.settleaccounts.PrintMgr.prototype.onView = function() {
	var _this = this;
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		var jspz = C[0].data.jspz;
		this.popWindow.jspz = jspz;

		this.printStore.removeAll();
		for (var i = 0; i < C.length; i++) {
			var j = {
				"jspz" : C[i].data.jspz
			};
			var rs = [new Ext.data.Record(j)];
			this.printStore.insert(0, rs);
		};
		this.combo.setValue(jspz);
		this.onWrite(jspz);

	}

}

com.zoomlion.hjsrm.settleaccounts.PrintMgr.prototype.onWrite = function(jspz) {
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryPrints.biz.ext',
				jsonData : {
					"condition/jspz" : jspz
				},
				success : function(response, action) {
					// _this.requestMask.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var data2 = result.data;
						var head = result.head;
						var print = head.print;
						var printdate = new Date();
						var jsdh = jspz;
						printdate = printdate.format('Y/m/d');
						var data = {
							printdate : printdate,
							print : print,
							list : data2,
							head : head,
							jsdh : jsdh
						};
						// 重写绑定模板
						this.tp1.overwrite(this.popPanel.body, data);
						if (this.popWindow.hidden) {
							this.popWindow.show();
						}

					}
				},
				failure : function(resp, opts) {

				}
			});
}