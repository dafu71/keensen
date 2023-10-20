com.zoomlion.hjsrm.kcgl.PlanlistMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initChooseHeadWindow();
		this.initChoosePmatnrWindow();
		this.initEditWindow();
		this.initInputWindow();
		this.initViewWindow();
	}
	
	this.initQueryPanel = function() {
		var _this = this;

		this.trigger = new Ext.form.TriggerField({
					fieldLabel : '计划标题',
					//readOnly : true,
					editable:false,
					hideTrigger : false,
					scope : this,
					onTriggerClick : function() {
						_this.onChooseHeadWindowShow();						
					}
				});
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 160,
					// width : 500,
					region : 'north',
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 选择计划 】',
					fields : [this.trigger,{
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
							}, {
								xtype : 'textarea',
								height : '50',
								ref:'../lifnr2',
								name : 'condition/lifnr2',
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
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
							}, {
								xtype : 'hidden',
								ref : '../relationid',
								name : 'condition/relationid'
							}]
				});

	}

	this.initListPanel = function() {		
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					header : ''
					//singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 计划列表 】',
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
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
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_lightning',
						handler : this.onView
					},'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：双击记录可修改&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.deletePlanList.biz.ext',
			viewConfig : {
				//forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'line',
						header : '产品线'
					}, {
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
					}, {
						dataIndex : 'confirmname',
						header : '确认状态'
					}, {
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
									name : 'plansum'
								}, {
									name : 'underamount2'
								}, {
									name : 'answers'
								}, {
									name : 'line'
								}]
					})
		});
	}
	
	this.initChooseHeadWindow = function() {
		this.queryHeadPanel = new Ext.fn.QueryPanel({
					height : 160,
					// width : 500,
					region : 'north',
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 计划查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/title',
								anchor : '70%',
								fieldLabel : '计划标题'
							}, {
								xtype : "dateregion",
								anchor : '70%',
								// width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createendate'],
								fieldLabel : "创建日期",
								format : "Y-m-d"
							},{
								xtype : 'combobox',
								name : 'condition/confirm',
								hiddenName : 'condition/confirm',
								fieldLabel : '是否确认',
								anchor : '70%',
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
								value : 'N',
								anchor : '70%',
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

		var selModel = new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});
		this.listHeadPanel = new Ext.fn.ListPanel({
			title : '【 计划列表 】',
			region : 'center',
			hsPage : true,
			tbar : [
					'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：双击记录可选择&nbsp;&nbsp;&nbsp;&nbsp;</font>'
					
					}],
			selModel : selModel,
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'title',
						header : '标题'
					}, {
						dataIndex : 'fullname',
						header : '创建人'
					}, {
						dataIndex : 'createtime',
						header : '创建时间'
					}, {
						dataIndex : 'confirmname',
						header : '确认状态'
					}, {
						dataIndex : 'archivename',
						header : '归档状态'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryHead.biz.ext',
						root : 'data',
						autoLoad : false,
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

		this.chooseHeadPanel = new Ext.Panel({
					//title : "计划查询",
					height : 550,
					width : 790,
					layout : 'border',
					items : [this.queryHeadPanel, this.listHeadPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onChoose
							}, {
								text : "取消",
								scope : this,
								handler : function() {
									this.chooseHeadWindow.hide();
								}
							}]
				})

		this.chooseHeadWindow = this.chooseHeadWindow || new Ext.Window({
					title : '选择计划',
					height : 600,
					width : 800,
					layout : 'fit',
					resizable : true,// 窗口边框和托动大小
					minimizable : false,// 设置窗口不能最小化
					maximizable : true,// 设置窗口能最大化
					modal : true,
					items : [this.chooseHeadPanel]
				});
	}
	
	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '计划修改',
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
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.loadPlanList.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.updatePlanList.biz.ext',
				fields : [{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						dataIndex : 'pmatnr',
						//name : 'plan/pmatnr',
						fieldLabel : '车型物料'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						dataIndex : 'zcpcx',
						//name : 'plan/zcpcx',
						fieldLabel : '车型'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'matnr',
						allowBlank : false,
						name : 'plan/matnr',
						fieldLabel : '大件物料'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'maktx',
						allowBlank : false,
						name : 'plan/maktx',
						fieldLabel : '大件物料描述'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'lifnr',
						allowBlank : false,
						name : 'plan/lifnr',
						fieldLabel : '供应商编码'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'name1',
						allowBlank : false,
						name : 'plan/name1',
						fieldLabel : '供应商'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'carno',
						//allowBlank : false,
						name : 'plan/carno',
						fieldLabel : '车号'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'underamount',
						//allowBlank : false,
						name : 'plan/underamount',
						fieldLabel : '欠量'
					}, {
						xtype : 'numberfield',
						ref:'../../plansum',
						anchor : '80%',
						dataIndex : 'plansum',
						//allowBlank : false,
						name : 'plan/plansum',
						fieldLabel : '计划总数'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'line',
						//allowBlank : false,
						name : 'plan/line',
						fieldLabel : '产品线'
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date1'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan1',
						allowBlank : false,
						name : 'plan/plan1',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date2'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan2',
						allowBlank : false,
						name : 'plan/plan2',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date3'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan3',
						allowBlank : false,
						name : 'plan/plan3',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date4'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan4',
						allowBlank : false,
						name : 'plan/plan4',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date5'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan5',
						allowBlank : false,
						name : 'plan/plan5',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date6'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan6',
						allowBlank : false,
						name : 'plan/plan6',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date7'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan7',
						allowBlank : false,
						name : 'plan/plan7',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date8'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan8',
						allowBlank : false,
						name : 'plan/plan8',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date9'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan9',
						allowBlank : false,
						name : 'plan/plan9',
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date10'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan10',
						allowBlank : false,
						name : 'plan/plan10',
						fieldLabel : '计划数'
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
	
	this.initChoosePmatnrWindow = function(){
		this.queryPmatnrPanel = this.queryPmatnrPanel || new Ext.fn.QueryPanel({
					height : 120,
					//width : 500,
					region : 'north',
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 车型物料查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/zcpcx',
								fieldLabel : '车型'
							},{
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}]
				});
				
		var selModel = new Ext.grid.CheckboxSelectionModel(
				{   header : '',
					singleSelect : true});
		this.listPmatnrPanel = this.listPmatnrPanel || new Ext.fn.ListPanel({
			title : '【 车型物料列表 】',
			region : 'center',
			hsPage : true,
			selModel : selModel,
			delUrl : 'aaa.biz.ext',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'matnr',
						header : '物料编码'
					},{
						dataIndex : 'zcpcx',
						header : '车型'
					},{
						dataIndex : 'maktx',
						header : '物料描述'		
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryWhole.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'matnr'
						}, {
							name : 'zcpcx'
						}, {
							name : 'maktx'
						}]
			})
		});
		
		this.choosePmatnrPanel = new Ext.Panel({
					//title : "计划查询",
					height : 550,
					width : 790,
					layout : 'border',
					items : [this.queryPmatnrPanel, this.listPmatnrPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onPmatnrChoose
							}, {
								text : "取消",
								scope : this,
								handler : function() {
									this.choosePmatnrWindow.hide();
								}
							}]
				})

		this.choosePmatnrWindow = this.choosePmatnrdWindow || new Ext.Window({
					title : '选择车型物料',
					height : 600,
					width : 800,
					layout : 'fit',
					resizable : true,// 窗口边框和托动大小
					minimizable : false,// 设置窗口不能最小化
					maximizable : true,// 设置窗口能最大化
					modal : true,
					items : [this.choosePmatnrPanel]
				});
	}
	
	this.initInputWindow = function() {
		var _this = this;
		this.trigger4pmatnr = new Ext.form.TriggerField({
					fieldLabel : '车型物料',
					name : 'plan/pmatnr',
					anchor : '80%',
					editable:false,
					hideTrigger : false,
					allowBlank : false,
					scope : this,
					onTriggerClick : function() {
						_this.choosePmatnrWindow.show();
					}
				});
				
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增计划',
			height : 600,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			modal:true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.addPlanList.biz.ext',
				fields : [this.trigger4pmatnr,{
						xtype : 'textfield',
						readOnly:true,
						allowBlank : false,
						anchor : '80%',
						name : 'plan/zcpcx',
						ref:'../../zcpcx',
						fieldLabel : '车型'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						allowBlank : false,
						name : 'plan/matnr',
						fieldLabel : '大件物料'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						allowBlank : false,
						name : 'plan/maktx',
						fieldLabel : '大件物料描述'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						allowBlank : false,
						name : 'plan/lifnr',
						fieldLabel : '供应商编码'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						allowBlank : false,
						name : 'plan/name1',
						fieldLabel : '供应商'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						//allowBlank : false,
						ref:'../../carno',
						name : 'plan/carno',
						fieldLabel : '车号'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						name : 'plan/underamount',
						ref:'../../underamount',
						value : 0,
						fieldLabel : '欠量'
					}, {
						xtype : 'numberfield',
						name : 'plan/plansum',
						anchor : '80%',
						ref:'../../plansum',
						value : 0,
						fieldLabel : '计划总数'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						//allowBlank : false,
						ref:'../../line',
						name : 'plan/line',
						fieldLabel : '产品线'
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date1',
						name : 'plan/date1'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan1',
						name : 'plan/plan1',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date2',
						name : 'plan/date2'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan2',
						name : 'plan/plan2',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date3',
						name : 'plan/date3'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan3',
						name : 'plan/plan3',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date4',
						name : 'plan/date4'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan4',
						name : 'plan/plan4',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date5',
						name : 'plan/date5'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan5',
						name : 'plan/plan5',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date6',
						name : 'plan/date6'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan6',
						name : 'plan/plan6',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date7',
						name : 'plan/date7'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan7',
						name : 'plan/plan7',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date8',
						name : 'plan/date8'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan8',
						name : 'plan/plan8',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date9',
						name : 'plan/date9'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan9',
						name : 'plan/plan9',
						value : 0,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						anchor : '80%',
						fieldLabel : '日期',
						allowBlank : false,
						ref : '../../date10',
						name : 'plan/date10'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						allowBlank : false,
						ref : '../../plan10',
						name : 'plan/plan10',
						value : 0,
						fieldLabel : '计划数'
					}, {
						xtype : 'hidden',
						name : 'plan/relationid',
						ref : '../../relationid'
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
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.loadPlanList.biz.ext',
				fields : [{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						dataIndex : 'pmatnr',
						//name : 'plan/pmatnr',
						fieldLabel : '车型物料'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						dataIndex : 'zcpcx',
						//name : 'plan/zcpcx',
						fieldLabel : '车型'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'matnr',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '大件物料'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'maktx',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '大件物料描述'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'lifnr',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '供应商编码'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'name1',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '供应商'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'carno',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '车号'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'underamount',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '欠量'
					}, {
						xtype : 'numberfield',
						//colspan : 2,
						anchor : '80%',
						dataIndex : 'plansum',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划总数'
					}, {
						xtype : 'textfield',
						anchor : '80%',
						dataIndex : 'line',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '产品线'
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'displayfield',
						anchor : '80%',
						value :'&nbsp;'
						
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date1'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan1',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date2'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan2',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date3'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan3',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date4'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan4',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date5'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan5',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date6'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan6',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date7'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan7',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date8'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan8',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date9'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan9',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					},{
						xtype : 'textfield',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						anchor : '80%',
						fieldLabel : '日期',
						dataIndex : 'date10'
					}, {
						xtype : 'numberfield',
						anchor : '80%',
						dataIndex : 'plan10',
						style : 'padding-top:3px;padding-left:10px;',
						readOnly:true,
						fieldLabel : '计划数'
					}]
			}]
			
			
			});
		}
}