package com.zoomlion.hjsrm.pub.busi.common;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.org.Organization.VOmEmpoperroleorg;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.VAcOperatorTrs;
import commonj.sdo.DataObject;

/**
 * 方法描述: 查询工厂
 * 
 * @author Administrator
 * 
 */
public class SrmCommonDao extends BaseDao {
	/**
	 * 方法描述: 查询工厂
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryBaseFactory(Map paramObj) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseFactory",
						paramObj);
	}

	/**
	 * 方法描述: 查询公司
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryBaseCompany(Map paramObj) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseCompany",
						paramObj);
	}

	public DataObject[] queryBaseEkorg(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseEkorg",
				paramObj);
	}

	public DataObject[] queryBaseEkgrp(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryBaseEkgrp",
				paramObj);
	}
	public DataObject[] querylbjjjy(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryLbjjjy",
				paramObj);
	}
	/**
	 * 方法描述: 根据角色和机构查询参与者
	 * 
	 * @author 许斯渊
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 * @return VOmEmpoperroleorg[]
	 */
	public DataObject[] queryParticipantsByRoleAndOrg3(Map conditon)
			throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByRoleAndOrg3",
						conditon);
	}

	public DataObject[] queryParticipantsByRoleAndOrg2(Map conditon) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByRoleAndOrg2",
						 conditon);
	}

	/**
	 * 方法描述: 根据机构查询参与者
	 * 
	 * @author 许斯渊
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 * @return VOmEmpoperroleorg[]
	 */
	public VOmEmpoperroleorg[] queryParticipantsByOrg(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						VOmEmpoperroleorg.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByOrg",
						pagecond, conditon);
	}

	/**
	 * 方法描述: 查询版本号
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryZvern(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryZvern",
				paramObj);
	}

	/**
	 * 方法描述: 根据角色和机构查询参与者
	 * 
	 * @author 许斯渊
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 * @return VOmEmpoperroleorg[]
	 */
	public VOmEmpoperroleorg[] queryParticipantsByRoleAndOrg(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						VOmEmpoperroleorg.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByRoleAndOrg",
						pagecond, conditon);
	}

	/**
	 * 方法描述: 根据查询参与者
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public VOmEmpoperroleorg[] queryParticipantsByRole(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						VOmEmpoperroleorg.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByRole",
						pagecond, conditon);
	}
	/**
	 * 方法描述: 根据车型名称
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querycxmc(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.querycxmcCombo",
						pagecond, conditon);
	}
	/**
	 * 方法描述: 查询车型名称和车型代码
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querydjqd(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.querydjqdCombo",
						pagecond, conditon);
	}
	/**
	 * 方法描述: 查询物料编码（查一个少一个）
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querymatnr(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.querymatnrCombo",
						pagecond, conditon);
	}
	/**
	 * 方法描述: 查询物料编码（全部）
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querymatnrall(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.querymatnrallCombo",
						pagecond, conditon);
	}
	/**
	 * 方法描述: 查询供应商代码（全部）
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querylifnrall(Map conditon,
			PageCond pagecond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.querylifnrallCombo",
						pagecond, conditon);
	}
	/**
	 * 方法描述: 查询产品类型
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querycplxcombo(Map conditon
			) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.querycplxcombo",
						 conditon);
	}
	/**
	 * 方法描述: 查询机构ID和名称
	 * 
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryEmpnewCombo(Map conditon) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryEmpnewCombo",
						 conditon);
	}
	
	/**
	 * 方法描述: 查询产品树
	 * 
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryProductTree(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryProductTree",
				condition);

	}
	
	/**
	 * 方法描述: 查询产品树物料
	 * 
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryProductTree2(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryProductTree2",
				condition);

	}
	
	/**
	 * 方法描述: 查询产品树物料
	 * 
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryProductTree3(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryProductTree3",
				condition);

	}
	
	/**
	 * 方法描述:查询车型代号
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryProductNo(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryProductNo",
				paramObj);
	}
	
	/**
	 * 方法描述: 产品树根节点
	 * 
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryProductTree4(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryProductTree4",
				condition);

	}
}

