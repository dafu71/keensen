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

import com.eos.data.datacontext.UserObject;
import com.primeton.www.PasswordManager.PasswordManagerService;
import com.primeton.www.PasswordManager.PasswordManagerServiceLocator;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmEncrypt;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperatorImpl;

/**
 * ************************************************** 描 述： 实现修改密码功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class ModifyBean extends BaseBean {
	private ModifyDao modifyDao;

	public ModifyDao getModifyDao() {
		return modifyDao;
	}

	public void setModifyDao(ModifyDao modifyDao) {
		this.modifyDao = modifyDao;
	}

	/**
	 * 方法描述: 修改操作员密码
	 * 
	 * @author 刘鑫
	 * @param pwd1
	 * @param pwd2
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	public boolean modifyPwdall(String pwd1, String pwd2) throws Exception {		
			String dataorgid = (String) Common.getCurrentUseObject().getAttributes().get("dataorgid");
			if(dataorgid.equals("10000")){
				return modifyPwda(pwd1, pwd2);
			}else{
				return modifyPwdb(pwd1, pwd2);
			}
	}
	/**
	 * 方法描述: 修改UMP操作员密码
	 * 
	 * @author 刘鑫
	 * @param pwd1
	 * @param pwd2
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 * @throws Exception 
	 */
	public boolean modifyPwda(String pwd1, String pwd2) throws Exception {
		boolean flag = false;
/*		if (flag) {
			throw new BusinessException("此密码为禁用密码，请使用其他密码...",
					"此密码为禁用密码，请使用其他密码...");
		}*/
		String empcode = (String) Common.getCurrentUseObject().getAttributes().get("empcode");
		PasswordManagerService service= new PasswordManagerServiceLocator();		
		//pwd1 = MesEncrypt.encryptIrreversible(pwd1);
		//pwd2 = MesEncrypt.encryptIrreversible(pwd2);
		String a =service.getPasswordManagerPort().modifyPassword(empcode, pwd2, pwd1);	
		if (a.equals("1")){
			flag = true;
		}else if(a.equals("-2")){
			throw new BusinessException("初始密码填写错误！",
			"初始密码填写错误！");
		}else if(a.equals("-1")){
			throw new BusinessException("修改密码出错！",
			"修改密码出错！");
		}
		return flag;
	}

	/**
	 * 方法描述: 修改MES操作员密码
	 * 
	 * @author 侯杰
	 * @param pwd1
	 * @param pwd2
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	public boolean modifyPwdb(String pwd1, String pwd2) throws BusinessException {
		boolean flag = checkPassword(pwd2);
		pwd1 = SrmEncrypt.encryptIrreversible(pwd1);
		pwd2 = SrmEncrypt.encryptIrreversible(pwd2);
		TAcOperator to = new TAcOperatorImpl();
		try {
			to = this.modifyDao.expandUser();
		} catch (Exception e) {
			throw new BusinessException("查询用户信息出错", e.getMessage());
		}
		if (pwd1.equals(to.getPassword())) {
			if (flag) {
				throw new BusinessException("此密码为禁用密码，请使用其他密码...",
						"此密码为禁用密码，请使用其他密码...");
			}
			String fivePassword = to.getValidtime();
			if (fivePassword.indexOf(pwd2) > -1) {
				throw new BusinessException("新密码与最近五次密码有重复，请使用其他密码...",
						"新密码与最近五次密码有重复，请使用其他密码...");
			}
			String[] ps = fivePassword.split(";");
			StringBuilder sb = new StringBuilder();
			if (ps.length == 5) {
				for (int i = 1; i < ps.length; i++) {
					sb.append(ps[i]).append(";");
				}
				sb.append(pwd2);
			} else {
				sb.append(fivePassword).append(";").append(pwd2);
			}
			try {
				to.setValidtime(sb.toString());
				to.setPassword(pwd2);
				this.modifyDao.modifyPwd(to);
				UserObject userObject = (UserObject) Common
						.getCurrentUseObject();
				userObject.getAttributes().put("setpassword", "0");
				return true;
			} catch (Exception e) {
				throw new BusinessException("修改密码出错", e.getMessage());
			}
		} else {
			throw new BusinessException("密码匹配错误", "");
		}

	}

	/**
	 * 方法描述: 校验用户密码是否为禁用密码
	 * 
	 * @author 吕俊涛
	 * @param password
	 * @return boolean
	 */
	private boolean checkPassword(String password) {
		boolean flag = false;
		String invalidPassword = "";
		try {
			invalidPassword = Common.getConfigValue("SY_INVALID_PASSWORD");
		} catch (Exception e1) {
			invalidPassword = "";
		}
		if (invalidPassword.indexOf(password) > -1) {
			flag = true;
		}
		return flag;
	}
}
