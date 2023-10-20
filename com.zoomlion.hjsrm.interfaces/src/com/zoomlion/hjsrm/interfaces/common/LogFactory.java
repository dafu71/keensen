package com.zoomlion.hjsrm.interfaces.common;

/**
 * 接口日志工厂
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
public class LogFactory {
	protected static Log log = null;

	/**
	 * @return 日志处理类
	 */
	public static Log getInstance() {
		if (log == null) {
			log = new SimpleLog();
		}
		return log;
	}
}