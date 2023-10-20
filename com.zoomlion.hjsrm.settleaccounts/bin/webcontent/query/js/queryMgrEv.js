com.zoomlion.hjsrm.settleaccounts.QueryMgr.prototype.initEvent = function() {
	
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
	
	if(!Ext.isEmpty(lifnr)){
			this.queryPanel.lifnr.setValue(lifnr);
			
		}
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		if(!Ext.isEmpty(lifnr)){
			this.queryPanel.lifnr.setValue(lifnr);
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
com.zoomlion.hjsrm.settleaccounts.QueryMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var templatename = "JspzquerydcMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryListsdaochu.biz.ext',
		jsonData :daochu,
		success : function(response, action) {
			// 返回值处理
			var result = Ext.decode(response.responseText);
			
			var l = result.data.length;
			if(l>5000){
				Ext.Msg.alert("系统提示", "导出数据限制条数不能超过5000条", function() {
								_this.requestMask.hide();
							}, this);
			}else{
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
							//window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									//+ fname;
						}
					},
					failure : function(resp, opts) {
						_this.requestMask.hide();
					}
					});
				}
			}
		}
	});

}

com.zoomlion.hjsrm.settleaccounts.QueryMgr.prototype.onadd = function() {
	var _this = this;
	var store = _this.listPanel.store;
	 var mk = new Ext.LoadMask(document.body, {
				msg : '正在更新数据，请稍候！',
				removeMask : true
			});
			mk.show();
	 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.sapinterface.SapJiesuan.SapJiesuan.saveBelnr.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				mk.hide();
			    //store.reload();
			    //_this.listPanel.getForm().reset();
			    Ext.Msg.alert('系统提示', '预制发票更新成功');
			} else {						
				Ext.Msg.alert('系统提示', '更新失败');
			}
		 }
	 },this);
};
