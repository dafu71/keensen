com.keensen.ump.produce.quality.mptest.waterMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initInputWindow2();
		this.initEditWindow();
		this.initEditWindow2();
		this.initEditWindow3();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestwatermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
			height : 120,
			columns : 5,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			title : '【水相液浓度查询】',
			fields : [{

				xtype : 'combobox',
				fieldLabel : '水相类型',
				ref : '../watertype',
				hiddenName : 'condition/watertype',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '85%',
				store : [['水相补充液', '水相补充液'], ['水相液', '水相液'], ['水相调整液', '水相调整液']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.watertype.reset();
					}
				}
			}, {

				xtype : 'combobox',
				fieldLabel : '线别',
				ref : '../line',
				hiddenName : 'condition/line',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '85%',
				store : [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],
						['E', 'E']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.line.reset();
					}
				}
			}, {

				xtype : 'combobox',
				fieldLabel : '膜片类型',
				ref : '../mptype',
				hiddenName : 'condition/mptype',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '85%',
				store : [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
						['NF', 'NF']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.mptype.reset();
					}
				}
			}, {
				ref : '../batchNo',
				name : 'condition/batchNo',
				anchor : '85%',
				xtype : 'textfield',
				fieldLabel : '水相液批号<br>膜片批号',
				allowBlank : true
			}, {

				xtype : 'combobox',
				fieldLabel : '当前步骤',
				ref : '../step',
				hiddenName : 'condition/step',
				emptyText : '--请选择--',
				allowBlank : true,
				editable : false,
				anchor : '85%',
				store : [['first', '分析'], ['second', '调整'], ['third', '配料'],
						['produce', '生产使用']],
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryPanel.step.reset();
					}
				}
			}]
		});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【水相液浓度列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						xtype : 'splitbutton',
						text : '新增',
						// scale : 'small',
						// rowspan : 1,
						// iconAlign : 'top',
						iconCls : 'icon-application_add',
						arrowAlign : 'bottom',
						menu : [{
									text : '水相(补充)液',
									scope : this,
									iconCls : 'icon-application_add',
									handler : this.onAdd
								}, {
									text : '水相调整液',
									scope : this,
									iconCls : 'icon-application_add',
									handler : this.onAdd2
								}]
					}, '-', {
						text : '分析',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '调整',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit2
					}, '-', {
						text : '配料',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit3
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'watertype',
						header : '水相类型'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mptype',
						header : '膜片类型'
					}, {
						dataIndex : 'batchNo',
						header : '水相液批号/膜片批号'
					}, {
						dataIndex : 'stateName',
						header : '状态'
					}, {
						dataIndex : 'stepName',
						header : '当前步骤'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest5.queryWaterRecordsByPage.biz.ext',
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
							name : 'line'
						}, {
							name : 'mptype'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'step'
						}, {
							name : 'stateName'
						}, {
							name : 'stepName'
						}, {
							name : 'watertype'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.createWater.biz.ext',
				fields : [{

							xtype : 'combobox',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							hiddenName : 'entity/watertype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['水相补充液', '水相补充液'], ['水相液', '水相液']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.watertype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							ref : '../../batchNo',
							value : '自动生成',
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '水相液批号',
							colspan : 2,
							readOnly : true
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.line.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['BW', 'BW'], ['ULP', 'ULP'],
									['SW', 'SW'], ['NF', 'NF']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c21Plan',
							fieldLabel : '计划添加C21',
							name : 'list/c21Plan',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c22Plan',
							fieldLabel : '计划添加C22',
							name : 'list/c22Plan',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c23Plan',
							fieldLabel : '计划添加C23',
							name : 'list/c23Plan',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c27Plan',
							fieldLabel : '计划添加C27',
							allowBlank : false,
							name : 'list/c27Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c28Plan',
							fieldLabel : '计划添加C28',
							allowBlank : false,
							name : 'list/c28Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c29Plan',
							fieldLabel : '计划添加C29',
							allowBlank : false,
							name : 'list/c29Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c30Plan',
							fieldLabel : '计划添加C30',
							allowBlank : false,
							name : 'list/c30Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../roPlan',
							fieldLabel : '计划添加RO水',
							allowBlank : true,
							name : 'list/roPlan',
							anchor : '85%',
							colspan : 1
						}]
			}]
		});
	}

	this.initInputWindow2 = function() {
		this.inputWindow2 = this.inputWindow2 || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.createWater2.biz.ext',
				fields : [{
							ref : '../../batchNo',
							name : 'entity/batchNo',
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '膜片批号',
							colspan : 2,
							readOnly : false
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '线别',
							ref : '../../line',
							hiddenName : 'entity/line',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['A', 'A'], ['B', 'B'], ['C', 'C'],
									['D', 'D'], ['E', 'E']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.line.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combobox',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							hiddenName : 'entity/mptype',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['BW', 'BW'], ['ULP', 'ULP'],
									['SW', 'SW'], ['NF', 'NF']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow2.mptype.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../position',
							fieldLabel : '取样位置',
							allowBlank : false,
							name : 'list/position',
							anchor : '85%',
							colspan : 2
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '分析',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListByFirst.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '水相液批号'
						}, {

							xtype : 'displayfield',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							dataIndex : 'watertype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '85%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C21',
							dataIndex : 'c21Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c21Reality',
							fieldLabel : '实际添加C21',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C22',
							dataIndex : 'c22Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c22Reality',
							fieldLabel : '实际添加C22',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C23',
							dataIndex : 'c23Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c23Reality',
							fieldLabel : '实际添加C23',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C27',
							dataIndex : 'c27Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c27Reality',
							fieldLabel : '实际添加C27',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C28',
							dataIndex : 'c28Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c28Reality',
							fieldLabel : '实际添加C28',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C29',
							dataIndex : 'c29Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c29Reality',
							fieldLabel : '实际添加C29',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C30',
							dataIndex : 'c30Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'c30Reality',
							fieldLabel : '实际添加C30',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加RO水',
							dataIndex : 'roPlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							dataIndex : 'roReality',
							fieldLabel : '实际添加RO水',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../position',
							fieldLabel : '取样位置',
							allowBlank : false,
							dataIndex : 'position',
							name : 'list/position',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c21Test',
							fieldLabel : '测试浓度C21',
							name : 'list/c21Test',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c22Test',
							fieldLabel : '测试浓度C22',
							name : 'list/c22Test',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c23Test',
							fieldLabel : '测试浓度C23',
							name : 'list/c23Test',
							allowBlank : false,
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c27Test',
							fieldLabel : '测试浓度C27',
							allowBlank : false,
							name : 'list/c27Test',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c28Test',
							fieldLabel : '测试浓度C28',
							allowBlank : false,
							name : 'list/c28Test',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c29Test',
							fieldLabel : '测试浓度C29',
							allowBlank : false,
							name : 'list/c29Test',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c30Test',
							fieldLabel : '测试浓度C30',
							allowBlank : false,
							name : 'list/c30Test',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'second'
						}]
			}]
		});
	}

	this.initEditWindow2 = function() {
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '调整',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListBySecond.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '水相液批号'
						}, {

							xtype : 'displayfield',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							dataIndex : 'watertype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '85%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							ref : '../../displayfield1',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield2',
							dataIndex : 'c21Plan',
							fieldLabel : '原计划添加C21',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield3',
							fieldLabel : '原计划添加C22',
							dataIndex : 'c22Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield4',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield5',
							fieldLabel : '原计划添加C23',
							dataIndex : 'c23Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield6',
							fieldLabel : '原计划添加C27',
							dataIndex : 'c27Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield7',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield8',
							fieldLabel : '原计划添加C28',
							dataIndex : 'c28Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield9',
							fieldLabel : '原计划添加C29',
							dataIndex : 'c29Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield10',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield11',
							fieldLabel : '原计划添加C30',
							dataIndex : 'c30Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield12',
							fieldLabel : '原计划添加RO水',
							dataIndex : 'roPlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield14',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield15',
							dataIndex : 'position',
							fieldLabel : '取样位置',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield16',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield17',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield18',
							dataIndex : 'c21Test',
							fieldLabel : '测试浓度C21',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield19',
							dataIndex : 'c22Test',
							fieldLabel : '测试浓度C22',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield20',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield21',
							dataIndex : 'c23Test',
							fieldLabel : '测试浓度C23',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield22',
							dataIndex : 'c27Test',
							fieldLabel : '测试浓度C27',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield23',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield24',
							dataIndex : 'c28Test',
							fieldLabel : '测试浓度C28',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield25',
							dataIndex : 'c29Test',
							fieldLabel : '测试浓度C29',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield26',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield27',
							dataIndex : 'c30Test',
							fieldLabel : '测试浓度C30',
							anchor : '85%',
							colspan : 1
						}, {

							xtype : 'combobox',
							fieldLabel : '是否合格',
							ref : '../../ifok',
							hiddenName : 'entity/ifok',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							anchor : '85%',
							colspan : 2,
							store : [['Y', '是'], ['N', '否']],
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.editWindow2.ifok.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							ref : '../../displayfield13',
							fieldLabel : ' ',
							value : '<p style="color:red;">合格则发生产，不合格则重新配料</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c21Plan',
							fieldLabel : '计划添加C21',
							name : 'list/c21Plan',

							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c22Plan',
							fieldLabel : '计划添加C22',
							name : 'list/c22Plan',

							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c23Plan',
							fieldLabel : '计划添加C23',
							name : 'list/c23Plan',

							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c27Plan',
							fieldLabel : '计划添加C27',

							name : 'list/c27Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c28Plan',
							fieldLabel : '计划添加C28',

							name : 'list/c28Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../c29Plan',
							fieldLabel : '计划添加C29',

							name : 'list/c29Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							ref : '../../c30Plan',
							fieldLabel : '计划添加C30',

							name : 'list/c30Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							ref : '../../roPlan',
							fieldLabel : '计划添加RO水',
							name : 'list/roPlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'pkid'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'third'
						}]
			}]
		});
	}

	this.initEditWindow3 = function() {
		this.editWindow3 = this.editWindow3 || new Ext.fn.FormWindow({
			title : '配料',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.quality.mptest5.expandWaterList.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.mptest5.modiWaterListByThird.biz.ext',
				fields : [{
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'displayfield',
							fieldLabel : '水相液批号'
						}, {

							xtype : 'displayfield',
							fieldLabel : '水相类型',
							ref : '../../watertype',
							dataIndex : 'watertype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'displayfield',
							fieldLabel : '线别',
							ref : '../../line',
							dataIndex : 'line',
							anchor : '85%',
							colspan : 1
						}, {

							xtype : 'displayfield',
							fieldLabel : '膜片类型',
							ref : '../../mptype',
							dataIndex : 'mptype',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C21',
							dataIndex : 'c21Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c21Reality',
							allowBlank : false,
							fieldLabel : '实际添加C21',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C22',
							dataIndex : 'c22Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c22Reality',
							allowBlank : false,
							fieldLabel : '实际添加C22',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C23',
							dataIndex : 'c23Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c23Reality',
							allowBlank : false,
							fieldLabel : '实际添加C23',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C27',
							dataIndex : 'c27Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c27Reality',
							allowBlank : false,
							fieldLabel : '实际添加C27',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C28',
							dataIndex : 'c28Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c28Reality',
							allowBlank : false,
							fieldLabel : '实际添加C28',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C29',
							dataIndex : 'c29Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c29Reality',
							allowBlank : false,
							fieldLabel : '实际添加C29',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加C30',
							dataIndex : 'c30Plan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/c30Reality',
							allowBlank : false,
							fieldLabel : '实际添加C30',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : '计划添加RO水',
							dataIndex : 'roPlan',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'list/roReality',
							allowBlank : false,
							fieldLabel : '实际添加RO水',
							anchor : '85%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'list/relationId',
							dataIndex : 'relationId'
						}, {
							xtype : 'hidden',
							name : 'list/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/step',
							value : 'first'
						}]
			}]
		});
	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			title : '【详情】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			tbar : [],
			hsPage : false,
			autoScroll : true,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'watertype',
						header : '水相类型'
					}, {
						dataIndex : 'line',
						header : '线别'
					}, {
						dataIndex : 'mptype',
						header : '膜片类型'
					}, {
						dataIndex : 'batchNo',
						header : '油相液批号'
					}, {
						dataIndex : 'position',
						header : '取样位置'
					}, {
						dataIndex : 'c21Test',
						header : 'c21测试浓度'
					}, {
						dataIndex : 'c22Test',
						header : 'c22测试浓度'
					}, {
						dataIndex : 'c23Test',
						header : 'c23测试浓度'
					}, {
						dataIndex : 'c27Test',
						header : 'c27测试浓度'
					}, {
						dataIndex : 'c28Test',
						header : 'c28测试浓度'
					}, {
						dataIndex : 'c29Test',
						header : 'c29测试浓度'
					}, {
						dataIndex : 'c30Test',
						header : 'c30测试浓度'
					}, {
						dataIndex : 'c21Plan',
						header : 'c21计划添加量'
					}, {
						dataIndex : 'c22Plan',
						header : 'c22计划添加量'
					}, {
						dataIndex : 'c23Plan',
						header : 'c23计划添加量'
					}, {
						dataIndex : 'c27Plan',
						header : 'c27计划添加量'
					}, {
						dataIndex : 'c28Plan',
						header : 'c28计划添加量'
					}, {
						dataIndex : 'c29Plan',
						header : 'c29计划添加量'
					}, {
						dataIndex : 'c30Plan',
						header : 'c30计划添加量'
					}, {
						dataIndex : 'roPlan',
						header : 'RO水计划添加量'
					}, {
						dataIndex : 'c21Reality',
						header : 'c21实际添加量'
					}, {
						dataIndex : 'c22Reality',
						header : 'c22实际添加量'
					}, {
						dataIndex : 'c23Reality',
						header : 'c23实际添加量'
					}, {
						dataIndex : 'c27Reality',
						header : 'c27实际添加量'
					}, {
						dataIndex : 'c28Reality',
						header : 'c28实际添加量'
					}, {
						dataIndex : 'c29Reality',
						header : 'c29实际添加量'
					}, {
						dataIndex : 'c30Reality',
						header : 'c30实际添加量'
					}, {
						dataIndex : 'roReality',
						header : 'RO水实际添加量'
					}, {
						dataIndex : 'createName',
						header : '发起人'
					}, {
						dataIndex : 'firstName',
						header : '分析员'
					}, {
						dataIndex : 'secondName',
						header : '工艺员'
					}, {
						dataIndex : 'thirdName',
						header : '配料员'
					}, {
						dataIndex : 'createTime',
						header : '发起时间'
					}, {
						dataIndex : 'firstDate',
						header : '接样时间'
					}, {
						dataIndex : 'secondDate',
						header : '工艺调整时间'
					}, {
						dataIndex : 'thirdDate',
						header : '配料时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest5.queryWaterListRecords.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
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
							name : 'c21Test'
						}, {
							name : 'c22Test'
						}, {
							name : 'c23Test'
						}, {
							name : 'c27Test'
						}, {
							name : 'c28Test'
						}, {
							name : 'c29Test'
						}, {
							name : 'c30Test'
						}, {
							name : 'c21Plan'
						}, {
							name : 'c22Plan'
						}, {
							name : 'c23Plan'
						}, {
							name : 'c27Plan'
						}, {
							name : 'c28Plan'
						}, {
							name : 'c29Plan'
						}, {
							name : 'c30Plan'
						}, {
							name : 'roPlan'
						}, {
							name : 'c21Reality'
						}, {
							name : 'c22Reality'
						}, {
							name : 'c23Reality'
						}, {
							name : 'c27Reality'
						}, {
							name : 'c28Reality'
						}, {
							name : 'c29Reality'
						}, {
							name : 'c30Reality'
						}, {
							name : 'roReality'
						}, {
							name : 'firstName'
						}, {
							name : 'firstId'
						}, {
							name : 'secondName'
						}, {
							name : 'secondId'
						}, {
							name : 'thirdName'
						}, {
							name : 'thirdId'
						}, {
							name : 'firstDate'
						}, {
							name : 'secondDate'
						}, {
							name : 'thirdDate'
						}, {
							name : 'relationId'
						}, {
							name : 'line'
						}, {
							name : 'mptype'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'step'
						}, {
							name : 'position'
						}, {
							name : 'watertype'
						}]
			})
		})

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '测试明细',
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