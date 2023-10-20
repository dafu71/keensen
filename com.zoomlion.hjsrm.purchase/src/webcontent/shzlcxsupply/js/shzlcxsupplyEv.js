/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 供应商送货指令查询
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchase.shzlcxsupplyMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.shzlcxsupplyqueryPanel.mon(this.shzlcxsupplyqueryPanel,'query', function(form,vals){
		var store =this.shzlcxsupplylistPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.shzlcxsupplylistPanel.pagingToolbar.pageSize
                    }});
	},this);
}	

com.zoomlion.hjsrm.purchase.shzlcxsupplyMgr.prototype.onsaveok = function() {
	  var records  = this.shzlcxsupplylistPanel.getSelectionModel().getSelections();
	  var _this = this;
	 var store = _this.shzlcxsupplylistPanel.store;
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
			url : 'com.zoomlion.hjsrm.purchase.shzlwh.saveshzlcxsupply.biz.ext',
			jsonData : {
				     list : purchases	
			},
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				mk.hide();
			    store.reload();
			    //_this.shzlcxsupplylistPanel.getForm().reset();
			} else {						
				Ext.Msg.alert('系统提示', '更新失败');
			}
		 }
	 },this);
};
com.zoomlion.hjsrm.purchase.shzlcxsupplyMgr.prototype.exportExcel = function() {
	var _this = this;
	var ValObj = {
			werks : _this.shzlcxsupplyqueryPanel.form.findField('query/werks').getValue(),
			matnr : _this.shzlcxsupplyqueryPanel.form.findField('query/matnr').getValue(),
			maktx : _this.shzlcxsupplyqueryPanel.form.findField('query/maktx').getValue(),
			werks : _this.shzlcxsupplyqueryPanel.form.findField('query/bukrs').getValue(),
			ebeln : _this.shzlcxsupplyqueryPanel.form.findField('query/zshso').getValue(),
			matnr : _this.shzlcxsupplyqueryPanel.form.findField('query/ekorg').getValue(),
			maktx : _this.shzlcxsupplyqueryPanel.form.findField('query/ekgrp').getValue(),
			startDatea : Ext.util.Format.date(_this.shzlcxsupplyqueryPanel.form.findField('entitya/startDate').getValue(),'Y-m-d'),
			endDatea :Ext.util.Format.date( _this.shzlcxsupplyqueryPanel.form.findField('entitya/endDate').getValue(),'Y-m-d'),
			startDateb : Ext.util.Format.date(_this.shzlcxsupplyqueryPanel.form.findField('entityb/startDate').getValue(),'Y-m-d'),
			endDateb :Ext.util.Format.date( _this.shzlcxsupplyqueryPanel.form.findField('entityb/endDate').getValue(),'Y-m-d')
		}
	var templatename = "ShzlcxsupplyDC";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.purchase.shzlwh.queryshzlsdaochu.biz.ext',
		jsonData : {
			daochu:ValObj
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


