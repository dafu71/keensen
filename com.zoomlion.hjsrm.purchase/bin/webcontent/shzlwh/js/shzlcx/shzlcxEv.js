/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 送货指令查询
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchase.shzlcxMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.shzlcxqueryPanel.mon(this.shzlcxqueryPanel,'query', function(form,vals){		
		var store =this.shzlcxlistPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.shzlcxlistPanel.pagingToolbar.pageSize
                    }});
	},this);
}	

com.zoomlion.hjsrm.purchase.shzlcxMgr.prototype.onsaveok = function() {
	  var records  = this.shzlcxlistPanel.getSelectionModel().getSelections();
	  var _this = this;
	 var store = _this.shzlcxlistPanel.store;
	 var purchases = [];
		Ext.each(records, function(r) {
					purchases.push(r.data);
				});
	 var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
			mk.show();
	 Ext.Ajax.request({
		method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.purchase.shzlwh.saveshzlcx.biz.ext',
			jsonData : {
				     list : purchases	
			},
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				mk.hide();
			    store.reload();
			    //_this.shzlcxlistPanel.getForm().reset();
			} else {						
				Ext.Msg.alert('系统提示', '更新失败');
			}
		 }
	 },this);
};	
com.zoomlion.hjsrm.purchase.shzlcxMgr.prototype.ondel = function() {
	 var records  = this.shzlcxlistPanel.getSelectionModel().getSelections();
	  var _this = this;
	 var store = _this.shzlcxlistPanel.store;
	 var purchases = [];
		Ext.each(records, function(r) {
					purchases.push(r.data);
				});
	 var mk = new Ext.LoadMask(document.body, {
				msg : '正在删除数据，请稍候！',
				removeMask : true
			});
			mk.show();
	 Ext.Ajax.request({
		method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.purchase.shzlwh.delshzlcx.biz.ext',
			jsonData : {
				     list : purchases	
			},
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				mk.hide();
			    store.reload();
			    //_this.shzlcxlistPanel.getForm().reset();
			} else {						
				Ext.Msg.alert('系统提示', '删除失败');
			}
		 }
	 },this);
};
com.zoomlion.hjsrm.purchase.shzlcxMgr.prototype.onGetCurRecord = function() {
	var list = Ext.getCmp(listid);
	var rec = list.getSelectionModel().getSelections();
	this.rec = rec[0];

};
com.zoomlion.hjsrm.purchase.shzlcxMgr.prototype.exportExcel = function() {
	var _this = this;
	var ValObj = {
			werks : _this.shzlcxqueryPanel.form.findField('query/werks').getValue(),
			matnr : _this.shzlcxqueryPanel.form.findField('query/matnr').getValue(),
			maktx : _this.shzlcxqueryPanel.form.findField('query/maktx').getValue(),
			werks : _this.shzlcxqueryPanel.form.findField('query/bukrs').getValue(),
			ebeln : _this.shzlcxqueryPanel.form.findField('query/zshso').getValue(),
			matnr : _this.shzlcxqueryPanel.form.findField('query/ekorg').getValue(),
			maktx : _this.shzlcxqueryPanel.form.findField('query/ekgrp').getValue(),
			lifnr : _this.shzlcxqueryPanel.form.findField('query/lifnr').getValue(),
			name1 : _this.shzlcxqueryPanel.form.findField('query/name1').getValue(),
			startDatea : Ext.util.Format.date(_this.shzlcxqueryPanel.form.findField('entitya/startDate').getValue(),'Y-m-d'),
			endDatea :Ext.util.Format.date( _this.shzlcxqueryPanel.form.findField('entitya/endDate').getValue(),'Y-m-d'),
			startDateb : Ext.util.Format.date(_this.shzlcxqueryPanel.form.findField('entityb/startDate').getValue(),'Y-m-d'),
			endDateb :Ext.util.Format.date( _this.shzlcxqueryPanel.form.findField('entityb/endDate').getValue(),'Y-m-d')
		}

	var templatename = "ShzlcxDC";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.purchase.shzlwh.queryshzlsdaochuBuyer.biz.ext',
		jsonData : {
			query:ValObj
		},
		success : function(response, action) {
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				var totalCount = result.totalCount;
				if(totalCount > 5000){
				  alert('最多导出5000条，已经超出范围');
				  return false;
				}
				
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


