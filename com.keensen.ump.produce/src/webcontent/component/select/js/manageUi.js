com.keensen.ump.produce.component.selectMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initViewWindow();
		this.initChooseWindow();
		
		this.buildExcelUploadWin();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentselectmgr',
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
						saveUrl : 'com.keensen.ump.produce.component.importOrder.flow',
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
						xtype : 'hidden',
						name : 'condition/tumoBatchNo'
					}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "导入即时库存",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel2
				});
		this.queryPanel.addButton({
					text : "即时库存模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown2
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
			pageSize : 1000,
			pageSizeComboStore : [10, 15, 20, 30, 40, 50, 100, 200, 500, 1000],
			hsPage : true,
			// id : mylistid,
			tbar : [{
						text : '预计可卷元件',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onSelect
					}, '-', {
						text : '批量预计可卷元件',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onDeal
					}, '->', {
						text : '可卷元件查询',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onQuery
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materCode',
						sortable : true,
						header : '物料代码'
					}, {
						dataIndex : 'materSpecCode',
						sortable : true,
						header : '物料名称'
					}, {
						dataIndex : 'tumoBatchNo',
						sortable : true,
						header : '批号'
					}, {
						dataIndex : 'storageName',
						sortable : true,
						header : '仓库名称'
					}, {
						dataIndex : 'storagePosition',
						sortable : true,
						header : '仓位名称'
					}, {
						dataIndex : 'usefulLength',
						sortable : true,
						header : '数量'
					}, {
						dataIndex : 'remain',
						sortable : true,
						header : '裁膜后剩余<br>可用数量'
					}, {
						dataIndex : 'produceDt',
						sortable : true,
						header : '生产时间'
					}, {
						dataIndex : 'isKeep',
						sortable : true,
						header : '是否是保留品',
						xtype : 'dictcolumn',
						dictData : KS_YESORNO
					}, {
						dataIndex : 'remark',
						sortable : true,
						header : '生产备注'
					}, {
						dataIndex : 'testGpd',
						sortable : true,
						header : '同底膜试卷元件<br>换算后水量'
					}, {
						dataIndex : 'testAvgGpd',
						sortable : true,
						header : '同底膜试卷元件<br>换算后水量平均值'
					}, {
						dataIndex : 'salt',
						sortable : true,
						header : '同底膜试卷元件<br>换算后脱盐'
					}, {
						dataIndex : 'testSaltRejection',
						sortable : true,
						header : '膜片脱盐'
					}, {
						dataIndex : 'testMaterSpec',
						sortable : true,
						header : '同底膜试卷型号'
					}, {
						dataIndex : 'checkBatchNo',
						sortable : true,
						header : '试卷批号'
					}, {
						dataIndex : 'gpd',
						sortable : true,
						header : '试卷元件产水'
					}, {
						dataIndex : 'salt2',
						sortable : true,
						header : '试卷元件脱盐'
					}, {
						dataIndex : 'checkTm',
						sortable : true,
						header : '试卷时间'
					}, {
						dataIndex : 'saltRejection',
						sortable : true,
						header : '试卷批号膜片脱盐'
					}, {
						dataIndex : 'area',
						sortable : true,
						header : '膜面积'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.select.queryByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'materCode'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'tumoBatchNo'
						}, {
							name : 'tumoBatchId'
						}, {
							name : 'storageName'
						}, {
							name : 'storagePosition'
						}, {
							name : 'usefulLength'
						}, {
							name : 'remain'
						}, {
							name : 'produceDt'
						}, {
							name : 'isKeep'
						}, {
							name : 'remark'
						}, {
							name : 'testGpd'
						}, {
							name : 'testAvgGpd'
						}, {
							name : 'salt'
						}, {
							name : 'testSaltRejection'
						}, {
							name : 'testMaterSpec'
						}, {
							name : 'checkBatchNo'
						}, {
							name : 'gpd'
						}, {
							name : 'salt2'
						}, {
							name : 'checkTm'
						}, {
							name : 'saltRejection'
						}, {
							name : 'area'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'minSaltRejection'
						}, {
							name : 'maxSaltRejection'
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
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			autoScroll : true,
			hsPage : false,
			tbar : [{
						text : '重新计算',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCalc
					}],
			autoScroll : false,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'tumoBatchNo',
						header : '涂膜批号'
					}, {
						dataIndex : 'mpSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'flag',
						header : '合格与否'
					}, {
						dataIndex : 'testMaterSpec',
						header : '试卷元件型号”'
					}, {
						dataIndex : 'testBatchNo',
						header : '试卷元件膜批次'
					}, {
						dataIndex : 'testAvgGpd',
						header : '同底膜试卷元件<br>换算后水量平均值'
					}, {
						dataIndex : 'saltRejection',
						header : '同底膜试卷元件<br>换算后脱盐',
						renderer : function(v, m, r, i) {
							var aSaltLowLimit = r.get('aSaltLowLimit');
							if (parseFloat(v) < parseFloat(aSaltLowLimit)) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'testArea',
						header : '测试膜面积'
					}, {
						dataIndex : 'testSaltRejection',
						header : '膜片脱盐'
					}, {
						dataIndex : 'minSaltRejection',
						header : '最低膜片脱盐',
						renderer : function(v, m, r, i) {
							var mpSaltLowLimit = r.get('mpSaltLowLimit');
							if (parseFloat(v) < parseFloat(mpSaltLowLimit)) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'calcAvgGpd',
						header : '换算元件产水量',
						renderer : function(v, m, r, i) {
							var aGpdLowLimit = r.get('aGpdLowLimit');
							var aGpdUpLimit = r.get('aGpdUpLimit');
							if (parseFloat(v) < parseFloat(aGpdLowLimit)
									|| parseFloat(v) > parseFloat(aGpdUpLimit)) {
								return "<span style='color:red'>" + v
										+ "</span>";

							} else {
								return "<span style='color:green'>" + v
										+ "</span>";
							}
						}
					}, {
						dataIndex : 'stdArea',
						header : '标准膜面积'
					}, {
						dataIndex : 'aGpdLowLimit',
						header : '元件产水量下限'
					}, {
						dataIndex : 'aGpdUpLimit',
						header : '元件产水量上限'
					}, {
						dataIndex : 'aSaltLowLimit',
						header : '元件脱盐率下限'
					}, {
						dataIndex : 'mpSaltLowLimit',
						header : '膜片脱盐率下限'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.select.querySelectAndInsert.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'tumoBatchNo'
						}, {
							name : 'tumoBatchId'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'testAvgGpd'
						}, {
							name : 'testArea'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'saltRejection'
						}, {
							name : 'stdArea'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'calcAvgGpd'
						}, {
							name : 'aGpdLowLimit'
						}, {
							name : 'aGpdUpLimit'
						}, {
							name : 'aSaltLowLimit'
						}, {
							name : 'flag'
						}, {
							name : 'testSaltRejection'
						}, {
							name : 'minSaltRejection'
						}, {
							name : 'mpSaltLowLimit'
						}, {
							name : 'testMaterSpec'
						}, {
							name : 'testBatchNo'
						}]
			})
		})

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '预计可卷膜片',
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
						dataIndex : 'tumoBatchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'mpSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.select.selectMpByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'tumoBatchId'
						}, {
							name : 'tumoBatchNo'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'prodSpecName'
						}]
			})
		})

		this.queryPanel3 = this.queryPanel3 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/tumoBatchNo',
								// anchor : '85%',
								fieldLabel : '膜片批次'
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
							}]
				});
		this.queryPanel3.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseWindow.hide();
					}

				});

		this.chooseWindow = this.chooseWindow || new Ext.Window({
					title : '可卷元件查询',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 820,
					height : 600,
					layout : 'border',
					items : [this.queryPanel3, this.listPanel3]

				});
	}

}
