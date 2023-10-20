package com.zoomlion.hjsrm.pub.businessclib.busi.common;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusirule;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusistepdefine;
import com.zoomlion.hjsrm.pub.busi.Business.TBsParticipantrule;
import com.zoomlion.hjsrm.pub.busi.Business.TBsProcessdefine;
import commonj.sdo.DataObject;

/**
 * <pre>
 * Title: 业务流程定义Dao
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

public class BusiBpsDefineDao extends BaseDao {
	
	/**
	 * 方法描述:	根据业务类型判断是否存在单独的流程定义配置
	 * @author 陈今伟
	 * @param condition
	 * @return 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getBpsDefineCountByBusiType(Map condition) {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getBpsDefineCountByBusiType", condition);
	}
	
	/**
	 * 方法描述:	根据业务类型获取对应的流程定义信息
	 * @author 陈今伟
	 * @param condition
	 * @return 描述******
	 * @return TBsProcessdefine[]
	 */
	public TBsProcessdefine[] getBpsDefineByBusiType(Map condition) {
		return queryByNamedSql(TBsProcessdefine.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getBpsDefineByBusiType", condition);
	}
	
	/**
	 * 方法描述:	根据业务环节定义ID判断是否存在单独的环节配置
	 * @author 陈今伟
	 * @param condition
	 * @return 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getActivityConfigCountByBusiType(Map condition) {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getActivityConfigCountByBusiType", condition);
	}
	
	/**
	 * 方法描述:	根据业务环节定义ID获取业务环节定义信息
	 * @author 陈今伟
	 * @param condition
	 * @return 描述******
	 * @return DataObject[]
	 */
	public TBsBusistepdefine[] getActivityConfigByBusiType(Map condition) {
		return queryByNamedSql(TBsBusistepdefine.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getActivityConfigByBusiType", condition);
	}
	
	/**
	 * 方法描述:	根据业务类型、业务环节定义Id获取页面资源配置信息
	 * @author 陈今伟
	 * @param condition
	 * @return 描述******
	 * @return DataObject[]
	 */
	public DataObject[] getActivityTabsBusiType(Map condition) {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getActivityTabsBusiType", condition);
	}
	
	/**
	 * 方法描述:	根据业务环节定义ID获取业务规则配置
	 * @author 陈今伟
	 * @param condition
	 * @return 描述******
	 * @return TBsBusirule[]
	 */
	public TBsBusirule[] getBusinessRuleByBusiType(Map condition) {
		return queryByNamedSql(TBsBusirule.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getBusinessRuleByBusiType", condition);
	}
	
	/**
	 * 方法描述:	根据业务流程定义主键、活动定义Id获取业务环节配置的参与者规则
	 * @author 陈今伟
	 * @param condition
	 * @return 描述****** 
	 * @return DataObject[]
	 */
	public TBsParticipantrule[] getParticipantRuleByBusiType(Map condition) {
		return queryByNamedSql(TBsParticipantrule.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getParticipantRuleByBusiType", condition);
	}
	
	/**
	 * 
	 * 方法描述：获取业务工单结束信息： 结束部门 结束操作员
	 *
	 * @param condition
	 * @return
	 * @author 曹桢
	 * @time:2013-9-13 下午12:04:24
	 */
	public DataObject[] getBpsFinishInfo(Map condition) {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getBpsFinishInfo", condition);
	}
	
	/**
	 * 
	 * 方法描述：获取流程实例当前环节的参与者userid
	 *
	 * @param condition
	 * @return
	 * @author 何源
	 * @time:2013-9-13 下午12:04:24
	 */
	public DataObject[] getParticipantUsersForActivityInst(Map condition) {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.pub.businessclib.busi.common.bpsdefine.getParticipantUsersForActivityInst", condition);
	}
}
