com.zoomlion.hjsrm.techNotice.ViewMgr.prototype.destroy = function() {
	this.viewPanel.destroy();
	this.listActionPanel.destroy();	
}

com.zoomlion.hjsrm.techNotice.ViewMgr.prototype.initEvent = function() {
    this.viewPanel.getForm().reset();
	this.listActionPanel.store.removeAll();
	Ext.getCmp("noticeattachfile").store.removeAll();
	this.viewPanel.getForm().findField('techRemk').setValue("1、重要度级别按照Q/ZLHJ 2110055-2014确定；\n 2、执行部门指具体操作部门，可以为多个。");
	
	var attachmentParams = {
		relationId : processinstid,
		groupId : 'technotice'
	};
	
	var record = new Ext.data.Record({
				"processinstid" : processinstid,
				"dateTime" : new Date()
			});
	this.viewPanel.loadData(record);   
	Ext.getCmp('noticeattachfile').setPostParams(attachmentParams);
	Ext.getCmp('noticeattachfile').loadParams = attachmentParams;
	Ext.getCmp('noticeattachfile').loadAttachmentRemote();	
    this.storeAction.load();
}


com.zoomlion.hjsrm.techNotice.ViewMgr.prototype.onClose = function() {
	closeMyTab();
}


// 打印
com.zoomlion.hjsrm.techNotice.ViewMgr.prototype.onNoticePrint = function() {
	//var wp = new webPrint();// 创建打印控件对象
	//wp.init();// 打印对象初始化
	if(Ext.isChrome){
		var wp ={};
		wp.LODOP = getLodop(); 				
				
	}else{
		var wp = new webPrint();// 创建打印控件对象
		wp.init();// 打印对象初始化				
	}
	wp.LODOP.PRINT_INIT("技术通知");// 初始化打印任务
	wp.LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");
	var strHtm = this.printPanel.getEl().dom.innerHTML;
	var dom = this.printPanel.getEl().dom;
	var divs = dom.getElementsByTagName('div');
	var oldWidth = "";
	var oldHeight = "";
	for (var i in divs) {
		if (divs[i].className == 'x-panel-body') {
			oldWidth = divs[i].style.width;// 待替换的宽度
			oldHeight = divs[i].style.height;// 待替换的高度

		}
	}
	strHtm = strHtm.replace(oldWidth, '1074px');
	strHtm = strHtm.replace(oldHeight, '722px');

	wp.LODOP.ADD_PRINT_TABLE("2%", "1%", "96%", "98%", strHtm);
	wp.LODOP.SET_PRINT_STYLEA(0, "TableHeightScope", 3);
	wp.LODOP.PREVIEW();// 打印预览

	/*Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.settleaccounts.accounts.modifyPrintCount.biz.ext',
		jsonData : {
			jspz : this.popWindow.jspz
		}
	})*/

	// this.popWindow.hide();
}

//打印数据加载
com.zoomlion.hjsrm.techNotice.ViewMgr.prototype.onWrite = function() {
	var procesid=Ext.getCmp("printProcessId").getValue();	
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techNotice.ComUtil.getPrintDatas.biz.ext',
				jsonData : {
					"entity/processinstid" : procesid
				},
				success : function(response, action) {
					// _this.requestMask.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var data2 = result.data;
						var xtdata = result.xtdata;
						var shdata = result.shdata;
						var pzdata = result.pzdata;
						var fkdata = result.fkdata;
						var atfiles = result.files;
						var printdate = new Date();						
						printdate = printdate.format('Y/m/d');
						var data = {
							printdate : printdate,
							xtdata : xtdata,
							shdata : shdata,
							pzdata : pzdata,
							fkdata : fkdata,
							atfiles: atfiles,
							notices: data2
						};
						// 重写绑定模板
						this.tp1.overwrite(this.printPanel.body, data);
						if (this.printWindow.hidden) {
							this.printWindow.show();
						}

					}
				},
				failure : function(resp, opts) {

				}
			});
}

function closeMyTab() {
	//var tabId = "showprocess" + processinstid;
	
	var tabId = "showprocess";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}