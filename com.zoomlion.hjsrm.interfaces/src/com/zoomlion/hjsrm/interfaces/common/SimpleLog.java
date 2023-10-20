package com.zoomlion.hjsrm.interfaces.common;

import java.util.Date;

import com.eos.spring.BeanFactory;
import com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog;
import com.zoomlion.hjsrm.interfaces.logs.InterfaceLogInfo;
import com.zoomlion.hjsrm.interfaces.logs.TJkInterfacelogBean;

/**
 * 简单接口日志类实现
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
public class SimpleLog implements Log {

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#end(com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog)
	 */
	public void end(TJkInterfacelog tJkInterfacelog) {
		TJkInterfacelogBean tJkInterfacelogBean = getBean();
		try {
			tJkInterfacelog.setEndtime(new Date());
			tJkInterfacelogBean.save(tJkInterfacelog);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#start(com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog)
	 */
	public TJkInterfacelog start(TJkInterfacelog tJkInterfacelog) {
		TJkInterfacelogBean tJkInterfacelogBean = getBean();
		try {
			if(tJkInterfacelog.getTargetsystem()==null){
				tJkInterfacelog.setTargetsystem(Log.CURRENTSYSTEM);
			}
			tJkInterfacelog.setStarttime(new Date());
			tJkInterfacelogBean.add(tJkInterfacelog);
			return tJkInterfacelog;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return tJkInterfacelog;
	}

	/**
	 * @return 返回Spring的TJkInterfacelogBean
	 */
	private TJkInterfacelogBean getBean() {
		BeanFactory beanFactory = BeanFactory.newInstance();
		TJkInterfacelogBean tJkInterfacelogBean = beanFactory
				.getBean("logBean");
		return tJkInterfacelogBean;

	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#getNewInstance()
	 */
	public TJkInterfacelog getNewInstance() {
		return InterfaceLogInfo.getInterfacelog();
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#end(java.lang.String,
	 *      java.lang.String)
	 */
	public void end(String pkid, String msg) {
		TJkInterfacelog tJkInterfacelog = getNewInstance();
		tJkInterfacelog.setPkid(pkid);
		tJkInterfacelog.setMsg(msg);
		end(tJkInterfacelog);
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#start(java.lang.String)
	 */
	public String start(String param) {
		TJkInterfacelog tJkInterfacelog = getNewInstance();
		tJkInterfacelog.setParam(param);
		StackTraceElement st = getThrowable();
		if (st != null) {
			// 根据堆栈 自动写入 类名方法名
			if(tJkInterfacelog.getSource()==null){
				tJkInterfacelog.setSource(st.toString());
			}
			if(tJkInterfacelog.getMethodname()==null){
				tJkInterfacelog.setMethodname(st.getMethodName());
			}
			if(tJkInterfacelog.getClassname()==null){
				tJkInterfacelog.setClassname(st.getClassName());
			}
		}
		return start(tJkInterfacelog).getPkid();
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#error(java.lang.String)
	 */
	public void error(String pkid) {
		error(pkid, null);
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#error(java.lang.String,
	 *      java.lang.String, java.lang.String)
	 */
	public void error(String pkid, String msg) {
		TJkInterfacelog tJkInterfacelog = getNewInstance();
		tJkInterfacelog.setPkid(pkid);
		if (msg != null)
			tJkInterfacelog.setMsg(msg);
		tJkInterfacelog.setRemark(Log.ERROR);
		end(tJkInterfacelog);
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.zoomlion.hjsrm.interfaces.common.Log#getThrowable()
	 */
	public StackTraceElement getThrowable() {
		Throwable t = new Throwable();
		StackTraceElement[] tt = t.getStackTrace();
		if (tt == null || tt.length < 2) {
			return null;
		}
		StackTraceElement st = tt[2];
		return st;
	}

}
