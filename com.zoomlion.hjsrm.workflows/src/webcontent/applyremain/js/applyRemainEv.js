com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.initEvent = function() {
	/**
	 * 查询事件处理
	 */
	this.queryDemand.mon(this.queryDemand, 'query', function(form, vals) {
		vals['condition/worklisttype'] = '1';
		this.resultBlock.doQuery(vals);
	}, this);
	
	//*********************将焦点聚集在用户号**************************//
	this.queryDemand.form.findField("condition/usercode").focus(false, 300); 

	
	// 双击事件
	this.resultBlock.mon(this.resultBlock, 'rowdblclick', function(obj, index, e) {
		
		this.resultBlock.getSelectionModel().selectRow(index);
		var workOrderRec = this.resultBlock.getSelectionModel().getSelected();
		this.doHandlerWorkItem(workOrderRec);
	}, this);
    
}
/**
 * 处理工作项
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.doHandlerWorkItem = function(workOrderRec){
		var state = workOrderRec.get('currentstate');
		if( (state=='10') || (state =='4') ){
			this.commonHandler.doHandlerDbClick(workOrderRec,this);
		}else{
			Ext.Msg.alert('提示','请选择一条可签收或者可处理的工作项！');
		} 
}
/**
 * @method 检查工单状态
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.checkWorkOrderState  = function(records,checkState,errorMsg){
	if(!(Ext.isArray(records) && records.length>0)){
		Ext.Msg.alert("系统提示","没有选定数据，请选择数据行！");
		return false;
	}
	for (var i = 0; i < records.length; i++) {
			var state = records[i].get("currentstate");
			if(Ext.isArray(checkState)){
				var passed  =Ext.each(checkState,function(check){
					if(check==state){
						return false;
					}
				},this);
				
				if(Ext.isEmpty(passed)){
					Ext.Msg.alert("系统提示", errorMsg||"工单状态不对!请重新选择");
					return false;
				}	
			}else{
				if(state!=checkState){
					Ext.Msg.alert("系统提示", errorMsg||"工单状态不对!请重新选择");
					return false;
				}	
			}
	}
	return true;
}
/**
 * @method 获取可签收的工作项
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.getSignWorkitem = function(records){
	var preSign = []
	Ext.each(records,function(rec){
		if(rec.get('currentstate')=='4'){
			preSign.push(rec);	
		}
	});
	return preSign;
}
/**
 * 注销工作单-终止流程
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onTerminateProcessInstance = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();	
	if (this.checkWorkOrderState(records,['10','4'],'请选择待处理或可签收的工作单!')) {
		var preSign = this.getSignWorkitem(records);
		if(preSign.length>0){
			this.commonHandler.doSign(preSign,this,function(selections){
				this.commonHandler.doStopFlow(selections,this);	
			},records,true);	
		}else{
			this.commonHandler.doStopFlow(records,this);	
		}
		
	}
}
/**
 * 转派-工作项改派给多个参与者
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onReassignWorkItemEx = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();		
	if (this.checkWorkOrderState(records,['10','4'],'请选择待处理或可签收的工作单!')) {
		var preSign = this.getSignWorkitem(records);
		if(preSign.length>0){
			this.commonHandler.doSign(preSign,this,function(selections){
				this.turnUpWin.setWorkItems(selections);
				this.turnUpWin.show();	
			},records);	
		}else{
			this.turnUpWin.setWorkItems(records);
			this.turnUpWin.show();	
		}
	}
}

/**
 * 诉求--签收-待领取的工作项
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onDemandAcceptWorkItem = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	if (this.checkWorkOrderState(records,"4","必须选中可签收的工作单")) {
		this.commonHandler.doSign(records,this);
	}
}
/**
 * 诉求--撤销签收-已领取的工作项
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onDemandWithdrawWorkItem = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	var records = this.resultBlock.getSelectionModel().getSelections();	
	if (this.checkWorkOrderState(records,'10','必须选中待处理的工作单!')) {
		this.commonHandler.doDissign(records,this);
	}
}

/**
 * 知会按钮点击处理
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onNotify = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	}else{
		this.notifyWin.show();
		var applyinfopkid = records[0].get("applyinfopkid");
		var form = this.notifyWin.items.get(0).getForm();
		form.reset();
		form.findField("entity/applyinfopkid").setValue(applyinfopkid);
		var vals = {"condition/applyinfopkid" : applyinfopkid};
		this.notifyWin.items.get(1).doQuery(vals);
	}
}

/**
 * 补话按钮点击处理
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onComplement = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	}else{
		this.complementWin.show();
		var applyinfopkid = records[0].get("applyinfopkid");
		var busipkid = records[0].get("pkid"); 
		var urglvl = records[0].get("urglvl"); 
		var form = this.complementWin.items.get(0).getForm();
		form.reset();
		form.findField("entity/applyinfopkid").setValue(applyinfopkid);
		form.findField("entity/priority").setValue(urglvl);
		form.findField("entity/busipkid").setValue(busipkid);
		var vals = {"condition/applyinfopkid" : applyinfopkid};
		this.complementWin.items.get(1).doQuery(vals);
	}
	
}

/**
 * 跟进按钮点击处理
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onTrack = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	}else{
		this.trackWin.show();
		var applyinfopkid = records[0].get("applyinfopkid");
	    var busipkid = records[0].get("pkid"); 
		var urglvl = records[0].get("urglvl"); 
		var form = this.trackWin.items.get(0).getForm();
		form.reset();
		form.findField("entity/applyinfopkid").setValue(applyinfopkid);
		form.findField("entity/priority").setValue(urglvl);
		form.findField("entity/busipkid").setValue(busipkid);
		var vals = {"condition/applyinfopkid" : applyinfopkid};
		this.trackWin.items.get(1).doQuery(vals);
	}
}

/**
 * 催办按钮点击处理
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onUrgerec = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	}else{
		this.urgeWorkWin.show();
		var applyinfopkid = records[0].get("applyinfopkid");
		var busipkid = records[0].get("pkid"); 
		var urglvl = records[0].get("urglvl"); 
		var form = this.urgeWorkWin.items.get(0).getForm();
		form.reset();
		form.findField("entity/applyinfopkid").setValue(applyinfopkid);
		form.findField("entity/urglvl").setValue(urglvl);
		form.findField("entity/busipkid").setValue(busipkid);
		var vals = {"condition/applyinfopkid" : applyinfopkid};
		this.urgeWorkWin.items.get(1).doQuery(vals);
	}
}

/**
 * 流程图按钮点击处理
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onDemandWorkfolw = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if(records.length != 1){
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
        this.commonHandler.doOpenFlow(records[0],this);
	}
}
/**
 * 诉求处理
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onDemandHandle = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1){
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		this.doHandlerWorkItem(records[0]);
	}
}


/**
 * 优先级按钮点击处理
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onPriorityDemand = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择一行数据！");
	}else{
		this.priorityWin.show();
//		var pkid = records[0].get("pkid");
//		this.priorityWin.loadData(new Ext.data.Record({'pkid' : pkid}));
		var applyinfopkid = records[0].get("applyinfopkid");
		//维护诉求信息表中的优先级，而非业务记录表
		this.priorityWin.loadData(new Ext.data.Record({
					'applyinfopkid' : applyinfopkid
				}));
	}
}

/**
 * 打印诉求工单
 */
com.zoomlion.hjsrm.workflows.ApplyRemainMgr.prototype.onPrint = function() {
	var templateid = 'bs_applyremain';
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}else{
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : '正在执行操作...'
						});
		this.requestMask.show();
		var param = '';
		for(var i=0; i<records.length; i++){
			param += ('applyinfopkids=' + records[i].data.applyinfopkid);
			if(i != records.length-1){
				param += '&';
			}
		}
		var result = Ext.ex.XMLHttpRequestEx.synchRequest( "POST",
					'com.zoomlion.hjsrm.workflows.remain.RemainManager.queryApplyRemainInfo.biz.ext?' +
					encodeURI(param));
		var ret = Ext.decode(result); 
		var printinfos = ret.datas;
		var wp = new webPrint();// 创建打印控件对象 
		wp.init();// 打印对象初始化
		eval('create_print_init_' + templateid + '(wp.LODOP)'); 
		Ext.each(printinfos, function(printinfo){ 
				eval('add_print_object_' + templateid + '(wp.LODOP,printinfo)'); 
		}); 
		this.requestMask.hide();
		wp.preview(); 
		// wp.print();
	}
}