com.keensen.ump.produce.component.testtracelistMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initChooseWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "testtracelistmgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{

						anchor : "75%",
						colspan : 1,
						xtype : 'combo',
						hiddenName : 'condition/testType',
						fieldLabel : '试卷类型',
						store : [['换产试卷', '换产试卷'], ['正常试卷', '正常试卷'],
								['发货试卷', '发货试卷'], ['生管试卷', '生管试卷'],
								['返厂试卷', '返厂试卷'], ['实验试卷', '实验试卷']]

					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '75%',
						fieldLabel : '涂膜批号'
					}, {
						xtype : 'textfield',
						name : 'condition/jmBatchNo',
						anchor : '75%',
						fieldLabel : '卷膜序号'
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
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : "膜片试卷结果查询",
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onQuery
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'testType',
						header : '试卷类型'
					}, {
						dataIndex : 'lineCode',
						header : '涂膜线'
					}, {
						dataIndex : 'materClassCode',
						header : '膜片系列'
					}, {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'outLength',
						header : '膜片可用数量'
					}, {
						dataIndex : 'qualifidLength',
						header : '膜片合格数量'
					}, {
						dataIndex : 'produceDt',
						header : '膜片生产时间'
					}, {
						dataIndex : 'toCdmDt',
						header : '膜片送到裁叠膜<br>岗位时间'
					}, {
						dataIndex : 'cdmProduceDt',
						header : '裁叠膜生产时间'
					}, {
						dataIndex : 'cdmProdSpecName',
						header : '试卷元件型号'
					}, {
						dataIndex : 'cdmAmount',
						header : '试卷元件数量'
					}, {
						dataIndex : 'jmProduceDt',
						header : '卷膜生产时间'
					}, {
						dataIndex : 'jmProdSpecName',
						header : '卷膜元件型号'
					}, {
						dataIndex : 'jmBatchNo',
						header : '卷膜序号'
					}, {
						dataIndex : 'qjProduceDt',
						header : '切边气检生产时间'
					}, {
						dataIndex : 'toWaterDt',
						header : '试卷元件送到<br>水测车间的时间'
					}, {
						dataIndex : 'fCheckTm',
						header : '水测初测完成时间'
					}, {
						dataIndex : 'rCheckTm',
						header : '水测复测完成时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.queryTraceByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'batchNo'
						}, {
							name : 'lineCode'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'outLength'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'produceDt'
						}, {
							name : 'toCdmDt'
						}, {
							name : 'cdmProduceDt'
						}, {
							name : 'cdmProdSpecName'
						}, {
							name : 'cdmAmount'
						}, {
							name : 'jmProduceDt'
						}, {
							name : 'jmProdSpecName'
						}, {
							name : 'jmBatchNo'
						}, {
							name : 'qjProduceDt'
						}, {
							name : 'toWaterDt'
						}, {
							name : 'fCheckTm'
						}, {
							name : 'rCheckTm'
						}, {
							name : 'testType'
						}]
			})
		})
	}

	this.initChooseWindow = function() {

		var selModel3 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			selModel : selModel3,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel3, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'materSpecName',
						header : '膜片型号'
					}, {
						dataIndex : 'cdmProdSpecName',
						header : '试卷元件型号'
					}, {
						dataIndex : 'qjResult',
						header : '气检值'
					}, {
						dataIndex : 'fGpd',
						header : '初测产水量'
					}, {
						dataIndex : 'fSalt',
						header : '初测脱盐率%'
					}, {
						dataIndex : 'rGpd',
						header : '复测产水量'
					}, {
						dataIndex : 'rSalt%',
						header : '复测脱盐率'
					}, {
						dataIndex : 'aGpdUpLimit',
						header : '产水量上限'
					}, {
						dataIndex : 'aGpdLowLimit',
						header : '产水量下限'
					}, {
						dataIndex : 'aSaltLowLimit',
						header : '脱盐率下限%'
					}, {
						dataIndex : 'judge',
						header : '单品判断'
					}

			],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.queryTraceByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'batchNo'
						}, {
							name : 'lineCode'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'outLength'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'produceDt'
						}, {
							name : 'toCdmDt'
						}, {
							name : 'cdmProduceDt'
						}, {
							name : 'cdmProdSpecName'
						}, {
							name : 'cdmAmount'
						}, {
							name : 'jmProduceDt'
						}, {
							name : 'jmProdSpecName'
						}, {
							name : 'jmBatchNo'
						}, {
							name : 'qjProduceDt'
						}, {
							name : 'toWaterDt'
						}, {
							name : 'fCheckTm'
						}, {
							name : 'rCheckTm'
						}, {
							name : 'jmBatchId'
						}, {
							name : 'cdmBatchNo'
						}, {
							name : 'qjResult'
						}, {
							name : 'fGpd'
						}, {
							name : 'fSalt'
						}, {
							name : 'rGpd'
						}, {
							name : 'rSalt'
						}, {
							name : 'specId'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'aGpdLowLimit'
						}, {
							name : 'aGpdUpLimit'
						}, {
							name : 'aSaltLowLimit'
						}, {
							name : 'judge'
						}]
			})
		})

		this.queryPanel3 = this.queryPanel3 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '75%',
								fieldLabel : '涂膜批号'
							}, {
								xtype : 'textfield',
								name : 'condition/jmBatchNo',
								anchor : '75%',
								fieldLabel : '卷膜序号'
							}]
				});

		/*
		 * this.queryPanel3.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */

		this.queryPanel3.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.queryPanel3.form.reset();
						this.listPanel3.store.removeAll();
						this.chooseWindow.hide();
					}

				});

		this.chooseWindow = this.chooseWindow || new Ext.Window({
					title : '膜片试卷结果查询',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.queryPanel3, this.listPanel3]

				});
	}
}