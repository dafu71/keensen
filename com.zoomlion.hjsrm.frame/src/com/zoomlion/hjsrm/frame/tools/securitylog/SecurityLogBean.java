package com.zoomlion.hjsrm.frame.tools.securitylog;


import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现安全日志管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class SecurityLogBean {

	private SecurityLogDao securityLogDao;
	
	/**
	 * 方法描述: 分页查询安全日志,用于安全审计管理
	 * @author 陈今伟
	 * @param param
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	public DataObject[] getSecurityLogs(DataObject param, PageCond pageCond)throws BusinessException {
		try {
			return this.securityLogDao.getSecurityLogs(param, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询安全日志失败！", e);
			throw new BusinessException("查询安全日志失败！",e.getMessage());
		}
	}
	
	public SecurityLogDao getSecurityLogDao() {
		return securityLogDao;
	}
	public void setSecurityLogDao(SecurityLogDao securityLogDao) {
		this.securityLogDao = securityLogDao;
	}
}
