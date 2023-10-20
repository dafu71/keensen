<%-----------------------------------------------------------------------------
/******************************************************************
*版权所有： 中联重科环境产业公司
*描    述：  
*创建日期： 2014-9-17
*补丁编号： G3_P_20140915_01_246
*作    者： 吕俊涛
*******************************************************************/
//==============================修改历史===========================
// 补丁编号                    修改人     日期           区域       备注
// G3_P_20140915_01_246    吕俊涛     2014-9-17    集团      
//
//=================================================================
-------------------------------------------------------------------------------%>
<%@page pageEncoding="UTF-8" import="java.util.*"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="com.zoomlion.hjsrm.frame.auth.config.FrameConfig"%>
<%@page import="com.zoomlion.hjsrm.core.common.Common"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@ page import="java.text.*"%>
<%@ page import="cn.jnz.encryption.MD5"%>

<html>
<head>
<title><%=sysname%></title>
<base href="<%=basePath%>">
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
String userid=userObject.getUserId();
SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhh");
Calendar c = Calendar.getInstance();
String date = sdf.format(c.getTime());

//OA登陆时，验证传过来的参数是否相等；
String keycode=request.getParameter("keycode");
String srmkey=MD5.encrypt(userid+date);

String redirect = "0";
if("".equals(keycode) || keycode==null){
	String referer = request.getHeader("Referer");	
	if (null == referer
			|| (referer.indexOf("index.jsp") < 0 && referer
			.indexOf("login.jsp") < 0)) {
		redirect = "1";
	}
}else{//OA登录验证参数是否相等；
	if(!srmkey.equals(keycode)){
		redirect = "1";
	}
}
	//取出dataorgid	
	String dataorgid = (String) userObject.getAttributes().get(
			"dataorgid");
%>
<!-- 样式文件 -->
<link rel="stylesheet" type="text/css"
	href="frame/ui/jslib/ext_340/resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css"
	href="frame/ui/css/icons/icons.css" />
<link rel="stylesheet" type="text/css" href="frame/ui/css/Spinner.css" />
<link rel="stylesheet" type="text/css" href="frame/ui/css/tree-node.css" />
<link rel="stylesheet" type="text/css"
	href="frame/ui/css/MultiSelect.css" />
<link rel="stylesheet" type="text/css" href="frame/ui/css/treegrid.css" />
<link rel="stylesheet" type="text/css"
	href="frame/ui/css/edittreegrid.css" />

<script type="text/javascript">
//定义一个全局的DATAORGID
var DATAORGID = "<%=dataorgid %>"
var redirect = "<%=redirect %>"
</script>
<script type="text/javascript" src="frame/ui/jslib/comm.js"></script>
<!-- EXT库 -->
<script type="text/javascript"
	src="frame/ui/jslib/ext_340/adapter/ext/ext-base.js"></script>
<script type="text/javascript"
	src="frame/ui/jslib/ext_340/ext-all.js.gzip"></script>
<script type="text/javascript"
	src="frame/ui/jslib/ext_340/ext-lang-zh_CN.js"></script>
<%--<script type="text/javascript"
	src="frame/ui/jslib/newjquery/jquery-2.2.0.min.js"></script>--%>
<script type="text/javascript">
Ext.util.CSS.swapStyleSheet("theme", "<%=themecss%>");
</script>
<!-- ext扩展 -->
<%
			if (roles_rolecode_str != null
			&& roles_rolecode_str != ""
			&& (roles_rolecode_str.indexOf("telephonist") >= 0 || roles_rolecode_str
			.indexOf("linemonitor") >= 0)) {
%>
<script type="text/javascript" src="frame/ui/jslib/expand/Window.js"></script>
<%
}
%>
<link rel="stylesheet" type="text/css" href="frame/ui/css/index.css" />
<!--单元格的内容选中 -->
<link rel="stylesheet" type="text/css"
	href="frame/ui/css/theme/x-selectable.css" />

<script type="text/javascript">
	if  (!Ext.grid.GridView.prototype.templates) {      
        Ext.grid.GridView.prototype.templates = {};      
    }      
    Ext.grid.GridView.prototype.templates.cell =  new  Ext.Template(      
         '<td class="x-grid3-col x-grid3-cell x-grid3-td-{id} x-selectable {css}" style="{style}" tabIndex="0" {cellAttr}>' ,      
         '<div class="x-grid3-cell-inner x-grid3-col-{id}" {attr}>{value}</div>' ,      
         '</td>'      
    );  
</script>
<script type="text/javascript"
	src="frame/ui/jslib/extex/fileupload/swfupload.js"></script>
<script type="text/javascript" src="frame/ui/jslib/extex.js"></script>
<!-- 功能组件 -->
<script type="text/javascript" src="frame/ui/jslib/widge.js"></script>
<!-- 业务组件 -->
<script type="text/javascript" src="frame/ui/jslib/bizex.js"></script>
<!-- 框架页面 -->
<script type="text/javascript" src="frame/ui/jslib/login.js"></script>
<!-- 框架页面 -->
<script type="text/javascript" src=frame/ui/jslib/index.js></script>
<!-- 框架组件 -->
<script type="text/javascript" src=frame/ui/jslib/event.js></script>
<!-- 验证库 -->
<script type="text/javascript" src=frame/ui/jslib/verifyLib.js></script>
<script type="text/javascript" src=frame/ui/jslib/echarts.min.js></script>
<script type="text/javascript">
var callWin;
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;
function mopen()
{	
	mcancelclosetime();
	ddmenuitem = document.getElementById("hiddenMenu");
	ddmenuitem.style.visibility = 'visible';
	var hiddenMenu_layout=document.getElementById("hiddenMenu_layout");
	hiddenMenu_layout.style.visibility = 'visible';
	hiddenMenu_layout.height=ddmenuitem.offsetHeight+"px";

}
function mclose()
{
	if(ddmenuitem) {ddmenuitem.style.visibility = 'hidden';}
	var hiddenMenu_layout=document.getElementById("hiddenMenu_layout");
	hiddenMenu_layout.style.visibility = 'hidden';
}

function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 

</script>
<!-- 打印机控件 -->

<script type="text/javascript" src="interfaces/print/common.js"></script>
<object id="LODOP_OB"
	classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0>
	<embed id="LODOP_EM" type="application/x-print-lodop" width=0 height=0></embed>
</object>
</head>
<body>
<div id="loading-mask" style="display: none">
<div class="loading-indicator"><img
	src="frame/ui/img/extanim32.gif" width="35" height="35"
	style="margin-right:8px;float:left;vertical-align:top;" />UMP_V1.0<br>
<span id="loading-msg">正在加载功能......</span></div>
</div>
<div id="hiddenMenu" onmouseover="mcancelclosetime()"
	onmouseout="mclosetime()"></div>
<iframe id="hiddenMenu_layout" class="hiddenMenu_layout" frameborder="0"
	scrolling="no"></iframe>
</body>
</html>
