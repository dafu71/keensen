com.zoomlion.hjsrm.srmclient.demo.NewFlowMgr.prototype.initEvent = function() {
	//增加新增后事件
	this.inputPanel.mon(this.inputPanel,'aftersave', function(){
		this.inputPanel.form.reset();
		return;
	},this);
}

com.zoomlion.hjsrm.srmclient.demo.NewFlowMgr.prototype.onSave = function(){
	this.inputPanel.saveData();
	
}