/*
 * 示例event 
 * @author rye
 */
 
com.zoomlion.hjsrm.inspect.Inspectqjbzmxmgr.prototype.initEvent = function() {
	
	//增加删除事件
	this.listPanel.mon(this.listPanel,'delete', function(gird,records){
		var  vals = [];
		for (var i = 0; i < records.length; i++) {
			r = records[i];
			vals = vals.concat(r.data);
		}
		Ext.Ajax.request({
			method : "post",
			url :'com.zoomlion.hjsrm.inspect.inspectwtwh.delinspectqjbzmx.biz.ext',
			jsonData : {
				entitys:vals
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "删除成功!",function(){
					Ext.getCmp(zjlblistPanel).store.reload();
					});
					gird.store.commitChanges();
					return true;
				} else {
					return false;
				}
			}
		});
	},this);
		
	this.listPanel.mon(this.listPanel,'validateedit', function(e){
		var ss = true;
		if(e.field=='jyxm'){
			this.listPanel.store.each(function(rec){
				if(rec.get('jyxm')==e.value){
					ss = false;
				}
			});
		}		
		return ss;
	},this);
	
	//修改后刷新
	this.listPanel.mon(this.listPanel,'aftersave', function(gird,e){
		this.listPanel.store.reload();
	    Ext.getCmp(zjlblistPanel).store.reload();
	},this);
 }
 
com.zoomlion.hjsrm.inspect.Inspectqjbzmxmgr.prototype.onAdd = function() {
 	var matnr = this.listPanel.matnr;
 	var werks = this.listPanel.werks;
 	if(!matnr){
 		Ext.Msg.alert('系统提示','请先选择一个业务字典类型!');
 		return;
 	}
 	this.listPanel.addRow({
					matnr : matnr,
					werks : werks,
					jyxm : '',
					jybz : '',
					text : ''	
	});
	//	设置焦点
	this.listPanel.startEditing(0,2);
 }

com.zoomlion.hjsrm.inspect.Inspectqjbzmxmgr.prototype.onDel = function() {
 	this.listPanel.onDel();
 }

com.zoomlion.hjsrm.inspect.Inspectqjbzmxmgr.prototype.onSave = function() {
	if(this.listPanel.isValid()){
 		this.listPanel.save();
	}
 }
com.zoomlion.hjsrm.inspect.Inspectqjbzmxmgr.prototype.onLsqjbz = function() {
	    this.listPanel.store.rejectChanges();
		this.listPanel.loadData({
				matnr : "0000",
				werks : "0000"
		});
		this.listPanel.matnr = "0000";
		this.listPanel.werks = "0000";
		Ext.getCmp(lsqjwhtext).setValue("正在维护临时全检标准表...") 
}