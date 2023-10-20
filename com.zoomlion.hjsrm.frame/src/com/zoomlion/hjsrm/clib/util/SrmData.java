package com.zoomlion.hjsrm.clib.util;

import java.lang.reflect.Method;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import com.zoomlion.hjsrm.core.common.Common;
import commonj.sdo.DataObject;

/**
 * **************************************************
 * 描    述：  数据组件类，提供实体转IData和IData转实体以及实体间数据同名属性对考功能
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmData {
	/**
	 * 方法描述: 将带有get方法的对象转换为IData数据
	 * @author bingyu
	 * @param entity
	 * @return
	 * @throws Exception 
	 * @return Map
	 */
	@SuppressWarnings("unchecked")
	public static Map ObjectToData(Object entity) throws Exception{
		Map data = new HashMap();
			Method[] methods = entity.getClass().getDeclaredMethods();
			for (int i = 0; i < methods.length; i++) {
				String methodName = methods[i].getName();
				if (methodName.startsWith("get")) {
					String paramName = methodName.substring(3, methodName.length());
					if(methods[i].invoke(entity,(Object[])null) == null){
						data.put(paramName.toLowerCase(), "");
					}else{
						data.put(paramName.toLowerCase(), String.valueOf(methods[i].invoke(entity,(Object[])null)));
					}
				}
			}
		return data;
	}
	
	/**
	 * 方法描述: 将实体对象转换为IData数据
	 * @author bingyu
	 * @param entity
	 * @return
	 * @throws Exception 
	 * @return Map
	 */
	@SuppressWarnings("unchecked")
	public static Map entityToData(DataObject entity) throws Exception{
		Map data = new HashMap();
		Method[] methods = entity.getClass().getDeclaredMethods();
		String realParamName = "";
		for (int i = 0; i < methods.length; i++) {
			String methodName = methods[i].getName();
			if (methodName.startsWith("get")) {
				realParamName = methodName.substring(3,4).toLowerCase() + methodName.substring(4, methodName.length());
				if(entity.get(realParamName) != null){
					data.put(realParamName.toLowerCase(),entity.getString(realParamName));
				}
			}
		}
		return data;
	}
	
	/**
	 * 方法描述: 将IData的数据转换为实体对象
	 * @author bingyu
	 * @param data
	 * @param entity
	 * @throws Exception 
	 * @return void
	 */
	public static  void dataToEntity(Map data, Object entity) throws Exception{
		Method[] methods = entity.getClass().getDeclaredMethods();
		for (int i = 0; i < methods.length; i++) {
			Method method = methods[i];
			String methodName = method.getName();
			if (methodName.startsWith("set")) {
				Class methodType = method.getParameterTypes()[0];
				Object[] params = new Object[1];
				String paramName = methodName.substring(3, methodName.length()).toLowerCase();
				Object paramValue = data.get(paramName);
				if (paramValue == null)
					continue;
				params[0] = paramValue;
				if (String.class.isAssignableFrom(methodType))
					params[0] = paramValue;
				else if (Date.class.isAssignableFrom(methodType))
					params[0] = Common.encodeTimestamp((String) paramValue);
				else if (Long.class.isAssignableFrom(methodType))
					params[0] = new Long(paramValue.toString());
				else if (Integer.class.isAssignableFrom(methodType))
					params[0] = new Integer(paramValue.toString());
				else if (Short.class.isAssignableFrom(methodType))
					params[0] = new Short(paramValue.toString());
				else if (Double.class.isAssignableFrom(methodType))
					params[0] = new Double(paramValue.toString());
				else if (Float.class.isAssignableFrom(methodType))
					params[0] = new Float(paramValue.toString());
				else if (Boolean.class.isAssignableFrom(methodType)) 
					params[0] = new Boolean(paramValue.toString());
				else if ("long".equals(methodType.getName()))
					params[0] = Long.valueOf(paramValue.toString()).longValue();
				else if ("int".equals(methodType.getName()))
					params[0] = Integer.valueOf(paramValue.toString()).intValue();
				else if ("double".equals(methodType.getName()))
					params[0] = Double.valueOf(paramValue.toString()).doubleValue();
				method.invoke(entity, params);
			}
		}
		return;
	}
	
	
	/**
	 * 方法描述: 将源实体中的同名属性中的值拷贝给目标实体
	 * @author bingyu
	 * @param entityF
	 * @param entityT
	 * @throws Exception 
	 * @return void
	 */
	public static  void entityToEntity(Object entityF, Object entityT) throws Exception{
		Method[] fMethods = entityF.getClass().getDeclaredMethods();
		Method[] tMethods = entityT.getClass().getDeclaredMethods();
		for (int i = 0; i < fMethods.length; i++) {
			Method fmethod = fMethods[i];
			String fmethodName = fmethod.getName();
			String paramName = "";
			Object paramValue = "";
			Class methodType = null;
			if (fmethodName.startsWith("get")) {
				paramName = fmethodName.substring(3, fmethodName.length());
				paramValue = fmethod.invoke(entityF, null);
			}
			if(paramValue == null || paramValue.equals(""))continue;
			
			Object[] params = new Object[1];
			for(int j=0;j<tMethods.length;j++){
				Method tmethod = tMethods[j];
				String tmethodName = tmethod.getName();
				if(tmethodName.equals("set"+paramName)){
					methodType = tmethod.getParameterTypes()[0];
					
					if (String.class.isAssignableFrom(methodType))
						params[0] = paramValue;
					else if (Date.class.isAssignableFrom(methodType))
						params[0] = paramValue;
					else if (Long.class.isAssignableFrom(methodType))
						params[0] = new Long(paramValue.toString());
					else if (Integer.class.isAssignableFrom(methodType))
						params[0] = new Integer(paramValue.toString());
					else if (Short.class.isAssignableFrom(methodType))
						params[0] = new Short(paramValue.toString());
					else if (Double.class.isAssignableFrom(methodType))
						params[0] = new Double(paramValue.toString());
					else if (Float.class.isAssignableFrom(methodType))
						params[0] = new Float(paramValue.toString());
					else if (Boolean.class.isAssignableFrom(methodType)) 
						params[0] = new Boolean(paramValue.toString());
					else if ("long".equals(methodType.getName()))
						params[0] = Long.valueOf(paramValue.toString()).longValue();
					else if ("int".equals(methodType.getName()))
						params[0] = Integer.valueOf(paramValue.toString()).intValue();
					else if ("double".equals(methodType.getName()))
						params[0] = Double.valueOf(paramValue.toString()).doubleValue();
					
					tmethod.invoke(entityT, params);
					
					break;
				}
			}
		}
	}
}
