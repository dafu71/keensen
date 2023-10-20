<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2016-05-26 11:07:51
  - Description:
-->
<head>
<title>产品树</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.product.techChange');
</script>


<js:load scriptPath="pub/common/tree/productLoader.js" />
<js:load scriptPath="pub/common/tree/productTree.js" />

<js:load scriptPath="techChange/productTree/js/treeUi.js" />
<js:load scriptPath="techChange/productTree/js/treeEv.js" />

<script type="text/javascript">
		
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.product.techChange.productTreeMgr
		});
 </script>
</head>
<body>
<div id="productTreeDiv"></div>
</body>
</html>