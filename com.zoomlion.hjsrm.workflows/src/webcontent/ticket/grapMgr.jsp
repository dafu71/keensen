<%@page pageEncoding="UTF-8"%>
<%@include file="/workflow/wfcomponent/web/common/common.jsp"%>
<%
	String pId = request.getParameter("pId");
	String workItemId = request.getParameter("workItemId");
	String size = "";
	if (request.getParameter("size") == null
			|| request.getParameter("size").equals("0")) {
		size = "1.0";
	} else {
		size = request.getParameter("size");
	}
%>
<html>
<%-- 
  - Author(s): 吕俊涛
  - Date: 2013-03-23 20:53:05
  - Description:
--%>
<head>
<title>流程图</title>
<script type="text/javascript">
	var workItemId = '<%=workItemId %>';
	
   function loadItem(object){
     //加载流程工作项
	var store = parent.Ext.getCmp(workItemId).store;
	var activityDefID = object.getAttribute('activityDefID');
	var processInstId = object.getAttribute('processInstId');
	var activityInstId = object.getAttribute('activityInstId');
	//	过滤掉开始和结束的点击
	if(activityDefID == 'startActivity' || activityDefID == 'finishActivity'){
		return;
	}
	//	过滤掉还没有激活的图元点击
	if(processInstId == null || activityInstId == null){
		parent.Ext.Msg.alert('系统提示','该活动还没有被激活,请重新选择!');
		return;
	}
	store.load({
			params : {
				"condition/processinstid" : processInstId,
				"condition/activitydefid" : activityDefID
			}
	});
   }
  function handleZoom(v) {
    var date=new Date();
    var url=window.location.href;
    
	window.location.href="grapMgr.jsp?pId=<%=pId %>&size="+v+"&flag="+date.getTime() +"&workItemId="+workItemId;
	
}
   
</script>
</head>
<body
	style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;overflow:hidden;">
<table align="center" border="0" style="height:100%;width:100%;">
	<tr>
		<td style="height: 24px;" align="right">
		<table>
			<tr>
				<td colspan="3" align="left"><font size="2">缩放比例:</font></td>
				<td class="detailLabelTD" align="right" nowrap><select
					id="zoomQuotiety"
					onchange="handleZoom(this.options[this.options.selectedIndex].value)"
					size="1" name="D1">
					<option value="0.5">50%</option>
					<option value="0.6">60%</option>
					<option value="0.7">70%</option>
					<option value="0.8">80%</option>
					<option value="0.9">90%</option>
					<option value="1" selected>100%</option>
					<option value="1.1">110%</option>
					<option value="1.2">120%</option>
					<option value="1.0">自动调整大小</option>
				</select></td>
				<td><input type="button" style="width:70" class="button"
					value="刷新" onClick="handleZoom('1')"></td>
			</tr>
		</table>
		</td>
	</tr>
	<tr>
		<td>
		<div>
		<wf:processGraph processInstID="<%=pId %>" zoomQuotiety="<%=size %>" ondblclick="loadItem(this)" />
		</div>
		</td>
	</tr>
</table>
<SCRIPT type="text/javascript">
	var obj=document.getElementById("zoomQuotiety");
	for(var i=0;i<obj.options.length;i++){
	   if(obj.options[i].value=="<%=size %>"){
	     obj.options[i].selected=true;
	   }
	}
	</SCRIPT>
</body>
</html>
