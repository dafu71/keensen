package com.zoomlion.hjsrm.frame.rights.orgauth;

import java.util.HashMap;
import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.RightsLog;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcAppresauth;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcAppresauthImpl;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现机构应用授权功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OrgAuthBean extends BaseBean {

	private OrgAuthDao orgAuthDao;

	/**
	 * 方法描述: 查询公司列表用于应用授权
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	public DataObject[] getAllCompanys() throws BusinessException {
		DataObject[] dos;
		try {
			dos = orgAuthDao.getAllCompanys(null);
		} catch (Exception e) {
			SrmLog.error("查询公司列表出错!", e);
			throw new BusinessException("查询公司列表出错!", e.getMessage());
		}
		return dos;
	}

	/**
	 * 方法描述: 查询资源授权树
	 * @author 陈今伟
	 * @param orgid
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getAppResAuth(String orgid,String parentid) throws BusinessException {
		if(orgid==null){
			return null;
		}
		Map condition = new HashMap();
		condition.put("orgid", orgid);
		condition.put("parentid", parentid);
		DataObject[] dos;
		try {
			dos = orgAuthDao.getAppResAuth(condition);
		} catch (Exception e) {
			SrmLog.error("查询资源授权树失败!", e);
			throw new BusinessException("查询资源授权树失败!", e.getMessage());
		}
		return dos;
	}

	/**
	 * 方法描述: 增加机构资源授权
	 * @author 陈今伟
	 * @param ids
	 * @param orgid
	 * @throws BusinessException 
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveAppResAuth(int[] ids, int orgid) throws BusinessException {
		Map condition = new HashMap();
		condition.put("orgid", orgid);
		try {
			orgAuthDao.delAppResAuth(condition);
			if (ids != null) {
				for (int i = 0; i < ids.length; i++) {
					TAcAppresauth appauth = new TAcAppresauthImpl();
					appauth.setResid(ids[i]);
					appauth.setDataorgid(0);
					appauth.setOrgid(orgid);
					this.orgAuthDao.insertEntity(appauth);
				}
			}
			RightsLog.writeFailedLog(6, "增加机构资源授权成功!");
		} catch (Exception e) {
			SrmLog.error("保存资源授权树出错!", e);
			RightsLog.writeFailedLog(6, "删除机构资源授权失败!", e);
			throw new BusinessException("保存资源授权树出错!", e.getMessage());
		}
	}

	public OrgAuthDao getOrgAuthDao() {
		return orgAuthDao;
	}

	public void setOrgAuthDao(OrgAuthDao orgAuthDao) {
		this.orgAuthDao = orgAuthDao;
	}
}
