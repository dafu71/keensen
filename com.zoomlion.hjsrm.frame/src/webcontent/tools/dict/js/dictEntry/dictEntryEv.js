/*
 * 示例event 
 * @author rye
 */
 
com.zoomlion.hjsrm.dict.DictEntryMgr.prototype.initEvent = function() {
	
	//增加删除事件
	this.listPanel.mon(this.listPanel,'delete', function(gird,records){
		var  vals = [];
		for (var i = 0; i < records.length; i++) {
			r = records[i];
			vals = vals.concat(r.data);
		}
		Ext.Ajax.request({
			method : "post",
			url :'com.zoomlion.hjsrm.frame.tools.dict.DictManage.deleteEosDictEntry.biz.ext',
			jsonData : {
				entitys:vals
			},
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "删除成功!");
					gird.store.commitChanges();
					return true;
				} else {
					return false;
				}
			}
		});
	},this);
	
	//修改校验事件
	this.listPanel.mon(this.listPanel,'beforeedit', function(e){
			if(e.record.get('dataorgid')=='0'){
				e.cancel = false;
			}
	},this);
	
	this.listPanel.mon(this.listPanel,'validateedit', function(e){
		var ss = true;
		if(e.field=='dictid'){
			this.listPanel.store.each(function(rec){
				if(rec.get('dictid')==e.value){
					ss = false;
				}
			});
		}		
		return ss;
	},this);
	
	//修改后刷新
	this.listPanel.mon(this.listPanel,'aftersave', function(gird,e){
		this.listPanel.store.reload();
	},this);
 }
 
com.zoomlion.hjsrm.dict.DictEntryMgr.prototype.onAdd = function() {
 	var dicttypeid = this.listPanel.dicttypeid;
 	if(!dicttypeid){
 		Ext.Msg.alert('系统提示','请先选择一个业务字典类型!');
 		return;
 	}
 	this.listPanel.addRow({
					dicttypeid : dicttypeid,
					dictid : '',
					dictname : '',
					status : '1',
					sortno : '',
					name : '',
					dataorgid:'',
					orgname:''
	});
	//	设置焦点
	this.listPanel.startEditing(0,2);
 }

com.zoomlion.hjsrm.dict.DictEntryMgr.prototype.onDel = function() {
	var records  = this.listPanel.getSelectionModel().getSelections();
	for (var i = 0; i < records.length; i++) {
			if(records[i].get('dataorgid')=='0'){
				Ext.Msg.alert("系统提示", "系统级参数不允许删除！");
				return ;
			}
	}
 	this.listPanel.onDel();
 }

com.zoomlion.hjsrm.dict.DictEntryMgr.prototype.onSave = function() {
	if(this.listPanel.isValid()){
 		this.listPanel.save();
	}
 }