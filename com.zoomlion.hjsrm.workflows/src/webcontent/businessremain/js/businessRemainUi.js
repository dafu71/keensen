/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 待办工单查询
*创建日期： 2014-09-18
*补丁编号： G3_P_20140915_01_216
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//      补丁编号                修改人     日期       归属       备注
// G3_P_20140915_01_216       何源    2014-09-18  集团                                                                      
// G3_P_20140915_01_107       何源    2014-09-17  集团                                                                      
//=================================================================
com.zoomlion.hjsrm.workflows.BusinessRemainMgr = function() {
	this.initPanel = function() {
		this.createQueryBlock();
		this.createResultBlock();
		this.createMainBlock();
		this.commonHandler = new Ext.ex.CommHandler({
					listPanel : this.resultBlock
				});
		this.buildTurnUpWindow();// 转派
		this.buildDispatchWindow();// 派工
		this.buildCreatePriorityWin();// 优先级
		this.buildCreateOvertimeWin();// 超时说明
		this.buildExcelUploadWin();//导入挂表工单窗口
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : "businessRemainDiv",
					panels : [this.mainBlock, this.resultBlock]
				});
	};
	/**
	 * window销毁函数
	 */
	this.destroy = function() {
		this.priorityWin.destroy();
		this.overtimeWin.destroy();
		this.commonHandler.destroy();
	}
	// 页面切换刷新
	this.refresh = function() {
		this.actionHandler();
	}
	this.actionHandler = function() {
		var _vals = this.queryBlock.getForm().getValues();
		this.queryBlock.fireEvent("query", this.queryBlock, _vals);
	}
	// 创建面板
	this.createMainBlock = function() {
		this.mainBlock = new Ext.Panel({
					layout : 'exborder',
					border : false,
					activeItem : 0,
					items : [this.queryBlock, this.resultBlock]
				});
	};
	// 创建业务工单查询条件
	this.createQueryBlock = function() {
		this.queryBlock = new Ext.fn.QueryPanel({
			columns : 8,
			region : 'north',
			title : '查询条件',
			height : 215,
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
													.getForm().getValues());
								},
								scope : panel
							});
				}
			},
			fields : [{
						xtype : "processcombox",
						name : "condition",
						processHiddenName : "busitype",
						stepHiddenName : "activitydefid",
						colspan : 4
					}, {
						name : 'condition/batchid',
						fieldLabel : '批量号/计划号',
						colspan : 2
					}, {
						xtype : 'userselectfield',
						displayField : 'userid',
						editable : true,
						filterByAera : false,
						fieldLabel : '用户/项目编号',
						name : 'condition/khuserid',
						colspan : 2
					}, {
						name : 'condition/username',
						fieldLabel : '用户/项目名称',
						colspan : 2
					}, {
						name : 'condition/stenocode',
						xtype : 'textfield',
						colspan : 2,
						fieldLabel : '用户速记码'
					}, {
						fieldLabel : "用户类型",
						xtype : 'dictcombobox',
						hiddenName : 'condition/usertype',
						dictData : KH_USERTYPE,
						colspan : 2
						
					}, {
						fieldLabel : "诉求发起人",
						xtype : 'textfield',
						name : 'condition/createby',
						colspan : 2
					}, {
						xtype : 'dictcombobox',
						hiddenName : 'condition/isprint',
						fieldLabel : '是否已打印',
						dictData : PB_ISORNOT,
						colspan : 2
					}, {
						xtype : 'dictcombobox',
						hiddenName : 'condition/urglvl',
						fieldLabel : '优先级',
						dictData : BS_WORKPRIORITY,
						colspan : 2
					}, {
						xtype : 'dictcombobox',
						hiddenName : 'condition/chnltype',
						fieldLabel : '诉求渠道',
						dictData : BS_APPLYINFO_CHNLTYPE,
						colspan : 2
					}, {
						xtype : 'orgtreecombo',
						queryType : 'dataorg',
						hiddenName : 'condition/chnlid',
						valueField : 'orgcode',
						displayField : 'orgname',
						fieldLabel : '诉求部门名称',
						colspan : 2
					}, {
						xtype : "datefield",
						name : "condition/bookdate",
						format : 'Y-m-d',
						colspan : 2,
						fieldLabel : "预约日期"
					}, {
						xtype : 'dateregion',
						nameArray : ['condition/createtimestartdate', 'condition/createtimeendate'],
						fieldLabel : '诉求时间',
						colspan : 2
					}, {
						xtype : 'dateregion',
						nameArray : ['condition/claimdatestartdate', 'condition/claimdateenddate'],
						fieldLabel : '业务承诺时间',
						colspan : 2
					}, {
						xtype : 'dateregion',
						nameArray : ['condition/claimbookdatestartdate', 'condition/claimbookdateenddate'],
						fieldLabel : '客户要求时间',
						colspan : 2
					}, {
						fieldLabel : "用气地址",
						xtype : 'textfield',
						name : 'condition/gasaddress',
						colspan : 4
					}, {
						fieldLabel : "地址别名",
						xtype : 'textfield',
						name : 'condition/addressbyname',
						colspan : 2
					}]
		});
	}

	// 创建业务待办工单查询结果列表
	this.createResultBlock = function() {
		var _me = this;
		var smLock = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : function(g, rowIndex, e) {
						if (e.button !== 0 || this.isLocked()) {
							return;
						}
						var view = this.grid.getView();
						if (e.shiftKey && !this.singleSelect
								&& this.last !== false) {
							var last = this.last;
							this.selectRange(last, rowIndex, e.ctrlKey);
							this.last = last;
							view.focusRow(rowIndex);
						} else {
							var isSelected = this.isSelected(rowIndex);
							if (isSelected) {
								this.deselectRow(rowIndex);
							} else if (!isSelected || this.getCount() > 1) {
								this.selectRow(rowIndex, true);
								view.focusRow(rowIndex);
							}
						}
					},
					isLocked : Ext.emptyFn,
					initEvents : function() {
						Ext.grid.CheckboxSelectionModel.superclass.initEvents
								.call(this);
						this.grid.on('render', function() {
									var view = this.grid.getView();
									view.mainBody.on('mousedown',
											this.onMouseDown, this);
									Ext.fly(view.lockedInnerHd).on('mousedown',
											this.onHdMouseDown, this);
								}, this);
					}
				});
		smLock.sortLock();
		var columns = new Ext.ux.grid.LockingColumnModel([smLock, {
					header : '业务类别',
					dataIndex : 'busitypename',
					sortable : true,
					locked : true,
					id : 'busitype'
				}, {
					header : '当前环节',
					dataIndex : 'activityinstname',
					sortable : true,
					locked : true,
					id : 'activityinstname'
				}, {
					header : '状态',
					sortable : true,
					dataIndex : 'currentstatename'
				}, {
					header : '批量号/计划号',
					dataIndex : 'planinfopkid',
					renderer : function(v, metaData, record) {
						var batchid = record.get('batchid');
						batchid = batchid || '';
						v = v || '';
						return batchid + '/' + v;
					}
				}, {
					header : '用户/项目编号',
					sortable : true,
					dataIndex : 'userid'
				}, {
					header : '用户/项目名称',
					sortable : true,
					width : 80,
					dataIndex : 'username'
				}, {
					header : '用气地址',
					dataIndex : 'gasaddress',
					renderer : function(value, metadata, record, rowIndex,
							columnIndex, store) {
						value = (value == null) ? '' : value;
						metadata.attr = 'ext:qtitle="用气地址：" ext:qtip="'
								+ value.replace(/\"/g, '') + '"';
						return value;
					}
				}, {
					header : '诉求开始时间',
					width : 130,
					dataIndex : 'createtime',
					sortable : true
				}, {
					header : '客户要求时间',
					dataIndex : 'claimbookdate',
					sortable : true
				}, {
					header : '接收时间',
					width : 130,
					dataIndex : 'startdate',
					sortable : true
				}, {
					header : '实际预约时间',
					sortable : true,
					dataIndex : 'bookdate',
					sortable : true
				}, {
					header : '业务承诺时间',
					width : 130,
					sortable : true,
					dataIndex : 'claimdate',
					sortable : true
				}, {
					header : '诉求发起人',
					dataIndex : 'createby',
					sortable : true
				}, {
					header : '补话次数',
					dataIndex : 'commtimes',
					sortable : true
				},{
					header : '优先级',
					width : 80,
					renderer : function(v) {
						var value = "";
						Ext.each(BS_WORKPRIORITY, function(obj) {
									if (obj.DICTID == v) {
										value = obj.DICTNAME;
										return;
									}
								})
						return value;
					},
					dataIndex : 'urglvl'
				}, {
					header : '诉求内容',
					width : 130,
					dataIndex : 'sqcontent',
					renderer : function(value, metadata, record, rowIndex,
							columnIndex, store) {
						value = (value == null) ? '' : value;
						metadata.attr = 'ext:qtitle="诉求内容：" ext:qtip="'
								+ value.replace(/\"/g, '') + '"';
						return value;
					}
				}, {
					header : '',
					dataIndex : 'batchid',
					hidden : true
				}, {
					header : '是否已打印',
					dataIndex : 'isprint',
					renderer : function(v) {
						var value = "";
						Ext.each(PB_ISORNOT, function(obj) {
									if (obj.DICTID == v) {
										value = obj.DICTNAME;
										return;
									}
								})
						return value;
					}
				}, {
					header : '',
					dataIndex : 'lastprintdate',
					hidden : true
				}]);
		var store = new Ext.data.GroupingStore({
			url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.remainQuery.biz.ext',
			// groupField : 'processinstname',
			reader : new Ext.data.JsonReader({
						root : 'data',
						totalProperty : 'totalCount',
						fields : ['pkid', 'busitypename', 'processinstname',
								'activityname', 'currentstatename', 'batchid',
								'currentstate', 'userid', 'planinfopkid',
								'username', 'busitype', 'enddate', 'bookdate',
								'finaltime', 'startdate', 'busitypename',
								'gasaddress', 'chnltype', 'appealchannel',
								'isprint', 'lastprintdate', 'urglvl',
								'accepttime', 'appointmenttime', 'priority',
								'activitydefid', 'workitemid', 'actionurl',
								'workttemtype', 'activityinstname',
								'processdefid', 'processdefname', 'istimeout',
								'processinstid', 'activityinstid',
								'applyinfopkid', 'projectid', 'sqcontent',
								'worklistinfopkid', 'claimdate', 'earlydate',
								'isclaim', 'isearly', 'createtime','worklisttype',
								'lastprintdate','commtimes','claimbookdate','createby','usermobile']
					})

		});
		
		this.tbar2 = new Ext.Toolbar({
			items:['->', "-" , {
					iconCls : 'icon-batch-handler',
					text : '批量处理',
					scope : this,
					handler : this.onHandleBatch,
					hidden : false

				}, '-', {
					iconCls : 'icon-page_excel',
					text : '批量挂表导出',
					scope : this,
					handler : this.onExportMeterExcel
				}, "-", {
					iconCls : 'icon-page_excel',
					text : '批量挂表导入',
					scope : this,
					handler : this.onImportMeterExcel
				}]
		});
		this.resultBlock = new Ext.fn.ListPanel({
			title : '查询结果<span>(<font style="color:red">红色:工单已经超时</font>/<font style="color:blue">蓝色:工单即将超时</font>)</span>',
			region : 'center',
			sm : smLock,
			colModel : columns,
			viewConfig : {
				forceFit : true
			},
			stripeRows : true,
			view : new Ext.ux.grid.LockingGridView({
						enableRowBody : true,
						// 控制超时、预警工单信息变色
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
					}),
			store : store,
			tbar : ['->', '-', {
						iconCls : 'icon-flow',
						text : '流程图',
						scope : this,
						handler : this.showFlowGraph
					}, "-", {
						iconCls : 'icon-handler',
						text : '处理',
						scope : this,
						handler : this.onHandle
					}, "-", {
						iconCls : 'icon-signature',
						text : '签收',
						scope : this,
						handler : this.onAcceptWorkItem
					}, "-", {
						iconCls : 'icon-dissignature',
						text : '撤销签收',
						scope : this,
						handler : this.onWithdrawWorkItem
					}, "-", {
						text : '挂起',
						iconCls : 'icon-lock-start',
						scope : this,
						handler : this.onSuspendActivityInstance

					}, "-", {
						text : '解挂',
						iconCls : 'icon-lock-open',
						scope : this,
						handler : this.onResumeActivityInstance
					}, "-", {
						iconCls : 'icon-dispatch',
						text : '派工',
						scope : this,
						handler : this.onDispatchWorkItem
					}
					/*
					 * , "-", { text : '转派', iconCls : 'icon-group', scope :
					 * this, handler : this.onReassignWorkItemEx }
					 */
					, "-", {
						text : '注销',
						iconCls : 'icon-stop',
						scope : this,
						handler : this.onTerminateProcessInstance
					}, "-", {
						iconCls : 'icon-prior',
						text : '设置优先级',
						scope : this,
						handler : this.openPriorityWin
					}, "-", {
						iconCls : 'icon-information',
						text : '超时说明',
						scope : this,
						handler : this.openOvertimeWin
					}, "-", {
						iconCls : 'icon-printer',
						text : '打印',
						scope : this,
						handler : this.onPrint
					}, "-", {
						iconCls : 'icon-page_excel',
						text : '导出Excel',
						scope : this,
						handler : this.onExportExcel
					}],
			listeners : {
	           'render' : function(){   
		            this.tbar2.render(this.resultBlock.tbar);
            	},
            	scope : this
            }
		});
	}
	/**
	 * 创建超时处理窗口
	 */
	this.buildCreateOvertimeWin = function() {
		this.overtimeWin = new Srm.workflows.OverTimeWin();
	};
	/**
	 * 创建设置优先级处理窗口
	 */
	this.buildCreatePriorityWin = function() {
		this.priorityWin = new Srm.workflows.setPriorWin({
					pgrid : this.resultBlock
				});
	};
	this.buildTurnUpWindow = function() {
		this.turnUpWin = new Srm.workflows.TurnUpWin({
					pgrid : this.resultBlock
				});
	}
	this.buildDispatchWindow = function() {
		this.dispatchWin = new Srm.workflows.DispatchWin();
	}
	
	// 导入挂表工单excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入挂表工单',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
						xtype : 'columnform',
						itemId : 'uploadForm',
						saveUrl : 'com.zoomlion.hjsrm.workflows.remain.uploadInstallMeter.flow',
						columns : 1,
						fileUpload : true,
						fields : [{
									name : 'uploadFile',
									fieldLabel : '选择文件',
									allowBlank : false,
									inputType : 'file'
								}]
					}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin.hide();
						}
					}]
		});
	}
	
}