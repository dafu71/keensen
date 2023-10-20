package com.zoomlion.hjsrm.pub.busi.common;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.VOmEmpoperroleorg;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.VAcOperatorTrs;
import commonj.sdo.DataObject;

public class SrmCommonBean extends BaseBean {
	private SrmCommonDao srmCommonDao;

	public SrmCommonDao getSrmCommonDao() {
		return srmCommonDao;
	}

	public void setSrmCommonDao(SrmCommonDao srmCommonDao) {
		this.srmCommonDao = srmCommonDao;
	}

	/**
	 * 方法描述: 查询工厂
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryBaseFactory(Map paramObj) throws BusinessException {
		try {
			return this.srmCommonDao.queryBaseFactory(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 验证用户名是否是guest
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return String
	 */
	@SuppressWarnings("unchecked")
	public String guestyz() throws BusinessException {
		String k = "0";
		try {
			String username = Common.getCurrentUseObject().getUserName();
			if (username.equals("guest")) {
				k = "2";
			} else {
				k = "1";
			}
			return k;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询公司
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryBaseCompany(Map paramObj) throws BusinessException {
		try {
			return this.srmCommonDao.queryBaseCompany(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}

	}

	public DataObject[] queryBaseEkorg(Map paramObj) throws BusinessException {
		try {
			return this.srmCommonDao.queryBaseEkorg(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	public DataObject[] queryBaseEkgrp(Map paramObj) throws BusinessException {
		try {
			return this.srmCommonDao.queryBaseEkgrp(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	public DataObject[] querylbjjyy(Map paramObj) throws BusinessException {
		try {
			return this.srmCommonDao.querylbjjjy(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据角色和机构查询参与者
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoperroleorg[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryParticipantsByRoleAndOrg3(Map paramObj)
			throws BusinessException {
		DataObject[] pts;
		try {
			if (null != paramObj.get("alluseid")
					&& !"".equals(paramObj.get("alluseid").toString())) {
				String alluserids = paramObj.get("alluseid").toString();
				String[] arr = alluserids.split(",");
				String alluserid = "";
				for (int i = 0; i < arr.length; i++) {
					String id = arr[i].substring(arr[i].indexOf('(') + 1,
							arr[i].indexOf(")"));
					if (!"".equals(id)) {
						id = "'" + id + "'";
						alluserid += id + ",";
					}
				}
				alluserid += "'0'";
				paramObj.put("alluserid", alluserid);
			} else {
				paramObj.put("alluserid", "'0'");
			}
			pts = srmCommonDao.queryParticipantsByRoleAndOrg3(paramObj);
		} catch (Exception e) {
			SrmLog.error("根据角色查询参与者异常!", e);
			throw new BusinessException("根据角色查询参与者异常!", e.getMessage());
		}
		return pts;
	}

	/**
	 * 方法描述: 根据角色查询参与者2
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * 
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoperroleorg[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryParticipantsByRoleAndOrg2(Map paramObj)
			throws BusinessException {
		DataObject[] pts;
		try {
			if (null != paramObj.get("alluseid")
					&& !"".equals(paramObj.get("alluseid").toString())) {
				String alluserids = paramObj.get("alluseid").toString();
				String[] arr = alluserids.split(",");
				String alluserid = "";
				for (int i = 0; i < arr.length; i++) {
					String id = arr[i].substring(arr[i].indexOf('(') + 1,
							arr[i].indexOf(")"));
					if (!"".equals(id)) {
						id = "'" + id + "'";
						alluserid += id + ",";
					}
				}
				alluserid += "'0'";
				paramObj.put("alluserid", alluserid);
			} else {
				paramObj.put("alluserid", "'0'");
			}
			pts = srmCommonDao.queryParticipantsByRoleAndOrg2(paramObj);
		} catch (Exception e) {
			SrmLog.error("根据角色查询参与者异常!", e);
			throw new BusinessException("根据角色查询参与者异常!", e.getMessage());
		}
		return pts;
	}

	/**
	 * 方法描述: 根据机构查询参与者
	 * 
	 * @author 许斯渊
	 * @param conditon
	 * @param orgid
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoperroleorg[]
	 */
	@SuppressWarnings("unchecked")
	public VOmEmpoperroleorg[] queryParticipantsByOrg(VOmEmpoperroleorg person,
			PageCond pagecond) throws BusinessException {
		VOmEmpoperroleorg[] pts;
		try {
			Map conditon = new HashMap();
			conditon.put("userid", person.getUserid());
			conditon.put("operatorname", person.getOperatorname());
			conditon.put("orgcode", person.getOrgcode());
			pts = srmCommonDao.queryParticipantsByOrg(conditon, pagecond);
		} catch (Exception e) {
			SrmLog.error("根据机构查询参与者异常!", e);
			throw new BusinessException("根据机构查询参与者异常!", e.getMessage());
		}
		return pts;
	}

	/**
	 * 方法描述: 判断字符串是否整数
	 * 
	 * @param s
	 * @return
	 */
	public static boolean isInteger(String s) {
		try {
			Integer.parseInt(s);
			return true;
		} catch (NumberFormatException e) {
			return false;
		}
	}

	/**
	 * 方法描述: 判断字符串是否浮点数
	 * 
	 * @param s
	 * @return
	 */
	public static boolean isDouble(String s) {
		try {
			Double.parseDouble(s);
			if (s.contains(".")) {
				return true;
			}
			return false;
		} catch (NumberFormatException e) {
			return false;
		}
	}

	/**
	 * 方法描述: 判断字符串是否数字
	 * 
	 * @param s
	 * @return
	 */
	public static boolean isNumber(String s) {
		return isInteger(s) || isDouble(s);
	}

	/**
	 * 方法描述: 判断字符串是否空值
	 * 
	 * @param o
	 * @return
	 */
	public static boolean isEmpty(Object o) {
		if (null == o || o.toString().trim().length() == 0) {
			return true;
		}

		return false;
	}

	/**
	 * 方法描述: 判断字符串是否月份
	 * 
	 * @param s
	 * @return
	 */
	public static boolean isMonth(String s) {
		String str = "";
		for (int i = 1; i <= 12; i++) {
			if (i < 10) {
				str = "0" + i;
			} else {
				str = "" + i;
			}
			if (s.equals(str)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 方法描述: 删除上传的excel文件
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
	 * 方法描述: 查询版本号
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryZvern(Map paramObj) throws BusinessException {
		try {
			return this.srmCommonDao.queryZvern(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 根据角色和机构查询参与者
	 * 
	 * @author 许斯渊
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoperroleorg[]
	 */
	@SuppressWarnings("unchecked")
	public VOmEmpoperroleorg[] queryParticipantsByRoleAndOrg(
			VOmEmpoperroleorg person, PageCond pagecond)
			throws BusinessException {
		VOmEmpoperroleorg[] pts;
		try {
			Map conditon = new HashMap();
			conditon.put("userid", person.getUserid());
			conditon.put("operatorname", person.getOperatorname());
			conditon.put("rolecode", person.getRolecode());
			conditon.put("orgcode", person.getOrgcode());
			if (null == conditon.get("rolecode")) {// 角色编码为空
				pts = srmCommonDao.queryParticipantsByRoleAndOrg(conditon,
						pagecond);
			} else {
				pts = srmCommonDao.queryParticipantsByRole(conditon, pagecond);
			}

		} catch (Exception e) {
			SrmLog.error("根据角色查询参与者异常!", e);
			throw new BusinessException("根据角色查询参与者异常!", e.getMessage());
		}
		return pts;
	}

	/**
	 * 方法描述: 查询车型名称
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycxmcCombo(Map cxcm, PageCond pagecond)
			throws BusinessException {
		try {

			return srmCommonDao.querycxmc(cxcm, pagecond);

		} catch (Exception e) {
			SrmLog.error("查询车型名称异常!", e);
			throw new BusinessException("查询车型名称异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询车型名称车型代码
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querydjqdCombo(Map cxcm, PageCond pagecond)
			throws BusinessException {
		try {

			return srmCommonDao.querydjqd(cxcm, pagecond);

		} catch (Exception e) {
			SrmLog.error("查询车型名称异常!", e);
			throw new BusinessException("查询车型名称异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询物料描述，查一个少一个
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querymatnrCombo(Map cxcm, PageCond pagecond)
			throws BusinessException {
		try {

			return srmCommonDao.querymatnr(cxcm, pagecond);

		} catch (Exception e) {
			SrmLog.error("查询物料编码异常!", e);
			throw new BusinessException("查询物料编码异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询物料描述（全部）
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querymatnrallCombo(Map cxcm, PageCond pagecond)
			throws BusinessException {
		try {

			return srmCommonDao.querymatnrall(cxcm, pagecond);

		} catch (Exception e) {
			SrmLog.error("查询物料编码异常!", e);
			throw new BusinessException("查询物料编码异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询供应商代码和供应商描述（全部）
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querylifnrallCombo(Map cxcm, PageCond pagecond)
			throws BusinessException {
		try {

			return srmCommonDao.querylifnrall(cxcm, pagecond);

		} catch (Exception e) {
			SrmLog.error("查询供应商代码异常!", e);
			throw new BusinessException("查询供应商代码异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询产品类型
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycplxcombo(Map condition) throws BusinessException {
		try {

			return srmCommonDao.querycplxcombo(condition);

		} catch (Exception e) {
			SrmLog.error("查询供应商代码异常!", e);
			throw new BusinessException("查询供应商代码异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据角色和机构查询参与者
	 * 
	 * @author 刘鑫
	 * @param conditon
	 * @param rolecode
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoperroleorg[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEmpnewCombo(Map paramObj) throws BusinessException {
		DataObject[] pts;
		try {
			if (null != paramObj.get("alluseid")
					&& !"".equals(paramObj.get("alluseid").toString())) {
				String alluserids = paramObj.get("alluseid").toString();
				String[] arr = alluserids.split(",");
				String alluserid = "";
				for (int i = 0; i < arr.length; i++) {
					String id = arr[i].substring(arr[i].indexOf('[') + 1,
							arr[i].indexOf("]"));
					if (!"".equals(id)) {
						id = "'" + id + "'";
						alluserid += id + ",";
					}
				}
				alluserid += "'0'";
				paramObj.put("alluserid", alluserid);
			} else {
				paramObj.put("alluserid", "'0'");
			}
			pts = srmCommonDao.queryEmpnewCombo(paramObj);
		} catch (Exception e) {
			SrmLog.error("根据机构名称异常!", e);
			throw new BusinessException("根据角色查询机构名称异常!", e.getMessage());
		}
		return pts;
	}

	/**
	 * 方法描述: 查询产品树
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryProductTree(Map condition)
			throws BusinessException {
		try {
			return this.srmCommonDao.queryProductTree(condition);
		} catch (Exception e) {
			SrmLog.error("查询产品信息失败!", e);
			throw new BusinessException("查询产品信息失败!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询产品树
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryProductTree2(Map condition)
			throws BusinessException {
		try {
			return this.srmCommonDao.queryProductTree2(condition);
		} catch (Exception e) {
			SrmLog.error("查询产品信息失败!", e);
			throw new BusinessException("查询产品信息失败!", e.getMessage());
		}

	}
	
	/**
	 * 方法描述: 查询产品树
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryProductTree3(Map condition)
			throws BusinessException {
		try {
			return this.srmCommonDao.queryProductTree3(condition);
		} catch (Exception e) {
			SrmLog.error("查询产品信息失败!", e);
			throw new BusinessException("查询产品信息失败!", e.getMessage());
		}

	}
	
	/**
	 * 方法描述:查询车型代号
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryProductNo(Map paramObj) throws BusinessException {
		try {
			return this.srmCommonDao.queryProductNo(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询车型代号异常!", e);
			throw new BusinessException("查询车型代号异常!", e.getMessage());
		}

	}
	
	/**
	 * 方法描述: 产品树根节点
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryProductTree4(Map condition)
			throws BusinessException {
		try {
			return this.srmCommonDao.queryProductTree4(condition);
		} catch (Exception e) {
			SrmLog.error("查询产品信息失败!", e);
			throw new BusinessException("查询产品信息失败!", e.getMessage());
		}

	}
}
