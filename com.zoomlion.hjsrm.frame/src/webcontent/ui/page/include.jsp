<%-----------------------------------------------------------------------------
/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改组织机构模型
 * 创建日期： 2014-9-24
 * 补丁编号： G3_P_20140915_01_238 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_238 吕俊涛   2014-9-24  集团
//
// =================================================================
-------------------------------------------------------------------------------%>
<%@page import="com.zoomlion.hjsrm.core.common.Common"%>
<%@page import="com.zoomlion.hjsrm.frame.auth.config.FrameConfig"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@ taglib uri="http://eos.primeton.com/tags/user" prefix="ext"%>
<%@ taglib uri="http://eos.primeton.com/tags/hjsrm/js" prefix="js"%>
<%@ taglib uri="http://eos.primeton.com/tags/hjsrm/ticket" prefix="lpt"%>
<%
	//判断session中是否已有用户登录  否则跳转到登录页面
	com.eos.data.datacontext.IUserObject user = null;
	if (com.eos.data.datacontext.DataContextManager.current()
			.getMUODataContext() == null) {
		user = (com.eos.data.datacontext.IUserObject) com.eos.data.datacontext.DataContextManager
		.current()
		.getSessionCtx()
		.get(
				com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	} else {
		user = com.eos.data.datacontext.DataContextManager.current()
		.getMUODataContext().getUserObject();
	}

	//用户为空 或是临时用户登录  跳转到登录页面
	CheckedResult ishsright = PermissionUtil.hasPermission(request
			.getRequestURI(), user);

	if (user == null || user.getUserId().equals("guest")
			|| ishsright.equals(CheckedResult.FORWARDLOGIN)) {
		request.getRequestDispatcher("/frame/ui/page/relogin.jsp")
		.forward(request, response);
	}
	//踢用户
	boolean isLogin = Common.isLogin();
	if (isLogin == false) {
	request.getRequestDispatcher("/frame/ui/page/kick.jsp")
	.forward(request, response);
	}

	if (ishsright.equals(CheckedResult.REJECT)) {
		request.getRequestDispatcher("/frame/ui/page/errors.jsp")
		.forward(request, response);
	}

	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String hasvcode = FrameConfig.getFrameConfigValue("frame-config",
			"login-config", "use_verify_code");
	String sysname = Common.getConfigValue("SY_SYSNAME", user);
	String hotline = Common.getConfigValue("SY_HOTLINE", user);
	String version = Common.getConfigValue("SY_VERSION", user);
	String logoimg = Common.getConfigValue("SY_LOGOIMG", user);
	String welcomeimg = Common.getConfigValue("SY_WELCOMEIMG", user);
	String tabnum = Common.getConfigValue("SY_TABNUM", user);
	Map themeMap = new HashMap();
	themeMap.put("BDD3EF",
			"frame/ui/jslib/ext_340/resources/css/ext-all.css");
	themeMap.put("000000", "frame/ui/css/theme/xtheme-slickness.css");
	themeMap.put("545554", "frame/ui/css/theme/xtheme-black.css");
	themeMap.put("ABADAF", "frame/ui/css/theme/xtheme-darkgray.css");
	themeMap.put("D8D8D8", "frame/ui/css/theme/xtheme-gray.css");
	themeMap.put("424370", "frame/ui/css/theme/xtheme-midnight.css");
	themeMap.put("52567E", "frame/ui/css/theme/xtheme-indigo.css");
	themeMap.put("5E7189", "frame/ui/css/theme/xtheme-slate.css");
	themeMap.put("D1C5FF", "frame/ui/css/theme/xtheme-purple.css");
	themeMap.put("9ACD68", "frame/ui/css/theme/xtheme-olive.css");
	themeMap.put("9CD4C1", "frame/ui/css/theme/xtheme-green.css");
	themeMap.put("FC6161", "frame/ui/css/theme/xtheme-red5.css");
	themeMap.put("FFB5B5", "frame/ui/css/theme/xtheme-peppermint.css");
	themeMap.put("E2B4D5", "frame/ui/css/theme/ext/xtheme-pink.css");
	themeMap.put("C49E92", "frame/ui/css/theme/xtheme-chocolate.css");
	themeMap.put("FF8C37", "frame/ui/css/theme/xtheme-orange.css");

	String theme = (String) user.getAttributes().get("theme");
	String setpassword = (String) user.getAttributes().get(
			"setpassword");
	String remoteIP = Common.getClientIpAddr(request);
	String roles_rolecode_str = (String) user.getAttributes().get(
			"roles_rolecode_str");
	String themecss = null;

	if (theme == null) {
		themecss = (String) themeMap.get("BDD3EF");
	} else {
		themecss = (String) themeMap.get(theme);
	}

	boolean isArae = false;
	String USER_DATAORGTYPE = (String) user.getAttributes().get(
			"dataorgtype");
	if (USER_DATAORGTYPE != null && USER_DATAORGTYPE.trim().equals("1")) {
		isArae = true;
	}
	String USER_DATAORGID = (String) user.getAttributes().get(
			"dataorgid");
	if (USER_DATAORGID == null) {
		USER_DATAORGID = "";
	}
	if (USER_DATAORGID.equalsIgnoreCase("0")) {
		USER_DATAORGID = "-1";
	}
%>
<%@page import="com.eos.common.cache.CacheFactory"%>
<%@page import="com.eos.common.cache.ICache"%>
<%@page import="com.eos.access.authorization.CheckedResult"%>
<%@page import="com.zoomlion.hjsrm.frame.auth.util.PermissionUtil"%>
<script type="text/javascript">
  	var contextPath = '${pageContext.request.contextPath}';
  	var orgnames = "无";
  	var setpassword = '<%=setpassword%>';
  	var username = '<%= user.getUserName()%>';
  	var userid = '<%= user.getUserId()%>';
  	var hasvcode = <%= hasvcode%>;
  	var sysname = '<%= sysname%>';
  	var hotline = '<%= hotline%>';
  	var tabnum = <%= tabnum%>;
  	var version = '<%= version%>';
  	var logoimg = '<%= logoimg%>';
  	var remoteIP = '<%= remoteIP%>';
  	var roles_rolecode_str = '<%= roles_rolecode_str%>';
  	var isArea = <%= isArae%>;
  	var USER_DATAORGID = '<%= USER_DATAORGID%>';
</script>
