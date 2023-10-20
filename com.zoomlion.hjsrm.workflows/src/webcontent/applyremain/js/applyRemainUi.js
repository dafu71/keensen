/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 诉求待办工单查询
*创建日期： 2014-09-17
*补丁编号： G3_P_20140915_01_107
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//      补丁编号                修改人     日期       归属       备注
// G3_P_20140915_01_107       何源    2014-09-17  集团                                                                      
//=================================================================
com.zoomlion.hjsrm.workflows.ApplyRemainMgr = function() {
	this.initPanel = function() {
		this.createQueryDemand();
		this.createResultBlock();
		this.createMainBlock();

		this.commonHandler = new Ext.ex.CommHandler({
					listPanel : this.resultBlock
				});

		this.createPriorityWin();// 优先级
		this.buildTurnUpWindow();// 转派

		this.createNotifyWindow();
		this.createComplementWindow();
		this.createTrackWindow();
		this.createUrgerecWindow();

		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : "applyRemainDiv",
					panels : [this.mainBlock]
				});
	};
	this.refresh = function() {
		this.actionHandler();
	}
	this.destroy = function() {
		this.commonHandler.destroy();
	}
	// 创建主Panel
	this.createMainBlock = function() {
		this.mainBlock = new Ext.Panel({
					layout : 'exborder',
					items : [this.queryDemand, this.resultBlock]
				});
	};
	this.actionHandler = function() {
		var _vals = this.queryDemand.getForm().getValues();
		this.queryDemand.fireEvent("query", this.queryDemand, _vals);
	}
	// 创建诉求工单查询条件
	this.createQueryDemand = function() {
		this.queryDemand = new Ext.fn.QueryPanel({
					columns : 4,
					region : 'north',
					title : '查询条件',
					height : 135,
					collapsible : true,
					collapsed : false,
					titleCollapse : false,
					scope : this,
					actionHandler : this.actionHandler,
					listeners : {
						'afterrender' : function(panel) {
							var map2 = new Ext.KeyMap(panel.getEl(), {
										key : Ext.EventObject.ENTER,
										fn : function() {
											this.fireEvent('query', this, this
															.getForm()
															.getValues());
										},
										scope : panel
									});
						}
					},
					fields : [{
								xtype : 'busisortcombo',
								fieldLabel : "业务分类",
								refFieldName : 'busitype',
								hiddenName : 'condition/sqbusisort',
								forceAll : true,
								dataIndex : 'busisort',
								editable : false
							}, {
								xtype : 'busitypecombo',
								fieldLabel : "业务类型",
								cascadeFieldName : 'busisort',
								hiddenName : 'condition/sqbusitype',
								forceAll : true,
								dataIndex : 'busitype',
								editable : false,
								params : {
									isshowall : false
								}
							}, {
								xtype : 'userselectfield',
								displayField : 'userid',
								filterByAera : false,
								fieldLabel : '用户/项目编号',
								name : 'condition/usercode'
							}, {
								name : 'condition/username',
								fieldLabel : '用户/项目名称'
							}, {
								name : 'condition/stenocode',
								fieldLabel : '用户速记码'
							}, {
								xtype : 'dictcombobox',
								hiddenName : 'condition/urglvl',
								dictData : BS_WORKPRIORITY,
								fieldLabel : '优先级'
							}, {
								name : 'condition/gasaddress',
								fieldLabel : '用气地址'
							}, {
								name : 'condition/addressbyname',
								fieldLabel : '地址别名'
							}]
				});

	}

	// 诉求待办工单列表
	this.createResultBlock = function() {
		var _me = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		var demandColumns = [new Ext.grid.RowNumberer(), selModel, {
					header : '业务类别',
					dataIndex : 'sqbusitypename',
					sortable : true
				}, {
					header : '当前环节',
					dataIndex : 'activityinstname',
					sortable : true
				}, {
					header : '诉求类型',
					dataIndex : 'applytypename',
					sortable : true
				}, {
					header : '状态',
					width : 80,
					dataIndex : 'currentstatename',
					sortable : true
				}, {
					header : '用户/项目编号',
					dataIndex : 'userid',
					sortable : true
				}, {
					header : '用户/项目名称',
					dataIndex : 'username',
					sortable : true
				}, {
					header : '用气地址',
					dataIndex : 'gasaddress',
					sortable : true,
					renderer : function(value, metadata, record, rowIndex, columnIndex, store) {
						value = (value == null) ? '' : value;
						metadata.attr = 'ext:qtitle="用气地址：" ext:qtip="' + value.replace(/\"/g, '') + '"';
						return value;
					}
				}, {
					header : '补话次数',
					dataIndex : 'commtimes',
					sortable : true
				}, {
					header : '补话查看次数',
					dataIndex : 'commviewdtimes',
					sortable : true
				}, {
					header : '催单次数',
					dataIndex : 'urgeretimes',
					sortable : true
				}, {
					header : '诉求开始时间',
					width : 130,
					dataIndex : 'createtime',
					sortable : true
				}, {
					header : '接收时间',
					width : 130,
					dataIndex : 'starttime',
					sortable : true
				}, {
					header : '业务承诺时间',
					width : 130,
					dataIndex : 'claimdate',
					sortable : true
				}, {
					header : '诉求内容',
					dataIndex : 'sqcontent',
					sortable : true,
					renderer : function(value, metadata, record, rowIndex, columnIndex, store) {
						value = (value == null) ? '' : value;
						metadata.attr = 'ext:qtitle="诉求内容：" ext:qtip="' + value.replace(/\"/g, '') + '"';
						return value;
					}
				}, {
					header : '优先级',
					dataIndex : 'urglvl',
					xtype : 'dictcolumn',
					dictData : BS_WORKPRIORITY,
					sortable : true
				}];

		var demandStore = new Ext.data.GroupingStore({
			url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.remainQuery.biz.ext',
			reader : new Ext.data.JsonReader({
						root : 'data',
						totalProperty : 'totalCount',
						fields : ['pkid', 'processinstname', 'activityname',
								'currentstate', 'currentstatename',
								'commtimes', 'userid', 'busitype',
								'sqbusitypename', 'applytypename', 'username',
								'gasaddress', 'commviewdtimes',
								'appealchannel', 'urgeretimes', 'sqcontent',
								'urglvl', 'starttime', 'appointmenttime',
								'finishtime', 'activitydefid', 'workitemid',
								'workttemtype', 'activityinstname',
								'processdefid', 'processdefname',
								'processinstid', 'worklisttype',
								'applyinfopkid', 'activityinstid',
								'actionurl', 'worklistinfopkid','claimdate','earlydate','isclaim','isearly','createtime']
					})
		});
		this.resultBlock = new Ext.fn.ListPanel({
					title : '查询结果<span>(<font style="color:red">红色:工单已经超时</font>/<font style="color:blue">蓝色:工单即将超时</font>)</span>',
					region : 'center',
					viewConfig : {// 设置列宽
						forceFit : true,
						getRowClass : function(record, rowIndex, rp, ds) {
							// 获取是否到达承诺时间、是否到达预警时间
							var isclaim = record.get('isclaim');
							var isearly = record.get('isearly');
							if (isclaim == 'Y') {
								return 'work_timeout';
							} else if (isearly == 'Y') {
								return 'work_early';
							}
						}
					},
					columns : demandColumns,
					sm : selModel,
					store : demandStore,
					tbar : ["->", {
								iconCls : 'icon-flow',
								text : '流程图',
								scope : this,
								handler : this.onDemandWorkfolw
							}, "-", {
								iconCls : 'icon-handler',
								text : '处理',
								scope : this,
								handler : this.onDemandHandle
							}
							/*, "-", {
								text : '转派',
								iconCls : 'icon-group',
								scope : this,
								handler : this.onReassignWorkItemEx
							}*/
							, "-", {
								text : '注销',
								iconCls : 'icon-stop',
								scope : this,
								handler : this.onTerminateProcessInstance
							}, "-", {
								iconCls : 'icon-text_complete',
								text : '补话',
								scope : this,
								handler : this.onComplement
							}, "-", {
								iconCls : 'icon-group_add',
								text : '跟进',
								scope : this,
								handler : this.onTrack
							}, "-", {
								iconCls : 'icon-note_go',
								text : '知会',
								scope : this,
								handler : this.onNotify
							}, "-", {
								iconCls : 'icon-user_tick',
								text : '催办',
								scope : this,
								handler : this.onUrgerec
							}, "-", {
								iconCls : 'icon-signature',
								text : '签收',
								scope : this,
								handler : this.onDemandAcceptWorkItem
							}, "-", {
								iconCls : 'icon-dissignature',
								text : '撤销签收',
								scope : this,
								handler : this.onDemandWithdrawWorkItem
							}, '-', {
								iconCls : 'icon-prior',
								text : '设置优先级',
								scope : this,
								handler : this.onPriorityDemand
							}, "-", {
								iconCls : 'icon-printer',
								text : '打印',
								scope : this,
								handler : this.onPrint
							}]
				});
	};
	/**
	 * 创建设置优先级处理窗口
	 */
	this.createPriorityWin = function() {
		this.priorityWin = new Srm.workflows.setPriorWin({
					pgrid : this.resultBlock
				});
	};
	/**
	 * 转派窗口
	 */
	this.buildTurnUpWindow = function() {
		this.turnUpWin = new Srm.workflows.TurnUpWin({
					pgrid : this.resultBlock
				});
	}
	/**
	 * 热线工作单知会
	 */
	this.createNotifyWindow = function() {
		this.notifyWin = new Srm.workflows.NotifyWin({
					sendListPanel : this.resultBlock
				});
	}
	/**
	 * 热线工作单补话
	 */
	this.createComplementWindow = function() {
		this.complementWin = new Srm.workflows.ComplementWin({
					sendListPanel : this.resultBlock
				});
	}
	/**
	 * 热线工作单跟进
	 */
	this.createTrackWindow = function() {
		this.trackWin = new Srm.workflows.TrackApplyWin({
					sendListPanel : this.resultBlock
				});
	}

	/**
	 * 热线工作单催办信息查询
	 */
	this.createUrgerecWindow = function() {
		this.urgeWorkWin = new Srm.workflows.UrgeWorkWin({
					sendListPanel : this.resultBlock
				});
	}
}