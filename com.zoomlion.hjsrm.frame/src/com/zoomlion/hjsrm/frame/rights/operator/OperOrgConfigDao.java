package com.zoomlion.hjsrm.frame.rights.operator;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOptorgcfg;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOptorgcfgImpl;

/**
 * **************************************************
 * 描    述：  实现操作员机构查询配置功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OperOrgConfigDao extends BaseDao{
	
	/**
	 * 方法描述: 删除操作员机构查询配置信息
	 * @author 陈今伟
	 * @param operatorid
	 * @throws Exception 
	 * @return void
	 */
	public void deleteOperatorOrgConfig(long operatorid)throws Exception{
		TAcOptorgcfg template = new TAcOptorgcfgImpl();
		template.setOperatorid(operatorid);
		this.deleteByTemplate(template);
	}
	
	/**
	 * 方法描述: 保存操作员的机构查询配置
	 * @author 陈今伟
	 * @param tacoptorgcfgs
	 * @throws Exception 
	 * @return void
	 */
	public void saveOperatorOrgConfig(TAcOptorgcfg[] tacoptorgcfgs)throws Exception{
		this.saveEntities(tacoptorgcfgs);
	}
	
	/**
	 * 方法描述: 加载操作员机构查询配置信息
	 * @author 陈今伟
	 * @param operatorid
	 * @return
	 * @throws Exception 
	 * @return TAcOptorgcfg[]
	 */
	public TAcOptorgcfg[] loadOperatorOrgConfig(long operatorid)throws Exception{
		TAcOptorgcfg template = new TAcOptorgcfgImpl();
		template.setOperatorid(operatorid);
		return this.queryEntitiesByTemplate(TAcOptorgcfg.class, template);
	}

}
