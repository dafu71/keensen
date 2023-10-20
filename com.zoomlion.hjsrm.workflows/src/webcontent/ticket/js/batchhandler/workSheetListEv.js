com.zoomlion.hjsrm.workflows.TickeBatchHandler.prototype.initEvent = function() {
	
	var workitemids = '';
		Ext.each(this.params.batchparams,function(obj,index,thisArr){
			workitemids = workitemids.concat(obj.workItemId);
			if(index != (thisArr.length-1)){
				workitemids = workitemids.concat(',');
			}
		},this);
		this.userInfoList.doQuery({
			'cond/workitemids':workitemids
		})	
}
/**
 * 传递提交逻辑 
 * @param {} params
 */
com.zoomlion.hjsrm.workflows.TickeBatchHandler.prototype.callSubmit = function(params){
	var busiParams = {
			processId : params.processId,  //流程实例id
			busipkid : params.busipkid, //业务处理记录表主键
			applyinfopkid : params.applyinfopkid, //诉求主键
			activityId: params.activityId, //活动定义id
			busitype : params.busitype, //业务类型
			workItemId: params.workItemId, //工作项ID
			userId: params.userId, //用户号
			worklistinfopkid : params.worklistinfopkid,//工单主键,
			batchparams : params.batchparams
			// 格式为: [{工单号, 工作项id, 用户号}， {工单号, 工作项id, 用户号}...]；
	}
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.pub.businessclib.busi.common.BclibBpsCommon.commonUnifyDeliver.biz.ext',
		jsonData : {
			'busitype' : params.busitype,
			'activitydefid' : params.activityId,
			'workItemID' : params.workItemId,
			'busiParams' : busiParams
			// 业务参数,传递至业务规则中使用
		},
		mask:{msg:'后台正在操作,请稍候...'},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "传递成功!",function(){
					var sp = Ext.getCmp('spacepanel');
					sp.closeTab('menuworkitem-'+params.workItemId);
				},this);
			} else {
				Ext.Msg.alert("系统提示", "传递失败!");
			}
		}
	});
}

/**
 * 工作项传递校验
 */
com.zoomlion.hjsrm.workflows.TickeBatchHandler.prototype.doCheckFun = function() {
	var busiParams = {
		processid : this.params.processId, //流程实例id id
		busipkid :   this.params.busipkid,//业务处理记录表主键
		applyinfopkid :  this.params.applyinfopkid, //诉求主键
		activityid:   this.params.activityId,//活动定义id
		busitype :  this.params.busitype,//业务类型
		workItemId:  this.params.workItemId,//工作项ID
		userid:  this.params.userId,//用户号
		worklistinfopkid :  this.params.worklistinfopkid,//工单主键,
		batchparams : this.params.batchparams
		//格式为: [{工单号, 工作项id, 用户号}， {工单号, 工作项id, 用户号}...]
		};
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.pub.businessclib.busi.common.BclibBpsCommon.executeBusinessRule.biz.ext',
		mask:{ msg : '后台正在操作,请稍候...'},
		jsonData : {
			'busitype' : this.params.busitype,
			'activitydefid' : this.params.activityId,
			'busiParams' : busiParams// 业务参数,传递至业务规则中使用
		},
		scope:this,
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if(result.success){//未发生异常
				//校验通过
				if(result.ret.success){
					this.callSubmit(this.params);
					return;
				}
				var rulelvl = result.ret.rulelvl;
				//如果校验不成功 (依据校验级别 rulelvl )
				if (rulelvl == "1") {// 强制校验
						Ext.Msg.alert("系统提示", result.ret.msg);
						// 阻止提交,不调用提交逻辑
				} else if (rulelvl == "2") {// 友好校验
					Ext.Msg.confirm("系统提示:是否继续传递?", result.ret.msg, function(btnText) {
						if (btnText == "yes") {
							// 调用提交逻辑继续业务
							this.callSubmit(this.params);
						} 
					}, this);
				} else {
					// 提示校验
					Ext.Msg.alert("系统提示", result.ret.msg, function() {
						// 不阻止提交,调用提交逻辑
						this.callSubmit(this.params);
					}, this);
					
				}
			}
		}
	});
}
