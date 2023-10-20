
Ext.namespace('Ext.ex');
Ext.ex.CommonHandler = Ext.extend(Ext.util.Observable, {
	constructor : function(B) {
		this.config = B
	},
	showHistory:function(storeId,index){
		alert(storeId + "," + index);
		
	}
})

