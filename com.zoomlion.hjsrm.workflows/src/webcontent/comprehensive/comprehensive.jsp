<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<%-- 
  - Author(s): 吕俊涛
  - Date: 2013-03-20 13:47:47
  - Description:
--%>
<head>
<title>综合工作单查询</title>
<script type="text/javascript">
	Ext.util.CSS.swapStyleSheet('busi_css_sht1','workflows/businessremain/css/btn_icon.css');
	BIZ.ns('com.zoomlion.hjsrm.workflows');
 </script>
 
<ext:dict dictTypeId="BS_WORKLISTINFO_WORKLISTTYPE" property="BS_WORKLISTINFO_WORKLISTTYPE" filterOp="in" filterStr="1,2"/>
<ext:dict dictTypeId="BS_APPLYINFO_CHNLTYPE" property="BS_APPLYINFO_CHNLTYPE"/>
<ext:dict dictTypeId="KH_USERTYPE" property="KH_USERTYPE"/>
<ext:dict dictTypeId="KH_CUSTINFO_CERTTYPE" property="KH_CUSTINFO_CERTTYPE"/>
<ext:dict property="BS_WORKPRIORITY"   dictTypeId="BS_WORKPRIORITY" />
<ext:dict property="PB_ISORNOT"   dictTypeId="PB_ISORNOT" />
<ext:dict property="BS_CANCELCAUSE"   dictTypeId="BS_CANCELCAUSE" />


<js:load scriptPath="pub/busi/busitype/busitypeCascadeCombo.js"/>
<js:load scriptPath="pub/cust/common/abstractSelectField.js"/>
<js:load scriptPath="pub/cust/user/userSelectField.js"/>
<js:load scriptPath="pub/resource/address/addrcombox.js"/>

<js:load scriptPath="workflows/common/commHandler.js"/>

<js:load scriptPath="workflows/comprehensive/js/comprehensiveUi.js"/>
<js:load scriptPath="workflows/comprehensive/js/comprehensiveEv.js"/>
<script type="text/javascript">
   FunctionMgr.load({mainfn : com.zoomlion.hjsrm.workflows.compreMgr });
</script>  
</head>
<body>
<div id="compreDiv"></div>
</body>
</html>
