com.keensen.ump.qinsen.quality.DefectMgr = function() {
	this.initPanel = function() {

		this.queryFlag = false;
		
		var defectTmWinId = Ext.id();
		var defectZmWinId = Ext.id();
		var defectTmWinId2 = Ext.id();
		var defectZmWinId2 = Ext.id();

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

		this.defectStore2 = new Ext.data.JsonStore({
					url : 'com.keensen.ump.qinsen.inst.queryCdmDefectItemList.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : '',
					baseParams : {
						'condition/recTacheId' : '99',
						'condition/dutyTacheId' : '99'
					},
					fields : [{
								name : 'recordId'
							}, {
								name : 'defectFullName'
							}]
				})

		this.defectTmWin = new com.keensen.ump.defectWindow({
					id : defectTmWinId,
					dutyTacheCode : 'TM',
					recTacheCode : 'TM',
					relationListId : 'qinsen_defect_list'
				});
		this.defectZmWin = new com.keensen.ump.defectWindow({
					id : defectZmWinId,
					dutyTacheCode : 'ZM',
					recTacheCode : 'TM',
					relationListId : 'qinsen_defect_list'
				});
		this.defectTmWin2 = new com.keensen.ump.defectWindow({
					id : defectTmWinId2,
					dutyTacheCode : 'TM',
					recTacheCode : 'CM',
					relationListId : 'qinsen_defect_list'
				});
		this.defectZmWin2 = new com.keensen.ump.defectWindow({
					id : defectZmWinId2,
					dutyTacheCode : 'ZM',
					recTacheCode : 'CM',
					relationListId : 'qinsen_defect_list'
				});
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		this.initEditWindow2();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'defectmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		
		this.productTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['量产', '量产'], ['试量产', '试量产'], ['实验', '实验']]
				});
				
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 140,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片不良记录查询】',
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceDtStart',
						fieldLabel : '不良产生时间',
						colspan : 1,
						anchor : '95%',
						// allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceDtEnd',
						fieldLabel : '至',
						colspan : 1,
						anchor : '95%',
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 1)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						anchor : '95%',
						fieldLabel : '膜片型号 '
					}, {

						xtype : 'combo',
						fieldLabel : '不良归属工序',
						ref : '../dutyTacheId',
						hiddenName : 'condition/dutyTacheId',
						emptyText : '--请选择--',
						anchor : '95%',
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
						anchor : '95%',
						store : [[null, '全部'], [100, '涂膜'], [101, '裁叠膜']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.recTacheId.reset();
							}
						}
					}, {
						xtype : 'combobox',
						anchor : '95%',
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
						anchor : '95%',
						xtype : 'textfield',
						fieldLabel : '膜片批次%-%',
						name : 'condition/tumoBatchNoStr'
					}, {
						ref : '../dimoBatchNo',
						anchor : '95%',
						xtype : 'textfield',
						fieldLabel : '底膜批次%-%',
						name : 'condition/dimoBatchNo'
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'combobox',
						forceSelection : true,
						// allowBlank : false,
						mode : 'local',
						fieldLabel : '生产类型',
						ref : '../productType',
						hiddenName : 'condition/productType',
						anchor : '95%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.productTypeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					rescode : '10002661',
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
			// title : '【膜片不良记录列表】',
			id : 'qinsen_defect_list',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '涂膜录入涂膜不良',
						scope : this,
						iconCls : 'icon-application_edit',
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
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'defectlossinfo'
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.qinsen.quality.deleteDefect.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'tumoBatchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'dimoBatchNo',
						header : '底膜批次'
					}, {
						dataIndex : 'productType',
						header : '生产类型'
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
						header : '不良长度(m)',
						dataIndex : 'loss'
					}, {
						header : '不良收卷位置(m)',
						dataIndex : 'position'
					}, {
						header : '标签数',
						dataIndex : 'labelNum'
					}, {
						header : '是否已扯',
						dataIndex : 'ifTear'
					}, {
						header : '不良产生时间',
						dataIndex : 'produceDate'
					}, {
						header : '录入',
						dataIndex : 'createName'
					}, {
						header : '不良编辑状态',
						dataIndex : 'ifModifyDefectName'
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
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'flag'
						}, {
							name : 'productType'
						}, {
							name : 'createName'
						}, {
							name : 'position'
						}, {
							name : 'labelNum'
						}, {
							name : 'recorder'
						}, {
							name : 'ifTear'
						}, {
							name : 'ifModifyDefect'
						}, {
							name : 'ifModifyDefectName'
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
					_this.listPanel.store.reload();
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
							xtype : 'datetimefield',
							anchor : '95%',
							ref : '../produceDt',
							name : 'entity/produceDt',
							dataIndex : 'produceDt',
							allowBlank : false,
							fieldLabel : '不良产生时间',
							format : "Y-m-d H:i:00",
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
							fieldLabel : '不良损失(m)',
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
							xtype : 'numberfield',
							name : 'entity/position',
							fieldLabel : '收卷位置(m)',
							dataIndex : 'position',
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
							xtype : 'numberfield',
							name : 'entity/labelNum',
							fieldLabel : '标签数',
							dataIndex : 'labelNum',
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
							xtype : 'combo',
							fieldLabel : '是否已扯',
							dataIndex : 'ifTear',
							allowBlank : true,
							typeAhead : true,
							typeAheadDelay : 100,
							triggerAction : "all",
							lazyRender : true,
							minChars : 1,
							mode : 'local',
							lastQuery : '',
							allowBlank : false,
							// mode : 'local',
							emptyText : '--请选择--',
							// lastQuery : '',
							store : new Ext.data.SimpleStore({
										fields : ["ifTear", "ifTear"],
										data : [['是', '是'], ['否', '否']]
									}),

							hiddenName : 'entity/ifTear',
							valueField : 'ifTear',
							displayField : 'ifTear',
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
							xtype : 'textfield',
							fieldLabel : '记录人',
							name : 'entity/recorder',
							dataIndex : 'createName',
							allowBlank : true,
							scope : this,
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

	this.initEditWindow2 = function() {
		var _this = this;
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
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
					_this.editWindow2.items.items[0].form.reset();
					_this.editWindow2.hide();
					_this.listPanel.store.reload();
				},
				columns : 2,
				loadUrl : 'com.keensen.ump.qinsen.quality.expandDefect.biz.ext',
				saveUrl : 'com.keensen.ump.qinsen.quality.modifyZmDefect.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'dimoBatchNo',
							ref : '../../dimoBatchNo',
							fieldLabel : '底膜批次',
							readOnly : true,
							anchor : '75%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							anchor : '95%',
							ref : '../produceDt',
							name : 'entity/produceDt',
							dataIndex : 'produceDt',
							allowBlank : false,
							fieldLabel : '不良产生时间',
							format : "Y-m-d H:i:00",
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
							store : this.defectStore2,
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