package com.zoomlion.hjsrm.frame.workflows.service;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

/**
 * <pre>
 * Title: SRM.0--BPS组织机构实现类
 * Description: 程序功能的描述
 * </pre>
 * @author   陈今伟
 * @version   1.0    
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 *
 */

public class SrmOMServiceDao extends BaseDao {
	
	/**
	 * 方法描述:	单个机构参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] findParticipantByOrg(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.findParticipantByOrg", condition);
	}
	
	/**
	 * 方法描述:	单个角色参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] findParticipantByRole(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.findParticipantByRole", condition);
	}
	
	/**
	 * 方法描述:	单个个人参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] findParticipantByPerson(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.findParticipantByPerson", condition);
	}
	
	/**
	 * 方法描述:	机构根参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] findOrgRootParticipants(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.findOrgRootParticipants", condition);
	}
	
	/**
	 * 方法描述:	角色根参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] findRoleRootParticipants(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.findRoleRootParticipants", condition);
	}
	
	/**
	 * 方法描述:	机构所有下级参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getAllChildParticipantsByOrg(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getAllChildParticipantsByOrg", condition);
	}
	
	/**
	 * 方法描述:	角色所有下级参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getAllChildParticipantsByRole(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getAllChildParticipantsByRole", condition);
	}
	
	/**
	 * 方法描述:	机构所有上级参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getAllParentParticipantsByOrg(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getAllParentParticipantsByOrg", condition);
	}
	
	/**
	 * 方法描述:	人员所有上级参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getAllParentParticipantsByPerson(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getAllParentParticipantsByPerson", condition);
	}
	
	/**
	 * 方法描述:	机构下所有子机构参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getOrgChildParticipantsByOrg(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getOrgChildParticipantsByOrg", condition);
	}
	
	/**
	 * 方法描述:	机构下所有人员参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getPersonChildParticipantsByOrg(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getPersonChildParticipantsByOrg", condition);
	}
	
	/**
	 * 方法描述:	角色下所有人员参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getPersonChildParticipantsByRole(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getPersonChildParticipantsByRole", condition);
	}
	
	/**
	 * 方法描述:	机构父机构参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getOrgParentParticipantsByOrg(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getOrgParentParticipantsByOrg", condition);
	}
	
	/**
	 * 方法描述:	人员父机构参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getOrgParentParticipantsByPerson(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getOrgParentParticipantsByPerson", condition);
	}
	
	/**
	 * 方法描述:	人员父角色参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getRoleParentParticipantsByPerson(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getRoleParentParticipantsByPerson", condition);
	}
	
	/**
	 * 方法描述:	角色机构交集参与者查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getJointChildParticipant(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getJointChildParticipant", condition);
	}
	
	/**
	 * 方法描述:	人员的机构参与者范围查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getOrgParticipantScopeByPerson(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getOrgParticipantScopeByPerson", condition);
	}
	
	/**
	 * 方法描述:	人员的角色参与者范围查询
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getRoleParticipantScopeByPerson(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getRoleParticipantScopeByPerson", condition);
	}
	
	/**
	 * 方法描述:	获取机构类型的所有参与者
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getAllParticipantsByOrg(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getAllParticipantsByOrg", condition);
	}
	
	/**
	 * 方法描述:	获取角色类型的所有参与者
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getAllParticipantsByRole(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getAllParticipantsByRole", condition);
	}
	
	/**
	 * 方法描述:	获取人员类型的所有参与者
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getAllParticipantsByPerson(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.workflows.service.srmomservice.getAllParticipantsByPerson", condition);
	}
}
