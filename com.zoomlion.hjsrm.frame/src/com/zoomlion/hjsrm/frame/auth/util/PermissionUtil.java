package com.zoomlion.hjsrm.frame.auth.util;
import com.eos.access.authorization.CheckedResult;
import com.eos.access.authorization.IAccessedResource;
import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.IUserObject;
import com.eos.foundation.eoscommon.LogUtil;
import com.zoomlion.hjsrm.frame.auth.config.FrameConfigKey;
import com.zoomlion.hjsrm.frame.auth.loader.ResourcesCacheManager;
import com.zoomlion.hjsrm.frame.auth.permission.IPermissionChecker;
import com.zoomlion.hjsrm.frame.auth.permission.PermissionCheckerFactory;
/**
 * **************************************************
 * 描    述：  权限工具类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class PermissionUtil {
	
	private static String[] TYPES = { "unknown", "jsp", "flow", "biz", "service" };

	private static String[][] SUFFIXS = { { ".jsp" }, { ".flow", ".flowx", ".action", ".flow.ajax", ".flowx.ajax" }, { "biz.ajax", ".bizx.ajax", ".biz", "bizx”,“.biz.ext" },
			{ "remote", ".service.ajax" } };

	/**
	 * 方法描述:  判断用户是否有权限访问功能
	 * @author 侯杰
	 * @param accessedResource 功能或者资源的action
	 * @param userObject 用户信息，不能为空
	 * @return
	 * @throws Exception 
	 * @return CheckedResult
	 */
	public static CheckedResult hasPermission(IAccessedResource accessedResource, IUserObject userObject) throws Exception {
		return hasPermission(accessedResource.getResourceURI(), userObject);
	}

	/**
	 * 方法描述: 判断用户是否有权限访问功能
	 *          不进行权限校验的情况，有如下几种：
	 *          1、为配置中的免检用户如sysadmin
	 *          2、当前所调用的资源为portal资源(abframe的portal资源管理)
	 * @author 侯杰
	 * @param uri
	 * @param userObject
	 * @return 
	 * @return CheckedResult
	 */
	public static CheckedResult hasPermission(String uri, IUserObject userObject) {
		boolean haspermission = false;
		if (uri != null) {
			String[] info = getContributionName(uri);
			//类似/frame/ui/srmextjs/home/index.jsp 这种uri 找不到构建包时 info[1]为null，此时设置info[0]为uri
			String tmp=info[1];
			if(tmp==null||tmp.equals("")||tmp.equalsIgnoreCase(" null")){
				info[0]=uri;
			}
			try {
				haspermission = 
				isAdminUser(userObject) 						//判断是否免检用户
				|| isUnCheckedContributions(info[1], info[0]) 	//判断构件包的是否不需要校验
				|| isUncheckedPermssionResource(info[0])		//判断当前资源是否不在权限校验定义范围内
				|| isUncheckedPermssionResource(uri) ;			//判断名称是否满足规则
			} catch (Exception e1) {
				e1.printStackTrace();
			}
			if (!haspermission) {
				// session超时或未登录，返回登录页面
				if (userObject == null) {
					LogUtil.logDebug("权限检验:userObject==null", null, (Object) null);
					return CheckedResult.FORWARDLOGIN;
				}
				try {
					// 是否已注册资源
					if (isRegistedFunction(uri)||isRegistedFunction(info[0])) {
						try {
							IPermissionChecker checker = PermissionCheckerFactory.create(userObject, true);
							// 判断请求是否为已授权功能
							haspermission = checker.hasAccessPermission(info[0], false);
							// 判断请求是否为已授权功能的资源，如果是已授权功能则通过逻辑短路跳过资源判断
							haspermission = haspermission || checker.hasAccessPermission(info[0], true);
						} catch (Exception e) {
							e.printStackTrace();
							haspermission = false;
						}
					} else {
						haspermission = FrameConfigKey.PERMISSION_UNREGIST_ACCESS.getBLConfigValue();
					}
				} catch (Exception e) {
					LogUtil.logError("判断权限出现异常:url={0}", e, new Object[] { uri });
					haspermission = false;
				}
			}
		}
		return haspermission ? CheckedResult.THREAD_ACCESSED_PASS : CheckedResult.REJECT;
	}

	
	
	/**
	 * 方法描述: 判断用户是否有权限访问功能
	 *          不进行权限校验的情况，有如下几种：
	 *          1、为配置中的免检用户如sysadmin
	 *          2、当前所调用的资源为portal资源(abframe的portal资源管理)
	 * @author 侯杰
	 * @param funccode
	 * @param userObject
	 * @return 
	 * @return boolean
	 */
	public static boolean checkRight(String funccode, IUserObject userObject) {
		boolean hasright = false;
		try {
			IPermissionChecker checker = PermissionCheckerFactory.create(userObject, true);
			// 判断请求是否为已授权功能
			hasright = checker.hasRightPermission(funccode);
		} catch (Exception e) {
			e.printStackTrace();
			hasright = false;
		}
		return hasright;
	}
	
	/**
	 * 方法描述: 判断是否已登记的功能
	 * @author 侯杰
	 * @param url
	 * @return 
	 * @return boolean
	 */
	public static boolean isRegistedFunction(String url) {
		try {
			Object obj = ResourcesCacheManager.getCache().get(url);
			return obj != null;
		} catch (Exception e) {
			LogUtil.logError("获取功能缓存时出现异常", e, (Object) null);
			return false;
		}
	}

	/**
	 * 方法描述: 是否允许校验指定构件包的资源
	 * @author 侯杰
	 * @param contributionName 当前构件包元数据，只有进入页面流引擎才会生效,在发起请求进入流程之前获取到的ContributionMetaData为null
	 * @param resourceURI 当前访问资源
	 * @return
	 * @throws Exception 
	 * @return boolean 需要校验返回true,不需要校验返回false
	 */
	private static boolean isUnCheckedContributions(String contributionName, String resourceURI) throws Exception {
		boolean checked = true, unmached = true;
		// 先处理UNCHECK的
		String unchecked_contributions = FrameConfigKey.PERMISSION_UNCHECKED_CONTRIBUTIONS.getConfigValue("");
		for (String definedPath : unchecked_contributions.split(",")) {
			// 如果路径满足不校验的构件包集 checked = false;并且退出
			checked = !matchContributionName(contributionName, resourceURI, definedPath);
			if (!checked) {
				unmached = false;
				break;
			}
		}
		// 如果不满足不校验的构件包集合条件继续判断是否在需要判断的集合中
		if (checked) {
			String contributions = FrameConfigKey.PERMISSION_CHECKED_CONTRIBUTIONS.getConfigValue();
			for (String definedPath : contributions.split(",")) {
				checked = matchContributionName(contributionName, resourceURI, definedPath);
				if (checked) {
					unmached = false;
					break;
				}
			}
		}
		return !(unmached ? FrameConfigKey.PERMISSION_UNMATCH_CHECKED.getBLConfigValue(true) : checked);
	}



	/**
	 * 方法描述: 当前资源是否不在权限校验定义范围内
	 * @author 侯杰
	 * @param resourceURI
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	private static boolean isUncheckedPermssionResource(String resourceURI) throws Exception {
		boolean unchecked = false;
		for (String resource : FrameConfigKey.PERMISSION_UNCHECK_RESOURCE.getConfigValue().split(",")) {
			unchecked = matchContributionName(null, resourceURI, resource);
			if (unchecked)
				break;
		}
		return unchecked;
	}
	
	/**
	 * 方法描述: 获取url对应功能的所在的构件包名
	 * @author 侯杰
	 * @param url
	 * @return 
	 * @return String[]
	 */
	private static String[] getContributionName(String url) {
		String[] ret = null;
		int bindex = url.lastIndexOf("/");
		int eindex = url.indexOf("?");
		int type = 0;
		boolean GOT = false;
		String qName = url.substring((bindex < 0) ? 0 : bindex + 1, (eindex < 0) ? url.length() : eindex);
		String params = url.substring((eindex < 0) ? url.length() : eindex);
		for (String[] suffixes : SUFFIXS) {
			type++; 
			for (String suffix : suffixes) {
				if (qName.endsWith(suffix)) {
					String p = qName.substring(0, qName.length() - suffix.length());
					int i = p.lastIndexOf(".");
					String packageName = ((i < 0) ? null : p.substring(0, i));
					String name = p.substring((i < 0) ? 0 : i + 1);
					GOT = true;
					ret = new String[5];
					ret[0] = packageName + "." + name + "." + TYPES[type];
					ret[1] = packageName;
					ret[2] = name;
					ret[3] = params;
					ret[4] = TYPES[type];
					break;
				}
			}
			if (GOT) {
				break;
			}
		}
		if (!GOT) {
			ret = new String[5];
			ret[0] = url;
			ret[1] = url;
			ret[2] = url;
			;
			ret[3] = params;
			ret[4] = TYPES[type];
		}
		return ret;
	}

	/**
	 * 方法描述: 判断名称是否满足规则
	 * @author 侯杰
	 * @param conName
	 * @param uri
	 * @param rule
	 * @return 
	 * @return boolean
	 */
	private static boolean matchContributionName(String conName, String uri, String rule) {
		boolean matched = false;
		// 如果规则为空则为不匹配，否则继续判断
		if (rule != null && !rule.matches("^ *$")) {
			rule = rule.trim();
			if (rule.endsWith("*")) { // 以*结束
				rule = rule.substring(0, rule.length() - 1);
				if (rule.startsWith("*")) {// 以*开始并且以*结束
					rule = rule.substring(1);
					if (rule != null && !rule.matches("^ *$")) {
						if (conName != null) {
							matched = (conName.indexOf(rule) > -1);
						} else {
							matched = (uri.indexOf(rule) > -1);
						}
					} else {// 由两个**组成
						matched = true;
					}
				} else {
					if (rule != null && !rule.matches("^ *$")) {// 形如org.gocom.*
						if (conName != null) {
							matched = conName.startsWith(rule) || conName.concat(".").startsWith(rule);
						} else {
							matched = uri.startsWith(rule);
						}
					} else {// 只有一个*
						matched = true;
					}
				}
			} else if (rule.startsWith("*")) {// 形如*.auth
				rule = rule.substring(1);
				if (conName != null) {
					matched = conName.endsWith(rule);
				} else {
					matched = uri.endsWith(rule);
				}
			} else {// 形如 org.gocom.abframe.auth
				if (conName != null) {
					matched = conName.equals(rule);
				} else {
					matched = uri.equals(rule);
				}
			}
		}
		return matched;
	}

	/**
	 * 方法描述: 是免检用户
	 * @author 侯杰
	 * @param user
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public static boolean isAdminUser(IUserObject user) throws Exception {
		boolean ret = false;
		if (user != null) {
			LogUtil.logDebug("权限检验:userId={0}", null, new Object[] { user.getUserId() });
			String users = FrameConfigKey.PERMISSION_ADMIN_USERS.getConfigValue();
			if (users != null && users.trim() != "") {
				String userid = user.getUserId();
				if (users != null) {
					for (String name : users.split(",")) {
						if (name.equals(userid)) {
							ret = true;
							break;
						}
					}
				}
			}
		} else {

		}
		return ret;
	}
	
	/**
	 * 方法描述: 取得session中的userobject
	 * @author 侯杰
	 * @return 
	 * @return IUserObject
	 */
	public static  IUserObject getUserObject() {
		IUserObject user = null;
		if(DataContextManager.current().getMUODataContext()==null){
			user = (IUserObject)DataContextManager.current().getSessionCtx().get(IUserObject.KEY_IN_CONTEXT);
		}else{
		    user = DataContextManager.current().getMUODataContext().getUserObject();
		}
		return user; 
	}
}
