package com.zoomlion.hjsrm.frame.auth.login;
import java.util.HashMap;
import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现操作员登出功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class LoginoutDao extends BaseDao{
	
	/**
	 * 方法描述: 判断操作员密码是否在30分钟内错误5次
	 * @author 侯杰
	 * @param userid
	 * @return
	 * @throws Exception
	 * @return int
	 */
	@SuppressWarnings("unchecked")
	public int LoginTry(String userid) throws Exception { 
		Map condition = new HashMap();
		condition.put("userid",userid);
		return this.countByNamedSql("com.zoomlion.hjsrm.frame.auth.login.login.loginTryCount", condition);
	}
	/**
	 * 方法描述: 查询点击业务地图信息
	 * @author 刘鑫
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	public DataObject[] queryLoginywditu(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.auth.login.login.loginywditu",condition);
	}
}
