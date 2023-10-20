package com.zoomlion.hjsrm.db;

import com.eos.foundation.database.DatabaseExt;

public class DataBaseUx {
	
	/**
	 * 默认数据源名
	 */
	public static final String DEFAULT_DATASOURCE = "default";
	
	/**
	 * 方法描述: 使用命名SQL 返回指定类型的数组
	 * @author bingyu
	 * @param <T>
	 * @param componentType
	 * @param nsSql
	 * @param pam
	 * @return 
	 * @return T[]
	 */
	public static  <T> T[] queryByNamedSql(Class<T> componentType,String nsSql,Object pam){
		Object [] dataObjects = DatabaseExt.queryByNamedSql(DEFAULT_DATASOURCE, nsSql, pam);
		return DataUtil.castArray(componentType, dataObjects);
	}
}
