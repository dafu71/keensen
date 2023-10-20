package com.zoomlion.hjsrm.frame.tools.shortcut;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
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
public class OperShortCutDao extends BaseDao{
	
	/**
	 * 方法描述: 查询当前登录操作员对应的快捷方式菜单
	 * @author 陈今伟
	 * @param param
	 * @return
	 * @throws Exception 
	 * @return TAcResource[]
	 */
	public TAcResource[] queryShortCutByOperator(Map param) throws Exception{
		return queryByNamedSql(TAcResource.class, "com.zoomlion.hjsrm.frame.tools.shortcut.ns.queryShortCutByOperator", param);
	}
}
