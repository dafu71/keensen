/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 业务流程发起校验规则
*创建日期： 2014-09-23
*补丁编号： G3_P_20140915_01_255
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//   补丁编号                修改人     日期        区域       备注
// G3_P_20140805_01_102    方曦   2014-08-08    集团      
// G3_P_20140915_01_255    何源   2014-09-23    集团      
//=================================================================
package com.zoomlion.hjsrm.pub.businessclib.busi.common;

import org.apache.commons.lang.StringUtils;
import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.spring.BeanFactory;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.Business.TBsProcessdefine;
import com.zoomlion.hjsrm.pub.busi.Business.TBsWorklistinfo;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProcessdefineImpl;

import com.zoomlion.hjsrm.pub.common.BusiGlobal;
import com.zoomlion.hjsrm.pub.common.CustGlobal;
import com.zoomlion.hjsrm.pub.common.Globals;
import com.zoomlion.hjsrm.pub.common.SecrGlobal;

import commonj.sdo.DataObject;

public class BusiBpsCheckBean extends BaseBean {
	private BusiBpsCommon busiBpsCommon;

	private BusiBpsCheckDao busiBpsCheckDao;

	public BusiBpsCheckDao getBusiBpsCheckDao() {
		return busiBpsCheckDao;
	}

	public void setBusiBpsCheckDao(BusiBpsCheckDao busiBpsCheckDao) {
		this.busiBpsCheckDao = busiBpsCheckDao;
	}

	/**
	 * 
	 * 方法描述：判断是否能发起业务工单
	 * 
	 * @param userid
	 *            用户号
	 * @param busitype
	 *            业务类别
	 * @param applyinfopkid
	 *            本诉求pkid 用于当发起诉求以后，修改业务类型验证时过滤掉本次诉求
	 * @return true 可以发起;false 不能发起
	 * @throws BusinessException
	 * @author 曹桢
	 * @time:2013-8-27 上午11:01:59
	 */
	public MsgEntity checkStartBusiBps(String userid, String busisort, String busitype, 
			String applyinfopkid, int dataorgid) throws BusinessException {
		try {
			MsgEntity returnData = new MsgEntity();
			returnData.setPassed(true);
			
			// 燃气具业务: 直接发起，
			// 无需启动业务流程的诉求（不做校验）: 咨询类诉求、预约抄表、预约安检
			if (busitype.indexOf("FS") > -1
					|| busisort.equals(BusiGlobal.BUSISORT_SQ003)) {// 燃气具售后服务类
				return returnData;
			} else if (BusiGlobal.BUSISORT_SQ004.equals(busisort)
					|| BusiGlobal.TSQAPPLYTYPE_TYPE_RECORDRESERVATION.equals(busitype)
					|| SecrGlobal.SC_BUSITYPE.equals(busitype)) {// 咨询类
				return returnData;
			}
		
			// 查询工单表获取当前是否有未完成的该业务的工单
			MsgEntity msgExist = this.checkExistBusitypeWorklist(userid, busitype, applyinfopkid);
			if (!msgExist.isPassed()) {
				return msgExist;
			}


			// 对有业务流程的诉求做校验
			TBsProcessdefine template =new TBsProcessdefineImpl();
			template.setBusitype(busitype);
			template.setDataorgid(dataorgid);
			template.setDelflag(Globals.DELFLAG_NODELETE);
			template.setState(Globals.FLAG_ACTIVE);
			if(this.busiBpsCheckDao.queryEntitiesByTemplate(TBsProcessdefine.class, template).length > 0){
				return busiBpsCommon.beforeStartFlow(busitype, userid);
			}else{
				return returnData;
			}
		} catch (Exception e) {
			SrmLog.error("发起业务诉求校验失败！", e);
			throw new BusinessException("发起业务诉求校验失败！", e.getMessage());
		}
	}

	/**
	 * 业务启动校验 方法描述：存在未完成的业务工单就不能发起业务流程
	 * 
	 * @param userId
	 * @return
	 * @throws BusinessException
	 * @author 曹桢
	 * @time:2013-9-13 下午04:12:17
	 */
	public MsgEntity checkExistWorklist(String userid) throws BusinessException {
		MsgEntity msg = new MsgEntity();
		msg.setPassed(true);
		// 查询该用户当前是否有未完成的该业务的工单
		IDASCriteria dasCriteria = DASManager
				.createCriteria(TBsWorklistinfo.class.getName());
		dasCriteria.add(ExpressionHelper.eq("userid", userid));
		dasCriteria.add(ExpressionHelper.eq("worklisttype",
				BusiGlobal.TBSWORKLISTINFO_WORKLISTTYPE_BUSI));
		dasCriteria.add(ExpressionHelper.eq("state",
				BusiGlobal.TBSWORKLISTINFO_STATE_NOTFINISHED));
		dasCriteria.add(ExpressionHelper
				.eq("delflag", Globals.DELFLAG_NODELETE));
		TBsWorklistinfo[] datas = this.busiBpsCheckDao
				.queryEntitiesByCriteriaEntity(TBsWorklistinfo.class,
						dasCriteria);
		if (datas.length > 0) {
			msg.setErrormsg("用户" + userid + "存在未完成的工单，不能发起该业务流程");
			msg.setPassed(false);
		}
		return msg;
	}

	
	public void setBusiBpsCommon(BusiBpsCommon busiBpsCommon) {
		this.busiBpsCommon = busiBpsCommon;
	}


	/**
	 * 业务启动校验 方法描述：存在相同的未完成的业务工单就不能发起业务流程
	 * 
	 * @param userId
	 * @return
	 * @throws BusinessException
	 * @author 曹桢
	 * @time:2013-9-13 下午04:12:17
	 */
	public MsgEntity checkExistBusitypeWorklist(String userid, String busitype,
			String applyinfopkid) throws BusinessException {
		MsgEntity msg = new MsgEntity();
		msg.setPassed(true);
		IDASCriteria dasCriteria = DASManager
				.createCriteria(TBsWorklistinfo.class.getName());
		dasCriteria.add(ExpressionHelper.eq("userid", userid));
		dasCriteria.add(ExpressionHelper.eq("busitype", busitype));
		dasCriteria.add(ExpressionHelper.eq("worklisttype",
				BusiGlobal.TBSWORKLISTINFO_WORKLISTTYPE_BUSI));
		dasCriteria.add(ExpressionHelper.eq("state",
				BusiGlobal.TBSWORKLISTINFO_STATE_NOTFINISHED));
		dasCriteria.add(ExpressionHelper
				.eq("delflag", Globals.DELFLAG_NODELETE));
		if (StringUtils.isNotBlank(applyinfopkid)) {
			dasCriteria.add(ExpressionHelper.not(ExpressionHelper.eq(
					"applyinfopkid", applyinfopkid)));
		}
		TBsWorklistinfo[] datas = this.busiBpsCheckDao.queryEntitiesByCriteriaEntity(TBsWorklistinfo.class,
						dasCriteria);
		if (datas.length > 0 
				//可通过存在多个工单的业务类型
				&& !BusiGlobal.TBS_BUSITYPE_LEAKREPAIR.equals(busitype)	//燃气抢修
				&& !BusiGlobal.TBS_BUSITYPE_REFORM.equals(busitype)		//户内整改
				&& !BusiGlobal.TBS_BUSITYPE_INSTALL.equals(busitype)) {	//挂表
			msg.setErrormsg("用户存在该业务未完成工单，不能再次发起该业务流程!");
			msg.setPassed(false);
			return msg;
		}
		return msg;
	}

	/**
	 * 业务启动校验 方法描述：业务启动校验：根据用户状态、业务类型进行校验
	 * 
	 * @param userId
	 * @return
	 * @throws BusinessException
	 * @author 曹桢
	 * @time:2013-9-13 下午04:12:17
	 */
	public MsgEntity checkBusitypeByUserstate(String userstate, String busitype)
			throws BusinessException, Exception {
		MsgEntity returnData = new MsgEntity();
		returnData.setPassed(true);
		// 判断用户状态是否为“销户” 不能发起诉求
		if (CustGlobal.TKHUSERINFO_USERSTATE_CANCELED.equals(userstate)) {
			returnData.setPassed(false);
			returnData.setErrormsg("该用户为销户状态，无法发起该业务流程!");
			return returnData;
		}
		// 判断用户状态是否为“预销户” 不能发起诉求
		if (CustGlobal.TKHUSERINFO_USERSTATE_PRECANCEL.equals(userstate)) {
			returnData.setPassed(false);
			returnData.setErrormsg("该用户为预销户状态，无法发起该业务流程!");
			return returnData;
		}
		// 判断用户状态是否为“报停” 可以发的流程：恢复用气、表处理
		if (CustGlobal.TKHUSERINFO_USERSTATE_STOPED.equals(userstate)) {
			if (!busitype.equals(BusiGlobal.TBS_BUSITYPE_RESTORATION)
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_DEAL)) {
				returnData.setPassed(false);
				returnData.setErrormsg("该用户为报停状态，无法发起该业务流程!");
				return returnData;
			}
		}
		// 判断用户状态是否为“休户” 可以发的流程：稽查上表、过户
		if (CustGlobal.TKHUSERINFO_USERSTATE_RELEASED.equals(userstate)) {
			if (!busitype.equals(BusiGlobal.TBS_BUSITYPE_CHECKUPMETER)
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_USERTRANSFER)) {
				returnData.setPassed(false);
				returnData.setErrormsg("该用户为休户状态，无法发起该业务流程!");
				return returnData;
			}
		}
		// 判断用户状态为“临时” 可以发的流程：挂表、点火、点火挂表、户内改管、表处理、燃气抢修
		if (CustGlobal.TKHUSERINFO_USERSTATE_TEMP.equals(userstate)) {
			if (!busitype.equals(BusiGlobal.TBS_BUSITYPE_IGNITE)// 点火
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_FIRE) //工商户点火
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_INSTALL)// 挂表
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_GSINSTALL)//工商户挂表
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_INSTALLIGNITE)// 点火挂表
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_CHANGEPIPE)// 户内改管
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_DEAL)// 表处理
					&& !busitype.equals(BusiGlobal.TBS_BUSITYPE_LEAKREPAIR))// 燃气抢修
			{
				returnData.setPassed(false);
				returnData.setErrormsg("该用户为临时状态，无法发起该业务流程!");
				return returnData;
			}
		}
		return returnData;
	}

	public MsgEntity checkVirtualabled(String busitype, int dataorgid)
			throws BusinessException, Exception {
		MsgEntity returnData = new MsgEntity();
		returnData.setPassed(true);
		return null;
		
	}
}
