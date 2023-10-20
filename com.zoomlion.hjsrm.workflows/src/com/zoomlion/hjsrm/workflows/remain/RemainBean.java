/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 我的工作-待办工单，包括待办工作的查询和统一处理。
*创建日期： 2014-10-9
*补丁编号： G3_P_20140915_01_212
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//      补丁编号                 修改人     日期       归属       备注
// G3_P_20140709_01_101        肖斌    2014-8-8    集团  
// G3_P_20140915_01_212        何源    2014-10-9   集团 
//=================================================================
package com.zoomlion.hjsrm.workflows.remain;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.eos.foundation.PageCond;
import com.eos.foundation.common.utils.StringUtil;
import com.eos.spring.BeanFactory;
import com.eos.workflow.omservice.WFParticipant;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.Business.TBsApplyinfo;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusidistrinfo;
import com.zoomlion.hjsrm.pub.busi.Business.TBsPrintinforec;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusidistrinfoImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsPrintinforecImpl;
import com.zoomlion.hjsrm.pub.common.BusiGlobal;
import com.zoomlion.hjsrm.pub.common.Globals;
import com.zoomlion.hjsrm.workflows.common.WorkinCommonBean;
import commonj.sdo.DataObject;

public class RemainBean extends BaseBean {

	String msg = "";

	private RemainDao remainDao = null;

	public void setRemainDao(RemainDao remainDao) {
		this.remainDao = remainDao;
	}

	/**
	 * 方法描述: 根据查询条件查询业务待办工单
	 * 
	 * @author 毛晓东
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryBusinessRemain(Map paramObj, PageCond pageCond)
			throws BusinessException {
		DataObject[] outData = null;
		String orgId = "";
		String roleId = paramObj.get("roleid").toString();
		roleId = "'" + roleId.replace(",", "','") + "'";
		try {
			orgId = remainDao.querySubOrgWithOrg(paramObj);
			if (orgId.equals("")) {
				outData = null;
			} else {
				paramObj.put("orgid", orgId);
				paramObj.put("roleid", roleId);
				paramObj.put("userid", "'" + paramObj.get("userid") + "'");
				paramObj.put("dataorgid", Common.getCurrentUserDataOrgId());
				outData = remainDao.queryRemainTicketWithPage(paramObj,
						pageCond);
			}
		} catch (Exception e) {
			SrmLog.error("[业务待办工单查询]：业务待办工单查询失败！", e);
			throw new BusinessException("[业务待办工单查询]：业务待办工单查询失败！", e
					.getMessage());
		}
		return outData;
	}

	/**
	 * 方法描述: 根据查询条件查询诉求待办工单
	 * 
	 * @author 毛晓东
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryDemandRemain(Map paramObj, PageCond pageCond)
			throws BusinessException {
		DataObject[] outData = null;
		String orgId = "";
		String roleId = paramObj.get("roleid").toString();
		roleId = "'" + roleId.replace(",", "','") + "'";
		try {
			orgId = remainDao.querySubOrgWithOrg(paramObj);
			if (orgId.equals("")) {
				outData = null;
			} else {
				paramObj.put("orgid", orgId);
				paramObj.put("roleid", roleId);
				paramObj.put("userid", "'" + paramObj.get("userid") + "'");
				paramObj.put("dataorgid", Common.getCurrentUserDataOrgId());
				outData = remainDao.queryDemandRemainWithPage(paramObj,
						pageCond);
			}

		} catch (Exception e) {
			SrmLog.error("[诉求待办工单查询]：诉求待办工单查询失败！", e);
			throw new BusinessException("[诉求待办工单查询]：诉求待办工单查询失败！", e
					.getMessage());
		}
		return outData;
	}

	/**
	 * 查询待办工单信息，以导出excel
	 * 
	 * @param paramObj
	 *            查询条件
	 * @return 待办工单集合
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getRemainForExport(Map paramObj)
			throws BusinessException {
		DataObject[] data = null;

		String orgId = "";
		String roleId = (String) paramObj.get("roleid");
		roleId = "'" + roleId.replace(",", "','") + "'";
		try {
			orgId = remainDao.querySubOrgWithOrg(paramObj);
			paramObj.put("dataorgid", Common.getCurrentUserDataOrgId());
		} catch (Exception e1) {
			SrmLog.error("[待办工单查询]：组织机构查询失败！", e1);
			throw new BusinessException("[待办工单查询]：组织机构查询失败！", e1.getMessage());
		}
		paramObj.put("orgid", orgId);
		paramObj.put("roleid", roleId);
		paramObj.put("userid", "'" + paramObj.get("userid") + "'");

		try {
			data = remainDao.getRemainForExport(paramObj);
			if (null != data) {
				for (int i = 0; i < data.length; i++) {
					data[i].set("appealchannel", data[i]
							.getString("applyTypeName"));
					data[i].set("accepttime", data[i].getString("createtime"));
					data[i].set("appointmenttime", data[i]
							.getString("bookdate"));
					data[i].set("finishtime", data[i].getString("claimdate"));
					data[i].set("ticketstate", data[i]
							.getString("currentstatename"));
					data[i].set("flowname", data[i].getString("busitypename"));
					data[i].set("planid", StringUtils.isBlank(data[i]
							.getString("batchid")) ? "" : data[i]
							.getString("batchid")
							+ "/"
							+ (StringUtils.isBlank(data[i]
									.getString("planinfopkid")) ? "" : data[i]
									.getString("planinfopkid")));

					if (StringUtils.isBlank(data[i].getString("batchid"))) {
						data[i].set("batchid", "/"
								+ (StringUtils.isBlank(data[i]
										.getString("planinfopkid")) ? ""
										: data[i].getString("planinfopkid")));
					} else {
						data[i].set("batchid", data[i].getString("batchid")
								+ "/"
								+ (StringUtils.isBlank(data[i]
										.getString("planinfopkid")) ? ""
										: data[i].getString("planinfopkid")));
					}
					if (Globals.FLAG_IS.equals(data[i].getString("isprint"))) {
						data[i].set("isprint", "是");
					} else {
						data[i].set("isprint", "否");
					}

				}
			}
		} catch (Exception e) {
			SrmLog.error("[待办工单查询]：待办工单查询失败！", e);
			throw new BusinessException("[待办工单查询]：待办工单查询失败！", e.getMessage());
		}
		return data;
	}

	/**
	 * 分页查询可进行分配的工作项
	 * 
	 * @param condition
	 *            查询条件
	 * @param pageCond
	 *            分页信息
	 * @return 工作项集合
	 * @throws Exception
	 * @author 蔡慧文
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryDispatchingWithPage(Map condition,
			PageCond pageCond) throws BusinessException {
		DataObject[] data = null;
		try {
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			data = this.remainDao.queryDispatchingWithPage(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询可进行分配的工作项失败！", e);
			throw new BusinessException("查询可进行分配的工作项失败！", e.getMessage());
		}
		return data;
	}

	/**
	 * 分页查询已分派的情况
	 * 
	 * @param condition
	 *            查询条件
	 * @param pageCond
	 *            分页信息
	 * @return 分派的情况集合
	 * @throws Exception
	 * @author 蔡慧文
	 */
	public DataObject[] queryDispatchedWithPage(Map condition, PageCond pageCond)
			throws BusinessException {
		DataObject[] data = null;
		try {
			data = this.remainDao.queryDispatchedWithPage(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询已分派的情况失败！", e);
			throw new BusinessException("查询已分派的情况失败！", e.getMessage());
		}
		return data;
	}

	/**
	 * 分配工作项给部门或多人
	 * 
	 * @param condition
	 *            参数
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void doDispatchingWorkItem(Map condition, String[] workitemIds,
			String[] ticketIds, String[] busiTypes,
			WFParticipant[] participantArr) throws BusinessException {
		// 当前用户
		String userId = null;
		String userOrg = null;
		try {
			// 获取操作员userid
			userId = Common.getCurrentUserId();
			// 获取操作员部门
			userOrg = Common.getCurrentUserOrgId();
		} catch (Exception e) {
			SrmLog.error("查询当前用户信息或者部门异常!", e);
			throw new BusinessException("查询当前用户信息或者部门异常!", e.getMessage());
		}

		//
		long[] workItemID = new long[workitemIds.length];
		try {
			// 获取业务属性
			String busiattr = condition.get("dispatchType").toString();
			// 获取被派工的部门
			String destorg = condition.get("destorg").toString();
			// 获取被派工人员userid
			String destoptr = String.valueOf(condition.get("destoptr"));
			for (int i = 0; i < ticketIds.length; i++) {
				TBsBusidistrinfo entity = new TBsBusidistrinfoImpl();
				// 主键
				entity.setPkid(Common.getBusinessNo(Globals.APP_NAME_BUSI));
				// 工作项id
				entity.setWorkitemid(Long.valueOf(workitemIds[i]));
				// 工单id
				entity.setWorklistinfopkid(ticketIds[i]);
				// 业务类型
				entity.setBusitype(busiTypes[i]);
				// 被派工部门id
				entity.setDestorg(destorg);
				if (destoptr != null && !"null".equals(destoptr)) {
					// 被派工人员id
					entity.setDestoptr(destoptr);
				}
				entity.setDestorg(destorg);
				// 业务属性
				entity.setBusiattr(busiattr);
				// 派工者id
				entity.setSourceoptr(userId);
				// 派工部门orgid
				entity.setSourceorg(userOrg);
				// 保存
				this.remainDao.insertEntity(entity);

				workItemID[i] = Long.valueOf(workitemIds[i]);

			}
			// 调用转派-工作项改派给多个参与者
			BeanFactory factory = BeanFactory.newInstance();
			WorkinCommonBean workin = factory.getBean("workinCommonBean");
			workin.reassignWorkItemEx(workItemID, participantArr);
		} catch (Exception e) {
			SrmLog.error("分配工作项失败！", e);
			throw new BusinessException("分配工作项失败！", e.getMessage());
		}
	}

	/**
	 * 取消派工
	 * 
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void doCancelDispatchedWorkItem(String pkids)
			throws BusinessException {
		try {
			this.remainDao.doCancelDispatchedWorkItem(pkids);
		} catch (Exception e) {
			SrmLog.error("分配工作项失败！", e);
			throw new BusinessException("分配工作项失败！", e.getMessage());
		}
	}

	/**
	 * 查询待办工作单优先级
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject loadUrglvlByPkId(Map condition) throws BusinessException {
		TBsApplyinfo apply = new TBsApplyinfoImpl();
		try {
			// return this.remainDao.loadUrglvlByPkId(condition);
			apply.setPkid(condition.get("applyinfopkid").toString());
			this.remainDao.expandEntity(apply);
			return apply;
		} catch (Exception e) {
			SrmLog.error("查询待办工作单优先级失败！", e);
			throw new BusinessException("查询待办工作单优先级失败！", e.getMessage());
		}
	}

	/**
	 * 设置待办工单优先级
	 * 
	 * @param condition
	 * @throws BusinessException
	 */
	public void updateUrglvl(Map condition) throws BusinessException {
		TBsApplyinfo apply = new TBsApplyinfoImpl();
		try {
			// this.remainDao.updateUrglvl(condition);
			apply.setPkid(condition.get("pkid").toString());
			apply.setUrglvl(condition.get("urglvl").toString());
			this.remainDao.updateEntity(apply);
		} catch (Exception e) {
			SrmLog.error("设置待办工单优先级失败！", e);
			throw new BusinessException("设置待办工单优先级失败！", e.getMessage());
		}
	}

	/**
	 * 查询待办工单的已有超期说明
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryTimeOutExplain(Map condition)
			throws BusinessException {
		try {
			return this.remainDao.queryTimeOutExplain(condition);
		} catch (Exception e) {
			SrmLog.error("查询待办工单的已有超期说明失败！", e);
			throw new BusinessException("查询待办工单的已有超期说明失败！", e.getMessage());
		}
	}

	/**
	 * 插入待办工单的超期说明
	 * 
	 * @param condition
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public void addTimeOutExplain(Map condition) throws BusinessException {
		try {
			condition.put("pkid", Common.getBusinessNo(Globals.APP_NAME_BUSI));
			condition.put("dataorgid", Integer.parseInt(Common
					.getCurrentUserDataOrgId()));// 数据归属机构
			condition.put("createby", Common.getCurrentUserId());// 获取当前创建人
			condition.put("createtime", Common.getCurrentTime());// 获取系统当前时间
			this.remainDao.addTimeOutExplain(condition);
		} catch (Exception e) {
			SrmLog.error("插入待办工单的超期说明失败！", e);
			throw new BusinessException("插入待办工单的超期说明失败！", e.getMessage());
		}
	}

	/**
	 * 查询某一条工单的基本信息
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject queryReaminSheeet(Map condition) throws BusinessException {
		try {
			DataObject[] data = this.remainDao.queryRemainSheeet(condition);
			if (data.length > 0) {
				return data[0];
			} else {
				return null;
			}
		} catch (Exception e) {
			SrmLog.error("查询工单信息失败!", e);
			throw new BusinessException("查询工单信息失败!", e.getMessage());
		}
	}

	/**
	 * 
	 * 方法描述：查询多条工单信息
	 * 
	 * @return DataObject[]
	 * @throws Exception
	 */
	public DataObject[] queryWorklistinfoBySheet(Map condition)
			throws Exception {
		return this.remainDao.queryRemainSheeet(condition);
	}

	/**
	 * 
	 * 方法描述：(不分页业务待办工单查询)
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 * @author 毛晓东
	 * @time:2013-8-21 下午03:51:48
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryRemainTicket(Map paramObj)
			throws BusinessException {
		DataObject[] outData = null;
		String orgId = "";
		String roleId = paramObj.get("roleid").toString();
		roleId = "'" + roleId.replace(",", "','") + "'";
		try {
			orgId = remainDao.querySubOrgWithOrg(paramObj);
			if (orgId.equals("")) {
				outData = null;
			} else {
				paramObj.put("orgid", orgId);
				paramObj.put("roleid", roleId);
				paramObj.put("userid", "'" + paramObj.get("userid") + "'");
				paramObj.put("dataorgid", Common.getCurrentUserDataOrgId());
				outData = remainDao.queryRemainTicket(paramObj);
			}
		} catch (Exception e) {
			SrmLog.error("[业务待办工单查询]：业务待办工单查询失败！", e);
			throw new BusinessException("[业务待办工单查询]：业务待办工单查询失败！", e
					.getMessage());
		}
		return outData;
	}

	/**
	 * 
	 * 方法描述：记录工单打印信息（已存在，则更新打印记录，不存在则新增打印记录）
	 * 
	 * @param recs
	 * @throws Exception
	 *             void
	 */
	public void recordPrintInfo(TBsPrintinforec[] recs) throws Exception {
		String currentUserid = Common.getCurrentUserId();
		for (TBsPrintinforec pr : recs) {
			try {
				if (this.checkPrintRecExist(pr)) {//
					TBsPrintinforec[] data = remainDao.queryEntitiesByTemplate(
							TBsPrintinforec.class, pr);
					TBsPrintinforec oldRec = data[0];
					oldRec.setLastprintdate(Common.getCurrentTime());
					oldRec.setLastoptcode(currentUserid);
					oldRec.setPrintcount(oldRec.getPrintcount() + 1);
					this.remainDao.saveEntity(oldRec);
				} else {
					pr.setPkid(Common.getBusinessNo(BusiGlobal.APP_NAME_BUSI));
					pr.setIsprint(Globals.FLAG_IS);
					pr.setCurroptcode(currentUserid);
					pr.setPrintcount(1);
					pr.setCurrprintdate(Common.getCurrentTime());
					this.remainDao.insertEntity(pr);
				}
			} catch (Exception e) {
				throw new BusinessException("记录打印信息失败！", e.getMessage());
			}
		}
	}

	/**
	 * 
	 * 方法描述：检查打印记录是否存在
	 * 
	 * @param rec
	 * @return boolean
	 */
	public boolean checkPrintRecExist(TBsPrintinforec rec) {
		long workitemId = rec.getWorkitemid();
		TBsPrintinforec tpl = new TBsPrintinforecImpl();
		tpl.setWorkitemid(workitemId);
		TBsPrintinforec[] data = remainDao.queryEntitiesByTemplate(
				TBsPrintinforec.class, tpl);
		if (data.length > 0) {
			return true;
		}
		return false;
	}

	/**
	 * 
	 * 方法描述:批量打印燃气具相关
	 * 
	 * @author 肖斌
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException
	 *             描述******
	 * @return List<Map<String,String>>
	 */
	public List<Map<String, String>> printApplianceBatch(String[] applyinfopkid)
			throws BusinessException {
		try {
			List<Map<String, String>> printInfo = new ArrayList<Map<String, String>>();
			for (int i = 0, j = applyinfopkid.length; i < j; i++) {
				printInfo.add(printAppliance(applyinfopkid[i]));
			}
			return printInfo;
		} catch (Exception e) {
			SrmLog.error("批量打印燃气具相关失败！", e);
			throw new BusinessException("批量打印燃气具相关失败！", e.getMessage());
		}
	}

	/**
	 * 
	 * 方法描述：打印燃气具相关
	 * 
	 * @param userid
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException
	 * @author 傅力
	 * @time:2013-11-8 上午10:21:38
	 */
	public HashMap<String, String> printAppliance(String applyinfopkid)
			throws BusinessException {
		HashMap<String, String> printmap = new HashMap<String, String>();
		try {
			Map<String, String> condition = new HashMap<String, String>();
			condition.put("applyinfopkid", applyinfopkid);
			DataObject[] datas = this.remainDao.queryAppliance(condition);
			if (null != datas && datas.length > 0) {
				StringBuffer productnamestr = new StringBuffer();
				StringBuffer modelidstr = new StringBuffer();
				for (int i = 0; i < datas.length && i < 5; i++) {
					productnamestr.append(datas[i].getString("productname"));
					modelidstr.append(datas[i].getString("modelid"));
					if (i < datas.length - 1) {
						productnamestr.append("\n");
						modelidstr.append("\n");
					}
				}
				printmap.put("remark", datas[0].getString("remark"));
				printmap.put("operator", Common.getCurrentUseObject()
						.getUserName());
				printmap.put("username", datas[0].getString("username") + " ("
						+ datas[0].getString("contactname") + ")");
				printmap
						.put("contactphone", datas[0].getString("contactphone"));
				printmap.put("userid", datas[0].getString("userid"));
				printmap.put("addressdetail", datas[0]
						.getString("addressdetail"));
				printmap.put("productname", productnamestr.toString());
				printmap.put("modelid", modelidstr.toString());
				if (StringUtils.isNotBlank(datas[0].getString("buydate"))) {
					printmap.put("buydate", datas[0].getString("buydate")
							.replace("~", "  ").replace("!", "  ").replace("@",
									"  "));
				}
				if (StringUtils.isNotBlank(datas[0].getString("claimbookdate"))) {
					printmap.put("claimbookdate", datas[0].getString(
							"claimbookdate").replace("~", "  ").replace("!",
							"  ").replace("@", "  ").replace("^", "  ")
							.replace("*", "  "));
				}
				printmap.put("username2", datas[0].getString("username") + " ("
						+ datas[0].getString("contactname") + ")");
				printmap.put("contactphone2", datas[0]
						.getString("contactphone"));
				printmap.put("addressdetail2", datas[0]
						.getString("addressdetail"));
				printmap.put("productname2", productnamestr.toString());
				printmap.put("modelid2", modelidstr.toString());
				if (StringUtils.isNotBlank(datas[0].getString("buydate"))) {
					printmap.put("buydate2", datas[0].getString("buydate")
							.replace("~", "  ").replace("!", "  ").replace("@",
									"  "));
				}
				if (StringUtils.isNotBlank(datas[0].getString("claimbookdate"))) {
					printmap.put("claimbookdate2", datas[0].getString(
							"claimbookdate").replace("~", "  ").replace("!",
							"  ").replace("@", "  ").replace("^", "  ")
							.replace("*", "  "));
				}

				// 将预约时间段更新为“已打印状态”
				//
				return printmap;

			} else {
				throw new BusinessException("查询燃气具工单失败！", "没有该燃气具工单信息！");
			}
		} catch (Exception e) {
			SrmLog.error("燃气具工单打印失败!", e);
			throw new BusinessException("燃气具工单打印失败！", e.getMessage());
		}

	}

	/**
	 * 
	 * 方法描述: 批量打印维修单数据
	 * 
	 * @author 肖斌
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException
	 *             描述******
	 * @return List<Map<String,String>>
	 */
	public List<Map<String, String>> printRepairApplianceBatch(
			String[] applyinfopkid) throws BusinessException {
		try {
			List<Map<String, String>> printInfo = new ArrayList<Map<String, String>>();
			for (int i = 0, j = applyinfopkid.length; i < j; i++) {
				printInfo.add(printRepairAppliance(applyinfopkid[i]));
			}
			return printInfo;
		} catch (Exception e) {
			SrmLog.error("批量打印维修单数据失败！", e);
			throw new BusinessException("批量打印维修单数据失败！", e.getMessage());
		}
	}

	/**
	 * 
	 * 方法描述：查询部门联络单信息
	 * 
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException
	 * @author 石绍锋
	 * @time:2014-1-9 下午07:36:18
	 */
	public List<Map<String, String>> printDepartmentliaison(
			String[] applyinfopkid) throws BusinessException {
		try {
			List<Map<String, String>> printInfo = new ArrayList<Map<String, String>>();
			for (int i = 0, j = applyinfopkid.length; i < j; i++) {
				printInfo.add(getDepartmentliaisonData(applyinfopkid[i]));
			}
			return printInfo;
		} catch (Exception e) {
			SrmLog.error("查询部门联络单信息失败！", e);
			throw new BusinessException("查询部门联络单信息失败！", e.getMessage());
		}
	}

	/**
	 * 
	 * 方法描述：获取部门联络单要打印的数据
	 * 
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException
	 * @author 石绍锋
	 * @time:2014-1-9 下午07:43:30
	 */
	public HashMap<String, String> getDepartmentliaisonData(String applyinfopkid)
			throws BusinessException {
		HashMap<String, String> printmap = new HashMap<String, String>();
		try {
			// userid,username,contactphone,mobile,address,sheetno,sendorg,sendby,sendday,isurgent,
			// worktype,handleorg,providecompleteday,contentabstract
			Map<String, String> condition = new HashMap<String, String>();
			condition.put("applyinfopkid", applyinfopkid);
			DataObject[] datas = this.remainDao
					.getDepartmentliaisonData(condition);
			if (null != datas && datas.length > 0) {
				printmap.put("userid", datas[0].getString("userid"));
				printmap.put("username", datas[0].getString("username"));
				printmap
						.put("contactphone", datas[0].getString("contactphone"));
				printmap.put("mobile", datas[0].getString("mobile"));
				printmap.put("address", datas[0].getString("address"));
				printmap.put("sheetno", datas[0].getString("sheetno"));
				printmap.put("sendorg", datas[0].getString("sendorg"));
				printmap.put("sendby", datas[0].getString("sendby"));
				printmap.put("sendday", datas[0].getString("sendday"));
				printmap.put("isurgent", datas[0].getString("isurgent"));
				printmap.put("worktype", datas[0].getString("worktype"));
				printmap.put("handleorg", datas[0].getString("handleorg"));
				printmap.put("providecompleteday", datas[0]
						.getString("providecompleteday"));
				printmap.put("contentabstract", datas[0]
						.getString("contentabstract"));
				return printmap;
			}
			return null;
		} catch (Exception e) {
			SrmLog.error("获取部门联络单要打印的数据失败!", e);
			throw new BusinessException("获取部门联络单要打印的数据失败！", e.getMessage());
		}
	}

	/**
	 * 查询维修单数据
	 * 
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException
	 * @author 梅建明
	 */
	public HashMap<String, String> printRepairAppliance(String applyinfopkid)
			throws BusinessException {
		HashMap<String, String> printmap = new HashMap<String, String>();
		try {
			Map<String, String> condition = new HashMap<String, String>();
			condition.put("applyinfopkid", applyinfopkid);
			DataObject[] datas = this.remainDao.queryRepairAppliance(condition);
			if (null != datas && datas.length > 0) {
				printmap.put("userid", datas[0].getString("userid"));
				printmap.put("selldetailpkid", datas[0]
						.getString("selldetailpkid"));
				printmap.put("username", datas[0].getString("username") + "("
						+ datas[0].getString("contactname") + ")");
				printmap
						.put("contactphone", datas[0].getString("contactphone"));
				printmap.put("createby", datas[0].getString("createby"));
				printmap.put("addressdetail", datas[0]
						.getString("addressdetail"));
				printmap.put("claimbookdate", datas[0].getString(
						"claimbookdate").replace("!", "    ").replace("@",
						"    ").replace("^", "    ").replace("&", "     "));
				printmap.put("brand", datas[0].getString("brand"));
				printmap.put("modelid", datas[0].getString("modelid"));
				printmap.put("buydate",
						(datas[0].getString("buydate") == null) ? "" : datas[0]
								.getString("buydate").replace("~", "年")
								.replace("!", "月").replace("@", "日"));
				printmap.put("installman", datas[0].getString("installman"));
				printmap.put("remark", datas[0].getString("remark"));

				// 将预约时间段更新为“已打印状态”
				//----
				return printmap;
			} else {
				throw new BusinessException("查询燃气具维修工单失败！", "没有该燃气具维修工单信息！");
			}
		} catch (BusinessException e) {
			throw e;

		} catch (Exception e) {
			SrmLog.error("燃气具维修工单打印失败!", e);
			throw new BusinessException("燃气具维修工单打印失败！", e.getMessage());
		}

	}

	/**
	 * 
	 * 方法描述：修改诉求中明细地址
	 * 
	 * @param applyinfopkid
	 * @throws BusinessException
	 * @author 傅力
	 * @time:2014-1-15 上午11:30:47
	 */
	public void modifyApplyAddrdetail(String applyinfopkid, String addrdetail)
			throws BusinessException {
		TBsApplyinfo applyinfoTemplate = new TBsApplyinfoImpl();
		applyinfoTemplate.setPkid(applyinfopkid);
		TBsApplyinfo newapplyinfo = new TBsApplyinfoImpl();
		newapplyinfo.setAddrdetail(addrdetail);
		this.remainDao.updateEntityByTemplate(newapplyinfo, applyinfoTemplate);
	}

	/**
	 * 
	 * 方法描述: 查询诉求待办工单信息（打印）
	 * 
	 * @author 何源
	 * @param applyinfopkids
	 * @return
	 * @throws BusinessException
	 *             描述******
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryApplyRemainInfo(String[] applyinfopkids)
			throws BusinessException {
		Map condition = new HashMap();
		try {
			condition.put("applyinfopkids", applyinfopkids);
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return this.remainDao.queryApplyRemainInfo(condition);
		} catch (Exception e) {
			SrmLog.error("诉求待办工单打印失败!", e);
			throw new BusinessException("诉求待办工单打印失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述:导入挂表工单
	 * 
	 * @param data
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public String uploadInstallMeter(DataObject[] datas)
			throws BusinessException {
		// excel文件数据校验
		if (!validateInstallMeterData(datas)) {
			return msg;
		}
		// 挂表操作
		
		return "批量挂表成功！共生成" + datas.length + "条挂表数据！";
	}

	/**
	 * 
	 * 方法描述: 校验导入的EXCEL数据有效性
	 * 
	 * @author 何源
	 * @param datas
	 * @param msg
	 * @return
	 * @throws BusinessException
	 *             描述******
	 * @return boolean
	 */
	@SuppressWarnings( { "unchecked", "unused" })
	private boolean validateInstallMeterData(DataObject[] datas)
			throws BusinessException {
		String resid, reading, userid, workitemid, batchid;
		String meterMsg;// 校验表具的信息
		Map<String, String> residMap = new HashMap<String, String>();
		int row = 4; // excel中的行数
		Map condition = new HashMap();
		DataObject[] remain = null;
		BeanFactory factory = BeanFactory.newInstance();
		//---
		return true;
	}

	/**
	 * 删除上传的excel文件
	 * 
	 * @param absolutePath
	 */
	public void deleteFile(String absolutePath) {
		File file = new File(absolutePath);
		if (file.exists()) {
			file.delete();
		}
	}
	
	/**
	 * 
	 * 方法描述: 批量打印表处理工单数据
	 * 
	 * @author 何源
	 * @param applyinfopkid[]
	 * @return
	 * @throws BusinessException
	 *             描述******
	 * @return List<Map<String,String>>
	 */
	public List<Map<String, String>> printMeterDealBatch(String[] applyinfopkid) throws BusinessException {
		List<Map<String, String>> printInfo = new ArrayList<Map<String, String>>();
		try {
			for (int i = 0, j = applyinfopkid.length; i < j; i++) {
				printInfo.add(printMeterDeal(applyinfopkid[i]));
			}
			return printInfo;
		} catch (Exception e) {
			SrmLog.error("批量打印表处理工单失败！", e);
			throw new BusinessException("批量打印表处理工单失败！", e.getMessage());
		}
	}
	
	/**
	 * 查询表处理工单
	 * 
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException
	 * @author 何源
	 */
	public HashMap<String, String> printMeterDeal(String applyinfopkid) throws BusinessException {
		DataObject[] datas = null;
		HashMap<String, String> printmap = new HashMap<String, String>();
		Map<String, String> condition = new HashMap<String, String>();
		TBsApplyinfo apply = new TBsApplyinfoImpl();
		String brand = "";
		String resid = "";
		String reading = "";
		try {
			apply.setPkid(applyinfopkid);
			this.remainDao.expandEntity(apply);
			condition.put("userid", apply.getUserid());
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			condition.put("applyinfopkid", applyinfopkid);
			datas = this.remainDao.queryMeterDealPrint(condition);
			if (null != datas && datas.length > 0) {
				printmap.put("userid", datas[0].getString("userid"));
				printmap.put("username", datas[0].getString("username")==null?"":datas[0].getString("username"));
				printmap.put("contactphone", datas[0].getString("contactphone")==null?"":datas[0].getString("contactphone"));
				printmap.put("mobile", datas[0].getString("mobile")==null?"":datas[0].getString("mobile"));
				printmap.put("createby", datas[0].getString("createby"));
				printmap.put("createtime", datas[0].getString("createtime"));
				printmap.put("address", datas[0].getString("address")==null?"":datas[0].getString("address"));
				printmap.put("remark", datas[0].getString("remark")==null?"":datas[0].getString("remark"));
				for(int i=0; i<datas.length; i++){
					if(i==0){
						brand += (datas[i].getString("brand")==null?"":datas[i].getString("brand"));
						resid += (datas[i].getString("resid")==null?"":datas[i].getString("resid"));
						reading += (datas[i].getString("reading")==null?"":datas[i].getString("reading"));
					}else{
						brand += "\r\n" + (datas[i].getString("brand")==null?"":datas[i].getString("brand"));
						resid += "\r\n" + (datas[i].getString("resid")==null?"":datas[i].getString("resid"));
						reading += "\r\n" + (datas[i].getString("reading")==null?"":datas[i].getString("reading"));
					}
				}
				printmap.put("brand", brand);
				printmap.put("resid", resid);
				printmap.put("reading", reading);
				printmap.put("selldate", datas[0].getString("selldate")==null?"":datas[0].getString("selldate"));
				printmap.put("modelid", datas[0].getString("modelid")==null?"":datas[0].getString("modelid"));
				printmap.put("rqjbrand", datas[0].getString("rqjbrand")==null?"":datas[0].getString("rqjbrand"));
				printmap.put("tmcuid", datas[0].getString("mcumapid")==null?"empty":datas[0].getString("mcumapid"));
				printmap.put("rmcuid", datas[0].getString("mcumapid")==null?"empty":datas[0].getString("mcumapid"));
				
			}
		} catch (Exception e) {
			SrmLog.error("查询表处理工单信息失败!", e);
			throw new BusinessException("查询表处理工单信息失败！", e.getMessage());
		}
		return printmap;
	}
	
	/**
	 * 
	 * 方法描述: 业务工单通用打印（批量）
	 * 
	 * @author 何源
	 * @param applyinfopkid[]
	 * @return
	 * @throws BusinessException
	 *             描述******
	 * @return List<Map<String,String>>
	 */
	public List<Map<String, String>> commonPrintBusiRemainBatch(String[] userid, String[] applyinfopkid) throws BusinessException {
		HashMap<String, String> printMap = null;
		try {
			List<Map<String, String>> printInfo = new ArrayList<Map<String, String>>();
			for (int i = 0, j = userid.length; i < j; i++) {
				printMap = commonPrintBusiRemain(userid[i], applyinfopkid[i]);
				if(printMap != null){
					printInfo.add(printMap);
				}
			}
			return printInfo;
		} catch (Exception e) {
			SrmLog.error("业务待办工单打印失败！", e);
			throw new BusinessException("业务待办工单打印失败！", e.getMessage());
		}
	}
	
	/**
	 * 
	 * 方法描述: 业务工单通用打印
	 * @author 何源
	 * @param userid
	 * @param applyinfopkid
	 * @return
	 * @throws BusinessException 描述******
	 * @return HashMap<String,String>
	 */
	public HashMap<String, String> commonPrintBusiRemain(String userid, String applyinfopkid) throws BusinessException {
		DataObject[] datas = null;
		HashMap<String, String> printmap = new HashMap<String, String>();
		Map<String, String> condition = new HashMap<String, String>();
		TBsApplyinfo apply = new TBsApplyinfoImpl();
		try {
			apply.setPkid(applyinfopkid);
			this.remainDao.expandEntity(apply);
			condition.put("userid", apply.getUserid());
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			condition.put("applyinfopkid", applyinfopkid);
			datas = this.remainDao.queryCommonPrintBusiRemain(condition);
			if (datas.length > 0) {
				DataObject data = datas[0];
				printmap.put("applychnllable", "诉求渠道：");
				printmap.put("applychnl", data.getString("applychnl")==null?"":data.getString("applychnl"));
				printmap.put("operatornamelable", "业务员：");
				printmap.put("operatorname", data.getString("operatorname"));
				printmap.put("createtimelable", "受理时间：");
				printmap.put("createtime", data.getString("createtime"));
				printmap.put("busitypenamelable", "诉求类型：");
				printmap.put("busitypename", data.getString("busitypename"));
				printmap.put("bookdatelable", "预约时间：");
				printmap.put("bookdate", data.getString("bookdate")==null?"":data.getString("bookdate"));
				printmap.put("useridlable", "户号：");
				printmap.put("userid", data.getString("userid")==null?"":data.getString("userid"));
				printmap.put("usernamelable", "户名：");
				printmap.put("username", data.getString("username")==null?"":data.getString("username"));
				printmap.put("contactlable", "联系电话：");
				printmap.put("contact", data.getString("contact")==null?"":data.getString("contact"));
				printmap.put("usertypelable", "用户类型：");
				printmap.put("usertype", data.getString("usertype")==null?"":data.getString("usertype"));
				printmap.put("consumpattrlable", "用气性质：");
				printmap.put("consumpattr", data.getString("consumpattr")==null?"":data.getString("consumpattr"));
				printmap.put("useraddresslable", "用户地址：");
				printmap.put("useraddress", data.getString("useraddress")==null?"":data.getString("useraddress"));
				printmap.put("residlable", "表号：");
				printmap.put("resid", data.getString("resid")==null?"":data.getString("resid"));
				printmap.put("metertypelable", "表具类型：");
				printmap.put("metertype", data.getString("metertype")==null?"":data.getString("metertype"));
				printmap.put("modelidlable", "表具型号：");
				printmap.put("modelid", data.getString("modelid")==null?"":data.getString("modelid"));
				printmap.put("meterdirectlable", "表向：");
				printmap.put("meterdirect", data.getString("meterdirect")==null?"":data.getString("meterdirect"));
				printmap.put("factorynamelable", "生产厂家：");
				printmap.put("factoryname", data.getString("factoryname")==null?"":data.getString("factoryname"));
				printmap.put("readinglable", "止码：");
				printmap.put("reading", data.getString("reading")==null?"":data.getString("reading"));
				printmap.put("remarklable", "业务内容：");
				printmap.put("remark", data.getString("remark")==null?"":data.getString("remark"));
				return printmap;
			}
		} catch (Exception e) {
			SrmLog.error("业务待办工单打印失败!", e);
			throw new BusinessException("业务待办工单打印失败！", e.getMessage());
		}
		return null;
	}
}
