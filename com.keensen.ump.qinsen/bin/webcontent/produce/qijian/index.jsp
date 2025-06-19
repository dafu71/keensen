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
  	boolean workerflag = roleId.indexOf("10001161")>-1;
    String uid = userObject.getUserId();
    String userOrgId = userObject.getUserOrgId();
    String uname = userObject.getUserName();
    int gyyFlag = roleId.indexOf("10001322")>-1?1:0;
    int modifyOrderNoFlag = roleId.indexOf("10001561")>-1?1:0;
    int monitorFlag = roleId.indexOf("30431")>-1?1:0;
    int waterTestFlag = roleId.indexOf("30622")>-1?1:0;
    //修改干湿膜订单号权限
    int modifyOrderNoFlag4Wet = 0;
    int modifyOrderNoFlag4Dry = 0;
    if(modifyOrderNoFlag==1){
    	//气检湿膜贴标,梁彪、李长林
    	if(uid.equals("KS00141")||uid.equals("KS00524")){
    		modifyOrderNoFlag4Wet = 1;
    	}
    	//气检干膜贴标,罗海鹰、任栋、吴敏、袁娜
		if(uid.equals("LHY")||uid.equals("KS00307")||uid.equals("KS01147")||uid.equals("XXB")||uid.equals("KS01441") ||uid.equals("KS01479")){   		
    		modifyOrderNoFlag4Dry = 1;
    	}
    }
    String rootUrl = request.getRequestURL().toString();
  	rootUrl = rootUrl.replace("/qinsen/produce/qijian/index.jsp","");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>气检记录</title>

<!-- 导出Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.2.1/exceljs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.qinsen.produce');
</script>
<script type="text/javascript">
	function dayDiff(start,end){
		var datediff = (new Date(end)) - (new Date(start));
		datediff = datediff / 24 / 60 / 60 / 1000;
		return datediff;
		
	}
</script>
<ext:dict property="ABF_YESORNO" dictTypeId="ABF_YESORNO" />

<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="pub/common/lineCombo.js" />
<js:load scriptPath="pub/common/componentworkerCombo.js" />
<js:load scriptPath="pub/common/tacheteamCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />

<js:load scriptPath="qinsen/produce/qijian/js/manageUi.js" />
<js:load scriptPath="qinsen/produce/qijian/js/manageEv.js" />

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">

	var labelRootUrl = "<%=rootUrl %>";

  var uid = "<%=uid %>";
  var gyyFlag = <%=gyyFlag %>;
  var monitorFlag = <%=monitorFlag %>;
  var modifyOrderNoFlag = <%=modifyOrderNoFlag %>;
  
  var modifyOrderNoFlag4Wet = <%=modifyOrderNoFlag4Wet %>;
  var modifyOrderNoFlag4Dry = <%=modifyOrderNoFlag4Dry %>;
  
  var waterTestFlag = <%=waterTestFlag %>;
   var nowStaffName = "<%=uname %>";
  var nowStaffId = <%=operatorid %>;
   <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>
  var listid = 'produce-qijianmgr-list';
  
  
  var qijianExportButton = Ext.id();
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.qinsen.produce.qijianMgr
		});
 </script>
</head>
<body>
<div id="qijianmgr"></div>

</body>
</html>
