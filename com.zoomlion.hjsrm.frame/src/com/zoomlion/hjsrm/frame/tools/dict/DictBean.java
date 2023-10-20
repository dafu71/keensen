package com.zoomlion.hjsrm.frame.tools.dict;

import java.util.HashMap;
import java.util.Map;

import com.eos.data.datacontext.IUserObject;
import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.RightsLog;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.tools.Tools.EosDictEntry;
import com.zoomlion.hjsrm.data.tools.Tools.EosDictType;
import com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl;
import com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictTypeImpl;
import com.zoomlion.hjsrm.frame.auth.loader.DictCacheManager;

import commonj.sdo.DataObject;

/*******************************************************************************
 * 
 * 版权所有： 中联重科环境产业公司
 * 
 * 描 述：实现字典维护功能
 * 
 * 创建日期： 2014-8-8
 * 
 * 补丁编号： G3_P_20140709_01_101
 * 
 * 作 者： 肖斌
 * 
 ******************************************************************************/

// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// G3_P_XXXXXXXX_XX_XX XX XXXXXXXX 集团
// =================================================================
public class DictBean extends BaseBean {

	private EosDictTypeDao eosDictTypeDao;

	private EosDictEntryDao eosDictEntryDao;

	public EosDictEntryDao getEosDictEntryDao() {
		return eosDictEntryDao;
	}

	public void setEosDictEntryDao(EosDictEntryDao eosDictEntryDao) {
		this.eosDictEntryDao = eosDictEntryDao;
	}

	public EosDictTypeDao getEosDictTypeDao() {
		return eosDictTypeDao;
	}

	public void setEosDictTypeDao(EosDictTypeDao eosDictTypeDao) {
		this.eosDictTypeDao = eosDictTypeDao;
	}

	/**
	 * 方法描述: 加载字典类型
	 * 
	 * @author 陈今伟
	 * @param query
	 * @return
	 * @throws BusinessException
	 * @return EosDictType
	 */
	public EosDictType queryEosDictType(EosDictType query)
			throws BusinessException {
		EosDictType edt = null;
		try {
			edt = this.eosDictTypeDao.queryEosDictType(query);
		} catch (Exception e) {
			SrmLog.error("加载字典类型异常!", e);
			throw new BusinessException("加载字典类型异常!", e.getMessage());
		}
		return edt;
	}

	/**
	 * 方法描述: 查询字典类型
	 * 
	 * @author 陈今伟
	 * @param query
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return EosDictType[]
	 */
	public EosDictType[] queryEosDictType(EosDictType query, PageCond pageCond)
			throws BusinessException {
		try {
			return this.eosDictTypeDao.queryEosDictType(query, pageCond);
		} catch (Exception e) {
			SrmLog.error("业务字典类型查询异常!", e);
			throw new BusinessException("业务字典类型查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存字典类型
	 * 
	 * @author 陈今伟
	 * @param eosdicttype
	 * @param opt
	 * @return
	 * @throws BusinessException
	 * @return EosDictType
	 */
	public EosDictType saveEosDictType(EosDictType eosdicttype, String opt)
			throws BusinessException {
		String dicttypeid = eosdicttype.getDicttypeid();
		String parentid = eosdicttype.getParentid();
		if (dicttypeid == null || dicttypeid.equals("")) {
			return null;
		}
		if (opt == null || opt == "") {// 新增操作
			if (parentid != null && !parentid.equals("")) {
				EosDictType edt = new EosDictTypeImpl();
				edt.setDicttypeid(parentid);
				EosDictType parenttype;
				try {
					parenttype = this.eosDictTypeDao.queryEosDictType(edt);
				} catch (Exception e) {
					SrmLog.error("查询父级业务字典查询异常!", e);
					throw new BusinessException("查询父级业务字典查询异常!", e.getMessage());
				}// 查询父类型
				if (parenttype != null) {
					eosdicttype.setRank(parenttype.getRank() + 1);
					eosdicttype.setSeqno(parenttype.getSeqno() + dicttypeid
							+ ".");
				}
			} else {
				eosdicttype.setRank(1);
				eosdicttype.setSeqno("." + dicttypeid + ".");
			}
			IUserObject user;
			try {
				user = Common.getCurrentUseObject();
			} catch (Exception e) {
				SrmLog.error("获得用户对象异常!", e);
				throw new BusinessException("查询父级业务字典查询异常!", e.getMessage());
			}
			String dataOrgID = (String) user.getAttributes().get("dataorgid");
			eosdicttype.setDataorgid(Integer.valueOf(dataOrgID));
			try {
				this.eosDictTypeDao.insertEntity(eosdicttype);
				RightsLog.writeSucceedLog(4, "新增数据字典类型【"
						+ eosdicttype.getDicttypename() + ":"
						+ eosdicttype.getDicttypeid() + "】成功");
			} catch (Exception e) {
				SrmLog.error("新增数据字典类型异常!", e);
				RightsLog.writeFailedLog(4, "新增数据字典类型【"
						+ eosdicttype.getDicttypename() + ":"
						+ eosdicttype.getDicttypeid() + "】失败", e);
				throw new BusinessException("新增数据字典类型异常!", e.getMessage());
			}

		} else {// 修改操作
			try {
				this.eosDictTypeDao.updateEosDictType(eosdicttype, opt);
				RightsLog.writeSucceedLog(4, "修改数据字典类型【"
						+ eosdicttype.getDicttypename() + ":"
						+ eosdicttype.getDicttypeid() + "】成功");
			} catch (Exception e) {
				SrmLog.error("修改数据字典类型异常!", e);
				RightsLog.writeFailedLog(4, "修改数据字典类型【"
						+ eosdicttype.getDicttypename() + ":"
						+ eosdicttype.getDicttypeid() + "】失败", e);
				throw new BusinessException("修改数据字典类型异常!", e.getMessage());
			}
		}
		// 查询实体
		EosDictType edt = new EosDictTypeImpl();
		edt.setDicttypeid(dicttypeid);
		try {
			edt = this.eosDictTypeDao.queryEosDictType(edt);
		} catch (Exception e) {
			SrmLog.error("查询数据字典类型异常!", e);
			throw new BusinessException("查询数据字典类型异常!", e.getMessage());
		}
		return edt;
	}

	/**
	 * 方法描述: 场景：删除字典类型 说明：如果是其它字典类型的父id，删除失败
	 * 
	 * @author 陈今伟
	 * @param dicttypes
	 * @throws BusinessException
	 * @return void
	 */
	public void deleteEosDictType(EosDictType[] dicttypes)
			throws BusinessException {
		String typenames = getDictTypeNames(dicttypes);
		for (int i = 0; i < dicttypes.length; i++) {
			// 删除字典类型数据
			try {
				EosDictEntry eosdictentry = new EosDictEntryImpl();
				eosdictentry.setDicttypeid(dicttypes[i].getDicttypeid());
				this.eosDictEntryDao.deleteByTemplate(eosdictentry);
			} catch (Exception e) {
				SrmLog.error("删除数据字典项异常!", e);
				RightsLog.writeFailedLog(4, "删除字典分类" + typenames + "失败", e);
				throw new BusinessException("删除数据字典项异常!", e.getMessage());
			}
			// 删除字典数据
			try {
				this.eosDictTypeDao.deleteEntity(dicttypes[i]);
			} catch (Exception e) {
				SrmLog.error("删除数据字典类型异常!", e);
				RightsLog.writeFailedLog(4, "删除字典分类" + typenames + "失败", e);
				throw new BusinessException("删除数据字典类型异常!", e.getMessage());
			}
		}
		RightsLog.writeSucceedLog(4, "删除字典分类" + typenames + "成功");
	}

	/**
	 * 方法描述: 查询字典项
	 * 
	 * @author 陈今伟
	 * @param dicttypeid
	 * @return
	 * @throws BusinessException
	 * @return EosDictEntry[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEosDictEntry(String dicttypeid)
			throws BusinessException {
		if (dicttypeid == null) {
			return null;
		}
		DataObject[] ret;
		Map condition = new HashMap();
		condition.put("dicttypeid", dicttypeid);
		try {
			String dataorgid = Common.getCurrentUserDataOrgId();
			if (!"0".equals(dataorgid)) {
				condition.put("dataorgid", dataorgid);
			}
			ret = this.eosDictEntryDao.queryEosDictEntry(condition);
		} catch (Exception e) {
			SrmLog.error("查询数据字典项异常!", e);
			throw new BusinessException("查询数据字典项异常!", e.getMessage());
		}
		// 循环设置dictid_old 字段
		for (DataObject temp : ret) {
			temp.setString("dictid_old", temp.getString("dictid"));
		}
		return ret;
	}

	/**
	 * 方法描述: 保存字典项
	 * 
	 * @author 陈今伟
	 * @param eosDictEntryes
	 * @param dicttypeid
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	public boolean saveEosDictEntrys(EosDictEntry[] eosDictEntryes,
			String dicttypeid) throws BusinessException {
		try {
			int dataorgid = Integer.parseInt(Common.getCurrentUserDataOrgId());
			for (EosDictEntry temp : eosDictEntryes) {
				if (temp.getString("dictid_old") == null
						|| temp.getString("dictid_old").equals("")) {
					temp.setFilter2(String.valueOf(dataorgid));
					temp.setDataorgid(dataorgid);
					eosDictEntryDao.saveEntity(temp);
				} else {
					// update
					temp.setFilter2(String.valueOf(temp.getDataorgid()));
					EosDictEntry qry = EosDictEntry.FACTORY.create();
					qry.setDicttypeid(temp.getDicttypeid());
					qry.setDictid(temp.getString("dictid_old"));
					qry.setDataorgid(temp.getDataorgid());// heqj
					// 添加数据归属查询条件定位修改的记录。
					eosDictEntryDao.updateEntityByTemplate(temp, qry);
				}
			}
		} catch (Exception e) {
			SrmLog.error("保存字典项失败！", e);
			throw new BusinessException("保存字典项失败！", e.getMessage());
		}
		// 如果为空 则认为是新增
		return true;
	}

	/**
	 * 方法描述: 删除字典数据项
	 * 
	 * @author 陈今伟
	 * @param eosdictentrys
	 * @throws BusinessException
	 * @return void
	 */
	public void deleteEosDictEntry(EosDictEntry[] eosdictentrys)
			throws BusinessException {
		String ensnames = getDictEntsNames(eosdictentrys);
		try {
			this.eosDictEntryDao.deleteEntityBatch(eosdictentrys);
			RightsLog.writeSucceedLog(4, "删除字典项" + ensnames + "成功");
		} catch (Exception e) {
			SrmLog.error("删除业务字典项失败！", e);
			RightsLog.writeFailedLog(4, "删除字典项" + ensnames + "成功", e);
			throw new BusinessException("删除业务字典项失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 清除缓存记录 下次再读时 会自动加载
	 * 
	 * @author 陈今伟
	 * @throws BusinessException
	 * @return void
	 */
	public void clearDictCache() throws BusinessException {
		try {
			DictCacheManager.clearCache();
			RightsLog.writeSucceedLog(4, "刷新字典缓存成功");
		} catch (Exception e) {
			SrmLog.error("更新缓存失败！", e);
			RightsLog.writeFailedLog(4, "刷新字典缓存失败", e);
			throw new BusinessException("更新缓存失败！", e.getMessage());
		}
	}

	private String getDictTypeNames(EosDictType[] eosdicttype) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < eosdicttype.length; i++) {
			sb.append("【" + eosdicttype[i].getDicttypename() + ":"
					+ eosdicttype[i].getDicttypeid() + "】,");
		}
		return sb.toString();
	}

	private String getDictEntsNames(EosDictEntry[] eosdictentry) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < eosdictentry.length; i++) {
			sb.append("【" + eosdictentry[i].getDictid() + ":"
					+ eosdictentry[i].getDictname() + "】,");
		}
		return sb.toString();
	}
}
