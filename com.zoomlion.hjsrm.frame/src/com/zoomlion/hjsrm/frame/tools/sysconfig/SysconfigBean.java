package com.zoomlion.hjsrm.frame.tools.sysconfig;

import java.util.List;

import com.eos.server.dict.DictEntry;
import com.eos.server.dict.DictManager;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.RightsLog;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmOrganizationImpl;
import com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig;
import com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfigvalue;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigImpl;
import com.zoomlion.hjsrm.frame.auth.loader.SysconfigCacheManager;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现系统参数配置功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-29 陈今伟 创建文件
 *      **************************************************
 */
public class SysconfigBean extends BaseBean {

	private SysconfigDao sysconfigDao;

	/**
	 * 方法描述: 查询系统参数配置
	 * @author 陈今伟
	 * @param query
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	public DataObject[] querySysconfigs(TOmSysconfig query)throws BusinessException {
		try {
			DataObject[] dos = this.sysconfigDao.querySysconfigs(query);
			TOmOrganization org = new TOmOrganizationImpl();
			org.setOrgid(Integer.parseInt(query.getString("dataorgid")));
			this.sysconfigDao.expandEntity(org);
			for (int i = 0; i < dos.length; i++) {
				if (dos[i].getString("dataorgid") == null) {
					dos[i].set("dataorgid", org.getOrgid());
					dos[i].set("dataorgname", org.getOrgname());
				}
			}
			return dos;
		} catch (Exception e) {
			SrmLog.error("查询配置信息异常!", e);
			throw new BusinessException("查询配置信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 加载系统配置信息
	 * @author 陈今伟
	 * @param sv
	 * @return
	 * @throws BusinessException
	 * @return TOmSysconfigvalue
	 */
	public TOmSysconfigvalue loadSysconfigs(TOmSysconfigvalue sv) throws BusinessException {
		try {
			this.sysconfigDao.expandEntity(sv);
			TOmSysconfig s = new TOmSysconfigImpl();
			s.setParamid(sv.getParamid());
			this.sysconfigDao.expandEntity(s);
			if(s.getParamtype()!=null&&s.getParamtype().equals("dict")){
				//加载数据字典
				List<DictEntry> types = DictManager.getDictEntries(s.getParamconfig());
				StringBuffer sb =new StringBuffer("[");
				if(types!=null && types.size()>0){
					//迭代部分
					for (int i = 0; i < types.size(); i++) {
						DictEntry d = types.get(i);
						sb.append("{");
						sb.append(" DICTID : '" + d.getDictId() + "',");
						sb.append(" DICTNAME :  '" + d.getDictName() + "'");
						sb.append("}");
						if (types.size() != (i + 1)) {
							sb.append(",");
						}
					}
				}
				sb.append("]");
				sv.set("dicts", sb.toString());
			}
		} catch (Exception e) {
			SrmLog.error("加载系统配置信息异常!", e);
			throw new BusinessException("加载系统配置信息异常!", e.getMessage());
		}
		return sv;
	}
	
	/**
	 * 方法描述: 保存配置信息
	 * @author 陈今伟
	 * @param sv
	 * @param isFile
	 * @throws BusinessException 
	 * @return void
	 */
	public void saveSysconfigs(TOmSysconfigvalue sv, String isFile)throws BusinessException {
		try {
			if (isFile != null && isFile.equals("1")) {
				sv.setParamvalue("com.zoomlion.hjsrm.frame.bclib.file.FileShow.flow?fileid="+ sv.getParamvalue());
			}
			this.sysconfigDao.saveEntity(sv);
		} catch (Exception e) {
			SrmLog.error("保存配置信息异常!", e);
			throw new BusinessException("保存配置信息异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 更新系统配置信息
	 * @author 陈今伟
	 * @param entitys
	 * @throws BusinessException 
	 * @return void
	 */
	public void saveSysconfigs(TOmSysconfigvalue[] entitys)throws BusinessException {
		try {
			this.sysconfigDao.saveEntities(entitys);
			writeLog(entitys, true, null);
		} catch (Exception e) {
			SrmLog.error("更新配置信息异常!", e);
			writeLog(entitys, false, e);
			throw new BusinessException("更新配置信息失败!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 刷新系统配置缓存
	 * @author 陈今伟
	 * @throws BusinessException 
	 * @return void
	 */
	public void reloadSysconfigChache() throws BusinessException {
		try {
			SysconfigCacheManager.clearCache();
			RightsLog.writeSucceedLog(3, "刷新参数缓存成功");
		} catch (Exception e) {
			SrmLog.error("刷新系统配置缓存失败!", e);
			RightsLog.writeFailedLog(3, "刷新系统配置缓存失败", e);
			throw new BusinessException("刷新系统配置缓存失败!", e.getMessage());
		}
	}

	private void writeLog(TOmSysconfigvalue[] entitys, boolean issecc,
			Exception e) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < entitys.length; i++) {
			sb.append(entitys[i].getParamid() + ",");
		}
		if (issecc) {
			RightsLog.writeSucceedLog(3, "成功修改了参数：" + sb.toString());
		} else {
			RightsLog.writeFailedLog(3, "修改参数：" + sb.toString() + "失败", e);
		}
	}

	public SysconfigDao getSysconfigDao() {
		return sysconfigDao;
	}

	public void setSysconfigDao(SysconfigDao sysconfigDao) {
		this.sysconfigDao = sysconfigDao;
	}

}
