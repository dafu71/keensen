com.zoomlion.hjsrm.kcgl.PlanqueryMgr = function() {
	
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initViewWindow();
		this.initResultWindow();
		this.initViewOptWindow();
		this.initViewNoAnswerWindow();
		
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'planquerymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}
	
	this.initQueryPanel = function() {

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					//width : 500,
					region : 'north',
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 计划查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/title',
								anchor : '100%',
								fieldLabel : '计划标题'
							}, {
								xtype : "dateregion",
								anchor : '100%',
								//width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createendate'],
								fieldLabel : "创建日期",
								format : "Y-m-d"
							},{
								xtype : 'combobox',
								name : 'condition/confirm',
								hiddenName : 'condition/confirm',
								fieldLabel : '是否确认',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
									        id: 0,
											fields : ['mykey', 'myvalue'],
											data : [['N','未确认'], ['Y','已确认']]
										}),
								mode : "local",
								editable:false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "请选择"
							},{
								xtype : 'combobox',
								name : 'condition/archive',
								hiddenName : 'condition/archive',
								fieldLabel : '是否归档',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
									        id: 0,
											fields : ['mykey', 'myvalue'],
											data : [['N','未归档'], ['Y','已归档']]
										}),
								mode : "local",
								editable:false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "请选择"
							}]
				});
		
	}
	
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel(
				{   header : '',
					singleSelect : true});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 计划列表 】',
			stripeRows : true,
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '查看计算结果',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onCalc
					},  '-', {
						text : '查看计划明细',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onView
					},  '-', {
						text : '导出计算结果',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onExportResult
					},  '-', {
						text : '导出计划明细',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.onExport
					},  '-', {
						text : '查看操作记录',
						menu :[{
							text : '所有操作记录',
							scope : this,
							iconCls : 'icon-application_lightning',
							handler : this.onViewOpt
						},{
							text : '供应商答交记录',
							scope : this,
							iconCls : 'icon-application_lightning',
							handler : this.onViewOpt4Lifnr
						},{
							text : '未答交供应商',
							scope : this,
							iconCls : 'icon-application_lightning',
							handler : this.onViewNoAnswer
						}]
						
						
					},'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：双击记录可查看计算结果&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}],
			selModel : selModel,
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'title',
						header : '标题'
					},{
						dataIndex : 'fullname',
						header : '创建人'
					},{
						dataIndex : 'createtime',
						header : '创建时间'		
					}
					,{
						dataIndex : 'confirmname',
						header : '确认状态'		
					}
					,{
						dataIndex : 'archivename',
						header : '归档状态'		
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryHead.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'title'
						}, {
							name : 'fullname'
						}, {
							name : 'confirmname'
						}, {
							name : 'archivename'
						}, {
							name : 'confirm'
						}, {
							name : 'archive'
						}, {
							name : 'pkid'
						}, {
							name : 'createtime'
						}]
			})
		});
	}

	this.initViewWindow = function(){
		var _this = this;
		
		this.queryViewPanel = this.queryViewPanel || new Ext.fn.QueryPanel({
					height : 170,
					//width : 500,
					region : 'north',
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 计划查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/title',
								ref : '../mytitle',
								colspan:3,
								anchor : '33%',
								fieldLabel : '计划标题'
							},{
								xtype : 'textfield',
								name : 'condition/pmatnr',
								ref : '../pmatnr',
								anchor : '100%',
								fieldLabel : '车型物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/zcpcx',
								anchor : '100%',
								fieldLabel : '车型'
							},{
								xtype : 'textfield',
								name : 'condition/matnr',
								anchor : '100%',
								fieldLabel : '大件物料编码'
							},{
								xtype : 'textfield',
								name : 'condition/maktx',
								anchor : '100%',
								fieldLabel : '大件物料描述'
							},{
								xtype : 'textfield',
								name : 'condition/lifnr',
								anchor : '100%',
								fieldLabel : '供应商编码'
							},{
								xtype : 'textfield',
								name : 'condition/name1',
								anchor : '100%',
								fieldLabel : '供应商'
							}, {
								fieldLabel : '答交总数为0',
								xtype : 'checkbox',
								name : 'condition/answerzero',
								anchor : '100%'
							}, {
								fieldLabel : '有答交欠量',
								//boxLabel : '有答交欠量',
								//colspan : 1,
								xtype : 'checkbox',
								name : 'condition/isunderamount',
								anchor : '100%'
							},{
								xtype : 'hidden',
								name : 'condition/relationid',
								ref : '../relationid2'
							},{
								xtype : 'hidden',
								name : 'condition/line',
								ref : '../line'
							}]
				});
		
		this.queryViewPanel.restButton.hide();
		
		this.queryViewPanel.addButton({
					text : "重置",
					iconCls : "icon-application_reset",
					scope : this,
					handler : this.onResetViewPanel
				});
				
		var selModel = new Ext.grid.CheckboxSelectionModel({
					header : ''//,
					//singleSelect : true
				});
		this.listViewPanel = this.listViewPanel || new Ext.fn.ListPanel({
			title : '【 计划列表 】',
			stripeRows : true,
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '合并计算',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onMerge
					},{
						text : '取消合并',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCancelMerge
					},'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：标红的数据行为关联计算的数据&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}],
			selModel : selModel,
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				//forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'title',
						header : '计划'
					},{
						dataIndex : 'line',
						header : '产品线'		
					},{
						dataIndex : 'matnr',
						header : '大件物料编码',
						renderer : function(v, m, r, i) {
							var stand = r.get("stand");
							if (!Ext.isEmpty(stand)) {
								return "<span style='color:red'>"
										+ v + "</span>";
							} else {
								return v;
							}
						}
					},{
						dataIndex : 'maktx',
						header : '大件物料描述'		
					},{
						dataIndex : 'pmatnr',
						header : '车型物料编码'
					},{
						dataIndex : 'zcpcx',
						header : '车型'
					},{
						dataIndex : 'carno',
						header : '车号'
					},{
						dataIndex : 'lifnr',
						header : '供应商编码'
					},{
						dataIndex : 'name1',
						header : '供应商'
					}
//					, {
//						dataIndex : 'confirmname',
//						header : '确认状态'
//					}
					, {
						dataIndex : 'archivename',
						header : '归档状态'
					}, {
						dataIndex : 'underamount',
						header : '欠量'
					}, {
						dataIndex : 'plansum',
						header : '计划总数'
					},{
						dataIndex : 'answers',
						header : '答交总数'
					},{
						dataIndex : 'underamount2',
						header : '答交欠量'
					}, {
						dataIndex : 'stock',
						header : '库存数'
					},{
						dataIndex : 'date1',
						header : '日期'
					},{
						dataIndex : 'plan1',
						header : '计划数'
					},{
						dataIndex : 'answer1',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan1"));
						}
					},{
						dataIndex : 'date2',
						header : '日期'
					},{
						dataIndex : 'plan2',
						header : '计划数'
					},{
						dataIndex : 'answer2',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan2"));
						}
					},{
						dataIndex : 'date3',
						header : '日期'
					},{
						dataIndex : 'plan3',
						header : '计划数'
					},{
						dataIndex : 'answer3',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan3"));
						}
					},{
						dataIndex : 'date4',
						header : '日期'
					},{
						dataIndex : 'plan4',
						header : '计划数'
					},{
						dataIndex : 'answer4',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan4"));
						}
					},{
						dataIndex : 'date5',
						header : '日期'
					},{
						dataIndex : 'plan5',
						header : '计划数'
					},{
						dataIndex : 'answer5',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan5"));
						}
					},{
						dataIndex : 'date6',
						header : '日期'
					},{
						dataIndex : 'plan6',
						header : '计划数'
					},{
						dataIndex : 'answer6',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan6"));
						}
					},{
						dataIndex : 'date7',
						header : '日期'
					},{
						dataIndex : 'plan7',
						header : '计划数'
					},{
						dataIndex : 'answer7',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan7"));
						}
					},{
						dataIndex : 'date8',
						header : '日期'
					},{
						dataIndex : 'plan8',
						header : '计划数'
					},{
						dataIndex : 'answer8',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan8"));
						}
					},{
						dataIndex : 'date9',
						header : '日期'
					},{
						dataIndex : 'plan9',
						header : '计划数'
					},{
						dataIndex : 'answer9',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan9"));
						}
					},{
						dataIndex : 'date10',
						header : '日期'
					},{
						dataIndex : 'plan10',
						header : '计划数'
					},{
						dataIndex : 'answer10',
						header : '答交数',
						renderer : function(v, m, r, i) {
							return _this.onRenderAnswer(v,r.get("plan10"));
						}
					},{
						dataIndex : 'remark',
						header : '说明'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryPlanlist.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						fields : [{
									name : 'pkid'
								}
//								, {
//									name : 'createby'
//								}, {
//									name : 'createbyname'
//								}
//								, {
//									name : 'createtime'
//								}, {
//									name : 'modifyby'
//								}, {
//									name : 'modifybyname'
//								}, {
//									name : 'modifytime'
//								}, {
//									name : 'remark'
//								}, {
//									name : 'stand'
//								}
								, {
									name : 'pmatnr'
								}, {
									name : 'zcpcx'
								}, {
									name : 'matnr'
								}, {
									name : 'maktx'
								}, {
									name : 'lifnr'
								}, {
									name : 'name1'
								}, {
									name : 'stock'
								}, {
									name : 'carno'
								}, {
									name : 'underamount'
								}, {
									name : 'date1'
								}, {
									name : 'plan1'
								}, {
									name : 'answer1'
								}, {
									name : 'date2'
								}, {
									name : 'plan2'
								}, {
									name : 'answer2'
								}, {
									name : 'date3'
								}, {
									name : 'plan3'
								}, {
									name : 'answer3'
								}, {
									name : 'date4'
								}, {
									name : 'plan4'
								}, {
									name : 'answer4'
								}, {
									name : 'date5'
								}, {
									name : 'plan5'
								}, {
									name : 'answer5'
								}, {
									name : 'date6'
								}, {
									name : 'plan6'
								}, {
									name : 'answer6'
								}, {
									name : 'date7'
								}, {
									name : 'plan7'
								}, {
									name : 'answer7'
								}, {
									name : 'date8'
								}, {
									name : 'plan8'
								}, {
									name : 'answer8'
								}, {
									name : 'date9'
								}, {
									name : 'plan9'
								}, {
									name : 'answer9'
								}, {
									name : 'date10'
								}, {
									name : 'plan10'
								}, {
									name : 'answer10'
								}, {
									name : 'relationid'
								}, {
									name : 'plansum'
								}, {
									name : 'confirm'
								}, {
									name : 'archive'
								}, {
									name : 'confirmname'
								}, {
									name : 'archivename'
								}, {
									name : 'title'
								}, {
									name : 'remark'
								}, {
									name : 'answers'
								}, {
									name : 'underamount2'
								}, {
									name : 'stand'
								}, {
									name : 'line'
								}]
					})
		});
		
		
		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
			title : '查看计划明细',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : true,
			modal:true,
			defaults:{autoScroll : true},
			layout : 'border',
			items : [this.queryViewPanel,this.listViewPanel]
		});
	}
	
	this.initResultWindow = function(){
		var _this = this;
		
		this.queryResultPanel = this.queryResultPanel || new Ext.fn.QueryPanel({
					height : 120,
					//width : 500,
					region : 'north',
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 计算结果查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/pmatnr',
								anchor : '100%',
								fieldLabel : '车型物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/zcpcx',
								anchor : '100%',
								fieldLabel : '车型'
							}, {
								xtype : 'textfield',
								name : 'condition/line',
								anchor : '100%',
								fieldLabel : '产品线'
							},{
								xtype : 'hidden',
								name : 'condition/relationid',
								ref : '../relationid'
							}]
				});
		
		this.queryResultPanel.restButton.hide();
		
		this.queryResultPanel.addButton({
					text : "重置",
					iconCls : "icon-application_reset",
					scope : this,
					handler : this.onResetResultPanel
				});
		
		var selModel = new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});
		this.listResultPanel = this.listResultPanel || new Ext.fn.ListPanel({
			title : '【 计算结果列表 】',
			stripeRows : true,
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '查看计划明细',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onDetail
					},'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：双击记录可查看计划明细&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}],
			selModel : selModel,
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				//forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'title',
						header : '计划'
					},{
						dataIndex : 'line',
						header : '产品线'
					},{
						dataIndex : 'pmatnr',
						header : '车型物料编码'
					},{
						dataIndex : 'zcpcx',
						header : '车型'
					},{
						dataIndex : 'carno',
						header : '车号'
					},{
						dataIndex : 'plansum',
						header : '计划总数'
					},{
						dataIndex : 'answers',
						header : '答交总数'
					},{
						dataIndex : 'underamount2',
						header : '答交欠量'
					},{
						dataIndex : 'date1',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan2',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer1',
						header : '总答交数'
					},{
						dataIndex : 'date2',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan2',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer2',
						header : '总答交数'
					},{
						dataIndex : 'date3',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan3',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer3',
						header : '总答交数'
					},{
						dataIndex : 'date4',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan4',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer4',
						header : '总答交数'
					},{
						dataIndex : 'date5',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan5',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer5',
						header : '总答交数'
					},{
						dataIndex : 'date6',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan6',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer6',
						header : '总答交数'
					},{
						dataIndex : 'date7',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan7',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer7',
						header : '总答交数'
					},{
						dataIndex : 'date8',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan8',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer8',
						header : '总答交数'
					},{
						dataIndex : 'date9',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan9',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer9',
						header : '总答交数'
					},{
						dataIndex : 'date10',
						header : '日期'
					}
					/*,{
						dataIndex : 'plan10',
						header : '计划数'
					}*/
					,{
						dataIndex : 'answer10',
						header : '总答交数'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryResult.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						fields : [{
									name : 'date1'
								}, {
									name : 'plan1'
								}, {
									name : 'answer1'
								}, {
									name : 'date2'
								}, {
									name : 'plan2'
								}, {
									name : 'answer2'
								}, {
									name : 'date3'
								}, {
									name : 'plan3'
								}, {
									name : 'answer3'
								}, {
									name : 'date4'
								}, {
									name : 'plan4'
								}, {
									name : 'answer4'
								}, {
									name : 'date5'
								}, {
									name : 'plan5'
								}, {
									name : 'answer5'
								}, {
									name : 'date6'
								}, {
									name : 'plan6'
								}, {
									name : 'answer6'
								}, {
									name : 'date7'
								}, {
									name : 'plan7'
								}, {
									name : 'answer7'
								}, {
									name : 'date8'
								}, {
									name : 'plan8'
								}, {
									name : 'answer8'
								}, {
									name : 'date9'
								}, {
									name : 'plan9'
								}, {
									name : 'answer9'
								}, {
									name : 'date10'
								}, {
									name : 'plan10'
								}, {
									name : 'answer10'
								}, {
									name : 'relationid'
								}, {
									name : 'pmatnr'
								}, {
									name : 'zcpcx'
								}, {
									name : 'title'
								}, {
									name : 'plansum'
								}, {
									name : 'answers'
								}, {
									name : 'underamount2'
								}, {
									name : 'line'
								}, {
									name : 'carno'
								}]
					})
		});
		
		
		this.resultWindow = this.resultWindow || new Ext.fn.ShowWindow({
			title : '查看计算结果',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : true,
			modal:true,
			defaults:{autoScroll : true},
			layout : 'border',
			items : [this.queryResultPanel,this.listResultPanel]
		});
	}

	this.initViewOptWindow = function(){
		var _this = this;
		/*var selModel = new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});*/
		this.listViewOptPanel = this.listViewOptPanel || new Ext.fn.ListPanel({
			title : '【 操作记录列表 】',
			stripeRows : true,
			//region : 'center',
			hsPage : true,
			/*tbar : [{
						text : '答交',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					},  '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onView
					},'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：双击记录可答交&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}],*/
			/*selModel : selModel,*/
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				//forceFit : true
			},
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), /*selModel,*/ {
						dataIndex : 'optname',
						header : '操作'
					},{
						dataIndex : 'fullname',
						header : '操作员'
					},{
						dataIndex : 'createtime',
						header : '操作时间'		
					},{
						dataIndex : 'content',
						header : '操作说明'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryOptlist.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						fields : [{
									name : 'pkid'
								}, {
									name : 'optname'
								}, {
									name : 'fullname'
								}, {
									name : 'createtime'
								}, {
									name : 'content'
								}, {
									name : 'relationid'
								}]
					})
		});
		
		
		this.viewOptWindow = this.viewOptWindow || new Ext.fn.ShowWindow({
			title : '查看操作记录',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : true,
			modal:true,
			defaults:{autoScroll : true},
			items : [this.listViewOptPanel]
		});
		
		this.viewOptWindow.addButton({
					text : "导出",
					iconCls : "icon-application_excel",
					scope : this,
					handler : this.onExportOpt
				});
	}
	
	this.initViewNoAnswerWindow = function(){
		var _this = this;
		/*var selModel = new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});*/
		this.listViewNoAnswerPanel = this.listViewNoAnswerPanel || new Ext.fn.ListPanel({
			title : '【 未答交供应商列表 】',
			stripeRows : true,
			//region : 'center',
			hsPage : true,
			/*tbar : [{
						text : '答交',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					},  '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onView
					},'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：双击记录可答交&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}],*/
			/*selModel : selModel,*/
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				//forceFit : true
			},
			autoExpandColumn : '2',
			columns : [new Ext.grid.RowNumberer(), /*selModel,*/ {
						dataIndex : 'lifnr',
						header : '供应商编码'
					},{
						dataIndex : 'name1',
						header : '供应商'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryNoAnswer.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						fields : [{
									name : 'lifnr'
								}, {
									name : 'name1'
								}]
					})
		});
		
		
		this.viewNoAnswerWindow = this.viewNoAnswerWindow || new Ext.fn.ShowWindow({
			title : '查看未答交供应商',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : true,
			modal:true,
			defaults:{autoScroll : true},
			items : [this.listViewNoAnswerPanel]
		});
	}
}