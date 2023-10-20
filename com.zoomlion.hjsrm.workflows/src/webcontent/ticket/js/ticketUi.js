com.zoomlion.hjsrm.workflows.TicketMgr = function(params) {
	this.params = params;
	this.initPanel = function() {
		this.createSheetInfoPanel();
		this.createworkFlowsInfoPanel();
		this.createTicketMgrPanel();
		// 初始化代码
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : divId,
					panels : [this.TicketMgrPanel]
				});
	};
	
	this.destroy = function(){
		if(this.workSheetInfo.destroy){
			this.workSheetInfo.destroy();	
		}
		if(this.workFlowsInfo.destroy){
			this.workFlowsInfo.destroy();	
		}
	};
	/**
	 * 创建电子工单面板(主面板)
	 */
    this.createTicketMgrPanel = function() {
		this.TicketMgrPanel = new Srm.workflows.common.WorkSheetTab({
					activeTab : 0,
					applyinfopkid:this.params.applyinfopkid,
					id : tabId,
					closable : true,
					defaults : {
						autoScroll : true
					},
					enableTabScroll : true,// 内容超过了出现滚动条
					border : false,
					items : [this.workSheetInfo.workSheetInfoPanel,
							this.workFlowsInfo.workFlowsInfoPanel]
				});
	};
   
    
    /**
	 * 创建工单环节流程图查询面板
	 */
     this.createworkFlowsInfoPanel = function() {
		this.workFlowsInfo = new com.zoomlion.hjsrm.workflows.WorkFlowsInfo(this.params);
		this.workFlowsInfo.initPanel();
		this.workFlowsInfo.initEvent();
	}
     
     /**
		 * 创建工单信息界面
		 */
     this.createSheetInfoPanel = function() {
		this.workSheetInfo = new com.zoomlion.hjsrm.workflows.WorkSheetInfo(this.params);
		this.workSheetInfo.initPanel();
		this.workSheetInfo.initEvent();
	}
}