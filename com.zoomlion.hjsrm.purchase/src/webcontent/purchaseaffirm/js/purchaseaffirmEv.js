/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购订单确认
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchaseaffirm.PurchaseaffirmMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var _this = this;
		var _werks = _this.queryPanel.form.findField('query/werks').getValue();
		var colMode = this.listPanel.getColumnModel();
		var handColIndx=colMode.findColumnIndex("answer");
		
				
		if(_werks == '3001'){
			colMode.setHidden(handColIndx,false);;			
		}else{
			colMode.setHidden(handColIndx,true);			
		}
		var matnr2 = _this.queryPanel.matnr2.getValue();
		var regEx = new RegExp("\\n", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp(",,", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		_this.queryPanel.matnr.setValue(matnr2);
		vals["query/matnr"] = matnr2;
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
}	


com.zoomlion.hjsrm.purchaseaffirm.PurchaseaffirmMgr.prototype.onSaveok = function() {
	   Ext.getCmp(this.ebeln).focus(false,200);
	   var records  = this.listPanel.getSelectionModel().getSelections();
	   var _this = this;
	   var store = _this.listPanel.store;
	   if (records.length == 0){
	   	Ext.Msg.alert("系统提示", "请选择数据进行保存！");
	   }else{
	   	for (var i = 0; i < records.length; i++) {
	   		var a = records[i].get('menge');
	   		var b = records[i].get('zquer');
	   		var c = records[i].get('zquerb');
	   		var d = records[i].get('answer');
	   		var _werks = records[i].get('werks');
			if(b+c>a){
				Ext.Msg.alert("系统提示", "您输入的确认数量大于采购订单数量！");
				return ;
			}
			if(Ext.isEmpty(d) && _werks == '3001'){
				Ext.Msg.alert("系统提示", "请输入答交日期！");
				return ;
			}
	      }
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
			url : 'com.zoomlion.hjsrm.purchase.purchasaffirm.savepurchaseaffirm.biz.ext',
			jsonData : {
				list : purchases
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "保存成功", function() {
								store.reload();
								//_this.listPanel.getForm().reset();
							});
				}
			}
		});
	   }

 }
 com.zoomlion.hjsrm.purchaseaffirm.PurchaseaffirmMgr.prototype.exportExcel = function() {
	var _this = this;
	var ValObj = {
			werks : _this.queryPanel.form.findField('query/werks').getValue(),
			ebeln : _this.queryPanel.form.findField('query/ebeln').getValue(),
			matnr : _this.queryPanel.form.findField('query/matnr').getValue(),
			maktx : _this.queryPanel.form.findField('query/maktx').getValue(),
			startDate : Ext.util.Format.date(_this.queryPanel.form.findField('entity/startDate').getValue(),'Y-m-d'),
			endDate :Ext.util.Format.date( _this.queryPanel.form.findField('entity/endDate').getValue(),'Y-m-d')
		}
	var templatename = "PurchaseaffirmMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.purchase.purchasaffirm.purchaseaffirmdaochu.biz.ext',
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
