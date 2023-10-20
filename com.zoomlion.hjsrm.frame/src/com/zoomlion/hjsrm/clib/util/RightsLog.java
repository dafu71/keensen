package com.zoomlion.hjsrm.clib.util;

import java.util.Date;

import com.eos.das.entity.SequenceGenerator;
import com.eos.foundation.database.DatabaseUtil;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.TAcRightLogs;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl;
/**
 * **************************************************
 * 描    述：  记录权限的操作记录
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class RightsLog {
	
	/**
	 * 方法描述: 记录成功日志
	 * @author 陈今伟
	 * @param opttype
	 * @param operdesc 
	 * @return void
	 */
	public static void writeSucceedLog(int opttype,String operdesc) {
		TAcRightLogs tl = new TAcRightLogsImpl();
		tl.setOperstatus("1");
		tl.setOpertype(opttype);
		tl.setOperdesc(operdesc);
		addLog(tl);
	}
	
	/**
	 * 方法描述: 记录失败日志
	 * @author 陈今伟
	 * @param opttype
	 * @param operdesc 
	 * @return void
	 */
	public static void writeFailedLog(int opttype,String operdesc) {
		TAcRightLogs tl = new TAcRightLogsImpl();
		tl.setOperstatus("0");
		tl.setOpertype(opttype);
		tl.setOperdesc(operdesc);
		addLog(tl);
	}
	
	/**
	 * 方法描述: 记录失败日志
	 * @author 陈今伟
	 * @param opttype
	 * @param operdesc
	 * @param e 
	 * @return void
	 */
	public  static void writeFailedLog(int opttype,String operdesc,Exception e) {
		TAcRightLogs tl = new TAcRightLogsImpl();
		tl.setOperstatus("0");
		tl.setOpertype(opttype);
		tl.setOperdesc(operdesc);
		tl.setExceptionmsg(e.getMessage());
		addLog(tl);
	}
	
	/**
	 * 方法描述: 保存日志
	 * @author 陈今伟
	 * @param tl 
	 * @return void
	 */
	public static void addLog(TAcRightLogs tl) {
		try {
			String userid = Common.getCurrentUserId();
			String username = Common.getCurrentUseObject().getUserName();
			String ip = Common.getCurrentUseObject().getUserRemoteIP();
			String dataorgid = Common.getCurrentUserDataOrgId();
			Date dt = Common.getCurrentTime();
			long operid = SequenceGenerator.getNextSequence("TAcRightLogs.Operid");
			tl.setOperid(operid);
			tl.setUserid(userid);
			tl.setOperatorname(username);
			tl.setClientip(ip);
			tl.setOpertime(dt);
			tl.setLogstatus("0");
			tl.setDataorgid(Integer.valueOf(dataorgid));
			DatabaseUtil.insertEntity("default", tl);
		} catch (Exception e) {
			SrmLog.error("保存日志失败！", e);
		}
		
	}
}
