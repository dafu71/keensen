package com.zoomlion.hjsrm.techNotice;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.eos.workflow.data.WFActivityDefine;
import com.eos.workflow.omservice.WFParticipant;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.frame.workflows.service.BPSServiceManagerImpl;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNoticeItems;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTempNoticeItems;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeItemsImpl;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl;
import commonj.sdo.DataObject;

import edu.emory.mathcs.backport.java.util.Arrays;

public class TechNoticeBean extends BaseBean {
	private TechNoticeDao techNoticeDao;

	/**
	 * 新增技术通知业务数据
	 * 
	 * @param notices
	 * @return
	 * @throws BusinessException
	 */
	public int saveTechNotices(DataObject notices) throws BusinessException {
		int num = 0;
		try {
			FlowTechniqueNotice notice = new FlowTechniqueNoticeImpl();
			notice.setNoticeId(notices.getString("noticeId"));
			notice.setApplicationTime(notices.getDate("applicationTime"));
			notice.setDeptId(Common.getCurrentUserOrgId());
			notice.setWeavePersonName(notices.getString("weavePersonName"));
			notice.setWeavePersonId(Common.getCurrentUserId());
			notice.setDeptName(notices.getString("deptName"));
			notice.setNoticeText(notices.getString("noticeText"));
			notice.setNoticeTitle(notices.getString("noticeTitle"));
			notice.setNoticeType(notices.getString("noticeType"));
			notice.setLevels(notices.getString("levels"));

			// 转换数据
			String tmp = "";
			if (!"String".equals(notices.get("sendDept").getClass()
					.getSimpleName())) {
				Object[] obj = (Object[]) notices.get("sendDept");
				for (int i = 0; i < obj.length; i++) {
					tmp += obj[i].toString();
					if (i < obj.length - 1) {
						tmp += ",";
					}
				}
			} else {
				tmp = notices.getString("sendDept");
			}
			notice.setSendDept(tmp);

			notice.setProductType(notices.getString("productType"));
			notice.setProcessinstid(notices.getString("processinstid"));
			notice.setProductModel(notices.getString("productModel"));
			notice.setProcessStatus(notices.getString("processStatus"));

			Map retionMap = new HashMap();
			retionMap.put("processinstid", notices.getString("processinstid"));
			retionMap.put("noticeId", notices.getString("noticeId"));

			// 实际技术通知ID
			String techId = this.getTechNoticeId(retionMap);
			notice.setNoticeId(techId);
			this.techNoticeDao.saveEntity(notice);

			// 修改业务表单附件对应关联ID
			this.techNoticeDao.updateFileRetionId(retionMap);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("saveTechNotices保存异常!", e);
			throw new BusinessException("保存异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 新增技术通知业务数据
	 * 
	 * @param notices
	 * @return
	 * @throws BusinessException
	 */
	public int updateTechNotices(DataObject notices) throws BusinessException {
		int num = 0;
		try {
			FlowTechniqueNotice notice = new FlowTechniqueNoticeImpl();
			notice.setNoticeId(notices.getString("noticeid"));
			notice.setApplicationTime(notices.getDate("applicationtime"));
			notice.setDeptId(Common.getCurrentUserOrgId());
			notice.setWeavePersonName(notices.getString("weavepersonname"));
			notice.setWeavePersonId(Common.getCurrentUserId());
			notice.setDeptName(notices.getString("deptname"));
			notice.setNoticeText(notices.getString("noticeText"));
			notice.setNoticeTitle(notices.getString("noticetitle"));
			notice.setNoticeType(notices.getString("noticeType"));
			notice.setLevels(notices.getString("levels"));

			// 转换数据
			String tmp = "";
			if (!"String".equals(notices.get("sendDept").getClass()
					.getSimpleName())) {
				Object[] obj = (Object[]) notices.get("sendDept");
				for (int i = 0; i < obj.length; i++) {
					tmp += obj[i].toString();
					if (i < obj.length - 1) {
						tmp += ",";
					}
				}
			} else {
				tmp = notices.getString("sendDept");
			}
			notice.setSendDept(tmp);

			notice.setProductType(notices.getString("productType"));
			notice.setProcessinstid(notices.getString("processinstid"));
			notice.setProductModel(notices.getString("productModel"));
			notice.setProcessStatus(notices.getString("processStatus"));

			this.techNoticeDao.updateEntity(notice);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("saveTechNotices保存异常!", e);
			throw new BusinessException("保存异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 保存技术通知处理意见数据
	 * 
	 * @param notices
	 * @return
	 * @throws BusinessException
	 */
	public int saveNoticeItems(FlowTechniqueNoticeItems noticeItem)
			throws BusinessException {
		int num = 0;
		try {
			this.techNoticeDao.getPrimaryKey(noticeItem);
			this.techNoticeDao.saveEntity(noticeItem);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("saveNoticeItems保存处理意见异常!", e);
			throw new BusinessException("保存处理意见异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 查询技术通知业务工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTechNoticeList(Map paramObj, PageCond pageCond)
			throws Exception {
		try {
			Object roleId = Common.getCurrentUseObject().getAttributes().get(
					"roles_rolecode_str");
			// 只有数据查看角色对应人员才有权限查看所有数据
			if (roleId.toString().indexOf("00201") < 0
					&& roleId.toString().indexOf("sysadmin") < 0) {
				paramObj.put("weavepersonname", Common.getCurrentUseObject()
						.getUserName());
			}
			return this.techNoticeDao.queryTechNoticeList(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("queryTechNoticeList查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 查询技术通知信息
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject queryTechNotice(Map paramObj) throws Exception {
		try {
			DataObject[] obj = this.techNoticeDao.queryTechNotice(paramObj);
			if (obj.length > 0) {
				return obj[0];
			} else {
				return null;
			}
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 获得打印数据，查询技术通知信息
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject queryPrintTechNotice(Map paramObj) throws Exception {
		try {
			DataObject[] obj = this.techNoticeDao
					.queryPrintTechNotice(paramObj);
			if (obj.length > 0) {
				return obj[0];
			} else {
				return null;
			}
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 查询环节处理信息
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject queryTechNoticeItem(Map paramObj) throws Exception {
		try {
			DataObject[] obj = this.techNoticeDao.queryTechNotice(paramObj);
			if (obj != null) {
				return obj[0];
			} else {
				return null;
			}
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 查询环节处理信息
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTechNoticeItems(DataObject paramObj)
			throws Exception {
		try {
			Map parmMap = new HashMap();
			parmMap.put("processinstid", paramObj.getString("processinstid"));
			return this.techNoticeDao.queryTechNoticeItem(parmMap);
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 打印技术通知时，查询技术通知，环节处理信息
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPrintNoticeItems(Map parmMap) throws Exception {
		try {
			// Map parmMap=new HashMap();
			// parmMap.put("processinstid",
			// paramObj.getString("processinstid"));
			// parmMap.put("itmesCode", paramObj.getString("itmesCode"));
			return this.techNoticeDao.queryTechNoticeItem(parmMap);
		} catch (Exception e) {
			SrmLog.error("queryPrintNoticeItems查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 修改技术通知工单
	 * 
	 * @param notices
	 * @return
	 * @throws BusinessException
	 */
	public int updateTechNotices(FlowTechniqueNotice notices)
			throws BusinessException {
		int num = 0;
		try {
			this.techNoticeDao.updateEntity(notices);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("updateTechNotices修改异常!", e);
			throw new BusinessException("修改异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 审核技术通知工单
	 * 
	 * @param notices
	 * @return
	 * @throws BusinessException
	 */
	public int auditingTechNotices(DataObject notices, Map datas)
			throws BusinessException {
		int num = 0;
		try {
			FlowTechniqueNotice notice = new FlowTechniqueNoticeImpl();
			FlowTechniqueNoticeItems items = new FlowTechniqueNoticeItemsImpl();

			FlowTempNoticeItems temps = new FlowTempNoticeItemsImpl();
			DataObject objs = this.techNoticeDao.queryTechNotice(datas)[0];
			// 主流程业务数据
			notice.setNoticeId(objs.getString("noticeid"));
			notice.setProcessinstid(notices.getString("processinstid"));
			if ("back".equals(datas.get("actionType"))) {
				notice.setProcessStatus(datas.get("processStatus").toString());
				// 回退流程环节，删除临时流程处理数据
				temps.setProcessinstid(notices.getString("processinstid"));
				this.techNoticeDao.delTempNoticeItems(temps);
			} else {
				if (!"结束".equals(datas.get("processStatus").toString())) {
					boolean flag = validatePersonActionStatus(notices
							.getString("workitemid"), datas.get("workItemCode")
							.toString(), notices.getString("processinstid"),
							objs.getString("noticeid"));
					// 根据参与人员是否全部处理完成，设置流程状态
					if (flag) {
						notice.setProcessStatus(datas.get("processStatus")
								.toString());
						// 更改流程主业务数据状态
						temps.setProcessinstid(notices
								.getString("processinstid"));
						// 确定流程环节完成，删除临时流程处理数据
						this.techNoticeDao.delTempNoticeItems(temps);
						// 设置流程环节处理业务数据
						if ("归档下发".equals(datas.get("workItemName").toString())) {
							notice
									.setExecutePersonId(Common
											.getCurrentUserId());
							notice.setExecutePersonName(Common
									.getCurrentUseObject().getUserName());
							notice.setExecuteText(notices
									.getString("actionsText"));
							notice
									.setExecuteTime(notices
											.getDate("actonsTime"));
						}
					} else {
						// 新增流程参与人员，临时流程处理数据
						temps.setActionsPersonId(Common.getCurrentUserId());
						temps.setActionsPersonName(notices
								.getString("actionsPersonName"));
						temps.setProcessinstid(notices
								.getString("processinstid"));
						temps.setOperationId(objs.getString("noticeid"));
						temps
								.setItemsName(datas.get("workItemName")
										.toString());
						temps
								.setItmesCode(datas.get("workItemCode")
										.toString());
						temps.setItemsId(notices.getString("workitemid"));
						this.techNoticeDao.addTempNoticeItems(temps);
					}
				} else {// 归档完成处理
					notice.setProcessStatus(datas.get("processStatus")
							.toString());
					notice.setArchivePersonId(Common.getCurrentUserId());
					notice.setArchivePersonName(Common.getCurrentUseObject()
							.getUserName());
					notice.setArchiveText(notices.getString("actionsText"));
					notice.setArchiveTime(notices.getDate("actonsTime"));
				}
			}

			// 流程处理数据
			items.setActionsPersonId(Common.getCurrentUserId());
			items.setActionsPersonName(notices.getString("actionsPersonName"));
			items.setActionsText(notices.getString("actionsText"));
			items.setActonsTime(notices.getDate("actonsTime"));
			items.setProcessinstid(notices.getString("processinstid"));
			items.setOperationId(objs.getString("noticeid"));
			items.setItemsName(datas.get("workItemName").toString());
			items.setItmesCode(datas.get("workItemCode").toString());
			items.setItemsId(notices.getString("workitemid"));
			num = this.techNoticeDao.auditingTechNotices(notice, items);
		} catch (Exception e) {
			SrmLog.error("updateTechNotices修改异常!", e);
			throw new BusinessException("修改异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 终止技术通知工单
	 * 
	 * @param notices
	 * @return
	 * @throws BusinessException
	 */
	public int stopTechNotices(DataObject notices) throws BusinessException {
		int num = 0;
		try {
			FlowTechniqueNotice notice = new FlowTechniqueNoticeImpl();
			FlowTechniqueNoticeItems items = new FlowTechniqueNoticeItemsImpl();

			FlowTempNoticeItems temps = new FlowTempNoticeItemsImpl();
			Map map = new HashMap();
			map.put("processinstid", notices.getString("processinstid"));
			DataObject objs = this.techNoticeDao.queryTechNotice(map)[0];
			// 主流程业务数据
			notice.setNoticeId(objs.getString("noticeid"));
			notice.setProcessinstid(notices.getString("processinstid"));

			notice.setProcessStatus("终止");
			// 回退流程环节，删除临时流程处理数据
			temps.setProcessinstid(notices.getString("processinstid"));
			this.techNoticeDao.delTempNoticeItems(temps);

			// 流程处理数据
			items.setActionsPersonId(Common.getCurrentUserId());
			items.setActionsPersonName(Common.getCurrentUseObject()
					.getUserName());
			items.setActionsText("工单作废");
			items.setActonsTime(new Date());
			items.setProcessinstid(notices.getString("processinstid"));
			items.setOperationId(objs.getString("noticeid"));
			items.setItemsName("终止");
			items.setItmesCode("stopNotice");
			items.setItemsId(notices.getString("processinstid"));
			num = this.techNoticeDao.auditingTechNotices(notice, items);
		} catch (Exception e) {
			SrmLog.error("updateTechNotices修改异常!", e);
			throw new BusinessException("修改异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 查询业务数据
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryTechData(DataObject data) throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("dataId", data.get("dataId"));
			return this.techNoticeDao.queryTechData(condition);
		} catch (Exception e) {
			SrmLog.error("queryTechData异常!", e);
			throw new BusinessException("查询业务数据异常!", e.getMessage());
		}
	}

	/**
	 * 获得技术通知业务ID
	 * 
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public String getTechNoticeId(Map condition) throws Exception {
		try {
			String noticeId = "";
			SimpleDateFormat sf = new SimpleDateFormat("yyyy");
			String years = sf.format(new Date());
			condition.put("dataYear", years);
			DataObject[] obj = this.techNoticeDao.getTechNoticeId(condition);
			int noticeNum = Integer.parseInt(obj[0].getString("NOTICENUM"));
			noticeNum++;
			String tempid = "00000".substring((noticeNum + "").length())
					+ noticeNum;
			noticeId = "JSTZ" + years + tempid;
			return noticeId;
		} catch (Exception e) {
			SrmLog.error("queryTechData异常!", e);
			throw new BusinessException("查询业务数据异常!", e.getMessage());
		}
	}

	/**
	 * 获得技术通知临时业务ID
	 * 
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public String getTempTechNoticeId(Map condition) throws Exception {
		try {
			String noticeId = "";
			SimpleDateFormat sf = new SimpleDateFormat("yyyyMMddHHmmssms");
			String noticeNum = sf.format(new Date());
			noticeId = "LS" + noticeNum;
			return noticeId;
		} catch (Exception e) {
			SrmLog.error("queryTechData异常!", e);
			throw new BusinessException("查询业务数据异常!", e.getMessage());
		}
	}

	/**
	 * 判断当前环节参与人员执行情况，如全部处理完成返回状态为ture
	 * 
	 * @param workItemId
	 * @param activityDefineId
	 * @param processId
	 * @param buessId
	 * @return
	 * @throws Exception
	 */
	public boolean validatePersonActionStatus(String workItemId,
			String activityDefineId, String processId, String buessId)
			throws Exception {
		boolean falg = false;
		try {
			Map<String, String> parmMap = new HashMap<String, String>();
			parmMap.put("itmesCode", activityDefineId);
			parmMap.put("processinstid", processId);
			parmMap.put("buessId", buessId);

			// 获得临时参与人员列表
			DataObject[] obj = this.techNoticeDao.queryTempNoticeItem(parmMap);

			// 获得流程中当前环节参与人员列表
			String[] temp = new String[] { activityDefineId };
			List<Object> parlist = BPSServiceManagerImpl.getRelativeBatchData(
					Long.valueOf(processId), temp);
			Object[] pars = (Object[]) parlist.get(0);
			if (obj.length == pars.length - 1) {
				falg = true;
			}
		} catch (Exception e) {
			SrmLog.error("queryTechData异常!", e);
			throw new BusinessException("查询业务数据异常!", e.getMessage());
		}
		return falg;
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

	/**
	 * 把参与者信息，放入MAP
	 * 
	 * @param par
	 * @param activity
	 * @return
	 */
	public Map setPersonInfo(WFParticipant[] par, WFActivityDefine activity) {
		Map map = new HashMap();
		map.put(activity.getId(), par);
		return map;
	}

	/**
	 * 规则因子MAP设置，放入MAP
	 * 
	 * @param par
	 * @param activity
	 * @return
	 */
	public Map setRelativeMap(String[] items) {
		Map map = new HashMap();
		for (int i = 0; i < items.length; i++) {
			String item = items[i];
			if ("feedbackActivity".equals(item)) {
				map.put("nextitem1", "feedbackActivity");
			}
			if ("purchaseActivity".equals(item)) {
				map.put("nextitem2", "purchaseActivity");
			}
		}
		return map;
	}

	/**
	 * 拆分字符串
	 * 
	 * @param str
	 * @return
	 */
	public String[] items(String str) {
		return str.split(",");
	}

	/**
	 * 设置指定类型的参与者
	 * 
	 * @param processdInstID
	 * @param parttype
	 * @param newParts
	 * @return
	 * @throws BusinessException
	 */

	public WFParticipant[] getParticipants(long processdInstID,
			String parttype, Map[] newParts) throws BusinessException {

		try {
			WFParticipant[] parts = null;

			if (null == BPSServiceManagerImpl.getRelativeData(processdInstID,
					parttype)) {//如果原来的参与者为空
				WFParticipant[] newparts = new WFParticipant[0];
				int len = 0;
				for (int i = 0; i < newParts.length; i++) {// 新增的参与者数组
					String uid2 = newParts[i].get("userid").toString();
					String uname2 = newParts[i].get("operatorname").toString();
					WFParticipant wp = new WFParticipant();
					wp.setId(uid2);
					wp.setName(uname2);
					wp.setTypeCode("person");
					newparts = (WFParticipant[]) Arrays.copyOf(newparts,
							newparts.length + 1);
					newparts[len] = wp;
					len += 1;
				}
				return newparts;

			} else {
				parts = (WFParticipant[]) BPSServiceManagerImpl
						.getRelativeData(processdInstID, parttype);

				WFParticipant[] newparts = parts.clone();
				int len = newparts.length;
				for (int i = 0; i < newParts.length; i++) {// 新增的参与者数组
					String uid2 = newParts[i].get("userid").toString();
					String uname2 = newParts[i].get("operatorname").toString();

					boolean add = true;
					for (int j = 0; j < parts.length; j++) {// 原来的参与者数组
						String uid = parts[j].getId();
						if (uid.equals(uid2)) {
							add = false;
							break;
						}
					}
					if (add) {// 将新增的添加到参与者中
						WFParticipant wp = new WFParticipant();
						wp.setId(uid2);
						wp.setName(uname2);
						wp.setTypeCode("person");
						newparts = (WFParticipant[]) Arrays.copyOf(newparts,
								newparts.length + 1);
						newparts[len] = wp;
						len += 1;
					}

				}
				return newparts;

			}

		} catch (Exception e) {
			// TODO 自动生成 catch 块
			throw new BusinessException("设置参与者异常!", e.getMessage());
		}

	}

	public TechNoticeDao getTechNoticeDao() {
		return techNoticeDao;
	}

	public void setTechNoticeDao(TechNoticeDao techNoticeDao) {
		this.techNoticeDao = techNoticeDao;
	}

}
