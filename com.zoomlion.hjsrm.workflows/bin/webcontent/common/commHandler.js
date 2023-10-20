/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 待办通用处理方法
*创建日期： 2014-10-09
*补丁编号： G3_P_20140915_01_212
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//      补丁编号                修改人     日期       归属       备注
// G3_P_20140709_01_101       肖斌    2014-08-08  集团                                                                     
// G3_P_20140915_01_107       何源    2014-09-17  集团                                                                      
// G3_P_20140915_01_212       何源    2014-10-09  集团                                                                      
//=================================================================
Ext.namespace('Ext.ex');
Ext.ex.CommHandler = Ext.extend(Ext.util.Observable, {
	/**
	 * 工作项查询结果列表
	 * 
	 * @type
	 */
	listPanel : undefined,
	cancelWindow : undefined,
	constructor : function(B) {
		this.listPanel = B.listPanel;
		this.config = B
	},
	destroy : function() {
		this.cancelWindow.destroy();
	},
	/**
	 * 自动签收和手动签收处理
	 * 
	 * @param {}
	 *            records 签收工作项
	 * @param {}
	 *            scope 作用域
	 * @param {}
	 *            callback 回调函数
	 * @param {}
	 *            opt 回调函数 参数
	 * @param {}
	 *            unload 是否刷新
	 */
	doSign : function(records, scope, callback, opt, unload) {
		var workitemids = [];
		Ext.each(records, function(rec) {
					workitemids.push(rec.get('workitemid'))
				}, this);
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.acceptWorkItem.biz.ext',
			params : {
				workItemID : workitemids
			},
			mask : {
				msg : '正在签收，请稍后!'
			},
			scope : scope,
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					var result = ret.data.result;
					var msg = "";
					if (result == 1) {
						msg = "工作单签收成功!"
						if (Ext.isFunction(callback)) {
							if (!unload) {
								this.resultBlock.refresh();
							}
							callback.call(this, opt);
							return;
						}
					} else if (result == 0) {
						msg = "签收失败!已被[" + ret.data.participant + "]领取";
					}
					Ext.Msg.alert("系统提示", msg, function() {
								this.resultBlock.refresh();
							}, this);
				}
			}
		});
	},
	/**
	 * 
	 * @param {}
	 *            records
	 * @param {}
	 *            scope
	 * @param {}
	 *            callback
	 * @param {}
	 *            opt
	 */
	doSignWithConfirm : function(records, scope, callback, opt) {
		Ext.Msg.confirm("系统提示", "您确定要签收选中的工作单吗？", function(option) {
			if (option == "yes") {
				var workitemids = [];
				Ext.each(records, function(rec) {
							workitemids.push(rec.get('workitemid'))
						}, this);
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.acceptWorkItem.biz.ext',
					params : {
						workItemID : workitemids
					},
					mask : {
						msg : '正在签收，请稍后!'
					},
					scope : this,
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							var result = ret.data.result;
							var msg = "";
							if (result == 1) {
								msg = "工作单签收成功!"
								if (Ext.isFunction(callback)) {
									this.callback(opt);
									return;
								}
							} else if (result == 0) {
								msg = "签收失败!已被[" + ret.data.participant + "]领取";
							}
							Ext.Msg.alert("系统提示", msg, function() {
										this.resultBlock.refresh();
									}, this);
						}
					}
				});
			}
		}, scope);
	},

	/**
	 * @method 注销流程
	 * @param {}
	 *            records
	 * @param {}
	 *            scope
	 */
	doStopFlow : function(records, scope) {
		var _this = this;
		var recs = scope.resultBlock.getSelectionModel().getSelections();
		if (recs.length == 0) {
			Ext.Msg.alert("系统提示", "请选择一条或多条工作单!");
			return;
		}
		// 注销窗口
		this.cancelWindow = this.cancelWindow || new Ext.fn.FormWindow({
					title : '您确定要注销选中的工作单吗？',
					height : 190,
					width : 450,
					items : [{
								xtype : 'inputpanel',
								columns : 1,
								saveUrl : '...',
								fields : [{
											xtype : 'dictcombobox',
											fieldLabel : '注销原因',
											anchor : '70%',
											hiddenName : 'cancelcause',
											ref : '../../cancelcause',
											allowBlank : false,
											dictData : BS_CANCELCAUSE
										}, {
											xtype : 'textarea',
											name : 'cancelremark',
											ref : '../../cancelremark',
											colspan : 1,
											maxLength : 200,
											fieldLabel : '注销说明'
										}]
							}],
					buildButtons : function() {
						this.buttons = [{
									text : '注销',
									scope : this,
									handler : function() {
										_this.doCancel(records, scope);
									}
								}, {
									text : '关闭',
									scope : this,
									handler : function() {
										this.form.reset();
										this.hide();
									}
								}]
					}
				});
		this.cancelWindow.form.reset();
		this.cancelWindow.show();
	},
	/**
	 * @method 注销窗口
	 */
	doCancel : function(records, scope) {
		// 批量处理 和 单个处理 区分开
		var _this = this;
		var recs = scope.resultBlock.getSelectionModel().getSelections();
		if (_this.cancelWindow.form.isValid()) {
			var cancelcause = _this.cancelWindow.cancelcause.getValue();
			var cancelremark = _this.cancelWindow.cancelremark.getValue();
			_this.cancelWindow.hide();

			if (recs.length == 1) {
				var params = recs[0].data;
				params.cancelcause = cancelcause;
				params.cancelremark = cancelremark;
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.stopProcessInstWithCheck.biz.ext',
					jsonData : {
						'params' : params
					},
					scope : this,
					mask : {
						msg : '正在注销，请稍后!'
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success && ret.msg) {
							var msg = ret.msg;
							if (msg.passed) {
								Ext.Msg.alert("系统提示", "工作单注销成功!", function() {
											_this.listPanel.refresh();
										}, this);
							} else if (msg.errorlvl == '2') {// 确认注销
								Ext.Msg.confirm('提示', ret.msg.errormsg,
										function(btn) {
											if (btn == 'yes') {
												_this
														.doStopWithoutCheck(params);
											}
										}, this);
							} else {
								Ext.Msg.alert("系统提示", msg.errormsg);
							}
						}
					}
				});
			} else {
				_this.doStopBatch(recs, cancelcause, cancelremark);
			}
		}
	},
	/**
	 * @private 注销流程 不校验
	 * @param {}
	 *            rec
	 */
	doStopWithoutCheck : function(params) {
		var _this = this;
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.stopProcessInstBacthWithoutCheck.biz.ext',
			jsonData : {
				'params' : [params]
			},
			mask : {
				msg : '正在注销，请稍后!'
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					Ext.Msg.alert("系统提示", "注销成功!");
				}
			}
		})

	},
	/**
	 * @private 批量注销
	 * @param {}
	 *            recs
	 * @param cancelcause
	 * @param cancelremark
	 */
	doStopBatch : function(recs, cancelcause, cancelremark) {
		var _this = this;
		var params = [];
		Ext.each(recs, function(rec) {
					rec.data.cancelcause = cancelcause;
					rec.data.cancelremark = cancelremark;
					params.push(rec.data);
				}, this);
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.stopProcessInstBacthWithCheck.biz.ext',
			jsonData : {
				"params" : params
			},
			scope : this,
			mask : {
				msg : '正在注销，请稍后!'
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success && ret.msg) {
					var msg = ret.msg;
					if (msg.passed) {
						Ext.Msg.alert("系统提示", "工作单注销成功!", function() {
									_this.listPanel.refresh();
								}, this);
					} else {
						Ext.Msg.alert("系统提示", msg.errormsg);
					}
				}
			}
		});
	},
	/**
	 * @method 取消签收
	 * @param {}
	 *            records
	 * @param {}
	 *            scope
	 */
	doDissign : function(records, scope) {
		Ext.Msg.confirm("系统提示", "您确定要撤销签收选中的工作单吗？", function(option) {
			if (option == "yes") {
				var workitemids = [];
				Ext.each(records, function(rec) {
							workitemids.push(rec.get('workitemid'))
						}, this);
				// 发送请求
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.withdrawWorkItem.biz.ext',
					params : {
						workItemID : workitemids
					},
					scope : this,
					mask : {
						msg : '正在撤消签收,请稍后!'
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "工作单撤消签收成功!", function() {
										this.resultBlock.refresh();
									}, this);
						}
					}
				});
			}
		}, scope);
	},
	/**
	 * 打开流程图
	 * 
	 * @param {}
	 *            rec
	 */
	doOpenFlow : function(rec) {
		var workItemId = rec.get('workitemid');
		var tabId = "workitem-" + workItemId;
		var paramObj = {
			pId : rec.get('processinstid'),// 流程实例id
			tabId : tabId // 标签页ID "workitem-" + workItemId;
		}
		var spac = Ext.getCmp('spacepanel');
		var tabName = '';
		var worklisttype = rec.get('worklisttype');
		if(rec.get('worklisttype') == '1'){
			tabName = rec.get('sqbusitypename') + '诉求';
		}else{
			tabName = rec.get('busitypename');
		}
		tabName += '流程图';
					
		var tabNode = {
			id : tabId,
			text : tabName,
			attributes : {
				respath : '/workflows/ticket/workflowsgraph.jsp',
				readPanel : true
			},
			params : paramObj
		}
		// 打开新标签
		spac.open(tabNode);
	},
	/**
	 * 处理工作项
	 * 
	 * @param {}
	 *            rec
	 */
	doHandlerDbClick : function(rec, scope) {
		var currentState = rec.get('currentstate');
		var workItemId = rec.get('workitemid');
		var jsonParam = {
			workItemID : workItemId
		};
		// 如果状态为可签收，就发送签收请求
		if (currentState == "4") {
			// 发送签收请求
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.acceptWorkItem.biz.ext',
				params : jsonParam,
				scope : this,
				mask : {
					msg : '正在签收，请稍后!'
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						this.openTicketTab(rec);
					}
				}
			});
		} else {
			this.openTicketTab(rec);
		}

	},
	/**
	 * @private
	 */
	openTicketTab : function(rec) {
		var workItemId = rec.get('workitemid');
		var tabId = "workitem-" + workItemId;
		var paramObj = {
			pId : rec.get('processinstid'),// 流程实例id
			tabId : tabId, // 工作项页面标签Id
			processId : rec.get('processdefid'),// 定义id
			workItemId : workItemId,// 工作项id
			url : rec.get('actionurl'),// 流程图中配置的url
			activityName : rec.get('activityinstname'),// 工作项名称
			activityInstId : rec.get('activityinstid'),// 活动实例id
			activityId : rec.get('activitydefid'),// 活动定义id
			flowListId : Ext.id('wfgraph'),// 流程图id
			userId : rec.get('userid'),// 用户号
			planId : rec.get('planinfopkid'),// 批量号/计划号
			busitype : rec.get('busitype'), // 业务类型
			busipkid : rec.get('pkid'), // 业务处理记录表主键
			applyinfopkid : rec.get('applyinfopkid'), // 诉求主键
			worklistinfopkid : rec.get('worklistinfopkid')
			// 工单信息表主键
		}
		var spac = Ext.getCmp('spacepanel');
		var tabName = rec.get('processinstname')+ '-' + rec.get('activityinstname');
		var tabName = '';
		var worklisttype = rec.get('worklisttype');
		if(rec.get('worklisttype') == '1'){
			tabName = rec.get('sqbusitypename') + '诉求';
		}else{
			tabName = rec.get('busitypename');
		}
		tabName += '-' + rec.get('activityinstname');
		var tabNode = {
			id : tabId,
			text : tabName,
			attributes : {
				respath : '/workflows/ticket/ticket.jsp'
			},
			params : paramObj
		}
		// 打开新标签
		spac.open(tabNode);
	},
	/**
	 * 批量处理工作项
	 * 
	 * @param {Ext.data.Record[]}
	 *            records
	 * @param {Object}
	 *            scope
	 */
	doHandlerBatch : function(records, scope) {
		var _this = this;
		if (records.length == 1) {
			var workitem = records[0];
			// 如果只选择了1条待处理的工单
			// 查询相同的流程业务类型，环节定义ID，诉求PKID的工单,封装成查询对象
			var condition = {
				"condition/busitype" : workitem.get('busitype'),
				'condition/batchid' : workitem.get('batchid'),
				"condition/activitydefid" : workitem.get('activitydefid'),
				"condition/applyinfopkid" : workitem.get('applyinfopkid')
			};
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.queryRemainBatch.biz.ext',
				params : condition,
				scope : scope,
				mask : {
					msg : '正在查询,请稍后!'
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success && Ext.isArray(ret.data)) {
						var entitys = ret.data;
						var paramsArr = [];
						var workItemIds = []
						Ext.each(entitys, function(obj) {
							paramsArr.push({
										worklistinfopkid : obj.worklistinfopkid,
										workItemId : obj.workitemid,
										applyinfopkid : obj.applyinfopkid,
										busipkid : obj.pkid,
										userId : obj.userid
									});
							workItemIds.push(obj.workitemid);
						}, this)
						Ext.Msg.confirm("系统提示", "您确定要将选中的" + entitys.length
										+ "条工单批量处理吗?", function(btn) {
									if (btn == 'yes') {// 发送签收请求
										_this.sendToSign(workItemIds,
												records[0], paramsArr);
									}
								}, this)
					}

				}
			});

		} else {
			var paramsArr = [];
			var workItemIds = [];
			Ext.each(records, function(rec) {
						paramsArr.push({
									worklistinfopkid : rec
											.get('worklistinfopkid'),
									applyinfopkid : rec.get('applyinfopkid'),
									workItemId : rec.get('workitemid'),
									busipkid : rec.get('pkid'),
									userId : rec.get('userid')
								});
						workItemIds.push(rec.get('workitemid'));
					}, this)
			this.sendToSign(workItemIds, records[0], paramsArr);
		}
	},
	/**
	 * 签收并批量处理
	 * 
	 * @param {}
	 *            workItemIds
	 * @param {}
	 *            rec
	 * @param {}
	 *            paramsArr
	 */
	sendToSign : function(workItemIds, rec, paramsArr) {
		// FIXME 已经签收的，如何处理？
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.acceptWorkItem.biz.ext',
			params : {
				workItemID : workItemIds
			},
			scope : this,
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					this.openBatchHandlerPage(rec, paramsArr);
				}
			}
		});
	},
	/**
	 * 打开批量处理页面
	 * 
	 * @param {}
	 *            rec
	 * @param {}
	 *            paramsArr
	 */
	openBatchHandlerPage : function(rec, paramsArr) {
		var batchparams = '[';
		Ext.each(paramsArr, function(obj, index) {
					batchparams = batchparams.concat(Ext.encode(obj));
					if (index != (paramsArr.length - 1)) {
						batchparams = batchparams.concat(',')
					}
				}, this);
		batchparams = batchparams.concat(']');
		var workItemId = rec.get('workitemid');
		var tabId = "workitem-" + workItemId;
		var paramObj = {
			tabId : tabId, // 工作项页面标签Id
			pId : rec.get('processinstid'),// 流程实例id
			processId : rec.get('processdefid'),// 定义id
			busipkid : rec.get('pkid'), // 业务处理记录表主键
			applyinfopkid : rec.get('applyinfopkid'), // 诉求主键
			// ***********************
			activityId : rec.get('activitydefid'),// 活动定义id
			activityName : rec.get('activityinstname'),// 工作项名称
			url : rec.get('actionurl'),// 流程图中配置的url
			flowListId : Ext.id('wfgraph'),// 流程图id
			busitype : rec.get('busitype'), // 业务类型
			// ***********************
			workItemId : rec.get('workitemid'),
			userId : rec.get('userid'),
			worklistinfopkid : rec.get('worklistinfopkid'),
			// ***********************
			batchparams : batchparams
		}
		var spac = Ext.getCmp('spacepanel');
		var tabName = rec.get('processinstname')+ '-' + rec.get('activityinstname');
		var tabNode = {
			id : tabId,
			text : tabName,
			attributes : {
				respath : '/workflows/ticket/ticketList.jsp'
			},
			params : paramObj
		}
		// 打开工单处理界面
		spac.open(tabNode);
	},
	doLock : function(records, scope) {
		Ext.Msg.confirm("系统提示", "您确定要挂起选中的工作单吗？", function(option) {
			if (option == "yes") {
				var activityInstIds = [];
				var busiPkIds = [];
				Ext.each(records, function(rec) {
							busiPkIds.push(rec.get('pkid'));
							activityInstIds.push(rec.get('activityinstid'));
						}, this);
				// 发送请求
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.suspendActivityInstance.biz.ext',
					params : {
						activityInstID : activityInstIds,
						busiPkID : busiPkIds
					},
					scope : this,
					mask : {
						msg : '正在挂起,请稍后!'
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "工作单挂起成功!", function() {
										this.resultBlock.refresh();
									}, this);
						}
					}
				});
			}
		}, scope);

	},
	doUnLock : function(records, scope) {
		Ext.Msg.confirm("系统提示", "您确定要解挂选中的工作单吗？", function(option) {
			if (option == "yes") {
				var activityInstIds = [];
				var busiPkIds = [];
				Ext.each(records, function(rec) {
							busiPkIds.push(rec.get('pkid'));
							activityInstIds.push(rec.get('activityinstid'));
						}, this);
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.resumeActivityInstance.biz.ext',
					params : {
						activityInstID : activityInstIds,
						busiPkID : busiPkIds
					},
					scope : this,
					mask : {
						msg : '正在解挂,请稍后!'
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "工作单解挂成功!", function() {
										this.resultBlock.refresh();
									}, this);
						}
					}
				});
			}
		}, scope);
	},
	// 导出数据到excel
	exportDataToExcel : function(jsonRecords, jsonParam, scope) {
		var jData = {};
		if (jsonRecords) {
			jData = {
				records : jsonRecords,
				templatename : 'RemainTemplate'
			};
		} else {
			jData = jsonParam;
		}
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.exportRemainExcel.biz.ext',
			jsonData : jData,
			scope : scope,
			mask : {
				msg : '正在导出,请稍后!'
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					window.location.href = "com.zoomlion.hjsrm.frame.bclib.file.FileDownload.flow?fileid="
							+ ret.downloadFile;
				}
			}
		});
	},
	recordPrintInfo : function(records, scope) {
		// 记录打印信息

		var recs = [];
		Ext.each(records, function(workitem) {
					recs.push({
								workitemid : workitem.get('workitemid')
							})
				}, this);
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.recordPrintInfo.biz.ext',
			jsonData : {
				recs : recs
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					//
				}
			}
		});
	},
	// 打印工单
	printRecord : function(records, scope) {
	    var params = [];
	    for(var i = 0, j = records.length; i < j; i++){
		    params.push('userid=' + records[i].data.userid);
			params.push('applyinfopkid=' + records[i].data.applyinfopkid);
	    }
		var record = records[0];
		var busitype = record.data.busitype;
		var result, ret;
		var wp = new webPrint();// 创建打印控件对象
		wp.init();// 打印对象初始化
		var url, dostr;
		var printinfos;
		//业务工单通用打印
		url = 'com.zoomlion.hjsrm.workflows.remain.RemainManager.commonPrintBusiRemain.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_bs_commonprintremain(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_bs_commonprintremain(wp.LODOP, printinfo);";
			dostr += "});";
/******************工单打印********
		if (busitype == 'BS113') {// 点火工单打印
			url = 'com.zoomlion.hjsrm.busi.ignite.Ignite.printFire.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_bs_fire(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_bs_fire(wp.LODOP, printinfo);";
			dostr += "});";
			
		}else if (busitype == 'BS118') {// 工商户工单打印
			url = 'com.zoomlion.hjsrm.busi.ignite.Ignite.printGsFire.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_bs_gsfire(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_bs_gsfire(wp.LODOP, printinfo);";
			dostr += "});";
			
		}  else if (busitype == 'BS107') {// 抢修工单打印
			url = 'com.zoomlion.hjsrm.busi.leakrepair.LeakrepairMgr.printLeakrepair.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_bs_leakrepair(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_bs_leakrepair(wp.LODOP, printinfo);";
			dostr += "});";
			
		} else if (busitype == 'GS601' || busitype == 'GS606'
				|| busitype == 'GS607') {// 燃气具相关打印
			url = 'com.zoomlion.hjsrm.workflows.remain.RemainManager.printAppliance.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_bs_appliance(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_bs_appliance(wp.LODOP, printinfo);";
			dostr += "});";
			
		}else if(busitype == 'GS611'){
			url = 'com.zoomlion.hjsrm.workflows.remain.RemainManager.printRepairAppliance.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_gas_repair(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_gas_repair(wp.LODOP, printinfo);";
			dostr += "});";
			
		}else if(busitype == 'BS205'){//部门联络单打印
			url = 'com.zoomlion.hjsrm.workflows.remain.RemainManager.printDepartmentliaison.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_bs_departmentliaison(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_bs_departmentliaison(wp.LODOP, printinfo);";
			dostr += "});";
		}else if(busitype == 'BS101'){//表处理维修单打印
			url = 'com.zoomlion.hjsrm.workflows.remain.RemainManager.printMeterDeal.biz.ext?'
					+ encodeURI(params.join('&'));
			dostr = "create_print_init_bs_meterdeal(wp.LODOP, ret.data);";
			dostr += "printinfos = ret.data;";
			dostr += "Ext.each(printinfos, function(printinfo) {";
			dostr += "add_print_object_bs_meterdeal(wp.LODOP, printinfo);";
			dostr += "});";
		}
**/
		if (!Ext.isEmpty(url)) {
			result = Ext.ex.XMLHttpRequestEx.synchRequest("POST", url);
			ret = Ext.decode(result);
			if (Ext.isEmpty(ret.data)) {
				Ext.Msg.alert("系统提示", "查询打印信息失败！", function() {
						}, this);
				return;
			} else {
				eval(dostr);
				wp.preview();// 打印预览
				this.recordPrintInfo(records, scope);
			}
		} else {
			Ext.Msg.alert("系统提示", "暂不提供该业务工单打印");
			return;
		}

	},
	/**
	 * 导出挂表工单
	 * @param {Ext.data.Record[]} records
	 * @param {Object} scope
	 */
	doExportMeterExcel : function(records, scope) {
		var _this = this;
		if (records.length == 1) {
			var workitem = records[0];
			// 如果只选择了1条待处理的工单
			// 查询相同的流程业务类型，环节定义ID，诉求PKID的工单,封装成查询对象
			var condition = {
				"condition/busitype" : workitem.get('busitype'),
				'condition/batchid' : workitem.get('batchid'),
				"condition/activitydefid" : workitem.get('activitydefid')
			};
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.queryRemainBatch.biz.ext',
				params : condition,
				scope : scope,
				mask : {
					msg : '正在查询,请稍后!'
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success && Ext.isArray(ret.data)) {
						var entitys = ret.data;
						var paramsArr = [];
						Ext.each(entitys, function(obj) {
							paramsArr.push({
								resid : '',
								reading : 0,
								userid : obj.userid,
								username : obj.username,
								usermobile : obj.usermobile,
								gasaddress : obj.gasaddress,
								busitypename : obj.busitypename,
								activityinstname : obj.activityinstname,
								workitemid : obj.workitemid,
								batchid : obj.batchid
							});
						}, this)
						Ext.Msg.confirm("系统提示", "您确定要将批量号为" + workitem.get('batchid') + "的挂表工单导出到Excel吗?", function(btn) {
							if (btn == 'yes') {
								this.commonHandler.exportBusiDataToExcel(paramsArr, 'BatchInstallMeterTemplate', this);
							}
						}, this)
					}

				}
			});
		} else {
			var paramsArr = [];
			Ext.each(records, function(rec) {
				paramsArr.push({
					resid : '',
					reading : 0,
					userid : rec.get('userid'),
					username : rec.get('username'),
					usermobile : rec.get('usermobile'),
					gasaddress : rec.get('gasaddress'),
					busitypename : rec.get('busitypename'),
					activityinstname : rec.get('activityinstname'),
					workitemid : rec.get('workitemid'),
					batchid : rec.get('batchid')
				});
			}, this)
			Ext.Msg.confirm("系统提示", "您确定要将选中的" + paramsArr.length + "条挂表工单导出到Excel吗?", function(btn) {
				if (btn == 'yes') {
					this.commonHandler.exportBusiDataToExcel(paramsArr, 'BatchInstallMeterTemplate', this);
				}
			}, scope)
		}
	},
	/**
	 * 导出业务数据到excel
	 * @param {} jsonRecords
	 * @param {} templateName
	 * @param {} scope
	 */
	exportBusiDataToExcel : function(jsonRecords, templateName, scope) {
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelWithFTP.biz.ext',
			jsonData : {
				excels : jsonRecords,
				templatename : templateName
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					window.location.href = "com.zoomlion.hjsrm.frame.bclib.file.FileDownload.flow?fileid="
							+ ret.downloadFile;
				} else {
					Ext.Msg.alert("系统提示", "导出Excel失败!");
				}
			}
		});
	}
	
});