com.keensen.ump.produce.quality.diaphragmApplyMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initViewWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'diaphragmapplymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【请检单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								ref : '../planNo',
								name : 'condition/planNo',
								fieldLabel : '计划单号'
							}, {
								xtype : 'textfield',
								name : 'condition/title',
								fieldLabel : '标题'
							}, {
								xtype : "dateregion",
								anchor : '100%',
								colspan : 1,
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "请检时间",
								format : "Y-m-d"
							}]
				});

		this.queryPanel.addButton({
					text : "更新请检单状态",
					scope : this,
					iconCls : 'icon-application_form_edit',
					handler : this.onUpdateApplyIsJudged
				});

		this.queryPanel.addButton({
					text : "按计划单号导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden: planerflag == 0,
					handler : this.exportExcelByPlanNo
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【请检单列表】',
			id : 'concession-list',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			tbar : [{
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : '打印',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onReport
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			delUrl : 'com.keensen.ump.produce.quality.apply.deleteApply.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'title',
						sortable : true,
						header : '标题'
					}, {
						dataIndex : 'code',
						header : '编号'
					}, {
						dataIndex : 'types',
						header : '类型'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'amount',
						header : '请检数量'
					}, {
						dataIndex : 'storage',
						header : '请检入库仓位'
					}, {
						dataIndex : 'code',
						header : '请检单编号'
					}, {
						dataIndex : 'prodSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'isJudgedName',
						sortable : true,
						header : '请检状态'
					}, {
						dataIndex : 'createName',
						header : '请检人'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '请检时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.apply.queryDiaphragmApplyByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'status'
						}, {
							name : 'types'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderNo'
						}, {
							name : 'planNo'
						}, {
							name : 'amount'
						}, {
							name : 'storage'
						}, {
							name : 'code'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'title'
						}, {
							name : 'isJudged'
						}, {
							name : 'isJudgedName'
						}]
			})
		})
	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【请检单详情】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '导出选择项',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			hsPage : false,
			autoScroll : true,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'trend',
						header : '走向'
					}, {
						dataIndex : 'appearanceIsQualifiedName',
						header : '外观'
					}, {
						dataIndex : 'thickIsQualifiedName',
						header : '厚度'
					}, {
						dataIndex : 'batchNo',
						sortable : true,
						header : '膜片批次'
					}, {
						dataIndex : 'outLength',
						header : '实发长度(m)'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度(m)'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度(m)'
					}, {
						dataIndex : 'fMacName',
						header : '初检测试台'
					}, {
						dataIndex : 'fGfdAvg',
						header : '初检膜通量'
					}, {
						dataIndex : 'fSaltRejection',
						header : '初检脱盐率%'
					}, {
						dataIndex : 'rMacName',
						header : '复检测试台'
					}, {
						dataIndex : 'rGfdAvg',
						header : '复测膜通量'
					}, {
						dataIndex : 'rSaltRejection',
						header : '复测脱盐率%'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumoOrigin.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'rSaltRejection'
						}, {
							name : 'rGfdAvg'
						}, {
							name : 'fGfdAvg'
						}, {
							name : 'fSaltRejection'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'trend'
						}, {
							name : 'recordId'
						}, {
							name : 'appearanceIsQualifiedName'
						}, {
							name : 'thickIsQualifiedName'
						}]
			})
		})

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '请检单',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.listPanel2],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.viewWindow.hide();
								}
							}]

				});

	}
}