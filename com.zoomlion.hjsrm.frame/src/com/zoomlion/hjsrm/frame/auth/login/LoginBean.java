/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改组织机构模型
 * 创建日期： 2014-9-28
 * 补丁编号： G3_P_20140915_01_238 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_238 吕俊涛   2014-9-28  集团
//
// =================================================================
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
package com.zoomlion.hjsrm.frame.auth.login;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.access.http.OnlineUserManager;
import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.ISessionMap;
import com.eos.data.datacontext.IUserObject;
import com.eos.data.datacontext.UserObject;
import com.eos.foundation.data.DataObjectUtil;
import com.eos.foundation.eoscommon.BusinessDictUtil;
import com.eos.foundation.eoscommon.OnlineUserManagerUtil;
import com.primeton.ext.common.muo.MUODataContextHelper;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmEncrypt;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmEmployee;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs;
import com.zoomlion.hjsrm.data.org.Organization.VOmEmporg;
import com.zoomlion.hjsrm.data.org.Organization.VOmOrganizationTrs;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmEmployeeImpl;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmOrganizationImpl;
import com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmployeeTrsImpl;
import com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmporgImpl;
import com.zoomlion.hjsrm.data.org.Organization.impl.VOmOrganizationTrsImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.VAcOperatorTrs;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperatorImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.VAcOperatorTrsImpl;
import com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginoutlogImpl;
import com.zoomlion.hjsrm.frame.auth.config.FrameConfig;
import com.zoomlion.hjsrm.frame.auth.loader.AuthResourcesLoader;
import com.zoomlion.hjsrm.frame.auth.util.LoginPolicyUtil;
import com.zoomlion.hjsrm.frame.rights.operator.OperatorDao;
import com.zoomlion.hjsrm.frame.rights.resource.ResourceBean;
import com.zoomlion.hjsrm.frame.rights.role.RoleDao;
import commonj.sdo.DataObject;

import edu.emory.mathcs.backport.java.util.Arrays;

/**
 * ************************************************** 描 述： 实现登录功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class LoginBean extends BaseBean {

	private OperatorDao opDao;

	private RoleDao roleDao;

	private ResourceBean resourceBean;

	private LoginoutDao loginoutDao;

	public String message = "";

	public String getMessage() {
		return this.message;
	}

	private static String OPEN = "true";

	private static String USE_VERIFY_CODE = null;

	private static String USE_ONLINE_DISTRIBUTE = null;

	private static String UMP_DATAORGID = "10000";

	/**
	 * 方法描述: 获取系统配置缓存
	 * 
	 * @author 侯杰
	 * @throws BusinessException
	 */
	public LoginBean() throws BusinessException {
		super();
		try {
			if (USE_VERIFY_CODE == null) {
				USE_VERIFY_CODE = FrameConfig.getFrameConfigValue(
						"frame-config", "login-config", "use_verify_code");
			}
			if (USE_ONLINE_DISTRIBUTE == null) {
				USE_ONLINE_DISTRIBUTE = FrameConfig
						.getFrameConfigValue("frame-config", "login-config",
								"use_online_distribute");
			}
		} catch (Exception e) {
			SrmLog.error("获取系统配置缓存异常！", e);
			throw new BusinessException("获取系统配置缓存异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 登录认证并记录到登录日志
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @param vcode
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	public boolean authentication(TAcOperator operator, String vcode,
			UserObject userObject) throws BusinessException {
		boolean result = false;
		// 查询操作员信息
		DataObject[] operators;
		DataObject[] operatorsguaqi;
		try {
			operators = opDao.queryOperator(operator.getUserid());
			// operatorsguaqi = opDao.queryOperatorguaqi(operator.getUserid());
		} catch (Exception e) {
			SrmLog.error("查询操作员异常！", e);
			throw new BusinessException("查询操作员异常！", e.getMessage());
		}
		TAtLoginoutlog log = new TAtLoginoutlogImpl();
		log.setUserid(operator.getUserid());
		log.setOperdesc("登录操作");
		log.setClientip(operator.getString("remoteIP"));

		// 登录认证：1)是否存在该用户 2）验证码是否正确 3）密码是否正确
		if (operators.length <= 0) {
			message = "用户不存在";
			log.setFailtype("1");// 用户不存在
			result = false;
		} else {
			log.setOperatorname(operators[0].getString("operatorname"));//
			log.setOperatorid(operators[0].getLong("operatorid"));
			ISessionMap sessionMap = DataContextManager.current()
					.getSessionCtx();
			if (sessionMap == null) {
				sessionMap = MUODataContextHelper.getMapContextFactory()
						.getSessionMap();
			}
			boolean vcodePass = true;
			if (USE_VERIFY_CODE.equals(OPEN)) {
				vcodePass = vcode.equals(sessionMap.getString("vcode"));
			}
			if (vcodePass) {// 验证码匹配
				String encryptCode = SrmEncrypt.encryptIrreversible(operator
						.getPassword());
				String status = operators[0].getString("status");
				if (encryptCode.equals(operators[0].getString("password"))) {// 密码认证
					// 判断用户状态
					TAcOperator opt = new TAcOperatorImpl();
					opt.setOperatorid(operators[0].getLong("operatorid"));
					this.opDao.expandEntity(opt);
					opt.setLastlogin(new Date());
					this.opDao.saveEntity(opt);
					Date nowDate = new Date();
					Date invalDate = operators[0].getDate("invaldate");
					if (invalDate == null) {
						invalDate = nowDate;
					}
					if (status.equals("0")) {
						if (invalDate.getTime() >= nowDate.getTime()) {
							/*
							 * if (operatorsguaqi.length >= 0) { if
							 * (operatorsguaqi[0].getString("flag").equals( "1") &&
							 * Long.valueOf(operatorsguaqi[0] .getString("LO")) >
							 * 0) { throw new BusinessException(
							 * "您的密码在10天后过期，请及时去统一管理平台修改密码！",
							 * "您的密码在10天后过期，请及时去统一管理平台修改密码！"); } }
							 */
							result = true;
							message = "登录成功";
						} else {
							result = false;
							message = "此帐号已失效";
						}
					} else {
						log.setFailtype("4");
						if (status.equals("1")) {
							log.setOperdesc("用户为挂起状态");
							message = "用户为挂起状态";
						}
						if (status.equals("2")) {
							log.setOperdesc("用户为注销状态");
							message = "用户为注销状态";
						}
						if (status.equals("3")) {
							Date endDate = operators[0].getDate("unlocktime");
							Date newDate = new Date();
							if (endDate == null) {
								endDate = newDate;
							}
							if (endDate.getTime() < newDate.getTime()) {
								TAcOperator opt2 = new TAcOperatorImpl();
								opt2.setOperatorid(operators[0]
										.getLong("operatorid"));
								this.opDao.expandEntity(opt2);
								opt2.setUnlocktime(new Date());
								opt2.setStatus("0");
								this.opDao.saveEntity(opt2);
								result = true;
								message = "登录成功";
							} else {
								log.setOperdesc("用户为锁定状态");
								message = "用户为锁定状态";
							}
						}
					}
				} else {
					message = "用户名或者密码错误";
					log.setFailtype("2");
					if (status.equals("1")) {
						log.setFailtype("4");
						log.setOperdesc("用户为挂起状态");
						message = "用户为挂起状态";
					}
					if (status.equals("2")) {
						log.setFailtype("4");
						log.setOperdesc("用户为注销状态");
						message = "用户为注销状态";
					}
					if (status.equals("3")) {
						log.setFailtype("4");
						log.setOperdesc("用户为锁定状态");
						message = "用户为锁定状态";
					}
					// 判断是否在30分钟内错误5次，如果是则修改用户状态为锁定
					if (status.equals("0")) {
						try {
							int logintimes = loginoutDao.LoginTry(operator
									.getUserid());
							if (logintimes >= 5) {
								TAcOperator opt = new TAcOperatorImpl();
								opt.setOperatorid(operators[0]
										.getLong("operatorid"));
								this.opDao.expandEntity(opt);
								Calendar rightNow = Calendar.getInstance();
								rightNow.setTime(new Date());
								rightNow.add(Calendar.HOUR_OF_DAY, +4);// 当时日期减1年
								opt.setUnlocktime(rightNow.getTime());
								opt.setStatus("3");
								this.opDao.saveEntity(opt);
							}
						} catch (Exception e) {
							SrmLog.error("查询用户登录信息异常！", e);
							throw new BusinessException("查询用户登录信息异常！", e
									.getMessage());
						}
					}
				}
			} else {
				message = "验证码错误";
				log.setFailtype("3");
			}
		}
		try {
			log.setOperdesc(message);
			this.setloginLog(log);
		} catch (Exception e) {
			SrmLog.error("记录登录日志异常！", e);
		}
		return result;
	}

	/**
	 * 方法描述: 工号查询userid
	 * 
	 * @param uid
	 * @return
	 * @throws BusinessException
	 */
	public String queryUserid(String uid) throws BusinessException {
		VAcOperatorTrs template = new VAcOperatorTrsImpl();
		template.setEmpcode(uid);
		VAcOperatorTrs[] opts = opDao.queryEntitiesByTemplate(
				VAcOperatorTrs.class, template);
		if (null != opts && opts.length > 0) {
			String ret = (null == opts[0].getUserid() || "".equals(opts[0]
					.getUserid())) ? uid : opts[0].getUserid();
			return ret;
		} else {
			return uid;
		}

	}

	/**
	 * 方法描述: 登录认证并记录到登录日志
	 * 
	 * @author dafu
	 * @param operator
	 * @param vcode
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	@SuppressWarnings("unchecked")
	public boolean authentication(VAcOperatorTrs operator, String vcode,
			UserObject userObject) throws BusinessException {
		boolean result = false;

		// 工号查询userid
		String uid = this.queryUserid(operator.getUserid());
		operator.setUserid(uid);

		// 查询操作员信息
		DataObject[] operators;
		DataObject[] operatorsguaqi = null;
		DataObject[] srmoperatorsguaqi;
		try {
			// operatorsguaqi = opDao.queryOperatorguaqi(operator.getUserid());
			srmoperatorsguaqi = opDao.querysrmOperatorguaqi(operator
					.getUserid());
			/*
			 * if (srmoperatorsguaqi.length > 0) { if (null !=
			 * (srmoperatorsguaqi[0].getString("LO")) &&
			 * !"".equals(srmoperatorsguaqi[0].getString("LO"))) { if
			 * (Long.valueOf(srmoperatorsguaqi[0].getString("LO")) < 0 &&
			 * srmoperatorsguaqi[0].getString("STATUS").equals( "0")) { Map
			 * liuxin = new HashMap(); liuxin.put("operatorid", Long
			 * .valueOf(srmoperatorsguaqi[0] .getString("OPERATORID")));
			 * liuxin.put("status", "1"); this.opDao.updatestatus(liuxin); } ;
			 * if (Long.valueOf(srmoperatorsguaqi[0].getString("LO")) > 0 &&
			 * srmoperatorsguaqi[0].getString("STATUS").equals( "1")) { Map
			 * liuxin = new HashMap(); liuxin.put("operatorid", Long
			 * .valueOf(srmoperatorsguaqi[0] .getString("OPERATORID")));
			 * liuxin.put("status", "0"); this.opDao.updatestatus(liuxin); } } }
			 */
			operators = opDao.queryOperator2(operator.getUserid());
		} catch (Exception e) {
			SrmLog.error("查询操作员异常！", e);
			throw new BusinessException("查询操作员异常！", e.getMessage());
		}
		TAtLoginoutlog log = new TAtLoginoutlogImpl();
		log.setUserid(operator.getUserid());
		log.setOperdesc("登录操作");
		log.setClientip(operator.getString("remoteIP"));

		// 登录认证：1)是否存在该用户 2）验证码是否正确 3）密码是否正确
		if (operators.length <= 0) {
			message = "用户不存在";
			log.setFailtype("1");// 用户不存在
			result = false;
		} else {
			log.setOperatorname(operators[0].getString("operatorname"));//
			log.setOperatorid(operators[0].getLong("operatorid"));
			ISessionMap sessionMap = DataContextManager.current()
					.getSessionCtx();
			if (sessionMap == null) {
				sessionMap = MUODataContextHelper.getMapContextFactory()
						.getSessionMap();
			}
			boolean vcodePass = true;
			if (USE_VERIFY_CODE.equals(OPEN)) {
				vcodePass = vcode.equals(sessionMap.getString("vcode"));
			}
			if (vcodePass) {// 验证码匹配
				// 明码
				String pwd = operator.getPassword().toString();
				String encryptCode;
				if (operator.getUserid().equals("sysadmin"))
					encryptCode = SrmEncrypt.encryptIrreversible(operator
							.getPassword());
				else
					encryptCode = pwd;
				String status = operators[0].getString("status");
				if (encryptCode.equals(operators[0].getString("password"))) {// 密码认证
					// 判断用户状态
					// TAcOperator opt = new TAcOperatorImpl();
					// VAcOperatorTrs opt = new VAcOperatorTrsImpl();
					// opt.setOperatorid(operators[0].getLong("operatorid"));
					// this.opDao.expandEntity(opt);
					// opt.setLastlogin(new Date());//更新最近登录时间
					// this.opDao.saveEntity(opt);
					Date nowDate = new Date();
					Date invalDate = operators[0].getDate("invaldate");
					if (invalDate == null) {
						invalDate = nowDate;
					}
					if (status.equals("0")) {
						if (invalDate.getTime() >= nowDate.getTime()) {
							if (operatorsguaqi != null
									&& operatorsguaqi.length > 0) {
								if (null != (operatorsguaqi[0].getString("LO"))
										&& !"".equals(operatorsguaqi[0]
												.getString("LO"))) {
									long kk = Long.valueOf(operatorsguaqi[0]
											.getString("LO"));
									if (operatorsguaqi[0].getString("FLAG")
											.equals("1")
											&& Long.valueOf(operatorsguaqi[0]
													.getString("LO")) > 0) {
										// throw new
										// BusinessException("您的密码在10天后过期，请及时去统一管理平台修改密码！",
										// "您的密码在10天后过期，请及时去统一管理平台修改密码！");
										message = "您的密码在" + kk
												+ "天后过期，请及时去统一管理平台修改密码！";
										// log.setOperdesc(message);
										// this.setloginLog(log);
										result = true;
										// message = "登录成功";
									} else if (operatorsguaqi[0].getString(
											"FLAG").equals("1")
											&& Long.valueOf(operatorsguaqi[0]
													.getString("LO")) == 0) {
										message = "您的密码有效期不足一天，请及时去统一管理平台修改密码！";
										result = true;
									} else {
										result = true;
										message = "登录成功";
									}
								} else {
									result = true;
									message = "登录成功";
								}
							} else if (srmoperatorsguaqi.length > 0) {
								if (null == (srmoperatorsguaqi[0]
										.getString("aupdatetime"))
										|| "".equals(srmoperatorsguaqi[0]
												.getString("aupdatetime"))) {
									/*
									 * long tt =
									 * Long.valueOf(srmoperatorsguaqi[0]
									 * .getString("LO")); if
									 * (srmoperatorsguaqi[0].getString("FLAG")
									 * .equals("1") && Long
									 * .valueOf(srmoperatorsguaqi[0]
									 * .getString("LO")) > 0) {
									 */
									// throw new
									// BusinessException("您的密码在10天后过期，请及时去统一管理平台修改密码！",
									// "您的密码在10天后过期，请及时去统一管理平台修改密码！");
									message = "您的密码为初始密码，为了您的使用安全，请及时在UMP系统内进行密码修改！";
									// log.setOperdesc(message);
									// this.setloginLog(log);
									result = true;
									// message = "登录成功";
									/*
									 * } else if
									 * (srmoperatorsguaqi[0].getString(
									 * "FLAG").equals("1") && Long
									 * .valueOf(srmoperatorsguaqi[0]
									 * .getString("LO")) == 0) { message =
									 * "您的密码有效期不足一天，请及时在SRM系统中修改密码！"; result =
									 * true; } else { result = true; message =
									 * "登录成功"; }
									 */
								} else {
									result = true;
									message = "登录成功";
								}
							} else {
								result = true;
								message = "登录成功";
							}
						} else {
							result = false;
							message = "此帐号已失效";
						}
					} else {
						log.setFailtype("4");
						if (status.equals("1")) {
							log.setOperdesc("用户为挂起状态");
							message = "用户为挂起状态";
						}
						if (status.equals("2")) {
							log.setOperdesc("用户为注销状态");
							message = "用户为注销状态";
						}
						if (status.equals("3")) {
							Date endDate = operators[0].getDate("unlocktime");
							Date newDate = new Date();
							if (endDate == null) {
								endDate = newDate;
							}
							if (endDate.getTime() < newDate.getTime()) {
								/*
								 * TAcOperator opt2 = new TAcOperatorImpl();
								 * opt2.setOperatorid(operators[0]
								 * .getLong("operatorid"));
								 * this.opDao.expandEntity(opt2);
								 * opt2.setUnlocktime(new Date());
								 * opt2.setStatus("0");
								 * this.opDao.saveEntity(opt2);
								 */
								result = true;
								message = "登录成功";
							} else {
								log.setOperdesc("用户为锁定状态");
								message = "用户为锁定状态";
							}
						}
					}
				} else {
					message = "用户名或者密码错误";
					log.setFailtype("2");
					if (status.equals("1")) {
						log.setFailtype("4");
						log.setOperdesc("用户为挂起状态");
						message = "用户为挂起状态";
					}
					if (status.equals("2")) {
						log.setFailtype("4");
						log.setOperdesc("用户为注销状态");
						message = "用户为注销状态";
					}
					if (status.equals("3")) {
						log.setFailtype("4");
						log.setOperdesc("用户为锁定状态");
						message = "用户为锁定状态";
					}
					// 判断是否在30分钟内错误5次，如果是则修改用户状态为锁定
					/*
					 * if (status.equals("0")) { try { int logintimes =
					 * loginoutDao.LoginTry(operator .getUserid()); if
					 * (logintimes >= 5) { TAcOperator opt = new
					 * TAcOperatorImpl(); opt.setOperatorid(operators[0]
					 * .getLong("operatorid")); this.opDao.expandEntity(opt);
					 * Calendar rightNow = Calendar.getInstance();
					 * rightNow.setTime(new Date());
					 * rightNow.add(Calendar.HOUR_OF_DAY, +4);// 当时日期减1年
					 * opt.setUnlocktime(rightNow.getTime());
					 * opt.setStatus("3"); this.opDao.saveEntity(opt); } } catch
					 * (Exception e) { SrmLog.error("查询用户登录信息异常！", e); throw new
					 * BusinessException("查询用户登录信息异常！", e .getMessage()); } }
					 */
				}
			} else {
				message = "验证码错误";
				log.setFailtype("3");
			}
		}
		try {
			log.setOperdesc(message);
			this.setloginLog(log);
		} catch (Exception e) {
			SrmLog.error("记录登录日志异常！", e);
		}

		/*
		 * // 获取uniqueid String uniqueid =
		 * this.getUniqueid(operator.getUserid()); // 退出老账号 if
		 * (!StringUtil.isBlank(uniqueid)) {
		 * OnlineUserManager.logoutByUniqueId(uniqueid); }
		 */

		return result;
	}

	/**
	 * 方法描述: OA登录认证并记录到登录日志
	 * 
	 * @author dafu
	 * @param operator
	 * @param oaKey
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	public String oaAuthentication(VAcOperatorTrs operator, String oaKey,
			UserObject userObject) throws BusinessException {
		String status = "";
		// 查询操作员信息
		DataObject[] operators;
		DataObject[] operatorsguaqi;
		try {
			operators = opDao.queryOperator2(operator.getUserid());
			operatorsguaqi = opDao.queryOperatorguaqi(operator.getUserid());
		} catch (Exception e) {
			SrmLog.error("查询操作员异常！", e);
			throw new BusinessException("查询操作员异常！", e.getMessage());
		}
		TAtLoginoutlog log = new TAtLoginoutlogImpl();
		log.setUserid(operator.getUserid());
		log.setOperdesc("登录操作");
		log.setClientip(operator.getString("remoteIP"));

		// 登录认证：1)是否存在该用户 2）验证码是否正确 3）密码是否正确
		if (operators.length <= 0) {
			message = "用户不存在";
			status = "-1";
			log.setFailtype("1");// 用户不存在

		} else {
			log.setOperatorname(operators[0].getString("operatorname"));//
			log.setOperatorid(operators[0].getLong("operatorid"));
			ISessionMap sessionMap = DataContextManager.current()
					.getSessionCtx();
			if (sessionMap == null) {
				sessionMap = MUODataContextHelper.getMapContextFactory()
						.getSessionMap();
			}
			boolean vcodePass = false;

			if (oaKey != null && !"".equals(oaKey)) {
				if (oaKey.indexOf("#") != -1) {
					oaKey = oaKey.substring(0, oaKey.indexOf("#"));
				}
				String srmkey;
				try {
					srmkey = LoginPolicyUtil.getOakey(operator.getUserid());
					if (srmkey.equals(oaKey)) {
						vcodePass = true;
					}
				} catch (Exception e) {
					status = "-1";
					SrmLog.error("OA登陆验证操作员异常！", e);
					throw new BusinessException("OA登陆验证操作员异常！", e.getMessage());
				}
			}
			/* if (vcodePass) {// OA验证码匹配 */
			status = operators[0].getString("status");
			Date nowDate = new Date();
			Date invalDate = operators[0].getDate("invaldate");
			if (invalDate == null) {
				invalDate = nowDate;
			}
			if (status.equals("0")) {
				if (invalDate.getTime() >= nowDate.getTime()) {
					if (operatorsguaqi.length > 0) {
						if (null != (operatorsguaqi[0].getString("LO"))
								&& !""
										.equals(operatorsguaqi[0]
												.getString("LO"))) {
							long kk = Long.valueOf(operatorsguaqi[0]
									.getString("LO"));
							if (operatorsguaqi[0].getString("FLAG").equals("1")
									&& Long.valueOf(operatorsguaqi[0]
											.getString("LO")) > 0) {
								// throw new
								// BusinessException("您的密码在10天后过期，请及时去统一管理平台修改密码！",
								// "您的密码在10天后过期，请及时去统一管理平台修改密码！");
								message = "您的密码在" + kk + "天后过期，请及时去统一管理平台修改密码！";
								// log.setOperdesc(message);
								// this.setloginLog(log);

								// message = "登录成功";
							} else if (operatorsguaqi[0].getString("FLAG")
									.equals("1")
									&& Long.valueOf(operatorsguaqi[0]
											.getString("LO")) == 0) {
								message = "您的密码有效期不足一天，请及时去统一管理平台修改密码！";

							} else {

								message = "登录成功";
							}
						} else {

							message = "登录成功";
						}
					} else {

						message = "登录成功";
					}

				} else {
					message = "此帐号已失效";
					status = "-1";
				}
			} else {
				log.setFailtype("4");
				if (status.equals("1")) {
					log.setOperdesc("用户为挂起状态");
					message = "用户为挂起状态";
					status = "-4";
				}
				if (status.equals("2")) {
					log.setOperdesc("用户为注销状态");
					message = "用户为注销状态";
					status = "-2";
				}
				if (status.equals("3")) {
					Date endDate = operators[0].getDate("unlocktime");
					Date newDate = new Date();
					if (endDate == null) {
						endDate = newDate;
					}
					if (endDate.getTime() < newDate.getTime()) {
						message = "登录成功";
					} else {
						log.setOperdesc("用户为锁定状态");
						message = "用户为锁定状态";
						status = "-3";
					}
				}
			}
			/*
			 * } else { message = "OA验证码错误"; log.setFailtype("3"); status =
			 * "-5"; }
			 */
		}
		try {
			log.setOperdesc(message);
			this.setloginLog(log);
		} catch (Exception e) {
			SrmLog.error("记录登录日志异常！", e);
		}
		return status;
	}

	public boolean isHadLogin(String userid) throws Exception {
		// System.out.println(new Date());

		// 获取配置
		DataObject[] flagdicts = BusinessDictUtil
				.getDictInfoByType("UMP_USERFLAG");
		if (flagdicts != null && flagdicts.length > 0) {
			DataObject flagdict = flagdicts[0];
			String flag = flagdict.getString(0);
			if (flag != null && flag.trim().equals("0")) {
				// UMP_USERFLAG配置0时表示不校验，直接返回未登录
				return false;
			}
		}

		IUserObject[] onlineobjs = OnlineUserManagerUtil.getUserObjects();
		IUserObject[] userobjs = OnlineUserManagerUtil
				.getUserObjectsByUserId(userid);
		// String[] includeUrls = UserLoginCheckedFilter.getIncludeUrls();

		if (userobjs != null && userobjs.length > 0) {
			// System.out.println("*****************用户[" + userid + "," +
			// userobjs[0].getUserName() + "]已登录");
			return true;
		}
		return false;
	}

	/**
	 * 方法描述: 写登录（登入和登出）日志
	 * 
	 * @author 陈今伟
	 * @param log
	 * @throws NumberFormatException
	 * @throws Exception
	 * @return void
	 */
	public void setloginLog(TAtLoginoutlog log) throws BusinessException {
		try {
			log.setLogintype(7);
			if (log.getFailtype() != null) {
				log.setOperstatus("0");
			} else {
				log.setOperstatus("1");
			}
			java.sql.Date logDate = new java.sql.Date(new Date().getTime());
			log.setOpertime(logDate);
			log.setLogstatus("0");
			String logId = loginoutDao
					.getEosPKByKeyname("TAtLoginoutlog.operid");
			log.setOperid(Long.parseLong(logId));
			loginoutDao.insertEntity(log);
		} catch (Exception e) {
			SrmLog.error("写登录日志异常！", e);
			throw new BusinessException("写登录日志异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 获取权限信息，初始化用户会话，并返回用户对象 用户会话包括：操作员基本信息:operatorid empid empname
	 * orgid
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	public boolean initUserObject(TAcOperator operator, UserObject userObject)
			throws BusinessException {
		DataObject[] objs;
		int empid = 0;
		TOmEmployee emp = new TOmEmployeeImpl();
		try {
			objs = opDao.queryOperator(operator.getString("userid"));
			empid = objs[0].getInt("empid");
			emp.setEmpid(empid);
			opDao.expandEntity(emp);
		} catch (Exception e) {
			SrmLog.error("查询操作员异常！", e);
			throw new BusinessException("查询操作员异常！", e.getMessage());
		}
		// 设置该操作员的身份信息
		Map<String, Object> userAttr = new HashMap<String, Object>();
		userAttr.put("status", objs[0].getLong("status"));
		userAttr.put("operatorid", objs[0].getLong("operatorid"));
		userAttr.put("empid", empid);
		userAttr.put("empcode", emp.getEmpcode());// 设置员工工号
		userAttr.put("theme", objs[0].getString("menutype"));// 设置风格
		if (objs[0].getString("password").equals(Common.SRM_DEFAULT_PASS)) {
			userAttr.put("setpassword", "1");// 设置是否需要修改密码
		} else {
			userAttr.put("setpassword", "0");// 设置是否需要修改密码
		}
		operator.setOperatorid(objs[0].getLong("operatorid"));
		// 获取角色信息
		TAcRole[] roles;
		try {
			roles = roleDao.queryRoleByOperator(operator);
		} catch (Exception e) {
			SrmLog.error("查询操作员角色信息异常！", e);
			throw new BusinessException("查询操作员角色信息异常！", e.getMessage());
		}
		// 设置用户角色集合
		userAttr.put("roles", roles);
		// 设置用户角色ID串
		userAttr.put("roles_ids_str", this.getStrs4IDataObject(roles, "roleid",
				","));
		// 设置用户角色CODE串
		userAttr.put("roles_rolecode_str", this.getStrs4IDataObject(roles,
				"rolecode", ","));
		// 设置用户数据归属
		userAttr.put("dataorgid", objs[0].getString("dataorgid"));
		/*
		 * InetAddress address; try { address = InetAddress.getLocalHost(); }
		 * catch (UnknownHostException e) { SrmLog.error("获取用户IP异常！", e); throw
		 * new BusinessException("获取用户IP异常！", e.getMessage()); }
		 */
		userObject = new UserObject(); // 此处必须重新new一个
		userObject.setUserId(objs[0].getString("userid")); // 设置用户USERID
		userObject.setUserName(objs[0].getString("operatorname")); // 设置用户名称
		// userObject.setUserRemoteIP(session.get); //设置用户IP
		userObject.setAttributes(userAttr);
		userObject.setUserRemoteIP(operator.getString("remoteIP"));
		// 登录一个UserObject
		int clientnum = Integer.parseInt(objs[0].getString("clientnum"));
		IUserObject[] onlines = OnlineUserManagerUtil
				.getUserObjectsByUserId(operator.getString("userid"));
		int onlineNum = onlines.length;

		/*
		 * if (!USE_ONLINE_DISTRIBUTE.equals("true")) { // 注销会话中相同IP、用户的会话 for
		 * (int i = 0; i < onlines.length; i++) { if
		 * (userObject.getUserRemoteIP().equals( onlines[i].getUserRemoteIP())) {
		 * OnlineUserManagerUtil.logoutByUniqueId(onlines[i] .getUniqueId());
		 * onlineNum = onlineNum - 1; } } }
		 */

		// 注销会话中相同用户的会话
		for (int i = 0; i < onlines.length; i++) {

			OnlineUserManagerUtil.logoutByUniqueId(onlines[i].getUniqueId());
			onlineNum = onlineNum - 1;

		}

		if (onlineNum + 1 > clientnum && clientnum != -1) {
			message = "当前用户连接数超出限制";
			return false;
		}
		OnlineUserManagerUtil.login(userObject);
		return true;
	}

	/**
	 * 方法描述: 获取权限信息，初始化用户会话，并返回用户对象 用户会话包括：操作员基本信息:operatorid empid empname
	 * orgid
	 * 
	 * @author dafu
	 * @param operator
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	public boolean initUserObject(VAcOperatorTrs operator, UserObject userObject)
			throws BusinessException {

		DataObject[] objs;
		int empid = 0;
		// TOmEmployee emp = new TOmEmployeeImpl();
		VOmEmployeeTrs emp = new VOmEmployeeTrsImpl();
		VOmEmployeeTrs empTemplate = new VOmEmployeeTrsImpl();
		try {
			objs = opDao.queryOperator2(operator.getString("userid"));
			empid = objs[0].getInt("empid");
			empTemplate.setEmpid(empid);
			VOmEmployeeTrs[] emps = this.loginoutDao.queryEntitiesByTemplate(
					VOmEmployeeTrs.class, empTemplate);
			if (null != emps && emps.length > 0) {
				emp = emps[0];

			} else {
				throw new BusinessException("查询操作员异常！", "查询操作员异常！");
			}
			// opDao.expandEntity(emp);
		} catch (Exception e) {
			SrmLog.error("查询操作员异常！", e);
			throw new BusinessException("查询操作员异常！", e.getMessage());
		}
		// 设置该操作员的身份信息
		Map<String, Object> userAttr = new HashMap<String, Object>();
		userAttr.put("status", objs[0].getLong("status"));
		userAttr.put("operatorid", objs[0].getLong("operatorid"));
		userAttr.put("operatorname", objs[0].getString("operatorname"));
		userAttr.put("empid", empid);
		userAttr.put("empcode", emp.getEmpcode());// 设置员工工号
		userAttr.put("theme", objs[0].getString("menutype"));// 设置风格
		if (objs[0].getString("password").equals(Common.SRM_DEFAULT_PASS)) {
			userAttr.put("setpassword", "1");// 设置是否需要修改密码
		} else {
			userAttr.put("setpassword", "0");// 设置是否需要修改密码
		}
		operator.setOperatorid(objs[0].getLong("operatorid"));
		// 获取角色信息
		TAcRole[] roles;
		try {
			roles = roleDao.queryRoleByOperator2(operator);
		} catch (Exception e) {
			SrmLog.error("查询操作员角色信息异常！", e);
			throw new BusinessException("查询操作员角色信息异常！", e.getMessage());
		}
		// 设置用户角色集合
		userAttr.put("roles", roles);
		// 设置用户角色ID串
		userAttr.put("roles_ids_str", this.getStrs4IDataObject(roles, "roleid",
				","));
		// 设置用户角色CODE串
		userAttr.put("roles_rolecode_str", this.getStrs4IDataObject(roles,
				"rolecode", ","));
		// 设置用户数据归属
		userAttr.put("dataorgid", objs[0].getString("dataorgid"));
		// 设置供应商的供应商编码
		// dataorgid不为81
		String lifnr = "";
		String lifnrname = "";
		if (!UMP_DATAORGID.equals(objs[0].getString("dataorgid"))) {
			if (operator.getString("userid").startsWith("S")) {// 以大写S开头的userid
				/*
				 * lifnr = formatLifnr(operator.getString("userid"));
				 * BaseSupplyLfa1 supplyTemplate = new BaseSupplyLfa1Impl();
				 * supplyTemplate.setLifnr(lifnr); BaseSupplyLfa1[] supplys =
				 * this.opDao.queryEntitiesByTemplate( BaseSupplyLfa1.class,
				 * supplyTemplate); if (null != supplys && supplys.length > 0) {
				 * lifnrname = supplys[0].getName1(); }
				 */
				VOmEmporg eoTemplate = new VOmEmporgImpl();
				eoTemplate.setUserid(operator.getString("userid"));
				VOmEmporg[] eos = this.opDao.queryEntitiesByTemplate(
						VOmEmporg.class, eoTemplate);
				if (null != eos && eos.length > 0) {
					lifnr = eos[0].getOrgcode();
					lifnrname = eos[0].getOrgname();
				}
			}
		}
		userAttr.put("lifnr", lifnr);
		userAttr.put("lifnrname", lifnrname);
		/*
		 * InetAddress address; try { address = InetAddress.getLocalHost(); }
		 * catch (UnknownHostException e) { SrmLog.error("获取用户IP异常！", e); throw
		 * new BusinessException("获取用户IP异常！", e.getMessage()); }
		 */
		userObject = new UserObject(); // 此处必须重新new一个
		userObject.setUserId(objs[0].getString("userid")); // 设置用户USERID
		userObject.setUserName(objs[0].getString("operatorname")); // 设置用户名称
		userObject.setUserOrgId(String.valueOf(emp.getMainorgid()));
		// userObject.setUserRemoteIP(session.get); //设置用户IP
		userObject.setAttributes(userAttr);
		userObject.setUserRemoteIP(operator.getString("remoteIP"));
		// 登录一个UserObject
		int clientnum = Integer.parseInt(objs[0].getString("clientnum"));
		IUserObject[] onlines = OnlineUserManagerUtil
				.getUserObjectsByUserId(operator.getString("userid"));
		int onlineNum = onlines.length;

		/*
		 * if (!USE_ONLINE_DISTRIBUTE.equals("true")) { // 注销会话中相同IP、用户的会话 for
		 * (int i = 0; i < onlines.length; i++) { if
		 * (userObject.getUserRemoteIP().equals( onlines[i].getUserRemoteIP())) {
		 * OnlineUserManagerUtil.logoutByUniqueId(onlines[i] .getUniqueId());
		 * onlineNum = onlineNum - 1; } } }
		 */

		// 注销会话中相同用户的会话
		if (clientnum == 1) {
			for (int i = 0; i < onlines.length; i++) {

				OnlineUserManagerUtil
						.logoutByUniqueId(onlines[i].getUniqueId());
				onlineNum = onlineNum - 1;
				System.out.println("注销 " + onlines[i].getUniqueId());

			}
		}

		if (onlineNum + 1 > clientnum && clientnum != -1) {
			message = "当前用户连接数超出限制";
			return false;
		}

		OnlineUserManagerUtil.login(userObject);
		// try {
		// System.out.println("CurrentUser="
		// + Common.getCurrentUserObject().getUniqueId());
		// } catch (Exception e) {
		// SrmLog.error("保存用户session异常！", e);
		// throw new BusinessException("保存用户session异常！", e.getMessage());
		// }
		/*
		 * // 保存unique try { this.saveUniqueID(operator.getString("userid"),
		 * Common .getCurrentUserObject().getUniqueId()); } catch (Exception e) {
		 * SrmLog.error("保存用户session异常！", e); throw new
		 * BusinessException("保存用户session异常！", e.getMessage()); }
		 */

		return true;
	}

	/**
	 * 方法描述:返回供应商帐户号
	 * 
	 * @param from
	 * @return
	 */
	public String formatLifnr(String from) {
		String uid = from;
		String c = uid.substring(0, 1);
		if (c.equals("S")) {
			VOmEmporg eoTemplate = new VOmEmporgImpl();
			eoTemplate.setUserid(uid);
			VOmEmporg[] eos = this.opDao.queryEntitiesByTemplate(
					VOmEmporg.class, eoTemplate);
			if (null != eos && eos.length > 0) {
				return eos[0].getOrgcode();
			}
		}
		return "";

		// String c = uid.substring(0, 1);
		// String v = uid.substring(1, uid.length());
		// if (c.equals("S")) {
		// int a = v.length();
		// if (a < 10) {
		// int b = 10 - a;
		// for (int i = 0; i < b; i++) {
		// v = "0" + v;
		// }
		// }
		// return v;
		// } else {
		// return from;
		// }

	}

	/**
	 * 方法描述: 循环Idataset 取得某字段的值 以逗号隔开 形成字符串
	 * 
	 * @author 陈今伟
	 * @param arr
	 * @param colName
	 * @param split
	 * @return
	 * @return String
	 */
	private String getStrs4IDataObject(DataObject[] arr, String colName,
			String split) {
		StringBuffer sb = new StringBuffer();
		if (arr != null) {
			for (int i = 0; i < arr.length; i++) {
				if (i != 0)
					sb.append(split);
				sb.append(arr[i].getString(colName));
			}
		}
		return sb.toString();
	}

	/**
	 * 方法描述: 加载菜单
	 * 
	 * @author 陈今伟
	 * @param loginOrgInfo
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadApps(TOmOrganization loginOrgInfo,
			UserObject userObject) throws BusinessException {
		// 设置身份信息
		Map<String, Object> userAttr = userObject.getAttributes();
		userObject.setUserOrgId(loginOrgInfo.getOrgid() + "");// 设置机构
		userObject.setUserOrgName(loginOrgInfo.getOrgname());
		userAttr.put("orgcode", loginOrgInfo.getOrgcode());
		int areaid = 0;
		String areacode = null;
		String areaname = null;
		int dataorgid = 0;
		if (loginOrgInfo.getOrgseq() != null
				&& !loginOrgInfo.getOrgseq().equals("")) {
			String orgseq = loginOrgInfo.getOrgseq();
			String[] orgids = orgseq.split("\\.");
			for (int i = 0; i < orgids.length; i++) {
				if (orgids[i] == null || orgids[i].equals("")) {
					continue;
				}
				TOmOrganization org = new TOmOrganizationImpl();
				org.setOrgid(Integer.valueOf(orgids[i]));
				this.loginoutDao.expandEntity(org);
				dataorgid = org.getDataorgid();
				if (org.getOrgtype() != null && org.getOrgtype().equals("3")) {
					areacode = org.getOrgcode();
					areaid = org.getOrgid();
					areaname = org.getOrgname();
				}

			}
			TOmOrganization org2 = new TOmOrganizationImpl();
			org2.setOrgid(dataorgid);
			this.loginoutDao.expandEntity(org2);

			userAttr.put("dataorgid", String.valueOf(dataorgid));
			userAttr.put("areaid", areaid);
			userAttr.put("areacode", areacode);
			userAttr.put("areaname", areaname);
			userAttr.put("dataorgseq", org2.getOrgseq());
			userAttr.put("dataorgtype", org2.getOrgtype());
			userObject.setAttributes(userAttr);
		} else {
			if (!userObject.getUserId().equals("sysadmin")) {
				userAttr.put("dataorgseq", "."
						+ userObject.getAttributes().get("dataorgid") + ".");
			}
		}
		// 查询菜单资源
		DataObject[] menus = this.resourceBean.queryResourceIsAppByRole();
		if (menus == null || menus.length <= 0) {
			message = "抱歉，您没菜单资源信息，请联系管理员给您分配菜单资源";
			return null;
		}
		return menus;
	}

	/**
	 * 方法描述: 加载菜单
	 * 
	 * @author dafu
	 * @param loginOrgInfo
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadApps(VOmOrganizationTrs loginOrgInfo,
			UserObject userObject) throws BusinessException {
		// 设置身份信息
		Map<String, Object> userAttr = userObject.getAttributes();
		userObject.setUserOrgId(loginOrgInfo.getOrgid() + "");// 设置机构
		userObject.setUserOrgName(loginOrgInfo.getOrgname());
		userAttr.put("orgcode", loginOrgInfo.getOrgcode());

		// 设置供应商
		if (userObject.getUserId().startsWith("S")) {// 以大写S开头的userid
			userAttr.put("lifnr", loginOrgInfo.getOrgcode());
			userAttr.put("lifnrname", loginOrgInfo.getOrgname());

		}

		int areaid = 0;
		String areacode = null;
		String areaname = null;
		int dataorgid = 0;
		if (loginOrgInfo.getOrgseq() != null
				&& !loginOrgInfo.getOrgseq().equals("")) {
			String orgseq = loginOrgInfo.getOrgseq();
			String[] orgids = orgseq.split("\\.");
			for (int i = 0; i < orgids.length; i++) {
				if (orgids[i] == null || orgids[i].equals("")) {
					continue;
				}
				// TOmOrganization org = new TOmOrganizationImpl();

				VOmOrganizationTrs orgTemplate = new VOmOrganizationTrsImpl();
				orgTemplate.setOrgid(Integer.valueOf(orgids[i]));
				// org.setOrgid(Integer.valueOf(orgids[i]));
				// this.loginoutDao.expandEntity(org);
				VOmOrganizationTrs[] orgs = this.loginoutDao
						.queryEntitiesByTemplate(VOmOrganizationTrs.class,
								orgTemplate);
				VOmOrganizationTrs org = orgs[0];
				dataorgid = org.getDataorgid();
				if (org.getOrgtype() != null && org.getOrgtype().equals("3")) {
					areacode = org.getOrgcode();
					areaid = org.getOrgid();
					areaname = org.getOrgname();
				}

			}
			// TOmOrganization org2 = new TOmOrganizationImpl();
			VOmOrganizationTrs orgTemplate2 = new VOmOrganizationTrsImpl();
			orgTemplate2.setOrgid(dataorgid);
			// org2.setOrgid(dataorgid);
			// this.loginoutDao.expandEntity(org2);
			VOmOrganizationTrs[] orgs2 = this.loginoutDao
					.queryEntitiesByTemplate(VOmOrganizationTrs.class,
							orgTemplate2);
			VOmOrganizationTrs org2 = orgs2[0];

			userAttr.put("dataorgid", String.valueOf(dataorgid));
			userAttr.put("areaid", areaid);
			userAttr.put("areacode", areacode);
			userAttr.put("areaname", areaname);
			userAttr.put("dataorgseq", org2.getOrgseq());
			userAttr.put("dataorgtype", org2.getOrgtype());
			userObject.setAttributes(userAttr);
		} else {
			if (!userObject.getUserId().equals("sysadmin")) {
				userAttr.put("dataorgseq", "."
						+ userObject.getAttributes().get("dataorgid") + ".");
			}
		}
		// 查询菜单资源
		DataObject[] menus = this.resourceBean.queryResourceIsAppByRole();
		if (menus == null || menus.length <= 0) {
			message = "抱歉，您没菜单资源信息，请联系管理员给您分配菜单资源";
			return null;
		}
		return menus;
	}

	/**
	 * 方法描述: 加载菜单
	 * 
	 * @author 陈今伟
	 * @param parentresid
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadMenu(int parentresid) throws BusinessException {
		// 查询菜单资源
		DataObject[] menus = this.resourceBean
				.queryResourceIsMenuByRole(parentresid);
		return menus;
	}

	/**
	 * 方法描述: 加载业务导航
	 * 
	 * @author 侯杰
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadBizMap() throws BusinessException {

		DataObject[] apps = this.resourceBean.queryResourceIsAppByRole();
		DataObject[] menus = this.resourceBean.queryResourceIsBizMap();
		for (int i = 0; i < apps.length; i++) {
			String resid = apps[i].getString("resid");

			for (int j = 0; j < menus.length; j++) {
				if (menus[j].getString("resseq").indexOf("." + resid + ".") == 0) {
					if (apps[i].getList("list") == null) {
						List list = new ArrayList();
						list.add(menus[j]);
						apps[i].set("list", list);
					} else {
						List list = apps[i].getList("list");
						list.add(menus[j]);
						apps[i].set("list", list);
					}
				}
			}
		}
		return apps;
	}

	/**
	 * 方法描述: 加载用户权限
	 * 
	 * @author 陈今伟
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadRights(UserObject userObject)
			throws BusinessException {
		Long operatorid = (Long) userObject.getAttributes().get("operatorid");
		DataObject[] dos;
		try {
			dos = AuthResourcesLoader.getOperResources(operatorid);
		} catch (Exception e) {
			SrmLog.error("加载用户权限异常！", e);
			throw new BusinessException("加载用户权限异常！", e.getMessage());
		}
		return dos;
	}

	/**
	 * 方法描述: 登出并日志记录
	 * 
	 * @author 陈今伟
	 * @param userObject
	 * @throws NumberFormatException
	 * @throws Exception
	 * @return void
	 */
	public void logout(UserObject userObject) throws BusinessException {
		/*
		 * try { this.saveUniqueID(Common.getCurrentUserId(), ""); } catch
		 * (Exception e) { SrmLog.error("保存用户session异常！", e); throw new
		 * BusinessException("保存用户session异常！", e.getMessage()); }
		 */
		OnlineUserManager.logoutByUniqueId(userObject.getUniqueId());

		ISessionMap session = DataContextManager.current().getSessionCtx();
		if (session == null) {
			session = MUODataContextHelper.getMapContextFactory()
					.getSessionMap();
		}
		// FIXME
		if (userObject == null || userObject.getAttributes() == null
				|| userObject.getAttributes().get("operatorid") == null) {
			// 如果为空则 不记录登录日志
		} else {
			TAtLoginoutlog log = new TAtLoginoutlogImpl();
			log.setUserid(userObject.getUserId());
			log.setOperatorid((Long) userObject.getAttributes().get(
					"operatorid"));
			log.setOperatorname((String) userObject.getUserName());
			log.setOperdesc("成功注销");
			log.setOperstatus("1");
			log.setLogintype(8);
			log.setClientip(userObject.getUserRemoteIP());
			log.setOpertime(new Date(System.currentTimeMillis()));
			log.setLogstatus("0");
			String logId;
			try {
				logId = loginoutDao.getEosPKByKeyname("TAtLoginoutlog.operid");
			} catch (Exception e) {
				SrmLog.error("用户登出失败！", e);
				throw new BusinessException("用户登出失败！", e.getMessage());
			}
			log.setOperid(Long.parseLong(logId));
			loginoutDao.insertEntity(log);
		}
		message = "成功注销!";
	}

	/**
	 * 方法描述: 保存用户样式信息
	 * 
	 * @author 陈今伟
	 * @param theme
	 * @throws BusinessException
	 * @return void
	 */
	public void setTheme(String theme) throws BusinessException {
		// TAcOperator operator = new TAcOperatorImpl();
		TAcOperator operatorTemplate = new TAcOperatorImpl();
		Long operatorid;
		try {
			operatorid = (Long) Common.getCurrentUseObject().getAttributes()
					.get("operatorid");
		} catch (Exception e) {
			SrmLog.error("加载用户信息异常！", e);
			throw new BusinessException("加载用户信息异常！", e.getMessage());
		}
		operatorTemplate.setOperatorid(operatorid);
		// this.opDao.expandEntity(operator);
		TAcOperator[] operators = this.loginoutDao.queryEntitiesByTemplate(
				TAcOperator.class, operatorTemplate);

		TAcOperator operator = null;
		if (null != operators && operators.length > 0) {
			operator = operators[0];
		} else {
			throw new BusinessException("非UMP系统操作员，不能记忆主题！",
					"非UMP系统操作员，不能记忆主题！！");
		}
		operator.setMenutype(theme);
		try {
			this.opDao.saveEntity(operator);
			Map<String, Object> userAttr = Common.getCurrentUseObject()
					.getAttributes();
			userAttr.put("theme", theme);
		} catch (Exception e) {
			SrmLog.error("保存用户样式信息异常！", e);
			throw new BusinessException("保存用户样式信息异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 校验用户是否是系统管理员
	 * 
	 * @author 陈今伟
	 * @param userObject
	 * @return
	 * @return boolean
	 */
	public boolean isSysAdmin(UserObject userObject) throws BusinessException {
		Map<String, Object> userAttr = userObject.getAttributes();
		String codestr = (String) userAttr.get("roles_rolecode_str");
		if (codestr != null) {
			if (codestr.indexOf("sysadmin") == -1) {
				return false;
			} else {
				return true;
			}
		}
		return false;
	}

	/**
	 * 方法描述:获取登录信息
	 * 
	 * @return
	 * @throws BusinessException
	 */

	public boolean isLogin() throws BusinessException {

		try {
			return Common.isLogin();

		} catch (Exception e) {
			SrmLog.error("获取登录信息异常");
			throw new BusinessException("获取登录信息异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:登录业务地图判断
	 * 
	 * @author 刘鑫
	 * @param userid
	 * @param resid
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public String loginywditu(String userid, String resid)
			throws BusinessException {

		try {
			Map condition = new HashMap();
			condition.put("userid", userid);
			condition.put("resid", resid);
			DataObject[] cool = this.loginoutDao.queryLoginywditu(condition);
			if (cool.length > 0) {
				return "1";
			} else {
				return "0";
			}
		} catch (Exception e) {
			SrmLog.error("查询业务地图权限异常");
			throw new BusinessException("查询业务地图权限异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:在线用户
	 * 
	 * @author dafu
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] onlineUsers() throws BusinessException {
		DataObject users[] = new DataObject[0];

		IUserObject[] onlines = OnlineUserManagerUtil.getUserObjects();
		int len = 0;
		for (int i = 0; i < onlines.length; i++) {
			if (!onlines[i].getUserId().equals("guest")) {
				DataObject d = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				users = (DataObject[]) Arrays.copyOf(users, users.length + 1);
				d.set("userid", onlines[i].getUserId());
				d.set("username", onlines[i].getUserName());
				d.set("orgid", onlines[i].getUserOrgId());
				d.set("orgname", onlines[i].getUserOrgName());
				d.set("remoteip", onlines[i].getUserRemoteIP());
				String remark = onlines[i].getAttributes().get("lifnr")
						.toString()
						+ "-"
						+ onlines[i].getAttributes().get("lifnrname")
								.toString();
				d.set("remark", remark);
				users[len] = d;
				len += 1;
			}

		}
		return users;
	}

	public OperatorDao getOpDao() {
		return opDao;
	}

	public void setOpDao(OperatorDao opDao) {
		this.opDao = opDao;
	}

	public RoleDao getRoleDao() {
		return roleDao;
	}

	public void setRoleDao(RoleDao roleDao) {
		this.roleDao = roleDao;
	}

	public LoginoutDao getLoginoutDao() {
		return loginoutDao;
	}

	public void setLoginoutDao(LoginoutDao loginoutDao) {
		this.loginoutDao = loginoutDao;
	}

	public void setResourceBean(ResourceBean resourceBean) {
		this.resourceBean = resourceBean;
	}

}
