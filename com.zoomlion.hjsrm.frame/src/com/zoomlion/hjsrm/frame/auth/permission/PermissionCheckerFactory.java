package com.zoomlion.hjsrm.frame.auth.permission;

import org.apache.commons.pool.BasePoolableObjectFactory;
import org.apache.commons.pool.ObjectPool;
import org.apache.commons.pool.impl.StackObjectPool;

import com.eos.data.datacontext.IUserObject;
import com.eos.runtime.core.TraceLoggerFactory;
import com.eos.system.logging.Logger;

/**
 * ************************************************** 
 * 描 述： 权限校验者创建工厂类
 * @author bingyu
 * @version 1.0
 * @see HISTORY 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class PermissionCheckerFactory {

	private static boolean COMMONS_POOL_ENABLED = true;

	private static final Logger logger = TraceLoggerFactory.getLogger(PermissionCheckerFactory.class);

	private static PermissionCheckerFactory _instance = new PermissionCheckerFactory();

	private ObjectPool _pool;
	
	private PermissionCheckerFactory() {
		_pool = new StackObjectPool(new Factory());
	}
	
	/**
	 * 方法描述: 创建权限校验实例
	 * @author 陈今伟
	 * @param user
	 * @param checkGuest
	 * @return
	 * @throws Exception 
	 * @return IPermissionChecker
	 */
	public static IPermissionChecker create(IUserObject user, boolean checkGuest)throws Exception {
		IPermissionChecker permissionChecker = null;
		// 这里增加实例池的判断，先出实例池获取PermissionChecker，如果不存在则创建实例
		// 否则直接从实例池获取该对象，并初始化init，以提高性能
		permissionChecker = null;
		if (COMMONS_POOL_ENABLED) {
			permissionChecker = (IPermissionChecker) _instance._pool
					.borrowObject();
		} else {
			permissionChecker = new DefaultPermissionChecker();
		}
		permissionChecker.init(user, checkGuest);
		PermissionThreadLocal.setPermissionChecker(permissionChecker);
		return permissionChecker;
	}

	/**
	 * 方法描述: 回收权限校验实例
	 * @author 陈今伟
	 * @param permissionChecker
	 * @throws Exception 
	 * @return void
	 */
	public static void recycle(IPermissionChecker permissionChecker)throws Exception {
		if (COMMONS_POOL_ENABLED) {
			if (permissionChecker == null) {
				return;
			}
			logger.debug("Recycling:\t" + _instance._pool.getNumIdle() + "\t" + _instance._pool.getNumActive());
			_instance._pool.returnObject(permissionChecker);
		} else if (permissionChecker != null) {
			permissionChecker.recycle();
		}
	}

	private class Factory extends BasePoolableObjectFactory {
		public Object makeObject() {
			try {
				return new DefaultPermissionChecker();
			} catch (Exception e) {
				logger.error(e);
				return null;
			}
		}

		public void passivateObject(Object obj) {
			IPermissionChecker permissionChecker = (IPermissionChecker) obj;
			permissionChecker.recycle();
		}
	}
}
