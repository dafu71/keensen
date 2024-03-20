com.keensen.ump.produce.quality.concessionListMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initViewWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'concessionlistmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【让步放行查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '批次号'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/processState',
								hiddenName : 'condition/processState',
								fieldLabel : '流程状态',
								dictData : PROCESS_STATE
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【让步放行列表】',
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
					},'->',{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			delUrl : 'com.keensen.ump.produce.quality.concession.delete.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '客户/订单号'
					}, {
						dataIndex : 'prodSpecName',
						header : '产品型号'
					}, {
						dataIndex : 'prodSpecId',
						header : '产品型号'
					}, {
						dataIndex : 'dept',
						header : '申请部门'
					}, {
						dataIndex : 'num',
						header : '数量'
					}, {
						dataIndex : 'myitems',
						header : '放行类型',
						xtype : 'dictcolumn',
						dictData : KS_QUALITY_JUDGE_ITEM
					}, {
						dataIndex : 'ifKey',
						header : '是否关键特性',
						xtype : 'dictcolumn',
						dictData : ABF_YESORNO
					}, {
						dataIndex : 'reason',
						header : '让步接收理由'
					}, {
						dataIndex : 'result',
						header : '最终判定结果'
					}, {
						dataIndex : 'createTime',
						header : '发起日期'
					}, {
						dataIndex : 'processStateName',
						header : '流程状态'
					}, {
						header : '流程图',
						width : 50,
						scope : this,
						renderer : function(v, m, r, i) {
							var listId = 'concession-list';
							return "<img alt='流程图' src='srmclient/working/img/color_wheel.png' onclick='showProcessGraph("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>";
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.concession.queryConcessionByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'processStateName'
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
							name : 'orderNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'dept'
						}, {
							name : 'num'
						}, {
							name : 'myitems'
						}, {
							name : 'ifKey'
						}, {
							name : 'reason'
						}, {
							name : 'result'
						}, {
							name : 'resultCreateby'
						}, {
							name : 'resultCreatebyId'
						}, {
							name : 'resultDt'
						}, {
							name : 'follow'
						}, {
							name : 'followCreateby'
						}, {
							name : 'followCreatebyId'
						}, {
							name : 'followDt'
						}, {
							name : 'advise1'
						}, {
							name : 'advise2'
						}, {
							name : 'advise3'
						}, {
							name : 'advise4'
						}, {
							name : 'advise5'
						}, {
							name : 'processinstid'
						}, {
							name : 'processState'
						}, {
							name : 'cnt'
						}]
			})
		})
	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【异常状态描述】',
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : false,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'outLength',
						header : '实发长度(m)'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度m'
					}, {
						dataIndex : 'fGfdAvg',
						header : '初检膜通量'
					}, {
						dataIndex : 'fSaltRejection',
						header : '初检脱盐率%'
					}, {
						dataIndex : 'rGfdAvg',
						header : '复测膜通量'
					}, {
						dataIndex : 'rSaltRejection',
						header : '复测脱盐率'
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
						}]
			})
		})

		this.viewPanel = this.viewPanel || new Ext.fn.ViewPanel({
			height : 380,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 2,
			loadUrl : 'com.keensen.ump.produce.quality.concession.expand.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'orderNo',
						readOnly : true,
						fieldLabel : '客户/订单号',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'mpspeccombobox',
						dataIndex : 'prodSpecId',
						name : 'prodSpecId',
						readOnly : true,
						anchor : '95%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'dept',
						fieldLabel : '申请部门',
						readOnly : true,
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'num',
						readOnly : true,
						fieldLabel : '数量',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'dictcheckboxgroup',
						dataIndex : 'myitems',
						readOnly : true,
						fieldLabel : '放行类型',
						anchor : '95%',
						dictData : KS_QUALITY_JUDGE_ITEM,
						colspan : 1
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'ifKey',
						fieldLabel : '是否关键特性',
						readOnly : true,
						dictData : ABF_YESORNO,
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textarea',
						dataIndex : 'reason',
						height : 30,
						readOnly : true,
						fieldLabel : '让步接收理由',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						ref:'../picturePanel',
						height : '30',
						colspan : 2
					}, {
						xtype : 'textarea',
						dataIndex : 'advise1',
						height : 30,
						readOnly : true,
						fieldLabel : '膜片制造部意见',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textarea',
						dataIndex : 'advise2',
						height : 30,
						readOnly : true,
						fieldLabel : '膜片事业部意见',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textarea',
						dataIndex : 'advise3',
						height : 30,
						readOnly : true,
						fieldLabel : '生产管理部意见',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textarea',
						dataIndex : 'advise4',
						height : 30,
						readOnly : true,
						fieldLabel : '质量管理部意见',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textarea',
						dataIndex : 'result',
						height : 30,
						readOnly : true,
						fieldLabel : '最终判定结果',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						dataIndex : 'reserve1',
						name : 'reserve1'

					}, {
						xtype : 'hidden',
						dataIndex : 'pictureUrl',
						ref:'../pictureUrl',
						name : 'pictureUrl'

					}, {
						xtype : 'hidden',
						dataIndex : 'pictureUrl2',
						ref:'../pictureUrl2',
						name : 'pictureUrl2'

					}, {
						xtype : 'hidden',
						dataIndex : 'pictureUrl3',
						ref:'../pictureUrl3',
						name : 'pictureUrl3'

					}],
			buttons : [{
						text : "关闭",
						scope : this,
						handler : function() {
							this.viewPanel.form.reset();
							this.viewWindow.hide();
						}
					}]

		})


		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '让步放行单',
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
					items : [this.viewPanel, this.listPanel2]

				});

	}
}