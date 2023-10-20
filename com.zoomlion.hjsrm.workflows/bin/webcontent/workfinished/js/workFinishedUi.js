/**
 * 
 * <pre>
 * Title
 * : 我的工作-已办工单
 *     Description:查询已办工作单，并提供环节流程图查询功能。
 * </pre>
 * 
 * @author 蔡慧文
 * @version 1.0
 * 
 */
com.zoomlion.hjsrm.workflows.WorkFinishedView = function() {
	this.initPanel = function() {
		// 初始化主面板
		this.createQueryPanel();
		this.createListPanel();
		this.doCreateMain();
		// 布局
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : "WorkfinishedDiv",
					panels : [this.mainBlock]
				});
	};

	// 销毁对象(目前只有window)
	this.destroy = function() {
	};

	this.doCreateMain = function() {
		this.mainBlock = new Ext.Panel({
					layout : 'exborder',
					border : false,
					items : [this.queryPanel, this.listPanel]
				});
	};

	// 初始化查询面板
	this.createQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 130,
					region : 'north',
					columns : 4,
					title : '已办工作单查询',
					collapsible : true,
					collapsed : false,
					titleCollapse : false,
					actionHandler : function() {
						var _vals = _this.queryPanel.getForm().getValues();
						_this.queryPanel.fireEvent("query", _this.queryPanel,
								_vals);
					},
					fields : [{
								xtype : 'dictcombobox',
								ref: '../worklisttype',
								dictData : BS_WORKLISTINFO_WORKLISTTYPE,
								fieldLabel : '工单类型',
								hiddenName : "condition/worklisttype",
								listeners : {
									scope : this,
									'select' : function(combo, record, index) {
											var activitydef = this.queryPanel.activitydef;
											var queryBusitype = this.queryPanel.busitype.getValue();
											if(queryBusitype){
												if(combo.getValue() == '1'){//诉求流程环节
													queryBusitype = 'BS100';
												}
												activitydef.store.baseParams = {
													"entity/busitype" : queryBusitype
												};
												activitydef.store.load();
											}
										},
									'expand' : function(combo, record, index) {
											this.queryPanel.activitydef.reset();
											
										}
								}
							}, {
								xtype : 'busisortcombo',
								fieldLabel : "业务分类",
								refFieldName : 'busitype',
								hiddenName : 'condition/busisort',
								dataIndex : 'busisort',
								editable : false,
								hidden : true,
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.busitype.reset();
										this.queryPanel.activitydef.reset();
									}
								}
							}, {
								xtype : 'busitypecombo',
								fieldLabel : "业务类型",
								ref: '../busitype',
								cascadeFieldName : 'busisort',
								hiddenName : 'condition/busitype',
								dataIndex : 'busitype',
								editable : false,
								params : {
									isshowall : true,
									isfilterid : true
								},
								listeners : {
									scope : this,
									'select' : function(combo, record, index) {
											var activitydef = this.queryPanel.activitydef;
											var queryBusitype;
											if(this.queryPanel.worklisttype.getValue() == '1'){//诉求流程环节
												queryBusitype = 'BS100';
											}else{	//业务流程环节
												queryBusitype = record.data.busitypeid;
											}
											activitydef.store.baseParams = {
													"entity/busitype" : queryBusitype
											};
											activitydef.store.load();
										},
									'expand' : function(A) {
										this.queryPanel.activitydef.reset();
									}
								}
							},{
								xtype:'combo',
								fieldLabel : '工单环节',
								ref: '../activitydef',
								emptyText : '--请选择--',
								triggerAction:'all',
								lastQuery : '',
					            minChars : 0,
					            typeAhead : false,
					            forceSelection : true,
								queryParam :'entity/activitydefname',
								editable : false,
					            tpl : '<tpl for="."><div class="x-combo-list-item"><span>{activitydefname}</span></div></tpl>',
								lazyRender : true,
								mode: 'remote',
								store: new Ext.data.JsonStore({
													url : 'com.zoomlion.hjsrm.pub.busi.busibpsconfig.BusiStepDefineMgr.queryBusiBusiStepDefineByCombox.biz.ext',
													root: 'data',
													fields : [{name : 'pkid'}, {name : 'activitydefid'}, {name : 'activitydefname'}]
												}),
								hiddenName:'condition/activitydefid',
				    			displayField: 'activitydefname',
								valueField:'activitydefid',
								listeners : {
									scope : this,
									'beforequery' : function(combo, record, index) {
										if(!this.queryPanel.busitype.getValue()){
											return false;
										}
									},
									'expand' : function(A) {
										this.queryPanel.activitydef.reset();
									}
								}
							}, {
								xtype : 'userselectfield',
								displayField : 'userid',
								filterByAera : false,
								fieldLabel : '用户/项目编号',
								name : 'condition/userid',
								colspan : 1
							}, {
								name : 'condition/username',
								fieldLabel : '用户/项目名称'
							}, {
								name : 'condition/stenocode',
								fieldLabel : '用户速记码'
							}, {
								xtype : "dateregion",
								nameArray:['condition/fstarttime','condition/fendtime'],
								colspan : 1.2,
								fieldLabel : "完成时间"
							}]
				});
	};

	// 列表面板
	this.createListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '已办工作单列表【双击可直接查看流程信息】',
			region : 'center',
			tbar : [{
						xtype : 'button',
						text : "流程图",
						iconCls : 'icon-flow',
						scope : this,
						handler : this.onFlowGraph
					}, '-',{
						xtype : 'button',
						text : "撤销",
						iconCls : 'icon-application_delete',
						scope : this,
						handler : this.onDrawBack
					}],
			delUrl : '..biz.ext',
			sm : selModel,
			viewConfig : {
				forceFit : true
			},// 自动展开/缩小列的宽度以适应grid的宽度,就不会出现水平的滚动条
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : "业务类型",
						dataIndex : "businame"
					}, {
						header : "工单类型",
						xtype : 'dictcolumn',
						dictData : BS_WORKLISTINFO_WORKLISTTYPE,
						dataIndex : "worklisttype"
					}, {
						header : "环节名称",
						dataIndex : "workitemname"
					}, {
						header : "批量号",
						dataIndex : "planid"
					}, {
						header : "用户/项目编号",
						dataIndex : "userid"
					}, {
						header : "用户/项目名称",
						dataIndex : "username"
					}, {
						header : "接收时间",
						dataIndex : "accepttime",
						sortable : true
					}, {
						header : "完成时间",
						dataIndex : "finishtime",
						sortable : true
					}],
			store : new Ext.data.GroupingStore({
				url : 'com.zoomlion.hjsrm.workflows.workinfinished.WorkinFinished.queryFinishedWithPage.biz.ext',
				autoLoad : false,
				groupField : 'businame',
				reader : new Ext.data.JsonReader({
							root : 'data',
							totalProperty : 'totalCount',
							fields : [{
										name : 'processinstid'
									}, {
										name : 'worklisttype'
									}, {
										name : 'workitemid'
									}, {
										name : 'processchname'
									}, {
										name : 'planid'
									}, {
										name : 'ticketcode'
									}, {
										name : 'userid'
									}, {
										name : 'username'
									}, {
										name : 'accepttime'
									}, {
										name : 'finishtime'
									}, {
										name : 'workitemname'
									}, {
										name : 'processdefid'
									}, {
										name : 'businame'
									}]
						})
			}),
			view : new Ext.grid.GroupingView({
						forceFit : true,
						groupTextTpl : '{text} (共:{[values.rs.length]}条记录)'
					})
		});
	}

}