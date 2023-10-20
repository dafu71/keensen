/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购订单查询 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchasequery.PurchasequeryMgr.prototype.initEvent = function() {
	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		
		var _werks = Ext.getCmp(this.werks).getValue();
		var colMode = this.listPanel.getColumnModel();
		var handColIndx=colMode.findColumnIndex("answer");
		
				
		if(_werks == '3001'){
			colMode.setHidden(handColIndx,false);;			
		}else{
			colMode.setHidden(handColIndx,true);			
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
}

com.zoomlion.hjsrm.purchasequery.PurchasequeryMgr.prototype.onadd = function() {
	var _this = this;
	var store = _this.listPanel.store;
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在更新数据，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.sapinterface.SapSrmPurchase.SyncSrmPurchase.downSapSrmPurchase.biz.ext',
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				mk.hide();
				//store.reload();
                Ext.Msg.alert('系统提示', '采购订单更新成功');
			} else {
				Ext.Msg.alert('系统提示', '更新失败');
			}
		}
	}, this);
};
com.zoomlion.hjsrm.purchasequery.PurchasequeryMgr.prototype.exportExcel = function() {
	var _this = this;
	//var daochu = _this.queryPanel.getForm().getValues();
	var ValObj = {
			werks : Ext.getCmp(this.werks).getValue(),
			ebeln : Ext.getCmp(this.ebeln).getValue(),
			matnr : Ext.getCmp(this.matnr).getValue(),
			maktx : Ext.getCmp(this.maktx).getValue(),
			lifnr : Ext.getCmp(this.lifnr).getValue(),
			name1 : Ext.getCmp(this.name1).getValue(),
			ekgrp : Ext.getCmp(this.ekgrp).getValue(),
			ekorg : Ext.getCmp(this.ekorg).getValue(),
			bednr : Ext.getCmp(this.bednr).getValue(),
			startDate : Ext.util.Format.date(_this.queryPanel.form.findField('entity/startDate').getValue(),'Y-m-d'),
			endDate :Ext.util.Format.date( _this.queryPanel.form.findField('entity/endDate').getValue(),'Y-m-d')
		}
	
	var templatename = "PurchasequeryMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.purchase.purchasequery.purchasequerydaochu.biz.ext',
		jsonData : {
			 query:ValObj
			// daochu:daochu
		},
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
/*
 * 新增方法
 */

/*
 * 绑定修改按钮方法
 */

/*
 * 绑定修改按钮方法
 */

