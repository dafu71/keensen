com.zoomlion.hjsrm.workflows.WorkSheetInfo.prototype.initEvent = function() {
	var rec = new Ext.data.Record({
				'userid' : this.params.userId,
				"workitemid" : this.params.workItemId
			})
	this.userInfoPanel.loadData(rec);
	
	
	this.userInfoPanel.mon(this.userInfoPanel, 'afterload',
			function() {
				this.userInfoPanel.addrdetail
						.setValue(this.userInfoPanel.oldaddrdetail
								.getValue());
				
			}, this);
	
	
}
/**
 * 传递提交逻辑
 * 
 * @param {}
 *            params
 */
com.zoomlion.hjsrm.workflows.WorkSheetInfo.prototype.callSubmit = function(params) {
	this.mk.show();
	var _this = this;
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.pub.businessclib.busi.common.BclibBpsCommon.commonUnifyDeliver.biz.ext',
		jsonData : {
			'busitype' : params.busitype,
			'activitydefid' : params.activityId,
			'workItemID' : params.workItemId,
			'busiParams' : params.busiParams
			// 业务参数,传递至业务规则中使用
		},
		success : function(response, action) {
			_this.mk.hide();
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "传递成功!", function() {
							var sp = Ext.getCmp('spacepanel');
							sp.closeTab('menuworkitem-' + params.workItemId);
						}, this);
			}
		}
	});
}

/**
 * 工作项传递校验
 */
com.zoomlion.hjsrm.workflows.WorkSheetInfo.prototype.doCheckFun = function() {
	var _this = this;
	_this.mk = new Ext.LoadMask(document.body, {
				msg : '后台正在操作,请稍候...',
				removeMask : true
			});
	_this.mk.show();
	this.busiParams = this.userInfoPanel.getForm().getValues();
	this.busiParams.worklistinfopkid = this.params.worklistinfopkid;
	this.busiParams.busipkid = this.params.busipkid;
	this.busiParams.activityInstId = this.params.activityInstId;
	this.busiParams.batchparams = this.params.batchparams;

	this.params.busiParams = this.busiParams;
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.pub.businessclib.busi.common.BclibBpsCommon.executeBusinessRule.biz.ext',
		jsonData : {
			'busitype' : this.params.busitype,
			'activitydefid' : this.params.activityId,
			'busiParams' : this.busiParams
			// 业务参数,传递至业务规则中使用
		},
		success : function(response, action) {
			_this.mk.hide();
			var result = Ext.decode(response.responseText);
			if (result.success) {// 未发生异常
				// 校验通过
				if (result.ret.success) {
					_this.callSubmit(_this.params);
					return;
				}
				var rulelvl = result.ret.rulelvl;
				// 如果校验不成功 (依据校验级别 rulelvl )
				if (rulelvl == "1") {// 强制校验
					Ext.Msg.alert("系统提示", result.ret.msg);
					// 阻止提交,不调用提交逻辑
				} else if (rulelvl == "2") {// 友好校验
					Ext.Msg.confirm("系统提示:是否继续传递?", result.ret.msg, function(
									btnText) {
								if (btnText == "yes") {
									// 调用提交逻辑继续业务
									_this.callSubmit(_this.params);
								}
							}, this);
				} else {
					// 提示校验
					Ext.Msg.alert("系统提示", result.ret.msg, function() {
								// 不阻止提交,调用提交逻辑
								_this.callSubmit(_this.params);
							}, this);

				}
			}
		}
	});
}

/**
 * 修改明细地址
 */
com.zoomlion.hjsrm.workflows.WorkSheetInfo.prototype.onUpdateAddrdetail = function() {

	if (Ext.isEmpty(this.userInfoPanel.addrdetail.getValue())) {
		Ext.Msg.alert("系统提示", "明细地址不能为空！");
		return;
	}

	var _this = this;
	// 提交保存的数据
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.modifyApplyAddrdetail.biz.ext',
		jsonData : {
			'applyinfopkid' : _this.params.applyinfopkid,
			'addrdetail' : _this.userInfoPanel.addrdetail.getValue()
		},
		mask : {// 加载蒙板
			msg : '正在保存数据，请稍候...!' // 蒙板提示消息
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				Ext.Msg.alert('系统提示', '保存成功', function() {
							var rec = new Ext.data.Record({
										'userid' : _this.params.userId,
										"workitemid" : _this.params.workItemId
									})
							_this.userInfoPanel.loadData(rec);
						});
			}
		}
	});

}
