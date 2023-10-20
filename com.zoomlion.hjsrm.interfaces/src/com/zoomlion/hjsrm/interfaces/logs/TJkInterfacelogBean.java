/**
 * 
 */
package com.zoomlion.hjsrm.interfaces.logs;

import java.net.InetAddress;
import java.net.UnknownHostException;

import com.eos.data.datacontext.IUserObject;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog;
import com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl;

/**
 * <pre>
 *               Title: 接口日志处理类
 *               Description: 处理相关数据业务
 * </pre>
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
public class TJkInterfacelogBean extends BaseBean {

	private TJkInterfacelogDao tJkInterfacelogDao;

	public void setTjkInterfacelogDao(TJkInterfacelogDao jkInterfacelogDao) {
		tJkInterfacelogDao = jkInterfacelogDao;
	}

	/**
	 * 
	 */
	public TJkInterfacelogBean() {
	}

	/**
	 * 新增方法
	 * 
	 * @param tJkPrinttemplates
	 * @throws Exception
	 */
	public void add(TJkInterfacelog tJkPrinttemplate) throws Exception {
		try {
			tJkPrinttemplate.setPkid(Common.getBusinessNo("JK"));
			IUserObject userObject = Common.getCurrentUseObject();
			tJkPrinttemplate.setCreateby(userObject.getUserName());
			tJkPrinttemplate.setCreatetime(Common.getCurrentTime());
			if (tJkPrinttemplate.getIp() == null
					|| tJkPrinttemplate.getIp().length() == 0)
				tJkPrinttemplate.setIp(getIP());
			tJkInterfacelogDao.insertEntity(tJkPrinttemplate);
		} catch (Exception e) {
			SrmLog.error("新增日志信息失败！", e);
			throw new BusinessException("新增日志模板信息失败！", e.getMessage());
		}
	}

	/**
	 * 保存方法
	 * 
	 * @param tJkPrinttemplate
	 * @throws Exception
	 */
	public void save(TJkInterfacelog tJkPrinttemplate) throws Exception {
		if (tJkPrinttemplate.getPkid() == null
				|| tJkPrinttemplate.getPkid().length() == 0) {
			return;
		}
		//获得开始时间,计算结束时间的差为运行时间
		TJkInterfacelog log = new TJkInterfacelogImpl();
		log.setPkid(tJkPrinttemplate.getPkid());
		tJkInterfacelogDao.expandEntity(log);//
		if (log.getStarttime() != null) {
			//自动添加运行时间
			long runtime = tJkPrinttemplate.getEndtime().getTime()
					- log.getStarttime().getTime();
			tJkPrinttemplate.setRuntime(runtime);
		}
		
		IUserObject userObject = Common.getCurrentUseObject();
		tJkPrinttemplate.setModifyby(userObject.getUserName());
		tJkPrinttemplate.setUpdatetime(Common.getCurrentTime());
		if (tJkPrinttemplate.getIp() == null
				|| tJkPrinttemplate.getIp().length() == 0)
			tJkPrinttemplate.setIp(getIP());
		
		try {
			tJkInterfacelogDao.saveEntity(tJkPrinttemplate);
		} catch (Exception e) {
			SrmLog.error("更新日志信息失败！", e);
			throw new BusinessException("更新日志信息失败！", e.getMessage());
		}
	}

	/**
	 * 获得本机IP
	 * 
	 * @return
	 */
	public String getIP() {
		try {
			InetAddress addr;
			addr = InetAddress.getLocalHost();
			String ip = addr.getHostAddress().toString();// 获得本机IP
			return ip;
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 获得本机主机名
	 * 
	 * @return
	 */
	public String getHostName() {
		try {
			InetAddress addr;
			addr = InetAddress.getLocalHost();
			String address = addr.getHostName().toString();// 获得本机名称
			return address;
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return null;
	}

}
