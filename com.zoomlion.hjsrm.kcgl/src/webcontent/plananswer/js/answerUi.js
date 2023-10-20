com.zoomlion.hjsrm.kcgl.AnswerMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		this.initViewWindow();
		
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'answermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}
	
	this.initQueryPanel = function() {
		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : !Ext.isEmpty(lifnr)?160:190,
					// width : 500,
					region : 'north',
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 计划查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/title',
								fieldLabel : '计划标题'
							},{
								xtype : 'textfield',
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							},{
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}, {
								xtype : 'textfield',
								name : 'condition/pmatnr',
								fieldLabel : '车型物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/zcpcx',
								fieldLabel : '车型'
							},{
								xtype : 'combobox',
								name : 'condition/archive',
								hiddenName : 'condition/archive',
								value : 'N',
								ref : '../archive',
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
							},{
								xtype : 'textfield',
								name : 'condition/lifnr',
								anchor : '100%',
								fieldLabel : '供应商编码',
								hidden:!Ext.isEmpty(lifnr)
							},{
								xtype : 'textfield',
								name : 'condition/name1',
								anchor : '100%',
								fieldLabel : '供应商',
								hidden:!Ext.isEmpty(lifnr)
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
							}]
				});

	}
	
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 计划列表 】',
			region : 'center',
			hsPage : true,
			tbar : [{
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
						header : '大件物料编码'
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
					},{
						dataIndex : 'date1',
						header : '日期'
					},{
						dataIndex : 'plan1',
						header : '计划数'
					},{
						dataIndex : 'answer1',
						header : '答交数'
					},{
						dataIndex : 'date2',
						header : '日期'
					},{
						dataIndex : 'plan2',
						header : '计划数'
					},{
						dataIndex : 'answer2',
						header : '答交数'
					},{
						dataIndex : 'date3',
						header : '日期'
					},{
						dataIndex : 'plan3',
						header : '计划数'
					},{
						dataIndex : 'answer3',
						header : '答交数'
					},{
						dataIndex : 'date4',
						header : '日期'
					},{
						dataIndex : 'plan4',
						header : '计划数'
					},{
						dataIndex : 'answer4',
						header : '答交数'
					},{
						dataIndex : 'date5',
						header : '日期'
					},{
						dataIndex : 'plan5',
						header : '计划数'
					},{
						dataIndex : 'answer5',
						header : '答交数'
					},{
						dataIndex : 'date6',
						header : '日期'
					},{
						dataIndex : 'plan6',
						header : '计划数'
					},{
						dataIndex : 'answer6',
						header : '答交数'
					},{
						dataIndex : 'date7',
						header : '日期'
					},{
						dataIndex : 'plan7',
						header : '计划数'
					},{
						dataIndex : 'answer7',
						header : '答交数'
					},{
						dataIndex : 'date8',
						header : '日期'
					},{
						dataIndex : 'plan8',
						header : '计划数'
					},{
						dataIndex : 'answer8',
						header : '答交数'
					},{
						dataIndex : 'date9',
						header : '日期'
					},{
						dataIndex : 'plan9',
						header : '计划数'
					},{
						dataIndex : 'answer9',
						header : '答交数'
					},{
						dataIndex : 'date10',
						header : '日期'
					},{
						dataIndex : 'plan10',
						header : '计划数'
					},{
						dataIndex : 'answer10',
						header : '答交数'
					},{
						dataIndex : 'remark',
						width:300,
						header : '说明'
					},{
						header : '操作员',
						width:150,
						dataIndex : 'operator',
						renderer : function(v, m, r, i) {
							var createby = r.data['createby'];
							var modifyby = r.data['modifyby'];
							var createbyname = r.data['createbyname'];
							var modifybyname = r.data['modifybyname'];
							return Ext.isEmpty(modifyby)?createbyname + '(' + createby + ')':modifybyname + '(' + modifyby + ')';
						}
					},{
						header : '操作时间',
						width:150,
						dataIndex : 'operatertime',
						renderer : function(v, m, r, i) {
							var createtime = r.data['createtime'];
							var modifytime = r.data['modifytime'];
							
							return Ext.isEmpty(modifytime)?createtime:modifytime ;
						}
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryPlanlist4Lifnr.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						fields : [{
									name : 'pkid'
								}
								, {
									name : 'createby'
								}, {
									name : 'createbyname'
								}
								, {
									name : 'createtime'
								}, {
									name : 'modifyby'
								}, {
									name : 'modifybyname'
								}, {
									name : 'modifytime'
								}, {
									name : 'remark'
								}, {
									name : 'stand'
								}
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
									name : 'line'
								}]
					})
		});
	}
	
	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '计划答交',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			modal:true,
			items : [{
				xtype : 'editpanel',
				//ref:'../../../editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.loadPlanList.biz.ext',
				saveUrl : Ext.isEmpty(lifnr)?'com.zoomlion.hjsrm.kcgl.stockmanage.updatePlanList2.biz.ext':'com.zoomlion.hjsrm.kcgl.stockmanage.updatePlanList.biz.ext',
				fields : [{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						dataIndex : 'title',
						//name : 'plan/pmatnr',
						fieldLabel : '计划'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						dataIndex : 'pmatnr',
						//name : 'plan/pmatnr',
						fieldLabel : '车型物料'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						dataIndex : 'zcpcx',
						//name : 'plan/zcpcx',
						fieldLabel : '车型'
					}, {
						xtype : 'textfield',
						anchor : '100%',
						dataIndex : 'matnr',
						name:'plan/matnr',
						readOnly:true,
						fieldLabel : '大件物料'
					}, {
						xtype : 'textfield',
						anchor : '100%',
						dataIndex : 'maktx',
						
						readOnly:true,
						fieldLabel : '大件物料描述'
					}, {
						xtype : 'textfield',
						anchor : '100%',
						dataIndex : 'carno',
						readOnly:true,
						fieldLabel : '车号'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'underamount',
						readOnly:true,
						fieldLabel : '欠量'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plansum',
						readOnly:true,
						fieldLabel : '计划总数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'stock',
						name:'plan/stock',
						allowBlank : false,
						fieldLabel : '库存数'
					},{
						xtype : 'displayfield',
						anchor : '100%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '100%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '100%',
						value :'&nbsp;'
						
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date1'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan1',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer1',
						name:'plan/answer1',
						allowBlank : false,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date2'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan2',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer2',
						allowBlank : false,
						name:'plan/answer2',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date3'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan3',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer3',
						allowBlank : false,
						name:'plan/answer3',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date4'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan4',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer4',
						allowBlank : false,
						name:'plan/answer4',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date5'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan5',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer5',
						allowBlank : false,
						name:'plan/answer5',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date6'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan6',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer6',
						allowBlank : false,
						name:'plan/answer6',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date7'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan7',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer7',
						allowBlank : false,
						name:'plan/answer7',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date8'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan8',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer8',
						allowBlank : false,
						name:'plan/answer8',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date9'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan9',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer9',
						allowBlank : false,
						name:'plan/answer9',
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date10'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan10',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer10',
						allowBlank : false,
						name:'plan/answer10',
						fieldLabel : '答交数'
					}, {
						xtype : 'textarea',
						height : '50',
						name : 'plan/remark',
						dataIndex : 'remark',
						colspan : '3',
						fieldLabel : '说明'
					}, {
						xtype : 'hidden',
						name : 'plan/pkid',
						dataIndex : 'pkid'
					}, {
						xtype : 'hidden',
						name : 'plan/relationid',
						dataIndex : 'relationid'
					}]
			}]

		});
	}
	
	
	this.initViewWindow = function() {
		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
			title : '查阅计划',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			modal:true,
			defaults:{autoScroll : true},
			items : [{
				xtype : 'viewpanel',
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.loadPlanList.biz.ext',
				fields : [{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						dataIndex : 'title',
						//name : 'plan/pmatnr',
						fieldLabel : '计划'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						dataIndex : 'pmatnr',
						//name : 'plan/pmatnr',
						fieldLabel : '车型物料'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						dataIndex : 'zcpcx',
						//name : 'plan/zcpcx',
						fieldLabel : '车型'
					}, {
						xtype : 'textfield',
						anchor : '100%',
						dataIndex : 'matnr',
						readOnly:true,
						fieldLabel : '大件物料'
					}, {
						xtype : 'textfield',
						anchor : '100%',
						dataIndex : 'maktx',
						readOnly:true,
						fieldLabel : '大件物料描述'
					}, {
						xtype : 'textfield',
						anchor : '100%',
						dataIndex : 'carno',
						readOnly:true,
						fieldLabel : '车号'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'underamount',
						readOnly:true,
						fieldLabel : '欠量'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plansum',
						readOnly:true,
						fieldLabel : '计划总数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'stock',
						readOnly:true,
						fieldLabel : '库存数'
					},{
						xtype : 'displayfield',
						anchor : '100%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '100%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '100%',
						value :'&nbsp;'
						
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date1'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan1',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer1',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date2'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan2',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer2',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date3'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan3',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer3',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date4'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan4',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer4',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date5'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan5',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer5',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date6'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan6',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer6',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date7'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan7',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer7',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date8'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan8',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer8',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date9'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan9',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer9',
						readOnly:true,
						fieldLabel : '答交数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '100%',
						fieldLabel : '日期',
						dataIndex : 'date10'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'plan10',
						readOnly:true,
						fieldLabel : '计划数'
					}, {
						xtype : 'numberfield',
						anchor : '100%',
						dataIndex : 'answer10',
						readOnly:true,
						fieldLabel : '答交数'
					}, {
						xtype : 'textarea',
						readOnly:true,
						height : '50',
						dataIndex : 'remark',
						colspan : '3',
						fieldLabel : '说明'
					}, {
						xtype : 'hidden',
						name : 'plan/pkid',
						dataIndex : 'pkid'
					}]
			}]
			
			
			});
		}
}