package com.zoomlion.hjsrm.clib.util;
import java.util.Date;
import com.eos.das.entity.SequenceGenerator;
import com.eos.foundation.database.DatabaseUtil;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl;
/**
 * **************************************************
 * 描    述：  通用业务日志记录组件类
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class OperLog {

	/**
	 * 方法描述: 通用的业务日志记录组件
	 * @author 陈今伟
	 * @param operattype 业务类型
	 * @param operatresult 处理结果
	 * @param optdesc 处理过程描述
	 * @throws BusinessException 
	 * @return void
	 */
	public static void log(String operattype,String operatresult,String optdesc)throws BusinessException{
		Long operatorid;
		String dataorgid;
		try {
			operatorid = (Long) Common.getCurrentUseObject().getAttributes().get("operatorid");
			dataorgid =  Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取操作员信息失败!", e);
			throw new BusinessException("获取操作员信息失败!",e.getMessage());
		}
    	TAtOperlog tol = new TAtOperlogImpl();
    	long operatid = SequenceGenerator.getNextSequence("TAcOperlog.Operatid");
    	tol.setOperatid(operatid);
    	tol.setOperaterid(operatorid);
    	tol.setOperattype(operattype);
    	tol.setOperatresult(operatresult);
    	tol.setOptdesc(optdesc);
    	tol.setDataorgid(Integer.parseInt(dataorgid));
    	tol.setOperattime(new Date());
    	DatabaseUtil.insertEntity("default", tol);
	}
}