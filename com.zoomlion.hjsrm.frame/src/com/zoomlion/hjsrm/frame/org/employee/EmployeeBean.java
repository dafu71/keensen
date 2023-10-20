/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改密码策略
 * 创建日期： 2014-9-18
 * 补丁编号： G3_P_20140915_01_249 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_249 吕俊涛   2014-9-18  集团
//
// =================================================================
package com.zoomlion.hjsrm.frame.org.employee;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.das.entity.SequenceGenerator;
import com.eos.data.datacontext.UserObject;
import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.RightsLog;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmEmployee;
import com.zoomlion.hjsrm.data.org.Organization.TOmEmporg;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmEmployeeImpl;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmEmporgImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperres;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperatorImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperresImpl;
import com.zoomlion.hjsrm.frame.auth.loader.PermissionCacheManager;
import com.zoomlion.hjsrm.frame.auth.loader.PrivilegeCacheManager;
import com.zoomlion.hjsrm.frame.org.emporg.EmpOrgDao;
import com.zoomlion.hjsrm.frame.rights.operator.OperatorBean;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现员工管理功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class EmployeeBean extends BaseBean {

	private EmployeeDao empDao;

	private EmpOrgDao emporgDao;

	private OperatorBean operatorBean;

	private OperresDao operresdao;

	/**
	 * 方法描述: 依据empid 扩展员工信息
	 * 
	 * @author 陈今伟
	 * @param emp
	 * @return
	 * @throws BusinessException
	 * @return TOmEmployee
	 */
	public TOmEmployee expandEmployee(TOmEmployee emp) throws BusinessException {
		try {
			this.empDao.expandEntity(emp);
			IDASCriteria dasCriteria = DASManager
					.createCriteria(TOmEmporg.class.getName());
			dasCriteria.add(ExpressionHelper.eq("empid", emp.getEmpid()));
			TOmEmporg[] egs = this.emporgDao.queryEntitiesByCriteriaEntity(
					TOmEmporg.class, dasCriteria);
			int[] ids = new int[egs.length];
			for (int i = 0; i < egs.length; i++) {
				ids[i] = egs[i].getOrgid();
			}
			emp.set("bizorgids", ids);
		} catch (Exception e) {
			SrmLog.error("依据empid扩展员工信息失败!", e);
			throw new BusinessException("依据empid扩展员工信息失败!", e.getMessage());
		}
		return emp;
	}

	/**
	 * 方法描述: 依据empid 扩展员工信息(刘鑫专用)
	 * 
	 * @author 刘鑫
	 * @param emp
	 * @return
	 * @throws BusinessException
	 * @return TOmEmployee
	 */
	@SuppressWarnings("unchecked")
	public TOmEmployee expandEmployeeliuxin(TOmEmployee emp)
			throws BusinessException {
		try {
			this.empDao.expandEntity(emp);
			Map condition = new HashMap();
			condition.put("empid", emp.getEmpid());
			DataObject[] cool = this.emporgDao.expandEmployeeliuxin(condition);
			IDASCriteria dasCriteria = DASManager
					.createCriteria(TOmEmporg.class.getName());
			dasCriteria.add(ExpressionHelper.eq("empid", emp.getEmpid()));
			TOmEmporg[] egs = this.emporgDao.queryEntitiesByCriteriaEntity(
					TOmEmporg.class, dasCriteria);
			int[] ids = new int[egs.length];
			for (int i = 0; i < egs.length; i++) {
				ids[i] = egs[i].getOrgid();
			}
			emp.set("bizorgids", ids);
			emp.set("bizorgids2", cool[0].getString("cool"));
		} catch (Exception e) {
			SrmLog.error("依据empid扩展员工信息失败!", e);
			throw new BusinessException("依据empid扩展员工信息失败!", e.getMessage());
		}
		return emp;
	}

	/**
	 * 方法描述: 依据empid 扩展员工全部信息
	 * 
	 * @author 陈今伟
	 * @param empid
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEmployee(String empid) throws BusinessException {
		if (empid != null) {
			Map condition = new HashMap();
			condition.put("empid", empid);
			try {
				return this.empDao.queryEmpbyEmpid(condition);
			} catch (Exception e) {
				SrmLog.error("扩展员工全部信息失败!", e);
				throw new BusinessException("扩展员工全部信息失败!", e.getMessage());
			}
		}
		return null;
	}

	/**
	 * 方法描述: 新增员工，并返回该员工ID
	 * 
	 * @author 陈今伟
	 * @param emp
	 * @return
	 * @throws BusinessException
	 * @return String
	 */
	public String addEmployee(TOmEmployee emp) throws BusinessException {
		Integer id = emp.getEmpid(); // heqj 改造用于压力测试 如果有主键传进来则不取主键
		if (id == null || id == 0) {
			String pk;
			try {
				pk = empDao.getEosPKByKeyname("TOmEmployee.empid");
			} catch (Exception e) {
				SrmLog.error("新增员工失败!", e);
				throw new BusinessException("新增员工失败!", e.getMessage());
			}
			emp.setEmpid(Integer.parseInt(pk));
		}
		emp.setRegdate(new Date(System.currentTimeMillis()));
		emp.setDelflag("n");
		this.empDao.insertEntity(emp);
		return String.valueOf(emp.getEmpid());
	}

	/**
	 * 方法描述: 新增员工，操作员
	 * 
	 * @author 陈今伟
	 * @param emp
	 * @param operator
	 * @param userObject
	 * @param orgid
	 * @return
	 * @throws BusinessException
	 * @return String[]
	 */
	public String[] addEmpOperator(TOmEmployee emp, TAcOperator operator,
			UserObject userObject, String orgid) throws BusinessException {
		// 得到机构的 数据归属(首先根据 要添加到的机构的数据归属 如果没有则添加session中操作员的数据归属)
		int dataorgid = emp.getMainorgid();
		emp.setDataorgid(dataorgid);
		operator.setDataorgid(dataorgid);
		try {
			return addEmpOperator(emp, operator, userObject);
		} catch (Exception e) {
			SrmLog.error("新增员工失败!", e);
			throw new BusinessException("新增员工失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增员工，操作员
	 * 
	 * @author 陈今伟
	 * @param emp
	 * @param operator
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return String[]
	 */
	public String[] addEmpOperator(TOmEmployee emp, TAcOperator operator,
			UserObject userObject) throws BusinessException {
		try {
			String empid = empDao.getEosPKByKeyname("TOmEmployee.empid");
			String operatorid = empDao
					.getEosPKByKeyname("TAcOperator.operatorid");
			// 维护新增员工信息
			emp.setEmpid(Integer.parseInt(empid));
			emp.setRegdate(new Date(System.currentTimeMillis()));
			emp.setDelflag("n");
			// 维护新增操作员信息
			operator.setOperatorid(Long.parseLong(operatorid));
			operator.setEmpid(Integer.parseInt(empid));
			operator.setStatus("0");
			this.empDao.insertEntity(emp);
			// operatorBean.addOperator(operator, userObject);
			String[] pks = { empid, operatorid };
			return pks;
		} catch (Exception e) {
			SrmLog.error("新增员工失败!", e);
			throw new BusinessException("新增员工失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存修改后的员工信息
	 * 
	 * @author 陈今伟
	 * @param employee
	 * @throws BusinessException
	 * @return void
	 */
	public void saveEmployee(TOmEmployee employee) throws BusinessException {
		employee.setDataorgid(employee.getMainorgid());
		try {
			employee.setModifyby(Common.getCurrentUserId());
			employee.setUpdatetime(Common.getCurrentTime());
			this.empDao.saveEntity(employee);
		} catch (Exception e) {
			SrmLog.error("保存员工信息失败!", e);
			throw new BusinessException("保存员工信息失败!", e.getMessage());
		}
		TAcOperator oper = new TAcOperatorImpl();
		oper.setEmpid(employee.getEmpid());
		try {
			TAcOperator opers[] = this.operatorBean
					.queryOperatorByTemplate(oper);
			if (opers.length > 0) {
				opers[0].setDataorgid(employee.getDataorgid());
				this.operatorBean.saveOperator(opers[0]);
			}
		} catch (Exception e) {
			SrmLog.error("更新操作员员信息失败!", e);
			throw new BusinessException("更新操作员员信息失败!", e.getMessage());
		}
		try {
			// 删除员工机构关系
			IDASCriteria entry = DASManager
					.createCriteria("com.zoomlion.hjsrm.data.org.Organization.TOmEmporg");
			entry.add(ExpressionHelper.eq("empid", employee.getEmpid()));
			this.emporgDao.deleteByCriteriaEntity(entry);
			// 插入员工机构关系
			String ids = employee.get("bizorgids").toString();
			String[] orgids = ids.split(",");
			for (int i = 0; i < orgids.length; i++) {
				TOmEmporg eg = new TOmEmporgImpl();
				eg.setEmpid(employee.getEmpid());
				eg.setOrgid(Integer.parseInt(orgids[i]));
				eg.setDataorgid(employee.getDataorgid());
				this.emporgDao.insertEntity(eg);
			}
		} catch (Exception e) {
			SrmLog.error("更新员工机构关系失败!", e);
			throw new BusinessException("更新员工机构关系失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存员工信息
	 * 
	 * @author 陈今伟
	 * @param emp
	 * @param operator
	 * @throws BusinessException
	 * @return void
	 */
	public void saveEmp(TOmEmployee emp, TAcOperator operator)
			throws BusinessException {
		try {
			operatorBean.saveOperator(operator);
		} catch (Exception e) {
			SrmLog.error("保存员工信息失败!", e);
			throw new BusinessException("保存员工信息失败!", e.getMessage());
		}
		this.empDao.saveEntity(emp);
	}

	/**
	 * 方法描述: 批量注销员工 (依据empid)
	 * 
	 * @author 陈今伟
	 * @param emps
	 * @throws BusinessException
	 * @return void
	 */
	public void discardedEmployeeBatch(TOmEmployee[] emps)
			throws BusinessException {
		StringBuffer sb = new StringBuffer();
		for (int i = 0, j = emps.length; i < j; i++) {
			TAcOperator toperator = new TAcOperatorImpl();
			toperator.setEmpid(emps[i].getEmpid());
			TAcOperator[] ops;
			try {
				ops = operatorBean.queryOperatorByTemplate(toperator);
			} catch (Exception e) {
				SrmLog.error("注销员工失败!", e);
				throw new BusinessException("注销员工失败!", e.getMessage());
			}
			if (ops.length > 0) {
				for (TAcOperator op : ops) {
					try {
						operatorBean.deleteOperator(op);
					} catch (Exception e) {
						SrmLog.error("注销员工失败!", e);
						throw new BusinessException("注销员工失败!", e.getMessage());
					}
				}
			}
			sb.append("【" + emps[i].getEmpname() + "】,");
			emps[i].setEmpstatus("leave");
			emps[i].setOutdate(new Date());
		}
		this.empDao.saveEntities(emps);
		RightsLog.writeSucceedLog(1, "注销了员工" + sb.toString());
	}

	/**
	 * 方法描述: 批量恢复已经注销的员工 (依据empid)
	 * 
	 * @author 陈今伟
	 * @param emps
	 * @throws BusinessException
	 * @return void
	 */
	public void RegainEmpBatch(TOmEmployee[] emps) throws BusinessException {
		StringBuffer sb = new StringBuffer();
		for (int i = 0, j = emps.length; i < j; i++) {
			TAcOperator toperator = new TAcOperatorImpl();
			toperator.setEmpid(emps[i].getEmpid());
			TAcOperator[] ops;
			try {
				ops = operatorBean.queryOperatorByTemplate(toperator);
			} catch (Exception e) {
				SrmLog.error("恢复员工时查询对应的操作员失败!", e);
				throw new BusinessException("恢复员工时查询对应的操作员失败!", e.getMessage());
			}
			if (ops.length > 0) {
				for (int k = 0, l = ops.length; k < l; k++) {
					ops[k].setStatus("0");
				}
				operresdao.saveEntities(ops);
			}
			sb.append("【" + emps[i].getEmpname() + "】,");
			emps[i].setEmpstatus("on");
		}
		this.empDao.saveEntities(emps);
		RightsLog.writeSucceedLog(1, "恢复了员工" + sb.toString());
	}

	/**
	 * 方法描述: 批量恢复操作员
	 * 
	 * @author 陈今伟
	 * @param opers
	 * @throws BusinessException
	 * @return void
	 */
	public void regainOperatorBatch(TAcOperator[] opers)
			throws BusinessException {
		for (int i = 0, j = opers.length; i < j; i++) {
			try {
				// 如果该操作员对于的员工处于删除状态,则先恢复员工状态
				if ("y".equals(opers[i].getString("delflag"))) {
					TOmEmployee emp = new TOmEmployeeImpl();
					emp.setEmpid(opers[i].getEmpid());
					emp.setDelflag("n");
					this.empDao.updateEntity(emp);
				}
				this.operatorBean.regainOperator(opers[i]);
			} catch (Exception e) {
				SrmLog.error("恢复操作员失败!", e);
				throw new BusinessException("恢复操作员失败!", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 依据操作员ID查询员工特殊权限
	 * 
	 * @author 陈今伟
	 * @param operatorid
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEmpOperresByOPerid(Long operatorid)
			throws BusinessException {
		Map condition = new HashMap();
		condition.put("operatorid", operatorid);
		try {
			return this.operresdao.queryEmpOperresByOPerid(condition);
		} catch (Exception e) {
			SrmLog.error("依据操作员ID查询员工特殊权限信息失败!", e);
			throw new BusinessException("依据操作员ID查询员工特殊权限信息失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除当前操作员的所有特权信息
	 * 
	 * @author 陈今伟
	 * @param operatorid
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void deleteEmpOperres(Long operatorid) throws BusinessException {
		Map condition = new HashMap();
		condition.put("operatorid", operatorid);
		try {
			this.operresdao.deleteEmpOperres(condition);
		} catch (Exception e) {
			SrmLog.error("删除当前操作员的所有特权信息失败!", e);
			throw new BusinessException("删除当前操作员的所有特权信息失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存当前操作员的特权信息
	 * 
	 * @author 陈今伟
	 * @param condition
	 * @param operatorid
	 * @throws BusinessException
	 * @return void
	 */
	public void saveEmpOperres(DataObject[] condition, Long operatorid)
			throws BusinessException {
		// 1.删除当前操作员的所有特权信息
		this.deleteEmpOperres(operatorid);
		if (condition.length > 0) {
			// 2.先遍历前台传递的对象，将其中结束时间小于当前时间的特权信息剔除
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
			int k = 0;
			for (int i = 0, j = condition.length; i < j; i++) {
				// 如果时间为空，视为永久特权，可以插入
				if (condition[i].getString("enddate") == null) {
					k += 1;
				} else {
					Date enddate = new Date();
					try {
						enddate = sdf.parse(condition[i].getString("enddate"));
					} catch (ParseException e) {
						SrmLog.error("保存当前操作员的特权信息失败!", e);
						throw new BusinessException("保存当前操作员的特权信息失败!", e
								.getMessage());
					}
					if (enddate.after(new Date())) {
						k += 1;
					}
				}
			}
			TAcOperres[] operress = new TAcOperresImpl[k];
			int h = 0;
			for (int i = 0, j = condition.length; i < j; i++) {
				TAcOperres operres = new TAcOperresImpl();
				// 如果时间为空，视为永久特权，可以插入
				if (condition[i].getString("enddate") == null) {
					operres.setOperatorid(Long.parseLong((condition[i]
							.getString("operatorid"))));
					operres.setResid(Integer.parseInt((condition[i]
							.getString("resid"))));
					operres.setAuthtype("y");
					try {
						operres.setStartdate(sdf.parse((condition[i]
								.getString("startdate"))));
					} catch (ParseException e) {
						SrmLog.error("开始时间为空!", e);
						throw new BusinessException("开始时间为空!", e.getMessage());
					}
					// operres.setEnddate(null);
					operres.setDataorgid(Integer.parseInt((condition[i]
							.getString("dataorgid"))));
					operress[h] = operres;
					h += 1;
				} else {
					Date enddate = new Date();
					try {
						enddate = sdf.parse(condition[i].getString("enddate"));
					} catch (ParseException e) {
						SrmLog.error("保存当前操作员的特权信息失败!", e);
						throw new BusinessException("保存当前操作员的特权信息失败!", e
								.getMessage());
					}
					// 如果结束时间大于当前时间
					if (enddate.after(new Date())) {
						operres.setOperatorid(Long.parseLong((condition[i]
								.getString("operatorid"))));
						operres.setResid(Integer.parseInt((condition[i]
								.getString("resid"))));
						operres.setAuthtype(condition[i].getString("authtype"));
						try {
							operres.setStartdate(sdf.parse((condition[i]
									.getString("startdate"))));
							operres.setEnddate(sdf.parse((condition[i]
									.getString("enddate"))));
						} catch (Exception e) {
							SrmLog.error("保存当前操作员的特权信息失败!", e);
							throw new BusinessException("保存当前操作员的特权信息失败!", e
									.getMessage());
						}
						operres.setDataorgid(Integer.parseInt((condition[i]
								.getString("dataorgid"))));
						operress[h] = operres;
						h += 1;
					}
				}
			}
			// 3.插入数据库
			this.operresdao.insertEntityBatch(operress);
			// 4.刷新缓存
			try {
				PrivilegeCacheManager.clearCache();
			} catch (Exception e1) {
				SrmLog.error("刷新缓存失败!", e1);
			}
		}
	}

	/**
	 * 方法描述: 查询不存在操作员的员工信息
	 * 
	 * @author 陈今伟
	 * @param empname
	 * @param pageCond
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEmpNotOper(String empname, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			String dataorgid = Common.getCurrentUserDataOrgId();
			String user = Common.getCurrentUserId();
			if (user != null && !user.equals("sysadmin")) {
				condition.put("dataorgid", dataorgid);
			}
			condition.put("empname", empname);
			return this.empDao.queryEmpNotOper(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询不存在操作员的员工信息失败!", e);
			throw new BusinessException("查询不存在操作员的员工信息失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述： 用于校验员工编号
	 * 
	 * @author 陈今伟
	 * @param code
	 * @return
	 * @throws BusinessException
	 */
	public int checkEmpCode(String code, String orgid) throws BusinessException {
		try {
			TOmEmployee temp = new TOmEmployeeImpl();
			temp.setEmpcode(code);
			if (orgid == null && orgid == "") {
				temp.setDataorgid(Integer.parseInt(Common
						.getCurrentUserDataOrgId()));
			} else {
				temp.setDataorgid(Integer.parseInt(orgid));
			}
			TOmEmployee[] ts = this.empDao.queryEntitiesByTemplate(
					TOmEmployee.class, temp);
			if (ts != null && ts.length > 0) {
				return 0;
			} else {
				return 1;
			}
		} catch (Exception e) {
			SrmLog.error("校验员工编号失败!", e);
			throw new BusinessException("校验员工编号失败!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 保存员工信息
	 * 
	 * @author 陈今伟
	 * @param emp
	 * @throws BusinessException
	 * @return void
	 */
	public void insertEmployee(TOmEmployee emp) throws BusinessException {
		emp.setDataorgid(emp.getMainorgid());
		// 插入员工数据
		try {
			emp.setCreateby(Common.getCurrentUserId());
			this.empDao.getPrimaryKey(emp);
			this.empDao.insertEntity(emp);
		} catch (Exception e) {
			SrmLog.error("新增员工信息失败!", e);
			throw new BusinessException("新增员工信息失败!", e.getMessage());
		}
		try {
			// 删除员工机构关系
			IDASCriteria entry = DASManager
					.createCriteria("com.zoomlion.hjsrm.data.org.Organization.TOmEmporg");
			entry.add(ExpressionHelper.eq("empid", emp.getEmpid()));
			this.emporgDao.deleteByCriteriaEntity(entry);
			// 插入员工机构关系
			String ids = emp.get("bizorgids").toString();
			String[] orgids = ids.split(",");
			for (int i = 0; i < orgids.length; i++) {
				TOmEmporg eg = new TOmEmporgImpl();
				eg.setEmpid(emp.getEmpid());
				eg.setOrgid(Integer.parseInt(orgids[i]));
				eg.setDataorgid(emp.getDataorgid());
				this.emporgDao.insertEntity(eg);
			}
		} catch (Exception e) {
			SrmLog.error("新增员工机构关系失败!", e);
			throw new BusinessException("新增员工机构关系失败!", e.getMessage());
		}

		if (emp.get("userid") != null && !emp.get("userid").equals("")) {
			String password = emp.get("password").toString();
			boolean flag = this.operatorBean.checkPassword(password);
			if (flag) {
				throw new BusinessException("此密码为禁用密码，请使用其他密码...",
						"此密码为禁用密码，请使用其他密码...");
			}
			try {
				TAcOperator operator = new TAcOperatorImpl();
				operator.setOperatorname(emp.getEmpname());
				operator.setEmpid(emp.getEmpid());
				operator.setUserid(emp.get("userid").toString());
				operator.setInvaldate(emp.getDate("invaldate"));
				if (password == null || password.equals("")) {
					operator.setPassword(Common.SRM_DEFAULT_PASS);
				} else {
					operator.setPassword(emp.get("password").toString());
				}
				this.operatorBean.addOperator(operator);
			} catch (Exception e) {
				SrmLog.error("新增操作员失败!", e);
				throw new BusinessException("新增操作员失败!", e.getMessage());
			}
		}

	}

	/**
	 * 方法描述:获取员工编号
	 * 
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException
	 * @return String
	 */
	public String getNewEmpCode() throws BusinessException {
		long code = SequenceGenerator.getNextSequence("TOmEmployee.Empid");
		return Common.padLeft(String.valueOf(code), 5, '0');
	}

	public EmployeeDao getEmpDao() {
		return empDao;
	}

	public void setEmpDao(EmployeeDao empDao) {
		this.empDao = empDao;
	}

	public EmpOrgDao getEmporgDao() {
		return emporgDao;
	}

	public void setEmporgDao(EmpOrgDao emporgDao) {
		this.emporgDao = emporgDao;
	}

	public OperatorBean getOperatorBean() {
		return operatorBean;
	}

	public void setOperatorBean(OperatorBean operatorBean) {
		this.operatorBean = operatorBean;
	}

	public OperresDao getOperresdao() {
		return operresdao;
	}

	public void setOperresdao(OperresDao operresdao) {
		this.operresdao = operresdao;
	}

}
