package com.zoomlion.hjsrm.clib.util;
/**
 * **************************************************
 * 描    述：  系统常量信息
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class SystemInfo {

	/**
	 * 换行符
	 */
	public static String LINE_SEPARATOR = System.getProperty("line.separator","\r\n");
	
	/**
	 * 文件分隔符
	 */
	public static String FILE_SEPARATOR = System.getProperty("file.separator");
	
	/**
	 * 路径分隔符
	 */
	public static String PATH_SEPARATOR = System.getProperty("path.separator");
	
}