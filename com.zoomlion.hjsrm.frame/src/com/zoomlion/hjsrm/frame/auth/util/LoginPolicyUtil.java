package com.zoomlion.hjsrm.frame.auth.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import cn.jnz.encryption.MD5;

import com.eos.foundation.data.DataObjectUtil;
import com.eos.foundation.database.DatabaseUtil;
import com.eos.system.utility.StringUtil;
import com.zoomlion.hjsrm.frame.tools.IPUtil;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  登录策略工具类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class LoginPolicyUtil {

	private static final String DEFAULT_DATASOURCE = "default";   //默认数据源

	public static final String POLICY_TYPE = "1";  //策略类型，1表示白名单限制，0表示黑名单限制

	public static final String ABF_YESORNO     = "y";  //是否启用，y表示启用，n表示不启用

	private static final String LOGIN_NAME_MATCH_STARTWITH = "3";  //前匹配

	private static final String LOGIN_NAME_MATCH_ENDWITH = "4";    //后匹配

	private static final String LOGIN_NAME_MATCH_INCLUDE = "5"; //中间匹配


	/**
	 * 方法描述: 系统用户登陆限制验证，主要验证用户登陆名称和登陆IP
	 * @author 侯杰
	 * @param userId
	 * @param userIP
	 * @return 
	 * @return boolean
	 */
	public static boolean checkUserLoginPolicy(String userId, String userIP) {
		//创建登陆限制对象，根据使用范围和是否启用查询限制记录
		DataObject loginPolicy  = DataObjectUtil.createDataObject("org.gocom.abframe.dataset.business.AtLoginPolicy");
		loginPolicy.set("policytype", POLICY_TYPE);
		loginPolicy.set("isenabled", ABF_YESORNO);
		DataObject[] objs = DatabaseUtil.queryEntitiesByTemplate(DEFAULT_DATASOURCE, loginPolicy);
		if( objs != null && objs.length > 0) {
			String loginName = "";
			String loginNameMatchType = "";
			String loginIP = "";
			String startTime = "";
			String endTime = "";
			for( int i = 0; i < objs.length; i++ ) {
				DataObject dataObject = objs[i];
				loginName = (String)dataObject.get("lognamelimit");  //登陆名限制
				loginNameMatchType = (String)dataObject.get("lognamelmttype");  //登陆名限制类型
				loginIP = (String)dataObject.get("logiplimit");          //登陆IP限制
				startTime = (String)dataObject.get("starttimelimit");  //开始登陆时间
				endTime = (String)dataObject.get("endtimelimit");      //截止登陆时间
				//在配置列表中，只要有一种配置在三个条件都满足时返回true
				if( checkUserId(loginName, loginNameMatchType, userId )
						&& IPUtil.isMatchWildcard(loginIP, userIP)
					    && checkLoginTime(startTime, endTime) ){
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * 方法描述: 验证用户登陆名
	 * @author 侯杰
	 * @param loginName 登陆名限制
	 * @param loginNameMatchType 登陆名限制类型
	 * @param userId
	 * @return 
	 * @return boolean 合法返回true 不合法返回false
	 */
	private static boolean checkUserId(String loginName, String loginNameMatchType, String userId) {
		if(StringUtil.isNullOrBlank(loginName))
			return true;
		//匹配类型为前匹配
		if( LOGIN_NAME_MATCH_STARTWITH.equals( loginNameMatchType ) ) {
			if( userId.startsWith( loginName ) )
			    return true;
			else
				return false;
		}
        //匹配类型为中间匹配
		else if( LOGIN_NAME_MATCH_INCLUDE.equals( loginNameMatchType )  ) {
			if( userId.indexOf( loginName )  != -1 )
			    return true;
			else
				return false;
		}
        //匹配类型为后匹配
		else if( LOGIN_NAME_MATCH_ENDWITH.equals( loginNameMatchType )  ) {
			if( userId.endsWith( loginName ) )
			    return true;
			else
				return false;
		}
		return false;
	}

	/**
	 * 方法描述: 验证用户登陆时间
	 * @author 侯杰
	 * @param startTime 允许登陆开始时间
	 * @param endTime 截止登陆时间
	 * @return 
	 * @return boolean 在允许时间内返回true，否则返回false
	 */
	private static boolean checkLoginTime(String startTime, String endTime) {
		if(StringUtil.isNullOrBlank(startTime)&&StringUtil.isNullOrBlank(endTime))
			return true;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String str = sdf.format(new Date());
		if( str.compareTo(startTime)  > 0 && str.compareTo(endTime) < 0 ) {
			return true;
		}
		return false;
	}
	
	/**
	 * 根据帐号获取加密字串
	 */	
	public static String getOakey(String oaaccount) throws Exception {
		String oaKey = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhh");
		Calendar c = Calendar.getInstance();
		String date = sdf.format(c.getTime());
		oaKey = MD5.encrypt(oaaccount + date);		
		return oaKey;

	}
}
