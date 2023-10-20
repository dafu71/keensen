/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 物料凭证查询 创建日期： 2015-01-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.mblnrreport.MblnrreportMgr.prototype.initEvent = function() {

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
}

com.zoomlion.hjsrm.mblnrreport.MblnrreportMgr.prototype.exportExcel = function() {
	var _this = this;
	//var daochu = _this.queryPanel.getForm().getValues();
	var ValObj = {
			werks : _this.queryPanel.form.findField('query/werks').getValue(),
			mblnr : _this.queryPanel.form.findField('query/mblnr').getValue(),
			mjahr : _this.queryPanel.form.findField('query/mjahr').getValue(),
			zasnh : _this.queryPanel.form.findField('query/zasnh').getValue(),
			ebeln : _this.queryPanel.form.findField('query/ebeln').getValue(),
			matnr : _this.queryPanel.form.findField('query/matnr').getValue(),
			maktx : _this.queryPanel.form.findField('query/maktx').getValue(),
			lifnr : _this.queryPanel.form.findField('query/lifnr').getValue(),
			name1 : _this.queryPanel.form.findField('query/name1').getValue(),
			username : _this.queryPanel.form.findField('query/username').getValue(),
			lgort : _this.queryPanel.form.findField('query/lgort').getValue(),
			startDate : Ext.util.Format.date(_this.queryPanel.form.findField('entity/startDate').getValue(),'Y-m-d'),
			endDate :Ext.util.Format.date( _this.queryPanel.form.findField('entity/endDate').getValue(),'Y-m-d')
		}
	
	var templatename = "MblnrdcMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.report.mblnrreport.mblnrreportquerydaochu.biz.ext',
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
							if(Ext.isIE){
									window.open('/default/deliverynote/seek/down4IE.jsp?fname='+fname);
							}else{
									window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
										+ fname;
							}
							/*window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									+ fname;*/
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
