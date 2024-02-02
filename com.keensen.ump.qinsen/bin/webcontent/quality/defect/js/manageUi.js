com.keensen.ump.qinsen.quality.DefectMgr = function() {
	this.initPanel = function() {

		this.defectStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.qinsen.inst.queryCdmDefectItemList.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : '',
					baseParams : {},
					fields : [{
								name : 'recordId'
							}, {
								name : 'defectFullName'
							}]
				})
		this.defectTmWin = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'TM',
					recTacheCode : 'TM',
					relationListId : 'qinsen_defect_list'
				});
		this.defectZmWin = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'ZM',
					recTacheCode : 'TM',
					relationListId : 'qinsen_defect_list'
				});
		this.defectTmWin2 = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'TM',
					recTacheCode : 'CM',
					relationListId : 'qinsen_defect_list'
				});
		this.defectZmWin2 = new com.keensen.ump.defectWindow({
					dutyTacheCode : 'ZM',
					recTacheCode : 'CM',
					relationListId : 'qinsen_defect_list'
				});
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'defectmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【膜片不良记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceDtStart',
						fieldLabel : '不良产生时间',
						colspan : 1,
						anchor : '75%',
						allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceDtEnd',
						fieldLabel : '至',
						colspan : 1,
						anchor : '75%',
						editable : true,
						format : 'Y-m-d H:i',
						allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '75%',
						fieldLabel : '膜片型号 '
					}, {

						xtype : 'combo',
						fieldLabel : '不良归属工序',
						ref : '../dutyTacheId',
						hiddenName : 'condition/dutyTacheId',
						emptyText : '--请选择--',
						anchor : '75%',
						store : [[null, '全部'], [99, '铸膜'], [100, '涂膜']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.dutyTacheId.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {

						xtype : 'combo',
						fieldLabel : '不良记录工序',
						ref : '../recTacheId',
						hiddenName : 'condition/recTacheId',
						emptyText : '--请选择--',
						anchor : '75%',
						store : [[null, '全部'], [100, '涂膜'], [101, '裁叠膜']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.recTacheId.reset();
							}
						}
					}, {
						xtype : 'combobox',
						anchor : '75%',
						fieldLabel : '不良项目',
						triggerAction : "all",
						store : this.defectStore,
						valueField : 'recordId',
						displayField : 'defectFullName',
						hiddenName : 'condition/defectId',
						name : 'condition/defectId',
						editable : false,
						forceSelection : true,
						mode : 'local',
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						},
						emptyText : '--请选择--',
						colspan : 1
					}, {
						ref : '../tumoBatchNoStr',
						anchor : '75%',
						xtype : 'textfield',
						fieldLabel : '膜片批次%-%',
						name : 'condition/tumoBatchNoStr'
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
			title : '【膜片不良记录列表】',
			id : 'qinsen_defect_list',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '涂膜录入涂膜不良',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddTm
					}, '-', {
						text : '涂膜录入铸膜不良',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddZm
					}, '-', {
						text : '裁膜录入涂膜不良',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddTm2
					}, '-', {
						text : '裁膜录入铸膜不良',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddZm2
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.quality.deleteDefect.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'tumoBatchNo',
						header : '膜片批次'
					}, {
						header : '膜片型号',
						dataIndex : 'mpSpecName'
					}, {
						header : '归属工序',
						dataIndex : 'dutyTacheName'
					}, {
						header : '记录工序',
						dataIndex : 'recTacheName'
					}, {
						header : '不良项目',
						dataIndex : 'defectName'
					}, {
						header : '损失(m)',
						dataIndex : 'loss'
					}, {
						header : '不良产生时间',
						dataIndex : 'produceDate'
					}, {
						header : '备注',
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.quality.queryDefectByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'recordId'
						}, {
							name : 'tumoBatchId'
						}, {
							name : 'defectItemId'
						}, {
							name : 'loss'
						}, {
							name : 'workerId'
						}, {
							name : 'produceDt'
						}, {
							name : 'createDt'
						}, {
							name : 'changeDt'
						}, {
							name : 'creatorId'
						}, {
							name : 'changerId'
						}, {
							name : 'remark'
						}, {
							name : 'dutyTacheId'
						}, {
							name : 'recTacheId'
						}, {
							name : 'defectName'
						}, {
							name : 'dutyTacheCode'
						}, {
							name : 'dutyTacheName'
						}, {
							name : 'recTacheCode'
						}, {
							name : 'recTacheName'
						}, {
							name : 'tumoBatchNo'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'mpSpecName'
						}, {
							name : 'produceDate'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					_this.editWindow.items.items[0].form.reset();
					_this.editWindow.hide();
					_this.listPanel.store.load();
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.qinsen.quality.expandDefect.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.quality.modifyCdmDefect.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'batchNo',
							ref : '../../batchNo',
							fieldLabel : '膜片批次',
							readOnly : true,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datefield',
							anchor : '95%',
							ref : '../produceDt',
							name : 'entity/produceDt',
							dataIndex : 'produceDt',
							allowBlank : false,
							fieldLabel : '不良产生日期',
							format : "Y-m-d",
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							fieldLabel : '不良项目',
							triggerAction : "all",
							store : this.defectStore,
							valueField : 'recordId',
							displayField : 'defectFullName',
							hiddenName : 'entity/defectItemId',
							name : 'entity/defectItemId',
							dataIndex : 'defectId',
							editable : false,
							forceSelection : true,
							mode : 'local',
							listeners : {
								"expand" : function(A) {
									this.reset()
								}
							},
							emptyText : '--请选择--',
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/loss',
							fieldLabel : '不良损失',
							dataIndex : 'loss',
							allowNegative : false,
							allowDecimals : true,
							minValue : 0,
							allowBlank : true,
							anchor : '75%',
							colspan : 2,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							dataIndex : 'remark',
							anchor : '75%',
							colspan : 2,
							ref : '../remark',
							name : 'entity/remark',
							allowBlank : true,
							fieldLabel : '备注'
						}, {
							name : 'entity/recordId',
							dataIndex : 'recordId',
							xtype : 'hidden'
						}]
			}]
		});
	}
}