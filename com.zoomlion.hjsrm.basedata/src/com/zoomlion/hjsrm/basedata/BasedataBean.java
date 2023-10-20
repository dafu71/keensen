package com.zoomlion.hjsrm.basedata;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

public class BasedataBean extends BaseBean {

	private BasedataDao basedataDao;
	/**
	 * 方法描述:物料基础数据查询
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryMarabase(DataObject query,
			PageCond pageCond) throws BusinessException {
		try {
			Map condition = new HashMap();
				if (query.getString("werks") != null
						&& !query.getString("werks").equals("")) {
					condition.put("werks", query.getString("werks"));
				}
				if (query.getString("matnr") != null
						&& !query.getString("matnr").equals("")) {
					condition.put("matnr", query.getString("matnr"));
				}
				if (query.getString("maktx") != null
						&& !query.getString("maktx").equals("")) {
					condition.put("maktx", query.getString("maktx"));
				}		
			return basedataDao.queryMarabase(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("物料基础数据查询异常!", e);
			throw new BusinessException("物料基础数据查询异常!", e.getMessage());
		}
	}

	public BasedataDao getBasedataDao() {
		return basedataDao;
	}

	public void setBasedataDao(BasedataDao basedataDao) {
		this.basedataDao = basedataDao;
	}
}
