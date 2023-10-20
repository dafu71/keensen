package com.zoomlion.hjsrm.frame.org.organization;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.das.entity.SequenceGenerator;
import com.eos.data.datacontext.UserObject;
import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.VOmOrganizationTrs;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmOrganizationImpl;
import com.zoomlion.hjsrm.data.org.Organization.impl.VOmOrganizationTrsImpl;
import com.zoomlion.hjsrm.frame.org.emporg.EmpOrgDao;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现机构管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OrganizationBean extends BaseBean {

	private OrganizationDao orgDao;

	private EmpOrgDao emporgDao;

	/**
	 * 方法描述: 获取当前操作员的机构树
	 * @author 陈今伟
	 * @param parentsid
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] getOrgTreeInDataOrg(int parentsid)throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e1) {
			SrmLog.error("获取员工数据归属异常", e1);
			throw new BusinessException("获取员工数据归属异常", e1.getMessage());
		}
		Map map = new HashMap();
		map.put("status", "running");
		map.put("delflag", "n");
		// 获取当前操作员权限
		if (dataorgid != null || !dataorgid.equals("")) {
			if (!dataorgid.equals("0")) {
				try {
					if (parentsid == 0) {
						map.put("orgid", Integer.valueOf(dataorgid));
						return this.orgDao.queryEquDownOrgs(map, null);
					} else {
						map.put("orgid", parentsid);
						return this.orgDao.queryDownOrgs(map, null);
					}
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			} else {
				try {
					TOmOrganization org = new TOmOrganizationImpl();
					if (parentsid == 0) {
						org.setStatus("running");
						return orgDao.queryEntitiesByTemplate(TOmOrganization.class, org);
					} else {
						map.put("orgid", parentsid);
						return this.orgDao.queryDownOrgs(map, null);
					}
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			}
		}
		return null;
	}
	
	/**
	 * 方法描述: 获取当前操作员的机构树
	 * @author dafu
	 * @param parentsid
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public VOmOrganizationTrs[] getOrgTreeInDataOrg2(int parentsid)throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e1) {
			SrmLog.error("获取员工数据归属异常", e1);
			throw new BusinessException("获取员工数据归属异常", e1.getMessage());
		}
		Map map = new HashMap();
		map.put("status", "running");
		map.put("delflag", "n");
		// 获取当前操作员权限
		if (dataorgid != null || !dataorgid.equals("")) {
			if (!dataorgid.equals("0")) {
				try {
					if (parentsid == 0) {
						map.put("orgid", Integer.valueOf(dataorgid));
						return this.orgDao.queryEquDownOrgs2(map, null);
					} else {
						map.put("orgid", parentsid);
						return this.orgDao.queryDownOrgs2(map, null);
					}
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			} else {
				try {
					VOmOrganizationTrs org = new VOmOrganizationTrsImpl();
					if (parentsid == 0) {
						org.setStatus("running");
						return orgDao.queryEntitiesByTemplate(VOmOrganizationTrs.class, org);
					} else {
						map.put("orgid", parentsid);
						return this.orgDao.queryDownOrgs2(map, null);
					}
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			}
		}
		return null;
	}
	/**
	 * 方法描述: 获取所有的机构树
	 * @author dafu
	 * @param parentsid
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public VOmOrganizationTrs[] getOrgTreeInDataOrg3(int parentsid)throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e1) {
			SrmLog.error("获取员工数据归属异常", e1);
			throw new BusinessException("获取员工数据归属异常", e1.getMessage());
		}
		Map map = new HashMap();
		map.put("status", "running");
		map.put("delflag", "n");
		// 获取当前操作员权限
		if (dataorgid != null || !dataorgid.equals("")) {	
				try {
					VOmOrganizationTrs org = new VOmOrganizationTrsImpl();
					if (parentsid == 0) {
						org.setStatus("running");
						return orgDao.queryEntitiesByTemplate(VOmOrganizationTrs.class, org);
					} else {
						map.put("orgid", parentsid);
						return this.orgDao.queryDownOrgs2(map, null);
					}
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
		}
		return null;
	}
	/**
	 * 方法描述: 获取当前操作员权限内的机构
	 * @author 陈今伟
	 * @param userObject
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] getAllOrgInDataOrg(UserObject userObject)throws BusinessException {
		// 获取当前操作员权限
		String dataOrgidStr = (String) userObject.getAttributes().get("dataorgid");
		if (dataOrgidStr != null || !dataOrgidStr.equals("")) {
			if (!dataOrgidStr.equals("0")) {
				try {
					Map map = new HashMap();
					map.put("orgid", Integer.valueOf(dataOrgidStr));
					map.put("status", "running");
					map.put("delflag","n");
					return this.orgDao.queryEquDownOrgs(map, null);
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			}
			try {
				TOmOrganization org = new TOmOrganizationImpl();
				org.setStatus("running");
				org.setDelflag("n");
				return orgDao.queryEntitiesByTemplate(TOmOrganization.class,
						org);
			} catch (Exception e) {
				SrmLog.error("获取机构信息异常", e);
				throw new BusinessException("获取机构信息异常", e.getMessage());
			}
		}
		return null;
	}

	
	/**
	 * 方法描述: 获取当前操作员权限内的机构
	 * @author dafu
	 * @param userObject
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public VOmOrganizationTrs[] getAllOrgInDataOrg2(UserObject userObject)throws BusinessException {
		// 获取当前操作员权限
		String dataOrgidStr = (String) userObject.getAttributes().get("dataorgid");
		String rolecodeStr="";
		try {
			rolecodeStr=Common.getCurrentUseObject().getAttributes().get("roles_rolecode_str").toString();
		} catch (Exception e) {
			SrmLog.error("获取机构信息异常", e);
			throw new BusinessException("获取机构信息异常", e.getMessage());
		}
		if (dataOrgidStr != null || !dataOrgidStr.equals("")) {
			if (!dataOrgidStr.equals("0") && rolecodeStr.indexOf("srmadmin")==-1) {
				try {
					Map map = new HashMap();
					map.put("orgid", Integer.valueOf(dataOrgidStr));
					map.put("status", "running");
					map.put("delflag","n");
					return this.orgDao.queryEquDownOrgs2(map, null);
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			}
			try {
				VOmOrganizationTrs org = new VOmOrganizationTrsImpl();
				org.setStatus("running");
				org.setDelflag("n");
				return orgDao.queryEntitiesByTemplate(VOmOrganizationTrs.class,
						org);
			} catch (Exception e) {
				SrmLog.error("获取机构信息异常", e);
				throw new BusinessException("获取机构信息异常", e.getMessage());
			}
		}
		return null;
	}
	
	
	/**
	 * 方法描述: 获取当前操作员权限内的机构
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getEmpBusinessOrgs() throws BusinessException {
		// 获取当前操作员权限
		Integer empid;
		try {
			empid = (Integer) Common.getCurrentUseObject().getAttributes().get("empid");
		} catch (Exception e) {
			SrmLog.error("获取当前操作员信息异常", e);
			throw new BusinessException("获取当前操作员信息异常", e.getMessage());
		}
		try {
			Map condition = new HashMap();
			condition.put("empid", empid);
			condition.put("status", "running");
			condition.put("delflag", "n");
			return this.orgDao.queryOrganizationByEmp(condition);
		} catch (Exception e) {
			SrmLog.error("获取员工业务机构信息异常", e);
			throw new BusinessException("获取员工业务机构信息异常", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询机构列表
	 * @author 陈今伟
	 * @param org
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] queryOrgnizations(TOmOrganization org, PageCond pageCond) throws BusinessException {
		String dataorgid;
		int orgid = org.getOrgid();
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e1) {
			SrmLog.error("获取员工数据归属异常", e1);
			throw new BusinessException("获取员工数据归属异常", e1.getMessage());
		}
		Map map = new HashMap();

		if (org.getOrgcode() != null && !org.getOrgcode().equals("")) {
			map.put("orgcode", org.getOrgcode());
		}
		if (org.getOrgtype() != null && !org.getOrgtype().equals("")) {
			map.put("orgtype", org.getOrgtype());
		}
		if (org.getOrgname() != null && !org.getOrgname().equals("")) {
			map.put("orgname", org.getOrgname());
		}
		if (org.getStatus() != null && !org.getStatus().equals("")) {
			map.put("status", org.getStatus());
		}
		// 获取当前操作员权限
		if (dataorgid != null || !dataorgid.equals("")) {
			if (!dataorgid.equals("0")) {
				try {
					if (orgid == 0) {
						map.put("orgid", Integer.valueOf(dataorgid));
						return this.orgDao.queryDownOrgs(map, pageCond);
					} else {
						map.put("orgid", org.getOrgid());
						return this.orgDao.queryDownOrgs(map, pageCond);
					}
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			} else {
				try {
					map.put("orgid", orgid);
					return this.orgDao.queryDownOrgs(map, pageCond);
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			}
		}
		return null;
	}
	
	/**
	 * 方法描述: 查询机构列表
	 * @author dafu
	 * @param org
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return VOmOrganizationTrs[]
	 */
	@SuppressWarnings("unchecked")
	public VOmOrganizationTrs[] queryOrgnizations(VOmOrganizationTrs org, PageCond pageCond) throws BusinessException {
		String dataorgid;
		int orgid = org.getOrgid();
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e1) {
			SrmLog.error("获取员工数据归属异常", e1);
			throw new BusinessException("获取员工数据归属异常", e1.getMessage());
		}
		Map map = new HashMap();

		if (org.getOrgcode() != null && !org.getOrgcode().equals("")) {
			map.put("orgcode", org.getOrgcode());
		}
		if (org.getOrgtype() != null && !org.getOrgtype().equals("")) {
			map.put("orgtype", org.getOrgtype());
		}
		if (org.getOrgname() != null && !org.getOrgname().equals("")) {
			map.put("orgname", org.getOrgname());
		}
		if (org.getStatus() != null && !org.getStatus().equals("")) {
			map.put("status", org.getStatus());
		}
		// 获取当前操作员权限
		if (dataorgid != null || !dataorgid.equals("")) {
			if (!dataorgid.equals("0")) {
				try {
					if (orgid == 0) {
						map.put("orgid", Integer.valueOf(dataorgid));
						return this.orgDao.queryDownOrgs2(map, pageCond);
					} else {
						map.put("orgid", org.getOrgid());
						return this.orgDao.queryDownOrgs2(map, pageCond);
					}
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			} else {
				try {
					map.put("orgid", orgid);
					return this.orgDao.queryDownOrgs2(map, pageCond);
				} catch (Exception e) {
					SrmLog.error("获取机构信息异常", e);
					throw new BusinessException("获取机构信息异常", e.getMessage());
				}
			}
		}
		return null;
	}

	/**
	 * 方法描述: 新增机构
	 * @author 陈今伟
	 * @param org
	 * @return
	 * @throws BusinessException
	 * @return String
	 */
	public String addOrganization(TOmOrganization org) throws BusinessException {
		String orgid = "";
		try {
			org.setCreateby(Common.getCurrentUserId());
		} catch (Exception e) {
			SrmLog.error("新增机构失败!", e);
			throw new BusinessException("新增机构失败!", e.getMessage());
		}
		if (org.getParentorgid() == 0) { // 判断:是否顶级机构
			org.set("parentorgid", null);
			try {
				orgid = orgDao.getEosPKByKeyname("TOmOrganization.orgid");
				org.setOrgid(Integer.valueOf(orgid));
				org.setOrgseq('.' + orgid + ".");
				org.setStartdate(new Date(System.currentTimeMillis()));
				org.setIsleaf("y");
				org.setSubcount(0);
				org.setOrglevel(1);
				String orgtype = org.getOrgtype();
				// 业务机构判断:Dataorgid为空,,并且机构类型为集团，总公司,分公司
				if (org.getDataorgid() == 0 && ("0".equals(orgtype) || "1".equals(orgtype))) {// 机构类型判断
					org.setDataorgid(Integer.parseInt(orgid));// 等自身机构id
				}
				org.setDelflag("n");
				orgDao.insertEntity(org);
			} catch (Exception e) {
				SrmLog.error("新增机构失败!", e);
				throw new BusinessException("新增机构失败!", e.getMessage());
			}
		} else {
			// 查询父机构
			TOmOrganization parentOrg = new TOmOrganizationImpl();
			parentOrg.setOrgid(org.getParentorgid());
			this.orgDao.expandEntity(parentOrg);
			// 维护新增字段
			try {
				orgid = orgDao.getEosPKByKeyname("TOmOrganization.orgid");
			} catch (Exception e) {
				SrmLog.error("新增机构获取主键信息失败!", e);
				throw new BusinessException("新增机构获取主键信息失败!", e.getMessage());
			}
			org.setOrgid(Integer.valueOf(orgid));
			org.setOrgseq(parentOrg.getOrgseq() + orgid + ".");
			org.setStartdate(new Date(System.currentTimeMillis()));
			org.setIsleaf("y");
			org.setSubcount(0);
			org.setOrglevel(parentOrg.getOrglevel() + 1);
			String orgtype = org.getOrgtype();
			// 业务机构判断:Dataorgid为空,,并且机构类型为集团，总公司,分公司
			if (("0".equals(orgtype) || "1".equals(orgtype))) {// 机构类型判断
				org.setDataorgid(Integer.parseInt(orgid));// 等自身机构id
			} else {
				org.setDataorgid(parentOrg.getDataorgid());// 等同父机构的业务机构id
			}
			org.setDelflag("n");
			try {
				orgDao.insertEntity(org);
			} catch (Exception e) {
				SrmLog.error("新增机构信息失败!", e);
				throw new BusinessException("新增机构信息失败!", e.getMessage());
			}
			parentOrg.setSubcount(parentOrg.getSubcount() + 1);// 更新父机构
			parentOrg.setIsleaf("y");
			try {
				orgDao.saveEntity(parentOrg);
			} catch (Exception e) {
				SrmLog.error("修改父机构信息失败!", e);
				throw new BusinessException("修改父机构信息失败!", e.getMessage());
			}
		}
		return null;

	}

	/**
	 * 方法描述: 修改机构
	 * @author 陈今伟
	 * @param org
	 * @throws BusinessException 
	 * @return void
	 */
	public void saveOrganization(TOmOrganization org) throws BusinessException {
		try {
			org.setModifyby(Common.getCurrentUserId());
			org.setUpdatetime(Common.getCurrentTime());
		} catch (Exception e) {
			SrmLog.error("修改机构失败!", e);
			throw new BusinessException("修改机构失败!", e.getMessage());
		}
		if (org.getParentorgid() == 0) { // 判断:是否顶级机构
			org.set("parentorgid", null);
			org.setOrgseq('.' + org.getOrgid() + ".");
			org.setIsleaf("n");
			org.setOrglevel(1);
			String orgtype = org.getOrgtype();
			// 业务机构判断:Dataorgid为空,,并且机构类型为集团，总公司,分公司
			if (org.getDataorgid() == 0 && ("0".equals(orgtype) || "1".equals(orgtype))) {// 机构类型判断
				org.setDataorgid(org.getOrgid());// 等自身机构id
			}
			org.setDelflag("n");
			try {
				orgDao.saveEntity(org);
			} catch (Exception e) {
				SrmLog.error("保存机构信息失败!", e);
				throw new BusinessException("保存机构信息失败!", e.getMessage());
			}
		} else {
			// 查询父机构
			TOmOrganization parentOrg = new TOmOrganizationImpl();
			parentOrg.setOrgid(org.getParentorgid());
			this.orgDao.expandEntity(parentOrg);
			org.setOrgseq(parentOrg.getOrgseq() + org.getOrgid() + ".");
			org.setIsleaf("y");
			org.setOrglevel(parentOrg.getOrglevel() + 1);
			String orgtype = org.getOrgtype();
			// 业务机构判断:Dataorgid为空,,并且机构类型为集团，总公司,分公司
			if (("0".equals(orgtype) || "1".equals(orgtype))) {// 机构类型判断
				org.setDataorgid(org.getOrgid());// 等自身机构id
			} else {
				org.setDataorgid(parentOrg.getDataorgid());// 等同父机构的业务机构id
			}
			org.setDelflag("n");
			try {
				orgDao.saveEntity(org);
			} catch (Exception e) {
				SrmLog.error("保存机构信息失败!", e);
				throw new BusinessException("保存机构信息失败!", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 加载机构信息
	 * @author 陈今伟
	 * @param org
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization
	 */
	public TOmOrganization loadOrganization(TOmOrganization org)throws BusinessException {
		try {
			this.orgDao.expandEntity(org);
			TOmOrganization porg = new TOmOrganizationImpl();
			porg.setOrgid(org.getParentorgid());
			this.orgDao.expandEntity(porg);
			org.set("ptype", porg.getOrgtype());
		} catch (Exception e) {
			SrmLog.error("加载机构信息失败!", e);
			throw new BusinessException("加载机构信息失败!", e.getMessage());
		}
		return org;
	}
	
	/**
	 * 方法描述: 加载机构信息
	 * @author 傅力
	 * @param org
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization
	 */
	public VOmOrganizationTrs loadOrganization(VOmOrganizationTrs org)throws BusinessException {
		try {
			VOmOrganizationTrs porgTemplate2 = new VOmOrganizationTrsImpl();
			porgTemplate2.setOrgid(org.getOrgid());
			porgTemplate2.setDataorgid(org.getDataorgid());
			VOmOrganizationTrs[] orgs = this.orgDao.queryEntitiesByTemplate(VOmOrganizationTrs.class, porgTemplate2);
			if(null != orgs && orgs.length >0){
				org = orgs[0];
			}else{
				throw new BusinessException("加载机构信息失败!", "加载机构信息失败!");
			}
			
			//this.orgDao.expandEntity(org);
			VOmOrganizationTrs porgTemplate = new VOmOrganizationTrsImpl();
			porgTemplate.setOrgid(org.getParentorgid());
			//porgTemplate.setDataorgid(org.getDataorgid());
			VOmOrganizationTrs[] porgs = this.orgDao.queryEntitiesByTemplate(VOmOrganizationTrs.class, porgTemplate);
			//porg.setOrgid(org.getParentorgid());
			//this.orgDao.expandEntity(porg);
			if(null != porgs && porgs.length >0){
				org.set("ptype", porgs[0].getOrgtype());
			}else{
				throw new BusinessException("加载机构信息失败!", "加载机构信息失败!");
			}
			
		} catch (Exception e) {
			SrmLog.error("加载机构信息失败!", e);
			throw new BusinessException("加载机构信息失败!", e.getMessage());
		}
		return org;
	}

	/**
	 * 方法描述: 注销机构，更新与机构相关的员工,角色
	 * @author 陈今伟
	 * @param org
	 * @throws BusinessException 
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void removeOrganization(TOmOrganization org)throws BusinessException {
		// 查询该机构及所有的子机构(子子机构)
		this.orgDao.expandEntity(org);
		Map condition = new HashMap();
		org.setStatus("cancel");
		org.setDelflag("y");
		condition.put("orgid", org.getOrgid());
		//	此处为注销员工时查询是否还存在运行状态的下级机构
		condition.put("status", "running");
		TOmOrganization[] subOrgs;
		try {
			subOrgs = this.orgDao.queryDownOrgs(condition, null);
		} catch (Exception e1) {
			SrmLog.error("查询下级机构信息失败", e1);
			throw new BusinessException("查询下级机构信息失败!", e1.getMessage());
		}
		if (subOrgs != null && subOrgs.length >= 1) {
			throw new BusinessException("该机构存在子机构，请先注销子机构!", "");
		}
		if (org.getParentorgid() != 0) {
			TOmOrganization parentOrg = new TOmOrganizationImpl();
			parentOrg.setOrgid(org.getParentorgid());
			this.orgDao.expandEntity(parentOrg);
			int subCount = parentOrg.getSubcount();// 删除一个子机构
			parentOrg.setSubcount(subCount - 1);
			if (subCount - 1 == 0) {
				parentOrg.setIsleaf("y");
			}
			try {
				orgDao.updateEntity(parentOrg);
			} catch (Exception e) {
				SrmLog.error("更新父机构失败", e);
				throw new BusinessException("更新父机构失败!", e.getMessage());
			}
		}
		try {
			this.orgDao.updateEntity(org);
		} catch (Exception e) {
			SrmLog.error("注销机构失败", e);
			throw new BusinessException("注销机构失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 恢复机构
	 * @author 陈今伟
	 * @param org
	 * @throws BusinessException 
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void recoveryOrganization(TOmOrganization org)throws BusinessException {
		this.orgDao.expandEntity(org);
		org.setStatus("running");
		org.setDelflag("n");
		if (org.getParentorgid() != 0) {
			TOmOrganization parentOrg = new TOmOrganizationImpl();
			parentOrg.setOrgid(org.getParentorgid());
			this.orgDao.expandEntity(parentOrg);
			if (parentOrg.getStatus() != null && !parentOrg.getStatus().equals("running")) {
				throw new BusinessException("该机构父机构未启用，请先恢复上级机构!", "");
			}
			int subCount = parentOrg.getSubcount();// 删除一个子机构
			parentOrg.setSubcount(subCount + 1);
			try {
				orgDao.updateEntity(parentOrg);
			} catch (Exception e) {
				SrmLog.error("更新父机构失败", e);
				throw new BusinessException("更新父机构失败!", e.getMessage());
			}
		}
		try {
			this.orgDao.updateEntity(org);
		} catch (Exception e) {
			SrmLog.error("恢复机构失败", e);
			throw new BusinessException("恢复机构失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 验证机构编码是否存存在
	 * @author 陈今伟
	 * @param code
	 * @return
	 * @throws BusinessException 
	 * @return int
	 */
	public int checkOrgCode(String code) throws BusinessException {
		TOmOrganization temp = new TOmOrganizationImpl();
		temp.setOrgcode(code);
		TOmOrganization[] ts = this.orgDao.queryEntitiesByTemplate(TOmOrganization.class, temp);
		if (ts != null && ts.length > 0) {
			return 0;
		} else {
			return 1;
		}
	}

	/**
	 * 方法描述: 获取机构编码
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return String
	 */
	public String getNewOrgCode() throws BusinessException {
		long code = SequenceGenerator.getNextSequence("TOmOrganization.Orgid");
		return Common.padLeft(String.valueOf(code), 5, '0');
	}

	public EmpOrgDao getEmporgDao() {
		return emporgDao;
	}

	public void setEmporgDao(EmpOrgDao emporgDao) {
		this.emporgDao = emporgDao;
	}

	public void setOrgDao(OrganizationDao orgDao) {
		this.orgDao = orgDao;
	}
}
