/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 流程数据查看 创建日期： 2014-12-15 补丁编号： G3_P_20141215_20001_249 作 者：
 * 刘鑫
 ******************************************************************************/

com.zoomlion.hjsrm.tuyangbg.ViewtybgMgr = function() {

	this.initPanel = function() {	
		this.initListActionPanel();	
		this.initViewPanel();
        return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'viewtybgMgr',
					panels : [this.viewPanel]
				});

	};

	this.initViewPanel = function() {
	    this.mattachId = Ext.id();
		this.viewPanel = new Ext.fn.EditPanel({
			height : 600,
			pgrid : '',
			columns : 2,
			border : true,
			autoScroll : true,
			saveUrl : '---',
			loadUrl : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.gettybgdatabyid.biz.ext',
			title : '【 图样变更通知查看 】',
				fields : [{
							        xtype : 'textfield',
							        name : 'tybgId',
							        dataIndex : 'tybgId',
							        hidden: true
						        },{
						xtype : 'hidden',
						name : 'workitemid',
						value : workitemid
					},{
							        xtype : 'textfield',
							        name : 'processinstid',
							        dataIndex : 'processinstid',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'processStatus',
							        dataIndex : 'processStatus',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'tybgPersonId',
							        dataIndex : 'tybgPersonId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'deptId',
							        dataIndex : 'deptId',
							        hidden: true
						        },{
							        xtype : 'textfield',
							        name : 'tybgPersonName',
							        fieldLabel : '更改发起人',
							        readOnly : true,
							        colspan : 1,
							        dataIndex : 'tybgPersonName'
						        },{
							        xtype : 'textfield',
							        name : 'deptName',
							        fieldLabel : '部门名称',
							        readOnly : true,
							        colspan : 1,
							        dataIndex : 'deptName'
						        },{
							        xtype : 'textfield',
							        name : 'tybgContact',
							        fieldLabel : '联系方式',
							        readOnly : true,
							        colspan : 1,
							        dataIndex : 'tybgContact'
						        },{
									xtype : 'textarea',
									name : 'tybgTitle',
									fieldLabel : '标题',
									readOnly : true,
									colspan : 2,
									allowBlank : false,
									blankText : "请输入标题！",
									height:50
								},{
									xtype : 'textarea',
							        allowBlank : true,
							        readOnly : true,
							        fieldLabel : '正文',
							        colspan : 2,
							        name : 'tybgText',
							        dataIndex : 'tybgText',
							        height:150
								},{
							colspan : 2,
							width : 700,
							height:80,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.mattachId,
							postParams : {
								relationId : 0,
								groupId : 'tybgfile'
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						},this.listActionPanel],
						buttons : [{
						text : '关闭',
						scope : this,
						handler : this.onClose

					}]
		})
	};
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
		url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.queryTybgNoticeItems.biz.ext',
		root : 'data',		
		totalProperty : 'totalCount',
		baseParams : {
			"entity/processinstid" : processinstid
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