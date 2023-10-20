/*
 *  @author 刘鑫  供应商合理化建议
 */
com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'supplywtfkMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 180,
					width : 500,
					columns : 3,
					collapsible : true,
					titleCollapse : false,
					border : true,
					title : '【 供应商问题反馈查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/createname',
								fieldLabel : '提出人'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '供应商描述'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/wtlx',
								dataIndex : 'condition/wtlx',
								hiddenName : 'condition/wtlx',
								fieldLabel : '问题类别',
								emptyText : '',
								dictData : GE_SUPPLYWTFK_WTLB
							}, {
								xtype : 'textfield',
								name : 'condition/wtms',
								fieldLabel : '问题描述'
							}, {
								xtype : 'textfield',
								name : 'condition/recvusername',
								fieldLabel : '供管工程师'
							}, {
								xtype : 'textfield',
								name : 'condition/zrrname',
								fieldLabel : '责任人'
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/jhstartdate',
										'condition/jhendate'],
								fieldLabel : "计划解决时间",
								format : "Y-m-d"
							}, {
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/sjstartdate',
										'condition/sjendate'],
								fieldLabel : "实际解决时间",
								format : "Y-m-d"
							}, {
								xtype : 'dictcombobox',
								name : 'condition/clzt',
								dataIndex : 'condition/clzt',
								hiddenName : 'condition/clzt',
								fieldLabel : '处理状态',
								emptyText : '',
								dictData : GE_SUPPLYWTFK_CLZT
							}, {
								xtype : 'dictcombobox',
								name : 'condition/supqr',
								dataIndex : 'condition/supqr',
								hiddenName : 'condition/supqr',
								fieldLabel : '供应商确认',
								emptyText : '',
								dictData : GE_SUPPLYWTFK_SUPQR
							}, {
								xtype : 'textfield',
								name : 'condition/wtfkid',
								fieldLabel : '问题序列号'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 供应商问题反馈列表 】',
			hsPage : true,
			tbar : [{
						text : '提出问题',
						scope : this,
						rescode : '00446',
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '处理问题',
						scope : this,
						rescode : '00447',
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						rescode : '00448',
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '查看问题',
						scope : this,
					    rescode : '00449',
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : "导出",
						scope : this,
					 	rescode : '00450',
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					},'->',
					   {
					   	xtype : 'displayfield',
						value : "营运部督办：陈宏武，电话：0731-89939045；总经办督察：刘伟，电话：0731-89939249。",
						style:'color:red'

					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.hlhjy.hlhjy.delhlhjy.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'wtfkid',
						header : '问题序列号'
					}, {
						dataIndex : 'createname',
						header : '提出人'
					}, {
						dataIndex : 'createtel',
						header : '联系方式'
					}, {
						dataIndex : 'lifnr',
						header : '供应商代码'
					}, {
						dataIndex : 'name1',
						header : '供应商名称'
					}, {
						xtype : 'dictcolumn',
						dictData : GE_SUPPLYWTFK_WTLB,
						dataIndex : 'wtlx',
						header : '问题类型'

					}, {
						dataIndex : 'wtms',
						header : '问题描述'
					}, {
						dataIndex : 'recvuserid',
						header : '供管工程师ID'
					}, {
						dataIndex : 'recvusername',
						header : '供管工程师姓名'
					}, {
						dataIndex : 'zrrname',
						header : '责任人'
					}, {
						dataIndex : 'jjfa',
						header : '解决方案'
					}, {
						dataIndex : 'jhjjtime',
						header : '计划解决时间'
					}, {
						xtype : 'dictcolumn',
						dictData : GE_SUPPLYWTFK_CLZT,
						dataIndex : 'clzt',
						header : '处理状态'
					}, {
						dataIndex : 'sjjjtime',
						header : '实际解决时间'
					}, {
						dataIndex : 'operatorname',
						header : '实际解决人员',
						hidden : true
					}, {
						xtype : 'dictcolumn',
						dictData : GE_SUPPLYWTFK_SUPQR,
						dataIndex : 'supqr',
						header : '供应商确认'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.hlhjy.hlhjy.queryhlhjy.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						fields : [{
									name : 'wtfkid'
								}, {
									name : 'createname'
								}, {
									name : 'createtel'
								}, {
									name : 'lifnr'
								}, {
									name : 'wtlx'
								}, {
									name : 'wtms'
								}, {
									name : 'recvuserid'
								}, {
									name : 'zrrname'
								}, {
									name : 'jjfa'
								}, {
									name : 'jhjjtime'
								}, {
									name : 'clzt'
								}, {
									name : 'sjjjtime'
								}, {
									name : 'supqr'
								}, {
									name : 'tranu'
								}, {
									name : 'trant'
								}, {
									name : 'tctime'
								}, {
									name : 'recvusername'
								}, {
									name : 'name1'
								}, {
									name : 'operatorname'
								}]
					})
		});
	}
	this.initInputWindow = function() {
		this.attachId = Ext.id();
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '供应商问题反馈',
			height : 600,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						columns : 3,
						// saveUrl :
						// 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.addAnnounce.biz.ext',
						saveUrl : 'com.zoomlion.hjsrm.hlhjy.hlhjy.addhlhjy.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'hlhjy/wtfkid',
									dataIndex : 'wtfkid',
									allowBlank : false,
									readOnly : true,
									fieldLabel : '问题编号',
									colspan : 1
								}, {
									xtype : 'datetimefield',
									name : 'hlhjy/tctime',
									fieldLabel : '提出时间',
									colspan : 1,
									value : new Date(),
									editable : true,
									format : 'Y-m-d H:i:s'
								}, {
									xtype : 'textfield',
									name : 'hlhjy/createname',
									allowBlank : false,
									fieldLabel : '提出人',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'hlhjy/createtel',
									allowBlank : false,
									fieldLabel : '联系方式',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'radiogroup',
									name : 'hlhjy/wtlxType',
									allowBlank : false,
									colspan : 3,
									fieldLabel : '问题类型',
									items : [{
										boxLabel : '技术图纸',
										name : 'hlhjy/wtlx',
										inputValue : 1
											// checked : true
										}, {
										boxLabel : '计划变更',
										name : 'hlhjy/wtlx',
										inputValue : 2
									}, {
										boxLabel : '核价合同',
										name : 'hlhjy/wtlx',
										inputValue : 3
									}, {
										boxLabel : '工作效能',
										name : 'hlhjy/wtlx',
										inputValue : 4
									}, {
										boxLabel : '质量管理',
										name : 'hlhjy/wtlx',
										inputValue : 5
									}, {
										boxLabel : '其他问题',
										name : 'hlhjy/wtlx',
										inputValue : 6
									}]
								}, {
									xtype : 'textarea',
									allowBlank : false,
									name : 'hlhjy/wtms',
									maxLength : 4000,
									height :200,
									fieldLabel : '问题描述',
									colspan : 3
								}, {
									xtype : 'textfield',
									allowBlank : false,
									hidden : true,
									id : 'userid',
									name : 'hlhjy/recvuserid',
									fieldLabel : '选择供管工程师',
									colspan : 1
								}, {
									xtype : 'wtfkCombo',
									allowBlank : false,
									name : 'hlhjy/recvusername',
									fieldLabel : '选择供管工程师',
									currentRolecode : "00261",
									colspan : 1
								}, {
									colspan : 3,
									width : 700,
									isUploaded : true,
									xtype : 'attachmentlist',
									name : 'attachlist',
									id : this.attachId,
									postParams : {
										relationId : 0,
										groupId : 'supplywtfkfile',
										dataorgid : dataorgid,
										operatorid : operatorid,
										operatorname : operatorname
									},
									isDownload : this.isDownload,
									fieldLabel : '附件列表',
									title : '附件列表',
									itemId : 'attachmentlist'
								}]
					}]
		});
	}

	this.initEditWindow = function() {
		var _this = this;
		this.eattachId = Ext.id();
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '处理问题',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			buildButtons : function() {
				this.buttons = [{
							text : '保存',
							scope : this,
							handler : function() {
								_this.onsaveOk();
							}
						}, {
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}]
			},
			items : [{
						xtype : 'editpanel',
						pgrid : this.listPanel,
						columns : 3,
						loadUrl : 'com.zoomlion.hjsrm.hlhjy.hlhjy.loadhlhjy.biz.ext',
						saveUrl : '...',
						fields : [{
									xtype : 'textfield',
									name : 'wtfkid',
									dataIndex : 'wtfkid',
									allowBlank : false,
									readOnly : true,
									fieldLabel : '问题编号',
									colspan : 1
								}, {
									xtype : 'datetimefield',
									name : 'tctime',
									dataIndex : 'tctime',
									fieldLabel : '提出时间',
									ref : '../tctime',
									readOnly : !Ext.isEmpty(lifnr)
											? false
											: true,
									colspan : 1,
									format : 'Y-m-d H:i:s'
								}, {
									xtype : 'textfield',
									name : 'createname',
									allowBlank : false,
									ref : '../createname',
									readOnly : !Ext.isEmpty(lifnr)
											? false
											: true,
									dataIndex : 'createname',
									fieldLabel : '提出人',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'createtel',
									dataIndex : 'createtel',
									ref : '../createtel',
									readOnly : !Ext.isEmpty(lifnr)
											? false
											: true,
									allowBlank : false,
									fieldLabel : '联系方式',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'dictcombobox',
									name : 'wtlx',
									dataIndex : 'wtlx',
									ref : '../wtlx',
									readOnly : !Ext.isEmpty(lifnr)
											? false
											: true,
									hiddenName : 'wtlx',
									fieldLabel : '问题类别',
									emptyText : '',
									dictData : GE_SUPPLYWTFK_WTLB
								}, {
									xtype : 'textfield',
									name : 'name1',
									dataIndex : 'name1',
									ref : '../name1',
									readOnly : true,
									allowBlank : false,
									fieldLabel : '供应商',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'textarea',
									height :200,
									allowBlank : false,
									name : 'wtms',
									dataIndex : 'wtms',
									ref : '../wtms',
									readOnly : !Ext.isEmpty(lifnr)
											? false
											: true,
									maxLength : 4000,
									fieldLabel : '问题描述',
									colspan : 3
								}, {
									xtype : 'textfield',
									allowBlank : false,
									hidden : true,
									dataIndex : 'recvuserid',
									id : 'useridx',
									ref : '../recvuserid',
									readOnly : !Ext.isEmpty(lifnr)
											? false
											: true,
									name : 'recvuserid',
									fieldLabel : '选择供管工程师',
									colspan : 1
								}, {
									xtype : 'wtfkCombo',
									allowBlank : false,
									ref : '../recvusername',
									readOnly : !Ext.isEmpty(lifnr)
											? false
											: true,
									name : 'recvusername',
									currentRolecode : "00261",
									fieldLabel : '选择供管工程师',
									dataIndex : 'recvusername',
									colspan : 1
								}, {
									colspan : 3,
									width : 700,
									isUploaded : !Ext.isEmpty(lifnr)
											? true
											: false,
									xtype : 'attachmentlist',
									name : 'attachlist',
									id : this.eattachId,
									postParams : {
										relationId : 0,
										groupId : 'supplywtfkfile',
										dataorgid : dataorgid,
										operatorid : operatorid,
										operatorname : operatorname
									},
									isDownload : this.isDownload,
									isDownload : true,
									fieldLabel : '附件列表',
									title : '附件列表',
									itemId : 'attachmentlist'
								}, {
									xtype : 'datetimefield',
									name : 'jhjjtime',
									dataIndex : 'jhjjtime',
									fieldLabel : '预计解决时间',
									colspan : 1,
									ref : '../jhjjtime',
									readOnly : !Ext.isEmpty(lifnr)
											? true
											: false,
									format : 'Y-m-d H:i:s'
								}, {
									xtype : 'textfield',
									name : 'zrrname',
									dataIndex : 'zrrname',
									ref : '../zrrname',
									readOnly : !Ext.isEmpty(lifnr)
											? true
											: false,
									fieldLabel : '责任人',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'datetimefield',
									name : 'sjjjtime',
									readOnly : !Ext.isEmpty(lifnr)
											? true
											: false,
									dataIndex : 'sjjjtime',
									ref : '../sjjjtime',
									fieldLabel : '实际解决时间',
									colspan : 1,
									editable : true,
									format : 'Y-m-d H:i:s'
								}, {
									xtype : 'textarea',
									height :200,
									name : 'jjfa',
									ref : '../jjfa',
									readOnly : !Ext.isEmpty(lifnr)
											? true
											: false,
									dataIndex : 'jjfa',
									maxLength : 3000,
									fieldLabel : '解决方案',
									colspan : 3
								}, {
									xtype : 'dictcombobox',
									name : 'clzt',
									dataIndex : 'clzt',
									ref : '../clzt',
									readOnly : !Ext.isEmpty(lifnr)
											? true
											: false,
									hiddenName : 'clzt',
									fieldLabel : '处理状态',
									dictData : GE_SUPPLYWTFK_CLZT,
									colspan : 1
								}, {
									xtype : 'textfield',
									value : '说明：选择处理后，供应商不能再修改和删除问题内容。',
									colspan : 2,
									readOnly : true,
									editable : false,
									hideLabel : true
								}, {
									xtype : 'dictcombobox',
									name : 'supqr',
									dataIndex : 'supqr',
									readOnly : true,
									ref : '../supqr',
									hiddenName : 'supqr',
									fieldLabel : '供应商确认',
									dictData : GE_SUPPLYWTFK_SUPQR,
									colspan : 1
								}, {
									xtype : 'textfield',
									value : '说明：当选择已解决后，供管工程师无法再进行问题修改。',
									colspan : 2,
									readOnly : true,
									editable : false,
									hideLabel : true
								}]
					}]
		});
	}

	this.initViewWindow = function() {
		this.veattachId = Ext.id();
		this.viewWindow = this.viewWindow || new Ext.fn.FormWindow({
			id : 'wtfkShow',
			fid : this.veattachId,
			title : '查看反馈问题',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
						xtype : 'viewpanel',
						columns : 3,
						loadUrl : 'com.zoomlion.hjsrm.hlhjy.hlhjy.loadhlhjy.biz.ext',
						fields : [{
									xtype : 'textfield',
									name : 'hlhjy/wtfkid',
									dataIndex : 'wtfkid',
									allowBlank : false,
									readOnly : true,
									fieldLabel : '问题编号',
									colspan : 1
								}, {
									xtype : 'datetimefield',
									name : 'hlhjy/tctime',
									dataIndex : 'tctime',
									fieldLabel : '提出时间',
									ref : '../tctime',
									readOnly : true,
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'hlhjy/createname',
									allowBlank : false,
									ref : '../createname',
									readOnly : true,
									dataIndex : 'createname',
									fieldLabel : '提出人',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'textfield',
									name : 'hlhjy/createtel',
									dataIndex : 'createtel',
									ref : '../createtel',
									readOnly : true,
									allowBlank : false,
									fieldLabel : '联系方式',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'dictcombobox',
									name : 'hlhjy/wtlx',
									dataIndex : 'wtlx',
									ref : '../wtlx',
									readOnly : true,
									hiddenName : 'hlhjy/wtlx',
									fieldLabel : '问题类别',
									emptyText : '',
									dictData : GE_SUPPLYWTFK_WTLB
								}, {
									xtype : 'textfield',
									name : 'hlhjy/name1',
									dataIndex : 'name1',
									ref : '../name1',
									readOnly : true,
									allowBlank : false,
									fieldLabel : '供应商',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'textarea',
									height :200,
									allowBlank : false,
									name : 'hlhjy/wtms',
									dataIndex : 'wtms',
									ref : '../wtms',
									readOnly : true,
									maxLength : 4000,
									fieldLabel : '问题描述',
									colspan : 3
								}, {
									xtype : 'textfield',
									allowBlank : false,
									hidden : true,
									dataIndex : 'recvuserid',
									id : 'useridx',
									ref : '../recvuserid',
									readOnly : true,
									name : 'hlhjy/recvuserid',
									fieldLabel : '选择供管工程师',
									colspan : 1
								}, {
									xtype : 'wtfkCombo',
									allowBlank : false,
									ref : '../recvusername',
									readOnly : true,
									name : 'hlhjy/recvusername',
									fieldLabel : '选择供管工程师',
									dataIndex : 'recvusername',
									colspan : 1
								}, {
									colspan : 3,
									width : 700,
									isUploaded : false,
									xtype : 'attachmentlist',
									name : 'attachlist',
									id : this.veattachId,
									postParams : {
										relationId : 0,
										groupId : 'supplywtfkfile',
										dataorgid : dataorgid,
										operatorid : operatorid,
										operatorname : operatorname
									},
									isDownload : this.isDownload,
									isDownload : true,
									fieldLabel : '附件列表',
									title : '附件列表',
									itemId : 'attachmentlist'
								}, {
									xtype : 'datetimefield',
									name : 'hlhjy/jhjjtime',
									dataIndex : 'jhjjtime',
									fieldLabel : '预计解决时间',
									colspan : 1,
									ref : '../jhjjtime',
									readOnly : true
								}, {
									xtype : 'textfield',
									name : 'hlhjy/zrrname',
									dataIndex : 'zrrname',
									ref : '../zrrname',
									readOnly : true,
									fieldLabel : '责任人',
									maxLength : 100,
									colspan : 1
								}, {
									xtype : 'datetimefield',
									name : 'hlhjy/sjjjtime',
									readOnly : true,
									dataIndex : 'sjjjtime',
									ref : '../sjjjtime',
									fieldLabel : '实际解决时间',
									colspan : 1
								}, {
									xtype : 'textarea',
									height :200,
									name : 'hlhjy/jjfa',
									ref : '../jjfa',
									readOnly : true,
									dataIndex : 'jjfa',
									maxLength : 3000,
									fieldLabel : '解决方案',
									colspan : 3
								}, {
									xtype : 'dictcombobox',
									name : 'hlhjy/clzt',
									dataIndex : 'clzt',
									ref : '../clzt',
									readOnly : true,
									hiddenName : 'hlhjy/clzt',
									fieldLabel : '处理状态',
									dictData : GE_SUPPLYWTFK_CLZT,
									colspan : 1
								}, {
									xtype : 'textfield',
									value : '说明：选择处理后，供应商不能再修改和删除问题内容。',
									colspan : 2,
									readOnly : true,
									hideLabel : true
								}, {
									xtype : 'dictcombobox',
									name : 'hlhjy/supqr',
									dataIndex : 'supqr',
									readOnly : true,
									ref : '../supqr',
									hiddenName : 'hlhjy/supqr',
									fieldLabel : '供应商确认',
									dictData : GE_SUPPLYWTFK_SUPQR,
									colspan : 1
								}, {
									xtype : 'textfield',
									value : '说明：当选择已解决后，供管工程师无法再进行问题修改。',
									colspan : 2,
									readOnly : true,
									hideLabel : true
								}]
					}]
		});
	}
}
