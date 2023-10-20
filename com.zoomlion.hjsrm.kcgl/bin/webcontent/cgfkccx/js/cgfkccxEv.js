/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购订单查询
 * 创建日期： 2014-12-15 
 * 作 者： 刘鑫
 ******************************************************************************/
 
 
 com.zoomlion.hjsrm.kcgl.CgfkccxMgr.prototype.initEvent = function() {
	
	//增加查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
		var a = Ext.getCmp(this.maktx).getValue();
		var b = Ext.getCmp(this.matnr).getValue();
		if(Ext.isEmpty(a)&&Ext.isEmpty(b)){
		   Ext.Msg.alert("系统提示", "物料号与物料描述不能同时为空！");
			return ;
			}
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
}	
