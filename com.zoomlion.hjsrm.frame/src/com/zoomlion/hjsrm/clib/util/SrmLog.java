package com.zoomlion.hjsrm.clib.util;

import com.eos.runtime.core.ApplicationContext;
import com.eos.runtime.core.TraceLoggerFactory;
import com.eos.data.datacontext.DataContextManager;
import com.eos.foundation.eoscommon.CommonUtil;

import org.apache.log4j.Appender;
import org.apache.log4j.Level;

import com.eos.system.logging.LogRepository;
import com.eos.system.logging.Logger;

/**
 * **************************************************
 * 描    述：  日志封装，不能继承LogUtil类，因为日志中打印出的父类就是封装类，而不是业务类了 日志组件类，提供了info、debug、warn、error四类方法
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class SrmLog {
	
	private static final String FQCN = SrmLog.class.getName();

	public static final String SRM_CUSTOM_LOG_FILENAME = "log4j-custom.xml";// 全局日志配置文件

	private static String DEFAULT_LOGGERTYPE = "custom";// 配置文件中默认的logger name

	private static LogRepository logRepository = LogRepository.create(ApplicationContext.getInstance().getWarRealPath() 
			+ SrmConfig.SRM_APP_CONFIG_FILEPATH + SRM_CUSTOM_LOG_FILENAME);

	/**
	 * 方法描述: 记录debug信息
	 * @author 侯杰
	 * @param msg 
	 * @return void
	 */
	public static void debug(String msg) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.DEBUG, msg, null);
		} else {
			log(Level.DEBUG, msg, null, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 记录debug信息
	 * @author 侯杰
	 * @param msg
	 * @param e 
	 * @return void
	 */
	public static void debug(String msg, Exception e) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.DEBUG, msg, e);
		} else {
			log(Level.DEBUG, msg, e, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 记录info信息
	 * @author 侯杰
	 * @param msg 
	 * @return void
	 */
	public static void info(String msg) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.INFO, msg, null);
		} else {
			log(Level.INFO, msg, null, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 记录info信息
	 * @author 侯杰
	 * @param msg
	 * @param e 
	 * @return void
	 */
	public static void info(String msg, Exception e) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.INFO, msg, e);
		} else {
			log(Level.INFO, msg, e, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 记录warn警告信息
	 * @author 侯杰
	 * @param msg 
	 * @return void
	 */
	public static void warn(String msg) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.WARN, msg, null);
		} else {
			log(Level.WARN, msg, null, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 记录warn警告信息
	 * @author 侯杰
	 * @param msg
	 * @param e 
	 * @return void
	 */
	public static void warn(String msg, Exception e) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.WARN, msg, e);
		} else {
			log(Level.WARN, msg, e, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 记录error出错信息
	 * @author 侯杰
	 * @param msg 
	 * @return void
	 */
	public static void error(String msg) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.ERROR, msg, null);
		} else {
			log(Level.ERROR, msg, null, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 记录error出错信息
	 * @author 侯杰
	 * @param msg
	 * @param e 
	 * @return void
	 */
	public static void error(String msg, Exception e) {
		String gloabflag = getGloabLogConfig();
		if (gloabflag != null && gloabflag.trim().equals("true")) {
			customLog(Level.ERROR, msg, e);
		} else {
			log(Level.ERROR, msg, e, (Object[]) null);
		}
	}

	/**
	 * 方法描述: 获取构件包日志记录器
	 * @author 侯杰
	 * @return 
	 * @return Logger
	 */
	private static Logger getCurrentLogger() {
		String loggerName = CommonUtil.getCurrentDataContextName();
		String contributionName = null;
		try {
			contributionName = CommonUtil.getCurrentContributionName();
		} catch (Throwable ignore) {
		}
		if (contributionName == null) {
			return null;
		}
		return TraceLoggerFactory.getContributionTraceLogger(contributionName, loggerName);
	}

	/**
	 * 方法描述: 记录日志
	 * @author 侯杰
	 * @param level
	 * @param message
	 * @param cause
	 * @param params 
	 * @return void
	 */
	private static void log(Level level, String message, Throwable cause, Object[] params) {
		Logger logger = getCurrentLogger();
		if (logger == null) {
			return;
		}
		if (logger.isLevelEnabled(level))
			logger.log(level, FQCN, message, params, cause);
	}
	
	/**
	 * ***************************************** 以下为custom自定义日志方法
	 * **********************************************************
	 * 方法写在SrmLog中，而不是单独封装一个类(如：CustomLogger类)，是为了在日志中显示类名时显示调用日志的父类名称，而不是显示SrmLog类名
	 */

	/**
	 * 方法描述: 获取自定义日志配置中(srmapp.xml)的gloabflag值
	 * @author 侯杰
	 * @return 
	 * @return String
	 */
	public static String getGloabLogConfig() {
		String cfg = null;
		try {
			cfg = SrmConfig.getAppConfigValue("srmlog", "custom", "gloabflag");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return cfg;
	}

	private static Logger getCustomLogger() {
		// 根据构件包名来获取Logger，配置文件(log4j-custom.xml)中如果配置了name=构件包名称的logger，则使用此配置，否则使用默认name=custom的logger
		Logger log = logRepository.getLogger(DEFAULT_LOGGERTYPE);
		/*String contributionName = DataContextManager.current().getContributionMetaData().getName();
		Logger log = logRepository.getLogger(contributionName);
		Appender[] append = log.getAllEffectiveAppenders();
		if (append == null || append.length <= 0) {
			log = logRepository.getLogger(DEFAULT_LOGGERTYPE);
		}*/
		return log;
	}

	private static void customLog(Level level, String message, Throwable t) {
		Logger log = getCustomLogger();
		log.log(level, FQCN, message, t);
	}
}
