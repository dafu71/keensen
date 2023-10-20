/**
 * @description 事件处理
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.initEvent = function() {
	// *********查询事件处理***************//
	this.queryBlock.mon(this.queryBlock, 'query', function(form, vals) {
				vals['condition/worklisttype'] = '2'// 业务工单
				this.resultBlock.doQuery(vals);
				this.queryBlock.form.findField("condition/khuserid").focus(false, 300);
			}, this);

	// *********************将焦点聚集在用户号**************************//
	this.queryBlock.form.findField("condition/khuserid").focus(false, 300);

	this.queryBlock.mon(this.queryBlock, 'active', function() {// FIXME 焦点问题
				this.queryBlock.form.findField("condition/khuserid").focus(
						false, 300);
			}, this);

	// 双击处理：签收工单,并打开工单
	this.resultBlock.mon(this.resultBlock, 'rowdblclick', function(obj, index,
					e) {

				this.resultBlock.getSelectionModel().selectRow(index);
				var workOrderRec = this.resultBlock.getSelectionModel()
						.getSelected();
				this.doHandlerWorkItem(workOrderRec);
			}, this);
}

/**
 * 环节流程图
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.showFlowGraph = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		this.commonHandler.doOpenFlow(records[0], this);
	}
}
/**
 * 处理工作项
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.doHandlerWorkItem = function(
		workOrderRec) {
	var state = workOrderRec.get('currentstate');
	if ((state == '10') || (state == '4')) {
		this.commonHandler.doHandlerDbClick(workOrderRec, this);
	} else {
		Ext.Msg.alert('提示', '请选择一条可签收或者可处理的工作项！');
	}
}
/**
 * 工单处理
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onHandle = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		this.doHandlerWorkItem(records[0]);
	}
}
/**
 * 工单批量处理
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onHandleBatch = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else{
		var batchId = records[0].get('batchid'); // 批量号
		var busiType = records[0].get('busitype'); // 流程业务类型
		var activitydefId = records[0].get('activitydefid');// 环节定义ID
		//挂表流程批量处理
		if(records.length==1 && Ext.isEmpty(batchId)){
			Ext.Msg.alert("系统提示", "请选择有批量号的工单!");
			return;
		}
		for(var i=0; i<records.length; i++){
			if(busiType != records[i].get('busitype')){
				Ext.Msg.alert("系统提示", "请选择相同业务类别的工作单!");
				return;
			}else if(activitydefId != records[i].get('activitydefid')){
				Ext.Msg.alert("系统提示", "请选择相同业务环节的工作单!");
				return;
			}else if(batchId != records[i].get('batchid')){
				Ext.Msg.alert("系统提示", "请选择相同批量号的工作单!");
				return;
			}
		}
		if ((busiType == 'BS114' && activitydefId == 'BS11401')	//挂表流程-挂表环节
				||(busiType == 'BS115' && activitydefId == 'BS11501')){	//点火挂表流程-挂表环节 
			if (this.checkWorkOrderState(records, [4, 10], "必须选中可签收或可处理的工作单")) {
				this.commonHandler.doHandlerBatch(records, this);
			}
		} else {
			Ext.Msg.alert("系统提示", "当前流程或者环节不支持批量处理,请重新选择!");
		}
	}
}
/**
 * @method 检查工单组是否在同一个流程;增加检查:是否是同一个诉求下的流程@author ChenJW
 * @param {Ext.data.Record[]}
 *            records
 * @return {Boolean}
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.checkWorkOrderInSameProcess = function(
		records) {
	if (records.length > 0) {
		var applyinfopkid = records[0].get('applyinfopkid');
		var processDefineID = records[0].get('processdefid');
		for (var i = 0; i < records.length; i++) {
			if (processDefineID != records[i].get('processdefid')) {
				Ext.Msg.alert('提示', '当前工作项不能批量处理! 请选中相同业务类别的工作单!');
				return false;
			}
			if (applyinfopkid != records[i].get('applyinfopkid')) {
				Ext.Msg.alert('提示', '当前工作项不能批量处理! 请选中同一诉求生成的工作单!');
				return false;
			}
		}
	}
	return true;
}
/**
 * 工单信息打印
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onPrint = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length < 1) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
	    var t = '';
		for(var i = 0, j = records.length; i < j; i++){
			if(i > 0 && t != '' && t != records[i].data.busitype){
				Ext.Msg.alert("系统提示", "请选择相同业务类别的工单进行打印");
				return;
			}
			t = records[i].data.busitype;
		}
		// 调用打印工单组件
		this.commonHandler.printRecord(records, this); 
	}
}
/**
 * 导出excel按钮点击处理
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onExportExcel = function() {

	var selections = this.resultBlock.getSelectionModel().getSelections();
	if (selections.length > 0) {// list有选择项,导出已勾选记录
		var jsonRecords = [];
		Ext.each(selections, function(workorder) {
					var batchid = workorder.get('batchid');
					batchid = batchid || '';
					var planinfopkid = workorder.get('planinfopkid') || '';
					var bp = batchid + '/' + planinfopkid;
					if(workorder.get('isprint')== '1'){
						var isprint = "是";
					}else{
						var isprint = "否";
					}
					
					var proId = workorder.get('urglvl');
					var proName = ''
					Ext.each(BS_WORKPRIORITY, function(obj) {
								if (obj.DICTID == proId) {
									proName = obj.DICTNAME;
									return;
								}
							});
					var chnlType = workorder.get('chnltype');
					var applyTypeName = '';
					Ext.each(BS_APPLYINFO_CHNLTYPE, function(obj) {
								if (obj.DICTID == chnlType) {
									applyTypeName = obj.DICTNAME;
									return;
								}
							});
					jsonRecords.push({
								flowname : workorder.get('processinstname'),
								activityinstname : workorder
										.get('activityinstname'),
								planid : workorder.get('planid'),
								batchid : bp,
								userid : workorder.get('userid'),
								username : workorder.get('username'),
								usermobile : workorder.get('usermobile'),
								gasaddress : workorder.get('gasaddress'),
								appealchannel : applyTypeName,
								accepttime : workorder.get('startdate'),
								appointmenttime : workorder.get('bookdate'),
								finishtime : workorder.get('claimdate'),
								ticketstate : workorder.get('currentstatename'),
								priority : proName,
								isprint : isprint,
								lastprintdate : workorder.get('lastprintdate'),
								sqcontent : workorder.get('sqcontent')
							});
				}, this);
		this.commonHandler.exportDataToExcel(jsonRecords, null, this);
	} else {
		// list无选择项,根据查询面板内容查询导出所有记录
		Ext.Msg.confirm("系统提示", "您确定要将查询出的数据导出为excel吗?", function(btnText) {
					if (btnText == "yes") {
						var jsonParam = {
							'condition/id' : 'id1',
							templatename : 'RemainTemplate'
						};
						this.commonHandler.exportDataToExcel(null, jsonParam, this);
					}
				}, this);
	}
}

/**
 * "超时说明"处理函数
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.openOvertimeWin = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择一行数据！");
	} else {
		var workitemId = records[0].get("workitemid");
		this.overtimeWin.show();
		this.overtimeWin.loadData({
					workitemid : workitemId
				});
		this.overtimeWin.doQuery({
					"condition/workitemid" : workitemId
				});
	}
}

/**
 * "设置优先级"处理函数
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.openPriorityWin = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择一行数据！");
	} else {
		this.priorityWin.show();
/*		var pkid = records[0].get("pkid");
		this.priorityWin.loadData(new Ext.data.Record({
					'pkid' : pkid
				}));*/
		var applyinfopkid = records[0].get("applyinfopkid");
		//维护诉求信息表中的优先级，而非业务记录表
		this.priorityWin.loadData(new Ext.data.Record({
					'applyinfopkid' : applyinfopkid
				}));
	}
}
/**
 * @method 获取可签收的工作项
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.getSignWorkitem = function(
		records) {
	var preSign = []
	Ext.each(records, function(rec) {
				if (rec.get('currentstate') == '4') {
					preSign.push(rec);
				}
			});
	return preSign;
}
/**
 * @method 检查工单状态
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.checkWorkOrderState = function(
		records, checkState, errorMsg) {
	if (!(Ext.isArray(records) && records.length > 0)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return false;
	}
	for (var i = 0; i < records.length; i++) {
		var state = records[i].get("currentstate");
		if (Ext.isArray(checkState)) {
			var passed = Ext.each(checkState, function(check) {
						if (check == state) {
							return false;
						}
					}, this);

			if (Ext.isEmpty(passed)) {
				Ext.Msg.alert("系统提示", errorMsg || "工单状态不对!请重新选择");
				return false;
			}
		} else {
			if (state != checkState) {
				Ext.Msg.alert("系统提示", errorMsg || "工单状态不对!请重新选择");
				return false;
			}
		}
	}
	return true;
}
/**
 * 签收-待领取的工作项
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onAcceptWorkItem = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (this.checkWorkOrderState(records, "4", "必须选中可签收的工作单")) {
		this.commonHandler.doSign(records, this);
	}
}

/**
 * 撤销签收-已领取的工作项
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onWithdrawWorkItem = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (this.checkWorkOrderState(records, '10', '必须选中待处理的工作单!')) {
		this.commonHandler.doDissign(records, this);
	}
}
/**
 * 挂起工作单-挂起工作项
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onSuspendActivityInstance = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (this.checkWorkOrderState(records, ['10', '4'], '请选择待处理或可签收的工作单!')) {
		var preSign = this.getSignWorkitem(records);
		if (preSign.length > 0) {
			this.commonHandler.doSign(preSign, this, function(selections) {
						this.commonHandler.doLock(selections, this);
					}, records, true);
		} else {
			this.commonHandler.doLock(records, this);
		}
	}
}
/**
 * 解挂工作单-恢复工作项
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onResumeActivityInstance = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (this.checkWorkOrderState(records, '8', '必须选中已挂起的工作单!')) {
		this.commonHandler.doUnLock(records, this);
	}
}
/**
 * 转派-工作项改派给多个参与者
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onReassignWorkItemEx = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (this.checkWorkOrderState(records, ['10', '4'], '请选择待处理或可签收的工作单!')) {
		var preSign = this.getSignWorkitem(records);
		if (preSign.length > 0) {
			this.commonHandler.doSign(preSign, this, function(selections) {
						this.turnUpWin.setWorkItems(selections);
						this.turnUpWin.show();
					}, records);
		} else {
			this.turnUpWin.setWorkItems(records);
			this.turnUpWin.show();
		}
	}
}
/**
 * 注销工作单-终止流程
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onTerminateProcessInstance = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (this.checkWorkOrderState(records, ['10', '4'], '请选择待处理或可签收的工作单!')) {
		var preSign = this.getSignWorkitem(records);
		if (preSign.length > 0) {
			this.commonHandler.doSign(preSign, this, function(selections) {
						this.commonHandler.doStopFlow(selections, this);
					}, records, true);
		} else {
			this.commonHandler.doStopFlow(records, this);
		}
	}
}
/**
 * 派工-弹出派工窗口
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onDispatchWorkItem = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (this.checkWorkOrderState(records, ['10', '4'], '请选择待处理或可签收的工作单!')) {
		var preSign = this.getSignWorkitem(records);
		if (preSign.length > 0) {
			this.commonHandler.doSign(preSign, this, function() {
						this.doShowDispatchWin();
					});
		} else {
			this.doShowDispatchWin();
		}
	}
}
/**
 * 派工窗口显示处理
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.doShowDispatchWin = function() {
	this.dispatchWin.show();
	// 获取待派、已派列表查询参数
	var recs = this.resultBlock.getSelectionModel().getSelections();
	var workitemids = [];
	Ext.each(recs, function(rec) {
				workitemids.push(rec.get('workitemid'));
			}, this);
	this.dispatchWin.doQuery({
				'condition/workitemids' : workitemids.join(',')
			});
}

/**
 * 导出挂表工单
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onExportMeterExcel = function() {
	var records = this.resultBlock.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else{
		var batchId = records[0].get('batchid'); // 批量号
		var busiType = records[0].get('busitype'); // 流程业务类型
		var activitydefId = records[0].get('activitydefid'); // 环节定义ID
		var busiTypeAll = 'BS114,BS115'; // 流程业务类型	包括挂表,点火挂表
		var activitydefIdAll = 'BS11401,BS11501'// 环节定义ID 包括挂表流程-挂表,点火挂表-挂表
		if(records.length==1 && Ext.isEmpty(batchId)){
			Ext.Msg.alert("系统提示", "请选择有批量号的工单!");
			return;
		}
		//挂表流程批量处理
		for(var i=0; i<records.length; i++){
			if(busiTypeAll.indexOf(records[i].get('busitype')) < 0){
				Ext.Msg.alert("系统提示", "请选择挂表或点火挂表的工作单!");
				return;
			}else if(activitydefIdAll.indexOf(records[i].get('activitydefid')) < 0){
				Ext.Msg.alert("系统提示", "请选择挂表环节的工作单!");
				return;
			}else if(batchId != records[i].get('batchid')){
				Ext.Msg.alert("系统提示", "请选择相同批量号的工作单!");
				return;
			}
		}
		if ((busiType == 'BS114' && activitydefId == 'BS11401') || (busiType == 'BS115' && activitydefId == 'BS11501')) {
			if (this.checkWorkOrderState(records, [4, 10], "必须选中可签收或可处理的工作单")) {
				this.commonHandler.doExportMeterExcel(records, this);
			}
		} else {
			Ext.Msg.alert("系统提示", "当前流程或者环节不支持导出挂表工单,请重新选择!");
		}
	}
}

/**
 * 导入挂表工单
 */
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.onImportMeterExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.excelUploadWin.show();
}

//导入Excel上传事件
com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.doUpload = function() {
	var _this = this;	
	this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
	// 校验
	this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
	// 文件名
	this.filePath = this.fileUploadObj.getValue();
	// 文件后缀
	this.sfileName = this.filePath.split(".");

	if (this.sfileName[1] == null || this.sfileName[1].toLowerCase() != "xls") {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为Excel xls文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (this.uploadInputPanel.form.isValid()) {
		this.uploadInputPanel.form.submit({
					method : "POST",
					timeout: 1200,
					url : this.uploadInputPanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						if (result.success) {
							_this.excelUploadWin.hide();
							Ext.Msg.alert("操作提示", result.msg);		
						}
					},
					failure : function(form, action) {
						Ext.MessageBox.show({
									title : '操作提示',
									buttons : Ext.MessageBox.OK,
									msg : "导入失败，请检查文件格式或网络是否正常",
									icon : Ext.MessageBox.ERROR
								});
					}
				});
	}
}

com.zoomlion.hjsrm.workflows.BusinessRemainMgr.prototype.destroy = function() {
	this.excelUploadWin.destroy(); 
}