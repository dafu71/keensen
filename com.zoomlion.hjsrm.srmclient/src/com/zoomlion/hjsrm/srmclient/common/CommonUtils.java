package com.zoomlion.hjsrm.srmclient.common;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.common.connection.ConnectionHelper;
import com.eos.foundation.common.utils.DateUtil;
import com.eos.workflow.data.WFActivityDefine;
import com.eos.workflow.data.WFWorkItem;
import com.eos.workflow.omservice.WFParticipant;
import com.eos.workflow.omservice.WIParticipantInfo;
import com.primeton.workflow.api.WFServiceException;
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
	public long getNextSeq(String dsName, String sequencename)
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

	public void backActivity(long currentActInstID, String destActDefID,
			String rollBackStrategy) throws BusinessException {
		try {
			BPSServiceManagerImpl.backActivity(currentActInstID, destActDefID,
					rollBackStrategy);
		} catch (Exception e) {
			SrmLog.error("backActivity error", e);
			throw new BusinessException("回退工作项异常!", e.getMessage());
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
	 * 方法描述: 获取工作项详细信息
	 * 
	 * @author 王富强
	 * @param workItemID
	 *            工作项ID
	 * @retrun 工作项详细对象
	 * @throws WFServiceException
	 */
	public WFWorkItem queryWorkItemDetail(long workItemID)
			throws BusinessException {
		try {
			WFWorkItem wfworkitem = BPSServiceManagerImpl
					.queryWorkItemDetail(workItemID);
			return wfworkitem;
		} catch (Exception e) {
			SrmLog.error("queryWorkItemDetail error", e);
			throw new BusinessException("完成工作项异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据活动实例ID查询工作项列表
	 * 
	 * @author 王富强
	 * @param actInstID
	 *            活动实例ID
	 * @return
	 * @throws WFServiceException
	 *             描述******
	 * @return List<WFWorkItem>
	 */
	public static List<WFWorkItem> queryWorkItemsByActivityInstID(long actInstID)
			throws BusinessException {
		try {
			return BPSServiceManagerImpl
					.queryWorkItemsByActivityInstID(actInstID);
		} catch (Exception e) {
			SrmLog.error("finishWorkItem error", e);
			throw new BusinessException("完成工作项异常!", e.getMessage());
		}
	}

	/**
	 * 设置工作项参与者
	 * 
	 * @param workItemID
	 * @param activityDefID
	 * @author 王富强
	 * @param participants
	 * @throws BusinessException
	 */
	public void setWorkItemParticipants(long workItemID, String activityDefID,
			WFParticipant[] participants) throws BusinessException {
		try {
			BPSServiceManagerImpl.appointActivityParticipant(workItemID,
					activityDefID, participants);
		} catch (Exception e) {
			SrmLog.error("setWorkItemParticipants error", e);
			throw new BusinessException("设置工作项参与者异常!", e.getMessage());
		}

	}

	/**
	 * 查询当前环节下一定义环节
	 * 
	 * @param workItemID
	 * @author 王富强
	 * @return
	 * @throws BusinessException
	 */
	public List<WFActivityDefine> queryNextActivites(long workItemID)
			throws BusinessException {
		try {
			return BPSServiceManagerImpl
					.queryNextActivitesNeedAppointParticipant(workItemID);
		} catch (Exception e) {
			SrmLog.error("queryNextActivites error", e);
			throw new BusinessException("查询当前环节下一定义环节异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述：查询业务流程中的某个活动定义的所有直接后继活动
	 * 
	 * @author 王富强
	 * @param processDefID
	 * @param activityDefID
	 * @return
	 * @throws WFServiceException
	 */
	public List<WFActivityDefine> queryNextActivities(long processDefID,
			String activityDefID) throws BusinessException {
		try {
			return BPSServiceManagerImpl.queryNextActivities(processDefID,
					activityDefID);
		} catch (Exception e) {
			SrmLog.error("queryNextActivites error", e);
			throw new BusinessException("查询当前环节下一定义环节异常!", e.getMessage());
		}
	}

	/**
	 * 根据规则获得相应后续定义环节
	 * 
	 * @param activityDefID
	 * @author 王富强
	 * @return
	 * @throws WFServiceException
	 */
	public static List<WFActivityDefine> getNextActivitiesMaybeArrived(
			long activityDefID) throws BusinessException {

		try {
			return BPSServiceManagerImpl
					.getNextActivitiesMaybeArrived(activityDefID);
		} catch (Exception e) {
			SrmLog.error("getNextActivitiesMaybeArrived error", e);
			throw new BusinessException("根据规则获得相应后续定义环节异常!", e.getMessage());
		}
	}

	/**
	 * 设置工作项规则因子
	 * 
	 * @param processInstID
	 * @param xpath
	 * @author 王富强
	 * @param value
	 * @throws BusinessException
	 */
	public void setRelativeData(long processInstID, String xpath, Object value)
			throws BusinessException {
		try {
			BPSServiceManagerImpl.setRelativeData(processInstID, xpath, value);
		} catch (Exception e) {
			SrmLog.error("setRelativeData error", e);
			throw new BusinessException("设置工作项规则因子异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 批量设置流程相关数据
	 * 
	 * @author 王富强
	 * @param processInstID
	 *            流程实例ID
	 * @param map
	 *            批量设置的相关数据
	 * @return
	 * @throws WFServiceException
	 */
	public void setRelativeDataBatch(long processInstID,
			Map<String, Object> map) throws BusinessException {		
		try {
			BPSServiceManagerImpl.setRelativeDataBatch(processInstID,map);
		} catch (Exception e) {
			SrmLog.error("setRelativeDataBatch error", e);
			throw new BusinessException("设置工作项规则因子异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 批量获取流程相关数据
	 * 
	 * @author 王富强
	 * @param processInstID
	 *            流程实例ID
	 * @param paramArrayOfString
	 *            设置的相关数据的xpath路径数组
	 * @return 相关数据的在xpath路径对应的值的列表
	 * @throws WFServiceException
	 */
	public List<Object> getRelativeBatchData(long processdInstID,
			String[] paramArrayOfString) throws BusinessException {		
		try {
			return BPSServiceManagerImpl.getRelativeBatchData(processdInstID, paramArrayOfString);
		} catch (Exception e) {
			SrmLog.error("getRelativeBatchData error", e);
			throw new BusinessException("获得工作项规则因子异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 查询工作项参与者,查询指定工作项的参与者信息
	 * 
	 * @author 王富强
	 * @param workItemID
	 *            工作项ID
	 * @return 参与者信息
	 */
	public List<WIParticipantInfo> queryWorkItemParticipantInfo(long workItemID)
			throws BusinessException {
		try {
			return BPSServiceManagerImpl
					.queryWorkItemParticipantInfo(workItemID);
		} catch (Exception e) {
			SrmLog.error("查询工作项参与者 error", e);
			throw new BusinessException("查询工作项参与者异常!", e.getMessage());
		}
	}

	/**
	 * 根据当前活动实例ID和目标活动定义ID，查询他们之间所有已经运行过的活动定义，该方法返回的是一个List列表
	 * 
	 * @param currentActInstID
	 * @param destActDefID
	 * @author 王富强
	 * @return
	 * @throws BusinessException
	 */
	public List<WFActivityDefine> getPreviousActivities(long currentActInstID,
			String destActDefID) throws BusinessException {
		try {
			return BPSServiceManagerImpl.getPreviousActivities(
					currentActInstID, destActDefID);
		} catch (Exception e) {
			SrmLog.error("getPreviousActivities error", e);
			throw new BusinessException("查询活动定义工作项异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 终止流程
	 * 
	 * @author 王富强
	 * @param processInstID
	 *            流程实例ID
	 * @return
	 * @throws WFServiceException
	 */
	public void terminateProcessInstance(long processInstID)
			throws BusinessException {	
		try {
			BPSServiceManagerImpl.terminateProcessInstance(processInstID);
		} catch (Exception e) {
			SrmLog.error("getPreviousActivities error", e);
			throw new BusinessException("查询活动定义工作项异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 批量插入工单阅读表，主要在工单传阅时调用
	 * 
	 * @param dsName
	 * @param user
	 * @param username
	 * @param useridstr
	 * @param usernamestr
	 * @param sheetno
	 * @return
	 * @throws Exception
	 */
	public int sheetReadInsert(String dsName, String user, String username,
			String useridstr, String usernamestr, String sheetno)
			throws Exception {
		Connection conn = ConnectionHelper
				.getCurrentContributionConnection(dsName);
		Statement stmt = null;
		Statement stmt1 = null;
		int retCode = 0;
		if (dsName == null || dsName.equals(""))
			dsName = "default";
		if (useridstr == null || useridstr.trim().equals(""))
			return retCode;

		ArrayList<String> sqls = new ArrayList<String>();
		try {
			String sql = "";
			stmt = conn.createStatement();
			stmt1 = conn.createStatement();
			ResultSet rs1 = null;
			int commitCount = 50;
			String seqid = "";
			// --处理字串
			String useridAry[] = useridstr.split(",");
			String usernameAry[] = usernamestr.split(",");

			int usercount = 0;
			for (int i = 0; i < useridAry.length; i++) {
				if (useridAry[i] != null && !useridAry[i].trim().equals("")) {
					useridAry[i] = useridAry[i].trim();
					// 发送短信
					sql = "select SEQ_WORKFORM_READ.nextval from dual";
					rs1 = stmt1.executeQuery(sql);
					if (rs1.next()) {
						seqid = rs1.getString(1);
					}
					sql = "insert into es_workform_read (ID,READER,READERNAME,ESHEETNO,SENDUSER,SENDUSERNAME)	values(";
					sql += seqid + ",'" + useridAry[i] + "','" + usernameAry[i]
							+ "','" + sheetno + "','" + user + "','" + username
							+ "')";
					System.out.println("******sheetReadInsert:" + sql);

					// --批量提交
					sqls.add(sql);
					usercount++;
					executeBatch(stmt, sqls, usercount, commitCount, 0);
				}
			}
			// --更新剩下的sql
			executeBatch(stmt, sqls, usercount, commitCount, 1);
		} catch (Throwable e) {
			throw new RuntimeException(e);
		} finally {
			close(stmt);
			close(stmt1);
			close(conn);
		}
		return retCode;
	}

	/**
	 * 方法描述: 批量执行sql语句
	 * 
	 * @param stmt
	 * @param sqls
	 * @param totalcount
	 * @param commitCount
	 * @param flag
	 * @throws Exception
	 */
	public void executeBatch(Statement stmt, ArrayList sqls, int totalcount,
			int commitCount, int flag) throws Exception {
		if (sqls == null || sqls.size() <= 0)
			return;
		if (flag == 0) {
			if (totalcount % commitCount != 0)
				return;
		}
		if (sqls != null && sqls.size() > 0) {
			String[] commitsqls = new String[sqls.size()];
			for (int j = 0; j < sqls.size(); j++) {
				commitsqls[j] = (String) sqls.get(j);
				// System.out.println("88888888888888="+commitsqls[j]);
			}
			int ret[] = executeBatch(stmt, commitsqls);
			System.out.println("**executeBatch:更新成功" + ret.length + "条！");
			sqls.clear();
		}
	}
	
	

	/**
	 * 方法描述: 批量执行sql语句，传入参数为sql语句数组
	 * 
	 * @param stmt
	 * @param sqls
	 * @return
	 * @throws Exception
	 */
	public static int[] executeBatch(Statement stmt, Object[] sqls)
			throws Exception {
		for (int i = 0; i < sqls.length; i++) {
			if (sqls[i] == null)
				continue;
			String tmp = (String) sqls[i];
			if (tmp.equals(""))
				continue;
			stmt.addBatch(tmp);
		}
		return stmt.executeBatch();
	}
	
	/**
	 * 根据当前活动实例ID和目标活动定义ID，查询他们之间所有已经运行过的活动定义，该方法返回的是一个List列表
	 * 
	 * @param currentActInstID
	 * @param destActDefID
	 * @return
	 * @throws BusinessException
	 */
	public HashMap[] getBackActivities(long currentActInstID,
			String destActDefID) throws BusinessException {
		HashMap[] objs;
		try {
			List<WFActivityDefine> define = BPSServiceManagerImpl
					.getPreviousActivities(currentActInstID, destActDefID);
			objs = new HashMap[define.size()];
			for (int i = 0; i < define.size(); i++) {
				WFActivityDefine temp = define.get(i);
				HashMap<String, String> map = new HashMap<String, String>();
				map.put("id", temp.getId());
				map.put("name", temp.getName());
				objs[i] = map;
			}
			return objs;
		} catch (Exception e) {
			SrmLog.error("getPreviousActivities异常!", e);
			throw new BusinessException("查询业务数据异常!", e.getMessage());
		}
	}
}
