com.keensen.ump.research.project.ProjectClockinMgr = function() {

	this.initPanel = function() {
		this.rec = {};
		this.nameSqlId = 'com.keensen.ump.produce.reseach.project.queryProjectWork';
		this.initStore();
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'projectclockinmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}

	this.initStore = function() {
		this.projectBaseStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.reseach.project.queryProjectBaseByUserId.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'projectName'
					}, {
						name : 'projectCode'
					}, {
						name : 'projectId'
					}, {
						name : 'headmanId'
					}, {
						name : 'projectStart'
					}, {
						name : 'projectEnd'
					}]
		})

		this.projectUserDurationStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.common.query.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {
				nameSqlId : 'com.keensen.ump.produce.reseach.project.queryProjectDurationByUserId'
			},
			fields : [{
						name : 'fillingHours'
					}, {
						name : 'confirmHours'
					}, {
						name : 'userId'
					}, {
						name : 'projectId'
					}, {
						name : 'workDate'
					}]
		})

		this.projectUserStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.common.query.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {
				'nameSqlId' : 'com.keensen.ump.produce.reseach.project.queryProjectUser'
			},
			fields : [{
						name : 'projectCode'
					}, {
						name : 'projectName'
					}, {
						name : 'userName'
					}, {
						name : 'userId'
					}, {
						name : 'projectId'
					}]
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					fields : [{

								anchor : "100%",
								colspan : 1,
								xtype : 'combo',
								mode : 'local',
								ref : '../projectId',
								displayField : 'projectName',
								valueField : 'projectId',
								hiddenName : 'condition/projectId',
								fieldLabel : '项目名称',
								store : _this.projectBaseStore,
								listeners : {
									scope : this,
									'expand' : function(A) {
										_this.queryPanel.projectId.reset();
									}
								}

							}, {
								xtype : 'textfield',
								colspan : 1,
								name : 'condition/projectCode',
								anchor : '100%',
								fieldLabel : '项目编号'
							}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.EditListPanel({
			region : "center",
			viewConfig : {
				forceFit : false
			},
			autoExpandColumn : '3',
			delUrl : '1.biz.ext',
			hsPage : true,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'projectCode',
						width : 100,
						header : '项目编号'
					}, {
						dataIndex : 'projectName',
						width : 150,
						header : '项目名称'
					}, {
						dataIndex : 'userName',
						width : 150,
						header : '项目人员'
					}, {
						dataIndex : 'workDate',
						width : 120,
						header : '作业日期'
					}, {
						dataIndex : 'fillingHours',
						width : 120,
						header : '研发工时'
					}, {
						dataIndex : 'confirmHours',
						width : 60,
						header : '确认工时'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : _this.nameSqlId,
							'condition/userId' : uid
						},
						fields : [{
									name : 'projectCode'
								}, {
									name : 'projectName'
								}, {
									name : 'projectId'
								}, {
									name : 'userId'
								}, {
									name : 'fillingHours'
								}, {
									name : 'confirmHours'
								}, {
									name : 'workDate'
								}, {
									name : 'userName'
								}]
					})
		})
		this.panel = this.panel || new Ext.Panel({
					layout : 'border',
					items : [this.queryPanel, this.listPanel]

				});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '500',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",
			width : '480',
			height : '300',
			pgrid : this.listPanel,
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.produce.reseach.project.saveProjectUserWork.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					}, {

						anchor : "80%",
						colspan : 1,
						xtype : 'combo',
						mode : 'local',
						ref : '../projectId',
						displayField : 'projectName',
						valueField : 'projectId',
						hiddenName : 'entity/projectId',
						allowBlank : false,
						fieldLabel : '项目名称',
						store : _this.projectBaseStore,
						listeners : {
							'expand' : function(A) {
								_this.inputPanel.projectId.reset();
							},
							'select' : function(combo, record, index) {
								if (index > -1) {
									var projectId = record.get('projectId');
									var headmanId = record.get('headmanId');

									var projectStart = record
											.get('projectStart');
									var projectEnd = record.get('projectEnd');
									
									_this.inputPanel.workDate.setMinValue(projectStart);
									_this.inputPanel.workDate.setMaxValue(projectEnd);

									// 当前人员是组长
									if (uid == headmanId) {
										_this.projectUserStore.load({
											params : {
												'condition/projectId' : projectId
											}
										});
									} else {
										_this.projectUserStore.load({
											params : {
												'condition/projectId' : projectId,
												'condition/userId' : uid
											}
										});
									}
								}
							}
						}

					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {

						anchor : "80%",
						colspan : 1,
						xtype : 'combo',
						mode : 'local',
						ref : '../userId',
						displayField : 'userName',
						valueField : 'userId',
						hiddenName : 'entity/userId',
						allowBlank : false,
						fieldLabel : '项目人员',
						store : _this.projectUserStore,
						listeners : {
							'expand' : function(A) {
								_this.inputPanel.userId.reset();
							},
							'select' : function(combo, record, index) {
								if (index > -1) {
									var projectId = record.get('projectId');
									var selectUserId = record.get('userId');

									var store = _this.listPanel.store;
									var vals = {
										'condition/projectId' : projectId,
										'condition/userId' : selectUserId
									};

									vals['nameSqlId'] = _this.nameSqlId;
									store.baseParams = vals;

									store.load({
										params : {
											"pageCond/begin" : 0,
											"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
										}
									});

									_this.projectUserDurationStore.load({
												params : {
													'condition/projectId' : projectId,
													'condition/userId' : selectUserId
												}
											});

								}
							}
						}

					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {

						anchor : "80%",
						colspan : 1,
						xtype : 'datefield',
						format : 'Y-m-d',
						ref : '../workDate',
						name : 'entity/workDate',
						allowBlank : false,
						fieldLabel : '作业日期',
						listeners : {
							'select' : function(o, v) {
								var store = _this.projectUserDurationStore;
								v2 = formatDate(v);
								var i = store.find('workDate', v2);								
								if (i > -1) {
									var rec2 = store.getAt(i);
									var confirmHours = rec2.get('confirmHours');
									var fillingHours = rec2.get('fillingHours');
									_this.inputPanel.fillingHours
											.setValue(fillingHours);
									_this.inputPanel.confirmHours
											.setValue(confirmHours);
								} else {
									_this.inputPanel.confirmHours.setValue('');
								}
								var confirmHours = _this.inputPanel.confirmHours
										.getValue();
								_this.inputPanel.fillingHours.setReadOnly(!Ext
										.isEmpty(confirmHours));
							}
						}
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'numberfield',
						colspan : 1,
						name : 'entity/fillingHours',
						ref : '../fillingHours',
						minValue : 0,
						allowBlank : false,
						anchor : '80%',
						fieldLabel : '研发工时',
						value : 8
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 1
					}, {
						xtype : 'numberfield',
						colspan : 1,
						ref : '../confirmHours',
						readOnly : true,
						anchor : '80%',
						fieldLabel : '已确认工时'
					}],
			buttons : [{
						text : "确定",
						disabled : true,
						scope : this,
						handler : this.onSave
					}]
		})

	}

}