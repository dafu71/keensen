package com.zoomlion.hjsrm.clib.util;

import com.eos.foundation.eoscommon.ServiceUtil;
/**
 * **************************************************
 * 描    述：  webService服务类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class SrmWs {
	
	/**
	 * 方法描述: 调用webService服务，可以是服务的webService绑定
	 * @author 侯杰
	 * @param wsdlElement 表示希望调用的具体wsdl的描述，由wsdl的命名空间、服务的名字、绑定的名字三部分组成；格式组成为：wsdl的targetNamespace+#wsdl.port(service name/port name)。 
	 * 如：http://www.primeton.com/com.primeton.eos.foundation.example/com/primeton/eos/foundation/example/Accout#wsdl.port(Accout/AccoutSOAP) 
	 * @param operationName 目标操作名称
	 * @param args 服务操作的实参，对于无参数的webservice调用，参数设置为null；对于有一个参数但是参数为null，参数设置为_eosNullObject字符串
	 * @return
	 * @throws Exception 
	 * @return Object[] 目标服务操作的返回值
	 */
	public static Object[] callWebService(String wsdlElement, String operationName, Object[] args) throws Exception{
		return ServiceUtil.callWebService(wsdlElement, operationName, args);
	}
}
