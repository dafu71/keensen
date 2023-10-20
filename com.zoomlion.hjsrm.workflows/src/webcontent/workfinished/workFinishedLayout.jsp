<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): 蔡慧文
  - Date: 2013-03-26 16:06:52
  - Description:我的工作-已办工单
-->
<head>
<title>已办工单</title>
<script type="text/javascript">
	Ext.util.CSS.createStyleSheet('','busi_css_sht1');
	Ext.util.CSS.swapStyleSheet('busi_css_sht1','workflows/businessremain/css/btn_icon.css');
	 BIZ.ns('com.zoomlion.hjsrm.workflows');
</script>
<ext:dict property="KH_USERTYPE"   dictTypeId="KH_USERTYPE" />
<ext:dict property="KH_CUSTINFO_CERTTYPE"   dictTypeId="KH_CUSTINFO_CERTTYPE" />
<ext:dict property="BS_WORKLISTINFO_WORKLISTTYPE"   dictTypeId="BS_WORKLISTINFO_WORKLISTTYPE" filterOp="in" filterStr="1,2"/>
<js:load scriptPath="pub/busi/busitype/busitypeCascadeCombo.js"/>
<js:load scriptPath="workflows/common/exBorderLayout.js"/>
<js:load scriptPath="workflows/common/lockingGridView.js"/>
<js:load scriptPath="pub/cust/common/abstractSelectField.js"/>
<js:load scriptPath="pub/cust/user/userSelectField.js"/>
<js:load scriptPath="pub/resource/address/addrcombox.js"/>
<js:load scriptPath="workflows/workfinished/js/workFinishedUi.js"/>
<js:load scriptPath="workflows/workfinished/js/workFinishedEv.js"/>
<script type="text/javascript">
	FunctionMgr.load({mainfn : com.zoomlion.hjsrm.workflows.WorkFinishedView});
 </script>
</head>
<body>
	<div id="WorkfinishedDiv"></div>
</body>
</html>