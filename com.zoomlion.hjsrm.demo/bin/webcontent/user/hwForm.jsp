<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.text.*"%>
<%@ page import="cn.jnz.encryption.MD5"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

	String IP = request.getRemoteAddr();
	String ip1 = IP.substring(0, 3);
	String url = "";
	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhh");
	Calendar c = Calendar.getInstance();
	String date = sdf.format(c.getTime());
	//String userAccount=session.getAttribute("userAccount");
	//UMP���
	url = "http://10.87.14.48:8080/eos-default/com.zoomlion.ump.umpclient.oa.Login.flow";
	url+="?oaAccount="+request.getParameter("userAccount")+"&oaKey="+MD5.encrypt(request.getParameter("userAccount") + date);
	//SRM���
	String srmurl = "http://10.87.14.13:8080/default/com.zoomlion.hjsrm.srmclient.common.oalogin.flow";
    srmurl+="?oaAccount="+request.getParameter("userAccount")+"&oaKey="+MD5.encrypt(request.getParameter("userAccount") + date);
	
%> 

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<body leftmargin="0" topmargin="0">
 <table border="0" align="left" cellpadding="0" cellspacing="0">   
		<tr>
		<td width="240" height="61" align="left" valign="top" >
		<iframe id="umpFrame" src="<%=url%>" name="umpFrame"
					style="width:100%;height:100%" frameBorder="0" scrolling="no"></iframe>
		</td>
		</tr>
		<tr>
		<td width="240" height="60" align="left" valign="top">
		<iframe id="srmFrame" src="<%=srmurl%>" name="srmFrame"
					style="width:100%;height:100%" frameBorder="0" scrolling="no"></iframe>
		</td>
		</tr>
	</table>

	</body>
</html>