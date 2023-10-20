package com.zoomlion.hjsrm.frame.bclib;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.VAcOperatorTrs;
/**
 * **************************************************
 * 描    述：  操作员公共方法
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OperatorBclibDao extends BaseDao{
	
	/**
	 * 方法描述: 根据条件查询操作员信息
	 * @author 侯杰
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return TAcOperator[]
	 */
	public TAcOperator[] queryOperators(Map condition,PageCond pageCond) throws Exception{		
		return this.queryByNamedSqlWithPage(TAcOperator.class,"com.zoomlion.hjsrm.frame.bclib.operatorBclib.queryOperators",pageCond, condition);
	}
	
	/**
	 * 方法描述: 根据条件查询操作员信息
	 * @author 侯杰
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return TAcOperator[]
	 */
	public VAcOperatorTrs[] queryOperators2(Map condition,PageCond pageCond) throws Exception{		
		return this.queryByNamedSqlWithPage(VAcOperatorTrs.class,"com.zoomlion.hjsrm.frame.bclib.operatorBclib.queryOperators2",pageCond, condition);
	}
}
