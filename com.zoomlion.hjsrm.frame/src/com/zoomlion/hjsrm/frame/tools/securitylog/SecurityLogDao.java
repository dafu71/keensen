package com.zoomlion.hjsrm.frame.tools.securitylog;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.common.Common;

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
public class SecurityLogDao extends BaseDao{
	
	/**
	 * 方法描述: 分页查询安全日志,用于安全审计管理
	 * @author 陈今伟
	 * @param param
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getSecurityLogs(DataObject param, PageCond pageCond) throws Exception {
		Map condition = new HashMap();

		String dataorgid = (String) Common.getCurrentUseObject().getAttributes().get("dataorgid");
		if(dataorgid!=null&&!dataorgid.equals("0")&&!dataorgid.equals("")){
			condition.put("dataorgid", dataorgid);
		}		

		if(param.getString("operator")!=null&&!param.getString("operator").equals("")){			
			condition.put("operator", param.getString("operator"));
		}
		if(param.getString("startDate")!=null&&!param.getString("startDate").equals("")){			
			condition.put("startDate", param.getString("startDate"));
		}
		if(param.getString("endDate")!=null&&!param.getString("endDate").equals("")){			
			condition.put("endDate", param.getString("endDate"));
		}
		if(param.get("opttype")!=null){
			String [] s;
			try {
				s = (String[]) param.get("opttype");
			} catch (Exception e) {
				s = new String[1];
				s[0] = param.get("opttype").toString();
			}
			
			int [] j= new int[s.length];
			for(int i=0;i<s.length;i++){
			   j[i]=Integer.parseInt(s[i]);
			}
			condition.put("opttype", j);
		}
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.tools.securitylog.securitylog.selectsecurtyLogs", pageCond, condition);
	}
}
