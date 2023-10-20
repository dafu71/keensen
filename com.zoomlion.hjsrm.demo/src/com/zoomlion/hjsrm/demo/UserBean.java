package com.zoomlion.hjsrm.demo;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

public class UserBean extends BaseBean {
	private UserDao userDao;

	public DataObject[] queryUserList(String empname, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			String dataorgid = Common.getCurrentUserDataOrgId();
			String user = Common.getCurrentUserId();
			if (user != null && !user.equals("sysadmin")) {
				condition.put("dataorgid", dataorgid);
			}
			condition.put("empname", empname);
			return this.userDao.queryUserList(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询不存在操作员的员工信息失败!", e);
			throw new BusinessException("查询不存在操作员的员工信息失败!", e.getMessage());
		}
	}

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
}
