com.keensen.ump.produce.component.mpselectMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.buildExcelUploadWin();
		this.initChooseWindow();

		this.initViewWindow();
		this.initStandWindow();
		this.initAddStandWindow();

		this.initFilterWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mpselectmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入Excel',
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
				saveUrl : 'com.keensen.ump.produce.component.importStock4Select.flow',
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

	this.initQueryPanel = function() {
		var _this = this;

		var yearStore = new Ext.data.ArrayStore({
					fields : ["id", "text"]
				})
		var currentYear = new Date().getFullYear();
		for (var i = 2022; i <= currentYear; i++) {
			var r = new Ext.data.Record({
						id : i,
						text : i + '年'
					});
			yearStore.add(r)
		}

		this.yearMonthPicker = this.yearMonthPicker || new Ext.Container({
					autoEl : 'div',
					layout : 'column',
					anchor : "100%",
					fieldLabel : '膜片生产年月',
					defaults : {
						xtype : "container",
						autoEl : "div",
						anchor : "100%"
					},
					items : [{
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								xtype : 'combo',
								displayField : 'text',
								valueField : 'id',
								hiddenName : 'condition/produceYear',
								mode : "local",
								forceSelection : true,
								triggerAction : "all",
								store : yearStore
							}, {
								columnWidth : 0.45,
								anchor : "100%",
								layout : "anchor",
								xtype : 'combo',
								mode : "local",
								forceSelection : true,
								triggerAction : "all",
								hiddenName : 'condition/produceMonth',
								store : [['01', '一月'], ['02', '二月'],
										['03', '三月'], ['04', '四月'],
										['05', '五月'], ['06', '六月'],
										['07', '七月'], ['08', '八月'],
										['09', '九月'], ['10', '十月'],
										['11', '十一月'], ['12', '十二月']]

							}]
				});

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : "dateregion",
						anchor : '100%',
						colspan : 1,
						nameArray : ['condition/produceDtStart',
								'condition/produceDtEnd'],
						fieldLabel : "膜片生产日期",
						format : "Y-m-d"
					}, this.yearMonthPicker, {
						xtype : 'textarea',
						name : 'condition/tumoBatchNo2',
						emptyText : '多个批次请用逗号分隔，或一行一个批次',
						colspan : 1,
						// allowBlank : false,
						anchor : '100%',
						fieldLabel : '膜片批号'
					}, {
						xtype : 'textfield',
						name : 'condition/tumoBatchNo3',
						colspan : 1,
						// allowBlank : false,
						anchor : '100%',
						fieldLabel : '批号模糊查询'
					}, {
						fieldLabel : '只展示即时库存',
						xtype : 'checkbox',
						checked : true,
						name : 'condition/isStorage',
						inputValue : 'Y',
						colspan : 1,
						anchor : '100%'
					}, {
						xtype : 'hidden',
						name : 'condition/tumoBatchNo'
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel2
				});

		this.queryPanel.addButton({
					text : "导入即时库存",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel2
				});

		this.queryPanel.addButton({
					text : "计算",
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.calculate
				});

		this.queryPanel.addButton({
					text : "筛选",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onFilter
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【营销订单列表】',
			viewConfig : {
				forceFit : false
			},
			tbar : [{
						text : '单卷膜片可卷型号查询',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onQuery
					}, '-', {
						text : '单卷膜片重新计算',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onReCalc
					}, '->', {
						xtype : 'displayfield',
						ref : '../stockTime',
						value : '库存更新时间'
					}, '-', {
						text : '元件性能标准',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onStand
					}, '-', {
						text : "膜片可卷元件查询",
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onQuery2
					}/*
						 * , '-', { text : "导入即时库存", scope : this, iconCls :
						 * 'icon-application_excel', handler : this.importExcel2 }
						 */, '-', {
						text : '即时库存模板下载',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onDown2
					}],
			pageSize : 20,
			pageSizeComboStore : [10, 15, 20, 30, 40, 50, 100, 200, 500, 1000],
			hsPage : true,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'mpMaterCode',
						sortable : true,
						header : '物料代码'
					}, {
						dataIndex : 'mpSpecCode',
						sortable : true,
						header : '物料名称'
					}, {
						dataIndex : 'mpBatchNo',
						sortable : true,
						header : '膜片批次'
					}, {
						dataIndex : 'storageName',
						sortable : true,
						header : '仓库名称'
					}, {
						dataIndex : 'storagePosition',
						sortable : true,
						header : '仓位名称'
					}, {
						dataIndex : 'amount',
						sortable : true,
						header : '数量'
					}, {
						xtype : 'dictcolumn',
						sortable : true,
						dictData : KS_YESORNO,
						dataIndex : 'isKeep',
						header : '是否保留品'
					}, {
						dataIndex : 'mpPointSaltRejection',
						sortable : true,
						header : '膜片<br>单点脱盐率'
					}, {
						dataIndex : 'mpSaltAvg',
						sortable : true,
						header : '膜片<br>平均脱盐率',
						renderer : function(v, m, r, i) {
							var isUlp = r.get('isUlp');
							if (v == null || v == 'null')
								return '';
							if (isUlp == '0')
								return v;
							var condition1 = r.get('condition1');
							if (condition1 == 'N') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'mpMinSaltRejection',
						sortable : true,
						header : '膜片<br>最低脱盐率',
						renderer : function(v, m, r, i) {
							var isUlp = r.get('isUlp');
							if (v == null || v == 'null')
								return '';
							if (isUlp == '1')
								return v;
							var condition1 = r.get('condition1');
							if (condition1 == 'N') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'mpSaltLowLimit',
						sortable : true,
						header : '膜片<br>脱盐率下限标准'
					}, {
						dataIndex : 'rMpPointSaltRejection',
						sortable : true,
						header : '膜片<br>复测脱盐率'
					}, {
						dataIndex : 'mpPointGfd',
						sortable : true,
						header : '膜片<br>单点通量'
					}, {
						dataIndex : 'mpMinGfd',
						sortable : true,
						header : '膜片<br>最低通量'
					}, {
						dataIndex : 'mpMaxGfd',
						sortable : true,
						header : '膜片<br>最高通量'
					}, {
						dataIndex : 'mpAvgGfd',
						sortable : true,
						header : '膜片<br>平均通量'
					}, {
						dataIndex : 'rMpPointGfd',
						sortable : true,
						header : '膜片<br>复测通量'
					}, {
						dataIndex : 'yjGpdLowLimit',
						sortable : true,
						header : '元件<br>最低产水量(理论换算)'
					}, {
						dataIndex : 'yjGpdUpLimit',
						sortable : true,
						header : '元件<br>最高产水量(理论换算)'
					}, {
						dataIndex : 'yjGpdAvg',
						sortable : true,
						header : '元件<br>平均产水量(理论换算)'
					}, {
						dataIndex : 'testMpBatchNo',
						sortable : true,
						header : '试卷<br>膜批次'
					}, {
						dataIndex : 'testYjSpecName',
						sortable : true,
						header : '试卷<br>元件型号'
					}, {
						dataIndex : 'testYjArea',
						sortable : true,
						header : '试卷<br>元件膜面积'
					}, {
						dataIndex : 'testYjDenseNet',
						sortable : true,
						header : '试卷<br>元件浓网规格'
					}, {
						dataIndex : 'testYjGpd',
						sortable : true,
						header : '试卷<br>元件产水量'
					}, {
						dataIndex : 'testYjSalt',
						sortable : true,
						header : '试卷<br>元件脱盐率'/*
												 * , renderer : function(v, m,
												 * r, i) { if (v == null || v ==
												 * 'null') return ''; var
												 * condition2 =
												 * r.get('condition2'); if
												 * (condition2 == 'N') { return "<span
												 * style='color:red'>" + v + "</span>"; }
												 * else { return "<span
												 * style='color:green'>" + v + "</span>"; } }
												 */
					}, {
						dataIndex : 'testYjGpdLowLimit',
						sortable : true,
						header : '试卷<br>元件产水量下限'
					}, {
						dataIndex : 'testYjGpdUpLimit',
						sortable : true,
						header : '试卷<br>元件产水量上限'
					}, {
						dataIndex : 'testYjSaltLowLimit',
						sortable : true,
						header : '试卷<br>元件脱盐率下限'
					}, {
						dataIndex : 'mpProduceDt',
						sortable : true,
						header : '生产时间'
					}, {
						dataIndex : 'remark',
						sortable : true,
						header : '生产备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.mpselect.queryByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'mpMaterCode'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'mpBatchNo'
						}, {
							name : 'storageName'
						}, {
							name : 'storagePosition'
						}, {
							name : 'amount'
						}, {
							name : 'isKeep'
						}, {
							name : 'mpPointSaltRejection'
						}, {
							name : 'mpMinSaltRejection'
						}, {
							name : 'mpSaltLowLimit'
						}, {
							name : 'rMpPointSaltRejection'
						}, {
							name : 'mpPointGfd'
						}, {
							name : 'mpMinGfd'
						}, {
							name : 'mpMaxGfd'
						}, {
							name : 'mpAvgGfd'
						}, {
							name : 'rMpPointGfd'
						}, {
							name : 'yjGpdLowLimit'
						}, {
							name : 'yjGpdUpLimit'
						}, {
							name : 'yjGpdAvg'
						}, {
							name : 'testMpBatchNo'
						}, {
							name : 'testYjSpecName'
						}, {
							name : 'testYjArea'
						}, {
							name : 'testYjDenseNet'
						}, {
							name : 'testYjGpd'
						}, {
							name : 'testYjSalt'
						}, {
							name : 'testYjGpdLowLimit'
						}, {
							name : 'testYjGpdUpLimit'
						}, {
							name : 'testYjSaltLowLimit'
						}, {
							name : 'mpProduceDt'
						}, {
							name : 'remark'
						}, {
							name : 'condition1'
						}, {
							name : 'condition2'
						}, {
							name : 'mpSaltAvg'
						}, {
							name : 'isUlp'
						}]
			})
		})
	}

	this.initChooseWindow = function() {

		var selModel3 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel3,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel3, {
						dataIndex : 'mpBatchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'mpSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'materSpecName',
						header : '可卷制元件<br>型号'
					}, {
						dataIndex : 'area',
						header : '可卷制元件<br>膜面积'
					}, {
						dataIndex : 'denseNet',
						header : '可卷制元件<br>浓网规格'
					}, {
						dataIndex : 'yjGpdLow',
						header : '可卷制元件<br>最低产水量(理论换算)'/*
														 * , renderer :
														 * function(v, m, r, i) {
														 * if (v == null || v ==
														 * 'null') return '';
														 * var condition =
														 * r.get('condition3');
														 * if (condition == 'N') {
														 * return "<span
														 * style='color:red'>" +
														 * v + "</span>"; }
														 * else { return "<span
														 * style='color:green'>" +
														 * v + "</span>"; } }
														 */
					}, {
						dataIndex : 'yjGpdUp',
						header : '可卷制元件<br>最高产水量(理论换算)'/*
														 * , renderer :
														 * function(v, m, r, i) {
														 * if (v == null || v ==
														 * 'null') return '';
														 * var condition =
														 * r.get('condition4');
														 * if (condition == 'N') {
														 * return "<span
														 * style='color:red'>" +
														 * v + "</span>"; }
														 * else { return "<span
														 * style='color:green'>" +
														 * v + "</span>"; } }
														 */
					}, {
						dataIndex : 'yjGpdAvg',
						header : '可卷制元件<br>平均产水量(理论换算)',
						renderer : function(v, m, r, i) {
							if (v == null || v == 'null')
								return '';
							var condition = r.get('condition5');

							if (condition == 'N') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'yjGpdLowLimit',
						header : '可卷制元件产<br>水量下限'
					}, {
						dataIndex : 'yjGpdUpLimit',
						header : '可卷制元件产<br>水量上限'
					}, {
						dataIndex : 'testYjSalt',
						header : '试卷<br>元件脱盐率',
						renderer : function(v, m, r, i) {
							if (v == null || v == 'null')
								return '';
							var condition2 = r.get('condition2');
							if (condition2 == '否') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'yjSaltLowLimit',
						header : '可卷制元件<br>脱盐率下限'
					}, {
						dataIndex : 'condition',
						header : '可卷制<br>判定结果',
						renderer : function(v, m, r, i) {
							if (v == null || v == 'null')
								return '';
							var condition = r.get('condition');
							if (condition == '否') {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.mpselect.querySelectByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'mpBatchNo'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'materSpecName'
						}, {
							name : 'area'
						}, {
							name : 'denseNet'
						}, {
							name : 'yjGpdLow'
						}, {
							name : 'yjGpdUp'
						}, {
							name : 'yjGpdAvg'
						}, {
							name : 'yjGpdLowLimit'
						}, {
							name : 'yjGpdUpLimit'
						}, {
							name : 'yjSaltLowLimit'
						}, {
							name : 'mpMinSaltRejection'
						}, {
							name : 'mpSaltLowLimit'
						}, {
							name : 'testYjSalt'
						}, {
							name : 'testYjSaltLowLimit'
						}, {
							name : 'condition1'
						}, {
							name : 'condition2'
						}, {
							name : 'condition3'
						}, {
							name : 'condition4'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'yjGpdLowLimitTrs'
						}, {
							name : 'yjGpdUpLimitTrs'
						}, {
							name : 'yjGpdAvgTrs'
						}, {
							name : 'testYjArea'
						}, {
							name : 'condition'
						}, {
							name : 'condition5'
						}]
			})
		})

		this.queryPanel3 = this.queryPanel3 || new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textarea',
								name : 'condition/tumoBatchNo2',
								emptyText : '多个批次请用逗号分隔，或一行一个批次',
								ref : '../tumoBatchNo2',
								colspan : 1,
								// allowBlank : false,
								anchor : '100%',
								fieldLabel : '膜片批次'
							}, {
								xtype : 'textfield',
								name : 'condition/tumoBatchNo3',
								// anchor : '85%',
								fieldLabel : '批次模糊查询'
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/mpSpecId',
								// anchor : '85%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								// anchor : '85%',
								fieldLabel : '元件型号 '
							}, {
								xtype : 'hidden',
								name : 'condition/tumoBatchNo'
							}]
				});

		this.queryPanel3.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		this.queryPanel3.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.queryPanel3.form.reset();
						this.queryPanel3.tumoBatchNo2.setValue('');
						this.listPanel3.store.removeAll();
						this.chooseWindow.hide();
					}

				});

		this.chooseWindow = this.chooseWindow || new Ext.Window({
					title : '单卷膜片可卷型号查询',
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

	this.initViewWindow = function() {

		var selModel5 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel5 = this.listPanel5 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel5,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel5, {
						dataIndex : 'tumoBatchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'mpSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'prodSpecName',
						header : '可卷制元件<br>型号'
					}, {
						dataIndex : 'area',
						header : '可卷制元件<br>膜面积'
					}, {
						dataIndex : 'denseNet',
						header : '可卷制元件<br>浓网规格'
					}, {
						dataIndex : 'storageName',
						header : '仓库名称'
					}, {
						dataIndex : 'storagePosition',
						header : '仓位名称'
					}, {
						dataIndex : 'length',
						header : '数量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.select.selectMpByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'tumoBatchNo'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'area'
						}, {
							name : 'denseNet'
						}, {
							name : 'storageName'
						}, {
							name : 'storagePosition'
						}, {
							name : 'length'
						}]
			})
		})

		this.queryPanel5 = this.queryPanel5 || new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/tumoBatchNo',
								// anchor : '85%',
								fieldLabel : '批次模糊查询'
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/mpSpecId',
								// anchor : '85%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								// anchor : '85%',
								fieldLabel : '元件型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 3
							}, {

								xtype : 'combobox',
								fieldLabel : '涂膜线别',
								ref : '../line',
								hiddenName : 'condition/line',
								emptyText : '--请选择--',
								allowBlank : true,
								editable : false,
								store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
										['D', 'D'], ['E', 'E']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel5.line.reset();
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/storageName',
								// anchor : '85%',
								fieldLabel : '仓库名称'
							}, {
								fieldLabel : '只展示即时库存',
								xtype : 'checkbox',
								checked : true,
								name : 'condition/isStorage',
								inputValue : 'Y',
								colspan : 1,
								anchor : '100%'
							}
					/*
					 * , { xtype : 'hidden', name : 'condition/choose', value :
					 * '1' }
					 */

					]
				});

		this.queryPanel5.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel3
				});

		this.queryPanel5.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.queryPanel5.form.reset();
						this.listPanel5.store.removeAll();
						this.viewWindow.hide();
					}

				});

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '可卷元件查询',
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
					items : [this.queryPanel5, this.listPanel5]

				});
	}

	this.initStandWindow = function() {

		var selModel6 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel6 = this.listPanel6 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddStand
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelStand
					}],
			hsPage : true,
			selModel : selModel6,
			delUrl : 'com.keensen.ump.produce.component.mpselect.deleteStand.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel6, {
						dataIndex : 'mpSpecName',
						header : '膜片规格'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'area',
						header : '参考膜面积'
					}, {
						dataIndex : 'denseNet',
						header : '浓网'
					}, {
						dataIndex : 'aGpdLowLimit',
						header : '产水量下限'
					}, {
						dataIndex : 'aGpdUpLimit',
						header : '产水量上限'
					}, {
						dataIndex : 'aGpdCenter',
						header : '产水量中心线'
					}, {
						dataIndex : 'aSaltLowLimit',
						header : '脱盐率下限%'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.select.queryStandByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'mpSpecName'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'aGpdLowLimit'
						}, {
							name : 'aGpdUpLimit'
						}, {
							name : 'aGpdCenter'
						}, {
							name : 'aSaltLowLimit'
						}, {
							name : 'area'
						}, {
							name : 'denseNet'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'recordId'
						}]
			})
		})

		this.queryPanel6 = this.queryPanel6 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								anchor : '85%',
								fieldLabel : '元件型号'
							}, {
								xtype : 'textfield',
								name : 'condition/mpSpecName',
								anchor : '85%',
								fieldLabel : '膜片型号'
							}]
				});

		// this.queryPanel3.addButton({
		// text : "导出",
		// scope : this,
		// iconCls : 'icon-application_excel',
		// handler : this.exportstandExcel
		// });

		this.queryPanel6.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.standWindow.hide();
					}

				});

		this.standWindow = this.standWindow || new Ext.Window({
					title : '元件性能标准查询',
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
					items : [this.queryPanel6, this.listPanel6]

				});
	}

	this.initAddStandWindow = function() {
		var _this = this;
		this.addstandWindow = this.addstandWindow || new Ext.fn.FormWindow({
			title : '新增元件性能标准',
			height : 480,
			width : 360,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					_this.addstandWindow.items.items[0].form.reset();
					_this.addstandWindow.hide();
					_this.listPanel6.refresh();
				},
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.component.mpselect.insertStand.biz.ext',
				fields : [{
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'mpspeccombobox',
							hiddenName : 'entity/mpSpecId',
							ref : '../../mpSpecId',
							allowBlank : false,
							anchor : '100%',
							colspan : 2,
							fieldLabel : '膜片型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									var mpSpecName = _this.addstandWindow.mpSpecId
											.getRawValue();
									_this.addstandWindow.mpSpecName
											.setValue(mpSpecName);
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							ref : '../../prodSpecId',
							allowBlank : false,
							anchor : '100%',
							colspan : 2,
							fieldLabel : '元件型号 ',
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								},
								'change' : function(o, newValue, oldValue) {
									if (newValue == oldValue)
										return false;
									var prodSpecName = _this.addstandWindow.prodSpecId
											.getRawValue();
									_this.addstandWindow.prodSpecName
											.setValue(prodSpecName);
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/aGpdLowLimit',
							ref : '../../aGpdLowLimit',
							allowBlank : false,
							anchor : '100%',
							colspan : 2,
							fieldLabel : '产水量下限 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/aGpdUpLimit',
							ref : '../../aGpdUpLimit',
							allowBlank : false,
							anchor : '100%',
							colspan : 2,
							fieldLabel : '产水量上限 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/aGpdCenter',
							ref : '../../aGpdCenter',
							allowBlank : false,
							anchor : '100%',
							colspan : 2,
							fieldLabel : '产水量中心线 '
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/aSaltLowLimit',
							ref : '../../aSaltLowLimit',
							allowBlank : false,
							anchor : '100%',
							colspan : 2,
							fieldLabel : '脱盐率下限% '
						}, {
							xtype : 'hidden',
							name : 'entity/mpSpecName',
							ref : '../../mpSpecName'
						}, {
							xtype : 'hidden',
							name : 'entity/prodSpecName',
							ref : '../../prodSpecName'
						}]
			}]
		});
	}

	this.initFilterWindow = function() {
		var _this = this;
		this.filterWindow = this.filterWindow || new Ext.fn.FormWindow({
					title : '筛选',
					height : 600,
					width : 1024,
					// itemCls:'required',
					// style:'margin-top:10px',
					modal : false,
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [{
								xtype : 'inputpanel',
								pgrid : this.listPanel,
								columns : 12,
								saveUrl : '1.biz.ext',
								fields : [{
											xtype : 'prodspeccombobox',
											ref : '../../prodSpecId',
											colspan : 3,
											fieldLabel : '元件型号 '
										}]
							}]
				});

		this.filterWindow.buttons[0].hide();
		this.filterWindow.buttons[1].hide();

		this.filterWindow.addButton({
					text : "查询",
					// disabled : allRight != '1',
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onQuery
				});

		this.filterWindow.addButton({
					text : "关闭",
					// disabled : allRight != '1',
					scope : this,
					handler : function() {
						// this.form.reset();
						this.filterWindow.hide()
					}
				});
	}
}