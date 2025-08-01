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
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>裁叠膜记录</title>

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
<ext:dict property="STORAGE_TYPE"   dictTypeId="STORAGE_TYPE" />
<ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />
<ext:dict property="KS_QUALITY_JUDGE_ITEM"   dictTypeId="KS_QUALITY_JUDGE_ITEM" />

<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/supCombo.js" />
<js:load scriptPath="pub/common/mpworkerCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/mplineCombo.js" />
<js:load scriptPath="pub/common/mpperfCombo.js" />
<js:load scriptPath="pub/common/prodFlagSelCombo.js" />
<js:load scriptPath="pub/common/componentlineCombo.js" />
<js:load scriptPath="pub/common/tacheteamCombo.js" />
<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="pub/common/componentworkerCombo.js" />
<js:load scriptPath="pub/common/defectViewWin.js" />

<js:load scriptPath="pub/common/defectWin.js" />

<js:load scriptPath="qinsen/produce/cdm/js/manageUi.js"/>
<js:load scriptPath="qinsen/produce/cdm/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">
  var uid = "<%=uid %>";
  
  var chooseOrderBtn = Ext.id();
  var nowStaffName = "<%=uname %>";
  var nowStaffId = <%=operatorid %>;
   <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>
  var listid = 'produce-caidiemo-list';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.qinsen.produce.CaidiemoMgr
		});
 </script>
</head>
<body>
<div id="caidiemomgr"></div>
<div style="display: none">
<form name="printForm" id="cdmprintForm" action="" target="_blank" method="post" accept-charset="UTF-8">
			<input type="hidden" name="batchId"/>
			<input type="hidden" name="batchIdStr"/>
			<input type="hidden" name="batchNo"/>
			<input type="hidden" name="orderNo"/>
			<input type="hidden" name="tumoBatchNo"/>
			<input type="hidden" name="prodSpecName"/>
			<input type="hidden" name="isToMixStr"/>
			<input type="hidden" name="quantity"/>
			<input type="hidden" name="numPerWad"/>
			<input type="hidden" name="blankingSize"/>
			<input type="hidden" name="denseNet"/>
			<input type="hidden" name="produceDate"/>
		</form>
</div>
</body>
</html>