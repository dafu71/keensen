package com.zoomlion.hjsrm.clib.util;

/**
 * **************************************************
 * 描    述：  Srm系统组件库的通用bean类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmClibUtilBean {
	
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
	public static int validateUnique(String table, String column, String value, int valueType) throws Exception{
		return SrmClibUtil.validateUnique(table, column, value, valueType);
	}
}
