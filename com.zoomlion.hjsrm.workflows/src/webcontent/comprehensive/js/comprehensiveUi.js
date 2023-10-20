/**
 * @description 综合工单查询
 */
com.zoomlion.hjsrm.workflows.compreMgr = function() {
	this.initPanel = function() {
		this.createQueryBlock();
		this.createResultBlock();

		this.commonHandler = new Ext.ex.CommHandler({
					listPanel : this.resultBlock
				});

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "compreDiv",
					panels : [this.queryBlock, this.resultBlock]
				});
	};
	this.destroy = function() {
		this.commonHandler.destroy();
	}
	// 创建TCIS工单查询条件
	this.createQueryBlock = function() {
		this.queryBlock = new Ext.fn.QueryPanel({
			columns : 4,
			region : 'north',
			title : '查询条件',
			height : 210,
			fields : [{
				xtype : 'dictcombobox',
				ref : '../worklisttype',
				dictData : BS_WORKLISTINFO_WORKLISTTYPE,
				fieldLabel : '工单类型',
				hiddenName : "condition/worklisttype",
				value : 2,
				listeners : {
					scope : this,
					'select' : function(combo, record, index) {
						var activitydef = this.queryBlock.activitydef;
						var queryBusitype = this.queryBlock.busitype.getValue();
						if (queryBusitype) {
							if (combo.getValue() == '1') {// 诉求流程环节
								queryBusitype = 'BS100';
							}
							activitydef.store.baseParams = {
								"entity/busitype" : queryBusitype
							};
							activitydef.store.load();
						}
					},
					'expand' : function(combo, record, index) {
						this.queryBlock.activitydef.reset();

					}
				}
			}, {
				xtype : 'busisortcombo',
				fieldLabel : "业务分类",
				refFieldName : 'busitype',
				hiddenName : 'condition/busisort',
				dataIndex : 'busisort',
				editable : false,
				hidden : true,
				listeners : {
					scope : this,
					'expand' : function(A) {
						this.queryBlock.busitype.reset();
						this.queryBlock.activitydef.reset();
					}
				}
			}, {
				xtype : 'busitypecombo',
				fieldLabel : "业务类型",
				ref : '../busitype',
				cascadeFieldName : 'busisort',
				hiddenName : 'condition/busitype',
				dataIndex : 'busitype',
				editable : false,
				params : {
					isshowall : true,
					isfilterid : true
				},
				listeners : {
					scope : this,
					'select' : function(combo, record, index) {
						var activitydef = this.queryBlock.activitydef;
						var queryBusitype;
						if (this.queryBlock.worklisttype.getValue() == '1') {// 诉求流程环节
							queryBusitype = 'BS100';
						} else { // 业务流程环节
							queryBusitype = record.data.busitypeid;
						}
						activitydef.store.baseParams = {
							"entity/busitype" : queryBusitype
						};
						activitydef.store.load();
					},
					'expand' : function(A) {
						this.queryBlock.activitydef.reset();
					}
				}
			}, {
				xtype : 'combo',
				fieldLabel : '工单环节',
				ref : '../activitydef',
				emptyText : '--请选择--',
				triggerAction : 'all',
				lastQuery : '',
				minChars : 0,
				typeAhead : false,
				forceSelection : true,
				queryParam : 'entity/activitydefname',
				editable : false,
				tpl : '<tpl for="."><div class="x-combo-list-item"><span>{activitydefname}</span></div></tpl>',
				lazyRender : true,
				mode : 'remote',
				store : new Ext.data.JsonStore({
					url : 'com.zoomlion.hjsrm.pub.busi.busibpsconfig.BusiStepDefineMgr.queryBusiBusiStepDefineByCombox.biz.ext',
					root : 'data',
					fields : [{
								name : 'pkid'
							}, {
								name : 'activitydefid'
							}, {
								name : 'activitydefname'
							}]
				}),
				hiddenName : 'condition/activitydefid',
				displayField : 'activitydefname',
				valueField : 'activitydefid',
				listeners : {
					scope : this,
					'beforequery' : function(combo, record, index) {
						if (!this.queryBlock.busitype.getValue()) {
							return false;
						}
					},
					'expand' : function(A) {
						this.queryBlock.activitydef.reset();
					}
				}
			}, {
				name : 'condition/batchid',
				fieldLabel : '批量号'
			}, {
				xtype : 'userselectfield',
				displayField : 'userid',
				fieldLabel : '用户/项目编号',
				name : 'condition/userid'
			}, {
				name : 'condition/username',
				fieldLabel : '用户/项目名称'
			}, {
				name : 'condition/planid',
				fieldLabel : '计划号'
			}, {
				name : 'condition/stenocode',
				fieldLabel : '用户速记码'
			}, {
				name : 'condition/contactphone',
				fieldLabel : '手机/电话'
			}, {
				xtype : 'dictcombobox',
				dictData : BS_WORKPRIORITY,
				hiddenName : 'condition/urglvl',
				fieldLabel : '优先级'
			}, {
				xtype : 'dictcombobox',
				dictData : BS_APPLYINFO_CHNLTYPE,
				hiddenName : 'condition/chnltype',
				fieldLabel : '诉求渠道'
			}, {
				 xtype : 'orgtreecombo',
				 queryType : 'dataorg',
				 hiddenName : 'condition/appealchannel',
				 valueField : 'orgid',
				 displayField : 'orgname',
				 fieldLabel : '诉求发起部门'
			}, {
				 xtype : 'orgtreecombo',
				 queryType : 'dataorg',
				 hiddenName : 'condition/receivedept',
				 valueField : 'orgid',
				 displayField : 'orgname',
				 fieldLabel : '诉求处理部门'
			}, {
				xtype : 'dictcombobox',
				dictData : PB_ISORNOT,
				hiddenName : 'condition/isprint',
				hidden:true,
				fieldLabel : '是否打印'
			}, {
				xtype : 'dictcombobox',
				/*
				 * dictData :
				 * [{DICTID:'4',DICTNAME:'可签收'},{DICTID:'10',DICTNAME:'待处理'},
				 * {DICTID:'8',DICTNAME:'已挂起'},{DICTID:'12',DICTNAME:'已完成'},
				 * {DICTID:'13',DICTNAME:'已注销'}] , 由查询工作项状态改成查询流程状态－－何群吉
				 */
				dictData : [{
							DICTID : '1',
							DICTNAME : '未启动'
						}, {
							DICTID : '2',
							DICTNAME : '运行'
						}, {
							DICTID : '3',
							DICTNAME : '已挂起'
						}, {
							DICTID : '7',
							DICTNAME : '已完成'
						}, {
							DICTID : '8',
							DICTNAME : '已终止'
						}],
				hiddenName : 'condition/currentstate',
				fieldLabel : '工单状态'
			}, {
				xtype : 'dateregion',
				nameArray : ['condition/createtimestartdate', 'condition/createtimeendate'],
				fieldLabel : '诉求发起时间'
			}, {
				xtype : 'dateregion',
				nameArray : ['condition/claimbookdatestartdate', 'condition/claimbookdateenddate'],
				fieldLabel : '客户要求时间'
			}, {
				fieldLabel : "诉求发起人",
				xtype : 'textfield',
				name : 'condition/createby'
			}, {
				fieldLabel : "用气地址",
				xtype : 'textfield',
				colspan : 2,
				name : 'condition/gasaddress'
			}, {
				fieldLabel : "地址别名",
				xtype : 'textfield',
				name : 'condition/addressbyname'
			}]
		});

	}
	this.createResultBlock = function() {
		this.listSelModel = new Ext.grid.CheckboxSelectionModel({});
		this.resultBlock = new Ext.fn.ListPanel({
			title : '查询结果',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			columns : [new Ext.grid.RowNumberer(), this.listSelModel, {
						header : '业务类型',
						dataIndex : 'sqbusitypename',
						sortable : true
					}, {
						header : '工单类型',
						dictData : BS_WORKLISTINFO_WORKLISTTYPE,
						xtype : 'dictcolumn',
						dataIndex : 'worklisttype',
						sortable : true
					}, {
						header : '当前环节',
						dataIndex : 'activityinstname',
						sortable : true
					}, {
						dataIndex : 'currentstate',
						hidden : true
					}, {
						header : '状态',
						dataIndex : 'currentstatename',
						sortable : true
					}, {
						header : '参与者',
						dataIndex : 'participant',
						sortable : true
					}, {
						header : '用户/项目编号',
						dataIndex : 'userid',
						sortable : true
					}, {
						header : '用户/项目名称',
						dataIndex : 'username',
						sortable : true
					}, {
						header : '诉求发起部门',
						dataIndex : 'appealchannelname',
						sortable : true
					}, {
						header : '诉求处理部门',
						dataIndex : 'receivedeptname',
						sortable : true
					}, {
					header : '诉求发起人',
					dataIndex : 'createby',
					sortable : true
				}, {
						header : '诉求渠道',
						dictData : BS_APPLYINFO_CHNLTYPE,
						xtype : 'dictcolumn',
						dataIndex : 'chnltype',
						sortable : true
					}, {
						header : '预约时间',
						dataIndex : 'bookdate',
						sortable : true
					}, {
					header : '客户要求时间',
					dataIndex : 'claimbookdate',
					sortable : true
				   }, {
						header : '诉求发起时间',
						dataIndex : 'createtime',
						sortable : true
					}, {
						header : '接收时间',
						dataIndex : 'startdate',
						sortable : true
					}, {
						header : '优先级',
						xtype : 'dictcolumn',
						dictData : BS_WORKPRIORITY,
						dataIndex : 'urglvl',
						sortable : true
					}, {
						header : '用气地址',
						dataIndex : 'gasaddress',
						sortable : true,
						renderer : function(value, metadata) {
							value = (value == null) ? '' : value;
							metadata.attr = 'ext:qtitle="用气地址：" ext:qtip="'
									+ value.replace(/\"/g, '') + '"';
							return value;
						}
					}],
			sm : this.listSelModel,
			store : new Ext.data.GroupingStore({
				url : 'com.zoomlion.hjsrm.workflows.comprehensive.SynOrderMgr.querySynOrder.biz.ext',
				reader : new Ext.data.JsonReader({
							root : 'datas',
							totalProperty : 'totalCount',
							fields : ['pkid', 'processinstname', {
										name : 'currentstate',
										type : 'string'
									}, 'activityname', 'planid', 'busitype',
									'busitypename', 'userid', 'username',
									'gasaddress', 'chnltype', 'appealchannel',
									'isprint', 'lastprintdate', 'urglvl',
									'startdate', 'bookdate', 'urglvl',
									'activitydefid', 'workitemid', 'actionurl',
									'workttemtype', 'activityinstname',
									'processdefid', 'processdefname',
									'worklistinfopkid', 'currentstatename',
									'processinstid', 'activityinstid',
									'createtime', 'sqbusitype',
									'sqbusitypename', 'worklisttype',
									'applyinfopkid', 'participant','receivedeptname',
									'createby','claimbookdate','appealchannelname']
						})

			}),
			tbar : new Ext.Toolbar({
						items : ['->', '-', {
									iconCls : 'icon-flow',
									text : '流程图',
									scope : this,
									handler : this.showFlowGraph
								}, "-", {
									text : '注销',
									iconCls : 'icon-stop',
									scope : this,
									handler : this.onTerminateProcessInstance
								}, "-", {
									iconCls : 'icon-page_excel',
									text : '导出Excel',
									scope : this,
									handler : this.onExportExcel
								}]
					})

		});
	};
}