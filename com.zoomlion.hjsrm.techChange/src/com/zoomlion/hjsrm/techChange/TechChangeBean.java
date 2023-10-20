package com.zoomlion.hjsrm.techChange;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.eos.workflow.omservice.WFParticipant;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechCheck;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechConfirm;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechInspect;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechMaterial;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechModify;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators;
import com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechCheckImpl;
import com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechConfirmImpl;
import com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechInspectImpl;
import com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl;
import com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechMaterialImpl;
import com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl;
import com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechOperatorsImpl;
import commonj.sdo.DataObject;

public class TechChangeBean extends BaseBean {

	private TechChangeDao techChangeDao;

	/**
	 * 方法描述:查询线外技术变更(分页)
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryFlowTechList(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.techChangeDao.queryFlowTechList(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询线外技术变更异常!", e);
			throw new BusinessException("查询线外技术变更异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:获取业务流水号
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public String getPkid() throws BusinessException {
		FlowTechList tech = new FlowTechListImpl();
		this.techChangeDao.getPrimaryKey(tech);
		return tech.getTechId();
	}

	/**
	 * 方法描述:生成工单
	 * 
	 * @param list
	 * @param materials
	 * @param opts
	 * @throws BusinessException
	 */
	public void createWork(FlowTechList list, FlowTechMaterial[] materials,
			FlowTechOperators[] opts) throws BusinessException {

		try {
			// 保存技术变更列表
			this.techChangeDao.saveEntity(list);
			// 保存物料信息
			for (int i = 0; i < materials.length; i++) {
				FlowTechMaterial m = new FlowTechMaterialImpl();
				m = materials[i];
				this.techChangeDao.getPrimaryKey(m);
				this.techChangeDao.saveEntity(m);
			}
			// 保存操作员信息
			for (int i = 0; i < opts.length; i++) {
				FlowTechOperators op = new FlowTechOperatorsImpl();
				op = opts[i];
				this.techChangeDao.getPrimaryKey(op);
				this.techChangeDao.saveEntity(op);
			}
		} catch (Exception e) {
			SrmLog.error("生成工单异常!", e);
			throw new BusinessException("生成工单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:删除工单相关
	 * 
	 * @param techId
	 * @throws BusinessException
	 */
	public void deleteWorkRelate(String techId) throws BusinessException {

		try {

			// 删除物料信息
			FlowTechMaterial template = new FlowTechMaterialImpl();
			template.setTechId(techId);
			this.techChangeDao.deleteByTemplate(template);

			// 删除操作员信息
			FlowTechOperators template2 = new FlowTechOperatorsImpl();
			template2.setTechId(techId);
			this.techChangeDao.deleteByTemplate(template2);

		} catch (Exception e) {
			SrmLog.error("删除工单相关异常!", e);
			throw new BusinessException("删除工单相关异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:工单加载
	 * 
	 * @param entity
	 * @return
	 * @throws BusinessException
	 */
	public FlowTechList loadFlowTechList(FlowTechList entity)
			throws BusinessException {
		try {
			this.techChangeDao.expandEntity(entity);
			return entity;
		} catch (Exception e) {
			SrmLog.error("工单加载异常!", e);
			throw new BusinessException("工单加载异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述:查询物料
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public FlowTechMaterial[] queryMaterials(Map condition)
			throws BusinessException {
		try {
			String techId = condition.get("techId").toString();
			FlowTechMaterial template = new FlowTechMaterialImpl();
			template.setTechId(techId);
			return this.techChangeDao.queryEntitiesByTemplate(
					FlowTechMaterial.class, template);
		} catch (Exception e) {

			SrmLog.error("查询物料异常!", e);
			throw new BusinessException("查询物料异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询设计工程师
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public FlowTechOperators[] querySj(Map condition) throws BusinessException {
		try {
			String techId = condition.get("techId").toString();
			FlowTechOperators template = new FlowTechOperatorsImpl();
			template.setTechId(techId);
			template.setRolecode("sjgcs");
			return this.techChangeDao.queryEntitiesByTemplate(
					FlowTechOperators.class, template);
		} catch (Exception e) {

			SrmLog.error("查询设计工程师异常!", e);
			throw new BusinessException("查询设计工程师异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询总装技术人员或供应商技术人员
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryJs(Map condition) throws BusinessException {
		try {
			return this.techChangeDao.queryJs(condition);
		} catch (Exception e) {

			SrmLog.error("查询技术人员异常!", e);
			throw new BusinessException("查询技术人员异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询研发部门审核
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public FlowTechCheck[] queryChecks(Map condition) throws BusinessException {
		try {
			String techId = condition.get("techId").toString();
			FlowTechCheck template = new FlowTechCheckImpl();
			template.setTechId(techId);
			return this.techChangeDao.queryEntitiesByTemplate(
					FlowTechCheck.class, template);
		} catch (Exception e) {

			SrmLog.error("查询研发部门审核异常!", e);
			throw new BusinessException("查询研发部门审核异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:保存研发部门审核
	 * 
	 * @param check
	 * @throws BusinessException
	 */
	public void saveCheck(FlowTechCheck check) throws BusinessException {
		try {
			this.techChangeDao.getPrimaryKey(check);
			check.setCreateby(Common.getCurrentUserId());// 创建人
			check.setCreatebyName(Common.getCurrentUseObject().getUserName());
			check.setCreatetime(Common.getCurrentTime());// 创建时间
			check.setOrgid(Common.getCurrentUserOrgId());
			check.setOrgname(Common.getCurrentUseObject().getUserOrgName());
			this.techChangeDao.saveEntity(check);
		} catch (Exception e) {

			SrmLog.error("保存研发部门审核异常!", e);
			throw new BusinessException("保存研发部门审核异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询供应商(或内部)确认
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryConfirms(Map condition) throws BusinessException {
		try {

			return this.techChangeDao.queryConfirms(condition);
		} catch (Exception e) {

			SrmLog.error("查询供应商(或内部)确认异常!", e);
			throw new BusinessException("查询供应商(或内部)确认异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:保存供应商(或内部)确认
	 * 
	 * @param confirm
	 * @throws BusinessException
	 */
	public void saveConfirm(FlowTechConfirm confirm) throws BusinessException {
		try {
			// this.techChangeDao.getPrimaryKey(confirm);
			confirm.setCreateby(Common.getCurrentUserId());// 创建人
			confirm.setCreatebyName(Common.getCurrentUseObject().getUserName());
			confirm.setCreatetime(Common.getCurrentTime());// 创建时间
			confirm.setOrgid(Common.getCurrentUserOrgId());
			confirm.setOrgname(Common.getCurrentUseObject().getUserOrgName());
			this.techChangeDao.saveEntity(confirm);
		} catch (Exception e) {

			SrmLog.error("保存供应商(或内部)确认异常!", e);
			throw new BusinessException("保存供应商(或内部)确认异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:业务确认id
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public String getConfirmId() throws BusinessException {
		FlowTechConfirm conf = new FlowTechConfirmImpl();
		this.techChangeDao.getPrimaryKey(conf);
		return conf.getConfirmId();
	}

	/**
	 * 方法描述:获取业务流水techId
	 * 
	 * @param processinstid
	 * @return
	 * @throws BusinessException
	 */
	public String getTechId(String processinstid) throws BusinessException {
		try {
			FlowTechList template = new FlowTechListImpl();
			template.setProcessinstid(processinstid);
			FlowTechList[] data = this.techChangeDao.queryEntitiesByTemplate(
					FlowTechList.class, template);

			if (data != null && data.length > 0) {
				FlowTechList d = new FlowTechListImpl();
				d = data[0];
				return d.getTechId();
			} else {
				return "0";
			}
		} catch (Exception e) {

			SrmLog.error("获取业务流水异常!", e);
			throw new BusinessException("获取业务流水异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:保存研发修改
	 * 
	 * @param modify
	 * @throws BusinessException
	 */
	public void saveModify(FlowTechModify modify) throws BusinessException {
		try {
			this.techChangeDao.getPrimaryKey(modify);
			modify.setCreateby(Common.getCurrentUserId());// 创建人
			modify.setCreatebyName(Common.getCurrentUseObject().getUserName());
			modify.setCreatetime(Common.getCurrentTime());// 创建时间
			modify.setOrgid(Common.getCurrentUserOrgId());
			modify.setOrgname(Common.getCurrentUseObject().getUserOrgName());
			this.techChangeDao.saveEntity(modify);
		} catch (Exception e) {

			SrmLog.error("保存研发修改异常!", e);
			throw new BusinessException("保存研发修改异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询研发修改
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public FlowTechModify[] queryModifys(Map condition)
			throws BusinessException {
		try {
			String techId = condition.get("techId").toString();
			FlowTechModify template = new FlowTechModifyImpl();
			template.setTechId(techId);
			return this.techChangeDao.queryEntitiesByTemplate(
					FlowTechModify.class, template);
		} catch (Exception e) {

			SrmLog.error("查询研发修改异常!", e);
			throw new BusinessException("查询研发修改异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:保存工艺核查
	 * 
	 * @param inspect
	 * @throws BusinessException
	 */
	public void saveInspect(FlowTechInspect inspect) throws BusinessException {
		try {
			this.techChangeDao.getPrimaryKey(inspect);
			inspect.setCreateby(Common.getCurrentUserId());// 创建人
			inspect.setCreatebyName(Common.getCurrentUseObject().getUserName());
			inspect.setCreatetime(Common.getCurrentTime());// 创建时间
			inspect.setOrgid(Common.getCurrentUserOrgId());
			inspect.setOrgname(Common.getCurrentUseObject().getUserOrgName());
			this.techChangeDao.saveEntity(inspect);
		} catch (Exception e) {

			SrmLog.error("保存工艺核查异常!", e);
			throw new BusinessException("保存工艺核查异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询工艺核查
	 * 
	 * @param condition
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public FlowTechInspect[] queryInspects(Map condition)
			throws BusinessException {
		try {
			String techId = condition.get("techId").toString();
			FlowTechInspect template = new FlowTechInspectImpl();
			template.setTechId(techId);
			return this.techChangeDao.queryEntitiesByTemplate(
					FlowTechInspect.class, template);
		} catch (Exception e) {

			SrmLog.error("查询工艺核查异常!", e);
			throw new BusinessException("查询工艺核查异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:保存技术变更列表
	 * 
	 * @param list
	 * @throws BusinessException
	 */
	public void modifyWork(FlowTechList list) throws BusinessException {

		try {
			// 保存技术变更列表
			this.techChangeDao.saveEntity(list);

		} catch (Exception e) {
			SrmLog.error("保存技术变更列表异常!", e);
			throw new BusinessException("保存技术变更列表异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:转换研发审核人员
	 * 
	 * @param techId
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public WFParticipant[] getYfsh(String techId) throws BusinessException {
		Map condition = new HashMap();
		condition.put("techId", techId);
		WFParticipant[] wfp;
		try {
			// 查询设计工程师
			FlowTechOperators[] data = this.querySj(condition);
			wfp = new WFParticipant[data.length];
			for (int i = 0; i < data.length; i++) {
				FlowTechOperators d = new FlowTechOperatorsImpl();
				d = data[i];
				WFParticipant wp = new WFParticipant();
				wp.setId(d.getUserid());
				wp.setName(d.getUsername());
				wp.setTypeCode("person");
				wfp[i] = wp;
			}
			return wfp;

		} catch (Exception e) {
			SrmLog.error("转换研发审核人员异常!", e);
			throw new BusinessException("转换研发审核人员异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:转换业务确认人员
	 * 
	 * @param techId
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public WFParticipant[] getYwqr(String techId) throws BusinessException {
		Map condition = new HashMap();
		condition.put("techId", techId);
		WFParticipant[] wfp;
		try {
			// 查询总装技术人员或供应商技术人员
			DataObject[] data = this.queryJs(condition);
			wfp = new WFParticipant[data.length];
			for (int i = 0; i < data.length; i++) {
				DataObject d = data[i];
				WFParticipant wp = new WFParticipant();
				wp.setId(d.getString("userid"));
				wp.setName(d.getString("username"));
				wp.setTypeCode("person");
				wfp[i] = wp;
			}
			return wfp;

		} catch (Exception e) {
			SrmLog.error("转换业务确认人员异常!", e);
			throw new BusinessException("转换业务确认人员异常!", e.getMessage());
		}

	}

	public TechChangeDao getTechChangeDao() {
		return techChangeDao;
	}

	public void setTechChangeDao(TechChangeDao techChangeDao) {
		this.techChangeDao = techChangeDao;
	}
}
