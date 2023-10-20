/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 技术通知管理 创建日期： 2014-12-15 补丁编号： G3_P_20141215_20001_249 作 者：
 * 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 王富强 2014-12-18 集团
//
// =================================================================
/*******************************************************************************
 * 版权所有： 描 述： 技术通知管理UI界面 创建日期：2014/12/17 作 者： 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// 
// =================================================================
/**
 * 技术通知管理，查询
 */
com.zoomlion.hjsrm.techNotice.QueryMgr = function() {

	this.initPanel = function() {		
		this.initQueryPanel();
		this.initListPanel();
        this.initListActionPanel();
		var addTechNotice = new com.zoomlion.hjsrm.techNotice.AddTechNoicetMgr();// 新增技术通知
		this.initViewTechNoitceWindow();
		addTechNotice.initPanel();
		addTechNotice.initEvent();

		this.inputWindow = addTechNotice.inputWindow;
		this.operatorListPanel = addTechNotice.operatorListPanel;
		this.addTechNoticePanel = addTechNotice.addTechNoticePanel;
		this.storePerson = addTechNotice.storePerson;

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'queryMgr',
					panels : [this.queryPanel, this.listPanel]
				});

	};

	/**
	 * 查询条件
	 */
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 4,
					border : true,
					labelWidth :70,
					title : '工单综合查询',
					fields : [{
								name : 'query/deptid',
								fieldLabel : '机构ID',
								hidden : true
							}, {
								xtype : 'textfield',
								name : 'query/noticeid',
								fieldLabel : '编号',
								anchor : "100%",
								labelWidth :58								
							}, {
								xtype : 'textfield',
								name : 'query/noticetitle',
								fieldLabel : '标题',
								anchor : "100%",
								width : 100
							}, {
								xtype : 'dictcombobox',
								hiddenName : 'query/processstatus',
								fieldLabel : '流程状态',
								labelWidth :90,
								anchor : "90%",
								dictData : TECH_PROCESS_STATUS
							}, {
								xtype : 'textfield',
								name : 'query/weavepersonname',
								width : 80,
								anchor : "80%",
								fieldLabel : '发起人'
							}, {
								xtype : "dateregion",								
								anchor : "100%",
								nameArray : ['query/appstarttime',
										'query/appendtime'],
								fieldLabel : "发起时间",
								labelWidth :58,
								format : "Y-m-d"
							}, {
								xtype : 'orgtreecombo',
								fieldLabel : '发起部门',
								valueField : 'orgid',
								dataIndex : 'org',
								displayField : 'orgname',
								queryType : 'dataorg',
								hiddenName : 'orgid',
								name : 'orgid',
								listeners : {
									scope : this,
									'getselectnode' : function(tree, node) {
										var orgfield = this.queryPanel.form
												.findField('query/deptid');
										orgfield
												.setValue(node.attributes['orgid']);
									}
								}
							}, {
								xtype : 'dictcombobox',
								hiddenName : 'query/productType',
								fieldLabel : '产品类别',
								anchor : "90%",
								dictData : TECH_PRODUCT_TYPE
							}]
				});
	}

	/**
	 * 数据列表
	 */
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			id : listId,
			title : '工单列表',
			hsPage : true,
			selModel : selModel,
			delUrl : '...',
			autoExpandColumn : '4',
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onAdd
					}],
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'noticeid',
						header : '编号',
						width:130,
						sortable : false
					}, {
						dataIndex : 'deptname',
						width : 150,
						header : '发起部门'
					}, {
						dataIndex : 'noticetitle',
						header : '标题'
					}, {
						dataIndex : 'producttype',
						header : '产品类别'
					}, {
						dataIndex : 'weavepersonname',
						header : '发起人'
					}, {
						dataIndex : 'applicationtime',
						width : 135,
						header : '发起时间'
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'processstatus',
						header : '流程状态',
						width : 80,
						dictData : TECH_PROCESS_STATUS
					}, {
						header : '操作',
						width : 80,
						scope : this,
						renderer : function(v, m, r, i) {
							var id = r.get('noticeid');
							var str = "<a href='javascript:showNoticeDetail("
									+ Ext.encode(listId) + "," + i + ");'>"
									+ "查看</a>";								
									if(userId==r.get('weavepersonid')){										
										var processstatus = r.get('processstatus');									
										if(processstatus!='结束' && processstatus!='终止'){
											str+= "&nbsp;&nbsp;<a href='javascript:stopNotice("
											+ Ext.encode(listId) + "," + i + ");'>"
											+ "终止</a>";
										}	
									}															
							return str;
						}
					}, {
						header : '日志',
						width : 60,
						scope : this,
						renderer : function(v, m, r, i) {
							return "<img alt='流程日志' src='srmclient/working/img/chart_organisation.png' onclick='showHistory("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>&nbsp;&nbsp;<img alt='流程图' src='srmclient/working/img/color_wheel.png' onclick='showProcessGraph("
									+ Ext.encode(listId)
									+ ","
									+ i
									+ ")'; style='cursor:pointer'>";
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.techNotice.noticeMgr.queryTechNoticeList.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'noticeid'
						}, {
							name : 'weavepersonid'
						}, {
							name : 'deptname'
						}, {
							name : 'noticetitle'
						}, {
							name : 'producttype'
						}, {
							name : 'weavepersonname'
						}, {
							name : 'applicationtime'
						}, {
							name : 'processstatus'
						}, {
							name : 'processinstid'
						}, {
							name : 'rootprocinstid'
						}]
			})
		});
	}

	/**
	 * 技术通知新增表单
	 */
	this.initViewTechNoitceWindow = function() {
		this.veattachId = Ext.id();
		this.viewTechNoitceWindow = this.viewTechNoitceWindow
				|| new Ext.Window({
					columns : 2,
					autoScroll : true,
					collapsible : true,
					maximizable : true,
					constrain : true,
					modal : true,
					padding : 1,
					buttonAlign : "center",
					layout : "fit",			
					id : 'noticeIndexShow',
					saveUrl : '...',
					width : 880,
					height : 580,
					title : '技术通知信息',
					border : true,
					buttons : [{
						text : "关闭",
						scope : this,
						handler : this.onClose
					}],
					items : [{
						xtype : 'viewpanel',
						columns : 2,
						autoScroll : true,
						baseCls : "x-plain",
						loadUrl : 'com.zoomlion.hjsrm.techNotice.noticeMgr.getTechNotice.biz.ext',
						fields : [{
									name : 'noticeid',
									dataIndex : 'noticeid',
									fieldLabel : '编号',
									anchor : '50%',									
									xtype : 'displayfield',
									style : 'padding-top:3px;padding-left:10px;',
									allowBlank : false,
									readOnly : true,
									colspan : 2
								}, {
									name : 'weavepersonname',
									dataIndex : 'weavepersonname',
									style : 'padding-top:3px;padding-left:10px;',									
									fieldLabel : '编制人',
									anchor : '90%',
									readOnly : true,
									xtype : 'displayfield',
									allowBlank : false,
									colspan : 1
								}, {
									name : 'deptname',
									dataIndex : 'deptname',
									fieldLabel : '所属部门',
									style : 'padding-top:3px;padding-left:10px;',									
									readOnly : true,
									anchor : '90%',
									xtype : 'displayfield',
									allowBlank : false,
									colspan : 1
								}, {
									xtype : 'displayfield',
									name : 'applicationtime',
									style : 'padding-top:3px;padding-left:10px;',
									fieldLabel : '申请时间',
									dataIndex : 'applicationtime',
									anchor : '90%',
									allowBlank : false,
									readOnly : true,
									colspan : 1

								}, {
									xtype : 'radiogroup',
									name : 'productType',
									anchor : '100%',
									style : 'padding-top:3px;padding-left:10px;',
									colspan : 1,
									disabled : true,
									fieldLabel : '产品类别',
									items : [{
												boxLabel : '扫路设备',
												name : 'productType',
												inputValue : 1												
											}, {
												boxLabel : '清洗设备',
												name : 'productType',
												inputValue : 2
											}, {
												boxLabel : '垃圾设备',
												name : 'productType',
												inputValue : 3
											}, {
												boxLabel : '其他',
												name : 'productType',
												inputValue : 4
											}]
								}, {
									xtype : 'displayfield',
									name : 'productModel',
									style : 'padding-top:3px;padding-left:10px;',
									fieldLabel : '产品型号',
									allowBlank : false,
									readOnly : true,
									dataIndex : 'PRODUCT_MODEL',
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'radiogroup',
									name : 'noticeType',
									style : 'padding-top:3px;padding-left:10px;',
									anchor : '65%',
									disabled : true,
									colspan : 1,
									fieldLabel : '通知类型',
									items : [{
												boxLabel : '整改',
												name : 'noticeType',
												inputValue : 1												
											}, {
												boxLabel : '试验',
												name : 'noticeType',
												inputValue : 2
											}, {
												boxLabel : '其他',
												name : 'noticeType',
												inputValue : 3
											}]
								}, {
									xtype : 'radiogroup',
									name : 'levels',
									anchor : '50%',
									disabled : true,
									style : 'padding-top:3px;padding-left:10px;',
									colspan : 2,
									fieldLabel : '重要度级别',
									items : [{
												boxLabel : '一般级',
												name : 'levels',
												inputValue : 1												
											}, {
												boxLabel : '重要级',
												name : 'levels',
												inputValue : 2
											}, {
												boxLabel : '关键级',
												name : 'levels',
												inputValue : 3
											}]
								}, {
									xtype : 'displayfield',
									name : 'noticetitle',
									fieldLabel : '标题',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'noticetitle',
									allowBlank : false,
									anchor : '90%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									name : 'noticeText',
									fieldLabel : '正文',
									dataIndex : 'noticeText',
									style : 'padding-top:3px;padding-left:10px;',
									allowBlank : false,
									anchor : '90%',
									maxLength : 1000,
									height : 60,
									colspan : 2
								}, {
									isUploaded : false,
									xtype : 'attachmentlist',
									name : 'attachlist',
									id : "noticeattachfile",
									style : 'padding-top:3px;padding-left:10px;',
									postParams : {
										relationId : 0,
										groupId : 'technotice'
									},
									isDownload : true,
									fieldLabel : '附件列表',
									title : '附件列表',
									itemId : 'attachmentlist'
								}, {
									xtype : 'dictcheckboxgroup',
									style : 'padding-top:3px;padding-left:10px;',									
									name : "sendDept",
									fieldLabel : '发送部门',
									dictData : TECH_NOTICES_DEPTS,
									colspan : 2,
									disabled : true,
									columns : 8
								}, {
									xtype : 'displayfield',
									name : 'executePersonName',
									fieldLabel : '归档下发处理人',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'executePersonName',
									allowBlank : false,
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									name : 'executeTime',
									fieldLabel : '处理时间',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'executeTime',
									allowBlank : false,
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									name : 'executeText',
									fieldLabel : '处理意见',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'executeText',
									allowBlank : false,
									anchor : '90%',
									colspan : 2
								}, {
									xtype : 'displayfield',
									name : 'archivePersonName',
									fieldLabel : '归档处理人',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'archivePersonName',
									allowBlank : false,
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									name : 'archiveTime',
									fieldLabel : '归档时间',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'archiveTime',
									allowBlank : false,
									anchor : '90%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									name : 'archiveText',
									fieldLabel : '归档意见',
									style : 'padding-top:3px;padding-left:10px;',
									readOnly : true,
									dataIndex : 'archiveText',
									allowBlank : false,
									anchor : '90%',
									colspan : 2
								}, {
										fieldLabel : '说明',
										anchor : '100%',
										height:25,
										name : "techRemk",
										xtype : 'displayfield',																			
										readOnly:true,
										colspan : 2
									},this.listActionPanel]
					}]
				});
	};
	
	/**
	 * 技术通知中，流程处理信息
	 */
	this.initListActionPanel = function() {
		this.listActionPanel = new Ext.fn.ListPanel({
					title : '流程处理信息',
					autoHeight:true,
					hsPage : false,
					colspan : 2,
					id:"viewlistActionPanel",
					delUrl : '...',
					autoExpandColumn : '2',
					columns : [new Ext.grid.RowNumberer(),{
								header : "流程环节",								
								dataIndex : "itemsName"
							}, {
								header : "处理意见",								
								dataIndex : "actionsText"
							},{
								header : "处理人",								
								dataIndex : "actionsPersonName"
							},{
								header : "处理时间",	
								anchor : '100%',
								dataIndex : "actonsTime"
							}],
					store : this.storeAction					
				})
	};

	this.storeAction = this.storeAction || new Ext.data.JsonStore({
		url : 'com.zoomlion.hjsrm.techNotice.ComUtil.queryTechNoticeItems.biz.ext',
		root : 'data',		
		totalProperty : 'totalCount',
		baseParams : {
			"entity/processinstid" : ""
		},
		fields : [{
					name : 'itemsName'
				}, {
					name : 'actionsText'// 操作内容
				}, {
					name : 'actionsPersonName'// 登陆用户名
				}, {
					name : 'actonsTime'// 操作时间
				}]
	});
}