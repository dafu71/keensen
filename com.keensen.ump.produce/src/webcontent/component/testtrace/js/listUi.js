com.keensen.ump.produce.component.testtracelistMgr = function() {
	this.initPanel = function() {

		this.rec = {};
		this.initQueryPanel();
		this.initListPanel();

		this.initChooseWindow();
		this.initYearmonthStore();
		this.initCalendarWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "testtracelistmgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initYearmonthStore = function() {
		this.yearmonthStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.testtrace.queryYearmonth.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'yearmonth'
					}, {
						name : 'text'
					}]
		})
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
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
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 3
					}, {
						xtype : 'linecombobox',
						prodTacheId : '100',
						hiddenName : 'condition/lineId',
						anchor : '75%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/mpSpecId',
						anchor : '75%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						anchor : '75%',
						fieldLabel : '试卷元件型号 '
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
			enableHdMenu : true,
			columnLines : true,
			hsPage : true,
			id : listid,
			tbar : [{
						text : "膜片试卷结果查询",
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onQuery
					}, '-', {
						text : "工作日设置",
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onQueryCalendar
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次',
						sortable : true
					}, {
						dataIndex : 'testType',
						header : '试卷类型',
						sortable : true
					}, {
						dataIndex : 'lineCode',
						header : '涂膜线',
						sortable : true
					}, {
						dataIndex : 'materClassCode',
						header : '膜片系列',
						sortable : true
					}, {
						dataIndex : 'materSpecName',
						header : '膜片型号',
						sortable : true
					}, {
						dataIndex : 'outLength',
						header : '膜片可用数量',
						sortable : true
					}, {
						dataIndex : 'qualifidLength',
						header : '膜片合格数量',
						sortable : true
					}, {
						dataIndex : 'produceDt',
						header : '膜片生产时间',
						sortable : true
					}, {
						dataIndex : 'toCdmDt',
						width : 130,
						header : '膜片送到裁叠膜<br>岗位时间',
						renderer : function(v, m, r, i) {
							// 膜片生产时间a
							// 膜片送到裁叠膜岗位时间b
							var str = v;
							var testType = r.get('testType');

							if (testType == '换产试卷') {
								var tmToCdmDiff = r.get('tmToCdmDiff');// b-a＞4h
								if (parseFloat(tmToCdmDiff) > 4) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
							}
							if (testType == '正常试卷' || testType == '发货试卷') {
								var tmToCdmDiff = r.get('tmToCdmDiff');// b-a＞0.5h
								if (parseFloat(tmToCdmDiff) > 0.5) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
							}
							if (testType == '生管试卷' || testType == '返厂试卷') {
								var planDate = r.get('planDate');// b＞锁定计划当天24:00
								if (v > planDate + ' 23:59:59') {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
							}
							return str;
						},
						sortable : true
					}, {
						dataIndex : 'toCdmName',
						header : '膜片送样人员',
						sortable : true
					}, {
						dataIndex : 'cdmProduceDt',
						header : '裁叠膜生产时间',
						renderer : function(v, m, r, i) {
							// 裁叠膜生产时间c
							// 膜片送到裁叠膜岗位时间b
							var str = v;
							// 若“裁叠膜生产时间”的前一天是休息日，则c＞裁叠膜当天12:00；
							var cdmProduceDtBeforeRest = r
									.get('cdmProduceDtBeforeRest');
							if (cdmProduceDtBeforeRest == 1) {
								var cdmProduceDt = r.get('cdmProduceDt');
								var cdmProduceDt12 = cdmProduceDt.substr(0, 10)
										+ ' 12:00:00';
								if (cdmProduceDt > cdmProduceDt12) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
								return str;
							}

							var testType = r.get('testType');
							var toCdmCdmDiff = r.get('toCdmCdmDiff');
							var toCdmDt = r.get('toCdmDt');
							if (testType == '换产试卷') {
								var toCdmCdmDiff = r.get('toCdmCdmDiff');// c-b＞2.5h
								if (parseFloat(toCdmCdmDiff) > 2.5) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
							} else {// c＞b当天24:00
								if (!Ext.isEmpty(v) && !Ext.isEmpty(toCdmDt)) {
									var c = v.substr(0, 10);
									var b = toCdmDt.substr(0, 10);
									if (c > b) {
										str = "<span style='color:red'>" + v
												+ "</span>";
									}
								}
							}
							return str;
						},
						sortable : true
					}, {
						dataIndex : 'cdmName',
						header : '裁叠膜工',
						sortable : true
					}, {
						dataIndex : 'cdmProdSpecName',
						header : '试卷元件型号',
						sortable : true
					}, {
						dataIndex : 'cdmAmount',
						header : '试卷元件数量',
						sortable : true
					}, {
						dataIndex : 'jmProduceDt',
						header : '卷膜生产时间',
						renderer : function(v, m, r, i) {
							// 卷膜生产时间d
							// 裁叠膜生产时间c
							// 膜片送到裁叠膜岗位时间b
							var str = v;

							// 若“卷膜生产时间”的前一天是休息日，则d＞卷膜当天12:00
							var jmProduceDtBeforeRest = r
									.get('jmProduceDtBeforeRest');
							if (jmProduceDtBeforeRest == 1) {
								var jmProduceDt = r.get('jmProduceDt');
								if (!Ext.isEmpty(jmProduceDt)) {
									var jmProduceDt12 = jmProduceDt.substr(0,
											10)
											+ ' 12:00:00';
									if (jmProduceDt > jmProduceDt12) {
										str = "<span style='color:red'>" + v
												+ "</span>";
									}
									return str;
								}
							}

							var testType = r.get('testType');

							if (testType == '换产试卷') {
								var cdmJmDiff = r.get('cdmJmDiff');// d-c＞1h
								if (parseFloat(cdmJmDiff) > 1) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
							} else {

								var b = r.get('toCdmDt');
								var d = r.get('jmProduceDt');

								var nextday = new Date(b.substr(0, 10));
								nextday.setDate(nextday.getDate() + 1);

								var year = nextday.getFullYear();
								var month = nextday.getMonth() + 1;
								var day = nextday.getDate();

								month = month < 10 ? '0' + month : month;
								day = day < 10 ? '0' + day : day;
								nextday = year + '-' + month + '-' + day
										+ ' 08:00:00';

								if (b.substr(11, 5) <= '16:30'
										&& d > b.substr(0, 10) + ' 18:00:00') {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
								// 若b≤当天16:30，则d＞当天18:00；
								// 若b＞当天16:30，则d＞次日8:00
								var nextday = new Date(b.substr(0, 10));
								nextday.setDate(nextday.getDate() + 1);

								var year = nextday.getFullYear();
								var month = nextday.getMonth() + 1;
								var day = nextday.getDate();

								month = month < 10 ? '0' + month : month;
								day = day < 10 ? '0' + day : day;
								nextday = year + '-' + month + '-' + day
										+ ' 08:00:00';
								if (b.substr(11, 5) > '16:30' && d > nextday) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}

							}
							return Ext.isEmpty(str) ? v : str;
						},
						sortable : true
					}, {
						dataIndex : 'jmName',
						header : '卷膜工',
						sortable : true
					}, {
						dataIndex : 'jmProdSpecName',
						header : '卷膜元件型号',
						sortable : true
					}, {
						dataIndex : 'jmBatchNo',
						header : '卷膜序号',
						sortable : true
					}, {
						dataIndex : 'qjProduceDt',
						header : '切边气检生产时间',
						renderer : function(v, m, r, i) {
							// 卷膜生产时间d
							// 切边气检生产时间e
							// 膜片送到裁叠膜岗位时间b
							var str = v;
							// 若“卷膜生产时间”的后一天是休息日，则e＞切边气检当天12:00
							var jmProduceDtAfterRest = r
									.get('jmProduceDtAfterRest');
							if (jmProduceDtAfterRest == 1) {
								var qjProduceDt = r.get('qjProduceDt');
								if (!Ext.isEmpty(qjProduceDt)) {
									var qjProduceDt12 = qjProduceDt.substr(0,
											10)
											+ ' 12:00:00';
									if (qjProduceDt > qjProduceDt12) {
										str = "<span style='color:red'>" + v
												+ "</span>";
									}
									return str;
								}
							}

							var testType = r.get('testType');

							var dd = r.get('jmProduceDt');
							var ee = r.get('qjProduceDt');

							if (Ext.isEmpty(dd) || Ext.isEmpty(ee))
								return str;

							if (testType == '换产试卷') {
								// 若d+4h≤卷膜当天23:00，则e＞卷膜当天23:00；
								// 若d+4h＞卷膜当天23:00，则e＞卷膜次日23:00
								var jmDtAdd4 = r.get('jmDtAdd4');// d+4h
								var jmProduceDt = r.get('jmProduceDt');
								var jmProduceDt23 = jmProduceDt.substr(0, 10)
										+ ' 23:00:00';

								if (jmDtAdd4 <= jmProduceDt23
										&& v > jmProduceDt23) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}

								var d = r.get('jmProduceDt');

								var nextday = new Date(d.substr(0, 10));
								nextday.setDate(nextday.getDate() + 1);

								var year = nextday.getFullYear();
								var month = nextday.getMonth() + 1;
								var day = nextday.getDate();

								month = month < 10 ? '0' + month : month;
								day = day < 10 ? '0' + day : day;
								nextday = year + '-' + month + '-' + day
										+ ' 23:00:00';
								if (jmDtAdd4 > jmProduceDt23 && v > nextday) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}

							} else {
								// 若b≤膜片送到裁叠膜岗位当天16:30，则e＞膜片送到裁叠膜岗位次日8:00；
								// 若b＞膜片送到裁叠膜岗位当天16:30，则d＞膜片送到裁叠膜岗位次日15:00
								var toCdmDt = r.get('toCdmDt');// 膜片送到裁叠膜岗位
								var toCdmDt1630 = toCdmDt.substr(0, 10)
										+ ' 16:30:00';
								var e = r.get('qjProduceDt');
								var d = r.get('jmProduceDt');
								var nextday = new Date(toCdmDt.substr(0, 10));
								nextday.setDate(nextday.getDate() + 1);

								var year = nextday.getFullYear();
								var month = nextday.getMonth() + 1;
								var day = nextday.getDate();

								month = month < 10 ? '0' + month : month;
								day = day < 10 ? '0' + day : day;
								var nextday8 = year + '-' + month + '-' + day
										+ ' 08:00:00';
								var nextday15 = year + '-' + month + '-' + day
										+ ' 15:00:00';
								if (toCdmDt <= toCdmDt1630 && e > nextday8) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
								if (toCdmDt > toCdmDt1630 && d > nextday15) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
							}
							return str;
						},
						sortable : true
					}, {
						dataIndex : 'qjName',
						header : '切边气检工',
						sortable : true
					}, {
						dataIndex : 'toWaterDt',
						header : '试卷元件送到<br>水测车间的时间',
						renderer : function(v, m, r, i) {
							// 卷膜生产时间d
							// 切边气检生产时间e
							// 膜片送到裁叠膜岗位时间b
							// 试卷元件送到水测车间的时间f
							var str = v;
							// 若“卷膜生产时间”的后一天是休息日，则f＞元件送水测当天12:00
							var jmProduceDtAfterRest = r
									.get('jmProduceDtAfterRest');
							if (jmProduceDtAfterRest == 1) {
								var toWaterDt = r.get('toWaterDt');
								if (!Ext.isEmpty(toWaterDt)) {
									var toWaterDt12 = toWaterDt.substr(0, 10)
											+ ' 12:00:00';
									if (toWaterDt > toWaterDt12) {
										str = "<span style='color:red'>" + v
												+ "</span>";
									}
									return str;
								}
							}
							var testType = r.get('testType');
							// 若d≤卷膜当天16:00，则f＞卷膜次日9:00；改成10:00
							// 若d＞卷膜当天16:00，则f＞卷膜次日16:00
							var d = r.get('jmProduceDt');
							var f = r.get('toWaterDt');
							var jmProduceDt = r.get('jmProduceDt');
							if (Ext.isEmpty(d) || Ext.isEmpty(f))
								return str;
							var jmProduceDt16 = jmProduceDt.substr(0, 10)
									+ ' 16:00:00';
							var nextday = new Date(jmProduceDt.substr(0, 10));
							nextday.setDate(nextday.getDate() + 1);

							var year = nextday.getFullYear();
							var month = nextday.getMonth() + 1;
							var day = nextday.getDate();

							month = month < 10 ? '0' + month : month;
							day = day < 10 ? '0' + day : day;
							var nextday10 = year + '-' + month + '-' + day
									+ ' 10:00:00';
							var nextday16 = year + '-' + month + '-' + day
									+ ' 16:00:00';
							if (d <= jmProduceDt16 && f > nextday10) {
								str = "<span style='color:red'>" + v
										+ "</span>";
							}
							if (d > jmProduceDt16 && f > nextday16) {
								str = "<span style='color:red'>" + v
										+ "</span>";
							}
							return str;
						},
						sortable : true
					}, {
						dataIndex : 'toWaterName',
						header : '元件送样人员',
						sortable : true
					}, {
						dataIndex : 'testCondition',
						header : '测试前准备'
					}, {
						dataIndex : 'fCheckTm',
						header : '水测初测完成时间',
						renderer : function(v, m, r, i) {
							// 不配液+不清管道：g-f＞2h；
							// 不配液+清管道：g-f＞4h；
							// 配液+不清管道：g-f＞4h；
							// 配液+清管道：g-f＞7h。
							var str = v;
							// 若“试卷元件送到水测的时间”后一天是休息日，则g＞初测完成当天12:00
							var toWaterDtAfterRest = r
									.get('toWaterDtAfterRest');
							if (toWaterDtAfterRest == 1) {
								var fCheckTm = r.get('fCheckTm');
								if (!Ext.isEmpty(fCheckTm)) {
									var fCheckTm12 = fCheckTm.substr(0, 10)
											+ ' 12:00:00';
									if (fCheckTm > fCheckTm12) {
										str = "<span style='color:red'>" + v
												+ "</span>";
									}
									return str;
								}
							}

							var testType = r.get('testType');
							var toWaterFcheckDiff = r.get('toWaterFcheckDiff');
							var testCondition = r.get('testCondition');
							if ('不配液加不清管道' == testCondition
									&& parseFloat(toWaterFcheckDiff) > 2) {
								str = "<span style='color:red'>" + v
										+ "</span>";
							}
							if ('不配液加清管道' == testCondition
									&& parseFloat(toWaterFcheckDiff) > 4) {
								str = "<span style='color:red'>" + v
										+ "</span>";
							}
							if ('配液加不清管道' == testCondition
									&& parseFloat(toWaterFcheckDiff) > 4) {
								str = "<span style='color:red'>" + v
										+ "</span>";
							}
							if ('配液加清管道' == testCondition
									&& parseFloat(toWaterFcheckDiff) > 7) {
								str = "<span style='color:red'>" + v
										+ "</span>";
							}
							return str;
						}
					}, {
						dataIndex : 'fCheckerName',
						header : '初测质检员',
						sortable : true
					}, {
						dataIndex : 'rCheckTm',
						header : '水测复测完成时间',
						renderer : function(v, m, r, i) {
							// 复测完成时间h
							// 初测完成时间g
							// 初测性能不合格，h-g＜4h或h-g＞24h
							var str = v;
							var testType = r.get('testType');
							var fcheckRcheckDiff = r.get('fcheckRcheckDiff');
							var isProdQualified = r.get('isProdQualified');
							if (isProdQualified == 'N') {
								if (parseFloat(fcheckRcheckDiff) < 4
										|| parseFloat(fcheckRcheckDiff) > 24) {
									str = "<span style='color:red'>" + v
											+ "</span>";
								}
							}
							return str;
						},
						sortable : true
					}, {
						dataIndex : 'rCheckerName',
						header : '复测质检员',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.queryTraceByPage.biz.ext',
				root : 'data',
				autoLoad : false,
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
						}, {
							name : 'tmToCdmDiff'
						}, {
							name : 'planDate'
						}, {
							name : 'toCdmCdmDiff'
						}, {
							name : 'jmDtAdd4'
						}, {
							name : 'testCondition'
						}, {
							name : 'toWaterFcheckDiff'
						}, {
							name : 'fcheckRcheckDiff'
						}, {
							name : 'isProdQualified'
						}, {
							name : 'toCdmName'
						}, {
							name : 'cdmName'
						}, {
							name : 'jmName'
						}, {
							name : 'qjName'
						}, {
							name : 'toWaterName'
						}, {
							name : 'fCheckerName'
						}, {
							name : 'rCheckerName'
						}, {
							name : 'cdmProduceDtBefore'
						}, {
							name : 'jmProduceDtBefore'
						}, {
							name : 'jmProduceDtAfter'
						}, {
							name : 'toWaterDtAfter'
						}, {
							name : 'cdmProduceDtBeforeRest'
						}, {
							name : 'jmProduceDtBeforeRest'
						}, {
							name : 'jmProduceDtAfterRest'
						}, {
							name : 'toWaterDtAfterRest'
						}

				]
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

	this.initCalendarWindow = function() {

		var _this = this;
		var year = new Date().getFullYear();
		var month = new Date().getMonth() + 1;
		month = month < 10 ? '0' + month : month;
		var yearmonth = year + '-' + month;

		var selModel6 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel6 = this.listPanel6 || new Ext.fn.EditListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			clicksToEdit : 1,
			hsPage : false,
			selModel : selModel6,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel6, {
						dataIndex : 'calendarDate',
						header : '日期'
					}, {
						dataIndex : 'weekdayNumber',
						header : '星期',
						renderer : function(v, m, r, i) {
							var arr = ['日', '一', '二', '三', '四', '五', '六']
							return '星期' + arr[v];
						}
					}, {
						dataIndex : 'ifRest',
						header : '是否休息日',
						css : 'background:#c7c7c7;',
						renderer : function(v, m, r, i) {
							var arr = ['否', '是'];
							var str = arr[v];
							if (v == 1)
								str = "<span style='color:red'>" + str
										+ "</span>";
							return str;
						},
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									allowBlank : true,
									triggerAction : "all",
									lazyRender : true,
									css : 'background:#c7c7c7;',
									hiddenName : 'ifRest',
									triggerAction : "all",
									store : new Ext.data.ArrayStore({
												fields : ['mykey', 'myvalue'],
												data : [['0', '否'], ['1', '是']]
											}),
									mode : "local",
									editable : false,
									displayField : "myvalue",
									valueField : "mykey",
									forceSelection : true,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var calendarDate = _this.rec.data['calendarDate'];
											_this.saveIfRest(calendarDate,
													newValue, oldValue);
										}
									}
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.testtrace.queryBaseCalendar.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : '',
				baseParams : {
					'condition/yearmonth' : yearmonth
				},
				fields : [{
							name : 'calendarDate'
						}, {
							name : 'weekdayNumber'
						}, {
							name : 'ifRest'
						}]
			})
		})

		this.queryPanel6 = this.queryPanel6 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 1,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'combobox',
								fieldLabel : '年月',
								ref : '../yearmonth',
								hiddenName : 'condition/yearmonth',
								emptyText : '--请选择--',
								editable : false,
								anchor : '75%',
								store : this.yearmonthStore,
								mode : 'local',
								displayField : "text",
								valueField : "yearmonth",
								value : yearmonth,
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel6.yearmonth.reset();
									}
								}
							}]
				});

		this.queryPanel6.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.calendarWindow.hide();
					}

				});

		this.calendarWindow = this.calendarWindow || new Ext.Window({
					title : '工作日设置',
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
					items : [this.queryPanel6, this.listPanel6]

				});
	}
}