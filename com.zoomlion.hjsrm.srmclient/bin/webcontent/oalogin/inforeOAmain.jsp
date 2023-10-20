<%@page import="com.bizenit.idm.siam.client.authentication.AttributePrincipal" %>
<%@page import="java.util.*"%>
<%@page import="java.text.*"%>
<%@page import="java.util.Map" %>
<%@ page import="cn.jnz.encryption.MD5"%>
<%
String oaAccount="";
String oaKey="";
SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhh");
Calendar c = Calendar.getInstance();
String cdate = sdf.format(c.getTime());
AttributePrincipal principal = (AttributePrincipal) request.getUserPrincipal();
Map user=principal.getAttributes();
if(user.get("employeeNumber")!=null)//获取工号
{
   oaAccount = user.get("employeeNumber").toString();
   oaKey = oaAccount + cdate;
    oaKey = MD5.encrypt(oaKey);
}
 %>
<script type="text/javascript">
var oaAccount = "<%=oaAccount %>";
var oaKey = "<%=oaKey %>";
  window.location.href="com.zoomlion.hjsrm.srmclient.common.inforeOAlogin.flow?oaAccount="+oaAccount+"&oaKey="+oaKey;
</script>
