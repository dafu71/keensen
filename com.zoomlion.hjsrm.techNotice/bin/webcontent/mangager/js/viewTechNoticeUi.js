/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 流程数据查看 创建日期： 2014-12-15 补丁编号： G3_P_20141215_20001_249 作 者：
 * 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 王富强 2014-12-18 集团
//
// =================================================================
/*******************************************************************************
 * 版权所有： 描 述： 技术通知管理流程数据查看UI界面 创建日期：2014/12/17 作 者： 王富强
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// 
// =================================================================
/**
 * 技术通知管理，查看明细
 */
com.zoomlion.hjsrm.techNotice.ViewMgr = function() {

	this.initPanel = function() {
		this.initListActionPanel();	
		this.initPrintWindow();
		this.initViewPanel();
        return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'viewMgr',
					panels : [this.viewPanel]
				});

	};

	this.initViewPanel = function() {		
		this.viewPanel = new Ext.fn.EditPanel({
			height : 600,
			pgrid : '',
			columns : 2,
			border : true,
			autoScroll : true,
			saveUrl : '---',
			loadUrl : "com.zoomlion.hjsrm.techNotice.noticeMgr.getTechNotice.biz.ext",
			title : '【 技术通知查看 】',
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
									inputValue : 1,
									checked : true
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
									name : 'NOTICE_TYPE',
									inputValue : 1									
								}, {
									boxLabel : '试验',
									name : 'NOTICE_TYPE',
									inputValue : 2
								}, {
									boxLabel : '其他',
									name : 'NOTICE_TYPE',
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
									},{
						xtype : 'hidden',
						name : 'workitemid',
						value : workitemid
					},
					  {
						xtype : 'hidden',
						name : 'processinstid',
						id:"printProcessId",
						value : processinstid
					},this.listActionPanel],
					buttons : [{
						text : '打印',
						scope : this,
						handler : this.onWrite

					},{
						text : '关闭',
						scope : this,
						handler : this.onClose

					}]

		})
	};
	
	
	
	////////////////////////打印窗口开始///////////////////////////////

	this.initPrintWindow = function() {
		
		this.printStore = this.printStore || new Ext.data.ArrayStore({
					fields : ['jspz']
				});		

		this.printPanel = this.printPanel || new Ext.Panel({
			// id : "mypanel",
			frame : true,
			autoScroll : true,
			renderTo : Ext.getBody()
		});
		this.tp1 = new Ext.XTemplate(
		'<table width="80%" border="1" align="center" cellpadding="0" cellspacing="0">',
        '<caption>研究院技术通知</caption>',
        '<tr><tpl for="notices"><td width="106" align="left" >编号</td><td colspan="3" >&nbsp;{noticeid}</td></tr>',
        '<tr><td>编制人</td><td width="244">&nbsp;{weavepersonname}</td><td width="83">所属部门</td><td width="305">&nbsp;{deptname}</td></tr>',
        '<tr><td>申请时间</td><td>&nbsp;{applicationtime}</td><td>产品类别</td><td>&nbsp;{producttype}</td></tr>',
        '<tr><td>产品型号</td><td>&nbsp;{productModel}</td><td>通知类型</td><td>&nbsp;{noticeType}</td></tr>',       
        '<tr><td>重要度级别</td><td colspan="3">&nbsp;{levels}</td></tr>',
        '<tr><td>标题</td><td colspan="3">&nbsp;{noticetitle}</td></tr><tr><td colspan="4" align="center">正文</td></tr>',
  		'<tr><td height="127" colspan="4">&nbsp;{noticeText}</td></tr></tpl><tr><td height="50">上传附件</td><td colspan="3">',
  		'<table width="100%" border="0" cellspacing="0" cellpadding="0">',     
        '<tpl for="atfiles"><tr>',
        '<td width="100%">&nbsp;{fileName}</td>',      
        '</tr></tpl>',
        '</table></td></tr>',
  		'<tpl for="notices"><tr><td height="36">发送部门</td><td colspan="3">&nbsp;{sendDept}</td></tr></tpl><tr><td height="34">校对</td><td colspan="3">',
  		'<table width="100%" border="0" cellspacing="0" cellpadding="0">',
        '<tpl for="xtdata"><tr>',       
        '<td width="70%">&nbsp;{actionsText}</td>',
        '<td width="10%">&nbsp;{actionsPersonName}</td>',
        '<td width="20%">&nbsp;{actonsTime}</td>',
        '</tr></tpl></table>',
        '</td></tr>',
  		'<tr><td height="31">审核</td><td colspan="3">',
  		'<table width="100%" border="0" cellspacing="0" cellpadding="0">',   
         '<tpl for="shdata"><tr>',       
        '<td width="70%">&nbsp;{actionsText}</td>',
        '<td width="10%">&nbsp;{actionsPersonName}</td>',
        '<td width="20%">&nbsp;{actonsTime}</td>',
        '</tr></tpl></table></td></tr>',
        '<tr><td height="51">批准</td><td colspan="3">',
  		'<table width="100%" border="0" cellspacing="0" cellpadding="0">',   
        '<tpl for="pzdata"><tr>',       
        '<td width="70%">&nbsp;{actionsText}</td>',
        '<td width="10%">&nbsp;{actionsPersonName}</td>',
        '<td width="20%">&nbsp;{actonsTime}</td>',
        '</tr></tpl></table>',
  		'</td></tr>',
  		'<tr><td height="51">归档下发</td><td colspan="3">',
  		'<table width="100%" border="0" cellspacing="0" cellpadding="0">',   
        '<tpl for="notices"><tr>',       
        '<td width="70%">&nbsp;{executeText}</td>',
        '<td width="10%">&nbsp;{executePersonName}</td>',
        '<td width="20%">&nbsp;{executeTime}</td>',
        '</tr></tpl></table>',
  		'</td></tr>',
  		'<tr><td height="54">执行部门接收</td><td colspan="3">',
  		'<table width="100%" border="0" cellspacing="0" cellpadding="0">',   
        '<tpl for="fkdata"><tr>',       
        '<td width="70%">&nbsp;{actionsText}</td>',
        '<td width="10%">&nbsp;{actionsPersonName}</td>',
        '<td width="20%">&nbsp;{actonsTime}</td>',
        '</tr></tpl></table>',
  		'</td></tr><tr><td height="53">监督部门归档</td><td colspan="3">',
  		'<table width="100%" border="0" cellspacing="0" cellpadding="0">',   
        '<tpl for="notices"><tr>',       
        '<td width="70%">&nbsp;{archiveText}</td>',
        '<td width="10%">&nbsp;{archivePersonName}</td>',
        '<td width="20%">&nbsp;{archiveTime}</td>',
        '</tr></tpl></table>',
  		'</td></tr>',
  		'<tr><td height="50" colspan="4"><p>说明：</p><p>&nbsp;&nbsp;&nbsp;&nbsp;1、重要度级别按照Q/ZLHJ 20110055-2014确定；</p>',
    	'<p>&nbsp;&nbsp;&nbsp;&nbsp;2、执行部门指具体操作部门，可以为多个。</p></td></tr></table>');

		this.printWindow = this.printWindow || new Ext.Window({
					title : "查看",
					jspz : '',
					resizable : false,
					// minimizable : false,
					modal : true,
					maximizable : false,
					maximized : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 800,
					height : 600,
					layout : 'fit',
					items : [this.printPanel],					
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.printWindow.hide();
								}
							}, {
								text : "打印",
								scope : this,
								handler : this.onNoticePrint
							}]

				});

	}	
	
	//////////////////////////打印窗口结束/////////////////////////////

		
	/**
	 * 技术通知中，流程处理信息
	 */
	this.initListActionPanel = function() {
		this.listActionPanel = new Ext.fn.ListPanel({
					title : '流程处理信息',
					autoHeight:true,
					hsPage : false,
					colspan : 2,
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