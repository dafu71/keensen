package com.zoomlion.hjsrm.frame.tools.shortcut;

import java.util.HashMap;
import java.util.Map;

import com.eos.data.datacontext.UserObject;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOpershortcut;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource;
/**
 * **************************************************
 * 描    述：  实现操作员快捷方式管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class OperShortCutBean extends BaseBean {
	private OperShortCutDao shortDao;

	/**
	 * 方法描述: 查询当前登录操作员对应的快捷方式菜单
	 * @author 陈今伟
	 * @param userObject
	 * @return
	 * @throws BusinessException 
	 * @return TAcResource[]
	 */
	@SuppressWarnings("unchecked")
	public TAcResource[] queryShortCutByOpeator(UserObject userObject)throws BusinessException {

		Map param = new HashMap();
		Map<String, Object> maps = userObject.getAttributes();
		if (maps.containsKey("operatorid")) {
			Long operatorid = (Long) maps.get("operatorid");
			if (operatorid != null) {
				param.put("operatorid", operatorid.toString());
				try {
					return shortDao.queryShortCutByOperator(param);
				} catch (Exception e) {
					SrmLog.error("加载快捷菜单异常！", e);
					throw new BusinessException("加载快捷菜单异常！", e.getMessage());
				}
			}
		}
		

		return null;
	}

	/**
	 * 方法描述: 新增操作员快捷方式
	 * 
	 * @author 陈今伟
	 * @param shortcut
	 * @param userObject
	 * @return
	 * @throws BusinessException
	 * @return int
	 */
	public int addShortCut(TAcOpershortcut shortcut, UserObject userObject)throws BusinessException {
		Map<String, Object> maps = userObject.getAttributes();
		if (maps.containsKey("operatorid")) {
			Long operatorid = (Long) maps.get("operatorid");
			if (operatorid != null && shortcut.getResid() != 0) {// 操作员菜单ID不能为空
				shortcut.setOperatorid(operatorid);
				TAcOpershortcut[] ss = this.shortDao.queryEntitiesByTemplate(TAcOpershortcut.class, shortcut);
				if (ss.length != 0) {
					return ss.length;
				}
				try {
					this.shortDao.insertEntity(shortcut);

				} catch (Exception e) {
					SrmLog.error("设置快捷菜单异常！", e);
					throw new BusinessException("设置快捷菜单异常！", e.getMessage());
				}
			}
		}
		return 0;
	}

	/**
	 * 方法描述: 删除操作员快捷方式
	 * @author 陈今伟
	 * @param template
	 * @return
	 * @throws BusinessException 
	 * @return int
	 */
	public int deleteShortCutByTemplate(TAcOpershortcut template)throws BusinessException {
		try {
			return this.shortDao.deleteByTemplate(template);
		} catch (Exception e) {
			SrmLog.error("删除快捷菜单异常！", e);
			throw new BusinessException("删除快捷菜单异常！", e.getMessage());
		}
	}

	public void setShortDao(OperShortCutDao shortDao) {
		this.shortDao = shortDao;
	}
}
