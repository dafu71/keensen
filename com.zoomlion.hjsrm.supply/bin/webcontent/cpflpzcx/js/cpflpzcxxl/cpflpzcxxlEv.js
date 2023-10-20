/*
 * @author 刘鑫
 */
 
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxxlMgr.prototype.initEvent = function() {
	
	//增加删除事件
	this.listPanel.mon(this.listPanel,'delete', function(gird,records){
		var _this = this;
		var  vals = [];
		for (var i = 0; i < records.length; i++) {
			r = records[i];
			vals = vals.concat(r.data);
		}
		var mk = new Ext.LoadMask(_this.listPanel.id, {
					msg : '正在进行查询操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			url :'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.delcpflpzcxxl.biz.ext',
			jsonData : {
				entitys:vals
			},
			success : function(response, action) {
				mk.hide();
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
	
	this.listPanel.mon(this.listPanel, 'beforesave', function() {
		        var records = this.listPanel.store.getRange();
			    for (var i = 0; i < records.length; i++) {
				var j = i + 1;
				if (Ext.isEmpty(records[i].data.fldm)) {
					Ext.Msg.alert('提示', '检查项目中第' + j + '行的分类代码为空！')
					return false
				}else if((records[i].data.fldm).length != 2 ){
				   Ext.Msg.alert('提示', '检查项目中第' + j + '行的分类代码不为2位数字！')
				    return false
				}
			}
				
			}, this);
			
	this.listPanel.mon(this.listPanel,'validateedit', function(e){
		var ss = true;
		if(e.field=='fldm'){
			this.listPanel.store.each(function(rec){
				if(rec.get('fldm')==e.value){
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
 
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxxlMgr.prototype.onAdd = function() {
 	var sjid = this.listPanel.sjid;
 	var sjdm = this.listPanel.sjdm;
 	if(!sjid){
 		Ext.Msg.alert('系统提示','请先选择一个有效的产品大类!（新增中类，请先保存）');
 		return;
 	}
 	this.listPanel.addRow({
 		            sjdm : sjdm,
					fldm : '',
					flmc : '',
					sjid : sjid,
					ssdj : "3"
	});
	//	设置焦点
	this.listPanel.startEditing(0,2);
 }

com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxxlMgr.prototype.onDel = function() {
 	this.listPanel.onDel();
 }

com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxxlMgr.prototype.onSave = function() {
	if(this.listPanel.isValid()){
 		this.listPanel.save();
	}
 }