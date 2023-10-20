package com.zoomlion.hjsrm.frame.bclib;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmData;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.VAcOperatorTrs;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  操作员公共方法
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OperatorBclibBean  extends BaseBean {
	
	private OperatorBclibDao operatorBclibDao; 

	/**
	 * 方法描述: 根据条件查询操作员信息
	 * @author 侯杰
	 * @param query
	 * @param emp
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return TAcOperator[]
	 */
	@SuppressWarnings("unchecked")
	public TAcOperator[] queryOperators(TAcOperator query,DataObject emp ,PageCond pageCond) throws BusinessException{
		Map condition;
		String dataorgid;
		try {
			condition = SrmData.entityToData(query);
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("查询条件转换异常", e);
			throw new BusinessException("查询条件转换异常",e.getMessage());
		}		
		try {
			condition.put("empname", emp.getString("empname"));
			condition.put("empcode", emp.getString("empcode"));
			condition.put("userid", emp.getString("userid"));
			condition.put("dataorgid", Integer.valueOf(dataorgid));
			return operatorBclibDao.queryOperators(condition,pageCond);
		} catch (Exception e) {
			SrmLog.error("查询操作员信息异常", e);
			throw new BusinessException("查询操作员信息异常",e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据条件查询操作员信息
	 * @author dafu
	 * @param query
	 * @param emp
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return TAcOperator[]
	 */
	@SuppressWarnings("unchecked")
	public VAcOperatorTrs[] queryOperators(VAcOperatorTrs query,DataObject emp ,PageCond pageCond) throws BusinessException{
		Map condition;
		String dataorgid;
		try {
			condition = SrmData.entityToData(query);
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("查询条件转换异常", e);
			throw new BusinessException("查询条件转换异常",e.getMessage());
		}		
		try {
			condition.put("empname", emp.getString("empname"));
			condition.put("empcode", emp.getString("empcode"));
			condition.put("userid", emp.getString("userid"));
			condition.put("dataorgid", Integer.valueOf(dataorgid));
			return operatorBclibDao.queryOperators2(condition,pageCond);
		} catch (Exception e) {
			SrmLog.error("查询操作员信息异常", e);
			throw new BusinessException("查询操作员信息异常",e.getMessage());
		}
	}
	
	public OperatorBclibDao getOperatorBclibDao() {
		return operatorBclibDao;
	}

	public void setOperatorBclibDao(OperatorBclibDao operatorBclibDao) {
		this.operatorBclibDao = operatorBclibDao;
	}
	
	
	
}
