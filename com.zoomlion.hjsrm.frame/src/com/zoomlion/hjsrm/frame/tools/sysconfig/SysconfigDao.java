package com.zoomlion.hjsrm.frame.tools.sysconfig;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.clib.util.SrmData;
import com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig;
import commonj.sdo.DataObject;

/**
 * **************************************************
 * 描    述：  实现系统参数配置功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class SysconfigDao  extends BaseDao{
	
	/**
	 * 方法描述: 查询系统参数配置
	 * @author 陈今伟
	 * @param query
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject [] querySysconfigs(TOmSysconfig query) throws Exception {
		Map condition = SrmData.entityToData(query);
		if(query.getString("paramvalue")!=null&&!query.getString("paramvalue").equals("")){
			condition.put("paramvalue", query.getString("paramvalue"));
		}
		if(query.getString("dataorgid")!=null&&!query.getString("dataorgid").equals("")){
			condition.put("dataorgid", query.getString("dataorgid"));
		}
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.tools.sysconfig.sysconfig.selectSysconfigs", condition);
	}
}
