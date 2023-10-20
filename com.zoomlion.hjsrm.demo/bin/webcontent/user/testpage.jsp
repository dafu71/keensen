<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): wangfuqiang
  - Date: 2014-11-14 11:05:16
  - Description:
-->
<head>
<title>测试页面</title>
<style>
.bs{
border:#FF66CC solid;
font-size:16px;
height:100
}
</style>
<script type="text/javascript">
Ext.query('div.bs');
Ext.select('div.bs').each(function(i){
	//alert(i.dom.innerHTML);
});
</script>
<js:load scriptPath="demo/user/js/testUi.js"/>
</head>
<body>
<div id="testPan"></div>
<div id="c4" class="bs">第4天</div>
<div id="c5" class="bs">第5天</div>
<div id="c6" class="bs">第6天</div>
</body>
</html>