<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String userId = (String) userObject.getUserId();
	String dataorgid = (String) userObject.getAttributes().get(
			"dataorgid");
	String roleid = (String) userObject.getAttributes().get(
			"roles_ids_str");
	String operatorname = (String) userObject.getAttributes().get(
			"operatorname");
	String lifnr = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
	String roleCodes = (String) userObject.getAttributes().get(
			"roles_rolecode_str");
%>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js" />
<js:load scriptPath="pub/common/selectParticipantsWin3.js" />
<html>
<head>
</head>

<body>
<div class="welcome_body">
<div><%--设置主页显示框
    author 刘鑫
    修改时间 14-12-9
--%> <!--  
<div class="res-block" style="width:60%;">
<div class="res-block-inner">
<h3><img style="width:5%;cursor:pointer;"
	src="frame/ui/img/yewuditux.png" /> 业务地图</h3>
<div align="left"><img style="width:18%;cursor:pointer;"
	src="frame/ui/img/ywdtA1.gif" onclick="cgddcx()" ext:qtip="采购订单查询" />
<img style="width:3%;" src="frame/ui/img/null.png" /> <img
	style="width:18%;cursor:pointer;" src="frame/ui/img/ywdtA2.gif"
	onclick="cgddqr()" ext:qtip="采购订单确认" /> <img style="width:3%;"
	src="frame/ui/img/null.png" /> <img style="width:18%;cursor:pointer;"
	src="frame/ui/img/ywdtA3.gif" onclick="shzl()" ext:qtip="送货指令" /> <img
	style="width:3%;" src="frame/ui/img/null.png" /> <img
	style="width:18%;cursor:pointer;" src="frame/ui/img/ywdtA4.gif"
	onclick="shdsc()" ext:qtip="送货单生成" /></div>
<div align="left"><img style="width:8%;"
	src="frame/ui/img/null.png" /> <img style="width:18%;cursor:pointer;"
	src="frame/ui/img/ywdtA5.gif" onclick="shrk()" ext:qtip="收货入库" /> <img
	style="width:3%;" src="frame/ui/img/null.png" /> <img
	style="width:18%;cursor:pointer;" src="frame/ui/img/ywdtA6.gif"
	onclick="jspzsc()" ext:qtip="结算凭证生成" /> <img style="width:3%;"
	src="frame/ui/img/null.png" /> <img style="width:18%;cursor:pointer;"
	src="frame/ui/img/ywdtA7.gif" onclick="jspzqr()" ext:qtip="结算凭证确认" />
<img style="width:3%;" src="frame/ui/img/null.png" /> <img
	style="width:18%;cursor:pointer;" src="frame/ui/img/ywdtA8.gif"
	onclick="djkczt()" ext:qtip="大件库存状态" /></div>
</div>
<div class="res-block-inner">
<h3><img style="width:6%;cursor:pointer;"
	src="frame/ui/img/zdglx.png" /> <a
	style="text-decoration:none;color:#000000" href="javascript:link()">
管理制度</a></h3>
<ul id="indexoa"></ul>
</div>

</div>
<div class="res-block" style="width:40%;float:right;">
-->
<div class="res-block" style="width:40%;">
<div class="res-block-inner" style="display:none;">
<h3><img style="width:8%;cursor:pointer;"
	src="frame/ui/img/tongzhix.png" /><a
	style="text-decoration:none;color:#000000" href="javascript:link()">
最新公告</a></h3>
<ul id="indexnews"></ul>
</div>
<div class="res-block-inner">
<h3><img style="width:7%;cursor:pointer;"
	src="frame/ui/img/dbsxx.png" /><a
	style="text-decoration:none;color:#000000"
	href="javascript:workslink()"> 待办事宜</a></h3>
<ul id="indexworks"></ul>
</div>
<div class="res-block-inner">
<h3><img style="width:7%;cursor:pointer;"
	src="frame/ui/img/yewuditux.png" /> 业务提醒</h3>
<ul id="div_business"></ul>
</div>
<div class="res-block-inner" style="display:none;">
<h3><img style="width:8%;cursor:pointer;"
	src="frame/ui/img/emalnoticex.png" /><a
	style="text-decoration:none;color:#000000" href="javascript:email()">
我的邮件</a></h3>
<ul id="indexemail"></ul>
</div>
</div>
</div>
</div>
</body>
</html>
<script type="text/javascript">
var ggannounceid = '0'
var userId = "<%=userId%>";
var lifnr = "<%=lifnr %>";
var roleid = "<%=roleid%>";
var operatorname = "<%=operatorname%>";
var userOrgId = "<%=dataorgid%>";
var love = Ext.util.Format.substr(userId, 0, 1);
var viewWindow = new Ext.fn.ShowWindow({
			id:'announceIndexShow',
			title:'查阅公告制度',
			height:600,
			width:1000,
			resizable:true,
			minimizable:false,
			maximizable :true,
			draggable:true,
			defaults:{autoScroll : true},
			items:[{
				xtype:'viewpanel',
				columns:2,
				loadUrl:'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.readAnnounce.biz.ext',		
				fields : [{
							name : 'announce/title',
							dataIndex : 'title',
							//fieldLabel : '标题',
							hideLabel:true,
							style:'padding-top:3px;padding-left:10px;text-align:center;font-size:20px',
							allowBlank : true,
							//anchor : '90%',
							colspan : 2,
							 xtype: 'displayfield'
						},{
							name : 'announce/username',
							dataIndex : 'username',
							fieldLabel : '发布人',
							style:'padding-top:3px;padding-left:10px;',
							allowBlank : true,
							anchor : '90%',
							colspan : 1,
							 xtype: 'displayfield'
						},{
							name : 'announce/announcetime',
							dataIndex : 'announcetime',
							fieldLabel : '发布时间',
							style:'padding-top:3px;padding-left:10px;',
							allowBlank : true,
							anchor : '90%',
							colspan : 1,
							 xtype: 'displayfield'
						}, {
							id : 'announceIndexContent',
							style:'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2',
							dataIndex : 'content',
							anchor : '90%',									
							xtype: 'container',
							fieldLabel : '内容',
							colspan : 2,
							html:""
						},{isUploaded:false,xtype:'attachmentlist',name:'attachlist',id:'indexAnnounceFile',
						postParams:{relationId:0,groupId:'announcefile'},isDownload:true,
						fieldLabel : '附件列表',colspan : 2,title : '附件列表'
						}]
			}]
		});
var viewnoticeWindow = new Ext.fn.ShowWindow({
			id:'noticezhuyeShow',
			title:'查阅邮件',
			height:600,
			width:1000,
			resizable:true,
			minimizable:false,
			maximizable :true,
			draggable:true,
			defaults:{autoScroll : true},
			items:[{
				xtype:'viewpanel',
				columns:1,
				loadUrl:'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticeInfobyid.biz.ext',		
					fields : [{
							name : 'notice/title',
							dataIndex : 'title',
							allowBlank : true,
							fieldLabel : '主题',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							xtype : 'displayfield'
						},{
							name : 'notice/noticetime',
							dataIndex : 'noticetime',
							allowBlank : true,
							fieldLabel : '发送时间',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							//format : 'Y-m-d H:i:s',
							xtype : 'displayfield'
						},{
							name : 'notice/sendusername',
							dataIndex : 'sendusername',
							ref:'../sendusername',
							allowBlank : true,
							fieldLabel : '发送人',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							xtype : 'displayfield'
						},{
							name : 'notice/senduserid',
							dataIndex : 'senduserid',
							ref:'../senduserid',
							allowBlank : true,
							fieldLabel : '发送人ID',
							hidden :true,
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							xtype : 'displayfield'
						},{
						    id : 'noticeZhuyeContent',
							name : 'notice/content',
							dataIndex : 'content',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							fieldLabel : '内容',
							xtype : 'container',
							autoScroll : true,
							html : ""
						}, {
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : 'indexNoticeFile',
							postParams : {
								relationId : 0,
								groupId : 'noticefile'
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : "回复",
							scope : this,
							handler : function() {
							   answeremail(Ext.getCmp("noticezhuyeShow").items.items[0].sendusername.getValue(),Ext.getCmp("noticezhuyeShow").items.items[0].senduserid.getValue())
							}
						}, {
							text : "关闭",
							scope : this,
							handler : function() {
								this.hide()
							}
						}]
			}
		});

var	answeremailWindow =  new Ext.fn.FormWindow({
					title : '发送邮件',		
					id:'answeremail',
					height : 550,
			        width : 800,
					items : [{
					    xtype : 'inputpanel',
					    columns:1,
						saveUrl:'...',
						border:false,
						fields:[{
									xtype : 'selectParticipateField3',
									name : 'operatorname',
									ref:'../operatorname',
									selModel:'merger',
									fieldLabel : '接收人',
									anchor : '90%',
									displayField:'operatorname',//必填
									hiddenName:'userid',//必填
									valueField : 'userid',
									isSingleSelect:false,
								//	colspan : 2,
									allowBlank : false,
									blankText : "请选择接收人员！"
								},{
							        xtype : 'textfield',
							        name : 'noticeid',
							        dataIndex : 'noticeid',
							        hidden : true
						        },{
									xtype : 'datetimefield',
									name : 'noticetime',
									fieldLabel : '发送时间',
							//		colspan : 1,
									anchor : '90%',
									format : 'Y-m-d H:i:s',
									hidden : true,
									value:new Date()
								},{
									xtype : 'textarea',
									name : 'title',
									fieldLabel : '主题',
							//		colspan : 1,
									anchor : '90%',
									allowBlank : false,
									blankText : "请输入主题！",
									height:50
								},{
									xtype : 'htmleditor',
							        allowBlank : false,
							        fieldLabel : '内容',
							        anchor : '90%',
							        name : 'content',
							        dataIndex : 'content',
							        height:250
								},{
							colspan : 2,
							width : 700,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : "indexemailFile",
							postParams : {
								relationId : 0,
								groupId : 'noticefile'
							},
							isDownload : this.isDownload,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}]
						}],
					buildButtons : function() {
						this.buttons = [{
									text : '发送',
									scope : this,
									handler : function() {
										onsendok(Ext.getCmp("answeremail").items.items[0].operatorname.getValue());
									}
								}, {
									text : '关闭',
									scope : this,
									handler : function() {
										this.hide();
									}
								}]
					}
				})
<%--查询查阅记录
    author 刘鑫
    修改时间 14-12-9
    --%>
var announceReadWindow = new Ext.fn.ShowWindow({
			id:'announceReadShow',
			title:'公告制度查阅记录',
			height:450,
			width:800,
			resizable:true,
			minimizable:false,
			maximizable :true,
			defaults:{autoScroll : true},
			items:[{
			xtype:'listpanel',
			region : 'south',
			hsPage : true,
			height : 300,
			pageSize:10,
			columns : [new Ext.grid.RowNumberer(),  {
				dataIndex : 'orgnames',
				header : '机构名称'
			},{
				dataIndex : 'nr',
				header : '查阅人及时间',
				width:600,
				renderer:function(value,meta,record){
				meta.attr='style="white-space:normal;"';
				var kvalue = value.replace(/,/g,'&nbsp&nbsp&nbsp');
				return kvalue;}
			}],
			tbar : [{
						text : '机构名称:',
						scope : this
					},{
					    xtype : 'textfield',
					    scope : this,
					    ref : "../orgname"
					},{
						text : '查询',
						scope : this,
						iconCls : 'icon-application_edit',
						handler :  function() {
							   queryAnnounceRead(Ext.getCmp("announceReadShow").items.items[0].orgname.getValue(),ggannounceid)
							}
					},'-', {
					text : '重置',
					scope : this,
					handler : function() {
						Ext.getCmp("announceReadShow").items.items[0].orgname.setValue();
					}
				}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.queryAnnouncereader2.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : "announceid"
						},{
							name : "orgnames"
						},{
							name : "nr"
						}]
			})
			}],
				buildButtons : function() {
				this.buttons = [{
							text : "查看未查阅人员",
							scope : this,
							handler : function() {
							   showAnnouncenotRead(ggannounceid)
							}
						}, {
							text : "刷新",
							scope : this,
							handler : function() {
								this.loadData()
							}
						}, {
							text : "关闭",
							scope : this,
							handler : function() {
								this.hide()
							}
						}]
			}
		});
var announcenotReadWindow = new Ext.fn.ShowWindow({
			id:'announcenotReadShow',
			title:'公告制度未查阅记录',
			height:450,
			width:800,
			resizable:true,
			minimizable:false,
			maximizable :true,
			defaults:{autoScroll : true},
			items:[{
			xtype:'listpanel',
			region : 'south',
			hsPage : true,
			height : 300,
			pageSize:10,
			columns : [new Ext.grid.RowNumberer(),  {
				dataIndex : 'orgnames',
				header : '机构名称'
			},{
				dataIndex : 'nr',
				header : '未查阅人',
				width:600,
				renderer:function(value,meta,record){
				meta.attr='style="white-space:normal;"';
				var kvalue = value.replace(/,/g,'&nbsp&nbsp&nbsp');
				return kvalue;}
			}],
				tbar : [{
						text : '机构名称:',
						scope : this
					},{
					    xtype : 'textfield',
					    scope : this,
					    ref : "../orgnames"
					},{
						text : '查询',
						scope : this,
						iconCls : 'icon-application_edit',
						handler :  function() {
							   queryAnnouncenotRead(Ext.getCmp("announcenotReadShow").items.items[0].orgnames.getValue(),ggannounceid)
							}
					},'-', {
					text : '重置',
					scope : this,
					handler : function() {
						Ext.getCmp("announcenotReadShow").items.items[0].orgnames.setValue();
					}
				}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.queryAnnouncenotreader.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : "announceid"
						},{
							name : "orgnames"
						},{
							name : "nr"
						}]
			})
			}]			
		});

	
var vPanel = viewWindow.items.items[0]
vPanel.mon(vPanel,'afterload',function(form,data){
	Ext.getCmp("announceIndexContent").getEl()
	.update("<div style='word-break:break-all;margin-left:0px;overflow-y:scroll;height:400px;'>"+data.content+"</div>");
});
var vnoticePanel = viewnoticeWindow.items.items[0]
vnoticePanel.mon(vnoticePanel,'afterload',function(form,data){
	Ext.getCmp("noticeZhuyeContent").getEl()
	.update("<div style='word-break:break-all;margin-left:0px;overflow-y:scroll;height:400px;'>"+data.content+"</div>");
});
function onsendok(v) {
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在发送消息，请稍候！',
				removeMask : true
			});
	var form = Ext.getCmp("answeremail").items.items[0].form;
	var vals = Ext.getCmp("answeremail").items.items[0].getForm().getValues();
	if (form.isValid()) {
		mk.show();
		Ext.Ajax.request({
			method : "post",
			url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.addNoticeInfo.biz.ext',
			jsonData : {
				tatnoticeinfo : vals,
				pts : v
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					this.answeremailWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
								Ext.getCmp("answeremail").items.items[0].getForm().reset();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}
};
function  answeremail(v,t) {
	 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.noticeiplimit.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				var limit = ret.data;
				if(limit == 1){
		 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.newNotice.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				var noticeid = ret.noticeid;
				// alert(this.sendPanel.items.items[0].form.findField('noticeid'));
				Ext.getCmp("answeremail").items.items[0].form.findField('noticeid').setValue(noticeid);
				Ext.getCmp("answeremail").items.items[0].form.findField('operatorname').setValue(v+"("+t+")"+",");
				var attachmentParams = {
					relationId : noticeid,
					groupId : 'noticefile'
				}
				Ext.getCmp("indexemailFile").setPostParams(attachmentParams);
				Ext.getCmp("indexemailFile").loadParams = attachmentParams;
				Ext.getCmp("indexemailFile").loadAttachmentRemote();
				// this.sendPanel.items.items[0].form.findField('noticeid').setValue(noticeid);
			} else {						
				Ext.Msg.alert('系统提示', '获取公共主键失败');
			}
		        }
	          },this);
	         this.answeremailWindow.show();
				}else{
					Ext.Msg.alert('系统提示', '您的IP地址不允许发送邮件！');
				}
			} else {						
				Ext.Msg.alert('系统提示', '获取登录人IP失败');
			}
		 }
	 },this);
	 
};
function cgddcx(){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '124',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	var url="/purchase/purchasequery/purchasequerymanager.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '124',
		text:'采购订单查询',
		attributes:{
			respath:url
		}
	});
}
}
})
};
function cgddqr(){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '126',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/purchase/purchaseaffirm/purchaseaffirmmanager.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '126',
		text:'采购订单确认',
		attributes:{
			respath:url
		}
	});
}
}
})
};
function shzl(){
if(Ext.isEmpty(lifnr)){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '202',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	// myid = Ext.id();
	// var itemId = "menu" + myid;
	var url="/purchase/shzlwh/shzlwhmanager.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '202',
		text:'送货指令维护',
		attributes:{
			respath:url
		}
	});
	}
}
})
}else{
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '203',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/purchase/shzlcxsupply/shzlcxsupply.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '203',
		text:'送货指令查询',
		attributes:{
			respath:url
		}
	});
	}
}
})
}
};
function shdsc(){
if(Ext.isEmpty(lifnr)){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '162',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/deliverynote/seek/seekMgr.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '162',
		text:'送货单查询',
		attributes:{
			respath:url
		}
	});
	}
}
})
}else{
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '161',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/deliverynote/manage/manageMgr.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '161',
		text:'送货单维护',
		attributes:{
			respath:url
		}
	});
	}
}
})
}
};
function djkczt(){
if(Ext.isEmpty(lifnr)){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '451',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/kcgl/wxdjkccx/wxdjkccxMgr.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '451',
		text:'外协大件库存状态查询',
		attributes:{
			respath:url
		}
	});
	}
}
})
}else{
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '450',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/kcgl/wxdjkcztwh/wxdjkcztwhnewMgr.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '450',
		text:'外协大件库存状态维护',
		attributes:{
			respath:url
		}
	});
	}
}
})
}
};
function shrk(){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '181',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/kcgl/kcmanager/kcglmanager.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '181',
		text:'收货入库',
		attributes:{
			respath:url
		}
	});
	}
}
})
};
function jspzsc(){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '201',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/settleaccounts/manage/manageMgr.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '201',
		text:'结算凭证生成',
		attributes:{
			respath:url
		}
	});
	}
}
})
};
function jspzqr(){
Ext.Ajax.request({
	method : "post",
	scope : this,
	url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.Loginywditu.biz.ext',
	jsonData : {
		resid : '205',
		userid:userId
	 },
	success : function(response, action) {
				// 返回值处理
	var result = Ext.decode(response.responseText);
     var k = result.result;
     	if(k==1){
var spacepanel = Ext.getCmp('spacepanel');
	//var myid = Ext.id();
	//var itemId = "menu" + myid;
	var url="/settleaccounts/confirm/confirmMgr.jsp";	
	//spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '205',
		text:'结算凭证确认',
		attributes:{
			respath:url
		}
	});
	}
}
})
};
function link(){
var spacepanel = Ext.getCmp('spacepanel');
	var myid = Ext.id();
	var itemId = "menu" + myid;
	var url="/frame/tools/announce/announcemanager.jsp";	
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '702070000',
		text:'公告制度',
		attributes:{
			respath:url
		}
	});

};
function email(){
var spacepanel = Ext.getCmp('spacepanel');
	var myid = Ext.id();
	var itemId = "menu" + myid;
	var url="/frame/tools/notice/noticemanager.jsp";	
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: '702060000',
		text:'我的邮件',
		attributes:{
			respath:url
		}
	});

};

//首页待办
function workslink(){
var spacepanel = Ext.getCmp('spacepanel');
	var myid = Ext.id();
	var itemId = "menu" + myid;
	var url="/srmclient/working/workingMgr.jsp";	
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: myid,
		text:'待办任务',
		attributes:{
			respath:url
		}
	});

};

//首页消息提醒
function businesslink(itemCode){
var spacepanel = Ext.getCmp('spacepanel');
	if(itemCode == ''){
		return;
	}
	var myid = Ext.id();
	var itemId = "menu" + myid;
	var url='';
	var title = '';	
	if(itemCode == 'ipa'){
		url = '/produce/quality/mptest/ipa/index.jsp';
		title = 'IPA浓度';
	}
	if(itemCode == 'gy'){
		url = '/produce/quality/mptest/gy/index.jsp';
		title = '甘油浓度';
	}
	if(itemCode == 'water'){
		url = '/produce/quality/mptest/water/index.jsp';
		title = '水相液浓度';
	}
	if(itemCode == 'oil'){
		url = '/produce/quality/mptest/oil/index.jsp';
		title = '油相液浓度';
	}
	if(itemCode == 'zmy'){
		url = '/produce/quality/mptest/zmy/index.jsp';
		title = '铸膜液浓度';
	}
	
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: myid,
		text:title,
		attributes:{
			respath:url
		}
	});

};

//首页待办
function readslink(){
var spacepanel = Ext.getCmp('spacepanel');
	var myid = Ext.id();
	var itemId = "menu" + myid;
	var url="/srmclient/read/readMgr.jsp";	
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
		id: myid,
		text:'待阅任务',
		attributes:{
			respath:url
		}
	});

};

function showAnnounceRead(k){
//var record = new Ext.data.Record({"condition/announceid":k});
 ggannounceid = k;
 var list = Ext.getCmp("announceReadShow").items.items[0];
 var store = list.store;
    store.baseParams = {"condition/announceid" : k}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
	Ext.getCmp("announceReadShow").items.items[0].orgname.setValue();
	Ext.getCmp("announceReadShow").show();
};
function queryAnnounceRead(t,k){
 var list = Ext.getCmp("announceReadShow").items.items[0];
 var store = list.store;
    store.baseParams = {"condition/orgnames" : t,"condition/announceid" : k}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
	Ext.getCmp("announceReadShow").show();
};
function showAnnouncenotRead(t){
var list = Ext.getCmp("announcenotReadShow").items.items[0];
var store = list.store;
    store.baseParams = {"condition/announceid" : t}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
    Ext.getCmp("announcenotReadShow").items.items[0].orgnames.setValue();
	Ext.getCmp("announcenotReadShow").show();
};
function queryAnnouncenotRead(t,k){
var list = Ext.getCmp("announcenotReadShow").items.items[0];
var store = list.store;
    store.baseParams = {"condition/orgnames" : t,"condition/announceid" : k}
	store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : list.pagingToolbar.pageSize
					}
				});
	Ext.getCmp("announcenotReadShow").show();
};
function showzhuyeNotice(v) {
	Ext.Ajax.request({
			method : "post",
			url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.readNoticeyz.biz.ext',
			jsonData : {
				query : v
			},
			success : function(response, action) {
				var result = Ext.decode(response.responseText);
					if (result.result == "0") {
	var record = new Ext.data.Record({"noticeid":v});
	Ext.getCmp("noticezhuyeShow").items.items[0].loadData(record);
	Ext.getCmp("noticezhuyeShow").show();
	
	var attachmentParams = {relationId:v,groupId:'noticefile'}
	Ext.getCmp('indexNoticeFile').setPostParams(attachmentParams);
	Ext.getCmp('indexNoticeFile').loadParams = attachmentParams;
	Ext.getCmp('indexNoticeFile').loadAttachmentRemote();
					}else{
						Ext.Msg.alert("系统提示", "该邮件已被发件人撤销，无法查看！");
					}
					
			}
	
})
};
function showIndexAnnounce(v) {
	var record = new Ext.data.Record({"announceid":v});	
	Ext.getCmp("announceIndexShow").items.items[0].loadData(record);
	Ext.getCmp("announceIndexShow").show();
	var attachmentParams = {relationId:v,groupId:'announcefile'};
	Ext.getCmp('indexAnnounceFile').setPostParams(attachmentParams);
	Ext.getCmp('indexAnnounceFile').loadParams = attachmentParams;
	Ext.getCmp('indexAnnounceFile').loadAttachmentRemote();
};
function openBizMap(v) {
	var store = Ext.getCmp("indexLayout").items.itemAt(1).get("navigate").leafMenuStore;
	var rs = store.getAt(store.find('resid', v));
   	Ext.getCmp("spacepanel").openWithCfg({id:rs.get('resid'),respath:rs.get('respath'),text:rs.get('resname')});
};

<%--取当前的时间，并进行修改和格式转换
    author 刘鑫
    修改时间 14-12-9
    --%>
<%--var now = new Date();
now.setDate(now.getDate()-30);
var limitDaten = now.toLocaleDateString();
var limitDatey = limitDaten.replace('年','/');
var limitDater = limitDatey.replace('月','/');
var limitDate = limitDater.replace('日','');
var limitDatez = Ext.util.Format.date(limitDate,'Y/m/d');--%>
<%--公告加载
    author 刘鑫
    修改时间 15-3-16
    --%>
function loadAnnounce(){
	Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.showAnnounces.biz.ext',
				success : function(resp) {
					var res = Ext.decode(resp.responseText);
					var notices = res.data;
					var htmls = "";
					for (var i=0;i<notices.length;i++){
					if(notices[i].flag=='0'){
					htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:showIndexAnnounce("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/dot6.jpg">'+"  "+Ext.util.Format.ellipsis((notices[i].title+"("+notices[i].announcetime+")"),32,false)+'<img  src="frame/ui/img/new.gif"  style="width:28px;height:11px;">'+"</a><a href='javascript:showAnnounceRead("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/vote_item.gif" ext:qtip="点击查询查阅信息">'+"</a></li>"
					}else{
					htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:showIndexAnnounce("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/dot6.jpg">'+"  "+Ext.util.Format.ellipsis((notices[i].title+"("+notices[i].announcetime+")"),32,false)+''+"</a><a href='javascript:showAnnounceRead("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/vote_item.gif" ext:qtip="点击查询查阅信息">'+"</a></li>"
					}	
				}
					
					var o=document.getElementById("indexnews");
					o.innerHTML=htmls;
				}
			});
};
<%--邮件加载
    author 刘鑫
    修改时间 15-3-16
    --%>
function loademail(){
Ext.lib.Ajax.getConnectionObject = function() {  
    var activeX = ['MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];  
    function createXhrObject(transactionId) {  
        var http;  
        try {  
            http = new XMLHttpRequest();  
        } catch (e) {  
            for (var i = 0; i < activeX.length; ++i) {  
                try {  
                    http = new ActiveXObject(activeX[i]);  
                    break;  
                } catch (e) {  
                }  
            }  
        } finally {  
            return {  
                conn : http,  
                tId : transactionId  
            };  
        }  
    }  
  
    var o;  
    try {  
        if (o = createXhrObject(Ext.lib.Ajax.transactionId)) {  
            Ext.lib.Ajax.transactionId++;  
        }  
    } catch (e) {  
    } finally {  
        return o;  
    }  
}; 

 var conn = Ext.lib.Ajax.getConnectionObject().conn;  
            conn.open("get", 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticeHiszhuye.biz.ext', false);   
            conn.send(); 
					var res = Ext.decode(conn.responseText);
					var emails = res.data;
					var htmls = "";
					for (var i=0;i<emails.length;i++){
					if(emails[i].readstatus=='1'){
					htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:showzhuyeNotice("+emails[i].noticeid+")'>"+'<img  src="frame/ui/img/new_mail.gif" ext:qtip="未读">'+"  "+Ext.util.Format.ellipsis(("("+emails[i].sendusername+")&nbsp&nbsp"+emails[i].title+"("+emails[i].sendtime+")"),40,false)+''+"</a></li>"
					}else{
					htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:showzhuyeNotice("+emails[i].noticeid+")'>"+'<img  src="frame/ui/img/readmail.gif" ext:qtip="已读">'+"  "+Ext.util.Format.ellipsis(("("+emails[i].sendusername+")&nbsp&nbsp"+emails[i].title+"("+emails[i].sendtime+")"),40,false)+''+"</a></li>"
					}	
				}
					var o=document.getElementById("indexemail");
					o.innerHTML=htmls;
<%--	Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticeHiszhuye.biz.ext',
				success : function(resp) {
					var res = Ext.decode(resp.responseText);
					var emails = res.data;
					var htmls = "";
					for (var i=0;i<emails.length;i++){
					if(emails[i].readstatus=='1'){
					htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:showzhuyeNotice("+emails[i].noticeid+")'>"+'<img  src="frame/ui/img/new_mail.gif" ext:qtip="未读">'+"  "+Ext.util.Format.ellipsis(("("+emails[i].sendusername+")&nbsp&nbsp"+emails[i].title+"("+emails[i].sendtime+")"),40,false)+''+"</a></li>"
					}else{
					htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:showzhuyeNotice("+emails[i].noticeid+")'>"+'<img  src="frame/ui/img/readmail.gif" ext:qtip="已读">'+"  "+Ext.util.Format.ellipsis(("("+emails[i].sendusername+")&nbsp&nbsp"+emails[i].title+"("+emails[i].sendtime+")"),40,false)+''+"</a></li>"
					}	
				}
					var o=document.getElementById("indexemail");
					o.innerHTML=htmls;
				}
			});--%>
<%--setTimeout("loademail()",5000);--%>
<%--setInterval("loademail()",5000);--%>
};
<%--管理制度加载
    author 刘鑫
    修改时间 15-3-16
    --%>
function loadglzdAnnounce(){
    var htmls ='';
	Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.showglzdAnnounces.biz.ext',
				success : function(resp) {
					var res = Ext.decode(resp.responseText);
					var notices = res.data;
					var htmls = "";
					for (var i=0;i<notices.length;i++){
					if(notices[i].flag=='0'){
					htmls+="<li><a  style='text-decoration:none;color:#000000' href='javascript:showIndexAnnounce("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/dot6.jpg">'+"  "+Ext.util.Format.ellipsis((notices[i].title+"("+notices[i].announcetime+")"),44,false)+'<img  src="frame/ui/img/new.gif"  style="width:28px;height:11px;">'+"</a><a href='javascript:showAnnounceRead("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/vote_item.gif" ext:qtip="点击查询查阅信息">'+"</a></li>"
					}else{
					htmls+="<li><a  style='text-decoration:none;color:#000000' href='javascript:showIndexAnnounce("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/dot6.jpg">'+"  "+Ext.util.Format.ellipsis((notices[i].title+"("+notices[i].announcetime+")"),44,false)+''+"</a><a href='javascript:showAnnounceRead("+notices[i].announceid+")'>"+'<img  src="frame/ui/img/vote_item.gif" ext:qtip="点击查询查阅信息">'+"</a></li>"
					}	
				}
					var o=document.getElementById("indexoa");
					if(!Ext.isEmpty(htmls))
						o.innerHTML=htmls;
				}
			});
};

//待办数据查询
function loadWroking(){
	Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.remainQuery.biz.ext',
				success : function(resp) {
					var res = Ext.decode(resp.responseText);
					var works = res.data;
					if(!!works){
						var l = works.length<3? works.length: 3;
						var htmls = "";
						for (var i=0;i<l;i++){					
							htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:workslink()'>"+'<img  src="frame/ui/img/dot6.jpg" ext:qtip="点击查看待办信息">'+"  "+works[i].processinstname+"("+works[i].workitemname+")</a>"+'<img  src="frame/ui/img/new.gif" >'+"</li>"
						}
						var o=document.getElementById("indexworks");
						o.innerHTML=htmls;
					}
				}
			});
};

//业务提醒查询
function loadBusiness(){
	Ext.Ajax.request({
				url : 'com.keensen.ump.produce.quality.mptest.queryTestItems.biz.ext.biz.ext',
				success : function(resp) {
					var res = Ext.decode(resp.responseText);
					var works = res.data;
					if(!!works){
						var l = works.length<6? works.length: 5;
						var htmls = "";
						for (var i=0;i<l;i++){					
							htmls+="<li><a style='text-decoration:none;color:#000000' href='javascript:businesslink(" + '"' + works[i].itemCode + '"' +")'>"+'<img  src="frame/ui/img/dot6.jpg" ext:qtip="点击查看业务信息">'+"  "+works[i].title+"</a>"+'<img  src="frame/ui/img/new.gif" >'+"</li>"
						}
						var o=document.getElementById("div_business");
						o.innerHTML=htmls;
					}
				}
			});
};

<%--
//OA待办数据查询
function loadOAWroking(){
	Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.srmclient.common.common.oaWorkingQuery.biz.ext',
				success : function(resp) {
					var res = Ext.decode(resp.responseText);
					var works = res.data;
					var readData = res.readData;
					var htmls = "";									
					htmls+="<li><a href='javascript:workslink()'>"+'<img  src="frame/ui/img/dot6.jpg" ext:qtip="点击查看待办信息">'+"待办任务 ("+works.COUNT+")</a></li>"
					htmls+="<li><a href='javascript:readslink()'>"+'<img  src="frame/ui/img/dot6.jpg" ext:qtip="点击查看待阅信息">'+"待阅任务 ("+readData.COUNT+")</a></li>"
					
					var o=document.getElementById("indexoa");
					o.innerHTML=htmls;
				}
			});
};


function loadBizmap(){
	Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.loadMaps.biz.ext',
				success : function(resp) {
					var res = Ext.decode(resp.responseText);
					var maps = res.data;
					var role = res.rolecode;
					var htmls = "";
					for(var i=0;i<maps.length;i++){
						var mu = maps[i].list;
						if(mu){
							htmls+="<li><b>"+maps[i].reslabel+":</b><div>";
							for (var j=0;j<mu.length;j++){
								htmls+="<a href='javascript:openBizMap("+mu[j].resid+")'>"+mu[j].reslabel+"</a>";
							}
							htmls+="</div></li>";
						}
						
					}
					var o=document.getElementById("indexmaps");
					o.innerHTML=htmls;
					if(role!=null&&role!=''&& (role.indexOf("telephonist") >= 0 || role.indexOf("linemonitor") >= 0)){
						//var btm = document.getElementById("btm_menu");
						//btm.innerHTML = '<span><a href="javascript:phoneCenter()">呼叫中心</a></span><span>|</span>'+btm.innerHTML;	
						var callWin = new callWindow();
						var head=Ext.getCmp("indexLayout").items.itemAt(0);
						head.setHeight("164");
						head.items.insert(1,callWin.phonePanel);
						head.items.itemAt(2).setVisible(true);
						head.doLayout();
						Ext.getCmp("indexLayout").doLayout();
					}
				}
			});
};--%>

var orgwin = new Frame.ui.OrgSelectionWin({
				id : "OrgSelectionWin",
				loadMask : true,
				animateTarget : "switchorg"
}).show();

<%--延迟显示公告，0.3秒
    author 刘鑫
    修改时间 14-12-9
--%>
var task = new Ext.util.DelayedTask(loadAnnounce);
					task.delay(250);
var mailtask = new Ext.util.DelayedTask(loademail);
					mailtask.delay(300);

var worktask = new Ext.util.DelayedTask(loadWroking);
					worktask.delay(350);

//膜片测试-分析员,工艺员，配料员
<% if(roleCodes.indexOf("10001323")>-1 || roleCodes.indexOf("10001322")>-1 || roleCodes.indexOf("10001321")>-1){ %>					
//业务提醒					
var businesstask = new Ext.util.DelayedTask(loadBusiness);
businesstask.delay(450);

//5 分钟刷新一次业务提醒
Ext.TaskMgr.start({
    run: loadBusiness,
    interval: 30000
});

<% } %>					
var glzdtask = new Ext.util.DelayedTask(loadglzdAnnounce);
					glzdtask.delay(400);


</script>

