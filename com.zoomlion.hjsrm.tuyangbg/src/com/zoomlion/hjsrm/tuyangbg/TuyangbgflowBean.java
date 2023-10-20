package com.zoomlion.hjsrm.tuyangbg;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.eos.workflow.data.WFActivityDefine;
import com.eos.workflow.omservice.WFParticipant;
import com.eos.workflow.omservice.WIParticipantInfo;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.frame.workflows.service.BPSServiceManagerImpl;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTempNoticeItems;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl;
import com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems;
import com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeItemsImpl;
import com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice;
import com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl;

import commonj.sdo.DataObject;
import edu.emory.mathcs.backport.java.util.Arrays;

public class TuyangbgflowBean extends BaseBean {

	private TuyangbgflowDao tuyangbgflowDao;

	/**
	 * 方法描述: 查询收货入库信息
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryTybgnotice(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			Object roleId = Common.getCurrentUseObject().getAttributes().get(
					"roles_rolecode_str");
			// 只有数据查看角色对应人员才有权限查看所有数据
			if (roleId.toString().indexOf("00266") < 0
					&& roleId.toString().indexOf("sysadmin") < 0) {
				paramObj.put("tybgPersonName", Common.getCurrentUseObject()
						.getUserName());
			}
			return tuyangbgflowDao.queryTybg(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 创建图样更改主键
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String newTybgid() throws BusinessException {
		FlowTybgNotice tybg = new FlowTybgNoticeImpl();
		this.tuyangbgflowDao.getPrimaryKey(tybg);
		return tybg.getTybgId();
	}

	public WFParticipant[] getParticipants(String pts) throws BusinessException {
		List<WFParticipant> list = new ArrayList<WFParticipant>();
		WFParticipant[] resultArr = null;
		try {
			if (pts != null && (!pts.equals(""))) {
				String[] temp = pts.split(",");
				for (int i = 0; i < temp.length; i++) {
					String id = temp[i].substring(temp[i].indexOf('(') + 1,
							temp[i].indexOf(")"));
					String name = temp[i].substring(0, temp[i].indexOf("("));
					WFParticipant wfpts = new WFParticipant();
					// System.out.println("id=="+id+"==name=="+name);
					wfpts.setId(id);
					wfpts.setName(name);
					wfpts.setTypeCode("person");
					list.add(wfpts);
				}
			}
			resultArr = new WFParticipant[list.size()];
			list.toArray(resultArr);
		} catch (Exception e) {
			SrmLog.error("解析参与者字符串异常!", e);
			throw new BusinessException("解析参与者字符串异常!", e.getMessage());
		}
		return resultArr;
	}

	/**
	 * 新增图样变更数据
	 * 
	 * @param notices
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public int saveTybgNotices(FlowTybgNotice notices) throws BusinessException {
		int num = 0;
		try {
			notices.setTybgTime(Common.getCurrentTime());
			this.tuyangbgflowDao.saveEntity(notices);

			// 修改业务表单附件对应关联ID
			Map retionMap = new HashMap();
			retionMap.put("processinstid", notices.getString("processinstid"));
			retionMap.put("tybgId", notices.getString("tybgId"));
			this.tuyangbgflowDao.updateFileRetionId(retionMap);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("saveTybgNotices保存异常!", e);
			throw new BusinessException("保存异常!", e.getMessage());
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
	@SuppressWarnings("unchecked")
	public int stopTybgNotices(DataObject notices) throws BusinessException {
		int num = 0;
		try {
			FlowTybgNotice notice = new FlowTybgNoticeImpl();
			FlowTybgNoticeItems items = new FlowTybgNoticeItemsImpl();

			FlowTempNoticeItems temps = new FlowTempNoticeItemsImpl();
			Map map = new HashMap();
			map.put("processinstid", notices.getString("processinstid"));
			DataObject objs = this.tuyangbgflowDao.queryTybgNotice(map)[0];
			// 主流程业务数据
			notice.setTybgId(objs.getString("tybgId"));
			notice.setProcessinstid(notices.getString("processinstid"));

			notice.setProcessStatus("终止");
			// 回退流程环节，删除临时流程处理数据
			temps.setProcessinstid(notices.getString("processinstid"));
			this.tuyangbgflowDao.delTempNoticeItems(temps);

			// 流程处理数据
			items.setActionsPersonId(Common.getCurrentUserId());
			items.setActionsPersonName(Common.getCurrentUseObject()
					.getUserName());
			items.setActionsText("工单作废");
			items.setActonsTime(new Date());
			items.setProcessinstid(notices.getString("processinstid"));
			items.setOperationId(objs.getString("tybgId"));
			items.setItemsName("终止");
			items.setItmesCode("stopNotice");
			items.setItemsId(notices.getString("processinstid"));
			num = this.tuyangbgflowDao.auditingTybgNotices(notice, items);
		} catch (Exception e) {
			SrmLog.error("updateTechNotices修改异常!", e);
			throw new BusinessException("修改异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 方法描述: 通过id查看发件箱邮件
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @return
	 * @throws BusinessException
	 * @return TAtNoticeinfo
	 */
	@SuppressWarnings("unchecked")
	public DataObject viewtybgdatabyid(Map paramObj) throws Exception {
		try {
			DataObject[] obj = this.tuyangbgflowDao.viewtybgdatabyid(paramObj);
			if (obj != null) {
				return obj[0];
			} else {
				return null;
			}
		} catch (Exception e) {
			SrmLog.error("viewtybgdatabyid查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	@SuppressWarnings("unchecked")
	public DataObject queryTybgbyproid(Map paramObj) throws Exception {
		try {
			DataObject[] obj = this.tuyangbgflowDao.queryTybgbyproid(paramObj);
			if (obj != null) {
				return obj[0];
			} else {
				return null;
			}
		} catch (Exception e) {
			SrmLog.error("queryTybgbyproid查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	@SuppressWarnings("unchecked")
	public int auditingTybgNotices(DataObject notices, Map datas)
			throws BusinessException {
		int num = 0;
		try {
			FlowTybgNotice notice = new FlowTybgNoticeImpl();
			FlowTybgNoticeItems items = new FlowTybgNoticeItemsImpl();
			FlowTempNoticeItems temps = new FlowTempNoticeItemsImpl();
			DataObject objs = this.tuyangbgflowDao.queryTybgNotice(datas)[0];
			// 主流程业务数据
			notice.setTybgId(objs.getString("tybgId"));
			notice.setProcessinstid(notices.getString("processinstid"));

			// 根据处理情况，设置流程状态
			if ("back".equals(datas.get("actionType"))) {
				notice.setProcessStatus(datas.get("processStatus").toString());
				// 回退流程环节，删除临时流程处理数据
				temps.setProcessinstid(notices.getString("processinstid"));
				this.tuyangbgflowDao.delTempNoticeItems(temps);
			} else {
				if (!"结束".equals(datas.get("processStatus").toString())) {
					boolean flag = validatePersonActionStatus(notices
							.getString("workitemid"), datas.get("workItemCode")
							.toString(), notices.getString("processinstid"),
							objs.getString("tybgId"));
					// 根据参与人员是否全部处理完成，设置流程状态
					if (flag) {
						notice.setProcessStatus(datas.get("processStatus")
								.toString());
						// 更改流程主业务数据状态
						temps.setProcessinstid(notices
								.getString("processinstid"));
						// 确定流程环节完成，删除临时流程处理数据
						this.tuyangbgflowDao.delTempNoticeItems(temps);
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
						this.tuyangbgflowDao.addTempNoticeItems(temps);
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
			items.setOperationId(notices.getString("noticeid"));
			items.setItemsName(datas.get("workItemName").toString());
			items.setItmesCode(datas.get("workItemCode").toString());
			items.setItemsId(notices.getString("workitemid"));
			num = this.tuyangbgflowDao.auditingTybgNotices(notice, items);
		} catch (Exception e) {
			SrmLog.error("updateTechNotices修改异常!", e);
			throw new BusinessException("修改异常!", e.getMessage());
		}
		return num;
	}

	public boolean validatePersonActionStatus(String workItemId,
			String activityDefineId, String processId, String buessId)
			throws Exception {
		boolean falg = false;
		try {
			Map<String, String> parmMap = new HashMap<String, String>();
			parmMap.put("itemsId", workItemId);
			parmMap.put("itmesCode", activityDefineId);
			parmMap.put("processinstid", processId);
			parmMap.put("buessId", buessId);

			// 获得当前业务处理人员列表
			DataObject[] obj = this.tuyangbgflowDao
					.queryTybgNoticeItem(parmMap);

			// 获得流程中当前环节参与人员列表
			List<WIParticipantInfo> list = BPSServiceManagerImpl
					.queryWorkItemParticipantInfo(Long.parseLong(workItemId));
			if (obj.length == list.size() - 1) {
				falg = true;
			}
		} catch (Exception e) {
			SrmLog.error("queryTechData异常!", e);
			throw new BusinessException("查询业务数据异常!", e.getMessage());
		}
		return falg;
	}

	@SuppressWarnings("unchecked")
	public DataObject[] queryTybgNoticeItems(DataObject paramObj)
			throws Exception {
		try {
			Map parmMap = new HashMap();
			parmMap.put("processinstid", paramObj.getString("processinstid"));
			return this.tuyangbgflowDao.queryTybgNoticeItem(parmMap);
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
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
	 * 把参与者信息，放入MAP
	 * 
	 * @param par
	 * @param activity
	 * @return
	 */
	@SuppressWarnings("unchecked")
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
	@SuppressWarnings("unchecked")
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


	public TuyangbgflowDao getTuyangbgflowDao() {
		return tuyangbgflowDao;
	}

	public void setTuyangbgflowDao(TuyangbgflowDao tuyangbgflowDao) {
		this.tuyangbgflowDao = tuyangbgflowDao;
	}
	
}
