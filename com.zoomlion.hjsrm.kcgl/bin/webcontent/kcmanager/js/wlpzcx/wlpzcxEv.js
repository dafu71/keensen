/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 采购收货入库管理下物料凭证冲销界面 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.WlpzcxMgr.prototype.destroy = function() {
	this.wlpzcxeditPanel.destroy();
}
com.zoomlion.hjsrm.kcgl.WlpzcxMgr.prototype.initEvent = function() {

	// 增加查询事件
	this.wlpzcxqueryPanel.mon(this.wlpzcxqueryPanel, 'query', function(form,
			vals) {
		var t = Ext.getCmp(this.mblnr).getValue();
		var h = Ext.getCmp(this.mjahr1).getValue();
		var record = new Ext.data.Record();
		record.set('mblnr', t);
		record.set('mjahr', h);
		this.wlpzcxeditPanel.loadData(record);
		this.wlpzcxeditPanel.getForm().reset();
		var store = this.wlpzcxlistPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.wlpzcxlistPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}

com.zoomlion.hjsrm.kcgl.WlpzcxMgr.prototype.onSaveok = function() {
	var records = this.wlpzcxlistPanel.getSelectionModel().getSelections();
	var _this = this;
	var store = _this.wlpzcxlistPanel.store;
	var mblnr = Ext.getCmp(this.mblnr1).getValue();
	var mjahr = Ext.getCmp(this.mjahr).getValue();
	var ldate = Ext.getCmp(this.budat).getValue();
	var bldat = Ext.getCmp(this.bldat).getValue();
	/*
	 * ValObj = { ebeln : Ext.getCmp(this.ebeln).getValue(), ebelp :
	 * Ext.getCmp(this.ebelp).getValue(), menge :
	 * Ext.getCmp(this.menge).getValue(), lgort :
	 * Ext.getCmp(this.lgort).getValue() }
	 */
	for (i = 0; i < records.length; i++) {

	}
	var purchases = [];
	Ext.each(records, function(r) {
				purchases.push(r.data);
			});
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择数据进行保存！");
	} else {
		var mk = new Ext.LoadMask(_this.wlpzcxlistPanel.id, {
					msg : '正在进行过账操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.wlpzcxdelyz.biz.ext',
			jsonData : {
				list : purchases
			},
			success : function(response, action) {
				// 返回值处理
				var sfvn = records[0].get('sfvn');
				var result = Ext.decode(response.responseText);
				if (result.result == "1") {
					if (sfvn == 'Y') {
						Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.backVnMblnr.biz.ext',
						jsonData : {
							mblnr : mblnr,
							ldate : ldate,
							mjahr : mjahr,
							vt : purchases
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
					(function	() {
									Ext.Ajax.request({
										method : "post",
										scope : this,
										url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getVnMblnrList.biz.ext',
										success : function(response, action) {
											mk.hide();
											// 返回值处理
											var ret = result.result;
											var str = ret;
											Ext.Msg.alert("系统提示", str,
													function() {
														store.reload();
														// _this.wlpzcxlistPanel.getForm().reset();
												});
										},
										failure : function(resp, opts) {
											mk.hide();
										}

									});
								}).defer(100);
							}
						},
						failure : function(resp, opts) {
							mk.hide();
						}
					})
					}else{
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.backMblnr.biz.ext',
						jsonData : {
							mblnr : mblnr,
							ldate : ldate,
							mjahr : mjahr,
							vt : purchases
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
					(function	() {
									Ext.Ajax.request({
										method : "post",
										scope : this,
										url : 'com.zoomlion.hjsrm.sapinterface.SrmWarehouse.SrmWarehouseMgr.getMblnrList.biz.ext',
										success : function(response, action) {
											mk.hide();
											// 返回值处理
											var ret = result.result;
											var str = ret;
											Ext.Msg.alert("系统提示", str,
													function() {
														store.reload();
														// _this.wlpzcxlistPanel.getForm().reset();
												});
										},
										failure : function(resp, opts) {
											mk.hide();
										}

									});
								}).defer(100);
							}
						},
						failure : function(resp, opts) {
							mk.hide();
						}
					})
					}
				} else if(result.result == "0"){
					Ext.Msg.alert("系统提示", "所选数据中有送货单被删除或已经结算的物料凭证号！");
					mk.hide();
				}else{
					Ext.Msg.alert("系统提示", "您登录的帐号已过期，请重新登录！");
					mk.hide();
				}
			}
		})
	}
}
