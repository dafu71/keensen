package com.zoomlion.hjsrm.pub.srmclient;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.eos.common.connection.ConnectionHelper;
import com.eos.foundation.common.utils.DateUtil;
import com.eos.workflow.data.WFWorkItem;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.frame.workflows.service.BPSServiceManagerImpl;

public class CommonUtils extends BaseBean {

	/**
	 * 方法描述: 通用取序列的next值，传入参数为序列名称，此方法只适用于oracle数据库
	 * 
	 * @param dsName
	 * @param sequencename
	 * @return
	 * @throws Exception
	 */
	public static long getNextSeq(String dsName, String sequencename)
			throws BusinessException {
		Connection conn = ConnectionHelper
				.getCurrentContributionConnection(dsName);
		Statement stmt = null;
		long retCode = 0;
		if (dsName == null || dsName.equals(""))
			dsName = "default";
		if (sequencename == null || sequencename.trim().equals(""))
			return retCode;

		try {
			String sql = "select " + sequencename + ".nextval from dual ";
			stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			if (rs.next()) {
				retCode = rs.getLong(1);
			}
		} catch (Throwable e) {
			throw new RuntimeException(e);
		} finally {
			close(stmt);
			close(conn);
		}
		return retCode;
	}

	/**
	 * 关闭statemen
	 * 
	 * @param stmt
	 */
	private static void close(Statement stmt) {
		if (stmt == null)
			return;
		try {
			stmt.close();
		} catch (SQLException e) {
			// ignore
		}
	}

	/**
	 * 关闭数据库连接
	 * 
	 * @param conn
	 */
	private static void close(Connection conn) {
		if (conn == null)
			return;
		try {
			conn.close();
		} catch (SQLException e) {
			// ignore
		}
	}

	/**
	 * 方法描述:通过工单类型，和当前工单号生成工单编号
	 * 
	 * @param workfromseq
	 *            工单当前序列
	 * @param workfromTypeNo
	 *            工单类型
	 * @return 工单编号
	 */

	// @Bizlet(params = { @BizletParam(index = 0, paramAlias = "esWorkfromSeq")
	// })
	public synchronized static String creatWrokformSeq(long workfromseq,
			long workfromTypeNo) {
		String workfromNo = "";
		String seqStr;// 把工单序列号转为字符类型的临时变量
		Date currentdate = new Date(); // 系统当前时间
		String currentdateStr = DateUtil.format(currentdate, "yyyyMMdd");
		if (workfromseq < 10000) {// 小于1000要补编号要自动补0
			// seqStr = (workfromseq + 100000) + "";
			// seqStr = seqStr.substring(1, 6);
			seqStr = workfromseq + "";
		} else {
			workfromseq = workfromseq % 10000;
			seqStr = (workfromseq + 10000) + "";
			seqStr = seqStr.substring(1, 5);
		}
		workfromNo = workfromTypeNo + "" + currentdateStr + seqStr;// 工单号由工单类型，当前时间，序列号组成

		// TODO Auto-generated method stub
		return workfromNo;
	}

	/**
	 * 方法描述: 创建启动流程
	 * 
	 * @param processDefName
	 * @param processInstName
	 * @param processInstDesc
	 * @return
	 * @throws BusinessException
	 */

	public List<WFWorkItem> createAndStartProcessInstance(
			String processDefName, String processInstName,
			String processInstDesc) throws BusinessException {
		long processinstid = 0;
		List<WFWorkItem> workItems = null;
		try {
			// 创建流程
			processinstid = BPSServiceManagerImpl.createProcessInst(
					processDefName, processInstName, processInstDesc);
			// 启动流程
			Map<String, Object> reldata = null;
			BPSServiceManagerImpl.startProcInstAndSetRelaData(processinstid,
					reldata);
			// 返回下一个活动的工作项相关信息供后续业务调用
			workItems = BPSServiceManagerImpl
					.queryNextWorkItemsByProcessInstID(processinstid, true);

		} catch (Exception e) {
			SrmLog.error("createProcessInst error", e);
			throw new BusinessException("创建启动实例异常!", e.getMessage());
		}

		return workItems;
	}

	/**
	 * 方法描述: 完成工作项
	 * 
	 * @param workItemID
	 * @param userid
	 * @throws BusinessException
	 */
	public void finishWorkItem(long workItemID, String userid)
			throws BusinessException {
		try {
			BPSServiceManagerImpl.finishWorkItem(workItemID, userid);
		} catch (Exception e) {
			SrmLog.error("finishWorkItem error", e);
			throw new BusinessException("完成工作项异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询并完成工作项
	 * 
	 * @param workItemID
	 * @param userid
	 * @return
	 * @throws BusinessException
	 */
	public WFWorkItem queryAndFinishWorkItem(long workItemID, String userid)
			throws BusinessException {
		try {
			WFWorkItem wfworkitem = BPSServiceManagerImpl
					.queryWorkItemDetail(workItemID);
			int currentstate = wfworkitem.getCurrentState();
			if (currentstate == 10) {
				BPSServiceManagerImpl.finishWorkItem(workItemID, userid);
			} else {
				throw new BusinessException("完成工作项异常,工作项状态不为运行!",
						"完成工作项异常!,工作项状态不为运行!");
			}

			return wfworkitem;
		} catch (Exception e) {
			SrmLog.error("finishWorkItem error", e);
			throw new BusinessException("完成工作项异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 设置流程实例相关数据
	 * 
	 * @param processInstID
	 * @param xpath
	 * @param value
	 * @return 
	 * @throws BusinessException
	 */
	public void setRelativeData(long processInstID, String xpath,
			Object value) throws BusinessException {
		try {
		
			BPSServiceManagerImpl.setRelativeData(processInstID, xpath, value);
		}catch (Exception e) {
				SrmLog.error("setRelativeData error", e);
				throw new BusinessException("设置相关数据异常!", e.getMessage());
			}
	}
	
	/**
	 * 方法描述: 获取流程实例相关数据
	 * 
	 * @param processInstID
	 * @param xpath
	 * @return Object
	 * @throws BusinessException
	 */
	public Object getRelativeData(long processInstID, String xpath)
			throws BusinessException {
		try {
			return BPSServiceManagerImpl.getRelativeData(processInstID, xpath);
		}catch (Exception e) {
			SrmLog.error("getRelativeData error", e);
			throw new BusinessException("获取相关数据异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 终止流程实例
	 * 
	 * @param processInstID
	 * @return 
	 * @throws BusinessException
	 */
	public void terminateProcessInstance(long processInstID)
			throws BusinessException {
		try {
			BPSServiceManagerImpl.terminateProcessInstance(processInstID);
		} catch (Exception e) {
			SrmLog.error("terminateProcessInstance error", e);
			throw new BusinessException("终止流程实例异常!", e.getMessage());
		}
	}

}
