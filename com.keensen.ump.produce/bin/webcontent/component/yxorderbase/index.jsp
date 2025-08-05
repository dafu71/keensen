<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
	com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  	String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  	Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  	String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  	String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
    String uid = userObject.getUserId();
    String userName = userObject.getUserName();
    String mConfirm = "0";//生产管理部管理员
    
    String allRight = "0";
    
    if(roleId.toString().indexOf("10001521")!=-1 || uid.equals("sysadmin")){
		allRight="1";
  	}
    
    if(roleId.toString().indexOf("10001481")!=-1 || uid.equals("sysadmin")){
		mConfirm="1";
  	}
  	String rootUrl = request.getRequestURL().toString();
  	rootUrl = rootUrl.replace("produce/component/yxorderbase/index.jsp","");
  	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>产品销售统计表</title>

<!-- 导出Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.2.1/exceljs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component');
</script>

<ext:dict property="KS_YXORDER_PHOTO_SINGLE" dictTypeId="KS_YXORDER_PHOTO_SINGLE" />
<ext:dict property="KS_YXORDER_PHOTO_ALL" dictTypeId="KS_YXORDER_PHOTO_ALL" />

<js:load scriptPath="pub/common/datetimeRegion.js"/>

<js:load scriptPath="pub/common/optColumnWin.js"/>
<js:load scriptPath="pub/common/mpspecCombo.js" />


<%--改版
<js:load scriptPath="produce/component/yxorderbase/js/manageUi2.js"/>
<js:load scriptPath="produce/component/yxorderbase/js/manageEv.js"/>
--%>

<js:load scriptPath="produce/component/yxorderbase/js/manageUi3.js"/>
<js:load scriptPath="produce/component/yxorderbase/js/manageEv3.js"/>


<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}

.mya {
  color: blue; /* 设置链接颜色为蓝色 */
  text-decoration: none; /* 去除下划线 */
}

.mya:hover {
  color: red; /* 鼠标悬停时改变颜色 */
}

.custom-row-height .x-grid3-row {
    height: 50px; /* 设置行高 */
    line-height: 50px; /* 设置行内文本的垂直居中 */
}
</style>

<script type="text/javascript">
var markRootUrl = "<%=rootUrl %>";
  var uid = "<%=uid %>";
  var mConfirm = "<%=mConfirm %>";
  var userName = "<%=userName %>";
  var allRight = "<%=allRight %>";
  
  var exportButton = Ext.id();
 
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.yxorderbaseMgr
		});
 </script>
</head>
<body>
<div id="yxorderbasemgr"></div>

<div style="display: none">
				
		<form name="printPreViewForm2" id="componentmarktemplatepreviewForm2" action="" target="_blank" method="post" accept-charset="UTF-8">
			<input type="hidden" name="drawingCode"/>
		</form>
	</div>
</body>
</html>