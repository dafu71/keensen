com.keensen.ump.produce.quality.TmDefectListMgr = function() {
	
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'tmdefectlistmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		
		this.iftearStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.firstStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['固损', '固损'], ['不良', '不良']]
				});

		this.secondStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['外观', '外观'], ['性能', '性能'], ['尺寸', '尺寸'],
							['取样损耗', '取样损耗'], ['拼接损耗', '拼接损耗'],
							['试卷损耗', '试卷损耗']]
				});

		this.tacheStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['铸膜', '铸膜'], ['涂膜', '涂膜'], ['裁叠膜', '裁叠膜']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 180,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【膜片质检标准查询】',
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '类型',
								ref : '../first',
								hiddenName : 'condition/first',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.firstStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.first.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/second',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良二级目录%%'
							}, {
								xtype : 'textfield',
								name : 'condition/third',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良三级目录%%'
							}, {
								xtype : 'textfield',
								name : 'condition/fourth',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良四级目录%%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/defectName',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '不良项目%%'
							}, {
								xtype : 'textfield',
								name : 'condition/tmBatchNo',
								ref:'../tmBatchNo',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '涂膜批号%%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '记录工序',
								ref : '../tache',
								hiddenName : 'condition/tache',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.tacheStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.tache.reset()
									}
								}
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '产生工序',
								ref : '../tacheCause',
								hiddenName : 'condition/tacheCause',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.tacheStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.tacheCause.reset()
									}
								}
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/lineName',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '生产线%%'
							}, {
								xtype : "dateregion",
								anchor : '100%',
								colspan : 1,
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "不良记录时间",
								format : "Y-m-d"
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '是否已扯',
								ref : '../iftear',
								hiddenName : 'condition/iftear',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.iftearStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.iftear.reset()
									}
								}
							}, {
								xtype : 'teamcombobox',
								name : 'condition/teamId',
								fieldLabel : '生产班组',
								hiddenName : 'condition/teamId',
								anchor : '100%',
								colspan : 1
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {

						xtype : 'combo',
						fieldLabel : '生产类型',
						ref : '../prodFlagId',
						hiddenName : 'condition/prodFlagId',
						emptyText : '--请选择--',
						anchor : '100%',
						colspan : 1,
						store : [[null, '全部'], ['300027', '量产'],
								['300028', '实验'], ['300140', '试量产']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.prodFlagId.reset();
							}
						}
					}, {
								xtype : 'hidden',
								ref : '../relationId',
								hiddenName : 'condition/relationId'
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// hidden : true,
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
			// title : '【膜片质检标准列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			tbar : [{
						text : '删除',
						scope : this,
						//hidden : true,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : lengthTotalId
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.defect.deleteTmDefectList.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'tmBatchNo',
						header : '涂膜批号'
					}, {
						dataIndex : 'defectName',
						width:200,
						header : '不良项目'
					}, {
						dataIndex : 'supName',
						header : '无纺布类型'
					}, {
						header : '班组',
						width : 100,
						dataIndex : 'teamName'
					}, {
						header : '生产类型',
						width : 70,
						dataIndex : 'prodFlagName'
					}, {
						header : '外销',
						width : 50,
						dataIndex : 'isWxName'
					}, {
						dataIndex : 'first',
						header : '不良类型'
					}, {
						dataIndex : 'createTime',
						width:120,
						header : '不良记录时间'
					}, {
						dataIndex : 'tacheCause',
						header : '产生工序'
					}, {
						dataIndex : 'tache',
						header : '记录工序'
					}, {
						dataIndex : 'position',
						header : '收卷位置'
					}, {
						dataIndex : 'length',
						header : '不良长度'
					}, {
						dataIndex : 'numLabel',
						header : '标签数'
					}, {
						dataIndex : 'iftear',
						header : '是否已扯'
					}, {
						dataIndex : 'dye',
						header : '染色情况'
					}, {
						dataIndex : 'horizontal',
						header : '横向边距'
					}, {
						dataIndex : 'horizontal2',
						header : '横向边距距离'
					}, {
						dataIndex : 'vertical',
						header : '纵向间隔(走布方向,cm)'
					}, {
						dataIndex : 'reason',
						header : '产生原因'
					}, {
						dataIndex : 'advise',
						header : '使用意见'
					}, {
						dataIndex : 'dept',
						header : '责任部门'
					}, {
						dataIndex : 'lineName',
						header : '生产线'
					}, {
						dataIndex : 'recorder',
						header : '记录人'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.defect.queryTmDefectListByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'supName'
						},{
							name : 'prodFlagName'
						},{
							name : 'teamName'
						},{
							name : 'lengthTotal'
						},{
							name : 'isWxName'
						},{
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
							name : 'defectId'
						}, {
							name : 'tacheCause'
						}, {
							name : 'position'
						}, {
							name : 'length'
						}, {
							name : 'numLabel'
						}, {
							name : 'iftear'
						}, {
							name : 'dye'
						}, {
							name : 'horizontal'
						}, {
							name : 'horizontal2'
						}, {
							name : 'vertical'
						}, {
							name : 'reason'
						}, {
							name : 'dept'
						}, {
							name : 'team'
						}, {
							name : 'recorder'
						}, {
							name : 'relationId'
						}, {
							name : 'tmBatchNo'
						}, {
							name : 'tache'
						}, {
							name : 'defectName'
						}, {
							name : 'first'
						}, {
							name : 'lineName'
						}, {
							name : 'advise'
						}]
			})
		})
	}

}