package com.zoomlion.hjsrm.frame.auth.handler;


import com.eos.access.authorization.CheckedResult;
import com.eos.access.authorization.IAccessedResource;
import com.eos.access.authorization.IAccessedResourceCheckedHandler;
import com.eos.data.datacontext.IUserObject;
import com.eos.foundation.eoscommon.LogUtil;
import com.zoomlion.hjsrm.frame.auth.util.PermissionUtil;
/**
 * **************************************************
 * 描    述：  权限校验处理器，实现IAccessedResourceCheckedHandler接口，对调用所有资源进行权限验证
 *   		 如果配了权限拦截器的话，会在litener中注册此handler,
 *   		 eos65资源的filter会调用权限拦截器的check方法
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class PermissionCheckedHandler implements IAccessedResourceCheckedHandler {

	private static final long serialVersionUID = 3655993611723067375L;

	public CheckedResult check(IAccessedResource accessedResource, IUserObject userObject) {
		String url = accessedResource.getResourceURI();
		if(url!=null&&url.substring(url.length()-4).equals(".jsp")){
			return CheckedResult.PASS;
		}
		try {			
			LogUtil.logDebug("权限检验:uri={0}", null, new Object[]{accessedResource.getResourceURI()});
			CheckedResult rtn = PermissionUtil.hasPermission(accessedResource, userObject);
			return rtn;
		} catch (Exception e) {
			LogUtil.logError("权限检验出错", e, (Object) null);
			return CheckedResult.REJECT;
		}
	}
}
