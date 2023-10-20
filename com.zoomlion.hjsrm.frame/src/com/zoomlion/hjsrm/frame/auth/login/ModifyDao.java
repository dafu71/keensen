package com.zoomlion.hjsrm.frame.auth.login;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperatorImpl;
/**
 * **************************************************
 * 描    述：  实现修改密码功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class ModifyDao extends BaseDao {

	/**
	 * 方法描述: 修改操作员密码
	 * @author 侯杰
	 * @param to
	 * @return
	 * @throws Exception
	 * @return boolean
	 */
	public boolean modifyPwd(TAcOperator to) throws Exception {
		try {
			this.saveEntity(to);
			return true;
		} catch (Exception e) {
			SrmLog.error("修改密码失败!", e);
		}
		return false;
	}

	/**
	 * 方法描述: 展开操作员信息
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return TAcOperator
	 */
	public TAcOperator expandUser() throws Exception {
		Long operatorid = (Long) Common.getCurrentUseObject().getAttributes().get("operatorid");
		TAcOperator to = new TAcOperatorImpl();
		to.setOperatorid(operatorid);
		expandEntity(to);
		return to;
	}
}
