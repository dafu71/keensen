package com.zoomlion.hjsrm.frame.tools.dict;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
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
public class EosDictEntryDao extends BaseDao {

	/**
	 * 方法描述: 查询字典项
	 * 
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	public DataObject[] queryEosDictEntry(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.frame.tools.dict.dict.queryEosDictEntry",
				condition);
	}
}
