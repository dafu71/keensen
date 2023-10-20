package com.zoomlion.hjsrm.clib.handler;

import com.eos.common.interceptor.context.IContext;
import com.eos.sca.webservice.interceptor.AbstractWebServiceInInterceptor;
import com.eos.sca.webservice.interceptor.WebServiceInServiceContext;
/**
 * **************************************************
 * 描    述：  WebService拦截器工具类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class WsInInterceptor extends AbstractWebServiceInInterceptor {

	/**
	 * 方法描述: webservice调用后的处理
	 * @author bingyu
	 * @param context
	 * @return 
	 */
	public void doAfter(IContext context) {
		WebServiceInServiceContext wsContext = (WebServiceInServiceContext)context;
		System.out.println("OperationName:"+wsContext.getMessage().getOperationName());
	}
	
	/**
	 * 方法描述: webservice调用前的处理
	 * @author bingyu
	 * @param context
	 * @return 
	 */
	public void doBefore(IContext context){
		WebServiceInServiceContext wsContext = (WebServiceInServiceContext)context;
		System.out.println("Soapaction:" + wsContext.getMessage().getSoapaction());
	}
	
	/**
	 * 方法描述: webservice调用异常时的处理
	 * @author bingyu
	 * @param context
	 * @return 
	 */
	public void doException(IContext context) {
		WebServiceInServiceContext wsContext = (WebServiceInServiceContext)context;
		System.out.println(wsContext.getException());
		
	}
	
	/**
	 * 方法描述: webservice调用时的必须处理
	 * @author bingyu
	 * @param context
	 * @return 
	 */
	public void doFinally(IContext context) {
		//WebServiceInServiceContext wsContext = (WebServiceInServiceContext)context;
		//System.out.println("RemoteIP:" + wsContext.getMessage().getRemoteIP());
	}
	
	
}
