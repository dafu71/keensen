package com.zoomlion.hjsrm.interfaces.common;

import com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog;
/**
 * 接口日志接口
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
public interface Log {
	
	String CURRENTSYSTEM = "TCIS3.0";
	String ERROR = "ERROR";

	/**
	 * 记录事务开始日志
	 * @param tJkInterfacelog 日志实体
	 * @return 日志实体
	 */
	TJkInterfacelog start(TJkInterfacelog tJkInterfacelog);

	/**
	 * 记录事务结束日志，需要维护开始日志的pkid一致性
	 * @param tJkInterfacelog
	 */
	void end(TJkInterfacelog tJkInterfacelog);

	/**
	 * 只记录参数，自动填充代码调用位置；
	 * @param param 参数内容
	 * @return 返回pkid
	 */
	String start(String param);

	/**
	 * 只记录返回结果，需要传入pkid
	 * @param pkid 主键
	 * @param msg 结果
	 */
	void end(String pkid, String msg);
	
	/**
	 * 记录一条新的错误日志，传入调用参数
	 * @param pkid 调用参数
	 */
	void error(String pkid);
	
	/**
	 *  根据PKID信息记录错误日志，传入pkid，调用参数和返回结果
	 * @param pkid 主键
	 * @param msg 返回结果
	 */
	void error(String pkid, String msg);

	/**
	 * 获得一个新的日志实体
	 * @return 日志实体
	 */
	TJkInterfacelog getNewInstance();
	
	/**
	 * @return 调用行代码的堆栈信息
	 */
	StackTraceElement getThrowable();

}
