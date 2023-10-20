package com.zoomlion.hjsrm.interfaces.common;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 * 
 * <pre>
 *           Title: 属性文件操作类
 *           Description: 程序功能的描述
 * </pre>
 * 
 * @author 肖斌
 * @version 1.0
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 * 
 */
public class Configuration {

	/**
	 * 
	 * 方法描述:获得properties对象
	 * 
	 * @author 肖斌
	 * @param filePath
	 * @return 描述******
	 * @return Properties
	 */
	public static Properties readProperties(String filePath) {
		Properties props = new Properties();
		try {
			InputStream in = new BufferedInputStream(new FileInputStream(
					filePath));
			props.load(in);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return props;
	}

	/**
	 * 
	 * 方法描述:根据key读取value
	 * 
	 * @author 肖斌
	 * @param filePath
	 * @param key
	 * @return 描述******
	 * @return String
	 */
	public static String readValue(String filePath, String key) {
		Properties props = null;
		try {
			props = readProperties(filePath);
			String value = props.getProperty(key);
			return value;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * 
	 * 方法描述:获得properties对象，并封装成Map对象
	 * 
	 * @author 肖斌
	 * @param filePath
	 * @return 描述******
	 * @return Properties
	 */
	public static Map<String, String> readProperties2Map(String filePath) {
		Map<String, String> map = new HashMap<String, String>();
		Properties props = null;
		try {
			props = readProperties(filePath);
			Enumeration en = props.propertyNames();
			while (en.hasMoreElements()) {
				String key = (String) en.nextElement();
				String Property = props.getProperty(key);
				map.put(key, Property);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}

	/**
	 * 
	 * 方法描述:单个键值对写入properties信息
	 * 
	 * @author 肖斌
	 * @param filePath
	 * @param parameterName
	 * @param parameterValue
	 *            描述******
	 * @return void
	 */
	public static void writeProperties(String filePath, String parameterName,
			String parameterValue) {
		Properties props = null;
		try {
			props = readProperties(filePath);
			OutputStream fos = new FileOutputStream(filePath);
			props.setProperty(parameterName, parameterValue);
			props.store(fos, "Update '" + parameterName + "' value");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 
	 * 方法描述:根据properties对象写入properties信息
	 * 
	 * @author 肖斌
	 * @param filePath
	 * @param props
	 *            描述******
	 * @return void
	 */
	public static void writeProperties(String filePath, Properties props) {
		try {
			OutputStream fos = new FileOutputStream(filePath);
			props.store(fos, "Update All Properties");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 
	 * 方法描述:根据key删除属性
	 * 
	 * @author 肖斌
	 * @param filePath
	 * @param parameterName
	 *            描述******
	 * @return void
	 */
	public static void deleteProperties(String filePath, String parameterName) {
		Properties props = null;
		try {
			props = readProperties(filePath);
			OutputStream fos = new FileOutputStream(filePath);
			props.remove(parameterName);
			props.store(fos, "Delete Properties '" + parameterName + "'");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 
	 * 方法描述:删除所有属性
	 * 
	 * @author 肖斌
	 * @param filePath
	 *            描述******
	 * @return void
	 */
	public static void deleteProperties(String filePath) {
		Properties props = null;
		try {
			props = readProperties(filePath);
			OutputStream fos = new FileOutputStream(filePath);
			props.clear();
			props.store(fos, "Delete All Properties");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		String path = Configuration.class.getClassLoader().getResource(
				"callCenterConfig.properties").getPath();
		String string = readValue(path, "F0001");
		System.out.println(string);
	}
}
