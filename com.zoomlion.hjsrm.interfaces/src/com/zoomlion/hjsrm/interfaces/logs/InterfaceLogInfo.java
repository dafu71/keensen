package com.zoomlion.hjsrm.interfaces.logs;

import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.ISessionMap;
import com.primeton.ext.common.muo.MUODataContextHelper;
import com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog;
import com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl;
/**
 * <pre>
 * Title: 接口日志工具类
 * Description: 提供统一的接口日志事例，以session为准
 * </pre>
 * @author   Chenmin
 * @version   1.0    
 * 
 */
 /*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 *
 */
public class InterfaceLogInfo {

	private static final String TJK_INTERFACELOG = "TJkInterfacelog";

	/**
	 * 方法描述: 获得session里的日志实例
	 * @author Chenmin
	 * @return 日志实例
	 * @return TJkInterfacelog
	*/
	public static TJkInterfacelog getInterfacelog() {
		try {
			ISessionMap muo = DataContextManager.current().getSessionCtx();
			if (muo == null) {
				muo = MUODataContextHelper.getMapContextFactory().getSessionMap();
			}
			if (muo.get(TJK_INTERFACELOG) == null) {
				return createInterfacelog();
			}
			return (TJkInterfacelog) muo.get(TJK_INTERFACELOG);
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法描述:私有
	 * @author Chenmin
	 * @return 初始化实例
	 * @return TJkInterfacelog
	*/
	@SuppressWarnings("unchecked")
	private static TJkInterfacelog createInterfacelog() {
		ISessionMap muo = DataContextManager.current().getSessionCtx();
		if (muo == null) {
			muo = MUODataContextHelper.getMapContextFactory().getSessionMap();
		}
		TJkInterfacelog log = new TJkInterfacelogImpl();
		muo.put(TJK_INTERFACELOG, log);
		return log;
	}

	public static void main(String[] args) {
		test();
	}

	private static void test() {
		Throwable t = new Throwable();
		String s = Throwable2String(t);
		System.out.println(s);
	}

	/**
	 * 方法描述:返回Throwable的详细信息
	 * @author Chenmin
	 * @param t
	 * @return Throwable的详细信息
	 * @return String
	*/
	public static String Throwable2String(Throwable t) {
		StringBuffer sb = new StringBuffer();
		for (StackTraceElement tt : t.getStackTrace()) {
			sb.append(tt.toString());
			sb.append("\r\n");
		}
		return sb.toString();
	}

}
