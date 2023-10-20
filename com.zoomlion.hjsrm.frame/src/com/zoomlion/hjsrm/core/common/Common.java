/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改密码策略
 * 创建日期： 2014-9-18
 * 补丁编号： G3_P_20140915_01_249 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_249 吕俊涛   2014-9-18  集团
//
// =================================================================
package com.zoomlion.hjsrm.core.common;

import java.io.PrintWriter;
import java.io.Serializable;
import java.io.StringWriter;
import java.lang.reflect.Method;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.CacheRuntimeException;
import com.eos.common.cache.ICache;
import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.IMUODataContext;
import com.eos.data.datacontext.IUserObject;
import com.eos.foundation.eoscommon.LogUtil;
import com.eos.foundation.eoscommon.OnlineUserManagerUtil;
import com.zoomlion.hjsrm.core.exception.BaseRuntimeException;

/**
 * ************************************************** 描 述：
 * 在bean中使用的工具类，提供了java编码中一些常用方法，如：转换中文金额、获取当前时间字串、转换时间、格式化数字等
 * 
 * @author 侯杰
 * @version 1.0
 * @see HISTORY 2013-1-29 侯杰 创建文件
 *      **************************************************
 */
public class Common implements Serializable {
	private static final long serialVersionUID = 4544582373536964718L;

	public static final int MESSAGE_CONFIRM = 1;

	public static final int MESSAGE_WARNING = 2;

	public static final int MESSAGE_ERROR = 3;

	private static String[] chineseDigits = { "零", "壹", "贰", "叁", "肆", "伍",
			"陆", "柒", "捌", "玖" };

	public static final String SRM_COMMON_CACHE = "SRM_COMMON_CACHE";// SRM通用的缓存实例名

	// 系统缓存名称
	public static final String SRM_RESOURCE_CACHE = "SRM_RESOURCE_CACHE"; // 资源缓存实例名

	public static final String SRM_PERMISSION_CACHE = "SRM_PERMISSION_CACHE"; // 角色权限缓存实例名

	public static final String SRM_PRIVILEGE_CACHE = "SRM_PRIVILEGE_CACHE"; // 特殊权限缓存实例名

	public static final String SRM_SYSCONFFIG_CACHE = "SRM_SYSCONFFIG_CACHE"; // 系统参数缓存实例名

	public static final String SRM_BIZDICT_CACHE = "SRM_BIZDICT_CACHE"; // 系统参数缓存实例名

	// 系统缓存加载loader类路径
	public static final String SRM_RESOURCE_CACHE_LOADER = "com.zoomlion.hjsrm.frame.auth.loader.ResourcesCacheLoader";

	public static final String SRM_PERMISSION_CACHE_LOADER = "com.zoomlion.hjsrm.frame.auth.loader.PermissionCacheLoader";

	public static final String SRM_PRIVILEGE_CACHE_LOADER = "com.zoomlion.hjsrm.frame.auth.loader.PrivilegeCacheLoader";

	public static final String SRM_SYSCONFFIG_CACHE_LOADER = "com.zoomlion.hjsrm.frame.auth.loader.SysconfigCacheLoader";

	public static final String SRM_BIZDICT_CACHE_LOADER = "com.zoomlion.hjsrm.frame.auth.loader.DictCacheLoader";

	public static final String SRM_CONFIG_CACHE_PREFIX = "SRM_CLIB_CONFIG_";// 读文本文件时的配置缓存前缀--暂未用到

	public static final String SRM_APPCONFIG_CACHEKEY = "SRM_APPCONFIG";// SRM缓存(SRM_COMMON_CACHE)中-应用配置key

	public static final String SRM_FRAMECONFIG_CACHEKEY = "SRM_FRAMECONFIG";// SRM缓存(SRM_COMMON_CACHE)中-frame配置key

	public static final String SRM_SNCFG_CACHEKEY = "SRM_SNCFG";// SRM缓存(SRM_COMMON_CACHE)中-业务流水配置key

	public static final String SRM_EXCEL_COLLECT_CACHEKEY = "SRM_EXCEL_COLLECT_CACHEKEY";// SRM中缓存(SRM_COMMON_CACHE)中excel

	// sheet的缓存key

	public static final String SRM_KEYS_CACHE_PREFIX = "SRM_CLIB_KEYS_";// SRM缓存(SRM_COMMON_CACHE)中-数据库表的主键缓存key的前缀，在缓存中的key是：SRM_CLIB_KEYS_表名

	public static final String SRM_COLUMNS_CACHE_PREFIX = "SRM_CLIB_COLUMNS_";// SRM缓存(SRM_COMMON_CACHE)中-数据库表的所有列的缓存key的前缀，在缓存中的key是：SRM_CLIB_COLUMNS_表名

	public static final String SRM_DBSRC_CACHE_PREFIX = "SRM_CLIB_DBSRC_";// --暂未用到

	public static final String SRM_DEFAULT_PASS = "a1234567";

	/**
	 * 方法描述: 返回SRM系统公共EOS缓存定义
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return ICache<Object,Object>
	 */
	@SuppressWarnings("unchecked")
	public static ICache<Object, Object> getCache() throws Exception {
		ICache icache = CacheFactory.getInstance().findCache(
				Common.SRM_COMMON_CACHE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \""
					+ Common.SRM_COMMON_CACHE + "\"");
		}
		return icache;
	}

	/**
	 * 方法描述: 返回SRM系统特定缓存定义
	 * 
	 * @author 侯杰
	 * @param cacheInstName
	 * @return
	 * @throws Exception
	 * @return ICache<Object,Object>
	 */
	@SuppressWarnings("unchecked")
	public static ICache<Object, Object> getCache(String cacheInstName)
			throws Exception {
		ICache icache = CacheFactory.getInstance().findCache(cacheInstName);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \""
					+ cacheInstName + "\"");
		}
		return icache;
	}

	/**
	 * 方法描述: 返回SRM系统特定缓存定义
	 * 
	 * @author 侯杰
	 * @param code
	 * @return
	 * @throws Exception
	 * @return String
	 */
	@SuppressWarnings("unchecked")
	public static String getConfigValue(String code) throws Exception {
		ICache icache = CacheFactory.getInstance().findCache(
				SRM_SYSCONFFIG_CACHE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \""
					+ SRM_SYSCONFFIG_CACHE + "\"");
		}
		String dataorgid = getCurrentUserDataOrgId();
		String defaultValue = (String) icache.get(code + "_0");
		String Value = (String) icache.get(code + "_" + dataorgid);
		if (Value == null || Value.equals("")) {
			if (defaultValue == null) {
				return null;
			} else {
				return defaultValue.trim();
			}
		} else {
			return Value.trim();
		}
	}

	@SuppressWarnings("unchecked")
	public static String getConfigValue(String code, IUserObject user)
			throws Exception {
		ICache icache = CacheFactory.getInstance().findCache(
				SRM_SYSCONFFIG_CACHE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \""
					+ SRM_SYSCONFFIG_CACHE + "\"");
		}
		if (user == null) {
			return null;
		}
		String dataorgid = (String) user.getAttributes().get("dataorgid");
		String defaultValue = (String) icache.get(code + "_0");
		String Value = (String) icache.get(code + "_" + dataorgid);
		if (Value == null || Value.equals("")) {
			if (defaultValue == null) {
				return null;
			} else {
				return defaultValue.trim();
			}
		} else {
			return Value.trim();
		}
	}

	/**
	 * 方法描述: 返回SRM系统特定缓存定义，带数据归属参数
	 * 
	 * @author 侯杰
	 * @param code
	 * @param dataorgid
	 * @return
	 * @throws Exception
	 * @return String
	 */
	@SuppressWarnings("unchecked")
	public static String getConfigValue(String code, String dataorgid)
			throws Exception {
		ICache icache = CacheFactory.getInstance().findCache(
				SRM_SYSCONFFIG_CACHE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \""
					+ SRM_SYSCONFFIG_CACHE + "\"");
		}
		String defaultValue = (String) icache.get(code + "_0");
		String Value = (String) icache.get(code + "_" + dataorgid);
		if (Value == null || Value.equals("")) {
			return defaultValue;
		} else {
			return Value;
		}
	}

	/**
	 * 获取缓存实例，如果取不到就创建缓存实例
	 * 
	 * @param cacheInstName
	 * @return
	 * @throws Exception
	 * 
	 * public static ICache<Object, Object> createCache(String cacheInstName)
	 * throws Exception{ ICache icache =
	 * CacheFactory.getInstance().findCache(cacheInstName);
	 * 
	 * if (icache == null) { //从bps的配置是判断是否集群 String configPath =
	 * ApplicationContext.getInstance().getApplicationConfigPath();
	 * 
	 * Configuration wfclusterConfiguration =
	 * Configuration.initConfiguration((new
	 * StringBuilder()).append(configPath).append("/").append("wfengine-config.xml").toString());
	 * String isClustered = wfclusterConfiguration.getConfigValue("wfcluster",
	 * "wfcache", "enable"); CacheProperty cacheProperty = new CacheProperty();
	 * cacheProperty.setCacheName(cacheInstName);
	 * //cacheProperty.setCacheLoader(CACHE_LOADER); //--集群模式
	 * cacheProperty.setClustered(Boolean.valueOf(isClustered)); //--创建缓存
	 * CacheFactory.getInstance().createCache(cacheProperty, false); } return
	 * icache; }
	 */

	/**
	 * 方法描述: 从当前session中的UserObject对象
	 * 
	 * @author 何群吉
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static IUserObject getCurrentUserObject() throws Exception {
		IMUODataContext context = DataContextManager.current()
				.getMUODataContext();
		if (context != null) {
			return context.getUserObject();
		} else {
			return null;
		}
		// ISessionMap session = DataContextManager.current().getSessionCtx();
		// if (session == null) {
		// //System.out.println("Common.java>>UserObject>>inner session =
		// MUODataContextHelper.getMapContextFactory().getSessionMap()==================");
		// session =
		// MUODataContextHelper.getMapContextFactory().getSessionMap();
		// }
		// if(session == null) return null;
		// /************************* 为处理接口服务无seesion问题 -开始
		// *************************/
		// IMUODataContext context =
		// DataContextManager.current().getMUODataContext();
		// if(session.getUserObject().getUserId() == null && context != null &&
		// context.getUserObject() != null){
		// //System.out.println("Common.java>>UserObject>>inner
		// (String)context.getUserObject().getAttributes().get(dataorgid)===="+context.getUserObject());
		// return context.getUserObject();
		// }
		// /************************* 为处理接口服务无seesion问题 -结束
		// *************************/
		// //System.out.println("Common.java>>UserObject>>out
		// ===="+session.getUserObject());
		// return session.getUserObject();
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象
	 * 
	 * @author 何群吉
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static IUserObject getCurrentUseObject() throws Exception {
		return Common.getCurrentUserObject();
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取用户id（userid）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getCurrentUserId() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "guest";
		} else {

			/*String currentUniqueId = Common.getCurrentUserObject()
					.getUniqueId();
			String currentUserId = Common.getCurrentUserObject().getUserId();
			IUserObject[] onlines = OnlineUserManagerUtil
					.getUserObjectsByUserId(currentUserId);
			boolean j = false;
			for (int i = 0; i < onlines.length; i++) {
				if (onlines[i].getUniqueId() == currentUniqueId) {
					j = true;
					break;
				}

			}
			if (j == false) {
				throw new BusinessException("[异常]：异常！", "[异常]：异常！");
			}
*/
			return Common.getCurrentUserObject().getUserId();
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) { System.out.println("Common.java>>UserId>>inner
		 * session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap()==================");
		 * 
		 * session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return "guest";
		 *//**
			 * *********************** 为处理接口服务无seesion问题 -开始
			 * ************************
			 */
		/*
		 * IMUODataContext context =
		 * DataContextManager.current().getMUODataContext();
		 * if(session.getUserObject().getUserId() == null && context != null &&
		 * context.getUserObject() != null){
		 * System.out.println("Common.java>>UserId>>inner
		 * context.getUserObject().getUserId()=================="+context.getUserObject().getUserId());
		 * return context.getUserObject().getUserId(); }
		 *//**
			 * *********************** 为处理接口服务无seesion问题 -结束
			 * ************************
			 */
		/*
		 * System.out.println("Common.java>>UserId>>outer
		 * session.getUserObject().getUserId()=================="+session.getUserObject().getUserId());
		 * 
		 * return session.getUserObject().getUserId();
		 */}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取用户归属的机构id（orgid）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getCurrentUserOrgId() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return Common.getCurrentUserObject().getUserOrgId();
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) {
		 * System.out.println("Common.java>>UserOrgId>>inner session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap()==================");
		 * 
		 * session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return "";
		 * System.out.println("Common.java>>UserOrgId>>outer
		 * =================="+session.getUserObject().getUserOrgId()); return
		 * session.getUserObject().getUserOrgId();
		 */
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取用户归属的区域code（areacode）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getCurrentUserAreaCode() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return (String) Common.getCurrentUserObject().getAttributes().get(
					"areacode");
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) { session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return "";
		 *//**
			 * *********************** 为处理接口服务无seesion问题 -开始
			 * ************************
			 */
		/*
		 * IMUODataContext context =
		 * DataContextManager.current().getMUODataContext();
		 * if(session.getUserObject().getUserId() == null && context != null &&
		 * context.getUserObject() != null){ return
		 * (String)context.getUserObject().getAttributes().get("areacode"); }
		 *//**
			 * *********************** 为处理接口服务无seesion问题 -结束
			 * ************************
			 */
		/*
		 * return
		 * (String)session.getUserObject().getAttributes().get("areacode");
		 */
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取用户归属的区域code（areacode）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getCurrentUserAreaName() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return (String) Common.getCurrentUserObject().getAttributes().get(
					"areaname");
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) { session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return ""; return
		 * (String)session.getUserObject().getAttributes().get("areaname");
		 */
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取用户归属的区域id（areaid）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getCurrentUserAreaId() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return (String) Common.getCurrentUserObject().getAttributes().get(
					"areaid")
					+ "";
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) { session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return ""; return
		 * session.getUserObject().getAttributes().get("areaid")+"";
		 */
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取用户归属的机构code（orgcode）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getCurrentUserOrgCode() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return (String) Common.getCurrentUserObject().getAttributes().get(
					"orgcode");
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) {
		 * System.out.println("Common.java>>UserOrgCode>>inner session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap()==================");
		 * 
		 * session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return "";
		 * System.out.println("Common.java>>UserOrgCode>>outer
		 * =================="+(String)session.getUserObject().getAttributes().get("orgcode"));
		 * return
		 * (String)session.getUserObject().getAttributes().get("orgcode");
		 */
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取用户数据归属机构id（dataorgid）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getCurrentUserDataOrgId() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return (String) Common.getCurrentUserObject().getAttributes().get(
					"dataorgid");
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) {
		 * System.out.println("Common.java>>DataOrgId>>inner session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap()==================");
		 * session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return "";
		 *//**
			 * *********************** 为处理接口服务无seesion问题 -开始
			 * ************************
			 */
		/*
		 * IMUODataContext context =
		 * DataContextManager.current().getMUODataContext();
		 * if(session.getUserObject().getUserId() == null && context != null &&
		 * context.getUserObject() != null){
		 * System.out.println("Common.java>>DataOrgId>>inner
		 * (String)context.getUserObject().getAttributes().get(dataorgid)===="+(String)context.getUserObject().getAttributes().get("dataorgid"));
		 * return
		 * (String)context.getUserObject().getAttributes().get("dataorgid"); }
		 *//**
			 * *********************** 为处理接口服务无seesion问题 -结束
			 * ************************
			 */
		/*
		 * System.out.println("Common.java>>DataOrgId>>out
		 * ===="+(String)session.getUserObject().getAttributes().get("dataorgid"));
		 * return
		 * (String)session.getUserObject().getAttributes().get("dataorgid");
		 */
	}

	/**
	 * 方法描述: 从当前session中的UserObject对象中获取员工工号(empcode)
	 * 
	 * @author 陈今伟
	 * @return
	 * @throws Exception
	 *             描述******
	 * @return String
	 */
	public static String getCurrentUserEmpCode() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return (String) Common.getCurrentUserObject().getAttributes().get(
					"empcode");
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) { session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return ""; return
		 * (String)session.getUserObject().getAttributes().get("empcode");
		 */
	}

	/**
	 * 从当前session中的UserObject对象中获取用户数据归属机构seq（dataorgseq）
	 * 
	 * @author 侯杰
	 * @return String:用户归属机构d
	 * @throws Exception
	 */
	public static String getCurrentUserDataOrgSeq() throws Exception {
		if (Common.getCurrentUserObject() == null) {
			return "";
		} else {
			return (String) Common.getCurrentUserObject().getAttributes().get(
					"dataorgseq");
		}
		/*
		 * ISessionMap session = DataContextManager.current().getSessionCtx();
		 * if (session == null) { session =
		 * MUODataContextHelper.getMapContextFactory().getSessionMap(); }
		 * if(session == null) return ""; return
		 * (String)session.getUserObject().getAttributes().get("dataorgseq");
		 */
	}

	/**
	 * 方法描述: 获取匹配正则表达式的字符串,返回第一次满足条件的字串
	 * 
	 * @author 侯杰
	 * @param str
	 *            字符串
	 * @param regex
	 *            正则表达式
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getMatchStr(String str, String regex) throws Exception {
		List result = getMatchArray(str, regex);
		return result.size() == 0 ? null : (String) result.get(0);
	}

	/**
	 * 方法描述: 获取匹配正则表达式的字符串,得到满足的所有字符串列表
	 * 
	 * @author 侯杰
	 * @param str
	 * @param regex
	 * @return
	 * @throws Exception
	 * @return List
	 */
	@SuppressWarnings("unchecked")
	private static List getMatchArray(String str, String regex)
			throws Exception {
		List result = new ArrayList();
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(str);
		while (matcher.find()) {
			result.add(matcher.group());
		}
		return result;
	}

	/**
	 * 方法描述: 判断字串是否匹配正则表达式，返回真或者假
	 * 
	 * @author 侯杰
	 * @param str
	 * @param regex
	 * @return
	 * @return boolean
	 */
	public static boolean isMatches(String str, String regex) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(str);
		return matcher.matches();
	}

	/**
	 * 方法描述: 获取前缀之后的所有字串
	 * 
	 * @author 侯杰
	 * @param str
	 * @param prefix
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String trimPrefix(String str, String prefix) throws Exception {
		return str.startsWith(prefix) ? str.substring(prefix.length()) : str;
	}

	/**
	 * 方法描述: 获取后缀之前的所有字串
	 * 
	 * @author 侯杰
	 * @param str
	 * @param suffix
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String trimSuffix(String str, String suffix) throws Exception {
		return str.endsWith(suffix) ? str.substring(0, str.length() - 1) : str;
	}

	/**
	 * 方法描述: 获取日期字符串的日期对象,返回Timestamp
	 * 
	 * @author 侯杰
	 * @param timeStr
	 * @return
	 * @throws Exception
	 * @return Timestamp
	 */
	public static Timestamp encodeTimestamp(String timeStr) throws Exception {
		String format = getTimestampFormat(timeStr);
		return encodeTimestamp(format, timeStr);
	}

	/**
	 * 方法描述: 将日期字符串按特定的格式转换，得到日期对象,返回Timestamp
	 * 
	 * @author 侯杰
	 * @param format
	 * @param timeStr
	 * @return
	 * @throws Exception
	 * @return Timestamp
	 */
	public static Timestamp encodeTimestamp(String format, String timeStr)
			throws Exception {
		if ((null == timeStr) || ("".equals(timeStr)))
			return null;
		if (format.length() != timeStr.length())
			format = getTimestampFormat(timeStr);
		SimpleDateFormat sdf = new SimpleDateFormat(format);

		try {
			return new Timestamp(sdf.parse(timeStr).getTime());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 方法描述: 将日期字符串按特定的格式转换，得到新的日期字符串
	 * 
	 * @author 侯杰
	 * @param format
	 * @param timeStr
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String decodeTimestamp(String format, String timeStr)
			throws Exception {
		Timestamp time = encodeTimestamp(format, timeStr);
		return decodeTimestamp(format, time);
	}

	/**
	 * 方法描述: 将日期对象按特定的格式转换，得到新的日期字符串
	 * 
	 * @author 侯杰
	 * @param format
	 * @param time
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String decodeTimestamp(String format, Timestamp time)
			throws Exception {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		return sdf.format(time);
	}

	/**
	 * 方法描述: 获取当前时间，返回Timestamp对象
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return Timestamp
	 */
	public static Timestamp getCurrentTime() throws Exception {
		return new Timestamp(System.currentTimeMillis());
	}

	/**
	 * 方法描述: 获取当前时间，返回yyyy-MM-dd HH:mm:ss型的时间字符串
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getSysTime() throws Exception {
		return getSysTime("yyyy-MM-dd HH:mm:ss");
	}

	/**
	 * 方法描述: 返回指定格式的当前时间字串
	 * 
	 * @author 侯杰
	 * @param format
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getSysTime(String format) throws Exception {
		return decodeTimestamp(format,
				new Timestamp(System.currentTimeMillis()));
	}

	/**
	 * 方法描述: 获取当前日期，返回yyyy-MM-dd型的日期字符串
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getSysDate() throws Exception {
		return decodeTimestamp("yyyy-MM-dd", new Timestamp(System
				.currentTimeMillis()));
	}

	/**
	 * 方法描述: 将数字格式化，返回新的字符串
	 * 
	 * @author 侯杰
	 * @param format
	 * @param decimal
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String formatDecimal(String format, double decimal)
			throws Exception {
		DecimalFormat df = new DecimalFormat(format);
		return df.format(decimal);
	}

	/**
	 * 方法描述: 调用bean的方法
	 * 
	 * @author 侯杰
	 * @param class_name
	 * @param method_name
	 * @return
	 * @throws Exception
	 * @return Object
	 */
	public static Object callBean(String class_name, String method_name)
			throws Exception {
		return callBean(class_name, method_name, null, null);
	}

	/**
	 * 方法描述: 调用bean的方法，带参数
	 * 
	 * @author 侯杰
	 * @param class_name
	 * @param method_name
	 * @param params
	 * @return
	 * @throws Exception
	 * @return Object
	 */
	public static Object callBean(String class_name, String method_name,
			Object[] params) throws Exception {
		return callBean(class_name, method_name, params, null);
	}

	/**
	 * 方法描述: 调用bean的方法，带参数，带类型
	 * 
	 * @author 侯杰
	 * @param class_name
	 * @param method_name
	 * @param params
	 * @param types
	 * @return
	 * @throws Exception
	 * @return Object
	 */
	public static Object callBean(String class_name, String method_name,
			Object[] params, Class[] types) throws Exception {
		LogUtil.logDebug("----- calling bean func : " + class_name + "@"
				+ method_name + " -----", null, (Object[]) null);
		try {
			Class cls = Class.forName(class_name);
			Object instance = cls.newInstance();
			if (types == null)
				types = new Class[params.length];
			if ((params != null) && (types != null)) {
				for (int i = 0; i < types.length; i++) {
					if (types[i] != null)
						continue;
					types[i] = params[i].getClass();
				}
			}
			Method method = cls.getMethod(method_name, types);
			Object localObject1 = method.invoke(instance, params);
			return localObject1;
		} catch (Exception e) {
			Throwable throwable = getBottomException(e);
			if ((throwable.getMessage() != null)
					&& (throwable.getMessage().startsWith("#")))
				warn(throwable.getMessage());
			else
				error(new Exception(throwable));
		} finally {
			LogUtil.logDebug("----- calling bean finish -----", null,
					(Object[]) null);
		}
		return null;
	}

	/**
	 * 方法描述: 调用bean的方法，带参数，带类型
	 * 
	 * @author 侯杰
	 * @param instance
	 * @param method_name
	 * @param params
	 * @param types
	 * @return
	 * @throws Exception
	 * @return Object
	 */
	public static Object callBean(Object instance, String method_name,
			Object[] params, Class[] types) throws Exception {
		LogUtil.logDebug("----- calling bean func : " + instance + "@"
				+ method_name + " -----", null, (Object[]) null);
		if ((params != null) && (types != null)) {
			for (int i = 0; i < types.length; i++) {
				if (types[i] != null)
					continue;
				types[i] = params[i].getClass();
			}
		}
		Method method;
		Object localObject1;
		method = instance.getClass().getMethod(method_name, types);
		localObject1 = method.invoke(instance, params);
		return localObject1;
	}

	/**
	 * 方法描述: 抛出警告异常
	 * 
	 * @author 侯杰
	 * @param message
	 * @return void
	 */
	public static void warn(String message) {
		if ((!message.startsWith("#")) && (!message.startsWith("@")))
			message = "#" + message;
		BaseRuntimeException exception = new BaseRuntimeException(message);
		throw exception;
	}

	/**
	 * 抛出警告异常,带编码
	 * 
	 * @param code：异常编码
	 * @param message：异常消息
	 * @throws RuntimeException
	 */
	public static void warn(String code, String message) {
		if ((!message.startsWith("#")) && (!message.startsWith("@")))
			message = "#" + code + "[code]:" + message;
		BaseRuntimeException exception = new BaseRuntimeException(message);
		throw exception;
	}

	/**
	 * 方法描述: 抛出错误异常
	 * 
	 * @author 侯杰
	 * @param message
	 * @return void
	 */
	public static void error(String message) {
		if ((!message.startsWith("#")) && (!message.startsWith("@")))
			message = "@" + message;
		BaseRuntimeException exception = new BaseRuntimeException(message);
		throw exception;
	}

	/**
	 * 方法描述: 抛出错误异常，带编码
	 * 
	 * @author 侯杰
	 * @param code
	 * @param message
	 * @return void
	 */
	public static void error(String code, String message) {
		if ((!message.startsWith("#")) && (!message.startsWith("@")))
			message = "@" + code + "[code]:" + message;
		else {
			message = message.substring(0, 1) + code + "[code]:" + message;
		}
		BaseRuntimeException exception = new BaseRuntimeException(message);
		throw exception;
	}

	/**
	 * 方法描述: 抛出错误异常，直接丢出Exception
	 * 
	 * @author 侯杰
	 * @param e
	 * @throws RuntimeException
	 * @return void
	 */
	public static void error(Exception e) throws RuntimeException {
		BaseRuntimeException exception = new BaseRuntimeException(e);
		throw exception;
	}

	/**
	 * 方法描述: 字符串转换为中文金额
	 * 
	 * @author 侯杰
	 * @param money
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String toChineseMoney(String money) throws Exception {
		if (money == null)
			return null;
		int index = money.indexOf(".");
		if (index == -1) {
			money = money + ".0";
			return amountToChinese(Double.parseDouble(money));
		}
		String decimal = money.substring(index + 1);
		if (decimal.length() >= 2)
			money = money.substring(0, index + 3);
		return amountToChinese(Double.parseDouble(money));
	}

	/**
	 * 方法描述: 数字转换为中文金额
	 * 
	 * @author 侯杰
	 * @param amount
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String amountToChinese(double amount) throws Exception {
		if ((amount > 9999999999999.998D) || (amount < -9999999999999.998D)) {
			error("参数值超出允许范围 (-9999999999999.999 ～ 9999999999999.999)！");
		}
		boolean negative = false;
		if (amount < 0.0D) {
			negative = true;
			amount *= -1.0D;
		}
		long temp = Math.round(amount * 100.0D);
		int numFen = (int) (temp % 10L);
		temp /= 10L;
		int numJiao = (int) (temp % 10L);
		temp /= 10L;
		int[] parts = new int[20];
		int numParts = 0;
		int ii = 0;
		while (temp != 0L) {
			int part = (int) (temp % 10000L);
			parts[ii] = part;
			numParts++;
			temp /= 10000L;

			ii++;
		}
		boolean beforeWanIsZero = true;
		String chineseStr = "";
		for (int i = 0; i < numParts; i++) {
			String partChinese = partTranslate(parts[i]);
			if (i % 2 == 0) {
				if ("".equals(partChinese))
					beforeWanIsZero = true;
				else {
					beforeWanIsZero = false;
				}
			}
			if (i != 0) {
				if (i % 2 == 0) {
					chineseStr = "亿" + chineseStr;
				} else if (("".equals(partChinese)) && (!beforeWanIsZero)) {
					chineseStr = "零" + chineseStr;
				} else {
					if ((parts[(i - 1)] < 1000) && (parts[(i - 1)] > 0))
						chineseStr = "零" + chineseStr;
					chineseStr = "万" + chineseStr;
				}
			}
			chineseStr = partChinese + chineseStr;
		}
		if ("".equals(chineseStr))
			chineseStr = chineseDigits[0];
		else if (negative) {
			chineseStr = "负" + chineseStr;
		}
		chineseStr = chineseStr + "元";
		if ((numFen == 0) && (numJiao == 0)) {
			chineseStr = chineseStr + "整";
		} else if (numFen == 0) {
			chineseStr = chineseStr + chineseDigits[numJiao] + "角";
			chineseStr = chineseStr + "整"; // 角 也取整
		} else if (numJiao == 0)
			chineseStr = chineseStr + "零" + chineseDigits[numFen] + "分";
		else {
			chineseStr = chineseStr + chineseDigits[numJiao] + "角"
					+ chineseDigits[numFen] + "分";
		}
		return chineseStr.replaceAll("亿万", "亿");
	}

	/**
	 * 方法描述: 反射调用
	 * 
	 * @author 侯杰
	 * @param bean
	 *            bean名，即类名
	 * @param funcName
	 *            方法名
	 * @param params
	 *            参数数组
	 * @param types
	 *            参数类型数组
	 * @return
	 * @throws Exception
	 * @return Object
	 */
	public static Object reflectInvoke(Object bean, String funcName,
			Object[] params, Class[] types) throws Exception {
		Object ret = null;
		Class[] Params = new Class[params.length];
		for (int i = 0; i < params.length; i++) {
			if ((types != null) && (types[i] != null)) {
				Params[i] = types[i];
			} else {
				if (params[i] == null)
					continue;
				Params[i] = params[i].getClass();
			}
		}
		Method method = bean.getClass().getMethod(funcName, Params);
		ret = method.invoke(bean, params);
		return ret;
	}

	/**
	 * 方法描述: 获取异常堆栈，返回异常字符串
	 * 
	 * @author 侯杰
	 * @param e
	 * @return
	 * @return String
	 */
	public static String getStackTrace(Throwable e) {
		return getStackTrace(e, 0);
	}

	/**
	 * 方法描述: 返回异常堆栈，只取特定长度的异常信息
	 * 
	 * @author 侯杰
	 * @param e
	 * @param maxLength
	 * @return
	 * @return String
	 */
	public static String getStackTrace(Throwable e, int maxLength) {
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		String str = sw.toString();
		if (maxLength == 0)
			return str;
		int charLength = getCharLength(str, maxLength);
		return str.substring(0, charLength);
	}

	/**
	 * 方法描述: 字符串编码由GBK转ISO8859_1
	 * 
	 * @author 侯杰
	 * @param str
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String encodeCharset(String str) throws Exception {
		return new String(str.getBytes("GBK"), "ISO8859_1");
	}

	/**
	 * 方法描述: 字符串编码由ISO8859_1转GBK
	 * 
	 * @author 侯杰
	 * @param str
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String decodeCharset(String str) throws Exception {
		return new String(str.getBytes("ISO8859_1"), "GBK");
	}

	/**
	 * 将在文件加载至输入流
	 * 
	 * @param file
	 * @return
	 * @throws Exception
	 */
	/**
	 * public static InputStream getClassResourceStream(String file) throws
	 * Exception { //InputStream in = (new
	 * Common()).getClass().getClassLoader().getResourceAsStream(file);
	 * //InputStream in = (new
	 * Common()).getClass().getClassLoader().getResourceAsStream("import/cust.xml");
	 * InputStream in = new FileInputStream(file);
	 * 
	 * if (in == null) error("file " + file + " not exist!"); return in; }
	 */

	/**
	 * 加载文件，返回URL对象
	 * 
	 * @param file
	 * @return
	 * @throws Exception
	 */
	/**
	 * public static URL getClassResource(String file) throws Exception{ URL url =
	 * Common.class.getClass().getClassLoader().getResource(file); if (url ==
	 * null) error("file " + file + " not exist!"); return url; }
	 */

	/**
	 * 方法描述: 获取唯一值
	 * 
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return String
	 */
	public static String getUniqeName() throws Exception {
		return String.valueOf(System.currentTimeMillis())
				+ Math.abs(new Random().nextInt());
	}

	private static String partTranslate(int amountPart) throws Exception {
		if ((amountPart < 0) || (amountPart > 10000)) {
			throw new IllegalArgumentException("参数必须是大于等于 0，小于 10000 的整数！");
		}
		String[] units = { "", "拾", "佰", "仟" };
		int temp = amountPart;
		String amountStr = new Integer(amountPart).toString();
		int amountStrLength = amountStr.length();
		boolean lastIsZero = true;
		String chineseStr = "";
		for (int i = 0; (i < amountStrLength) && (temp != 0); i++) {
			int digit = temp % 10;
			if (digit == 0) {
				if (!lastIsZero)
					chineseStr = "零" + chineseStr;
				lastIsZero = true;
			} else {
				chineseStr = chineseDigits[digit] + units[i] + chineseStr;
				lastIsZero = false;
			}
			temp /= 10;
		}
		return chineseStr;
	}

	/**
	 * 方法描述: 根据日期字串得到java日期格式类型（方便代码编写）
	 * 
	 * @author 侯杰
	 * @param value
	 * @return
	 * @return String
	 */
	private static String getTimestampFormat(String value) {
		switch (value.length()) {
		case 4:
			return "yyyy";
		case 6:
			return "yyyyMM";
		case 7:
			return "yyyy-MM";
		case 8:
			return "yyyyMMdd";
		case 10:
			return "yyyy-MM-dd";
		case 13:
			return "yyyy-MM-dd HH";
		case 16:
			return "yyyy-MM-dd HH:mm";
		case 19:
			return "yyyy-MM-dd HH:mm:ss";
		case 21:
			return "yyyy-MM-dd HH:mm:ss.S";
		case 23:
			return "yyyy-MM-dd HH:mm:ss.SSS";
		}
		return null;
	}

	private static int getCharLength(String value, int length) {
		char[] chars = value.toCharArray();
		int charidx = 0;
		int charlen = 0;
		while ((charlen < length) && (charidx < chars.length)) {
			if (chars[charidx] > '')
				charlen += 2;
			else {
				charlen++;
			}
			charidx++;
		}
		return charidx;
	}

	/**
	 * 方法描述: 返回throwable 的 cause
	 * 
	 * @author 侯杰
	 * @param exception
	 * @return
	 * @return Throwable
	 */
	private static Throwable getBottomException(Throwable exception) {
		if (exception == null)
			return null;
		if (exception.getCause() != null) {
			exception = exception.getCause();
			return getBottomException(exception);
		}
		return exception;
	}

	/**
	 * 方法描述: 返回一个业务流水号
	 * 
	 * @author 侯杰
	 * @param str
	 * @return
	 * @return String
	 */
	static int i = 100;

	static String lastBusinessNo = "";

	public synchronized static String getBusinessNo(String str) {
		SimpleDateFormat fmt = new SimpleDateFormat("yyMMddHHmmssSSS");
		java.util.Date dt = new java.util.Date(System.currentTimeMillis());
		String KeyID = fmt.format(dt);
		KeyID = KeyID + i;
		i++;
		if (i > 999) {
			i = 100;
		}

		String resNo = str + KeyID;

		if (lastBusinessNo.equals(resNo)) {
			resNo = str + fmt.format(dt) + i;
			i++;
		}
		lastBusinessNo = resNo;
		// System.out.println("KEY:"+resNo);

		return resNo;
	}

	public static String padLeft(String oriStr, int len, char alexin) {
		String str = "";
		int strlen = oriStr.length();
		if (strlen < len) {
			for (int i = 0; i < len - strlen; i++) {
				str = alexin + str;
			}
		}
		str = str + oriStr;
		return str;
	}

	public static String getClientIpAddr(HttpServletRequest request) {

		String ip = request.getHeader("x-forwarded-for");

		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {

			ip = request.getHeader("Proxy-Client-IP");

		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {

			ip = request.getHeader("WL-Proxy-Client-IP");
		}

		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {

			ip = request.getRemoteAddr();
		}
		return ip;
	}

	public static boolean isLogin() throws Exception {

		String currentUniqueId = Common.getCurrentUserObject().getUniqueId();
		String currentUserId = Common.getCurrentUserObject().getUserId();
		IUserObject[] onlines = OnlineUserManagerUtil
				.getUserObjectsByUserId(currentUserId);
		boolean j = false;
		for (int i = 0; i < onlines.length; i++) {
			if (onlines[i].getUniqueId() == currentUniqueId) {
				j = true;
				break;
			}

		}

		return j;

	}

	// public static void main(String[] args) {
	// for (int i = 0; i < 100; i++) {
	// System.out.println(getBusinessNo("ss"));
	// }
	//		
	// }
}