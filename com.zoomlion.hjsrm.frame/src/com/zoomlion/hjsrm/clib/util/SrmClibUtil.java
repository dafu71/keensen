package com.zoomlion.hjsrm.clib.util;

import java.sql.Connection;
import java.util.HashMap;

import com.eos.foundation.database.DatabaseExt;
import com.eos.foundation.eoscommon.LogUtil;

/**
 * **************************************************
 * 描    述：  Srm系统组件库的通用工具类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmClibUtil {

	/**
	 * 方法描述: 通过表名+字段名来校验某个列值在表里的数据是否唯一
	 * @author bingyu
	 * @param table
	 * @param column
	 * @param value
	 * @param valueType
	 * @return
	 * @throws Exception
	 * @return int
	 */
	@SuppressWarnings("unchecked")
	public static int validateUnique(String table, String column, String value, int valueType) throws Exception {
		int ret = 0;
		HashMap map = new HashMap();
		map.put("table", table);
		map.put("column", column);
		// Up 2012/09/24 bingyu
		map.put("value", value);
		try {
			ret = DatabaseExt.countByNamedSql("default","com.zoomlion.hjsrm.clib.util.util.countCnt", map);
		} catch (Exception e) {
			SrmLog.error("加载资源列表出错:", e);
			throw e;
		}
		return ret;
	}

	/**
	 * 方法描述: 关闭连接
	 * @author bingyu
	 * @param conn 
	 * @return void
	 */
	public static void closeConnection(Connection conn) {
		try {
			if ((conn != null) && (!conn.isClosed()))
				conn.close();
		} catch (Throwable e) {
			LogUtil.logI18NWarn("*SrmClibUtil*CloseConnection", e, new Object[0]);
		}
	}
}
